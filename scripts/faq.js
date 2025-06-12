document.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', () => {
        const faq = header.parentElement;
        faq.classList.toggle('active');

        const icon = header.querySelector('span');
        icon.textContent = faq.classList.contains('active') ? '−' : '+';
      });
    });