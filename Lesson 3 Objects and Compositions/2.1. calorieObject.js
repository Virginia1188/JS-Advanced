function calorieObject(arr){
    let result = {};
    for (let i = 0; i < arr.length; i+=2) {
        const element = arr[i];
        result[element] = Number(arr[i+1]);
    }
    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);