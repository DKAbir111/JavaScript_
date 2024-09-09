/***

Implement a countdown timer that counts down from 81 to 65.

 */

let counts=81;
function countdownTimer(){
    console.log(counts);
    if(counts===65){
        clearInterval(interval);
        console.log("Countdown finished!");
    }
    counts--;
}

const interval =setInterval(countdownTimer,1000);
