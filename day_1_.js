// *************  PART 1: Problem statement *************
/*

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
Consider dataArray from the file provided. What is the sum of all of the calibration values?

*/
//***********************************************



// processing the data
const fs = require('fs');

// Specify the path to your .txt file
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/input.txt';

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the file contents into an array of lines
    const dataArray = data.split('\n').map(line => line.trim());
    console.log("***************** PROBLEM 1 *****************")
    dataArray.pop(); // there was an indexing issue
    

    // Now you can work with 'dataArray' in your JavaScript code

    var sum = 0;
    var combinedNumbers = []; // Array to store the combined numbers e.g. First number 4 and last 7 --> 47 


    // Finding the first number in the array using: REGULAR EXPRESSION
    //  / / - this is a delimiter that marks beginning & end of REGULAR EXPRESSION
    //  \d - this symbolizes a digit 
    //  (?=) - POSITIVE LOOKAHEAD ASSERTION 

    // Your code that uses 'dataArray' should be here or within this callback
    for (let i = 0; i < dataArray.length; i++) {
        const entry = dataArray[i];
      
        // Find the first and last numbers in each entry
        let firstNumber = entry.match(/\d/); // Regular expression to find the first number
        let lastNumber = entry.match(/\d(?=\D*$)/); // Regular expression to find the last number
        
    
        if (firstNumber && lastNumber) {
            //console.log(`Entry ${i + 1}: First number: ${firstNumber[0]}, Last number: ${lastNumber[0]}`);
            let combined = parseInt(`${firstNumber[0]}${lastNumber[0]}`, 10); // Combine the first and last numbers
            combinedNumbers.push(combined); // Add the combined number to the array
            sum += combined;
    
        } else {
          console.log(`Entry ${i + 1}: No numbers found`);
        }
      }
    
      var sum = combinedNumbers.reduce((acc, num) => acc + num, 0);
    
      //console.log(combinedNumbers)
      //Checking the length of the array:
      console.log("Length of the array: ", dataArray.length)
      console.log("Input before combined: ", combinedNumbers[0])
      console.log("Example of a combined number: ", dataArray[0])
      console.log("Sum of all Combined Numbers:", sum);
});





// *************  PART 2: Problem statement *************
/*

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen

In this example, two and nine that are spelled in words should be considered as valid words. Adding these together produces 29.
Consider dataArray from the file provided. What is the sum of all of the calibration values? 

*/
//***********************************************



// Specify the path to your .txt file
const filePath2 = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/output.txt';


// Read the contents of the file
fs.readFile(filePath2, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the file contents into an array of lines
    const dataArray2 = data.split('\n').map(line => line.trim());

    console.log("***************** PROBLEM 2 *****************")

    // Display the resulting array
    //console.log('Array of Lines:');
    dataArray2.pop(); // there was an indexing issue
    //console.log(dataArray2.length);
   

    //STEP 1: This is modifiedArray where the array with changed names into numbers will be stored
    let modifiedArray = [];

    for (let i = 0; i < dataArray2.length; i++) {
        let currentEntry = dataArray2[i];
        let modifiedString = currentEntry.replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9');
        modifiedArray.push(modifiedString);
    }

    //STEP 2: Combining the numbers
    var sum = 0;
    var combinedNumbers2 = []; // Array to store the combined numbers e.g. First number 4 and last 7 --> 47 

    // Your code that uses 'dataArray2' should be here or within this callback
    for (let i = 0; i < modifiedArray.length; i++) {
        const entry = modifiedArray[i];
      
        let firstNumber = entry.match(/\d/); // Regular expression to find the first number
        let lastNumber = entry.match(/\d(?=\D*$)/); // Regular expression to find the last number
        
    
        if (firstNumber && lastNumber) {
            //console.log(`Entry ${i + 1}: First number: ${firstNumber[0]}, Last number: ${lastNumber[0]}`);
            let combined = parseInt(`${firstNumber[0]}${lastNumber[0]}`, 10); // Combine the first and last numbers
            combinedNumbers2.push(combined); // Add the combined number to the array
            sum += combined;
    
        } else {
          console.log(`Entry ${i + 1}: No numbers found`);
        }
      }
    
      var sum2 = combinedNumbers2.reduce((acc, num) => acc + num, 0);
    
      //console.log(combinedNumbers2)
      console.log("Sum of Combined Numbers 2:", sum2);
      //console.log(modifiedArray)

      //Saving the modifiedArray to a new file
        const outputFileName = 'modifiedArray.txt';
        const outputData = modifiedArray.join('\n'); // Join the array into a string with line breaks

        fs.writeFile(outputFileName, outputData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Data saved to ${outputFileName}`);
        }
});
});
