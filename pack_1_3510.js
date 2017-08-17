'use strict'

const arr1 = [1, 2, 3, 4, 5, 5, 5, 5]
const arr2 = [1, 5, 6, 7, 21, 10, 2, 3]

function union(arr1, arr2) {
    const unifierObj = {};

    arr1.concat(arr2).forEach((currVal, currIdx, arr) => {
        unifierObj[currVal] = true;
    });

    const resultArr = Object.keys(unifierObj);
    resultArr.forEach((currVal, currIdx, arr) => {
        arr[currIdx] = +currVal;
    });

    return resultArr;
}

console.log(union(arr1, arr2));
