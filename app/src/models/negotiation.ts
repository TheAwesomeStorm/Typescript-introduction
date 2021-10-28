import {Model} from "../interfaces/model.js"

export class Negotiation implements Model<Negotiation> {

    constructor (
        private readonly _date: Date,
        public readonly quantity: number,
        public readonly value: number) {}

    get date(): Date {
        return new Date(this._date.getTime())
    }

    // get volume(): number {
    //     return this.quantity * this.value;
    // }
    
    public toText(): string {
        return `
        Data: ${this.date},
        Quantidade: ${this.quantity},
        Valor: ${this.value}`
    }
    
    public static createFrom(dateAsString: string, quantityAsString: string, valueAsString: string) {
        const exp = new RegExp('-', 'g');
        const date = new Date(dateAsString.replace(exp, ','))
        const quantity = parseInt(quantityAsString)
        const value = parseFloat(valueAsString)
        return new Negotiation(date, quantity, value)
    }
    
    public compare(negotiation: Negotiation): boolean {
        return this.date.getDate() === negotiation.date.getDate()
            && this.date.getMonth() === negotiation.date.getMonth()
            && this.date.getFullYear() === negotiation.date.getFullYear()
    }
} 