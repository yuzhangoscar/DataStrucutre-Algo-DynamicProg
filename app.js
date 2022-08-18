function utilityFn(input) {
    let count = 0;
    let message = `welcome ${input}`;

    const id = setInterval(()=>{
        console.log(message);
        count++;
        console.log(count);
    },5000);
}

utilityFn(`h`);
utilityFn(`j`);