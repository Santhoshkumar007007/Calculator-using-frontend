// This function clear all the values
const buttons =document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button){
    button.addEventListener('click',calculate)
});


function calculate(event){
    const clickButtobValue = event.target.value;

    if(clickButtobValue === "="){
        if(display.value !== ''){
            display.value = eval(display.value);
        }
    else if(clickButtobValue === "C"){
        display.value = ''
    }else{
        display.value += clickButtobValue
    }

    }    
    
}