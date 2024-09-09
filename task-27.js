// Check whether a string contains all the vowels a, e, i, o, u


function containsAllVowels(str) {
    const lowerString=str.toLowerCase();
    const vowelsFound=new Set();
    for(let char of lowerString){
        if('aeiou'.includes(char)){
            vowelsFound.add(char);
        }
    }
    return vowelsFound.size === 5;
}
console.log(containsAllVowels("Education"));
console.log(containsAllVowels("Darun Karas Abir"));