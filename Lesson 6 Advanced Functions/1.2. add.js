function solution(num){
    let myNum = num;
    return function calc(newNum){
        return myNum + newNum;
    };
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

vitality
firmness
quik attack
damage
power