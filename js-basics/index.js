const person = { //Objects
    name: 'Mosh',
    walk() {
        console.log(this);
    }
    
};
person.walk();


//const per = { //Binding this
//   name: 'Tom',
//    walk() {
 //      console.log(this);
//}
    
//};
//per.walk();
//const walk = per.walk.bind(per);
//walk();


//const square = function(number){   //Arrays
//   return number * number;
//}

 const square = number => number * number;    //Array options
  console.log(square(5));

const jobs = [                     //Array ex
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},

];
const activeJobs = jobs.filter(function(job) { return job.isActive; });
// const activeJobs = jobs.filter (job => job.isActive);     //Simplify version of previous line

const prsn = {          //Array of objects
    talk(){
        var self = this;
        setTimeout(function() {
            console.log("self", self);
        },1000);
    }
};
prsn.talk();


//const prsn = {          //Different version of previous examples' code
//talk(){
//    var self = this;
//    setTimeout(() => {
//        console.log("self", self);
//    },1000);
//}
//};
//prsn.talk();

//Array map
const colors =['red','green','blue'];
//const items = colors.map(color =>  '<li>' + color + '</li>'; );
const items = colors.map(color =>  '<li>${color}</li>' ); //Simplifier version of previous line
console.log(items);

//Object destructing
const address = {
    street:'',
    city:'',
    country:''
};
// const street = address.street;
//const city = address.city;
// const country = address.country;

const {street, city, country} = address; //Previous three lines doing the same thing in this line
// const { street: st} = address;

//Spread Operator
const first = [1, 2 , 3];
const second =[4, 5, 6];

//const combined = first.concat(second);
//const combined = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first);
console.log(clone);

//EXAMPLE2- Spread Operator

const frst ={name: "Mosh"};
const scnd ={ job: "Instructor"};

const combined = {...frst, ...scnd, location: "Australia"};
console.log(combined);
//const clone = {...frst};

//CLASSES

class Person1{
 constructor(name){
this.name= name;
 }
    walk() {
        console.log("walk");
    }

}
//const person1 = new Person1('Mosh');
//person1.

class Teacher extends Person1{
    constructor(name, degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}
// import { Teacher } from "./teacher";  //MODULES
import  Teacher , {promote} from "./teacher"; //named and default
import React, { Component } from 'react';

//default->import ... from '';
//Named-> import {...} from '' ;

const teacher = new Teacher('Mary', "MSc");
teacher.teach();

//Named and Default


