function makeImageSlider(slider) {
    // Save all slider's images to an array.
    const images = [...slider.querySelectorAll('img')];

    // Access 'previous' and 'next' buttons.
    const previousButton = slider.querySelector('#previous');
    const nextButton = slider.querySelector('#next');

    // Access slider indicator.
    const sliderIndicator = slider.querySelector('.slider-indicator');

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
            dot.classList.add('current-dot');

            // Hide the current image.
            currentImage.classList.remove('visible');

            // Set the image corresponding to the dot as visible.
            currentImage = image;
            currentImage.classList.add('visible');
        });
        sliderIndicator.appendChild(dot);
    });

    // Access all the dots in the slider indicator.
    const dots = [...document.querySelectorAll('.dot')];

    // Set the first image as the currently selected image by default.
    let currentImage = images[0];
    currentImage.classList.add('visible');
}
