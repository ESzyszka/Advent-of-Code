//**************  Solutions for day 8  **************
/*
RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)
*/

//******************  Left Right instructions from input.txt  ******************
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
input.pop()

const LR = String(input[0])

console.log(LR)
//******************************************************************************




// Given data in 
const data = [
    ['LCJ', ['VPB', 'NKT']],
    ['LHN', ['DLF', 'GQV']],
    ['CRN', ['TGB', 'XCM']],
    ['TXR', ['JQL', 'JQL']],
    ['LJX', ['SPR', 'LLM']],
    ['AAA', ['SKP', 'MFC']],
    ['JSC', ['QPB', 'VCP']],
    ['KKG', ['BFT', 'NBS']],
    ['BCB', ['GRT', 'TLB']],
    ['GPA', ['SDK', 'MRM']],
    ['SKP', ['FDR', 'GGT']],
    ['GQV', ['BSJ', 'DGF']],
    ['CNT', ['FLM', 'TVQ']],
    ['RLL', ['BRB', 'CRH']],
    ['PPN', ['KCF', 'PSJ']],
    ['GGT', ['GCD', 'DMF']],
    ['NKT', ['TKS', 'CGP']],
    ['DMF', ['GPF', 'LCJ']]
  ];
  
  // Convert to hash table
  const hashTable = {};
  data.forEach(([key, values]) => {
    hashTable[key] = values;
  });
  
  // Display the hash table
 // console.log(hashTable["KPM"][0]);


 
  let index = 0;
  let fetched = '';
  
  while (index < LR.length && LR[index] !== ' ') {
    if (index === 0 && LR[index] == "R") {
        console.log(" Instruction: ", LR[index], "Fetched: ", hashTable["AAA"][1]);
        fetched = hashTable["AAA"][1];
        index++;
    } else if (index === 0 && LR[index] == "L"){
        console.log("Instruction: ", LR[index], "Fetched: ", hashTable["AAA"][0]);
        fetched = hashTable["AAA"][0];
        index++;
    }
    console.log(index,LR[index], fetched, hashTable[fetched]);
    if (LR[index] = "R"){
        fetched = hashTable[fetched][1]
    } else if (LR[index] = "L"){
        fetched = hashTable[fetched][0]
    }
   

    //console.log(LR[index]); //This will display each instruction letter R L R R 
    index++;
  }

  
  let start = hashTable["AAA"];


  let stop = hashTable["ZZZ"];

  //**************  nullish coalescing operator  **************
//LR = LR ?? 'LLRRRLLRLRRRLLRLRLRLRLRRRLRRLRRLRLLLRRLLRRLRRLRRLRRRLLLRRLRLRRRLRRRLRLRRLRRRLRLRRRLRLRLLLRLRRLRLRRLRRRLRLRRRLRRRLRRRLRRRLRLRRRLRRRLRLLRRLRLRLRRRLRRLRRRLRRRLRRRLRRRLLLLRRLLRLRRLRRLRRRLRRRLLLRRLRRLRLRRLRRRLRRLRLRRRLRLRRLLRLLRRLRLRRRLRRLRRLRLRRLLLRRRLRLRRRLRLRLLRLRLRRRLRLRLRRRLRRLRRLRRRLRRLLRRRR';
