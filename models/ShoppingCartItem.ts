import { Product } from './Product';

export class ShoppingCartItem{
    private _itemProduct : Product;
    private _quantity : number;

    constructor(itemProduct : Product, itemQuantity : number) {
        this._itemProduct = itemProduct;
        this._quantity = itemQuantity;
    }

    public addProduct(shoppingCartItem: ShoppingCartItem) {
        if (this.ItemProduct.ProductId === shoppingCartItem.ItemProduct.ProductId) {
            this._quantity += shoppingCartItem._quantity
        }
    }

    public subtractProduct(shoppingCartItem: ShoppingCartItem) {
        if (this.ItemProduct.ProductId === shoppingCartItem.ItemProduct.ProductId){
            this._quantity = this._quantity - 1;
        }
    }

    public displayProductItem() : string{
        return this._itemProduct.printProduct() + " " + this._quantity;
    }

    public get ItemProduct() : Product {
        return this._itemProduct;
    }

    public get Quantity() : number {
        return this._quantity;
    }

    public set ItemProduct(itemProduct : Product) {
        this._itemProduct = itemProduct;
    }

    public set Quantity(itemQuantity : number) {
        this._quantity = itemQuantity;
    }

}