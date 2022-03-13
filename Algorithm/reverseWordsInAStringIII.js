// Given a string s, reverse the order of characters in each word within a 
// sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

const reverseWords = (s) => {
    const splitWordArray = s.split(' ');
    const newArray = [];

    splitWordArray.map((eachWord) => {
        const charArray = eachWord.split('');
        const length = charArray.length;
        let startIndex = 0;
        let endIndex = length - 1;

        while(endIndex > startIndex) {
            [charArray[startIndex], charArray[endIndex]] = [charArray[endIndex], charArray[startIndex]];
            startIndex++;
            endIndex--;
        }

        newArray.push(charArray.join(''));
    });

    return newArray.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));