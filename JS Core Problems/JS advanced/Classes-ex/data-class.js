function tickets(input,sortingCriteria) {
    let arr = [];
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for(let i of input){
        let p = i.split('|');
        arr.push(new Ticket(p[0], p[1], p[2]));
    }
    if(sortingCriteria=='destination'){
        arr.sort((a,b)=>a.destination.localeCompare(b.destination));
    } else if(sortingCriteria=='price'){
        arr.sort((a,b)=>a.price-b.price);
    } else {
        arr.sort((a,b)=>a.status.localeCompare(b.status));
    }
    return arr;
}
tickets(['Philadelphia|96.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);