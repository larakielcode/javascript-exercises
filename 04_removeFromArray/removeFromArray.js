const removeFromArray = function (array, ...args) {
   return array.filter(val => !args.includes(val));

   /* const newArr = [];

   array.forEach((val) => {
      if (!args.includes(val)) {
         newArr.push(val);
      }
   });
   return newArr; */
};

// Do not edit below this line
module.exports = removeFromArray;
