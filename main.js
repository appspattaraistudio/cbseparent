// Mobile nav
function toggleNav(){
  var mn=document.getElementById('mobile-nav');
  mn.style.display=mn.style.display==='block'?'none':'block';
}

// FAQ accordion
function toggleFaq(el){
  var ans=el.nextElementSibling;
  var open=ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(function(a){a.classList.remove('open')});
  document.querySelectorAll('.faq-q').forEach(function(q){q.classList.remove('open')});
  if(!open){ans.classList.add('open');el.classList.add('open')}
}

// Tabs
function switchTab(el,id,groupClass){
  var group=groupClass||'tab-group-default';
  var parent=el.closest('.tab-group')||document;
  parent.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active')});
  parent.querySelectorAll('.tab-content').forEach(function(c){c.classList.remove('active')});
  el.classList.add('active');
  var target=document.getElementById(id);
  if(target)target.classList.add('active');
}

// Calculator
function calcTimeline(){
  var dob=document.getElementById('dob-input').value;
  if(!dob){alert('Please enter your child\'s date of birth');return}
  var birth=new Date(dob);
  var today=new Date();
  if(birth>today){alert('Please enter a valid past date');return}
  var classes=[
    {label:'Pre-KG',short:'PKG',age:3},
    {label:'LKG / Junior KG',short:'LKG',age:4},
    {label:'UKG / Senior KG',short:'UKG',age:5},
    {label:'Class 1',short:'I',age:6},
    {label:'Class 2',short:'II',age:7},
    {label:'Class 3',short:'III',age:8},
    {label:'Class 4',short:'IV',age:9},
    {label:'Class 5',short:'V',age:10},
    {label:'Class 6',short:'VI',age:11},
    {label:'Class 7',short:'VII',age:12},
    {label:'Class 8',short:'VIII',age:13},
    {label:'Class 9',short:'IX',age:14},
    {label:'Class 10',short:'X',age:15},
    {label:'Class 11',short:'XI',age:16},
    {label:'Class 12',short:'XII',age:17}
  ];
  var bYear=birth.getFullYear();
  var bMonth=birth.getMonth()+1;
  var ageMs=today-birth;
  var ageYears=ageMs/(1000*60*60*24*365.25);
  var html='';
  classes.forEach(function(c){
    var entryYear=bYear+c.age+(bMonth>3?1:0);
    var isNow=ageYears>=c.age&&ageYears<c.age+1;
    html+='<div class="tl-item'+(isNow?' tl-now':'')+'"><div class="tl-dot">'+c.short+'</div><div class="tl-info"><div class="tl-class">'+c.label+(isNow?' — This year ✓':'')+'</div><div class="tl-year">Academic year '+entryYear+'–'+(entryYear+1)+'</div></div><div class="tl-age">Age '+c.age+'+</div></div>';
  });
  var res=document.getElementById('calc-result');
  document.getElementById('timeline-grid').innerHTML=html;
  res.style.display='block';
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// Notify form
function submitNotify(e){
  e.preventDefault();
  var inp=document.getElementById('notify-email');
  if(inp&&inp.value){
    var parent=inp.closest('.notify-form');
    parent.innerHTML='<p style="color:#fff;font-weight:600;font-family:Sora,sans-serif;font-size:14px">✓ You\'re on the list! We\'ll notify you when the app launches.</p>';
  }
}
