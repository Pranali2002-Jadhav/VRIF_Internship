function calculateTotalCost(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 100) {
            total += prices[i] * 0.9; // 10% discount
        } else {
            total += prices[i];
        }
    }

    return total;
}

console.log(calculateTotalCost([120, 50, 600]));