function inchToFeet(inches){
const feetFraction=inches/12;
const feet=Math.floor(feetFraction);
const remainingInches=inches%12;
const result=feet+" Feet "+remainingInches+ " Inches";
return result;
}
console.log(inchToFeet(75));