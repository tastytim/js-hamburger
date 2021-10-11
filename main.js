// document.getElementsByClassName("fa-bars")[0].addEventListener("click", function(){
//     document.getElementsByClassName("hamburger-menu")[0].classList.add("close");
// }); 


// document.getElementsByClassName("fa-times")[0].addEventListener("click", function(){
//     document.getElementsByClassName("hamburger-menu")[0].classList.remove("close");
// }); 



const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const hamburger = document.querySelector(".hamburger-menu");


bars.addEventListener("click" , function(){
    hamburger.style.display = "inline";
});

times.addEventListener("click" , function(){
    hamburger.style.display = "none";
});
