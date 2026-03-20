function removeSpecialCharacters(str) {
     let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9') ||
            ch === ' '
        ) {
            result += ch;
        }
    }

    return result;
}

console.log(removeSpecialCharacters("He!llo@ Wo#rld$%^&*()"));