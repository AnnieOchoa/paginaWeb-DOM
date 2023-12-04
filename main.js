import './style.css'
import Header from "./src/components/header"
import Footer from './src/components/footer'
import Hero from './src/components/hero'
import Body from "./src/components/body"

const header = Header()
const hero = Hero() 
const app = document.querySelector('#app')
const footer = Footer()
const body = Body()

app.appendChild(body)
app.appendChild(header)
app.appendChild(hero)
app.appendChild(footer)
const cartMenu = document.querySelector('#cart-menu')
const cta = document.querySelector('.main-header__cta')
cartMenu?.addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('cart__show')
})

const closeCartBtn = document.querySelector('#close-cart')

closeCartBtn.addEventListener('click', () => {
  document.querySelector('.cart').classList.remove('cart__show')
})


// Activar mega menu
const navigation = document.querySelector('.main-header__navigation')
const dropdowns = document.querySelectorAll('.main-header_navigation_dropdown--menu')

navigation.addEventListener('click', ({ target }) => {
  [...dropdowns].forEach((dropdown) => {
    if (target.tagName === 'A') {
      if (!target.parentElement.children[1].classList.contains('show-dropdown-menu')) {
        dropdown.classList.remove('show-dropdown-menu')
      }
    }
  })
  if (target.tagName === 'I') {
    target.parentElement.parentElement.children[1].classList.toggle('show-dropdown-menu')
  } else if (target.tagName === 'A') {
    target.parentElement.children[1].classList.toggle('show-dropdown-menu')
  }
})

//Menu Hamburguesa
const mobileMenu = document.querySelector('#hamburger-menu')
const search = document.querySelector('.main-header__search')

mobileMenu.addEventListener('click', () => {
  navigation.classList.toggle('show-dropdown-menu')
  search.classList.toggle('show')
  cta.classList.toggle('show')
})

//Parte hecha por Elvin Eduardo Franco
//constantes globales

app.appendChild(body)
let hero2 = document.querySelector("#hero");
let maxScrollLeft = hero2.scrollWidth - hero2.clientWidth;
let intervalo = null;
let step = 1;


//carrusel

const start = () => {
  intervalo = setInterval(function (){
    hero2.scrollLeft = hero2.scrollLeft + step;
    if (hero2.scrollLeft === maxScrollLeft){
      step = step * -1
    } else if (hero2.scrollLeft === 0){
      step = 1;
    }
  },10)
};

const stop = ()=> {
  clearInterval(intervalo);
};

start();

const header_a1 = document.querySelector('.header_a1')
const hero_b2 = document.querySelector('.hero_b2')
const main_1 = document.querySelector('.main_1')
const footer_1 = document.querySelector('.footer_1')

header_a1.appendChild(header).innerHTML
hero_b2.appendChild(hero).innerHTML
main_1.appendChild(body).innerHTML
footer_1.appendChild(footer).innerHTML


//fin participación Elvin Eduardo