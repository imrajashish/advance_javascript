'use strict';

// let fistName = "Ashish";

// console.log("Ashish " + fistName);
// let $new = "Ashish raj";
// console.log($new)
// let PI = 3.1415;
// console.log(PI)

// let myFirstJob = 'programer';
// let currentJob = "Teacher";

// let job1 = "programer";
// let job2 = "Teacher";

// console.log(myFirstJob);

// var country = "India";
// let Continent = "Bihar";
// let population = "140M"

// const isIsland = true;
// const language ="Bhojpuri";
// console.log(country)
// console.log(Continent)
// console.log(population)
// console.log(language);
// console.log(isIsland)


//  let firstNameOfUser = "ashish";
//  console.log(firstNameOfUser)
 
//  firstNameOfUser = "RAM"

//  let year;
//  console.log(year)
 
//  year = 1999;
//  console.log(typeof year)

//  console.log(typeof null)


// let age = 20 ;
// age = 24;
// console.log(age);

// const birthYear = 1998;
// //birthYear = 2000;
// console.log(birthYear)
// job = " " ;
// console.log(job)

// const now = 2037

// const ageAshish = now - 2000;
// const ageRajesh = now - 2020
// console.log(ageAshish ,ageRajesh)
// console.log( now - 2000 > now - 2020)
// console.log(5**2) //right to left
// let x,y;
// x=y = 24-20-1
// console.log(x,y)


// let hasDriverLicense = false;
// const passTest = true;

//  if(passTest) hasDriverLicense = true;
//  if(hasDriverLicense) console.log("I can Drive : D");

//  const private = "ashish";
//   function logger(){
//     console.log("My name is Ashish")
//  }
//  logger();

//  function calAge1(birthYear){
//     return 2037 - birthYear;
//  }
// const age1 = calAge1(2000);


// Anonymous Function
//const age2 = calAge2(2001) not support because of hosting
//  const calAge2 = function (birthYear){
//     return 2037 - birthYear;
//  }
//  const age2 = calAge2(2001)
//  console.log(age1,age2);

 //Arrow Function
// const calAge3 =  (birthYear, firstName) => {return `${(2037 - birthYear)},firstName`;}
// console.log("Arrow function result is ",calAge3(2021, "Ashish"));

//Function calling other function

// function fruitPice(fruit){
//     return fruit*4;
// }

// const  fruitPice = (fruit) => fruit * 4;

// function fruitProcessor(apple , orange){
//     const applePieces = fruitPice(apple);
//     const orangePieces = fruitPice(orange);
//     const juice = ` this is the ${applePieces} of the aapple and ${orangePieces} is the orange`;
//     return juice
// }
// console.log(fruitProcessor(3,2));



// let bio = {
//     firstName:"Ashish",
//     lastName: "Raj",
//     age : 23,
//     job:"Developer",
//     friends:["Rajesh","AV","Suman"]
// }

// for(let i = 0; i<=bio.friends.length-1; i++){   
//     console.log(`Lefting weight repating ${bio.friends[i]} 🏋️` )
// }

// const ashishArray = [
//     'Ashish',
//     "raj",
//     2000- 2024,
//     'developer',
//     ['riya', 'siya', 'diya'],
//     true
// ]
// let types = [];

// for(let j=0;j<=ashishArray.length-1;j++){
//     console.log( ashishArray[j],typeof ashishArray[j])
//     types.push(typeof ashishArray[j])

//     //types[j] = typeof ashishArray[j];
// }
// console.log(types)

// for(let rep = 1; rep<=10; rep++){ 
//     if(rep>1 && rep<8)
//     console.log(`Lefting weight repating ${rep} 🏋️` )
// }

let years = [1991,2001,1969,2024];
let ages = [];

// for(let i=0;i<=years.length-1;i++){
//     if(typeof years[i] !== 'number') continue;
//         ages.push(2037 - years[i]);
    
// }
// console.log(ages)

// for(let i=years.length-1;i>=0;i--){
//    ages.push(2037-years[i]);
// }
// console.log(ages)
// let rep = 0;
// while (rep<= years.length-1) {
//     console.log(years[rep])
//     rep++
    
// }

//  let calAverage = function (arr){
//     let sum = 0;
//     for(let i=0;i<=arr.length-1;i++){
//         sum +=arr[i]
//     }
//  let total = sum/(arr.length) 
//  console.log( total)
// }
// calAverage([1,2,3])
// const x = 23;

// const temp = [-1,2,3,4 ,'error',23,4,34,67,7]

// const calTemp = function (temp){
    
//     let max = temp[0]
//     let min = temp[0]
//     let ab = [];
//     for(let i=0;i<=temp.length-1;i++){
//         if(temp[i] > max ){
//             max = temp[i]
//             ab.push(max)
//         }else if(min > temp[i]){
//             min = temp[i]
//         }
        
//     }
//     console.log(max, min,ab)
// }
// console.log(calTemp([-1,2,399,400 ,'error',23,4,34,679,7]))


const mesureKelvine = function(){
    const mesurement = { type: 'temp',
    unit :'celsius',
    value : Number(prompt("Degree Celsious: "))
    }

    const kelvine = mesurement.value + 273;
    console.log(kelvine)
}
mesureKelvine()