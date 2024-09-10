// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const names=['rahim', 'robin', 'fi', 'ron', 'rashed'];
let smallestName=names[0];
for(let i=1; i<names.length; i++){
    if(names[i].length<smallestName.length){
        smallestName=names[i];
    }
}
console.log(smallestName);