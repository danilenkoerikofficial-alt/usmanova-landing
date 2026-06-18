(function(){
  /* Countdown */
  function pad(n){return n<10?'0'+n:''+n}
  function updateCD(ids){
    var now=new Date();
    var end=new Date(2026,5,22,0,0,0);
    var diff=Math.max(0,end-now);
    var d=Math.floor(diff/86400000);
    var h=Math.floor((diff%86400000)/3600000);
    var m=Math.floor((diff%3600000)/60000);
    var s=Math.floor((diff%60000)/1000);
    var el=document.getElementById(ids.d);
    if(el)el.textContent=pad(d);
    el=document.getElementById(ids.h);if(el)el.textContent=pad(h);
    el=document.getElementById(ids.m);if(el)el.textContent=pad(m);
    el=document.getElementById(ids.s);if(el)el.textContent=pad(s);
  }
  var cds=[{d:'cdDaysD',h:'cdHoursD',m:'cdMinsD',s:'cdSecsD'},{d:'cdDaysM',h:'cdHoursM',m:'cdMinsM',s:'cdSecsM'},{d:'cdDaysT',h:'cdHoursT',m:'cdMinsT',s:'cdSecsT'}];
  cds.forEach(function(ids){updateCD(ids);setInterval(function(){updateCD(ids)},1000)});

  /* Form modal */
  window.openFormModal=function(type){
    var m=document.getElementById('formModal');
    if(m){
      var title=document.getElementById('modalTitle');
      var desc=document.getElementById('modalDesc');
      var offer=document.getElementById('modalOffer');
      if(type==='offer'){
        title.textContent='ТОП-5 программ Кати Усмановой';
        desc.style.display='none';
        offer.style.display='block';
      }else{
        title.textContent='НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?';
        desc.style.display='block';
        offer.style.display='none';
      }
      m.classList.add('active');
    }
  };
  document.querySelectorAll('.modal-close').forEach(function(b){b.addEventListener('click',function(){document.getElementById('formModal').classList.remove('active')})});
  document.getElementById('formModal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('active')});

  /* Form validation */
  var form=document.getElementById('leadForm');
  var formError=document.getElementById('formError');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      formError.classList.remove('show');
      var name=form.querySelector('[name="name"]').value.trim();
      var phone=form.querySelector('[name="phone"]').value.trim();
      var email=form.querySelector('[name="email"]').value.trim();
      var offer=form.querySelector('[name="offer_agree"]').checked;
      var pd=form.querySelector('[name="pd_agree"]').checked;
      if(!name||!phone||!email){formError.textContent='Пожалуйста, заполните все поля.';formError.classList.add('show');return}
      if(!offer||!pd){formError.textContent='Пожалуйста, примите условия Оферты и Политики.';formError.classList.add('show');return}
      var wrap=document.querySelector('.form-btn-wrap');
      if(wrap)wrap.classList.add('submitted');
      form.reset();
    });
  }

  /* Result slider */
  (function(){
    var imgs=[
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/46/h/c45324852bf9d21c95d19bf39211d331.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/157/h/2373675fb74833dc50fac39c3d9e2c75.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/279/h/3449007b386ab3cadc4ac4486ae62fbd.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/133/h/adfdc87162c33c253620a8d67c2227b1.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/240/h/458af3255dea8d2146e687ca18cbab16.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/511/h/907477560e8f63f04e750a221fc0b235.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/360/h/c9e738df7f1af598de38a6e1ce37cf04.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/296/h/22a6abd9ce77c3464cb2740da2df899f.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/488/h/48f351d2ea180b7559919312d798e891.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/9/h/d4ff16f091d08c8564d2217b64137494.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/215/h/8bdaf6eff058f70e43168f09b7854d63.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/8/h/01f3d7f5980288406f6d72e18c2640c2.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/230/h/00e514e0e3b3fdbe1be94bcf17834472.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/223/h/c5defc337a52b380d14008a4db4b29b4.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/328/h/f228467abe36ba6bdbcae945c480da31.jpg',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/380/h/81afabdb0dced221ec6994c7803f51cf.jpg'
    ];
    var slider=document.getElementById('resultSlider');
    if(slider){
      imgs.forEach(function(src){
        var div=document.createElement('div');div.className='slider-item';
        var img=document.createElement('img');img.src=src;
        div.appendChild(img);slider.appendChild(div);
      });
    }
  })();

  /* Result slider 2 */
  (function(){
    var imgs2=[
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/70/h/08e3e18cee3e99de60963f8593017207.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/179/h/9a253564c88dfe42655d87bf786aef75.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/218/h/d2b539fd011ef5b0030e3a9acb13e366.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/380/h/ed4c23ca4bbea78a710b2a519dff798a.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/169/h/5b957a209558dfe5d61fee47a747c159.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/430/h/9026483b7560609e8b5e03474d074c68.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/330/h/4eb43a29d1a6b833ad71efcc2ce9f360.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/70/h/08e3e18cee3e99de60963f8593017207.png',
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/201/h/07d2bcb64a4b68f5ea78ce202766985a.png'
    ];
    var slider2=document.getElementById('resultSlider2');
    if(slider2){
      imgs2.forEach(function(src){
        var div=document.createElement('div');div.className='slider-item';
        var img=document.createElement('img');img.src=src;
        div.appendChild(img);slider2.appendChild(div);
      });
    }
  })();

  /* Accordion toggle */
  (function(){
    var accs = document.querySelectorAll('.accordion-btn');
    accs.forEach(function(btn){
      btn.addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (this.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    });
  })();

  /* Social notification */
  (function(){
    var names=["Наталья В.","Анна К.","Мария Л.","Ольга П.","Екатерина С.","Дарья М.","Юлия Р.","Светлана Т.","Виктория А.","Кристина Д."];
    var cities=["Москва","Санкт-Петербург","Екатеринбург","Казань","Новосибирск","Краснодар","Минск","Алматы","Самара","Уфа"];
    function randomItem(arr){return arr[Math.floor(Math.random()*arr.length)]}
    function randomMinutes(){return Math.floor(Math.random()*9)+1}
    function updateNotification(){
      var name=randomItem(names),city=randomItem(cities),min=randomMinutes();
      document.getElementById("notifName").textContent=name;
      document.getElementById("notifAvatar").textContent=name[0]+(name[1]||"");
      document.getElementById("notifAction").textContent="купила набор программ";
      document.getElementById("notifTime").textContent=min+" минут назад · "+city;
    }
    function showNotification(){
      updateNotification();
      var box=document.getElementById("notifBox");
      if(box){box.classList.add("show");setTimeout(function(){box.classList.remove("show")},5000)}
    }
    setTimeout(function(){showNotification();setInterval(showNotification,30000)},15000);
    setTimeout(function(){showNotification();setInterval(showNotification,30000)},15000);
  })();
})();
