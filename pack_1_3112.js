let arr = [1, 2, 3, 4, 5];
console.log("Initial array: ", arr);

function drop(arr, i) {

    //checking whether array element index is out of range
    if(i >=0 && i < arr.length) {
        arr.splice(i, 1);
    }
    else {
        console.log("Choosen index ", i, "out of range!");
    }
}

for(elem_idx = 0; elem_idx < arr.length; elem_idx++) {
    console.log("Index of element to be removed: ", elem_idx);
    drop(arr, elem_idx);
    console.log("Modified array: ", arr);
}

//testing drop function with index value that is out of arr range
drop(arr, elem_idx);