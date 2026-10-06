/* Sakura interactive experience */

const dietData = {
  "PCOS": {
    "have": [
      "Vegetables",
      "Whole grains",
      "Beans and lentils",
      "Eggs",
      "Fish",
      "Nuts and seeds",
      "Berries and other whole fruits",
      "Yogurt or curd"
    ],
    "limit": [
      "Sugary drinks",
      "Sweets",
      "Refined carbohydrates",
      "Highly processed foods",
      "Frequent deep-fried foods"
    ],
    "note": ""
  },
  "PMS": {
    "have": [
      "Leafy greens",
      "Bananas",
      "Nuts and seeds",
      "Whole grains",
      "Yogurt or curd",
      "Legumes",
      "Fatty fish",
      "Plenty of water"
    ],
    "limit": [
      "Excess salt",
      "Caffeine",
      "Alcohol",
      "Highly processed foods",
      "Excess sugar"
    ],
    "note": ""
  },
  "PMDD": {
    "have": [
      "Whole grains",
      "Vegetables",
      "Fruits",
      "Legumes",
      "Nuts and seeds",
      "Fatty fish",
      "Protein-rich foods"
    ],
    "limit": [
      "Alcohol",
      "Excess caffeine",
      "High-sugar foods",
      "Highly processed foods"
    ],
    "note": ""
  },
  "Amenorrhea": {
    "have": [
      "Adequate calories",
      "Protein",
      "Healthy fats",
      "Whole grains",
      "Dairy or fortified alternatives",
      "Fruits",
      "Vegetables"
    ],
    "limit": [
      "Extreme dieting",
      "Prolonged fasting",
      "Severe calorie restriction"
    ],
    "note": "Persistent absence of periods should be medically evaluated because it can have many causes."
  },
  "Dysmenorrhea": {
    "have": [
      "Fatty fish",
      "Nuts and seeds",
      "Leafy greens",
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Ginger"
    ],
    "limit": [
      "Excess caffeine",
      "Alcohol",
      "Very salty foods",
      "Highly processed foods"
    ],
    "note": ""
  },
  "Menorrhagia": {
    "have": [
      "Lentils and beans",
      "Spinach and leafy greens",
      "Meat",
      "Eggs",
      "Iron-rich foods",
      "Vitamin-C-rich fruits",
      "Protein-rich foods"
    ],
    "limit": [
      "Excess alcohol",
      "Tea or coffee immediately with iron-rich meals"
    ],
    "note": "Heavy menstrual bleeding can contribute to iron deficiency. Persistent or very heavy bleeding should be medically evaluated."
  },
  "Irregular Periods": {
    "have": [
      "Vegetables",
      "Whole grains",
      "Legumes",
      "Protein-rich foods",
      "Healthy fats",
      "Whole fruits"
    ],
    "limit": [
      "Highly processed foods",
      "Sugary drinks",
      "Crash diets",
      "Excessive alcohol"
    ],
    "note": ""
  },
  "Endometriosis": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Omega-3-rich fish",
      "Nuts and seeds"
    ],
    "limit": [
      "Highly processed foods",
      "Excess processed or red meat",
      "Alcohol",
      "Personal trigger foods"
    ],
    "note": "Evidence for dietary approaches in endometriosis is limited. Diet should not be presented as a cure."
  },
  "Adenomyosis": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Fatty fish",
      "Nuts and seeds",
      "Iron-rich foods"
    ],
    "limit": [
      "Highly processed foods",
      "Excess alcohol",
      "Excessive added sugar"
    ],
    "note": ""
  },
  "Uterine Fibroids": {
    "have": [
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Beans and lentils",
      "Nuts and seeds",
      "Iron-rich foods"
    ],
    "limit": [
      "Highly processed foods",
      "Excess alcohol",
      "Frequent processed meat",
      "Frequent excess red meat"
    ],
    "note": ""
  },
  "Ovarian Cysts": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Protein-rich foods",
      "Healthy fats"
    ],
    "limit": [
      "Excess added sugar",
      "Highly processed foods"
    ],
    "note": "Food generally does not make an ovarian cyst disappear."
  },
  "Ovarian Torsion": {
    "have": [
      "A normal balanced diet as medically appropriate",
      "Adequate hydration",
      "Nutrient-rich foods"
    ],
    "limit": [
      "There is no specific food that treats ovarian torsion"
    ],
    "note": "There is no specific food that treats ovarian torsion. This is a medical emergency requiring urgent medical evaluation."
  },
  "Endometrial Polyps": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Lean protein",
      "Healthy fats"
    ],
    "limit": [
      "Highly processed foods",
      "Excess added sugar",
      "Excessive alcohol"
    ],
    "note": "Diet does not remove an endometrial polyp."
  },
  "Pelvic Inflammatory Disease": {
    "have": [
      "Protein-rich foods",
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Adequate fluids"
    ],
    "limit": [
      "Excess alcohol",
      "Alcohol when it interacts with prescribed medication"
    ],
    "note": "Food does not treat PID. Medical treatment and antibiotics may be required."
  },
  "Vaginitis": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Protein-rich foods",
      "Adequate fluids"
    ],
    "limit": [
      "Excess added sugar",
      "Excess alcohol"
    ],
    "note": "Diet depends on the cause of vaginitis. Food does not replace appropriate medical evaluation or treatment."
  },
  "Bacterial Vaginosis": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Yogurt or fermented foods if tolerated"
    ],
    "limit": [
      "Excess alcohol",
      "Highly processed foods"
    ],
    "note": "Food does not replace medical treatment for bacterial vaginosis."
  },
  "Yeast Infection": {
    "have": [
      "Balanced meals",
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Protein-rich foods"
    ],
    "limit": [
      "Excess added sugar",
      "Highly processed foods"
    ],
    "note": "A strict 'candida diet' should not be presented as a proven cure."
  },
  "Sexually Transmitted Infections": {
    "have": [
      "Protein-rich foods",
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Adequate fluids"
    ],
    "limit": [
      "Excess alcohol",
      "Alcohol when it interacts with prescribed medication"
    ],
    "note": "Food does not cure an STI. Appropriate testing and medical treatment are necessary."
  },
  "Ovulation Disorders": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Eggs",
      "Fish",
      "Nuts and seeds",
      "Adequate protein"
    ],
    "limit": [
      "Highly processed foods",
      "Excessive added sugar",
      "Crash diets",
      "Excessive alcohol"
    ],
    "note": ""
  },
  "Infertility": {
    "have": [
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Fish",
      "Nuts",
      "Seeds",
      "Healthy fats"
    ],
    "limit": [
      "Excess alcohol",
      "Highly processed foods",
      "Excessive added sugar"
    ],
    "note": "Nutrition can support overall health, but diet alone does not treat every cause of infertility."
  },
  "Ectopic Pregnancy": {
    "have": [
      "A normal balanced diet as medically appropriate",
      "Protein-rich foods",
      "Fruits and vegetables",
      "Adequate fluids"
    ],
    "limit": [
      "There is no food that treats an ectopic pregnancy"
    ],
    "note": "There is no food that treats an ectopic pregnancy. It requires urgent medical evaluation and treatment."
  },
  "Miscarriage": {
    "have": [
      "Adequate protein",
      "Iron-rich foods",
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Adequate fluids"
    ],
    "limit": [
      "Alcohol",
      "Foods unsafe during pregnancy if pregnancy is ongoing"
    ],
    "note": "Food generally does not cause or prevent most miscarriages. Do not use dietary advice to assign blame."
  },
  "Perimenopause": {
    "have": [
      "Calcium-rich foods",
      "Vitamin-D sources",
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Fish",
      "Nuts and seeds",
      "Adequate protein"
    ],
    "limit": [
      "Excess alcohol",
      "Caffeine if it triggers symptoms",
      "Highly processed foods",
      "Excess added sugar"
    ],
    "note": ""
  },
  "Menopause": {
    "have": [
      "Calcium-rich foods",
      "Vitamin-D sources",
      "Protein",
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Legumes",
      "Fish",
      "Nuts and seeds"
    ],
    "limit": [
      "Excess alcohol",
      "Highly processed foods",
      "Excess added sugar"
    ],
    "note": "Dietary changes may support overall health, but specific foods are not guaranteed treatments for hot flashes."
  },
  "Postmenopausal Bleeding": {
    "have": [
      "Balanced nutrient-dense foods",
      "Iron-rich foods if there has been blood loss",
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Protein-rich foods"
    ],
    "limit": [
      "Excess alcohol",
      "Highly processed foods"
    ],
    "note": "Postmenopausal bleeding should be medically evaluated rather than managed with food."
  },
  "Vaginal Atrophy": {
    "have": [
      "Adequate hydration",
      "Protein",
      "Fruits",
      "Vegetables",
      "Whole grains",
      "Healthy fats",
      "Calcium-rich foods",
      "Vitamin-D-rich foods"
    ],
    "limit": [
      "Excess alcohol",
      "Highly processed foods"
    ],
    "note": "Food cannot reverse vaginal atrophy. Medical treatments can be much more effective."
  }
};

