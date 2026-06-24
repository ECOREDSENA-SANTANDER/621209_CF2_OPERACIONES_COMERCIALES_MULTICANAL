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
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de la distribución comercial, los canales, los intermediarios, los acuerdos comerciales, los formatos de venta, la logística, los inventarios, la georreferenciación y el plan de distribución.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función cumple la distribución comercial dentro de la gestión de mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir la planeación de ventas por decisiones improvisadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conectar la producción con el consumo mediante canales, cobertura y disponibilidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar la participación de intermediarios en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir únicamente el precio final del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál situación representa una estrategia de distribución intensiva?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicar un producto de consumo masivo en muchos puntos de venta para lograr amplia cobertura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Vender un producto solo en una tienda autorizada para mantener exclusividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender los canales digitales para reducir el contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la entrega a un solo sector sin analizar la demanda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica corresponde a un sistema de distribución multicanal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usa un único punto físico y elimina los medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integra solo mayoristas bajo una misma dirección administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utiliza varios canales físicos y digitales para llegar al cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evita la coordinación entre productores, distribuidores y minoristas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué utilidad de la distribución se relaciona con tener el producto disponible cuando el cliente lo necesita?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Utilidad de forma.', esCorrecta: false },
            { id: 'b', texto: 'Utilidad de posesión.', esCorrecta: false },
            { id: 'c', texto: 'Utilidad de lugar.', esCorrecta: false },
            { id: 'd', texto: 'Utilidad de tiempo.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia principal existe entre un canal directo y un canal indirecto?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En el canal directo el productor vende al consumidor sin intermediarios; en el indirecto participan uno o más intermediarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El canal directo solo se usa para productos defectuosos y el indirecto para devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El canal indirecto elimina al consumidor final del proceso de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambos canales significan exactamente lo mismo dentro de la distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Al seleccionar un canal de distribución, ¿qué criterio ayuda a decidir si conviene usar medios físicos o digitales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del empaque del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La preferencia personal del vendedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El mercado objetivo, su ubicación y sus hábitos de compra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación total de costos logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el papel principal de los intermediarios en la distribución comercial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impedir que el producto llegue al consumidor final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el flujo de productos entre productores y consumidores, aportando cobertura y eficiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar la necesidad de controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la relación comercial entre productores y puntos de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Para qué sirven los acuerdos comerciales dentro de los canales de distribución?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para evitar cualquier tipo de coordinación entre las partes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para cambiar el producto sin considerar el mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para eliminar las responsabilidades de distribuidores y proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para establecer condiciones sobre precios, entregas, pagos, territorios y responsabilidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué elemento describe mejor un formato comercial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La forma o tipo de establecimiento o medio mediante el cual se comercializa un producto o servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La cantidad de defectos encontrados en un producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La lista de documentos internos que no se relacionan con la venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proceso exclusivo de devolución después de la compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué función logística se relaciona con conservar productos en condiciones adecuadas antes de su venta o entrega?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Procesamiento de pedidos.', esCorrecta: false },
            { id: 'b', texto: 'Almacenamiento.', esCorrecta: true },
            { id: 'c', texto: 'Promoción comercial.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Negociación de franquicias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué situación corresponde a la logística inversa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enviar por primera vez el producto desde la empresa hasta el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir el precio de venta sin revisar existencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Abrir una nueva tienda física en una zona comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestionar la devolución, recuperación o disposición final de productos retornados por el cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué estrategia de distribución conviene para un producto de alta gama que requiere control de la experiencia de compra?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribución intensiva en todos los puntos de venta posibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribución sin control de intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribución exclusiva con intermediarios autorizados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Distribución aleatoria sin segmentación del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito principal de gestionar inventarios en la distribución comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurar disponibilidad del producto, controlar entradas y salidas, y evitar faltantes o excesos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar el registro de productos para reducir el trabajo administrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los canales de distribución por almacenamiento permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprar mercancía sin considerar la demanda del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué indica una baja rotación de inventario?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que todos los productos se venden inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que puede existir acumulación de mercancía, costos de almacenamiento o riesgo de pérdida de valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que no se requiere controlar existencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el producto no necesita reposición ni seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué método de inventario es más adecuado para productos perecederos o con fecha de vencimiento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'UEPS, porque permite sacar primero los últimos productos recibidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ABC, porque elimina la necesidad de revisar fechas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Promedio ponderado, porque reemplaza el control físico del inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'PEPS, porque permite sacar primero los productos que ingresaron primero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Por qué es importante controlar el <i>stock</i> o las existencias?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite eliminar la distribución física de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque evita que la empresa conozca sus cantidades disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque ayuda a garantizar disponibilidad, reducir faltantes y controlar costos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque reemplaza la necesidad de planear rutas de entrega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cómo apoya la georreferenciación la distribución comercial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite ubicar clientes, rutas y zonas de cobertura para tomar decisiones logísticas basadas en mapas digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye la necesidad de conocer la demanda del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina por completo los costos de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide el seguimiento de pedidos y puntos de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué elemento debe incluir un plan de distribución para evaluar si las entregas se están cumpliendo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un listado de productos sin relación con rutas ni clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre comercial de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de responsables logísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Indicadores como tiempo de entrega, nivel de cumplimiento, satisfacción del cliente y costos logísticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una etapa del plan de distribución orientada a revisar resultados y detectar oportunidades de mejora?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Improvisación.', esCorrecta: false },
            { id: 'b', texto: 'Desabastecimiento.', esCorrecta: false },
            { id: 'c', texto: 'Control.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Exclusividad sin seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En un plan de distribución aplicado, ¿por qué conviene agrupar pedidos por zonas geográficas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque obliga a realizar entregas sin confirmar la dirección del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite optimizar tiempos de entrega, reducir desplazamientos y mejorar el uso de recursos logísticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque elimina la necesidad de indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque impide atender clientes de diferentes sectores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de la distribución comercial, los canales, los intermediarios, los acuerdos comerciales, los formatos de venta, la logística, los inventarios, la georreferenciación y el plan de distribución.',
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
