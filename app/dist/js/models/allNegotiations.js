export class allNegotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    toText() {
        return JSON.stringify(this.negotiations, null);
    }
    compare(negotiations) {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations);
    }
}
//# sourceMappingURL=allNegotiations.js.map