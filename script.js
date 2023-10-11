function makeImageSlider(slider) {
    // Save all slider's images to an array.
    const images = [...slider.querySelectorAll('img')];

    // Access 'previous' and 'next' buttons.
    const previousButton = slider.querySelector('#previous');
    const nextButton = slider.querySelector('#next');

    // Set the first image as the currently selected image by default.
    let currentImage = images[0];
    currentImage.classList.add('visible');
}
