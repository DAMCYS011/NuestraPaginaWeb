document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const notificationsToggle = document.getElementById("notificationsToggle");
  const textSizeSlider = document.getElementById("textSizeSlider");
  const textSizeValue = document.getElementById("textSizeValue");
  const saveButton = document.getElementById("saveSettings");

  // Cargar estado desde localStorage
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("darkMode");
    darkModeToggle.checked = true;
  }

  if (localStorage.getItem("notifications") === "true") {
    notificationsToggle.checked = true;
  }

  if (localStorage.getItem("textSize")) {
    const size = localStorage.getItem("textSize");
    textSizeSlider.value = size;
    textSizeValue.textContent = `${size}%`;
    document.body.style.fontSize = `${size}%`;
  }

  // Eventos
  darkModeToggle.addEventListener("change", () => {
    const isDark = darkModeToggle.checked;
    document.body.classList.toggle("darkMode", isDark);
    localStorage.setItem("darkMode", isDark);
  });

  notificationsToggle.addEventListener("change", () => {
    localStorage.setItem("notifications", notificationsToggle.checked);
  });

  textSizeSlider.addEventListener("input", () => {
    const size = textSizeSlider.value;
    textSizeValue.textContent = `${size}%`;
    document.body.style.fontSize = `${size}%`;
    localStorage.setItem("textSize", size);
  });

  saveButton.addEventListener("click", () => {
    alert("Configuración guardada.");
  });
});
