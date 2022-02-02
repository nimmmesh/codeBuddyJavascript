// level {1/2/3}

// Level 1
const generatePyramid = (n) => {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n; j++) {
      const abs = Math.abs(n - j);
      if (!(abs > i)) {
        output += (i - abs + 1).toString();
      }
    }
    console.log(output);
    output = "";
  }
};

generatePyramid(4);

//  Level 2

const calculateSum = (n) => {
  let fibo = [];

  fibo[0] = 0;
  fibo[1] = 1;

  let sum = fibo[0] + fibo[1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    sum += fibo[i];
  }

  console.log(fibo);
  return sum;
};

console.log(calculateSum(6));

// Level 3
const object = {
  liked: [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "John Smith", age: 40 },
  ],
  disliked: [
    { id: 4, name: "Jason Doe", age: 20 },
    { id: 5, name: "Josh Doe", age: 30 },
    { id: 6, name: "Karen Smith", age: 40 },
  ],
  loved: [
    { id: 7, name: "Jasmine Doe", age: 20 },
    { id: 8, name: "Bob Doe", age: 30 },
    { id: 9, name: "Tom Smith", age: 40 },
  ],
};

console.log([...object.liked, ...object.disliked, ...object.loved]);
