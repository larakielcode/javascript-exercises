const leapYears = function (year) {
   /* if ((year % 4 === 0) && (!(year % 100 === 0) || year % 400 === 0)) {
      return true;
   } else { return false; } */

   const isYearDivisibleByFour = year % 4 === 0;
   const isYearCenturyYear = year % 100 === 0;
   const isYearDivisibleByFourH = year % 400 === 0;

   return (isYearDivisibleByFour && (!isYearCenturyYear || isYearDivisibleByFourH)) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
