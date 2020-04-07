export const easings = {
  easeInQuad: (p: number) => Math.pow(p, 2),
  easeOutQuad: (p: number) => -(Math.pow(p - 1, 2) - 1),
  easeInOutQuad: (p: number) =>
    (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 2) : -0.5 * ((p -= 2) * p - 2),
  easeInCubic: (p: number) => Math.pow(p, 3),
  easeOutCubic: (p: number) => Math.pow(p - 1, 3) + 1,
  easeInOutCubic: (p: number) =>
    (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 3) : 0.5 * (Math.pow(p - 2, 3) + 2),
  easeInQuart: (p: number) => Math.pow(p, 4),
  easeOutQuart: (p: number) => -(Math.pow(p - 1, 4) - 1),
  easeInOutQuart: (p: number) =>
    (p /= 0.5) < 1
      ? 0.5 * Math.pow(p, 4)
      : -0.5 * ((p -= 2) * Math.pow(p, 3) - 2),
  easeInQuint: (p: number) => Math.pow(p, 5),
  easeOutQuint: (p: number) => Math.pow(p - 1, 5) + 1,
  easeInOutQuint: (p: number) =>
    (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 5) : 0.5 * (Math.pow(p - 2, 5) + 2),
  easeInSine: (p: number) => -Math.cos(p * (Math.PI / 2)) + 1,
  easeOutSine: (p: number) => Math.sin(p * (Math.PI / 2)),
  easeInOutSine: (p: number) => -0.5 * (Math.cos(Math.PI * p) - 1),
  easeInExpo: (p: number) => (p === 0 ? 0 : Math.pow(2, 10 * (p - 1))),
  easeOutExpo: (p: number) => (p === 1 ? 1 : -Math.pow(2, -10 * p) + 1),
  easeInOutExpo: (p: number) => {
    if (p === 0) return 0;
    if (p === 1) return 1;
    if ((p /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (p - 1));
    return 0.5 * (-Math.pow(2, -10 * --p) + 2);
  },
  easeInCirc: (p: number) => -(Math.sqrt(1 - p * p) - 1),
  easeOutCirc: (p: number) => Math.sqrt(1 - Math.pow(p - 1, 2)),
  easeInOutCirc: (p: number) =>
    (p /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - p * p) - 1)
      : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1),
  easeOutBounce: (p: number) => {
    if (p < 1 / 2.75) {
      return 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }
  },
  easeInBack: (p: number) => {
    const s = 1.70158;
    return p * p * ((s + 1) * p - s);
  },
  easeOutBack: (p: number) => {
    const s = 1.70158;
    return (p = p - 1) * p * ((s + 1) * p + s) + 1;
  },
  easeInOutBack: (p: number) => {
    let s = 1.70158;
    if ((p /= 0.5) < 1) return 0.5 * (p * p * (((s *= 1.525) + 1) * p - s));
    return 0.5 * ((p -= 2) * p * (((s *= 1.525) + 1) * p + s) + 2);
  },
  elastic: (p: number) =>
    -1 * Math.pow(4, -8 * p) * Math.sin(((p * 6 - 1) * (2 * Math.PI)) / 2) + 1,
  swingFromTo: (p: number) => {
    let s = 1.70158;
    return (p /= 0.5) < 1
      ? 0.5 * (p * p * (((s *= 1.525) + 1) * p - s))
      : 0.5 * ((p -= 2) * p * (((s *= 1.525) + 1) * p + s) + 2);
  },
  swingFrom: (p: number) => {
    const s = 1.70158;
    return p * p * ((s + 1) * p - s);
  },
  swingTo: (p: number) => {
    const s = 1.70158;
    return (p -= 1) * p * ((s + 1) * p + s) + 1;
  },
  bounce: (p: number) => {
    if (p < 1 / 2.75) {
      return 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }
  },
  bouncePast: (p: number) => {
    if (p < 1 / 2.75) {
      return 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 2 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
    } else if (p < 2.5 / 2.75) {
      return 2 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
    } else {
      return 2 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
    }
  },
  easeFromTo: (p: number) =>
    (p /= 0.5) < 1
      ? 0.5 * Math.pow(p, 4)
      : -0.5 * ((p -= 2) * Math.pow(p, 3) - 2),
  easeFrom: (p: number) => Math.pow(p, 4),
  easeTo: (p: number) => Math.pow(p, 0.25),
  linear: (p: number) => p,
  sinusoidal: (p: number) => -Math.cos(p * Math.PI) / 2 + 0.5,
  reverse: (p: number) => 1 - p,
  mirror: (p: number, transition?: any) => {
    transition = transition || easings.sinusoidal;
    if (p < 0.5) return transition(p * 2);
    else return transition(1 - (p - 0.5) * 2);
  },
  flicker: (p: number) => {
    p = p + (Math.random() - 0.5) / 5;
    return easings.sinusoidal(p < 0 ? 0 : p > 1 ? 1 : p);
  },
  wobble: (p: number) => -Math.cos(p * Math.PI * (9 * p)) / 2 + 0.5,
  pulse: (p: number, pulses?: any) => {
    return -Math.cos(p * ((pulses || 5) - 0.5) * 2 * Math.PI) / 2 + 0.5;
  },
  blink: (p: number, blinks?: any) => {
    return Math.round(p * (blinks || 5)) % 2;
  },
  spring: (p: number) => 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6),
  none: () => 0,
  full: () => 1,
}
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