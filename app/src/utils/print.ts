import {Printable} from "../interfaces/printable.js";

export function print(...objs: Array<Printable>) {
  for(let obj of objs) {
    console.log(obj.toText())
  }
}