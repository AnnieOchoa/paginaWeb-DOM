const Body = () => {
    const body = document.createElement('body')
    body.innerHTML = 
     `
    <div class="banner">
    <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701492772/petStore/banner/Screenshot_1_zgz9zq.png" >
  </div>

  <h1 class="novedades" id="novedades">Novedades</h1>
  <main class="hero" id="hero">

    <ol class="productos-1" id="productos-1">
      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378999/petStore/gatos/Screenshot_1_xi1bdn.png" alt="" style="width: 305px; height: 350px;">
        <h4>Alimento para gatos Wiskas</h4>
        <p>USD$20.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378993/petStore/gatos/51JxXiVhTiL._SX466__bs11w4.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Cama para gatos</h4>
        <p>USD$08.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378996/petStore/gatos/779-7794010_gatos-png-gatos-con-fondo-blanco_feq22f.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Venta de gatitos</h4>
        <p>USD$100.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378993/petStore/gatos/51MLjtW86YL_pusc4o.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Disfraz Hallowen</h4>
        <p>USD$04.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378997/petStore/gatos/Hb169116d46db4d788af1078b0f0cf896o_ru5fjm.webp" alt="" style="width: 305px; height: 350px;">
        <h4>Juegos de pared</h4>
        <p>USD$200.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378994/petStore/gatos/61DTFY9WZCL._AC_SX466__cxlmxp.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Dispensador de alimento</h4>
        <p>USD$182.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378994/petStore/gatos/51v50x2qPhL._SY355__sdq91w.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Raton remoto</h4>
        <p>USD$50.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378995/petStore/gatos/ba0ebe606ebabacd9ff9afeacb0b87d2_wg3nwj.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Juego escalable de piso</h4>
        <p>USD$80.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>
    </ol>

    <ol class="productos-2" id="productos-2">
      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379000/petStore/perros/61fBmukTnuL._AC_SL1003__a4bpcs.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Sujetador para cachorros</h4>
        <p>USD$15.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn" >
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379007/petStore/perros/pedigree-cachorro-20-kg-alimento-para-perro-cachorro-D_NQ_NP_692239-MLM27040603462_032018-F_a9pfpo.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Purina marca Pedigree</h4>
        <p>USD$28.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701378998/petStore/perros/abrigoprr_qz0sfy.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Bufanda para cachorros</h4>
        <p>US$05.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379012/petStore/perros/R_uuakza.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>3 perras de raza en venta</h4>
        <p>USD$40.00 c/u</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379004/petStore/perros/banera-para-perro-mascota-veterinaria-bosster-azul-D_NQ_NP_946515-MLM25262820126_012017-F_kadggb.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Bañera para perros</h4>
        <p>USD$12.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379006/petStore/perros/correas-para-perro_tbl4o5.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Sujetador perro adulto</h4>
        <p>USD$07.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379000/petStore/perros/Los-mejores-juguetes-para-cachorros_bkh1vy.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Jueguete para cachorros</h4>
        <p>USD$02.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379007/petStore/perros/Screenshot_1perrito_keissu.png" alt="" style="width: 305px; height: 350px;">
        <h4>Cachorro macho en venta</h4>
        <p>USD$40.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

    </ol>

    <ol class="productos-3" id="productos-3">
      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379011/petStore/aves/cotorra_h8kkqx.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Venta de loros</h4>
        <p>USD$16.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379010/petStore/aves/Nat20tiel_ylolmu.png" alt="" style="width: 305px; height: 350px;">
        <h4>Alimento para aves</h4>
        <p>USD$10.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379006/petStore/aves/jaula-para-aves-medianas_hgbugjm_3_wsihzc.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Jaula para aves</h4>
        <p>USD$89.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379009/petStore/aves/OIP_sjpxty.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Venta de Cacatúas</h4>
        <p>USD$30.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701413452/petStore/aves/goldfish-en-el-fondo-blanco-28424434_iaoqzi.webp" alt="" style="width: 305px; height: 350px;">
        <h4>Venta de goldfish</h4>
        <p>USD$03.50</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701413463/petStore/aves/D_NQ_NP_894617-MLA41382148401_042020-F_jfn8oo.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Alimento para peces</h4>
        <p>USD$12.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701413441/petStore/aves/5cadea9d2ad006ccbdd297b6_rpx4yi.webp" alt="" style="width: 305px; height: 350px;">
        <h4>Venta de tortugas</h4>
        <p>USD$18.00</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>

      <li class="card">
        <img src="https://res.cloudinary.com/dmuykh17m/image/upload/v1701379018/petStore/aves/patos_bxcwxm.jpg" alt="" style="width: 305px; height: 350px;">
        <h4>Venta patitos bebé</h4>
        <p>USD$01.20</p>
        <input class="btn" type="button" value="Agregar al carrito" id="btn">
      </li>
    </ol>

  </main>

     `
    return body
    }
    
    export default Body