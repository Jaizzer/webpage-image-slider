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
}
