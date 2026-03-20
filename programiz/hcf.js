function hcf(num1, num2) {
    let hcf = 1;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}

console.log(hcf(40,8));