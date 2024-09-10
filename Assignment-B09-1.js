
function calculateMoney(ticketSale) {
    if(ticketSale<0)
        return "Invalid input";
    // return ((ticketSale*120)-(500+(8*50)));
    const totalTicketSale=ticketSale*120;
    const totalExpenses=500+(8*50);
    const netMoney=totalTicketSale-totalExpenses;
    return netMoney;
    }
    
 const ExtraMoney=calculateMoney(10);
 console.log(ExtraMoney);