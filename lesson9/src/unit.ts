export abstract class Unit {
    protected name: string;
    protected health: number;
    protected attackPower: number;
    protected speed: number;

    public constructor(name: string, health: number, attackPower: number, speed: number) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.speed = speed;
    }

    public abstract attack(): void;

    public move(): void {
        console.log(`${this.name} рухається на ${this.speed} клітини`);
    }

    public isAlive(): boolean {
        return this.health > 0;
    }
}
