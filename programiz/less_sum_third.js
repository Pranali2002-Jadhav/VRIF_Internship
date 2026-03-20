function checkSumLessThanThird(num1, num2, num3) {
    let sum = num1 + num2;
    if(sum<=num3)
        return "True";
    else
        return "False";
}

console.log(checkSumLessThanThird(5,7,15));
