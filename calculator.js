let btn = document.getElementById("btnCalculate");
let result = document.getElementById("result");
let finalResult;

let numOneErr = document.getElementById("numOneErr");
let numTwoErr = document.getElementById("numTwoErr");
let operatorErr = document.getElementById("operatorErr");

let numOneStatus, numTwoStatus, operatorStatus = false; 

numOneErr.style.display = "none";
numTwoErr.style.display = "none";
operatorErr.style.display = "none";


btn.addEventListener("click", function() {
    let num1 = document.getElementById("firstNum");
    let num2 = document.getElementById("secondNum");
    let operator = document.getElementById("operation");

    checkValidation(num1, num2, operator);

    if(!numOneStatus && !numTwoStatus && !operatorStatus) {
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);
    
        switch (operator.value) {
            case "add":
                finalResult = num1 + num2;
                break;
            case "minus":
                finalResult = num1 - num2;
                break;
            case "multiply":
                finalResult = num1 * num2;
                break;
            case "division":
                finalResult = num1 / num2;
                break;
            case "default":
                console.log("operation error");
                break;
        }
        result.innerHTML = finalResult;
    }
});

function checkValidation(num1, num2, operator){
    if(num1.value == "" || num1.value == null || num1.value == undefined) {
        numOneErr.style.display = "block";
        numOneStatus = true;
    } else{
        numOneErr.style.display = "none";
        numOneStatus = false;
    }
    if(num2.value == "" || num2.value == null || num2.value == undefined) {
        numTwoErr.style.display = "block";
        numTwoStatus = true;
    } else{
        numTwoErr.style.display = "none";
        numTwoStatus = false;
    }
    if(operator.value == "empty") {
        operatorErr.style.display = "block";
        operatorStatus = true;
    } else{
        operatorErr.style.display = "none";
        operatorStatus = false;
    }
}