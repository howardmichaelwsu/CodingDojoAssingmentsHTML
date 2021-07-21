var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];
//johns age
console.log(users[1].age);
//first object name
console.log(users[0].name);
//name and age of all users with for loop
for(var i = 0; i < users.length; i++) {
    console.log(users[i].name + "-" + users[i].age);
}