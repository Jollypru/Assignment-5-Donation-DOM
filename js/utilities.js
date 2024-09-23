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

function showSectionById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    return;
}

function toggleButton(id){
    document.getElementById('btn-donation').classList.remove('active');
    document.getElementById('btn-history').classList.remove('active');

    document.getElementById(id).classList.add('active');
}