// ------------------------------ Variables ------------------------------ //

projectDropdownState = false;

const PROJECT_DROPDOWN_BTN = document.getElementById("project-dropdown");
const PROJECT_DROPDOWN = document.getElementById("project-dropdown-menu");

const ADA_PROJECT_TITLE = document.getElementById("ada_project_title");
const SPACE_SHOOTER_PROJECT_TITLE = document.getElementById("space_shooter_project_title");
const PLATFORMER_PROJECT_TITLE = document.getElementById("platformer_project_title");
const TTT_PROJECT_TITLE = document.getElementById("ttt_project_title");

// --------------------------- Event Listeners --------------------------- //

PROJECT_DROPDOWN_BTN.addEventListener("click", switch_project_dropdown);

ADA_PROJECT_TITLE = addEventListener("click", goToPage("ada"));
SPACE_SHOOTER_PROJECT_TITLE = addEventListener("click", goToPage("ss"));
PLATFORMER_PROJECT_TITLE = addEventListener("click", goToPage("platformer"));
TTT_PROJECT_TITLE = addEventListener("click", goToPage("ttt"));

// ------------------------------ Functions ------------------------------ //

function switch_project_dropdown() {

    if (projectDropdownState == false) {

        PROJECT_DROPDOWN.style.height = "300px";
        projectDropdownState = true;

    }
    else if (projectDropdownState == true) {

        PROJECT_DROPDOWN.style.height = "0px";
        projectDropdownState = false;

    }

}

function goToPage(pageTitle) {

    switch (pageTitle) {

        case "ada":
            window.location.href = "project_pages/ada.html";
        
        case "ss":
        window.location.href = "project_pages/shooter.html";
    
        case "platformer":
        window.location.href = "project_pages/platformer.html";
    
        case "ttt":
        window.location.href = "project_pages/ttt.html";

    }

}