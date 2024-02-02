
// *************  PART 1: Problem statement *************
/*

======  WINNING  =====   ======== HAVE ========
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
======================   ======================
*/

const fs = require('fs');
const readline = require('readline');
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day4/input.txt';

//STEP 1: Finding what are the same numbers of LEFT & RIGHT 
function findCommonNumbers(array1, array2) {
    //.filter() - creates a new array that satisfies the confition inside
    // =>       - arrow function for anonymous functions in JS 
    const commonNumbers = array1.filter(number => array2.includes(number));
    return commonNumbers;
}

let summingPoints = 0;

function countingPoints(inputLength) {
    if (inputLength >= 0 && inputLength <= 24) {
        summingPoints += Math.pow(2, inputLength - 1);
    } else {
        console.log("Invalid input length");
    }
}

// STEP 2: Readstream helps read one line at the time of input.txt files
const readStream = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});

// STEP 3: organize data: .split(/\s+/) --> split if there is one " " empty space or more " "
readStream.on('line', (line) => {
    const leftArray = line.split(':')[1].split('|')[0].trim().split(' ').map(Number);
    const rightArray = line.split(':')[1].split('|')[1].trim().split(/\s+/).map(Number);
    console.log(leftArray, rightArray);
    const commonNumbers = findCommonNumbers(leftArray, rightArray);
    countingPoints(commonNumbers.length);
    console.log("Numbers in common", commonNumbers);
});

//STEP 4: Move the overall sum logging inside the 'close' event
readStream.on('close', () => {
    console.log("Overall sum: ", summingPoints);
});




