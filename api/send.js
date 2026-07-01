<script>
if (location.pathname === '/' || location.pathname === '') {

document.title = 'Bossplek — Elke Vrijdag in Wassenaar';

var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap';
document.head.appendChild(fontLink);

var styleTag = document.createElement('style');
styleTag.textContent = `
:root {
  --bg:#f7f4ef; --surface:#f0ece4; --border:#e2ddd3; --ink:#2c2c28;
  --ink2:#5a5850; --ink3:#9a9588; --green:#4a6148; --green2:#6d8c6a;
  --green3:#c8d8c4; --accent:#a85f3a; --warm:#e8e0d0;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Jost',sans-serif;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.7;font-weight:300;overflow-x:hidden}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:28px 60px;transition:all .4s ease}
nav.stuck{background:rgba(247,244,239,.95);backdrop-filter:blur(10px);padding:18px 60px;border-bottom:1px solid var(--border)}
.logo{font-family:'Lora',serif;font-size:1.3rem;font-weight:400;color:var(--ink);text-decoration:none}
.logo span{color:var(--green)}
.nav-links{display:flex;gap:36px;list-style:none;align-items:center}
.nav-links a{color:var(--ink2);text-decoration:none;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;transition:color .2s}
.nav-links a:hover{color:var(--green)}
.nav-cta{background:var(--green)!important;color:#fff!important;padding:9px 24px;border-radius:40px}
.nav-cta:hover{background:#3a5038!important}
.hero{min-height:100vh;display:flex;align-items:flex-end;padding:0 60px 100px;position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(44,44,40,.06) 0%,rgba(44,44,40,.55) 100%),url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85') center/cover no-repeat}
.hero-content{position:relative;z-index:1;max-width:600px}
.hero-kicker{display:inline-flex;align-items:center;gap:12px;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.65);margin-bottom:24px}
.hero-kicker::before{content:'';width:24px;height:1px;background:rgba(255,255,255,.45)}
.hero h1{font-family:'Lora',serif;font-size:clamp(2.8rem,5vw,4.4rem);font-weight:400;line-height:1.12;color:#fff;margin-bottom:22px;letter-spacing:-.01em}
.hero h1 em{font-style:italic}
.hero-body{font-size:1rem;color:rgba(255,255,255,.68);max-width:420px;line-height:1.85;margin-bottom:36px;font-weight:300}
.hero-meta{display:flex;gap:14px;margin-bottom:36px;flex-wrap:wrap}
.hero-pill{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(6px);padding:8px 18px;border-radius:40px;font-size:.75rem;color:rgba(255,255,255,.8);letter-spacing:.06em}
.btn-hero{display:inline-block;padding:14px 36px;background:#fff;color:var(--ink);text-decoration:none;border-radius:40px;font-family:'Jost',sans-serif;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;transition:all .25s;font-weight:500}
.btn-hero:hover{background:var(--green3);transform:translateY(-2px)}
section{padding:96px 60px}
.inner{max-width:1040px;margin:0 auto}
.eyebrow{font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:18px}
h2{font-family:'Lora',serif;font-size:clamp(2rem,3.4vw,2.9rem);font-weight:400;line-height:1.2;color:var(--ink);margin-bottom:16px}
h2 em{font-style:italic;color:var(--green)}
.sub{font-size:1rem;color:var(--ink2);max-width:520px;line-height:1.85;margin-bottom:52px;font-weight:300}
p{color:var(--ink2);line-height:1.85;font-weight:300}
#over{background:var(--bg)}
.over-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;margin-top:28px}
.over-img{aspect-ratio:4/5;background:url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=85') center/cover;border-radius:2px}
.over-text{display:flex;flex-direction:column;gap:20px}
.over-text p{font-size:.95rem}
blockquote{font-family:'Lora',serif;font-style:italic;font-size:1.4rem;line-height:1.55;color:var(--green);padding-left:24px;border-left:2px solid var(--green3);margin:8px 0}
.founder-row{display:flex;flex-direction:column;gap:12px;margin-top:8px}
.founder{padding:16px 20px;background:var(--surface);border-radius:2px}
.founder h4{font-family:'Lora',serif;font-size:1rem;font-weight:500;color:var(--ink);margin-bottom:3px}
.founder p{font-size:.82rem;color:var(--ink3)}
#programma{background:var(--surface)}
.prog-grid{display:grid;grid-template-columns:1fr 320px;gap:72px;margin-top:52px;align-items:start}
.tl{list-style:none}
.tl li{display:grid;grid-template-columns:72px 1fr;gap:24px;padding:22px 0;border-bottom:1px solid var(--border)}
.tl li:last-child{border:none}
.tl-time{font-family:'Lora',serif;font-size:1.05rem;color:var(--green);padding-top:2px}
.tl-c h4{font-family:'Lora',serif;font-size:1rem;font-weight:500;color:var(--ink);margin-bottom:4px}
.tl-c p{font-size:.84rem}
.info-card{background:var(--green);color:#fff;padding:32px 28px;border-radius:2px;position:sticky;top:90px}
.info-card h3{font-family:'Lora',serif;font-size:1.6rem;font-weight:400;margin-bottom:4px}
.info-card .sub-time{font-size:.78rem;color:rgba(255,255,255,.6);letter-spacing:.08em;margin-bottom:28px}
.ic-row{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.1)}
.ic-row:last-of-type{border:none}
.ic-text h5{font-size:.85rem;color:#fff;font-weight:500;margin-bottom:2px}
.ic-text p{font-size:.75rem;color:rgba(255,255,255,.55)}
.card-btn{display:block;width:100%;text-align:center;padding:13px;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:40px;margin-top:22px;text-decoration:none;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;transition:background .2s}
.card-btn:hover{background:rgba(255,255,255,.25)}
#activiteiten{background:var(--bg)}
.act-list{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:2px;overflow:hidden;margin-top:52px}
.act-item{background:var(--bg);padding:36px 30px;transition:background .25s}
.act-item:hover{background:var(--surface)}
.act-num{font-family:'Lora',serif;font-size:.78rem;color:var(--ink3);margin-bottom:14px}
.act-item h3{font-family:'Lora',serif;font-size:1.1rem;font-weight:500;color:var(--ink);margin-bottom:9px}
.act-item p{font-size:.84rem}
#verhalen{background:var(--surface)}
.stories-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;flex-wrap:wrap;gap:20px}
.story-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px}
.story-card{background:var(--bg);border-radius:2px;overflow:hidden;cursor:pointer;transition:transform .3s ease,box-shadow .3s ease}
.story-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(44,44,40,.08)}
.story-img{display:none}
.story-body{padding:14px 16px 18px}
.story-date{font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin-bottom:8px}
.story-card h3{font-family:'Lora',serif;font-size:1.05rem;font-weight:500;color:var(--ink);margin-bottom:8px;line-height:1.4}
.story-card p{font-size:.83rem;color:var(--ink2)}
.read-more{display:inline-block;margin-top:14px;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--green);text-decoration:none}
.modal-backdrop{position:fixed;inset:0;background:rgba(44,44,40,.5);backdrop-filter:blur(4px);z-index:300;display:flex;align-items:center;justify-content:center;padding:40px;opacity:0;pointer-events:none;transition:opacity .3s}
.modal-backdrop.open{opacity:1;pointer-events:all}
.modal{background:var(--bg);max-width:640px;width:100%;max-height:80vh;overflow-y:auto;border-radius:3px;transform:translateY(20px);transition:transform .3s}
.modal-backdrop.open .modal{transform:none}
.modal-img{aspect-ratio:16/7;background-size:cover;background-position:center}
.modal-content{padding:36px 40px 48px}
.modal-content h2{font-family:'Lora',serif;font-size:1.7rem;color:var(--ink);margin-bottom:20px;font-weight:400}
.modal-content p{font-size:.93rem;margin-bottom:14px}
.modal-close{position:sticky;top:0;float:right;background:var(--bg);border:1px solid var(--border);width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;margin:14px 14px 0 0;transition:background .2s;z-index:1}
.modal-close:hover{background:var(--surface)}
#kalender{background:var(--bg)}
.cal-header{display:flex;align-items:center;gap:20px;margin-bottom:40px;margin-top:52px}
.cal-nav{background:none;border:1px solid var(--border);width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;color:var(--ink2);display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s}
.cal-nav:hover{background:var(--green);color:#fff;border-color:var(--green)}
.cal-month-title{font-family:'Lora',serif;font-size:1.4rem;font-weight:400;color:var(--ink);min-width:180px}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:2px;overflow:hidden}
.cal-day-header{background:var(--surface);text-align:center;padding:12px 4px;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink3)}
.cal-day-header.fri{color:var(--green)}
.cal-cell{background:var(--bg);min-height:88px;padding:10px 12px;position:relative;vertical-align:top}
.cal-cell.empty{background:var(--surface);opacity:.4}
.cal-cell.friday{background:#eef4ec;cursor:pointer;transition:background .2s}
.cal-cell.friday:hover{background:#e2eddf}
.cal-cell.today{outline:2px solid var(--green);outline-offset:-2px}
.day-num{font-size:.82rem;color:var(--ink3);font-weight:400;display:block;margin-bottom:6px}
.cal-cell.friday .day-num{color:var(--green);font-weight:500}
.cal-event{background:var(--green);color:#fff;padding:3px 7px;border-radius:2px;font-size:.68rem;line-height:1.4;display:block;margin-bottom:3px}
.cal-event.special{background:var(--accent)}
.event-popup{position:fixed;background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:20px 24px;max-width:280px;box-shadow:0 8px 32px rgba(44,44,40,.12);z-index:200;display:none}
.event-popup h4{font-family:'Lora',serif;font-size:1rem;font-weight:500;color:var(--ink);margin-bottom:6px}
.event-popup p{font-size:.8rem;color:var(--ink2);margin-bottom:12px}
.event-popup .ep-btn{display:inline-block;padding:8px 18px;background:var(--green);color:#fff;border-radius:40px;font-size:.74rem;text-decoration:none;letter-spacing:.06em}
#locatie{background:var(--surface)}
.loc-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-top:52px}
.map-wrap{border-radius:2px;overflow:hidden;aspect-ratio:4/3}
.map-wrap iframe{width:100%;height:100%;border:none;display:block}
.loc-items{display:flex;flex-direction:column;gap:20px}
.loc-row{display:flex;gap:16px;align-items:flex-start;padding:18px 20px;background:var(--bg);border-radius:2px}
.loc-row h4{font-family:'Lora',serif;font-size:.98rem;font-weight:500;color:var(--ink);margin-bottom:3px}
.loc-row p{font-size:.82rem}
#prijzen{background:var(--bg)}
.price-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:52px}
.pc{border:1px solid var(--border);border-radius:2px;overflow:hidden}
.pc-top{padding:32px 34px 24px;background:var(--surface)}
.pc-top.main{background:var(--green)}
.pc-label{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin-bottom:8px}
.pc-top.main .pc-label{color:rgba(255,255,255,.55)}
.pc-amount{font-family:'Lora',serif;font-size:3rem;font-weight:400;color:var(--ink);line-height:1}
.pc-top.main .pc-amount{color:#fff}
.pc-amount sup{font-size:1.2rem;vertical-align:super}
.pc-note{font-size:.78rem;color:var(--ink3);margin-top:5px}
.pc-top.main .pc-note{color:rgba(255,255,255,.5)}
.pc-body{padding:24px 34px 32px}
.pc-list{list-style:none;margin-bottom:24px}
.pc-list li{display:flex;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);font-size:.84rem;color:var(--ink2);align-items:flex-start}
.pc-list li:last-child{border:none}
.pc-list li::before{content:'–';color:var(--green);flex-shrink:0}
.pc-cta{display:block;width:100%;text-align:center;padding:12px;background:var(--green);color:#fff;text-decoration:none;border-radius:40px;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;transition:background .2s}
.pc-cta:hover{background:#3a5038}
.pc-cta.sec{background:transparent;color:var(--green);border:1px solid var(--green3)}
.pc-cta.sec:hover{background:var(--green3)}
.wmo{margin-top:16px;padding:14px 16px;background:var(--surface);border-radius:2px;font-size:.78rem;color:var(--ink2);line-height:1.7;border-left:2px solid var(--green3)}
#inschrijven{background:var(--surface)}
.form-layout{display:grid;grid-template-columns:1fr 400px;gap:80px;align-items:start;margin-top:52px}
.form-card{background:var(--bg);border:1px solid var(--border);border-radius:2px;padding:40px}
.form-card h3{font-family:'Lora',serif;font-size:1.4rem;font-weight:400;color:var(--ink);margin-bottom:4px}
.form-meta{font-size:.78rem;color:var(--ink3);margin-bottom:28px}
.field{margin-bottom:16px}
.field label{display:block;font-size:.67rem;letter-spacing:.13em;text-transform:uppercase;color:var(--ink3);margin-bottom:7px}
.field input,.field select,.field textarea{width:100%;padding:11px 14px;border:1px solid var(--border);border-radius:2px;font-family:'Jost',sans-serif;font-size:.9rem;color:var(--ink);background:var(--bg);transition:border-color .2s;-webkit-appearance:none;appearance:none;font-weight:300}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--green)}
.field textarea{resize:vertical;min-height:80px}
.field select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%236d8c6a' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:34px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.check-row{display:flex;gap:9px;align-items:flex-start;font-size:.8rem;color:var(--ink2);margin-bottom:18px;line-height:1.65}
.check-row input[type=checkbox]{width:15px;height:15px;min-width:15px;margin-top:3px;accent-color:var(--green);cursor:pointer}
.sub-btn{width:100%;padding:13px;background:var(--green);color:#fff;border:none;border-radius:40px;font-family:'Jost',sans-serif;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:background .2s,transform .2s;font-weight:500}
.sub-btn:hover{background:#3a5038;transform:translateY(-2px)}
.success-state{display:none;text-align:center;padding:48px 20px}
.success-state .ico{font-size:2.5rem;margin-bottom:14px}
.success-state h3{font-family:'Lora',serif;font-size:1.6rem;color:var(--ink);font-weight:400;margin-bottom:8px}
.success-state p{font-size:.88rem;color:var(--ink3)}
.aside-list{list-style:none;display:flex;flex-direction:column;gap:10px}
.aside-list li{display:flex;gap:10px;font-size:.84rem;color:var(--ink2);align-items:flex-start}
.aside-list li::before{content:'✓';color:var(--green);font-weight:500;flex-shrink:0}
footer{background:var(--ink);padding:60px 60px 36px;color:rgba(255,255,255,.4)}
.foot-inner{max-width:1040px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:52px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:28px}
.foot-brand{font-family:'Lora',serif;font-size:1.3rem;color:#fff;font-weight:400;margin-bottom:10px}
.foot-col h5{font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:14px}
.foot-col ul{list-style:none}
.foot-col li{font-size:.82rem;padding:4px 0}
.foot-col a{color:rgba(255,255,255,.38);text-decoration:none;transition:color .2s}
.foot-col a:hover{color:rgba(255,255,255,.75)}
.foot-copy{max-width:1040px;margin:0 auto;font-size:.74rem}
@media(max-width:860px){
  nav{padding:18px 22px}nav.stuck{padding:14px 22px}.nav-links{display:none}
  section{padding:68px 22px}footer{padding:48px 22px 28px}
  .over-grid,.prog-grid,.act-list,.loc-grid,.price-grid,.form-layout,.story-grid,.foot-inner{grid-template-columns:1fr}
  .hero{padding:0 22px 80px}.act-list{grid-template-columns:1fr 1fr}
  .stories-header{flex-direction:column;align-items:flex-start}
}
`;
document.head.appendChild(styleTag);

document.body.innerHTML = `
<nav id="nav">
  <a class="logo" href="/">Bos<span>splek</span></a>
  <ul class="nav-links">
    <li><a href="#over">Over ons</a></li>
    <li><a href="#programma">Programma</a></li>
    <li><a href="#kalender">Kalender</a></li>
    <li><a href="#verhalen">Verhalen</a></li>
    <li><a href="#locatie">Locatie</a></li>
    <li><a href="#inschrijven" class="nav-cta">Aanmelden</a></li>
  </ul>
</nav>

<section class="hero" style="padding:0">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <span class="hero-kicker">Wassenaar · Paauwlaan 12</span>
    <h1>Vertragen<br>in het bos.<br><em>Elke vrijdag.</em></h1>
    <p class="hero-body">Loop jij vast op school, thuis, of met jezelf? Bossplek is een ochtend buiten voor jongeren van 12–25. Vuur maken, wandelen, samen koken. Begeleid door twee ervaren jeugdprofessionals die naast je staan.</p>
    <div class="hero-meta">
      <span class="hero-pill">Vrijdag 10:00 – 14:00</span>
      <span class="hero-pill">Paauwlaan 12, Wassenaar</span>
      <span class="hero-pill">Max. 12 personen</span>
    </div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">
      <a href="#inschrijven" class="btn-hero">Plan een kennismaking</a>
      <a href="tel:+31644694415" style="color:rgba(255,255,255,.85);text-decoration:none;font-size:.82rem;letter-spacing:.06em;border-bottom:1px solid rgba(255,255,255,.3);padding-bottom:2px">Of bel/app ons: 06 44 69 44 15 →</a>
    </div>
  </div>
</section>

<section id="over">
  <div class="inner">
    <span class="eyebrow">Over Bossplek</span>
    <h2>Natuur is niet<br><em>iets buiten jou</em></h2>
    <p class="sub">We denken vaak aan natuur als iets anders dan onszelf. Natuur is groen, ruige landschappen, vossen en vogels. En wat zijn wij?</p>
    <div class="over-grid">
      <div class="over-img"></div>
      <div class="over-text">
        <p>Bossplek is een plek waar jongeren en jongvolwassenen op adem komen — in het Wassenaarse bos, op het terrein van Scouting De Paauw. Geen therapie, geen schema, geen verplichtingen. Gewoon een plek om te zijn.</p>
        <blockquote>We staan naast je, niet boven je.</blockquote>
        <p>We helpen je bereiken wat je blij maakt — ook al is dat eerder nooit gelukt. Niet met een protocol, maar met een vuur, een wandeling en tijd om even niets te hoeven.</p>
        <p>We geloven dat de natuur iets doet wat woorden niet kunnen. Dat een vuur aansteken, samen eten of zwijgend door het bos lopen meer losmaakt dan een gesprek op een stoel. Niet omdat het magisch is — maar omdat je er echt bij bent.</p>
        <p>We verbinden door samen te koken op open vuur, te wandelen door Park De Paauw, te kanoën op de Wetering. Door eerlijke, gelijkwaardige gesprekken — zonder oordeel, zonder doel. Theodoor en Stan lopen naast je, niet voor je uit.</p>
        <div style="background:var(--surface);border-radius:2px;padding:22px 24px;margin:4px 0">
          <h4 style="font-family:'Lora',serif;font-size:1rem;font-weight:500;color:var(--ink);margin-bottom:12px">Is Bossplek iets voor jou?</h4>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
            <li style="display:flex;gap:9px;font-size:.85rem;color:var(--ink2)"><span style="color:var(--green)">✓</span>Je loop
