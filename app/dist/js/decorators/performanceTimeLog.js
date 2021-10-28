export function performanceTimeLog(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let denominator = 1;
            let unity = 'ms';
            if (inSeconds) {
                denominator = 1000;
                unity = 'segundos';
            }
            const t1 = performance.now();
            const originalMethodReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${((t2 - t1) / denominator)} ${unity}`);
            return originalMethodReturn;
        };
        return descriptor;
    };
}
//# sourceMappingURL=performanceTimeLog.js.map