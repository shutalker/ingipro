function wrap(baseStr, strLength) {
    let separator = '\n';
    let str = baseStr;
    let currentPos = strLength; //index of last symbol in substring with length 'strLength'
    let wordsAmount = str.split(' ').length;
    let insertMode = 'insert';  //symbol '\n' insert mode
                                //'insert' between 2 symbols ("a\nb")
                                //'replace' spaces to \n

    while(currentPos < str.length) {
        if(str.charAt(currentPos) !== ' ') {

            if(wordsAmount < 2) {
                insertMode = 'insert';
                insertSymbolInStr();
            } else {
                //find position of the end of previous word
                currentPos = searchForSpaceSymbol();
                insertSymbolInStr();
            }
        } else {
            insertMode = 'replace';
            insertSymbolInStr();
        }

        currentPos += strLength + 1;
        wordsAmount--;
    }

    function searchForSpaceSymbol() {
        let pos = currentPos;

        insertMode = 'replace';

        while(str[pos] !== ' ') {
            pos--;

            if(pos < 0) {
                pos = currentPos;
                insertMode = 'insert';
                break;
            }
        }

        return pos;
    }

    function insertSymbolInStr() {
        let tailStrIndex = (insertMode === 'insert') ? currentPos : currentPos + 1;

        str = str.substring(0, currentPos) + separator
                    + str.substring(tailStrIndex);
    }

    return str;
}

console.log(wrap('это вам не это(с)', 7));
console.log(wrap('короткие слова а потом оченьдлинноесловокотороепридетсярезать', 5));
console.log(wrap('Мама мыла раму', 4));
console.log(wrap('Мама мыла раму', 11));
console.log(wrap('экскурсия', 4));