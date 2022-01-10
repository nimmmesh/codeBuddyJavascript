# Loops and Iteration

## Level 1

---

Write a function in Javascript to print the following pattern.

```
      1
    1 2 1
  1 2 3 2 1
1 2 3 4 3 2 1
```

The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.

## Level 2

---

Write a function in Javascript to print the sum of the first n fibonacci numbers.

**Input:** 6

**Output:**

```
1 1 2 3 5 8
Sum: 20
```

## Level 3

---

Normalize the following object to an array of objects.

**Input:**

```
{
  liked: [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "John Smith", age: 40 }
  ],
  disliked: [
    { id: 4, name: "Jason Doe", age: 20 },
    { id: 5, name: "Josh Doe", age: 30 },
    { id: 6, name: "Karen Smith", age: 40 }
  ],
  loved: [
    { id: 7, name: "Jasmine Doe", age: 20 },
    { id: 8, name: "Bob Doe", age: 30 },
    { id: 9, name: "Tom Smith", age: 40 }
  ]
}
```

**Output:**

```
[
  { id: 1, name: "John Doe", age: 20, liked: true },
  { id: 2, name: "Jane Doe", age: 30, liked: false },
  { id: 3, name: "John Smith", age: 40, liked: true },
  { id: 4, name: "Jason Doe", age: 20, liked: false },
  { id: 5, name: "Josh Doe", age: 30, liked: false },
  { id: 6, name: "Karen Smith", age: 40, liked: false },
  { id: 7, name: "Jasmine Doe", age: 20, liked: true },
  { id: 8, name: "Bob Doe", age: 30, liked: false },
  { id: 9, name: "Tom Smith", age: 40, liked: true }
]
```
