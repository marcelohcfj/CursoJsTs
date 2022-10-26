// let varA = 'A'; // B
//let varB = 'B'; // C
//let varC = 'C'; // A

//const varATemp = varA;
//varA = varB; // B
//varB = varC; // C 
//varC = varATemp; // B

//console.log(varA, varB, varC)
 


let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
