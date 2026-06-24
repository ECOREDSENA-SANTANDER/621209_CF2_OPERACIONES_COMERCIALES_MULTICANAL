export default {
  global: {
    Name: 'Gestión de la distribución comercial',
    Description:
      'El componente formativo Gestión de la distribución comercial aborda los procesos relacionados con la planificación de la distribución de productos, incluyendo canales, intermediarios, logística y estrategias de comercialización. Analiza la selección de canales, acuerdos comerciales, manejo de inventarios y sistemas logísticos, con el propósito de optimizar la cobertura del mercado y garantizar la disponibilidad eficiente del producto.',
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
        titulo: 'Fundamentos de la distribución comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Distribución: concepto, tipos, plan, sistemas y utilidades.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Canales de distribución: concepto, clasificación, características, estructura y métodos de selección.',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Intermediarios: concepto, tipos y clases.',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relaciones y formatos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Acuerdos comerciales: concepto, tipos y funciones.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formatos comerciales: concepto, tipos y clasificación.',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Logística aplicada a la distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Logística: concepto, funciones, actores y beneficios.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Logística inversa: concepto, funciones, ciclo, actores y beneficios.',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias e inventarios comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estrategias de distribución: concepto, tipos y clasificación.',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Inventario: concepto, tipos, rotación y métodos.',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              '#[i Stock] de inventarios o existencias: concepto, beneficios y ubicación.',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas y plan de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              '#[i Software] para georreferenciación: concepto y procedimiento de uso.',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Plan de distribución: concepto, estructura, etapas y ejemplo aplicado.',
            hash: 't_5_2',
          },
        ],
      },
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
      termino: 'Acuerdos comerciales',
      significado:
        'convenios entre empresas o actores del canal para regular condiciones de venta y distribución.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'proceso de guardar y conservar productos en condiciones adecuadas hasta su distribución.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'red de procesos y actores que intervienen en la producción y distribución de bienes.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'conjunto de intermediarios, medios y procesos que permiten llevar el producto desde el productor hasta el consumidor final.',
    },
    {
      termino: 'Cobertura de mercado',
      significado:
        'nivel de alcance que tiene un producto dentro de un mercado determinado.',
    },
    {
      termino: 'Distribución',
      significado:
        'proceso de traslado de productos desde su origen hasta el cliente final.',
    },
    {
      termino: 'Distribución exclusiva',
      significado:
        'estrategia en la que el producto se comercializa a través de pocos intermediarios autorizados.',
    },
    {
      termino: 'Distribución intensiva',
      significado:
        'estrategia que busca máxima cobertura mediante la presencia del producto en muchos puntos de venta.',
    },
    {
      termino: 'Distribución selectiva',
      significado:
        'estrategia que utiliza un número limitado de intermediarios para comercializar el producto.',
    },
    {
      termino: 'Intermediarios',
      significado:
        'actores que facilitan la comercialización entre el productor y el consumidor.',
    },
    {
      termino: 'Inventario',
      significado:
        'conjunto de productos disponibles para la venta, almacenamiento o distribución.',
    },
    {
      termino: 'Logística',
      significado:
        'gestión del flujo de productos, información y recursos desde el origen hasta el consumidor final.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'proceso de retorno de productos hacia la empresa para devolución, reutilización, recuperación, reciclaje o disposición final.',
    },
    {
      termino: 'Mayorista',
      significado:
        'intermediario que compra grandes volúmenes de productos para venderlos a minoristas, empresas o distribuidores.',
    },
    {
      termino: 'Minorista',
      significado:
        'intermediario que vende productos directamente al consumidor final.',
    },
    {
      termino: 'Plan de distribución',
      significado:
        'documento que organiza las acciones, recursos, canales, rutas e indicadores necesarios para llevar los productos al mercado.',
    },
    {
      termino: 'Punto de entrega',
      significado:
        'lugar donde el producto es recibido por el cliente o intermediario.',
    },
    {
      termino: 'Rotación de inventario',
      significado:
        'frecuencia con la que los productos se venden y se reponen en un periodo determinado.',
    },
    {
      termino: 'Sistemas de distribución',
      significado:
        'modelos que definen cómo se organizan y gestionan los canales de distribución.',
    },
    {
      termino: '<i>Stock</i>',
      significado:
        'cantidad de productos disponibles para atender la demanda del mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2013). Administración de la cadena de suministro: estrategia, planeación y operación (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Christopher, M. (2016). Logística y gestión de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia: 'Esri. (2023). ArcGIS Pro: descripción general del producto.',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Levy, M., & Weitz, B. (2012). Administración de ventas al detal (retail) (8.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Mora García, L. A. (2016). Gestión logística integral. Ecoe Ediciones.',
    },
    {
      referencia:
        'Rushton, A., Croucher, P., & Baker, P. (2017). Manual de logística y gestión de la distribución (6.ª ed.). Kogan Page.',
    },
    {
      referencia:
        'Simchi-Levi, D., Kaminsky, P., & Simchi-Levi, E. (2008). Diseño y gestión de la cadena de suministro. McGraw-Hill.',
    },
    {
      referencia:
        'Soret, I. (2013). Logística comercial y empresarial. ESIC Editorial.',
    },
    {
      referencia:
        'WWF Sustainable Consumption Platform. (2022). Guía de abastecimiento sostenible. WWF SCP.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
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
