function findShortestWord(str) {
    let words = str.split(" ");
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

console.log(findShortestWord("I love programming languages"));