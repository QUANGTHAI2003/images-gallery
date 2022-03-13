var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.netx');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

images.forEach(item, index => {
    item.addEventListener('click', function () {
        currentIndex = index;
        gallery.classList.add('show');
    });
})