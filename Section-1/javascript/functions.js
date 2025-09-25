// 1st Type Function
function addNums(num1, num2) {
    sum = num1 + num2
    console.log(sum);
}

const add = (a,b) => a+b;

addNums(52, 75)
addNums(52, 75)

// 2nd Type Function

const getAvg = function (m1, m2, m3) {
    avg = (m1 + m2 + m3) / 3;
    return avg;
}

const result = getAvg(52, 75, 89);

console.log(result);


// WAP to create a function which calculates the percentage of marks of a student. Take 5 marks.

function getPercentage(m1, m2, m3, m4, m5) {
    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = (total / 500) * 100;
    return percentage;
}

let percent = getPercentage(85, 90, 78, 92, 88);
console.log("Percentage: " + percent + "%");

// Arrow Function - 3rd Type Function

// Factorial of a number = 5! = 5*4*3*2*1 = 120

const factorial = (num) => {
    let f = 1;

    for (let i = 1; i <= num; i++) {
        f = f * i;
    }
    return f;
}

let fact = factorial(5);
console.log("Factorial: " + fact);


// WAP to create a function which calculates the simple interest. Take principal, rate and time as input. prt

const simInt = (p,r,t) => {
    let si = (p * r * t) / 100;
    return si;
}

let simpleInterest = simInt(5000, 5, 2);
console.log("Simple Interest: Rs." + simpleInterest);

// WAP to create a function which calculates the area of a rectangle. Take length and breadth as input.

// WAP to create a function which finds the numbers divisible by 5 and 11 from 65 to 265.