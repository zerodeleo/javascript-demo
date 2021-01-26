let obj = {
    ours: {
        mine: {
            one: "car",
            two: "flowers",
            three: "card"
        },
        yours: {
            one: "phone",
            2: "clothes",
            three: "pants"
        }
    }
}

console.log(obj.ours.yours[2])
console.log(obj.ours.mine.three)
console.log(obj.ours.mine["three"])

// An array with nested objects
let treeArray = [{
    type: 'trees',
    list: [
        "fir",
        "pine",
        "birch"
    ]
    }, {
        type: 'flowers',
        list: [
            "rose",
            "tulip",
        ]
    }
]

/**
 * Notice the object in the array can't be
 * accessed using indexes and vice versa
 */
console.log(treeArray[1])
console.log(treeArray[1].list)
console.log(treeArray[1]["list"])
console.log(treeArray[1]["list"][1])
console.log(treeArray[1].list[1])