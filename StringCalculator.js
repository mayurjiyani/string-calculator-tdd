const StringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0; // Handle empty string
        if (!numbers.includes(",")) return parseInt(numbers);
    }
};

module.exports = StringCalculator;
