let number = 0;

/**
 * You will be given a number,
 * if it is divisble by 3 then print "Fizz",
 * else if it is divisble by 5 print "Buzz",
 * else if it is divisible by both 5 and 3, pring "FizzBuzz",
 * else print the number itself.
 */

// number = prompt("Enter the number");

for (let i = 0; i < 100; i++) {
  number = i;
  if (isDivisible(number, 3) && isDivisible(number, 5)) {
    console.log("Fizz");
  } else if (isDivisible(number, 5)) {
    console.log("Buzz");
  } else if (isDivisible(number, 3)) {
    console.log("FizzBuzz");
  } else {
    console.log(number);
  }
}

function isDivisible(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}
