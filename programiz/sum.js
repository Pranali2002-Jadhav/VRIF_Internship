function calculateSumOfDigits(num) {
    let digits = num.toString().split("");
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    return sum;
}

console.log(calculateSumOfDigits(12345));