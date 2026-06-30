<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Estrategias e inventarios comerciales
      
      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-3 Las estrategias de distribución y la gestión de inventarios permiten organizar la manera en que los productos llegan al mercado y se mantienen disponibles para responder a la demanda. Una empresa no solo debe decidir por qué canal venderá sus productos, sino también cómo controlará sus existencias, cómo evitará faltantes y cómo reducirá costos asociados al almacenamiento o al exceso de productos.
            .cajon.color-acento-contenido.p-4.mb-0
              p.mb-0 En la gestión comercial, estos temas se relacionan directamente con la cobertura del mercado, la satisfacción del cliente, la rentabilidad y la eficiencia logística. Por esta razón, las decisiones sobre distribución, inventario y stock deben responder al tipo de producto, al comportamiento del consumidor, a la capacidad logística de la organización y a las condiciones del mercado.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='') 
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.1 Estrategias de distribución: concepto, tipos y clasificación.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.bg-color-3.px-4.py-4.mb-cus
            p.mb-0.mcus-1 Las estrategias de distribución corresponden al conjunto de decisiones que toma una empresa para definir cómo sus productos llegarán al consumidor final. Estas decisiones consideran aspectos como canales, cobertura, intermediarios y nivel de control.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.svg', alt='')
        .col-sm-12.col-lg-5
          p.mb-1 Su propósito es equilibrar variables como costo, disponibilidad, posicionamiento y servicio, de manera que el producto esté accesible en el lugar y momento adecuados. El diseño de estas estrategias depende del tipo de producto, el mercado objetivo y la capacidad logística de la organización.
          p.mb-0 En la práctica, algunas empresas aplican estrategias orientadas a lograr la máxima cobertura del mercado, mientras que otras priorizan el control del canal y la experiencia del cliente mediante distribución selectiva o exclusiva.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/3.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-2.py-2.br-1.mb-3
                h2.mb-0 Estrategia de distribución y llegada al mercado
              p.mb-0 Una estrategia de distribución define cómo llegará el producto al consumidor final. Para tomar esta decisión, la empresa analiza canales, cobertura, intermediarios, costos, disponibilidad y nivel de control. Una estrategia adecuada permite que el producto esté accesible para el cliente y conserve coherencia con el posicionamiento de la marca.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de estrategias de distribución
      
      p.mb-5(data-aos='fade-right') Los tipos de estrategias de distribución se definen según el nivel de cobertura y el número de intermediarios utilizados para comercializar el producto. Esta decisión permite establecer si la empresa buscará presencia amplia, control moderado o distribución restringida.

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.color-primario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t4/4.svg')          
          h4.text-center.text-white Estrategia intensiva
          p.mb-0.text-white Busca la mayor cobertura posible del mercado mediante presencia en múltiples puntos de venta. Se aplica especialmente en productos de consumo masivo, como alimentos y bebidas.
        .col-md.tarjeta.color-secundario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t4/5.svg')          
          h4.text-center Estrategia selectiva
          p.mb-0 Utiliza un número limitado de intermediarios para mantener mayor control sobre el producto. Se aplica en productos como electrodomésticos, tecnología o artículos especializados.
        .col-md.tarjeta.color-primario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t4/6.svg')          
          h4.text-center.text-white Estrategia exclusiva
          p.mb-0.text-white Restringe la distribución a pocos intermediarios autorizados. Se utiliza en productos de lujo o de alta gama, donde el control de la experiencia y el posicionamiento son fundamentales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de estrategias de distribución
      
      p.mb-5(data-aos='fade-right') Las estrategias de distribución también pueden clasificarse según la forma en que la empresa interactúa con el mercado y con sus canales. Esta clasificación permite reconocer si la empresa vende directamente, utiliza intermediarios, controla varios niveles del canal, establece alianzas o integra diferentes medios de venta.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/7.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Según el tipo de canal")
              .col-12
                p.mb-0 La estrategia puede ser directa o indirecta. En la estrategia directa, la empresa vende al consumidor sin intermediarios. En la estrategia indirecta, utiliza intermediarios para comercializar el producto.
            .row(numero="2" titulo="Según el nivel de integración")
              .col-12
                p.mb-0 La estrategia puede ser vertical u horizontal. En la integración vertical, la empresa ejerce control sobre diferentes niveles del canal. En la integración horizontal, se establecen alianzas entre empresas del mismo nivel.
            .row(numero="3" titulo="Según el enfoque comercial")
              .col-12
                p.mb-0 La estrategia puede ser multicanal u omnicanal. En la estrategia multicanal, se usan varios canales de venta. En la estrategia omnicanal, los canales se integran para ofrecer una experiencia unificada al cliente. 



      p.mb-0(data-aos='fade-right') En el entorno actual, algunas empresas implementan estrategias omnicanal integrando tiendas físicas, comercio electrónico y aplicaciones móviles. Otras combinan estrategias directas e indirectas para ampliar su alcance y fortalecer su presencia en el mercado.











      Separador
      #t_4_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.2 Inventario: concepto, tipos, rotación y métodos.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-3 En la gestión de la distribución comercial, el control de los productos disponibles es un elemento clave para garantizar la continuidad de las operaciones y la satisfacción del cliente. El inventario permite a las empresas responder a la demanda del mercado, evitando faltantes o excesos que puedan afectar la rentabilidad y el nivel de servicio.
            .cajon.color-primario.p-4.mb-0
              p.mb-0 El inventario corresponde al conjunto de bienes o productos que una empresa mantiene almacenados con el propósito de ser utilizados en la producción o comercialización. Su gestión implica el control de entradas, salidas y niveles de existencias, permitiendo asegurar la disponibilidad del producto en el momento requerido.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='') 
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/8.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Un manejo adecuado del inventario contribuye a optimizar costos, evitar pérdidas y mejorar la eficiencia operativa. En el contexto empresarial, algunas organizaciones utilizan sistemas avanzados de gestión de inventarios para garantizar disponibilidad inmediata, mientras que otras mantienen inventarios controlados para responder rápidamente a los cambios del mercado.
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t4/9.png', alt='')
        .col-sm-12.col-lg-7.p-4
            h4.mb-3 Inventario y disponibilidad del producto
            p.mb-0 El inventario permite controlar los productos disponibles para la producción o comercialización. Su gestión ayuda a registrar entradas, salidas y niveles de existencias, con el fin de evitar faltantes, reducir excesos y garantizar que el producto esté disponible cuando el cliente o la operación lo requiera. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de inventario

      .bg-full-width.bg-color-3.mb-5(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/10.png', alt='')
            .col-sm-12.col-lg-8
              p.mb-5 Los inventarios pueden clasificarse según su función dentro de la operación y su relación con el proceso productivo o comercial. Cada tipo de inventario cumple una función específica en la continuidad de las actividades de la empresa. 
              SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/11.svg' alt='')
                  h5.text-center Inventario de materias primas
                  p.mb-0 Corresponde a los productos utilizados en la producción. Se aplica principalmente en la industria manufacturera.
                
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/12.svg' alt='')
                  h5.text-center Inventario en proceso
                  p.mb-0 Incluye bienes que se encuentran en etapa de transformación. Se relaciona con procesos productivos que aún no han finalizado.

                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/13.svg' alt='')
                  h5.text-center Inventario de productos terminados
                  p.mb-0 Comprende productos listos para la venta. Se aplica en actividades comerciales y de retail.

                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/14.svg' alt='')
                  h5.text-center Inventario de seguridad
                  p.mb-0 Es una cantidad adicional de productos destinada a cubrir imprevistos. Ayuda a prevenir desabastecimientos.

                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/15.svg' alt='')
                  h5.text-center Inventario en tránsito
                  p.mb-0 Incluye productos que están siendo transportados. Se relaciona con la distribución logística entre proveedores, bodegas, puntos de venta o clientes. 
                
      p.mb-5(data-aos='fade-right') En la práctica, una empresa puede gestionar inventarios de productos terminados para garantizar abastecimiento continuo, mientras que una organización industrial puede mantener inventarios de materias primas para asegurar la producción.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.bg-color-3.px-4.py-4.mb-cus
            p.mb-0 La rotación de inventario es un indicador que mide la frecuencia con la que los productos se venden y se reponen en un periodo determinado. Este indicador permite evaluar la eficiencia en la gestión del inventario, identificando si los productos se comercializan de manera adecuada o si existen acumulaciones innecesarias.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/16.svg', alt='')
        .col-sm-12.col-lg-5
          img.mb-2.wcus-6.d-none.d-lg-block(src='@/assets/curso/temas/t4/17.svg', alt='')
          p.mb-0 Una alta rotación indica dinamismo en las ventas y reposición frecuente de productos. En cambio, una baja rotación puede generar costos de almacenamiento, riesgo de obsolescencia o acumulación de mercancía. Por esta razón, el análisis de la rotación ayuda a tomar decisiones sobre compras, reposición, promoción y control de existencias.



      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/18.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-2.py-2.br-1.mb-3
                h2.mb-0 ¿Qué indica la rotación de inventario?
              p.mb-0 La rotación de inventario permite reconocer qué tan rápido se venden y reponen los productos. Una alta rotación puede indicar ventas dinámicas y buena salida de mercancía. Una baja rotación puede alertar sobre acumulación de productos, costos de almacenamiento o riesgo de pérdida de valor. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métodos de inventario

      p.mb-5(data-aos='fade-right') Los métodos de gestión de inventarios corresponden a las técnicas utilizadas para controlar las entradas, salidas y valoración de los productos. Su aplicación permite organizar el inventario de acuerdo con las características del producto, la operación comercial y las necesidades de control de la empresa.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t4/19.svg')
            h4.text-center PEPS (FIFO)
            p.mb-0.text-center Los primeros productos en entrar son los primeros en salir. Se aplica principalmente en productos perecederos o con fecha de vencimiento
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t4/20.svg')
            h4.text-center UEPS (LIFO)
            p.mb-0.text-center Los últimos productos en entrar son los primeros en salir. Se utiliza en contextos contables específicos, según las condiciones de manejo del inventario.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t4/21.svg')
            h4.text-center Promedio ponderado
            p.mb-0.text-center Calcula el costo promedio de los productos disponibles. Se aplica en empresas con alta rotación de inventarios.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t4/22.svg')
            h4.text-center ABC
            p.mb-0.text-center Clasifica los productos según su importancia y valor. Permite priorizar el control de productos que tienen mayor impacto en la operación o en la rentabilidad. 
      p.mb-5(data-aos='fade-right') En el contexto real, algunos supermercados aplican el método PEPS para evitar vencimientos, mientras que empresas industriales utilizan el método ABC para priorizar el control de productos de mayor valor.

      img.mb-5(src='@/assets/curso/temas/t4/23.png')
      p.mb-3(data-aos='fade-right') Para fortalecer la comprensión sobre la gestión de inventarios, se recomienda consultar el video “Sistema de control y registro de inventarios”. Este recurso explica la importancia de conocer qué productos posee una empresa, dónde se encuentran almacenados y cuándo se realizan las entradas y salidas de existencias.
      p.mb-5(data-aos='fade-right') Durante la consulta del recurso, identifique cómo el control de inventarios contribuye a reducir costos, aumentar la eficiencia, prevenir pérdidas o fraudes y mejorar la satisfacción del cliente. También reconozca la importancia de mantener un inventario ordenado y vigilado para apoyar la toma de decisiones comerciales y financieras.
      
      
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')       
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/lOP3Z3eStoE?si=N-mr6CB5MEJ9pTZ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Sistema de control y registro de inventarios

      
      
      Separador
      #t_4_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.3 #[i Stock] de inventarios o existencias: concepto, beneficios y ubicación.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/24.png', alt='')      
        .col-sm-12.col-lg-7
            p.mb-1 Dentro de la gestión de la distribución comercial, mantener niveles adecuados de productos disponibles es fundamental para garantizar la continuidad de las operaciones y la atención oportuna de la demanda. 
            p.mb-3 El stock de inventarios permite a las empresas responder de manera eficiente a las necesidades del mercado, evitando tanto el desabastecimiento como el exceso de productos.
            .cajon.color-primario.p-4.mb-0
              p.mb-0 El stock de inventarios, también denominado existencias, corresponde a la cantidad de productos que una empresa mantiene disponibles para satisfacer la demanda de sus clientes. Este concepto está directamente relacionado con la gestión del inventario, ya que implica definir niveles óptimos que permitan garantizar disponibilidad sin generar costos innecesarios.
      p.mb-5(data-aos='fade-right') Un adecuado control del stock permite equilibrar la oferta y la demanda, evitando pérdidas por faltantes o por acumulación de productos. En el contexto empresarial, algunas tiendas manejan niveles de stock ajustados para garantizar alta rotación y reducción de costos, mientras que empresas de comercio electrónico utilizan sistemas automatizados para mantener niveles óptimos según la demanda.

      .row.justify-content-center.mb-5.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t4/25.png', alt='')
        .col-sm-12.col-lg-7.p-4
            h4.mb-3 Stock y existencias disponibles
            p.mb-0 El stock corresponde a la cantidad de productos disponibles para atender la demanda de los clientes. Su control permite definir niveles adecuados de existencias, evitar desabastecimiento, reducir excesos y mantener equilibrio entre la oferta y la demanda. 

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Beneficios del stock de inventarios

      p.mb-5(data-aos='fade-right') El manejo adecuado del stock de inventarios genera beneficios que impactan directamente en la eficiencia operativa y la satisfacción del cliente. Estos beneficios se relacionan con la disponibilidad de productos, la reducción de faltantes, la optimización de operaciones y el control de costos.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-6.p-4.br-1.hcard-5.mb-cus
            .row.justify-content-center.mb-3
              .col-7.d-none.d-lg-block
                  img.m-auto(src='@/assets/curso/temas/t4/26.svg')
            h3.text-center.text-white Disponibilidad de productos
            p.mb-0.text-white Permite atender la demanda de manera oportuna. Su impacto principal es mejorar el servicio al cliente.
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-7.p-4.br-1.hcard-5.mb-cus
            .row.justify-content-center.mb-3
              .col-7.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/27.svg')
            h3.text-center.text-white Reducción de faltantes
            p.mb-0.text-white Evita la pérdida de ventas por desabastecimiento. Su impacto se refleja en el incremento de ingresos.
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-4.p-4.br-1.hcard-5.mb-cus
            .row.justify-content-center.mb-3
              .col-7.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/28.svg')
            h3.text-center Optimización de operaciones
            p.mb-0 Facilita la planificación y el control de inventarios. Su impacto se relaciona con una mayor eficiencia logística.
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-3.p-4.br-1.hcard-5.mb-cus
            .row.justify-content-center.mb-3
              .col-7.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/29.svg')
            h3.text-center Control de costos
            p.mb-0 Permite evitar excesos de inventario. Su impacto se refleja en la mejora de la rentabilidad. 
      p.mb-5(data-aos='fade-right') En la práctica, algunos supermercados mantienen niveles de stock que aseguran disponibilidad constante, mientras que empresas de comercio electrónico ajustan sus existencias de acuerdo con la demanda proyectada.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ubicación del stock de inventarios

      p.mb-5(data-aos='fade-right') La ubicación del stock de inventarios hace referencia al lugar donde se almacenan los productos dentro de la cadena de distribución. Esta decisión influye en los tiempos de entrega, los costos logísticos y la eficiencia operativa.

      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t4/30.svg', alt='')
  
        .tarjeta.color-secundario.p-3(x="28%" y="21%" numero="+")
          .h5.mb-2 Bodega central
          p.mb-0 Almacena grandes volúmenes de productos. Se aplica en centros de distribución o espacios principales de almacenamiento.
        .tarjeta.color-acento-contenido.p-3(x="75%" y="23%" numero="+")
          .h5.mb-2 Punto de venta
          p.mb-0 Mantiene productos disponibles para venta directa. Se aplica en tiendas, supermercados y establecimientos comerciales.
        .tarjeta.color-acento-botones.p-3(x="25%" y="68%" numero="+")
          .h5.mb-2 Centros de distribución
          p.mb-0 Facilitan el almacenamiento y despacho de productos. Se aplican en empresas logísticas y operaciones de distribución.
        .tarjeta.color-primario.p-3(x="78%" y="65%" numero="+")
          .h5.mb-2 Almacenamiento regional
          p.mb-0 Ubica productos de manera estratégica para cubrir zonas específicas. Se aplica en procesos de distribución nacional o regional. 



      p.mb-0(data-aos='fade-right') En el entorno empresarial, algunas organizaciones utilizan centros de distribución estratégicamente ubicados para reducir tiempos de entrega, mientras que otras combinan bodegas centrales y puntos de venta para optimizar su operación.



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
