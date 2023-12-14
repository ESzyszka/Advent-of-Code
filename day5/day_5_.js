// *************  PART 1: Problem statement *************
/*

seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
*/
//***********************************************

//This is a solution from: https://github.com/piman51277/AdventOfCode/blob/master/solutions/2023/5/index.js
//I am using here two alternative solutions for educational purposes 

const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
input.pop()

const seeds = input[0].replace("seeds: ", "").split(" ").map(Number);

//find the index of these keywords
const splits = [
  input.indexOf("seed-to-soil map:"),
  input.indexOf("soil-to-fertilizer map:"),
  input.indexOf("fertilizer-to-water map:"),
  input.indexOf("water-to-light map:"),
  input.indexOf("light-to-temperature map:"),
  input.indexOf("temperature-to-humidity map:"),
  input.indexOf("humidity-to-location map:"),
  input.length + 1
]

//split the input into the different maps
const maps = []

for (let i = 0; i < splits.length - 1; i++) {
  const firstIndex = splits[i];
  const secondIndex = splits[i + 1] - 1;

  const lines = input.slice(firstIndex + 1, secondIndex);
  const split = [];

  for (const line of lines) {
    split.push(line.split(" ").map(Number));
  }
  maps.push(split);
}

console.log(maps)

//for each seed
let locations = []
for (const seed of seeds) {

  let loc = seed
  console.log(loc)
  for (let i = 0; i < maps.length; i++) {
    for (let assignment of maps[i]) {
      const [to, from, range] = assignment

      if (loc >= from && loc <= from + range - 1) {
        loc = to + (loc - from)
        break;
      }
    }
  }

  console.log("...");

  locations.push(loc)
}

console.log(locations.join(" "))
console.log(Math.min(...locations));




//***************  ANALYZE WHY THIS SOLUTION RETURNS INCORRECT  ********************************
/*
const fs = require('fs');
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day5/input.txt';

const mapXtoY = (mapping, X) => {
    let Y = -1;
    for (const row of mapping) {
      const [end, start, count] = row.split(" ").map(Number);
      if (X >= start && X <= start + count) {
        Y = end - start + X;
        break;
      }
    }
    return Y === -1 ? X : Y;
  };

fs.readFile(filePath, 'utf8', (err, data) => {

     //Spliting data based on empty line
    const input = data.split("\n\n");

    //**************************  Extracting the data from input.txt  **************************************
    const seeds = input[0].split(" ").map((x) => parseInt(x.trim())).filter(x => !isNaN(x));

    
    //INPUT[1]:
    //seed-to-soil map:
    //50 98 2
    //52 50 48 

    //OUTPUT:
    //[ '50 98 2', '52 50 48' ]
   

    let [text, ...seedToSoil] = input[1].split("\n"); // ...seedToSoil --> this means the rest of the code
    let[, ...soilToFertilizer] = input[2].split("\n");
    let[, ...fertilizerToWater] = input[3].split("\n");
    let[, ...waterToLight] = input[4].split("\n");
    let[, ...lightToTemperature] = input[5].split("\n");
    let[, ...temperatureToHumidity] = input[5].split("\n");
    let[, ...humidityToLocation] = input[5].split("\n");

    //Logging sample inputs 
    console.log(input[3], fertilizerToWater);
    //********************************************************************************************************


    //Create mapings 

    let res = seeds
        .map((n) => mapXtoY(seedToSoil, n ))
        .map((n) => mapXtoY(soilToFertilizer, n ))
        .map((n) => mapXtoY(fertilizerToWater, n ))
        .map((n) => mapXtoY(waterToLight, n ))
        .map((n) => mapXtoY(lightToTemperature, n ))
        .map((n) => mapXtoY(temperatureToHumidity, n ))
        .map((n) => mapXtoY(humidityToLocation, n ));

    console.log(Math.min(...res));

});
*/