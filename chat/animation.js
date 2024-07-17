const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let stickman = {
    x: 5,
    y: 30,
    step: 5,
    direction: 'right'
};

function drawStickman(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw head
    ctx.beginPath();
    ctx.arc(x, y - 20, 10, 0, Math.PI * 2, true);
    ctx.stroke();

    // Draw body
    ctx.beginPath();
    ctx.moveTo(x, y - 30);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Draw arms
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x - 20, y - 10);
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x + 20, y - 10);
    ctx.stroke();

    // Draw legs
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 15, y + 3);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y + 3);
    ctx.stroke();
}

function updateStickman(direction) {
    stickman.direction = direction;

    if (stickman.direction === 'right') {
        stickman.x += stickman.step;
        if (stickman.x > canvas.width - 5) {
            stickman.direction = 'left';
        }
    } else {
        stickman.x -= stickman.step;
        if (stickman.x < 50) {
            stickman.direction = 'right';
        }
    }
}

function animate(direction) {
    updateStickman(direction);
    drawStickman(stickman.x, stickman.y);
    //requestAnimationFrame(animate);
}

export { animate };
