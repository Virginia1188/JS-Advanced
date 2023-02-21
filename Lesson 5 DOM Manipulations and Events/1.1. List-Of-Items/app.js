function addItem() {
    const li = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = li;
    ulElement.appendChild(newLi);
    // let newElement = 
    // console.log('TODO:...');
}