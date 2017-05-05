/**
 * Created by canidmars on 4/17/17.
 */

(function () {
    "use strict";

    var leftOperand = document.getElementById("left-operand");
    var centerOperand = document.getElementById("center-operand");
    var rightOperand = document.getElementById("right-operand");
    var number = document.getElementsByClassName('number');
    var operator = document.getElementsByClassName('operator');
    var equals = document.getElementById('equals');
    var clear = document.getElementById('clear');
    var decimal = document.getElementById('decimal');
    var negPos = document.getElementById('negPos');
    var percentage = document.getElementById('percentage');


    ///// LEFT INPUT

    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function () {
            if (centerOperand.value === '') {
                leftOperand.value += this.innerHTML;
            } else {
                rightOperand.value += this.innerHTML;
            }
        })
    }


    ///// CENTER INPUT

    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', function () {
            centerOperand.value = this.innerHTML;
        })
    }


    ///// CLEAR

    function clearInput (){
        leftOperand.value = '';
        centerOperand.value = '';
        rightOperand.value = '';
    }

    clear.addEventListener('click', clearInput);


    ///// DECIMAL

    var decimalPoint;

    function addDecimal (){
        decimalPoint = '.';
        if (centerOperand.value === ''){
        leftOperand.value += decimalPoint;
        } else {
            rightOperand.value += decimalPoint;
        }
    }

    decimal.addEventListener('click', addDecimal);


    ///// NEGATIVE/POSITIVE

    var negativeL;
    var negativeR;

    function makeNegative(value) {
        negativeL = leftOperand.value * -1;
        negativeR = rightOperand.value * -1;
        if (centerOperand.value === '') {
            leftOperand.value = negativeL;
        } else {
            rightOperand.value = negativeR;
        }
    }

    negPos.addEventListener('click', makeNegative);


    ///// PERCENTAGE

    var percentSignL;
    var percentSignR;

    function makePercent() {
        percentSignL = leftOperand.value * .100;
        percentSignR = rightOperand.value * .100;
        if (centerOperand.value === '') {
            leftOperand.value = percentSignL
        } else {
            rightOperand.value = percentSignR
        }
    }

    percentage.addEventListener('click', makePercent);


    ///// EQUATION FUNCTIONALITY

    var multiplication;
    var division;
    var addition;
    var subtraction;

    function doMath() {

        switch (centerOperand.value) {
            case 'x':
                multiplication = leftOperand.value * rightOperand.value;
                leftOperand.value = multiplication;
                break;
            case '÷':
                division = leftOperand.value / rightOperand.value;
                leftOperand.value = division;
                break;
            case '+':
                addition = +leftOperand.value + +rightOperand.value;
                leftOperand.value = addition;
                break;
            case '-':
                subtraction = leftOperand.value - rightOperand.value;
                leftOperand.value = subtraction;
                break;
        }
        centerOperand.value = '';
        rightOperand.value = '';
    }

    equals.addEventListener('click', doMath);


    ///// MAKING KEYPAD WORK
/*
    number[i].addEventListener('keydown', function(event) {
        if(event.key49) {
            if (centerOperand.value === '') {
                leftOperand.value += 1;
            } else {
                rightOperand.value += 1;
            }
        }
    });


    //snippet(use?):
    addEventListener("keypress", function(event) {
        console.log(String.fromCharCode(event.charCode));
    });


 */
})();