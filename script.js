function makeImageSlider(slider) {
    // Save all slider's images to an array.
    const images = [...slider.querySelectorAll('img')];

    // Access 'previous' and 'next' buttons.
    const previousButton = slider.querySelector('#previous');
    const nextButton = slider.querySelector('#next');

    // Set the first image as the currently selected image by default.
    let currentImage = images[0];
    currentImage.classList.add('visible');

    nextButton.addEventListener('click', () => {
        // Hide the current image.
        currentImage.classList.remove('visible');

        // Get index of current image.
        const currentImageIndex = images.indexOf(currentImage);

        // Set next current image as the first image if the current image is the last image.
        if (currentImageIndex === images.length - 1) {
            currentImage = images[0];
        } else {
            currentImage = images[currentImageIndex + 1];
        }
        currentImage.classList.add('visible');
    });

    // Create a copy of images and reverse the images' ordering.
    const imagesCopy = [...images];
    const imagesReversedOrdering = imagesCopy.reverse();
}
