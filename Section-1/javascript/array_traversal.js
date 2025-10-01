const nums = [5, 8, 6, 9, 3, 1, 0, 7, 4, 2];

// For Loop

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log("------------------");


// For...of Loop

for (let i of nums) {
    console.log(i);
}

console.log("------------------");

// forEach Method

nums.forEach((e,i,a) => {
    console.log(e,i,a);
})

console.log("------------------");

// WAP to store the sqr of each element of nums in a new array.

const sqr = [];

nums.forEach((element)=>{
    sqr.push(element*element);
})

console.log(sqr);

console.log("------------------");

// WAP to store all even numbers from nums array in a new array.

const even = [];

nums.forEach((i)=>{
    if(i%2==0){
        even.push(i);
    }
})

const prices = [340, 580, 100, 7540, 953];