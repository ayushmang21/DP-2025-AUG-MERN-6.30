const user = {
    name: "Ayushman",
    age: 20,
    password: "123456"
}

console.log(user);

console.log(user.age);
console.log(user["name"]);

user.age = 25;
console.log(user.age);

user.location = "Lko";
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: "Samsung",
    model: "Galaxy S25 Ultra",
    price: 1250000,
    colors: ["Space Black", "Cosmic Gray", "Cloud White"],
}

console.log(smartphone);
console.log(smartphone.colors);
console.log(smartphone.colors[0]);

smartphone.colors[2] = "Mystic Silver";
console.log(smartphone.colors);

const smartphoneArray = [
    {
        brand: "Samsung",
        model: "Galaxy S25 Ultra",
        price: 1250000,
        colors: ["Space Black", "Cosmic Gray", "Cloud White"],
    },
    {
        brand: "Apple",
        model: "iPhone 15 Pro Max",
        price: 1450000,
        colors: ["Black", "White", "Blue", "Gold"],
    },
    {
        brand: "OnePlus",
        model: "OnePlus 12",
        price: 900000,
        colors: ["Black", "Blue", "Green"],
    }
];

console.log(smartphoneArray);

// Print the third color of the second smartphone







