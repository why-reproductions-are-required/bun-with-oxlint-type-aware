import { expect, test, describe } from "bun:test";
import { add, greet, isEven } from "./index";

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});

describe("greet", () => {
  test("returns a greeting", () => {
    expect(greet("Bun")).toBe("Hello, Bun!");
    expect(greet("World")).toBe("Hello, World!");
  });
});

describe("isEven", () => {
  test("checks if number is even", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});
