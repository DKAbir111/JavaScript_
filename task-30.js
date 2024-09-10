// Take four parameters. Multiply the four numbers and then return the result


function multiply(array){
    let result=1;
    for(let i=0; i<array.length; i++){
        result*=array[i];

    }
    return result;
}
const array=[23,54,76,98];
console.log(multiply(array));