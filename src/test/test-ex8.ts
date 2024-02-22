import * as fc from 'fast-check'
function product(first: number, second: number) {
    return first * second;
}

describe('product tests', () => {
    it('should multiply the given numbers', () => {
        const randomFirst: fc.Arbitrary<number> = fc.integer(); 
        const randomSecond: fc.Arbitrary<number> = fc.integer(); 

        fc.assert(
            fc.property(randomFirst, randomSecond, (first, second) => {
                const result = product(first, second);
                
                expect(result).toBe(first * second);
            })
        ); 
    });
});
