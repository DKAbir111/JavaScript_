/*
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300
*/
const money=1000;
const applePrice=100;
const orangePrice=80;
const appleQuantity=3;
const orangeQuantity=4;

const totalPrice=(applePrice * appleQuantity) + (orangePrice * appleQuantity);
const returnPrice=money-totalPrice;
console.log(returnPrice);