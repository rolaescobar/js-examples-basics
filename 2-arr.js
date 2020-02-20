class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }

    add(val) {

        super.add(val)
        console.log('Valor agregado al set!' + val)
    }

    reset() {
        return new MySet(this.originalArray)
    }

    toArray() {
        return Array.from(this)
    }

}

const s = new MySet([1, 2, 3, 4, 5])
s.add(6)
s.add(7)
console.log(s.toArray())

const reset = s.reset()
console.log(reset.toArray())
