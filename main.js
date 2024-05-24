let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart=document.querySelector('.cart');
document.querySelector('#cart-icon').onclick=()=>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');

}

let user=document.querySelector('.user');
document.querySelector('#user-icon').onclick=()=>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');


}

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active');
    
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');


}

window.onscroll=() => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});  


var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });