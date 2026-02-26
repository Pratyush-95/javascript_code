let person = {
    name: "Rahul",
    age: 22
};

// Add
person.city = "Delhi";

// Update
person.age = 23;

// Delete
delete person.name;
console.log(person);