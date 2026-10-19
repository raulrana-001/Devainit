const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");

    const aberto = navList.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";
});

// Fechar o menu depois de clicar num link
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});