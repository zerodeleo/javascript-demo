// Replace item in array on index and add an item
function replaceInArray(arr, deleteItem, addItem){
    if ( arr.length < deleteItem ) {
        return (`deleteItem cannot be greater than ${arr.length}`)
    } else if ( deleteItem < 0) {
        return (`deleteItem cannot be less than 0`)
    } else {
        arr[deleteItem] = addItem;
        return (arr)
    }
}
let array = [1, 2, 3, 4]
console.log(array)
array = replaceInArray(array, 0, 100)
console.log(array)