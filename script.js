document.addEventListener("DOMContentLoaded", function () {
    var menuTrigger = document.getElementById("menu-trigger");
    var sideMenu = document.getElementById("side-menu");

    menuTrigger.addEventListener("mouseenter", function () {
        sideMenu.style.display = "block";
    });

    sideMenu.addEventListener("mouseleave", function () {
        sideMenu.style.display = "none";
    });
});