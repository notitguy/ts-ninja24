"use strict";
// continue with 23
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + "\n";
        //base
        formatted += `Pizza on a ${this.base} topping`;
        // toppings
        if (this.toppings.length < 1) {
            formatted += " with no toppings";
        }
        else if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(", ")}`;
        }
        return formatted;
    }
}
const pizza = new Pizza("mario special", 25);
function printFormatted(val) {
    console.log(val.format());
}
pizza.addTopping("mushrooms");
pizza.addTopping("pepper");
printFormatted(pizza);
