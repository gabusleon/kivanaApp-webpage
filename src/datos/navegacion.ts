export interface EnlaceNavegacion {
  etiqueta: string;
  ruta: string;
  descripcionNav?: string;
}

export const enlacesNavegacion: EnlaceNavegacion[] = [
  { etiqueta: 'Funcionalidades', ruta: '/funcionalidades', descripcionNav: 'Navegar a la página de Funcionalidades de Kivana' },
  { etiqueta: 'Kidos', ruta: '/kidos', descripcionNav: 'Navegar a la página de Kidos: experiencia y gamificación' },
  { etiqueta: 'Nosotros', ruta: '/nosotros', descripcionNav: 'Navegar a la página de Nosotros: historia y propósito' },
  { etiqueta: 'FAQ', ruta: '/faq', descripcionNav: 'Navegar a la página de Preguntas Frecuentes' },
  { etiqueta: 'Contacto', ruta: '/contacto', descripcionNav: 'Navegar a la página de Contacto de Kivana' }
];

export const enlacesPiePagina = {
  producto: [
    { etiqueta: 'Inicio', ruta: '/', descripcionNav: 'Navegar a la página de Inicio de Kivana' },
    { etiqueta: 'Funciones', ruta: '/funcionalidades', descripcionNav: 'Navegar a la página de Funcionalidades' },
    { etiqueta: 'Kidos', ruta: '/kidos', descripcionNav: 'Navegar a la página de Kidos' }
  ],
  kivana: [
    { etiqueta: 'Nosotros', ruta: '/nosotros', descripcionNav: 'Navegar a la página de Nosotros' },
    { etiqueta: 'FAQ', ruta: '/faq', descripcionNav: 'Navegar a la página de Preguntas Frecuentes' },
    { etiqueta: 'Contacto', ruta: '/contacto', descripcionNav: 'Navegar a la página de Contacto' }
  ],
  legal: [
    { etiqueta: 'Política de privacidad', ruta: '/privacy', descripcionNav: 'Navegar a la Política de privacidad' },
    { etiqueta: 'Términos y condiciones', ruta: '/terms', descripcionNav: 'Navegar a los Términos y condiciones' }/*,
    { etiqueta: 'Eliminación de cuenta', ruta: '/delete-account', descripcionNav: 'Navegar a las instrucciones de Eliminación de cuenta' }*/
  ],
  redes: [
    { etiqueta: 'Facebook', ruta: 'https://www.facebook.com/profile.php?id=61591219323181', descripcionNav: 'Ir a la página oficial de Facebook de Kivana' },
    { etiqueta: 'Instagram', ruta: 'https://instagram.com/kivana_app', descripcionNav: 'Ir al perfil oficial de Instagram de Kivana' }
  ]
};
