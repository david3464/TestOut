//String, Number Boolean, Null, Undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log('My name is ' + name + 'and I am ' + age + '.');

const hello = `My name is ${name} and I am ${age}.`;
console.log(hello);
console.log(hello.length);//udnerline and space count 1
console.log(hello.substring(1,9).toUpperCase());
console.log(hello.split(' '));
console.log(Array.isArray('hello'));


const s = 'Hello World!';
console.log(s.length);

const fruits = ['apples', 'oranges', 'pears'];
fruits [3] = 'grapes';
fruits.push ('mango');//add string to last one of arrays
fruits.pop();//delete the last one string

console.log(fruits);
console.log(fruits.indexOf('oranges'));

const person ={
    firstName: 'David',
    lastName: 'Chen',
    age: 30,
    hobbies: ['music', 'movies', 'sports'], 
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }

}
console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address:{city}} = person;
console.log(city);
console.log(firstName);

const todos = [
    {
    id: 1,
    text: 'Take Out Trash',
    isCompleted:true
    },
    {
    id: 2,
    text: 'Meeting with Boss',
    isCompleted: true
    },
    {
    id: 3,
    text: 'Denist Appointment',
    isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop
for(let i = 0 ; i <=10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While loop
let i=0;
while(i<=10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let i =0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
    console.log(todo.id);
    console.log(todo.isCompleted);
}

todos.forEach(function(todo){
    console.log(todo.text);
});