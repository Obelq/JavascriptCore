import {BaseElement} from './BaseElement';

export class Footer extends BaseElement {
    constructor(message) {
        super();

        this.message = message;
    }

    getElementString() {
        return $('<footer>')
            .html('Copyright &copy; ' + this.message);
    }
}
