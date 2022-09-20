// variables
let name = 'shankar'
console.log(name);
// var cant be keyword,should be meaningful,cannot
//start with number ex1name
let firstName = "shankar",lastname="Vanam";
console.log(lastname);

// constants
//sometimes we doesn't want to change our variables.
const interestRate = 0.3;

//premitive types.
//string ,bool,number ,undefined
let myname = undefined; //default takes undefined
let age = null;

//java script is dynamically typed i.e the type of variable 
// can be changed at runtime

//reference types
//objects, array ,functions
let person = {
 name: 'shankar',
 age: '30'
}; //object literal adding key value pair.
//dot notation
person.name = 'sreenu';

//bracker notation
person["name"] = "hi" //useful when selected by user in runtime
console.log(person);

//array length in javascript or dynamic
let arr = [1,2,'hi'];
arr[3]=4;
console.log(arr);

//functions

function greet(name,lastname){
    console.log("hello"+name+lastname);
}
greet("shankar");

function poweri(val){
    return val*val;
}
console.log(poweri(2));

//operators + - % / ** *
let x=10;
let y =3;
console.log(x**y);
//incriment++,decriment
console.log(x++);
console.log(++x);
// assignment operators.+ - % / ** * short hand
let z=10;
z += 5;
z *= 5;
// comparison <,> <=,>=, ===,!==,

// === -> strick equality  same type and value

// 1==1 -> loose equality
console.log(1==true);

//terinary operator
let points = 5;
let pass = points<=5?'fail':'pass';
console.log(pass);

console.log(0 || null);
// logical and (&&)
// logical ||

// Not ! false -> true

//falsy // undefined,0,null,false,'',NaN not a number

//bitwise operator
// or |,&

//operator presdence
function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
    return 0,1
}
let s= 2+3*4;
console.log(s)
let a = 'red';
let b = 'blue';
a,b = swap(a,b)
console.log(a,b)

// control flow
let hour = 0;
if(hour>=6 && hour<=12){
    console.log("good morning");
}
else{
    console.log("not ");
}
// switch case
let role = 'guest';
switch(role){
    case 'guest':
        console.log("inside guest");
        break;
    default:
        console.log("default");
}
// for loop
 for(let i=0;i<5;i++){
    console.log(i);
 }
 // while
let i=0;

while(i<5){
   if(i%2==0) console.log(i);
   i++;
}
// Do while runs atleast once

 i = 0;

do{
    if(i%2!==0) console.log(i);
    i++;
}while(i<=5);

// for in

for(let  key in person ){
    console.log(person[key]);
}

const as = [1,2,3];
for(let i in arr){
    console.log(as[i]);
}
// for-of
for(let val of as){
    console.log(val);
}

