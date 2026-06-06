<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AI带货视频故事板工具</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080b10;--bg2:#10151c;--bg3:#161c25;--bg4:#1d2632;
  --panel:#111821;--panel2:#151d27;
  --border:#273241;--border2:#374659;
  --text:#eef5ff;--text2:#a8b4c4;--text3:#697789;
  --cyan:#24d3c0;--cyan2:#0f8f86;--cyan-bg:#0b2b2d;
  --purple:#8f7cff;--purple2:#6d5be0;--purple-bg:#211c3e;--purple-light:#ede9ff;
  --green:#37d98a;--green-bg:#0d2a20;--green1:#dff8eb;--green8:#0d5532;
  --blue1:#e3f1ff;--blue8:#0a4c7d;
  --amber:#ffc45c;--amber1:#fff1d5;--amber8:#725012;
  --red:#ff6b6b;--red-bg:#341717;
  --radius:8px;--radius-lg:8px;
  --shadow:0 20px 60px rgba(0,0,0,.35);
  --font:-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft YaHei',sans-serif;
  --mono:'SF Mono','Fira Code','Consolas',monospace;
}
body{
  background:
    radial-gradient(ellipse at 50% -12%,rgba(38,92,140,.32),transparent 48%),
    radial-gradient(circle at 82% 12%,rgba(36,211,192,.12),transparent 26%),
    linear-gradient(180deg,#090d14 0%,#0b1017 42%,#07090d 100%),
    var(--bg);
  color:var(--text);font-family:var(--font);line-height:1.6;min-height:100vh;position:relative;overflow-x:hidden;
}
body::before{content:"";position:fixed;left:50%;top:-220px;width:760px;height:460px;transform:translateX(-50%);pointer-events:none;background:radial-gradient(ellipse at center,rgba(36,211,192,.2),rgba(143,124,255,.08) 38%,transparent 70%);filter:blur(18px);opacity:.8}
body::after{content:"";position:fixed;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(255,255,255,.035),transparent 16%,transparent 82%,rgba(255,255,255,.025));opacity:.55}
.wrap{max-width:1040px;margin:0 auto;padding:2.2rem 1.4rem 4rem;position:relative}
.wrap::before{content:"";position:absolute;top:28px;right:18px;width:190px;height:190px;border:1px solid rgba(255,255,255,.08);border-radius:50%;pointer-events:none}
.wrap::after{content:"";position:absolute;top:62px;right:66px;width:92px;height:92px;border:1px solid rgba(36,211,192,.18);border-radius:50%;pointer-events:none}
.header{position:relative;display:flex;align-items:center;gap:18px;margin-bottom:1.55rem;padding:24px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius);background:linear-gradient(135deg,rgba(18,25,34,.92),rgba(11,16,24,.88));box-shadow:0 26px 70px rgba(0,0,0,.38);overflow:hidden}
.header::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.06),transparent 28%,rgba(36,211,192,.08));opacity:.9;pointer-events:none}
.header::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:linear-gradient(90deg,var(--cyan),transparent 48%,var(--purple))}
.header-icon{position:relative;z-index:1;width:76px;height:76px;background:linear-gradient(135deg,#061b20,#28215a);border:1px solid rgba(36,211,192,.42);border-radius:var(--radius);display:flex;align-items:center;justify-content:center;color:#dffff9;box-shadow:0 0 0 7px rgba(36,211,192,.06),0 0 42px rgba(36,211,192,.22);font-size:15px;font-weight:900;line-height:1.05;text-align:center;letter-spacing:.02em}
.header-icon span{display:block}
.header-main{position:relative;z-index:1;flex:1;min-width:0}
.header h1{font-size:26px;font-weight:900;color:var(--text);line-height:1.18;text-shadow:0 0 24px rgba(36,211,192,.16)}
.header p{font-size:14px;color:var(--text2);margin-top:5px}
.hero-kpis{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.hero-kpis span{font-size:12px;color:#cffff8;border:1px solid rgba(36,211,192,.28);background:rgba(36,211,192,.09);border-radius:999px;padding:5px 10px;font-weight:700}
.nav{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:1.35rem}
.ni{min-height:70px;padding:12px 8px;text-align:center;cursor:pointer;font-size:13px;color:var(--text2);border:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.018));border-radius:var(--radius);transition:transform .16s,border-color .16s,background .16s;color .16s}
.ni:hover{transform:translateY(-1px);border-color:var(--border2)}
.ni.active{background:linear-gradient(135deg,rgba(36,211,192,.15),rgba(143,124,255,.14));border-color:rgba(36,211,192,.55);color:var(--text);box-shadow:0 12px 32px rgba(0,0,0,.22)}
.ni .nn{width:24px;height:24px;border-radius:50%;border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--text2);background:rgba(0,0,0,.18)}
.ni.active .nn{background:var(--cyan);border-color:var(--cyan);color:#001716}
.ni.done .nn{background:var(--green);border-color:var(--green);color:#03140b}
.panel{display:none}.panel.active{display:block}
.prog-top{display:flex;justify-content:space-between;margin-bottom:8px}
.prog-pct{font-size:13px;font-weight:700;color:var(--cyan)}
.prog-txt{font-size:13px;color:var(--text3)}
.prog-bar{height:6px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;margin-bottom:1.45rem;border:1px solid rgba(255,255,255,.06)}
.prog-fill{height:100%;background:linear-gradient(90deg,var(--cyan),var(--purple));border-radius:99px;transition:width .4s}
.card{background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025));border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.25rem;margin-bottom:14px;box-shadow:var(--shadow)}
.card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.card-title{font-size:15px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:8px}
.card-title svg{color:var(--cyan)}
.r2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.r3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
.field{margin-bottom:10px}
.field label{display:block;font-size:12px;color:var(--text2);margin-bottom:5px;font-weight:600}
input,select,textarea{width:100%;font-size:14px;border:1px solid var(--border2);border-radius:var(--radius);background:rgba(6,10,15,.58);color:var(--text);padding:10px 12px;font-family:var(--font);transition:border-color .15s,box-shadow .15s,background .15s;outline:none}
input::placeholder,textarea::placeholder{color:#748295}
input:focus,select:focus,textarea:focus{border-color:var(--cyan);box-shadow:0 0 0 3px rgba(36,211,192,.14);background:rgba(9,15,22,.9)}
input.ok{border-color:var(--green)!important;background:var(--green-bg)}
select option{background:var(--bg3)}
textarea{resize:vertical;min-height:76px;line-height:1.6}
.ai-row{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end;margin-bottom:12px}
.ai-row>div{min-width:0}
.ai-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-size:13px;font-weight:700;padding:10px 18px;border-radius:var(--radius);border:1px solid rgba(36,211,192,.6);color:#06201f;background:linear-gradient(135deg,var(--cyan),#86f0df);cursor:pointer;transition:transform .15s,filter .15s;white-space:nowrap;height:42px;flex-shrink:0}
.ai-btn:hover{transform:translateY(-1px);filter:brightness(1.04)}
.ai-btn:disabled{opacity:.45;cursor:not-allowed;transform:none}
@keyframes spin{to{transform:rotate(360deg)}}
.spin{display:inline-block;animation:spin .8s linear infinite}
.status{display:none;align-items:center;gap:8px;font-size:13px;padding:9px 12px;border-radius:var(--radius);margin-bottom:12px}
.status.show{display:flex}
.status.loading{background:var(--cyan-bg);color:#9ff7ed;border:1px solid rgba(36,211,192,.34)}
.status.done{background:var(--green-bg);color:#8ff0bd;border:1px solid rgba(55,217,138,.34)}
.status.err{background:var(--red-bg);color:#ffb3b3;border:1px solid rgba(255,107,107,.35)}
.tag-group{display:flex;flex-wrap:wrap;gap:7px;margin-top:5px}
.tag{font-size:13px;padding:6px 11px;border-radius:999px;border:1px solid var(--border2);color:var(--text2);background:rgba(255,255,255,.035);cursor:pointer;transition:all .15s;user-select:none}
.tag:hover{border-color:rgba(36,211,192,.5);color:var(--text)}
.tag.on{border-color:rgba(36,211,192,.75);color:#c8fff7;background:rgba(36,211,192,.12)}
.seg-block{border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:12px;background:rgba(255,255,255,.02);box-shadow:0 12px 36px rgba(0,0,0,.22)}
.seg-bar{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:linear-gradient(90deg,rgba(255,255,255,.055),rgba(255,255,255,.02));cursor:pointer;user-select:none}
.seg-bl{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.seg-pill{font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px}
.s1p{background:var(--green1);color:var(--green8)}
.s2p{background:var(--blue1);color:var(--blue8)}
.s3p{background:var(--purple-light);color:var(--purple2)}
.seg-name{font-size:14px;font-weight:700;color:var(--text)}
.seg-time{font-size:12px;color:var(--text3)}
.seg-body{padding:16px;background:rgba(10,14,20,.64)}
.shot-row{display:grid;grid-template-columns:repeat(8,1fr);gap:6px;margin-bottom:14px}
.shot{border:1px solid var(--border);border-radius:var(--radius);aspect-ratio:9/16;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02));padding:4px;position:relative;min-height:82px}
.shot:hover{border-color:var(--border2);transform:translateY(-1px)}
.shot.sel{border-color:var(--cyan);background:rgba(36,211,192,.11)}
.shot .sn{position:absolute;top:4px;left:5px;font-size:9px;color:var(--text3)}
.shot .st{font-size:10px;text-align:center;color:var(--text2);line-height:1.35}
.shot.sel .st{color:#c8fff7}
.d3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px}
.dc{background:rgba(255,255,255,.035);border-radius:var(--radius);padding:9px 10px;border:1px solid var(--border)}
.dc label{font-size:11px;color:var(--text2);display:block;margin-bottom:5px;font-weight:600}
.dc input{background:rgba(4,8,12,.54);font-size:13px;padding:7px 9px}
.timeline{display:flex;height:38px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);margin-bottom:7px;background:var(--bg3)}
.tl1,.tl2,.tl3{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800}
.tl1{background:linear-gradient(90deg,#dff8eb,#b9f1d1);color:var(--green8);flex:12}
.tl2{background:linear-gradient(90deg,#e3f1ff,#cbe7ff);color:var(--blue8);flex:12;border-left:1px solid rgba(8,11,16,.18)}
.tl3{background:linear-gradient(90deg,#ede9ff,#d8d0ff);color:var(--purple2);flex:11;border-left:1px solid rgba(8,11,16,.18)}
.tl-ticks{display:flex;justify-content:space-between;font-size:11px;color:var(--text3);margin-bottom:14px;padding:0 2px}
.out-box{background:#071018;border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;font-size:13px;color:var(--text2);line-height:1.85;margin-top:10px;white-space:pre-wrap;font-family:var(--mono);min-height:130px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.02)}
.out-box.has{color:var(--text)}
.btn-row{display:flex;gap:10px;margin-top:12px}
.btn-p{flex:1;padding:11px 14px;font-size:14px;font-weight:800;border-radius:var(--radius);cursor:pointer;background:linear-gradient(135deg,var(--purple),var(--cyan));color:#fff;border:none;display:flex;align-items:center;justify-content:center;gap:7px;transition:transform .15s,filter .15s;box-shadow:0 14px 30px rgba(36,211,192,.14)}
.btn-p:hover{filter:brightness(1.05);transform:translateY(-1px)}.btn-p:active{transform:scale(.99)}
.btn-s{padding:10px 14px;font-size:14px;border-radius:var(--radius);cursor:pointer;background:rgba(255,255,255,.035);color:var(--text);border:1px solid var(--border2);display:flex;align-items:center;gap:6px;transition:all .15s;white-space:nowrap}
.btn-s:hover{background:rgba(255,255,255,.07);border-color:var(--border2)}
.copy-btn{padding:9px 15px;font-size:13px;border-radius:var(--radius);cursor:pointer;background:rgba(255,255,255,.035);color:var(--text2);border:1px solid var(--border);display:flex;align-items:center;gap:5px;transition:all .15s}
.copy-btn:hover{border-color:var(--cyan);color:var(--text)}
.copy-btn.copied{border-color:var(--green);color:#8ff0bd}
.nav-foot{display:flex;justify-content:space-between;align-items:center;margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.08)}
.metric-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}
.metric{background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.025));border:1px solid var(--border);border-radius:var(--radius);padding:12px;text-align:center}
.metric .mv{font-size:24px;font-weight:800;color:var(--text)}
.metric .ml{font-size:12px;color:var(--text3);margin-top:2px}
.checklist{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ci{display:flex;align-items:center;gap:9px;padding:10px 12px;border-radius:var(--radius);background:rgba(255,255,255,.035);border:1px solid var(--border)}
.ck{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;font-weight:800}
.ck.ok{background:var(--green-bg);color:#8ff0bd;border:1px solid rgba(55,217,138,.42)}
.ck.no{background:rgba(255,255,255,.035);border:1px solid var(--border);color:var(--text3)}
.tip{display:flex;align-items:flex-start;gap:8px;padding:10px 12px;background:linear-gradient(90deg,rgba(36,211,192,.11),rgba(143,124,255,.07));border-left:3px solid var(--cyan);margin-bottom:12px;border-radius:0 var(--radius) var(--radius) 0}
.tip span{font-size:13px;color:var(--text2);line-height:1.65}
.video-ingest{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0 14px}
.upload-box{position:relative;min-height:116px;border:1px dashed rgba(36,211,192,.45);border-radius:var(--radius);background:linear-gradient(135deg,rgba(36,211,192,.08),rgba(143,124,255,.06));display:flex;align-items:center;justify-content:center;padding:14px;text-align:center;overflow:hidden}
.upload-box input{position:absolute;inset:0;opacity:0;cursor:pointer}
.upload-box strong{display:block;font-size:14px;color:var(--text);margin-bottom:4px}
.upload-box span{display:block;font-size:12px;color:var(--text3)}
.link-box{min-height:116px;border:1px solid var(--border);border-radius:var(--radius);background:rgba(255,255,255,.03);padding:12px}
.link-row{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}
.mini-btn{height:40px;padding:0 14px;border-radius:var(--radius);border:1px solid rgba(36,211,192,.55);background:rgba(36,211,192,.12);color:#cffff8;font-size:13px;font-weight:800;cursor:pointer}
.mini-btn:hover{background:rgba(36,211,192,.18)}
.video-state{display:none;border:1px solid var(--border);border-radius:var(--radius);background:#071018;margin-top:10px;padding:10px 12px;color:var(--text2);font-size:13px}
.video-state.show{display:block}
.video-state.ok{border-color:rgba(55,217,138,.38);background:rgba(13,42,32,.62);color:#baf6d4}
.video-state.warn{border-color:rgba(255,196,92,.36);background:rgba(55,38,13,.55);color:#ffe0a2}
.video-preview{display:none;margin-top:10px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);background:#05080c}
.video-preview.show{display:block}
.video-preview video{display:block;width:100%;max-height:320px;background:#000}
@media (max-width:760px){
  .wrap{padding:1.2rem .9rem 3rem}
  .header{align-items:flex-start;padding:18px;gap:12px}
  .header-icon{width:58px;height:58px;font-size:12px}
  .header h1{font-size:20px}
  .hero-kpis span{font-size:11px}
  .nav{grid-template-columns:repeat(2,1fr)}
  .r2,.r3,.d3,.metric-row,.checklist{grid-template-columns:1fr}
  .ai-row{grid-template-columns:1fr}
  .ai-btn,.btn-p{width:100%}
  .shot-row{grid-template-columns:repeat(4,1fr)}
  .nav-foot{gap:10px}
  .video-ingest{grid-template-columns:1fr}
  .link-row{grid-template-columns:1fr}
}
</style>
</head>
<body>
<div class="wrap">

<div class="header">
  <div class="header-icon">
    <span>十一<br>AGI</span>
  </div>
  <div class="header-main">
    <h1>AI带货视频故事板生成工具</h1>
    <p>故事板 + Seedance 2.0 · 人货场动作运镜节奏全锁定</p>
    <div class="hero-kpis">
      <span>AGI Storyboard Engine</span>
      <span>Seedance Ready</span>
      <span>六维一致性锁定</span>
      <span>24 镜头编排</span>
    </div>
  </div>
</div>

<div class="prog-top">
  <span class="prog-pct" id="pct">完成度 0%</span>
  <span class="prog-txt" id="steplbl">第 1 步，共 4 步</span>
</div>
<div class="prog-bar"><div class="prog-fill" id="pfill" style="width:0%"></div></div>

<div class="nav">
  <div class="ni active" onclick="goStep(0)"><div class="nn" id="nn0">1</div><span>产品信息</span></div>
  <div class="ni" onclick="goStep(1)"><div class="nn" id="nn1">2</div><span>六维锁定</span></div>
  <div class="ni" onclick="goStep(2)"><div class="nn" id="nn2">3</div><span>故事板</span></div>
  <div class="ni" onclick="goStep(3)"><div class="nn" id="nn3">4</div><span>提示词</span></div>
</div>

<div class="panel active" id="p0">
  <div class="card">
    <div class="card-head">
      <div class="card-title">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        产品信息
      </div>
    </div>
    <div class="tip"><span>输入产品名称，点击「AI 一键填充」，自动生成所有字段建议，无次数限制</span></div>
    <div class="ai-row">
      <div class="field" style="margin-bottom:0">
        <label>主推产品名称</label>
        <input id="f_product" placeholder="例：防晒衣、家务手套、颈部按摩仪…" oninput="updateProg()" />
      </div>
      <button class="ai-btn" id="ai_btn" onclick="doFill()">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/></svg>
        AI 一键填充
      </button>
    </div>
    <div class="status" id="ai_status">
      <span class="spin" id="ai_icon">↻</span>
      <span id="ai_msg"></span>
    </div>
    <div class="r3" style="margin-top:8px">
      <div class="field"><label>核心卖点</label><input id="f_usp" placeholder="10字以内" oninput="updateProg()" /></div>
      <div class="field"><label>目标人群</label><input id="f_target" placeholder="年龄/性别/场景" oninput="updateProg()" /></div>
      <div class="field"><label>主讲人设定</label><input id="f_host" placeholder="年龄/外貌/风格" oninput="updateProg()" /></div>
    </div>
    <div class="r3">
      <div class="field"><label>推荐拍摄场景</label><input id="f_scene" placeholder="户外/室内/具体场景" oninput="updateProg()" /></div>
      <div class="field"><label>视频时长</label>
        <select id="f_dur"><option>约30秒</option><option selected>约35秒</option><option>约45秒</option><option>约60秒</option></select>
      </div>
      <div class="field"><label>拍摄风格</label>
        <select id="f_style"><option selected>真实生活化</option><option>精致轻奢</option><option>活泼可爱</option><option>专业测评</option></select>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-title" style="margin-bottom:10px">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
      对标视频拆解维度
    </div>
    <div class="tag-group">
      <span class="tag on" onclick="this.classList.toggle('on')">前3秒怎么抓人</span>
      <span class="tag on" onclick="this.classList.toggle('on')">中间段产品展示</span>
      <span class="tag" onclick="this.classList.toggle('on')">镜头怎么切</span>
      <span class="tag" onclick="this.classList.toggle('on')">人物怎么动</span>
      <span class="tag on" onclick="this.classList.toggle('on')">结尾怎么收</span>
      <span class="tag" onclick="this.classList.toggle('on')">BGM节奏</span>
    </div>
    <div class="video-ingest">
      <div class="upload-box">
        <input id="ref_video_file" type="file" accept="video/mp4,video/quicktime,.mp4,.mov" onchange="handleVideoFile(this)" />
        <div>
          <strong>上传对标视频文件</strong>
          <span>支持 MP4 / MOV，本地读取时长与预览</span>
        </div>
      </div>
      <div class="link-box">
        <div class="field" style="margin-bottom:8px">
          <label>对标视频链接</label>
          <div class="link-row">
            <input id="ref_video_link" placeholder="粘贴抖音/小红书/视频号/快手或直链" />
            <button class="mini-btn" onclick="checkVideoLink()">检测</button>
          </div>
        </div>
        <div style="font-size:12px;color:var(--text3)">平台链接可记录来源；如需自动读画面，优先上传原视频文件。</div>
      </div>
    </div>
    <div class="video-state" id="video_state"></div>
    <div class="video-preview" id="video_preview"><video id="ref_video_preview" controls muted playsinline></video></div>
    <div class="field" style="margin-top:10px"><label>对标视频备注</label>
      <input id="f_ref" placeholder="例：参考某账号爆款，开场用痛点提问，节奏快" />
    </div>
  </div>
  <div class="nav-foot">
    <div></div>
    <button class="btn-p" onclick="goStep(1)" style="padding:8px 20px;font-size:13px">下一步 →</button>
  </div>
</div>

<div class="panel" id="p1">
  <div class="card">
    <div class="card-title" style="margin-bottom:4px">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      六维参数锁定
    </div>
    <p style="font-size:12px;color:var(--text3);margin-bottom:12px">把人/货/场/动作/运镜/节奏锁进每个分镜，AI 按导演分镜执行，不再乱创作</p>
    <div class="r3" style="margin-bottom:10px">
      <div class="field"><label>人 · 人物外貌</label><input id="d_person" placeholder="服装/发型/神态" /></div>
      <div class="field"><label>货 · 产品外观</label><input id="d_goods" placeholder="颜色/形状/logo" /></div>
      <div class="field"><label>场 · 拍摄环境</label><input id="d_scene2" placeholder="具体场景描述" /></div>
    </div>
    <div class="field" style="margin-bottom:8px"><label>动作</label>
      <div class="tag-group" id="tg_act">
        <span class="tag on" onclick="this.classList.toggle('on')">口播讲解</span>
        <span class="tag" onclick="this.classList.toggle('on')">展示产品</span>
        <span class="tag" onclick="this.classList.toggle('on')">演示使用</span>
        <span class="tag" onclick="this.classList.toggle('on')">对比展示</span>
        <span class="tag" onclick="this.classList.toggle('on')">情绪反应</span>
        <span class="tag" onclick="this.classList.toggle('on')">指向引导</span>
      </div>
    </div>
    <div class="field" style="margin-bottom:8px"><label>运镜</label>
      <div class="tag-group" id="tg_cam">
        <span class="tag on" onclick="this.classList.toggle('on')">中景</span>
        <span class="tag on" onclick="this.classList.toggle('on')">近景</span>
        <span class="tag" onclick="this.classList.toggle('on')">特写</span>
        <span class="tag" onclick="this.classList.toggle('on')">全景</span>
        <span class="tag" onclick="this.classList.toggle('on')">推镜</span>
        <span class="tag" onclick="this.classList.toggle('on')">拉镜</span>
        <span class="tag" onclick="this.classList.toggle('on')">环绕</span>
      </div>
    </div>
    <div class="field"><label>节奏</label>
      <div class="tag-group" id="tg_rhy">
        <span class="tag on" onclick="this.classList.toggle('on')">快切节奏</span>
        <span class="tag" onclick="this.classList.toggle('on')">慢镜特写</span>
        <span class="tag on" onclick="this.classList.toggle('on')">关键词停顿</span>
        <span class="tag" onclick="this.classList.toggle('on')">音乐卡点</span>
        <span class="tag" onclick="this.classList.toggle('on')">渐进加速</span>
      </div>
    </div>
  </div>
  <div class="nav-foot">
    <button class="btn-s" onclick="goStep(0)">← 上一步</button>
    <button class="btn-p" onclick="goStep(2)" style="padding:8px 20px;font-size:13px">下一步 →</button>
  </div>
</div>

<div class="panel" id="p2">
  <div class="card">
    <div class="card-title" style="margin-bottom:8px">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="6" x2="6" y2="6"/><line x1="2" y1="18" x2="6" y2="18"/></svg>
      视频节奏时间轴
    </div>
    <div class="timeline">
      <div class="tl1">第1段·开场痛点</div>
      <div class="tl2">第2段·功能验证</div>
      <div class="tl3">第3段·转化收尾</div>
    </div>
    <div class="tl-ticks"><span>0s</span><span>5s</span><span>10s</span><span>15s</span><span>20s</span><span>25s</span><span>30s</span><span>35s</span></div>
  </div>

  <div class="seg-block">
    <div class="seg-bar" onclick="toggleSeg(1)">
      <div class="seg-bl"><span class="seg-pill s1p">第1段</span><span class="seg-name">开场痛点 + 产品展示</span><span class="seg-time">0–12秒</span></div>
      <span id="chev1" style="color:var(--text3);font-size:14px">▾</span>
    </div>
    <div class="seg-body" id="sb1">
      <div class="tip"><span>前3秒黄金窗口，用痛点或反常识开场，让用户停下来。</span></div>
      <div class="shot-row" id="shots_a"></div>
      <div class="d3">
        <div class="dc"><label>主画面参考</label><input id="s1_img" placeholder="开场中景口播" /></div>
        <div class="dc"><label>产品细节</label><input id="s1_prod" placeholder="产品亮相镜头" /></div>
        <div class="dc"><label>场景参考</label><input id="s1_bg" placeholder="拍摄背景" /></div>
      </div>
      <div class="field"><label>口播文案</label><textarea id="s1_copy" oninput="updateProg()" placeholder="开场痛点文案…"></textarea></div>
    </div>
  </div>

  <div class="seg-block">
    <div class="seg-bar" onclick="toggleSeg(2)">
      <div class="seg-bl"><span class="seg-pill s2p">第2段</span><span class="seg-name">使用验证 + 功能展示</span><span class="seg-time">12–24秒</span></div>
      <span id="chev2" style="color:var(--text3);font-size:14px">▾</span>
    </div>
    <div class="seg-body" id="sb2" style="display:none">
      <div class="tip"><span>信任建立区，实拍演示比口说功能更有说服力。</span></div>
      <div class="shot-row" id="shots_b"></div>
      <div class="d3">
        <div class="dc"><label>主画面参考</label><input id="s2_img" placeholder="使用演示镜头" /></div>
        <div class="dc"><label>产品细节</label><input id="s2_prod" placeholder="功能特写" /></div>
        <div class="dc"><label>场景参考</label><input id="s2_bg" placeholder="使用场景" /></div>
      </div>
      <div class="field"><label>口播文案</label><textarea id="s2_copy" oninput="updateProg()" placeholder="功能验证文案…"></textarea></div>
    </div>
  </div>

  <div class="seg-block">
    <div class="seg-bar" onclick="toggleSeg(3)">
      <div class="seg-bl"><span class="seg-pill s3p">第3段</span><span class="seg-name">佩戴展示 + 转化收尾</span><span class="seg-time">24–35秒</span></div>
      <span id="chev3" style="color:var(--text3);font-size:14px">▾</span>
    </div>
    <div class="seg-body" id="sb3" style="display:none">
      <div class="tip"><span>结尾给出下单理由，留下记忆点，引导行动。</span></div>
      <div class="shot-row" id="shots_c"></div>
      <div class="d3">
        <div class="dc"><label>主画面参考</label><input id="s3_img" placeholder="穿戴效果展示" /></div>
        <div class="dc"><label>产品细节</label><input id="s3_prod" placeholder="品牌/卖点特写" /></div>
        <div class="dc"><label>场景参考</label><input id="s3_bg" placeholder="收尾场景" /></div>
      </div>
      <div class="field"><label>口播文案</label><textarea id="s3_copy" oninput="updateProg()" placeholder="转化收尾文案…"></textarea></div>
    </div>
  </div>

  <div class="nav-foot">
    <button class="btn-s" onclick="goStep(1)">← 上一步</button>
    <button class="btn-p" onclick="goStep(3)" style="padding:8px 20px;font-size:13px">生成提示词 →</button>
  </div>
</div>

<div class="panel" id="p3">
  <div class="metric-row">
    <div class="metric"><div class="mv">24</div><div class="ml">总分镜数</div></div>
    <div class="metric"><div class="mv" id="m_dur">35s</div><div class="ml">视频时长</div></div>
    <div class="metric"><div class="mv">3</div><div class="ml">段落数</div></div>
    <div class="metric"><div class="mv">6</div><div class="ml">锁定维度</div></div>
  </div>
  <div class="card" style="margin-bottom:12px">
    <div class="card-title" style="margin-bottom:10px">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      一致性检查
    </div>
    <div class="checklist" id="checklist"></div>
  </div>
  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div class="card-title">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        Seedance 2.0 分镜提示词
      </div>
      <select id="out_seg" style="font-size:12px;padding:5px 8px;width:auto">
        <option value="all">全部段落</option>
        <option value="1">第1段</option>
        <option value="2">第2段</option>
        <option value="3">第3段</option>
      </select>
    </div>
    <div class="out-box" id="out_box">点击下方按钮生成提示词…</div>
    <div class="btn-row">
      <button class="btn-p" onclick="genPrompt()">✦ 生成提示词</button>
      <button class="copy-btn" id="copy_btn" onclick="copyOut()">⎘ 复制</button>
    </div>
  </div>
  <div class="nav-foot">
    <button class="btn-s" onclick="goStep(2)">← 返回故事板</button>
    <div></div>
  </div>
</div>

</div>

<script>
const shotSets=[
  [['中景','开场引入'],['近景','产品亮相'],['中景','痛点讲解'],['特写','细节'],['中景','展示'],['近景','表情'],['全景','场景'],['中景','引产品']],
  [['近景','拿产品'],['特写','功能'],['中景','演示'],['近景','效果'],['特写','验证'],['中景','反应'],['近景','特写'],['中景','总结']],
  [['全景','整体效果'],['中景','讲优势'],['近景','亮点'],['特写','品牌'],['中景','场景'],['近景','引导'],['特写','购买'],['中景','结束']]
];
function renderShots(id,types){
  const g=document.getElementById(id);if(!g)return;g.innerHTML='';
  types.forEach((t,i)=>{
    const b=document.createElement('div');b.className='shot';
    b.innerHTML=`<span class="sn">${i+1}</span><span class="st">${t[0]}<br>${t[1]}</span>`;
    b.onclick=()=>b.classList.toggle('sel');g.appendChild(b);
  });
}
renderShots('shots_a',shotSets[0]);renderShots('shots_b',shotSets[1]);renderShots('shots_c',shotSets[2]);

function fmtSize(bytes){
  if(!bytes)return '未知大小';
  const mb=bytes/1024/1024;
  return mb>=1?mb.toFixed(1)+' MB':(bytes/1024).toFixed(0)+' KB';
}
function fmtTime(sec){
  if(!Number.isFinite(sec))return '未知时长';
  const m=Math.floor(sec/60);
  const s=Math.round(sec%60).toString().padStart(2,'0');
  return m?`${m}:${s}`:`${Math.round(sec)} 秒`;
}
function showVideoState(type,msg){
  const box=document.getElementById('video_state');
  box.className='video-state show '+type;
  box.innerHTML=msg;
}
function setRefNote(text){
  const ref=document.getElementById('f_ref');
  if(ref&&!ref.value.trim())ref.value=text;
}
function handleVideoFile(input){
  const file=input.files&&input.files[0];
  const previewWrap=document.getElementById('video_preview');
  const video=document.getElementById('ref_video_preview');
  if(!file)return;
  const ok=/\.(mp4|mov)$/i.test(file.name)||['video/mp4','video/quicktime'].includes(file.type);
  if(!ok){
    previewWrap.classList.remove('show');
    showVideoState('warn','文件格式不支持。请上传 MP4 或 MOV。');
    input.value='';
    return;
  }
  const url=URL.createObjectURL(file);
  video.src=url;
  previewWrap.classList.add('show');
  video.onloadedmetadata=()=>{
    showVideoState('ok',`已读取本地视频：${file.name}<br>格式：${file.type||'视频文件'} · 大小：${fmtSize(file.size)} · 时长：${fmtTime(video.duration)}。`);
    setRefNote(`已上传对标视频：${file.name}，重点拆解前3秒钩子、产品展示、镜头节奏和结尾转化。`);
  };
  video.onerror=()=>{
    previewWrap.classList.remove('show');
    showVideoState('warn','浏览器无法读取这个视频文件。建议换成标准 H.264 MP4 后再上传。');
  };
}
function detectPlatform(raw){
  const url=raw.toLowerCase();
  if(url.includes('douyin.com'))return '抖音';
  if(url.includes('xiaohongshu.com')||url.includes('xhslink.com'))return '小红书';
  if(url.includes('weixin.qq.com')||url.includes('channels.weixin.qq.com'))return '视频号';
  if(url.includes('kuaishou.com')||url.includes('gifshow.com'))return '快手';
  if(/\.(mp4|mov)(\?|#|$)/i.test(raw))return '直连视频';
  return '未知链接';
}
async function checkVideoLink(){
  const input=document.getElementById('ref_video_link');
  const raw=input.value.trim();
  const previewWrap=document.getElementById('video_preview');
  const video=document.getElementById('ref_video_preview');
  if(!raw){input.focus();showVideoState('warn','请先粘贴视频链接。');return;}
  let url;
  try{url=new URL(raw);}catch(e){showVideoState('warn','链接格式不正确，请粘贴完整 URL。');return;}
  showVideoState('warn','正在通过后端解析链接...');
  try{
    const res=await fetch('/api/parse-video',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({url:url.href})
    });
    const data=await res.json();
    if(!res.ok)throw new Error(data.error||'解析失败');
    if(data.status==='playable'||data.status==='parsed'){
      const playable=data.playableUrl||data.videoUrl||data.url;
      if(playable){
        video.src=playable;
        previewWrap.classList.add('show');
        video.onloadedmetadata=()=>{
          showVideoState('ok',`${data.platform||'视频'}解析成功：可预览，时长 ${fmtTime(video.duration)}。`);
          setRefNote(`已解析对标视频：${data.platform||'视频链接'}。重点拆解前3秒钩子、产品展示、镜头节奏和结尾转化。`);
        };
        video.onerror=()=>{
          showVideoState('warn',`${data.platform||'视频'}已解析，但当前浏览器无法播放返回的视频地址，可能是跨域或防盗链限制。`);
        };
        return;
      }
    }
    previewWrap.classList.remove('show');
    showVideoState(data.status==='needs_parser'?'warn':'warn',data.message||'链接已记录，但暂时没有可播放的视频地址。');
    setRefNote(`对标来源：${data.platform||detectPlatform(raw)}链接。请重点拆解开场钩子、产品展示方式、镜头切换、人物动作、结尾转化和 BGM 节奏。`);
  }catch(e){
    previewWrap.classList.remove('show');
    showVideoState('warn',`后端解析失败：${e.message}`);
  }
}

let curStep=0;
function goStep(n){
  document.querySelectorAll('.panel').forEach((p,i)=>p.classList.toggle('active',i===n));
  document.querySelectorAll('.ni').forEach((item,i)=>{
    item.classList.toggle('active',i===n);item.classList.toggle('done',i<n);
    const nn=item.querySelector('.nn');
    if(i<n)nn.textContent='✓';else nn.textContent=i+1;
  });
  curStep=n;updateProg();
  if(n===3){buildChecklist();document.getElementById('m_dur').textContent=document.getElementById('f_dur').value.replace('约','');}
  window.scrollTo(0,0);
}

function updateProg(){
  const ids=['f_product','f_usp','f_target','f_host','d_person','d_goods','s1_copy','s2_copy','s3_copy','f_scene'];
  const filled=ids.filter(id=>{const el=document.getElementById(id);return el&&el.value.trim().length>0;}).length;
  const pct=Math.round(filled/ids.length*100);
  document.getElementById('pfill').style.width=pct+'%';
  document.getElementById('pct').textContent='完成度 '+pct+'%';
  document.getElementById('steplbl').textContent='第 '+(curStep+1)+' 步，共 4 步';
}

function toggleSeg(n){
  const body=document.getElementById('sb'+n);
  const open=body.style.display!=='none';
  body.style.display=open?'none':'block';
}

function getTags(id){return[...document.querySelectorAll('#'+id+' .tag.on')].map(t=>t.textContent).join('、')||'未选择';}

function setField(id,val){
  const el=document.getElementById(id);
  if(el&&val){el.value=val;el.classList.add('ok');setTimeout(()=>el.classList.remove('ok'),2000);}
}

function showStatus(type,msg){
  const bar=document.getElementById('ai_status');
  const icon=document.getElementById('ai_icon');
  const txt=document.getElementById('ai_msg');
  bar.className='status show '+type;
  icon.className=type==='loading'?'spin':'';
  icon.textContent=type==='loading'?'↻':type==='done'?'✓':'✕';
  txt.textContent=msg;
  if(type!=='loading')setTimeout(()=>{bar.className='status';},3500);
}

async function doFill(){
  const product=document.getElementById('f_product').value.trim();
  if(!product){document.getElementById('f_product').focus();return;}
  const btn=document.getElementById('ai_btn');
  btn.disabled=true;
  showStatus('loading','AI 正在生成「'+product+'」的内容建议…');
  try{
    const res=await fetch('/api/generate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({product})
    });
    const json=await res.json();
    if(!res.ok)throw new Error(json.error||'请求失败');
    setField('f_usp',json.usp);
    setField('f_target',json.target);
    setField('f_host',json.host);
    setField('f_scene',json.scene);
    setField('s1_copy',json.copy1);
    setField('s2_copy',json.copy2);
    setField('s3_copy',json.copy3);
    setField('d_person',json.person);
    setField('d_goods',json.goods);
    showStatus('done','已自动填充 9 个字段，可按需修改');
    updateProg();
  }catch(e){
    showStatus('err','生成失败：'+e.message);
  }
  btn.disabled=false;
}

function buildChecklist(){
  const checks=[
    {key:'f_product',label:'产品名称已填写',sub:'基础信息'},
    {key:'f_usp',label:'核心卖点已填写',sub:'AI生成或手动填写'},
    {key:'d_person',label:'人物外貌已锁定',sub:'确保人物前后不乱变'},
    {key:'d_goods',label:'产品外观已锁定',sub:'确保产品不跑偏'},
    {key:'s1_copy',label:'第1段文案已填写',sub:'开场痛点'},
    {key:'s2_copy',label:'第2段文案已填写',sub:'功能验证'},
    {key:'s3_copy',label:'第3段文案已填写',sub:'转化收尾'},
  ];
  const cl=document.getElementById('checklist');cl.innerHTML='';
  checks.forEach(c=>{
    const el=document.getElementById(c.key);const ok=el&&el.value.trim().length>0;
    const div=document.createElement('div');div.className='ci';
    div.innerHTML=`<div class="ck ${ok?'ok':'no'}">${ok?'✓':'–'}</div><div><div style="font-size:13px;color:var(--text)">${c.label}</div><div style="font-size:11px;color:var(--text3)">${c.sub}</div></div>`;
    cl.appendChild(div);
  });
}

function genPrompt(){
  const product=document.getElementById('f_product').value||'（产品）';
  const usp=document.getElementById('f_usp').value||'';
  const host=document.getElementById('f_host').value||'主讲人';
  const style=document.getElementById('f_style').value;
  const person=document.getElementById('d_person').value;
  const goods=document.getElementById('d_goods').value;
  const scene=document.getElementById('d_scene2').value||document.getElementById('f_scene').value;
  const acts=getTags('tg_act');const cams=getTags('tg_cam');const rhythms=getTags('tg_rhy');
  const seg=document.getElementById('out_seg').value;
  const block=(n,title,time,cid,iid,pid,bid)=>{
    const copy=document.getElementById(cid)?.value||'';
    const img=document.getElementById(iid)?.value||'';
    const prod=document.getElementById(pid)?.value||'';
    const bg=document.getElementById(bid)?.value||'';
    let p=`▌ 第${n}段 · ${title}（${time}）\n`;
    p+=`主体：${host}${person?' / '+person:''}\n`;
    p+=`产品：${product}${goods?' / '+goods:''}\n`;
    p+=`场景：${bg||scene||'室内真实场景'} · 风格：${style}\n`;
    p+=`镜头：${cams} · 节奏：${rhythms}\n`;
    p+=`动作：${acts}\n`;
    if(img)p+=`画面参考：${img}\n`;
    if(prod)p+=`产品细节：${prod}\n`;
    if(copy)p+=`口播文案：${copy}\n`;
    return p;
  };
  let out=`=== Seedance 2.0 分镜提示词 ===\n产品：${product}`;
  if(usp)out+=` · 卖点：${usp}`;
  out+=`\n风格：${style} · 一致性五要素全开\n\n`;
  if(seg==='1'||seg==='all')out+=block(1,'开场痛点+产品展示','0-12s','s1_copy','s1_img','s1_prod','s1_bg')+'\n';
  if(seg==='2'||seg==='all')out+=block(2,'使用验证+功能展示','12-24s','s2_copy','s2_img','s2_prod','s2_bg')+'\n';
  if(seg==='3'||seg==='all')out+=block(3,'佩戴展示+转化收尾','24-35s','s3_copy','s3_img','s3_prod','s3_bg')+'\n';
  out+=`▌ 一致性要求\n01 前后关联：每段人物/场景/产品与上段保持一致\n02 1:1复刻：参考对标视频镜头语言和节奏\n03 人物产品一致：同人同产品贯穿全片\n04 减少抽卡：锁定参考图减少随机生成\n05 接入工作流：可导入智能体工作流批量执行`;
  const box=document.getElementById('out_box');box.textContent=out;box.classList.add('has');
}

function copyOut(){
  const text=document.getElementById('out_box').textContent;
  if(text.includes('点击'))return;
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.getElementById('copy_btn');
    btn.classList.add('copied');btn.textContent='✓ 已复制';
    setTimeout(()=>{btn.classList.remove('copied');btn.textContent='⎘ 复制';},2000);
  });
}
updateProg();
</script>
</body>
</html>
