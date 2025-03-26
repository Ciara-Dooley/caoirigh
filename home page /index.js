let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
    images[currentIndex].style.display = 'block'; // Show next image
}

// Initialize the carousel
images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none'; // Show the first image
});

// Change image every 3 seconds
setInterval(showNextImage, 3000);
