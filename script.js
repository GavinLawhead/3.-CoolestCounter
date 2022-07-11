// let text = "";

// for (let i = 0; i < 10; i++) {
//   text += "The number is " + i + "<br>";
// }

// document.querySelector(".time").innerHTML = text;
setInterval(() => {
  let number = "";
  let i = "";
  document.querySelector("p.firstnum").innerHTML = number;

  while (i < 10) {
    i = 0;
    console.log(i);
  }
  if (number < 9) {
    i++;
  }
}, 1000);

// number += i;

// let second = document.querySelector("p.secondnum");
// secondnumber = 0;
// setInterval(() => {
//   secondnumber++;
//   second.innerHTML = secondnumber;
// }, 1000);
// let third = document.querySelector("p.thirdnum");
// thirdnumber = 0;
// setInterval(() => {
//   thirdnumber++;
//   third.innerHTML = thirdnumber;
// }, 100000);
// let fourth = document.querySelector("p.fourthnum");
// fourthnumber = 0;
// setInterval(() => {
//   fourthnumber++;
//   fourth.innerHTML = fourthnumber;
// }, 1000000)
