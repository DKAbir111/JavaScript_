// Write a function to count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello, World!")); // Output: 3

