<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de la distribución comercial
      
      
      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.svg', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 La distribución comercial es un proceso estratégico que permite conectar la producción con el consumo. Su gestión implica tomar decisiones sobre los canales, la cobertura del mercado, la logística, los intermediarios y la disponibilidad del producto. En entornos multicanal, la distribución no se limita al espacio físico, sino que también integra medios digitales, plataformas comerciales y procesos tecnológicos que facilitan el acceso del cliente al producto.
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                  p.mb-0 Comprender estos fundamentos permite reconocer cómo las organizaciones definen la mejor forma de llevar sus productos al mercado. Una adecuada distribución contribuye a mejorar la competitividad, optimizar los recursos disponibles y fortalecer la experiencia del cliente, al garantizar que el producto esté disponible en el lugar, momento y condiciones requeridas. 
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/2.svg', alt='')
      
      
      
      
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.1 Distribución: concepto, tipos, plan, sistemas y utilidades.
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-sm-12.col-lg-8
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img.wcus-1(src='@/assets/curso/temas/t1/3.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 La distribución se entiende como el conjunto de actividades orientadas a trasladar productos desde el productor hasta el consumidor final, garantizando disponibilidad, accesibilidad y condiciones adecuadas. Este proceso integra funciones logísticas, comerciales y operativas, como transporte, almacenamiento, gestión de inventarios y coordinación de intermediarios. 
            
            .cajon.color-secundario.p-4.mb-3
              p.mb-0 Desde el enfoque de mercadeo, la distribución corresponde a la variable “plaza” dentro del marketing mix, ya que facilita el acceso del cliente al producto en el lugar y momento adecuados. Su gestión debe estar alineada con el segmento de mercado, el tipo de producto y la estrategia comercial de la organización. 
            
            p.mb-0 En la práctica empresarial, algunas organizaciones optimizan la distribución mediante centros logísticos automatizados, entregas rápidas y sistemas de última milla. Otras empresas aplican redes de distribución intensiva para garantizar presencia en tiendas, supermercados, restaurantes o máquinas dispensadoras.
      
      
      
      .row.justify-content-center.mb-5.align-items-center.bg-secundario(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/5.png', alt='')
        .col-sm-12.col-lg-7.p-4
            img.wcus-2.mb-5(src='@/assets/curso/temas/t1/6.svg', alt='')
            h4.mb-3 Distribución comercial como puente entre empresa y cliente 
            p.mb-0 La distribución comercial permite que el producto llegue desde la empresa hasta el cliente final en condiciones adecuadas. Para lograrlo, se coordinan actividades de transporte, almacenamiento, inventario, intermediación y entrega. Su propósito es asegurar que el producto esté disponible donde el cliente lo necesita, en el momento oportuno y mediante el canal más conveniente. 
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de distribución 
      
      p.mb-5(data-aos='fade-right') Los tipos de distribución corresponden a las estrategias que utiliza una empresa para definir el nivel de cobertura del mercado y el número de intermediarios que participarán en la comercialización del producto. Estas decisiones dependen del tipo de producto, el posicionamiento de la marca, el mercado objetivo y el nivel de control que la empresa desea mantener sobre la distribución. 

      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t1/7.png", alt="")
            .crd_hover_txt--body
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4
                img.wcus-3(src="@/assets/curso/temas/t1/10.svg", alt="")
                h5.mb-0.mx-3 Distribución intensiva 
              p.mb-0 Busca la máxima cobertura del mercado mediante presencia en múltiples puntos de venta. Se utiliza principalmente en productos de consumo masivo, como bebidas, alimentos empacados o productos de alta rotación.
        .col-sm-12.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/8.png", alt="")
            .crd_hover_txt--body
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4
                img.wcus-3(src="@/assets/curso/temas/t1/10.svg", alt="")
                h5.mb-0.mx-3  Distribución selectiva 
              p.mb-0 Utiliza un número limitado de intermediarios para mantener mayor control sobre la distribución. Es frecuente en productos de gama media, como electrodomésticos, tecnología o artículos especializados.
        .col-sm-12.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/9.png", alt="")
            .crd_hover_txt--body
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4
                img.wcus-3(src="@/assets/curso/temas/t1/10.svg", alt="")
                h5.mb-0.mx-3 Distribución exclusiva 
              p.mb-0 Restringe la distribución a pocos intermediarios autorizados para proteger el posicionamiento y controlar la experiencia del cliente. Se aplica en productos de lujo o marcas premium, como relojes, vehículos o productos de alta gama.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Plan de distribución 


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/11.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-3 El plan de distribución es un instrumento estratégico que organiza las decisiones relacionadas con la entrega del producto al mercado. Incluye la definición de canales, cobertura geográfica, rutas logísticas, niveles de inventario y tiempos de entrega. Este plan permite coordinar recursos y procesos para lograr eficiencia operativa y cumplir los objetivos comerciales. 
          p.mb-0 Su estructura debe considerar variables como demanda, capacidad logística, costos y características del producto. Por ejemplo, una empresa de alimentos refrigerados requiere rutas especializadas, control de temperatura, frecuencia de abastecimiento y manejo adecuado de inventarios. De igual manera, una empresa de comercio electrónico puede integrar centros de fulfillment, operadores logísticos y entregas de última milla para lograr tiempos competitivos. 


      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Elementos básicos del plan de distribución
      .bg-full-width.bg-fondo-1(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.mb-0
            LineaTiempoE.color-acento-contenido
              .row.justify-content-center.mb-0(titulo="Paso 1")
                .col-lg-12
                  h4 Definir los canales
                  p.mb-0 Se identifican los medios físicos o digitales que permitirán llevar el producto al cliente final.
              .row.justify-content-center.mb-0(titulo="Paso 2")
                .col-lg-12
                  h4 Establecer la cobertura
                  p.mb-0 Se determina el alcance geográfico del producto, de acuerdo con el mercado objetivo y la capacidad de la empresa.
              .row.justify-content-center.mb-0(titulo="Paso 3")
                .col-lg-12
                  h4 Organizar las rutas logísticas
                  p.mb-0 Se planean los recorridos, tiempos y recursos necesarios para transportar el producto.
              .row.justify-content-center.mb-0(titulo="Paso 4")
                .col-lg-12
                  h4 Gestionar inventarios
                  p.mb-0 Se definen niveles de existencias que permitan responder a la demanda sin generar excesos o faltantes.
              .row.justify-content-center.mb-0(titulo="Paso 5")
                .col-lg-12
                  h4 Controlar tiempos de entrega
                  p.mb-0 Se establecen criterios para garantizar entregas oportunas y mejorar la experiencia del cliente.

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Sistemas de distribución

      p.mb-5(data-aos='fade-right') Los sistemas de distribución corresponden a la forma en que las empresas organizan y gestionan sus canales para llevar el producto al consumidor. Estos sistemas pueden variar según el nivel de integración, control y uso de tecnología. 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-5
                  img.mx-auto(src='@/assets/curso/temas/t1/12.svg')
            h4.text-center Sistema vertical  
            p.mb-0 Integra productores, mayoristas y minoristas bajo una misma dirección o coordinación. Este sistema permite mayor control sobre el proceso de distribución y sobre la experiencia del cliente. 
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-5
                  img.mx-auto(src='@/assets/curso/temas/t1/13.svg')
            h4.text-center Sistema horizontal  
            p.mb-0 Establece alianzas entre empresas del mismo nivel para ampliar la cobertura del mercado. Este tipo de sistema puede facilitar el acceso a nuevos clientes, zonas o segmentos comerciales. 
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-5
                  img.mx-auto(src='@/assets/curso/temas/t1/14.svg')
            h4.text-center Sistema multicanal  
            p.mb-0 Utiliza diferentes canales de forma simultánea, tanto físicos como digitales. Puede incluir tiendas físicas, comercio electrónico, aplicaciones móviles o marketplace, de acuerdo con la estrategia comercial de la empresa. 














      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Utilidades de la distribución

      p.mb-5(data-aos='fade-right') La distribución genera valor porque permite satisfacer necesidades del cliente y mejorar la eficiencia comercial. Estas utilidades explican cómo la distribución facilita el acceso, la compra y el uso del producto.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t1/15.svg')
            h4.text-center Utilidad de lugar
            p.mb-0.text-center Permite que el producto esté disponible en el punto de venta adecuado. Su impacto principal es facilitar el acceso del cliente al producto.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t1/16.svg')
            h4.text-center Utilidad de tiempo
            p.mb-0.text-center Garantiza la disponibilidad del producto en el momento requerido. Su impacto se relaciona con la satisfacción del cliente.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t1/17.svg')
            h4.text-center Utilidad de posesión
            p.mb-0.text-center Facilita la adquisición del producto mediante procesos de compra accesibles. Su impacto se refleja en el incremento de las ventas. 
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-7
                  img.mx-auto(src='@/assets/curso/temas/t1/18.svg')
            h4.text-center Utilidad de forma
            p.mb-0.text-center Relaciona la adecuación del producto para su uso o consumo final. Su impacto se asocia con el valor percibido  por el cliente.







      Separador
      #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.2 Canales de distribución: concepto, clasificación, características, estructura y métodos de selección.
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/36.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-2 Los canales de distribución representan la estructura mediante la cual los productos se trasladan desde el productor hasta el consumidor final. Su diseño implica decisiones estratégicas relacionadas con intermediarios, cobertura del mercado, control comercial y eficiencia logística. 
          p.mb-3 En los entornos comerciales actuales, los canales integran medios físicos y digitales, configurando esquemas multicanal y omnicanal que responden a nuevos comportamientos de consumo. Por esta razón, seleccionar un canal no consiste únicamente en escoger un punto de venta, sino en definir cómo se conectan la empresa, el producto, los intermediarios y el cliente. 
          .cajon.color-primario.p-4.mb-3
            p.mb-0 Los canales de distribución permiten transferir propiedad, facilitar el acceso al producto y garantizar su disponibilidad en el mercado. También cumplen funciones de negociación, promoción, almacenamiento y entrega, convirtiéndose en un elemento clave para ejecutar la estrategia comercial. 
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/19.png')})`}"
            )
            .bloque-texto-g__texto.p-4.d-flex.flex-column
              .bg-secundario.px-3.py-2.br-1.mb-3
                h2.mb-0 ¿Qué es un canal de distribución?
              p.mb-0 Un canal de distribución es el conjunto de organizaciones, intermediarios y procesos que participan en el flujo de productos desde el productor hasta el consumidor final. Su función es facilitar que el producto llegue al mercado de forma eficiente, accesible y coherente con las necesidades del cliente. 
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de los canales de distribución 
      
      p.mb-5(data-aos='fade-right') Los canales de distribución se clasifican según el número de intermediarios que intervienen en el proceso de comercialización. Esta clasificación permite identificar si la empresa llegará al cliente de manera directa o mediante uno o varios actores comerciales. 

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Ruta de los canales de distribución

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.color-primario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t1/20.svg')          
          h4.text-center.text-white Canal directo
          p.mb-0.text-white El productor vende directamente al consumidor sin intermediarios. Puede aplicarse en tiendas propias, páginas web o modelos de e-commerce.
        .col-md.tarjeta.color-secundario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t1/21.svg')          
          h4.text-center Canal indirecto corto
          p.mb-0 Interviene un solo intermediario, generalmente un minorista. La ruta se organiza así: fabricante -> tienda -> consumidor.
        .col-md.tarjeta.color-primario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t1/22.svg')          
          h4.text-center.text-white Canal indirecto largo
          p.mb-0.text-white Incluye varios intermediarios, como mayoristas y minoristas. La ruta se organiza así: fabricante -> mayorista minorista -> consumidor.
        
      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0 Características de los canales de distribución 
      p.mb-5 Los canales de distribución presentan características que determinan su funcionamiento y eficiencia dentro del sistema comercial. Estas características influyen en la toma de decisiones estratégicas, especialmente cuando la empresa define cobertura, costos, control y capacidad de adaptación al mercado. 


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-green")
            .row(titulo="Interdependencia")
              .col-sm-12.col-lg-12
                p.mb-0 Los actores del canal dependen entre sí para lograr la comercialización del producto. Productores, intermediarios y puntos de venta deben coordinar sus actividades.
            .row(titulo="Cobertura")
              .col-sm-12.col-lg-12
                p.mb-0 Define el alcance geográfico del producto en el mercado. Puede ser local, regional, nacional o internacional, de acuerdo con la estrategia de la empresa.
            .row(titulo="Nivel de control")
              .col-sm-12.col-lg-12
                p.mb-0 Determina el grado de supervisión que tiene el productor sobre el canal. A mayor control, mayor capacidad para cuidar la experiencia del cliente y el posicionamiento del producto.
            .row(titulo="Costos")
              .col-sm-12.col-lg-12
                p.mb-0 Incluye gastos asociados a transporte, almacenamiento, intermediación y operación comercial. Su análisis permite tomar decisiones sobre rentabilidad.
            .row(titulo="Flexibilidad")
              .col-sm-12.col-lg-12
                p.mb-0 Representa la capacidad del canal para adaptarse a cambios del mercado, nuevas tendencias de consumo o transformaciones tecnológicas.


        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/23.png', alt='')

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0  Estructura de los canales de distribución
      p.mb-5(data-aos='fade-right') La estructura de los canales de distribución hace referencia a la organización y disposición de los diferentes actores que participan en el proceso de comercialización. Esta estructura puede tener varios niveles, según la cantidad de intermediarios que intervienen entre el productor y el consumidor final. 

      .titulo-sexto.color-secundario(data-aos="fade-right")
        h4.mb-0  Niveles de los canales de distribución 
      
      ImagenInfografica.color-acento-botones.mb-4
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/24.svg', alt='')
  
        .tarjeta.color-acento-contenido.p-3(x="40%" y="19%" numero="+")
          .h5.mb-2 Nivel 0: productor 
          p.mb-0 El productor comercializa directamente al consumidor final, sin intermediarios.
        .tarjeta.color-acento-contenido.p-3(x="65%" y="35%" numero="+")
          .h5.mb-2 Nivel 1: minorista
          p.mb-0 El minorista vende el producto al consumidor final. En este nivel, el productor utiliza un intermediario para llegar al mercado.
        .tarjeta.color-acento-contenido.p-3(x="25%" y="48%" numero="+")
          .h5.mb-2 Nivel 2: mayorista y minorista
          p.mb-0 El mayorista distribuye grandes volúmenes y abastece puntos de venta. Luego, el minorista comercializa el producto al consumidor final.
        .tarjeta.color-acento-contenido.p-3(x="78%" y="59%" numero="+")
          .h5.mb-2 Nivel 3: agente, mayorista y minorista
          p.mb-0 Intervienen varios actores, generalmente en mercados complejos o internacionales. Esta estructura permite ampliar cobertura, pero requiere mayor coordinación.
       

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Métodos de selección de canales 
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/25.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 La selección de canales de distribución es un proceso estratégico que define cuáles intermediarios o medios serán utilizados para llevar el producto al mercado. Esta decisión debe considerar factores comerciales, logísticos y de mercado, con el fin de escoger el canal más adecuado para el producto y el cliente.

      p.mb-5(data-aos='fade-right') En este caso, sí conviene conservar una tabla porque permite comparar los criterios de decisión, su descripción y su aplicación. 
      .tabla-a.color-acento-botones.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th Criterio
              th Descripción
              th Aplicación
          tbody
            tr
              td Mercado objetivo
              td Considera el tipo de cliente, ubicación y hábitos de compra.
              td Selección de canales digitales o físicos.
            tr
              td Tipo de producto
              td Analiza características como valor, volumen o perecibilidad.
              td Uso de canales especializados o masivos.
            tr
              td Capacidad logística
              td Revisa los recursos disponibles para la distribución.
              td Definición de rutas y operadores logísticos.
            tr
              td Nivel de control
              td Determina el grado de supervisión deseado por la empresa.
              td Uso de canales directos o exclusivos.
            tr
              td Costos
              td Evalúa los gastos asociados a cada canal.
              td Optimización de la rentabilidad.
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8.d-none.d-lg-block        
          .cajon.color-primario.p-4.mb-3
            p.mb-0 En la práctica, una empresa puede combinar distribuidores autorizados, retail y comercio electrónico para ampliar su cobertura. También puede utilizar canales digitales que conectan negocios con consumidores, especialmente en entornos urbanos donde la rapidez y la disponibilidad influyen en la decisión de compra. 
      
      img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t1/26.png', alt='')(data-aos='fade-right')

      p.mb-3(data-aos='fade-right') Para fortalecer la comprensión sobre los canales de distribución, se recomienda consultar el video “Canales de distribución”, en el cual se explica cómo las empresas utilizan diferentes medios físicos y digitales para acercar los productos al cliente final.
      p.mb-5(data-aos='fade-right') Durante la consulta del recurso, identifique cómo el mercado actual exige productos disponibles, accesibles, de calidad y a costos razonables. También reconozca la importancia de integrar tiendas físicas, tiendas online, canales de comunicación y estrategias multicanal como alternativas complementarias para mejorar la cobertura, la competitividad y la relación con los clientes. 

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')       
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/FWs9xNZcgBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Canales de distribución






      Separador
      #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.3 Intermediarios: concepto, tipos y clases.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/27.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-3 Los intermediarios son actores clave dentro de los canales de distribución porque facilitan el flujo de productos entre productores y consumidores. Su participación permite optimizar procesos comerciales, ampliar la cobertura del mercado y mejorar la eficiencia en la distribución. 
          .cajon.color-secundario.p-4.mb-3
            p.mb-0 Un intermediario puede ser una organización o una persona que actúa como enlace entre el productor y el consumidor final. Participa en actividades de comercialización, distribución y venta de productos. Su función principal es facilitar el acceso al producto, reducir la distancia entre oferta y demanda y mejorar la eficiencia del proceso comercial. 
          p.mb-0 Estos actores no solo cumplen funciones de compra y venta. También aportan valor mediante almacenamiento, transporte, promoción, negociación y servicio al cliente. Gracias a su participación, las empresas pueden concentrarse en la producción o en la estrategia comercial, mientras delegan parte de la distribución a actores especializados. 


      .row.justify-content-center.mb-5.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/28.png', alt='')
        .col-sm-12.col-lg-7.p-4
            img.wcus-2.mb-4(src='@/assets/curso/temas/t1/29.svg', alt='')
            h4.mb-3 Papel de los intermediarios 
            p.mb-0 Los intermediarios conectan al productor con el consumidor final. Su función es facilitar la comercialización, ampliar la cobertura del mercado y aportar valor mediante actividades como almacenamiento, transporte, promoción, negociación y servicio al cliente. 


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de intermediarios 
      p.mb-5 Los intermediarios se clasifican según su función dentro del canal de distribución y el nivel de participación en la comercialización del producto. Cada tipo cumple un papel diferente en el flujo comercial. 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/30.svg', alt='')
        .col-sm-12.col-lg-8
          TabsA.color-secundario
            .tarjeta.bg-color-2.p-4(titulo="Mayorista")
              p.mb-0 Compra grandes volúmenes de productos y los distribuye a minoristas o empresas. Se utiliza principalmente en la distribución de productos de consumo masivo.
            .tarjeta.bg-color-2.p-4(titulo="Minorista")
              p.mb-0 Vende directamente al consumidor final. Puede operar en tiendas, supermercados o comercio electrónico. 
            .tarjeta.bg-color-2.p-4(titulo="Agente o corredor")
              p.mb-0 No adquiere la propiedad del producto. Su función es facilitar la negociación entre las partes, especialmente en sectores inmobiliarios, industriales o especializados. 
            .tarjeta.bg-color-2.p-4(titulo="Distribuidor")
              p.mb-0 Representa a fabricantes y comercializa productos en zonas específicas. Es común en sectores como tecnología, automotriz y farmacéutico. 





      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clases de intermediarios 
      p.mb-5(data-aos='fade-right') Las clases de intermediarios hacen referencia a la forma en que estos participan dentro del canal, según su nivel de independencia, relación contractual y funciones específicas. Esta clasificación ayuda a reconocer si el intermediario opera de manera autónoma, integrada, asociada o digital. 


      .row.cursor-pointer.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/31.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4.bg-color-acento-botones.px-4.py-2.br-1
                img.wcus-4(src="@/assets/curso/temas/t1/35.svg", alt="")
                h5.mb-0.mx-3 Independientes
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Independientes
                p.mb-0  Operan de manera autónoma, compran y venden productos por cuenta propia. Un ejemplo son los comerciantes minoristas tradicionales.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/32.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4.bg-color-acento-botones.px-4.py-2.br-1
                img.wcus-4(src="@/assets/curso/temas/t1/35.svg", alt="")
                h5.mb-0.mx-3 Integrados
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Integrados
                p.mb-0  Forman parte de una estructura empresarial vertical o corporativa. Pueden encontrarse en cadenas de retail como Walmart o Éxito.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/33.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4.bg-color-acento-botones.px-4.py-2.br-1
                img.wcus-4(src="@/assets/curso/temas/t1/35.svg", alt="")
                h5.mb-0.mx-3 Asociados
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Asociados
                p.mb-0  Se agrupan mediante acuerdos o alianzas comerciales. Las franquicias, como Subway o McDonald’s, son ejemplos de esta clase de intermediarios.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/34.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              .d-flex.flex-row.justify-content-start.align-items-center.mb-4.bg-color-acento-botones.px-4.py-2.br-1
                img.wcus-4(src="@/assets/curso/temas/t1/35.svg", alt="")
                h5.mb-0.mx-3 Digitales
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Digitales
                p.mb-0  Operan mediante plataformas tecnológicas que facilitan transacciones. Ejemplos de esta clase son Amazon, Mercado Libre y Rappi.
        




      p.mb-0(data-aos='fade-right') En el contexto actual, los intermediarios digitales han ganado relevancia porque integran funciones comerciales, logísticas y tecnológicas. Por ejemplo, una plataforma puede conectar restaurantes con consumidores, gestionar pedidos y coordinar entregas. De esta manera, la intermediación combina funciones tradicionales con procesos digitales. 











      
        

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
