const phones=[
    {name:'samsung', type:'android', price:'15600'},
    {name:'xiomi', type:'android', price:'17600'},
    {name:'lg', type:'android', price:'19600'},
    {name:'nokia', type:'android', price:'12600'},
    {name:'iphone', type:'ios', price:'156000'},
    {name:'walton', type:'android', price:'105600'}
]
function getLowest(phones){
    let lowest =phones[0];
    for(const phone of phones){
        if(phone.price < lowest.price){
            lowest = phone;
        }
    }
    return lowest;
}
const low =getLowest(phones);
console.log(low);