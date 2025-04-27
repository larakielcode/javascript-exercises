const fibonacci = function (numArgs) {

    let counter
    if (typeof numArgs !== Number) {
        counter = parseInt(numArgs);
    } else {
        counter = numArgs;
    }

    if (counter < 0) return "OOPS";
    if (counter == 0) return 0;

    let first = 1;
    let second = 0;
    for (let index = 2; index <= counter; index++) {
        let current = first + second;
        second = first;
        first = current;
    }
    return first;

};

// Do not edit below this line
module.exports = fibonacci;
