function attachGradientEvents() {
    const boxElement = document.getElementById('gradient');
    let result = document.getElementById('result');
    boxElement.addEventListener('mousemove', moveParcentige);
   
    function moveParcentige(event){
        const x = event.offsetX;
        const percent = Math.floor(x /300 *100);
        result.textContent = percent + '%';
    }
}