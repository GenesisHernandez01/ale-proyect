console.log("inicio la aplicacion")

// Mostrar alerta cuando la página carga
window.onload = function() {
    alert("¡Bienvenido a Alejandro Fitness!");
  };
  // Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const resultado = document.getElementById('resultado');
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "") {
      resultado.innerHTML = "<p style='color: red;'>Por favor, completa todos los campos.</p>";
    } else {
      resultado.innerHTML = "<p style='color: green;'>¡Mensaje enviado correctamente!</p>";
      // Aquí podrías enviar los datos del formulario a un servidor si lo deseas
    }
  });
// Aplicar una animación rápida al hacer clic en los iconos de redes sociales
document.querySelectorAll('.icons-footer').forEach(function(icon) {
    icon.addEventListener('click', function() {
      icon.style.transition = 'transform 0.2s ease';
      icon.style.transform = 'scale(1.5)'; // Aumenta el tamaño temporalmente
  
      // Después de un breve tiempo, volver al tamaño normal
      setTimeout(function() {
        icon.style.transform = 'scale(1)';
      }, 200);
    });
  });
    