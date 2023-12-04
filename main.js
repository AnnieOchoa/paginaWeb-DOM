import './style.css'
import Header from "./src/components/header"
import Footer from './src/components/footer'
import Hero from './src/components/hero'
import Body from "./src/components/body"

const header = Header()
const app = document.querySelector('#app')
const footer = Footer()

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
