// FUNCTION DECLARATION ==> Hoisting
function Hello(name) {
    return name;
}
console.log(Hello('P229'))


// FUNCTION EXPRESSIONS
let Welcome = function() {
    return 'Welcome'
}
Welcome();

// let Calculate = function(x,y) {
//     return x * y;
// }
// console.log(Calculate(7,5));


// ARROW FUNCTIONS
// let Calculate = firstname => 'Welcome ' + firstname




// this

// SHORTHAND METHOD DEFINITIONS
// let User = {
//     ad: "Cavad",
//     yas: 25,
//     tevellud: function() {
//         return new Date().getFullYear() - this.yas
//     },
//     tevellud() {
//         return new Date().getFullYear() - this.yas
//     }
// }


// // console.log(this);

// // function P229() {
// //     console.log(this);
// // }

// // P229();

// // let btn = document.getElementById('btn');
// // btn.onclick = () => {
// //     btn.style.backgroundColor = 'red'
// // }


// // foreach || map || filter || reduce

// // let arr = [5,7,9,11,13,15,17];

// // let new_arr = arr.map(function(x){
// //     return x*2;
// // })
// let new_arr = arr.map(x => x*2)
// console.log(new_arr);

// let filtered_arr = arr.filter(x => x > 10);
// console.log(filtered_arr);

// const users = [
//     {id:1,name:'Cavad',age:25},
//     {id:2,name:'Vusal',age:19},
//     {id:3,name:'Seymur',age:30},
//     {id:4,name:'Senan',age:22},
//     {id:5,name:'Resad',age:15}
// ] 

// let elder = users.filter(user => user.age > 20);
// console.log(elder);

// // reduce

// let sum_arr = arr.reduce((x,y) => x+y);
// console.log(sum_arr);
// let nums = [5,7,9,11,14];
// 22,28 ==> 50
// nums.map(x => x*2).filter(x => x>18).reduce((x,y) => x+y);

// forEach

// let arr = [5,7,9,11,13,15,17];
// arr.forEach(x => console.log(x))


// CONSTRUCTOR FUNCTIONS
// function Person(name,age,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// } 
// let Developer = new Person('Resad',25,'Senior Frontend Engineer')
// let Designer = new Person('Kamil',20,'UX/UI Designer');
// console.log(Developer.name);
// console.log(Designer.name);

// class Person{ 
//     constructor(name,age,job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }


// Call - Apply - Bind


let Apple = {
    brand: 'Macbook',
    model: 'Pro',
    price: 3500
}

let Asus = {
    brand: 'Asus',
    model: 'Zenbook',
    price: 2000
}

let compInfo = {
    compName: function() {
        return `${this.brand} ${this.model}`
    },
    compPrice: function() {
        return `${(this.price / 1.7).toFixed(2)}$`
    },
    compMemory: function(HDD,SSD) {
       return `HDD: ${HDD}GB || SSD: ${SSD}GB`
    }
}

console.log(compInfo.compMemory.call(Apple,512,128));
console.log(compInfo.compMemory.apply(Asus,[512,128]));


let obj = {
    num1: 7,
    num2: 5
}

function Calculate(num3,num4) {
    return this.num1 + this.num2 + num3 + num4
}

let x = Calculate.bind(obj)
console.log(x(4,2));


// CALLBACK FUNCTIONS

// setTimeout(() => {
//    console.log('salam'); 
// }, 0);

// console.log('sagol');

// function Show(callback) {
//     console.log('Welcome');
//     callback();
// }

// function Send() {
//     console.log('Message sent...');
// }

// Show(Send)


setTimeout(() => {
    document.getElementById('site').style.display = 'block'
    document.getElementById('loader').style.display = 'none'
}, 3000);