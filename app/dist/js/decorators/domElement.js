export function domElement(selector) {
    return function (target, propertyKey) {
        console.log(`Prototype: ${target.constructor.name} Property: ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=domElement.js.map