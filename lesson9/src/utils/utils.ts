import { CarTire } from '../classes/car-tire';
import { ITire } from '../interfaces/i-tire';
import { BicycleTire } from '../classes/bicycle-tire';

export function printTireInfo(tire: ITire): void {
    console.log(tire.description());
    console.log(`Тиск: ${tire.pressure} PSI`);
    console.log(`Глибина протектора: ${tire.treadDepth} мм`);
    if (tire.isMounted) {
        if (tire instanceof CarTire) {
            console.log(`Встановлена на позицію (ISO): ${tire.isoPosition}`);
        } else if (tire instanceof BicycleTire) {
            console.log('Встановлена на велосипед.');
        }
    }
}
