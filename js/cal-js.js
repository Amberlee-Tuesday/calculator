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

    // EQUATION FUNCTIONALITY


    var multiplication;
    var division;
    var addition;
    var subtraction;


    function doMath() {


        console.log(centerOperand.value);

        switch (centerOperand.value) {
            case 'x':
                leftOperand.value * rightOperand.value;
                alert ('multiplication');
                break;
            case '÷':
                leftOperand.value / rightOperand.value;
                alert ('division');
                break;
            case '+':
                leftOperand.value + rightOperand.value;
                alert ('addition');
                break;
            case '-':
                leftOperand.value - rightOperand.value;
                alert ('subtraction');
                break;
        }
    }

    equals.addEventListener('click', doMath);



})();