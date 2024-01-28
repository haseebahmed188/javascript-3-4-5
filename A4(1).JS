{
let number = parseInt(prompt("Enter a number:"));
console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
console.log(`${number} x ${i} = ${number * i}`);}
}
generateMultiplicationTable();