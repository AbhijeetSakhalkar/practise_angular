function log2(message) {
    console.log(message);
}
var message = "Hello World";
log2(message);
function doSomething() {
    //for (let i=0 ; i<5; i++){  -> this way, finally i will be out of scope
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally: " + i);
}
doSomething();
var count = 5;
var a;
a = 1;
//a='a'; this gives error
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var messageStr = 'abc';
var endsWithBoolean = messageStr.endsWith('c');
console.log(endsWithBoolean);
var messageStr2;
messageStr2 = 'abc';
var endsWithBoolean2 = messageStr2.endsWith('c');
console.log(endsWithBoolean2);
var messageStr3;
messageStr3 = 'abc';
var endsWithBoolean3 = messageStr3.endsWith('c');
console.log(endsWithBoolean3);
var logFunction = function (funct_str) {
    console.log(funct_str);
};
var logArrowFunction = function (funct_str) {
    console.log(funct_str);
};
logFunction("Inside logFunction");
logArrowFunction("Inside logArrowFunction");
