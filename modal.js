window.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".main-menu-item");
    const clouseModalBtn = document.querySelector(".close_modal");
    const modal = document.querySelector(".overlay");

    openModalBtn.addEventListener('click', () => {
        modal.classList.add("show");
    });
    clouseModalBtn.addEventListener('click', () => {
        modal.classList.remove("show");
    })
});