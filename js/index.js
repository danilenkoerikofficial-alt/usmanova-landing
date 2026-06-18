(function(){
  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function(question){
    question.addEventListener('click', function(){
      var item = this.closest('.faq-item');
      var isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function(i){
        i.classList.remove('active');
        i.querySelector('.faq-icon').textContent = '+';
      });
      if(!isActive){
        item.classList.add('active');
        item.querySelector('.faq-icon').textContent = '\u00D7';
      }
    });
  });

  /* Form modal */
  window.openFormModal = function(){
    var modal = document.getElementById('formModal');
    if(modal) modal.classList.add('active');
  };
  window.closeFormModal = function(){
    var modal = document.getElementById('formModal');
    if(modal) modal.classList.remove('active');
  };
  document.getElementById('formModal').addEventListener('click', function(e){
    if(e.target === this) closeFormModal();
  });

  /* Form validation */
  var form = document.getElementById('leadForm');
  var formError = document.getElementById('formError');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      formError.classList.remove('show');
      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var offerAgree = form.querySelector('[name="offer_agree"]').checked;
      var pdAgree = form.querySelector('[name="pd_agree"]').checked;
      if(!name || !phone || !email){
        formError.textContent = 'Пожалуйста, заполните все поля.';
        formError.classList.add('show');
        return;
      }
      if(!offerAgree || !pdAgree){
        formError.textContent = 'Пожалуйста, примите условия Оферты и Политики обработки данных.';
        formError.classList.add('show');
        return;
      }
      var btnWrap = document.querySelector('.form-btn-wrap');
      if(btnWrap) btnWrap.classList.add('submitted');
      form.reset();
    });
  }

  /* Live counter */
  var liveEl = document.getElementById('liveCount');
  if(liveEl){
    var base = 3696;
    setInterval(function(){
      base += Math.floor(Math.random() * 3);
      liveEl.textContent = base.toLocaleString('ru-RU');
    }, 8000);
  }
})();
