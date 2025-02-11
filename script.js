
window.addEventListener("scroll", function(){
    var menuheader = document.getElementById('header')
    var mouse = document.getElementById('mouse')
    var menumobile = document.getElementById('botaomenu')
    var logo = document.getElementById('logo')

    menuheader.classList.toggle('scrollmenu',window.scrollY > 180)
    mouse.classList.toggle('scrollmouse', window.scrollY > 300)
    menumobile.classList.toggle('scrollmenumobile', window.scrollY > 700)
    logo.classList.toggle('scrolllogo',window.scrollY > 180)
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

function clicou() {
                 
  botaomenu.style.display = 'none'
   if (menumobile.style.width == '60%'){
       menumobile.style.width = '0%'
   } else{
       menumobile.style.width = '60%'
   }
   }

function fechar(){
       menumobile.style.width = '0%'
       botaomenu.style.display = 'block'
   }