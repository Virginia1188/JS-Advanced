function validate() {
    const input = document.getElementById('email');
    const regExp = /[a-z]+@[a-z]+\.[a-z]+/g;
    input.addEventListener('change', () => {
        if (!input.value.match(regExp)) {
            input.className = 'error';
            return;
        }
        input.className = '';
    });
}