// ===== CARRUSEL AUTOMÁTICO SIN FLECHAS =====
document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('.slide');
    let index = 0;

    // Función para mostrar slide actual
    const showSlide = (i) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[i].classList.add('active');
    };

    // Muestra el primer slide
    showSlide(index);

    // Avanza automáticamente cada 4 segundos
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 4000);

    // Opcional: avanzar al hacer clic en la imagen
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
    });
});

