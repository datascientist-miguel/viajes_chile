$(document).ready(function () {
    // Esta función se ejecuta una vez que el documento HTML está completamente cargado y listo.

    $("a").on('click', function (event) {
        // Asigna un evento de clic a todos los enlaces (<a>) en el documento.
        // 'event' es el objeto del evento que contiene información sobre el evento de clic.

        if (this.hash !== "") {
            // Verifica si el enlace tiene un valor de 'hash' (parte del enlace que empieza con '#').
            // Esto es para asegurarse de que solo los enlaces con hash desencadenen la animación de desplazamiento.

            event.preventDefault();
            // Previene el comportamiento predeterminado del enlace, que es el desplazamiento instantáneo a la sección objetivo.

            var hash = this.hash;
            // Almacena el valor del hash del enlace en la variable 'hash'.
            // Por ejemplo, si el enlace es <a href="#contacto">, 'hash' será "#contacto".

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                // Realiza una animación de desplazamiento suave hacia la posición vertical de la sección objetivo.
                // '$(hash).offset().top' obtiene la posición vertical de la sección objetivo con el hash correspondiente.
            }, 800, function () {
                // La duración de la animación es de 800 milisegundos (0.8 segundos).
                // La función de callback se ejecuta una vez que la animación completa.

                window.location.hash = hash;
                // Establece el hash en la URL del navegador después de que la animación de desplazamiento haya terminado.
                // Esto permite que el usuario pueda copiar y pegar la URL con el hash y que funcione correctamente.
            });
        }
    });
});
