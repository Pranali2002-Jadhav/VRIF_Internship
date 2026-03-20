function findMaxDigit(num) {
    let digits = num.toString().split("");
    let max = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > max) {
            max = digits[i];
        }
    }

    return max;
}

console.log(findMaxDigit(39482));