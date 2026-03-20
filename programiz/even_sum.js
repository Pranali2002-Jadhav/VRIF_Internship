function makeSumEven(num1, num2) {
    let sum =num1 + num2;
    if(sum%2==0)
        return "Even";
    else
        return sum+1;

}

console.log(makeSumEven(4,3));