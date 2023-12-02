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


//Parte hecha por Elvin Eduardo Franco
//constantes globales

const productos_1 = document.querySelector(".productos-1");
const productos_2 = document.querySelector(".productos-2");
const productos_3 = document.querySelector(".productos-3");

let maxScrollLeft_1 = productos_1.scrollWidth - productos_1.clientWidth;
let maxScrollLeft_2 = productos_2.scrollWidth - productos_2.clientWidth;
let maxScrollLeft_3 = productos_3.scrollWidth - productos_3.clientWidth;

let intervalo_1 = null;
let intervalo_2 = null;
let intervalo_3 = null;


let step_1 = 1;
let step_2 = 1;
let step_3 = 1;

//carrusel 1

const start_1 = () => {
  intervalo_1 = setInterval(function (){
    productos_1.scrollLeft = productos_1.scrollLeft + step_1;
    if (productos_1.scrollLeft === maxScrollLeft_1){
      step_1 = step_1 * -1
    } else if (productos_1.scrollLeft === 0){
      step_1 = 1;
    }
  },10)
};

const stop_1 = ()=> {
  clearInterval(intervalo_1);
};

//productos_1.addEventListener('mouseover', ()=>{
  //stop_1()
//});

//productos_1.addEventListener('mouseout', ()=> {
  //start_1();
//})

start_1();

//carrusel 2

const start_2 = () => {
  intervalo_2 = setInterval(function (){
    productos_2.scrollLeft = productos_2.scrollLeft + step_2;
    if (productos_2.scrollLeft === maxScrollLeft_2){
      step_2 = step_2 * -1
    } else if (productos_2.scrollLeft === 0){
      step_2 =  1;
    }
  },10)

};

const stop_2 = ()=> {
  clearInterval(intervalo_2);
};

//productos_2.addEventListener('mouseover', ()=>{
  //stop_2()
//});

//productos_2.addEventListener('mouseout', ()=> {
  //start_2();
//})

start_2();

//carrusel 3

const start_3 = () => {
  intervalo_3 = setInterval(function (){
    productos_3.scrollLeft = productos_3.scrollLeft + step_3;
    if (productos_3.scrollLeft === maxScrollLeft_3){
      step_3 = step_3 * -1
    } else if (productos_3.scrollLeft === 0){
      step_3 = 1;
    }
  },10)
};

const stop_3 = ()=> {
  clearInterval(intervalo_3);
};

//productos_3.addEventListener('mouseover', ()=>{
  //stop_3()
//});

//productos_3.addEventListener('mouseout', ()=> {
  //start_3();
//})

start_3();