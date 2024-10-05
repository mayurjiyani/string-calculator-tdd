const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        const result = StringCalculator.add("");
        expect(result).toBe(0);
    });
});
