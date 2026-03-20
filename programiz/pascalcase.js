function convertToPascalCase(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}

console.log(convertToPascalCase("hello world"));