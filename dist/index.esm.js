/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var easings = {
    easeInQuad: function (p) { return Math.pow(p, 2); },
    easeOutQuad: function (p) { return -(Math.pow(p - 1, 2) - 1); },
    easeInOutQuad: function (p) {
        return (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 2) : -0.5 * ((p -= 2) * p - 2);
    },
    easeInCubic: function (p) { return Math.pow(p, 3); },
    easeOutCubic: function (p) { return Math.pow(p - 1, 3) + 1; },
    easeInOutCubic: function (p) {
        return (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 3) : 0.5 * (Math.pow(p - 2, 3) + 2);
    },
    easeInQuart: function (p) { return Math.pow(p, 4); },
    easeOutQuart: function (p) { return -(Math.pow(p - 1, 4) - 1); },
    easeInOutQuart: function (p) {
        return (p /= 0.5) < 1
            ? 0.5 * Math.pow(p, 4)
            : -0.5 * ((p -= 2) * Math.pow(p, 3) - 2);
    },
    easeInQuint: function (p) { return Math.pow(p, 5); },
    easeOutQuint: function (p) { return Math.pow(p - 1, 5) + 1; },
    easeInOutQuint: function (p) {
        return (p /= 0.5) < 1 ? 0.5 * Math.pow(p, 5) : 0.5 * (Math.pow(p - 2, 5) + 2);
    },
    easeInSine: function (p) { return -Math.cos(p * (Math.PI / 2)) + 1; },
    easeOutSine: function (p) { return Math.sin(p * (Math.PI / 2)); },
    easeInOutSine: function (p) { return -0.5 * (Math.cos(Math.PI * p) - 1); },
    easeInExpo: function (p) { return (p === 0 ? 0 : Math.pow(2, 10 * (p - 1))); },
    easeOutExpo: function (p) { return (p === 1 ? 1 : -Math.pow(2, -10 * p) + 1); },
    easeInOutExpo: function (p) {
        if (p === 0)
            return 0;
        if (p === 1)
            return 1;
        if ((p /= 0.5) < 1)
            return 0.5 * Math.pow(2, 10 * (p - 1));
        return 0.5 * (-Math.pow(2, -10 * --p) + 2);
    },
    easeInCirc: function (p) { return -(Math.sqrt(1 - p * p) - 1); },
    easeOutCirc: function (p) { return Math.sqrt(1 - Math.pow(p - 1, 2)); },
    easeInOutCirc: function (p) {
        return (p /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - p * p) - 1)
            : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
    },
    easeOutBounce: function (p) {
        if (p < 1 / 2.75) {
            return 7.5625 * p * p;
        }
        else if (p < 2 / 2.75) {
            return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
        }
        else if (p < 2.5 / 2.75) {
            return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
        }
        else {
            return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
        }
    },
    easeInBack: function (p) {
        var s = 1.70158;
        return p * p * ((s + 1) * p - s);
    },
    easeOutBack: function (p) {
        var s = 1.70158;
        return (p = p - 1) * p * ((s + 1) * p + s) + 1;
    },
    easeInOutBack: function (p) {
        var s = 1.70158;
        if ((p /= 0.5) < 1)
            return 0.5 * (p * p * (((s *= 1.525) + 1) * p - s));
        return 0.5 * ((p -= 2) * p * (((s *= 1.525) + 1) * p + s) + 2);
    },
    elastic: function (p) {
        return -1 * Math.pow(4, -8 * p) * Math.sin(((p * 6 - 1) * (2 * Math.PI)) / 2) + 1;
    },
    swingFromTo: function (p) {
        var s = 1.70158;
        return (p /= 0.5) < 1
            ? 0.5 * (p * p * (((s *= 1.525) + 1) * p - s))
            : 0.5 * ((p -= 2) * p * (((s *= 1.525) + 1) * p + s) + 2);
    },
    swingFrom: function (p) {
        var s = 1.70158;
        return p * p * ((s + 1) * p - s);
    },
    swingTo: function (p) {
        var s = 1.70158;
        return (p -= 1) * p * ((s + 1) * p + s) + 1;
    },
    bounce: function (p) {
        if (p < 1 / 2.75) {
            return 7.5625 * p * p;
        }
        else if (p < 2 / 2.75) {
            return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
        }
        else if (p < 2.5 / 2.75) {
            return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
        }
        else {
            return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
        }
    },
    bouncePast: function (p) {
        if (p < 1 / 2.75) {
            return 7.5625 * p * p;
        }
        else if (p < 2 / 2.75) {
            return 2 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
        }
        else if (p < 2.5 / 2.75) {
            return 2 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
        }
        else {
            return 2 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
        }
    },
    easeFromTo: function (p) {
        return (p /= 0.5) < 1
            ? 0.5 * Math.pow(p, 4)
            : -0.5 * ((p -= 2) * Math.pow(p, 3) - 2);
    },
    easeFrom: function (p) { return Math.pow(p, 4); },
    easeTo: function (p) { return Math.pow(p, 0.25); },
    linear: function (p) { return p; },
    sinusoidal: function (p) { return -Math.cos(p * Math.PI) / 2 + 0.5; },
    reverse: function (p) { return 1 - p; },
    mirror: function (p, transition) {
        transition = transition || easings.sinusoidal;
        if (p < 0.5)
            return transition(p * 2);
        else
            return transition(1 - (p - 0.5) * 2);
    },
    flicker: function (p) {
        p = p + (Math.random() - 0.5) / 5;
        return easings.sinusoidal(p < 0 ? 0 : p > 1 ? 1 : p);
    },
    wobble: function (p) { return -Math.cos(p * Math.PI * (9 * p)) / 2 + 0.5; },
    pulse: function (p, pulses) {
        return -Math.cos(p * ((pulses || 5) - 0.5) * 2 * Math.PI) / 2 + 0.5;
    },
    blink: function (p, blinks) {
        return Math.round(p * (blinks || 5)) % 2;
    },
    spring: function (p) { return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6); },
    none: function () { return 0; },
    full: function () { return 1; },
};

