// 1. Quando a página termina de carregar, esconde a tela suavemente
window.addEventListener("load", function () {
    const telaCarregando = document.querySelector(".tela_carregando");
    
    if (telaCarregando) {
        setTimeout(() => {
            telaCarregando.classList.add("hidden");
        }, 1400); 
    }
});

// 2. Quando o usuário clica em qualquer link, mostra o loading antes de ir
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (evento) {
            const destino = this.getAttribute("href");

            // Valida se é um link interno válido
            if (destino && !destino.startsWith("#") && !this.hasAttribute("target") && !destino.startsWith("javascript")) {
                evento.preventDefault(); 
                
                const telaCarregando = document.querySelector(".tela_carregando");
                if (telaCarregando) {
                    telaCarregando.classList.remove("hidden"); // Mostra a tela
                }

                // Redireciona após 300ms para dar tempo de ver a transição
                setTimeout(() => {
                    window.location.href = destino;
                }, 1400);
            }
        });
    });
});