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


    // LEFT INPUT

    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function () {
            if (centerOperand.value === '') {
                leftOperand.value += this.innerHTML;
                console.log()
            } else {
                rightOperand.value += this.innerHTML;
            }
        })
    }

    // CENTER INPUT

    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', function () {
            centerOperand.value = this.innerHTML;
        })
    }

    // EQUATION FUNCTIONALITY (switch?)

    var multiplication = '*';
    var division = '/';
    var addition = '+';
    var subtraction = '-';

    switch(doMath){
        case multiplication:
            leftOperand.value * rightOperand.value;

            break;
        case division:
            leftOperand.value / rightOperand.value;

            break;
        case addition:
            leftOperand.value + rightOperand.value;

            break;
        case subtraction:
            leftOperand.value - rightOperand.value;

            break;
    }

    equals.addEventListener('click', doMath);









})();