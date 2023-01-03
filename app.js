function pageLoad() {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    const image = document.querySelector('#octopus');
    const openingTheme = document.querySelector('#openingTheme');
    const themeSound = new Audio();

    drawText(context, 'Rogue Octopus', 200, 300);
    drawImage(context, image, 0, 0, 250, 500);
    themeSound.src = 'resources/openingTheme.mp3'
    themeSound.play();
}

function drawImage(context, image, x, y, width, height) {
    context.drawImage(image, x, y, height, width);
}

function drawText(context, text, x, y) {
    context.font='30pt Arial';
    context.strokeStyle = 'blue';
    context.strokeText(text, x, y);
}

function drawArc(context, x, y, r, startAngle, endAngel, anticlockwise=false) {
    context.beginPath();
    context.arc(x, y, r, startAngle, endAngel, anticlockwise);
    context.stroke();
}

function drawRect(context, x, y, width, height) {
    context.strokeRect(x, y, width, height);
}

window.addEventListener('load', () => {
    console.log('page has been loaded.');
    pageLoad();
});
