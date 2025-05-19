// Espera a que el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("clienteForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir envío por defecto

      // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

      // Validaciones simples
    if (!nombre || !correo || !telefono || !direccion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

      // Validar correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Ingresa un correo válido.");
        return;
    }

      // Validar teléfono (solo números y 10 dígitos)
    if (!/^\d{10}$/.test(telefono)) {
        alert("El teléfono debe tener exactamente 10 dígitos numéricos.");
        return;
    }

      // Si todo es válido
    alert("Formulario enviado correctamente.");
      form.reset(); // Limpia el formulario
    });
});
