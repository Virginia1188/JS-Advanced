window.addEventListener('load', solve);

function solve() {
  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const genderEl = document.getElementById('gender');
  const dishTaskEl = document.getElementById('task');
  const ulProgressEl = document.getElementById('in-progress');
  const btnSubmit = document.getElementById('form-btn');
  let counterEl = document.getElementById('progress-count');
  const finishedEl = document.getElementById('finished');
  const btnClear = document.getElementById('clear-btn');

  btnSubmit.addEventListener('click',()=>{
    
    if(firstNameEl.value == ''|| lastNameEl.value == '' || dishTaskEl.value == '' || ageEl.value == ''){
      return;
    }
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    const gender = genderEl.value;
    const age = ageEl.value;
    const task = dishTaskEl.value;


    const li = createEl('li','',ulProgressEl);
    li.classList = 'each-line';
    const article = createEl('article','',li);
    const h4 = createEl('h4',`${firstNameEl.value} ${lastNameEl.value}`,article);
    const info = createEl('p',`${genderEl.value}, ${ageEl.value}`,article);
    const dish = createEl('p',dishTaskEl.value, article);
    const btnEdit = createEl('button','Edit',li);
    btnEdit.classList = 'edit-btn';
    const btnComplete = createEl('button','Mark as complete',li);
    btnComplete.classList = 'complete-btn';

    counterEl.textContent = Number(counterEl.textContent) +1;

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    dishTaskEl.value = ''; 
    genderEl.value = 'Male';

    btnEdit.addEventListener('click', ()=>{
      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      ageEl.value = age;
      genderEl.value = gender;
      dishTaskEl.value = task;

      li.remove();
      counterEl.textContent = Number(counterEl.textContent) -1;

    });

    btnComplete.addEventListener('click',()=>{
      btnComplete.remove();
      btnEdit.remove();
      finishedEl.appendChild(li);

      counterEl.textContent = Number(counterEl.textContent) -1;
    });

    btnClear.addEventListener('click', ()=>{
      Array.from(finishedEl.querySelectorAll('li')).forEach(el => el.remove());
    });
    
  });

  function createEl(type,content,parent){
    const el = document.createElement(type);
    el.textContent = content;
    parent.appendChild(el);
    return el;
  };
}
