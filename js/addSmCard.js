
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
        if(inputAmount>homeBalance){
            alert("you dont have that much  money");
            return;
        }

        const cardBalance = getFieldValueById('card-balance');
        const newBalance = inputAmount + cardBalance;
            // alert(`added some money ${inputAmount}`);

        document.getElementById('card-balance').innerText = newBalance;
        
        const finalHomeBalance=homeBalance-inputAmount;
        document.getElementById('home-balance').innerText = finalHomeBalance;
        

       

        const p = document.createElement('p');
      //  p.classList.add('bg-green-100');
        p.innerHTML = `

            <div style="margin:10px 300px 10px 300px; border:2px solid gray; padding:40px;  " class="bg-yellow-200"  >
           <h4 class="text-5xl">Donated Amount</h4>
           <p class="text-3xl bg-green-100">${inputAmount} Taka is Donated for famine-2024 at Feni, Bangladesh. </p>
           <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
           </div>

    `;
        document.getElementById('transection-container').appendChild(p);
        
    })


    document.getElementById('button-blog').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/index2.html';

    });
