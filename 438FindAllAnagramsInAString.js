var findAnagrams = function(s, p) {
    const ASCIICharOffset = 97;
    const result = [];
    const sCharOccurences = new Array(26).fill(0);
    const pCharOccurences = new Array(26).fill(0);
    let LeftPt = 0;
    let RightPt = p.length - 1;

    for(let index = 0; index < p.length; index++) {
        pCharOccurences[p[index].charCodeAt()-ASCIICharOffset]++;
    }

    while (RightPt < s.length)
    {
        for(let index = LeftPt; index <= RightPt; index++) {
            console.log(`${s[index]}`);
            sCharOccurences[s[index].charCodeAt()-ASCIICharOffset]++;
        }
        console.log('---');
        //compare two arrays
        if (sCharOccurences.every((value, index) => value === pCharOccurences[index])){
            result.push(LeftPt);
        }
        sCharOccurences.fill(0);
        LeftPt++;
        RightPt++;
    }
    return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
