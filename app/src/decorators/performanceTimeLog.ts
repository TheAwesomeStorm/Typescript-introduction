export function performanceTimeLog(inSeconds: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value
        descriptor.value = function (...args: Array<any>) {
            let denominator = 1
            let unity = 'ms'
            if (inSeconds) {
                denominator = 1000
                unity = 'segundos'
            }
            const t1 = performance.now()
            const originalMethodReturn = originalMethod.apply(this, args)
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${((t2 - t1)/denominator)} ${unity}`)
            return originalMethodReturn
        }
        return descriptor
    }
}