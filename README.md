# Advent of Code 2023

This repository contains my solutions to [ 2023 Advent of Code](https://adventofcode.com/).
This readme file also contains core JavaScript concepts that I have revised while solving the problems.
You can find extensive comments embeded in the code that will help understand key methods used such as: regular expressions, array manipulation, destructing array assignment and JavaScript specific methods such as isNaN(), hasSymbol() and more;

## Table of Contents

- [Loading files in JS](#loading-files-in-js)
- [Pre-processing](#pre-processing)
- [Arrays](#Arrays)

### Loading files in JS

```const fs = require('fs');
const filePath = '~/Desktop/AoC/Advent-of-Code/day5/input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    const input = data.split("\n");
    console.log(input);

});
```

### Pre-processing

If there are spaces like this in your input.txt file and you want to separate them based on the empty lines you can use the following code where input[0] will log to the console:

```
--------------  INPUT:  --------------
seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15
```

```
--------------  CODE:  --------------
const fs = require('fs');
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day5/input.txt';


fs.readFile(filePath, 'utf8', (err, data) => {

    const input = data.split("\n\n"); //data.split("\n\n") --> This is very useful when you want to split the input data which

    console.log(input[0]);

});
```

```
--------------  OUTPUT:  --------------
seeds: 79 14 55 13
```

### Methods

| Name         | Description                 | INPUT                              | CODE                                | OUTPUT             |
| ------------ | --------------------------- | ---------------------------------- | ----------------------------------- | ------------------ |
| x.length()   |                             |                                    |                                     |                    |
| x.map()      |                             |                                    |                                     |                    |
| x.trim()     | Remove white spaces         | `let x = [ 'seeds:', '79', '14' ]` | `x.trim()`                          |                    |
| parseInt()   | String --> Integer          | `let x = [ 'seeds:', '79', '14' ]` | `parseInt(x)`                       | `[ Nan, 79, 14 ] ` |
| .filter()    |                             | `let x = [NaN, 79, 14, 55, 13]`    | `x.filter(i => !isNaN(i))`          | `[ 79, 14 ] `      |
| .forEach()   |                             | `const x = [1, 2, 3, 4, 5]`        | `x.forEach( (i) => console.log(i))` | `1,2,3,4,5`        |
| typoeof      | Returns varible type        | `let myVariable = "LR";`           | `typeof myVariable;`                | `string`           |
| setTimeout() | Call back function          | `let myVariable = "LR";`           | `typeof myVariable;`                | `string`           |
| String()     | Turns into a string         | `input = x `                       | `String(input)`                     | `"x"`              |
| .at()        | Return charater at an index | `const alphabet = "abcd"`          | `alphabet.at(1)`                    | `"b"`              |
| .substring() | Return a substring          | `const alphabet = "abcdddd"`       | `alphabet.substring(3,6);`          | `"dddd"`           |
| .slice()     | Cuts & returns right str    | `let word = "Yuto Kimura"`         | `word.slice(1)`                     | `uto Kimura`       |

### Operators

| Name | Description         | INPUT               | CODE               | OUTPUT       |
| ---- | ------------------- | ------------------- | ------------------ | ------------ |
|      |                     |                     |                    |              |
| +=   | plus eqaul operator | `let name = "Sam";` | `name += " Blue";` | `"Sam Blue"` |

### JS concepts

| Name                    | Description                         | INPUT                       | CODE               | OUTPUT       |
| ----------------------- | ----------------------------------- | --------------------------- | ------------------ | ------------ |
| concatenate             | adds two things                     | `let A = "A" let B = "B"`   | `A + B`            | `"AB"`       |
| +=                      | plus eqaul operator                 | `let name = "Sam";`         | `name += " Blue";` | `"Sam Blue"` |
| template string         |                                     | `This is a template string` | `name += " Blue";` | `"Sam Blue"` |
| reference vs value      |                                     | ``                          | ``                 | ``           |
| == vs ===               |                                     | ``                          | ``                 | ``           |
| immutability            |                                     | ``                          | ``                 | ``           |
| asynchronous            | Multiple processes at the same time | ``                          | ``                 | ``           |
| async / await           |                                     | ``                          | ``                 | ``           |
| try / catch             |                                     | ``                          | ``                 | ``           |
| export default function |                                     | ``                          | ``                 | ``           |

#### nullish coalescing operator

#### Higher order functions

- Functions that take in or return functions

### Arrow functions

- You cannot use them as object constructors

### Regular expressions

This regex returns the number from a string:

INPUT: "200px" <br>
OUTPUT: "200" <br>

````export function getBoxWidth(value) { <br>
    return value.match(/\d+/g); <br>
}```

### DataStructures: Arrays

## Destructing assignment in arrays

### DataStructures: Objects
````
