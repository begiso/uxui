function toggleMenu() {
  const menu = document.querySelector('.fullscreen-menu');
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');

  menu.classList.toggle('active');
  hamburger.classList.toggle('active'); // Изменение формы гамбургера
  body.classList.toggle('menu-open'); // Отключаем скролл на body
}

function closeMenu() {
  const menu = document.querySelector('.fullscreen-menu');
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');

  menu.classList.remove('active');
  hamburger.classList.remove('active'); // Восстановление формы гамбургера
  body.classList.remove('menu-open'); // Включаем скролл обратно
}





window.onscroll = function() {
    const scrollDiv = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollDiv.classList.add('show');
    } else {
      scrollDiv.classList.remove('show');
    }
  };
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


document.getElementById("rediska").addEventListener("click", function() {
    window.open("https://www.behance.net/gallery/219647927/rediska-mobilnoe-prilozhenie-dlja-dostavki-produktov", "_blank");
});

document.getElementById("newsmart").addEventListener("click", function() {
  window.open("https://www.behance.net/gallery/223280659/Newsmart-onlajn-magazin-elektroniki", "_blank");
});

document.getElementById("shipaker").addEventListener("click", function() {
  window.open("https://www.behance.net/gallery/226555927/Shipaker-dizajn-sajta-bloga-redakcii", "_blank");
});

document.getElementById("bizler").addEventListener("click", function() {
  window.open("https://www.behance.net/gallery/226615697/Bizler-Group-lending-dlja-IT-kompanii", "_blank");
});