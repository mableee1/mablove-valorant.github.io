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

// Preview uploaded video, screenshot
let videoInput = document.querySelector("#videoInput");
let imgInput = document.querySelector("#imgInput");
let videoTag = document.querySelector("#vidPreview");
let vidPreview = document.querySelector("#vidPreview source");
let imgPreview = document.querySelector("#imgPreview");
let vidFile = videoInput.getAttribute('value');
let imgFile = imgInput.getAttribute('value');

if (vidFile) {
    console.log(vidFile);
    vidPreview.setAttribute('src', vidFile);
    videoTag.removeAttribute('hidden');
} else {
    videoTag.setAttribute('hidden', '');
}
if (imgFile) {
    console.log(imgFile);
    imgPreview.setAttribute('src', imgFile);
    imgPreview.removeAttribute('hidden');
} else {
    imgPreview.setAttribute('hidden', '');
}