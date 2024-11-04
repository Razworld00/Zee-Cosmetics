// JavaScript function to handle Add to Cart button
function addToCart(itemName, itemPrice) {
    alert(`${itemName} has been added to the cart at R${itemPrice}.`);
}

// Function to open lightbox with the clicked image
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const largeSrc = img.getAttribute("data-large-src");

    lightboxImg.src = largeSrc || img.src;
    lightbox.style.display = "flex";
}

// Function to close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Function to adjust image sizes for responsiveness
function adjustImageSizes() {
    const images = document.querySelectorAll(".responsive-img");
    images.forEach(img => {
        if (window.innerWidth <= 480) {  // Mobile devices
            img.style.width = "100%";
            img.style.height = "auto";
        } else if (window.innerWidth <= 768) {  // Tablets
            img.style.width = "80%";
            img.style.height = "auto";
        } else if (window.innerWidth <= 1024) {  // Small desktops
            img.style.width = "60%";
            img.style.height = "auto";
        } else {  // Larger screens
            img.style.width = "40%";
            img.style.height = "auto";
        }
    });
}

// Event listeners for initial load, resizing, and image clicks
window.onload = () => {
    adjustImageSizes();
    document.querySelectorAll(".responsive-img").forEach(img => {
        img.addEventListener("click", () => openLightbox(img));
    });
};

// Adjust image sizes when the window is resized
window.onresize = adjustImageSizes;
