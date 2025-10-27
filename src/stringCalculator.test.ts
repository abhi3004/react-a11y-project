import { stringCalculator } from "./stringCalculator";
import { describe, expect, it } from 'vitest'

describe("stringCalculator", () => {
  it("should return 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the number for a single number input", () => {
    expect(stringCalculator("5")).toBe(5);
    expect(stringCalculator("-3")).toBe(-3);
  });

  it("should return the sum of two numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
    expect(stringCalculator("10,-5")).toBe(5);
  });

  it("should handle multiple numbers", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
    expect(stringCalculator("-1,-2,-3")).toBe(-6);
  });

  it("should ignore non-numeric values", () => {
    expect(stringCalculator("1,abc,2")).toBe(3);
    expect(stringCalculator("xyz,-1,2")).toBe(1);
  });
  
  it("should handle different delimiters", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
    expect(stringCalculator("4;5;6")).toBe(15);
  });
});