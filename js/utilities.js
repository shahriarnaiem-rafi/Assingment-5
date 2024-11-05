function getInputValueById(id){
    const donateAmount=document.getElementById(id).value;
    const donateAmountNumber=parseFloat(donateAmount);
    return donateAmountNumber;
}
function getFieldValueById(id){
    const cardBalance=document.getElementById(id).innerText;
    const cardBalanceNumber=parseFloat(cardBalance);
    return cardBalanceNumber;
}