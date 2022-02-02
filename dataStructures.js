// level {1/2/3}

// Level 1

// 1.
const numberArray = [1, 2, 3];
console.log(
  numberArray.map((number) => {
    return number + 1;
  })
);

// 2.

console.log(
  [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
);

// 3.
const userName = { name: "Elie", rank: "Pro" };
let outputStr = "";

for (const key in userName) {
  outputStr += `${key}: ${userName[key]},`;
}
console.log(outputStr);

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

// Level 3

// 1.
let user = {
  name: "Elie",
  job: "Instructor",
  workDetails: {
    type: "Part Time",
    hours: "40 hours",
  },
  educationQualifications: [
    {
      name: "Full Stack",
      type: "Certification",
    },
    {
      name: "Javascript",
      type: "Certification",
    },
  ],
};

const objectUpperCase = (object) => {
  Object.keys(object).map((key) => {
    object[key] = object[key].toUpperCase();
  });
  return object;
};

const arrayUpperCase = (array) => {
  return array.map((object) => {
    return objectUpperCase(object);
  });
};

for (const key in user) {
  switch (user[key].constructor.name) {
    case "String":
      user[key] = user[key].toUpperCase();
      break;
    case "Object":
      objectUpperCase(user[key]);
      break;
    case "Array":
      arrayUpperCase(user[key]);
      break;

    default:
      break;
  }
}

console.log(user);

// 2.
const inputStr = "a:2,b:3,c:4,a:5,b:6";
const keys = [];
const values = [];
const outputObj = {};

for (let index = 0; index < inputStr.length; index++) {
  const element = inputStr[index];
  if (element !== "," && element !== ":") {
    if (index % 4 === 0) {
      keys.push(element);
    } else {
      values.push(element);
    }
  }
}

keys.map((key, index) => {
  if (outputObj.hasOwnProperty(key)) {
    outputObj[key] += parseInt(values[index]);
  } else {
    outputObj[key] = parseInt(values[index]);
  }
});

console.log(outputObj);

// 3.
const validStr = "{[({})]}";
const invalidStr = "{[(]}";

const isBalancedParenthesis = (string) => {
  const stack = [];
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === "(" || element === "[" || element === "{") {
      stack.push(element);
    } else if (element === ")" || element === "]" || element === "}") {
      switch (stack.pop()) {
        case "(":
          if (element === "]" || element === "}") {
            return false;
          }
          break;

        case "[":
          if (element === ")" || element === "}") {
            return false;
          }
          break;

        case "{":
          if (element === ")" || element === "]") {
            return false;
          }
          break;

        default:
          break;
      }
    }
  }
  return stack.length === 0;
};

console.log(isBalancedParenthesis(validStr));
console.log(isBalancedParenthesis(invalidStr));
