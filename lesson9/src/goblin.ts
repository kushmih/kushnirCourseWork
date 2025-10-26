import { Unit } from './unit';

export class Goblin extends Unit {
    protected name = 'Goblin warrior';
    protected health = 50;
    protected attackPower = 10;
    protected speed = 3;
    protected distanceToTarget = 0;

    public constructor(name: string, health: number, attackPower: number, speed: number, distanceToTarget: number) {
        super(name, health, attackPower, speed);
        this.distanceToTarget = distanceToTarget;
    }

    public setDistanceToTarget(distance: number): void {
        this.distanceToTarget = distance;
    }

    public attack(): void {
        console.log(`${this.name} атакує з силою ${this.attackPower}`);
    }
}
