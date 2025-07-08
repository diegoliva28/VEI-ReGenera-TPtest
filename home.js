 // Funcionalidad FAQ
 document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      const answer = item.querySelector('.faq__answer');
      const icon = this.querySelector('.faq__icon');
      const isOpen = item.classList.contains('open');
      // Cerrar todos
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq__answer').style.maxHeight = null;
        i.querySelector('.faq__icon').textContent = '+';
      });
      // Abrir si no estaba abierto
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '–';
      }
    });
  });
  // Inicializar respuestas cerradas
  document.querySelectorAll('.faq__answer').forEach(a => a.style.maxHeight = null);