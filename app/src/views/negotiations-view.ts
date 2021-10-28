import { allNegotiations } from '../models/allNegotiations.js'
import { View } from './view.js'
import { removeScript } from "../decorators/removeScript.js"

export class NegotiationsView extends View<allNegotiations> {
    @removeScript
    protected template(model: allNegotiations): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(negotiation => {
                        return `
                            <tr>
                                <td>${NegotiationsView.formatDate(negotiation.date)}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }
    
    private static formatDate(date: Date): string {
        return new Intl.DateTimeFormat().format(date)
    }
}