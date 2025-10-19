export abstract class Entity {
    private id: number;

    public constructor(id: number) {
        this.id = id;
    }

    public abstract describe(): string;
}

export class AddressInfo {
    public street: string;
    public city: string;

    public constructor(street: string, city: string) {
        this.street = street;
        this.city = city;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}`;
    }
}

export class UserEntity extends Entity {
    public name: string;
    public email: string;
    public addressInfo: AddressInfo;

    public constructor(id: number, name: string, email: string, addressInfo: AddressInfo) {
        super(id);
        this.name = name;
        this.email = email;
        this.addressInfo = addressInfo;
    }

    public describe(): string {
        return `${this.name} (${this.email}), адреса: ${this.addressInfo.getFullAddress()}`;
    }
}
