<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Turk tili mock</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --red:#E5243B; --red-dark:#B81A2E; --red-soft:rgba(229,36,59,.16);
  --ink:#F3F5FA; --muted:#9AA8C7; --line:#2A3E6B; --bg:#0E1A33; --paper:#16264A; --card:#132243;
  --ok:#2FBF71; --ok-soft:rgba(47,191,113,.15);
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;color-scheme:dark;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.5}
h1,h2,h3{font-family:'Bricolage Grotesque',Inter,sans-serif;margin:0;line-height:1.15}
button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
.screen{display:none;min-height:100vh;padding-bottom:96px}
.screen.on{display:block}
.wrap{padding:0 18px}
.note{font-size:13px;color:var(--muted);margin:14px 0;white-space:pre-line}

.hero{background:var(--red);color:#fff;padding:28px 18px 56px;position:relative;overflow:hidden}
.hero::after{content:"";position:absolute;right:-60px;top:-60px;width:220px;height:220px;border-radius:50%;
  background:radial-gradient(circle at 62% 50%,var(--red) 0 58%,rgba(255,255,255,.14) 59% 100%)}
.hero small{opacity:.85;font-size:14px}
.hero h1{font-size:26px;font-weight:800;margin-top:6px;max-width:72%}
.last{margin:-34px 18px 0;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:14px 16px;
  display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative;z-index:2;box-shadow:0 12px 26px -14px rgba(0,0,0,.6)}
.last b{font-family:'Bricolage Grotesque';font-size:26px;color:var(--red)}
.last span{color:var(--muted);font-size:14px}

.sec-title{font-size:15px;color:var(--muted);margin:26px 0 10px;font-weight:600}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.tile{text-align:left;padding:16px 14px 16px 16px;border-radius:16px;background:var(--paper);border:1px solid var(--line);
  border-left:5px solid var(--red);min-height:96px;display:flex;flex-direction:column;justify-content:space-between}
.tile h3{font-size:18px}
.tile p{margin:4px 0 0;font-size:13px;color:var(--muted);line-height:1.3}
.tile.soon{opacity:.6;border-left-color:#4A5F8F}
.tile.main{grid-column:1/-1;background:var(--red);color:#fff;border-color:var(--red);border-left-color:#fff}
.tile.main p{color:#ffe3e6}

.top{position:sticky;top:0;z-index:10;background:var(--bg);border-bottom:1px solid var(--line);padding:12px 18px;display:flex;align-items:center;gap:12px}
.back{width:38px;height:38px;border-radius:12px;background:var(--paper);color:#fff;font-size:20px;font-weight:700;flex:none}
.top h2{font-size:19px;flex:1;min-width:0}
.timer{font-family:'Bricolage Grotesque';font-weight:700;font-size:18px;background:var(--red);color:#fff;padding:6px 12px;border-radius:999px;font-variant-numeric:tabular-nums;flex:none}
.timer.low{animation:pulse 1s infinite}
@keyframes pulse{50%{background:var(--red-dark)}}
.bar{height:5px;background:var(--line)}
.bar i{display:block;height:100%;width:0;background:var(--red);transition:width .25s}

.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;margin-top:12px;text-align:left;width:100%;display:block}
.card h3{font-size:18px}
.card p{margin:4px 0 12px;color:var(--muted);font-size:14px;white-space:pre-line}
.btn{display:inline-block;background:var(--red);color:#fff;font-weight:600;border-radius:12px;padding:12px 20px;text-align:center}
.btn.ghost{background:var(--paper);color:var(--ink);border:1px solid var(--line)}
.btn.block{display:block;width:100%}
.group{margin:22px 0 4px;font-weight:700;color:var(--muted);font-size:14px}
.group + .note{margin-top:2px}

.instr{margin:16px 0 0;font-size:13px;color:var(--muted);line-height:1.45}
.passage{background:var(--paper);border-left:4px solid var(--red);border-radius:0 12px 12px 0;padding:14px 16px;margin:14px 0 6px;
  font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.65;white-space:pre-line}
.passage.small{font-size:16px;border-left-color:#4A5F8F}
.bankbox{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:12px 0 4px;font-size:15px}
.bankbox div{padding:3px 0}
.bankbox b{display:inline-block;width:26px;color:var(--red)}
.qimg{width:100%;border-radius:12px;margin:12px 0;background:#fff}
.audio{width:100%;margin:16px 0 4px}
.qno{color:var(--red);font-weight:700;font-size:14px;margin-top:18px}
.qtext{font-family:'Bricolage Grotesque';font-weight:700;font-size:20px;margin:4px 0 14px}
.opt{display:flex;align-items:center;gap:14px;width:100%;text-align:left;padding:12px 14px;border:1.5px solid var(--line);border-radius:14px;margin-bottom:10px;background:var(--card)}
.bub{flex:none;width:34px;height:34px;border-radius:50%;border:2px solid #4A5F8F;display:grid;place-items:center;font-weight:700;font-size:14px;color:var(--muted)}
.opt.sel{border-color:var(--red);background:var(--red-soft)}
.opt.sel .bub{background:var(--red);border-color:var(--red);color:#fff}
.opt.right{border-color:var(--ok);background:var(--ok-soft)}
.opt.right .bub{background:var(--ok);border-color:var(--ok);color:#fff}
.opt.wrong{border-color:var(--red);background:var(--red-soft)}
.opt.wrong .bub{background:var(--red);border-color:var(--red);color:#fff}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin:6px 0 10px}
.chips .opt{width:auto;margin:0;padding:6px;border-radius:999px}
.chips .opt .bub{width:40px;height:40px;font-size:16px}
.chips .opt.sel,.chips .opt.right,.chips .opt.wrong{padding:6px}

.dock{position:fixed;left:0;right:0;bottom:0;background:var(--bg);border-top:1px solid var(--line);padding:10px 18px calc(10px + env(safe-area-inset-bottom,0px));display:flex;gap:10px;z-index:20}
.dock .btn{flex:1}
.sheet{position:fixed;inset:0;background:rgba(4,8,18,.7);display:none;align-items:flex-end;z-index:30}
.sheet.on{display:flex}
.sheet>div{background:var(--card);width:100%;border-radius:22px 22px 0 0;padding:18px 18px calc(22px + env(safe-area-inset-bottom,0px));max-height:80vh;overflow:auto}
.nums{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin:14px 0}
.num{aspect-ratio:1;border-radius:50%;border:2px solid var(--line);font-weight:700;display:grid;place-items:center;font-size:14px}
.num.done{background:var(--red);border-color:var(--red);color:#fff}
.num.cur{outline:3px solid #fff}
.num.right{background:var(--ok);border-color:var(--ok);color:#fff}
.num.wrong{background:var(--red);border-color:var(--red);color:#fff}

.score{background:linear-gradient(160deg,var(--red),var(--red-dark));color:#fff;text-align:center;padding:32px 18px 36px}
.score .big{font-family:'Bricolage Grotesque';font-size:72px;font-weight:800;line-height:1}
.score .big small{font-size:28px;opacity:.8}
.badge{display:inline-block;margin-top:12px;background:var(--bg);color:#fff;font-weight:700;border-radius:999px;padding:6px 16px}
.expl{background:var(--paper);border-radius:12px;padding:10px 12px;font-size:14px;color:var(--muted);margin:-2px 0 6px}

.row{display:flex;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)}
.row b{font-family:'Bricolage Grotesque';font-size:18px}
.row span{color:var(--muted);font-size:14px;text-align:right}
textarea{width:100%;min-height:200px;background:var(--card);color:var(--ink);border:1.5px solid var(--line);border-radius:14px;padding:12px;font:inherit;resize:vertical;margin-top:8px}
.cnt{font-size:12px;color:var(--muted);text-align:right}
.thumbs{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}
.thumbs img{width:72px;height:72px;object-fit:cover;border-radius:10px;border:1px solid var(--line)}
.rec.live{background:var(--red);color:#fff;border-color:var(--red)}
input[type=file]{display:none}
</style>
</head>
<body>

<section id="home" class="screen on">
  <div class="hero">
    <small>Milliy sertifikat · Turk tili</small>
    <h1 id="hello">Merhaba!</h1>
  </div>
  <div class="last">
    <div><span>Oxirgi natija</span><br><b id="lastScore">—</b></div>
    <button class="btn" onclick="openDeneme()">Deneme boshlash</button>
  </div>
  <div class="wrap">
    <div class="sec-title">Bo‘limlar</div>
    <div class="grid">
      <button class="tile main" onclick="openDeneme()"><h3>DENEME SINAVI</h3><p>To‘liq imtihon: Okuma · Dinleme · Yazma · Konuşma</p></button>
      <button class="tile" onclick="openList('okuma')"><h3>Okuma</h3><p>O‘qib tushunish</p></button>
      <button class="tile" onclick="openList('dinleme')"><h3>Dinleme</h3><p>Eshitib tushunish</p></button>
      <button class="tile" onclick="openList('yazma')"><h3>Yazma</h3><p>Yozma ish</p></button>
      <button class="tile" onclick="openList('konusma')"><h3>Konuşma</h3><p>Og‘zaki nutq</p></button>
      <button class="tile soon" onclick="soon()"><h3>Gramer</h3><p>A1 dan C1 gacha</p></button>
      <button class="tile soon" onclick="soon()"><h3>Video darslar</h3><p>Ustozlardan</p></button>
      <button class="tile soon" onclick="soon()"><h3>Lug‘at</h3><p>So‘z yodlash</p></button>
      <button class="tile soon" onclick="soon()"><h3>Natijalarim</h3><p>Kuchli va zaif tomonlar</p></button>
    </div>
  </div>
</section>

<section id="list" class="screen">
  <div class="top"><button class="back" onclick="show('home')">‹</button><h2 id="ltitle">Mashqlar</h2></div>
  <div class="wrap" id="exams"></div>
</section>

<section id="between" class="screen">
  <div class="top"><button class="back" onclick="confirmExit()">‹</button><h2 id="btitle">Deneme</h2></div>
  <div class="wrap">
    <div class="card"><h3 id="bname"></h3><p id="binfo"></p><button class="btn block" id="bgo">Boshlash</button></div>
    <p class="note" id="bnote"></p>
  </div>
</section>

<section id="test" class="screen">
  <div class="top">
    <button class="back" onclick="confirmExit()">‹</button>
    <h2 id="ttitle">Test</h2>
    <div class="timer" id="timer">00:00</div>
  </div>
  <div class="bar"><i id="prog"></i></div>
  <div class="wrap" id="qbox"></div>
  <div class="dock">
    <button class="btn ghost" id="prev">Orqaga</button>
    <button class="btn ghost" onclick="openSheet()">Varaqa</button>
    <button class="btn" id="next">Keyingi</button>
  </div>
</section>

<section id="writing" class="screen">
  <div class="top">
    <button class="back" onclick="confirmExit()">‹</button>
    <h2 id="wtitle">Yazma</h2>
    <div class="timer" id="wtimer">00:00</div>
  </div>
  <div class="wrap" id="wbox"></div>
  <div class="dock"><button class="btn" id="wsend">Yuborish</button></div>
</section>

<section id="speaking" class="screen">
  <div class="top">
    <button class="back" onclick="confirmExit()">‹</button>
    <h2 id="stitle">Konuşma</h2>
    <div class="timer" id="stimer">00:00</div>
  </div>
  <div class="wrap" id="sbox"></div>
  <div class="dock"><button class="btn" id="ssend">Yakunlash</button></div>
</section>

<section id="result" class="screen">
  <div class="score">
    <div class="big"><span id="rc">0</span><small> / <span id="rt">0</span></small></div>
    <div class="badge" id="rlevel"></div>
  </div>
  <div class="wrap">
    <div class="sec-title">Javoblar va yechimlar</div>
    <div class="nums" id="rnums"></div>
    <div id="rbox"></div>
    <p class="note">Bu mashq uchun taxminiy natija. Rasmiy imtihon balli emas.</p>
    <button class="btn block" onclick="show('home')">Bosh sahifa</button>
  </div>
</section>

<section id="dresult" class="screen">
  <div class="score">
    <div class="big" style="font-size:34px">DENEME SINAVI</div>
    <div class="badge" id="dname"></div>
  </div>
  <div class="wrap">
    <div class="sec-title">Natijalar</div>
    <div id="dbox"></div>
    <p class="note">Yazma va Konuşma bo‘limlari Claude orqali baholanadi. Bu funksiya server ulangach ishga tushadi. Natijalar taxminiy, rasmiy ball emas.</p>
    <button class="btn block" onclick="show('home')">Bosh sahifa</button>
  </div>
</section>

<div class="sheet" id="sheet" onclick="if(event.target===this)closeSheet()">
  <div>
    <h3>Javob varaqasi</h3>
    <div class="nums" id="snums"></div>
    <button class="btn block" onclick="finish()">Yakunlash</button>
  </div>
</div>

<script>
window.__err='';
window.addEventListener('error',function(e){ window.__err=(e.message||'')+' '+(e.lineno||''); });
document.write('<script src="questions.js?t='+Date.now()+'"><\/script>');
</script>
<script>
const tg = window.Telegram && Telegram.WebApp;
try{ tg.ready(); tg.expand(); tg.setHeaderColor('#E5243B'); tg.setBackgroundColor('#0E1A33'); }catch(e){}
const user = tg && tg.initDataUnsafe && tg.initDataUnsafe.user;
document.getElementById('hello').textContent = 'Merhaba, ' + (user && user.first_name ? user.first_name : 'Aşkıto') + '!';

const L='ABCDEFGHIJ';
const NAMES={okuma:'Okuma',dinleme:'Dinleme',yazma:'Yazma',konusma:'Konuşma'};
const PARTS=window.PARTS||{};
const DENEME=window.DENEME||[];
let ctx=null, tick=null, left=0;

function $(id){return document.getElementById(id)}
function el(tag,cls,text){const e=document.createElement(tag); if(cls)e.className=cls; if(text!==undefined)e.textContent=text; return e}
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id)); window.scrollTo(0,0); }
function soon(){ const m='Bu bo‘lim tez orada qo‘shiladi'; tg&&tg.showAlert?tg.showAlert(m):alert(m); }
function say(m){ tg&&tg.showAlert?tg.showAlert(m):alert(m); }
function fmt(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

/* ---- Timer ---- */
function runTimer(seconds, elId, onEnd){
  clearInterval(tick); left=seconds;
  const draw=()=>{const t=$(elId); t.textContent=fmt(Math.max(left,0)); t.classList.toggle('low',left<60)};
  draw();
  tick=setInterval(()=>{ left--; draw(); if(left<=0){clearInterval(tick); onEnd();} },1000);
}

/* ---- Mashq ro'yxati (DENEME dan avtomatik + EXAMS) ---- */
function qCount(parts){return parts.reduce((n,p)=>n+p.questions.length,0)}
function allSets(){
  const sets=[];
  DENEME.forEach(d=>{
    ['okuma','dinleme'].forEach(sk=>{
      const sec=d[sk]; if(!sec) return;
      sec.parts.forEach((p,i)=>{
        const n=p.questions.length;
        const mins = sk==='okuma' ? Math.max(5,Math.round(60*n/35)) : Math.max(5,Math.ceil(n*1.5));
        sets.push({id:d.id+'-'+sk+'-'+(i+1), skill:sk, part:p.part||(i+1), title:d.title+' · '+p.title, minutes:mins, parts:[p]});
      });
    });
  });
  (window.EXAMS||[]).forEach(e=>sets.push(e));
  return sets;
}
function setInfo(e){
  if(e.parts) return qCount(e.parts)+' ta savol · '+e.minutes+' daqiqa';
  if(e.tasks) return e.tasks.length+' ta topshiriq · '+e.minutes+' daqiqa';
  return (e.items||[]).length+' ta savol · '+e.minutes+' daqiqa';
}
function openList(skill){
  $('ltitle').textContent=NAMES[skill];
  const box=$('exams'); box.innerHTML='';
  const sets=allSets().filter(e=>e.skill===skill);
  const plist=(PARTS[skill]||[]);
  const used=new Set();
  plist.forEach(p=>{
    box.appendChild(el('div','group',p.n+'-qism'+(p.title&&p.title!==p.n+'-qism'?' · '+p.title:'')));
    const arr=sets.filter(s=>Number(s.part)===p.n);
    if(!arr.length) box.appendChild(el('p','note','Hali test yo‘q.'));
    arr.forEach(s=>{used.add(s); box.appendChild(setCard(s))});
  });
  const rest=sets.filter(s=>!used.has(s));
  if(rest.length){ box.appendChild(el('div','group','Boshqa')); rest.forEach(s=>box.appendChild(setCard(s))); }
  if(!window.DENEME && !window.EXAMS){ box.innerHTML='<p class="note">questions.js yuklanmadi yoki ichida xato bor. '+(window.__err||'')+'</p>'; }
  show('list');
}
function setCard(e){
  const c=el('button','card'); c.appendChild(el('h3','',e.title)); c.appendChild(el('p','',setInfo(e)));
  c.appendChild(el('span','btn','Boshlash')); c.onclick=()=>startSet(e); return c;
}
function startSet(e){
  ctx=null;
  if(e.skill==='okuma'||e.skill==='dinleme') startMCQ({title:e.title,skill:e.skill,minutes:e.minutes,parts:e.parts,audio:e.audio},null);
  else if(e.skill==='yazma') startWriting(e,null);
  else startSpeaking(e,null);
}

/* ---- DENEME SINAVI ---- */
function openDeneme(){
  $('ltitle').textContent='DENEME SINAVI';
  const box=$('exams'); box.innerHTML='';
  if(!DENEME.length) box.appendChild(el('p','note','Hali deneme sinavi yo‘q. questions.js ga qo‘shing.'));
  DENEME.forEach(d=>{
    const c=el('button','card'); c.appendChild(el('h3','',d.title));
    const lines=[];
    if(d.okuma) lines.push('Okuma: '+qCount(d.okuma.parts)+' savol · '+d.okuma.minutes+' daqiqa');
    if(d.dinleme) lines.push('Dinleme: '+qCount(d.dinleme.parts)+' savol · audio + '+(d.dinleme.extra!==undefined?d.dinleme.extra:10)+' daqiqa');
    if(d.yazma) lines.push('Yazma: '+d.yazma.minutes+' daqiqa (rasmga olib yuboriladi)');
    if(d.konusma) lines.push('Konuşma: '+d.konusma.minutes+' daqiqa');
    c.appendChild(el('p','',lines.join('\n'))); c.appendChild(el('span','btn','Boshlash'));
    c.onclick=()=>runDeneme(d); box.appendChild(c);
  });
  show('list');
}
function runDeneme(d){
  ctx={d, steps:['okuma','dinleme','yazma','konusma'].filter(k=>d[k]), i:0, res:{}};
  nextStep();
}
function getDuration(src){
  return new Promise(res=>{
    const a=new Audio(); a.preload='metadata'; const t=setTimeout(()=>res(0),6000);
    a.onloadedmetadata=()=>{clearTimeout(t);res(a.duration||0)};
    a.onerror=()=>{clearTimeout(t);res(0)};
    a.src=src;
  });
}
async function secMinutes(name,sec){
  if(sec.minutes) return sec.minutes;
  const extra = sec.extra!==undefined ? sec.extra : 10;
  if(name==='dinleme'){
    let total=0;
    for(const p of sec.parts){ if(p.audio) total+=await getDuration(p.audio); }
    if(total>0) return Math.ceil(total/60)+extra;
    return 45+extra;
  }
  return 60;
}
async function nextStep(){
  if(ctx.i>=ctx.steps.length) return showDResult();
  const name=ctx.steps[ctx.i], sec=ctx.d[name];
  $('btitle').textContent=ctx.d.title;
  $('bname').textContent=(ctx.i+1)+'/'+ctx.steps.length+' · '+NAMES[name];
  $('binfo').textContent='Hisoblanmoqda...';
  $('bnote').textContent='';
  $('bgo').style.visibility='hidden';
  show('between');
  const mins=await secMinutes(name,sec);
  let info='';
  if(name==='okuma'||name==='dinleme') info=qCount(sec.parts)+' ta savol\nVaqt: '+mins+' daqiqa';
  else if(name==='yazma') info=sec.tasks.length+' ta topshiriq\nVaqt: '+mins+' daqiqa\nQog‘ozga yozib, rasmga olib yuborasiz.';
  else info=sec.items.length+' ta savol\nVaqt: '+mins+' daqiqa\nOvozli javob yozasiz.';
  $('binfo').textContent=info;
  if(name==='dinleme') $('bnote').textContent='Vaqt audio uzunligi va qo‘shimcha '+(sec.extra!==undefined?sec.extra:10)+' daqiqadan iborat (javoblarni belgilash uchun).';
  $('bgo').style.visibility='visible';
  $('bgo').onclick=()=>runStep(name,sec,mins);
}
function runStep(name,sec,mins){
  const title=ctx.d.title+' · '+NAMES[name];
  const done=r=>{ctx.res[name]=r; ctx.i++; nextStep();};
  if(name==='okuma'||name==='dinleme') startMCQ({title,skill:name,minutes:mins,parts:sec.parts},done);
  else if(name==='yazma') startWriting({title,minutes:mins,tasks:sec.tasks},done);
  else startSpeaking({title,minutes:mins,items:sec.items},done);
}
function showDResult(){
  clearInterval(tick);
  $('dname').textContent=ctx.d.title;
  const box=$('dbox'); box.innerHTML='';
  let ok=0,tot=0;
  ctx.steps.forEach(n=>{
    const r=ctx.res[n]||{};
    const row=el('div','row'); row.appendChild(el('b','',NAMES[n]));
    let t='';
    if(n==='okuma'||n==='dinleme'){ t=r.ok+' / '+r.total; ok+=r.ok||0; tot+=r.total||0; }
    else if(n==='yazma') t=r.sent?'Yuborildi · baholash kutilmoqda':'Yuborilmadi';
    else t=r.sent?'Yozildi · baholash kutilmoqda':'Yozilmadi';
    row.appendChild(el('span','',t)); box.appendC