const categories = [
  {name:"Menstrual & Hormonal Conditions", conditions:["PCOS","PMS","PMDD","Amenorrhea","Dysmenorrhea","Menorrhagia","Irregular Periods"]},
  {name:"Uterine & Ovarian Conditions", conditions:["Endometriosis","Adenomyosis","Uterine Fibroids","Ovarian Cysts","Ovarian Torsion","Endometrial Polyps"]},
  {name:"Vaginal & Reproductive Infections", conditions:["Pelvic Inflammatory Disease","Vaginitis","Bacterial Vaginosis","Yeast Infection","Sexually Transmitted Infections"]},
  {name:"Fertility & Pregnancy", conditions:["Ovulation Disorders","Infertility","Ectopic Pregnancy","Miscarriage"]},
  {name:"Menopause & Perimenopause", conditions:["Perimenopause","Menopause","Postmenopausal Bleeding","Vaginal Atrophy"]}
];

let selectedConditions = JSON.parse(localStorage.getItem("sakuraSelections") || "[]");
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const mobileMenu = $("#mobileMenu");
const navLinks = $("#navLinks");
mobileMenu?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  mobileMenu.setAttribute("aria-expanded", open);
  mobileMenu.textContent = open ? "×" : "☰";
});
$$('.nav-links a').forEach(a => a.addEventListener('click', (e) => {
  navLinks.classList.remove('mobile-open');
  mobileMenu.textContent='☰';
  mobileMenu.setAttribute('aria-expanded','false');
  const target=a.getAttribute('href');
  const section=target ? document.querySelector(target) : null;
  if(section?.classList.contains('journey-locked')){
    e.preventDefault();
    showToast('Start with a choice first — Sakura will guide you from there.');
  }
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold:.12});
$$('.reveal').forEach(el => observer.observe(el));

const choiceContent = {
  period:{eyebrow:"MY PERIOD",title:"Let's start with your cycle.",text:"Choose a period topic and Sakura will bring the most relevant information forward — one step at a time.",action:"Explore period topics →",href:"#support"},
  hormones:{eyebrow:"MY HORMONES",title:"Let's make hormones easier to understand.",text:"Choose a hormonal topic and we'll keep the next steps focused on what you actually came here to explore.",action:"Explore hormone topics →",href:"#support"},
  reproductive:{eyebrow:"REPRODUCTIVE HEALTH",title:"Start with the question on your mind.",text:"Choose a reproductive-health area and Sakura will narrow the journey to information that is relevant to you.",action:"Explore reproductive topics →",href:"#support"},
  nutrition:{eyebrow:"MY NUTRITION",title:"Let's start with nourishment.",text:"Explore simple meal inspiration first. If you want more specific support afterwards, Sakura can take you there.",action:"Explore nutrition →",href:"#nutrition"}
};

const journeySections = {
  learn: document.querySelector('#learn'),
  nutrition: document.querySelector('#nutrition'),
  support: document.querySelector('#support'),
  empower: document.querySelector('#empower'),
  resources: document.querySelector('#resources'),
  comfort: document.querySelector('.comfort-section'),
  about: document.querySelector('#about')
};
let activeTopic = null;
let journeyStage = 0;

const topicConditions = {
  period: ["PMS","PMDD","Dysmenorrhea","Menorrhagia","Irregular Periods","Amenorrhea","Endometriosis","Adenomyosis","Uterine Fibroids"],
  hormones: ["PCOS","PMS","PMDD","Amenorrhea","Irregular Periods","Ovulation Disorders","Perimenopause","Menopause"],
  reproductive: ["Ovarian Cysts","Ovarian Torsion","Endometrial Polyps","Pelvic Inflammatory Disease","Vaginitis","Bacterial Vaginosis","Yeast Infection","Sexually Transmitted Infections","Ovulation Disorders","Infertility","Ectopic Pregnancy","Miscarriage"],
  nutrition: []
};

function lockFrom(stage){
  const order=['learn','nutrition','support','empower','resources','comfort','about'];
  order.forEach((name,index)=>{
    const el=journeySections[name];
    if(el) el.classList.toggle('journey-locked', index>=stage);
  });
}

function unlock(name){
  const el=journeySections[name];
  if(!el) return;
  el.classList.remove('journey-locked');
  el.classList.add('journey-unlocked');
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),80);
}

