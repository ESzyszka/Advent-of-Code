const fs = require('fs');
const path = require('path');

const filePath = path.join('/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day9/input.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const input = data.split("\n");
    console.log(input);


    
});


