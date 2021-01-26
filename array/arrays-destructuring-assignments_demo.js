/**
 * The destructuring assignment syntax is
 * a JavaScript expression that makes it
 * possible to unpack values from arrays,
 * or properties from objects,
 * into distinct variables
 */

const [z, x] = [1, 2, 3, 4, 5]
console.log(z, x)

const [a, b, , ,c] = [1, 2, 3, 4, 5]
console.log(a, b, c)

// Destructuring of arrays to switch places of variables
let one = 9, two = 6;
(() => {
    [one, two] = [two, one]
})()
console.log(one)
console.log(two)

// Destructuring Assignment with the Rest Operator
const source = [1, 2, 3, 4, 5]
function removeFirstTwo(list) {
    const [ , , ...arr] = list // within the brackets, the first two spaces are empty, meaning, do not copy the array, the rest: put in an array arr
    return arr
}

const arr = removeFirstTwo(source)
console.log(source)
console.log(arr)
