const marks=[54,65,45,76,89,45,38,65,91,43];
let numMax=marks[0];
function maxValue(number){

    for(const num of number) {
        if(num>numMax){
            numMax=num;
        }
    }
}

maxValue(marks);
console.log("Highest marks:"+ numMax);
