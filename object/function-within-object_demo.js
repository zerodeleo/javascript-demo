// Long code
let bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
}
bicycle.setGear(3)
console.log(bicycle.gear)

// Short code
bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
}
bicycle.setGear(5)
console.log(bicycle.gear)