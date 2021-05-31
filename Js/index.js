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

const btn = document.getElementById('to-top');

btn.addEventListener('click',function(){
    
    window.scrollTo(0,0);
})





