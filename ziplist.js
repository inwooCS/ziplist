/* eslint-disable-next-line no-undef */
const myArray = ['a', 'b', 'c', 'd'];
const myArray2 = [1, 2, 3, 4];
const myArray3 = [];
let i = 0;

function zipList(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    myArray3.push(array1[i], array2[i]);
  }
  return myArray3;
}
console.log(zipList(myArray, myArray2));

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
  // flatten function reduces the arrays, whilst zip alternates the arrays
}
console.log(zipListTheSimpleWay(myArray, myArray2));

// 22 minutes pog champ
