// window.pageYOffset (scrolled distance from top)
// window.pageXOffset (scrolled distance from left)
// element.offsetHeight (total height of an element)
window.addEventListener("scroll", () => {
    let navContainer = document.querySelector(".navContainer");
    if (window.pageYOffset > navContainer.offsetHeight) {
        navContainer.classList.add("navScrolled");
    }
    else if (window.pageYOffset <= navContainer.offsetHeight && navContainer.classList.contains("navScrolled")) {
        navContainer.classList.remove("navScrolled");
    }
});