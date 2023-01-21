function addAndRemoveElements(commands) {
    let result = [];
    let num = 1;
    for (const command of commands) {
        command === 'add' ? result.push(num) : result.pop();
        num++;
    }
    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}
addAndRemoveElements(['remove',
    'remove',
    'remove']
);