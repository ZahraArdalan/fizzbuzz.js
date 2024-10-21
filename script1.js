function fizzBuzz(number) {
  if (typeof number !== "number") {
    console.log("not a number");
  } else if (number % 5 == 0) {
    console.log("fizz");
  } else if (number % 3 == 0) {
    console.log("buzz");
  } else if (number % 3 == 0 && number % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    console.log(number);
  }
}

console.log(fizzBuzz(2));
