// Old way
let combinedString = function(str1, str2) {
    this.str1 = str1
    this.str2 = str2
}

let str = new combinedString("Hello", " World")
console.log(str.str1, str.str2)

// New way
class CombinedString {
    constructor(str1, str2) {
        this.str1 = str1
        this.str2 = str2
    }
}
str = new CombinedString("Hello", " World 2")
console.log(str.str1, str.str2)

// Another example
function makeClass() {
    class Punkt {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
        // getter
        get getX(){
            return this.x
        }
        get getY(){
            return this.y
        }
        // setter
        set setX(x){
            this.x = x;
        }
        set setY(y){
            this.y = y;
        }
    }
    return Punkt
}

const Punkt = makeClass()
const punkt = new Punkt(2, 3)
console.log(punkt)
console.log(punkt.x, punkt.y)
punkt.setX = 4
punkt.setY = 7
console.log(punkt)
console.log(punkt.x, punkt.y)
