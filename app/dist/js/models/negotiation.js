export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    toText() {
        return `
        Data: ${this.date},
        Quantidade: ${this.quantity},
        Valor: ${this.value}`;
    }
    static createFrom(dateAsString, quantityAsString, valueAsString) {
        const exp = new RegExp('-', 'g');
        const date = new Date(dateAsString.replace(exp, ','));
        const quantity = parseInt(quantityAsString);
        const value = parseFloat(valueAsString);
        return new Negotiation(date, quantity, value);
    }
    compare(negotiation) {
        return this.date.getDate() === negotiation.date.getDate()
            && this.date.getMonth() === negotiation.date.getMonth()
            && this.date.getFullYear() === negotiation.date.getFullYear();
    }
}
//# sourceMappingURL=negotiation.js.map