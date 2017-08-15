function range(start, stop, step) {
    let arr = [];

    if(arguments.length > 3 || arguments.length < 1) {
        console.log("Function signature: range([start,] stop [, step])");
        return null;
    } else {

        switch(arguments.length) {
            case 1:
                stop = start;
                start = 0;
                //detect whether we should increment or decrement
                //by analising stop value
                step = Math.floor(stop / Math.abs(stop));
                break;

            case 2:
                //detect whether we should increment or decrement
                //by analising start and stop values
                step = (start < stop) ? 1 : -1;
                break;

            case 3:
                //incorrect situations: start < stop and step < 0
                //                      start > stop and step > 0
                //                      step == 0
                if( (step == 0) || (((stop - start) * step) < 0) ) {
                    console.log("Step have incorrect value: ", step);
                    return null;
                }
        }
    }

    for(i = start; Math.abs(i) <= Math.abs(stop); i += step) {
        arr.push(i);
    }

    return arr;
}

console.log(range(10));
console.log(range(-15));
console.log(range(2, -7));
console.log(range(-3, 3));
console.log(range(-3, 3, 3));
console.log(range(-3, 3, -5)); //error
console.log(range()); //error