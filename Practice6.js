function findHCF(a, b) {
  let hcf = 1;

  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}


console.log(findHCF(36, 60));
