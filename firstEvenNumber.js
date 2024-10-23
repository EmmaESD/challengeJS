// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];
// findFirstEven(numbers); // 8

const pair = numbers.filter((v) => v % 2 == 0);

console.log(pair);

// OK //
