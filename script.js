const NUMBERS = document.querySelectorAll(".number");
const DISPLAY = document.querySelector(".display");





NUMBERS.forEach((button) => {
    button.addEventListener("click", () =>{
        DISPLAY.textContent += button.textContent;
        //console.log(button.textContent);
    })
});




function operate(operator, number1, number2){
    if(operator == "+"){
        return add(number1, number2);
    }
    else if(operator == "-"){
        return subtract(number1, number2);
    }
    else if(operator == "*"){
        return multiply(number1, number2);
    }
    else if(operator == "/"){
        return divide(number1,number2);
    }
}


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log(operate("/", 4,5));