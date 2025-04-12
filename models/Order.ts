import { User } from './User';
import { ShoppingCartItem } from './ShoppingCartItem';

export enum OrderStatus {
    PENDING = "Pending",
    CONFIRMED = "Confirmed",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered"
}

export class Order {
    private _orderId: number;
    private _user: User;
    private _items: ShoppingCartItem[];
    private _totalAmount: number;
    private _date: Date;
    private _status: OrderStatus;

    constructor(orderId: number, user: User, items: ShoppingCartItem[], totalAmount: number, status: OrderStatus = OrderStatus.PENDING) {
        this._orderId = orderId;
        this._user = user;
        this._items = items;
        this._totalAmount = totalAmount;
        this._date = new Date();
        this._status = status;
    }

    public get OrderId(): number {
        return this._orderId;
    }

    public get User(): User {
        return this._user;
    }

    public get Items(): ShoppingCartItem[] {
        return this._items;
    }

    public get TotalAmount(): number {
        return this._totalAmount;
    }

    public get Date(): Date {
        return this._date;
    }

    public get Status(): OrderStatus {
        return this._status;
    }

    public set Status(status: OrderStatus) {
        this._status = status;
    }

    public printOrderSummary(): string {
        return `Order #${this._orderId} by ${this._user.fullName()} - Total: ${this._totalAmount} MAD - Status: ${this._status}`;
    }
}
