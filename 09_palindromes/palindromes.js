const palindromes = function (text) {

    const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = text
        .toLowerCase()
        .split('')
        .filter((character) => alphaNumeric.includes(character))
        .join();

    const reverseString = cleanedString.split('').reverse().join('');
    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
