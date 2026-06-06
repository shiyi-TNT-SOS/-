export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { product } = req.body;
  if (!product) return res.status(400).json({ error: '缺少产品名称' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: '服务器未配置 API Key' });

  const prompt = `你是专业短视频带货策划师。针对产品「${product}」，请严格返回如下JSON，不要有任何其他文字：
{"usp":"核心卖点10字以内","target":"目标人群","host":"主讲人设定年龄外貌风格","scene":"推荐拍摄场景","copy1":"第1段开场口播文案30字左右以痛点开头","copy2":"第2段功能验证口播文案30字左右","copy3":"第3段转化收尾口播文案30字左右带行动引导","person":"人物外貌锁定描述","goods":"产品外观特征描述"}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || 'API 错误' });

    const text = data.content.map(c => c.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const json = JSON.parse(clean);
    return res.status(200).json(json);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
