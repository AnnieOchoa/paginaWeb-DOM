const Footer = () => {

    const  footer = document.createElement('footer')

    footer.innerHTML =
        `
        <footer>
        <div class="container">
            <div class="footer-content">
                <h3>Contactanos</h3>
            <p><b>Email:</b> <br>petStore@gmail.com</p>
            <p> <b>Telefono:</b> <br>+502 6789-6879</p>
            <p><b>Dirección:</b> <br>789 Avenida de las Mascotas
                Colonia Amigable, PET567
                Ciudad Animalia, PAW</p>
            </div>
            <div class="footer-content">
                <h3>Secciones</h3>
                <ul class="list">
                    <li><a href=""><i class="fa-solid fa-dog"></i><b>   Perros</b></a></li>
                    <li><a href=""><i class="fa-solid fa-cat"></i><b>   Gatos</b></a></li>
                    <li><a href=""><i class="fa-solid fa-otter"></i><b>  Otras mascotas</b></a></li>
                    <li><a href=""><i class="fa-solid fa-shop"></i><b>   Marcas</b></a></li>
                    <li><a href=""><i class="fa-solid fa-shield-dog"></i><b>   Servicios</b></a></li>
                    <li><a href=""><i class="fa-solid fa-percent"></i><b>   Ofertas</b></a></li>
                </ul>
            </div>
            <div class="footer-content">
                <h3>Siguenos</h3>
                <ul class="social-icons">
                    <li><a href=""><i class="fab fa-facebook"></i> </a></li>
                    <li><a href=""><i class="fab fa-twitter"></i> </a></li>
                    <li><a href=""><i class="fab fa-instagram"></i> </a></li>
                    <li><a href=""><i class="fa-brands fa-tiktok"></i> </a></li>
                </ul>
                <div class="logo-footer">
                    <img src="https://res.cloudinary.com/dcy3herhu/image/upload/v1701487503/kodigo/wsdfhlsdf/amtpquyh6pa7jppnedfz.png" alt="logo">
                </div>
                </div>
        </div>
        <div class="bottom-bar">
            <p>&copy; 2023 PETSTORE. DERECHOS RESERVADOS.</p>
        </div>
    </footer>
    `
return footer
}

export default Footer