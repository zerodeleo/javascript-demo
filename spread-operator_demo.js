/**
 * Without the spread operator
 * arr2 is equal to arr1
 * When arr1 is changed, arr2 is changed
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2
(function (){
    arr2 = arr1
    arr1[3] = 'potato'
})()
console.log(arr1)
console.log(arr2)

/**
 * With the spread operator
 * arr4 is not equal to arr3,
 * it's equal to the content of arr3
 * When arr3 is changed, arr4 is not changed
  */
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr4
(function (){
    arr4 = [...arr3]
    arr3[2] = 'potata'
})()
console.log(arr3)
console.log(arr4)