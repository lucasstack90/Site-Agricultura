// Navbar muda ao rolar
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Botão voltar topo
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animação ao aparecer
const elementos = document.querySelectorAll("section, .row, .parag");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }
    });
});

elementos.forEach(el => {
    el.classList.add("animar");
    observer.observe(el);
});

// Formulário
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensagem enviada com sucesso! 🌱");
    this.reset();
});