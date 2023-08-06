/* 
1. if ticket number is less than 100, per ticket price: 100;
2. if tiket number is more than 100, but less than 200. first 100 ticket price 100/perticket and more than 100 ticket price 90tk and 200 more than ticket price 70 tk
3. if you purchase more than 200 tickets
first 100 ---> 100tk
100-200 ---? 90tk
200+ ----> 70tk

*/


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice =  restTicketQuantity * second100rate;
        const totalPrice = first100Rate + restTicketPrice;
        return totalPrice;
    }else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100rate + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(302);
console.log('price: ', price);