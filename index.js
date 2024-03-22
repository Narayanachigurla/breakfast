

// var navlink = document.querySelector(".nav-item");
var navbar = document.querySelector("#navbarNav");
var burger = document.querySelector(".navbar-toggler");

var navlink = document.querySelectorAll(".nav-link").forEach(n => n.addEventListener 
("click",()=>{
    navbar.classList.toggle("active");
})
);

burger.addEventListener("click",()=>
{
    navbar.classList.toggle("active");
})

