class Grocery {
    name: string;
    qty: number;
    price: number;

    constructor(_name: string, _qty: number, _price: number){
        this.name = _name;
        this.qty = _qty;
        this.price = _price;
    }

    asString() {
        return this.name + ", Qty: " + this.qty + ", Price: $" + this.price.toFixed(2) + ", Cost: $" + (this.price * this.qty).toFixed(2);
    }
};

let milk = new Grocery("milk", 1, 2.99);
let eggs = new Grocery("eggs", 2, 1.50);
let bread = new Grocery("bread", 3, .99);

let grocArray: Grocery[] = [milk, bread, eggs];

let groceryList: HTMLElement = document.getElementById("groceries");
  
grocArray.forEach((item) => {
    let li: HTMLLIElement = document.createElement("li");
    li.innerText = item.asString();
    groceryList.appendChild(li);
});

