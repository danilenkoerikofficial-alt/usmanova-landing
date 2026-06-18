(function(){
  var KEY='cookieConsent';
  function getConsent(){
    try{var d=localStorage.getItem(KEY);return d?JSON.parse(d):null}catch(e){return null}
  }
  function saveConsent(data){
    data.timestamp=new Date().toISOString();
    try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}
  }
  function hideBanner(){
    var b=document.getElementById('cookieBanner'),o=document.getElementById('cookieOverlay');
    if(b)b.classList.remove('show');
    if(o)o.classList.remove('show');
  }
  function init(){
    if(getConsent())return;
    var b=document.getElementById('cookieBanner'),o=document.getElementById('cookieOverlay');
    if(b)setTimeout(function(){b.classList.add('show')},500);
    if(o)setTimeout(function(){o.classList.add('show')},500);
  }
  function acceptAll(){
    saveConsent({analytics:true,marketing:true});
    hideBanner();
  }
  function rejectAll(){
    saveConsent({analytics:false,marketing:false});
    hideBanner();
  }
  function saveSettings(){
    saveConsent({
      analytics:document.getElementById('cookieAnalytics').checked,
      marketing:document.getElementById('cookieMarketing').checked
    });
    hideBanner();
  }
  document.addEventListener('DOMContentLoaded',init);
  document.getElementById('cookieAcceptAll').addEventListener('click',acceptAll);
  document.getElementById('cookieRejectAll').addEventListener('click',rejectAll);
  document.getElementById('cookieShowSettings').addEventListener('click',function(){
    var s=document.getElementById('cookieSettings');
    s.classList.toggle('open');
    this.textContent=s.classList.contains('open')?'Свернуть':'Настроить';
  });
  document.getElementById('cookieSaveSettings').addEventListener('click',saveSettings);
})();
