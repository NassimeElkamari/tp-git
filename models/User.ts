enum UserType {
    ADMIN,
    MEMBER,
    GUEST
}

export class User {
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _usertype: UserType ;

    constructor(userId: number, firstName: string, lastName: string, age: number , usertype: UserType) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._usertype = usertype
    }

    public fullName() : string{
        return this._firstName + " " + this._lastName
    }

    public greetUser() : string{
        let fullNamevar = this.fullName()
        switch (this._usertype) {
            case UserType.ADMIN:
                return "Hello Admin " + fullNamevar;
            case UserType.MEMBER:
                return "Hello Member " + fullNamevar;
            case UserType.GUEST:
                return "Hello Guest " + fullNamevar;
        }
    }

    public get UserType(): UserType {
        return this._usertype;
    }

    public set UserType(usertype: UserType) {
        this._usertype = usertype
    }

    public get UserId(): number {
        return this._userId;
    }

    public get FirstName(): string {
        return this._firstName;
    }

    public get LastName(): string {
        return this._lastName;
    }

    public get Age(): number {
        return this._age;
    }

    public set UserId(userId: number) {
        this._userId = userId;
    }

    public set FirstName(firstName: string) {
        this._firstName = firstName;
    }

    public set LastName(lastName: string) {
        this._lastName = lastName;
    }

    public set Age(age: number) {
        this._age = age;
    }

}



