import { BicycleTire } from './classes/bicycle-tire';
import { CarTire } from './classes/car-tire';
import { Tire } from './classes/tire';
import { printTireInfo } from './utils/utils';

const bikeTire = new BicycleTire(0, 29, 2);
const carTire = new CarTire(0, 18, 12, 'Michelin');

function serviceCarTire(tire: Tire): void {
    if (tire instanceof CarTire) {
        tire.treadDepth < 20 ? tire.retread(32) : 'Протектор в нормі';
        tire.mount(25);
        tire.inflate(100);
        console.log(tire.checkSafety());
    } else if (tire instanceof BicycleTire) {
        tire.treadDepth < 10 ? tire.retread(15) : 'Протектор в нормі';
        tire.mount();
        tire.inflate(80);
    }
}

printTireInfo(bikeTire);
printTireInfo(carTire);

serviceCarTire(carTire);
serviceCarTire(bikeTire);

const p = carTire.pressure;
const s = carTire.size;
console.log(p, s);

