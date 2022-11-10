// HEADER
// show the navbar on scroll
window.addEventListener("scroll", () => {
    let navContainer = document.querySelector(".navContainer");
    if (window.pageYOffset > navContainer.offsetHeight) {
        navContainer.classList.add("navScrolled");
    }
    else if (window.pageYOffset <= navContainer.offsetHeight && navContainer.classList.contains("navScrolled")) {
        navContainer.classList.remove("navScrolled");
    }
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
    let invisibilityClass = "elementInvisibility"; // agent card is invisible
    let agentLiClass = "agentLi"; // agent card is visible
    if (card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
}
function roleChosen(card, role) { // all agents, role chosen
    let invisibilityClass = "elementInvisibility"; // agent card is invisible
    let agentLiClass = "agentLi"; // agent card is visible
    if (!card.classList.contains(role) && card.classList.contains(agentLiClass)) {
        card.classList.remove(agentLiClass);
        card.classList.add(invisibilityClass);
    }
    if (card.classList.contains(role) && card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
}
function agentChosen(card, agent) { // all roles, agent chosen
    let invisibilityClass = "elementInvisibility"; // agent card is invisible
    let agentLiClass = "agentLi"; // agent card is visible
    if (!card.classList.contains(agent) && card.classList.contains(agentLiClass)) {
        card.classList.remove(agentLiClass);
        card.classList.add(invisibilityClass);
    } else if (card.classList.contains(agent) && card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
}
function bothChosen(card, agent, role) { // agent chosen, role chosen
    let invisibilityClass = "elementInvisibility"; // agent card is invisible
    let agentLiClass = "agentLi"; // agent card is visible
    if (card.classList.contains(agent) && card.classList.contains(role) && card.classList.contains(invisibilityClass)) {
        card.classList.remove(invisibilityClass);
        card.classList.add(agentLiClass);
    }
    if ((!card.classList.contains(agent) || !card.classList.contains(role)) && card.classList.contains(agentLiClass)) {
        card.classList.remove(agentLiClass);
        card.classList.add(invisibilityClass);
    }
}
// FILTER BY AGENT
agentFilter.addEventListener("change", () => {
    let chosenAgent = agentFilter.value;
    let chosenRole = roleFilter.value;
    if (chosenAgent === "allAgents" && chosenRole === "allRoles") {
        agentCards.forEach((item) => {
            allChosen(item);
        });
    }
    if (chosenAgent !== "allAgents" && chosenRole !== "allRoles") {
        agentCards.forEach((item) => {
            bothChosen(item, chosenAgent, chosenRole);
        });
    }
    if (chosenAgent === "allAgents" && chosenRole !== "allRoles") {
        agentCards.forEach((item) => {
            roleChosen(item, chosenRole);
        });
    }
    if (chosenAgent !== "allAgents" && chosenRole === "allRoles") {
        agentCards.forEach((item) => {
            agentChosen(item, chosenAgent);
        });
    }
});
// FILTER BY ROLE
roleFilter.addEventListener("change", () => {
    let chosenRole = roleFilter.value;
    let chosenAgent = agentFilter.value;
    if (chosenRole === "allRoles" && chosenAgent === "allAgents") {
        agentCards.forEach((item) => {
            allChosen(item);
        });
    }
    if (chosenRole !== "allRoles" && chosenAgent !== "allAgents") {
        agentCards.forEach((item) => {
            bothChosen(item, chosenAgent, chosenRole);
        });
    }
    if (chosenRole !== "allRoles" && chosenAgent === "allAgents") {
        agentCards.forEach((item) => {
            roleChosen(item, chosenRole);
        });
    }
    if (chosenRole === "allRoles" && chosenAgent !== "allAgents") {
        agentCards.forEach((item) => {
            agentChosen(item, chosenAgent);
        });
    }
});
// FOOTER
// change an option's color when hovering over it