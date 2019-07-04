var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = 'blue';
color = 'red';
var fullName = "Bob";
var age = 30;
var sentence = "hello, my name is " + fullName + "\n\n\ni will be " + (age + 1) + " years old next month";
//Array
var list = [1, 2, 3, 4];
var list1 = [2, 3, 4];
//Tuple
var x;
x = ['hello', 33];
// x = [33, 'hello'];  // Error
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 2] = "red";
    Color1[Color1["green"] = 3] = "green";
    Color1[Color1["blue"] = 8] = "blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.blue;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 2] = "red";
    Color2[Color2["green"] = 3] = "green";
    Color2[Color2["blue"] = 4] = "blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2[3];
console.log(c2);
//Any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var listAny = [1, true, 'string'];
listAny[1] = 8;
console.log(listAny);
//Void
function warnUser() {
    console.log('warnUser');
}
//Null Undifined
//Never
function error(message) {
    throw new Error(message);
}
