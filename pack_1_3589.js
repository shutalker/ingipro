'use strict'

function range(start, stop, step) {
    const arr = [];

    if (arguments.length > 3 || arguments.length < 1) {
        throw new SyntaxError('Function signature: range([start, ]stop[, step])');
    } else {

        switch (arguments.length) {
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
                if ((step == 0) || (((stop - start) * step) < 0)) {
                    throw new RangeError('Step have incorrect value');
                }
        }
    }

    for (let i = start; (Math.abs(i) < Math.abs(stop)) || ((i * stop) < 0);
         i +=  step) {
        arr.push(i);
    }

    return arr;
}

console.log(range(10));
console.log(range(-15));
console.log(range(1, 11));
console.log(range(0, 10, 3));
console.log(range(-3, 3, 3));
console.log(range(2, -7));
