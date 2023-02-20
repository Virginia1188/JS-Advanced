function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        let cols = rows[i].children;
        let cost = cols[1].textContent;
        sum += Number(cost);
    }
    document.getElementById('sum').textContent = sum;
}
