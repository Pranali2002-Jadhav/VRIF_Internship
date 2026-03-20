function findLargest(num) {
    let arr = num.toString().split("");
    let max = num;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let temp = arr.slice();
            let t = temp[i];
            temp[i] = temp[j];
            temp[j] = t;

            let newNum = Number(temp.join(""));

            if (newNum > max) {
                max = newNum;
            }
        }
    }

    return max; 
}

console.log(findLargest(2736));
