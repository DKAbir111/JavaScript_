/* Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */

const marks=[75.25, 65, 80, 35.45, 99.50];
let totalMarks=0;
for(let mark of marks) {
    totalMarks= totalMarks + mark;
}
const averageMarks=totalMarks/marks.length;
console.log(averageMarks.toFixed(2));