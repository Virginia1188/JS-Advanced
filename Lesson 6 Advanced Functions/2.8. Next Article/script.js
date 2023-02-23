function getArticleGenerator(articles) {
   let myArr = articles;

   return function showNext(){
        const divElement = document.getElementById('content');
        let nextArtical = document.createElement('article');
        if(myArr.length){
        nextArtical.textContent = myArr.shift();
        divElement.appendChild(nextArtical);
        }
   };
}
