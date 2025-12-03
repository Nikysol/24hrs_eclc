const fullText = `24 HRS EJE CENTRAL es un proyecto en el que registramos durante 24 horas el cruce peatonal del Eje Central para observar qué sucede a lo largo del día en términos de movilidad.

Decidimos desarrollar una página web dividida en dos secciones. La primera es la sección de "cámaras de seguridad", donde se pueden ver seis videos que muestran cómo funciona la movilidad en el cruce y distintas situaciones que invitan a la reflexión.

La segunda es un "trackline", una línea de tiempo interactiva que permite desplazarse entre horas específicas del registro y, al mismo tiempo, rastrear desde motocicletas hasta peatones.`;

let currentText = '';
let charIndex = 0;
let isTyping = false;

function typeWriter() {
  if (charIndex < fullText.length) {
    currentText += fullText.charAt(charIndex);
    document.getElementById('terminalText').innerHTML = currentText.replace(/\n/g, '<br>') + '<span class="cursor"></span>';
    charIndex++;
    setTimeout(typeWriter, 20); // Velocidad de escritura
  } else {
    isTyping = false;
  }
}

// Auto-start typewriter animation on page load
window.addEventListener('load', function () {
  if (!isTyping && charIndex === 0) {
    isTyping = true;
    typeWriter();
  }
});
