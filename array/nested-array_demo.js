// Two dimensional array
const twoDimArray = [["text", 4, '4'], ["text", 3, '3'], ["string", 52, '52']]
console.log(twoDimArray)

twoDimArray[1] = ["insert"]
console.log(twoDimArray)
console.log()

// Two dimensional array becomes three dimensional
twoDimArray[2][0] = ["insert"]
console.log(twoDimArray)
console.log()

// Three dimensional array
const threeDimArray = [["text", 4, '4'], ["text", 3, '3'], [["string"], 52, '52']]
console.log(threeDimArray)

threeDimArray[2][0] = ["insert", 16]
console.log(threeDimArray)

console.log(threeDimArray[2][0][0])