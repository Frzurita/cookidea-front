/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',

            // Define some custom text
            WELCOME: 'Welcome Amelia',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            SEARCH: 'Search for something...',

        })
        .translations('es', {

            // Define all menu elements
            DASHBOARD: 'Salpicadero',
            GRAPHS: 'Gráficos',
            MAILBOX: 'El correo',
            WIDGETS: 'Widgets',
            METRICS: 'Métrica',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            COMMERCE: 'E-comercio',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',
            //==========NAVIGATION ======================
            EVENTS: 'Eventos',
            ADDEVENT: 'Añadir evento',
            USEREVENTS: 'Eventos de usuario',
            //==========USERS============================
            ADDRESS: 'Dirección',
            EMAIL: 'Email',
            // Define some custom text
            WELCOME: 'Bienvenido Amelia',
            MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
            SEARCH: 'Busca algo ...',
            USERS: 'Usuarios',
            EVENTSVISITED: 'Eventos visitados',
            TICKETSSELLED: 'Entradas vendidas',
            TICKETSBUYED: 'Entradas compradas',
            // ================ HOME =======================
            READMORE: 'Leer más',
            SUBSCRIBEYOU: 'Suscríbete!!',
            SUBSCRIBEEXPLANATION: 'Si te suscribes, podrás ser el primero en enterarte de todo.',
            EMAILADDRESS: 'Dirección de correo',
            THANKSFORSUBSCRIBE: 'Gracias por subscribirte al blog!',
            PASSWORD: 'Contraseña',
        });

    $translateProvider.preferredLanguage('es');

}

angular
    .module('inspinia')
    .config(config);
