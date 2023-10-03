// var input = prompt("Enter your Dob (dd/mm/yy)", "16/jan/2006");
// var monthNames = [
//   "January",
//   "Feburary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "Decemeber",
// ];
// var dob = new Date(input);
// var todayDate = new Date();
// console.log(todayDate, dob);
// var milliSec = todayDate - dob;
// var age = Math.floor(milliSec / (365 * 24 * 60 * 60 * 1000));
// console.log(
//   "Your DOB is " +
//     dob.getDate() +
//     " " +
//     monthNames[dob.getMonth()] +
//     " " +
//     dob.getFullYear() +
//     " and your age is " +
//     age +
//     " years"
// );
// document.write(
//   "<h1> Your DOB is " +
//     dob.getDate() +
//     " " +
//     monthNames[dob.getMonth()] +
//     " " +
//     dob.getFullYear() +
//     " and your age is " +
//     age +
//     " years </h1>"
// );


function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  if (isNaN(dob)) {
    document.getElementById('error').innerText = "Please enter valid age";
    setTimeout(() => {
      document.getElementById('error').innerText = "";
    }, 3000);
    document.getElementById('result').innerText = "";
  } else {
    let today = new Date();
    let milliSec = today - dob;
    let age = Math.floor(milliSec / (60 * 60 * 24 * 365 * 1000))
    document.getElementById('error').innerText = "";
    document.getElementById('result').innerText = "Your age is " + age + " years";
  }
}