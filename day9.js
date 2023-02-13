const mobile=[
    {name:"Samsung Galaxy S22",rate:"10000",color:"black"},
    {name:"Samsung Guru",rate:"2000",color:"gold"},
    {name:"Poco C50",rate:"2000",color:"blue"},
    {name:"Apple Iphone 14",rate:"5000",color:"black"},
    {name:"Motorola G52",rate:"3000",color:"gray"},
    {name:"I Kall K60",rate:"9000",color:"green"},
    {name:"Redmi 9i",rate:"8000",color:"blue"},
    {name:"Poco C31",rate:"8000",color:"gray"}
];
const result=mobile.filter((item)=>item.rate==2000);
const result1=mobile.filter((item)=>item.rate=="2000");
const result2=mobile.filter((item)=>item)
const result3=mobile.filter((item)=>item.rate=="10000")
const result4=mobile.map((item)=>item.color)
console.log(result4);
///////////blank array:-how to put value in it////////////////////////////////////////////
const arr=[];
arr[0]=10;
arr[1]=10;
arr[2]=10;
arr[3]=10;
arr[4]=10;
arr[5]=10;
arr[6]=10;
arr[7]=1000;
arr[8]=10;
arr[9]=10;
console.log(arr[7]);
////////////////////////////////////////////////////////////////////////////////////
const personData ={
    name:"khuzaim",city:"navapur",state:"maharashtra",country:"india"
};
console.log(personData.name);
personData.name="khuzi"
personData.city="surat"
personData.state="gujrat"
personData.country="morocco"
console.log(personData);
//////////////////////////this is object////////////////////////////////////////////////////////////
const fullName={
    firstName:"khuzaim",
    middleName:"asif",
    surName:"shaikh"
};
/////dot Notation/////
fullName.surName="pathan"
fullName.gender="male"
/////array Notation/////
fullName["age"]=23
fullName["firstName"]="shah rukh khan"
console.log(fullName);
///////////////////////////this is string///////////////////////////////////////////////////////////
var str="Welcome to CAREER NEXT learning academy" //Double quotes//
var str=`Welcome to CAREER NEXT learning academy` //Bacticks//
var str='Welcome to CAREER NEXT learning academy' //Single quotes//
var address="peer burhan"
var name="career next"
var city="Nanded"
console.log(address+","+ name +","+city);// using +(concat)operator
console.log(`${address},${name},${city}`);// using bacticks(ES6 feature)
//////////////////////////this is length method of string/////////////////////////////////////////////
var str1='Welcome to CAREER NEXT learning academy'
console.log(str1.length);
/////////////////////////this is toLowerCase & toUpperCase method of string//////////////////////////
var str2='Welcome to CAREER NEXT learning academy'
console.log(str2.toUpperCase());
var str3='Welcome to CAREER NEXT learning academy'
console.log(str3.toLowerCase());
////////////////////////this is startsWith & endsWith method of string//////////////////////////////
var str4='Welcome to CAREER NEXT learning academy'
console.log(str4.startsWith("Welcome"));//true//
console.log(str4.startsWith("welcome"));//false//
console.log(str4.startsWith("CAREER"));//false//
console.log(str4.endsWith("academy"));//true//
console.log(str4.endsWith("academY"));//false//
console.log(str4.endsWith("aca"));//false//
////////////////////////this is indexOf method of string//////////////////////////////////////////////
var str5="My name is pathan name";//it will check from start of the string
console.log(str5.indexOf("name"));
//////////////////////////this is lastIndexOf method of string/////////////////////////////////////////
var str6="My name is pathan name"//it will check from last of the string
console.log(str6.lastIndexOf("name"));
////////////////////////this is concat method of string///////////////////////////////////////////////////
const str7="Hello"
const str8="Welcome to"
const str9="Career next"
const str10="learning academy"
console.log(str7.concat(" ",str8," ",str9," ",str10));
///////////////////////this is trim method of string///////////////////////////////////////////////////
var str11="     hello world     "
console.log(str11.trim());
///////////////////////this is split method of string//////////////////////////////////////////////////
var str12=`Welcome to CAREER NEXT learning academy`
console.log(str12.split(""));
console.log(str12.split(" "));
console.log(str12.split("  "));
/////////////////////////this is replace method of string///////////////////////////////////////////////////
var str13="my name is pathan is khan"
console.log(str13.replace("is","are"));
console.log(str13.replace(/is/g),"are");
