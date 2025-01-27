document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contactButton");
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");
    const body = document.body;

    
    contactButton.addEventListener("click", () => {
        contactModal.style.display = "flex";
        body.classList.add("modal-active");
    });

    
    closeModal.addEventListener("click", () => {
        contactModal.style.display = "none";
        body.classList.remove("modal-active");
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
            body.classList.remove("modal-active");
        }
    });
});
