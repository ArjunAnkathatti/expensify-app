const person = {
    name: 'Arjun',
    age: 25,
    location: {
        city: 'Columbia',
        temp: 45
    }
};

// const {name = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadepphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in  ${state}.`);