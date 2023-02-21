function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    for (const input of inputs) {
        input.addEventListener('focus', focus);
        input.addEventListener('blur', blur);
        function focus(event) {
            event.target.parentElement.className = 'focused';
        }
        function blur(event) {
            event.target.parentElement.className = '';
        }
    }
}