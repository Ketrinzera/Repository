const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num > 0) {
    positiveCount++; 
  } else if (num < 0) {
    negativeCount++; 
  } else {
    zeroCount++; 
  }
}

console.log(`Позитивних чисел: ${positiveCount}`);
console.log(`Негативних чисел: ${negativeCount}`);
console.log(`Нульових чисел: ${zeroCount}`);