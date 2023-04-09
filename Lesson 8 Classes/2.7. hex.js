class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }
    toString(){
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(input){
        let result;
        if(typeof input === Number){
            result = this.value + input;
        }else{
            result = this.value + input.value;
        }
        return new Hex(result);
    }
    minus(input){
        let result;
        if(typeof input === Number){
            result = this.value - input;
        }else{
            result = this.value - input.value;
        }
        return new Hex(result);
    }
    parse(string){
        return parseInt(string);
    }
}
// let hex = result;
let FF = new Hex(255);
let act = FF.toString();
// let exp = '0xFF';
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
console.log(a.plus(c).toString());
// let exp2 = '0xA5';
console.log(a.minus(b).toString());
// let exp3 = "0x5";