<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión de la distribución comercial permite comprender cómo los productos llegan al cliente final de manera oportuna, eficiente y acorde con las condiciones del mercado. Para ello, se integran decisiones relacionadas con la distribución, los canales, los intermediarios, los acuerdos comerciales y los formatos comerciales, elementos que orientan la forma en que una empresa organiza su presencia en el mercado y facilita el acceso del cliente al producto.

    p Asimismo, la logística y la logística inversa fortalecen la eficiencia de la distribución, al coordinar actividades como transporte, almacenamiento, manejo de pedidos, devoluciones, recuperación de productos y disposición final. Estos procesos se complementan con la gestión de inventarios, la rotación, los métodos de control, el manejo del stock y el uso de software para georreferenciación, herramientas que apoyan la disponibilidad del producto, la reducción de costos y la toma de decisiones.

    p Finalmente, el plan de distribución articula los elementos estratégicos, logísticos y tecnológicos necesarios para definir canales, rutas, recursos, tiempos e indicadores de desempeño. Su correcta estructuración permite seleccionar estrategias de distribución coherentes con el mercado, optimizar la operación comercial y mejorar la experiencia del cliente en diferentes contextos empresariales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa mental titulado “Gestión de la distribución comercial”. Presenta seis ramas principales del componente: fundamentos de la distribución; canales e intermediarios; relaciones y formatos comerciales; logística y logística inversa; estrategias e inventarios; y herramientas y plan de distribución. Cada rama resume ideas clave como cobertura, canales, intermediarios, acuerdos comerciales, formatos de venta, transporte, almacenamiento, inventarios, stock, software de georreferenciación, rutas, indicadores y etapas del plan de distribución. En la parte inferior se destaca la idea central: una distribución bien planificada permite llevar el producto al cliente final de forma eficiente, oportuna y coherente con las condiciones del mercado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
