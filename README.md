# AI带货视频故事板工具 · 部署指南

## 项目结构
```
storyboard-tool/
├── api/
│   └── generate.js      ← Vercel 后端接口（代理 Anthropic API）
├── public/
│   └── index.html       ← 工具主页面
├── vercel.json          ← Vercel 路由配置
└── README.md
```

## 部署步骤（约5分钟）

### 第一步：上传到 GitHub
1. 打开 https://github.com → 登录
2. 右上角「+」→「New repository」
3. 仓库名填：`storyboard-tool`，选 Private，点「Create」
4. 把这个文件夹里的所有文件上传（拖拽或用 git）

### 第二步：连接 Vercel
1. 打开 https://vercel.com → 用 GitHub 账号登录
2. 点「Add New Project」→ 选择刚创建的 `storyboard-tool` 仓库
3. 点「Import」→ 框架选「Other」→ 直接点「Deploy」

### 第三步：配置 API Key（关键）
1. 部署完成后，进入项目 → 点「Settings」→「Environment Variables」
2. 添加：
   - Name：`ANTHROPIC_API_KEY`
   - Value：粘贴你的 Key（sk-ant-api03-…）
3. 点「Save」

### 第四步：重新部署生效
1. 回到「Deployments」标签
2. 点最新部署右边「…」→「Redeploy」
3. 等待30秒，部署完成

### 访问
Vercel 会给你一个域名，类似：
`https://storyboard-tool-xxx.vercel.app`

之后访问这个地址就能用了，Key 在服务器端，不会暴露。

---

## API Key 获取
1. 打开 https://console.anthropic.com
2. 左侧「API Keys」→「Create Key」
3. 充值最低 $5（每次填充成本 < $0.001，基本用不完）
