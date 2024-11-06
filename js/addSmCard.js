document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputAmount = getInputValueById('input-amount');
        if (isNaN(inputAmount)) {
            alert("Money enter correctly");
            return;
        }

        if (inputAmount <= 0) {
            alert("please enter money");
            return;
        }

        const cardBalance = getFieldValueById('card-balance');
        const newBalance = inputAmount + cardBalance;
        document.getElementById('card-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.classList.add('bg-green-200');
        p.innerHTML = `
            <div style="margin:10px 300px 10px 300px;" >
           <h4 class="text-5xl">Donated Amount</h4>
           <p class="text-3xl">${inputAmount} BDT Added .. New balance ${newBalance} BDT </p>
           </div>

    `
        document.getElementById('transection-container').appendChild(p);
    })





// home back 
document.getElementById('home').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/index.html';


})