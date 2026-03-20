function isSpOnGeCaSe(str) {
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0 && str[i] !== str[i].toUpperCase()) {
            return false;
        }
        if (i % 2 !== 0 && str[i] !== str[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

console.log(isSpOnGeCaSe("SpOnGeCaSe"));