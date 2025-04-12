import { Category } from "./Category";

export class Product {
   private _productId : number;
   private _productTitle : string;
   private _productPrice : number;
   private _category : Category;
    
   constructor(productId : number , productTitle : string , productPrice : number , category : Category) {
       this._productId = productId;
       this._productTitle = productTitle;
       this._productPrice = productPrice;
       this._category = category;
   }

   public get Category() : Category {
       return this._category;
   }

   public set Category(category : Category) {
       this._category = category;
   }
   
   public get ProductId() : number {
       return this._productId;
   }

   public get ProductTitle() : string {
       return this._productTitle;
   }

   public get ProductPrice() : number {
       return this._productPrice;
   }    

   public set ProductId(productId : number) {
       this._productId = productId;
   }

   public set ProductTitle(productTitle : string) {
       this._productTitle = productTitle;
   }

   public set ProductPrice(productPrice : number) {
       this._productPrice = productPrice;
   }

   public printProduct() : string {
       return this._productId + " " + this._productTitle + " " + this._productPrice + " " + this._category.Name;
   }


   

}