function filterJourneyTopic(topic){
  activeTopic=topic;
  const allowed=new Set(topicConditions[topic]||[]);
  document.querySelectorAll('.category').forEach(category=>{
    const items=[...category.querySelectorAll('.condition-item')];
    let visible=0;
    items.forEach(item=>{
      const show=topic==='nutrition' || allowed.has(item.dataset.condition);
      item.hidden=!show;
      if(show) visible++;
    });
    category.hidden=visible===0;
  });
  const learnCards=document.querySelectorAll('[data-learn-topic]');
  learnCards.forEach(card=>card.hidden=card.dataset.learnTopic!==topic && !(topic==='reproductive' && card.dataset.learnTopic==='reproductive'));
  if(topic==='period' || topic==='hormones' || topic==='reproductive'){
    document.querySelector('#support .browser-top h3').textContent=`Explore ${topic==='period'?'period':topic==='hormones'?'hormone':'reproductive'} topics`;
    document.querySelector('#support .browser-top .mini-label').textContent='A FOCUSED STARTING POINT';
  }
}

$$('.choice-card').forEach(card => card.addEventListener('click', () => {
  const topic=card.dataset.topic;
  const item=choiceContent[topic];
  activeTopic=topic;
  $$('.choice-card').forEach(c=>c.classList.toggle('active',c===card));
  $('#choiceEyebrow').textContent=item.eyebrow;
  $('#choiceTitle').textContent=item.title;
  $('#choiceText').textContent=item.text;
  const action=$('#choiceAction');
  action.textContent=item.action;
  lockFrom(99);
  if(topic==='nutrition'){
    journeyStage=1;
    unlock('nutrition');
  }else{
    journeyStage=2;
    unlock('support');
    filterJourneyTopic(topic);
  }
}));

// The user moves forward through the experience instead of scrolling through everything at once.
document.querySelectorAll('[data-next="nutrition"]').forEach(btn=>btn.addEventListener('click',()=>{
  journeyStage=1;
  unlock('nutrition');
}));

