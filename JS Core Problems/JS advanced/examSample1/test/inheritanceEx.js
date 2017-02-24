let expect = require("chai").expect;
class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                var placeholders = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (placeholders.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < placeholders.length; i++) {
                        let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(placeholders[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}
describe("c#", function() {
    describe("one input", function() {
        it('', function () {
            let text = Console.writeLine({kiwi: 2});
            expect(text).to.be.equal(JSON.stringify({kiwi: 2}))
        });
        it('', function () {
            let text = Console.writeLine('Pesho e velik');
            expect(text).to.be.equal('Pesho e velik')
        });
    })
    describe("errors", function() {
        it('', function () {

            expect(()=>Console.writeLine(1,'dea')).to.be.throw(TypeError)
        });
        it('', function () {

            expect(()=>Console.writeLine({dea:'razki'},'dea')).to.be.throw(TypeError)
        });
        it('', function () {

            expect(()=>Console.writeLine('dea{0}dsae',1,2)).to.be.throw(RangeError);
        });
        it('', function () {

            expect(()=>Console.writeLine('deadsae',1,2)).to.be.throw(TypeError);
        });
        it('', function () {

            expect(()=>Console.writeLine('dea{0}dsa{1}e',1,2,'dea')).to.be.throw(RangeError);
        });
        it('', function () {

            expect(()=>Console.writeLine('dea{0}dsa{13}e',1,2,'dea',2,3)).to.be.throw(RangeError);
        });
        it('', function () {

            expect(()=>Console.writeLine('dea{1}dsae',1)).to.be.throw(RangeError);
        });
    })
    describe("full", function() {
        it('', function () {
            expect(Console.hasOwnProperty('writeLine')).to.be.equal(true);
        });
        it('', function () {
            let text = Console.writeLine("Ivan e {0}.","chovek");
            expect(text).to.be.equal("Ivan e chovek.")
        });
        it('', function () {
            let text = Console.writeLine("{1}Ivan e {0}.","chovek",1);
            expect(text).to.be.equal("1Ivan e chovek.")
        });
        it('', function () {
            let text = Console.writeLine("Ivan e {0}.{1}","chovek",1);
            expect(text).to.be.equal("Ivan e chovek.1")
        });
        it('', function () {
            let text = Console.writeLine("Ivan e {0}.{1}{2}{3}","chovek",1,2,'3');
            expect(text).to.be.equal("Ivan e chovek.123")
        });
    })

});
