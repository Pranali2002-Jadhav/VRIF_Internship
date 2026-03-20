function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let a = 0, b = 1, c = 1, next;

    for (let i = 3; i <= n; i++) {
        next = a + b + c;
        a = b;
        b = c;
        c = next;
    }

    return c;
}

console.log(tribonacci(4));