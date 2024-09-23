const donationButton = document.getElementById('btn-donation');
donationButton.addEventListener('click', function(){
    donationButton.style.backgroundColor =  '#B4F461';

    document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
        const addedAmount = getInputFieldValueById('input-donate-noakhali');
        // console.log(donationAmount);
        const donatedAmount = getTextFieldValueById('donatedAmountNoakhali');
    
        const totalDonatedAmount = addedAmount + donatedAmount;
        console.log('amount donated',totalDonatedAmount);
        document.getElementById('donatedAmountNoakhali').innerText = totalDonatedAmount;
    
    })
    
    document.getElementById('btn-donate-feni').addEventListener('click', function(){
        const addedAmount = getInputFieldValueById('input-donate-feni');
        // console.log(donationAmount);
        const donatedAmount = getTextFieldValueById('donatedAmountFeni');
    
        const totalDonatedAmount = addedAmount + donatedAmount;
        console.log('amount donated for feni',totalDonatedAmount);
        document.getElementById('donatedAmountFeni').innerText = totalDonatedAmount;
    })
    
    document.getElementById('btn-donate-for-aid').addEventListener('click', function(){
        const addedAmount = getInputFieldValueById('input-donate-for-aid');
        // console.log(donationAmount);
        const donatedAmount = getTextFieldValueById('donatedAmountForAid');
    
        const totalDonatedAmount = addedAmount + donatedAmount;
        console.log('amount donated for aid',totalDonatedAmount);
        document.getElementById('donatedAmountForAid').innerText = totalDonatedAmount;
    })
    
    
})

// const donationButton = document.getElementById('btn-donation').addEventListener('click', function(){
//     donationButton.style.backgroundColor =  '#B4F461';
// })


document.getElementById('btn-history').addEventListener('click', function(){
    console.log('history button clicked');
})