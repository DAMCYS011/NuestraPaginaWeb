document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    let index = 0;
    function slideCarousel() {
        carouselContainer.style.transition = "none";
        index++;
        if (index >= 1230) {
            index = 0;
        }
        carouselContainer.style.transform = `translateX(-${index * 0.1}%)`;
    }
    setInterval(slideCarousel, 10);
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Aquí podrás leer más contenido sobre este artículo próximamente.");
        });
    });
});
