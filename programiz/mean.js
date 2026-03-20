function calculateMean(num) {
    let digits = num.toString().split("");
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    return sum / digits.length;
}

console.log(calculateMean(12345));