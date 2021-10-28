import {Printable} from "./printable.js";
import {Comparable} from "./comparable.js";

export interface Model<T> extends Printable, Comparable<T> {}