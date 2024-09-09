// Capitalize Every first Letter of each word in a String

function capitalizeFirstLetterOfEachWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Array to hold the transformed words
    const capitalizedWords = [];
    
    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // Capitalize the first letter and make the rest lowercase
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        // Add the transformed word to the array
        capitalizedWords.push(capitalizedWord);
    }
    
    // Join the words back into a single string
    return capitalizedWords.join(' ');
}

// Example usage
console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetterOfEachWord("javascript is awesome")); // Output: "Javascript Is Awesome"
