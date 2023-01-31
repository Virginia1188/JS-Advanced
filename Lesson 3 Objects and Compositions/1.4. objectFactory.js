/* eslint-disable no-undef */
function factory(library, orders) {

    const productsArr = [];
    for (const order of orders) {
        const current = Object.assign({}, order.template);
        for (const part of order.parts) {
            current[part] = library[part];
        }
        productsArr.push(current);
    }
    console.log(productsArr);
    return productsArr;
    
}

factory(library = {
    get1: function () {
        return 1;
    },
    get3: function () {
        return 3;
    },
},

    orders = [
        {
            template: {},
            parts: ['get1']
        },
        {
            template: {},
            parts: ['get1', 'get3']
        },
    ]
);
