import './style.css'
import Header from "./src/components/header"

import Body from "./src/components/body"

const header = Header()
const body = Body()

const app = document.querySelector('#app')
const footer = Footer()

app.appendChild(body)
app.appendChild(header)
app.appendChild(footer)
const hamburgermenu = document.querySelector('#hamburger-menu')
hamburgermenu?.addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('cart__show')
})

const closeCartBtn = document.querySelector('#close-cart')

closeCartBtn.addEventListener('click', () => {
  document.querySelector('.cart').classList.remove('cart__show')
})


//Parte hecha por Elvin Eduardo Franco
//constantes globales

app.appendChild(body)
let hero = document.querySelector("#hero");
let maxScrollLeft = hero.scrollWidth - hero.clientWidth;
let intervalo = null;
let step = 1;
let btn = document.querySelector("#btn");
let card = document.querySelector(".card")

btn.addEventListener("click", ()=> {
  console.log("hola")
})


//carrusel

const start = () => {
  intervalo = setInterval(function (){
    hero.scrollLeft = hero.scrollLeft + step;
    if (hero.scrollLeft === maxScrollLeft){
      step = step * -1
    } else if (hero.scrollLeft === 0){
      step = 1;
    }
  },10)
};

const stop = ()=> {
  clearInterval(intervalo);
};

start();

btn.addEventListener('mouseover', stop);
btn.addEventListener('mouseout', start);

//fin participación Elvin Eduardo