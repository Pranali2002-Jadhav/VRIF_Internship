function checkSpaceInString(str) {
    if (str.includes(" ")) {
        return "Space";
    } else {
        return "Not Space";
    }
}

let str = "Hello World";

console.log(checkSpaceInString(str));
