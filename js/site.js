// Nav animation logic
const nav = document.querySelector('#main-nav');
const name = document.querySelector('#name');

let topOfName = name.offsetTop;
console.log(topOfName);

function fixNav() {
    if (window.scrollY > topOfName) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
