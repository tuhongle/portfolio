const togglerIcon = document.querySelector(".navbar-toggler");
const closeButton = document.getElementById("closeOffCanvas");

function openNavbar() {
    togglerIcon.style.display = "none";
    closeButton.style.display = "block";
}

function closeNavbar() {
    togglerIcon.style.display = "block";
    closeButton.style.display = "none";
}

togglerIcon.onclick = openNavbar;
closeButton.onclick = closeNavbar;