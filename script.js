// ------------------------------ Variables ------------------------------ //

projectDropdownState = false;

const PROJECT_DROPDOWN_BTN = document.getElementById("project-dropdown");
const PROJECT_DROPDOWN = document.getElementById("project-dropdown-menu");

// --------------------------- Event Listeners --------------------------- //

PROJECT_DROPDOWN_BTN.addEventListener("click", switch_project_dropdown);

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