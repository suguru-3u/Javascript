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
//Lesson110************************************************************
// Arrars

const boxes =
document.querySelectorAll('.box');

//ES5
var boxesArrs5 =
Array.prototype.slice.call(boxes);
boxesArrs5.forEach(function(cur){
cur.style.backgroundColor ='dodgerblue';
});


//ES6
const boxesArrs6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
/*
for (var i = 0; i < boxesArrs5.length; i++){
  if (boxesArrs5[i].className === 'boxblue'){
    continue;
  }
  boxesArrs5[i].textContent = 'I cheaged to blue!';
}
*/

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
