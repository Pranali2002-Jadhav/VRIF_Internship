function checkIdenticalItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return "Not Identical";
        }
    }
    return "Identical";
}

console.log(checkIdenticalItems([5, 5, 5]));