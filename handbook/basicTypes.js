// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100n;
// String
var color = "blue";
// Template string
var fullName = "\u00C0rnold Schwarzenegger";
var age = 49;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// Array
// Can be declared in two ways
// 1:
var listA = [1, 2, 3];
// 2: Generic array type
var listB = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10]; // ok
// x = [10, "hello"]; // error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Enums start numbering at 0, but we can change this
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var colorName = Color1[4];
console.log(colorName);
