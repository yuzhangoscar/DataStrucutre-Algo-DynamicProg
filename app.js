const getHint = function(secret, guess) {
    const secretArray = new Array(10).fill(0);
    const guessArray = new Array(10).fill(0);
    let secretStringArray = String(secret).split('');
    let guessStringArray = String(guess).split('');
    let length = secretStringArray.length;
    let Bulls = 0;
    let Cows = 0;

    for (let index = 0; index < length; index++) {
        if (secretStringArray[index] === guessStringArray[index]) {
            Bulls++;
        }
        else {
            secretArray[Number([secretStringArray[index]])]++;
            guessArray[Number([guessStringArray[index]])]++;
        }
    }
    
    for (let index = 0 ; index < 10; index++) {
        Cows += Math.min(secretArray[index], guessArray[index]);
    }

    return `${Bulls}A${Cows}B`;
};

console.log(getHint(1919, 1991));
