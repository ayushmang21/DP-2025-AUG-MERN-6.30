const nums = [56, 85, 96, 12, 74, 32]
console.log(nums);

// Map Method

const sqr = nums.map((n) => n * n);
console.log(sqr);

const prices = [340, 580, 100, 7540, 953];

const gst = prices.map((p) => p + (p * 0.18));
console.log(gst);

const discount = prices.map((p) => p * 0.90);
console.log(discount);

const prices2 = ['₹340.56', '₹580.50', '₹100.74', '₹7540.10', '₹953.86'];

const cleanPrices = prices2.map((p) => {
    return parseInt(p.slice(1));
})
console.log(cleanPrices);

