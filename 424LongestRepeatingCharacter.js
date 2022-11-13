var characterReplacement = function(s, k) {
    let result = 0;
    let longest = 0;
    let leftPt = 0;
    let rightPt = 0;
    let hash = new Map();
    let mostOccurences = 0;
    
    hash.set(s[rightPt], 1);
    while(rightPt < s.length) {
        console.log(hash);
        mostOccurences = Math.max(...hash.values());
        longest = rightPt - leftPt + 1;
        if ((longest - mostOccurences) <= k) {
            result = result < longest ? longest : result;
            rightPt++;
            if (hash.has(s[rightPt])) {
                let temp = hash.get(s[rightPt]) + 1;
                hash.set(s[rightPt], temp);
            }
            else hash.set(s[rightPt], 1);
        }
        else {
            let temp = hash.get(s[leftPt]) - 1;
            hash.set(s[leftPt], temp);
            leftPt++;
        }
    }
    return result;
};

console.log(characterReplacement('aabcdf', 2));
