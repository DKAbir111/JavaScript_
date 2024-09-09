/*Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.*/
var a = isNaN('11');
console.log(a);
var b = isNaN(10);
console.log(b);

/*
Explanation:
First line: var a = isNaN('11');

The value '11' is a string, but it represents a numeric value.
isNaN() will first attempt to convert the string '11' to a number. Since '11' can be converted to the number 11, the result is not NaN.
Therefore, isNaN('11') returns false, and a is assigned the value false.
Second line: console.log(a);

This prints the value of a, which is false.
Third line: var b = isNaN(10);

The value 10 is already a number.
Since 10 is a valid number and not NaN, isNaN(10) returns false.
Therefore, b is assigned the value false.
Fourth line: console.log(b);

This prints the value of b, which is also false.
*/
