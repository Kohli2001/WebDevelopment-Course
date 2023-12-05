// console.log("Hello world");

// var a=10;
// var a=100; //re-decalarion and re initialization is posssible
// console.log(a); 


// let age = 19;
// age = 25;   // re-initialization is possible
// console.log(age);


// const yob = 2001;
// const pi = 3.14;
// console.log(pi);

// var a = 10
// var b = 20;


// // var sum = a+b;
// console.log(a+b);


//INTERVIEW QUESTIONS 

// //DataType in Javascripts : which assign during the runTime 
// let a = 108.8;  //number

// let b="String"; //String

// let c = false;  //boolean

// let d ; //undefined 

// console.log(b);

//Asssignments : KFC online.kfc.con.in/menu


//if -else 

// let num1 =80;
// let num2 =90;
// let num3 =70;


// if(num1>=num2 && num1>=num3){
//     console.log("num1");
// }
// if(num2>=num1&&num1>=num3){
//     console.log("num2");
// }
// if(num3>=num1&& num3>=num2){
//     console.log("num3");
// }


// switch : is always check equality conditions and default will executes after checking all the cases

// switch (num1>num2) {
//     case true:
//         console.log("num1");
//         break;
//     case false:
//         console.log("num2");
//         break;
//     default:
//         console.log("both equal num1 and num2");
//         break;
// }

//FUNCTIONS:

//>>>>>>>>>>    SYNTAX

// function name(params) {
//     //body
// }

// name(arguments);



// function square(a){
//     console.log(a**2);
// }
// square(40);

// function square(a){
//     return a**2;
// }

// console.log(square('java'));
// let a = square(20);
// console.log(a);
// console.log(false);



// Arrays

//push and pop

//  let arr1 = [12,23,4,556,78];

 //Includes()   >>> it will check wherate eleemnt present inside the array or not and it will produce result in boolean 

//  let res = arr1.includes(245);
//  console.log(res);


 //splice




// arr1.splice(0,2);  // this iwll delete th eelement from 0th index upto 2 index  
// console.log(arr1);
// arr1.splice(0 , arr1.length);  
// console.log(arr1);







// arr1.push(10000);
// arr1.pop();
// console.log(arr1);

// let arr2 = ["kamlesh", 'raushan','ajay','ajay08','sukhit', 'silpi'];
// arr2.push(4253535);
// arr2.pop();
// console.log(arr2);




//shift and unshift

// arr2.unshift(1000000, 200000000);  //to add the elements in first positions
// console.log(arr2);

// arr2.shift();
// console.log(arr2);



//write a code whih revesre a array


//first logic 
let arr3 = [12,24,40,6,8];

//delete even number froms the array 
//first logic 
// for(let i=0; i<arr3.length; i++){
//     if(arr3[i]%2==0){
//        arr3.splice(i,1);
//        i--;
//     }
// }
//  console.log(arr3);

//second logic

// for (let i = 0; i < array.length; i++) {
//     arr3[i].pu
    
// }

//sort the array

// for(let i=0; i<arr3.length; i++){
//     for(let j=i+1; j<arr3.length; j++){
//         if(arr3[i]>arr3[j]){
//             let temp = arr3[i];
//             arr3[i]=arr3[j]
//             arr3[j]=temp;
//         }
//     }
// }
// console.log(arr3);




// let arr4=[];
// for(let i =0; i<arr3.length; i++){
//     arr4.unshift(arr3[i])
// }
// console.log(arr4);


//second logic 


// for(let i=arr3.length-1; i>=0; i--){
//         arr4.push(arr3[i]);
// }
// console.log(arr4);


//reverse the artay with function

// let a= [19,32,34];

// let b = a.reverse();
// console.log(b);


//concat

// let b = [10,20,30];
// let res = a.concat(b);
// console.log(res);

//slice

// let arr =[1,14,15];
// let res1 = arr.slice(1,3);
// console.log(res1);


//write a program to check whereter both the arra is equal or not 
// let a=[];
// let b = [];
// let c=0;
// for(let i=0, j=0; i<a.length, j<b.length; i++, j++){
//     if(a[i]!=b[j]){
//         c++;
//     }
// }
// if(c>0){
//     console.log(false);
// }
// else{
//     console.log(true);
// }


///Callback function 

// let sum=(a,b)=>{
//     return a+b;
// }
// let product=(c,d)=>{
//     return c*d
// }

// console.log(product(sum(2,4),4));

//here product is a >. higher order functions a
//here sum is a >>> call back function



let products = [
    {
        name:"macbook air ",
        brand:"apple",
        price:1200000.00,
        rating:4.8
    },
    {
        name:"Oppo A53",
        brand:"OPPO",
        price:15000.00,
        rating:4.3
    },
    {
        name:"S23 Utra",
        brand:"Sumsung",
        price:12000.00,
        rating:4.6
    },
    {
        name:"Redmi note 10Pro",
        brand:"redmi",
        price:160000.00,
        rating:4.7
    },
    {
        name:"vivo note 10Pro",
        brand:"vivo",
        price:160000.00,
        rating:3.7
    } ,
    {
        name:"Oppo A9 2020",
        brand:"OPPO",
        price:160000.00,
        rating:4.7
    }
]

//maping 

products.map((product)=>{
    // console.log(product.name);
    // console.log(`the product is ${product.brand} ${product.name}`);
    //console.table(`product brand ${product.brand} name is ${product.name} and price is ${product.price}`)
})

//filtering 

// let res = products.filter((product)=>{
//     // return product.rating>4;
//     return product.brand=="apple";
// })
// console.table(res);


//reducing 

// let total = products.reduce((sum,product)=>{
//     let subTotal= sum+=product.price;
//     return subTotal;
// },0)
// console.log(`total subtotal in your cart is ${total}`);




//basics 

// if(true){
//     const name="kamlesh"
//     if(name==="kamlesh"){
//         const wensite="youtube";
//         console.log(wensite + name);
//     }
//     console.log(wensite);

// }
// console.log(name);

const objs= {
    js :"javscripts",
    nameLanguae :"java",
    course:"java",
    time:"12:30"
    

}

// for (const key in objs) {
//         console.log(objs[key]);

// }

let programming = ["js","java","c++","python","c#","ruby"]

programming.forEach(element => {
    console.log(element);
});



































