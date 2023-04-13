window.addEventListener("load", solve);

function solve() {

   const authorEl = document.getElementById('creator');
   const titleEl = document.getElementById('title');
   const categoryEl = document.getElementById('category');
   const contentEl = document.getElementById('content');
   const btnCreate = document.querySelector('.btn');
   const h2 = document.querySelector('main > section');
   // const posts = h2.parentElement;
   const ol = document.querySelector('ol');
   // const authorEl = document.getElementById('creator');

   btnCreate.addEventListener('click', (e) => {
      e.preventDefault();
      const article = createEl('article', '', h2);
      const h1 = createEl('h1', titleEl.value, article);
      const pCategory = createEl('p', 'Category:', article);
      const strongCategory = createEl('strong', categoryEl.value, pCategory);
      const pAuthor = createEl('p', 'Creator:', article);
      const strongName = createEl('strong', authorEl.value, pAuthor);
      const pText = createEl('p', contentEl.value, article);
      const divBtns = createEl('div', '', article);
      divBtns.classList = 'buttons';
      const btnDelete = createEl('button', 'Delete', divBtns);
      btnDelete.classList = 'btn delete';
      const btnArchive = createEl('button', 'Archive', divBtns);
      btnArchive.classList = 'btn archive';

      clear();

      btnDelete.addEventListener('click', () => {
         article.remove();
      });

      btnArchive.addEventListener('click', () => {
         const li = createEl('li', h1.textContent, ol);
         article.remove();
      });

   });

   function createEl(type, content, parent) {
      const el = document.createElement(type);
      el.textContent = content;
      parent.appendChild(el);
      return el;
   }

   function clear() {
      authorEl.value = '';
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';
   }
}
