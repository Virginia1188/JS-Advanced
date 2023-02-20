function search() {
   const towns = document.getElementById('towns').children;
   let search = document.getElementById('searchText').value;

   let matches = 0;
   for (let i = 1; i <= towns.length; i++) {
      let element = document.querySelector(`#towns :nth-child(${i})`).textContent;
      if(element.includes(search)){
         matches++;
         document.querySelector(`#towns :nth-child(${i})`).style.textDecoration = 'underline';
         document.querySelector(`#towns :nth-child(${i})`).style.fontWeight = 'bold';
      };
   };
   document.getElementById('result').textContent = `${matches} matches found`;

};
