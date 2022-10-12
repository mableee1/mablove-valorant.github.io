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
let agentFilter = document.querySelector("#agentSelect");
let roleFilter = document.querySelector("#roleSelect");
let invisibilityClass = "elementInvisibility"; // agent card is invisible
let agentLiClass = "agentLi"; // agent card is visible
let agentCards = document.querySelectorAll(".agentLi");
// FUNCTIONS FOR DIFFERENT FILTERS' VALUES
function allChosen(card) { // all agents, all roles
    if (card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
}
function roleChosen(card) { // all agents, role chosen
    if (!card.classList.contains(chosenRole) && card.classList.contains(agentLiClass)) {
        card.classList.remove(agentLiClass);
        card.classList.add(invisibilityClass);
    }
    if (card.classList.contains(chosenRole) && card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
}
function agentChosen() { // all roles, agent chosen
    if (!item.classList.contains(chosenAgent) && item.classList.contains(agentLiClass)) {
        item.classList.remove(agentLiClass);
        item.classList.add(invisibilityClass);
    } else if (item.classList.contains(chosenAgent) && item.classList.contains(invisibilityClass)) {
        item.classList.remove(invisibilityClass);
        item.classList.add(agentLiClass);
    }
}
function bothChosen(card) { // agent chosen, role chosen
    if (card.classList.contains(chosenAgent) && card.classList.contains(chosenRole) && card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
    if ((!card.classList.contains(chosenAgent) || !card.classList.contains(chosenRole)) && card.classList.contains(agentLiClass)) {
        card.classList.remove(agentLiClass);
        card.classList.add(invisibilityClass);
    }
}
// FILTER BY AGENT
agentFilter.addEventListener("change", () => {
    let chosenAgent = agentFilter.value;
    let chosenRole = roleFilter.value;
    if (chosenAgent === "allAgents" && chosenRole === "allRoles") {
        agentCards.forEach(allChosen(item));
    }
    if (chosenAgent === "allAgents" && chosenRole !== "allRoles") {
        agentCards.forEach(roleChosen(item));
    }
    if (chosenAgent !== "allAgents" && chosenRole === "allRoles") {
        agentCards.forEach(agentChosen());
    } else if (chosenAgent !== "allAgents" && chosenRole !== "allRoles") {
        agentCards.forEach(bothChosen(item));
    }
});
// FILTER BY ROLE
roleFilter.addEventListener("change", () => {
    let chosenRole = roleFilter.value;
    let chosenAgent = agentFilter.value;
    if (chosenRole !== "allRoles" && chosenAgent !== "allAgents") {
        agentCards.forEach(bothChosen(item));
    }
    if (chosenRole !== "allRoles" && chosenAgent === "allAgents") {
        agentCards.forEach(roleChosen(item));
    }
    if (chosenRole === "allRoles" && chosenAgent !== "allAgents") {
        agentCards.forEach(agentChosen(item));
    }
    if (chosenRole === "allRoles" && chosenAgent === "allAgents") {
        agentCards.forEach(allChosen(item));
    }
});
// FOOTER
// change an option's color when hovering over it