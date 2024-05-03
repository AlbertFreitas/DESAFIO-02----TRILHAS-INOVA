const entrar_btn = document.querySelector("#entrar-btn");
const cadastre_se_btn = document.querySelector("#cadastre-se-btn");
const entrar_btn2 = document.querySelector("#entrar-btn2");
const cadastre_se_btn2 = document.querySelector("#cadastre-se-btn2");
const container = document.querySelector(".container");

cadastre_se_btn.addEventListener("click", () => {
    container.classList.add("cadastre-se-mode");
});

entrar_btn.addEventListener("click", () => {
    container.classList.remove("cadastre-se-btn");
});

cadastre_se_btn2.addEventListener("click", () => {
    container.classList.add("cadastre-se-mode2");
});

entrar_btn2.addEventListener("click", () => {
    container.classList.remove("cadastre-se-btn2");
});
