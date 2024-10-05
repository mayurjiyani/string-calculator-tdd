const StringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0; // Handle empty string
        let delimiter = /,|\n/; // Default delimiters: comma or newline
        if (numbers.startsWith("//")) { // Handle custom delimiters
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0][2]); // Extract the custom delimiter
            numbers = parts[1];
        }
        return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
    }
};

module.exports = StringCalculator;
