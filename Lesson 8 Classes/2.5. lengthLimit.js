class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }

    get innerLength() {
        return this._innerLength;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
    }

    toString() {
        if (this.innerString.length < this.innerLength) {
            return this.innerString;
        } else if (this.innerString.length === this.innerLength) {
            return this.innerString.substring(0, this._innerLength);
        } else {
            return this.innerString.substring(0, this._innerLength) + '...';
        }
    }
}