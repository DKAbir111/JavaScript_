/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming 
*/


const longestWord =(string)=>{
    let words=string.split(' ');
    let longestWord = words[0];
    for(let i=0; i<words.length; i++){
        if(words[i].length> longestWord.length){
            longestWord=words[i];
    }
}
return longestWord;

}

console.log(longestWord("I am learninuiuug Programming to become a programmer")); // Output: Programming