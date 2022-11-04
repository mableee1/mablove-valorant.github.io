// MAIN PAGE

//Menu button
let burger = document.querySelector('#burger');
let menu = document.querySelector('.navbarList');
burger.addEventListener("click", () => {
    menu.classList.toggle("activeNavbarList");
});

//Slide buttons
let prevButton = document.querySelector("#previousSlide");
let nextButton = document.querySelector("#nextSlide");
let rolesArray = document.querySelectorAll(".slides");
function activeId() {
    for (let i = 0; i < rolesArray.length; ++i) {
        if (rolesArray[i].classList.contains("slideActive")) {
            return i;
        };
    }
}
prevButton.addEventListener("click", () => {
    let currentId = activeId();
    rolesArray[currentId].classList.remove("slideActive");
    currentId = (currentId == 0) ? rolesArray.length - 1 : currentId - 1;
    rolesArray[currentId].classList.add("slideActive");
});
nextButton.addEventListener("click", () => {
    let currentId = activeId();
    rolesArray[currentId].classList.remove("slideActive");
    currentId = (currentId == rolesArray.length - 1) ? 0 : currentId + 1;
    rolesArray[currentId].classList.add("slideActive");
});

// agentCards
let agentPage = document.querySelectorAll(".agentPage");
// Появление окна при нажатии на имя агента в agentRoles
let agentClicked = document.querySelectorAll(".agentNames > a");
agentClicked.forEach((item) => {
    item.addEventListener("click", () => {
        let body = document.querySelector("body");
        let agentId = item.textContent.toLowerCase();
        let showAgent = document.querySelector("#" + agentId);
        let previousActive = document.querySelector('#agentCards > .activeAgent'); // Ищет последнего агента с атрибутом "active", чтобы убрать его
        showAgent.classList.toggle('activeAgent');
        if (previousActive) {
            previousActive.classList.remove('activeAgent');
        }
        /*Остановка прокрутки, когда нажимаем на агента */
        if (showAgent.classList.contains('activeAgent')) {
            scrollTo(showAgent);
            showAgent.classList.toggle("overlayAgentCard");
            body.classList.toggle("stopScrolling");
        }
        let closeButton = document.querySelector("#" + showAgent.id + " > .close"); // Закрытие окна при нажатии кнопки "close"
        closeButton.addEventListener("click", () => {
            showAgent.classList.remove('activeAgent');
            /**/
            showAgent.classList.toggle("overlayAgentCard");
            body.classList.toggle("stopScrolling");
        });
    });
});
// Появление фигуры с описанием способности при нажатии на иконку способности
let abilityClicked = document.querySelectorAll(".abilities > button");
abilityClicked.forEach((item) => {
    item.addEventListener("click", () => {
        let abilityClass = item.className;
        let abilityCard = document.querySelector(".abilityCard > .${abilityClass}");
        abilityCard.classList.toggle("activeAbility");
    });
});

// GAMEPLAY GUIDES
//#agentList
// Информация об агенте поверх ролей