document.querySelector('#nutritionNext')?.addEventListener('click',e=>{
  e.preventDefault();
  journeyStage=2;
  unlock('support');
  if(activeTopic && activeTopic!=='nutrition') filterJourneyTopic(activeTopic);
});

document.querySelectorAll('[data-next="resources"]').forEach(btn=>btn.addEventListener('click',()=>{
  journeyStage=5;
  unlock('resources');
  const comfort=journeySections.comfort;
  if(comfort) comfort.classList.remove('journey-locked');
  const about=journeySections.about;
  if(about) about.classList.remove('journey-locked');
}));

const categoryList=$('#categoryList');
const selectedContainer=$('#selectedConditions');
const selectionCount=$('#selectionCount');
const searchInput=$('#conditionSearch');
const dietContainer=$('#dietContainer');

function renderCategories(search='') {
  const query=search.trim().toLowerCase();
  categoryList.innerHTML='';
  categories.forEach(category=>{
    const conditions=category.conditions.filter(c=>c.toLowerCase().includes(query));
    if(query&&!conditions.length)return;
    const el=document.createElement('div');
    el.className='category';
    el.innerHTML=`<button class="category-header" type="button"><span class="category-name">${category.name}</span><span class="category-meta">${conditions.length} conditions <span class="category-arrow">↓</span></span></button><div class="condition-items">${conditions.map(c=>`<button class="condition-item ${selectedConditions.includes(c)?'selected':''}" type="button" data-condition="${c}">${c}</button>`).join('')}</div>`;
    categoryList.appendChild(el);
    el.querySelector('.category-header').addEventListener('click',()=>el.classList.toggle('open'));
    el.querySelectorAll('.condition-item').forEach(btn=>btn.addEventListener('click',()=>toggleCondition(btn.dataset.condition)));
  });
}

function toggleCondition(condition) {
  selectedConditions=selectedConditions.includes(condition)
    ?selectedConditions.filter(c=>c!==condition)
    :[...selectedConditions,condition];
  localStorage.setItem('sakuraSelections',JSON.stringify(selectedConditions));
  updateSelectionUI();
  renderCategories(searchInput.value);
  if(selectedConditions.length===1){
    journeyStage=3;
    unlock('learn');
    setTimeout(()=>{
      if(activeTopic) filterJourneyTopic(activeTopic);
    },100);
  }
}

function updateSelectionUI() {
  const n=selectedConditions.length;
  selectionCount.textContent=`${n} ${n===1?'condition':'conditions'}`;
  if(!n){
    selectedContainer.innerHTML='<div class="empty-selection"><span>♡</span><p>Nothing selected yet.<br>Choose a condition to begin.</p></div>';
    return;
  }
  selectedContainer.innerHTML=selectedConditions.map(c=>`<div class="selected-chip"><span>${c}</span><button type="button" aria-label="Remove ${c}" data-remove="${c}">×</button></div>`).join('');
  selectedContainer.querySelectorAll('[data-remove]').forEach(btn=>btn.addEventListener('click',()=>toggleCondition(btn.dataset.remove)));
}
searchInput?.addEventListener('input',e=>renderCategories(e.target.value));
$('#clearSelections')?.addEventListener('click',()=>{
  selectedConditions=[];
  localStorage.removeItem('sakuraSelections');
  updateSelectionUI();
  renderCategories(searchInput.value);
});

function showDietGuide() {
  if(!selectedConditions.length){
    showToast('Choose at least one health area first.');
    document.querySelector('#support').scrollIntoView({behavior:'smooth'});
    return;
  }
  const name=selectedConditions[0];
  const d=dietData[name]||{have:[],limit:[],note:'General nutrition information only.'};
  dietContainer.innerHTML=`<div class="diet-guide"><div class="diet-guide-head"><div><span class="eyebrow olive-eyebrow">NUTRITION SUPPORT</span><h3>${name}</h3><p class="diet-guide-sub">General nutrition information — not a treatment plan.</p></div><span class="tag">${selectedConditions.length} selected</span></div><div class="diet-columns"><div class="diet-box have"><h4>🌿 Foods to include</h4><ul>${d.have.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="diet-box limit"><h4>🌸 Things to limit or consider</h4><ul>${d.limit.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>${d.note?`<div class="diet-note"><strong>Important:</strong> ${d.note}</div>`:''}</div>`;
  dietContainer.scrollIntoView({behavior:'smooth',block:'center'});
  journeyStage=4;
  setTimeout(()=>unlock('empower'),350);
}
$('#viewNutrition')?.addEventListener('click',showDietGuide);
$('.nutrition-callout .btn')?.addEventListener('click',e=>{
  e.preventDefault();
  if(selectedConditions.length) showDietGuide();
  else document.querySelector('#support').scrollIntoView({behavior:'smooth'});
});

