/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weight = 96;
const height = 1.6256;
const bmi = weight / (height * height);


let category;
if (bmi < 18.5) {
    category = 'underweight';
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'normal';
}
else if (bmi >= 25 && bmi <= 29.9) {
    category = 'overweight';
}
else {
    category = 'obes';
}



switch (category) {
    case 'underwight':
        console.log(`Your bmi is ${bmi.toFixed(2)}. You are underweight.`);
        const minNormalWeight = 18.5 * height * height;
        const weightGain = minNormalWeight - weight;
        console.log(`To maintain your normal weight, you need to gain ${weightGain.toFixed(2)} kg.`);
        break;
    case 'normal':
        console.log(`Your bmi is ${bmi.toFixed(2)}. You are Normal. Keep it up`);
        break;
    case 'overweight':
        console.log(`Your bmi is ${bmi.toFixed(2)}. You are overweight.`);
        const maxNormalWeight = 24.9 * height * height;
        const weightLose = weight - maxNormalWeight;
        console.log(`To maintain your normal weight, you need to lose at least ${weightLose.toFixed(2)} kg.`);
        break;
    case 'obes':
        console.log(`Your bmi is ${bmi.toFixed(2)}. You are obes.`);
        const maxNormalWeightObs = 24.9 * height * height;
        const weightLoseObs = weight - maxNormalWeightObs;
        console.log(`To maintain your normal weight, you need to lose at least ${weightLoseObs.toFixed(2)} kg.`);
        break;
    default:
        console.log("Invalid BMI");
        break;
}

