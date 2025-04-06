const updateSwitchLabel = (toggle, label) => {
    label.textContent = toggle.checked ? "On" : "Off";
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const notificationsToggle = document.getElementById("notificationsToggle");
    const darkModeLabel = document.getElementById("darkModeLabel");
    const notificationsLabel = document.getElementById("notificationsLabel");
    const textSizeSlider = document.getElementById("textSizeSlider");
    const textSizeValue = document.getElementById("textSizeValue");
    const saveButton = document.getElementById("saveSettings");
    const mainContent = document.querySelector("main");

    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("darkMode");
      darkModeToggle.checked = true;
    }
  
    if (localStorage.getItem("notifications") === "true") {
      notificationsToggle.checked = true;
    }
  
    if (localStorage.getItem("textSize")) {
      let size = localStorage.getItem("textSize");
      textSizeSlider.value = size;
      textSizeValue.textContent = `${size}%`;
      mainContent.style.fontSize = `${size}%`;
    }

    updateSwitchLabel(darkModeToggle, darkModeLabel);
    updateSwitchLabel(notificationsToggle, notificationsLabel);

    darkModeToggle.addEventListener("change", function () {
      updateSwitchLabel(darkModeToggle, darkModeLabel);
      if (darkModeToggle.checked) {
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode", "false");
      }
    });
  
    notificationsToggle.addEventListener("change", function () {
      updateSwitchLabel(notificationsToggle, notificationsLabel);
      localStorage.setItem("notifications", notificationsToggle.checked);
    });
  
    textSizeSlider.addEventListener("input", function () {
      let size = textSizeSlider.value;
      textSizeValue.textContent = `${size}%`;
      mainContent.style.fontSize = `${size}%`;
      localStorage.setItem("textSize", size);
    });
  
    saveButton.addEventListener("click", function () {
      alert("Configuración guardada.");
    });
  });