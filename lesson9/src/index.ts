import { Goblin } from './Goblin';
import { GoblinArcher}  from './goblin-archer';
import { turn } from './turn-handler';

const goblin = new Goblin('Goblin warrior', 50, 10, 3, 0);
goblin.setDistanceToTarget(2);
turn(goblin);

const goblinArcher = new GoblinArcher('Goblin archer', 40, 8, 4, 6);
goblinArcher.setDistanceToTarget(6);
turn(goblinArcher);
