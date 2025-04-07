document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    let index = 0;
    function slideCarousel() {
        index++;
        if (index >= carouselContainer.children.length) {
            index = 0;
        }
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(slideCarousel, 3000);
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Aquí podrás leer más contenido sobre este artículo próximamente.");
        });
    });
});
