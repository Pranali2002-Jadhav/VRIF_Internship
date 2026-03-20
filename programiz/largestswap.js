function largestSwap(num) {
    let str = num.toString();
    let swapped = Number(str[1] + str[0]);

    return num >= swapped;
}

console.log(largestSwap(27)); 
console.log(largestSwap(42)); 