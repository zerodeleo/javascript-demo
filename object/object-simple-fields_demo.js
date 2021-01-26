// If you wanna create an object where the key is the same as the variable of an object
// Long code
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    }
}
console.log(createPerson("Jetris ZeroDeleo", 27, "male"))

// The same as above, short code
const createPerson2 = (name, age, gender) => ( { name, age, gender } )
console.log(createPerson2("Jetris ZeroDeleo", 27, "male"))

