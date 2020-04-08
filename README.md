# calcAnimateVal
```js
npm i calc-animate-val
```
根据总时长、当前时间、缓动函数来计算动画元素每次执行时所在的位置。使用requestAnimationFrame执行动画，获取当前时间。在不支持rAf的平台，需要自行polyfill rAF。
### 实例：一键回到顶部
```js
import calcAnimateVal from 'calc-animate-val'

const { run, pause, done } = calcAnimateVal({
  position: [document.documentElement.scrollTop, 0],
  duration: 2000,
  timingFn: 'easeOutQuint',
  delay: 0,
  running: y => window.scrollTo(0, y),
  done: () => alert('动画完成')
})
run() // 执行
pause() // 暂停
done() // 立即中断动画
```

### 指南
```typescript
interface CalcAnimateVal {
  (opt: Options): CalcFnResult
  setRAF: any
  setCancelRAF: any
}
```
- Options
  - position?: position | [position]
    - default: [0, 100]
    - 位置信息，数组的第一位为开始位置，第二位为结束位置。可以传入二维数组，这样就可以同时计算多个值（比如宽度和透明度），传入二维数组时callback接收的参数会变为数组。
  - duration?: number
    - defalut: 5000
    - 动画总时长
  - timingFn?: EasingsName | easingFn
    - defalut: 'easeOutQuint'
    - 缓动函数的名称，也可以传入函数来自定义缓动函数
    - 点击查看内置缓动函数
  - delay?: number
    - defalut: 0
    - 动画延时时间
  - running: (curPos) => void
    - 每次执行requestAnimationFrame时调用，接收当前时间动画元素应该在的位置信息（根据总时长、当前时间、缓动函数计算而来），在此函数中使用接收到的值进行动画操作。
  - done?: callback
    - 动画完成后调用，如果将这个值传入calcAnimateVal返回的run函数，即可实现循环播放动画
- CalcFnResult
  - calcAnimateVal函数的返回值
  - run: (opt?: Options) => void
    - 执行动画，可以传入与calcAnimateVal相同的参数，此参数会和calcAnimateVal传入的参数进行合并
  - pause
    - 暂停动画
  - done
    - 立即中断动画，调用此函数时不会触发Options中的done函数

- setRAF: (fn) => fn
  - calcAnimateVal的运行是依赖于requestAnimationFrame函数的，在不支持requestAnimationFrame的平台，可以调用此方法自行polyfill requestAnimationFrame。
  - 因为calcAnimateVal 是基于当前时间和总时间进行数据计算，所以 polyfill函数要在每次执行时传入当前的时间。
  - 点此查看使用setTimeout polyfill
- setCancelRAF: (fn) => fn
  - 设置polyfill cancelAnimationFrame函数