function lockedProfile() {

    const profileElements = document.querySelectorAll('.profile');
    Array.from(profileElements).forEach(p => p.addEventListener('click', showMore));

    function showMore(event) {
     
        const locked = event.currentTarget.querySelector('input');
        let currentBtn = event.target;
        if (locked.checked) {
            return;
        }
        if (event.currentTarget.querySelector('div').style.display) {
            event.currentTarget.querySelector('div').style.display = '';
            currentBtn.textContent = 'Show more';
            return;
        }
        event.currentTarget.querySelector('div').style.display = 'block';
        currentBtn.textContent = 'Hide it';

    };

}