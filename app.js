console.log("inicio la aplicacion")

// Mostrar alerta cuando la página carga
window.onload = function() {
    alert("¡Bienvenido a Alejandro Fitness!");
  };
  // Validación del formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const resultado = document.getElementById('resultado');
  
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "" || mensaje === "") {
        resultado.innerHTML = "<p style='color: red;'>Por favor, completa todos los campos.</p>";
    } else if (!emailRegex.test(email)) {
        resultado.innerHTML = "<p style='color: red;'>Por favor, ingresa un correo electrónico válido.</p>";
    } else {
        resultado.innerHTML = "<p style='color: green;'>¡Mensaje enviado correctamente!</p>";
        // Aquí puedes proceder a enviar los datos al servidor si es necesario
    }
});
