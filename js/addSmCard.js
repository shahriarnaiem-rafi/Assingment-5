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
           <h4 class="text-2xl">Donated Amount</h4>
           <p>${inputAmount}BDT Added .. New balance ${newBalance} </p>

    `
       document.getElementById('transection-container').appendChild(p);




    })
    