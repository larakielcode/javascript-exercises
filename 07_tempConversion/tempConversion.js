const convertToCelsius = function (temperature) {
  return Math.round((temperature - 32) * (5 / 9) * 10) / 10;
  /* Deduct 32, then multiply by 5, then divide by 9 */
};

const convertToFahrenheit = function (temperature) {
  return Math.round((((temperature / 5) * 9) + 32) * 10) / 10;
  /* Divide by 5, then multiply by 9, then add 32 */
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};