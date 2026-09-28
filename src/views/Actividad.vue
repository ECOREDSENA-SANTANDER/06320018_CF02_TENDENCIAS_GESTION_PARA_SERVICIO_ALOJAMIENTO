<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planeación e implementación de servicios de alojamiento sostenible',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la apropiación de los conceptos relacionados con las herramientas tecnológicas para la capacitación del talento humano, la planeación e implementación de planes de servicio, la coordinación operativa, el seguimiento mediante indicadores de desempeño y la integración de criterios de sostenibilidad y accesibilidad en los establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de las herramientas tecnológicas utilizadas en la capacitación del talento humano en establecimientos de alojamiento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir completamente las funciones desarrolladas por el personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el desarrollo de competencias, la actualización de conocimientos y la estandarización de los procedimientos operativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar únicamente el número de plataformas utilizadas por la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar exclusivamente la información administrativa del establecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica de los recursos multimedia aplicados a la formación del personal hotelero?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integran diferentes formatos de información para fortalecer el proceso de aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituyen la planeación estratégica del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se utilizan únicamente durante la inducción del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan la necesidad de realizar procesos de evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la finalidad de implementar simuladores de instrucción en los establecimientos de alojamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar automáticamente planes de servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar los procedimientos operativos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Practicar procedimientos y fortalecer competencias en ambientes controlados antes de su aplicación en la operación real.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gestionar exclusivamente la información administrativa del establecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo del diagnóstico organizacional durante la planeación de un servicio de alojamiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas de promoción turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar los inventarios de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar manuales de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar la situación del establecimiento para identificar fortalezas, debilidades, oportunidades y amenazas que orienten la planeación del servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la finalidad principal de un plan de servicio en un establecimiento de alojamiento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar objetivos, actividades, responsables y recursos para orientar la prestación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilitar la actualización de contenidos, el seguimiento del aprendizaje y la estandarización de procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la supervisión realizada por los responsables de cada área.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la capacitación únicamente a los cargos directivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué beneficio aporta la integración de plataformas tecnológicas en la capacitación del talento humano?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar la actualización de contenidos, el seguimiento del aprendizaje y la estandarización de procedimientos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la supervisión realizada por los responsables de cada área.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la capacitación únicamente a los cargos directivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica del <em>microlearning</em> aplicado a la capacitación del personal hotelero?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organiza el aprendizaje mediante contenidos breves, específicos y orientados al desarrollo de competencias concretas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Requiere que todos los procesos de formación se desarrollen en jornadas extensas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se utiliza exclusivamente para capacitar al personal directivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye los demás procesos de capacitación desarrollados por la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué aspecto debe considerarse durante la elaboración de un plan de servicio hotelero?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el presupuesto disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente las necesidades del área administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente las actividades desarrolladas por recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los objetivos, las actividades, los responsables, los recursos, el cronograma y los indicadores para su seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la finalidad de establecer protocolos de coordinación entre las diferentes áreas de un establecimiento de alojamiento?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar la comunicación, definir responsabilidades y garantizar la continuidad del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la participación del talento humano en la operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centralizar todas las decisiones en una única dependencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el intercambio de información entre departamentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante incorporar criterios de sostenibilidad y accesibilidad en un plan de servicio hotelero?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permiten disminuir el número de procedimientos documentados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque garantizan exclusivamente el cumplimiento de indicadores financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque contribuyen a ofrecer servicios responsables, inclusivos y acordes con las necesidades de las personas huéspedes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque sustituyen los procesos de capacitación del talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad de utilizar indicadores clave de rendimiento (KPI) en un establecimiento de alojamiento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los procedimientos de supervisión establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar el desempeño de los procesos y apoyar la toma de decisiones para la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar únicamente informes financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el número de servicios ofrecidos a las personas huéspedes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué característica debe cumplir un indicador de desempeño para aportar información útil en un plan de servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser aplicado únicamente una vez al año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medirse exclusivamente mediante observación directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser medible, verificable y útil para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizarse únicamente para procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una función de las herramientas tecnológicas durante el seguimiento de un plan de servicio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar la recopilación, organización y análisis de información para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente la supervisión realizada por el personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de aplicar indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la coordinación entre las áreas operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué aspecto permite evaluar el seguimiento de los componentes de sostenibilidad dentro de un plan de servicio hotelero?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de habitaciones disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El consumo responsable de recursos y la aplicación de buenas prácticas ambientales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de reservas registradas durante el mes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo destinado a las reuniones administrativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal de un plan de mejora continua en un establecimiento de alojamiento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar exclusivamente la capacidad instalada del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la planeación estratégica institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar acciones orientadas a fortalecer los procesos y mejorar los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los procedimientos documentados por la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es uno de los principales aportes de la estandarización de procesos en un establecimiento de alojamiento?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar que los procedimientos se desarrollen de manera uniforme y facilitar la evaluación del cumplimiento de los estándares institucionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de capacitar al talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impedir que la atención se adapte a las necesidades particulares de las personas huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar todos los procedimientos en una única área del establecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué aspecto debe priorizar un establecimiento al aplicar criterios de sostenibilidad ambiental en un plan de servicio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integrar prácticas relacionadas con el uso responsable de los recursos y la reducción del impacto ambiental durante la prestación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar exclusivamente el número de habitaciones disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los procedimientos de capacitación por herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el seguimiento únicamente a los resultados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el propósito de incorporar criterios de accesibilidad durante la implementación de un plan de servicio hotelero?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el número de procedimientos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar condiciones de atención incluyentes y adecuadas para personas con diferentes necesidades de acceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir las actividades de coordinación entre departamentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la aplicación de protocolos de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la relación entre la capacitación del talento humano y la implementación de un plan de servicio?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacitación fortalece las competencias necesarias para aplicar correctamente los procedimientos definidos en el plan de servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacitación reemplaza la supervisión realizada por la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacitación elimina la necesidad de utilizar indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacitación se desarrolla únicamente durante el proceso de inducción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de integrar herramientas tecnológicas, sostenibilidad, accesibilidad y procesos de seguimiento durante la implementación de un plan de servicio hotelero?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralizar toda la información en una única dependencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar únicamente la productividad administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer la prestación de servicios organizados, eficientes, sostenibles e inclusivos mediante procesos de mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir los procedimientos técnicos establecidos por el establecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>