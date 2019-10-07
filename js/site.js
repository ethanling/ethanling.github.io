// Nav animation logic
const nav = document.querySelector("#main-nav");
const name = document.querySelector("#about");

let topOfName = name.offsetTop;

function fixNav() {
    if (window.scrollY > topOfName) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    } else {
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
    }
}

// Square project list items
function setProjectItemHeights() {
    const projectItems = document.getElementsByClassName("projects-item");
    console.log(projectItems);
    for (let i=0; i < projectItems.length; i++) {
        const width = projectItems[0].offsetWidth;
        projectItems[i].style.height = width;
    }
}

window.addEventListener("scroll", fixNav);
window.addEventListener("resize", setProjectItemHeights);

document.addEventListener("DOMContentLoaded", function() {
    fixNav();
    setProjectItemHeights();
});