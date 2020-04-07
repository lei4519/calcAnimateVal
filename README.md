# calcAnimateVal
根据总时长和当前时间来计算动画元素每次执行时的位置。需要在requestAnimationFrame的callback中使用（取得当前时间）。
```js
npm i calc-animate-val
```
## 使用方式
```js
import calcAnimateVal from 'calc-animate-val'

const calcFn = calcAnimateVal({
  position: [0, 100], // 开始位置和结束位置
  duration: 5000, // 动画时长
  timingFnName: 'easeTo', // 运动的贝塞尔曲线
})

function run(now) {
  // value是每次计算的值，done代表动画是否结束了
  const {value, done} = calcFn(now)
  if (!done) {
    requestAnimationFrame(run)
  }
}
requestAnimationFrame(run)

// position也可以传入二维数组，这样就可以同时计算多个值
const calcFn = calcAnimateVal({
  position: [[0, 100], [0, 1]]
  //...
})

function run(now) {
  // 这样value就是数组了，解构出来取个合适的名字
  const {[width, opacity], done} = calcFn(now)
  // ...
}
```