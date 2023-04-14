window.addEventListener('load', solve);

function solve() {
    
    const recipientEl = document.getElementById('recipientName');
    const titleEl = document.getElementById('title');
    const msgEl = document.getElementById('message');
    const btnAdd = document.getElementById('add');
    const btnReset = document.getElementById('reset');

    const ulList = document.getElementById('list');
    const ulSentList = document.querySelector('.sent-list');
    const ulDeleteList = document.querySelector('.delete-list');

    btnAdd.addEventListener('click',(e)=>{
        e.preventDefault();

        if(recipientEl.value == '' || titleEl.value == '' || msgEl.value == ''){
            return;
        }
        const recipient = recipientEl.value;
        const title = titleEl.value;

        const li = document.createElement('li');
        const h4Title = createEl('h4',`Title: ${titleEl.value}`, li);
        const h4Recipient = createEl('h4',`RecipientName: ${recipientEl.value}`,li);
        const span = createEl('span',msgEl.value, li);
        const div = createEl('div', '', li);
        div.setAttribute('id','list-action');
        const btnSend = createEl('button','Send',div);
        btnSend.setAttribute('type','submit');
        btnSend.setAttribute('id','send');
        const btnDelete = createEl('button','Delete',div);
        btnDelete.setAttribute('type','submit');;
        btnDelete.setAttribute('id','delete');
        ulList.appendChild(li);

        clearInput();

        btnSend.addEventListener('click',()=>{
            const liSend = createEl('li','', ulSentList);
            const spanRecipent = createEl('span',`To: ${recipient}`, liSend);
            const spanTitle = createEl('span',`Title: ${title}`, liSend);
            const divBtn = createEl('div','',ulSentList);
            divBtn.classList = 'btn';
            const btnDel = createEl('button','Delete',divBtn);
            btnDel.setAttribute('type','submit');
            btnDel.classList = 'delete';
            li.remove();

            btnDel.addEventListener('click',()=>{
                ulDeleteList.appendChild(liSend);
                divBtn.remove();
            });

        });

        btnDelete.addEventListener('click',()=>{
            const liDel = createEl('li','', ulDeleteList);
            const spanRecipent = createEl('span',`To: ${recipient}`, liDel);
            const spanTitle = createEl('span',`Title: ${title}`, liDel);
            li.remove();
        });
    });

    btnReset.addEventListener('click',clearInput);

    function createEl(type,content,parent){
        const element = document.createElement(type);
        element.textContent = content;
        parent.appendChild(element);
        return element;
    }

    function clearInput(){
        recipientEl.value = '';
        msgEl.value = '';
        titleEl.value = '';
    }
}
