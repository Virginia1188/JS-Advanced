window.addEventListener('load', solve);

function solve() {
    const genreEl = document.getElementById('genre');
    const nameEl = document.getElementById('name');
    const authorEl = document.getElementById('author');
    const dateEl = document.getElementById('date');

    const btnSubmit = document.getElementById('add-btn');
    const divCollection = document.querySelector('.all-hits-container');
    const divSaved = document.querySelector('.saved-container');
    const likes = document.querySelector('.likes p');

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        if(genreEl.value =='' || nameEl.value =='' || authorEl.value ==''|| dateEl.value == ''){
            return;
        }

        const div = createEl('div','', divCollection);
        div.classList = 'hits-info';
        const img = createEl('img','',div);
        img.src = './static/img/img.png';
        const h2Genre = createEl('h2',`Genre: ${genreEl.value}`,div);
        const h2Name = createEl('h2',`Name: ${nameEl.value}`,div);
        const h2Author = createEl('h2',`Author: ${authorEl.value}`,div);
        const h3Date = createEl('h3',`Date: ${dateEl.value}`,div);
        const btnSave = createEl('button','Save song',div);
        btnSave.classList = 'save-btn';
        const btnLike = createEl('button','Like song',div);
        btnLike.classList ='like-btn';
        const btnDelete = createEl('button','Delete',div);
        btnDelete.classList = 'delete-btn';

        clear();

        btnLike.addEventListener('click',()=>{
            let [like,num] = likes.textContent.split(': ');
            let sum = Number(num) + 1;
            likes.textContent = `Total Likes: ${sum}`;
            btnLike.disabled = true;
        });

        btnSave.addEventListener('click', ()=>{
            divSaved.appendChild(div);
            btnLike.remove();
            btnSave.remove();
        });

        btnDelete.addEventListener('click',()=>{
            div.remove();
        });

    });

    function createEl(type, content, parent) {
        const el = document.createElement(type);
        el.textContent = content;
        parent.appendChild(el);
        return el;
    }

    function clear(){
        genreEl.value = '';
        nameEl.value = '';
        authorEl.value ='';
        dateEl.value ='';

    }
}