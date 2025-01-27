import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    // AAA
    // Arrange: Turn on the TV
    
    // Act: Press the Power Button
    // const result = max(2,1);

    // Assert: Verify TV is Off
    expect(max(2, 1)).toBe(2);
  })

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  })

  it('should return first argument if arguments is equal', () => {
    expect(max(1, 1)).toBe(1);
  })
});

describe('fizzBuzz', () => {
  it('should return fizz when argument is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');

    expect(fizzBuzz(6)).toBe('Fizz');

    expect(fizzBuzz(9)).toBe('Fizz');
  })

  it('should return buzz when argument is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');

    expect(fizzBuzz(10)).toBe('Buzz');

    expect(fizzBuzz(25)).toBe('Buzz');
  })

  it('should return fizzbuzz when argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');

    expect(fizzBuzz(30)).toBe('FizzBuzz');

    expect(fizzBuzz(45)).toBe('FizzBuzz');
  })

  it('should return argument when its not divisible by 3 and 5', () => {
    expect(fizzBuzz(1)).toBe('1');

    expect(fizzBuzz(13)).toBe('13');
  })
});

describe('factorial', () => {
  it('should return 1 if given 0', () => {
    expect(factorial(0)).toBe(1);
  })

  it('should return 1 if given 1', () => {
    expect(factorial(1)).toBe(1);
  })

  it('should return 2 if given 2', () => {
    expect(factorial(2)).toBe(2);
  })

  it('should return 6 if given 3', () => {
    expect(factorial(3)).toBe(6);
  })

  it('should return 24 if given 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should undefined if given a negetive number', () => {
    expect(factorial(-1)).toBeUndefined();
  });
})