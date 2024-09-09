/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
const array1=[1,2,3,4,5,6,7,8];
const array2=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const combinedArray1=array1.concat(array2);
console.log("Original Array 1: ", array1);
console.log("================================================");
console.log("Original Array 2: ", array2);
console.log("================================================");
console.log("Combined Array: ", combinedArray1);