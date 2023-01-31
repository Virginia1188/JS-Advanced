function createSortedList() {
    const obj = {
        arr: [],
        add(newValue) {
            obj.arr.push(newValue);
        },
        remove(removeIndex) {
           obj.arr.splice(removeIndex,1);
        },
        get(index) {
            return obj.arr[index];
        },
    };
    obj.size = obj.arr.lenght;
    
    return obj;
};
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
