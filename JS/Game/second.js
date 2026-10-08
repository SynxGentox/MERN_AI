
class Customer {
    constructor(custName, address, age) {
        this.custName = custName;
        this.address = address;
        this.age = age;

        this.prodList = {
            apple: 1200, banana: 200

        };

        this.delCharge = 0;     // delivery Charge
    }

    bill(prodName, quantity, discount, coupon) {

        const avail = this.prodList[prodName] == null;

        if (avail) {
            console.log("Product not available");
            return;
        }

        let price = this.prodList[prodName];

        console.log(this.custName);
        console.log(prodName);
        console.log(price);
        console.log(quantity);
        console.log(discount);
        console.log(this.delCharge);
        console.log("Product availability: " + avail);
        console.log(coupon);

        let total = price * quantity;
        let discAmount = (discount / 100) * total;
        let bill = total - discAmount + this.delCharge;

        console.log(total);
        console.log(discAmount);
        console.log(bill);

        console.log(bill > 1000);

        console.log(quantity);
        console.log(this.age);

        console.log("Using incremental operators");

        console.log(quantity);
        console.log(++quantity);
        console.log(quantity++);
        console.log(--quantity);
        console.log(quantity--);

        console.log("Final Value: " + quantity);
    }
}

const customer = new Customer("Aryan", "Ghaziabad", 22);        // adding customer

customer.bill("banana", 2, 10, "Save10");                   // itemlist


