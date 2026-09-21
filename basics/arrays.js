const myArray = [1, 2, 3, 4, 5];
const myString = "some value";
console.log(typeof myArray);
console.log(typeof myString);

console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
// myArray.map(myOfficialCallback);

// function customMap(arr, callBack) {
//   for (let i = 0; i < arr.length; i++) {
//     callBack(arr[i], i);
//   }
// }
// customMap(myArray, myOfficialCallback);

// function myOfficialCallback(val, ind) {
//   console.log(val);
//   console.log("Iterating over index: ", ind);
// }

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
