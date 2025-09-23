let a = 55;

if (a % 2 == 0) {
    let msg = "Even hi hai..!!";
    const b = 20
    var c = "This is var"
    // console.log("even")
} else {
    // console.log("odd")
}

// console.log(msg); // ReferenceError: msg is not defined
// console.log(b);
// console.log(c); // var is function scoped or globally scoped

// WAP to check if a user is able to vote or not.


// WAP to print whether a number is divisible by 3 and 12.
num1 = 66

// if (num1 % 3 == 0 && num1 % 12 == 0) {
//     console.log("Divisible");
// } else {
//     console.log("Not");
// }

if (num1 % 3 == 0 && num1 % 11 == 0) {
    console.log("Divisible by Both");
} else if (num1 % 3 == 0) {
    console.log("Divisible by 3");
} else if (num1 % 11 == 0) {
    console.log("Divisible by 11");
} else {
    console.log("Not Divisible by Both");
}

// WAP to check if a number is a perfect sqr.

let num2 = 49

const root = num2 ** 0.5
console.log(root)

if (Number.isInteger(root)) {
    console.log("Perfect Sqr - " + root)
} else {
    console.log("Not Perfect Sqr")
}