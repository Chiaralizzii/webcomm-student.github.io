document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll('.slide');
    const wrapper = document.querySelector('.slider-container .slider-wrapper');

    let index = 0;
    const total = slides.length;

    function showSlide(i) {
        index = (i + total) % total; // ciclico
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => showSlide(index + 1), 3000);

    showSlide(index);
});
