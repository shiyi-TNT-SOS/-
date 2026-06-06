const SUPPORTED_PLATFORMS = [
  { name: '抖音', patterns: ['douyin.com'] },
  { name: '小红书', patterns: ['xiaohongshu.com', 'xhslink.com'] },
  { name: '视频号', patterns: ['weixin.qq.com', 'channels.weixin.qq.com'] },
  { name: '快手', patterns: ['kuaishou.com', 'gifshow.com'] },
];

function detectPlatform(rawUrl) {
  const lower = rawUrl.toLowerCase();
  if (/\.(mp4|mov)(\?|#|$)/i.test(rawUrl)) return '直连视频';
  const found = SUPPORTED_PLATFORMS.find((item) =>
    item.patterns.some((pattern) => lower.includes(pattern)),
  );
  return found?.name || '未知链接';
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function getOneApiEndpoint(platform) {
  const base = (process.env.VIDEO_PARSER_API_URL || 'https://api.getoneapi.com').replace(/\/$/, '');
  const endpoints = {
    抖音: '/api/douyin/fetch_video_detail',
    快手: '/api/kuaishou/fetch_video_detail',
    小红书: '/api/xiaohongshu-v2/fetch_video_note_detail',
    视频号: '/api/wechat-channels/fetch_video_detail',
  };
  return endpoints[platform] ? `${base}${endpoints[platform]}` : null;
}

function buildOneApiBody(url, platform) {
  if (platform === '抖音') return { aweme_id: '', share_text: url };
  if (platform === '快手') return { share_text: url };
  if (platform === '小红书') return { note_id: '', share_text: url };

  if (platform === '视频号') {
    const parsed = new URL(url);
    return {
      id: parsed.searchParams.get('id') || parsed.searchParams.get('feedid') || '',
      exportId: parsed.searchParams.get('exportid') || parsed.searchParams.get('exportId') || '',
    };
  }

  return { share_text: url };
}

function findPlayableUrl(value) {
  if (!value) return null;
  if (typeof value === 'string') {
    return /^https?:\/\//i.test(value) && /\.(mp4|mov)(\?|#|$)/i.test(value) ? value : null;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findPlayableUrl(item);
      if (found) return found;
    }
    return null;
  }
  if (typeof value === 'object') {
    const priorityKeys = [
      'playableUrl',
      'videoUrl',
      'video_url',
      'url',
      'play_url',
      'download_url',
      'wm_video_url',
      'nwm_video_url',
      'origin_video_url',
    ];
    for (const key of priorityKeys) {
      const found = findPlayableUrl(value[key]);
      if (found) return found;
    }
    for (const item of Object.values(value)) {
      const found = findPlayableUrl(item);
      if (found) return found;
    }
  }
  return null;
}

async function callOneApi(url, platform) {
  const endpoint = getOneApiEndpoint(platform);
  const apiKey = process.env.VIDEO_PARSER_API_KEY;
  if (!endpoint || !apiKey) return null;

  if (platform === '视频号') {
    const body = buildOneApiBody(url, platform);
    if (!body.id) {
      return {
        code: 0,
        message: '视频号接口需要视频 id。普通分享链接未必能直接提取 id，建议先上传原视频或换用能解析分享链接的服务。',
      };
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(buildOneApiBody(url, platform)),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || `OneAPI 返回 ${response.status}`);
  return data;
}

async function callExternalParser(url, platform) {
  const provider = (process.env.VIDEO_PARSER_PROVIDER || '').toLowerCase();
  const parserUrl = process.env.VIDEO_PARSER_API_URL || '';
  if (provider === 'oneapi' || parserUrl.includes('getoneapi.com')) {
    return callOneApi(url, platform);
  }

  if (!parserUrl) return null;

  const response = await fetch(parserUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.VIDEO_PARSER_API_KEY ? { 'X-API-Key': process.env.VIDEO_PARSER_API_KEY } : {}),
    },
    body: JSON.stringify({ url }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `解析服务返回 ${response.status}`);
  }
  return data;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body || {};
  if (!url || !isHttpUrl(url)) {
    return res.status(400).json({ error: '请提供完整的视频链接' });
  }

  const platform = detectPlatform(url);

  try {
    if (platform === '直连视频') {
      const head = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
      });
      const contentType = head.headers.get('content-type') || '';
      const contentLength = head.headers.get('content-length');
      const mayPlay = head.ok && /video|octet-stream|quicktime/i.test(contentType);

      return res.status(200).json({
        status: mayPlay ? 'playable' : 'check_failed',
        platform,
        url,
        playableUrl: mayPlay ? url : null,
        contentType,
        contentLength,
        message: mayPlay
          ? '直连视频可由浏览器尝试播放'
          : '链接存在，但未返回明确的视频文件类型',
      });
    }

    const parsed = await callExternalParser(url, platform);
    if (parsed) {
      const playableUrl =
        findPlayableUrl(parsed) ||
        parsed.videoUrl ||
        parsed.video_url ||
        parsed.playableUrl ||
        parsed.video_urls?.[0] ||
        null;

      return res.status(200).json({
        status: parsed.success === false || parsed.code === 0 ? 'parse_failed' : 'parsed',
        platform,
        sourceUrl: url,
        playableUrl,
        videoUrl: playableUrl,
        title: parsed.title,
        author: parsed.author,
        cover: parsed.cover || parsed.cover_url,
        message: parsed.message || (playableUrl ? '解析成功' : '解析完成，但响应中没有找到可直接播放的视频地址'),
        ...parsed,
      });
    }

    return res.status(200).json({
      status: 'needs_parser',
      platform,
      sourceUrl: url,
      message:
        '已识别平台链接。此类平台通常有登录、跳转、反盗链或风控限制，需要配置 VIDEO_PARSER_API_URL 后端解析服务才能稳定提取视频。',
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || '解析失败',
      platform,
    });
  }
}
