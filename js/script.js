let header = document.querySelector(".header");
let burger = header.querySelector(".burger-menu");
let burgerIcon = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function(){
    header.classList.toggle("header__mobile")

    if (header.classList.contains("header__mobile")) {
        burgerIcon.src = "images/burger-menu-close.svg"
    } else {
        burgerIcon.src = "images/burger-menu.svg"
    }
    
})
