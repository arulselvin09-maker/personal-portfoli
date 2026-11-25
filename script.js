const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('.copy-email').addEventListener('click', async (event) => {
  const email = event.currentTarget.dataset.email;
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email address copied to clipboard.';
  } catch {
    status.textContent = `Please copy this address: ${email}`;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
