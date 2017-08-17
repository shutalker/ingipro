'use strict'

const arr = [1, 2, 3, 4, 5];
console.log('Initial array: ', arr);

function drop(arr, i) {

    let replicatedArr = Array.from(arr);

    replicatedArr.splice(i, 1);
    return replicatedArr;
}

arr.forEach((currVal, currIdx, arr) => {
    console.log('Element with index', currIdx, 'will be removed from array');
    console.log(drop(arr, currIdx));
});