const StringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0; // Handle empty string
        let delimiter = /,|\n/; // Default delimiters: comma or newline
        if (numbers.startsWith("//")) { // Handle custom delimiters
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0][2]); // Extract the custom delimiter
            numbers = parts[1];
        }

        const numberArray = numbers.split(delimiter).map(Number); // Split the string by the delimiter(s)
        const negatives = numberArray.filter(num => num < 0); // Find negative numbers
        if (negatives.length > 0) throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);

        return numberArray.reduce((sum, num) => sum + num, 0);
    }
};

module.exports = StringCalculator;
