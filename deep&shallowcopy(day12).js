//shallowCopy & deepCopy//////////////////////////////////////////////////////////////////////////////////////////////
// const obj={
//     fName:"khuzaim",
//     mName:"asif",
//     lName:"shaikh",
// }
// //if we assign any object by using (=) operator directly then it creates the shallow copy of that object.
// // const copyObj=obj;
// // copyObj.fName="abc"
// // console.log(obj);//original object
// // console.log(copyObj);//copy object
// //when we copy any original object by using spread operator then it creates deep copy of an object
// const spreadCopy={...obj}
// spreadCopy.lName="xyz"
// console.log(obj);//original object
// console.log(spreadCopy);//deep copy of object
///////////////////////////////////////////////////PRACTICE/////////////////////////////////////////////////////////////
// const bike={
//     bike1:"Kawasaki Ninja H2R",
//     bike2:"Suzuki Hayabusa",
//     bike3:"Kawasaki ZX10R",
//     bike4:"Ducati Panicle V4",
//     bike5:"Yamaha R1"
// }
// const spreadCopy={...bike}
// spreadCopy.bike1="Splendor"
// console.log(bike);
// console.log(spreadCopy);
///////////////////deepCopy in nested(done with sread operator)/////////////////////////////////////////////
const obj = {
  a: "khuzi",
  b: "khuzaim",
  c: {
    d: "nanded",
    e: "maharashtra",
  },
};
const spreadCopy = { ...obj };
spreadCopy.c = { d: "hydrabad", e: "telangana" };
console.log(obj);
console.log(spreadCopy);
// const copyobj=obj
// copyobj.c.d="hydrabad"
// copyobj.c.e="telangana"
// console.log(obj);
// console.log(copyobj);
