function convertToCamelCase(str) {
    let words = str.split(" ");
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}

console.log(convertToCamelCase("hello world"));
