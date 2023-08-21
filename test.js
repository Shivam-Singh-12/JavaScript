function firstFunction(){
    varFrist = 2000;
    letFirst = 5000;

    console.log(varFrist);
    console.log(letFirst);
}
firstFunction();

function fourthFunction(){
    for(var i=0; i< 5; i++){
        console.log(i);
    }
    console.log("Value of i :", i);
}
fourthFunction();
// ///////////////////////////////////

try{
    document.write("Welcome To JavaScript")
    document.write(Null);
    console.log("No Error");
}
catch(err){
    console.log(err.message);
}

function isEven(){
    let a;
    a = document.getElementById("num").value;
    try{
        if((a%2) == 0){
            console.log("Even Number");
        } else{
            console.log("Odd number");
        }
    } catch{
        console.log("Error : " + msg);
    }
}

// ////////////////////////////////////////////
let firstArray = ["A", "B", "C", "D", "Shiva", 5, 7, 11];

// console.log("Checking the length of firstArray : " + firstArray.length);
// console.log("Element of index 5 : " + firstArray[5]);
// console.log("Element of index -1 : " + firstArray[-1]);

console.log("Iterating over element with old syntax : \n");
var i;
for(i=0; i<firstArray.length; i++){
    console.log("firstArray : ", firstArray[i]);
}
for(i of firstArray){
    console.log("firstArray :", i);
}
// //////////////////////////////////////////

let testScore = [40, 50, 60, 70, 80, 90];
function goodScore(score){
    if(score>=60){
        console.log(`Good Score is ${score}`);
    }
}
testScore.forEach(goodScore);
// /////////////////////////////////////////

// let add;

function sum(...nums){
    add = 0;
    for(let num of nums){
        add += num
    }
    return add;
}
let addition = sum(1, 2, 3, 4);
console.log(addition);
// ///////////////////////////////////////

let arr1 = [1, 2, 3, 10];
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));
// ////////////////////////////

let checkDestructuring = [20, 20, 30, 40];
let [a, b, c, d] = checkDestructuring;
console.log("check : \n");
console.log("Value of a : " + a);
console.log("Value of b : " + b);
console.log("Value of c : " + c);
console.log("Value of d : " + d);
// //////////////////////////////

let firstItem = {id: 1, name: 'Shiva', price: 1100};
console.log("firstItem : ", firstItem.name);
console.log(`first has a name of ${firstItem.name} and price of ${firstItem.price}`);
console.log(`first has a name of ${firstItem['name']} and price of ${firstItem['price']}`);
// ///////////////////////////////////////////

let USD_EUR = 2;
thirdItem = {
    id:1,
    name: 'OKOK',
    price: 1100,
    priceEUR: function () {return this.price * USD_EUR}
}
console.log(thirdItem.priceEUR());
// ///////////////////////////////////////////////////////

let fourthItem = new Object();

fourthItem.id = 4;
fourthItem.name = 'SHIVAM';
fourthItem.price = 500;
console.log(fourthItem.name);

delete fourthItem.price;
console.log(fourthItem);
// /////////////////////

let somefunction = ()=> this;
{
    console.log(somefunction());
}
// ///////////////////////////////
let myCar = {
    model: 'BMW',
    price: 700,
    made: 'India',
    printCarDetails(){
        console.log(`MADE : ${this.made}
        MODEL : ${this.model}
        PRICE : ${this.price}`);
    }
}
console.log('The My Car');
console.log(Object.keys(myCar));
console.log(Object.values(myCar));
console.log(Object.entries(myCar));

mynewCar = Object.create(myCar);
console.log("mynewCar", mynewCar);
myCar.printCarDetails();

let myNewObject = {
    firstwork : 9,
    secondWork : 'reading',
    thirdWork : 'playing',
    fourthWork : 'Eating'
}
let myObject = Object.assign(myCar, {'dailyRoutine': myNewObject});
console.log("1st myCar : ", myCar);
console.log("2st myObject : ", myObject);
// ////////////////////////////////////////////////////////////////

let items = [
    {name : "Shivam", price:11},
    {name : "Singh", price:21},
    {name : "Hello", price:51},
    {name : "JavaScript", price:101}
];
let names = [];
let prices = [];
for(let item of items){
    names.push(item.name);
    prices.push(item.price);
}
console.log("Name : ", names);
console.log("Price : ", prices);


