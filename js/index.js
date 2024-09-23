
document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const addedAmount = getInputFieldValueById('input-donate-noakhali');
    const donatedAmount = getTextFieldValueById('donatedAmountNoakhali');
    const currentBalance = getTextFieldValueById('current-balance');
    if ((addedAmount > currentBalance) || (addedAmount < 0) || isNaN(addedAmount) || addedAmount === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const totalDonatedAmount = addedAmount + donatedAmount;
    document.getElementById('donatedAmountNoakhali').innerText = totalDonatedAmount;

    const updatedBalance = currentBalance - addedAmount;
    document.getElementById('current-balance').innerText = updatedBalance;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });

    const donationName = document.getElementById('donation-noakhali').innerText;
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'text-xl')
    div.innerHTML = `
        <p>${addedAmount} Taka is donated for ${donationName}</p>
        <p>Date: ${formattedDate} </p>
    `
    document.getElementById('history-container').appendChild(div);

})

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const addedAmount = getInputFieldValueById('input-donate-feni');
    const donatedAmount = getTextFieldValueById('donatedAmountFeni');
    const currentBalance = getTextFieldValueById('current-balance');

    if ((addedAmount > currentBalance) || (addedAmount < 0) || isNaN(addedAmount) || addedAmount === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const totalDonatedAmount = addedAmount + donatedAmount;
    document.getElementById('donatedAmountFeni').innerText = totalDonatedAmount;

    const updatedBalance = currentBalance - addedAmount;
    document.getElementById('current-balance').innerText = updatedBalance;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });

    const donationName = document.getElementById('donation-feni').innerText;
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'text-xl')
    div.innerHTML = `
        <p>${addedAmount} Taka is donated for ${donationName}</p>
        <p>Date: ${formattedDate} </p>
    `
    document.getElementById('history-container').appendChild(div);
})

document.getElementById('btn-donate-for-aid').addEventListener('click', function () {
    const addedAmount = getInputFieldValueById('input-donate-for-aid');
    const donatedAmount = getTextFieldValueById('donatedAmountForAid');
    const currentBalance = getTextFieldValueById('current-balance');

    if ((addedAmount > currentBalance) || (addedAmount < 0) || isNaN(addedAmount) || addedAmount === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const totalDonatedAmount = addedAmount + donatedAmount;
    document.getElementById('donatedAmountForAid').innerText = totalDonatedAmount;

    const updatedBalance = currentBalance - addedAmount;
    document.getElementById('current-balance').innerText = updatedBalance;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });

    const donationName = document.getElementById('donation-for-aid').innerText;
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'text-xl')
    div.innerHTML = `
        <p>${addedAmount} Taka is donated for ${donationName}</p>
        <p>Date: ${formattedDate} </p>
    `
    document.getElementById('history-container').appendChild(div);
})
