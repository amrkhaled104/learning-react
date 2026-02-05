
## Destructuring

- allows you to extract values from an array into variables in a clean and concise way.
 ```js
 const arr = [10, 20, 30];
 const [a, b, c] = arr;
 ```
 - **Skipping Items** ⇒ You can skip elements by leaving empty commas.
   ```js
   const values = ["A", "B", "C"];
   const [first, , third] = values;
   ```
   - You can collect the remaining items into a separate array ⇒ **Rest Operator (...)**
 ```js
 const arr = [1, 2, 3, 4, 5];
 const [first, ...rest] = arr;
 ```
## Rest Parameter
- It's a way to let a function accept an **unlimited number of arguments**, collected into an **array**.
  You use `...` (three dots) in the parameter list.
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(4, 5, 6, 7));   // 22
```
- Here `...numbers` means ⇒ take all arguments passed to the function and put them into an array called `numbers`.
 - **Important Rule** ⇒ The rest parameter **must always be the last parameter** .

## Spread
- **expand iterable objects** (like arrays, strings, or objects) into individual elements or properties.
  **Copying Arrays** 
     Creates a **shallow copy** of the array.
     Avoids referencing the same array (`arr2 = arr1` would reference same array).
     `const arr2 = [...arr1]`
   **Merging Arrays**  ⇒ Combine multiple arrays into one
   `const merged = [...a, ...b]

 - same in object but **Later properties overwrite earlier ones if keys are the same**
## Template Literals 

- A new way to write strings introduced in **ES6**.
   Use **backticks** `` ` `` instead of single `' '` or double `" "`.
  Makes it easier to include variables and write multi-line strings.
```js
let name = "Amr";
let age = 23;

let msg = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(msg);
// Hello, my name is Amr and I am 23 years old.
```
 -  **Expression Interpolation** ⇒Inside `${ }` you can put variables **or any JavaScript expression**.
## Ternary Operator
-  its a way to write `if-else` in one line 
   Syntax⇒ `condition ? expressionIfTrue : expressionIfFalse
```js
const pages = 1216;
const type = pages > 1000 ? "Long book" : "Short book";
```

## Arrow Function 

- Modern Shortcut ⇒In ES6, anonymous functions are often written using **arrow functions**
  Syntax ⇒ `()=>{}`
 So basically:
- **Anonymous function** = no name.
- Usually used in **one-time operations** (callbacks, event handlers, etc.).
- Arrow functions are the **modern way** to write them shorter.

## Short-Circuiting & Logical Operators
 - In JavaScript, logical operators (`&&`, `||`, `??`) can return any value, not just booleans. This behavior is called short-circuiting.
 **OR Operator (`||`)**
   • Short-circuits at the first truthy value.⇒ It returns the first value if it is truthy. If not, it continues to the next.
   ```js
   console.log("Amr" || "Guest"); // "Amr" (first is truthy)
   console.log("" || "Guest");    // "Guest" (first is falsy)
   ```
   **Use case:** Setting default values
   
**AND Operator (`&&`)**
-  Short-circuits at the first falsy value ⇒ It returns the first falsy value found. If all are truthy, it returns the last value.
  ```js
  console.log(0 && "Hello");    // 0 (first is falsy)
  console.log("Hello" && "React"); // "React" (both truthy, returns last
  ```
   **Use case:** Conditional execution (like in React JSX)

**Nullish Coalescing (`??`)**
  - Only short-circuits for null or undefined.
  - Unlike `||`, it considers `0` or `""` as truthy.
```js 
const count = 0;
console.log(count || 10); // 10 (0 is falsy for ||)
console.log(count ?? 10); // 0 (0 is NOT null/undefined)
```
 
 **Optional Chaining (`?.`)**
• Purpose: Checks if the property exists before trying to access it.
• Behavior: If the value before `?.` is `null` or `undefined`, it stops and returns `undefined` instead of throwing an error.
• Example: `const rating = book.reviews.librarything?.rating;`

 ## **Optional Chaining & Nullish Coalescing**
 This combination is used to safely access nested object properties and provide default values, preventing runtime errors.
 
`const librarything = book.reviews?.librarything?.reviewsCount ?? 0;`⇒This ensures your app never crashes and always has a safe fallback.


### Higher-Order Functions

 **Built-in HOFs:**

   - `map()` → transforms each element of an array.
   - `filter()` → keeps elements that satisfy a condition.
   - `reduce()` → reduces array to a single value.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, init_value);
console.log(sum);
//acc is value of return type
// Output: 10
```

   - `forEach()` → iterates over elements 
 
#### sort()   
→  sorts the elements of an array in place and returns the reference to the same array
**Default Behavior**
  - By default, `sort()` converts elements into strings and sorts them according to their UTF-16 code units values.
 Example with Strings:
```js
const names = ["Zoe", "Amr", "Ben"];
names.sort(); // ["Amr", "Ben", "Zoe"]
```
• The Pitfall with Numbers:
```js
const numbers = [10, 5, 80, 1];
numbers.sort(); // [1, 10, 5, 80] (because "10" comes before "5" as a string)
```

 **Using a Compare Function**
To sort numbers correctly, you must provide a compare function.
• Syntax: `array.sort((a, b) => a - b)`
• Ascending Order:
```js
const nums = [10, 5, 80, 1];
nums.sort((a, b) => a - b); // [1, 5, 10, 80]
```
• Descending Order:
```js
nums.sort((a, b) => b - a); // [80, 10, 5, 1]
```
**Important** Mutation
- `sort()` mutates the original array. In React, it is better to copy the array first to avoid side effects:
```js
const sortedArray = [...originalArray].sort((a, b) => a - b);
```

## Asynchronous JS: Promises & Async/Awat
### promise 
 - A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
  **States**:
  • **Pending**: Initial state, neither fulfilled nor rejected.
  • **Fulfilled**: Operation completed successfully.
  • **Rejected**: Operation failed.
  • **Consuming Promises:** We use `.then()` for success and `.catch()` for errors.
  • **Example**:
```js
fetch('[suspicious link removed]')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));  
```
### **Async/Await**
- **Async/Await** is syntactic sugar built on top of Promises. It makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.
  • `async` keyword: Used to define a function that returns a promise.
   • `await` keyword: Pauses the execution of the async function until the promise is settled (fulfilled or rejected).
  • Error Handling: Uses `try...catch` blocks instead of `.catch()`.
   • Example:
```js
async function getData() {
  try {
    const res = await fetch('[suspicious link removed]');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```