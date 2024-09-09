function checkName(name) {
    if (typeof(name)!=='string')
        return "Invalid";
    if('ayieouw'.includes(name.toLowerCase()[name.length - 1]))
        return "Good name";
    else
    return "Bad name";

}

const nameCheck=checkName("Salman");
console.log(nameCheck);
