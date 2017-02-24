let expect = require("chai").expect;
function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('sortedList',function () {
    // let list;
    // beforeEach(function () {
    //     list = produce();
    // })
    it('', function () {
        expect(list.toString()).to.be.equal('');
    })
    it('', function () {
        list.add('Ceca');
        expect(list.toString()).to.be.equal('Ceca');
    })
    it('', function () {
        list.add('Ceca');
        list.add(2);
        expect(list.toString()).to.be.equal('Ceca, 2');
    })
    it('', function () {
        list.add('Ceca');
        list.add(2);
        list.add('Pesho');
        expect(list.toString()).to.be.equal('Ceca, 2, Pesho');
    })
    it('', function () {
        list.add('Ceca');
        list.add(2);
        list.add('Pesho');
        list.delete(2);
        expect(list.toString()).to.be.equal('Ceca, 2');
    })
    it('', function () {
        list.add('Ceca');
        list.add(2);
        expect(list.delete(0)).to.be.equal('Ceca');
    })
    it('', function () {
        let result = list.delete(-1);
        expect(result).to.be.undefined;
    })
    it('', function () {
        expect(''+list.delete(1)).to.be.equal('undefined');
    })

    // it('', function () {
    //     expect(list.hasOwnProperty('add')).to.be.equal(true);
    // })
    // it('', function () {
    //     expect(list.hasOwnProperty('delete')).to.be.equal(true);
    // })
    // it('', function () {
    //     expect(list.hasOwnProperty('toString')).to.be.equal(true);
    // })

})