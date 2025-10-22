import { Goblin } from './Goblin';

export class GoblinArcher extends Goblin {
    protected name = 'Goblin archer';

    public constructor(name: string, health: number, attackPower: number, speed: number, distanceToTarget: number) {
        super(name, health, attackPower, speed, distanceToTarget);
    }

    public attack(): void {
        if (this.distanceToTarget <= 5) {
            console.log(`${this.name} атакує з силою ${this.attackPower}`);
        } else {
            console.log(`${this.name} стріляє з лука, завдаючи ${this.attackPower} шкоди`);
        }
    }
}
