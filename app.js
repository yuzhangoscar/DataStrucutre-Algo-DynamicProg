let button = document.getElementById('btn');
let text = document.getElementsByClassName('color');

console.log(text);

button.addEventListener('click', () => {
    let R = generateRandomNumber(255);
    let G = generateRandomNumber(255);
    let B = generateRandomNumber(255);
    
    console.log('clicked');
    document.body.style.backgroundColor='rgb('+ R + ', '+ G + ', '+ B + ')';
    text.textContent = `RGB(${R}, ${G}, ${B})`;
    console.log(`new color code should be ${R}, ${G}, ${B}`);
});

function generateRandomNumber(max) {
    let rand = Math.random() * max;

    rand=Math.floor(rand);

    return rand;
};
