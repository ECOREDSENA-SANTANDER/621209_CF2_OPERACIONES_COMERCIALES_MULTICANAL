<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Relaciones y formatos comerciales
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='') 
        .col-sm-12.col-lg-7
            p.mb-3 En la distribución comercial, no basta con definir por dónde circulará el producto. También es necesario establecer relaciones claras entre los actores del canal y seleccionar los formatos comerciales más adecuados para llegar al cliente final. Por esta razón, los acuerdos comerciales y los formatos de venta cumplen un papel importante en la organización de la distribución, la experiencia de compra y la cobertura del mercado.

            p.mb-0 Los acuerdos comerciales permiten regular la relación entre productores, intermediarios, distribuidores y puntos de venta. Por su parte, los formatos comerciales determinan la manera en que los productos o servicios se presentan y se comercializan ante el consumidor final, ya sea en espacios físicos, medios digitales o modelos combinados. 
            
      
      
      
      
      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 2.1 Acuerdos comerciales: concepto, tipos y funciones.
      
      p.mb-5(data-aos='fade-right') En la distribución comercial, las relaciones entre los actores del canal requieren condiciones que orienten la negociación y la operación. En este contexto, los acuerdos comerciales facilitan la coordinación, optimizan procesos y fortalecen la gestión de la comercialización.  
      
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4
          .bg-color-3.p-4.mb-cus
            p.mb-0 Los acuerdos comerciales son instrumentos que establecen las condiciones bajo las cuales interactúan los actores del canal. Su correcta definición permite construir relaciones claras, eficientes y sostenibles entre productores, intermediarios y distribuidores. En el contexto actual, estos acuerdos también pueden incorporar aspectos logísticos, comerciales y tecnológicos.  
        .col-sm-12.col-lg-4.d-none.d-lg-block.bg-color-4
          img(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-sm-12.col-lg-4
          img.wcus-5.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t2/3.svg', alt='')
          p.mb-0 Estos acuerdos permiten regular elementos como precios, volúmenes de compra, territorios de venta, tiempos de entrega, condiciones de pago y exclusividad. Su finalidad es asegurar el cumplimiento de los objetivos comerciales y optimizar la relación entre los participantes del canal. 
      
      
      p.mb-5(data-aos='fade-right') En la práctica empresarial, una organización puede establecer acuerdos con distribuidores para garantizar cobertura territorial, abastecimiento continuo, visibilidad del producto y rotación en el punto de venta. También puede definir condiciones específicas con minoristas, proveedores o plataformas digitales para organizar la venta y distribución de sus productos. 
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/4.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-2.py-2.br-1.mb-3
                h2.mb-0 ¿Para qué sirven los acuerdos comerciales? 
              p.mb-0 Los acuerdos comerciales ayudan a ordenar la relación entre los actores del canal de distribución. Permiten definir condiciones sobre precios, cantidades, territorios, tiempos de entrega, pagos, exclusividad y responsabilidades. Cuando estas condiciones son claras, se reducen conflictos y se mejora la eficiencia comercial. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de acuerdos comerciales 


      p.mb-5(data-aos='fade-right') Los acuerdos comerciales pueden clasificarse según su alcance, formalidad y tipo de relación entre las partes. Cada tipo de acuerdo cumple una función diferente dentro del canal de distribución y permite organizar la comercialización de acuerdo con las necesidades de la empresa y del mercado. 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tarjeta.bg-color-5.p-4.pb-0.mb-4
            SlyderA.pb-lg-5.pb-3(tipo="a")
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/6.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Acuerdos de distribución
                    p.mb-0 Definen las condiciones para comercializar productos en un territorio o canal específico. Se utilizan cuando una empresa necesita autorizar a determinados distribuidores para llevar sus productos al mercado.
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/7.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Acuerdos de exclusividad
                    p.mb-0 Otorgan a un intermediario el derecho exclusivo de comercializar un producto en una zona determinada. Se aplican principalmente cuando la empresa busca mantener mayor control sobre la distribución y el posicionamiento de la marca.
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/8.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Acuerdos de franquicia
                    p.mb-0 Permiten operar un negocio bajo una marca y un modelo establecido. En este tipo de acuerdo, se busca conservar estándares de operación, servicio, presentación y experiencia comercial.
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/9.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Acuerdos de suministro
                    p.mb-0 Establecen condiciones para la entrega continua de productos. Son importantes para garantizar abastecimiento permanente en supermercados, tiendas, puntos de venta o canales digitales.
            
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de los acuerdos comerciales 
      
      p.mb-5(data-aos='fade-right') Los acuerdos comerciales cumplen funciones fundamentales dentro de la gestión de la distribución, porque permiten organizar y regular la interacción entre los actores del canal. Estas funciones ayudan a disminuir conflictos, mejorar la coordinación operativa y fortalecer relaciones comerciales sostenibles. 


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t2/10.svg')
            h4.text-center Regulación
            p.mb-0.text-center Establece normas y condiciones entre las partes. Su impacto principal es reducir conflictos comerciales.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t2/11.svg')
            h4.text-center Coordinación
            p.mb-0.text-center Organiza actividades logísticas y comerciales. Su impacto se relaciona con la mejora de la eficiencia operativa.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t2/12.svg')
            h4.text-center Control
            p.mb-0.text-center Define responsabilidades y seguimiento del desempeño. Su impacto es garantizar el cumplimiento de los objetivos comerciales.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t2/13.svg')
            h4.text-center Estabilidad
            p.mb-0.text-center Genera relaciones comerciales sostenibles. Su impacto se refleja en el fortalecimiento de alianzas estratégicas.


      p.mb-0(data-aos='fade-right') En la práctica, una empresa puede establecer acuerdos con proveedores para garantizar abastecimiento continuo, condiciones de exhibición y estrategias promocionales. También puede regular un marketplace mediante acuerdos que definan condiciones de venta para terceros. 


      
      Separador
      #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 2.2 Formatos comerciales: concepto, tipos y clasificación.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-3 En el proceso de distribución, la forma en que los productos se presentan y comercializan al cliente final influye directamente en la experiencia de compra y en el alcance del mercado. Los formatos comerciales responden a las dinámicas del consumo y se adaptan a las necesidades del cliente, al tipo de producto y a los canales utilizados por las empresas. 
          .cajon.color-secundario.p-4.mb-0
            p.mb-0 Los formatos comerciales corresponden a las diferentes formas o tipos de establecimientos y medios a través de los cuales se comercializan productos o servicios al consumidor final. Estos formatos determinan la manera en que el cliente interactúa con el producto, influyendo en aspectos como accesibilidad, servicio, exhibición y experiencia de compra.   

      p.mb-5(data-aos='fade-right') La elección del formato comercial depende del segmento de mercado, el tipo de producto y la estrategia comercial de la organización. Por ejemplo, un formato de tienda de descuento prioriza precios bajos y alta rotación de productos, mientras que un hipermercado ofrece mayor amplitud de surtido y una experiencia de compra más extensa. En cambio, el comercio electrónico facilita la compra mediante plataformas digitales. 

      .row.justify-content-center.mb-5.align-items-center.bg-secundario(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t2/15.png', alt='')
        .col-sm-12.col-lg-7.p-4
            img.wcus-2.mb-5(src='@/assets/curso/temas/t2/16.svg', alt='')
            h4.mb-3 Formato comercial y experiencia de compra 
            p.mb-0 El formato comercial define cómo se presenta y se vende el producto al cliente final. Puede tratarse de una tienda tradicional, supermercado, hipermercado, tienda de descuento o comercio electrónico. Cada formato influye en la accesibilidad, el servicio, la exhibición y la experiencia de compra. 

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de formatos comerciales 

      .bg-full-width.bg-color-3.mb-5(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/17.png', alt='')
            .col-sm-12.col-lg-8
              p.mb-5  Los tipos de formatos comerciales se diferencian según características como tamaño, surtido, nivel de servicio y modelo de operación. Esta clasificación permite reconocer que no todos los puntos de venta funcionan igual ni responden a las mismas necesidades del cliente. 
              SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-0
                    .col-8
                      img(src='@/assets/curso/temas/t2/18.svg' alt='')
                  h5.text-center Tienda tradicional
                  p.mb-0 Es un espacio pequeño, con atención personalizada y surtido limitado. Suele estar asociado a tiendas de barrio o negocios cercanos al consumidor.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-0
                    .col-8
                      img(src='@/assets/curso/temas/t2/19.svg' alt='')
                  h5.text-center Supermercado
                  p.mb-0 Funciona bajo el modelo de autoservicio, ofrece variedad de productos y tiene tamaño medio. Permite al cliente seleccionar directamente los productos que necesita.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-0
                    .col-8
                      img(src='@/assets/curso/temas/t2/20.svg' alt='')
                  h5.text-center Hipermercado
                  p.mb-0 Corresponde a una gran superficie, con amplio surtido y alto volumen de ventas. Integra diferentes categorías de productos en un mismo espacio comercial.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-0
                    .col-8
                      img(src='@/assets/curso/temas/t2/21.svg' alt='')
                  h5.text-center Tienda de descuento
                  p.mb-0 Prioriza precios bajos, marcas propias y surtido limitado. Su estrategia se enfoca en alta rotación y compras frecuentes.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-0
                    .col-8
                      img(src='@/assets/curso/temas/t2/22.svg' alt='')
                  h5.text-center Comercio electrónico
                  p.mb-0 Permite la venta a través de plataformas digitales. Facilita la consulta de productos, la compra en línea y la entrega mediante procesos logísticos.



      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de formatos comerciales

      p.mb-5(data-aos='fade-right') Los formatos comerciales también pueden clasificarse según criterios relacionados con su operación y su relación con el cliente. Esta clasificación ayuda a entender si el formato se basa en autoservicio o servicio asistido, si opera por canal físico o digital, y si corresponde a un negocio independiente o a una cadena con múltiples puntos de venta. 

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Criterios para clasificar formatos comerciales
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/23.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Nivel de servicio")
              .col-12
                p.mb-0 Permite diferenciar entre autoservicio y servicio asistido. En el autoservicio, el cliente selecciona directamente los productos. En el servicio asistido, requiere apoyo del vendedor durante el proceso de compra.
            .row(numero="2" titulo="Canal de operación")
              .col-12
                p.mb-0 Permite diferenciar entre formato físico y formato digital. El formato físico se desarrolla en un punto de venta tradicional, mientras que el formato digital funciona mediante plataformas online o aplicaciones.
            .row(numero="3" titulo="Propiedad del negocio")
              .col-12
                p.mb-0 Permite diferenciar entre negocio independiente y cadena. El negocio independiente opera de manera individual, mientras que la cadena pertenece a una empresa con múltiples puntos de venta.


      p.mb-0(data-aos='fade-right') En el contexto actual, algunas empresas integran formatos físicos y digitales para ampliar su cobertura y facilitar la experiencia de compra. También existen plataformas que operan bajo modelos digitales y transforman la relación con el cliente mediante entregas a domicilio, consulta de productos y compra en línea. 




  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
