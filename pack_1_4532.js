function truncate(baseStr, count) {
    let truncatedStr = '';
    let currentPos = count;
    let symbolCounter = 0;
    let splittedStr = baseStr.split(' ');

    for(let i = 0; i < splittedStr.length; i++) {
        symbolCounter += splittedStr[i].length;

        if(symbolCounter > currentPos) {

            //if 'currentPos' points to some clipped word symbol
            if( !( /[\ \n]/.test(baseStr[currentPos]) ) ) {
                if(i === 0)
                    truncatedStr += splittedStr[i];
                else
                    truncatedStr += '...';
            }

            break;
        } else {
            while( /[\ \n]/.test(baseStr[symbolCounter]) )
                symbolCounter++;
        }

        truncatedStr += splittedStr[i] + ' ';
    }

    return truncatedStr;
}

console.log(truncate('Мама мыла раму', 12));
console.log(truncate('Мама мыла раму', 4));
console.log(truncate('однослово', 4));