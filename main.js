import './style.css'
import Header from "./src/components/header"
import Footer from './src/components/footer'

const header = Header()
const app = document.querySelector('#app')
const footer = Footer()

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
