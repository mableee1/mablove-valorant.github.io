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
let vidPreview = document.querySelector("#vidPreview");
let imgPreview = document.querySelector("#imgPreview");
function getURL(input, previewContainer, previewTag) {
    var reader = new FileReader();
    reader.onload = function(e) {
        previewContainer.setAttribute('src',e.target.result);
    }
    if (input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
    previewTag.removeAttribute('hidden');
}
imgInput.addEventListener('change', () => {
    getURL(imgInput, imgPreview, imgPreview);
});
videoInput.addEventListener("change", (e) => {
    let file = e.target.files[0];
    let blob = URL.createObjectURL(file);
    vidPreview.setAttribute('src', blob);  
    vidPreview.removeAttribute('hidden');
});