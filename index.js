"use-strict";

const l = console.log;

// JavaScript Assignment 14
/*
1. Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
Sample Input:
*/
const employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];
/*
Output: [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
][
  ({
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  })
];
*/

// Output
// =>

// a)
const itEmployees = (arr) =>
  arr.filter(({ department }) => department === "IT");

l(itEmployees(employees), "|| quest 1 section a");

// b)
const filteredEmployes = (arr) => arr.filter(({ Salary }) => Salary < 65000);

l(filteredEmployes(employees), "|| quest 1 section b");

/*
2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune
Sample Input:
*/

const hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];
/*
Output:
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",

"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”,
}
]
*/

// a) Number of Beds > 200
// Output

/**
 *
 * @param {*} arr
 * @returns hospitals with Beds > 200
 */
const filterBeds = (arr) => arr.filter(({ noOfBeds }) => noOfBeds > 200);

l(filterBeds(hospitals), "|| quest 2 option a");

// b) Availability of Beds = Yes
// Output

/**
 *
 * @param {*} arr
 * @returns hospitals with beds availability
 */
const filterBedsAvailibility = (arr) =>
  arr.filter(({ availability }) => availability === "Yes");

l(filterBedsAvailibility(hospitals), "|| quest 2 option b");

// c) Location = Pune
// Output

/**
 *
 * @param {*} arr
 * @returns hospitals with beds availability
 */
const filterBedsFromPune = (arr) =>
  arr.filter(({ location }) => location === "Pune");

l(filterBedsFromPune(hospitals), "|| quest 2 option c");
