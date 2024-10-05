const StringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0; // Handle empty string
        if (!numbers.includes(",")) return parseInt(numbers);
        return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
    }
};

module.exports = StringCalculator;
