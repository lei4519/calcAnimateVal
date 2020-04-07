import calc from '../src/index'
// 回到顶部
const curTop = document.documentElement.scrollTop
const {run, done, pause} = calc({
  position: [curTop, 0],
  duration: 3
}, (y) => window.scrollTo(0, y as number))
