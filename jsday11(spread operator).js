//spread operator is used for concat multiple array & objects into a single array or object
// const first=[1,2,3,4,5]
// const second=[10,20,30,40,50]
// const third=[100,200,300,400,500]
// const newArr=[...first,...second,...third]
// console.log(newArr);
// ///////////////////
// const arr1=["supra","BMW",]
// const arr2=["lamborgini","marcedise",]
// const arr3=["G-wagon","audi",]
// const newArr1=[...arr1,...arr2,...arr3]
// console.log(newArr1);
///////////////////
// const obj={
//     name:"khuzaim",
//     surname:"shaikh",
//     gender:"male"
// }
// const obj1={
//     city:"navapur",
//     mobileNo:"9767744766"
// }
// const newObj={...obj,...obj1}
// console.log(newObj);
/////////////////////
// const copyArr=[...newArr]
// const copyObject={...newObject}
// console.log(copyArr);
// console.log(copyObj);
//rest operator////////////////////////////////////////////////////////////////////////
// function sum(a,...b){
//     let total=b.reduce((acc,cur)=>acc+cur)
//     return a+total
// }
// console.log(sum(10,20,30,40,50,60)); 
////////////////////////////////////
// const paidCost = (discount,...goodsCost) => {
//     const totalCost=goodsCost.reduce((a,c)=>a+c)
//     const discountedCost=totalCost*discount
//     return totalCost-discountedCost
// }
// console.log(paidCost(0.5,1000,2000));//0.5 is percentage
/////////////////////////////////////
const getTotalTravellingExp=(km,milage,fualPrice)=>km/milage*fualPrice
console.log(getTotalTravellingExp(300.654,20.65,100.44));
