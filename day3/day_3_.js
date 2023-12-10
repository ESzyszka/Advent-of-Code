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

Disclaimer:
For the day 3 challenge I have followed and analysed the solution provided here: https://www.youtube.com/watch?v=dok4MZ_cEyk&t=277s&ab_channel=frontendcoder
*/

const fs = require('fs');
const hasSymbol = (str) => {
    //? - "optional chaining" operator
    //str?.length, you will access length property of the str object, but if str is null or undefined no exception thrown
    if (str?.length && str.split("").find(x => isNaN(x) && x !== "."))
        return true
    return false
}
const { compileFunction } = require('vm');
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day3/input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    const input = data.split("\n").filter(n => n);
    let rows = input.length
    let columns = input[0].length

    let founds = [] //All the numbers that you found
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const n = "" + input[i][j] 
            //n here is each individual element of input 
            // Input: 467..114..
            // Output: 4 6 7 . . 1 1 4 . .
            //console.log(n)

            if (isNaN(n)) continue 
            //isNan - hecking if n is  a number 
            //parseInt() - 
            //isInteger() - 
            // == - 
            // === - 
            let num = n;
            while(++j < columns){
                if(Number.isInteger(parseInt(input[i][j]))) 
                num += input[i][j]
                else break;
        }

        //Check the top part
        const top = i === 0 ? "" : input[i-1].substring(j - num.length - 1, j +1)
        const btm = i === rows - 1 ? "" : input[i+1].substring(j- num.length - 1, j+1)
        const lft = input[i][j - num.length - 1] || "";
        const right = input[i][j] || "";
        //Log all of the numbers that you have found 
        console.log(num, top, btm, lft, right);

        if (hasSymbol(top) || hasSymbol(btm) || hasSymbol(lft) || hasSymbol(right))
            founds.push(Number(num))
    }
    }

    //console.log(input);
    console.log(founds.reduce((a,c) => a+c,0));
});





/*    
function findSymbolsAroundNumbers(matrix) {
    const SUMS = [];
  
    // Iterate through rows
    for (let i = 0; i < matrix.length; i++) {
      // Iterate through columns
      for (let j = 0; j < matrix[i].length; j++) {
        const currentChar = matrix[i][j]; //this is one character on the matrix
  
        // Check if the current character is a number
        if (!isNaN(parseInt(currentChar))) {
          // Check left and right positions
          const leftChar = j > 0 ? matrix[i][j - 1] : null;
          const rightChar = j < matrix[i].length - 1 ? matrix[i][j + 1] : null;
  
          // Check if there is a symbol to the left or right of the number
          if (/[^0-9\s."]/.test(leftChar) || /[^0-9\s."]/.test(rightChar)){
            // Add the symbol to the SUMS array
            SUMS.push(currentChar);
          }
        }
      }
    }
  
    return SUMS;
  }
  
  // Example usage
  const matrix = [
    " 867..114..",
    "...*36.....",
    "..35..633.",
    "......#..."
  ];
  
  const result = findSymbolsAroundNumbers(matrix);
  console.log(result); // Output: ['6', '*', '7']
  */