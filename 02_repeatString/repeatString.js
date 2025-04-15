const repeatString = function (string, num) {
    let word = '';
    if (num < 0) return "ERROR";
    while (num) {
        word = word + string;
        num--;
    }

    return word;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);

// Do not edit below this line
module.exports = repeatString;
