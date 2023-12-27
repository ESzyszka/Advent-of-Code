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

console.log(typeof LR, LR)
//******************************************************************************




// Given data in 
const data = [
    ['VTM', ['VPB', 'NKT']],
    ['LHN', ['DLF', 'GQV']],
    ['CRN', ['TGB', 'XCM']],
    ['TXR', ['JQL', 'JQL']],
    ['LJX', ['SPR', 'LLM']],
    ['HSH', ['SKP', 'MFC']],
    ['JSC', ['QPB', 'VCP']],
    ['KKG', ['BFT', 'NBS']],
    ['BCB', ['GRT', 'TLB']],
    ['GPA', ['SDK', 'MRM']],
    ['CNJ', ['FDR', 'GGT']],
    ['GQV', ['BSJ', 'DGF']],
    ['CNT', ['FLM', 'TVQ']],
    ['RLL', ['BRB', 'CRH']],
    ['PPN', ['KCF', 'PSJ']],
    ['TFL', ['GCD', 'DMF']],
    ['KPM', ['TKS', 'CGP']],
    ['FBN', ['GPF', 'LCJ']]
  ];
  
  // Convert to hash table
  const hashTable = {};
  data.forEach(([key, values]) => {
    hashTable[key] = values;
  });
  
  // Display the hash table
  console.log(hashTable["KPM"][0]);


 
  let index = 0;
  
  while (index < LR.length && LR[index] !== ' ') {
    console.log(LR[index]);
    index++;
  }

  
  let start = hashTable["AAA"];


  let stop = hashTable["ZZZ"];

  //**************  nullish coalescing operator  **************
//LR = LR ?? 'LLRRRLLRLRRRLLRLRLRLRLRRRLRRLRRLRLLLRRLLRRLRRLRRLRRRLLLRRLRLRRRLRRRLRLRRLRRRLRLRRRLRLRLLLRLRRLRLRRLRRRLRLRRRLRRRLRRRLRRRLRLRRRLRRRLRLLRRLRLRLRRRLRRLRRRLRRRLRRRLRRRLLLLRRLLRLRRLRRLRRRLRRRLLLRRLRRLRLRRLRRRLRRLRLRRRLRLRRLLRLLRRLRLRRRLRRLRRLRLRRLLLRRRLRLRRRLRLRLLRLRLRRRLRLRLRRRLRRLRRLRRRLRRLLRRRR';
