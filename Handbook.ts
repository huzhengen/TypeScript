let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';
color = 'red';

let fullName: string = `Bob`;
let age: number = 30;
let sentence: string = `hello, my name is ${fullName}


i will be ${age + 1} years old next month`;

//Array
let list: number[] = [1, 2, 3, 4];
let list1: Array<number> = [2, 3, 4];

//Tuple
let x: [string, number];
x = ['hello', 33];
// x = [33, 'hello'];  // Error

//Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c)

enum Color1 { red = 2, green = 3, blue = 8 };
let c1 = Color1.blue;
console.log(c1)

enum Color2 { red = 2, green, blue };
let c2: string = Color2[3]
console.log(c2)

//Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let listAny: any[] = [1, true, 'string'];
listAny[1] = 8;
console.log(listAny)

//Void
function warnUser(): void {
    console.log('warnUser');
}

//Null Undifined

//Never
function error(message: string): never {
    throw new Error(message)
}