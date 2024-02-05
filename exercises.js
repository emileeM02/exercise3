//Emilee Morris DIG4639C Exercise 3

//3-1 flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list) {
    // Return a flattened array of all of the arrays using reduce and concat
    let result = list.reduce((previousValue, currentValue) => {
        //Return the combination of the previous value and current value
        let combinedValue = previousValue.concat(currentValue)
        return combinedValue
    })
    return result
}

console.log(flattening(arrays));

//3-2 loop(value, test, update, body)
export function loop(value, test, update, body) {
    let currentValue = value
    //testing if true or not
    while(true) {
        if(test(currentValue)) {
            //console logging the current value
            body(currentValue)
            //updated the current value to retest
            currentValue = update(currentValue)
        } else {
            //will break if the loop is false
            break;
        }
    }
}
//testing the function
loop(3, n => n > 0, n => n - 1, console.log);

//3-3 everyLoop(array, test)

export function everyLoop(array, test) {
    let currentResult = true
    //this loop tests if the value is the array is true or false depending on the question that is being asked
    for(let item of array) {
        currentResult = currentResult && test(item)
    }
    return currentResult
}

//3-4 everySome(array, test)
export function everySome(array, test) {
    //tests to see if there is a false value in the array
    //the ! before array.some inverses it to give the same results as the everyLoop function
    return !array.some((value =>!test(value)))
}

//console logging every test to make sure it provides the correct outcome
//can be switched between everyLoop and everySome
console.log("Should be true: ")
console.log(everySome([1, 3, 5], n => n < 10));

console.log("Should be false: ")
console.log(everySome([2, 4, 16], n => n < 10));

console.log("Should be true: ")
console.log(everySome([], n => n < 10));
