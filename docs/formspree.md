# Formulario de contacto e integración con Formspree

Este documento describe la arquitectura, flujo de trabajo, implementación de accesibilidad y aspectos de seguridad del formulario de contacto del proyecto Kivana.

---

## Ubicación del formulario

El formulario de contacto se encuentra implementado en la página pública:

* **Ruta de la página**: `src/pages/contacto.astro`
* **Componentes utilizados**: `src/componentes/ui/CampoFormulario.astro` y `src/componentes/comunes/Boton.astro`

---

## Mecanismo de envío

El formulario de contacto utiliza el servicio de recepción de formularios de **Formspree** combinado con un script de procesamiento asíncrono en el cliente.

### Especificaciones técnicas

* **Método HTTP**: `POST`
* **Formato de datos**: `FormData`
* **Procesamiento cliente**: JavaScript asíncrono utilizando `Fetch API` para interceptar el evento `submit` del formulario (`e.preventDefault()`).
* **Cabecera de la petición**: `Accept: application/json`

---

## Flujo de interacción y estados del formulario

El formulario gestiona dinámicamente tres estados visuales e interactivos durante el proceso de envío:

### 1. Estado "Enviando..."
* Al desencadenarse el envío, el script desactiva el comportamiento por defecto de recarga de página.
* El botón de envío cambia su texto temporalmente a `"Enviando..."`.
* Se aplica el atributo `disabled = true` al botón para prevenir peticiones duplicadas mientras la solicitud está en curso.

### 2. Estado de éxito
* Si Formspree responde correctamente (`response.ok` con código 2xx), el estado visual se actualiza.
* Se añade la clase CSS `.formulario__estado--exito` al elemento de estado.
* Se muestra el mensaje: `✓ Mensaje enviado correctamente. Te responderemos pronto.`
* Se ejecuta `form.reset()` para limpiar automáticamente todos los campos del formulario.

### 3. Estado de error
* Si se produce una falla de conexión o la respuesta de Formspree es fallida, se activa el estado de error.
* Se añade la clase CSS `.formulario__estado--error` al elemento de estado.
* Se muestra el mensaje: `× No pudimos enviar tu mensaje. Inténtalo nuevamente.`
* Los datos ingresados por el usuario se conservan en los campos del formulario para facilitar el reintento sin perder la información.

### Temporizador de visibilidad
En cualquiera de los casos (éxito o error), el mensaje de estado permanece visible durante **6 segundos (6000 ms)** y posteriormente se oculta automáticamente.

---

## Accesibilidad

La implementación del formulario cumple con los estándares de accesibilidad web (WCAG):

* **Notificación para lectores de pantalla**: El contenedor del mensaje de estado (`#mensaje-estado`) incluye el atributo `aria-live="polite"`. Esto asegura que los asistentes de voz y lectores de pantalla anuncien el resultado del envío al usuario de forma no disruptiva.
* **Validación de campos**: Los campos cuentan con validación HTML5 (`required`, `type="email"`) y se invoca `form.checkValidity()` antes del envío.

---

## Seguridad y credenciales

### Principios de seguridad en el repositorio

* **Endpoint público**: La URL configurada en el atributo `action` del formulario (`https://formspree.io/f/...`) es un identificador de punto final público diseñado para la recepción de mensajes.
* **Sin claves privadas**: No se almacenan claves de API, tokens de autenticación de Formspree ni credenciales administrativas dentro del repositorio.
* **Gestión administrativa**: La configuración de la dirección de correo receptora, los filtros antispam (reCAPTCHA) y las notificaciones se administran exclusivamente desde el panel de control oficial de Formspree.
