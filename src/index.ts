import { easings } from '../lib/easing'
import { Options, CalcAnimateVal } from '../types/index.d'

const defaultOptions: Options = {
  position: [0, 100],
  duration: 5000,
  timingFn: 'easeOutQuint',
  delay: 0,
  running: () => {}
}
let rAF = window.requestAnimationFrame || (() => {})
let cancelRAF = window.cancelAnimationFrame || (() => {})
const calcAnimateVal: CalcAnimateVal = (options) => {
  let { position, duration, timingFn, delay, running, done: doneFn } = {
    ...defaultOptions,
    ...(options || {})
  }
  let startTime: DOMHighResTimeStamp
  let rAFid: number
  let timed: number
  let paused: boolean = false
  const _run = (nowTime: DOMHighResTimeStamp) => {
    if (paused) {
      paused = false
      startTime = nowTime - timed
    }
    // 第一次记录时间
    if (!startTime) startTime = nowTime
    if (delay && nowTime - startTime < delay)
      return (rAFid = rAF(_run))
    // 计算已经过去了多少时间
    timed = nowTime - startTime - delay!
    // 获取缓动函数
    const easingFn =
      typeof timingFn === 'function' ? timingFn : easings[timingFn!]
    // 计算进度, 比例值
    const progress = duration! > 0 ? Math.min(timed / duration!, 1) : 1
    // 计算值： 开始位置 + （结束位置 - 开始位置）* 进度
    const getVal = (a: number, b: number, p: number): number => a + (b - a) * p
    let value
    if (Array.isArray(position![0])) {
      value = []
      position!.forEach(([start, end]: any) => {
        value.push(getVal(start, end as number, easingFn(progress)))
      })
    } else {
      value = getVal(position![0], position![1] as number, easingFn(progress))
    }
    typeof running === 'function' && running(value)
    if (progress !== 1) {
      rAFid = rAF(_run)
    } else {
      startTime = timed = 0
      typeof doneFn === 'function' && doneFn(value)
    }
  }
  const run = (opt?: Options) => {
    if (opt) {
      ;({ position, duration, timingFn, delay, running, done: doneFn } = {
        ...defaultOptions,
        ...(options || {}),
        ...opt
      })
    }
    rAFid = rAF(_run)
  }
  const done = () => {
    timed = startTime = 0
    paused = false
    cancelRAF(rAFid)
  }
  const pause = () => {
    paused = true
    cancelRAF(rAFid)
  }
  return {
    run,
    done,
    pause
  }
}
calcAnimateVal.setRAF = (fn: any) => rAF = fn
calcAnimateVal.setCancelRAF = (fn: any) => cancelRAF = fn
export default calcAnimateVal
