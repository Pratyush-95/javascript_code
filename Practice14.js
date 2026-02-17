// Program to print odd place and even place digits

let number = 12345;
let numStr = number.toString();

for (let i = 0; i < numStr.length; i++) {
    if ((i + 1) % 2 === 0) {
        console.log("Even place digit:", numStr[i]);
    } else {
        console.log("Odd place digit:", numStr[i]);
    }
}
