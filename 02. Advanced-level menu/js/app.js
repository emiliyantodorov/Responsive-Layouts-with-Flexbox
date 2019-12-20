const mobileNavBarEl = document.querySelectorAll(".mobile-nav-bar");
const mobileBtnEl = document.querySelectorAll(".btn--mobile-menu");
const navEl = document.querySelector(".nav");

mobileNavBarEl.forEach(navBar => navBar.addEventListener("click", function (event) {
    const $target = event.target;

    if ($target && $target.nodeName === "A") {
        $target
            .parentElement
            .nextElementSibling
            .lastElementChild
            .classList.toggle("addFullHeight");

        // $target.classList.toggle("addFullHeight");
    }
}));

