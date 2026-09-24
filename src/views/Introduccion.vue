<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/intro/2.svg', alt='')
          .col-lg-10
            p La transformación digital y las nuevas expectativas de las personas huéspedes han generado cambios importantes en la gestión de los establecimientos de alojamiento. En este contexto, las herramientas tecnológicas para la formación del talento humano, junto con la planeación, el seguimiento y la mejora continua, fortalecen los procesos operativos y favorecen servicios de calidad, sostenibles y competitivos.
        p Entre las tecnologías utilizadas para la capacitación del personal se encuentran las plataformas de #[em  software ]especializado, los recursos multimedia, los contenidos interactivos y los simuladores de aprendizaje. Estas herramientas apoyan el desarrollo de competencias, la estandarización de procedimientos y la optimización del desempeño de los equipos de trabajo mediante procesos formativos flexibles y orientados a la práctica.
    
    p Asimismo, la gestión del servicio requiere planeación estratégica, coordinación entre las áreas operativas y sistemas de seguimiento basados en indicadores clave de rendimiento. La integración de estos elementos permite identificar oportunidades de mejora e incorporar criterios de sostenibilidad y accesibilidad, promoviendo una administración hotelera orientada a la excelencia y a la satisfacción de las personas huéspedes.

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
