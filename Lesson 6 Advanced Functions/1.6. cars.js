function cars(input) {

    function objCars() {
        let allCars = {};

        return {
            create(name) { allCars[name] = { }; },
            createAndInherits() {},
            set() {},
            print(){},
        };
    }

    const newCars = input.forEach(line => {
        if(line.includes('create') && line.includes('inherit')){

        }else if(line.includes('create')){

        }else if(line.includes('set')){

        }else if(line.includes('print')){
            
        }
    });



}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);