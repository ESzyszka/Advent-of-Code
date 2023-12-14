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

| Name       | Description         | INPUT                                          | CODE           | OUTPUT                     |
| ---------- | ------------------- | ---------------------------------------------- | -------------- | -------------------------- |
| x.length() |                     |                                                |                |                            |
| x.map()    |                     |                                                |                |                            |
| x.trim()   | Remove white spaces | `let x = [ 'seeds:', '79', '14', '55', '13' ]` | `x.trim()`     |                            |
| parseInt() | String --> Integer  | `let x = [ 'seeds:', '79', '14', '55', '13' ]` | `x.parseInt()` | `[ Nan, 79, 14, 55, 13 ] ` |

### DataStructures: Arrays

## Destructing assignment in arrays

### DataStructures: Objects
