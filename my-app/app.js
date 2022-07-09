let button = document.getElementById('btn');

console.log(button);

button.addEventListener('click', () => {
    console.log(`clicked`);
    document.body.style.backgroundColor='rgb('+ generateRandomNumber(255) + ', '+ generateRandomNumber(255) + ', '+ generateRandomNumber(255) + ')';
});

function generateRandomNumber(max) {
    let rand = Math.random() * max;

    rand=Math.floor(rand);

    return rand;
};
