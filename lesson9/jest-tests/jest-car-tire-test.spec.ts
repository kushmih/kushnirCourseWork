import { expect } from 'chai';
import { CarTire } from '../src/classes/car-tire';

describe('CarTire Class', () => {
    let t: CarTire;

    beforeEach(() => {
        t = new CarTire(0, 18, 0, 'Michelin');
    });

    test('mount method sets isoPosition and isMounted correctly', () => {
        t.mount(23);
        expect(t.isoPosition).to.equal(23);
        expect(t.isMounted).to.equal(true);
    });

    test('inflate method increases pressure correctly', () => {
        t.inflate(100);
        expect(t.pressure).to.equal(100);
    });
});
