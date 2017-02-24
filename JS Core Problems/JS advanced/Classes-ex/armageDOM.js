let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('',function () {

    it('', function () {
        nuke('#target','.target');
        let test=$('#target').filter('.target');
        expect(test).to.be.undefined;
    })
    it('', function () {
        nuke('#target','.nested');
        let test=$('#target').filter('.nested');
        expect(test).to.be.undefined;
    })
    it('', function () {
        nuke('#targ','.nested');
        let test=$('#targ').filter('.nested');
        expect(test).to.be.undefined;
    })
    it('', function () {
        nuke('#targ','#targ');
        expect(test).to.be.undefined;
    })



})
