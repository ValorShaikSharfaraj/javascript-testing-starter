import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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
})