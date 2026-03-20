function findInterval(arr) {
     let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

arr = [5,2,9,1];
console.log(findInterval(arr));
