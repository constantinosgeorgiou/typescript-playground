// HELLO WORLD OF GENERICS
// -----------------------

// The `T` allows as to capture the type the user provides

function identity<T>(arg: T): T {
    return arg;
}

let outputA = identity<string>("myString");
let outputB = identity("myString");

// function loggingIdentity<T>(arg: Array<T>): Array<T> { }
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// GENERIC TYPES
// -------------

function identityAgain<T>(arg: T): T {
    return arg;
}

// Generic function
let myIdentityT: <T>(arg: T) => T = identityAgain;

// Different name
let myIdentityU: <U>(arg: U) => U = identityAgain;

// As object literal type
let myIdentityO: { <T>(arg: T): T } = identityAgain;

// Generic interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentityAgain: GenericIdentityFn<number> = identity;

// GENERIC CLASSES
// ---------------

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
}

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// GENERIC CONSTRAINTS
// -------------------

interface Lengthwise {
    length: number;
}

function logginIdentityConstrain<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// logginIdentityConstrain(3); // error, because number doesnt have .length method
logginIdentityConstrain({ length: 10, value: 3 });


// USING TYPE PARAMETERS IN GENERIC CONSTRAINTS
// --------------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let obj = { a: 1, b: 2, c: 3, d: 4 };

getProperty(obj, "a");
// getProperty(obj, "x"); // error, because x is not a property of obj


// USING CLASS TYPES IN GENERICS
// -----------------------------

// When creating factories in TypeScript using generics, it is necessary to refer to class types by
// their constructor functions.
function create<T>(c: { new(): T }): T {
    return new c();
}

