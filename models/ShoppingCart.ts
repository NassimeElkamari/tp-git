import { ShoppingCartItem } from "./ShoppingCartItem";

export class ShoppingCart {
    private itemsProduct : Array<ShoppingCartItem> = new Array<ShoppingCartItem>
    private total : number = 0.0

    constructor(itemsProduct : Array<ShoppingCartItem>, total : number) {
        this.itemsProduct = itemsProduct;
        this.total = total;
    }

    public addItem(item: ShoppingCartItem): void { 
        if (!this.itemsProduct.some(existingItem => existingItem.ItemProduct.ProductId === item.ItemProduct.ProductId)) {
            this.itemsProduct.push(item);
            this.total += item.Quantity;
        }else{
            item.addProduct(item)
        }
    }

    public removeItem(index: number): void {
        if (index >= 0 && index < this.itemsProduct.length) {
            if (this.itemsProduct[index].Quantity > 1) {
                this.itemsProduct[index].subtractProduct(this.itemsProduct[index]);
                this.total -= 1;
            } else {
                this.itemsProduct.splice(index, 1);
                this.total -= this.itemsProduct[index].Quantity;
            }
        }
    }

    public getTotal(): number {
        return this.total;
    }

    public getItems(): Array<ShoppingCartItem> {
        return this.itemsProduct;
    }
}