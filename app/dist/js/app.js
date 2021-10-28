import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error('Elemento <form></form> é nulo');
}
const buttonImport = document.querySelector('#button-import');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('Elemento <button></button> é nulo');
}
//# sourceMappingURL=app.js.map