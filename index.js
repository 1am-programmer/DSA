//Big O notation - Checking  time complexity of the function
function summation(n) {
  let sum = 0; //executes once
  for (let i = 0; i <= n; i++) {
    sum += i; //executes four time i=1 to i=4
  }

  return sum; //executes once
}

console.log(summation(4)); //Output: 10 (1 + 2 + 3 + 4)
//Total count is n+2 given that n is the input of the function
// and n =4 so total count is 4+2 =6
//So the time complexity is dependent on the input size Big-O is expressed in terms of the input size

//Big O focuses on the bigger picture, as the input size increases, the 2 stays constant until it becomes insignificant because contributes to the total value
