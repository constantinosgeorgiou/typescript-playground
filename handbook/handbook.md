```shell
rm *.js *.js.map; clear; tsc --target ES2015 classes.ts && node classes.js
```


- enable `--strictNullChecks`
- enable `--noImplicitThis` flag to point out incorrect use of `this` variable.

# readonly vs const

const: for variables

readonly: for properties

# this keyword

Check out [Understanding JavaScript Function Invocation and "this"](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/).

# Classes

**Output must be ECMAScript 5 or higher.**

Accessors with a `get` and no `set` are automatically inferred to be `readonly`.