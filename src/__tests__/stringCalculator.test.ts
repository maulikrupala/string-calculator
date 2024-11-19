import { add } from "../stringCalculator";

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('should handle any amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should support different delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add('-1,2')).toThrow('negative numbers not allowed -1');
  });

  it('should show all negative numbers in the exception message', () => {
    expect(() => add('-1,-2,3,-4')).toThrow('negative numbers not allowed -1,-2,-4');
  });

   it('should throw an exception for non-numeric input', () => {
    expect(() => add('1,2,three')).toThrow('invalid input: string is not allowed');
  });
});