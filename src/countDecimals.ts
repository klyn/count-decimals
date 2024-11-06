import { getPrecision } from "get-precision";

/**
 * Return value of the countDecimals() function.
 */
type ReturnValue = number | undefined | never;

/**
 * Returns the number of whatever digits that are after the
 * decimal point in a number, as an integer.
 *
 * If the input is not a numerical value, it returns undefined.
 *
 * Please Note: This function does NOT return the actual value,
 * but the count of its digits. To get the actual floating-point
 * numbers, use `getPrecision()` from `get-precision` library.
 *
 * @example
 * // returns 2
 * countDecimals(1.23)
 *
 * @example
 * // returns 0
 * countDecimals(123)
 *
 * @param {number} x - Numerical input value
 * @returns {ReturnValue} - Integer, undefined or never, in case of an exception.
 */
export function countDecimals(x: number): ReturnValue {
  // - return undefined for anything that is not a number
  if (typeof x !== "number") {
    return undefined;
  }

  // - passing x to getPrecision() function to receive
  //   a string that represents the floating-point sectin
  //   of x.
  // - note: getPrecision(1.23) returns "0.23"
  //         getPrecision(123) returns "0"
  //         getPrecision(nonNumerical) returns undefined
  const precision = getPrecision(x);

  // - did we get an undefined for any reason?
  if (precision === undefined) {
    return undefined;
  }

  // - if precision is "0", we have a whole number so return
  //   a numerical 0.
  if (precision === "0") {
    return 0;
  }

  // - in order to extract the digits after the decimal point,
  //   we should:
  // - a) find the position of the "." in the precision string
  // - b) subtract the length of the precision string from the
  //      position of the decimal point
  // - c) subtract 1 because indexOf counts from 0
  const decimalPoint = precision.indexOf(".");

  // in theory at this point we should always have a decimal point
  // availble in the string representation. if we don't, there is
  // something wrong, somewhere.
  if (decimalPoint === -1) {
    throw new Error(`Can't find decimal point in ${precision}`);
  }

  // calculate and return
  return precision.length - decimalPoint - 1;
}
