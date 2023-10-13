class ImageSlide {
    constructor(image, dot) {
        this.image = image;
        this.dot = dot;
    }

    setAsActive() {
        this.image.classList.add('visible');
        this.dot.classList.add('current-dot');
    }

    setAsInactive() {
        this.image.classList.remove('visible');
        this.dot.classList.remove('current-dot');
    }
}

function makeImageSlider(slider) {
    // Save all slider's images to an array.
    const images = [...slider.querySelectorAll('img')];

    // Get the slider indicator.
    const sliderIndicator = slider.querySelector('.slider-indicator');

    // Create dots which corresponds to each image in the slider indicator.
    const dots = [];
    images.forEach((image) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dots.push(dot);
        sliderIndicator.appendChild(dot);
    });

    const imagesSlides = images.map(
        (image, index) => new ImageSlide(image, dots[index])
    );

    // Set the first image slide as active by default.
    imagesSlides[0].setAsActive();

    function next() {
        // Get index of current active dot since it is the same as the index of the current image slide.
        const indexOfCurrentActiveDot = dots.indexOf(
            slider.querySelector('.current-dot')
        );

        // Hide the current active image slide since it will be replace by a new one.
        imagesSlides[indexOfCurrentActiveDot].setAsInactive();

        // Set the new current active image slide.
        if (indexOfCurrentActiveDot === dots.length - 1) {
            imagesSlides[0].setAsActive();
        } else {
            imagesSlides[indexOfCurrentActiveDot + 1].setAsActive();
        }
    }
}
