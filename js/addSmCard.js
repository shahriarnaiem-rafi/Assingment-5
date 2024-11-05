document.getElementById('donate-btn')
.addEventListener('click',function (event){
    event.preventDefault();
    const inputAmount=getInputValueById('input=amount');
    const cardBalance=getFieldValueById('card-balance');
    const newBalance=inputAmount+cardBalance;
    document.getElementById('card-balance').innerText=newBalance;

})