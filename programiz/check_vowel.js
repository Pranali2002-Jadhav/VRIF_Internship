function checkVowelStart(word) {
    let first = word[0].toLowerCase();

    if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u') {
        return "VStart";
    } else {
        return "Start";
    }
}
console.log(checkVowelStart("apple"));
