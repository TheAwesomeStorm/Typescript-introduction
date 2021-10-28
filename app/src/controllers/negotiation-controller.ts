import {Negotiation} from "../models/negotiation.js";
import {allNegotiations} from "../models/allNegotiations.js"
import {NegotiationsView} from "../views/negotiations-view.js"
import {MessageView} from "../views/message-view.js"
import { Weekdays } from "../enums/weekdays.js"
import {domElement} from "../decorators/domElement.js";
import {NegotiationsService} from "../services/negotiations-service.js";
import {print} from "../utils/print.js";

export class NegotiationController {
    @domElement('#data')
    private readonly inputDate: HTMLInputElement
    @domElement('#quantidade')
    private readonly inputQuantity: HTMLInputElement
    @domElement('#valor')
    private readonly inputValue: HTMLInputElement
    private negotiations = new allNegotiations()
    private negotiationsView = new NegotiationsView('#negotiationsView')
    private messageView = new MessageView('#messageView')
    private negotiationService = new NegotiationsService()

    constructor() {
        this.negotiationsView.update(this.negotiations)
    }
    
    public add(): void {
        const negotiation = Negotiation.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        )
        if (!NegotiationController.isWorkday(negotiation.date)) {
            this.messageView.update('São válidas apenas negociações realizadas em dias úteis')
            return
        }
        this.negotiations.add(negotiation)
        print(negotiation, this.negotiations)
        this.attView()
        this.clearForm()
    }
    
    importData(): void {
        this.negotiationService.reachTodayNegotiations()
          .then(todayNegotiations => {
              return todayNegotiations.filter(todayNegotiation => {
                  return !this.negotiations.list().some(negotiation => negotiation.compare(todayNegotiation))
              })
          })
          .then(todayNegotiations => {
            for(let negotiation of todayNegotiations) {
                this.negotiations.add(negotiation)
            }
            this.negotiationsView.update(this.negotiations)
        })
    }
    
    private static isWorkday(date: Date): boolean {
        return date.getDay() > Weekdays.sunday && date.getDay() < Weekdays.saturday
    }

    private clearForm(): void {
        const form: HTMLFormElement = document.querySelector('.form') as HTMLFormElement
        form.reset()
        this.inputDate.focus()
    }
    
    private attView(): void {
        this.negotiationsView.update(this.negotiations)
        this.messageView.update('Negociação adicionada com sucesso!')
    }
}