//Searching array elements
const friends=['abir','nebir','sabbir','tania','sonia'];
console.log(friends.includes('abir'));
console.log(friends.includes('tahsin'));
if(friends.includes('sabbir')){
console.log("Colo ghorte jai");
}

// Searching index
console.log(friends.indexOf('sabbir'));
console.log(friends.indexOf('tahsin'));

// Define array
const num=[];
const string='abcdef';
console.log(Array.isArray(friends));
console.log(Array.isArray(num));
console.log(Array.isArray(string));

// Slice
console.log(friends.slice(1,3));
console.log(friends.slice(-2,));