// Máximo & Muniz — bio page interactions
document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Accordion items
  const items = document.querySelectorAll('.item[data-target]');

  items.forEach(item => {
    const wrap = document.getElementById(item.dataset.target + '-wrap');
    if (!wrap) return;

    item.addEventListener('click', () => {
      const isOpen = item.getAttribute('aria-expanded') === 'true';

      // Close any other open panel
      items.forEach(other => {
        if (other !== item) {
          other.setAttribute('aria-expanded', 'false');
          const otherWrap = document.getElementById(other.dataset.target + '-wrap');
          if (otherWrap) otherWrap.classList.remove('is-open');
        }
      });

      item.setAttribute('aria-expanded', String(!isOpen));
      wrap.classList.toggle('is-open', !isOpen);
    });
  });
});
