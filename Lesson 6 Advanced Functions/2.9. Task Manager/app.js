function solve() {
    const taskInput = document.querySelector('#task');
    const textInput = document.querySelector('#description');
    const dateInput = document.querySelector('#date');
    const [inputSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    const addBtn = document.querySelector('#add');

    addBtn.addEventListener('click', add);
    function add(event){
        event.preventDefault();
        if(taskInput.value.trim() ==='' || textInput.value.trim() === '' || dateInput.value.trim() === ''){
            return;
        }

        const newArticle = document.createElement('article');
        const newHeading = document.createElement('h3');
        newHeading.textContent = taskInput.value;
        const dicrP = document.createElement('p');
        dicrP.textContent = `Description: ${textInput.value}`;
        const dateP = document.createElement('p');
        dateP.textContent = `Due Date: ${dateInput.value}`;
        const divBtns = document.createElement('div');
        divBtns.className = 'flex';
        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle); //write fuction startArticlr
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';
        deleteBtn.addEventListener('click', deleteArticle); //write fuction delete article
        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);
        newArticle.appendChild(newHeading);
        newArticle.appendChild(dicrP);
        newArticle.appendChild(dateP);
        newArticle.appendChild(divBtns);
        openSection.lastElementChild.appendChild(newArticle);

        function startArticle(){
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.className = 'orange';
            finishBtn.addEventListener('click', finish); //white function finish
            divBtns.appendChild(finishBtn);
            progressSection.lastElementChild.appendChild(newArticle);

        };

        function deleteArticle(){
            newArticle.remove();
        };

        function finish(){
            divBtns.remove();
            completeSection.lastElementChild.appendChild(newArticle);
        }
    }
}
