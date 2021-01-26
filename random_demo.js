// Random decimal numbers (between 0-9)
let rand = Math.random() * 10
console.log(rand)

// Random whole number (between 0-19)
rand = Math.floor(Math.random() * 20)
console.log(rand)

// Random whole numbers within a range
const min = 10;
const max = 20;
rand = Math.floor(Math.random() * (max - min + 1)) + min
console.log(rand)