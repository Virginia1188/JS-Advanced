function validate() {
    const input = document.getElementById('email');
    
    input.addEventListener('change',changed);
    
    function changed(){
        const regExp = /[a-z]+@[a-z]+\.[a-z]+/g;
        if(!input.value.match(regExp)){
            input.className = 'error';
        }else{
            input.className = '';
        }
    }
}