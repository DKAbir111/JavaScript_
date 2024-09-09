function deleteInvalids(array) {
    let newArray=[];
    if (Array.isArray(array)==false)
        return "Invalid Array";
    for(element of array){
       if (typeof(element)==='number' && !isNaN(element)){
        newArray.push(element);
       }

    }
        return newArray;

}

const arrayNumber=deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])
console.log(arrayNumber);
console.log(isNaN(NaN));

