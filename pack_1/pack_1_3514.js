const arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; // 5
const arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5]; // -1

function searchOddRepeats(arr) {
    //array that contains odd repeating numbers (my english is not very well)
    let repeats = [];

    arr.forEach(function countRepeats(currVal, currIdx, arr) {
        //check whether the current number was detected as odd repeating
        if(repeats.indexOf(currVal) === -1) {
            let repeatCounter = 1;

            for (i = 0; i < arr.length; i++) {
                if ((i !== currIdx) && (arr[i] === currVal))
                    repeatCounter++;
            }

            if (repeatCounter % 2 !== 0)
                repeats.push(currVal);
        }
    });

    return repeats;
}

console.log(searchOddRepeats(arr1));
console.log(searchOddRepeats(arr2));