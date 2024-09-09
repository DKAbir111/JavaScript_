/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score=76;
if(score>100 && score<0) {
    console.log('Invalid score');
}
else if(score>=90){
    console.log('Grade: A');
}
else if(score>=80){
    console.log('Grade: B');
}
else if(score>=70){
    console.log('Grade: C');
}
else if(score>=60){
    console.log('Grade: D');
}
else{
    console.log('Grade: F');
}