function basicCalculator(num1, op, num2) {
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") return num2 !== 0 ? num1 / num2 : null;

    return null;
}

console.log(basicCalculator(5, "+", 3));