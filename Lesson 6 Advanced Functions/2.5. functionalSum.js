function add(num){
    let sum = 0;
    
    function inner (number){
        sum+= number;
        return inner;
    }

    inner.toString = () => {
        return sum;
    };

    return inner(num);
}
add(1)(6)(-3);
console.log(add(1)(6)(-3).toString());