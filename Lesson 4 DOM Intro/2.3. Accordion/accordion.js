function toggle() {
    let button = document.getElementsByClassName('button')[0].textContent;
    let text = document.getElementById('extra');
    if(button == 'More'){
        document.getElementsByClassName('button')[0].textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }else{
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    };
};