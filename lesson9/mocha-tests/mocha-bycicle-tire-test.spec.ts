import { expect } from 'chai';
import { BicycleTire } from '../src/classes/bicycle-tire';

describe('BicycleTire Class', () => {
    let t: BicycleTire;

    beforeEach(() => {
        t = new BicycleTire(0, 29, 12);
    });

    it('BicycleTire instance with correct properties', () => {
        expect(t.pressure).to.equal(0);
        expect(t.size).to.equal(29);
        expect(t.treadDepth).to.equal(12);
        expect(t.isMounted).to.equal(false);
    });

    it('description method returns correct string', () => {
        expect(t.description()).to.equal('Велосипедна шина 29" дюймів');
    });
});
