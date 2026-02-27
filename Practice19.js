let user = {
    username: "admin",
    password: "1234"
};

console.log("username" in user);  // true
console.log(user.hasOwnProperty("email")); // false