// Normal function
let myConcat = function(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(myConcat([1, 2], [3, 4, 5]))

// Arrow function
let myConcat2 = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat2([1, 2], [3, 4, 5]))
console.log()

/**
 * Higher-functions (such as map, filter and reduce)
 * They take functions as arguments for processing collections of data
 * Whenever one function takes another function as an argument,
 * arrow functions should be used
 */
const realNumberArray = [4, 5.7, -9.7, 42]
console.log(realNumberArray)

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)
