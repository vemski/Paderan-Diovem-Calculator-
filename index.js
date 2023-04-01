let button = document.getElementById('btn');
button.addEventListener('click', calc);

function calc(){

    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    switch(operator){
        case '*':
            document.getElementById("answer").innerHTML = numberOne * numberTwo;
            break;
        case '/':
            document.getElementById("answer").innerHTML = numberOne / numberTwo;
            break;
        case '+':
            document.getElementById("answer").innerHTML = numberOne + numberTwo;
            break;
        case '-':
            document.getElementById("answer").innerHTML = numberOne - numberTwo;
            break;
        default:
            document.getElementById("answer").innerHTML = "Invalid Input"
    }
}
