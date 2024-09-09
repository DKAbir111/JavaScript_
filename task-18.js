/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 1; i <= 100; i++) {  // Loop from 1 to 100
    if (Number.isInteger(Math.sqrt(i))) {  // Check if 'i' is a square number
        console.log(`First square number encountered: ${i}`);
        break;  // Exit the loop when the first square number is found
    }
}
