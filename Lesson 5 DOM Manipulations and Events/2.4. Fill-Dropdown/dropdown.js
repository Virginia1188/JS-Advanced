function addItem() {
    
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.textContent = inputText.value;
    newOption.value = inputValue.value;
    document.getElementById('menu').appendChild(newOption);
    inputText.value = '';
    inputValue.value = '';

}