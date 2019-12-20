const mobileNavBarEl = document.querySelector(".mobile-nav-bar");
const mobileBtnEl = document.querySelector(".btn--mobile-menu");
const navEl = document.querySelector(".nav");
const navBar = document.querySelector(".mobile-nav-bar");
const fooDropdownBtns = Array.from(document.querySelectorAll(".btn-dropdown"));
const navLinks = document.querySelector(".nav__link");
const navWrapperEl = document.querySelector(".nav-wrapper");

mobileBtnEl.addEventListener("click", function (event) {
    event.preventDefault();

    navWrapperEl.classList.toggle("left-zero");
});

navEl.addEventListener("click", function (event) {
    event.preventDefault();
    const $target = event.target;

    if ($target
        && $target.children.length !== 0
        && $target.parentElement.children[1].nodeName === "UL") {
        $target.parentElement.children[1].classList.toggle("addHeight");
        $target.classList.toggle("left-green-border");
        $target.children[0].classList.toggle("rotateEl");
    }
});




