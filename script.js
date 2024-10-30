
window.addEventListener("scroll", function(){
    var menuheader = document.getElementById('header')
    var mouse = document.getElementById('mouse')

    menuheader.classList.toggle('scrollmenu',window.scrollY > 180)
    mouse.classList.toggle('scrollmouse', window.scrollY > 300)
})











//     var swiper = new Swiper(".swiper", {
//         loop: true,
//         grabCursor: true,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },    

//           breakpoints: {
//             // when window width is >= 320px
//             400: {
//               slidesPerView: 2,
//               spaceBetween: 15
//             },
//             // when window width is >= 480px
//             600: {
//               slidesPerView: 2,
//               spaceBetween: 10
//             },
//             // when window width is >= 640px
//             1100: {
//               slidesPerView: 2,
//               spaceBetween: 5
//             }
//           }      

//   });