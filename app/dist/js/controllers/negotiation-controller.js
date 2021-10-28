var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negotiation } from "../models/negotiation.js";
import { allNegotiations } from "../models/allNegotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";
import { Weekdays } from "../enums/weekdays.js";
import { domElement } from "../decorators/domElement.js";
import { NegotiationsService } from "../services/negotiations-service.js";
import { print } from "../utils/print.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new allNegotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.negotiationService = new NegotiationsService();
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!NegotiationController.isWorkday(negotiation.date)) {
            this.messageView.update('São válidas apenas negociações realizadas em dias úteis');
            return;
        }
        this.negotiations.add(negotiation);
        print(negotiation, this.negotiations);
        this.attView();
        this.clearForm();
    }
    importData() {
        this.negotiationService.reachTodayNegotiations()
            .then(todayNegotiations => {
            return todayNegotiations.filter(todayNegotiation => {
                return !this.negotiations.list().some(negotiation => negotiation.compare(todayNegotiation));
            });
        })
            .then(todayNegotiations => {
            for (let negotiation of todayNegotiations) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }
    static isWorkday(date) {
        return date.getDay() > Weekdays.sunday && date.getDay() < Weekdays.saturday;
    }
    clearForm() {
        const form = document.querySelector('.form');
        form.reset();
        this.inputDate.focus();
    }
    attView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
__decorate([
    domElement('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domElement('#quantidade')
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domElement('#valor')
], NegotiationController.prototype, "inputValue", void 0);
//# sourceMappingURL=negotiation-controller.js.map