class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const x = b.x - a.x;
        const y = b.y - a.y;
        const dist = Math.sqrt(x**2 + y ** 2);
        return dist;
    }
}