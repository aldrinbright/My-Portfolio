const navToggle = document.querySelector('.nav-toggle');

const navlinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// animation



// AOS.init({
//     offset: 120,
//     delay: 2,
//     duration: 400
// });
