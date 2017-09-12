const output = document.getElementById('output');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const point = document.getElementById('point');
const reset = document.getElementById('reset');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');

// Calculator which mimics the look and function of a standard, physical, calculator.
// Strings used to construct multi-digit numbers as would be expected of this type of calculator.
// parseInt() used to convert string to int for the purpose of calculation.

const greeting = "Ashton's Calculator :)"
let total = 0;
let visual = "";
let calculation = "plus"; //Will, by default, add visual to total.
let toClear = false;
let pointUsed = false;
output.textContent = greeting;

var calculator = {
    reset : function() {
      visual = "";
      calculation = "plus";
      total = 0;
      output.textContent = greeting;
    },
    clear : function () {
      if (toClear === true) {
        visual = "";
        output.textContent = "";
        toClear = false;
      }
    },
    constructOutput : function(x) {
      visual += x;
      output.textContent = visual;
    },
    calculate : function(x) {
      if(visual===""){

      } else {
        if(calculation==="plus"){
          total += parseFloat(visual);
        } else if(calculation==="minus"){
          total -= parseFloat(visual);
        } else if(calculation==="divide"){
          total /= parseFloat(visual);
        } else if(calculation==="multiply"){
          total *= parseFloat(visual);
        } else if(calculation==="equal"){
          output.textContent = total;
        }
      }
      output.textContent = total;
      visual = "";
      toClear = true;
      pointUsed = false;
      calculation = x;
    },
    one : function() {
      this.clear();
      this.constructOutput("1");
    },
    two : function() {
      this.clear();
      this.constructOutput("2");
    },
    three : function() {
      this.clear();
      this.constructOutput("3");
    },
    four : function() {
      this.clear();
      this.constructOutput("4");
    },
    five : function() {
      this.clear();
      this.constructOutput("5");
    },
    six : function() {
      this.clear();
      this.constructOutput("6");
    },
    seven : function() {
      this.clear();
      this.constructOutput("7");
    },
    eight : function() {
      this.clear();
      this.constructOutput("8");
    },
    nine : function() {
      this.clear();
      this.constructOutput("9");
    },
    zero : function() {
      this.clear();
      if(visual===""){
        //Deny input if string is empty.
      } else {
        this.constructOutput("0");
      }
    },
    point : function() {
      this.clear();
      if(pointUsed===false){
        this.constructOutput(".");
        pointUsed=true;
      } else {
        //Deny input if point already used in calculation.
      }
    },
};

one.addEventListener('click', (e) => {
    calculator.one();
});

two.addEventListener('click', (e) => {
    calculator.two();
});

three.addEventListener('click', (e) => {
    calculator.three();
});

four.addEventListener('click', (e) => {
    calculator.four();
});

five.addEventListener('click', (e) => {
    calculator.five();
});

six.addEventListener('click', (e) => {
    calculator.six();
});

seven.addEventListener('click', (e) => {
    calculator.seven();
});

eight.addEventListener('click', (e) => {
    calculator.eight();
});

nine.addEventListener('click', (e) => {
    calculator.nine();
});

zero.addEventListener('click', (e) => {
    calculator.zero();
});

point.addEventListener('click', (e) => {
    calculator.point();
});

reset.addEventListener('click', (e) => {
    calculator.reset();
});

plus.addEventListener('click', (e) => {
    calculator.calculate("plus");
});

minus.addEventListener('click', (e) => {
    calculator.calculate("minus");
});

multiply.addEventListener('click', (e) => {
    calculator.calculate("multiply");
});

divide.addEventListener('click', (e) => {
    calculator.calculate("divide");
});

equal.addEventListener('click', (e) => {
    calculator.calculate("equal");
});
