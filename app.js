function recursive(number) {
    if (number > 0) {
        console.log(number);
        number--;
        recursive(number);
    }
}

recursive(10);