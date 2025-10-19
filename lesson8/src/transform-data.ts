import { User } from './models/index';

export class UserSummary {
    private id: number;
    public name: string;
    public city: string;
    public company: string;
    public contact: string;

    public constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.city = user.address.city;
        this.company = user.company.name;
        this.contact = `${user.email} | ${user.phone}`;
    }

    public getSummary(): string {
        return `${this.name} (${this.company}) — з міста ${this.city}, контакт: ${this.contact}`;
    }
}
