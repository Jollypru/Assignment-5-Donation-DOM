function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    // console.log(inputValue);
    const inputValueNumber = parseFloat(inputValue);
    // console.log(inputValueNumber);
    return inputValueNumber;
   
}

function getTextFieldValueById(id){
    const amount = document.getElementById(id).innerText;
    // console.log(amount);
    const amountNumber = parseFloat(amount);
    // console.log(amountNumber);
    return amountNumber;
}

function showSectionById(){
    
}