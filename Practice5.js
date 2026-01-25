let numbers = [10, 20, 30, 40, 50];

// Assume first element is largest
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number in array:", largest);
