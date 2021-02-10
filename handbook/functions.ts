// Named function
function add(x: number, y: number): number {
    return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
    return x + y;
}

// After "mySecondAdd" follows the function type,
// in this case, (baseValue: number, increment: number) => number
// after the function type follows the function body.
let mySecondAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

// INFERRING THE TYPES
// -------------------
// Contextual typing

// The parameters "x" and "y" have the type number
let myThirdAdd = function (x: number, y: number): number {
    return x + y;
}

// myThirdAdd has the full function type
let myFourth: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
}

// OPTIONAL AND DEFAULT PARAMETERS
// -------------------------------
// The number of arguments given to a function has to match the
// number of parameters the function expects by default.

// Adding the question mark ? after the name of the parameter
// makes it optional.

// Adding a value for a parameter makes it a default-initialized parameter
// Default-initialized parameters that come after all required parameters
// are treated as optional.

// In the function below lastName is an optional parameter
function buildName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

// In the function below firstName is a default-initialized parameter
function buildNameAndAge(firstName = "Arnold", lastName: string, age = 50): string {
    return `${firstName} ${lastName} is ${age} years old`;
}

let engineer = buildName("Alan");
// Note the undefined below
let actor = buildNameAndAge(undefined, "Terminator");
console.log(engineer);
console.log(actor);


// REST PARAMETERS
// ---------------
// Used when you don't know how many parameters a function will ultimately take.
// Or, to handle multiple parameters as a group.

// The compiler builds an array of arguments passed with the given name after the ellipsis (...)
function buildLongName(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(" ")}`;
}

let longName = buildLongName("Samuel", "Long", "Jackson");
console.log(longName);

// NOTE: can also be used in the type of the function
let buildLongNameAgain: (firstName: string, ...rest: string[]) => string = buildLongName;


// THIS KEYWORD
// ------------
// Check out: https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

// OVERLOADS
// ---------
// Order overloads from most specific to least specific

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
    // Gave us the deck to pick a card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Let them pick a card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`)

let pickedCard2 = pickCard(15);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`)
