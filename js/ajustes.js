document.addEventListener ("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("DarkModeToggle");
    const notificationsToggle = document.getElementById("notificationsToggle");
    const textSizeSlider = document.getElementById("textSizeSlider");
    const textSizeValue = document.getElementById("textSizeValue");
    const saveButton = document.getElementById("saveSettings");

    if (localStorage.getItem ("darkMode") === "true") {
        document.body.classList.add("dark-Mode");
        darkModeToggle.checked = true;
    }
    if (localStorage.getItem("notifications") === "true") {
        notificationsToggle.checked = true;
    }
    if (localStorage.getItem("textSize")) {
        let size = localStorage.getItem("textSize");
        textSizeSlider.value = size;
        textSizeValue.textContent = `${size}%`;
        document.body.style.fontSize = `${size}%`;
    }
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            document.body.classList.add("darkMode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    });
    notificationsToggle.addEventListener("change", function () {
        localStorage.setItem("notifications", notificationsToggle.checked);
    });
    textSizeSlider.addEventListener("input", function () {
        let size = textSizeSlider.value;
        textSizeValue.textContent = `${size}%`;
        document.body.style.fontSize = `${size}%`;
        localStorage.setItem("textSize", size);
    })
    saveButton.addEventListener("click", function () {
        alert("Configuración guardada.");
    });  
});