const empowerContent={
  understand:{icon:'🌸',eyebrow:'UNDERSTAND',title:'Know what is happening.',text:'Use Sakura to explore conditions, symptoms and health topics in simple language. Information is here to help you ask better questions, not diagnose you.'},
  nourish:{icon:'🥗',eyebrow:'NOURISH',title:'Take care of yourself.',text:'Explore general nutrition guidance and simple meal inspiration. Food can support overall wellbeing, but it is not a replacement for medical treatment.'},
  prepare:{icon:'♡',eyebrow:'PREPARE',title:'Feel ready to speak up.',text:'Save questions, notice patterns and know when it may be time to talk to a healthcare professional. Being prepared is a form of self-advocacy.'}
};
$$('.empower-card').forEach(card=>card.addEventListener('click',()=>{
  const x=empowerContent[card.dataset.info];
  $('#empowerIcon').textContent=x.icon;
  $('#empowerEyebrow').textContent=x.eyebrow;
  $('#empowerTitle').textContent=x.title;
  $('#empowerText').textContent=x.text;
  $('#empowerPanel').scrollIntoView({behavior:'smooth',block:'center'});
  if(journeyStage<5){
    journeyStage=4;
    unlock('empower');
  }
}));

const guides={
  'period-pain':{tag:'PERIOD HEALTH',title:'Why do periods hurt?',body:`<p>Period pain is common, but severe or worsening pain deserves attention. Pain can happen because the uterus contracts during menstruation, and conditions such as endometriosis or adenomyosis can also cause significant symptoms.</p><p>Keep track of how often pain occurs, how severe it is and whether it interferes with school, work or everyday life. That information can make a healthcare conversation more useful.</p><ul><li>Notice patterns across cycles.</li><li>Record symptoms that happen alongside the pain.</li><li>Seek professional advice if pain is severe, new, worsening or affecting daily life.</li></ul>`},
  pcos:{tag:'HORMONES',title:'What is PCOS?',body:`<p>Polycystic ovary syndrome is a hormonal condition that can affect ovulation, menstrual cycles and androgen levels. People can experience it differently, and symptoms alone cannot confirm a diagnosis.</p><p>Learning about symptoms, possible tests and treatment options can help you have a more informed conversation with a qualified healthcare professional.</p><ul><li>Cycles may be irregular or infrequent.</li><li>Some people experience acne or increased hair growth.</li><li>PCOS is manageable, and treatment depends on individual goals and symptoms.</li></ul>`},
  care:{tag:'WHEN TO SEEK CARE',title:'When should I seek help?',body:`<p>Sakura is for education, not diagnosis. A healthcare professional can assess symptoms in context and decide whether examination, testing or treatment is needed.</p><ul><li>Symptoms are severe, sudden, persistent or getting worse.</li><li>Bleeding is unusually heavy or happens after menopause.</li><li>Pain, fever, fainting or other worrying symptoms occur.</li><li>A symptom is interfering with normal daily life or causing ongoing concern.</li></ul><p>If symptoms feel like an emergency, seek urgent medical care rather than relying on an educational website.</p>`}
};
const modal=$('#guideModal');
$$('[data-guide]').forEach(btn=>btn.addEventListener('click',()=>{
  const g=guides[btn.dataset.guide];
  $('#modalTag').textContent=g.tag;
  $('#modalTitle').textContent=g.title;
  $('#modalBody').innerHTML=g.body;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}));
$$('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function showToast(message){
  const t=$('#toast');
  t.textContent=message;
  t.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}

renderCategories();
updateSelectionUI();
lockFrom(99);

