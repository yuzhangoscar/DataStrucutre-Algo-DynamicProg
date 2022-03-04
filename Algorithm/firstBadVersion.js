const versions = [true];
const firstArray = [false, true];
const secondArray = [true, true];
const thirdArray = [false, false, false, false, false, true, true, true];
const fourthArray = [false, false, false, false, false, false, false, true];

const bisect = function(versionArray) {
    let startIndex = 0;
    let endIndex = versionArray.length-1;
    
    while(startIndex < endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex)/2);
        let badVersionQuality = versionArray[middleIndex];
        
        if(badVersionQuality === true) {
            endIndex = middleIndex;
        }
        else {
            startIndex = middleIndex + 1;
        }
    }
    return startIndex;
}

console.log(bisect(versions));
console.log(bisect(firstArray));
console.log(bisect(secondArray));
console.log(bisect(thirdArray));
console.log(bisect(fourthArray));