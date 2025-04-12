export class Category {
    private _id: number;
    private _name: string;
    private _description: string;

    constructor(id: number, name: string, description: string) {
        this._id = id;
        this._name = name;
        this._description = description;
    }

    public get Id(): number {
        return this._id;
    }

    public get Name(): string {
        return this._name;
    }

    public get Description(): string {
        return this._description;
    }

    public set Name(name: string) {
        this._name = name;
    }

    public set Description(desc: string) {
        this._description = desc;
    }
}
