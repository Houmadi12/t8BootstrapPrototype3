// Ce partie permet de donner une couleur au barnav lors de scrolle
const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Ce partie permet d'activer l'onglet qu'on scrolle 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item .nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top <= offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-item .nav-link[href*='+ id +']').classList.add('active');
            });
        }
    });
}