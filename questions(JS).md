## Q-2 What are data types in Javascript? Explain the different types of data types with examples.

In JavaScript, data types refer to the type of data that a variable can store. JavaScript has primitive and non-primitive data types.\

### Primitive Data Types
Primitive data types are the built-in data types provided by JavaScript. They represent single values and are  immutable.\
There are 7 primitive data types in JavaScript:

***String***

A string is a sequence of characters. It represents textual data.\
It is enclosed within either single quotes (') or double quotes (")

ex:
```
let name = "Pravleen"; 
let greeting = 'Hello, world!';  
```
***Number***

The number data type represents both integer and floating-point numbers.

ex:
```
let age = 25;  // Integer
let price = 19.99;  // Float
```
***BigInt***

Introduced in ECMAScript 2020, BigInt is used to represent numbers that are too large for the Number type. It can store values larger than 2^53 - 1 (the largest number JavaScript can handle with Number).

ex:
```
let bigNumber = 9007199254740992n;
```
***Boolean***

A boolean represents a logical data type that can have only the values: true or false.

ex:
```
let isActive = true; 
let hasPermission = false; 
```
***Undefined***

A variable that is declared but not assigned a value.

ex:
```
let x;  // undefined
console.log(x); 
```

***Null***

A null value means no value. It means an empty value or absence of value.

ex:
```
let user = null;  
console.log(user); 
```
***Symbol***

The symbol data type in JavaScript defines a property of an object which is private to the object

ex:
```
let value1 = Symbol("value");
let value2 = Symbol("value");
alert(value1 == value2); // false
```

### Non-Primitive Data Types

Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values.

***Object***

An object in Javascript is an entity having properties and methods. Everything is an object in javascript.

ex:
```
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true
};
console.log(person.name);  // Alice
```

***Array***

An array is a special type of object used to store a list of values, which can be of any type (string, number, boolean, etc.).

ex:
```
let numbers = [10, 20, 30, 40];
let fruits = ["apple", "banana", "cherry"];
console.log(numbers[0]);  // 10
console.log(fruits[1]);  // banana
```

***Function***

A function is also a reference type in JavaScript. It is a block of code that can be invoked or executed when called.

ex:
```
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));  // Hello, John
```