function maxi(a,b){
    if(a>=b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maxi(1,2))


function speed(val){
    if(val<=74){
        return 'OK';
    }
    else {
         let temp = val-75;
         if(temp%5===0){
            return temp/5;
         }
         else{
            temp = temp%5
            return (val-temp-75)/5;
         }

    }
}
console.log("point",speed(90))


function star(val){
    let pat='';
    for(let i=0;i<val;i++){
        
        for(let j=0;j<i+1;j++){
            pat=pat+'*';
        }
        
        console.log(pat);
        pat = '';
    }
}
star(3)

// javaScript style of oops,// factory functions
function createCircle(radius,x,y){
 return  {
    radius:radius,
    location:{
        x:x,
        y:y
    },
    isVisible:false ,
    // draw method
    draw(){
        console.log("drawing circle");
    }
}
}

const obj = createCircle(1,1,1);
console.log(obj);
obj.draw()

// pascal notation:
// camel notaion:
// constructor function
// this referes to the current object

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const circle = new Circle(1);
circle.draw()

// dynamic nature of objects.
// we can add properties dynamically 

const circles ={
    radius:1
}
circle.draw =  function() {}
delete circle.radius;
console.log(circles);

// constructor property
// objects in javascript have property called constructors


//function are objects in javascript

// let x = {} -> x= new Object()

const nre = new Function('vals',`this.res=1;`);

const circle2 = new Circle(1);
// Circle.call({},19);
// Circle.apply({},[1,2,3]);


// premetives are copied by value
// obj are copied by reference
for(let key in Object.keys(circle)){
    console.log(key);
}
for(let entry of Object.entries(circle)){
    console.log(entry);
}
// cloning a object
//const another = Object.assign({'radius':'set'},circle);
//console.log(another);
// -> spread operater
 const another = {...circle};

 //garbage collection
 //variables are consonents no longer in use or dellocated from memory

//math
 console.log(Math.random());
 console.log(Math.max(1,2,2,3));
 Math.ceil(2.2)

//string primitive is internally with string object
const message = 'hi';

// string object
const str=new String('hi')
message.indexOf('hi')
message.replace()
message.toUpperCase()
message.toLocaleLowerCase()
message.trim()

// literals
// BOOL true,false,object{},string '', 
//template literals ``
//place holder
const holder = ` hi ${name} sreenu`;
console.log(holder)

// date

const now = new Date();
console.log(now.toISOString())

function address(street,city,zipCode){
     this.street = street;
     this.city = city;
     this.zipCode = zipCode;
     this.showAdress = function(h){
        console.log(h);
     }

}
function factadd(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}
let h = new address(1,1,1);
console.log(h.showAdress(h))

function blogPost(title,body,author,views,isLive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = {'author':author,'body':body};
    this.isLive = isLive;

}

// arrays in dept
const array = [3,4];
array.push(1)
console.log(array)
//push front
array.unshift(1,2)

//insert
array.splice(2,0,'a','b')

// index
console.log(array.indexOf(2))

//finding object in 
const obj3 = [
    {id:1,name:'a'},
    {id:2,name:'b'}
]
const ans =  obj3.findIndex(function(val){
    return val.name === 'b';
})
console.log(ans)

//Arrow function .it is used to replace callback function
// const ans =  obj3.findIndex((val) =>{
//     return val.name === 'b';
// })
// console.log(ans)
//push numbers.pop(),numbers.shift()
//splice(index,no of ele to del,[values to insert])

//empty array
// numbers = [],numbers.length =0,numbers.splice(0,numbers.length)
const first = [1,2,3];
const seconf = [1,2,3];
const comb = first.concat(seconf);
console.log(comb);
console.log();
// copied by reference in case of reference types

//spread operator

const spreadop = [...first ,...seconf];
console.log(spreadop);
// Iterating an array

const nums = [1,2,3];

nums.forEach((val)=>{console.log(val)})

//join nums.join()
console.log(nums.join(''));

//sort array arr.sort(),arr.reverse()

const exmpstr = [
    {id:1,name:'d'},
    {id:2,name:'b'}
    ]

exmpstr.sort(function(a,b){
    const x= a.name.toLocaleLowerCase();
    const y=b.name.toLocaleLowerCase();
    if(x<y){
        return -1
    }
    else if (y<x){
        return 1
    }
    return 0


})
console.log(exmpstr)

//some and every
const allpositnum = nums.every(function(val){return val >0});
const somepositnum = nums.some(function(val){return val >0});
console.log(nums.includes(1));

//filtering  an array

const numbers = [1,-1,2,3];
const filt = numbers.filter((value)=>{
    return value>=0
})

const filter = numbers.filter(value=> value>=0)

console.log(filter)

//mapping an array
const items = filter.map(n=>'<li>'+n+'</li>')
console.log('<ul>'+items.join('')+'</ul>')
const item = filter.map(
    function(val){
        return {value:val}
    }
)
// {} is considered as code block
console.log('<ul>'+items.join('')+'</ul>')
const itemss = filter.map(
    val=>
        ({value:val})
    
)
console.log(itemss);

//reduce
const red = [1,2,3,-1].reduce((a,c)=>{
return a+c;
},0)
console.log(red);

function move(num,idx,offset){
    const stack = []
   
   
}

// console.log([1,2,3,4].splice(2,1,)

const movies = [
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2018,rating:3},
    {title:'d',year:2017,rating:4.5}
]

const res = movies.filter((obj)=>{
    return (obj.year===2018 && obj.rating>4)

}).sort((a,b)=>{
    if (a.rating>b.rating) return -1;
    else if (b.rating>a.rating) return 1;
    else return 0;
}).map((obj)=>{return obj.title})
console.log(res);
// function declaration
function walk();

// function reference
let run = function(){
    console.log('run');
}

//hoisting: all declarations moving to top is called hoisting
// hoisiting is the process of moving function declarations to the top

// arguments keyword

// rest operator

// function sum(...args){

// }