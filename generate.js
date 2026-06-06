export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { product } = req.body || {};
  if (!product || !String(product).trim()) {
    return res.status(400).json({ error: '缺少产品名称' });
  }

  const prompt = `你是一名专业的抖音带货短视频策划师，擅长把普通产品拆成可拍摄、可转化、适合 Image2 故事板和 Seedance 2.0 的短视频方案。

请针对产品「${String(product).trim()}」生成一组自动填充字段。

要求：
1. 只返回严格 JSON，不要 Markdown，不要解释。
2. 内容要适合真实生活化带货短视频。
3. 文案要具体、自然、有转化感，不要空泛。
4. 人物、产品、场景描述要能用于后续分镜一致性锁定。

JSON 格式如下：
{
  "usp": "核心卖点，10字以内",
  "target": "目标人群，包含年龄/性别/使用场景",
  "host": "主讲人设定，包含年龄/外貌/风格",
  "scene": "推荐拍摄场景",
  "copy1": "第1段开场口播文案，30字左右，用痛点或反常识开场",
  "copy2": "第2段功能验证口播文案，30字左右，强调真实使用感",
  "copy3": "第3段转化收尾口播文案，30字左右，带行动引导",
  "person": "人物外貌锁定描述",
  "goods": "产品外观特征锁定描述"
}`;

  try {
    const deepseekKey = process.env.DEEPSEEK_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    let text = '';

    if (deepseekKey) {
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${deepseekKey}`,
        },
        body: JSON.stringify({
          model: process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash',
          temperature: 0.7,
          max_tokens: 900,
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'system',
              content: '你只输出严格 JSON，不输出 Markdown、解释或额外文字。',
            },
            { role: 'user', content: prompt },
          ],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({
          error: data.error?.message || 'DeepSeek API 请求失败',
        });
      }
      text = data.choices?.[0]?.message?.content || '';
    } else if (anthropicKey) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 900,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({
          error: data.error?.message || 'Anthropic API 请求失败',
        });
      }
      text = (data.content || []).map((part) => part.text || '').join('');
    } else {
      return res.status(500).json({
        error: '服务器未配置 DEEPSEEK_API_KEY 或 ANTHROPIC_API_KEY',
      });
    }

    const clean = text.replace(/```json|```/g, '').trim();
    return res.status(200).json(JSON.parse(clean));
  } catch (error) {
    return res.status(500).json({ error: error.message || '生成失败' });
  }
}
