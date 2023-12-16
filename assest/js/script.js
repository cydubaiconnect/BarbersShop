document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.loader-container').style.display = 'none';
    }, 5000);
});



    
ScrollReveal({
    distance: '100px',
    duration: 1000,
    delay: 500
  });


  ScrollReveal().reveal('.price-text, .experienceText', { delay: 400, origin: 'left' });
  ScrollReveal().reveal('.priceImg, .aboutusText', { delay: 700, origin: 'bottom' });
  ScrollReveal().reveal('.card1, .card2,  .card3, .card4, .card5, .card6, .imgTag', { delay: 300, origin: 'bottom', interval: 100});
  ScrollReveal().reveal(' .heading', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.barber1, .barber1, .barber1, .priceImg, .price-text ', { delay: 200, origin: 'bottom', interval: 400});
  ScrollReveal().reveal('.about-text', { delay: 400, origin: 'left' });






  let menu = document.querySelector('.barmenu');
  let nav = document.querySelector('.nav-bar1');
function showActive(){
    menu.classList.toggle('change');
    nav.classList.toggle('active');
}