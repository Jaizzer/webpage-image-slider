function makeImageSlider(slider) {
    // Save all slider's images to an array.
    const images = [...slider.querySelectorAll('img')];

    // Access 'previous' and 'next' buttons.
    const previousButton = slider.querySelector('#previous');
    const nextButton = slider.querySelector('#next');

    // Access slider indicator.
    const sliderIndicator = slider.querySelector('.slider-indicator');

    // Array to store all dots inside slider indicator.
    const dots = [];

    let currentDot;

    images.forEach((image) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        dot.addEventListener('click', () => {
            // Remove current-dot status of the previously clicked dot.
            if (document.querySelector('.current-dot') !== null) {
                document
                    .querySelector('.current-dot')
                    .classList.remove('current-dot');
            }

            // Set the clicked dot as the current dot.
            currentDot = dot;
            currentDot.classList.add('current-dot');

            // Hide the current image.
            currentImage.classList.remove('visible');

            // Set the image corresponding to the dot as visible.
            currentImage = image;
            currentImage.classList.add('visible');
        });
        sliderIndicator.appendChild(dot);
        dots.push(dot);
    });

    // Set the first image as the currently selected image by default.
    let currentImage = images[0];
    currentImage.classList.add('visible');

    // Set the first dost as the currently active dot by default.
    currentDot = dots[0];
    currentDot.classList.add('current-dot');

    function next() {
        // Get index of current dot.
        let indexOfCurrentDot = dots.indexOf(currentDot);

        if (indexOfCurrentDot === dots.length - 1) {
            currentDot = dots[0];
        } else {
            currentDot = dots[indexOfCurrentDot + 1];
        }
        currentDot.click();
    }

    function previous() {
        // Get index of current dot.
        let indexOfCurrentDot = dots.indexOf(currentDot);

        if (indexOfCurrentDot === 0) {
            currentDot = dots[dots.length - 1];
        } else {
            currentDot = dots[indexOfCurrentDot - 1];
        }
        currentDot.click();
    }

    previousButton.addEventListener('click', () => {
        previous();
    });

    nextButton.addEventListener('click', () => {
        next();
    });
}
