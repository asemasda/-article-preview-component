const shareContainer = document.querySelector(".share-container");
const shareSection = document.getElementById("share-section");

shareSection.addEventListener("click", () => {
    const isHidden = window.getComputedStyle(shareContainer).display === "none";
    shareSection.classList.toggle("active"); 
    shareContainer.style.display = isHidden ? "flex" : "none";
});


