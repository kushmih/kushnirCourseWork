import { expect } from 'chai';
import { BicycleTire } from '../src/classes/bicycle-tire';

describe('BicycleTire Class', () => {
    let t: BicycleTire;

    beforeEach(() => {
        t = new BicycleTire(0, 18, 0);
    });

    it('mount method sets isoPosition and isMounted correctly', () => {
        t.mount();
        expect(t.isMounted).to.equal(true);
    });
});
