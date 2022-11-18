// API (https://valorant-api.com/v1/agents)
/*fetch('https://valorant-api.com/v1/agents')
.then(res => res.json())
.then(data => {
    console.log(data);
    // data = {status: 200, data: Array (with agents)}
    // console.log(data.data[0]); // first agent object
    console.log(data.data[0].displayName); // agent name
    console.log(data.data[0].role.displayName); // agent role
    console.log(data.data[0].fullPortraitV2); // full agent image
    // console.log(data.data[0].role)
    console.log(data.data[0].description); // agent description
    console.log(data.data[0].abilities[0].displayName); // ability name
    console.log(data.data[0].abilities[0].description); // ability description
    console.log(data.data[0].abilities[0].displayIcon); // ability icon
})
.catch(error => console.log('ERROR'));
*/
let agentFullHeight = document.querySelector('.agentFullHeight');
let role = document.querySelector('.role');
let roleIcon = document.querySelector('.roleIcon');
let agentDescription = document.querySelector('.agentDesc .description');
console.log(role.firstChild)
// data about a chosen agent from API
function getAgent(agentName) {
    fetch('https://valorant-api.com/v1/agents')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let arrayOfAgents = data.data;
        // item is an agent object
        arrayOfAgents.forEach((item) => {
            if (item.displayName === agentName) {
                // set the agent's full height image
                agentFullHeight.src = item.fullPortraitV2;
                // agent's role name
                role.textContent = item.role.displayName;
                // agent's role icon
                roleIcon.src = item.role.displayIcon;
                // agent's description
                agentDescription.textContent = item.description;
            }
        });
    })
    .catch(error => console.log('ERROR'));
}
getAgent('Fade');
// Menu on scroll
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

/* check selected agent */
// list of agent li tags, for example, <li>Brimstone</li>
let agentList = document.querySelectorAll(".agentList > li");
// elements inside about agent container
let aboutElements = document.querySelector(".agentAbout").childNodes;
// elements inside abilities container
let abilitiesElements = document.querySelector('.agentAbilities').childNodes;
[aboutElements, abilitiesElements].forEach((item) => console.log(item));
agentList.forEach((item) => {
    item.addEventListener('click', () => {
    // text inside of an agent li element, for example, Brimstone
    let chosenAgent = item.textContent;
    console.log(chosenAgent);
    getAgent(item.textContent);
    });
});