// *************  PART 1: Problem statement *************
/*

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

We have the following amount of cubes
12 red
13 green 
14 blue 

1) determine given an input file which games are possible
2) Sum up the ID's of all of the games 

*/
//***********************************************

const fs = require('fs');

// Declare filteredArray globally
let filteredArray = [];
// Define the indices of valid draws
let validIndex = [];
//Sum of valid indices
let sum = 0;

// Specify the file path
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day2/input.txt';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        // Use a regular expression to split the data whenever there's a pattern like "Game 1:"
        const dataArray = data.split(/Game \d+:/);

        // Remove empty entries
        filteredArray = dataArray.filter(entry => entry.trim() !== '');

        // This is how a sample array entry looks like
        //console.log('Data in the form of Array:', filteredArray[10]);

        // Now you can use filteredArray outside of this callback
        // For example, you can call a function here that uses filteredArray
        processFilteredArray();
        console.log(validIndex);

        for (let i = 0; i < validIndex.length; i++) {
            sum += validIndex[i];
          }

          console.log("Sum using loop:", sum);
    }
});


// Function that uses filteredArray
function processFilteredArray() {
    // Your logic using filteredArray goes here
    console.log('Filtered Array globally:', filteredArray[1]);

    // Move the loop inside the function
    for (let i = 0; i < filteredArray.length; i++) {
        const inputString = filteredArray[i]; //This separates the array into input strings
        //console.log(inputString);

        //For loop for judging
        const draws = inputString.split(';');
        console.log(draws)

         const isDrawValid = draws.every(draw => {
        const counts_green = draw.match(/\d+ green/g);
        const counts_red = draw.match(/\d+ red/g);
        const counts_blue = draw.match(/\d+ blue/g);

        // Calculate the total count of color
        const greenCount = counts_green ? counts_green.reduce((sum, count) => sum + parseInt(count), 0) : 0;
        const redCount = counts_red ? counts_red.reduce((sum, count) => sum + parseInt(count), 0) : 0;
        const blueCount = counts_blue ? counts_blue.reduce((sum, count) => sum + parseInt(count), 0) : 0;

        // Check if draw is valid
        return greenCount <= 13 && redCount <= 12 && blueCount <= 14;
    });

    if (isDrawValid) {
        console.log("Green count is valid ✅ in all draws.");
        validIndex.push(i+1);
    } else {
        console.log("Count invalid ❌ in at least one draw.");
    }





    }
}




/*


const inputString = "1 red, 1 blue, 14 green; 10 green, 12 red, 1 blue; 10 red, 2 green, 1 blue; 1 blue, 3 green, 14 red; 3 red, 2 blue, 13 green; 1 blue, 3 green, 13 red";

// Split the input string into individual draws using semicolon as the delimiter
const draws = inputString.split(';');
console.log(draws)

const isDrawValid = draws.every(draw => {
    const counts_green = draw.match(/\d+ green/g);
    const counts_red = draw.match(/\d+ red/g);
    const counts_blue = draw.match(/\d+ blue/g);

    // Calculate the total count of color
    const greenCount = counts_green ? counts_green.reduce((sum, count) => sum + parseInt(count), 0) : 0;
    const redCount = counts_red ? counts_red.reduce((sum, count) => sum + parseInt(count), 0) : 0;
    const blueCount = counts_blue ? counts_blue.reduce((sum, count) => sum + parseInt(count), 0) : 0;

    // Check if draw is valid
    return greenCount <= 13 && redCount <= 12 && blueCount <= 14;
});

if (isDrawValid) {
    console.log("Green count is valid in all draws.");
} else {
    console.log("Count invalid in at least one draw.");
}

*/