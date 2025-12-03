
// Update Time Code
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES', { hour12: false }) + ':' + Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0');
  document.getElementById('timeCode').innerText = timeString;
}
setInterval(updateTime, 40);

// Step Navigation
function showStep(stepId) {
  // Hide all steps
  document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
  // Remove active class from buttons
  document.querySelectorAll('.step-btn').forEach(el => el.classList.remove('active'));

  // Show selected step
  document.getElementById(stepId).classList.add('active');
  // Highlight button
  // Find the button that calls this function (simple way)
  const buttons = document.querySelectorAll('.step-btn');
  for (let btn of buttons) {
    if (btn.getAttribute('onclick').includes(stepId)) {
      btn.classList.add('active');
      break;
    }
  }
}
