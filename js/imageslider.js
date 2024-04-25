// let images = Array.from(document.querySelectorAll('.slider-image'));
// let currentImageIndex = 0;

// document.querySelector('.left-arrow').addEventListener('click', function() {
//     console.log('Before clicking left arrow:', currentImageIndex, images[currentImageIndex].src);
//     images[currentImageIndex].classList.remove('active');
//     currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
//     images[currentImageIndex].classList.add('active');
//     console.log('After clicking left arrow:', currentImageIndex, images[currentImageIndex].src);
// });

// document.querySelector('.right-arrow').addEventListener('click', function() {
//     console.log('Before clicking right arrow:', currentImageIndex, images[currentImageIndex].src);
//     images[currentImageIndex].classList.remove('active');
//     currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
//     images[currentImageIndex].classList.add('active');
//     console.log('After clicking right arrow:', currentImageIndex, images[currentImageIndex].src);
// });

// let dots = Array.from(document.querySelectorAll('.dot'));

// document.querySelector('.left-arrow').addEventListener('click', function() {
//     console.log('Before clicking left arrow:', currentImageIndex, dots[currentImageIndex].classList.contains('active'));
//     dots[currentImageIndex].classList.remove('active');
//     currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
//     dots[currentImageIndex].classList.add('active');
//     console.log('After clicking left arrow:', currentImageIndex, dots[currentImageIndex].classList.contains('active'));
// });

// document.querySelector('.right-arrow').addEventListener('click', function() {
//     console.log('Before clicking right arrow:', currentImageIndex, dots[currentImageIndex].classList.contains('active'));
//     dots[currentImageIndex].classList.remove('active');
//     currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
//     dots[currentImageIndex].classList.add('active');
//     console.log('After clicking right arrow:', currentImageIndex, dots[currentImageIndex].classList.contains('active'));
// });


let images = Array.from(document.querySelectorAll('.slider-image'));
let dots = Array.from(document.querySelectorAll('.dot'));
let currentImageIndex = 0;

function updateSlide(index) {
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

document.querySelector('.left-arrow').addEventListener('click', function() {
    let newIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    console.log('Before clicking left arrow:', currentImageIndex, images[currentImageIndex].src, dots[currentImageIndex].classList.contains('active'));
    updateSlide(newIndex);
    console.log('After clicking left arrow:', currentImageIndex, images[currentImageIndex].src, dots[currentImageIndex].classList.contains('active'));
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    let newIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    console.log('Before clicking right arrow:', currentImageIndex, images[currentImageIndex].src, dots[currentImageIndex].classList.contains('active'));
    updateSlide(newIndex);
    console.log('After clicking right arrow:', currentImageIndex, images[currentImageIndex].src, dots[currentImageIndex].classList.contains('active'));
});
