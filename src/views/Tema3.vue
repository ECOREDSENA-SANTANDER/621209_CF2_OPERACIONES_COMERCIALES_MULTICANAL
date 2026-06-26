<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Logística aplicada a la distribución
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.png', alt='') 
        .col-sm-12.col-lg-7
            p.mb-3 La logística aplicada a la distribución permite coordinar los procesos necesarios para que los productos circulen de manera eficiente desde el origen hasta el cliente final. Su gestión incluye actividades como transporte, almacenamiento, procesamiento de pedidos, manejo de inventarios, seguimiento de información y entrega del producto en condiciones adecuadas. 
            p.mb-0 En la distribución comercial, la logística cumple un papel estratégico porque influye en los costos, los tiempos de entrega, la disponibilidad del producto y la calidad del servicio. Una logística bien organizada permite responder mejor a las necesidades del mercado, optimizar recursos y fortalecer la experiencia del cliente. 
      
      
      
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.1 Logística: concepto, funciones, actores y beneficios.
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-9
          p.mb-3 La logística se entiende como el conjunto de actividades encargadas de planificar, implementar y controlar el flujo eficiente de productos, información y recursos desde el punto de origen hasta el consumidor final.

          p.mb-4 Este proceso integra funciones como transporte, almacenamiento, gestión de inventarios, procesamiento de pedidos y distribución física. Su propósito es garantizar que el producto llegue en las condiciones adecuadas, en el lugar y momento requeridos, optimizando costos y niveles de servicio.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 En el contexto empresarial, algunas organizaciones han desarrollado sistemas logísticos avanzados mediante centros de distribución automatizados, entregas rápidas y plataformas de seguimiento. Otras empresas gestionan procesos logísticos de cobertura nacional para asegurar que los productos lleguen a diferentes puntos de venta o directamente al cliente final.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')
      
      .row.justify-content-center.mb-5.align-items-center.bg-secundario(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t3/3.png', alt='')
        .col-sm-12.col-lg-7.p-4
            img.wcus-2.mb-5(src='@/assets/curso/temas/t3/4.svg', alt='')
            h4.mb-3 Logística como apoyo a la distribución comercial
            p.mb-0 La logística permite coordinar el movimiento de productos, información y recursos dentro de la cadena de distribución. Su función no se limita al transporte, porque también incluye almacenamiento, inventarios, pedidos, seguimiento y entrega. Cuando estos procesos se gestionan de forma adecuada, la empresa puede reducir costos, mejorar tiempos de respuesta y ofrecer un mejor servicio al cliente. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de la logística
      
      p.mb-5(data-aos='fade-right') La logística cumple diversas funciones que permiten coordinar el proceso de distribución y asegurar la eficiencia operativa. Cada función aporta a que el producto llegue al cliente o al punto de venta en las condiciones requeridas.


      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/5.png', alt='')

      p.mb-3(data-aos='fade-right') Antes de revisar las funciones principales de la logística, se recomienda consultar el video “Logística”. Este recurso explica cómo la logística coordina medios, métodos e infraestructura para que un producto llegue a su destino, desde la obtención de materias primas hasta el embalaje, transporte, recepción, clasificación, almacenamiento y entrega al cliente.

      p.mb-5(data-aos='fade-right') Durante la consulta del recurso, identifique cómo la logística no se limita al traslado de productos, sino que también se relaciona con la conservación, la calidad del producto o servicio, la capacidad de gestión y la satisfacción del cliente.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')       
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/f6HuJKPbZI0?si=rpPGORSk57HbvyFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Logistica


      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Funciones principales de la logística


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
           AcordionA(tipo="a" clase-tarjeta="tarjeta bg-green")
            .row(titulo="Transporte")
              .col-sm-12.col-lg-12
                p.mb-0 Consiste en el traslado de productos desde el origen hasta el destino. Se aplica en entregas a clientes, puntos de venta, bodegas o centros de distribución. 
            .row(titulo="Almacenamiento")
              .col-sm-12.col-lg-12
                p.mb-0 Permite conservar los productos en condiciones adecuadas antes de su venta o distribución. Se aplica en bodegas, centros de distribución y espacios de reserva. 
            .row(titulo="Gestión de inventarios")
              .col-sm-12.col-lg-12
                p.mb-0 Facilita el control de existencias y la reposición de productos. Se aplica mediante sistemas de inventario que ayudan a evitar faltantes o excesos. 
            .row(titulo="Procesamiento de pedidos")
              .col-sm-12.col-lg-12
                p.mb-0 Incluye la recepción, preparación y despacho de pedidos. Se aplica especialmente en comercio electrónico, tiendas, centros de distribución y operaciones de retail. 
            .row(titulo="Manejo de información")
              .col-sm-12.col-lg-12
                p.mb-0 Permite controlar y hacer seguimiento a los datos logísticos. Se apoya en sistemas ERP, plataformas digitales y herramientas de trazabilidad. 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')

      p.mb-5(data-aos='fade-right') En la práctica, una empresa puede gestionar funciones logísticas mediante centros de fulfillment, operadores logísticos, sistemas de inventario y plataformas digitales. Estas funciones permiten coordinar el almacenamiento, la preparación de pedidos, el despacho y la entrega de productos al cliente o al punto de venta.

      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actores de la logística

      p.mb-5(data-aos='fade-right') Los actores de la logística son las organizaciones o participantes que intervienen en el flujo de productos dentro de la cadena de distribución. Cada actor cumple una función específica y su coordinación permite que el proceso logístico funcione de manera ordenada.

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Ruta de los actores logísticos 
      .bg-full-width.bg-fondo-1(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.mb-0
            LineaTiempoE.color-acento-contenido
              .row.justify-content-center.mb-0(titulo="Ruta 1")
                .col-lg-12
                  h4 Proveedor
                  p.mb-0 Suministra materias primas o productos. Puede corresponder a fabricantes, productores o empresas que abastecen a la organización.
              .row.justify-content-center.mb-0(titulo="Ruta 2")
                .col-lg-12
                  h4 Operador logístico
                  p.mb-0 Gestiona procesos de almacenamiento, transporte y entrega. Su participación ayuda a movilizar productos entre bodegas, puntos de venta y clientes.
              .row.justify-content-center.mb-0(titulo="Ruta 3")
                .col-lg-12
                  h4 Distribuidor
                  p.mb-0 Lleva el producto hacia los puntos de venta o zonas de comercialización. Facilita la cobertura del mercado y el abastecimiento de diferentes canales.
              .row.justify-content-center.mb-0(titulo="Ruta 4")
                .col-lg-12
                  h4 Minorista
                  p.mb-0 Comercializa el producto al consumidor final. Puede operar en supermercados, tiendas, plataformas digitales o puntos de venta especializados.
              .row.justify-content-center.mb-0(titulo="Ruta 5")
                .col-lg-12
                  h4 Cliente
                  p.mb-0 Recibe y consume el producto. Su experiencia depende, en gran medida, de la disponibilidad, oportunidad y calidad del proceso logístico.
      p.mb-5(data-aos='fade-right') En el contexto actual, los operadores logísticos globales, distribuidores regionales, minoristas y plataformas de última milla participan en la gestión de entregas. Su articulación permite atender pedidos, movilizar productos y responder a las exigencias de clientes que esperan rapidez, disponibilidad y seguimiento.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios de la logística

      p.mb-5(data-aos='fade-right') La logística aporta beneficios que impactan directamente en la eficiencia empresarial y en la satisfacción del cliente. Estos beneficios se relacionan con la reducción de costos, la mejora del servicio, el control de operaciones y la capacidad de responder al mercado.

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Beneficios de una logística eficiente

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t3/7.svg')
            h4.text-center Reducción de costos
            p.mb-0.text-center La logística ayuda a optimizar recursos, rutas, almacenamiento y procesos operativos. Esto contribuye a mejorar la rentabilidad de la empresa.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t3/8.svg')
            h4.text-center Mejora del servicio
            p.mb-0.text-center Una logística bien gestionada permite realizar entregas oportunas y eficientes. Esto aumenta la satisfacción del cliente y fortalece la confianza en la empresa.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t3/9.svg')
            h4.text-center Mayor competitividad
            p.mb-0.text-center La capacidad de responder rápidamente al mercado permite fortalecer la posición empresarial frente a otros competidores.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-3
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t3/10.svg')
            h4.text-center Control de operaciones
            p.mb-0.text-center El seguimiento de procesos logísticos facilita la toma de decisiones, la identificación de fallas y la mejora continua de la distribución.




      p.mb-0(data-aos='fade-right') Empresas con sistemas logísticos eficientes pueden lograr ventajas competitivas mediante reposición rápida de productos, reducción de tiempos de entrega y mayor control sobre sus operaciones. Por esta razón, la logística se convierte en un factor clave para fortalecer la distribución comercial.
      
      
      Separador
      #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.2 Logística inversa: concepto, funciones, ciclo, actores y beneficios.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.png', alt='') 
        .col-sm-12.col-lg-8
          p.mb-3 En la gestión moderna de la distribución, los procesos no finalizan con la entrega del producto al cliente. La necesidad de gestionar devoluciones, productos defectuosos, excedentes, reciclaje o reutilización ha llevado a las empresas a incorporar flujos de retorno dentro de sus operaciones.
          p.mb-4 La logística inversa se define como el conjunto de actividades orientadas a gestionar el flujo de productos desde el consumidor final hacia la empresa, con el propósito de recuperar valor o realizar su adecuada disposición. Este proceso incluye devoluciones, reciclaje, reutilización, reparación y manejo de residuos.
          .cajon.color-secundario.p-4.mb-0
            p.mb-0 A diferencia de la logística tradicional, que se enfoca en el flujo directo del producto hacia el cliente, la logística inversa gestiona el retorno de productos dentro de la cadena de suministro. Su adecuada implementación permite optimizar recursos, mejorar el servicio al cliente y fortalecer la gestión comercial.
           


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/12.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-2.py-2.br-1.mb-3
                h2.mb-0 ¿Qué es la logística inversa?
              p.mb-0 La logística inversa gestiona el retorno de productos desde el cliente hacia la empresa. Se aplica cuando hay devoluciones, cambios, productos defectuosos, reciclaje, reutilización, reparación o disposición final. Su finalidad es recuperar valor, reducir pérdidas y ofrecer soluciones adecuadas al cliente. 


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de la logística inversa

      p.mb-5(data-aos='fade-right') La logística inversa cumple funciones que permiten gestionar eficientemente los productos retornados y definir si pueden reutilizarse, repararse, revenderse, reciclarse o descartarse de manera adecuada.

      .bg-full-width.bg-fondo-1(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.mb-0
            LineaTiempoE.color-acento-contenido
              .row.justify-content-center.mb-0(titulo="Paso 1")
                .col-lg-12
                  h4 Recolección
                  p.mb-0 Consiste en recibir productos devueltos por el cliente. Puede realizarse mediante puntos de devolución, recolección domiciliaria o centros de atención.
              .row.justify-content-center.mb-0(titulo="Paso 2")
                .col-lg-12
                  h4 Clasificación
                  p.mb-0 Permite evaluar el estado del producto retornado. Con esta revisión se determina si el producto puede reutilizarse, repararse o descartarse.
              .row.justify-content-center.mb-0(titulo="Paso 3")
                .col-lg-12
                  h4 Recuperación
                  p.mb-0 Busca reincorporar el producto al ciclo comercial. Puede darse mediante reventa, reacondicionamiento, reparación o reutilización.
              .row.justify-content-center.mb-0(titulo="Paso 4")
                .col-lg-12
                  h4 Disposición final
                  p.mb-0 Consiste en eliminar o reciclar el producto cuando no puede regresar al ciclo comercial. Esta función ayuda al manejo responsable de residuos.
              
      p.mb-5(data-aos='fade-right') En la práctica, algunas empresas gestionan devoluciones mediante centros logísticos y otras implementan programas de recuperación de productos para su reutilización. Estas acciones permiten mejorar la atención al cliente y aprovechar recursos que podrían perder valor.

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/13.png', alt='', data-aos='fade-right')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ciclo de la logística inversa

      p.mb-5(data-aos='fade-right') El ciclo de la logística inversa describe las etapas que sigue un producto desde su retorno hasta su destino final. Este ciclo permite organizar el proceso y tomar decisiones sobre el tratamiento que recibirá el producto devuelto.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3
          .bg-color-6.p-4.br-1.hcard-2.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-7
                  img(src='@/assets/curso/temas/t3/14.svg')
            h3.text-center.text-white Retorno
            p.mb-0.text-white El cliente devuelve el producto por cambio, garantía, inconformidad, defecto, exceso o necesidad de disposición.
        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.hcard-2.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-7
                  img(src='@/assets/curso/temas/t3/15.svg')
            h3.text-center.text-white Inspección
            p.mb-0.text-white La empresa evalúa el estado del producto para determinar sus condiciones y posibilidades de recuperación.
        .col-sm-12.col-lg-3
          .bg-color-4.p-4.br-1.hcard-2.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-7
                  img(src='@/assets/curso/temas/t3/16.svg')
            h3.text-center Procesamiento
            p.mb-0 Se decide el destino del producto. Puede reutilizarse, repararse, reacondicionarse, revenderse, reciclarse o descartarse.
        .col-sm-12.col-lg-3
          .bg-color-3.p-4.br-1.hcard-2.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-7
                  img(src='@/assets/curso/temas/t3/17.svg')
            h3.text-center Redistribución
            p.mb-0 El producto reingresa al mercado o se gestiona su disposición final. Esta etapa busca optimizar recursos y reducir pérdidas. 
            

      p.mb-5(data-aos='fade-right') En empresas con procesos logísticos organizados, los productos retornados pueden evaluarse rápidamente para reincorporarlos al inventario, enviarlos a reparación, liquidarlos o destinarlos a reciclaje. Esto permite optimizar tiempos, costos y recursos.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actores de la logística inversa

      p.mb-5(data-aos='fade-right') Los actores de la logística inversa son los participantes que intervienen en el proceso de retorno y gestión de productos. Su coordinación es importante para recibir, transportar, clasificar y procesar los productos devueltos.


      .row.mb-4(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/18.svg' alt='')
            .tarjeta.bg-color-8
              .p-4
                h4.text-center.mt-4 Cliente 
                p.mb-0 Devuelve el producto cuando requiere cambio, garantía, reparación, devolución o disposición. Su participación inicia el proceso de retorno.
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/19.svg' alt='')
            .tarjeta.bg-color-8
              .p-4
                h4.text-center.mt-4 Empresa 
                p.mb-0 Gestiona la devolución y toma decisiones sobre el destino del producto. Puede autorizar cambios, reparaciones, reventas o disposición final.
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/20.svg' alt='')
            .tarjeta.bg-color-8
              .p-4
                h4.text-center.mt-4 Operador logístico 
                p.mb-0 Transporta los productos retornados desde el cliente o punto de recolección hasta el lugar definido por la empresa.
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/21.svg' alt='')
            .tarjeta.bg-color-8
              .p-4
                h4.text-center.mt-4 Centro de procesamiento 
                p.mb-0 Evalúa y clasifica los productos devueltos. Allí se determina si pueden reutilizarse, repararse, reciclarse o descartarse.



      p.mb-5(data-aos='fade-right') En el contexto actual, los operadores logísticos, empresas de mensajería, plataformas digitales y centros de procesamiento cumplen funciones importantes en la logística inversa. Su participación permite gestionar devoluciones con mayor rapidez y mejorar la experiencia del cliente.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios de la logística inversa

      p.mb-5(data-aos='fade-right') La implementación de la logística inversa genera beneficios operativos y comerciales. Estos beneficios se relacionan con la recuperación de valor, la reducción de pérdidas, la mejora del servicio y el fortalecimiento de la imagen empresarial.

      .row.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg.mb-cus
          .tarjeta-numerada.color-primario.p-5.hcard-4
            .tarjeta-numerada__numero
              .h2 1
            h5 Recuperación de valor
            p.mb-0 Permite reutilizar, reparar, reacondicionar o revender productos. Esto ayuda a reducir pérdidas económicas.

        .col-sm-12.col-md-6.col-lg.mb-cus
          .tarjeta-numerada.color-secundario.p-5.hcard-4
            .tarjeta-numerada__numero
              .h2 2
            h5 Mejora del servicio
            p.mb-0 Facilita devoluciones, cambios y respuestas ante reclamaciones. Esto fortalece la satisfacción y la confianza del cliente.

        .col-sm-12.col-md-6.col-lg.mb-cus
          .tarjeta-numerada.color-acento-contenido.p-5.hcard-4
            .tarjeta-numerada__numero
              .h2 3
            h5 Optimización de recursos
            p.mb-0 Reduce desperdicios y costos asociados al mal manejo de productos retornados. Esto mejora la eficiencia operativa.

        .col-sm-12.col-md-6.col-lg.mb-cus
          .tarjeta-numerada.color-acento-botones.p-5.hcard-4
            .tarjeta-numerada__numero
              .h2 4
            h5 Imagen empresarial
            p.mb-0 Refuerza la responsabilidad de la empresa frente al cliente y frente al uso adecuado de los recursos. Esto puede mejorar el posicionamiento de la organización. 

      p.mb-5(data-aos='fade-right') Las empresas que gestionan adecuadamente la logística inversa pueden fortalecer la confianza del cliente mediante políticas de devolución claras, procesos de recuperación de productos y acciones orientadas al aprovechamiento de recursos.

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/22.png', alt='', data-aos='fade-right')

      p.mb-3(data-aos='fade-right') Para cerrar el estudio de la logística aplicada a la distribución, se recomienda consultar el podcast “La logística y la distribución hoy”. Este recurso permite relacionar los conceptos de logística, distribución y logística inversa con situaciones reales del entorno comercial, como la entrega de productos, el manejo de inventarios, el procesamiento de pedidos, las devoluciones y la experiencia del cliente.  

      p.mb-5(data-aos='fade-right') Durante la consulta del recurso, identifique cómo la logística permite que el producto avance hacia el cliente, cómo la distribución concreta su llegada al mercado y cómo la logística inversa gestiona el retorno cuando se presentan devoluciones, cambios, recuperación o disposición final de productos.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t3/23.png', data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-acento-contenido.mb-0
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Podcast: la logística y la distribución hoy"
              :audio="require_src('@/assets/actividad/audio/success.mp3')"
          )
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
