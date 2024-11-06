# countDecimals

Counts the number of decimal places in a number. It accepts a value of type `number` and returns an integer value, indicating the number of decimal places -- 0 for whole numbers. In case of an error it returns `undefined` or throws an exception.

## Installation

**NPM**

```
npm install count-decimals
```

## Import

**Node**

```
import { countDecimals } from "count-decimals";
```

## Examples

```
countDecimals(123); // returns 0
countDecimals(1.23); // returns 2
countDecimals(1.23e7); // returns 0
countDecimals(1.23e-7); // returns 9
countDecimals(123.456e-3); // returns 6
```
