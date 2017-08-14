function rle(str) {
    let rleStr = str;
    let startPos = 0;
    let endPos;
    let delta;          //startPos - endPos: the length of substring like "AAAA...AA"
    let referrenceSym;  //symbol for which tests if there's a substring including only this symbol
    let symbolOffset;   //offset (in symbols) between original string and modified string
                        //offset between "AAAAA" and "A5" is 3, for example

    if(/[^A-Z]/.test(str)) {
        console.log('Error: forbidden symbol(s) in string: ', str);
        return null;
    }

    while(startPos < rleStr.length) {
        referrenceSym = rleStr[startPos];
        endPos = startPos;

        while(rleStr[++endPos] === referrenceSym) {}
        delta = endPos - startPos;

        if(delta > 1) {
            rleStr = rleStr.substring(0, startPos) + referrenceSym
                        + delta + rleStr.substring(endPos);

            symbolOffset = ('' + delta).length + 1; //calculate amount of digits in number 'delta';
            endPos -= delta - symbolOffset;
        }

        startPos = endPos;
    }

    return rleStr;
}

console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBGGGGD'));
console.log(rle('VNUSSSSSTPSSSSRLELLLEL'));
console.log(rle('VNUSSSSSTP SSSSRLELLLEL'));
console.log(rle('VNUSSSSsSTPSSSSRLELLLEL'));
console.log(rle('VNUSSSSSTPSSS123SRLELLLEL'));
console.log(rle('VNUSSSSSTPSSSSRLE-=LLLEL'));