const arr = ['abc', 45, true, undefined, null];

console.log(arr);

// console.log(typeof arr);

// console.log(arr.length);

console.log(Array.isArray(arr));

const movies = ['Demon Slayer', 'Chainsawman', 'Baaghi 4', 'Thunderbolts', 'Saiyaara'];
console.log(movies);

// length of movies

// Indexing

console.log(movies[0]); // first index
console.log(movies[4]); // last index
console.log(movies[movies.length - 1]); // last element

console.log(movies.indexOf('Baaghi 4')); // -1 = Not Found

console.log(movies.at(2));

console.log(movies);

// Replacing an element

movies[4] = 'John Wick 4';
console.log(movies);

// Adding an element

// movies.push('Pathaan'); // adds at the end
console.log(movies.push('Pathaan'));

movies.unshift('Avatar 3'); // adds at the beginning
console.log(movies);

// Removing an element
movies.pop(); // removes from the end
console.log(movies);

movies.shift(); // removes from the beginning
console.log(movies);

// Slicing in an array

console.log(movies.slice(1, 3));
console.log(movies.slice(2));
console.log(movies.slice(2, 100)); // it will not give error
console.log(movies.slice(-1)); // last element
console.log(movies.slice(-4)); // last element
console.log(movies.slice(-4)); // last element

// Splicing in an array
console.log(movies);

// movies.splice(2, 2); // (starting index, number of elements to be removed)
// console.log(movies);

movies.splice(1, 2, 'Dune', 'Inception'); // (starting index, number of elements to be removed, elements to be added)
console.log(movies);

movies.splice(2, 0, 'Interstellar', 'The Dark Knight'); // (starting index, number of elements to be removed, elements to be added)
console.log(movies);

movies.splice(1, 4, 'Dune', 'Inception', 'Barbie'); // (starting index, number of elements to be removed, elements to be added)
console.log(movies);


// Questions

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Berry', 'Mango', 'Orange'];

// 1 - Add 'Grapes' to the end of the array.
// 2 - Remove 'Banana' from the array.
// 3 - Replace 'Cherry' with 'Pineapple' using splice.
// 4 - Add 'Fig' and 'Kiwi' after 'Date' using splice.

// fruits.splice(4, 0, 'Fig', 'Kiwi') //4
// console.log(fruits)

// 5 - Slice the array to get the three fruits after 'Banana'.
// console.log(fruits.slice(2, 5)) //5
// 6 - Remove elements from the array starting from index 2 to 5.
// 7 - Add 'Watermelon' at index 0.
// 8 - Slice the array to only contain the fruit at index 3 and fruit at position 5.
// 9 - Log the element at index -5.
// 10 - Log the index of 'Mango' in the array.
// 11 - Log the fruit at the last index. (W/O using at() method or indexOf() method).
// console.log(fruits[fruits.length - 1]) //11

// 12 - Remove the 2nd,3rd, and 4th elements from the array using splice.

// fruits.splice(1, 3) //12
// console.log(fruits)

// 13 - Log the length of the array.
// 14 - Log index and position of 'Date', 'Banana', 'Orange' in the array.


// fruits.push('Grapes') //1
// console.log(fruits)

// fruits.splice(1, 1) //2
// console.log(fruits)

// fruits.splice(2, 1, 'Pineapple') //3
// console.log(fruits)

// fruits.splice(4, 0, 'Fig', 'Kiwi') //4
// console.log(fruits)

// console.log(fruits.slice(2, 5)) //5

// fruits.splice(2, 4) //6
// console.log(fruits)

// fruits.unshift('watermelon') //7
// console.log(fruits)

// console.log(fruits.slice(3, 5)) //8

// console.log(fruits.at(-5)) //9

console.log(fruits.indexOf('Mango')) //10

console.log(fruits[fruits.length - 1]) //11

fruits.splice(0,6)
console.log(fruits);


// fruits.splice(1, 3) //12
// console.log(fruits)

// console.log(fruits.length) //13

// console.log(fruits.indexOf('Date'), (fruits.indexOf('Date') + 1))  //14
// console.log(fruits.indexOf('Banana'), (fruits.indexOf('Banana') + 1))
// console.log(fruits.indexOf('Orange'), (fruits.indexOf('Orange') + 1))