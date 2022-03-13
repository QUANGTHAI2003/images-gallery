var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    //display image
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

// display image on click
images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery();
    });
})
// close gallery
close.addEventListener('click', function () {
    gallery.classList.remove('show');
})
// close gallery on click
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})
// next and previous buttons image
document.onkeydown = function (event) {
    window.event;
    if (event.keyCode == '37' && currentIndex > 0) { //LEFT ARROW
        currentIndex--;
        showGallery();
    } else if (event.keyCode == '39' && currentIndex < 7) { //RIGHT ARROW
        currentIndex++;
        showGallery();
    }
}

prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})