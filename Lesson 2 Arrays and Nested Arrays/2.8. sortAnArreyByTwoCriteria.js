function sortArray(array){
    let sorted = array
    .sort((a,b) => a.localeCompare(b))
    .sort((a,b) => a.length - b.length);
    console.log(sorted.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['test', 'Deny', 'omen', 'Default']);