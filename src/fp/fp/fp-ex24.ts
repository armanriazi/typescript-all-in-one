type Customer = {
    name: string,
    age: number,
    wealthy: boolean
};

const saveInDatabase = (show: string, customer: Customer, price: number) => {
    console.log(`REGISTERED: ${customer.name} has requested  a ticket for ${show}. Price: ${price}`);
};

const buyTicket = (show: string, customer: Customer) => {
    let price = 10;

    if (customer.age > 18) {
        price = price + 10;
    }

    saveInDatabase(show, customer, price);
};
//Problem statement  : How to write a high-class function? next example