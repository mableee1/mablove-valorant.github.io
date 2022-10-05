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
// new guides subscription form (e-mail)

// add new guide (only for signed up users)

// filters
// filter by agent
// .elementVisibility
// при выборе агента, убрать остальные .agentListBlock
// переделать в grid, так как grid является многомерным, а flexbox - двумерный
let agentFilter = document.querySelector("#agentSelect");
let agentCards = document.querySelectorAll(".agentLi");
agentFilter.addEventListener("change", () => {
    if (agentFilter.value !== "allAgents") {
        let chosenAgent = agentFilter.value;
        agentCards.forEach((item) => {
            if (!item.classList.contains(chosenAgent) && item.classList.contains("agentLi")) {
                item.classList.remove("agentLi");
                item.classList.add("elementInvisibility");
            } else if (item.classList.contains(chosenAgent) && !item.classList.contains("agentLi") && item.classList.contains("elementInvisibility")) {
                item.classList.remove("elementInvisibility");
                item.classList.add("agentLi");
            }
        });
    } else if (agentFilter.value === "allAgents") {
        agentCards.forEach((item) => {
            if (!item.classList.contains("agentLi") && item.classList.contains("elementInvisibility")) {
                item.classList.remove("elementInvisibility");
                item.classList.add("agentLi");
            }
        });
    }
});
// filter by role
let roleFilter = document.querySelector("#roleSelect");
roleFilter.addEventListener("change", () => {
    let chosenRole = roleFilter.value;
    if (chosenRole !== "allRoles") {
        agentCards.forEach((item) => {
            if (!item.classList.contains(chosenRole)) {
                item.classList.remove("agentLi");
                item.classList.add("elementInvisibility");
            } else if (item.classList.contains(chosenRole) && item.classList.contains("elementInvisibility")) {
                item.classList.remove("elementInvisibility");
                item.classList.add("agentLi");
            }
        });
    } else {
        agentCards.forEach((item) => {
            if (item.classList.contains("elementInvisibility")) {
                item.classList.remove("elementInvisibility");
                item.classList.add("agentLi");
            }
        });
    }
});
// FOOTER
// change an option's color when hovering over it