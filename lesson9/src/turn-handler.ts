import { Turn } from './turn-interface';

export function turn (playerTurn: Turn) : void {
    console.log('Початок ходу') ;
    playerTurn.move();
    playerTurn.attack();
    console.log('Кінець ходу');
}
