interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// OPTIONAL PROPERTIES
// -------------------

interface SquareConfig {
    color?: string; // optional property
    width?: number; // optional property
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 }

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });

// READONLY PROPERTIES
// -------------------


interface Point {
    readonly x: number;  // Can be modifiable only when first created!
    readonly y: number;  // Can be modifiable only when first created!
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error


// FUNCTION TYPES
// --------------

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

// INDEXABLE TYPES
// ---------------

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}
