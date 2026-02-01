let n = 8;        
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}
