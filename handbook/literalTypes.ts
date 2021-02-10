// LITERAL NARROWING
// -----------------

// const, when guaranteed that the contents will never change.
const canNotChange = "The contents can not change";
// canNotChange = "This generates an error" // error

// let, when contentes can change.
let canChange = "Can this change?"
canChange = "Yes it can!"

// STRING LITERAL TYPES
// --------------------

type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ease in
        } else if (easing === "ease-out") {
            // ease out
        } else if (easing === "ease-in-out") {
            // ease in and then out
        } else {
            // You ignored my types. That is wrong man!
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "wrong"); // error

// NOTE: string literal types can be used in the sam eway to distinguish overloads.
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overload here ...
function createElement(tagName: string): Element {
    let lmnt = new Element();

    // ... distinguish tagName here...

    return lmnt;
}

// NUMERIC LITERAL TYPES
// ---------------------
// NOTE: commonly used for describing config values

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6
}

for (let index = 0; index < 5; index++) {
    console.log(`Rolled ${rollDice()}!`);
}

// BOOLEAN LITERAL TYPES
// ---------------------
// Can be used to constrain object values whose properties are interrelated.

interface ValidationSuccess {
    isValid: true;
    reason: null;
}

interface ValidationFailure {
    isValid: false;
    reason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;
