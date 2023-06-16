//Question1
//create an array called grades and put the following values: 56, 87, 99, 40

let grades = [56, 87, 99, 40];

//add another element at the end of the array with value: 68

grades.push(68);

// Remove the 1st element of the array

grades.shift();

// Change 40 to 60

grade[3] = 60;

//create a variable called average and compute for the average of the grades array


let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

let average = sum / grades.length;


//Question2
// 1. Create an object called vehicle with the specified properties
let vehicle = {
  name: "Car",
  brand: "Toyota",
  yearOfMake: 2022,
  numberOfWheels: 4,
  isEnvironmentFriendly: true,
};

// 2. Use the for-in loop to display both the properties and values of the object
for (let key in vehicle) {
  console.log(`${key}: ${vehicle[key]}`);
}
