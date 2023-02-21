function create(words) {
   const parent = document.getElementById('content');

   for (const word of words) {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');
      newP.style.display = 'none';
      newP.textContent = word;

      newDiv.appendChild(newP);
      parent.appendChild(newDiv);
      newDiv.addEventListener('click', () => newP.style.display = '');
   }

}