// switch operates as a nestled else-if-statement
function switchDemo(val){
    let answer = ''

    switch(val) {
        case 1:
            answer = "A"
            break;
        case 2:
            answer = "B"
            break;
        case 3:
            answer = "C"
            break;
        case 4:
        case 5:
        case 6:
            answer = "D, E or F"
            break;
        default:
            answer = "something"
            break;
    }

    return answer
}

console.log(switchDemo(9));