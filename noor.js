let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
	let header = document.querySelector(".header");

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })
};

const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

const darkMode = document.querySelector('#darkMode-icon');

darkMode.onclick = ()=>{
    darkMode.classList.toggle("bx-sun");
    document.body.classList.toggle('dark-mode');
}


















ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.heading, .services-container', { origin: 'top' });
ScrollReveal().reveal('.portfolio-box, .testimonial-wrapper', { origin: 'left' });


var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
    grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

