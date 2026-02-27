let calculator = {
    num1: 10,
    num2: 5,
    add: function() {
        return this.num1 + this.num2;
    }
};

console.log("Sum:", calculator.add());