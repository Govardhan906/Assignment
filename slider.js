// Image array with URLs
const images = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5'
];


const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let currentImageIndex = 0;

// Function to update the image
function updateImage() {
    sliderImage.src = images[currentImageIndex];
}

// Function to handle next button click
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

// Function to handle previous button click
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

// Add event listeners to buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Initialize the first image
updateImage(); 