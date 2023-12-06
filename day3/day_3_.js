// *************  PART 1: Problem statement *************
/*

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

Sum up all numbers that are adjacent to a symbol, also diagonaly.
In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). 
Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

*/

// processing the data
const fs = require('fs');

// Specify the path to your .txt file
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day3/input.txt';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        // Use a regular expression to split the data whenever there's a pattern like "Game 1:"
        const dataArray = data.split(/Game \d+:/);

        // Remove empty entries
        filteredArray = dataArray.filter(entry => entry.trim() !== '');
        console.log(filteredArray)

    }
});

