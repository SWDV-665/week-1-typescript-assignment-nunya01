var Grocery = /** @class */ (function () {
    function Grocery(_name, _qty, _price) {
        this.name = _name;
        this.qty = _qty;
        this.price = _price;
    }
    Grocery.prototype.asString = function () {
        return this.name + ", Qty: " + this.qty + ", Price: $" + this.price.toFixed(2) + ", Cost: $" + (this.price * this.qty).toFixed(2);
    };
    return Grocery;
}());
;
var milk = new Grocery("milk", 1, 2.99);
var eggs = new Grocery("eggs", 2, 1.50);
var bread = new Grocery("bread", 3, .99);
var grocArray = [milk, bread, eggs];
var groceryList = document.getElementById("groceries");
grocArray.forEach(function (item) {
    var li = document.createElement("li");
    li.innerText = item.asString();
    groceryList.appendChild(li);
});
