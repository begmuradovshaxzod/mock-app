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
  ctx=null; gate('practice',e.id);
  if(e.skill==='okuma'||e.skill==='dinleme') startMCQ({title:e.title,skill:e.skill,minutes:e.minutes,parts:e.parts,audio:e.audio},null);
  else if(e.skill==='yazma') startWriting(e,null);
  else startSpeaking(e,null);
}

/* ---- Server (taklif va cheklov) ---- */
const API=(window.API_URL||'').replace(/\/$/,'');
async function api(path,body){
  const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),20000);
  try{
    const r=await fetch(API+path,{method:'POST',signal:ctrl.signal,
      headers:{'Content-Type':'application/json','X-Init-Data':(tg&&tg.initData)||''},body:JSON.stringify(body||{})});
    if(!r.ok) throw new Error(r.status===401?'auth':'http '+r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}
function drawStat(st){
  $('stat').textContent = st ? 'Ishlangan mock: '+st.mocks_used+' · Taklif qilgan do‘stlar: '+st.invites+(st.premium?' · Premium':'') : '';
}
async function initServer(){
  if(!API) return;
  try{ drawStat(await api('/api/auth')); }catch(e){ $('stat').textContent='Serverga ulanib bo‘lmadi.'; }
}
async function gate(kind,ref){
  if(!API) return {ok:true};
  try{ const r=await api('/api/start',{kind,ref:ref||''}); if(r.ok) drawStat(r); return r; }
  catch(e){
    if(kind!=='deneme') return {ok:true};
    return {ok:false,reason:e.message==='auth'?'need_telegram':'offline'};
  }
}
function showGate(g){
  const share=link=>{ const u='https://t.me/share/url?url='+encodeURIComponent(link)+'&text='+encodeURIComponent('Turk tili milliy sertifikat mock testlari. Shu havola orqali kiring:');
    tg&&tg.openTelegramLink?tg.openTelegramLink(u):window.open(u,'_blank'); };
  $('gshare').style.display='none'; $('gcopy').style.display='none'; $('gpremium').style.display='none';
  if(g.reason==='need_friends'){
    $('gtitle').textContent='Do‘stlaringizni taklif qiling';
    $('gtext').textContent='Keyingi mock uchun jami '+g.need+' ta do‘st kerak. Hozir: '+g.have+' / '+g.need+'.\nDo‘stingiz havola orqali botga kirib, bitta test boshlaganda hisoblanadi.';
    $('gshare').style.display='block'; $('gcopy').style.display='block';
    $('gshare').onclick=()=>share(g.link);
    $('gcopy').onclick=()=>{ navigator.clipboard&&navigator.clipboard.writeText(g.link).then(()=>say('Havola nusxalandi'),()=>say(g.link)); };
  } else if(g.reason==='need_premium'){
    $('gtitle').textContent='Premium kerak';
    $('gtext').textContent='Bepul va taklif orqali ochiladigan mocklar tugadi. Davom etish uchun premium versiyani oling.';
    $('gpremium').style.display='block'; $('gpremium').onclick=()=>say('To‘lov tez orada ulanadi.');
  } else if(g.reason==='need_telegram'){
    $('gtitle').textContent='Telegram ichida oching';
    $('gtext').textContent='Mock faqat Telegram bot orqali ochiladi.';
  } else {
    $('gtitle').textContent='Server bilan aloqa yo‘q';
    $('gtext').textContent='Internetni tekshirib, qayta urinib ko‘ring.';
  }
  show('gate');
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
async function runDeneme(d){
  const g=await gate('deneme',d.id);
  if(!g.ok){ showGate(g); return; }
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
    row.appendChild(el('span','',t)); box.appendChild(row);
  });
  if(tot) $('lastScore').textContent=ok+' / '+tot;
  show('dresult');
}

