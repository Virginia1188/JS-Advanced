function sortingTickets(arrInput,sortingCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let allTickets = [];
    arrInput.forEach(line => {
        let [destination,price,status] = line.split('|');
        let currentTicket = new Ticket(destination,price,status);
        allTickets.push(currentTicket);
    });
    let sorted;
    if(sortingCriteria == 'price'){
        sorted = allTickets.sort((a,b) => a[sortingCriteria]-b[sortingCriteria]);
    }else{
        sorted = allTickets.sort((a,b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    }
    
    return sorted;
    // console.log(sorted);

}   
sortingTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'
);