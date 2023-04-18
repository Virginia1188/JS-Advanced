class OnlineShop {
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product,quantity,spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }

        let _product = {
            product,
            quantity,
        };

        this.warehouseSpace -= spaceRequired;
        this.products.push(_product);
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product,minimalQuantity){
        let index = this.products.map(p => p.product).indexOf(product);
        if(index == -1){
            throw new Error(`There is no ${product} in the warehouse.`);
        }else if(minimalQuantity <= 0){
            throw new Error('The quantity cannot be zero or negative.');
        }else if(minimalQuantity <= this.products[index].quantity){
            return `You have enough from product ${product}.`;
        }
        let difference = minimalQuantity = this.products[index].quantity;
        this.products[index].quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;

    }

    sellProduct(product){
        let index = this.products.map(p => p.product).indexOf(product);
        if(index == - 1){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        this.products[index].quantity --;
        let newSale = {
            product,
            quantity: 1
        };
        this.sales.push(newSale);
        return `The ${product} has been successfully sold.`;
    }
    revision(){
        
        if(this.sales.length <= 0){
            throw new Error('There are no sales today!');
        }
        let result = [];
        result.push(`You sold ${this.sales.length} products today!`);
        result.push('Products in the warehouse:');

        for (const product of this.products) {
            result.push(`${product.product}-${product.quantity} more left`);
        }
        return result.join('\n');
    }
};
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



