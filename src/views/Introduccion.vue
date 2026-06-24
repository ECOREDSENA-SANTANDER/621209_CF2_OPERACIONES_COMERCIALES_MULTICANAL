<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La distribución comercial permite que un producto llegue al cliente final en el lugar, momento y condiciones adecuadas. No se trata solo de transportar mercancía, sino de tomar decisiones estratégicas sobre canales, intermediarios, formatos comerciales, logística e inventarios. Cuando estas decisiones se gestionan de manera adecuada, la empresa puede mejorar la disponibilidad del producto, ampliar su cobertura en el mercado y ofrecer una experiencia de compra más eficiente. 

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-8
          p.mb-3 Comprender la distribución comercial es importante porque cada decisión influye en la satisfacción del cliente y en la competitividad de la organización. Un producto puede tener buena calidad, precio adecuado y una marca reconocida, pero si no está disponible cuando el cliente lo necesita o no llega por el canal correcto, se pierden oportunidades de venta. Por eso, analizar cómo se distribuyen los productos permite reconocer la relación entre la estrategia comercial, la logística y el comportamiento del mercado. 
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-10
                p.mb-0 El tema se aborda mediante conceptos, clasificaciones, ejemplos empresariales y herramientas aplicadas a la gestión de la distribución. Se revisan aspectos como canales de distribución, intermediarios, acuerdos comerciales, formatos comerciales, logística, logística inversa, inventarios, estrategias de distribución y plan de distribución. Estos elementos permiten comprender cómo una organización puede seleccionar la estrategia más adecuada para llevar sus productos al mercado de forma ordenada, eficiente y coherente con las condiciones comerciales. 
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/intro/2.svg', alt='')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
