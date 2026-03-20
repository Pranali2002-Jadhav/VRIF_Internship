function calculateProfitLoss(sellingPrice, costPrice) {
    let result = sellingPrice - costPrice;
    console.log("Result:",result);
    if(result>0)
        return "Profit";
    else if(result<0)
        return "Loss";
    else
        return "Break_even";
}

console.log(calculateProfitLoss(50,30));