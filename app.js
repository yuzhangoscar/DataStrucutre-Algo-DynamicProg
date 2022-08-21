const fn = function() {
    return this;
}

const ninja = {
    whatisthis: fn
}

console.log(ninja.whatisthis()===ninja); 