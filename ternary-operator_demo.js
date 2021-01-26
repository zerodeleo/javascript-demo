// condition ? statement-if-true : statement-if-false

function checkEqual(a, b){
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEqual(10, 10))

function checkEqual2 (a, b){
    return a === b ? true : false
}

console.log(checkEqual2(10, 10))

/**
 * Multiple conditional ternary operations
 */

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "num = 0"
}

console.log(checkSign(-1))