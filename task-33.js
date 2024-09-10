// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const count_zero =(binaryString)=>{
    // return binaryString.split('0').length-1;
    let count=0;
    for(let i=0; i<binaryString.length; i++){
        if(binaryString[i]==='0'){
            count++;
        }
    }
    return count;
}

console.log(count_zero("1111000011100")); // Output: 3