function sumEveryNth(arr, n) {
    let sum = 0;

    for (let i = n - 1; i < arr.length; i += n) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumEveryNth([10, 20, 30, 40, 50, 60], 2));