/* Focused Explore Conditions journey — keeps each condition and its nutrition help together. */
(function initFocusedExplore(){
  const section = document.querySelector('#explore-conditions');
  const grid = document.querySelector('#exploreConditionGrid');
  const search = document.querySelector('#exploreConditionSearch');
  const detail = document.querySelector('#conditionDetail');
  const heading = document.querySelector('#exploreConditionHeading');
  const areaButtons = [...document.querySelectorAll('.area-pill')];
  const bookTrack = document.querySelector('#conditionBookTrack');
  const bookDots = document.querySelector('#bookDots');
  const bookPrev = document.querySelector('#bookPrev');
  const bookNext = document.querySelector('#bookNext');
  const bookPages = bookTrack ? [...bookTrack.querySelectorAll('.book-page')] : [];
  let bookIndex = 0;
  if(!section || !grid) return;

  function setBookPage(index, smooth=true){
    if(!bookTrack || !bookPages.length) return;
    bookIndex = Math.max(0, Math.min(index, bookPages.length - 1));
    bookTrack.style.transitionDuration = smooth ? '.72s' : '0s';
    bookTrack.style.transform = `translateX(-${bookIndex * 100}%)`;
    if(bookDots){
      [...bookDots.children].forEach((dot,i)=>dot.classList.toggle('active',i===bookIndex));
    }
    if(bookPrev) bookPrev.disabled = bookIndex === 0;
    if(bookNext) bookNext.disabled = bookIndex === bookPages.length - 1;
  }

  if(bookDots){
    bookDots.innerHTML = bookPages.map((_,i)=>`<button type=\"button\" class=\"book-dot${i===0?' active':''}\" aria-label=\"Go to page ${i+1}\"></button>`).join('');
    [...bookDots.children].forEach((dot,i)=>dot.addEventListener('click',()=>setBookPage(i)));
  }
  bookPrev?.addEventListener('click',()=>setBookPage(bookIndex-1));
  bookNext?.addEventListener('click',()=>setBookPage(bookIndex+1));

  // Gentle touch / mouse swipe, so the guide feels like turning through a little book.
  const bookViewport = document.querySelector('#conditionBookViewport');
  let swipeStartX = null;
  bookViewport?.addEventListener('pointerdown',e=>{ swipeStartX = e.clientX; });
  bookViewport?.addEventListener('pointerup',e=>{
    if(swipeStartX === null) return;
    const dx = e.clientX - swipeStartX;
    if(Math.abs(dx) > 45) setBookPage(bookIndex + (dx < 0 ? 1 : -1));
    swipeStartX = null;
  });
  bookViewport?.addEventListener('pointercancel',()=>{ swipeStartX=null; });
  document.addEventListener('keydown',e=>{
    if(!detail.hidden && (e.key==='ArrowRight' || e.key==='ArrowLeft')) setBookPage(bookIndex + (e.key==='ArrowRight' ? 1 : -1));
  });

  const topicLabels = {period:'PERIOD', hormones:'HORMONES', reproductive:'REPRODUCTIVE HEALTH', all:'ALL CONDITIONS'};
  const topicConditionsFocused = {
    period: topicConditions.period,
    hormones: topicConditions.hormones,
    reproductive: topicConditions.reproductive,
    all: categories.flatMap(c=>c.conditions)
  };

  const blurbs = {
    'Period pain':'Painful cramps or discomfort around your period.',
    'Dysmenorrhea':'The medical term commonly used for painful periods.',
    'PMS':'Physical and emotional symptoms that can happen before a period.',
    'PMDD':'A more severe, cycle-related pattern of mood and other symptoms.',
    'Menorrhagia':'Very heavy or prolonged menstrual bleeding.',
    'Irregular Periods':'Periods that vary substantially in timing or pattern.',
    'Amenorrhea':'The absence of periods for a period of time when they are expected.',
    'PCOS':'A hormonal condition that can affect cycles, ovulation and androgen levels.',
    'Endometriosis':'Tissue similar to the uterine lining growing outside the uterus.',
    'Adenomyosis':'Uterine-lining-like tissue growing into the muscular wall of the uterus.',
    'Uterine Fibroids':'Non-cancerous growths that develop in or around the uterus.',
    'Ovarian Cysts':'Fluid-filled sacs that can develop on an ovary.',
    'Ovarian Torsion':'When an ovary twists around the tissues supporting it.',
    'Endometrial Polyps':'Growths that develop from the lining of the uterus.',
    'Pelvic Inflammatory Disease':'An infection affecting parts of the upper reproductive system.',
    'Vaginitis':'Inflammation or irritation of the vagina with several possible causes.',
    'Bacterial Vaginosis':'A common vaginal condition involving a change in the balance of bacteria.',
    'Yeast Infection':'A vaginal yeast overgrowth that can cause itching or discharge.',
    'Sexually Transmitted Infections':'Infections that can be passed through sexual contact.',
    'Ovulation Disorders':'Problems with ovulation that can affect menstrual cycles and fertility.',
    'Infertility':'Difficulty becoming pregnant after trying for a period of time.',
    'Ectopic Pregnancy':'A pregnancy developing outside the main cavity of the uterus.',
    'Miscarriage':'A pregnancy that ends on its own before the fetus can survive outside the uterus.',
    'Perimenopause':'The transition toward menopause, when cycles and hormones can change.',
    'Menopause':'The point marking the end of menstrual periods after the transition of perimenopause.',
    'Postmenopausal Bleeding':'Bleeding after menopause that should be medically assessed.',
    'Vaginal Atrophy':'Changes in vaginal tissues that can happen when estrogen levels fall.'
  };

  function areaForCondition(condition){
    if(topicConditionsFocused.period.includes(condition)) return 'period';
    if(topicConditionsFocused.hormones.includes(condition)) return 'hormones';
    return 'reproductive';
  }

  // Extra educational detail for the first three pages of the book.
  // These stay general and supportive; they are not used to diagnose a condition.
  const conditionInsights = {
    'Period pain': {
      meaning:['Cramps can happen as the uterus contracts during a period.','Pain can be mild, moderate or severe, and can vary between cycles.','Pain that is new, worsening or very disruptive is worth discussing with a professional.'],
      notice:['Cramping before or during bleeding','Pain in the lower abdomen, back or thighs','Nausea, tiredness or headaches alongside the pain','Whether pain changes how you study, work, sleep or move'],
      care:['Pain is severe, worsening or difficult to manage','Symptoms regularly interrupt school, work, sleep or daily life','Pain starts suddenly or feels very different from your usual pattern','You are worried about a change and want it assessed']
    },
    'PMS': {
      meaning:['PMS refers to physical and emotional symptoms that can appear before a period.','Symptoms often follow a cycle and improve once the period begins.','Keeping a simple symptom record can help you notice your own pattern.'],
      notice:['Bloating, breast tenderness or headaches','Changes in mood, sleep or energy','Food cravings or changes in appetite','Symptoms that repeat around the same part of your cycle'],
      care:['Symptoms feel intense or hard to cope with','Mood changes interfere with relationships, study or work','Symptoms are becoming more severe or lasting longer','You are unsure whether what you are experiencing fits your usual pattern']
    },
    'PMDD': {
      meaning:['PMDD is a severe, cycle-related pattern of emotional and physical symptoms.','Symptoms can be much more disruptive than typical premenstrual changes.','A symptom diary can help a professional understand timing and impact.'],
      notice:['Marked mood changes before a period','Irritability, anxiety, low mood or feeling overwhelmed','Changes in sleep, concentration or energy','A clear pattern of symptoms around the menstrual cycle'],
      care:['Symptoms significantly affect daily life or relationships','Low mood or anxiety feels difficult to manage','Symptoms return in a repeated cycle pattern','You have thoughts of harming yourself or feel unsafe — seek urgent help']
    },
    'PCOS': {
      meaning:['PCOS can affect ovulation, periods and androgen levels.','People can experience different combinations of symptoms.','Symptoms alone cannot confirm PCOS; assessment may involve your history, examination and tests.'],
      notice:['Periods that are irregular or infrequent','Acne or increased facial/body hair','Changes in weight or difficulty with weight management','Changes that persist rather than happening only once'],
      care:['Periods remain very irregular or stop unexpectedly','Symptoms such as excess hair growth or acne are persistent or distressing','You are concerned about fertility or other changes','You want help understanding possible tests or treatment options']
    },
    'Endometriosis': {
      meaning:['Endometriosis involves tissue similar to the uterine lining growing outside the uterus.','It can be associated with pelvic pain and other symptoms.','The amount of pain does not always reflect how much disease is present.'],
      notice:['Painful periods or pelvic pain','Pain during or after sex','Pain with bowel movements or urination around a period','Symptoms that repeatedly affect daily activities'],
      care:['Pain is severe, persistent or getting worse','Pain affects school, work, sleep or relationships','Pain with sex, bowel movements or urination keeps returning','You want help exploring possible causes rather than managing it alone']
    },
    'Menorrhagia': {
      meaning:['Heavy menstrual bleeding means bleeding is unusually heavy or lasts longer than expected.','Heavy bleeding can sometimes contribute to iron deficiency and fatigue.','What counts as “heavy” can vary, so your usual pattern is useful context.'],
      notice:['Needing to change pads or tampons very frequently','Bleeding that lasts longer than your usual period','Large clots or leaking through products','Fatigue, dizziness or breathlessness alongside heavy bleeding'],
      care:['Bleeding is very heavy or difficult to control','You feel faint, unusually weak or short of breath','Heavy bleeding keeps happening across cycles','Bleeding is affecting everyday life or causing ongoing fatigue']
    },
    'Irregular Periods': {
      meaning:['Cycles can vary for many reasons, including stress, illness, hormonal changes and life stage.','One unusual cycle does not necessarily mean something is wrong.','Repeated changes or a major shift from your usual pattern deserve attention.'],
      notice:['Long gaps between periods','Periods arriving much earlier or later than usual','A repeated change in cycle length','Other changes happening alongside the cycle change'],
      care:['Periods repeatedly become very irregular','Periods stop for a prolonged time when pregnancy is not expected','Irregular bleeding comes with pain or other worrying symptoms','The change is persistent and concerning to you']
    }
  };

  const defaultInsights = {
    meaning:['Health conditions can affect people differently, so there is rarely one single pattern.','Symptoms and experiences can overlap across different conditions.','Learning about a topic can help you describe what you are experiencing without trying to diagnose yourself.'],
    notice:['Changes from your usual pattern','Symptoms that keep returning','The timing, duration and intensity of symptoms','How much symptoms affect everyday activities'],
    care:['Symptoms are severe, sudden, persistent or worsening','Something feels noticeably different from your usual pattern','Symptoms are interfering with everyday life','You want a professional opinion or simply have questions']
  };

  function fillInsightList(id, items){
    const el=document.querySelector(id);
    if(el) el.innerHTML=items.map(item=>`<li>${item}</li>`).join('');
  }

  function renderConditions(){
    const active = areaButtons.find(b=>b.classList.contains('active'))?.dataset.area || 'period';
    const query = (search?.value || '').trim().toLowerCase();
    const names = [...new Set(topicConditionsFocused[active] || [])].filter(name=>name.toLowerCase().includes(query));
    heading.textContent = active === 'all' ? 'Choose a condition to explore.' : `What would you like to understand about ${active === 'reproductive' ? 'reproductive health' : active}?`;
    grid.innerHTML = names.map(name=>`<button class="explore-condition-card" type="button" data-condition="${name.replace(/"/g,'&quot;')}"><small>${topicLabels[areaForCondition(name)]}</small><strong>${name}</strong><p>${blurbs[name] || 'Learn what it means, what you may notice and when to seek support.'}</p></button>`).join('');
    grid.querySelectorAll('.explore-condition-card').forEach(btn=>btn.addEventListener('click',()=>showCondition(btn.dataset.condition)));
  }

  function showCondition(condition){
    const area = areaForCondition(condition);
    const data = dietData[condition] || {};
    document.querySelector('#detailTopic').textContent = topicLabels[area];
    document.querySelector('#detailTitle').textContent = condition;
    document.querySelector('#detailIntro').textContent = blurbs[condition] || 'A starting point for understanding this health topic.';
    document.querySelector('#detailMeaning').textContent = blurbs[condition] || 'Sakura provides general educational information and does not diagnose conditions.';
    document.querySelector('#detailNotice').textContent = condition === 'Ovarian Torsion' ? 'Sudden severe pelvic pain, nausea or vomiting can occur and needs urgent assessment.' : condition === 'Menorrhagia' ? 'Bleeding may be unusually heavy or last longer than expected, sometimes causing fatigue or symptoms of iron deficiency.' : 'Symptoms can vary from person to person. Notice patterns, timing and how much they affect everyday life.';
    document.querySelector('#detailCare').textContent = data.note || 'If symptoms are severe, new, worsening, persistent or affecting everyday life, consider speaking with a qualified healthcare professional.';

    const insights = conditionInsights[condition] || defaultInsights;
    fillInsightList('#detailMeaningPoints', insights.meaning);
    fillInsightList('#detailNoticePoints', insights.notice);
    fillInsightList('#detailCarePoints', insights.care);
    document.querySelector('#nutritionConditionName').textContent = condition;
    const have = document.querySelector('#nutritionHave');
    const limit = document.querySelector('#nutritionLimit');
    have.innerHTML = (data.have || ['A varied, balanced pattern of foods','Enough fluids','Foods you enjoy and can access']).map(x=>`<li>${x}</li>`).join('');
    limit.innerHTML = (data.limit || ['There is no need for a perfect diet','Avoid restrictive rules unless medically advised']).map(x=>`<li>${x}</li>`).join('');
    const nutritionNote = data.note || 'Nutrition can support overall wellbeing, but food does not diagnose, cure or replace treatment for a medical condition.';
    document.querySelector('#nutritionNote').textContent = nutritionNote;
    const bookHave = document.querySelector('#bookNutritionHave');
    const bookLimit = document.querySelector('#bookNutritionLimit');
    if(bookHave) bookHave.innerHTML = (data.have || ['A varied, balanced pattern of foods','Enough fluids','Foods you enjoy and can access']).map(x=>`<li>${x}</li>`).join('');
    if(bookLimit) bookLimit.innerHTML = (data.limit || ['There is no need for a perfect diet','Avoid restrictive rules unless medically advised']).map(x=>`<li>${x}</li>`).join('');
    const bookNote = document.querySelector('#bookNutritionNote');
    if(bookNote) bookNote.textContent = nutritionNote;
    document.querySelector('#inlineNutrition').hidden = true;
    detail.hidden = false;
    setBookPage(0, false);
    section.classList.add('condition-selected');
    // Selecting a condition should take the user directly to its guide.
    // No extra scrolling is needed to find the next step.
    requestAnimationFrame(()=>detail.scrollIntoView({behavior:'smooth',block:'start'}));
    document.querySelectorAll('.explore-step').forEach((el,i)=>el.classList.toggle('active',i<=2));
  }

  areaButtons.forEach(btn=>btn.addEventListener('click',()=>{
    areaButtons.forEach(b=>b.classList.toggle('active',b===btn));
    detail.hidden=true;
    section.classList.remove('condition-selected');
    search.value='';
    setBookPage(0, false);
    document.querySelectorAll('.explore-step').forEach((el,i)=>el.classList.toggle('active',i===0));
    renderConditions();
  }));
  search?.addEventListener('input',renderConditions);
  document.querySelector('#backToConditions')?.addEventListener('click',()=>{
    detail.hidden=true;
    section.classList.remove('condition-selected');
    setBookPage(0, false);
    document.querySelectorAll('.explore-step').forEach((el,i)=>el.classList.toggle('active',i===0));
    document.querySelector('.explore-condition-stage').scrollIntoView({behavior:'smooth',block:'start'});
  });
  document.querySelector('#nutritionTrigger')?.addEventListener('click',()=>{
    document.querySelectorAll('.explore-step').forEach((el,i)=>el.classList.toggle('active',i<=3));
    setBookPage(5);
  });

  // A Start-where-you-are choice simply sets the relevant Explore filter and moves there.
  document.querySelectorAll('.choice-card').forEach(card=>card.addEventListener('click',()=>{
    const topic=card.dataset.topic;
    const target=document.querySelector(`.area-pill[data-area="${topic === 'nutrition' ? 'all' : topic}"]`);
    if(target) target.click();
    document.querySelector('#explore-conditions').classList.add('journey-unlocked');
    setTimeout(()=>document.querySelector('#explore-conditions').scrollIntoView({behavior:'smooth',block:'start'}),120);
  }));

  // Keep the Explore section accessible from navigation without exposing the later legacy sections.
  document.querySelectorAll('a[href="#explore-conditions"]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    section.classList.add('journey-unlocked');
    section.scrollIntoView({behavior:'smooth',block:'start'});
  }));

  renderConditions();
})();
