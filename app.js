// Homework-1
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    dayName = "sunday";
    break;
  case 1:
    dayName = "monday";
    break;
  case 2:
    dayName = "tuesday";
    break;
  case 3:
    dayName = "wednesday";
    break;
  case 4:
    dayName = "thursday";
    break;
  case 5:
    dayName = "friday";
    break;
  case 6:
    dayName = "saturday";
    break;
}
console.log(dayName);

// Homework-2
for (let i = 0; i < 101; i++) {
  console.log(i);
}

// Homework-3
let numbers = 0;
while (numbers < 51) {
  console.log(numbers);
  numbers++;
}

// Homework-4
let doIndex = 0;
do {
  console.log(doIndex);
  doIndex++;
} while (doIndex < 151);

// Homework-5
const numbersArray = [];
numsArray = 0;
for (let i = 0; i < 10000; i++) {
  numsArray = i * i;
  numbersArray.push(numsArray);
}
console.log(numbersArray);

// Homework-6
// First
let firstnumbersArray = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
let biggest = firstnumbersArray[0];
let secondbiggest = firstnumbersArray[0];
for (let i = 0; i < firstnumbersArray.length; i++) {
  if (biggest < firstnumbersArray[i]) {
    biggest = firstnumbersArray[i];
  } else if (
    firstnumbersArray[i] > secondbiggest &&
    firstnumbersArray[i] != biggest
  )
    secondbiggest = firstnumbersArray[i];
}
console.log(secondbiggest);

// Second
let secondnumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest = secondnumbersArray[0];
let secondlargest = secondnumbersArray[0];
for (let i = 0; i < secondnumbersArray.length; i++) {
  if (secondnumbersArray[i] > largest) {
    secondlargest = largest;
    largest = secondnumbersArray[i];
  } else if (
    secondnumbersArray[i] > secondlargest &&
    secondnumbersArray[i] != largest
  )
    secondlargest = secondnumbersArray[i];
}
console.log(secondlargest);

// Third
let thirdnumbersArray = [2, 3, 6, 6, 5];
let widest = thirdnumbersArray[0];
let secondwidest = thirdnumbersArray[0];
for (let i = 0; i < thirdnumbersArray.length; i++) {
  if (widest < thirdnumbersArray[i]) {
    widest = thirdnumbersArray[i];
  } else if (
    thirdnumbersArray[i] > secondwidest &&
    thirdnumbersArray[i] != widest
  )
    secondwidest = thirdnumbersArray[i];
}
console.log(secondwidest);
