import { countDecimals } from "../countDecimals";

test("countDecimals(x) should only accept numerical input", () => {
  // fail cases
  expect(countDecimals(undefined as any)).toEqual(undefined);
  expect(countDecimals(null as any)).toEqual(undefined);
  expect(countDecimals(true as any)).toEqual(undefined);
  expect(countDecimals("123" as any)).toEqual(undefined);
  expect(countDecimals([] as any)).toEqual(undefined);
  expect(countDecimals({} as any)).toEqual(undefined);
  expect(countDecimals((() => false) as any)).toEqual(undefined);
  // success cases
  expect(typeof countDecimals(123)).toBe("number");
  expect(typeof countDecimals(1.23)).toBe("number");
  expect(typeof countDecimals(1.23e7)).toBe("number");
  expect(typeof countDecimals(1.23e-7)).toBe("number");
  expect(typeof countDecimals(-12.123e-1)).toBe("number");
});

test("countDecimals(x) should return correct values", () => {
  expect(countDecimals(123)).toEqual(0);
  expect(countDecimals(1.23)).toEqual(2);
  expect(countDecimals(1.23e7)).toEqual(0);
  expect(countDecimals(1.23e-7)).toEqual(9);
  expect(countDecimals(123.456e-3)).toEqual(6);
});
