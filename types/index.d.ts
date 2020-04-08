export type EasingsName =
'easeInQuad' |
'easeOutQuad' |
'easeInOutQuad' |
'easeInCubic' |
'easeOutCubic' |
'easeInOutCubic' |
'easeInQuart' |
'easeOutQuart' |
'easeInOutQuart' |
'easeInQuint' |
'easeOutQuint' |
'easeInOutQuint' |
'easeInSine' |
'easeOutSine' |
'easeInOutSine' |
'easeInExpo' |
'easeOutExpo' |
'easeInOutExpo' |
'easeInCirc' |
'easeOutCirc' |
'easeInOutCirc' |
'easeOutBounce' |
'easeInBack' |
'easeOutBack' |
'easeInOutBack' |
'elastic' |
'swingFromTo' |
'swingFrom' |
'swingTo' |
'bounce' |
'bouncePast' |
'easeFromTo' |
'easeFrom' |
'easeTo' |
'linear' |
'sinusoidal' |
'reverse' |
'mirror' |
'flicker' |
'wobble' |
'pulse' |
'blink' |
'spring' |
'none' |
'full'
type position = Array<number>
type easingFn = (num: number) => number
type callback = (num: number | any[]) => void
export interface Options {
  position?: position | [position]
  duration?: number
  timingFn?: EasingsName | easingFn
  delay?: number
  running: callback
  done?: callback
}
export interface CalcFnResult {
  run: (opt?: Options) => void
  pause: () => void
  done: () => void
}
export interface CalcAnimateVal {
  (opt: Options): CalcFnResult
  setRAF: any
  setCancelRAF: any
}
