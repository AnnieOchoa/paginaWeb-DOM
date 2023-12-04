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
        <button id="cart-menu" class="cartIcon-btn">
          <i class="uil uil-shopping-cart-alt"></i>
        </button>
      </div>

      <div class="main-header__hamburger">
        <button id="hamburger-menu">
          <i class="uil uil-bars"></i>
        </button>
      </div>
    </div>

    <nav class="main-header__navigation">
        <div class="main-header__navigation__dropdown">
            <a href="#">Mascotas<i class="uil uil-angle-down"></i></a>
            <div class="main-header__navigation__dropdown--menu">
                <a href="Perros">Perros</a>
                <a href="Gatos">Gatos</a>
                <a href="Roedores">Roedores</a>
                <a href="Peces">Peces</a>
                <a href="Aves">Aves</a>
            </div>
       </div> 
       <div class="main-header__navigation__dropdown">
       <a href="#">Marcas<i class="uil uil-angle-down"></i></a>
       <div class="main-header__navigation__dropdown--menu">
           <a href="Heel">Heel</a>
           <a href="Royan Canin">Royan Canin</a>
           <a href="Pro Plan">Pro Plan</a>
           <a href="Hills">Hills</a>
           <a href="Cat Chow">Cat Chow</a>
       </div>
    </div> 
    <div class="main-header__navigation__dropdown">
    <a href="#">Servicios<i class="uil uil-angle-down"></i></a>
    <div class="main-header__navigation__dropdown--menu">
        <a href="Guardería">Guardería</a>
        <a href="Peluquería">Peluquería</a>
        <a href="Baño">Baño</a>
        <a href="Adopción">Adopción</a>
    </div>
    </div> 
    <div class="main-header__navigation__dropdown">
    <a href="#">Ofertas<i class="uil uil-angle-down"></i></a>
    <div class="main-header__navigation__dropdown--menu">
        <a href="Temporada">Temporada</a>
        <a href="Navidad">Navidad</a>
        <a href="2 x 1">2 x 1</a>
        <a href="Afiliados">Afiliados</a>
    </div>
    </div> 
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