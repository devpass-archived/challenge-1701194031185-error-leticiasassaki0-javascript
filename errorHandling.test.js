const divideNumbers = require('./errorHandling');

test('Divide two numbers', () => {
  const result = divideNumbers(10, 2);
  expect(result).toBe(5);
});

test('Handle division by zero', () => {
  expect(() => divideNumbers(10, 0)).toThrow('Division by zero is not allowed');
});

test('Handle invalid input', () => {
  expect(() => divideNumbers(10, 'a')).toThrow('Invalid input');
});