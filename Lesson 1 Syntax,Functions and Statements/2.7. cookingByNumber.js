function cookingByNumber(num, op1, op2, op3, op4, op5) {
    let myNum = num;

    function operation(command, myNum) {
        switch (command) {
            case 'chop':
                myNum = myNum / 2;

                break;
            case 'dice':
                myNum = Math.sqrt(myNum);

                break;
            case 'spice':
                myNum = myNum + 1;

                break;
            case 'bake':
                myNum = myNum * 3;

                break;
            case 'fillet':
                myNum = myNum * 0.8;
                break;
        }
        console.log(myNum);
        return myNum;
    }
    myNum = operation(op1, myNum);
    myNum = operation(op2, myNum);
    myNum = operation(op3, myNum);
    myNum = operation(op4, myNum);
    myNum = operation(op5, myNum);
}
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');