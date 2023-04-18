window.addEventListener('load', solve);

function solve() {
  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const storyTitleEl = document.getElementById('story-title');
  const genreEl = document.getElementById('genre');
  const ulPreview = document.getElementById('preview-list');
  const btnPublish = document.getElementById('form-btn');
  const storyTextEl = document.getElementById('story');
  const mainDiv = document.getElementById('main');
  const divForm = document.querySelector('.form-wrapper');
  const divSide = document.getElementById('side-wrapper');

  btnPublish.addEventListener('click', () => {
    if (firstNameEl.value == '' || lastNameEl.value == '' || ageEl.value == '' || storyTitleEl.value == '' || storyTextEl.value == '' ) {
      return;
    }
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    const age = ageEl.value;
    const title = storyTitleEl.value;
    const genre = genreEl.value;
    const story = storyTextEl.value;

    const li = document.createElement('li');
    li.classList = 'story-info';
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageEl.value}`;
    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitleEl.value}`;
    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genreEl.value}`;
    const pStory = document.createElement('p');
    pStory.textContent = storyTextEl.value;

    const btnSave = document.createElement('button');
    btnSave.classList = 'save-btn';
    btnSave.textContent = 'Save Story';
    const btnEdit = document.createElement('button');
    btnEdit.classList = 'edit-btn';
    btnEdit.textContent = 'Edit Story';
    const btnDelete = document.createElement('button');
    btnDelete.classList = 'delete-btn';
    btnDelete.textContent = 'Delete Story';

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(article);
    li.appendChild(btnSave);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    ulPreview.appendChild(li);

    btnPublish.disable = true;
    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    storyTextEl.value = '';
    storyTitleEl.value = '';
    genreEl.value = '';

    btnEdit.addEventListener('click', () => {
      
      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      ageEl.value = age;
      storyTextEl.value = story;
      storyTitleEl.value = title;
      genreEl.value = genre;
      li.remove();
      btnPublish.disable = false;
    });

    btnSave.addEventListener('click', () => {
      
      divForm.remove();
      divSide.remove();
      const h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      mainDiv.appendChild(h1);
    });

    btnDelete.addEventListener('click', () => {
      li.remove();
      btnPublish.disable = false;
    });

  });

}
