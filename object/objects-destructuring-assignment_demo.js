/**
 * The destructuring assignment syntax is
 * a JavaScript expression that makes it
 * possible to unpack values from arrays,
 * or properties from objects,
 * into distinct variables
 */
const obj = {
    x: 1,
    y: 2,
    z: 3
}

// Old way of assigning values to an object
const x = obj.x
const y = obj.y
const z = obj.z
console.log(x, y, z)

// Destructuring syntax (quicker way)
const { x : a, y : b, z : c } = obj
console.log(a, b, c)

// Average temperature
const AVG_TEMPERATURES = {
    today: 27.5,
    tomorrow: 33
}

function getAvgTemp(avgTemperatures) {
    const { today : a, tomorrow : b } = avgTemperatures
    avgTemp = (a + b) / 2
    return avgTemp
}
const res = getAvgTemp(AVG_TEMPERATURES)
console.log(res)

// Destructuring assignment, nested objects
const PERSONS = {
    person1: { name: "Jetris", age: 27 },
    person2: { name: "John", age: "40" }
}

function getAvgAge(persons) {
    const { person1 : { age : a }, person2 : {age : b} } = persons

    return (parseInt(a) + parseInt(b)) / 2
}

console.log(getAvgAge(PERSONS))

// Destructuring assignment to pass an object as a functions parameter
// We only pass what we need to the function
const user = {
        firstName: "Jetris",
        lastName: "ZeroDeleo",
        email: "zerodeleo@gmail.com",
        PW: "Qwerty"
}

const userFullName = (function () {
    return function userFullName({ firstName, lastName }) {
        return (`${firstName} ${lastName}`)
    }
})()
console.log(user)
console.log(userFullName(user))