/* ---- MCQ (Okuma / Dinleme) ---- */
let Q=[], cur=0, ans=[], mcq=null;
function startMCQ(opts,onDone){
  mcq={opts,onDone,skill:opts.skill};
  Q=[]; opts.parts.forEach(p=>p.questions.forEach(q=>{
    const o=q.o||p.bank||[];
    Q.push({part:p,q:q.q||'',text:q.text,image:q.image,o:o,bank:!q.o&&!!p.bank,a:L.indexOf(q.a),e:q.e});
  }));
  cur=0; ans=Array(Q.length).fill(null);
  $('ttitle').textContent=opts.title;
  show('test'); drawQ();
  runTimer(opts.minutes*60,'timer',()=>finish());
}
function chipsLike(o){ return o.every(x=>String(x).length<=2); }
function drawQ(){
  const d=Q[cur], box=$('qbox'); box.innerHTML='';
  const p=d.part;
  if(p.audio){ const a=el('audio','audio'); a.controls=true; a.preload='none'; a.src=p.audio; box.appendChild(a); }
  else if(mcq.skill==='dinleme'){ box.appendChild(el('p','note','Audio hali yuklanmagan.')); }
  if(p.instruction) box.appendChild(el('div','instr',p.instruction));
  if(p.image){ const im=el('img','qimg'); im.src=p.image; im.alt='Rasm'; box.appendChild(im); }
  if(p.text) box.appendChild(el('div','passage',p.text));
  if(p.bank){ const b=el('div','bankbox'); p.bank.forEach((t,i)=>{ const r=el('div'); const k=el('b','',L[i]+')'); r.appendChild(k); r.appendChild(document.createTextNode(t)); b.appendChild(r); }); box.appendChild(b); }
  if(d.image){ const im=el('img','qimg'); im.src=d.image; box.appendChild(im); }
  if(d.text) box.appendChild(el('div','passage small',d.text));
  box.appendChild(el('div','qno','Savol '+(cur+1)+' / '+Q.length));
  if(d.q) box.appendChild(el('div','qtext',d.q));
  const compact=d.bank||chipsLike(d.o);
  const wrap=compact?el('div','chips'):box;
  d.o.forEach((txt,i)=>{
    const b=el('button','opt'+(ans[cur]===i?' sel':''));
    const bub=el('span','bub',L[i]); b.appendChild(bub);
    if(!compact) b.appendChild(el('span','',txt));
    b.onclick=()=>{ ans[cur]=i; (compact?wrap:box).querySelectorAll('.opt').forEach((x,k)=>x.classList.toggle('sel',k===i)); tg&&tg.HapticFeedback&&tg.HapticFeedback.selectionChanged(); };
    wrap.appendChild(b);
  });
  if(compact) box.appendChild(wrap);
  $('prog').style.width=((cur+1)/Q.length*100)+'%';
  const prev=$('prev'), next=$('next');
  prev.style.visibility=cur===0?'hidden':'visible';
  prev.onclick=()=>{cur--;drawQ();window.scrollTo(0,0)};
  if(cur===Q.length-1){ next.textContent='Yakunlash'; next.onclick=openSheet; }
  else { next.textContent='Keyingi'; next.onclick=()=>{cur++;drawQ();window.scrollTo(0,0)}; }
}
function openSheet(){
  const box=$('snums'); box.innerHTML='';
  Q.forEach((_,i)=>{ const b=el('button','num'+(ans[i]!==null?' done':'')+(i===cur?' cur':''),String(i+1));
    b.onclick=()=>{cur=i;closeSheet();drawQ();}; box.appendChild(b); });
  $('sheet').classList.add('on');
}
function closeSheet(){ $('sheet').classList.remove('on'); }
function finish(){
  clearInterval(tick); closeSheet();
  let ok=0; Q.forEach((d,i)=>{ if(ans[i]===d.a) ok++; });
  const r={ok,total:Q.length};
  if(mcq.onDone){ mcq.onDone(r); return; }
  $('rc').textContent=ok; $('rt').textContent=Q.length;
  const pct=ok/Q.length;
  $('rlevel').textContent = pct>=.8?'Juda yaxshi':pct>=.5?'Yaxshi, davom eting':'Ko‘proq mashq kerak';
  $('lastScore').textContent=ok+' / '+Q.length;
  const nums=$('rnums'); nums.innerHTML=''; const rb=$('rbox'); rb.innerHTML='';
  Q.forEach((d,i)=>{
    const good=ans[i]===d.a;
    nums.appendChild(el('div','num '+(good?'right':'wrong'),String(i+1)));
    rb.appendChild(el('div','qno','Savol '+(i+1)));
    if(d.q) rb.appendChild(el('div','qtext',d.q)).style.fontSize='17px';
    d.o.forEach((t,k)=>{
      const o=el('div','opt'+(k===d.a?' right':(k===ans[i]?' wrong':'')));
      o.appendChild(el('span','bub',L[k])); if(!(d.bank||chipsLike(d.o))) o.appendChild(el('span','',t));
      rb.appendChild(o);
    });
    const e=el('div','expl',(ans[i]===null?'Javob berilmadi. ':'')+'To‘g‘ri javob: '+L[d.a]+'. '+(d.e||'')); rb.appendChild(e);
  });
  show('result');
}

