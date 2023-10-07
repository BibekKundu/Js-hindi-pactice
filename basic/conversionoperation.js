let score="node basic33";
//console.log(typeof score);
//console.log(typeof (score));

let someNumber=30;
let StringNumber=String(someNumber)
//console.log(StringNumber);

let str1="hello"
let str2=" shymal"
let str3=str1+str2
//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(1+"2"+2);
const gameName= new String('RabindraTakur')
// console.log(gameName.charAt(4));//define index char
// console.log(gameName.indexOf('n'));// define index no
// console.log(gameName.concat('takur'));
// console.log(gameName.length);
const newString=gameName.substring(0,4)
// console.log(newString);
const anotherString=gameName.slice(-8,0)
// console.log(anotherString)

const newStringOne= "   Ram   "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trimStart());

const url ="https://somiran.com/somiran%ray"
console.log(url.replace('%','_'));
console.log(url.search("ray"));
console.log(url.length);