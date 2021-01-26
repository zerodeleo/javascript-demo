/**
 * Objects are similar to arrays
 * Arrays uses indexes to access data
 * Objects uses properties to access data
 */

let obj = ({
    firstName: "Jetris",
    lastName: "Zerodeleo",
    age: "27"
    })

console.log(obj)
console.log(obj.lastName)
let ageVar = obj["age"]
console.log(ageVar)

// Change value in property
obj.lastName = "Deleo"
console.log(obj)

// Add property
obj.fullName = `${obj.firstName} ${obj.lastName}`
console.log(obj)

// Delete property
delete obj.fullName
console.log(obj)

obj = {
    person1: {
        firstName: "Jetris",
        lastName: "Zerodeleo",
        age: "27"
    },
    person2: {
        firstName: "John",
        lastName: "Doe",
        age: "40"
    }
}

console.log(obj)
console.log(`${obj.person1.firstName} ${obj.person1.lastName}`)
console.log(`${obj.person2.firstName} ${obj.person2.lastName}`)