// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const height=[167, 190, 120, 165, 137];
let lowestNum=height[0];
for(let i=1; i<height.length; i++){
    if(height[i]<lowestNum){
        lowestNum=height[i];
    }
}
console.log(lowestNum);