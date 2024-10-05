const StringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0; // Handle empty string
        const delimiters = /,|\n/;
        return numbers.split(delimiters).reduce((sum, num) => sum + parseInt(num), 0);
    }
};

module.exports = StringCalculator;
