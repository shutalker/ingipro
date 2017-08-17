'use strict'

const arr1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]; // 5
const arr2 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]; // -1

function searchOddRepeats(arr) {
    //creating an empty object without any properties
    const counterObj = Object.create(null);
    const repeats = [];

    arr.forEach((currVal, currIdx, arr) => {
        if (Object.prototype.hasOwnProperty.call(counterObj, currVal)) {
            counterObj[currVal]++;
        } else {
            counterObj[currVal] = 1;
        }
    });

    for (let prop in counterObj) {
        if (counterObj[prop] % 2) {
            repeats.push(+prop);
        }
    }

    return repeats;
}

console.log(searchOddRepeats(arr1));
console.log(searchOddRepeats(arr2));
