let str = "3"
parseInt(str)
console.log(str)

// An object including two arrays
let obj = {
    person1:[ "Jetris", "Zerodeleo", "50" ],
    person2:[ "John", "Doe", 50 ]
}
console.log(obj)

// Replacing the string value with an integer
let age = parseInt(obj.person1[2])
obj.person1.pop()
obj.person1.push(age)
console.log(obj)

// Converting a binary number string to an int
str = "100111"
let binaryStr = parseInt(str, 2) // Changing it to the power of 2
console.log(binaryStr)