// NUMERIC ENUMS
// -------------

enum Direction0 {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right, // 3
}

enum Direction {
    Up = 1, // 1
    Down,   // 2
    Left,   // 3
    Right,  // 4
}

// STRING ENUMS
// ------------

enum DirectionS {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// COMPUTED AND CONSTANT MEMBERS
// -----------------------------

// All enum members in E1 and E2 are constant.
enum E1 { X, Y, Z }
enum E2 { A = 1, B, C }

enum FileAccess {
    // Constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // Computed member
    G = "123".length,
}

