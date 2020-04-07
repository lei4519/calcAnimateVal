import { EasingsName } from "../lib/easing";
type position = Array<number>;
type easingFn = (num: number) => number;
type callback = (num: number | any[]) => void;
export interface Options {
  position?: position | [position];
  duration?: number;
  timingFnName?: EasingsName | easingFn;
  delay?: number;
  running: callback
  done?: callback
}
export interface calcFnResult{
  run: () => void
  pause: () => void
  done: () => void
}
export type calcAnimateValFn = (opt: Options, cb: callback) => calcFnResult