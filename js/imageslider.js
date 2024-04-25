let images = Array.from(document.querySelectorAll('.slider-image'));
let currentImageIndex = 0;

document.querySelector('.left-arrow').addEventListener('click', function() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    images[currentImageIndex].classList.add('active');
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    images[currentImageIndex].classList.add('active');
});
