function wordsUppercase(string) {
    let regExp = /\w+/g;
    let matches = string.match(regExp);
    let result = [];
    for (const match of matches) {
        let toUpper = match.toUpperCase();
        result.push(toUpper);
    }
    console.log(result.join(', '));
}
wordsUppercase('Hi, how are you?');