function deleteByEmail() {
    const itemToDelete = document.querySelector('label input').value;
    let resultError = document.getElementById('result');
    let emails = document.querySelectorAll('#customers tbody tr td:nth-child(2)');

    for (const email of emails) {
        if (email.textContent == itemToDelete) {
            let row = email.parentNode;
            row.parentNode.removeChild(row);
            resultError.textContent = 'Deleted.';
            return;
        }
    }
    resultError.textContent = 'Not found.';
}