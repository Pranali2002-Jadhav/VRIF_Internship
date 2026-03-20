function checkInRange(num, lowerLimit, upperLimit) {
    if (num >= lowerLimit && num <= upperLimit) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkInRange(10,1,10));
