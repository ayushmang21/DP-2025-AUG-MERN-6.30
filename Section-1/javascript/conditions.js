let a = 55;

if (a % 2 == 0) {
    let msg = "Even hi hai..!!";
    const b = 20
    var c = "This is var"
    console.log("even")
} else {
    console.log("odd")
}

// console.log(msg); // ReferenceError: msg is not defined
// console.log(b);
console.log(c); // var is function scoped or globally scoped
