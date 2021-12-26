function log2(message){
    console.log(message);
}

var message = "Hello World";

log2(message);

function doSomething(){
    //for (let i=0 ; i<5; i++){  -> this way, finally i will be out of scope
    for (var i=0 ; i<5; i++){
        console.log(i);
    }
    console.log("finally: "+i);
}

doSomething();

let count = 5;
let a: number;
a=1;
//a='a'; this gives error
let b: boolean;
let c: string;
let d: any;
let e: number[] =[1,2,3,4,5];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {Red=0, Green=1, Blue=2, Purple=3};
let backgroundColor = Color.Red;

let messageStr = 'abc';
let endsWithBoolean = messageStr.endsWith('c');
console.log(endsWithBoolean);

let messageStr2;
messageStr2 = 'abc'
let endsWithBoolean2 = (<string>messageStr2).endsWith('c');
console.log(endsWithBoolean2);

let messageStr3;
messageStr3 = 'abc'
let endsWithBoolean3 = (messageStr3 as string).endsWith('c');
console.log(endsWithBoolean3);

let logFunction = function(funct_str) {
    console.log(funct_str);
}

let logArrowFunction = (funct_str) => {
    console.log(funct_str);
}

logFunction("Inside logFunction");
logArrowFunction("Inside logArrowFunction");
