function calculateSum(arr, num) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(calculateSum([4, 6, 10], 5));