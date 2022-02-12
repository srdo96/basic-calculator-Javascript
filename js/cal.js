const zero = document.getElementById("zero-btn");
const one = document.getElementById("one-btn");
const two = document.getElementById("two-btn");
const three = document.getElementById("three-btn");
const four = document.getElementById("four-btn");
const five = document.getElementById("five-btn");
const six = document.getElementById("six-btn");
const seven = document.getElementById("seven-btn");
const eight = document.getElementById("eight-btn");
const nine = document.getElementById("nine-btn");
const divide = document.getElementById("divide-btn");
const multiplication = document.getElementById("multiplication-btn");
const point = document.getElementById("point-btn");
const equal = document.getElementById("equal-btn");
const plus = document.getElementById("plus-btn");
const minus = document.getElementById("minus-btn");

// common function
function displayNum(elementId, num) {
  const displayText = document.getElementById(elementId);
  displayText.innerText = num;
}

zero.addEventListener("click", function () {
  displayNum("display", "0");
});
one.addEventListener("click", function () {
  displayNum("display", "1");
});
two.addEventListener("click", function () {
  displayNum("display", "2");
});
three.addEventListener("click", function () {
  displayNum("display", "3");
});
four.addEventListener("click", function () {
  displayNum("display", "4");
});
five.addEventListener("click", function () {
  displayNum("display", "5");
});
six.addEventListener("click", function () {
  displayNum("display", "6");
});
seven.addEventListener("click", function () {
  displayNum("display", "7");
});
eight.addEventListener("click", function () {
  displayNum("display", "8");
});
nine.addEventListener("click", function () {
  displayNum("display", "9");
});
plus.addEventListener("click", function () {
  displayNum("display", "+");
});
minus.addEventListener("click", function () {
  displayNum("display", "-");
});
multiplication.addEventListener("click", function () {
  displayNum("display", "x");
});
divide.addEventListener("click", function () {
  displayNum("display", "/");
});
point.addEventListener("click", function () {
  displayNum("display", ".");
});
