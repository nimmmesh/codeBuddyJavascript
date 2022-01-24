// level {1/2/3}

//  Level 2

inputNumber = 6;

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
