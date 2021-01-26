/**
 * the function lookup()
 * is almost like a switch function
 */

function lookup(val){
    let result = ''

    const lookup = {
        1: "Jetris",
        2: "Zerodeleo",
        3: 27,
        "case": "anything"
    }
    result = lookup[val]
    return result
}

let lookedup = lookup(2)
console.log(lookedup)

lookedup = lookup("case")
console.log(lookedup)