// map()
let nameList = items.map(function (item){
    return item.name;
})
let priceList = items.map(function (item){
    return item.price;
})
console.log("nameList : ", nameList);
console.log("priceList : ", priceList);

// ES6 => Arrow Function
let nameListES6 = items.map(item => item.name)
let priceListES6 = items.map(item =>{
    return item.price
})
console.log("nameListES6 : ", nameListES6);
console.log("priceListES6 : ", priceListES6);

// Total
let total = 0;
for(let item of items){
    total += item.price
}
console.log("Total Price : ", total);

// reduce() method and reduce() used with variable
let totalinreduce = items.reduce((sum, item) => sum + item.price, 0)
console.log("Totalinreduce : ", totalinreduce);

// ////////////////////////////////////////////

const dupValues = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4];
const setofvalues = new Set(dupValues);
console.log("setofvalues : ", setofvalues);
// 
const uniqueValues = [...setofvalues];
console.log("uniqueValues : ", uniqueValues);
// 
function removeDup(dupValues) {
    return [...new Set (dupValues)];
}
console.log("removeDup : ", removeDup);
// 
const duplicates = [...new Set (dupValues)];
console.log("duplicates : ", duplicates);

// class in  javascript

function vehical (make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
}
let myVehical = new vehical("BMW", 201, 1001);
console.log("Is myVehical is a vehical", myVehical instanceof vehical);
// 
class MoterCycle extends vehical{
    constructor(make, model, price, seatHeight){
        super(make, model, price);
        this.seatHeight = seatHeight;
    }
}
let myBike = new MoterCycle("BMW", 201, 1001);
console.log("Is myVehical is a myBike", myVehical instanceof MoterCycle);
console.log("Is myVehical is a myBike", myVehical instanceof vehical);
// ////////////////////////////////////////////////////////////////////////////

// function as a first class object
let additions = function(a, b){
    return a+b;
}
let multiplication = function(a, b){
    return a*b;
}
let substraction = function(a, b){
    return a-b;
}
let division = function(a, b){
    return a/b;
}

function calculation(a, b, calculationType){
    return calculationType(a, b);
}

let output = calculation(10, 40, additions)
console.log("output : ", output);
let output1 = calculation(10, 40, multiplication)
console.log("output1 : ", output1);
let output2 = calculation(10, 40, substraction)
console.log("output2 : ", output2);
let output3 = calculation(10, 40, division)
console.log("output3 : ", output3);
// ////////////////////////////////////////////////

// Passing by value by reference
function passByvalueByreference(){
    let name = 'Shivam';
    let person = {name:"Jack", city: "India"};

    console.log('first Name :', name);
    console.log('Second Output :', person);
}
passByvalueByreference();
// /////////////////////////////////////////

let greet = new Function("console.log('Welcome Shivam !')");
greet();

// /////////////////////////////////////////

// function callback() , reduce() used with function

let newItems = [
    {name : "Shivam", price:11},
    {name : "Singh", price:21},
    {name : "Hello", price:51},
    {name : "JavaScript", price:101}
];
function getTotalPrice(newitems){
    return newitems.reduce((sum, item)=> sum + item.price, 0)
}
var totalcost = getTotalPrice(newItems);
console.log("getTotalPrice : ", totalcost);
// ///////////////////////////////////////////////////////////////

// closures
function counter(){
    let count = 0;
    function incrementCount(){
        return count +=1;
    }
    return incrementCount;
}
var countFn = counter();
console.log("first countFn : ", countFn);
console.log("Second countFn : ", countFn);
for(var i=0; i<=5; i++){
    console.log("countFn i=3 : ", countFn);
}
let anotherCountFn = counter();
console.log("another count first : ", anotherCountFn);
console.log("another count second : ", anotherCountFn);
console.log("countFn : ", countFn());

// closures loop
function myfunction(){
    setTimeout(() => {
        document.write('Hello Shivam');
        document.body.style.backgroundColor = "red"
    }, 10000);
    console.log("Hello will be displayed after 10 sec...");
}
myfunction();

function timeoutTest(){
    let i;
    for(i=0; i<=3; i++){
        setTimeout(() => {
            console.log("i : ", i);
        }, i*10000);
        // setTimeout(function(){
        //     console.log("i : ", i);
        // }, i*10000);
    }
}
timeoutTest();

function outerFunction(){
    const x = 10;
    function innerFunction(){
        const x = 20;
    }
    innerFunction();
}
