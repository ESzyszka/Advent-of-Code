# Advent of Code 2023

2023 - Advent of code challenge

Core JavaScript concepts revised:

### Loading files in JS

````const fs = require('fs');
const filePath = '~/Desktop/AoC/Advent-of-Code/day5/input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    const input = data.split("\n");
    console.log(input);

});```

### Processing the input


```data.split("\n\n");```
````
