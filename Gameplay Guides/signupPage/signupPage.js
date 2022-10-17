// HEADER
// show searchBar when clicking on the search button
let searchBar = document.querySelector(".searchBar");
let searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("elementVisibility");
});

// change the shadow of the search button when hovering on it
function mouse(ev, targetElement, cl) {
    switch(ev) {
        case "mouseover":
            targetElement.classList.add(cl);
            break;
        case "mouseout":
            targetElement.classList.remove(cl);
            break;
        case "click":
            targetElement.classList.toggle(cl);
            break;
    }
    console.log("Changes to the search button has been applied.");
}
let ggSearch = document.querySelector(".gg-search");
ggSearch.addEventListener("mouseover", () => {
    mouse("mouseover", ggSearch, "searchButtonHover");
    
});
ggSearch.addEventListener("mouseout", () => {
    mouse("mouseout", ggSearch, "searchButtonHover");
});



// SECTION
// e.preventDefault() - it disables default behaviour of such elements as <a>, submit buttons
// - without it, these tags will automatically direct to href (for <a>) or attempt to submit data (submit button)
// show signup form when clicking on .switchToCreate
let createAcc = document.querySelector(".switchToCreate");
let signupForm = document.querySelector(".signupForm");
let signupOptions = document.querySelector(".signupOptions");
let signupTitle = document.querySelector("#signupTitle");
// show signin form when clicking on .switchTo Login
let loginAcc = document.querySelector(".switchToLogin");
let signinForm = document.querySelector(".signinForm");
let signinOptions = document.querySelector(".signinOptions");
let signinTitle = document.querySelector("#signinTitle");
// Arrays
// array of user options
let accActions = [createAcc, loginAcc];
// array of form elements
let formElements = [signupForm, signupOptions, signupTitle,
signinForm, signinOptions, signinTitle];
// event listeners for signup, signin
accActions.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        formElements.forEach((item) => {
            item.classList.toggle("hide");
        });
    });
});
