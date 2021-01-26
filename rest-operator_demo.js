// Without the rest operator
let sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ]
        return args.reduce((a, b) => a + b, 0)
    }
})()
console.log(sum(1,2,3))

// With the rest operator
sum = (function() {
    return function sum(...args) { // converts what's passed in to an array
        return args.reduce((a, b) => a + b, 0)
    }
})()
console.log(sum(1, 2, 3, 6, 8))