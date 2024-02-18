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

//buyTicket("Pakistan", {name:"Ali",age:28,wealthy:true}); // current situation

const calculatePrice = (age: number) => {
    const basePrice = 10;
    return age > 10 ? basePrice + 10 : basePrice;
};

const buyTicketBase = (calculate: (age: number) => number) => (show: string, customer: Customer) => {
    const price = calculate(customer.age);
    saveInDatabase(show, customer, price);
};

const newBuyTicket = buyTicketBase(calculatePrice);

newBuyTicket("Pakistan", {name:"Ali",age:28,wealthy:true}); // with higher-order function
