// Nav animation logic
const nav = document.querySelector('#main-nav');
const name = document.querySelector('#about');

let topOfName = name.offsetTop;
console.log(topOfName);

function fixNav() {
    if (window.scrollY > topOfName) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);