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
let createAcc = document.querySelector(".switchToCreate"); // link
let signupForm = document.querySelector(".signupForm");
let signupOptions = document.querySelector(".signupOptions");
let signupTitle = document.querySelector("#signupTitle");
// show signin form when clicking on .switchTo Login
let loginAcc = document.querySelector(".switchToLogin"); // link
let signinForm = document.querySelector(".signinForm");
let signinOptions = document.querySelector(".signinOptions");
let signinTitle = document.querySelector("#signinTitle");
// show forgot password form when clicking on .forgotMyPassword
let forgotMyPass = document.querySelector(".forgotMyPassword"); // link
let forgotPassForm = document.querySelector(".forgotPassForm");
let forgotPassTitle = document.querySelector("#forgotPasswordTitle");
// array of user options
let accActions = [createAcc, loginAcc, forgotMyPass];
// event listener for signup, signin, forgot password
accActions.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        switch(item) {
            case createAcc:
                [signinForm, signinOptions, signinTitle, forgotPassForm, forgotPassTitle].forEach((item) => {
                    if (!item.classList.contains("hide")) {
                        item.classList.add("hide");
                    }
                });
                [signupForm, signupOptions, signupTitle].forEach((item) => {
                    if (item.classList.contains("hide")) {
                        item.classList.remove("hide");
                    }
                });
                break;
            case loginAcc:
                [signupForm, signupOptions, signupTitle, forgotPassForm, forgotPassTitle].forEach((item) => {
                    if (!item.classList.contains("hide")) {
                        item.classList.add("hide");
                    }
                });
                [signinForm, signinOptions, signinTitle].forEach((item) => {
                    if (item.classList.contains("hide")) {
                        item.classList.remove("hide");
                    }
                })
                break;
            case forgotMyPass:
                [signupForm, signupOptions, signupTitle,
                    signinForm, signinOptions, signinTitle].forEach((item) => {
                        if (!item.classList.contains("hide")) {
                            item.classList.add("hide");
                        }
                });
                [forgotPassForm, forgotPassTitle].forEach((item) => {
                    if (item.classList.contains("hide")) {
                        item.classList.remove("hide");
                    }
                });
                break;
        }
    });
});

// SIGN UP
// Password check in the SIGN UP form: new password === confirm password
// Events: input - is activated while changing the input value
// Events: change - is activated only after changing the input value and after we switch our focus outside the input element
// Text within html: innerHTML - only for tag nodes: the tags and their text within the chosen tag w/o the tag itself
// Text within html: outerHTML - only for tag nodes: chosen tag, its text + tags and their text within the chosen tag w/ the tag itself
// Text within html: textContent - only text within the chosen tag w/ the tag itself
let newPass = document.querySelector("#newPass");
let confirmPass = document.querySelector("#confirmPass");
let submitButton = document.querySelector(".submitButton");
confirmPass.addEventListener("input", () => {
    let checkPassConfirmation = (newPass.value === confirmPass.value) ? true : false;
    console.log(checkPassConfirmation);
    if (!checkPassConfirmation) {
        confirmPass.classList.add("incorrectInput");
    } else if (confirmPass.classList.contains("incorrectInput")) {
        confirmPass.classList.remove("incorrectInput");
    }
});
// FORGOT PASSWORD
// #receiveCode form elements
let receiveCodeBtn = document.querySelector("#receiveCode");
let emailCodeInput = document.querySelector("#emailCode");
let emailCodeTitle = document.querySelector("#emailCodeLabel");
// #confirmCode form elements
let codeLabel = document.querySelector("#codeLabel");
let codeInput = document.querySelector("#code");
// event listener for submit buttons of #receiveCode, #confirmCode form elements
let confirmCodeBtn = document.querySelector("#confirmCode");
let recoverPageBtns = [receiveCodeBtn, confirmCodeBtn]; // list of buttons
let recoverPageElements = [emailCodeInput, emailCodeTitle, receiveCodeBtn, // list of form elements
    codeLabel, codeInput, confirmCodeBtn];
recoverPageBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        recoverPageElements.forEach((item) => {
            item.classList.toggle("hide");
        });
    });
});
// add code sending feature, code checking feature