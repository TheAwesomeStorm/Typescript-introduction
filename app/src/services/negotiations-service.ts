import {TodayNegotiations} from "../interfaces/todayNegotiations.js";
import {Negotiation} from "../models/negotiation.js";

export class NegotiationsService {
  
  public reachTodayNegotiations(): Promise<Array<Negotiation>> {
    return fetch('http://localhost:8080/dados').then(res => res.json()).then((dataSet: Array<TodayNegotiations>) => {
      return dataSet.map(data => {
        return new Negotiation(new Date(), data.vezes, data.montante)
      })
    })
  }
}