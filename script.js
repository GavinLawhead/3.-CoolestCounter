const randColor = () => {
  let color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
  return color;
};
function sixthcolors() {
  if (sixthnumber == 0) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 1) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 2) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 3) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 4) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 5) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 6) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 7) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 8) {
    sixth.style.color = randColor();
  } else if (sixthnumber == 9) {
    sixth.style.color = randColor();
  }
}
function fifthcolors() {
  if (sixthnumber == 0) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 1) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 2) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 3) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 4) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 5) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 6) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 7) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 8) {
    fifth.style.color = randColor();
  } else if (fifthnumber == 9) {
    fifth.style.color = randColor();
  }
}
function fourthcolors() {
  if (fourthnumber == 0) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 1) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 2) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 3) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 4) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 5) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 6) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 7) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 8) {
    fourth.style.color = randColor();
  } else if (fourthnumber == 9) {
    fourth.style.color = randColor();
  }
}
function thirdcolors() {
  if (sixthnumber == 0) {
    third.style.color = randColor();
  } else if (thirdnumber == 1) {
    third.style.color = randColor();
  } else if (thirdnumber == 2) {
    third.style.color = randColor();
  } else if (thirdnumber == 3) {
    third.style.color = randColor();
  } else if (thirdnumber == 4) {
    third.style.color = randColor();
  } else if (thirdnumber == 5) {
    third.style.color = randColor();
  } else if (thirdnumber == 6) {
    third.style.color = randColor();
  } else if (thirdnumber == 7) {
    third.style.color = randColor();
  } else if (thirdnumber == 8) {
    third.style.color = randColor();
  } else if (thirdnumber == 9) {
    third.style.color = randColor();
  }
}
function secondcolors() {
  if (sixthnumber == 0) {
    second.style.color = randColor();
  } else if (secondnumber == 1) {
    second.style.color = randColor();
  } else if (secondnumber == 2) {
    second.style.color = randColor();
  } else if (secondnumber == 3) {
    second.style.color = randColor();
  } else if (secondnumber == 4) {
    second.style.color = randColor();
  } else if (secondnumber == 5) {
    second.style.color = randColor();
  } else if (secondnumber == 6) {
    second.style.color = randColor();
  } else if (secondnumber == 7) {
    second.style.color = randColor();
  } else if (secondnumber == 8) {
    second.style.color = randColor();
  } else if (secondnumber == 9) {
    second.style.color = randColor();
  }
}
function firstcolors() {
  if (firstnumber == 0) {
    first.style.color = randColor();
  } else if (firstnumber == 1) {
    first.style.color = randColor();
  } else if (firstnumber == 2) {
    first.style.color = randColor();
  } else if (firstnumber == 3) {
    first.style.color = randColor();
  } else if (firstnumber == 4) {
    first.style.color = randColor();
  } else if (firstnumber == 5) {
    first.style.color = randColor();
  } else if (firstnumber == 6) {
    first.style.color = randColor();
  } else if (firstnumber == 7) {
    first.style.color = randColor();
  } else if (firstnumber == 8) {
    first.style.color = randColor();
  } else if (firstnumber == 9) {
    first.style.color = randColor();
  }
}
firstnumber = 0;
let first = document.querySelector("p.firstnum");
setInterval(() => {
  firstnumber++;
  if (firstnumber == 10) {
    firstnumber = 0;
  }
  firstcolors();
  first.innerHTML = firstnumber;
}, 1000000);
let second = document.querySelector("p.secondnum");
secondnumber = 0;
setInterval(() => {
  secondnumber++;
  if (secondnumber == 10) {
    secondnumber = 0;
  }
  secondcolors();
  second.innerHTML = secondnumber;
}, 100000);
let third = document.querySelector("p.thirdnum");
thirdnumber = 0;
setInterval(() => {
  thirdnumber++;
  if (thirdnumber == 10) {
    thirdnumber = 0;
  }
  thirdcolors();
  third.innerHTML = thirdnumber;
}, 10000);
let fourth = document.querySelector("p.fourthnum");
fourthnumber = 0;
setInterval(() => {
  fourthnumber++;
  if (fourthnumber == 10) {
    fourthnumber = 0;
  }
  fourthcolors();
  fourth.innerHTML = fourthnumber;
}, 1000);
let fifth = document.querySelector("p.fifthnum");
fifthnumber = 0;
setInterval(() => {
  fifthnumber++;
  if (fifthnumber == 10) {
    fifthnumber = 0;
  }
  fifthcolors();
  fifth.innerHTML = fifthnumber;
}, 100);
let sixth = document.querySelector("p.sixthnum");
sixthnumber = 0;
setInterval(() => {
  sixthnumber++;
  if (sixthnumber == 10) {
    sixthnumber = 0;
  }
  sixthcolors();
  sixth.innerHTML = sixthnumber;
}, 10);
