const arr1 = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];

function convertArrToObj(arr) {
    let convertedObj = {};

    for(let i = 0; i < arr.length; i++)
        convertedObj[arr[i].name] = arr[i].value;

    return convertedObj;
}

console.log(convertArrToObj(arr1));