let object1={
1:"Govind",
2:"Shri",
3:"Bansal"
}

let object2={
    1:"Provision",
    2:"Bansal",
    3:"Clothes"
}
let object3={
    1:"Store",
    2:"Automobiles",
    3:"Store"
}

var ran1=Math.floor(Math.random()*3)+1;
var ran2=Math.floor(Math.random()*3)+1
var ran3=Math.floor(Math.random()*3)+1

console.log("Bisinees name is : " + object1[ran1] + " " + object2[ran2] + " " + object3[ran3]);
