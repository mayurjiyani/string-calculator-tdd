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

    test('should return the sum of two numbers', () => {
        const result = StringCalculator.add("1,2");
        expect(result).toBe(3);
    });

    test('should return the sum of multiple numbers', () => {
        const result = StringCalculator.add("1,2,3,4");
        expect(result).toBe(10);
    });

    test('should handle new lines between numbers', () => {
        const result = StringCalculator.add("1\n2,3");
        expect(result).toBe(6);
    });

    test('should handle custom delimiters', () => {
        const result = StringCalculator.add("//;\n1;2");
        expect(result).toBe(3);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => StringCalculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });
});
