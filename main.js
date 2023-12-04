import './style.css'
import Header from "./src/components/header"
import Footer from './src/components/footer'
import Hero from './src/components/hero'

const header = Header()
const hero = Hero()
const app = document.querySelector('#app')
const footer = Footer()

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
const dropdowns = document.querySelectorAll('.main-header__navigation__dropdown--menu')

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