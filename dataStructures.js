// level {1/2/3}

// Level 2

// 1.
const inputArray = [1, 3, 4, 6, 7, 8];

const outputArray = inputArray.filter((number) => {
  return number % 2 !== 0;
});

console.log(outputArray);

// 2.
const inputString = "Elie";

const outputString = inputString.replace(/[aeiou]/gi, (char) => {
  return char.toUpperCase();
});

console.log(outputString);

// 3.
const newInputArray = [1, 3, 4, 6, 7, 8, 2, 5];

const maxElement = Math.max(...newInputArray);

console.log(maxElement);
