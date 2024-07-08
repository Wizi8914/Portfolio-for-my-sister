const lightboxBtn = document.querySelectorAll('.lightbox__button');
const portfolioItems = document.querySelectorAll('.portfolio-container__item');
const lightbox = document.querySelectorAll('.lightbox');

// PRELOAD //

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('#img')) {
        toogleScroll();
    } else {
        toogleLightboxVisibility();
    }
});

// LIGHTBOX SORT //

const portfolioSortItem = document.querySelectorAll('.portfolio-sort--item');
var underline = document.querySelector(".portfolio-sort--underline");

portfolioSortItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        underline.style.transform = `translateX(${index * 4}em)`;

        switch (index) {
            case 0:
                portfolioItems.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 1:
                portfolioItems.forEach(item => {
                    if (item.type == 'image') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                break;
            case 2:
                portfolioItems.forEach(item => {
                    if (item.type == 'video') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                break;
            default:
                break;
        }
    });

});

lightboxBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        toogleScroll();
        toogleLightboxVisibility();
    });
});

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        toogleScroll();
        toogleLightboxVisibility();
    });
});

function toogleScroll() {
    document.body.classList.toggle('no-scroll');
}

function toogleLightboxVisibility() {
    lightbox.forEach(lb => {
        lb.style.display = lb.style.display !== 'none' ? 'none' : '';
    });
}

// LIGHTBOX //

const itemCount = portfolioItems.length;
const rightArrows = document.querySelectorAll('.lightbox-right');
const leftArrows = document.querySelectorAll('.lightbox-left');


moveLightbox = (direction) => {
    let actual = window.location.href.split('#')[1].replace('img', '');
    let next = parseInt(actual) + direction;

    if (next > itemCount) {
        next = 1;
    } else if (next < 1) {
        next = itemCount;
    }

    window.location.href = `#img${next}`;
}

rightArrows.forEach(rightArrow => {
    rightArrow.addEventListener('click', () => {
        moveLightbox(1);
    });
});

leftArrows.forEach(leftArrow => {
    leftArrow.addEventListener('click', () => {
        moveLightbox(-1);
    });
});

document.addEventListener('keydown', function(event) {
    if(event.key == 'ArrowRight') {
        moveLightbox(1);
    }
    else if(event.key == 'ArrowLeft') {
        moveLightbox(-1);
    }
});