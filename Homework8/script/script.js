// work1
let numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

let simgleDigitNumber = [];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0 && numbers[i] < 10){
        simgleDigitNumber.push(numbers[i]);

    }
}
simgleDigitNumber.sort((a, b) => a - b);
console.log("Однозначные положительные числа в возрастающем порядке:",simgleDigitNumber);



let greaterOrEqual15 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 15) {
    greaterOrEqual15.push(numbers[i]);
  }
}
console.log("Числа больше или равны 15:", greaterOrEqual15);


let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log("Нечетные числа:",oddNumbers);


let indicesDivisibleByThree = [];
for (let i = 0; i < numbers.length; i++) {
  if (i % 3 === 0) {
    indicesDivisibleByThree.push(numbers[i]);
  }
}
console.log( "Значения, индекс которых кратен трем:",indicesDivisibleByThree);


let sumOfOddNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sumOfOddNumbers += numbers[i];
  }
}
console.log("Сумма нечетных чисел:", sumOfOddNumbers);


let sumOfEvenNumbers = 0;
sumOfOddNumbers = 0;  
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumOfEvenNumbers += numbers[i];
  } else {
    sumOfOddNumbers += numbers[i];
  }
}
let difference = Math.abs(sumOfEvenNumbers - sumOfOddNumbers);
console.log("Разница между суммой четных и нечетных чисел:", difference);