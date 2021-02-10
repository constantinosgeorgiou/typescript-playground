// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String
let color: string = "blue";

// Template string
let fullName: string = `Àrnold Schwarzenegger`;
let age: number = 49;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// Array
// Can be declared in two ways
// 1:
let listA: number[] = [1, 2, 3];
// 2: Generic array type
let listB: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10];    // ok
// x = [10, "hello"]; // error

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Enums start numbering at 0, but we can change this
enum Color1 {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c1: Color1 = Color1.Green;
let colorName: string = Color1[4]
console.log(colorName);

// Unknown
// This variable could be anything
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

// Any
// To opt out of type checking 'cause we don't have all the information available.
declare function getValue(key: string): any;
const str: string = getValue("myString");

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) { }
}

// Type assertions
// Tell the compiler "trust me, I know what I'm doing"
let someValue: unknown = "tis is a string";
let strLength: number = (someValue as string).length;
// OR
let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue2).length;