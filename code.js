/* Menu de opcion */
let menu= document.querySelector("ul")
let bars= document.querySelector (".navbar .fa-bars")
bars.addEventListener("click", function(){
    menu.classList.toggle("show")
});
AOS.init();

/* boton modo oscuro*/
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle('active');
});


/* Boton hacia arriba */
const btn_scrolltop = document.getElementById("btn_scrolltop")
      btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0, 0)
      })

    window.onscroll = () => {
      add_btn_scrolltop()
    }

    const add_btn_scrolltop = () => {
      if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
      } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
      }
    }