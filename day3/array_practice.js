//NULL ARRAYS: Creating a null array of specified dimentions 
//Array[➡️][⬇️]

rows = 10;
columns = 3;

const Array = [];

//Array[i] --> the first i index indicates a row ➡️
for (let i = 0; i < rows; i++){
    Array[i] = [];

    //Array[i][j] --> the second j index indicates a column ⬇️
    for (let j = 0; j< columns; j++){
        //Array[i][j] = null;                      //This is how you would fill every value with null
        Array[i][j] = (i * columns) + j +1 ;       //🟡 Filling the values of the array with numbers
    }
}
console.log(Array)

//DIAGONAL OPERATIONS:
console.log(Array.length)  //This will return the number of rows 

for (let i = 0; i< Array.length; i++ )

//NESTED ARRAYS: 


//ROTATE AN ARRAY:
//https://www.youtube.com/watch?v=wJJp6QLLXYE&ab_channel=ChirpingmermaidCodes

/*
I:
O:
C:
E:
*/