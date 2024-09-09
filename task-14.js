/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
const number=[1,2,3,4,5,6,7];
const string="Darun Karas Abir";

console.log(typeof(number));
console.log(Array.isArray(number));//true
console.log(Array.isArray(string));//false

