// let text = "";

// for (let i = 0; i < 10; i++) {
//   text += "The number is " + i + "<br>";
// }

// document.querySelector(".time").innerHTML = text;
// fourthnumber = 0;

// function countToTen() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// fourth = ;

let doc = document.querySelector("p.fourthnum");
setInterval(() => {
  for (let i = 1; i <= 10; i++) {
    doc = i;
  }
}, 1000);

// let second = document.querySelector("p.secondnum");
// secondnumber = 0;
// setInterval(() => {
//   if (secondnumber == 10) {
//     secondnumber = 0;
//   } else {
//     secondnumber++}, 1000},
// (second.innerHTML = secondnumber));

let second = document.querySelector("p.secondnum");
secondnumber = 0;
setInterval(() => {
  secondnumber++;
  if (secondnumber == 10) {
    secondnumber = 0;
  }
  second.innerHTML = secondnumber;
}, 1000);

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
