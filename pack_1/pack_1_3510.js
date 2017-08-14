const arr1 = [1, 2, 3, 4, 5, 5, 5, 5]
const arr2 = [1, 5, 6, 7, 10, 21, 2, 3]

function union(arr1, arr2) {
    let resultArr = arr1.concat(arr2);

    //removing all duplicates from concatinated array
    resultArr.forEach(function removeDuplicate(currVal, currIdx, arr) {
        for(i = 0; i < arr.length; i++) {
            if((i !== currIdx) && (arr[i] === currVal))
                arr.splice(i--, 1);
        }
    });

    return resultArr.sort();
}

console.log(union(arr1, arr2));