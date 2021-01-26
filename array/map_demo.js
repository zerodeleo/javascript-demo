let array = [10, 4, 5, 'text', '9', 9]

let newArray = array.map(value => (value + 2))
console.log(array)
console.log(newArray)
console.log()

newArray = array.map(value => {
    return (
        {key: value}
    )
})
console.log(array)
console.log(newArray)
console.log()

newArray = array.map(value => ({key: value}))
console.log(array)
console.log(newArray)
console.log()

array = [["text", 4, '4'], ["text", 3, '3']]

newArray = array.map(value => (value + 2))
console.log(array)
console.log(newArray)
console.log()

newArray = array[0].map(value => (value + 2))
console.log(array)
console.log(newArray)
console.log()