var input = prompt("Enter your Dob (dd/mm/yy)", "16/jan/2006");
var monthNames = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];
var dob = new Date(input);
var todayDate = new Date();
console.log(todayDate, dob);
var milliSec = todayDate - dob;
var age = Math.floor(milliSec / (365 * 24 * 60 * 60 * 1000));
console.log(
  "Your DOB is " +
    dob.getDate() +
    " " +
    monthNames[dob.getMonth()] +
    " " +
    dob.getFullYear() +
    " and your age is " +
    age +
    " years"
);
document.write(
  "<h1> Your DOB is " +
    dob.getDate() +
    " " +
    monthNames[dob.getMonth()] +
    " " +
    dob.getFullYear() +
    " and your age is " +
    age +
    " years </h1>"
);
