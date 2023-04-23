window.addEventListener('load', solve);
function solve() {
    const firstNameEl = document.getElementById('fname');
    const lastNameEl = document.getElementById('lname');
    const emailEl = document.getElementById('email');
    const dobEl = document.getElementById('birth');
    const positionEl = document.getElementById('position');
    const salaryEl = document.getElementById('salary');
    const btnAdd = document.getElementById('add-worker');

    const tBody = document.getElementById('tbody');
    const sumEl = document.getElementById('sum');

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstNameEl.value == '' || lastNameEl.value == '' || emailEl.value == '' || dobEl.value == '' || positionEl.value == '' || salaryEl.value == '') {
            return;
        }



        const tr = createEl('tr', '', tBody);
        const tdFirst = createEl('td', firstNameEl.value, tr);
        const tdlast = createEl('td', lastNameEl.value, tr);
        const tdEmail = createEl('td', emailEl.value, tr);
        const tdDob = createEl('td', dobEl.value, tr);
        const tdPosition = createEl('td', positionEl.value, tr);
        const tdSalary = createEl('td', salaryEl.value, tr);
        const tdFBtns = createEl('td', '', tr);
        const btnFired = createEl('td', 'Fired', tdFBtns);
        btnFired.classList = 'fired';
        const btnEdit = createEl('td', 'Edit', tdFBtns);
        btnEdit.classList = 'edit';

        let totalSum = Number(sumEl.textContent) + Number(salaryEl.value);
        sumEl.textContent = totalSum.toFixed(2);
        clearInput();

        btnEdit.addEventListener('click', () => {
            firstNameEl.value = tdFirst.textContent;
            lastNameEl.value = tdlast.textContent;
            emailEl.value = tdEmail.textContent;
            dobEl.value = tdDob.textContent;
            positionEl.value = tdPosition.textContent;
            salaryEl.value = tdSalary.textContent;
            let totalSum = Number(sumEl.textContent) - Number(tdSalary.textContent);
            sumEl.textContent = totalSum.toFixed(2);
            tr.remove();
        });

        btnFired.addEventListener('click',()=>{
            let totalSum = Number(sumEl.textContent) - Number(tdSalary.textContent);
            sumEl.textContent = totalSum.toFixed(2);
            tr.remove();
        });

    });


    function createEl(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        parent.appendChild(element);
        return element;
    }

    function clearInput() {
        firstNameEl.value = '';
        lastNameEl.value = '';
        emailEl.value = '';
        dobEl.value = '';
        positionEl.value = '';
        salaryEl.value = '';
    }

}
solve();