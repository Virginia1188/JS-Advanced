function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableCells = document.querySelectorAll('.container tbody tr td');
      let searchString = document.getElementById('searchField').value;

      for (const cell of tableCells) {
         if (cell.classList.contains('select')) {
            cell.classList.remove('select');
         };
      };

      for (const cell of tableCells) {

         let str = cell.textContent.toLowerCase();
         if (str.includes(searchString)) {
            cell.parentElement.classList.add('select');
         };
      };
   };
};