const sumAll = function (numOne, numTwo) {
   if (numOne < 0 || numTwo < 0) return "ERROR";
   if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR";
   if (numOne > numTwo) {
      const tempNum = numOne;
      numOne = numTwo;
      numTwo = tempNum;
   }
   let sum = 0;
   for (let x = numOne; x <= numTwo; x++) {
      sum += x;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
