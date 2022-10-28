const NUMBERS = document.querySelectorAll(".number");
const FUNCTIONS = document.querySelectorAll(".function");
const DISPLAY = document.querySelector(".display");
const AC = document.querySelector(".allClear");
const C = document.querySelector(".clear");
const EQUALS = document.querySelector(".eval");
const DECIMAL = document.querySelector(".decimal");

AC.addEventListener("click", () =>{
    DISPLAY.textContent = "0";
})

C.addEventListener("click", () =>{
    lastIndex = DISPLAY.textContent.lastIndexOf(" ");
    DISPLAY.textContent = DISPLAY.textContent.substring(0, lastIndex);

})

DECIMAL.addEventListener("click", () =>{
    DISPLAY.textContent += DECIMAL.textContent;
})

EQUALS.addEventListener("click", () =>{
    const ARRAY = DISPLAY.textContent.split(" ");
    console.log(ARRAY[1] +" "+ ARRAY[0]+ " "+ ARRAY[2]);
    result = operate(ARRAY[1], parseFloat(ARRAY[0]), parseFloat(ARRAY[2])).toPrecision(2);
    console.log(result);
    DISPLAY.textContent = result;
})

FUNCTIONS.forEach(button =>{
    button.addEventListener("click", () =>{
        if(button.classList.contains("multiply")){
            DISPLAY.textContent += " * ";
        }
        else if(button.classList.contains("divide")){
            DISPLAY.textContent += " / "
        }
        else{
            DISPLAY.textContent += " " + button.textContent + " ";
        }
        
    })
});

NUMBERS.forEach((button) => {
    button.addEventListener("click", () =>{
        if(DISPLAY.textContent[0] == "0" && DISPLAY.textContent[1] != "."){
            DISPLAY.textContent = button.textContent;
        }
        else{
            DISPLAY.textContent += button.textContent;
        }
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