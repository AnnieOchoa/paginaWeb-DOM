const Header = () => {

    const header = document.createElement('header')

    header.innerHTML =
        `
    <div class="main-header__wrapper container">
  <a class="main-header__logo" href="/index.html">
    <img
      src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1701205394/mis%20imagenes/mis%20imagenes/eccduv9kom9a0chr12jr.png"
      alt="logo"
    />
  </a>

  <div class="main-header__search">
    <div class="search-bar">
      <i class="uil uil-search"></i>
      <input placeholder="Buscar..." type="search" />
    </div>
  </div>

  <div class="main-header__cta">
    <button class="primary-btn">Iniciar Sesión</button>
    <button class="outlined-btn">Registrarse</button>
    <button id="hamburger-menu" class="cartIcon-btn">
      <i class="uil uil-shopping-cart-alt"></i>
    </button>
  </div>

  <div class="main-header__hamburger">
    <button>
      <i class="uil uil-bars"></i>
    </button>
  </div>
</div>

<nav class="main-header__navigation">
  <a href="#">Perros</a>
  <a href="#">Gatos</a>
  <a href="#">Otras mascotas</a>
  <a href="#">Marcas</a>
  <a href="#">Servicios</a>
  <a href="#">Ofertas</a>
</nav>

<div class="cart">
    <button class="cart__closebtn" id="close-cart">
    <i class="uil uil-times"></i></button>
    <table class="cart__table">
        <thead>
            <tr>
                <td>Imagen</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Cantidad</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> <img src="https://falabella.scene7.com/is/image/FalabellaCO/gsc_119629958_2052296_1?wid=800&hei=800&qlt=70" alt="xbox" /> </td>
                <td>Xbox 360</td>
                <td>$400.000</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <button class="cart__empty-cart">
    Vaciar Carrito
    </button>
</div>
    `
return header
}

export default Header