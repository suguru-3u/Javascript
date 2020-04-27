//lecture : let and const
/*
//ES5
var a = 'John';
a = 'tanaka';
console.log(a);

//ES6
const b = 'nihon';
// b = 'amerikan';
console.log(b);
*/
/*
//ES5
function a(b){
  if (b){
    var namee = 'bbb';
    console.log(namee);
  }
}

a(true);

//ES6
function a(b){
  let name;
  if (b){
    name = 'aaa';
    console.log(name);
  }
}

a(true);
*/
//Lesson105********************************************************
//Block and IIFEs
/*
//ES6
{
  const a = 1;
  let b = 2;
}
console.log(a +b);

//ES5
(function(){
  var c = 3;
})();

console.log(c);
*/
//Lesson106**********************************************************
//Stiring
/*
//ES6
let firstnaem = 'suguru';
const yearr = 1995;
function calcAge(year){
  return 2016 - year;
}

//ES5
console.log(firstnaem + ' suguru ' + calcAge(yearr));

//Lesson106
console.log(`${firstnaem} ${calcAge(yearr)}`);

const n = `${firstnaem}`;
console.log(n.startsWith('s'));
console.log(n.endsWith('u'));
console.log(n.includes('s'));
console.log(`${firstnaem} `.repeat(5));
*/

//Lesson107**********************************************************
//Arrow function
/*
const years = [1990,1960,1994];

//ES5
var ages5 = years.map(function(el){
  return 2020 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index + 1} ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el,index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age} `;
});
console.log(ages6);
*/
//Lesson108********************************************************
//Arrow function2
/*
//ES5
var box5 = {
  color: 'green',
  position:1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click',function(){
      var str = 'This is ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}
box5.clickMe();
*/
/*
//ES6
const box6 = {
  color: 'green',
  position:1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click',() => {
      var str = 'This is ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
// box6.clickMe();
/*
const box66 = {
  color: 'green',
  position:1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click',() => {
      var str = 'This is ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box66.clickMe();
*/
/*
function Person(name){
  this.name = name;
}

//ES5
Person.prototype.myfriends5 =
function(friends){
  var arr = friends.map(function(el){
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['June','John','Jone'];
new Person('John').myfriends5(friends);

//ES6
Person.prototype.myfriends6 =
function(friends){
  var arr = friends.map(el =>
    `${this.name} is friends with ${el}`);
  console.log(arr);
}
new Person('John').myfriends5(friends);
*/
//Lesson109*******************************************************
// Destructuring
/*
//ES5
var john = ['John',26];
// var name = john[0];
// var age = john[1];

//ES6
const [name,age] = ['Jhon',26];
console.log(name);
console.log(age);

const obj = {
  a:'john',
  b:'Smith'
}
console.log(obj.a);

function aaa(year){
  const age = new
  Date().getFullYear() - year;
  return [age,65 - age];
}
const [age2,retirement] =
aaa(1990);
console.log(age2);
console.log(retirement);
*/
//Lesson110**********************************************************/*
// Arrars
//
// const boxes =
// document.querySelectorAll('.box');
//
// //ES5
// var boxesArrs5 =
// Array.prototype.slice.call(boxes);
// boxesArrs5.forEach(function(cur){
// cur.style.backgroundColor ='dodgerblue';
// });
//
//
// //ES6
// const boxesArrs6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
/*
for (var i = 0; i < boxesArrs5.length; i++){
  if (boxesArrs5[i].className === 'boxblue'){
    continue;
  }
  boxesArrs5[i].textContent = 'I cheaged to blue!';
}
*/
/*
//ES6
for (const cur of boxesArrs6){
  if (cur.className.includes('blue')){
    continue;
  }
  cur.textContent = 'I cheaged to blue!';
}

//ES5
var ages = [12,17,8,29,30,80];

var full = ages.map(function(cur){
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
*/
//Lesson111*******************************************************

const question = new Map();
question.set('question','what ?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2020');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer');
question.set(false,'Tyr again');

console.log(question.get('question'));


if(question.has(4)){
  // question.delete(4);
}
// question.clear;

for (let [key,value] of question.entries()){
  if (typeof(key) === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Answer please'));
console.log(question.get(ans === question.get('correct')));

//Lesson115********************************************************
// Classes

var Person5 = function(name,year,job){
  this.name = name;
  this.year = year;
  this.job = job;
}

Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear - this.year;
  console.log(age);
}

var john5 = new Person5('John',1990,'teaher');


//ES6
class Person6 {
  constructor (name,year,job){
    this.name = name;
    this.year = year;
    this.job = job;
  }
  calculateAge(){
    var age = new Date().getFullYear - this.year;
    console.log(age);
  }
  static greeting(){
    console.log('Hey there!');
  }
}

const john6 = new Person6('John',1990,'teaher');

Person6.greeting();


//Lesson116******************************************************
Inheritance

//ES5
var Person5 = function(name,year,job){
  this.name = name;
  this.year = year;
  this.job = job;
}

Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear() - this.year;
  console.log(age);
}
var Athlete5 = function(name,year,job,olymicGames,medals){
  Person5.call(this,name,year,job);
  this.olymicGames = olymicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
var johnAthlete5 = new Athlete5('John',1990,'swimmer',3,10);

johnAthlete5.calculateAge();

ES6
class Person6 {
  constructor (name,year,job){
    this.name = name;
    this.year = year;
    this.job = job;
  }
  calculateAge(){
    var age = new Date().getFullYear() - this.year;
    console.log(age);
  }
}

class Athlete6 extends Person6{
  constructor(name,year,job,olymicGames,medals){
    super(name,year,job);
    this.olymicGames = olymicGames;
    this.medals = medals;
  }
  wonMedal(){
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John',1990,'swimmer',3,10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

//Lesson118******************************************************

class Element {
    constructor(name,buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear,area,numTrees) {
        super(name,buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}


function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}


function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
