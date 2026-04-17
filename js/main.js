const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

window.addEventListener("scroll", function() {
    const indebaText = document.querySelector(".indeba_text");
    const position = indebaText.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
        indebaText.classList.add("show");
    }
});