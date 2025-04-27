<<<<<<< HEAD
const removeFromArray = function (arr = []) {

=======
const removeFromArray = function (array, ...args) {
   return array.filter(val => !args.includes(val));

   /* const newArr = [];

   array.forEach((val) => {
      if (!args.includes(val)) {
         newArr.push(val);
      }
   });
   return newArr; */
>>>>>>> 5d5e76933af7641a371ef3bd4abef671e736df11
};

// Do not edit below this line
module.exports = removeFromArray;
