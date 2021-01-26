const MATH_CONSTANTS = {
    PI: 3.14,
    GRAVITY: 9.81
}

// The Constant can't be changed in the object
Object.freeze(MATH_CONSTANTS)

// Try changing the PI property in the object
try {
    MATH_CONSTANTS.PI = 99
} catch( ex ) {
    console.log(ex)
}

// PI is still 3.14
console.log(MATH_CONSTANTS.PI)