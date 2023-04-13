window.addEventListener('load', solve);

function solve() {
    const firstNameEl = document.getElementById('first-name');
    const lastNameEl = document.getElementById('last-name');
    const checkInEl = document.getElementById('date-in');
    const checkOutEl = document.getElementById('date-out');
    const numOfGuestsEl = document.getElementById('people-count');
    const btnNext = document.getElementById('next-btn');

    const ulInfoList = document.querySelector('.info-list'); //should give the correct ul!
    const ulConfirmedList = document.querySelector('.confirm-list');
    const h1Verif = document.getElementById('verification');

    btnNext.addEventListener('click',(e)=>{
        e.preventDefault();
        const firstName = firstNameEl.value;
        const lastName = lastNameEl.value;
        const checkIn = checkInEl.value;
        const checkOut = checkOutEl.value;
        const numOfGuests = numOfGuestsEl.value;
        if(firstNameEl.value == '' || lastNameEl.value == '' || checkInEl.value == '' || checkOutEl.value =='' || numOfGuestsEl.value == ''){
            return;
        }
        if( checkInEl.value > checkOutEl.value){
            return;
        }
        const li = document.createElement('li');
        li.classList = 'reservation-content';
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${checkInEl.value}`;
        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${checkOutEl.value}`;
        const pNumGuests = document.createElement('p');
        pNumGuests.textContent = `For ${numOfGuestsEl.value} people`;
        article.appendChild(h3);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);
        article.appendChild(pNumGuests);

        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.classList = 'edit-btn';
        const btnContinue = document.createElement('button');
        btnContinue.textContent = 'Continue';
        btnContinue.classList = 'continue-btn';

        li.appendChild(article);
        li.appendChild(btnEdit);
        li.appendChild(btnContinue);

        ulInfoList.appendChild(li);
        btnNext.disabled = true;

        firstNameEl.value = '';
        lastNameEl.value = '';
        checkInEl.value = '';
        checkOutEl.value = '';
        numOfGuestsEl.value = '';

        btnEdit.addEventListener('click', ()=>{
            firstNameEl.value = firstName;
            lastNameEl.value = lastName;
            checkInEl.value = checkIn;
            checkOutEl.value = checkOut;
            numOfGuestsEl.value = numOfGuests;
            li.remove();
        });

        btnContinue.addEventListener('click', ()=>{
            ulConfirmedList.appendChild(li);
            btnEdit.remove();
            btnContinue.remove();
            
            const btnConfirm = document.createElement('button');
            btnConfirm.textContent = 'Confirm';
            btnConfirm.classList = 'confirm-btn';
            const btnCancel = document.createElement('button');
            btnCancel.textContent = 'Cancel';
            btnCancel.classList = 'cancel-btn';
            li.appendChild(btnConfirm);
            li.appendChild(btnCancel);
            

            btnConfirm.addEventListener('click',()=>{
                btnNext.disabled = false;
                li.remove();
                
                h1Verif.classList = 'reservation-confirmed';
                h1Verif.textContent = 'Confirmed.';

            });

            btnCancel.addEventListener('click', ()=>{
                btnNext.disabled = false;
                li.remove();
                h1Verif.classList = 'reservation-cancelled';
                h1Verif.textContent = 'Cancelled.';
            });
        });

    });
}



    
    
