// from input field
function getInputValueById(id){
    const donateAmount=document.getElementById(id).value;
    const donateAmountNumber=parseFloat(donateAmount);
    return donateAmountNumber;
}
// from textfield
function getFieldValueById(id){
    const cardBalance=document.getElementById(id).innerText;
    const cardBalanceNumber=parseFloat(cardBalance);
    return cardBalanceNumber
}

function showSelectionBtn(id){
    //hide 
    document.getElementById('transection-container').classList.add('hidden');
    document.getElementById('card-container').classList.add('hidden');

    //show
    document.getElementById(id).classList.remove('hidden');


}