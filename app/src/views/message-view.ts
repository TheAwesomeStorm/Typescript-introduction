import { View } from './view.js'
import { removeScript } from "../decorators/removeScript.js"

export class MessageView extends View<string> {
    @removeScript
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}