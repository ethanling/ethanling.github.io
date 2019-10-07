// Square project list items
function setProjectItemHeights() {
    const projectItems = document.getElementsByClassName("projects-item");
    console.log(projectItems);
    for (let i=0; i < projectItems.length; i++) {
        const width = projectItems[0].offsetWidth;
        projectItems[i].style.height = width;
    }
}

window.addEventListener("resize", setProjectItemHeights);

document.addEventListener("DOMContentLoaded", function() {
    setProjectItemHeights();
});