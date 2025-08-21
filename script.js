// Efeito de header menor ao rolar
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hero.classList.add('header-small');
  } else {
    hero.classList.remove('header-small');
  }
});

// Dropdown clicável
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = dropdown.querySelector('.dropbtn');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');

  dropbtn.addEventListener('click', (e) => {
    e.preventDefault(); // evita rolagem ao clicar
    dropdown.classList.toggle('show'); // alterna visibilidade
  });

  // Fecha o dropdown se clicar fora
  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
});

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // quando rolar mais de 300px
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
