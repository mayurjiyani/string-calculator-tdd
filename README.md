# String Calculator - TDD

## Description

This is an implementation of the **String Calculator** using **Test-Driven Development (TDD)** practices. The calculator provides a method to sum numbers passed as a string, supporting comma and newline as default delimiters, along with customizable delimiters and error handling for negative numbers.

The project demonstrates the evolution of code through multiple commits based on TDD principles. Each feature is developed in a **test-first** approach, ensuring code quality, correctness, and refactoring where needed.

## Features

- Add numbers passed as a comma-separated string.
- Handle multiple numbers.
- Support newline characters as delimiters.
- Custom delimiters defined by the user.
- Throws an error when negative numbers are passed, showing all negative numbers.

## Requirements

- **Node.js** installed on your machine.
- **Jest** for running tests.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mayurjiyani/string-calculator-tdd.git
   ```
2. Navigate to the project directory:
   ```bash
   cd string-calculator-tdd
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

The project uses **Jest** for unit testing. To run the tests, use the following command:

```bash
npm test
```

This will run all the test cases ensuring the functionality of the String Calculator.

## Code Structure

- `StringCalculator.js`: The main logic for the String Calculator.
- `StringCalculator.test.js`: Test cases for the String Calculator, written following TDD principles.
