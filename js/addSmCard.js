document.getElementById('donate-btn')
.addEventListener('click',function (event){
    event.preventDefault();
    const inputAmount=getInputValueById('input-amount');
    if(isNaN(inputAmount)){
        alert("Money enter correctly");
        return;
    }

    if(inputAmount<=0){
        alert("please enter money");
        return;
    }

    const cardBalance=getFieldValueById('card-balance');
    const newBalance=inputAmount+cardBalance;
    document.getElementById('card-balance').innerText=newBalance;

})