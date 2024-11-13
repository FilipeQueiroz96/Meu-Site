
window.addEventListener("scroll", function(){
    var menuheader = document.getElementById('header')
    var mouse = document.getElementById('mouse')
    var menumobile = document.getElementById('botaomenu')
    
    
    // var home = document.getElementById('home')
    // var sobre = document.getElementById('sobre')
    // var servicos = document.getElementById('servicos')
    // var portfolio = document.getElementById('portfolio')
    // var depoimentos = document.getElementById('depoimentos')

    menuheader.classList.toggle('scrollmenu',window.scrollY > 180)
    mouse.classList.toggle('scrollmouse', window.scrollY > 300)
    menumobile.classList.toggle('scrollmenumobile', window.scrollY > 700)
    
    
    
    
//      home.classList.remove('scrolls')
//      sobre.classList.remove('scrolls')
//      servicos.classList.remove('scrolls')
//      portfolio.classList.remove('scrolls')
//      depoimentos.classList.remove('scrolls')

//     if(window.scrollY < 500 ){
//       home.classList.add('scrolls')
//     } else if(this.window.scrollY > 500 && window.scrollY < 1200 ){
//       sobre.classList.add('scrolls')
//     } else if(this.window.scrollY > 1200 && window.scrollY < 1900 ){
//       servicos.classList.add('scrolls')
//     } else if(this.window.scrollY > 1900 && window.scrollY < 2600 ){
//       portfolio.classList.add('scrolls')
//     } else if(this.window.scrollY > 2600 && window.scrollY < 2900 ){
//       depoimentos.classList.add('scrolls')
//     }
// 
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