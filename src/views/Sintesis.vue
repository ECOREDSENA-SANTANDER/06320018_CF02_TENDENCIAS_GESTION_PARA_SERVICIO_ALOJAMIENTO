<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión de los servicios de alojamiento requiere integrar la capacitación tecnológica del talento humano con procesos de planeación, coordinación, seguimiento y mejora continua. El uso de plataformas de #[em  software ] especializado, recursos multimedia, contenidos interactivos y simuladores fortalece la formación del personal, facilita la estandarización de procedimientos y favorece la aplicación de criterios de sostenibilidad y accesibilidad. A su vez, el diagnóstico organizacional y las metodologías de análisis permiten reconocer las condiciones del establecimiento y orientar el diseño de planes de servicio acordes con las necesidades identificadas. Su implementación demanda protocolos de coordinación interdepartamental, procesos estandarizados y mecanismos que garanticen la articulación entre las diferentes áreas operativas. Finalmente, el seguimiento mediante indicadores clave de rendimiento (#[em KPI]) y herramientas tecnológicas proporciona información para evaluar el desempeño, identificar variaciones y establecer acciones de mejora que contribuyan al fortalecimiento permanente de la calidad del servicio.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre alojamiento sostenible con cuatro ejes: capacitación tecnológica, planeación, coordinación operativa y mejora.")
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
