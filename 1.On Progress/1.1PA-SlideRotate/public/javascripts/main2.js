var animals = [
    {name: 'Fluffykins', species:'rabbit'},
    {name: 'Caro', species:'dog'},
    {name: 'Hamilton', species:'dog'},
    {name: 'Harold', species:'fish'},
    {name: 'Ursula', species:'cat'},
    {name: 'Jimmy', species:'fish'},
];
var dogs1 = []
for (var a = 0; a < animals.length; a++) {
    if (animals[a].species === 'dog')
    dogs1.push(animals[a]);
}
console.log(dogs1);

var isDog = function(animals) {
    return animals.species === 'dog'
}
var dogs2 = animals.filter(isDog)

console.log(dogs2);

var animals = [
    {name: 'Fluffykins', species:'rabbit'},
    {name: 'Caro', species:'dog'},
    {name: 'Hamilton', species:'dog'},
    {name: 'Harold', species:'fish'},
    {name: 'Ursula', species:'cat'},
    {name: 'Jimmy', species:'fish'},
];
var name1 = []
for (var b=0; b<animals.length; b++) {
    name1.push(animals[b].name)
}
console.log(name1)
 
var name2 = animals.map((c) =>c.name + ' is a ' + c.species)
console.log(name2)

var orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325},
]
var totalamount1 = 0
for (var d = 0; d < orders.length; d++){
    totalamount1 += orders[d].amount
}
console.log(totalamount1)

var totalamount2 = orders.reduce((sum,order)=>{
    console.log("hello",sum, order)
    return sum+order.amount},0)
console.log(totalamount2)


console.log('test')
