function sum(op1) {
    let sumVal = op1;

    function summator(op2) {
        sumVal += op2;
        return summator;
    };

    summator.toString = function() {
        return sumVal;
    };

    return summator;
};

console.log( +String( sum(1)(-1)(2)(3)(-7) ) );