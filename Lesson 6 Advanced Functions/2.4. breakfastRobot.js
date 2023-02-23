function solution(input) {
    let ingredients = {    //storage
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {      //recipes book
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (input) {
        const [command, ing, qnt] = input.split(' ');

        const robotFuncs = {
            prepare(ing, qnt) { //prepare func
                let msg = '';

                for (const recipe of Object.keys(recipes)) {
                    if (recipe == ing) {
                        for (const currentIng of Object.keys(recipes[recipe])) {
                            // checking quantities
                            let totalNeededIng = recipes[recipe][currentIng] * Number(qnt);
                            totalNeededIng > ingredients[currentIng]
                                ? msg = `Error: not enough ${currentIng} in stock` : '' ; 
                            if (msg != '') {
                                break;
                            }

                        }
                    }
                    if (msg != '') {
                        break;
                    }
                }
                if(msg == ''){ //if we have all quantities we remove them from storage
                    msg = 'Success';
                    Object.keys(recipes[ing]).forEach(currentIng => {
                        let totalNeededIng = recipes[ing][currentIng] * Number(qnt);
                        ingredients[currentIng] -= totalNeededIng;
                        });
                };
                
                return msg;
            },
            restock(ing, qnt) { //restock func
                ingredients[ing] += Number(qnt);
                return 'Success';
            },
            report() { // reposrt func
                let reportStr = [];
                Object.keys(ingredients).forEach(key => reportStr.push( `${key}=${ingredients[key]}`));
                return reportStr.join(' ');
            }
        };
        if (command == 'prepare') { //invoking the command we have received
            return robotFuncs.prepare(ing, qnt);
        } else if (command == 'restock') {
            return robotFuncs.restock(ing, qnt);
        } else if (command == 'report') {
            return robotFuncs.report();
        }
    };
}

let manager = solution();
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
console.log(manager('prepare turkey 1')); // Success 
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1')); // Success 
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1')); // Success 
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
// ['restock carbohydrate 10', 'Success'],
// ['restock flavour 10', 'Success'],
// ['prepare apple 1', 'Success'],
// ['restock fat 10', 'Success'],
// ['prepare burger 1', 'Success'],
// ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']
// ['prepare turkey 1', 'Error: not enough protein in stock'],
//     ['restock protein 10', 'Success'],
//     ['prepare turkey 1', 'Error: not enough carbohydrate in stock'],
//     ['restock carbohydrate 10', 'Success'],
//     ['prepare turkey 1', 'Error: not enough fat in stock'],
//     ['restock fat 10', 'Success'],
//     ['prepare turkey 1', 'Error: not enough flavour in stock'],
//     ['restock flavour 10', 'Success'],
//     ['prepare turkey 1', 'Success'],
//     ['report', 'protein=0 carbohydrate=0 fat=0 flavour=0'],
