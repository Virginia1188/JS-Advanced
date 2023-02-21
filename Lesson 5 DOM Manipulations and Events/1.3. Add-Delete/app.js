function addItem() {
    const li = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let newLi = document.createElement('li');
    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';
    newLi.textContent = li;
    newLi.appendChild(deleteElement);
    
    ulElement.appendChild(newLi);
    deleteElement.addEventListener('click', () => newLi.remove());
    
    // function deleteItem (){
    //     newLi.remove();
    // }
}