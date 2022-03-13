var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        galleryImg.src = this.src;
        gallery.classList.add('show');
    });
})

close.addEventListener('click', function () {
    gallery.classList.remove('show');
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})