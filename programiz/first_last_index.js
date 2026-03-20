function findFirstAndLast(arr, num) {
    let first = arr.indexOf(num);
    let last = arr.lastIndexOf(num);

    console.log([first,last]);
    console.log("First Index:", first);
    console.log("Last Index:", last);
}

arr = [10,20,30,20,25,20,33];
findFirstAndLast(arr,20);