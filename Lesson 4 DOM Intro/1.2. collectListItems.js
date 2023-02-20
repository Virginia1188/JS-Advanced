function extractText() {
    const items = Array.from(document.querySelectorAll('li'));
    // document.getElementById('item).children;
    const result = items
        .map(e => e.textContent)
        .join('\n');
    document.getElementById('result').value = result;
}