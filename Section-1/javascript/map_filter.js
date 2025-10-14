const nums = [56, 85, 96, 12, 73, 32]
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


//Filter Method

const even = nums.filter((n) => n % 2 === 0);
console.log(even);

const names = ['Vaibhav', 'Soumya', 'Anmol', 'Prince', 'Vivek', 'Ayushman', 'Arpita', 'Aman', 'akash'];

const upper = names.map((n) => n.toUpperCase());
console.log(upper);

const endWithA = names.filter((n) => {
    return n[0] === 'a' || n[0] === 'A';
})

console.log(endWithA);

const fullNames = ['Vaibhav Singh', 'Soumya Sharma', 'Anmol Kumar', 'Prince Dubey', 'Vivek Raj', 'Ayushman Gupta', 'Arpita Kumari', 'Aman Singh', 'Akash Raj'];

console.log(fullNames.includes('Anmol Kumar'));


const firstNames = fullNames.map((n) => {
    return n.split(' ')[1];
})
console.log(firstNames);

const less = prices.filter((p) => p > 500);
console.log(less);

const decimals = [2.3, 3.14, 5.3, 8.9, 6.4, 9.1, 4.5];
// Convert into integers then filter out the even numbers
console.log(decimals.map((d) => parseInt(d)).filter((d) => d % 2 == 0));
