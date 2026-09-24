export default {
  global: {
    Name: 'Planeación e implementación de servicios de alojamiento sostenible',
    Description: 'Este componente desarrolla fundamentos técnicos para planear servicios de alojamiento sostenibles mediante herramientas tecnológicas de capacitación, recursos multimedia, simuladores de instrucción y metodologías de planeación estratégica. Asimismo, aborda la coordinación interdepartamental, el seguimiento con indicadores clave de rendimiento (KPI) y la mejora continua para fortalecer la calidad, la eficiencia operativa y la competitividad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas de capacitación tecnológica para el personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Arquitectura de plataformas de software especializado para la gestión y el entrenamiento hotelero',
            hash: 't_1_1'
          },
          {
            numero: '1.2',
            titulo: 'Aplicación de recursos multimedia y contenidos interactivos en la formación del talento humano',
            hash: 't_1_2'
          },
          {
            numero: '1.3',
            titulo: 'Implementación de simuladores de instrucción y escenarios virtuales de aprendizaje operativo',
            hash: 't_1_3'
          }
        ]
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedimientos técnicos de planeación y coordinación para la mejora continua del servicio de alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías de diagnóstico y planeación estratégica en la prestación de servicios hoteleros',
            hash: 't_2_1'
          },
          {
            numero: '2.2',
            titulo: 'Protocolos de coordinación interdepartamental y estandarización de procesos de calidad',
            hash: 't_2_2'
          },
          {
            numero: '2.3',
            titulo: 'Sistemas de control, seguimiento de indicadores clave de rendimiento (KPI) y planes de mejora continua',
            hash: 't_2_3'
          }
        ]
      }
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accesibilidad',
      significado: 'condición que permite a todas las personas utilizar los servicios, las instalaciones y los entornos de un establecimiento de alojamiento de manera segura, autónoma y en igualdad de oportunidades.',
    },
    {
      termino: 'Capacitación tecnológica',
      significado: 'proceso de formación orientado al desarrollo de competencias mediante el uso de plataformas digitales, software especializado, recursos multimedia y herramientas virtuales de aprendizaje.',
    },
    {
      termino: 'Coordinación interdepartamental',
      significado: 'proceso mediante el cual las diferentes áreas de un establecimiento de alojamiento articulan sus actividades, intercambian información y ejecutan acciones conjuntas para garantizar la continuidad y la calidad del servicio.',
    },
    {
      termino: 'Diagnóstico organizacional',
      significado: 'análisis sistemático de las condiciones internas y externas de un establecimiento de alojamiento, con el propósito de identificar fortalezas, oportunidades de mejora y necesidades para la planeación del servicio.',
    },
    {
      termino: 'Indicador clave de rendimiento (KPI)',
      significado: 'medida cuantificable utilizada para evaluar el desempeño de un proceso, verificar el cumplimiento de los objetivos y apoyar la toma de decisiones orientadas a la mejora continua.',
    },
    {
      termino: 'Mejora continua',
      significado: 'proceso permanente de evaluación y optimización de los procedimientos, servicios y resultados de una organización mediante la implementación de acciones correctivas, preventivas y de innovación.',
    },
    {
      termino: 'Plan de servicio',
      significado: 'instrumento de planeación que organiza objetivos, actividades, responsables, recursos, cronograma e indicadores para orientar la prestación de servicios de alojamiento con criterios de calidad, sostenibilidad y accesibilidad.',
    },
    {
      termino: 'Planeación estratégica',
      significado: 'proceso de definición de objetivos, estrategias y acciones orientadas al fortalecimiento de la gestión organizacional y al cumplimiento de las metas institucionales.',
    },
    {
      termino: 'Plataforma de software especializado',
      significado: 'aplicación informática diseñada para apoyar la gestión operativa, administrativa o formativa de los establecimientos de alojamiento mediante la integración de procesos y el manejo de información.',
    },
    {
      termino: 'Protocolo de coordinación',
      significado: 'documento técnico que establece los procedimientos, las responsabilidades y los mecanismos de comunicación requeridos para la interacción eficiente entre las diferentes áreas de un establecimiento de alojamiento.',
    },
    {
      termino: 'Recurso multimedia',
      significado: 'material digital que integra elementos como texto, imágenes, audio, video, animaciones o contenidos interactivos para apoyar los procesos de capacitación y aprendizaje.',
    },
    {
      termino: 'Simulación operativa',
      significado: 'estrategia de formación que recrea situaciones propias de la operación hotelera con el fin de fortalecer competencias, practicar procedimientos y evaluar el desempeño en ambientes controlados.',
    },
    {
      termino: 'Sostenibilidad',
      significado: 'enfoque de gestión que promueve el equilibrio entre los aspectos ambientales, sociales y económicos durante la prestación de los servicios de alojamiento, procurando el uso responsable de los recursos y la generación de valor para la organización y la comunidad.',
    },
    {
      termino: 'Talento humano',
      significado: 'conjunto de personas que desarrollan funciones dentro del establecimiento de alojamiento y aportan conocimientos, habilidades y competencias para el cumplimiento de los objetivos institucionales.',
    },
    {
      termino: 'Tecnologías de apoyo para la gestión hotelera',
      significado: 'herramientas digitales utilizadas para fortalecer la operación, la capacitación del personal, el seguimiento de indicadores y la implementación de planes de servicio en los establecimientos de alojamiento.',
    },
  ],
  referencias: [
    {
      referencia: 'American Hotel & Lodging Association. (2023). AHLA hospitality industry outlook.',
      link: '',
    },
    {
      referencia: 'American Hotel & Lodging Educational Institute. (2024). Hospitality management education resources.',
      link: '',
    },
    {
      referencia: 'Global Sustainable Tourism Council. (2024). GSTC industry criteria for hotels.',
      link: '',
    },
    {
      referencia: 'Hospitality Financial and Technology Professionals. (2024). Hospitality technology resources.',
      link: '',
    },
    {
      referencia: 'Horton, W. (2023). E-learning by design (3rd ed.). Wiley.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization. (2015). ISO 9001:2015 Quality management systems—Requirements.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization. (2018). ISO 21001:2018 Educational organizations—Management systems for educational organizations—Requirements with guidance for use.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization. (2021). ISO 21902:2021 Tourism and related services—Accessible tourism for all—Requirements and recommendations.',
      link: '',
    },
    {
      referencia: 'Kolb, D. A. (2015). Experiential learning: Experience as the source of learning and development (2nd ed.). Pearson Education.',
      link: '',
    },
    {
      referencia: 'Kotler, P., Bowen, J. T., & Makens, J. C. (2022). Marketing for hospitality and tourism (8th ed.). Pearson.',
      link: '',
    },
    {
      referencia: 'Ley 2068 de 2020. (2020). Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544 de Colombia.',
      link: '',
    },
    {
      referencia: 'Ley 300 de 1996. (1996). Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845 de Colombia.',
      link: '',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2022). Política de turismo sostenible: Unidos por la naturaleza.',
      link: '',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2024). Registro Nacional de Turismo (RNT).',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2023). Tourism and digital transformation.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2024). Global tourism investment guidelines.',
      link: '',
    },
    {
      referencia: 'Oracle Hospitality. (2024). Hospitality solutions.',
      link: '',
    },
    {
      referencia: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2023). Technology in education: A tool on whose terms? Global education monitoring report 2023.',
      link: '',
    },
    {
      referencia: 'Project Management Institute. (2021). A guide to the Project Management Body of Knowledge (PMBOK® Guide) (7th ed.).',
      link: '',
    },
    {
      referencia: 'Robbins, S. P., & Judge, T. A. (2023). Organizational behavior (19th ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
