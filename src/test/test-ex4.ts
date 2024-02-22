/// Jest Writing a parameterized test

function squared(input: number): number {
    return input * input;
}

describe('this is our test suite', () => {
    [1, 5, 10, 100].forEach(num =>
        it(`should multiply ${num}`, () => {
            const result = squared(num);

            expect(result).toEqual(num * num);
        }));
});
