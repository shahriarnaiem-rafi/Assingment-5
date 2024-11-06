
document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const homeBalance=getFieldValueById('home-balance');
        
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
            alert(`added some money ${inputAmount}`);

        document.getElementById('card-balance').innerText = newBalance;
        
        const finalHomeBalance=homeBalance-inputAmount;
        document.getElementById('home-balance').innerText = finalHomeBalance;
       

        const p = document.createElement('p');
      //  p.classList.add('bg-green-100');
        p.innerHTML = `
            <div style="margin:10px 300px 10px 300px; " >
           <h4 class="text-5xl">Donated Amount</h4>
           <p class="text-3xl bg-green-100">${inputAmount} BDT Added .. New balance ${newBalance} BDT    <br> Final Home Balance <span class="text-5xl;">${finalHomeBalance} BDT</span></p>
           </div>

    `
        document.getElementById('transection-container').appendChild(p);


    });


   






// home back 
document.getElementById('home').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/index.html';


})