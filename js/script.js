let loaderOne = document.getElementById("loaderOne");
let contentOne = document.getElementById("contentOne");
let loaderTwo = document.getElementById("loaderTwo");
let contentTwo = document.getElementById("contentTwo");

loaderOne.addEventListener("click", () => {
    contentOne.classList.remove("disabled");
    loaderOne.classList.add("disabled");
})

loaderTwo.addEventListener("click", () => {
    contentTwo.classList.remove("disabled");
    loaderTwo.classList.add("disabled");
})