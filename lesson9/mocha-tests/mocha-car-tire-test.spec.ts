import { expect } from 'chai';
import { CarTire } from '../src/classes/car-tire';

describe('CarTire Class', () => {
    let t: CarTire;

    beforeEach(() => {
        t = new CarTire(0, 18, 30, 'Michelin');
    });

    it('CarTire instance with correct properties', () => {
        expect(t.pressure).to.equal(0);
        expect(t.size).to.equal(18);
        expect(t.treadDepth).to.equal(30);
        expect(t.brand).to.equal('Michelin');
        expect(t.isoPosition).to.equal(0);
        expect(t.isMounted).to.equal(false);
    });

    it('description method returns correct string', () => {
        expect(t.description()).to.equal('Шина Michelin / 18 / 30');
    });

    it('checkSafety method returns correct safety status', () => {
        expect(t.checkSafety()).to.equal('Тиск занизький!');
        t.inflate(35);
        expect(t.checkSafety()).to.equal('Тиск у нормі.');
    });
});

