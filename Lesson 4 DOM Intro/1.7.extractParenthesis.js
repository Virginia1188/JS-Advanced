function extract(id) {
    const text = document.getElementById(id).textContent;
    const regExp = /\((.*?)\)/g;
    const result = text.match(regExp);
    return result.join('; ');
};