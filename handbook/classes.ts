
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter = new Greeter("this is Patrick!");

console.log(greeter.greet());

// INHERITANCE
// -----------

class Animal0 {
    name: string; // TypeScript private field
    constructor(theName: string) {
        this.name = theName;
    }


    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal0 {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal0 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal0 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// PUBLIC, PRIVATE AND PROTECTED MODIFIERS
// ---------------------------------------
// Each member is public by default

class Animal1 {
    private name: string; // TypeScript private
    // #name: string; // ECMAScript private

    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal1 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal1("Goal");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // error, failed assignment due to name of employee not being identical (of class Animal).

// UNDERSTANDING PROTECTED
// -----------------------
// protected members can be accessed from deriving classes.

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error, because name cannot be access from outside the class body

// NOTE: The class constructor can be protected as well.
//       This means that you cant instantiate that class from outside the containing class

class Point {
    protected coordinate: number;

    protected constructor(coordinate: number) {
        this.coordinate = coordinate;
    }
}

class Line extends Point {
    private coordinateY: number;

    constructor(coordinateX: number, coordinateY: number) {
        super(coordinateX);
        this.coordinateY = coordinateY;
    }
}

let line = new Line(0, 0);
// let point = new Point(0); // error, can be instantiated only by Line class

// READONLY MODIFIER
// -----------------
// Readonly properties must be initialized:
//   - at their declaration
//   OR
//   - in the constructor
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error, because name is readonly

// PARAMETER PROPERTIES
// --------------------
// Lets you create and initialize a member in one place.

class Pen {
    readonly manufactarer: string = "Bic";
    constructor(readonly color: string) { }
}

let pen = new Pen("red");
console.log(`Color of pen is ${pen.color}`);

// ACCESSORS
// ---------
// Getters and setters for finer-grained control over how a member is accessed.

const fullNameMaxLength = 11;

class Employee2 {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
        }

        this._fullName = newName;
    }
}

let employee2 = new Employee2();
employee2.fullName = "Alan Turing";

if (employee2.fullName) {
    console.log(employee2.fullName);
}


// STATIC PROPERTIES
// -----------------
// Static members are visible on the class itself rather than on the instances.

class Grid {
    static origin = { x: 0, y: 0 };

    calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;

        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// ABSTRACT CLASSES
// ----------------
// Bases classes that other classes can be deried.
// Contain implementation details for its members.
// Methods within an abstract class do not contain an implementation,
// must be implemented in derived classes.

abstract class Department {
    constructor(public name: string) { }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // Must be implemented in derived class
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create reference to abstract class
// department = new Department(); // error, because cannot create instance of abstract class

department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // error, because department is not type AccountingDepartment but type Department, so can't access method
