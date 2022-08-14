function fn() {
    var visibleVar = 9.9;
    for (var index = 0; index < 4; index++) {
        var anotherVisibleVar = 8.8;
        let invisibleVar = 7.7;
        const anotherInvisibleVar = 6.6;
    }
    console.log(anotherVisibleVar);
    //console.log(invisibleVar);
    console.log(anotherInvisibleVar);
}

fn();
