export function removeScript(
  target:any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: Array<any>) {
    // console.log(`@removeScript in action at class ${this.constructor.name} to method ${propertyKey}`)
    let originalMethodReturn = originalMethod.apply(this, args)
    if (typeof originalMethodReturn === 'string') {
      originalMethodReturn = originalMethodReturn.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    return originalMethodReturn
  }
  return descriptor
}