var defaultOptions = {
    position: [0, 100],
    duration: 5000,
    timingFn: 'easeOutQuint',
    delay: 0,
    running: function () { }
};
var rAF = window.requestAnimationFrame || (function () { });
var cancelRAF = window.cancelAnimationFrame || (function () { });
var calcAnimateVal = function (options) {
    var _a = __assign(__assign({}, defaultOptions), (options || {})), position = _a.position, duration = _a.duration, timingFn = _a.timingFn, delay = _a.delay, running = _a.running, doneFn = _a.done;
    var startTime;
    var rAFid;
    var timed;
    var paused = false;
    var _run = function (nowTime) {
        if (paused) {
            paused = false;
            startTime = nowTime - timed;
        }
        // 第一次记录时间
        if (!startTime)
            startTime = nowTime;
        if (delay && nowTime - startTime < delay)
            return (rAFid = rAF(_run));
        // 计算已经过去了多少时间
        timed = nowTime - startTime - delay;
        // 获取缓动函数
        var easingFn = typeof timingFn === 'function' ? timingFn : easings[timingFn];
        // 计算进度, 比例值
        var progress = duration > 0 ? Math.min(timed / duration, 1) : 1;
        // 计算值： 开始位置 + （结束位置 - 开始位置）* 进度
        var getVal = function (a, b, p) { return a + (b - a) * p; };
        var value;
        if (Array.isArray(position[0])) {
            value = [];
            position.forEach(function (_a) {
                var start = _a[0], end = _a[1];
                value.push(getVal(start, end, easingFn(progress)));
            });
        }
        else {
            value = getVal(position[0], position[1], easingFn(progress));
        }
        typeof running === 'function' && running(value);
        if (progress !== 1) {
            rAFid = rAF(_run);
        }
        else {
            startTime = timed = 0;
            typeof doneFn === 'function' && doneFn(value);
        }
    };
    var run = function (opt) {
        var _a;
        if (opt) {
            (_a = __assign(__assign(__assign({}, defaultOptions), (options || {})), opt), position = _a.position, duration = _a.duration, timingFn = _a.timingFn, delay = _a.delay, running = _a.running, doneFn = _a.done);
        }
        rAFid = rAF(_run);
    };
    var done = function () {
        timed = startTime = 0;
        paused = false;
        cancelRAF(rAFid);
    };
    var pause = function () {
        paused = true;
        cancelRAF(rAFid);
    };
    return {
        run: run,
        done: done,
        pause: pause
    };
};
calcAnimateVal.setRAF = function (fn) { return rAF = fn; };
calcAnimateVal.setCancelRAF = function (fn) { return cancelRAF = fn; };

export default calcAnimateVal;
