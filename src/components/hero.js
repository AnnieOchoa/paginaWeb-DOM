const Hero = () => {
    const hero = document.createElement('div')
    hero.classList.add('main-hero', 'container')

    hero.innerHTML =
        `
    <div class="main-hero__text">
        <h1>Muéstrales tu amor</h1>
        <p>
          Sabemos lo importantes que son para ti, por eso te invitamos a conocer lo
          que tenemos para ofrecer.
        </p>
        <a class="outlined-btn" href="">Ver más</a>
        </div>
        <div class="main-hero__img">
        <img src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1701652777/mis%20imagenes/mis%20imagenes/fylzmefgxywi3khsylwd.jpg" alt="pets">
    </div>
    `

    return hero
}

export default Hero