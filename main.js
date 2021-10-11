document.getElementsByClassName("fa-bars")[0].addEventListener("click", function(){
    document.getElementsByClassName("hamburger-menu")[0].classList.add("close");
}); 


document.getElementsByClassName("fa-times")[0].addEventListener("click", function(){
    document.getElementsByClassName("hamburger-menu")[0].classList.remove("close");
}); 