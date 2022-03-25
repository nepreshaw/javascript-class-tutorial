class Customer {
    id;
    name;
    sales;

    constructor (id = 0, name = "", sales = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    // log() {
    //     console.log(this.id, this.name, this.sales);
    // }
}

let customers = [
    new Customer(1, "MAX", 1000),
    new Customer(2, "P&G", 100000),
    new Customer(3, "MSFT", 511000)
]

const update = () => {
    display(customers);
}

const display = () => {
    const tbodyCtrl = document.getElementById("cust") 
    for(let cust of customers){
       let tr = "<tr>";
       tr += `<td>${cust.id}</td>`;
       tr += `<td>${cust.name}</td>`;
       tr += `<td>${cust.sales}</td>`;
       tr += "</tr>";
       tbodyCtrl.innerHTML += tr;
}
}
