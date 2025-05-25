//track what is displayed 
let display = document.getElementById('display');

//Append values to the input 
function appendValue(value) {
    display.value += value;
}

//clear everything 
function clearDisplay () {
    display.value = "";
}

//delete last character
function delateLast () {
    display.value = display.value.slice(0, -1);
}

//calculate the result using eval
function calculate() {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}