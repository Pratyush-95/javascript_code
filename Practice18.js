let car = {
    brand: "BMW",
    model: "X5",
    year: 2023
};

for (let key in car) {
    console.log(key + " : " + car[key]);
}