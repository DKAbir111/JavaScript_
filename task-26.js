// Count how many times a string has the letter a

const string="Hello, world! I am new in aaa JavaScript";

const countA=string.split('').filter(char => char.toLowerCase() === 'a').length;
console.log(countA);



let count=0;
for(let i = 0; i < string.length; i++){
    if(string[i].toLowerCase() === 'a'){
       count++;
    }
}
console.log(count);


