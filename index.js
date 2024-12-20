//Linear Time Complexity O(n)
function summation(n) {
  let sum = 0; //executes once
  for (let i = 0; i <= n; i++) {
    sum += i; //executes four time i=1 to i=4
  }

  return sum; //executes once
}

console.log(summation(4)); //Output: 10 (1 + 2 + 3 + 4)
//Total count is n+2 given that n is the input of the function and n =4 so total count is 4+2 =6
//So the time complexity is dependent on the input size Big-O is expressed in terms of the input size

//Big O focuses on the bigger picture, as the input size increases, the 2 stays constant until it becomes insignificant because contributes to the total value

//Constant Time Complexity   O(1)
function addition(n) {
  return (n * (n + 1)) / 2; //irrespective of the input size, the line will always execute once
}
console.log(addition(5)); //Output: 15

//Quadratic Time Complexity O(n^2)
function quadratic(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
quadratic(3);
