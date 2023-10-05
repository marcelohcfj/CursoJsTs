const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//   metodo concat
// const a3 = a1.concat(a2, [7, 8, 9], 'Marcelo Henrique Costa Ferreira Junior');

const a3 = [...a1, ...a2];

console.log(a3);