class Set {

    constructor(arr) {
        this.arr = arr
    }

    add(val) {

        if (!this.has(val))
            this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }

}


const s = new Set([1, 2, 3, 4, 5])

s.add(1)

console.log(s.size)
console.log(s)

s.delete(3)
console.log(s)
