// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const make_avg =(array,size)=>{
    let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
return (sum/size).toFixed(2);
}

console.log(make_avg([1,2,3,4,5,7],6)); // Output: 3