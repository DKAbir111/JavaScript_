// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptops, tablets, mobiles) {
    return laptops * 35000 + tablets * 15000 + mobiles * 20000;
}

console.log(calculateElectronicsBudget(3, 2, 2)); // Output: 175000