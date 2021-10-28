export function domElement(selector: string) {
  return function (target: any, propertyKey: string
  ) {
    console.log(`Prototype: ${target.constructor.name} Property: ${propertyKey}`)
    let element: HTMLElement
    const getter = function () {
      if (!element) {
        // console.log(`Searching DOM element with the selector ${selector} to inject in ${propertyKey}`)
        element = document.querySelector(selector) as HTMLElement
      }
      return element
    }
    Object.defineProperty(
      target,
      propertyKey,
      {get: getter}
    )
  }
}