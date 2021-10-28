export function perfomanceTimeLog() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const originalMethodReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1).toFixed(2)} ms`);
            originalMethodReturn;
        };
        return descriptor;
    };
}