/* ---- Yazma ---- */
let wFiles=[], wTexts=[], wCtx=null;
function startWriting(e,onDone){
  wCtx={e,onDone}; wFiles=[]; wTexts=[];
  $('wtitle').textContent=e.title;
  const box=$('wbox'); box.innerHTML='';
  box.appendChild(el('p','note','Qog‘ozga yozib, rasmga olib yuborishingiz yoki shu yerning o‘zida yozishingiz mumkin.'));
  (e.tasks||[]).forEach((t,i)=>{
    box.appendChild(el('div','group',t.title+(t.words?' · '+t.words+' so‘z':'')));
    box.appendChild(el('div','passage small',t.prompt));
    const ta=el('textarea'); ta.placeholder='Javobingizni turk tilida yozing...';
    const cnt=el('div','cnt','0 so‘z');
    ta.oninput=()=>{ wTexts[i]=ta.value; cnt.textContent=(ta.value.trim()?ta.value.trim().split(/\s+/).length:0)+' so‘z'; };
    box.appendChild(ta); box.appendChild(cnt);
  });
  box.appendChild(el('div','group','Qo‘lda yozdingizmi? Rasmini yuklang (4 tagacha)'));
  const th=el('div','thumbs');
  const lab=el('label','btn ghost','Rasm tanlash'); const inp=el('input'); inp.type='file'; inp.accept='image/*'; inp.multiple=true;
  inp.onchange=()=>{ for(const f of inp.files){ if(wFiles.length<4){ wFiles.push(f); const im=el('img'); im.src=URL.createObjectURL(f); th.appendChild(im);} } inp.value=''; };
  lab.appendChild(inp); box.appendChild(lab); box.appendChild(th);
  $('wsend').onclick=()=>sendWriting();
  show('writing'); runTimer(e.minutes*60,'wtimer',()=>sendWriting(true));
}
function sendWriting(auto){
  clearInterval(tick);
  const r={sent:true,texts:wTexts.slice(),files:wFiles.length};
  const d=wCtx.onDone;
  say('Qabul qilindi. Claude orqali baholash server ulangach ishga tushadi.');
  if(d) d(r); else show('home');
}

/* ---- Konuşma ---- */
let recs=[], rec=null, sCtx=null;
function startSpeaking(e,onDone){
  sCtx={e,onDone}; recs=[];
  $('stitle').textContent=e.title;
  const box=$('sbox'); box.innerHTML='';
  box.appendChild(el('p','note','Har bir savol uchun “Yozishni boshlash” ni bosing, javob bering va “To‘xtatish” ni bosing.'));
  (e.items||[]).forEach((it,i)=>{
    box.appendChild(el('div','group',it.title));
    box.appendChild(el('div','passage small',it.prompt));
    const holder=el('div'); const b=el('button','btn ghost rec','Yozishni boshlash');
    b.onclick=()=>toggleRec(i,b,holder);
    box.appendChild(b); box.appendChild(holder);
  });
  $('ssend').onclick=()=>sendSpeaking();
  show('speaking'); runTimer(e.minutes*60,'stimer',()=>sendSpeaking());
}
async function toggleRec(i,btn,holder){
  if(rec && rec.state==='recording'){ rec.stop(); return; }
  try{
    const st=await navigator.mediaDevices.getUserMedia({audio:true});
    const chunks=[]; rec=new MediaRecorder(st);
    rec.ondataavailable=ev=>chunks.push(ev.data);
    rec.onstop=()=>{
      st.getTracks().forEach(t=>t.stop());
      const blob=new Blob(chunks,{type:rec.mimeType||'audio/webm'}); recs[i]=blob;
      holder.innerHTML=''; const a=el('audio','audio'); a.controls=true; a.src=URL.createObjectURL(blob); holder.appendChild(a);
      btn.textContent='Qayta yozish'; btn.classList.remove('live');
    };
    rec.start(); btn.textContent='To‘xtatish'; btn.classList.add('live');
  }catch(err){ holder.innerHTML=''; holder.appendChild(el('p','note','Mikrofon ruxsati berilmadi yoki qurilma qo‘llab-quvvatlamaydi.')); }
}
function sendSpeaking(){
  clearInterval(tick);
  if(rec && rec.state==='recording') rec.stop();
  const r={sent:recs.filter(Boolean).length>0,count:recs.filter(Boolean).length};
  const d=sCtx.onDone;
  if(d) d(r); else { say('Javoblaringiz saqlandi. Claude orqali baholash server ulangach ishga tushadi.'); show('home'); }
}

initServer();

function confirmExit(){
  if(confirm('Chiqasizmi? Natija saqlanmaydi.')){ clearInterval(tick); ctx=null; show('home'); }
}
window.__appLoaded=true;
  
