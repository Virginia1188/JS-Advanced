(function (input) {

    function processor() {
        let result = [];

        return {
            add(string) { result.push(string); },
            remove(string) { result = result.filter((x) => x != string); },
            print() { console.log(result.join(',')); },
        };
    }

    let newFunc = processor();
    let comand = input.forEach(element => {
        let [command, string] = element.split(' ');
        command == 'add' ? newFunc.add(string) : '';
        command == 'remove' ? newFunc.remove(string) : '';
        command == 'print' ? newFunc.print() : '';
    });
})(['add pesho', 'add george', 'add peter', 'remove peter','remove pesho', 'remove george','print']);
