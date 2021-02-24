// GSAP FUNCTIONS LANDING PAGE
gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 1, scaleX: 1});
gsap.fromTo('.menu-toggler', {x: 200, opacity: 0}, {duration: 1, delay: .5, x: 0, opacity: 1});
gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 1, delay: 1.3, yPercent: -50, opacity: 1});



$(document).ready(function() {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        }, 2000);
    });

    $('#haut').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('.haut')).offset().top -100
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
    });
});

window.onload = function() {
    // Click open Modal
    var btnProjet1 = document.querySelector('.btnProjet1');
    var btnProjet2 = document.querySelector('.btnProjet2');
    var btnProjet3 = document.querySelector('.btnProjet3');
    var btnProjet4 = document.querySelector('.btnProjet4');
    var btnProjet5 = document.querySelector('.btnProjet5');


    // Open Modal
    var modalBg = document.querySelector('.modal-bg');
    var modalBg2 = document.querySelector('.modal-bg2');
    var modalBg3 = document.querySelector('.modal-bg3');
    var modalBg4 = document.querySelector('.modal-bg4');
    var modalBg5 = document.querySelector('.modal-bg5');


    // Close Modal
    var modalClose = document.querySelector('.modal-close');
    var modalClose2 = document.querySelector('.modal-close2');
    var modalClose3 = document.querySelector('.modal-close3');
    var modalClose4 = document.querySelector('.modal-close4');
    var modalClose5 = document.querySelector('.modal-close5');

    

    //Premier Projet Ouverture Modal
    btnProjet1.addEventListener('click', function() {
        // console.log("addeventlistener ok");
        modalBg.classList.add('bg-active');
        // console.log(modalBg);
    });
    //Premier Projet Fermeture Modal
        modalClose.addEventListener('click', function() {
            modalBg.classList.remove('bg-active');
    }); 


    //Deuxième Projet Ouverture Modal
    btnProjet2.addEventListener('click', function() {
        modalBg2.classList.add('bg-active');
    });
    //Deuxième Projet Fermeture Modal
    modalClose2.addEventListener('click', function() {
        modalBg2.classList.remove('bg-active');
    }); 



    //Troisième Projet Ouverture Modal
     btnProjet3.addEventListener('click', function() {
        modalBg3.classList.add('bg-active');
    });
    //Troisième Projet Fermeture Modal
    modalClose3.addEventListener('click', function() {
        modalBg3.classList.remove('bg-active');
    });

   //Quatrième Projet Ouverture Modal
    btnProjet4.addEventListener('click', function() {
    modalBg4.classList.add('bg-active');
    });
    //Quatrième Projet Fermeture Modal
    modalClose4.addEventListener('click', function() {
        modalBg4.classList.remove('bg-active');
    }); 

   //Cinquième Projet Ouverture Modal
    btnProjet5.addEventListener('click', function() {
    modalBg5.classList.add('bg-active');
    });
    //Cinquième Projet Fermeture Modal
    modalClose5.addEventListener('click', function() {
        modalBg5.classList.remove('bg-active');
    }); 













   
}




