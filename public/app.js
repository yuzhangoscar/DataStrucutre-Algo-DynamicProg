// Define the callback function
function myCallbackFunction() {
    let totalScore = 0;
    const scores = questionsApp.getScores();

    for (const eachQuestion in scores) {
        totalScore += scores[eachQuestion].score;
    };

    console.log(totalScore);
    return totalScore;
}

document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.star-container');

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random horizontal position
        star.style.left = Math.random() * 100 + 'vw';

        // Random animation duration
        const duration = Math.random() * 5 + 2; // Between 2 and 7 seconds
        star.style.animationDuration = `${duration}s`;

        starContainer.appendChild(star);

        // Remove star after it falls
        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    // Create a new star every 300 milliseconds
    setInterval(createStar, 300);
});



// Get the button element by its ID
const button = document.getElementById('totalScore');

// Link the button to the callback function using an event listener
button.addEventListener('click', myCallbackFunction);

