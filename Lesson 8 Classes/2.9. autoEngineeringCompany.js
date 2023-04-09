function autoCompany(input){

    // class Brand{
    //     constructor(){

    //     }
    // }
    
    let brands = {};

    for (const line of input) {
        let [brand, model, qnt] = line.split(' | ');
        qnt = Number(qnt);
        if(!brands.hasOwnProperty(brand)){
            brands[brand] = {[model]: qnt};
            continue;
        }
        if(!brands[brand].hasOwnProperty(model)){
            brands[brand][model] = qnt;
            continue;
        }
        brands[brand][model] += qnt;
    }

    for (const brand of Object.keys(brands)) {
        console.log(brand);

        for (const [model,qnt] of Object.entries(brands[brand])) {
            console.log(`###${model} -> ${qnt}`);
        }
    }
}
autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);