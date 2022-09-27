// HEADER
// sign up button +

// show searchBar when clicking on the search button
let searchBar = document.querySelector(".searchBar");
let searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("elementVisibility");
});
// change the color of an option when hovering on it
let menuOption = document.querySelectorAll(".optionContainer a");
menuOption.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("menuOptionHover");
    });
    item.addEventListener("mouseout", () => {
        item.classList.remove("menuOptionHover");
    });
});

// change the color of the SIGN UP button when hovering on it
let signupButton = document.querySelector(".signupButton");
let signupLink = document.querySelector(".signupLink");
signupButton.addEventListener("mouseover", () => {
    signupButton.classList.add("signupButtonHover");
    signupLink.classList.add("menuOptionHover");
});
signupButton.addEventListener("mouseout", () => {
    signupButton.classList.remove("signupButtonHover");
    signupLink.classList.remove("menuOptionHover");
});

// change the shadow of the search button when hovering on it
let ggSearch = document.querySelector(".gg-search");
ggSearch.addEventListener("mouseover", () => {
    ggSearch.classList.add("searchButtonHover");
});
ggSearch.addEventListener("mouseout", () => {
    ggSearch.classList.remove("searchButtonHover");
});
// SECTION
// shadows around an agent's icon when hovering over the agent's name and the agent's icon

// new guides subscription form (e-mail)

// add new guide (only for signed up users)


// FOOTER
// change an option's color when hovering over it