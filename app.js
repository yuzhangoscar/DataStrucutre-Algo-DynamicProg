// const HiH1 = document.getElementById('hi');
// const Button = document.getElementById('btn');

function animate(id){
    let count = 0;
    let element = document.getElementById(id);
    const action = setInterval(() => {
        console.log(`current count is: ${count}, element is ${id}`);
        count++; 
        if (count >= 100) {
            clearInterval(action);
        }
        element.style.left = element.style.top = count + "px";
    }, 10);
}

animate('hi');
animate('btn');