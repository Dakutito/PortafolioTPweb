/* Menu de opcion */
let menu= document.querySelector("ul")
let bars= document.querySelector (".menu .fa-bars")
bars.addEventListener("click", function(){
    menu.classList.toggle("show")
});
AOS.init();