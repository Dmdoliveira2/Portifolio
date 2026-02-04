// BOTÃO VOLTAR AO TOPO
const btnTopo = document.getElementById('btnTopo');
// MENU HAMBURGUER MOBILE
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.header__nav');

// SMOOTH SCROLL - Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão

    const targetId = this.getAttribute('href'); // Pega o ID da seção (#home, #about, etc)
    const targetSection = document.querySelector(targetId); // Encontra a seção

    targetSection.scrollIntoView({
      behavior: 'smooth', // Rolagem suave
      block: 'start' // Alinha no topo
    });
  });
});


// Mostra/esconde o botão ao rolar a página
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) { // Se rolou mais de 300px
    btnTopo.style.display = 'block'; // Mostra o botão
  } else {
    btnTopo.style.display = 'none'; // Esconde o botão
  }
});

// Quando clicar no botão, volta ao topo
btnTopo.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

menuHamburguer.addEventListener('click', function() {
  // Alterna a classe 'active' no menu e no hamburguer
  menuHamburguer.classList.toggle('active');
  nav.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', function() {
    menuHamburguer.classList.remove('active');
    nav.classList.remove('active');
  });
});