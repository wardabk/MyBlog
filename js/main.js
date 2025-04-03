document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    let currentIndex = 0;

    function showSlide(index) {
        // Assurez-vous que l'index est dans les limites
        if (index < 0) {
            currentIndex = items.length - 1;
        } else if (index >= items.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Masquer tous les items
        items.forEach((item, i) => {
            item.style.display = i === currentIndex ? "block" : "none";
        });
    }

    // Gestion des boutons
    prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

    // Afficher la première image au chargement
    showSlide(currentIndex);
});

