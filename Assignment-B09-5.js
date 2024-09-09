
function monthlySavings(arr , livingCost) { 
    let totalCash=0;
    let totalSavings=0;
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'Invalid Input';
    }
    for(payment of arr){
        if (typeof payment !== 'number') {
            return 'Invalid Input';
        }
        if(payment>=3000){
            payment=payment*0.80;
        }
        totalCash+=payment;
    }
    totalSavings=totalCash-livingCost;
    if(totalSavings>=0)
        return totalSavings;
    else if(totalSavings<0){
        return "Earn More";
    }
    
}
const Savings=monthlySavings([1000,2000,2500], 5000);
console.log(Savings);