# Tea Cake Package
This npm package provides a few handy mathematical utility functions.

## Installation
To install this package, run the following command in your terminal:

```
npm install @tangten/tea-cake
```

## Usage
Import the desired functions from the package:

```
const { nthRt, isEven } = require('@tangten/tea-cake');
```

### nthRt(n)
Calculates the nth root of a number.

- Argument
n (number): The number for which to calculate the nth root.

- Returns
(number): The nth root of n.

- Example
```
const fourthRootOf16 = nthRt(4); // fourthRootOf16 will be 2
```

### isEven(n)
Determines whether a number is even.

- Argument
n (number): The number to check.

- Returns
(boolean): true if n is even, false otherwise.

- Example
```
const isFourEven = isEven(4);   // isFourEven will be true
const isFiveEven = isEven(5);   // isFiveEven will be false
```

Let me know if you have any other functions or specific details you'd like to include in your README!

 
  
