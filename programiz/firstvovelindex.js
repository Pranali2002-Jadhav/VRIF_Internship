function findFirstVowel(str) {
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }

    return -1;
}

console.log(findFirstVowel("hello"));