const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        const result = StringCalculator.add("");
        expect(result).toBe(0);
    });

    test('should return the number itself when one number is passed', () => {
        const result = StringCalculator.add("1");
        expect(result).toBe(1);
    });
});
