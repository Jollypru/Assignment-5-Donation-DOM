function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
   
}

function getTextFieldValueById(id){
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function showSectionById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function toggleButton(id){
    document.getElementById('btn-donation').classList.remove('active');
    document.getElementById('btn-history').classList.remove('active');

    document.getElementById(id).classList.add('active');
}