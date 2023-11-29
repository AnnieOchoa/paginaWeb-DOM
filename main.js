import './style.css'
import Header from "./src/components/header"

const header = Header()
const app = document.querySelector('#app')

app.appendChild(header)
const hamburgermenu = document.querySelector('#hamburger-menu')
hamburgermenu?.addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('cart__show')
})

const closeCartBtn = document.querySelector('#close-cart')

closeCartBtn.addEventListener('click', () => {
  document.querySelector('.cart').classList.remove('cart__show')
})
