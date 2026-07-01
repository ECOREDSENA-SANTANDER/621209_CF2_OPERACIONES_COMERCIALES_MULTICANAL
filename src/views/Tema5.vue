<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Herramientas y plan de distribución
      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/1.png', alt='') 
        .col-sm-12.col-lg-7
            p.mb-3 Las herramientas tecnológicas y el plan de distribución permiten organizar de manera más precisa la forma en que los productos llegan al cliente final. En la gestión comercial, no basta con definir canales o rutas de manera general; también es necesario analizar ubicaciones, tiempos de desplazamiento, zonas de cobertura, recursos logísticos e indicadores de desempeño.
            .cajon.color-acento-contenido.p-4.mb-0
              p.mb-0 El uso de #[i software] para georreferenciación facilita la toma de decisiones basadas en datos espaciales, mientras que el plan de distribución permite estructurar acciones, recursos y procesos para garantizar que el producto esté disponible en el lugar, momento y condiciones adecuadas.
      
      Separador
      #t_5_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 5.1 #[i Software] para georreferenciación: concepto y procedimiento de uso.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-9
            p.mb-3 En la gestión de la distribución comercial, la ubicación geográfica de los clientes, puntos de venta y rutas logísticas se convierte en un factor determinante para optimizar la operación. El uso de herramientas tecnológicas permite analizar el territorio, mejorar la planificación de rutas y tomar decisiones estratégicas basadas en datos espaciales.
            .cajon.color-acento-contenido.p-4.mb-3
              p.mb-0 El #[i software] para georreferenciación es una herramienta tecnológica que permite identificar, registrar y analizar la ubicación geográfica de clientes, puntos de venta, rutas y centros de distribución mediante coordenadas o mapas digitales.
            .row.justify-content-center.mb-0.align-items-end
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/3.svg', alt='')
              .col-sm-12.col-lg-9
                  p.mb-3 Este tipo de herramienta facilita la visualización espacial de la información, permite optimizar procesos logísticos, mejorar la cobertura del mercado y reducir costos asociados al transporte.
                  p.mb-3 Además, puede integrar datos en tiempo real que apoyan la toma de decisiones estratégicas en la distribución.
                  p.mb-0 En el contexto empresarial, herramientas como Google Maps, ArcGIS y QGIS pueden utilizarse para planificar rutas de entrega, ubicar clientes y analizar zonas de cobertura. Asimismo, algunas plataformas de domicilios dependen de sistemas de georreferenciación para gestionar entregas en tiempo real.
            
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/2.png', alt='') 




      .row.justify-content-center.mb-5.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t4/9.png', alt='')
        .col-sm-12.col-lg-7.p-4
            h4.mb-3 Georreferenciación para mejorar la distribución
            p.mb-0 El #[i software] para georreferenciación permite ubicar clientes, puntos de venta, rutas y centros de distribución en mapas digitales. Su uso ayuda a planificar recorridos, analizar zonas de cobertura, reducir tiempos de desplazamiento y tomar decisiones logísticas con base en información geográfica. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento de uso del #[i software] de georreferenciación
      p.mb-5(data-aos='fade-right') El uso del #[i software] de georreferenciación implica una serie de pasos que permiten aprovechar sus funcionalidades dentro de la gestión logística y comercial. Este procedimiento inicia con la recolección de datos y finaliza con la toma de decisiones orientada a mejorar rutas, cobertura y eficiencia operativa.


      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Ruta para usar el #[i software] de georreferenciación
      .bg-full-width.bg-fondo-1(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.mb-0
            LineaTiempoE.color-acento-contenido
              .row.justify-content-center.mb-0(titulo="Paso 1")
                .col-lg-12
                  h4 Recolección de datos
                  p.mb-0 Se registran de manera organizada direcciones, coordenadas geográficas y puntos de interés mediante bases de datos o sistemas de información. Esta etapa permite crear bases de datos de clientes, proveedores y puntos de entrega.
              .row.justify-content-center.mb-0(titulo="Paso 2")
                .col-lg-12
                  h4 Geocodificación
                  p.mb-0 Se transforman direcciones físicas en coordenadas geográficas, como latitud y longitud. Esto permite ubicar con mayor precisión clientes y puntos de venta en mapas digitales.
              .row.justify-content-center.mb-0(titulo="Paso 3")
                .col-lg-12
                  h4 Visualización
                  p.mb-0 Se representan los datos georreferenciados en mapas digitales. Esta visualización permite identificar zonas de cobertura, concentración de clientes y áreas de oportunidad.
              .row.justify-content-center.mb-0(titulo="Paso 4")
                .col-lg-12
                  h4 Análisis
                  p.mb-0 Se evalúan variables como distancias, tiempos de desplazamiento, rutas óptimas y densidad geográfica. Este análisis permite optimizar rutas de distribución, reducir costos logísticos y mejorar tiempos de entrega.
              .row.justify-content-center.mb-0(titulo="Paso 5")
                .col-lg-12
                  h4 Toma de decisiones
                  p.mb-0 Se definen estrategias logísticas y comerciales con base en la información geográfica obtenida. Esto permite diseñar rutas eficientes, ampliar cobertura y mejorar la eficiencia operativa. 
      p.mb-0(data-aos='fade-right') En la práctica, las empresas de mensajería pueden utilizar #[i software] de georreferenciación para planificar rutas eficientes. De igual manera, las plataformas de comercio electrónico pueden optimizar sus entregas mediante análisis geográficos que reducen tiempos y costos de distribución.


      Separador
      #t_5_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 5.2 Plan de distribución: concepto, estructura, etapas y ejemplo aplicado.
      p.mb-5(data-aos='fade-right') En la gestión comercial, la planificación de la distribución permite organizar de manera estructurada cómo los productos llegarán al cliente final. Este proceso integra decisiones estratégicas y operativas orientadas a optimizar recursos, mejorar la cobertura del mercado y garantizar un servicio eficiente.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/4.png', alt='') 
        .col-sm-12.col-lg-7
            p.mb-3 El plan de distribución es un documento estratégico que define las acciones, recursos y procesos necesarios para llevar los productos desde el productor hasta el consumidor final.
            .cajon.color-primario.p-4.mb-0
              p.mb-0 Este plan integra elementos como selección de canales, rutas de distribución, niveles de inventario, tiempos de entrega y recursos logísticos. Su finalidad es garantizar que el producto esté disponible en el lugar, momento y condiciones adecuadas, optimizando costos y niveles de servicio.
      p.mb-5(data-aos='fade-right') En el contexto empresarial, algunas organizaciones desarrollan planes de distribución para asegurar cobertura en diferentes canales, mientras que otras estructuran su distribución mediante centros logísticos, sistemas tecnológicos e indicadores que permiten evaluar la eficiencia de las entregas.    


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/5.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-2.py-2.br-1.mb-3
                h2.mb-0 ¿Qué organiza un plan de distribución?
              p.mb-0 El plan de distribución organiza las decisiones necesarias para llevar el producto al cliente final. Incluye canales, rutas, inventarios, tiempos de entrega, recursos logísticos e indicadores. Su propósito es mejorar la cobertura del mercado, optimizar costos y garantizar un servicio eficiente. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura del plan de distribución
      p.mb-5(data-aos='fade-right') El plan de distribución se compone de elementos que permiten organizar de manera clara las estrategias y acciones a implementar. Cada elemento cumple una función dentro de la planificación, ejecución y evaluación de la distribución comercial.



      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Elementos del plan de distribución


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
           AcordionA(tipo="a" clase-tarjeta="tarjeta bg-green")
            .row(titulo="Objetivos")
              .col-sm-12.col-lg-12
                p.mb-0 Definen los resultados esperados en la distribución. Pueden orientarse a incrementar cobertura, reducir tiempos de entrega o mejorar el nivel de servicio.    
            .row(titulo="Canales de distribución")
              .col-sm-12.col-lg-12
                p.mb-0  Determinan cómo llegará el producto al cliente. Pueden ser canales directos, indirectos o mixtos, según la estrategia comercial.
            .row(titulo="Estrategia de distribución")
              .col-sm-12.col-lg-12
                p.mb-0  Define el tipo de cobertura del mercado. Puede ser intensiva, selectiva o exclusiva, de acuerdo con el producto y el mercado objetivo.
            .row(titulo="Recursos logísticos")
              .col-sm-12.col-lg-12
                p.mb-0  Incluyen transporte, almacenamiento, personal y herramientas tecnológicas necesarias para ejecutar la distribución.
            .row(titulo="Rutas de distribución")
              .col-sm-12.col-lg-12
                p.mb-0 Establecen los recorridos para la entrega de productos. Su adecuada planificación permite optimizar tiempos y costos.
            .row(titulo="Indicadores")
              .col-sm-12.col-lg-12
                p.mb-0 Permiten medir el desempeño del plan. Pueden incluir tiempo de entrega, nivel de cumplimiento, satisfacción del cliente y costos logísticos. 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/6.png', alt='')
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapas del plan de distribución
      p.mb-5(data-aos='fade-right') El desarrollo del plan de distribución implica una serie de etapas que permiten su diseño, ejecución, seguimiento y mejora. Estas etapas ayudan a organizar el proceso de manera ordenada y facilitan la toma de decisiones.

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Etapas para construir un plan de distribución



      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/12.png', alt='')
        .col-sm-12.col-lg-8
          .tarjeta.bg-color-5.p-5.pb-0
            SlyderA.pb-lg-5.pb-3(tipo="a")
              .row.justify-content-center.my-4.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/7.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Análisis
                    p.mb-0 Se evalúan el mercado, la demanda y las condiciones logísticas. Esta etapa permite identificar necesidades del cliente y condiciones del entorno.
              .row.justify-content-center.my-4.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/8.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Planeación
                    p.mb-0 Se definen estrategias, canales, rutas, recursos e indicadores. Esta etapa permite diseñar el plan de distribución.
              .row.justify-content-center.my-4.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/9.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Implementación
                    p.mb-0 Se ejecutan las acciones definidas. Esta etapa corresponde a la operación logística y a la distribución del producto.
              .row.justify-content-center.my-4.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/11.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Control
                    p.mb-0 Se realiza seguimiento y medición de resultados. Esta etapa permite evaluar indicadores y detectar oportunidades de mejora.
              .row.justify-content-center.my-4.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/12.svg', alt='')
                .col-sm-12.col-lg-6
                    h4 Mejora
                    p.mb-0 Se ajusta el plan según los resultados obtenidos. Esta etapa permite optimizar rutas, recursos, cobertura y procesos logísticos. 
      p.mb-5(data-aos='fade-right') En el contexto actual, las empresas pueden ajustar constantemente sus planes de distribución para responder a la demanda del mercado, reducir tiempos de entrega y mejorar el servicio al cliente mediante el análisis continuo de datos logísticos.

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Ejemplo aplicado de plan de distribución
      p.mb-5(data-aos='fade-right') A continuación, se presenta un ejemplo hipotético de plan de distribución para una empresa ficticia dedicada a la comercialización de manteca de cerdo a domicilio en la ciudad de Bogotá. El nombre Mantecas Bogotá S.A.S. se utiliza únicamente con fines educativos, para facilitar la comprensión de cómo se integran canales, estrategia, recursos, rutas, proceso de distribución, indicadores y mejora continua.

      h4.mb-5(data-aos='fade-right') Plan de distribución de una empresa ficticia: Mantecas Bogotá S.A.S. 



      p.mb-5(data-aos='fade-right') Este ejemplo evidencia cómo la planificación de la distribución integra aspectos estratégicos, logísticos y tecnológicos. La organización de canales, rutas, recursos e indicadores permite mejorar la eficiencia operativa, optimizar recursos y fortalecer la experiencia del cliente en un entorno urbano.


      .bg-fondo-2.p-5.mb-5(data-aos='fade-right')
        .bg-white.br-1.px-3.pt-5.pb-3
          SlyderA.pb-0(tipo="b")
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Datos generales 
                  p.mb-1 Empresa: Mantecas Bogotá S.A.S.
                  p.mb-1 Producto: manteca de cerdo 100 % natural.
                  p.mb-1 Cobertura: Bogotá D. C.
                  p.mb-1 Objetivo: garantizar la entrega eficiente del producto en diferentes zonas de la ciudad, optimizando tiempos de distribución, reduciendo costos logísticos y asegurando la calidad del producto hasta su entrega final.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/13.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Mercado objetivo 
                  p.mb-0 El plan se dirige a hogares en zonas urbanas de estratos 2, 3 y 4, restaurantes pequeños, negocios de comida tradicional y emprendimientos gastronómicos.

              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/14.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Canales de distribución 
                  p.mb-0 Se utilizan tres canales principales. El canal directo digital permite recibir pedidos a través de WhatsApp Business y redes sociales. La plataforma digital permite ampliar cobertura mediante aplicaciones de domicilios. La distribución propia permite realizar entregas con personal de la empresa, mantener control del servicio y fortalecer la fidelización.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/15.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Estrategia de distribución 
                  p.mb-0 Se implementa una distribución selectiva, priorizando zonas con mayor demanda y accesibilidad logística, como Kennedy, Suba, Bosa y Engativá. Esta estrategia permite optimizar recursos, reducir costos operativos y garantizar una cobertura eficiente del mercado.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/16.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Recursos logísticos 
                  p.mb-0 El plan contempla dos motocicletas para entregas ágiles en zona urbana, dos domiciliarios, una persona responsable de la logística, un espacio con condiciones adecuadas para la conservación del producto y el uso de herramientas como GPS, Google Maps y WhatsApp Business.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/17.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Rutas de distribución 
                  p.mb-3 Las rutas se organizan mediante zonificación geográfica, agrupando pedidos por sectores para optimizar tiempos de entrega y reducir costos de desplazamiento. Para planificar las rutas se utilizan herramientas de georreferenciación y sistemas GPS.
                  p.mb-0 Las entregas se programan evitando las horas pico de Bogotá, especialmente entre 6:00 a. m. y 9:00 a. m., y entre 5:00 p. m. y 8:00 p. m. Para mejorar la operación, se establecen dos franjas: jornada mañana, de 9:00 a. m. a 12:00 p. m., y jornada tarde, de 2:00 p. m. a 5:00 p. m.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/18.png', alt='')
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-6
                  h4 Indicadores y mejora continua 
                  p.mb-3 El desempeño del plan puede medirse con indicadores como tiempo de entrega menor a dos horas, 95 % de entregas efectivas, 90 % de satisfacción positiva del cliente y reducción progresiva de costos logísticos mediante optimización de rutas.
                  p.mb-0 La mejora continua se realiza mediante el análisis periódico de indicadores, lo que permite ajustar rutas, ampliar zonas de cobertura y optimizar los procesos logísticos de acuerdo con el comportamiento de la demanda y las condiciones del entorno.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/19.png', alt='')




      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Proceso de distribución aplicado
      .bg-full-width.bg-fondo-1(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.mb-0
            LineaTiempoE.color-acento-contenido
              .row.justify-content-center.mb-0(titulo="Paso 1")
                .col-lg-12
                  h4 Recepción del pedido
                  p.mb-0  Se recibe la solicitud del cliente por WhatsApp o redes sociales para centralizar la información y asegurar el registro correcto del pedido.
              .row.justify-content-center.mb-0(titulo="Paso 2")
                .col-lg-12
                  h4 Confirmación del pedido y dirección
                  p.mb-0 Se valida la información del cliente, la dirección y el producto solicitado. Esta acción ayuda a prevenir errores, reprocesos o devoluciones.
              .row.justify-content-center.mb-0(titulo="Paso 3")
                .col-lg-12
                  h4 Preparación del producto
                  p.mb-0 Se alista el pedido bajo condiciones adecuadas de manipulación, asegurando la calidad e inocuidad antes del despacho.
              .row.justify-content-center.mb-0(titulo="Paso 4")
                .col-lg-12
                  h4 Asignación de ruta mediante georreferenciación
                  p.mb-0  Se define la ruta óptima utilizando herramientas GPS. Esto permite reducir tiempos de entrega, evitar congestión vehicular y optimizar recursos logísticos.
              .row.justify-content-center.mb-0(titulo="Paso 5")
                .col-lg-12
                  h4 Despacho y entrega al cliente
                  p.mb-0 Se realiza el transporte del producto, cuidando el cumplimiento de tiempos y condiciones. Esta etapa impacta directamente en la satisfacción del cliente.
              .row.justify-content-center.mb-0(titulo="Paso 6")
                .col-lg-12
                  h4 Confirmación de entrega
                  p.mb-0 Se verifica la recepción del producto por parte del cliente para cerrar el proceso, controlar el servicio y facilitar acciones de mejora.

      img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t5/20.png', alt='')
      p.mb-3(data-aos='fade-right') Para complementar el ejemplo aplicado del plan de distribución, se recomienda consultar el podcast Planeando la distribución: del canal a la entrega. Este recurso permite relacionar la selección de canales, la organización de rutas, el uso de recursos logísticos, la definición de indicadores y la mejora continua dentro de un plan de distribución comercial.
      p.mb-5(data-aos='fade-right') Durante la consulta del recurso, identifique cómo una empresa puede pasar de una idea general de entrega a un plan organizado, con decisiones claras sobre canales, tiempos, zonas de cobertura, recursos e indicadores de seguimiento.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t5/22.svg', data-aos='fade-right')

      .row.justify-content-center.g-0.bg-color-acento-contenido.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Podcast: planeando la distribución: del canal a la entrega"
              :audio="require_src('@/assets/actividad/audio/success.mp3')"
          )

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/21.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 En conclusión, el plan de distribución permite organizar de forma estratégica los canales, recursos, rutas, tiempos e indicadores necesarios para llevar el producto al cliente final. Su construcción facilita la toma de decisiones, mejora la eficiencia logística y contribuye a que la empresa responda de manera más ordenada a las condiciones del mercado.










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
