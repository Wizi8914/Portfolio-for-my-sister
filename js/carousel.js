const carousels = document.querySelectorAll(".carousel");
const carouselButtons = document.querySelectorAll(".carousel-btn");

carousels.forEach((carousel, index) => {
    let carouselActivator = [];
    let carouselSlide = carousel.children[carousel.children.length - 2].children
    let carouselIndicator = carousel.children[carousel.children.length - 1].children;
    let carouselLeft = carousel.children[carousel.children.length - 3].children[0];
    let carouselRight = carousel.children[carousel.children.length - 3].children[1];

    carousel.querySelectorAll(".carousel__activator").forEach(activator => {
        carouselActivator.push(activator);
    });

    for (let i = 0; i < carouselActivator.length; i++) {   
        if (carouselActivator[i].checked) {
            carouselSlide[i].style.display = "block";
            carouselIndicator[i].style.opacity = 1;
        } else {
            carouselSlide[i].style.display = "none";
            carouselIndicator[i].style.opacity = "";
        }   
    }

    // Caousel Indicator Click Event

    for (let indicator = 0; indicator < carouselIndicator.length; indicator++) {
        carouselIndicator[indicator].addEventListener('click', () => {

            console.log(index);
            updateCheck(index, indicator);
            slideCarousel(index, indicator);
        });
    }

    // Carousel Arrow Click Event

    carouselRight.addEventListener('click', () => {
        moveCarousel(index, 'right');
    });

    carouselLeft.addEventListener('click', () => {
        moveCarousel(index, 'left');
    });
});


updateCheck = (carousel, index) => {
    carousels[carousel].querySelectorAll(".carousel__activator").forEach((activator, i) => {
        if (i == index) {
            activator.checked = true;
        } else {
            activator.checked = false;
        }
    });
}


slideCarousel = (carousel, index) => {
    let crlActivator = carousels[carousel].querySelectorAll(".carousel__activator");
    let crlIndicator = carousels[carousel].children[carousels[carousel].children.length - 1].children;
    let crlSlide = carousels[carousel].children[carousels[carousel].children.length - 2].children;

    carouselButtons[carousel].children[0].href = `${crlSlide[index].src.split('/').slice(0, -1).join("/")}/full-size/${crlSlide[index].src.split('/').pop().replace(".jpg", ".png")}`;
    carouselButtons[carousel].children[1].href = `${crlSlide[index].src.split('/').slice(0, -1).join("/")}/full-size/${crlSlide[index].src.split('/').pop().replace(".jpg", ".png")}`;    

    for (let i = 0; i < crlActivator.length; i++) {

        if (crlActivator[i].checked) {
            crlSlide[i].style.display = "block";
        } else {
            crlSlide[i].style.display = "none";
        }   

        for (let i = 0; i < crlIndicator.length; i++) {
            if (i == index) {
                crlIndicator[i].style.opacity = 1;
            } else {
                crlIndicator[i].style.opacity = "";
            }
        }
    }  
}


moveCarousel = (carousel, direction) => {
    let crlActivator = carousels[carousel].querySelectorAll(".carousel__activator");
    for (let i = 0; i < crlActivator.length; i++) {
        if (crlActivator[i].checked) {

            crlActivator[i].checked = false;
            if (direction == 'right') {
                if (i == crlActivator.length - 1) {
                    crlActivator[0].checked = true;
                    slideCarousel(carousel, 0);
                } else {
                    crlActivator[i + 1].checked = true;
                    slideCarousel(carousel, i + 1);
                }
            } else {
                console.log(i);

                if (i == 0) {
                    crlActivator[crlActivator.length - 1].checked = true;
                    slideCarousel(carousel, crlActivator.length - 1);
                } else {
                    crlActivator[i - 1].checked = true;
                    slideCarousel(carousel, i - 1);
                }
            }
            break;
        }
    }
}