export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
  categoria: 'producto' | 'kidos' | 'familia';
}

export const listaPreguntasFrecuentes: PreguntaFrecuente[] = [
  {
    categoria: 'producto',
    pregunta: '¿Cuándo estará disponible Kivana?',
    respuesta: 'Kivana está en desarrollo y planeamos lanzarla en los próximos meses. Todavía no hay una fecha confirmada. Publicaremos aquí las plataformas y los enlaces oficiales cuando estén disponibles.'
  },
  {
    categoria: 'producto',
    pregunta: '¿Qué es Kivana?',
    respuesta: 'Una aplicación familiar para organizar eventos, tareas, miembros y recuerdos en un solo lugar, con una experiencia de hábitos y recompensas para niños mediante Kidos.'
  },
  {
    categoria: 'producto',
    pregunta: '¿Qué puedo organizar en Kivana?',
    respuesta: 'Eventos, tareas, participantes, actividades familiares y recuerdos, entre otras funciones disponibles en la aplicación.'
  },
  {
    categoria: 'producto',
    pregunta: '¿En qué dispositivos estará disponible?',
    respuesta: 'La disponibilidad final y los enlaces oficiales se publicarán en este sitio cuando Kivana esté disponible en las tiendas correspondientes.'
  },
  {
    categoria: 'kidos',
    pregunta: '¿Qué es Kidos?',
    respuesta: 'Es la experiencia de Kivana que convierte actividades infantiles en progreso visible, puntos, huevos y recompensas definidas por la familia.'
  },
  {
    categoria: 'kidos',
    pregunta: '¿Quién valida las actividades de los niños?',
    respuesta: 'Los padres acompañan el proceso y validan los avances antes de que continúe el progreso.'
  },
  {
    categoria: 'familia',
    pregunta: '¿Cómo creo mi familia?',
    respuesta: 'Kivana permite crear un grupo familiar e invitar a otros miembros mediante un código.'
  },
  {
    categoria: 'familia',
    pregunta: '¿Puedo decidir quién entra a mi familia?',
    respuesta: 'Sí. Las solicitudes de ingreso pueden ser aprobadas o rechazadas por la familia.'
  },
  {
    categoria: 'familia',
    pregunta: '¿Puedo guardar fotos y videos?',
    respuesta: 'Sí. Recuerdos permite conservar momentos familiares con fotos, videos, comentarios y galería.'
  }
];
