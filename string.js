const country="Bangladesh";
const capital='Dhaka';
const district=`Barishal`;
console.log(typeof (district));

const thana =new String('demra')
console.log(typeof thana);
console.log(country,capital,district,thana);
console.log(capital.length);

const array=['1','2','3'];//Array is mutable
console.log(array);
array[1]='F'
console.log(array);

console.log(district);//String is immutable
district[2]='C';
