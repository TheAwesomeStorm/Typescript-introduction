import {Negotiation} from './negotiation.js'
import {Model} from "../interfaces/model.js"

export class allNegotiations implements Model<allNegotiations> {
    private negotiations: Negotiation[] = []

    public add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    public list(): readonly Negotiation[] {
        return this.negotiations
    }
    
    public toText(): string {
        return JSON.stringify(this.negotiations, null)
    }
    
    public compare(negotiations: allNegotiations): boolean {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations)
    }
}
