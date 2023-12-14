# Advent of Code 2023

This repository contains my solutions to [ 2023 Advent of Code](https://adventofcode.com/).
This readme file also contains core JavaScript concepts that I have revised while solving the problems.
You can find extensive comments embeded in the code that will help understand key methods used such as: regular expressions, array manipulation and JavaScript specific methods such as isNaN(), hasSymbol() and more;

## Table of Contents

- [Loading files in JS](#loading-files-in-js)
- [Pre-processing](#pre-processing)

### Loading files in JS

```const fs = require('fs');
const filePath = '~/Desktop/AoC/Advent-of-Code/day5/input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    const input = data.split("\n");
    console.log(input);

});
```

### Pre-processing

`data.split("\n\n");`
