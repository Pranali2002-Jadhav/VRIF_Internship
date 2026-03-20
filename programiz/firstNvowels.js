function getFirstNVowels(str, n) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i];
        }

        if (result.length === n) {
            break;
        }
    }

    return result;
}

console.log(getFirstNVowels("Ice and water", 3));
