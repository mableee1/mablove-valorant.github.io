let navbar = document.querySelector(".navContainer");
// document.documentElement (html)
// document.head (head)
// document.body (body)
// window.pageYOffset (scrolled distance from top)
// window.pageXOffset (scrolled distance from left)
// element.offsetHeight (total height of an element)
window.addEventListener("scroll", () => {
    if (window.pageYOffset > navbar.offsetHeight) {
        navbar.classList.add("scrolledNav");
    } else if (navbar.classList.contains("scrolledNav") && window.pageYOffset === 0) {
        navbar.classList.remove("scrolledNav");
    }
});



// Filters
