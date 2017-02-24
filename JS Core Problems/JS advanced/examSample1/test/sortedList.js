let expect = require("chai").expect;
class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe('sortedList',function () {
    let example;
    beforeEach(function () {
        example = new SortedList() ;

    })

    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(example.list[0]).to.be.equal(2);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        example.add(1);
        expect(example.list[1]).to.be.equal(2);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        example.remove(1);
        expect(example.list[1]).to.be.equal(10);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        example.remove(0);
        expect(example.list[1]).to.be.equal(10);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(example.size).to.be.equal(3);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        example.add(91);
        example.add(12);
        example.add(11);
        expect(example.size).to.be.equal(6);
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.get(-1)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.get(-1)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.get(3)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.get(4)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        let example1=new SortedList();
        expect(()=>example1.get(0)).to.be.throw("Collection is empty.");
    })
    it('', function () {
        let example1=new SortedList();
        expect(()=>example1.remove(0)).to.be.throw("Collection is empty.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.remove(-1)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {
        example.add(2);
        example.add(10);
        example.add(9);
        expect(()=>example.remove(3)).to.be.throw("Index was outside the bounds of the collection.");
    })
    it('', function () {

        expect(example.size).to.be.equal(0);
    })
    it('', function () {

        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
    })

})