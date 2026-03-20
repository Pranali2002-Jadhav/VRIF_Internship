function countTallestCandles(arr) {
    let max = Math.max(...arr);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            count++;
        }
    }

    return count;
}

console.log(countTallestCandles([5, 10, 3, 14, 2, 14]));