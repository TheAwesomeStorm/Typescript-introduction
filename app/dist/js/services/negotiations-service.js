import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
    reachTodayNegotiations() {
        return fetch('http://localhost:8080/dados').then(res => res.json()).then((dataSet) => {
            return dataSet.map(data => {
                return new Negotiation(new Date(), data.vezes, data.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiations-service.js.map