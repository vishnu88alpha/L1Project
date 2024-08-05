// script.js
document.getElementById('start-button').addEventListener('click', function() {
    // Play the background music
    document.getElementById('background-music').play();

    // Start the slideshow
    document.querySelector('.slideshow').style.visibility = 'visible';

    // Show the author text
    setTimeout(() => {
        document.querySelector('.author').style.opacity = 1;
    }, 1000); // Delay to show author text

    // Remove the start button
    this.style.display = 'none';

    // Create hearts
    createHearts();
});

function createHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const numberOfHearts = Math.floor(Math.random() * 50) + 10; // Random number of hearts between 10 and 50

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random float duration between 2 and 5 seconds

        heartsContainer.appendChild(heart);
    }
}
