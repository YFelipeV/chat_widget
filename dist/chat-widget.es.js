import { useState as Ku, useRef as Bh, useEffect as rc } from "react";
function Pi(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
function Yh(l) {
  if (l.__esModule) return l;
  var t = l.default;
  if (typeof t == "function") {
    var a = function u() {
      return this instanceof u ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    a.prototype = t.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(l).forEach(function(u) {
    var e = Object.getOwnPropertyDescriptor(l, u);
    Object.defineProperty(a, u, e.get ? e : {
      enumerable: !0,
      get: function() {
        return l[u];
      }
    });
  }), a;
}
var fn = { exports: {} }, Va = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function jh() {
  if (Bc) return Va;
  Bc = 1;
  var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function a(u, e, n) {
    var f = null;
    if (n !== void 0 && (f = "" + n), e.key !== void 0 && (f = "" + e.key), "key" in e) {
      n = {};
      for (var c in e)
        c !== "key" && (n[c] = e[c]);
    } else n = e;
    return e = n.ref, {
      $$typeof: l,
      type: u,
      key: f,
      ref: e !== void 0 ? e : null,
      props: n
    };
  }
  return Va.Fragment = t, Va.jsx = a, Va.jsxs = a, Va;
}
var Yc;
function Qh() {
  return Yc || (Yc = 1, fn.exports = jh()), fn.exports;
}
var R = Qh(), cn = { exports: {} }, sn = { exports: {} }, jc;
function Xh() {
  if (jc) return sn.exports;
  jc = 1;
  var l = sn.exports = {}, t, a;
  function u() {
    throw new Error("setTimeout has not been defined");
  }
  function e() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? t = setTimeout : t = u;
    } catch {
      t = u;
    }
    try {
      typeof clearTimeout == "function" ? a = clearTimeout : a = e;
    } catch {
      a = e;
    }
  })();
  function n(z) {
    if (t === setTimeout)
      return setTimeout(z, 0);
    if ((t === u || !t) && setTimeout)
      return t = setTimeout, setTimeout(z, 0);
    try {
      return t(z, 0);
    } catch {
      try {
        return t.call(null, z, 0);
      } catch {
        return t.call(this, z, 0);
      }
    }
  }
  function f(z) {
    if (a === clearTimeout)
      return clearTimeout(z);
    if ((a === e || !a) && clearTimeout)
      return a = clearTimeout, clearTimeout(z);
    try {
      return a(z);
    } catch {
      try {
        return a.call(null, z);
      } catch {
        return a.call(this, z);
      }
    }
  }
  var c = [], i = !1, h, S = -1;
  function o() {
    !i || !h || (i = !1, h.length ? c = h.concat(c) : S = -1, c.length && y());
  }
  function y() {
    if (!i) {
      var z = n(o);
      i = !0;
      for (var D = c.length; D; ) {
        for (h = c, c = []; ++S < D; )
          h && h[S].run();
        S = -1, D = c.length;
      }
      h = null, i = !1, f(z);
    }
  }
  l.nextTick = function(z) {
    var D = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var v = 1; v < arguments.length; v++)
        D[v - 1] = arguments[v];
    c.push(new m(z, D)), c.length === 1 && !i && n(y);
  };
  function m(z, D) {
    this.fun = z, this.array = D;
  }
  m.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {};
  function A() {
  }
  return l.on = A, l.addListener = A, l.once = A, l.off = A, l.removeListener = A, l.removeAllListeners = A, l.emit = A, l.prependListener = A, l.prependOnceListener = A, l.listeners = function(z) {
    return [];
  }, l.binding = function(z) {
    throw new Error("process.binding is not supported");
  }, l.cwd = function() {
    return "/";
  }, l.chdir = function(z) {
    throw new Error("process.chdir is not supported");
  }, l.umask = function() {
    return 0;
  }, sn.exports;
}
var Gh = Xh();
const hn = /* @__PURE__ */ Pi(Gh);
var I = require("scheduler"), ls = require("react"), xh = require("react-dom");
function b(l) {
  var t = "https://react.dev/errors/" + l;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++)
      t += "&args[]=" + encodeURIComponent(arguments[a]);
  }
  return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function ts(l) {
  return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
}
var ph = Symbol.for("react.element"), Lu = Symbol.for("react.transitional.element"), $a = Symbol.for("react.portal"), ia = Symbol.for("react.fragment"), as = Symbol.for("react.strict_mode"), Ln = Symbol.for("react.profiler"), Zh = Symbol.for("react.provider"), us = Symbol.for("react.consumer"), Il = Symbol.for("react.context"), pf = Symbol.for("react.forward_ref"), Jn = Symbol.for("react.suspense"), wn = Symbol.for("react.suspense_list"), Zf = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), es = Symbol.for("react.offscreen"), _h = Symbol.for("react.memo_cache_sentinel"), Qc = Symbol.iterator;
function Ca(l) {
  return l === null || typeof l != "object" ? null : (l = Qc && l[Qc] || l["@@iterator"], typeof l == "function" ? l : null);
}
var Vh = Symbol.for("react.client.reference");
function Wn(l) {
  if (l == null) return null;
  if (typeof l == "function")
    return l.$$typeof === Vh ? null : l.displayName || l.name || null;
  if (typeof l == "string") return l;
  switch (l) {
    case ia:
      return "Fragment";
    case $a:
      return "Portal";
    case Ln:
      return "Profiler";
    case as:
      return "StrictMode";
    case Jn:
      return "Suspense";
    case wn:
      return "SuspenseList";
  }
  if (typeof l == "object")
    switch (l.$$typeof) {
      case Il:
        return (l.displayName || "Context") + ".Provider";
      case us:
        return (l._context.displayName || "Context") + ".Consumer";
      case pf:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case Zf:
        return t = l.displayName || null, t !== null ? t : Wn(l.type) || "Memo";
      case dt:
        t = l._payload, l = l._init;
        try {
          return Wn(l(t));
        } catch {
        }
    }
  return null;
}
var O = ls.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.assign, vn, Xc;
function Ia(l) {
  if (vn === void 0)
    try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      vn = t && t[1] || "", Xc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + vn + l + Xc;
}
var dn = !1;
function yn(l, t) {
  if (!l || dn) return "";
  dn = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var u = {
      DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var o = function() {
              throw Error();
            };
            if (Object.defineProperty(o.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(o, []);
              } catch (m) {
                var y = m;
              }
              Reflect.construct(l, [], o);
            } else {
              try {
                o.call();
              } catch (m) {
                y = m;
              }
              l.call(o.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (m) {
              y = m;
            }
            (o = l()) && typeof o.catch == "function" && o.catch(function() {
            });
          }
        } catch (m) {
          if (m && y && typeof m.stack == "string")
            return [m.stack, y.stack];
        }
        return [null, null];
      }
    };
    u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var e = Object.getOwnPropertyDescriptor(
      u.DetermineComponentFrameRoot,
      "name"
    );
    e && e.configurable && Object.defineProperty(
      u.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
    if (f && c) {
      var i = f.split(`
`), h = c.split(`
`);
      for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
        u++;
      for (; e < h.length && !h[e].includes(
        "DetermineComponentFrameRoot"
      ); )
        e++;
      if (u === i.length || e === h.length)
        for (u = i.length - 1, e = h.length - 1; 1 <= u && 0 <= e && i[u] !== h[e]; )
          e--;
      for (; 1 <= u && 0 <= e; u--, e--)
        if (i[u] !== h[e]) {
          if (u !== 1 || e !== 1)
            do
              if (u--, e--, 0 > e || i[u] !== h[e]) {
                var S = `
` + i[u].replace(" at new ", " at ");
                return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
              }
            while (1 <= u && 0 <= e);
          break;
        }
    }
  } finally {
    dn = !1, Error.prepareStackTrace = a;
  }
  return (a = l ? l.displayName || l.name : "") ? Ia(a) : "";
}
function Ch(l) {
  switch (l.tag) {
    case 26:
    case 27:
    case 5:
      return Ia(l.type);
    case 16:
      return Ia("Lazy");
    case 13:
      return Ia("Suspense");
    case 19:
      return Ia("SuspenseList");
    case 0:
    case 15:
      return l = yn(l.type, !1), l;
    case 11:
      return l = yn(l.type.render, !1), l;
    case 1:
      return l = yn(l.type, !0), l;
    default:
      return "";
  }
}
function Gc(l) {
  try {
    var t = "";
    do
      t += Ch(l), l = l.return;
    while (l);
    return t;
  } catch (a) {
    return `
Error generating stack: ` + a.message + `
` + a.stack;
  }
}
function Xa(l) {
  var t = l, a = l;
  if (l.alternate) for (; t.return; ) t = t.return;
  else {
    l = t;
    do
      t = l, t.flags & 4098 && (a = t.return), l = t.return;
    while (l);
  }
  return t.tag === 3 ? a : null;
}
function ns(l) {
  if (l.tag === 13) {
    var t = l.memoizedState;
    if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xc(l) {
  if (Xa(l) !== l)
    throw Error(b(188));
}
function Kh(l) {
  var t = l.alternate;
  if (!t) {
    if (t = Xa(l), t === null) throw Error(b(188));
    return t !== l ? null : l;
  }
  for (var a = l, u = t; ; ) {
    var e = a.return;
    if (e === null) break;
    var n = e.alternate;
    if (n === null) {
      if (u = e.return, u !== null) {
        a = u;
        continue;
      }
      break;
    }
    if (e.child === n.child) {
      for (n = e.child; n; ) {
        if (n === a) return xc(e), l;
        if (n === u) return xc(e), t;
        n = n.sibling;
      }
      throw Error(b(188));
    }
    if (a.return !== u.return) a = e, u = n;
    else {
      for (var f = !1, c = e.child; c; ) {
        if (c === a) {
          f = !0, a = e, u = n;
          break;
        }
        if (c === u) {
          f = !0, u = e, a = n;
          break;
        }
        c = c.sibling;
      }
      if (!f) {
        for (c = n.child; c; ) {
          if (c === a) {
            f = !0, a = n, u = e;
            break;
          }
          if (c === u) {
            f = !0, u = n, a = e;
            break;
          }
          c = c.sibling;
        }
        if (!f) throw Error(b(189));
      }
    }
    if (a.alternate !== u) throw Error(b(190));
  }
  if (a.tag !== 3) throw Error(b(188));
  return a.stateNode.current === a ? l : t;
}
function fs(l) {
  var t = l.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return l;
  for (l = l.child; l !== null; ) {
    if (t = fs(l), t !== null) return t;
    l = l.sibling;
  }
  return null;
}
var Pa = Array.isArray, p = xh.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Zt = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, Fn = [], sa = -1;
function Cl(l) {
  return { current: l };
}
function ul(l) {
  0 > sa || (l.current = Fn[sa], Fn[sa] = null, sa--);
}
function _(l, t) {
  sa++, Fn[sa] = l.current, l.current = t;
}
var pl = Cl(null), bu = Cl(null), zt = Cl(null), oe = Cl(null);
function Ae(l, t) {
  switch (_(zt, t), _(bu, l), _(pl, null), l = t.nodeType, l) {
    case 9:
    case 11:
      t = (t = t.documentElement) && (t = t.namespaceURI) ? pi(t) : 0;
      break;
    default:
      if (l = l === 8 ? t.parentNode : t, t = l.tagName, l = l.namespaceURI)
        l = pi(l), t = oh(l, t);
      else
        switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
  }
  ul(pl), _(pl, t);
}
function qa() {
  ul(pl), ul(bu), ul(zt);
}
function kn(l) {
  l.memoizedState !== null && _(oe, l);
  var t = pl.current, a = oh(t, l.type);
  t !== a && (_(bu, l), _(pl, a));
}
function ze(l) {
  bu.current === l && (ul(pl), ul(bu)), oe.current === l && (ul(oe), Hu._currentValue = Zt);
}
var $n = Object.prototype.hasOwnProperty, _f = I.unstable_scheduleCallback, mn = I.unstable_cancelCallback, Lh = I.unstable_shouldYield, Jh = I.unstable_requestPaint, Zl = I.unstable_now, wh = I.unstable_getCurrentPriorityLevel, cs = I.unstable_ImmediatePriority, is = I.unstable_UserBlockingPriority, Ee = I.unstable_NormalPriority, Wh = I.unstable_LowPriority, ss = I.unstable_IdlePriority, Fh = I.log, kh = I.unstable_setDisableYieldValue, Bu = null, bl = null;
function $h(l) {
  if (bl && typeof bl.onCommitFiberRoot == "function")
    try {
      bl.onCommitFiberRoot(
        Bu,
        l,
        void 0,
        (l.current.flags & 128) === 128
      );
    } catch {
    }
}
function ot(l) {
  if (typeof Fh == "function" && kh(l), bl && typeof bl.setStrictMode == "function")
    try {
      bl.setStrictMode(Bu, l);
    } catch {
    }
}
var ol = Math.clz32 ? Math.clz32 : lv, Ih = Math.log, Ph = Math.LN2;
function lv(l) {
  return l >>>= 0, l === 0 ? 32 : 31 - (Ih(l) / Ph | 0) | 0;
}
var Ju = 128, wu = 4194304;
function Qt(l) {
  var t = l & 42;
  if (t !== 0) return t;
  switch (l & -l) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return l & 4194176;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return l & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return l;
  }
}
function Je(l, t) {
  var a = l.pendingLanes;
  if (a === 0) return 0;
  var u = 0, e = l.suspendedLanes, n = l.pingedLanes, f = l.warmLanes;
  l = l.finishedLanes !== 0;
  var c = a & 134217727;
  return c !== 0 ? (a = c & ~e, a !== 0 ? u = Qt(a) : (n &= c, n !== 0 ? u = Qt(n) : l || (f = c & ~f, f !== 0 && (u = Qt(f))))) : (c = a & ~e, c !== 0 ? u = Qt(c) : n !== 0 ? u = Qt(n) : l || (f = a & ~f, f !== 0 && (u = Qt(f)))), u === 0 ? 0 : t !== 0 && t !== u && !(t & e) && (e = u & -u, f = t & -t, e >= f || e === 32 && (f & 4194176) !== 0) ? t : u;
}
function Yu(l, t) {
  return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
}
function tv(l, t) {
  switch (l) {
    case 1:
    case 2:
    case 4:
    case 8:
      return t + 250;
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hs() {
  var l = Ju;
  return Ju <<= 1, !(Ju & 4194176) && (Ju = 128), l;
}
function vs() {
  var l = wu;
  return wu <<= 1, !(wu & 62914560) && (wu = 4194304), l;
}
function Sn(l) {
  for (var t = [], a = 0; 31 > a; a++) t.push(l);
  return t;
}
function ju(l, t) {
  l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
}
function av(l, t, a, u, e, n) {
  var f = l.pendingLanes;
  l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
  var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
  for (a = f & ~a; 0 < a; ) {
    var S = 31 - ol(a), o = 1 << S;
    c[S] = 0, i[S] = -1;
    var y = h[S];
    if (y !== null)
      for (h[S] = null, S = 0; S < y.length; S++) {
        var m = y[S];
        m !== null && (m.lane &= -536870913);
      }
    a &= ~o;
  }
  u !== 0 && ds(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
}
function ds(l, t, a) {
  l.pendingLanes |= t, l.suspendedLanes &= ~t;
  var u = 31 - ol(t);
  l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194218;
}
function ys(l, t) {
  var a = l.entangledLanes |= t;
  for (l = l.entanglements; a; ) {
    var u = 31 - ol(a), e = 1 << u;
    e & t | l[u] & t && (l[u] |= t), a &= ~e;
  }
}
function ms(l) {
  return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
}
function Ss() {
  var l = p.p;
  return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Hh(l.type));
}
function uv(l, t) {
  var a = p.p;
  try {
    return p.p = l, t();
  } finally {
    p.p = a;
  }
}
var Bt = Math.random().toString(36).slice(2), cl = "__reactFiber$" + Bt, dl = "__reactProps$" + Bt, Ga = "__reactContainer$" + Bt, In = "__reactEvents$" + Bt, ev = "__reactListeners$" + Bt, nv = "__reactHandles$" + Bt, pc = "__reactResources$" + Bt, ou = "__reactMarker$" + Bt;
function Vf(l) {
  delete l[cl], delete l[dl], delete l[In], delete l[ev], delete l[nv];
}
function xt(l) {
  var t = l[cl];
  if (t) return t;
  for (var a = l.parentNode; a; ) {
    if (t = a[Ga] || a[cl]) {
      if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
        for (l = _i(l); l !== null; ) {
          if (a = l[cl]) return a;
          l = _i(l);
        }
      return t;
    }
    l = a, a = l.parentNode;
  }
  return null;
}
function xa(l) {
  if (l = l[cl] || l[Ga]) {
    var t = l.tag;
    if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
      return l;
  }
  return null;
}
function lu(l) {
  var t = l.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
  throw Error(b(33));
}
function Aa(l) {
  var t = l[pc];
  return t || (t = l[pc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
}
function tl(l) {
  l[ou] = !0;
}
var gs = /* @__PURE__ */ new Set(), bs = {};
function $t(l, t) {
  Ha(l, t), Ha(l + "Capture", t);
}
function Ha(l, t) {
  for (bs[l] = t, l = 0; l < t.length; l++)
    gs.add(t[l]);
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fv = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), Zc = {}, _c = {};
function cv(l) {
  return $n.call(_c, l) ? !0 : $n.call(Zc, l) ? !1 : fv.test(l) ? _c[l] = !0 : (Zc[l] = !0, !1);
}
function fe(l, t, a) {
  if (cv(t))
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var u = t.toLowerCase().slice(0, 5);
          if (u !== "data-" && u !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
}
function Wu(l, t, a) {
  if (a === null) l.removeAttribute(t);
  else {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        l.removeAttribute(t);
        return;
    }
    l.setAttribute(t, "" + a);
  }
}
function Ll(l, t, a, u) {
  if (u === null) l.removeAttribute(a);
  else {
    switch (typeof u) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        l.removeAttribute(a);
        return;
    }
    l.setAttributeNS(t, a, "" + u);
  }
}
function Dl(l) {
  switch (typeof l) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return l;
    case "object":
      return l;
    default:
      return "";
  }
}
function os(l) {
  var t = l.type;
  return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function iv(l) {
  var t = os(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
    l.constructor.prototype,
    t
  ), u = "" + l[t];
  if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
    var e = a.get, n = a.set;
    return Object.defineProperty(l, t, {
      configurable: !0,
      get: function() {
        return e.call(this);
      },
      set: function(f) {
        u = "" + f, n.call(this, f);
      }
    }), Object.defineProperty(l, t, {
      enumerable: a.enumerable
    }), {
      getValue: function() {
        return u;
      },
      setValue: function(f) {
        u = "" + f;
      },
      stopTracking: function() {
        l._valueTracker = null, delete l[t];
      }
    };
  }
}
function Te(l) {
  l._valueTracker || (l._valueTracker = iv(l));
}
function As(l) {
  if (!l) return !1;
  var t = l._valueTracker;
  if (!t) return !0;
  var a = t.getValue(), u = "";
  return l && (u = os(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
}
function Me(l) {
  if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
  try {
    return l.activeElement || l.body;
  } catch {
    return l.body;
  }
}
var sv = /[\n"\\]/g;
function ql(l) {
  return l.replace(
    sv,
    function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    }
  );
}
function Pn(l, t, a, u, e, n, f, c) {
  l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Dl(t)) : l.value !== "" + Dl(t) && (l.value = "" + Dl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, Dl(t)) : a != null ? lf(l, f, Dl(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Dl(c) : l.removeAttribute("name");
}
function zs(l, t, a, u, e, n, f, c) {
  if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
    if (!(n !== "submit" && n !== "reset" || t != null))
      return;
    a = a != null ? "" + Dl(a) : "", t = t != null ? "" + Dl(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
  }
  u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
}
function lf(l, t, a) {
  t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
}
function za(l, t, a, u) {
  if (l = l.options, t) {
    t = {};
    for (var e = 0; e < a.length; e++)
      t["$" + a[e]] = !0;
    for (a = 0; a < l.length; a++)
      e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
  } else {
    for (a = "" + Dl(a), t = null, e = 0; e < l.length; e++) {
      if (l[e].value === a) {
        l[e].selected = !0, u && (l[e].defaultSelected = !0);
        return;
      }
      t !== null || l[e].disabled || (t = l[e]);
    }
    t !== null && (t.selected = !0);
  }
}
function Es(l, t, a) {
  if (t != null && (t = "" + Dl(t), t !== l.value && (l.value = t), a == null)) {
    l.defaultValue !== t && (l.defaultValue = t);
    return;
  }
  l.defaultValue = a != null ? "" + Dl(a) : "";
}
function Ts(l, t, a, u) {
  if (t == null) {
    if (u != null) {
      if (a != null) throw Error(b(92));
      if (Pa(u)) {
        if (1 < u.length) throw Error(b(93));
        u = u[0];
      }
      a = u;
    }
    a == null && (a = ""), t = a;
  }
  a = Dl(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
}
function Ra(l, t) {
  if (t) {
    var a = l.firstChild;
    if (a && a === l.lastChild && a.nodeType === 3) {
      a.nodeValue = t;
      return;
    }
  }
  l.textContent = t;
}
var hv = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function Vc(l, t, a) {
  var u = t.indexOf("--") === 0;
  a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || hv.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
}
function Ms(l, t, a) {
  if (t != null && typeof t != "object")
    throw Error(b(62));
  if (l = l.style, a != null) {
    for (var u in a)
      !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
    for (var e in t)
      u = t[e], t.hasOwnProperty(e) && a[e] !== u && Vc(l, e, u);
  } else
    for (var n in t)
      t.hasOwnProperty(n) && Vc(l, n, t[n]);
}
function Cf(l) {
  if (l.indexOf("-") === -1) return !1;
  switch (l) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vv = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), dv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function ce(l) {
  return dv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
}
var tf = null;
function Kf(l) {
  return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
}
var ha = null, Ea = null;
function Cc(l) {
  var t = xa(l);
  if (t && (l = t.stateNode)) {
    var a = l[dl] || null;
    l: switch (l = t.stateNode, t.type) {
      case "input":
        if (Pn(
          l,
          a.value,
          a.defaultValue,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name
        ), t = a.name, a.type === "radio" && t != null) {
          for (a = l; a.parentNode; ) a = a.parentNode;
          for (a = a.querySelectorAll(
            'input[name="' + ql(
              "" + t
            ) + '"][type="radio"]'
          ), t = 0; t < a.length; t++) {
            var u = a[t];
            if (u !== l && u.form === l.form) {
              var e = u[dl] || null;
              if (!e) throw Error(b(90));
              Pn(
                u,
                e.value,
                e.defaultValue,
                e.defaultValue,
                e.checked,
                e.defaultChecked,
                e.type,
                e.name
              );
            }
          }
          for (t = 0; t < a.length; t++)
            u = a[t], u.form === l.form && As(u);
        }
        break l;
      case "textarea":
        Es(l, a.value, a.defaultValue);
        break l;
      case "select":
        t = a.value, t != null && za(l, !!a.multiple, t, !1);
    }
  }
}
var gn = !1;
function Ds(l, t, a) {
  if (gn) return l(t, a);
  gn = !0;
  try {
    var u = l(t);
    return u;
  } finally {
    if (gn = !1, (ha !== null || Ea !== null) && (an(), ha && (t = ha, l = Ea, Ea = ha = null, Cc(t), l)))
      for (t = 0; t < l.length; t++) Cc(l[t]);
  }
}
function Au(l, t) {
  var a = l.stateNode;
  if (a === null) return null;
  var u = a[dl] || null;
  if (u === null) return null;
  a = u[t];
  l: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
      break l;
    default:
      l = !1;
  }
  if (l) return null;
  if (a && typeof a != "function")
    throw Error(
      b(231, t, typeof a)
    );
  return a;
}
var af = !1;
if (et)
  try {
    var Ka = {};
    Object.defineProperty(Ka, "passive", {
      get: function() {
        af = !0;
      }
    }), window.addEventListener("test", Ka, Ka), window.removeEventListener("test", Ka, Ka);
  } catch {
    af = !1;
  }
var At = null, Lf = null, ie = null;
function Os() {
  if (ie) return ie;
  var l, t = Lf, a = t.length, u, e = "value" in At ? At.value : At.textContent, n = e.length;
  for (l = 0; l < a && t[l] === e[l]; l++) ;
  var f = a - l;
  for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
  return ie = e.slice(l, 1 < u ? 1 - u : void 0);
}
function se(l) {
  var t = l.keyCode;
  return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
}
function Fu() {
  return !0;
}
function Kc() {
  return !1;
}
function yl(l) {
  function t(a, u, e, n, f) {
    this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
    for (var c in l)
      l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
    return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Fu : Kc, this.isPropagationStopped = Kc, this;
  }
  return Z(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fu);
    },
    stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fu);
    },
    persist: function() {
    },
    isPersistent: Fu
  }), t;
}
var It = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(l) {
    return l.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
}, we = yl(It), Qu = Z({}, It, { view: 0, detail: 0 }), yv = yl(Qu), bn, on, La, We = Z({}, Qu, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: Jf,
  button: 0,
  buttons: 0,
  relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  },
  movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== La && (La && l.type === "mousemove" ? (bn = l.screenX - La.screenX, on = l.screenY - La.screenY) : on = bn = 0, La = l), bn);
  },
  movementY: function(l) {
    return "movementY" in l ? l.movementY : on;
  }
}), Lc = yl(We), mv = Z({}, We, { dataTransfer: 0 }), Sv = yl(mv), gv = Z({}, Qu, { relatedTarget: 0 }), An = yl(gv), bv = Z({}, It, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), ov = yl(bv), Av = Z({}, It, {
  clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  }
}), zv = yl(Av), Ev = Z({}, It, { data: 0 }), Jc = yl(Ev), Tv = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Mv = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Dv = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Ov(l) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(l) : (l = Dv[l]) ? !!t[l] : !1;
}
function Jf() {
  return Ov;
}
var Uv = Z({}, Qu, {
  key: function(l) {
    if (l.key) {
      var t = Tv[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = se(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Mv[l.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Jf,
  charCode: function(l) {
    return l.type === "keypress" ? se(l) : 0;
  },
  keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  },
  which: function(l) {
    return l.type === "keypress" ? se(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }
}), qv = yl(Uv), Hv = Z({}, We, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}), wc = yl(Hv), Rv = Z({}, Qu, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: Jf
}), Nv = yl(Rv), rv = Z({}, It, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), Bv = yl(rv), Yv = Z({}, We, {
  deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  },
  deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jv = yl(Yv), Qv = Z({}, It, {
  newState: 0,
  oldState: 0
}), Xv = yl(Qv), Gv = [9, 13, 27, 32], wf = et && "CompositionEvent" in window, au = null;
et && "documentMode" in document && (au = document.documentMode);
var xv = et && "TextEvent" in window && !au, Us = et && (!wf || au && 8 < au && 11 >= au), Wc = " ", Fc = !1;
function qs(l, t) {
  switch (l) {
    case "keyup":
      return Gv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hs(l) {
  return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
}
var va = !1;
function pv(l, t) {
  switch (l) {
    case "compositionend":
      return Hs(t);
    case "keypress":
      return t.which !== 32 ? null : (Fc = !0, Wc);
    case "textInput":
      return l = t.data, l === Wc && Fc ? null : l;
    default:
      return null;
  }
}
function Zv(l, t) {
  if (va)
    return l === "compositionend" || !wf && qs(l, t) ? (l = Os(), ie = Lf = At = null, va = !1, l) : null;
  switch (l) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Us && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _v = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function kc(l) {
  var t = l && l.nodeName && l.nodeName.toLowerCase();
  return t === "input" ? !!_v[l.type] : t === "textarea";
}
function Rs(l, t, a, u) {
  ha ? Ea ? Ea.push(u) : Ea = [u] : ha = u, t = pe(t, "onChange"), 0 < t.length && (a = new we(
    "onChange",
    "change",
    null,
    a,
    u
  ), l.push({ event: a, listeners: t }));
}
var uu = null, zu = null;
function Vv(l) {
  Sh(l, 0);
}
function Fe(l) {
  var t = lu(l);
  if (As(t)) return l;
}
function $c(l, t) {
  if (l === "change") return t;
}
var Ns = !1;
if (et) {
  var zn;
  if (et) {
    var En = "oninput" in document;
    if (!En) {
      var Ic = document.createElement("div");
      Ic.setAttribute("oninput", "return;"), En = typeof Ic.oninput == "function";
    }
    zn = En;
  } else zn = !1;
  Ns = zn && (!document.documentMode || 9 < document.documentMode);
}
function Pc() {
  uu && (uu.detachEvent("onpropertychange", rs), zu = uu = null);
}
function rs(l) {
  if (l.propertyName === "value" && Fe(zu)) {
    var t = [];
    Rs(
      t,
      zu,
      l,
      Kf(l)
    ), Ds(Vv, t);
  }
}
function Cv(l, t, a) {
  l === "focusin" ? (Pc(), uu = t, zu = a, uu.attachEvent("onpropertychange", rs)) : l === "focusout" && Pc();
}
function Kv(l) {
  if (l === "selectionchange" || l === "keyup" || l === "keydown")
    return Fe(zu);
}
function Lv(l, t) {
  if (l === "click") return Fe(t);
}
function Jv(l, t) {
  if (l === "input" || l === "change")
    return Fe(t);
}
function wv(l, t) {
  return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
}
var zl = typeof Object.is == "function" ? Object.is : wv;
function Eu(l, t) {
  if (zl(l, t)) return !0;
  if (typeof l != "object" || l === null || typeof t != "object" || t === null)
    return !1;
  var a = Object.keys(l), u = Object.keys(t);
  if (a.length !== u.length) return !1;
  for (u = 0; u < a.length; u++) {
    var e = a[u];
    if (!$n.call(t, e) || !zl(l[e], t[e]))
      return !1;
  }
  return !0;
}
function li(l) {
  for (; l && l.firstChild; ) l = l.firstChild;
  return l;
}
function ti(l, t) {
  var a = li(l);
  l = 0;
  for (var u; a; ) {
    if (a.nodeType === 3) {
      if (u = l + a.textContent.length, l <= t && u >= t)
        return { node: a, offset: t - l };
      l = u;
    }
    l: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break l;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = li(a);
  }
}
function Bs(l, t) {
  return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ys(l) {
  l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
  for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
    try {
      var a = typeof t.contentWindow.location.href == "string";
    } catch {
      a = !1;
    }
    if (a) l = t.contentWindow;
    else break;
    t = Me(l.document);
  }
  return t;
}
function Wf(l) {
  var t = l && l.nodeName && l.nodeName.toLowerCase();
  return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
}
function Wv(l, t) {
  var a = Ys(t);
  t = l.focusedElem;
  var u = l.selectionRange;
  if (a !== t && t && t.ownerDocument && Bs(t.ownerDocument.documentElement, t)) {
    if (u !== null && Wf(t)) {
      if (l = u.start, a = u.end, a === void 0 && (a = l), "selectionStart" in t)
        t.selectionStart = l, t.selectionEnd = Math.min(
          a,
          t.value.length
        );
      else if (a = (l = t.ownerDocument || document) && l.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = t.textContent.length, n = Math.min(u.start, e);
        u = u.end === void 0 ? n : Math.min(u.end, e), !a.extend && n > u && (e = u, u = n, n = e), e = ti(t, n);
        var f = ti(
          t,
          u
        );
        e && f && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== f.node || a.focusOffset !== f.offset) && (l = l.createRange(), l.setStart(e.node, e.offset), a.removeAllRanges(), n > u ? (a.addRange(l), a.extend(f.node, f.offset)) : (l.setEnd(
          f.node,
          f.offset
        ), a.addRange(l)));
      }
    }
    for (l = [], a = t; a = a.parentNode; )
      a.nodeType === 1 && l.push({
        element: a,
        left: a.scrollLeft,
        top: a.scrollTop
      });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < l.length; t++)
      a = l[t], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Fv = et && "documentMode" in document && 11 >= document.documentMode, da = null, uf = null, eu = null, ef = !1;
function ai(l, t, a) {
  var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  ef || da == null || da !== Me(u) || (u = da, "selectionStart" in u && Wf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
    anchorNode: u.anchorNode,
    anchorOffset: u.anchorOffset,
    focusNode: u.focusNode,
    focusOffset: u.focusOffset
  }), eu && Eu(eu, u) || (eu = u, u = pe(uf, "onSelect"), 0 < u.length && (t = new we(
    "onSelect",
    "select",
    null,
    t,
    a
  ), l.push({ event: t, listeners: u }), t.target = da)));
}
function jt(l, t) {
  var a = {};
  return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
}
var ya = {
  animationend: jt("Animation", "AnimationEnd"),
  animationiteration: jt("Animation", "AnimationIteration"),
  animationstart: jt("Animation", "AnimationStart"),
  transitionrun: jt("Transition", "TransitionRun"),
  transitionstart: jt("Transition", "TransitionStart"),
  transitioncancel: jt("Transition", "TransitionCancel"),
  transitionend: jt("Transition", "TransitionEnd")
}, Tn = {}, js = {};
et && (js = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
function Pt(l) {
  if (Tn[l]) return Tn[l];
  if (!ya[l]) return l;
  var t = ya[l], a;
  for (a in t)
    if (t.hasOwnProperty(a) && a in js)
      return Tn[l] = t[a];
  return l;
}
var Qs = Pt("animationend"), Xs = Pt("animationiteration"), Gs = Pt("animationstart"), kv = Pt("transitionrun"), $v = Pt("transitionstart"), Iv = Pt("transitioncancel"), xs = Pt("transitionend"), ps = /* @__PURE__ */ new Map(), ui = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
  " "
);
function Xl(l, t) {
  ps.set(l, t), $t(t, [l]);
}
var Ml = [], ma = 0, Ff = 0;
function ke() {
  for (var l = ma, t = Ff = ma = 0; t < l; ) {
    var a = Ml[t];
    Ml[t++] = null;
    var u = Ml[t];
    Ml[t++] = null;
    var e = Ml[t];
    Ml[t++] = null;
    var n = Ml[t];
    if (Ml[t++] = null, u !== null && e !== null) {
      var f = u.pending;
      f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
    }
    n !== 0 && Zs(a, e, n);
  }
}
function $e(l, t, a, u) {
  Ml[ma++] = l, Ml[ma++] = t, Ml[ma++] = a, Ml[ma++] = u, Ff |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
}
function kf(l, t, a, u) {
  return $e(l, t, a, u), De(l);
}
function Ht(l, t) {
  return $e(l, null, null, t), De(l);
}
function Zs(l, t, a) {
  l.lanes |= a;
  var u = l.alternate;
  u !== null && (u.lanes |= a);
  for (var e = !1, n = l.return; n !== null; )
    n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
  e && t !== null && l.tag === 3 && (n = l.stateNode, e = 31 - ol(a), n = n.hiddenUpdates, l = n[e], l === null ? n[e] = [t] : l.push(t), t.lane = a | 536870912);
}
function De(l) {
  if (50 < gu)
    throw gu = 0, qf = null, Error(b(185));
  for (var t = l.return; t !== null; )
    l = t, t = l.return;
  return l.tag === 3 ? l.stateNode : null;
}
var Sa = {}, ei = /* @__PURE__ */ new WeakMap();
function Hl(l, t) {
  if (typeof l == "object" && l !== null) {
    var a = ei.get(l);
    return a !== void 0 ? a : (t = {
      value: l,
      source: t,
      stack: Gc(t)
    }, ei.set(l, t), t);
  }
  return {
    value: l,
    source: t,
    stack: Gc(t)
  };
}
var ga = [], ba = 0, Oe = null, Ue = 0, Ol = [], Ul = 0, _t = null, Pl = 1, lt = "";
function Xt(l, t) {
  ga[ba++] = Ue, ga[ba++] = Oe, Oe = l, Ue = t;
}
function _s(l, t, a) {
  Ol[Ul++] = Pl, Ol[Ul++] = lt, Ol[Ul++] = _t, _t = l;
  var u = Pl;
  l = lt;
  var e = 32 - ol(u) - 1;
  u &= ~(1 << e), a += 1;
  var n = 32 - ol(t) + e;
  if (30 < n) {
    var f = e - e % 5;
    n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Pl = 1 << 32 - ol(t) + e | a << e | u, lt = n + l;
  } else
    Pl = 1 << n | a << e | u, lt = l;
}
function $f(l) {
  l.return !== null && (Xt(l, 1), _s(l, 1, 0));
}
function If(l) {
  for (; l === Oe; )
    Oe = ga[--ba], ga[ba] = null, Ue = ga[--ba], ga[ba] = null;
  for (; l === _t; )
    _t = Ol[--Ul], Ol[Ul] = null, lt = Ol[--Ul], Ol[Ul] = null, Pl = Ol[--Ul], Ol[Ul] = null;
}
var sl = null, nl = null, Y = !1, jl = null, Gl = !1, nf = Error(b(519));
function Jt(l) {
  var t = Error(b(418, ""));
  throw Tu(Hl(t, l)), nf;
}
function ni(l) {
  var t = l.stateNode, a = l.type, u = l.memoizedProps;
  switch (t[cl] = l, t[dl] = u, a) {
    case "dialog":
      N("cancel", t), N("close", t);
      break;
    case "iframe":
    case "object":
    case "embed":
      N("load", t);
      break;
    case "video":
    case "audio":
      for (a = 0; a < Ou.length; a++)
        N(Ou[a], t);
      break;
    case "source":
      N("error", t);
      break;
    case "img":
    case "image":
    case "link":
      N("error", t), N("load", t);
      break;
    case "details":
      N("toggle", t);
      break;
    case "input":
      N("invalid", t), zs(
        t,
        u.value,
        u.defaultValue,
        u.checked,
        u.defaultChecked,
        u.type,
        u.name,
        !0
      ), Te(t);
      break;
    case "select":
      N("invalid", t);
      break;
    case "textarea":
      N("invalid", t), Ts(t, u.value, u.defaultValue, u.children), Te(t);
  }
  a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || bh(t.textContent, a) ? (u.popover != null && (N("beforetoggle", t), N("toggle", t)), u.onScroll != null && N("scroll", t), u.onScrollEnd != null && N("scrollend", t), u.onClick != null && (t.onclick = en), t = !0) : t = !1, t || Jt(l);
}
function fi(l) {
  for (sl = l.return; sl; )
    switch (sl.tag) {
      case 3:
      case 27:
        Gl = !0;
        return;
      case 5:
      case 13:
        Gl = !1;
        return;
      default:
        sl = sl.return;
    }
}
function Ja(l) {
  if (l !== sl) return !1;
  if (!Y) return fi(l), Y = !0, !1;
  var t = !1, a;
  if ((a = l.tag !== 3 && l.tag !== 27) && ((a = l.tag === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || jf(l.type, l.memoizedProps)), a = !a), a && (t = !0), t && nl && Jt(l), fi(l), l.tag === 13) {
    if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
    l: {
      for (l = l.nextSibling, t = 0; l; ) {
        if (l.nodeType === 8)
          if (a = l.data, a === "/$") {
            if (t === 0) {
              nl = Ql(l.nextSibling);
              break l;
            }
            t--;
          } else
            a !== "$" && a !== "$!" && a !== "$?" || t++;
        l = l.nextSibling;
      }
      nl = null;
    }
  } else
    nl = sl ? Ql(l.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  nl = sl = null, Y = !1;
}
function Tu(l) {
  jl === null ? jl = [l] : jl.push(l);
}
var nu = Error(b(460)), Vs = Error(b(474)), ff = { then: function() {
} };
function ci(l) {
  return l = l.status, l === "fulfilled" || l === "rejected";
}
function ku() {
}
function Cs(l, t, a) {
  switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(ku, ku), t = a), t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw l = t.reason, l === nu ? Error(b(483)) : l;
    default:
      if (typeof t.status == "string") t.then(ku, ku);
      else {
        if (l = x, l !== null && 100 < l.shellSuspendCounter)
          throw Error(b(482));
        l = t, l.status = "pending", l.then(
          function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = u;
            }
          },
          function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = u;
            }
          }
        );
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, l === nu ? Error(b(483)) : l;
      }
      throw fu = t, nu;
  }
}
var fu = null;
function ii() {
  if (fu === null) throw Error(b(459));
  var l = fu;
  return fu = null, l;
}
var Ta = null, Mu = 0;
function $u(l) {
  var t = Mu;
  return Mu += 1, Ta === null && (Ta = []), Cs(Ta, l, t);
}
function wa(l, t) {
  t = t.props.ref, l.ref = t !== void 0 ? t : null;
}
function Iu(l, t) {
  throw t.$$typeof === ph ? Error(b(525)) : (l = Object.prototype.toString.call(t), Error(
    b(
      31,
      l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
    )
  ));
}
function si(l) {
  var t = l._init;
  return t(l._payload);
}
function Ks(l) {
  function t(v, s) {
    if (l) {
      var d = v.deletions;
      d === null ? (v.deletions = [s], v.flags |= 16) : d.push(s);
    }
  }
  function a(v, s) {
    if (!l) return null;
    for (; s !== null; )
      t(v, s), s = s.sibling;
    return null;
  }
  function u(v) {
    for (var s = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? s.set(v.key, v) : s.set(v.index, v), v = v.sibling;
    return s;
  }
  function e(v, s) {
    return v = Mt(v, s), v.index = 0, v.sibling = null, v;
  }
  function n(v, s, d) {
    return v.index = d, l ? (d = v.alternate, d !== null ? (d = d.index, d < s ? (v.flags |= 33554434, s) : d) : (v.flags |= 33554434, s)) : (v.flags |= 1048576, s);
  }
  function f(v) {
    return l && v.alternate === null && (v.flags |= 33554434), v;
  }
  function c(v, s, d, g) {
    return s === null || s.tag !== 6 ? (s = jn(d, v.mode, g), s.return = v, s) : (s = e(s, d), s.return = v, s);
  }
  function i(v, s, d, g) {
    var E = d.type;
    return E === ia ? S(
      v,
      s,
      d.props.children,
      g,
      d.key
    ) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === dt && si(E) === s.type) ? (s = e(s, d.props), wa(s, d), s.return = v, s) : (s = me(
      d.type,
      d.key,
      d.props,
      null,
      v.mode,
      g
    ), wa(s, d), s.return = v, s);
  }
  function h(v, s, d, g) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Qn(d, v.mode, g), s.return = v, s) : (s = e(s, d.children || []), s.return = v, s);
  }
  function S(v, s, d, g, E) {
    return s === null || s.tag !== 7 ? (s = Ct(
      d,
      v.mode,
      g,
      E
    ), s.return = v, s) : (s = e(s, d), s.return = v, s);
  }
  function o(v, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
      return s = jn(
        "" + s,
        v.mode,
        d
      ), s.return = v, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case Lu:
          return d = me(
            s.type,
            s.key,
            s.props,
            null,
            v.mode,
            d
          ), wa(d, s), d.return = v, d;
        case $a:
          return s = Qn(
            s,
            v.mode,
            d
          ), s.return = v, s;
        case dt:
          var g = s._init;
          return s = g(s._payload), o(v, s, d);
      }
      if (Pa(s) || Ca(s))
        return s = Ct(
          s,
          v.mode,
          d,
          null
        ), s.return = v, s;
      if (typeof s.then == "function")
        return o(v, $u(s), d);
      if (s.$$typeof === Il)
        return o(
          v,
          Pu(v, s),
          d
        );
      Iu(v, s);
    }
    return null;
  }
  function y(v, s, d, g) {
    var E = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
      return E !== null ? null : c(v, s, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Lu:
          return d.key === E ? i(v, s, d, g) : null;
        case $a:
          return d.key === E ? h(v, s, d, g) : null;
        case dt:
          return E = d._init, d = E(d._payload), y(v, s, d, g);
      }
      if (Pa(d) || Ca(d))
        return E !== null ? null : S(v, s, d, g, null);
      if (typeof d.then == "function")
        return y(
          v,
          s,
          $u(d),
          g
        );
      if (d.$$typeof === Il)
        return y(
          v,
          s,
          Pu(v, d),
          g
        );
      Iu(v, d);
    }
    return null;
  }
  function m(v, s, d, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
      return v = v.get(d) || null, c(s, v, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Lu:
          return v = v.get(
            g.key === null ? d : g.key
          ) || null, i(s, v, g, E);
        case $a:
          return v = v.get(
            g.key === null ? d : g.key
          ) || null, h(s, v, g, E);
        case dt:
          var q = g._init;
          return g = q(g._payload), m(
            v,
            s,
            d,
            g,
            E
          );
      }
      if (Pa(g) || Ca(g))
        return v = v.get(d) || null, S(s, v, g, E, null);
      if (typeof g.then == "function")
        return m(
          v,
          s,
          d,
          $u(g),
          E
        );
      if (g.$$typeof === Il)
        return m(
          v,
          s,
          d,
          Pu(s, g),
          E
        );
      Iu(s, g);
    }
    return null;
  }
  function A(v, s, d, g) {
    for (var E = null, q = null, T = s, M = s = 0, P = null; T !== null && M < d.length; M++) {
      T.index > M ? (P = T, T = null) : P = T.sibling;
      var B = y(
        v,
        T,
        d[M],
        g
      );
      if (B === null) {
        T === null && (T = P);
        break;
      }
      l && T && B.alternate === null && t(v, T), s = n(B, s, M), q === null ? E = B : q.sibling = B, q = B, T = P;
    }
    if (M === d.length)
      return a(v, T), Y && Xt(v, M), E;
    if (T === null) {
      for (; M < d.length; M++)
        T = o(v, d[M], g), T !== null && (s = n(
          T,
          s,
          M
        ), q === null ? E = T : q.sibling = T, q = T);
      return Y && Xt(v, M), E;
    }
    for (T = u(T); M < d.length; M++)
      P = m(
        T,
        v,
        M,
        d[M],
        g
      ), P !== null && (l && P.alternate !== null && T.delete(
        P.key === null ? M : P.key
      ), s = n(
        P,
        s,
        M
      ), q === null ? E = P : q.sibling = P, q = P);
    return l && T.forEach(function(st) {
      return t(v, st);
    }), Y && Xt(v, M), E;
  }
  function z(v, s, d, g) {
    if (d == null) throw Error(b(151));
    for (var E = null, q = null, T = s, M = s = 0, P = null, B = d.next(); T !== null && !B.done; M++, B = d.next()) {
      T.index > M ? (P = T, T = null) : P = T.sibling;
      var st = y(v, T, B.value, g);
      if (st === null) {
        T === null && (T = P);
        break;
      }
      l && T && st.alternate === null && t(v, T), s = n(st, s, M), q === null ? E = st : q.sibling = st, q = st, T = P;
    }
    if (B.done)
      return a(v, T), Y && Xt(v, M), E;
    if (T === null) {
      for (; !B.done; M++, B = d.next())
        B = o(v, B.value, g), B !== null && (s = n(B, s, M), q === null ? E = B : q.sibling = B, q = B);
      return Y && Xt(v, M), E;
    }
    for (T = u(T); !B.done; M++, B = d.next())
      B = m(T, v, M, B.value, g), B !== null && (l && B.alternate !== null && T.delete(B.key === null ? M : B.key), s = n(B, s, M), q === null ? E = B : q.sibling = B, q = B);
    return l && T.forEach(function(rh) {
      return t(v, rh);
    }), Y && Xt(v, M), E;
  }
  function D(v, s, d, g) {
    if (typeof d == "object" && d !== null && d.type === ia && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Lu:
          l: {
            for (var E = d.key; s !== null; ) {
              if (s.key === E) {
                if (E = d.type, E === ia) {
                  if (s.tag === 7) {
                    a(
                      v,
                      s.sibling
                    ), g = e(
                      s,
                      d.props.children
                    ), g.return = v, v = g;
                    break l;
                  }
                } else if (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === dt && si(E) === s.type) {
                  a(
                    v,
                    s.sibling
                  ), g = e(s, d.props), wa(g, d), g.return = v, v = g;
                  break l;
                }
                a(v, s);
                break;
              } else t(v, s);
              s = s.sibling;
            }
            d.type === ia ? (g = Ct(
              d.props.children,
              v.mode,
              g,
              d.key
            ), g.return = v, v = g) : (g = me(
              d.type,
              d.key,
              d.props,
              null,
              v.mode,
              g
            ), wa(g, d), g.return = v, v = g);
          }
          return f(v);
        case $a:
          l: {
            for (E = d.key; s !== null; ) {
              if (s.key === E)
                if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                  a(
                    v,
                    s.sibling
                  ), g = e(s, d.children || []), g.return = v, v = g;
                  break l;
                } else {
                  a(v, s);
                  break;
                }
              else t(v, s);
              s = s.sibling;
            }
            g = Qn(d, v.mode, g), g.return = v, v = g;
          }
          return f(v);
        case dt:
          return E = d._init, d = E(d._payload), D(
            v,
            s,
            d,
            g
          );
      }
      if (Pa(d))
        return A(
          v,
          s,
          d,
          g
        );
      if (Ca(d)) {
        if (E = Ca(d), typeof E != "function") throw Error(b(150));
        return d = E.call(d), z(
          v,
          s,
          d,
          g
        );
      }
      if (typeof d.then == "function")
        return D(
          v,
          s,
          $u(d),
          g
        );
      if (d.$$typeof === Il)
        return D(
          v,
          s,
          Pu(v, d),
          g
        );
      Iu(v, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, s !== null && s.tag === 6 ? (a(v, s.sibling), g = e(s, d), g.return = v, v = g) : (a(v, s), g = jn(d, v.mode, g), g.return = v, v = g), f(v)) : a(v, s);
  }
  return function(v, s, d, g) {
    try {
      Mu = 0;
      var E = D(
        v,
        s,
        d,
        g
      );
      return Ta = null, E;
    } catch (T) {
      if (T === nu) throw T;
      var q = Rl(29, T, null, v.mode);
      return q.lanes = g, q.return = v, q;
    } finally {
    }
  };
}
var wt = Ks(!0), Ls = Ks(!1), Na = Cl(null), qe = Cl(0);
function hi(l, t) {
  l = ct, _(qe, l), _(Na, t), ct = l | t.baseLanes;
}
function cf() {
  _(qe, ct), _(Na, Na.current);
}
function Pf() {
  ct = qe.current, ul(Na), ul(qe);
}
var rl = Cl(null), _l = null;
function mt(l) {
  var t = l.alternate;
  _($, $.current & 1), _(rl, l), _l === null && (t === null || Na.current !== null || t.memoizedState !== null) && (_l = l);
}
function Js(l) {
  if (l.tag === 22) {
    if (_($, $.current), _(rl, l), _l === null) {
      var t = l.alternate;
      t !== null && t.memoizedState !== null && (_l = l);
    }
  } else St();
}
function St() {
  _($, $.current), _(rl, rl.current);
}
function tt(l) {
  ul(rl), _l === l && (_l = null), ul($);
}
var $ = Cl(0);
function He(l) {
  for (var t = l; t !== null; ) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === l) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === l) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Pv = typeof AbortController < "u" ? AbortController : function() {
  var l = [], t = this.signal = {
    aborted: !1,
    addEventListener: function(a, u) {
      l.push(u);
    }
  };
  this.abort = function() {
    t.aborted = !0, l.forEach(function(a) {
      return a();
    });
  };
}, ld = I.unstable_scheduleCallback, td = I.unstable_NormalPriority, k = {
  $$typeof: Il,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0
};
function lc() {
  return {
    controller: new Pv(),
    data: /* @__PURE__ */ new Map(),
    refCount: 0
  };
}
function Gu(l) {
  l.refCount--, l.refCount === 0 && ld(td, function() {
    l.controller.abort();
  });
}
var cu = null, sf = 0, ra = 0, Ma = null;
function ad(l, t) {
  if (cu === null) {
    var a = cu = [];
    sf = 0, ra = Mc(), Ma = {
      status: "pending",
      value: void 0,
      then: function(u) {
        a.push(u);
      }
    };
  }
  return sf++, t.then(vi, vi), t;
}
function vi() {
  if (--sf === 0 && cu !== null) {
    Ma !== null && (Ma.status = "fulfilled");
    var l = cu;
    cu = null, ra = 0, Ma = null;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
}
function ud(l, t) {
  var a = [], u = {
    status: "pending",
    value: null,
    reason: null,
    then: function(e) {
      a.push(e);
    }
  };
  return l.then(
    function() {
      u.status = "fulfilled", u.value = t;
      for (var e = 0; e < a.length; e++) (0, a[e])(t);
    },
    function(e) {
      for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
        (0, a[e])(void 0);
    }
  ), u;
}
var di = O.S;
O.S = function(l, t) {
  typeof t == "object" && t !== null && typeof t.then == "function" && ad(l, t), di !== null && di(l, t);
};
var Vt = Cl(null);
function tc() {
  var l = Vt.current;
  return l !== null ? l : x.pooledCache;
}
function he(l, t) {
  t === null ? _(Vt, Vt.current) : _(Vt, t.pool);
}
function ws() {
  var l = tc();
  return l === null ? null : { parent: k._currentValue, pool: l };
}
var Rt = 0, U = null, Q = null, W = null, Re = !1, Da = !1, Wt = !1, Ne = 0, Du = 0, Oa = null, ed = 0;
function J() {
  throw Error(b(321));
}
function ac(l, t) {
  if (t === null) return !1;
  for (var a = 0; a < t.length && a < l.length; a++)
    if (!zl(l[a], t[a])) return !1;
  return !0;
}
function uc(l, t, a, u, e, n) {
  return Rt = n, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = l === null || l.memoizedState === null ? la : Yt, Wt = !1, n = a(u, e), Wt = !1, Da && (n = Fs(
    t,
    a,
    u,
    e
  )), Ws(l), n;
}
function Ws(l) {
  O.H = Vl;
  var t = Q !== null && Q.next !== null;
  if (Rt = 0, W = Q = U = null, Re = !1, Du = 0, Oa = null, t) throw Error(b(300));
  l === null || al || (l = l.dependencies, l !== null && Ye(l) && (al = !0));
}
function Fs(l, t, a, u) {
  U = l;
  var e = 0;
  do {
    if (Da && (Oa = null), Du = 0, Da = !1, 25 <= e) throw Error(b(301));
    if (e += 1, W = Q = null, l.updateQueue != null) {
      var n = l.updateQueue;
      n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
    }
    O.H = ta, n = t(a, u);
  } while (Da);
  return n;
}
function nd() {
  var l = O.H, t = l.useState()[0];
  return t = typeof t.then == "function" ? xu(t) : t, l = l.useState()[0], (Q !== null ? Q.memoizedState : null) !== l && (U.flags |= 1024), t;
}
function ec() {
  var l = Ne !== 0;
  return Ne = 0, l;
}
function nc(l, t, a) {
  t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
}
function fc(l) {
  if (Re) {
    for (l = l.memoizedState; l !== null; ) {
      var t = l.queue;
      t !== null && (t.pending = null), l = l.next;
    }
    Re = !1;
  }
  Rt = 0, W = Q = U = null, Da = !1, Du = Ne = 0, Oa = null;
}
function vl() {
  var l = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return W === null ? U.memoizedState = W = l : W = W.next = l, W;
}
function F() {
  if (Q === null) {
    var l = U.alternate;
    l = l !== null ? l.memoizedState : null;
  } else l = Q.next;
  var t = W === null ? U.memoizedState : W.next;
  if (t !== null)
    W = t, Q = l;
  else {
    if (l === null)
      throw U.alternate === null ? Error(b(467)) : Error(b(310));
    Q = l, l = {
      memoizedState: Q.memoizedState,
      baseState: Q.baseState,
      baseQueue: Q.baseQueue,
      queue: Q.queue,
      next: null
    }, W === null ? U.memoizedState = W = l : W = W.next = l;
  }
  return W;
}
var Ie;
Ie = function() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function xu(l) {
  var t = Du;
  return Du += 1, Oa === null && (Oa = []), l = Cs(Oa, l, t), t = U, (W === null ? t.memoizedState : W.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? la : Yt), l;
}
function Pe(l) {
  if (l !== null && typeof l == "object") {
    if (typeof l.then == "function") return xu(l);
    if (l.$$typeof === Il) return il(l);
  }
  throw Error(b(438, String(l)));
}
function cc(l) {
  var t = null, a = U.updateQueue;
  if (a !== null && (t = a.memoCache), t == null) {
    var u = U.alternate;
    u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
      data: u.data.map(function(e) {
        return e.slice();
      }),
      index: 0
    })));
  }
  if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ie(), U.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
    for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
      a[u] = _h;
  return t.index++, a;
}
function nt(l, t) {
  return typeof t == "function" ? t(l) : t;
}
function ve(l) {
  var t = F();
  return ic(t, Q, l);
}
function ic(l, t, a) {
  var u = l.queue;
  if (u === null) throw Error(b(311));
  u.lastRenderedReducer = a;
  var e = l.baseQueue, n = u.pending;
  if (n !== null) {
    if (e !== null) {
      var f = e.next;
      e.next = n.next, n.next = f;
    }
    t.baseQueue = e = n, u.pending = null;
  }
  if (n = l.baseState, e === null) l.memoizedState = n;
  else {
    t = e.next;
    var c = f = null, i = null, h = t, S = !1;
    do {
      var o = h.lane & -536870913;
      if (o !== h.lane ? (r & o) === o : (Rt & o) === o) {
        var y = h.revertLane;
        if (y === 0)
          i !== null && (i = i.next = {
            lane: 0,
            revertLane: 0,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }), o === ra && (S = !0);
        else if ((Rt & y) === y) {
          h = h.next, y === ra && (S = !0);
          continue;
        } else
          o = {
            lane: 0,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, U.lanes |= y, rt |= y;
        o = h.action, Wt && a(n, o), n = h.hasEagerState ? h.eagerState : a(n, o);
      } else
        y = {
          lane: o,
          revertLane: h.revertLane,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        }, i === null ? (c = i = y, f = n) : i = i.next = y, U.lanes |= o, rt |= o;
      h = h.next;
    } while (h !== null && h !== t);
    if (i === null ? f = n : i.next = c, !zl(n, l.memoizedState) && (al = !0, S && (a = Ma, a !== null)))
      throw a;
    l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
  }
  return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
}
function Mn(l) {
  var t = F(), a = t.queue;
  if (a === null) throw Error(b(311));
  a.lastRenderedReducer = l;
  var u = a.dispatch, e = a.pending, n = t.memoizedState;
  if (e !== null) {
    a.pending = null;
    var f = e = e.next;
    do
      n = l(n, f.action), f = f.next;
    while (f !== e);
    zl(n, t.memoizedState) || (al = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
  }
  return [n, u];
}
function ks(l, t, a) {
  var u = U, e = F(), n = Y;
  if (n) {
    if (a === void 0) throw Error(b(407));
    a = a();
  } else a = t();
  var f = !zl(
    (Q || e).memoizedState,
    a
  );
  if (f && (e.memoizedState = a, al = !0), e = e.queue, sc(Ps.bind(null, u, e, l), [
    l
  ]), e.getSnapshot !== t || f || W !== null && W.memoizedState.tag & 1) {
    if (u.flags |= 2048, Ba(
      9,
      Is.bind(
        null,
        u,
        e,
        a,
        t
      ),
      { destroy: void 0 },
      null
    ), x === null) throw Error(b(349));
    n || Rt & 60 || $s(u, t, a);
  }
  return a;
}
function $s(l, t, a) {
  l.flags |= 16384, l = { getSnapshot: t, value: a }, t = U.updateQueue, t === null ? (t = Ie(), U.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
}
function Is(l, t, a, u) {
  t.value = a, t.getSnapshot = u, l0(t) && t0(l);
}
function Ps(l, t, a) {
  return a(function() {
    l0(t) && t0(l);
  });
}
function l0(l) {
  var t = l.getSnapshot;
  l = l.value;
  try {
    var a = t();
    return !zl(l, a);
  } catch {
    return !0;
  }
}
function t0(l) {
  var t = Ht(l, 2);
  t !== null && hl(t, l, 2);
}
function hf(l) {
  var t = vl();
  if (typeof l == "function") {
    var a = l;
    if (l = a(), Wt) {
      ot(!0);
      try {
        a();
      } finally {
        ot(!1);
      }
    }
  }
  return t.memoizedState = t.baseState = l, t.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: nt,
    lastRenderedState: l
  }, t;
}
function a0(l, t, a, u) {
  return l.baseState = a, ic(
    l,
    Q,
    typeof u == "function" ? u : nt
  );
}
function fd(l, t, a, u, e) {
  if (tn(l)) throw Error(b(485));
  if (l = t.action, l !== null) {
    var n = {
      payload: e,
      action: l,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function(f) {
        n.listeners.push(f);
      }
    };
    O.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, u0(t, n)) : (n.next = a.next, t.pending = a.next = n);
  }
}
function u0(l, t) {
  var a = t.action, u = t.payload, e = l.state;
  if (t.isTransition) {
    var n = O.T, f = {};
    O.T = f;
    try {
      var c = a(e, u), i = O.S;
      i !== null && i(f, c), yi(l, t, c);
    } catch (h) {
      vf(l, t, h);
    } finally {
      O.T = n;
    }
  } else
    try {
      n = a(e, u), yi(l, t, n);
    } catch (h) {
      vf(l, t, h);
    }
}
function yi(l, t, a) {
  a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
    function(u) {
      mi(l, t, u);
    },
    function(u) {
      return vf(l, t, u);
    }
  ) : mi(l, t, a);
}
function mi(l, t, a) {
  t.status = "fulfilled", t.value = a, e0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, u0(l, a)));
}
function vf(l, t, a) {
  var u = l.pending;
  if (l.pending = null, u !== null) {
    u = u.next;
    do
      t.status = "rejected", t.reason = a, e0(t), t = t.next;
    while (t !== u);
  }
  l.action = null;
}
function e0(l) {
  l = l.listeners;
  for (var t = 0; t < l.length; t++) (0, l[t])();
}
function n0(l, t) {
  return t;
}
function f0(l, t) {
  if (Y) {
    var a = x.formState;
    if (a !== null) {
      l: {
        var u = U;
        if (Y) {
          if (nl) {
            t: {
              for (var e = nl, n = Gl; e.nodeType !== 8; ) {
                if (!n) {
                  e = null;
                  break t;
                }
                if (e = Ql(
                  e.nextSibling
                ), e === null) {
                  e = null;
                  break t;
                }
              }
              n = e.data, e = n === "F!" || n === "F" ? e : null;
            }
            if (e) {
              nl = Ql(
                e.nextSibling
              ), u = e.data === "F!";
              break l;
            }
          }
          Jt(u);
        }
        u = !1;
      }
      u && (t = a[0]);
    }
  }
  return a = vl(), a.memoizedState = a.baseState = t, u = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: n0,
    lastRenderedState: t
  }, a.queue = u, a = M0.bind(
    null,
    U,
    u
  ), u.dispatch = a, u = hf(!1), n = yc.bind(
    null,
    U,
    !1,
    u.queue
  ), u = vl(), e = {
    state: t,
    dispatch: null,
    action: l,
    pending: null
  }, u.queue = e, a = fd.bind(
    null,
    U,
    e,
    n,
    a
  ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
}
function c0(l) {
  var t = F();
  return i0(t, Q, l);
}
function i0(l, t, a) {
  t = ic(
    l,
    t,
    n0
  )[0], l = ve(nt)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? xu(t) : t;
  var u = F(), e = u.queue, n = e.dispatch;
  return a !== u.memoizedState && (U.flags |= 2048, Ba(
    9,
    cd.bind(null, e, a),
    { destroy: void 0 },
    null
  )), [t, n, l];
}
function cd(l, t) {
  l.action = t;
}
function s0(l) {
  var t = F(), a = Q;
  if (a !== null)
    return i0(t, a, l);
  F(), t = t.memoizedState, a = F();
  var u = a.queue.dispatch;
  return a.memoizedState = l, [t, u, !1];
}
function Ba(l, t, a, u) {
  return l = { tag: l, create: t, inst: a, deps: u, next: null }, t = U.updateQueue, t === null && (t = Ie(), U.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
}
function h0() {
  return F().memoizedState;
}
function de(l, t, a, u) {
  var e = vl();
  U.flags |= l, e.memoizedState = Ba(
    1 | t,
    a,
    { destroy: void 0 },
    u === void 0 ? null : u
  );
}
function ln(l, t, a, u) {
  var e = F();
  u = u === void 0 ? null : u;
  var n = e.memoizedState.inst;
  Q !== null && u !== null && ac(u, Q.memoizedState.deps) ? e.memoizedState = Ba(t, a, n, u) : (U.flags |= l, e.memoizedState = Ba(1 | t, a, n, u));
}
function Si(l, t) {
  de(8390656, 8, l, t);
}
function sc(l, t) {
  ln(2048, 8, l, t);
}
function v0(l, t) {
  return ln(4, 2, l, t);
}
function d0(l, t) {
  return ln(4, 4, l, t);
}
function y0(l, t) {
  if (typeof t == "function") {
    l = l();
    var a = t(l);
    return function() {
      typeof a == "function" ? a() : t(null);
    };
  }
  if (t != null)
    return l = l(), t.current = l, function() {
      t.current = null;
    };
}
function m0(l, t, a) {
  a = a != null ? a.concat([l]) : null, ln(4, 4, y0.bind(null, t, l), a);
}
function hc() {
}
function S0(l, t) {
  var a = F();
  t = t === void 0 ? null : t;
  var u = a.memoizedState;
  return t !== null && ac(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
}
function g0(l, t) {
  var a = F();
  t = t === void 0 ? null : t;
  var u = a.memoizedState;
  if (t !== null && ac(t, u[1]))
    return u[0];
  if (u = l(), Wt) {
    ot(!0);
    try {
      l();
    } finally {
      ot(!1);
    }
  }
  return a.memoizedState = [u, t], u;
}
function vc(l, t, a) {
  return a === void 0 || Rt & 1073741824 ? l.memoizedState = t : (l.memoizedState = a, l = eh(), U.lanes |= l, rt |= l, a);
}
function b0(l, t, a, u) {
  return zl(a, t) ? a : Na.current !== null ? (l = vc(l, a, u), zl(l, t) || (al = !0), l) : Rt & 42 ? (l = eh(), U.lanes |= l, rt |= l, t) : (al = !0, l.memoizedState = a);
}
function o0(l, t, a, u, e) {
  var n = p.p;
  p.p = n !== 0 && 8 > n ? n : 8;
  var f = O.T, c = {};
  O.T = c, yc(l, !1, t, a);
  try {
    var i = e(), h = O.S;
    if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
      var S = ud(
        i,
        u
      );
      iu(
        l,
        t,
        S,
        Al(l)
      );
    } else
      iu(
        l,
        t,
        u,
        Al(l)
      );
  } catch (o) {
    iu(
      l,
      t,
      { then: function() {
      }, status: "rejected", reason: o },
      Al()
    );
  } finally {
    p.p = n, O.T = f;
  }
}
function id() {
}
function df(l, t, a, u) {
  if (l.tag !== 5) throw Error(b(476));
  var e = A0(l).queue;
  o0(
    l,
    e,
    t,
    Zt,
    a === null ? id : function() {
      return z0(l), a(u);
    }
  );
}
function A0(l) {
  var t = l.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: Zt,
    baseState: Zt,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nt,
      lastRenderedState: Zt
    },
    next: null
  };
  var a = {};
  return t.next = {
    memoizedState: a,
    baseState: a,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nt,
      lastRenderedState: a
    },
    next: null
  }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
}
function z0(l) {
  var t = A0(l).next.queue;
  iu(l, t, {}, Al());
}
function dc() {
  return il(Hu);
}
function E0() {
  return F().memoizedState;
}
function T0() {
  return F().memoizedState;
}
function sd(l) {
  for (var t = l.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var a = Al();
        l = Et(a);
        var u = Tt(t, l, a);
        u !== null && (hl(u, t, a), hu(u, t, a)), t = { cache: lc() }, l.payload = t;
        return;
    }
    t = t.return;
  }
}
function hd(l, t, a) {
  var u = Al();
  a = {
    lane: u,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, tn(l) ? D0(t, a) : (a = kf(l, t, a, u), a !== null && (hl(a, l, u), O0(a, t, u)));
}
function M0(l, t, a) {
  var u = Al();
  iu(l, t, a, u);
}
function iu(l, t, a, u) {
  var e = {
    lane: u,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (tn(l)) D0(t, e);
  else {
    var n = l.alternate;
    if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
      try {
        var f = t.lastRenderedState, c = n(f, a);
        if (e.hasEagerState = !0, e.eagerState = c, zl(c, f))
          return $e(l, t, e, 0), x === null && ke(), !1;
      } catch {
      } finally {
      }
    if (a = kf(l, t, e, u), a !== null)
      return hl(a, l, u), O0(a, t, u), !0;
  }
  return !1;
}
function yc(l, t, a, u) {
  if (u = {
    lane: 2,
    revertLane: Mc(),
    action: u,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, tn(l)) {
    if (t) throw Error(b(479));
  } else
    t = kf(
      l,
      a,
      u,
      2
    ), t !== null && hl(t, l, 2);
}
function tn(l) {
  var t = l.alternate;
  return l === U || t !== null && t === U;
}
function D0(l, t) {
  Da = Re = !0;
  var a = l.pending;
  a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
}
function O0(l, t, a) {
  if (a & 4194176) {
    var u = t.lanes;
    u &= l.pendingLanes, a |= u, t.lanes = a, ys(l, a);
  }
}
var Vl = {
  readContext: il,
  use: Pe,
  useCallback: J,
  useContext: J,
  useEffect: J,
  useImperativeHandle: J,
  useLayoutEffect: J,
  useInsertionEffect: J,
  useMemo: J,
  useReducer: J,
  useRef: J,
  useState: J,
  useDebugValue: J,
  useDeferredValue: J,
  useTransition: J,
  useSyncExternalStore: J,
  useId: J
};
Vl.useCacheRefresh = J;
Vl.useMemoCache = J;
Vl.useHostTransitionStatus = J;
Vl.useFormState = J;
Vl.useActionState = J;
Vl.useOptimistic = J;
var la = {
  readContext: il,
  use: Pe,
  useCallback: function(l, t) {
    return vl().memoizedState = [
      l,
      t === void 0 ? null : t
    ], l;
  },
  useContext: il,
  useEffect: Si,
  useImperativeHandle: function(l, t, a) {
    a = a != null ? a.concat([l]) : null, de(
      4194308,
      4,
      y0.bind(null, t, l),
      a
    );
  },
  useLayoutEffect: function(l, t) {
    return de(4194308, 4, l, t);
  },
  useInsertionEffect: function(l, t) {
    de(4, 2, l, t);
  },
  useMemo: function(l, t) {
    var a = vl();
    t = t === void 0 ? null : t;
    var u = l();
    if (Wt) {
      ot(!0);
      try {
        l();
      } finally {
        ot(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  },
  useReducer: function(l, t, a) {
    var u = vl();
    if (a !== void 0) {
      var e = a(t);
      if (Wt) {
        ot(!0);
        try {
          a(t);
        } finally {
          ot(!1);
        }
      }
    } else e = t;
    return u.memoizedState = u.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: l,
      lastRenderedState: e
    }, u.queue = l, l = l.dispatch = hd.bind(
      null,
      U,
      l
    ), [u.memoizedState, l];
  },
  useRef: function(l) {
    var t = vl();
    return l = { current: l }, t.memoizedState = l;
  },
  useState: function(l) {
    l = hf(l);
    var t = l.queue, a = M0.bind(null, U, t);
    return t.dispatch = a, [l.memoizedState, a];
  },
  useDebugValue: hc,
  useDeferredValue: function(l, t) {
    var a = vl();
    return vc(a, l, t);
  },
  useTransition: function() {
    var l = hf(!1);
    return l = o0.bind(
      null,
      U,
      l.queue,
      !0,
      !1
    ), vl().memoizedState = l, [!1, l];
  },
  useSyncExternalStore: function(l, t, a) {
    var u = U, e = vl();
    if (Y) {
      if (a === void 0)
        throw Error(b(407));
      a = a();
    } else {
      if (a = t(), x === null) throw Error(b(349));
      r & 60 || $s(u, t, a);
    }
    e.memoizedState = a;
    var n = { value: a, getSnapshot: t };
    return e.queue = n, Si(Ps.bind(null, u, n, l), [
      l
    ]), u.flags |= 2048, Ba(
      9,
      Is.bind(
        null,
        u,
        n,
        a,
        t
      ),
      { destroy: void 0 },
      null
    ), a;
  },
  useId: function() {
    var l = vl(), t = x.identifierPrefix;
    if (Y) {
      var a = lt, u = Pl;
      a = (u & ~(1 << 32 - ol(u) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = Ne++, 0 < a && (t += "H" + a.toString(32)), t += ":";
    } else
      a = ed++, t = ":" + t + "r" + a.toString(32) + ":";
    return l.memoizedState = t;
  },
  useCacheRefresh: function() {
    return vl().memoizedState = sd.bind(
      null,
      U
    );
  }
};
la.useMemoCache = cc;
la.useHostTransitionStatus = dc;
la.useFormState = f0;
la.useActionState = f0;
la.useOptimistic = function(l) {
  var t = vl();
  t.memoizedState = t.baseState = l;
  var a = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null
  };
  return t.queue = a, t = yc.bind(
    null,
    U,
    !0,
    a
  ), a.dispatch = t, [l, t];
};
var Yt = {
  readContext: il,
  use: Pe,
  useCallback: S0,
  useContext: il,
  useEffect: sc,
  useImperativeHandle: m0,
  useInsertionEffect: v0,
  useLayoutEffect: d0,
  useMemo: g0,
  useReducer: ve,
  useRef: h0,
  useState: function() {
    return ve(nt);
  },
  useDebugValue: hc,
  useDeferredValue: function(l, t) {
    var a = F();
    return b0(
      a,
      Q.memoizedState,
      l,
      t
    );
  },
  useTransition: function() {
    var l = ve(nt)[0], t = F().memoizedState;
    return [
      typeof l == "boolean" ? l : xu(l),
      t
    ];
  },
  useSyncExternalStore: ks,
  useId: E0
};
Yt.useCacheRefresh = T0;
Yt.useMemoCache = cc;
Yt.useHostTransitionStatus = dc;
Yt.useFormState = c0;
Yt.useActionState = c0;
Yt.useOptimistic = function(l, t) {
  var a = F();
  return a0(a, Q, l, t);
};
var ta = {
  readContext: il,
  use: Pe,
  useCallback: S0,
  useContext: il,
  useEffect: sc,
  useImperativeHandle: m0,
  useInsertionEffect: v0,
  useLayoutEffect: d0,
  useMemo: g0,
  useReducer: Mn,
  useRef: h0,
  useState: function() {
    return Mn(nt);
  },
  useDebugValue: hc,
  useDeferredValue: function(l, t) {
    var a = F();
    return Q === null ? vc(a, l, t) : b0(
      a,
      Q.memoizedState,
      l,
      t
    );
  },
  useTransition: function() {
    var l = Mn(nt)[0], t = F().memoizedState;
    return [
      typeof l == "boolean" ? l : xu(l),
      t
    ];
  },
  useSyncExternalStore: ks,
  useId: E0
};
ta.useCacheRefresh = T0;
ta.useMemoCache = cc;
ta.useHostTransitionStatus = dc;
ta.useFormState = s0;
ta.useActionState = s0;
ta.useOptimistic = function(l, t) {
  var a = F();
  return Q !== null ? a0(a, Q, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
};
function Dn(l, t, a, u) {
  t = l.memoizedState, a = a(u, t), a = a == null ? t : Z({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
}
var yf = {
  isMounted: function(l) {
    return (l = l._reactInternals) ? Xa(l) === l : !1;
  },
  enqueueSetState: function(l, t, a) {
    l = l._reactInternals;
    var u = Al(), e = Et(u);
    e.payload = t, a != null && (e.callback = a), t = Tt(l, e, u), t !== null && (hl(t, l, u), hu(t, l, u));
  },
  enqueueReplaceState: function(l, t, a) {
    l = l._reactInternals;
    var u = Al(), e = Et(u);
    e.tag = 1, e.payload = t, a != null && (e.callback = a), t = Tt(l, e, u), t !== null && (hl(t, l, u), hu(t, l, u));
  },
  enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var a = Al(), u = Et(a);
    u.tag = 2, t != null && (u.callback = t), t = Tt(l, u, a), t !== null && (hl(t, l, a), hu(t, l, a));
  }
};
function gi(l, t, a, u, e, n, f) {
  return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Eu(a, u) || !Eu(e, n) : !0;
}
function bi(l, t, a, u) {
  l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && yf.enqueueReplaceState(t, t.state, null);
}
function Ft(l, t) {
  var a = t;
  if ("ref" in t) {
    a = {};
    for (var u in t)
      u !== "ref" && (a[u] = t[u]);
  }
  if (l = l.defaultProps) {
    a === t && (a = Z({}, a));
    for (var e in l)
      a[e] === void 0 && (a[e] = l[e]);
  }
  return a;
}
var re = typeof reportError == "function" ? reportError : function(l) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var t = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
      error: l
    });
    if (!window.dispatchEvent(t)) return;
  } else if (typeof hn == "object" && typeof hn.emit == "function") {
    hn.emit("uncaughtException", l);
    return;
  }
  console.error(l);
};
function U0(l) {
  re(l);
}
function q0(l) {
  console.error(l);
}
function H0(l) {
  re(l);
}
function Be(l, t) {
  try {
    var a = l.onUncaughtError;
    a(t.value, { componentStack: t.stack });
  } catch (u) {
    setTimeout(function() {
      throw u;
    });
  }
}
function oi(l, t, a) {
  try {
    var u = l.onCaughtError;
    u(a.value, {
      componentStack: a.stack,
      errorBoundary: t.tag === 1 ? t.stateNode : null
    });
  } catch (e) {
    setTimeout(function() {
      throw e;
    });
  }
}
function mf(l, t, a) {
  return a = Et(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
    Be(l, t);
  }, a;
}
function R0(l) {
  return l = Et(l), l.tag = 3, l;
}
function N0(l, t, a, u) {
  var e = a.type.getDerivedStateFromError;
  if (typeof e == "function") {
    var n = u.value;
    l.payload = function() {
      return e(n);
    }, l.callback = function() {
      oi(t, a, u);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
    oi(t, a, u), typeof e != "function" && (Dt === null ? Dt = /* @__PURE__ */ new Set([this]) : Dt.add(this));
    var c = u.stack;
    this.componentDidCatch(u.value, {
      componentStack: c !== null ? c : ""
    });
  });
}
function vd(l, t, a, u, e) {
  if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
    if (t = a.alternate, t !== null && pu(
      t,
      a,
      e,
      !0
    ), a = rl.current, a !== null) {
      switch (a.tag) {
        case 13:
          return _l === null ? Rf() : a.alternate === null && L === 0 && (L = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === ff ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Gn(l, u, e)), !1;
        case 22:
          return a.flags |= 65536, u === ff ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
            transitions: null,
            markerInstances: null,
            retryQueue: /* @__PURE__ */ new Set([u])
          }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Gn(l, u, e)), !1;
      }
      throw Error(b(435, a.tag));
    }
    return Gn(l, u, e), Rf(), !1;
  }
  if (Y)
    return t = rl.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== nf && (l = Error(b(422), { cause: u }), Tu(Hl(l, a)))) : (u !== nf && (t = Error(b(423), {
      cause: u
    }), Tu(
      Hl(t, a)
    )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = Hl(u, a), e = mf(
      l.stateNode,
      u,
      e
    ), Nn(l, e), L !== 4 && (L = 2)), !1;
  var n = Error(b(520), { cause: u });
  if (n = Hl(n, a), mu === null ? mu = [n] : mu.push(n), L !== 4 && (L = 2), t === null) return !0;
  u = Hl(u, a), a = t;
  do {
    switch (a.tag) {
      case 3:
        return a.flags |= 65536, l = e & -e, a.lanes |= l, l = mf(a.stateNode, u, l), Nn(a, l), !1;
      case 1:
        if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Dt === null || !Dt.has(n))))
          return a.flags |= 65536, e &= -e, a.lanes |= e, e = R0(e), N0(
            e,
            l,
            a,
            u
          ), Nn(a, e), !1;
    }
    a = a.return;
  } while (a !== null);
  return !1;
}
var r0 = Error(b(461)), al = !1;
function el(l, t, a, u) {
  t.child = l === null ? Ls(t, null, a, u) : wt(
    t,
    l.child,
    a,
    u
  );
}
function Ai(l, t, a, u, e) {
  a = a.render;
  var n = t.ref;
  if ("ref" in u) {
    var f = {};
    for (var c in u)
      c !== "ref" && (f[c] = u[c]);
  } else f = u;
  return kt(t), u = uc(
    l,
    t,
    a,
    f,
    n,
    e
  ), c = ec(), l !== null && !al ? (nc(l, t, e), ft(l, t, e)) : (Y && c && $f(t), t.flags |= 1, el(l, t, u, e), t.child);
}
function zi(l, t, a, u, e) {
  if (l === null) {
    var n = a.type;
    return typeof n == "function" && !oc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, B0(
      l,
      t,
      n,
      u,
      e
    )) : (l = me(
      a.type,
      null,
      u,
      t,
      t.mode,
      e
    ), l.ref = t.ref, l.return = t, t.child = l);
  }
  if (n = l.child, !mc(l, e)) {
    var f = n.memoizedProps;
    if (a = a.compare, a = a !== null ? a : Eu, a(f, u) && l.ref === t.ref)
      return ft(l, t, e);
  }
  return t.flags |= 1, l = Mt(n, u), l.ref = t.ref, l.return = t, t.child = l;
}
function B0(l, t, a, u, e) {
  if (l !== null) {
    var n = l.memoizedProps;
    if (Eu(n, u) && l.ref === t.ref)
      if (al = !1, t.pendingProps = u = n, mc(l, e))
        l.flags & 131072 && (al = !0);
      else
        return t.lanes = l.lanes, ft(l, t, e);
  }
  return Sf(
    l,
    t,
    a,
    u,
    e
  );
}
function Y0(l, t, a) {
  var u = t.pendingProps, e = u.children, n = (t.stateNode._pendingVisibility & 2) !== 0, f = l !== null ? l.memoizedState : null;
  if (su(l, t), u.mode === "hidden" || n) {
    if (t.flags & 128) {
      if (u = f !== null ? f.baseLanes | a : a, l !== null) {
        for (e = t.child = l.child, n = 0; e !== null; )
          n = n | e.lanes | e.childLanes, e = e.sibling;
        t.childLanes = n & ~u;
      } else t.childLanes = 0, t.child = null;
      return Ei(
        l,
        t,
        u,
        a
      );
    }
    if (a & 536870912)
      t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && he(
        t,
        f !== null ? f.cachePool : null
      ), f !== null ? hi(t, f) : cf(), Js(t);
    else
      return t.lanes = t.childLanes = 536870912, Ei(
        l,
        t,
        f !== null ? f.baseLanes | a : a,
        a
      );
  } else
    f !== null ? (he(t, f.cachePool), hi(t, f), St(), t.memoizedState = null) : (l !== null && he(t, null), cf(), St());
  return el(l, t, e, a), t.child;
}
function Ei(l, t, a, u) {
  var e = tc();
  return e = e === null ? null : { parent: k._currentValue, pool: e }, t.memoizedState = {
    baseLanes: a,
    cachePool: e
  }, l !== null && he(t, null), cf(), Js(t), l !== null && pu(l, t, u, !0), null;
}
function su(l, t) {
  var a = t.ref;
  if (a === null)
    l !== null && l.ref !== null && (t.flags |= 2097664);
  else {
    if (typeof a != "function" && typeof a != "object")
      throw Error(b(284));
    (l === null || l.ref !== a) && (t.flags |= 2097664);
  }
}
function Sf(l, t, a, u, e) {
  return kt(t), a = uc(
    l,
    t,
    a,
    u,
    void 0,
    e
  ), u = ec(), l !== null && !al ? (nc(l, t, e), ft(l, t, e)) : (Y && u && $f(t), t.flags |= 1, el(l, t, a, e), t.child);
}
function Ti(l, t, a, u, e, n) {
  return kt(t), t.updateQueue = null, a = Fs(
    t,
    u,
    a,
    e
  ), Ws(l), u = ec(), l !== null && !al ? (nc(l, t, n), ft(l, t, n)) : (Y && u && $f(t), t.flags |= 1, el(l, t, a, n), t.child);
}
function Mi(l, t, a, u, e) {
  if (kt(t), t.stateNode === null) {
    var n = Sa, f = a.contextType;
    typeof f == "object" && f !== null && (n = il(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = yf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Sc(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? il(f) : Sa, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (Dn(
      t,
      a,
      f,
      u
    ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && yf.enqueueReplaceState(n, n.state, null), du(t, u, n, e), vu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
  } else if (l === null) {
    n = t.stateNode;
    var c = t.memoizedProps, i = Ft(a, c);
    n.props = i;
    var h = n.context, S = a.contextType;
    f = Sa, typeof S == "object" && S !== null && (f = il(S));
    var o = a.getDerivedStateFromProps;
    S = typeof o == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && bi(
      t,
      n,
      u,
      f
    ), yt = !1;
    var y = t.memoizedState;
    n.state = y, du(t, u, n, e), vu(), h = t.memoizedState, c || y !== h || yt ? (typeof o == "function" && (Dn(
      t,
      a,
      o,
      u
    ), h = t.memoizedState), (i = yt || gi(
      t,
      a,
      i,
      u,
      y,
      h,
      f
    )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
  } else {
    n = t.stateNode, Ef(l, t), f = t.memoizedProps, S = Ft(a, f), n.props = S, o = t.pendingProps, y = n.context, h = a.contextType, i = Sa, typeof h == "object" && h !== null && (i = il(h)), c = a.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== o || y !== i) && bi(
      t,
      n,
      u,
      i
    ), yt = !1, y = t.memoizedState, n.state = y, du(t, u, n, e), vu();
    var m = t.memoizedState;
    f !== o || y !== m || yt || l !== null && l.dependencies !== null && Ye(l.dependencies) ? (typeof c == "function" && (Dn(
      t,
      a,
      c,
      u
    ), m = t.memoizedState), (S = yt || gi(
      t,
      a,
      S,
      u,
      y,
      m,
      i
    ) || l !== null && l.dependencies !== null && Ye(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
      u,
      m,
      i
    )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = i, u = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), u = !1);
  }
  return n = u, su(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = wt(
    t,
    l.child,
    null,
    e
  ), t.child = wt(
    t,
    null,
    a,
    e
  )) : el(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = ft(
    l,
    t,
    e
  ), l;
}
function Di(l, t, a, u) {
  return Xu(), t.flags |= 256, el(l, t, a, u), t.child;
}
var On = { dehydrated: null, treeContext: null, retryLane: 0 };
function Un(l) {
  return { baseLanes: l, cachePool: ws() };
}
function qn(l, t, a) {
  return l = l !== null ? l.childLanes & ~a : 0, t && (l |= Nl), l;
}
function j0(l, t, a) {
  var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
  if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : ($.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
    if (Y) {
      if (e ? mt(t) : St(), Y) {
        var c = nl, i;
        if (i = c) {
          l: {
            for (i = c, c = Gl; i.nodeType !== 8; ) {
              if (!c) {
                c = null;
                break l;
              }
              if (i = Ql(
                i.nextSibling
              ), i === null) {
                c = null;
                break l;
              }
            }
            c = i;
          }
          c !== null ? (t.memoizedState = {
            dehydrated: c,
            treeContext: _t !== null ? { id: Pl, overflow: lt } : null,
            retryLane: 536870912
          }, i = Rl(
            18,
            null,
            null,
            0
          ), i.stateNode = c, i.return = t, t.child = i, sl = t, nl = null, i = !0) : i = !1;
        }
        i || Jt(t);
      }
      if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
        return c.data === "$!" ? t.lanes = 16 : t.lanes = 536870912, null;
      tt(t);
    }
    return c = u.children, u = u.fallback, e ? (St(), e = t.mode, c = bf(
      { mode: "hidden", children: c },
      e
    ), u = Ct(
      u,
      e,
      a,
      null
    ), c.return = t, u.return = t, c.sibling = u, t.child = c, e = t.child, e.memoizedState = Un(a), e.childLanes = qn(
      l,
      f,
      a
    ), t.memoizedState = On, u) : (mt(t), gf(t, c));
  }
  if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
    if (n)
      t.flags & 256 ? (mt(t), t.flags &= -257, t = Hn(
        l,
        t,
        a
      )) : t.memoizedState !== null ? (St(), t.child = l.child, t.flags |= 128, t = null) : (St(), e = u.fallback, c = t.mode, u = bf(
        { mode: "visible", children: u.children },
        c
      ), e = Ct(
        e,
        c,
        a,
        null
      ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, wt(
        t,
        l.child,
        null,
        a
      ), u = t.child, u.memoizedState = Un(a), u.childLanes = qn(
        l,
        f,
        a
      ), t.memoizedState = On, t = e);
    else if (mt(t), c.data === "$!") {
      if (f = c.nextSibling && c.nextSibling.dataset, f) var h = f.dgst;
      f = h, u = Error(b(419)), u.stack = "", u.digest = f, Tu({ value: u, source: null, stack: null }), t = Hn(
        l,
        t,
        a
      );
    } else if (al || pu(l, t, a, !1), f = (a & l.childLanes) !== 0, al || f) {
      if (f = x, f !== null) {
        if (u = a & -a, u & 42) u = 1;
        else
          switch (u) {
            case 2:
              u = 1;
              break;
            case 8:
              u = 4;
              break;
            case 32:
              u = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              u = 64;
              break;
            case 268435456:
              u = 134217728;
              break;
            default:
              u = 0;
          }
        if (u = u & (f.suspendedLanes | a) ? 0 : u, u !== 0 && u !== i.retryLane)
          throw i.retryLane = u, Ht(l, u), hl(f, l, u), r0;
      }
      c.data === "$?" || Rf(), t = Hn(
        l,
        t,
        a
      );
    } else
      c.data === "$?" ? (t.flags |= 128, t.child = l.child, t = Ud.bind(
        null,
        l
      ), c._reactRetry = t, t = null) : (l = i.treeContext, nl = Ql(
        c.nextSibling
      ), sl = t, Y = !0, jl = null, Gl = !1, l !== null && (Ol[Ul++] = Pl, Ol[Ul++] = lt, Ol[Ul++] = _t, Pl = l.id, lt = l.overflow, _t = t), t = gf(
        t,
        u.children
      ), t.flags |= 4096);
    return t;
  }
  return e ? (St(), e = u.fallback, c = t.mode, i = l.child, h = i.sibling, u = Mt(i, {
    mode: "hidden",
    children: u.children
  }), u.subtreeFlags = i.subtreeFlags & 31457280, h !== null ? e = Mt(h, e) : (e = Ct(
    e,
    c,
    a,
    null
  ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, c = l.child.memoizedState, c === null ? c = Un(a) : (i = c.cachePool, i !== null ? (h = k._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = ws(), c = {
    baseLanes: c.baseLanes | a,
    cachePool: i
  }), e.memoizedState = c, e.childLanes = qn(
    l,
    f,
    a
  ), t.memoizedState = On, u) : (mt(t), a = l.child, l = a.sibling, a = Mt(a, {
    mode: "visible",
    children: u.children
  }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
}
function gf(l, t) {
  return t = bf(
    { mode: "visible", children: t },
    l.mode
  ), t.return = l, l.child = t;
}
function bf(l, t) {
  return ah(l, t, 0, null);
}
function Hn(l, t, a) {
  return wt(t, l.child, null, a), l = gf(
    t,
    t.pendingProps.children
  ), l.flags |= 2, t.memoizedState = null, l;
}
function Oi(l, t, a) {
  l.lanes |= t;
  var u = l.alternate;
  u !== null && (u.lanes |= t), Af(l.return, t, a);
}
function Rn(l, t, a, u, e) {
  var n = l.memoizedState;
  n === null ? l.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: u,
    tail: a,
    tailMode: e
  } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
}
function Q0(l, t, a) {
  var u = t.pendingProps, e = u.revealOrder, n = u.tail;
  if (el(l, t, u.children, a), u = $.current, u & 2)
    u = u & 1 | 2, t.flags |= 128;
  else {
    if (l !== null && l.flags & 128)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Oi(l, a, t);
        else if (l.tag === 19)
          Oi(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    u &= 1;
  }
  switch (_($, u), e) {
    case "forwards":
      for (a = t.child, e = null; a !== null; )
        l = a.alternate, l !== null && He(l) === null && (e = a), a = a.sibling;
      a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), Rn(
        t,
        !1,
        e,
        a,
        n
      );
      break;
    case "backwards":
      for (a = null, e = t.child, t.child = null; e !== null; ) {
        if (l = e.alternate, l !== null && He(l) === null) {
          t.child = e;
          break;
        }
        l = e.sibling, e.sibling = a, a = e, e = l;
      }
      Rn(
        t,
        !0,
        a,
        null,
        n
      );
      break;
    case "together":
      Rn(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ft(l, t, a) {
  if (l !== null && (t.dependencies = l.dependencies), rt |= t.lanes, !(a & t.childLanes))
    if (l !== null) {
      if (pu(
        l,
        t,
        a,
        !1
      ), (a & t.childLanes) === 0)
        return null;
    } else return null;
  if (l !== null && t.child !== l.child)
    throw Error(b(153));
  if (t.child !== null) {
    for (l = t.child, a = Mt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
      l = l.sibling, a = a.sibling = Mt(l, l.pendingProps), a.return = t;
    a.sibling = null;
  }
  return t.child;
}
function mc(l, t) {
  return l.lanes & t ? !0 : (l = l.dependencies, !!(l !== null && Ye(l)));
}
function dd(l, t, a) {
  switch (t.tag) {
    case 3:
      Ae(t, t.stateNode.containerInfo), gt(t, k, l.memoizedState.cache), Xu();
      break;
    case 27:
    case 5:
      kn(t);
      break;
    case 4:
      Ae(t, t.stateNode.containerInfo);
      break;
    case 10:
      gt(
        t,
        t.type,
        t.memoizedProps.value
      );
      break;
    case 13:
      var u = t.memoizedState;
      if (u !== null)
        return u.dehydrated !== null ? (mt(t), t.flags |= 128, null) : a & t.child.childLanes ? j0(l, t, a) : (mt(t), l = ft(
          l,
          t,
          a
        ), l !== null ? l.sibling : null);
      mt(t);
      break;
    case 19:
      var e = (l.flags & 128) !== 0;
      if (u = (a & t.childLanes) !== 0, u || (pu(
        l,
        t,
        a,
        !1
      ), u = (a & t.childLanes) !== 0), e) {
        if (u)
          return Q0(
            l,
            t,
            a
          );
        t.flags |= 128;
      }
      if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _($, $.current), u) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Y0(l, t, a);
    case 24:
      gt(t, k, l.memoizedState.cache);
  }
  return ft(l, t, a);
}
function X0(l, t, a) {
  if (l !== null)
    if (l.memoizedProps !== t.pendingProps)
      al = !0;
    else {
      if (!mc(l, a) && !(t.flags & 128))
        return al = !1, dd(
          l,
          t,
          a
        );
      al = !!(l.flags & 131072);
    }
  else
    al = !1, Y && t.flags & 1048576 && _s(t, Ue, t.index);
  switch (t.lanes = 0, t.tag) {
    case 16:
      l: {
        l = t.pendingProps;
        var u = t.elementType, e = u._init;
        if (u = e(u._payload), t.type = u, typeof u == "function")
          oc(u) ? (l = Ft(u, l), t.tag = 1, t = Mi(
            null,
            t,
            u,
            l,
            a
          )) : (t.tag = 0, t = Sf(
            null,
            t,
            u,
            l,
            a
          ));
        else {
          if (u != null) {
            if (e = u.$$typeof, e === pf) {
              t.tag = 11, t = Ai(
                null,
                t,
                u,
                l,
                a
              );
              break l;
            } else if (e === Zf) {
              t.tag = 14, t = zi(
                null,
                t,
                u,
                l,
                a
              );
              break l;
            }
          }
          throw t = Wn(u) || u, Error(b(306, t, ""));
        }
      }
      return t;
    case 0:
      return Sf(
        l,
        t,
        t.type,
        t.pendingProps,
        a
      );
    case 1:
      return u = t.type, e = Ft(
        u,
        t.pendingProps
      ), Mi(
        l,
        t,
        u,
        e,
        a
      );
    case 3:
      l: {
        if (Ae(
          t,
          t.stateNode.containerInfo
        ), l === null) throw Error(b(387));
        var n = t.pendingProps;
        e = t.memoizedState, u = e.element, Ef(l, t), du(t, n, null, a);
        var f = t.memoizedState;
        if (n = f.cache, gt(t, k, n), n !== e.cache && zf(
          t,
          [k],
          a,
          !0
        ), vu(), n = f.element, e.isDehydrated)
          if (e = {
            element: n,
            isDehydrated: !1,
            cache: f.cache
          }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
            t = Di(
              l,
              t,
              n,
              a
            );
            break l;
          } else if (n !== u) {
            u = Hl(
              Error(b(424)),
              t
            ), Tu(u), t = Di(
              l,
              t,
              n,
              a
            );
            break l;
          } else
            for (nl = Ql(
              t.stateNode.containerInfo.firstChild
            ), sl = t, Y = !0, jl = null, Gl = !0, a = Ls(
              t,
              null,
              n,
              a
            ), t.child = a; a; )
              a.flags = a.flags & -3 | 4096, a = a.sibling;
        else {
          if (Xu(), n === u) {
            t = ft(
              l,
              t,
              a
            );
            break l;
          }
          el(l, t, n, a);
        }
        t = t.child;
      }
      return t;
    case 26:
      return su(l, t), l === null ? (a = Ci(
        t.type,
        null,
        t.pendingProps,
        null
      )) ? t.memoizedState = a : Y || (a = t.type, l = t.pendingProps, u = Ze(
        zt.current
      ).createElement(a), u[cl] = t, u[dl] = l, fl(u, a, l), tl(u), t.stateNode = u) : t.memoizedState = Ci(
        t.type,
        l.memoizedProps,
        t.pendingProps,
        l.memoizedState
      ), null;
    case 27:
      return kn(t), l === null && Y && (u = t.stateNode = zh(
        t.type,
        t.pendingProps,
        zt.current
      ), sl = t, Gl = !0, nl = Ql(
        u.firstChild
      )), u = t.pendingProps.children, l !== null || Y ? el(
        l,
        t,
        u,
        a
      ) : t.child = wt(
        t,
        null,
        u,
        a
      ), su(l, t), t.child;
    case 5:
      return l === null && Y && ((e = u = nl) && (u = Vd(
        u,
        t.type,
        t.pendingProps,
        Gl
      ), u !== null ? (t.stateNode = u, sl = t, nl = Ql(
        u.firstChild
      ), Gl = !1, e = !0) : e = !1), e || Jt(t)), kn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, jf(e, n) ? u = null : f !== null && jf(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = uc(
        l,
        t,
        nd,
        null,
        null,
        a
      ), Hu._currentValue = e), su(l, t), el(l, t, u, a), t.child;
    case 6:
      return l === null && Y && ((l = a = nl) && (a = Cd(
        a,
        t.pendingProps,
        Gl
      ), a !== null ? (t.stateNode = a, sl = t, nl = null, l = !0) : l = !1), l || Jt(t)), null;
    case 13:
      return j0(l, t, a);
    case 4:
      return Ae(
        t,
        t.stateNode.containerInfo
      ), u = t.pendingProps, l === null ? t.child = wt(
        t,
        null,
        u,
        a
      ) : el(
        l,
        t,
        u,
        a
      ), t.child;
    case 11:
      return Ai(
        l,
        t,
        t.type,
        t.pendingProps,
        a
      );
    case 7:
      return el(
        l,
        t,
        t.pendingProps,
        a
      ), t.child;
    case 8:
      return el(
        l,
        t,
        t.pendingProps.children,
        a
      ), t.child;
    case 12:
      return el(
        l,
        t,
        t.pendingProps.children,
        a
      ), t.child;
    case 10:
      return u = t.pendingProps, gt(t, t.type, u.value), el(
        l,
        t,
        u.children,
        a
      ), t.child;
    case 9:
      return e = t.type._context, u = t.pendingProps.children, kt(t), e = il(e), u = u(e), t.flags |= 1, el(l, t, u, a), t.child;
    case 14:
      return zi(
        l,
        t,
        t.type,
        t.pendingProps,
        a
      );
    case 15:
      return B0(
        l,
        t,
        t.type,
        t.pendingProps,
        a
      );
    case 19:
      return Q0(l, t, a);
    case 22:
      return Y0(l, t, a);
    case 24:
      return kt(t), u = il(k), l === null ? (e = tc(), e === null && (e = x, n = lc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
        parent: u,
        cache: e
      }, Sc(t), gt(t, k, e)) : (l.lanes & a && (Ef(l, t), du(t, null, null, a), vu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), gt(t, k, u)) : (u = n.cache, gt(t, k, u), u !== e.cache && zf(
        t,
        [k],
        a,
        !0
      ))), el(
        l,
        t,
        t.pendingProps.children,
        a
      ), t.child;
    case 29:
      throw t.pendingProps;
  }
  throw Error(b(156, t.tag));
}
var of = Cl(null), aa = null, at = null;
function gt(l, t, a) {
  _(of, t._currentValue), t._currentValue = a;
}
function ut(l) {
  l._currentValue = of.current, ul(of);
}
function Af(l, t, a) {
  for (; l !== null; ) {
    var u = l.alternate;
    if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
    l = l.return;
  }
}
function zf(l, t, a, u) {
  var e = l.child;
  for (e !== null && (e.return = l); e !== null; ) {
    var n = e.dependencies;
    if (n !== null) {
      var f = e.child;
      n = n.firstContext;
      l: for (; n !== null; ) {
        var c = n;
        n = e;
        for (var i = 0; i < t.length; i++)
          if (c.context === t[i]) {
            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Af(
              n.return,
              a,
              l
            ), u || (f = null);
            break l;
          }
        n = c.next;
      }
    } else if (e.tag === 18) {
      if (f = e.return, f === null) throw Error(b(341));
      f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Af(f, a, l), f = null;
    } else f = e.child;
    if (f !== null) f.return = e;
    else
      for (f = e; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e = f.sibling, e !== null) {
          e.return = f.return, f = e;
          break;
        }
        f = f.return;
      }
    e = f;
  }
}
function pu(l, t, a, u) {
  l = null;
  for (var e = t, n = !1; e !== null; ) {
    if (!n) {
      if (e.flags & 524288) n = !0;
      else if (e.flags & 262144) break;
    }
    if (e.tag === 10) {
      var f = e.alternate;
      if (f === null) throw Error(b(387));
      if (f = f.memoizedProps, f !== null) {
        var c = e.type;
        zl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
      }
    } else if (e === oe.current) {
      if (f = e.alternate, f === null) throw Error(b(387));
      f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(Hu) : l = [Hu]);
    }
    e = e.return;
  }
  l !== null && zf(
    t,
    l,
    a,
    u
  ), t.flags |= 262144;
}
function Ye(l) {
  for (l = l.firstContext; l !== null; ) {
    if (!zl(
      l.context._currentValue,
      l.memoizedValue
    ))
      return !0;
    l = l.next;
  }
  return !1;
}
function kt(l) {
  aa = l, at = null, l = l.dependencies, l !== null && (l.firstContext = null);
}
function il(l) {
  return G0(aa, l);
}
function Pu(l, t) {
  return aa === null && kt(l), G0(l, t);
}
function G0(l, t) {
  var a = t._currentValue;
  if (t = { context: t, memoizedValue: a, next: null }, at === null) {
    if (l === null) throw Error(b(308));
    at = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
  } else at = at.next = t;
  return a;
}
var yt = !1;
function Sc(l) {
  l.updateQueue = {
    baseState: l.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function Ef(l, t) {
  l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
    baseState: l.baseState,
    firstBaseUpdate: l.firstBaseUpdate,
    lastBaseUpdate: l.lastBaseUpdate,
    shared: l.shared,
    callbacks: null
  });
}
function Et(l) {
  return { lane: l, tag: 0, payload: null, callback: null, next: null };
}
function Tt(l, t, a) {
  var u = l.updateQueue;
  if (u === null) return null;
  if (u = u.shared, C & 2) {
    var e = u.pending;
    return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = De(l), Zs(l, null, a), t;
  }
  return $e(l, u, t, a), De(l);
}
function hu(l, t, a) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
    var u = t.lanes;
    u &= l.pendingLanes, a |= u, t.lanes = a, ys(l, a);
  }
}
function Nn(l, t) {
  var a = l.updateQueue, u = l.alternate;
  if (u !== null && (u = u.updateQueue, a === u)) {
    var e = null, n = null;
    if (a = a.firstBaseUpdate, a !== null) {
      do {
        var f = {
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: null,
          next: null
        };
        n === null ? e = n = f : n = n.next = f, a = a.next;
      } while (a !== null);
      n === null ? e = n = t : n = n.next = t;
    } else e = n = t;
    a = {
      baseState: u.baseState,
      firstBaseUpdate: e,
      lastBaseUpdate: n,
      shared: u.shared,
      callbacks: u.callbacks
    }, l.updateQueue = a;
    return;
  }
  l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
}
var Tf = !1;
function vu() {
  if (Tf) {
    var l = Ma;
    if (l !== null) throw l;
  }
}
function du(l, t, a, u) {
  Tf = !1;
  var e = l.updateQueue;
  yt = !1;
  var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
  if (c !== null) {
    e.shared.pending = null;
    var i = c, h = i.next;
    i.next = null, f === null ? n = h : f.next = h, f = i;
    var S = l.alternate;
    S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = h : c.next = h, S.lastBaseUpdate = i));
  }
  if (n !== null) {
    var o = e.baseState;
    f = 0, S = h = i = null, c = n;
    do {
      var y = c.lane & -536870913, m = y !== c.lane;
      if (m ? (r & y) === y : (u & y) === y) {
        y !== 0 && y === ra && (Tf = !0), S !== null && (S = S.next = {
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: null,
          next: null
        });
        l: {
          var A = l, z = c;
          y = t;
          var D = a;
          switch (z.tag) {
            case 1:
              if (A = z.payload, typeof A == "function") {
                o = A.call(D, o, y);
                break l;
              }
              o = A;
              break l;
            case 3:
              A.flags = A.flags & -65537 | 128;
            case 0:
              if (A = z.payload, y = typeof A == "function" ? A.call(D, o, y) : A, y == null) break l;
              o = Z({}, o, y);
              break l;
            case 2:
              yt = !0;
          }
        }
        y = c.callback, y !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [y] : m.push(y));
      } else
        m = {
          lane: y,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, S === null ? (h = S = m, i = o) : S = S.next = m, f |= y;
      if (c = c.next, c === null) {
        if (c = e.shared.pending, c === null)
          break;
        m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
      }
    } while (!0);
    S === null && (i = o), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), rt |= f, l.lanes = f, l.memoizedState = o;
  }
}
function x0(l, t) {
  if (typeof l != "function")
    throw Error(b(191, l));
  l.call(t);
}
function p0(l, t) {
  var a = l.callbacks;
  if (a !== null)
    for (l.callbacks = null, l = 0; l < a.length; l++)
      x0(a[l], t);
}
function Zu(l, t) {
  try {
    var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
    if (u !== null) {
      var e = u.next;
      a = e;
      do {
        if ((a.tag & l) === l) {
          u = void 0;
          var n = a.create, f = a.inst;
          u = n(), f.destroy = u;
        }
        a = a.next;
      } while (a !== e);
    }
  } catch (c) {
    X(t, t.return, c);
  }
}
function Nt(l, t, a) {
  try {
    var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
    if (e !== null) {
      var n = e.next;
      u = n;
      do {
        if ((u.tag & l) === l) {
          var f = u.inst, c = f.destroy;
          if (c !== void 0) {
            f.destroy = void 0, e = t;
            var i = a;
            try {
              c();
            } catch (h) {
              X(
                e,
                i,
                h
              );
            }
          }
        }
        u = u.next;
      } while (u !== n);
    }
  } catch (h) {
    X(t, t.return, h);
  }
}
function Z0(l) {
  var t = l.updateQueue;
  if (t !== null) {
    var a = l.stateNode;
    try {
      p0(t, a);
    } catch (u) {
      X(l, l.return, u);
    }
  }
}
function _0(l, t, a) {
  a.props = Ft(
    l.type,
    l.memoizedProps
  ), a.state = l.memoizedState;
  try {
    a.componentWillUnmount();
  } catch (u) {
    X(l, t, u);
  }
}
function pt(l, t) {
  try {
    var a = l.ref;
    if (a !== null) {
      var u = l.stateNode;
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          var e = u;
          break;
        default:
          e = u;
      }
      typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
    }
  } catch (n) {
    X(l, t, n);
  }
}
function gl(l, t) {
  var a = l.ref, u = l.refCleanup;
  if (a !== null)
    if (typeof u == "function")
      try {
        u();
      } catch (e) {
        X(l, t, e);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
    else if (typeof a == "function")
      try {
        a(null);
      } catch (e) {
        X(l, t, e);
      }
    else a.current = null;
}
function V0(l) {
  var t = l.type, a = l.memoizedProps, u = l.stateNode;
  try {
    l: switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        a.autoFocus && u.focus();
        break l;
      case "img":
        a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
    }
  } catch (e) {
    X(l, l.return, e);
  }
}
function Ui(l, t, a) {
  try {
    var u = l.stateNode;
    Gd(u, l.type, a, t), u[dl] = t;
  } catch (e) {
    X(l, l.return, e);
  }
}
function C0(l) {
  return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
}
function rn(l) {
  l: for (; ; ) {
    for (; l.sibling === null; ) {
      if (l.return === null || C0(l.return)) return null;
      l = l.return;
    }
    for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
      if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
      l.child.return = l, l = l.child;
    }
    if (!(l.flags & 2)) return l.stateNode;
  }
}
function Mf(l, t, a) {
  var u = l.tag;
  if (u === 5 || u === 6)
    l = l.stateNode, t ? a.nodeType === 8 ? a.parentNode.insertBefore(l, t) : a.insertBefore(l, t) : (a.nodeType === 8 ? (t = a.parentNode, t.insertBefore(l, a)) : (t = a, t.appendChild(l)), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = en));
  else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
    for (Mf(l, t, a), l = l.sibling; l !== null; )
      Mf(l, t, a), l = l.sibling;
}
function je(l, t, a) {
  var u = l.tag;
  if (u === 5 || u === 6)
    l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
  else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
    for (je(l, t, a), l = l.sibling; l !== null; )
      je(l, t, a), l = l.sibling;
}
var Fl = !1, K = !1, Bn = !1, qi = typeof WeakSet == "function" ? WeakSet : Set, ll = null, Hi = !1;
function yd(l, t) {
  if (l = l.containerInfo, Bf = Ke, l = Ys(l), Wf(l)) {
    if ("selectionStart" in l)
      var a = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
    else
      l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var e = u.anchorOffset, n = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var f = 0, c = -1, i = -1, h = 0, S = 0, o = l, y = null;
          t: for (; ; ) {
            for (var m; o !== a || e !== 0 && o.nodeType !== 3 || (c = f + e), o !== n || u !== 0 && o.nodeType !== 3 || (i = f + u), o.nodeType === 3 && (f += o.nodeValue.length), (m = o.firstChild) !== null; )
              y = o, o = m;
            for (; ; ) {
              if (o === l) break t;
              if (y === a && ++h === e && (c = f), y === n && ++S === u && (i = f), (m = o.nextSibling) !== null) break;
              o = y, y = o.parentNode;
            }
            o = m;
          }
          a = c === -1 || i === -1 ? null : { start: c, end: i };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (Yf = { focusedElem: l, selectionRange: a }, Ke = !1, ll = t; ll !== null; )
    if (t = ll, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
      l.return = t, ll = l;
    else
      for (; ll !== null; ) {
        switch (t = ll, n = t.alternate, l = t.flags, t.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (l & 1024 && n !== null) {
              l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
              try {
                var A = Ft(
                  a.type,
                  e,
                  a.elementType === a.type
                );
                l = u.getSnapshotBeforeUpdate(
                  A,
                  n
                ), u.__reactInternalSnapshotBeforeUpdate = l;
              } catch (z) {
                X(
                  a,
                  a.return,
                  z
                );
              }
            }
            break;
          case 3:
            if (l & 1024) {
              if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                Qf(l);
              else if (a === 1)
                switch (l.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Qf(l);
                    break;
                  default:
                    l.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (l & 1024) throw Error(b(163));
        }
        if (l = t.sibling, l !== null) {
          l.return = t.return, ll = l;
          break;
        }
        ll = t.return;
      }
  return A = Hi, Hi = !1, A;
}
function K0(l, t, a) {
  var u = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 15:
      wl(l, a), u & 4 && Zu(5, a);
      break;
    case 1:
      if (wl(l, a), u & 4)
        if (l = a.stateNode, t === null)
          try {
            l.componentDidMount();
          } catch (c) {
            X(a, a.return, c);
          }
        else {
          var e = Ft(
            a.type,
            t.memoizedProps
          );
          t = t.memoizedState;
          try {
            l.componentDidUpdate(
              e,
              t,
              l.__reactInternalSnapshotBeforeUpdate
            );
          } catch (c) {
            X(
              a,
              a.return,
              c
            );
          }
        }
      u & 64 && Z0(a), u & 512 && pt(a, a.return);
      break;
    case 3:
      if (wl(l, a), u & 64 && (u = a.updateQueue, u !== null)) {
        if (l = null, a.child !== null)
          switch (a.child.tag) {
            case 27:
            case 5:
              l = a.child.stateNode;
              break;
            case 1:
              l = a.child.stateNode;
          }
        try {
          p0(u, l);
        } catch (c) {
          X(a, a.return, c);
        }
      }
      break;
    case 26:
      wl(l, a), u & 512 && pt(a, a.return);
      break;
    case 27:
    case 5:
      wl(l, a), t === null && u & 4 && V0(a), u & 512 && pt(a, a.return);
      break;
    case 12:
      wl(l, a);
      break;
    case 13:
      wl(l, a), u & 4 && w0(l, a);
      break;
    case 22:
      if (e = a.memoizedState !== null || Fl, !e) {
        t = t !== null && t.memoizedState !== null || K;
        var n = Fl, f = K;
        Fl = e, (K = t) && !f ? vt(
          l,
          a,
          (a.subtreeFlags & 8772) !== 0
        ) : wl(l, a), Fl = n, K = f;
      }
      u & 512 && (a.memoizedProps.mode === "manual" ? pt(a, a.return) : gl(a, a.return));
      break;
    default:
      wl(l, a);
  }
}
function L0(l) {
  var t = l.alternate;
  t !== null && (l.alternate = null, L0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Vf(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
}
var w = null, ml = !1;
function Jl(l, t, a) {
  for (a = a.child; a !== null; )
    J0(l, t, a), a = a.sibling;
}
function J0(l, t, a) {
  if (bl && typeof bl.onCommitFiberUnmount == "function")
    try {
      bl.onCommitFiberUnmount(Bu, a);
    } catch {
    }
  switch (a.tag) {
    case 26:
      K || gl(a, t), Jl(
        l,
        t,
        a
      ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
      break;
    case 27:
      K || gl(a, t);
      var u = w, e = ml;
      for (w = a.stateNode, Jl(
        l,
        t,
        a
      ), a = a.stateNode, t = a.attributes; t.length; )
        a.removeAttributeNode(t[0]);
      Vf(a), w = u, ml = e;
      break;
    case 5:
      K || gl(a, t);
    case 6:
      e = w;
      var n = ml;
      if (w = null, Jl(
        l,
        t,
        a
      ), w = e, ml = n, w !== null)
        if (ml)
          try {
            l = w, u = a.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u);
          } catch (f) {
            X(
              a,
              t,
              f
            );
          }
        else
          try {
            w.removeChild(a.stateNode);
          } catch (f) {
            X(
              a,
              t,
              f
            );
          }
      break;
    case 18:
      w !== null && (ml ? (t = w, a = a.stateNode, t.nodeType === 8 ? Kn(
        t.parentNode,
        a
      ) : t.nodeType === 1 && Kn(t, a), ru(t)) : Kn(w, a.stateNode));
      break;
    case 4:
      u = w, e = ml, w = a.stateNode.containerInfo, ml = !0, Jl(
        l,
        t,
        a
      ), w = u, ml = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      K || Nt(2, a, t), K || Nt(4, a, t), Jl(
        l,
        t,
        a
      );
      break;
    case 1:
      K || (gl(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && _0(
        a,
        t,
        u
      )), Jl(
        l,
        t,
        a
      );
      break;
    case 21:
      Jl(
        l,
        t,
        a
      );
      break;
    case 22:
      K || gl(a, t), K = (u = K) || a.memoizedState !== null, Jl(
        l,
        t,
        a
      ), K = u;
      break;
    default:
      Jl(
        l,
        t,
        a
      );
  }
}
function w0(l, t) {
  if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
    try {
      ru(l);
    } catch (a) {
      X(t, t.return, a);
    }
}
function md(l) {
  switch (l.tag) {
    case 13:
    case 19:
      var t = l.stateNode;
      return t === null && (t = l.stateNode = new qi()), t;
    case 22:
      return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new qi()), t;
    default:
      throw Error(b(435, l.tag));
  }
}
function Yn(l, t) {
  var a = md(l);
  t.forEach(function(u) {
    var e = qd.bind(null, l, u);
    a.has(u) || (a.add(u), u.then(e, e));
  });
}
function El(l, t) {
  var a = t.deletions;
  if (a !== null)
    for (var u = 0; u < a.length; u++) {
      var e = a[u], n = l, f = t, c = f;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
          case 5:
            w = c.stateNode, ml = !1;
            break l;
          case 3:
            w = c.stateNode.containerInfo, ml = !0;
            break l;
          case 4:
            w = c.stateNode.containerInfo, ml = !0;
            break l;
        }
        c = c.return;
      }
      if (w === null) throw Error(b(160));
      J0(n, f, e), w = null, ml = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
    }
  if (t.subtreeFlags & 13878)
    for (t = t.child; t !== null; )
      W0(t, l), t = t.sibling;
}
var Yl = null;
function W0(l, t) {
  var a = l.alternate, u = l.flags;
  switch (l.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      El(t, l), Tl(l), u & 4 && (Nt(3, l, l.return), Zu(3, l), Nt(5, l, l.return));
      break;
    case 1:
      El(t, l), Tl(l), u & 512 && (K || a === null || gl(a, a.return)), u & 64 && Fl && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
      break;
    case 26:
      var e = Yl;
      if (El(t, l), Tl(l), u & 512 && (K || a === null || gl(a, a.return)), u & 4) {
        var n = a !== null ? a.memoizedState : null;
        if (u = l.memoizedState, a === null)
          if (u === null)
            if (l.stateNode === null) {
              l: {
                u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                t: switch (u) {
                  case "title":
                    n = e.getElementsByTagName("title")[0], (!n || n[ou] || n[cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                      n,
                      e.querySelector("head > title")
                    )), fl(n, u, a), n[cl] = l, tl(n), u = n;
                    break l;
                  case "link":
                    var f = Li(
                      "link",
                      "href",
                      e
                    ).get(u + (a.href || ""));
                    if (f) {
                      for (var c = 0; c < f.length; c++)
                        if (n = f[c], n.getAttribute("href") === (a.href == null ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                          f.splice(c, 1);
                          break t;
                        }
                    }
                    n = e.createElement(u), fl(n, u, a), e.head.appendChild(n);
                    break;
                  case "meta":
                    if (f = Li(
                      "meta",
                      "content",
                      e
                    ).get(u + (a.content || ""))) {
                      for (c = 0; c < f.length; c++)
                        if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                          f.splice(c, 1);
                          break t;
                        }
                    }
                    n = e.createElement(u), fl(n, u, a), e.head.appendChild(n);
                    break;
                  default:
                    throw Error(b(468, u));
                }
                n[cl] = l, tl(n), u = n;
              }
              l.stateNode = u;
            } else
              Ji(
                e,
                l.type,
                l.stateNode
              );
          else
            l.stateNode = Ki(
              e,
              u,
              l.memoizedProps
            );
        else
          n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Ji(
            e,
            l.type,
            l.stateNode
          ) : Ki(
            e,
            u,
            l.memoizedProps
          )) : u === null && l.stateNode !== null && Ui(
            l,
            l.memoizedProps,
            a.memoizedProps
          );
      }
      break;
    case 27:
      if (u & 4 && l.alternate === null) {
        e = l.stateNode, n = l.memoizedProps;
        try {
          for (var i = e.firstChild; i; ) {
            var h = i.nextSibling, S = i.nodeName;
            i[ou] || S === "HEAD" || S === "BODY" || S === "SCRIPT" || S === "STYLE" || S === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = h;
          }
          for (var o = l.type, y = e.attributes; y.length; )
            e.removeAttributeNode(y[0]);
          fl(e, o, n), e[cl] = l, e[dl] = n;
        } catch (A) {
          X(l, l.return, A);
        }
      }
    case 5:
      if (El(t, l), Tl(l), u & 512 && (K || a === null || gl(a, a.return)), l.flags & 32) {
        e = l.stateNode;
        try {
          Ra(e, "");
        } catch (A) {
          X(l, l.return, A);
        }
      }
      u & 4 && l.stateNode != null && (e = l.memoizedProps, Ui(
        l,
        e,
        a !== null ? a.memoizedProps : e
      )), u & 1024 && (Bn = !0);
      break;
    case 6:
      if (El(t, l), Tl(l), u & 4) {
        if (l.stateNode === null)
          throw Error(b(162));
        u = l.memoizedProps, a = l.stateNode;
        try {
          a.nodeValue = u;
        } catch (A) {
          X(l, l.return, A);
        }
      }
      break;
    case 3:
      if (ge = null, e = Yl, Yl = _e(t.containerInfo), El(t, l), Yl = e, Tl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
        try {
          ru(t.containerInfo);
        } catch (A) {
          X(l, l.return, A);
        }
      Bn && (Bn = !1, F0(l));
      break;
    case 4:
      u = Yl, Yl = _e(
        l.stateNode.containerInfo
      ), El(t, l), Tl(l), Yl = u;
      break;
    case 12:
      El(t, l), Tl(l);
      break;
    case 13:
      El(t, l), Tl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ec = Zl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, Yn(l, u)));
      break;
    case 22:
      if (u & 512 && (K || a === null || gl(a, a.return)), i = l.memoizedState !== null, h = a !== null && a.memoizedState !== null, S = Fl, o = K, Fl = S || i, K = o || h, El(t, l), K = o, Fl = S, Tl(l), t = l.stateNode, t._current = l, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, u & 8192 && (t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (t = Fl || K, a === null || h || t || na(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
        l: for (a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
            if (a === null) {
              h = a = t;
              try {
                if (e = h.stateNode, i)
                  n = e.style, typeof n.setProperty == "function" ? n.setProperty(
                    "display",
                    "none",
                    "important"
                  ) : n.display = "none";
                else {
                  f = h.stateNode, c = h.memoizedProps.style;
                  var m = c != null && c.hasOwnProperty("display") ? c.display : null;
                  f.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                }
              } catch (A) {
                X(h, h.return, A);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              h = t;
              try {
                h.stateNode.nodeValue = i ? "" : h.memoizedProps;
              } catch (A) {
                X(h, h.return, A);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
      u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, Yn(l, a))));
      break;
    case 19:
      El(t, l), Tl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, Yn(l, u)));
      break;
    case 21:
      break;
    default:
      El(t, l), Tl(l);
  }
}
function Tl(l) {
  var t = l.flags;
  if (t & 2) {
    try {
      if (l.tag !== 27) {
        l: {
          for (var a = l.return; a !== null; ) {
            if (C0(a)) {
              var u = a;
              break l;
            }
            a = a.return;
          }
          throw Error(b(160));
        }
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = rn(l);
            je(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Ra(f, ""), u.flags &= -33);
            var c = rn(l);
            je(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, h = rn(l);
            Mf(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(b(161));
        }
      }
    } catch (S) {
      X(l, l.return, S);
    }
    l.flags &= -3;
  }
  t & 4096 && (l.flags &= -4097);
}
function F0(l) {
  if (l.subtreeFlags & 1024)
    for (l = l.child; l !== null; ) {
      var t = l;
      F0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
}
function wl(l, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; )
      K0(l, t.alternate, t), t = t.sibling;
}
function na(l) {
  for (l = l.child; l !== null; ) {
    var t = l;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(4, t, t.return), na(t);
        break;
      case 1:
        gl(t, t.return);
        var a = t.stateNode;
        typeof a.componentWillUnmount == "function" && _0(
          t,
          t.return,
          a
        ), na(t);
        break;
      case 26:
      case 27:
      case 5:
        gl(t, t.return), na(t);
        break;
      case 22:
        gl(t, t.return), t.memoizedState === null && na(t);
        break;
      default:
        na(t);
    }
    l = l.sibling;
  }
}
function vt(l, t, a) {
  for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var u = t.alternate, e = l, n = t, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vt(
          e,
          n,
          a
        ), Zu(4, n);
        break;
      case 1:
        if (vt(
          e,
          n,
          a
        ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
          try {
            e.componentDidMount();
          } catch (h) {
            X(u, u.return, h);
          }
        if (u = n, e = u.updateQueue, e !== null) {
          var c = u.stateNode;
          try {
            var i = e.shared.hiddenCallbacks;
            if (i !== null)
              for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                x0(i[e], c);
          } catch (h) {
            X(u, u.return, h);
          }
        }
        a && f & 64 && Z0(n), pt(n, n.return);
        break;
      case 26:
      case 27:
      case 5:
        vt(
          e,
          n,
          a
        ), a && u === null && f & 4 && V0(n), pt(n, n.return);
        break;
      case 12:
        vt(
          e,
          n,
          a
        );
        break;
      case 13:
        vt(
          e,
          n,
          a
        ), a && f & 4 && w0(e, n);
        break;
      case 22:
        n.memoizedState === null && vt(
          e,
          n,
          a
        ), pt(n, n.return);
        break;
      default:
        vt(
          e,
          n,
          a
        );
    }
    t = t.sibling;
  }
}
function gc(l, t) {
  var a = null;
  l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Gu(a));
}
function bc(l, t) {
  l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Gu(l));
}
function ht(l, t, a, u) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; )
      k0(
        l,
        t,
        a,
        u
      ), t = t.sibling;
}
function k0(l, t, a, u) {
  var e = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      ht(
        l,
        t,
        a,
        u
      ), e & 2048 && Zu(9, t);
      break;
    case 3:
      ht(
        l,
        t,
        a,
        u
      ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Gu(l)));
      break;
    case 12:
      if (e & 2048) {
        ht(
          l,
          t,
          a,
          u
        ), l = t.stateNode;
        try {
          var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
          typeof c == "function" && c(
            f,
            t.alternate === null ? "mount" : "update",
            l.passiveEffectDuration,
            -0
          );
        } catch (i) {
          X(t, t.return, i);
        }
      } else
        ht(
          l,
          t,
          a,
          u
        );
      break;
    case 23:
      break;
    case 22:
      n = t.stateNode, t.memoizedState !== null ? n._visibility & 4 ? ht(
        l,
        t,
        a,
        u
      ) : yu(l, t) : n._visibility & 4 ? ht(
        l,
        t,
        a,
        u
      ) : (n._visibility |= 4, fa(
        l,
        t,
        a,
        u,
        (t.subtreeFlags & 10256) !== 0
      )), e & 2048 && gc(
        t.alternate,
        t
      );
      break;
    case 24:
      ht(
        l,
        t,
        a,
        u
      ), e & 2048 && bc(t.alternate, t);
      break;
    default:
      ht(
        l,
        t,
        a,
        u
      );
  }
}
function fa(l, t, a, u, e) {
  for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
    var n = l, f = t, c = a, i = u, h = f.flags;
    switch (f.tag) {
      case 0:
      case 11:
      case 15:
        fa(
          n,
          f,
          c,
          i,
          e
        ), Zu(8, f);
        break;
      case 23:
        break;
      case 22:
        var S = f.stateNode;
        f.memoizedState !== null ? S._visibility & 4 ? fa(
          n,
          f,
          c,
          i,
          e
        ) : yu(
          n,
          f
        ) : (S._visibility |= 4, fa(
          n,
          f,
          c,
          i,
          e
        )), e && h & 2048 && gc(
          f.alternate,
          f
        );
        break;
      case 24:
        fa(
          n,
          f,
          c,
          i,
          e
        ), e && h & 2048 && bc(f.alternate, f);
        break;
      default:
        fa(
          n,
          f,
          c,
          i,
          e
        );
    }
    t = t.sibling;
  }
}
function yu(l, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var a = l, u = t, e = u.flags;
      switch (u.tag) {
        case 22:
          yu(a, u), e & 2048 && gc(
            u.alternate,
            u
          );
          break;
        case 24:
          yu(a, u), e & 2048 && bc(u.alternate, u);
          break;
        default:
          yu(a, u);
      }
      t = t.sibling;
    }
}
var tu = 8192;
function ua(l) {
  if (l.subtreeFlags & tu)
    for (l = l.child; l !== null; )
      $0(l), l = l.sibling;
}
function $0(l) {
  switch (l.tag) {
    case 26:
      ua(l), l.flags & tu && l.memoizedState !== null && a1(
        Yl,
        l.memoizedState,
        l.memoizedProps
      );
      break;
    case 5:
      ua(l);
      break;
    case 3:
    case 4:
      var t = Yl;
      Yl = _e(l.stateNode.containerInfo), ua(l), Yl = t;
      break;
    case 22:
      l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = tu, tu = 16777216, ua(l), tu = t) : ua(l));
      break;
    default:
      ua(l);
  }
}
function I0(l) {
  var t = l.alternate;
  if (t !== null && (l = t.child, l !== null)) {
    t.child = null;
    do
      t = l.sibling, l.sibling = null, l = t;
    while (l !== null);
  }
}
function Wa(l) {
  var t = l.deletions;
  if (l.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var u = t[a];
        ll = u, lh(
          u,
          l
        );
      }
    I0(l);
  }
  if (l.subtreeFlags & 10256)
    for (l = l.child; l !== null; )
      P0(l), l = l.sibling;
}
function P0(l) {
  switch (l.tag) {
    case 0:
    case 11:
    case 15:
      Wa(l), l.flags & 2048 && Nt(9, l, l.return);
      break;
    case 3:
      Wa(l);
      break;
    case 12:
      Wa(l);
      break;
    case 22:
      var t = l.stateNode;
      l.memoizedState !== null && t._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -5, ye(l)) : Wa(l);
      break;
    default:
      Wa(l);
  }
}
function ye(l) {
  var t = l.deletions;
  if (l.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var u = t[a];
        ll = u, lh(
          u,
          l
        );
      }
    I0(l);
  }
  for (l = l.child; l !== null; ) {
    switch (t = l, t.tag) {
      case 0:
      case 11:
      case 15:
        Nt(8, t, t.return), ye(t);
        break;
      case 22:
        a = t.stateNode, a._visibility & 4 && (a._visibility &= -5, ye(t));
        break;
      default:
        ye(t);
    }
    l = l.sibling;
  }
}
function lh(l, t) {
  for (; ll !== null; ) {
    var a = ll;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Nt(8, a, t);
        break;
      case 23:
      case 22:
        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
          var u = a.memoizedState.cachePool.pool;
          u != null && u.refCount++;
        }
        break;
      case 24:
        Gu(a.memoizedState.cache);
    }
    if (u = a.child, u !== null) u.return = a, ll = u;
    else
      l: for (a = l; ll !== null; ) {
        u = ll;
        var e = u.sibling, n = u.return;
        if (L0(u), u === a) {
          ll = null;
          break l;
        }
        if (e !== null) {
          e.return = n, ll = e;
          break l;
        }
        ll = n;
      }
  }
}
function Sd(l, t, a, u) {
  this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rl(l, t, a, u) {
  return new Sd(l, t, a, u);
}
function oc(l) {
  return l = l.prototype, !(!l || !l.isReactComponent);
}
function Mt(l, t) {
  var a = l.alternate;
  return a === null ? (a = Rl(
    l.tag,
    t,
    l.key,
    l.mode
  ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 31457280, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
}
function th(l, t) {
  l.flags &= 31457282;
  var a = l.alternate;
  return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }), l;
}
function me(l, t, a, u, e, n) {
  var f = 0;
  if (u = l, typeof l == "function") oc(l) && (f = 1);
  else if (typeof l == "string")
    f = l1(
      l,
      a,
      pl.current
    ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
  else
    l: switch (l) {
      case ia:
        return Ct(a.children, e, n, t);
      case as:
        f = 8, e |= 24;
        break;
      case Ln:
        return l = Rl(12, a, t, e | 2), l.elementType = Ln, l.lanes = n, l;
      case Jn:
        return l = Rl(13, a, t, e), l.elementType = Jn, l.lanes = n, l;
      case wn:
        return l = Rl(19, a, t, e), l.elementType = wn, l.lanes = n, l;
      case es:
        return ah(a, e, n, t);
      default:
        if (typeof l == "object" && l !== null)
          switch (l.$$typeof) {
            case Zh:
            case Il:
              f = 10;
              break l;
            case us:
              f = 9;
              break l;
            case pf:
              f = 11;
              break l;
            case Zf:
              f = 14;
              break l;
            case dt:
              f = 16, u = null;
              break l;
          }
        f = 29, a = Error(
          b(130, l === null ? "null" : typeof l, "")
        ), u = null;
    }
  return t = Rl(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
}
function Ct(l, t, a, u) {
  return l = Rl(7, l, u, t), l.lanes = a, l;
}
function ah(l, t, a, u) {
  l = Rl(22, l, u, t), l.elementType = es, l.lanes = a;
  var e = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function() {
      var n = e._current;
      if (n === null) throw Error(b(456));
      if (!(e._pendingVisibility & 2)) {
        var f = Ht(n, 2);
        f !== null && (e._pendingVisibility |= 2, hl(f, n, 2));
      }
    },
    attach: function() {
      var n = e._current;
      if (n === null) throw Error(b(456));
      if (e._pendingVisibility & 2) {
        var f = Ht(n, 2);
        f !== null && (e._pendingVisibility &= -3, hl(f, n, 2));
      }
    }
  };
  return l.stateNode = e, l;
}
function jn(l, t, a) {
  return l = Rl(6, l, null, t), l.lanes = a, l;
}
function Qn(l, t, a) {
  return t = Rl(
    4,
    l.children !== null ? l.children : [],
    l.key,
    t
  ), t.lanes = a, t.stateNode = {
    containerInfo: l.containerInfo,
    pendingChildren: null,
    implementation: l.implementation
  }, t;
}
function Wl(l) {
  l.flags |= 4;
}
function Ri(l, t) {
  if (t.type !== "stylesheet" || t.state.loading & 4)
    l.flags &= -16777217;
  else if (l.flags |= 16777216, !Mh(t)) {
    if (t = rl.current, t !== null && ((r & 4194176) === r ? _l !== null : (r & 62914560) !== r && !(r & 536870912) || t !== _l))
      throw fu = ff, Vs;
    l.flags |= 8192;
  }
}
function le(l, t) {
  t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vs() : 536870912, l.lanes |= t, Ya |= t);
}
function Fa(l, t) {
  if (!Y)
    switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; )
          t.alternate !== null && (a = t), t = t.sibling;
        a === null ? l.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = l.tail;
        for (var u = null; a !== null; )
          a.alternate !== null && (u = a), a = a.sibling;
        u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
    }
}
function V(l) {
  var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
  if (t)
    for (var e = l.child; e !== null; )
      a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 31457280, u |= e.flags & 31457280, e.return = l, e = e.sibling;
  else
    for (e = l.child; e !== null; )
      a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
  return l.subtreeFlags |= u, l.childLanes = a, t;
}
function gd(l, t, a) {
  var u = t.pendingProps;
  switch (If(t), t.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return V(t), null;
    case 1:
      return V(t), null;
    case 3:
      return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ut(k), qa(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Ja(t) ? Wl(t) : l === null || l.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jl !== null && (Hf(jl), jl = null))), V(t), null;
    case 26:
      return a = t.memoizedState, l === null ? (Wl(t), a !== null ? (V(t), Ri(t, a)) : (V(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Wl(t), V(t), Ri(t, a)) : (V(t), t.flags &= -16777217) : (l.memoizedProps !== u && Wl(t), V(t), t.flags &= -16777217), null;
    case 27:
      ze(t), a = zt.current;
      var e = t.type;
      if (l !== null && t.stateNode != null)
        l.memoizedProps !== u && Wl(t);
      else {
        if (!u) {
          if (t.stateNode === null)
            throw Error(b(166));
          return V(t), null;
        }
        l = pl.current, Ja(t) ? ni(t) : (l = zh(e, u, a), t.stateNode = l, Wl(t));
      }
      return V(t), null;
    case 5:
      if (ze(t), a = t.type, l !== null && t.stateNode != null)
        l.memoizedProps !== u && Wl(t);
      else {
        if (!u) {
          if (t.stateNode === null)
            throw Error(b(166));
          return V(t), null;
        }
        if (l = pl.current, Ja(t))
          ni(t);
        else {
          switch (e = Ze(
            zt.current
          ), l) {
            case 1:
              l = e.createElementNS(
                "http://www.w3.org/2000/svg",
                a
              );
              break;
            case 2:
              l = e.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                a
              );
              break;
            default:
              switch (a) {
                case "svg":
                  l = e.createElementNS(
                    "http://www.w3.org/2000/svg",
                    a
                  );
                  break;
                case "math":
                  l = e.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    a
                  );
                  break;
                case "script":
                  l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                  break;
                case "select":
                  l = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                  break;
                default:
                  l = typeof u.is == "string" ? e.createElement(a, { is: u.is }) : e.createElement(a);
              }
          }
          l[cl] = t, l[dl] = u;
          l: for (e = t.child; e !== null; ) {
            if (e.tag === 5 || e.tag === 6)
              l.appendChild(e.stateNode);
            else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break l;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break l;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          t.stateNode = l;
          l: switch (fl(l, a, u), a) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              l = !!u.autoFocus;
              break l;
            case "img":
              l = !0;
              break l;
            default:
              l = !1;
          }
          l && Wl(t);
        }
      }
      return V(t), t.flags &= -16777217, null;
    case 6:
      if (l && t.stateNode != null)
        l.memoizedProps !== u && Wl(t);
      else {
        if (typeof u != "string" && t.stateNode === null)
          throw Error(b(166));
        if (l = zt.current, Ja(t)) {
          if (l = t.stateNode, a = t.memoizedProps, u = null, e = sl, e !== null)
            switch (e.tag) {
              case 27:
              case 5:
                u = e.memoizedProps;
            }
          l[cl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || bh(l.nodeValue, a)), l || Jt(t);
        } else
          l = Ze(l).createTextNode(
            u
          ), l[cl] = t, t.stateNode = l;
      }
      return V(t), null;
    case 13:
      if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
        if (e = Ja(t), u !== null && u.dehydrated !== null) {
          if (l === null) {
            if (!e) throw Error(b(318));
            if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
            e[cl] = t;
          } else
            Xu(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          V(t), e = !1;
        } else
          jl !== null && (Hf(jl), jl = null), e = !0;
        if (!e)
          return t.flags & 256 ? (tt(t), t) : (tt(t), null);
      }
      if (tt(t), t.flags & 128)
        return t.lanes = a, t;
      if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
        u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
        var n = null;
        u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
      }
      return a !== l && a && (t.child.flags |= 8192), le(t, t.updateQueue), V(t), null;
    case 4:
      return qa(), l === null && Dc(t.stateNode.containerInfo), V(t), null;
    case 10:
      return ut(t.type), V(t), null;
    case 19:
      if (ul($), e = t.memoizedState, e === null) return V(t), null;
      if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
        if (u) Fa(e, !1);
        else {
          if (L !== 0 || l !== null && l.flags & 128)
            for (l = t.child; l !== null; ) {
              if (n = He(l), n !== null) {
                for (t.flags |= 128, Fa(e, !1), l = n.updateQueue, t.updateQueue = l, le(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                  th(a, l), a = a.sibling;
                return _(
                  $,
                  $.current & 1 | 2
                ), t.child;
              }
              l = l.sibling;
            }
          e.tail !== null && Zl() > Qe && (t.flags |= 128, u = !0, Fa(e, !1), t.lanes = 4194304);
        }
      else {
        if (!u)
          if (l = He(n), l !== null) {
            if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, le(t, l), Fa(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !Y)
              return V(t), null;
          } else
            2 * Zl() - e.renderingStartTime > Qe && a !== 536870912 && (t.flags |= 128, u = !0, Fa(e, !1), t.lanes = 4194304);
        e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
      }
      return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = Zl(), t.sibling = null, l = $.current, _($, u ? l & 1 | 2 : l & 1), t) : (V(t), null);
    case 22:
    case 23:
      return tt(t), Pf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? a & 536870912 && !(t.flags & 128) && (V(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : V(t), a = t.updateQueue, a !== null && le(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && ul(Vt), null;
    case 24:
      return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ut(k), V(t), null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function bd(l, t) {
  switch (If(t), t.tag) {
    case 1:
      return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
    case 3:
      return ut(k), qa(), l = t.flags, l & 65536 && !(l & 128) ? (t.flags = l & -65537 | 128, t) : null;
    case 26:
    case 27:
    case 5:
      return ze(t), null;
    case 13:
      if (tt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(b(340));
        Xu();
      }
      return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
    case 19:
      return ul($), null;
    case 4:
      return qa(), null;
    case 10:
      return ut(t.type), null;
    case 22:
    case 23:
      return tt(t), Pf(), l !== null && ul(Vt), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
    case 24:
      return ut(k), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function uh(l, t) {
  switch (If(t), t.tag) {
    case 3:
      ut(k), qa();
      break;
    case 26:
    case 27:
    case 5:
      ze(t);
      break;
    case 4:
      qa();
      break;
    case 13:
      tt(t);
      break;
    case 19:
      ul($);
      break;
    case 10:
      ut(t.type);
      break;
    case 22:
    case 23:
      tt(t), Pf(), l !== null && ul(Vt);
      break;
    case 24:
      ut(k);
  }
}
var od = {
  getCacheForType: function(l) {
    var t = il(k), a = t.data.get(l);
    return a === void 0 && (a = l(), t.data.set(l, a)), a;
  }
}, Ad = typeof WeakMap == "function" ? WeakMap : Map, C = 0, x = null, H = null, r = 0, G = 0, Sl = null, kl = !1, pa = !1, Ac = !1, ct = 0, L = 0, rt = 0, Kt = 0, zc = 0, Nl = 0, Ya = 0, mu = null, xl = null, Df = !1, Ec = 0, Qe = 1 / 0, Xe = null, Dt = null, te = !1, Gt = null, Su = 0, Of = 0, Uf = null, gu = 0, qf = null;
function Al() {
  if (C & 2 && r !== 0)
    return r & -r;
  if (O.T !== null) {
    var l = ra;
    return l !== 0 ? l : Mc();
  }
  return Ss();
}
function eh() {
  Nl === 0 && (Nl = !(r & 536870912) || Y ? hs() : 536870912);
  var l = rl.current;
  return l !== null && (l.flags |= 32), Nl;
}
function hl(l, t, a) {
  (l === x && G === 2 || l.cancelPendingCommit !== null) && (ja(l, 0), $l(
    l,
    r,
    Nl,
    !1
  )), ju(l, a), (!(C & 2) || l !== x) && (l === x && (!(C & 2) && (Kt |= a), L === 4 && $l(
    l,
    r,
    Nl,
    !1
  )), Kl(l));
}
function nh(l, t, a) {
  if (C & 6) throw Error(b(327));
  var u = !a && (t & 60) === 0 && (t & l.expiredLanes) === 0 || Yu(l, t), e = u ? Td(l, t) : Xn(l, t, !0), n = u;
  do {
    if (e === 0) {
      pa && !u && $l(l, t, 0, !1);
      break;
    } else if (e === 6)
      $l(
        l,
        t,
        0,
        !kl
      );
    else {
      if (a = l.current.alternate, n && !zd(a)) {
        e = Xn(l, t, !1), n = !1;
        continue;
      }
      if (e === 2) {
        if (n = t, l.errorRecoveryDisabledLanes & n)
          var f = 0;
        else
          f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
        if (f !== 0) {
          t = f;
          l: {
            var c = l;
            e = mu;
            var i = c.current.memoizedState.isDehydrated;
            if (i && (ja(c, f).flags |= 256), f = Xn(
              c,
              f,
              !1
            ), f !== 2) {
              if (Ac && !i) {
                c.errorRecoveryDisabledLanes |= n, Kt |= n, e = 4;
                break l;
              }
              n = xl, xl = e, n !== null && Hf(n);
            }
            e = f;
          }
          if (n = !1, e !== 2) continue;
        }
      }
      if (e === 1) {
        ja(l, 0), $l(l, t, 0, !0);
        break;
      }
      l: {
        switch (u = l, e) {
          case 0:
          case 1:
            throw Error(b(345));
          case 4:
            if ((t & 4194176) === t) {
              $l(
                u,
                t,
                Nl,
                !kl
              );
              break l;
            }
            break;
          case 2:
            xl = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(b(329));
        }
        if (u.finishedWork = a, u.finishedLanes = t, (t & 62914560) === t && (n = Ec + 300 - Zl(), 10 < n)) {
          if ($l(
            u,
            t,
            Nl,
            !kl
          ), Je(u, 0) !== 0) break l;
          u.timeoutHandle = Ah(
            Ni.bind(
              null,
              u,
              a,
              xl,
              Xe,
              Df,
              t,
              Nl,
              Kt,
              Ya,
              kl,
              2,
              -0,
              0
            ),
            n
          );
          break l;
        }
        Ni(
          u,
          a,
          xl,
          Xe,
          Df,
          t,
          Nl,
          Kt,
          Ya,
          kl,
          0,
          -0,
          0
        );
      }
    }
    break;
  } while (!0);
  Kl(l);
}
function Hf(l) {
  xl === null ? xl = l : xl.push.apply(
    xl,
    l
  );
}
function Ni(l, t, a, u, e, n, f, c, i, h, S, o, y) {
  var m = t.subtreeFlags;
  if ((m & 8192 || (m & 16785408) === 16785408) && (qu = { stylesheets: null, count: 0, unsuspend: t1 }, $0(t), t = u1(), t !== null)) {
    l.cancelPendingCommit = t(
      Bi.bind(
        null,
        l,
        a,
        u,
        e,
        f,
        c,
        i,
        1,
        o,
        y
      )
    ), $l(l, n, f, !h);
    return;
  }
  Bi(
    l,
    a,
    u,
    e,
    f,
    c,
    i,
    S,
    o,
    y
  );
}
function zd(l) {
  for (var t = l; ; ) {
    var a = t.tag;
    if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = e.getSnapshot;
        e = e.value;
        try {
          if (!zl(n(), e)) return !1;
        } catch {
          return !1;
        }
      }
    if (a = t.child, t.subtreeFlags & 16384 && a !== null)
      a.return = t, t = a;
    else {
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function $l(l, t, a, u) {
  t &= ~zc, t &= ~Kt, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
  for (var e = t; 0 < e; ) {
    var n = 31 - ol(e), f = 1 << n;
    u[n] = -1, e &= ~f;
  }
  a !== 0 && ds(l, a, t);
}
function an() {
  return C & 6 ? !0 : (_u(0), !1);
}
function Tc() {
  if (H !== null) {
    if (G === 0)
      var l = H.return;
    else
      l = H, at = aa = null, fc(l), Ta = null, Mu = 0, l = H;
    for (; l !== null; )
      uh(l.alternate, l), l = l.return;
    H = null;
  }
}
function ja(l, t) {
  l.finishedWork = null, l.finishedLanes = 0;
  var a = l.timeoutHandle;
  a !== -1 && (l.timeoutHandle = -1, pd(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Tc(), x = l, H = a = Mt(l.current, null), r = t, G = 0, Sl = null, kl = !1, pa = Yu(l, t), Ac = !1, Ya = Nl = zc = Kt = rt = L = 0, xl = mu = null, Df = !1, t & 8 && (t |= t & 32);
  var u = l.entangledLanes;
  if (u !== 0)
    for (l = l.entanglements, u &= t; 0 < u; ) {
      var e = 31 - ol(u), n = 1 << e;
      t |= l[e], u &= ~n;
    }
  return ct = t, ke(), a;
}
function fh(l, t) {
  U = null, O.H = Vl, t === nu ? (t = ii(), G = 3) : t === Vs ? (t = ii(), G = 4) : G = t === r0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Sl = t, H === null && (L = 1, Be(
    l,
    Hl(t, l.current)
  ));
}
function ch() {
  var l = O.H;
  return O.H = Vl, l === null ? Vl : l;
}
function ih() {
  var l = O.A;
  return O.A = od, l;
}
function Rf() {
  L = 4, kl || (r & 4194176) !== r && rl.current !== null || (pa = !0), !(rt & 134217727) && !(Kt & 134217727) || x === null || $l(
    x,
    r,
    Nl,
    !1
  );
}
function Xn(l, t, a) {
  var u = C;
  C |= 2;
  var e = ch(), n = ih();
  (x !== l || r !== t) && (Xe = null, ja(l, t)), t = !1;
  var f = L;
  l: do
    try {
      if (G !== 0 && H !== null) {
        var c = H, i = Sl;
        switch (G) {
          case 8:
            Tc(), f = 6;
            break l;
          case 3:
          case 2:
          case 6:
            rl.current === null && (t = !0);
            var h = G;
            if (G = 0, Sl = null, oa(l, c, i, h), a && pa) {
              f = 0;
              break l;
            }
            break;
          default:
            h = G, G = 0, Sl = null, oa(l, c, i, h);
        }
      }
      Ed(), f = L;
      break;
    } catch (S) {
      fh(l, S);
    }
  while (!0);
  return t && l.shellSuspendCounter++, at = aa = null, C = u, O.H = e, O.A = n, H === null && (x = null, r = 0, ke()), f;
}
function Ed() {
  for (; H !== null; ) sh(H);
}
function Td(l, t) {
  var a = C;
  C |= 2;
  var u = ch(), e = ih();
  x !== l || r !== t ? (Xe = null, Qe = Zl() + 500, ja(l, t)) : pa = Yu(
    l,
    t
  );
  l: do
    try {
      if (G !== 0 && H !== null) {
        t = H;
        var n = Sl;
        t: switch (G) {
          case 1:
            G = 0, Sl = null, oa(l, t, n, 1);
            break;
          case 2:
            if (ci(n)) {
              G = 0, Sl = null, ri(t);
              break;
            }
            t = function() {
              G === 2 && x === l && (G = 7), Kl(l);
            }, n.then(t, t);
            break l;
          case 3:
            G = 7;
            break l;
          case 4:
            G = 5;
            break l;
          case 7:
            ci(n) ? (G = 0, Sl = null, ri(t)) : (G = 0, Sl = null, oa(l, t, n, 7));
            break;
          case 5:
            var f = null;
            switch (H.tag) {
              case 26:
                f = H.memoizedState;
              case 5:
              case 27:
                var c = H;
                if (!f || Mh(f)) {
                  G = 0, Sl = null;
                  var i = c.sibling;
                  if (i !== null) H = i;
                  else {
                    var h = c.return;
                    h !== null ? (H = h, un(h)) : H = null;
                  }
                  break t;
                }
            }
            G = 0, Sl = null, oa(l, t, n, 5);
            break;
          case 6:
            G = 0, Sl = null, oa(l, t, n, 6);
            break;
          case 8:
            Tc(), L = 6;
            break l;
          default:
            throw Error(b(462));
        }
      }
      Md();
      break;
    } catch (S) {
      fh(l, S);
    }
  while (!0);
  return at = aa = null, O.H = u, O.A = e, C = a, H !== null ? 0 : (x = null, r = 0, ke(), L);
}
function Md() {
  for (; H !== null && !Lh(); )
    sh(H);
}
function sh(l) {
  var t = X0(l.alternate, l, ct);
  l.memoizedProps = l.pendingProps, t === null ? un(l) : H = t;
}
function ri(l) {
  var t = l, a = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = Ti(
        a,
        t,
        t.pendingProps,
        t.type,
        void 0,
        r
      );
      break;
    case 11:
      t = Ti(
        a,
        t,
        t.pendingProps,
        t.type.render,
        t.ref,
        r
      );
      break;
    case 5:
      fc(t);
    default:
      uh(a, t), t = H = th(t, ct), t = X0(a, t, ct);
  }
  l.memoizedProps = l.pendingProps, t === null ? un(l) : H = t;
}
function oa(l, t, a, u) {
  at = aa = null, fc(t), Ta = null, Mu = 0;
  var e = t.return;
  try {
    if (vd(
      l,
      e,
      t,
      a,
      r
    )) {
      L = 1, Be(
        l,
        Hl(a, l.current)
      ), H = null;
      return;
    }
  } catch (n) {
    if (e !== null) throw H = e, n;
    L = 1, Be(
      l,
      Hl(a, l.current)
    ), H = null;
    return;
  }
  t.flags & 32768 ? (Y || u === 1 ? l = !0 : pa || r & 536870912 ? l = !1 : (kl = l = !0, (u === 2 || u === 3 || u === 6) && (u = rl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hh(t, l)) : un(t);
}
function un(l) {
  var t = l;
  do {
    if (t.flags & 32768) {
      hh(
        t,
        kl
      );
      return;
    }
    l = t.return;
    var a = gd(
      t.alternate,
      t,
      ct
    );
    if (a !== null) {
      H = a;
      return;
    }
    if (t = t.sibling, t !== null) {
      H = t;
      return;
    }
    H = t = l;
  } while (t !== null);
  L === 0 && (L = 5);
}
function hh(l, t) {
  do {
    var a = bd(l.alternate, l);
    if (a !== null) {
      a.flags &= 32767, H = a;
      return;
    }
    if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
      H = l;
      return;
    }
    H = l = a;
  } while (l !== null);
  L = 6, H = null;
}
function Bi(l, t, a, u, e, n, f, c, i, h) {
  var S = O.T, o = p.p;
  try {
    p.p = 2, O.T = null, Dd(
      l,
      t,
      a,
      u,
      o,
      e,
      n,
      f,
      c,
      i,
      h
    );
  } finally {
    O.T = S, p.p = o;
  }
}
function Dd(l, t, a, u, e, n, f, c) {
  do
    Ua();
  while (Gt !== null);
  if (C & 6) throw Error(b(327));
  var i = l.finishedWork;
  if (u = l.finishedLanes, i === null) return null;
  if (l.finishedWork = null, l.finishedLanes = 0, i === l.current) throw Error(b(177));
  l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
  var h = i.lanes | i.childLanes;
  if (h |= Ff, av(
    l,
    u,
    h,
    n,
    f,
    c
  ), l === x && (H = x = null, r = 0), !(i.subtreeFlags & 10256) && !(i.flags & 10256) || te || (te = !0, Of = h, Uf = a, Hd(Ee, function() {
    return Ua(), null;
  })), a = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || a ? (a = O.T, O.T = null, n = p.p, p.p = 2, f = C, C |= 4, yd(l, i), W0(i, l), Wv(Yf, l.containerInfo), Ke = !!Bf, Yf = Bf = null, l.current = i, K0(l, i.alternate, i), Jh(), C = f, p.p = n, O.T = a) : l.current = i, te ? (te = !1, Gt = l, Su = u) : vh(l, h), h = l.pendingLanes, h === 0 && (Dt = null), $h(i.stateNode), Kl(l), t !== null)
    for (e = l.onRecoverableError, i = 0; i < t.length; i++)
      h = t[i], e(h.value, {
        componentStack: h.stack
      });
  return Su & 3 && Ua(), h = l.pendingLanes, u & 4194218 && h & 42 ? l === qf ? gu++ : (gu = 0, qf = l) : gu = 0, _u(0), null;
}
function vh(l, t) {
  (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Gu(t)));
}
function Ua() {
  if (Gt !== null) {
    var l = Gt, t = Of;
    Of = 0;
    var a = ms(Su), u = O.T, e = p.p;
    try {
      if (p.p = 32 > a ? 32 : a, O.T = null, Gt === null)
        var n = !1;
      else {
        a = Uf, Uf = null;
        var f = Gt, c = Su;
        if (Gt = null, Su = 0, C & 6)
          throw Error(b(331));
        var i = C;
        if (C |= 4, P0(f.current), k0(f, f.current, c, a), C = i, _u(0, !1), bl && typeof bl.onPostCommitFiberRoot == "function")
          try {
            bl.onPostCommitFiberRoot(Bu, f);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      p.p = e, O.T = u, vh(l, t);
    }
  }
  return !1;
}
function Yi(l, t, a) {
  t = Hl(a, t), t = mf(l.stateNode, t, 2), l = Tt(l, t, 2), l !== null && (ju(l, 2), Kl(l));
}
function X(l, t, a) {
  if (l.tag === 3)
    Yi(l, l, a);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yi(
          t,
          l,
          a
        );
        break;
      } else if (t.tag === 1) {
        var u = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Dt === null || !Dt.has(u))) {
          l = Hl(a, l), a = R0(2), u = Tt(t, a, 2), u !== null && (N0(
            a,
            u,
            t,
            l
          ), ju(u, 2), Kl(u));
          break;
        }
      }
      t = t.return;
    }
}
function Gn(l, t, a) {
  var u = l.pingCache;
  if (u === null) {
    u = l.pingCache = new Ad();
    var e = /* @__PURE__ */ new Set();
    u.set(t, e);
  } else
    e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
  e.has(a) || (Ac = !0, e.add(a), l = Od.bind(null, l, t, a), t.then(l, l));
}
function Od(l, t, a) {
  var u = l.pingCache;
  u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, x === l && (r & a) === a && (L === 4 || L === 3 && (r & 62914560) === r && 300 > Zl() - Ec ? !(C & 2) && ja(l, 0) : zc |= a, Ya === r && (Ya = 0)), Kl(l);
}
function dh(l, t) {
  t === 0 && (t = vs()), l = Ht(l, t), l !== null && (ju(l, t), Kl(l));
}
function Ud(l) {
  var t = l.memoizedState, a = 0;
  t !== null && (a = t.retryLane), dh(l, a);
}
function qd(l, t) {
  var a = 0;
  switch (l.tag) {
    case 13:
      var u = l.stateNode, e = l.memoizedState;
      e !== null && (a = e.retryLane);
      break;
    case 19:
      u = l.stateNode;
      break;
    case 22:
      u = l.stateNode._retryCache;
      break;
    default:
      throw Error(b(314));
  }
  u !== null && u.delete(t), dh(l, a);
}
function Hd(l, t) {
  return _f(l, t);
}
var Ge = null, ca = null, Nf = !1, xe = !1, xn = !1, Lt = 0;
function Kl(l) {
  l !== ca && l.next === null && (ca === null ? Ge = ca = l : ca = ca.next = l), xe = !0, Nf || (Nf = !0, Nd(Rd));
}
function _u(l, t) {
  if (!xn && xe) {
    xn = !0;
    do
      for (var a = !1, u = Ge; u !== null; ) {
        if (l !== 0) {
          var e = u.pendingLanes;
          if (e === 0) var n = 0;
          else {
            var f = u.suspendedLanes, c = u.pingedLanes;
            n = (1 << 31 - ol(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
          }
          n !== 0 && (a = !0, ji(u, n));
        } else
          n = r, n = Je(
            u,
            u === x ? n : 0
          ), !(n & 3) || Yu(u, n) || (a = !0, ji(u, n));
        u = u.next;
      }
    while (a);
    xn = !1;
  }
}
function Rd() {
  xe = Nf = !1;
  var l = 0;
  Lt !== 0 && (xd() && (l = Lt), Lt = 0);
  for (var t = Zl(), a = null, u = Ge; u !== null; ) {
    var e = u.next, n = yh(u, t);
    n === 0 ? (u.next = null, a === null ? Ge = e : a.next = e, e === null && (ca = a)) : (a = u, (l !== 0 || n & 3) && (xe = !0)), u = e;
  }
  _u(l);
}
function yh(l, t) {
  for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
    var f = 31 - ol(n), c = 1 << f, i = e[f];
    i === -1 ? (!(c & a) || c & u) && (e[f] = tv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
  }
  if (t = x, a = r, a = Je(
    l,
    l === t ? a : 0
  ), u = l.callbackNode, a === 0 || l === t && G === 2 || l.cancelPendingCommit !== null)
    return u !== null && u !== null && mn(u), l.callbackNode = null, l.callbackPriority = 0;
  if (!(a & 3) || Yu(l, a)) {
    if (t = a & -a, t === l.callbackPriority) return t;
    switch (u !== null && mn(u), ms(a)) {
      case 2:
      case 8:
        a = is;
        break;
      case 32:
        a = Ee;
        break;
      case 268435456:
        a = ss;
        break;
      default:
        a = Ee;
    }
    return u = mh.bind(null, l), a = _f(a, u), l.callbackPriority = t, l.callbackNode = a, t;
  }
  return u !== null && u !== null && mn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
}
function mh(l, t) {
  var a = l.callbackNode;
  if (Ua() && l.callbackNode !== a)
    return null;
  var u = r;
  return u = Je(
    l,
    l === x ? u : 0
  ), u === 0 ? null : (nh(l, u, t), yh(l, Zl()), l.callbackNode != null && l.callbackNode === a ? mh.bind(null, l) : null);
}
function ji(l, t) {
  if (Ua()) return null;
  nh(l, t, !0);
}
function Nd(l) {
  Zd(function() {
    C & 6 ? _f(cs, l) : l();
  });
}
function Mc() {
  return Lt === 0 && (Lt = hs()), Lt;
}
function Qi(l) {
  return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ce("" + l);
}
function Xi(l, t) {
  var a = t.ownerDocument.createElement("input");
  return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
}
function rd(l, t, a, u, e) {
  if (t === "submit" && a && a.stateNode === e) {
    var n = Qi(
      (e[dl] || null).action
    ), f = u.submitter;
    f && (t = (t = f[dl] || null) ? Qi(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
    var c = new we(
      "action",
      "action",
      null,
      u,
      e
    );
    l.push({
      event: c,
      listeners: [
        {
          instance: null,
          listener: function() {
            if (u.defaultPrevented) {
              if (Lt !== 0) {
                var i = f ? Xi(e, f) : new FormData(e);
                df(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  null,
                  i
                );
              }
            } else
              typeof n == "function" && (c.preventDefault(), i = f ? Xi(e, f) : new FormData(e), df(
                a,
                {
                  pending: !0,
                  data: i,
                  method: e.method,
                  action: n
                },
                n,
                i
              ));
          },
          currentTarget: e
        }
      ]
    });
  }
}
for (var pn = 0; pn < ui.length; pn++) {
  var Zn = ui[pn], Bd = Zn.toLowerCase(), Yd = Zn[0].toUpperCase() + Zn.slice(1);
  Xl(
    Bd,
    "on" + Yd
  );
}
Xl(Qs, "onAnimationEnd");
Xl(Xs, "onAnimationIteration");
Xl(Gs, "onAnimationStart");
Xl("dblclick", "onDoubleClick");
Xl("focusin", "onFocus");
Xl("focusout", "onBlur");
Xl(kv, "onTransitionRun");
Xl($v, "onTransitionStart");
Xl(Iv, "onTransitionCancel");
Xl(xs, "onTransitionEnd");
Ha("onMouseEnter", ["mouseout", "mouseover"]);
Ha("onMouseLeave", ["mouseout", "mouseover"]);
Ha("onPointerEnter", ["pointerout", "pointerover"]);
Ha("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$t("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ou = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
  " "
), jd = new Set(
  "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ou)
);
function Sh(l, t) {
  t = (t & 4) !== 0;
  for (var a = 0; a < l.length; a++) {
    var u = l[a], e = u.event;
    u = u.listeners;
    l: {
      var n = void 0;
      if (t)
        for (var f = u.length - 1; 0 <= f; f--) {
          var c = u[f], i = c.instance, h = c.currentTarget;
          if (c = c.listener, i !== n && e.isPropagationStopped())
            break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (S) {
            re(S);
          }
          e.currentTarget = null, n = i;
        }
      else
        for (f = 0; f < u.length; f++) {
          if (c = u[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
            break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (S) {
            re(S);
          }
          e.currentTarget = null, n = i;
        }
    }
  }
}
function N(l, t) {
  var a = t[In];
  a === void 0 && (a = t[In] = /* @__PURE__ */ new Set());
  var u = l + "__bubble";
  a.has(u) || (gh(t, l, 2, !1), a.add(u));
}
function _n(l, t, a) {
  var u = 0;
  t && (u |= 4), gh(
    a,
    l,
    u,
    t
  );
}
var ae = "_reactListening" + Math.random().toString(36).slice(2);
function Dc(l) {
  if (!l[ae]) {
    l[ae] = !0, gs.forEach(function(a) {
      a !== "selectionchange" && (jd.has(a) || _n(a, !1, l), _n(a, !0, l));
    });
    var t = l.nodeType === 9 ? l : l.ownerDocument;
    t === null || t[ae] || (t[ae] = !0, _n("selectionchange", !1, t));
  }
}
function gh(l, t, a, u) {
  switch (Hh(t)) {
    case 2:
      var e = f1;
      break;
    case 8:
      e = c1;
      break;
    default:
      e = Hc;
  }
  a = e.bind(
    null,
    t,
    a,
    l
  ), e = void 0, !af || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
    capture: !0,
    passive: e
  }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
    passive: e
  }) : l.addEventListener(t, a, !1);
}
function Vn(l, t, a, u, e) {
  var n = u;
  if (!(t & 1) && !(t & 2) && u !== null)
    l: for (; ; ) {
      if (u === null) return;
      var f = u.tag;
      if (f === 3 || f === 4) {
        var c = u.stateNode.containerInfo;
        if (c === e || c.nodeType === 8 && c.parentNode === e)
          break;
        if (f === 4)
          for (f = u.return; f !== null; ) {
            var i = f.tag;
            if ((i === 3 || i === 4) && (i = f.stateNode.containerInfo, i === e || i.nodeType === 8 && i.parentNode === e))
              return;
            f = f.return;
          }
        for (; c !== null; ) {
          if (f = xt(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            u = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      u = u.return;
    }
  Ds(function() {
    var h = n, S = Kf(a), o = [];
    l: {
      var y = ps.get(l);
      if (y !== void 0) {
        var m = we, A = l;
        switch (l) {
          case "keypress":
            if (se(a) === 0) break l;
          case "keydown":
          case "keyup":
            m = qv;
            break;
          case "focusin":
            A = "focus", m = An;
            break;
          case "focusout":
            A = "blur", m = An;
            break;
          case "beforeblur":
          case "afterblur":
            m = An;
            break;
          case "click":
            if (a.button === 2) break l;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Lc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Sv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Nv;
            break;
          case Qs:
          case Xs:
          case Gs:
            m = ov;
            break;
          case xs:
            m = Bv;
            break;
          case "scroll":
          case "scrollend":
            m = yv;
            break;
          case "wheel":
            m = jv;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = wc;
            break;
          case "toggle":
          case "beforetoggle":
            m = Xv;
        }
        var z = (t & 4) !== 0, D = !z && (l === "scroll" || l === "scrollend"), v = z ? y !== null ? y + "Capture" : null : y;
        z = [];
        for (var s = h, d; s !== null; ) {
          var g = s;
          if (d = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || d === null || v === null || (g = Au(s, v), g != null && z.push(
            Uu(s, g, d)
          )), D) break;
          s = s.return;
        }
        0 < z.length && (y = new m(
          y,
          A,
          null,
          a,
          S
        ), o.push({ event: y, listeners: z }));
      }
    }
    if (!(t & 7)) {
      l: {
        if (y = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", y && a !== tf && (A = a.relatedTarget || a.fromElement) && (xt(A) || A[Ga]))
          break l;
        if ((m || y) && (y = S.window === S ? S : (y = S.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (A = a.relatedTarget || a.toElement, m = h, A = A ? xt(A) : null, A !== null && (D = Xa(A), z = A.tag, A !== D || z !== 5 && z !== 27 && z !== 6) && (A = null)) : (m = null, A = h), m !== A)) {
          if (z = Lc, g = "onMouseLeave", v = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (z = wc, g = "onPointerLeave", v = "onPointerEnter", s = "pointer"), D = m == null ? y : lu(m), d = A == null ? y : lu(A), y = new z(
            g,
            s + "leave",
            m,
            a,
            S
          ), y.target = D, y.relatedTarget = d, g = null, xt(S) === h && (z = new z(
            v,
            s + "enter",
            A,
            a,
            S
          ), z.target = d, z.relatedTarget = D, g = z), D = g, m && A)
            t: {
              for (z = m, v = A, s = 0, d = z; d; d = ea(d))
                s++;
              for (d = 0, g = v; g; g = ea(g))
                d++;
              for (; 0 < s - d; )
                z = ea(z), s--;
              for (; 0 < d - s; )
                v = ea(v), d--;
              for (; s--; ) {
                if (z === v || v !== null && z === v.alternate)
                  break t;
                z = ea(z), v = ea(v);
              }
              z = null;
            }
          else z = null;
          m !== null && Gi(
            o,
            y,
            m,
            z,
            !1
          ), A !== null && D !== null && Gi(
            o,
            D,
            A,
            z,
            !0
          );
        }
      }
      l: {
        if (y = h ? lu(h) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file")
          var E = $c;
        else if (kc(y))
          if (Ns)
            E = Jv;
          else {
            E = Kv;
            var q = Cv;
          }
        else
          m = y.nodeName, !m || m.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? h && Cf(h.elementType) && (E = $c) : E = Lv;
        if (E && (E = E(l, h))) {
          Rs(
            o,
            E,
            a,
            S
          );
          break l;
        }
        q && q(l, y, h), l === "focusout" && h && y.type === "number" && h.memoizedProps.value != null && lf(y, "number", y.value);
      }
      switch (q = h ? lu(h) : window, l) {
        case "focusin":
          (kc(q) || q.contentEditable === "true") && (da = q, uf = h, eu = null);
          break;
        case "focusout":
          eu = uf = da = null;
          break;
        case "mousedown":
          ef = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ef = !1, ai(o, a, S);
          break;
        case "selectionchange":
          if (Fv) break;
        case "keydown":
        case "keyup":
          ai(o, a, S);
      }
      var T;
      if (wf)
        l: {
          switch (l) {
            case "compositionstart":
              var M = "onCompositionStart";
              break l;
            case "compositionend":
              M = "onCompositionEnd";
              break l;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break l;
          }
          M = void 0;
        }
      else
        va ? qs(l, a) && (M = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (M = "onCompositionStart");
      M && (Us && a.locale !== "ko" && (va || M !== "onCompositionStart" ? M === "onCompositionEnd" && va && (T = Os()) : (At = S, Lf = "value" in At ? At.value : At.textContent, va = !0)), q = pe(h, M), 0 < q.length && (M = new Jc(
        M,
        l,
        null,
        a,
        S
      ), o.push({ event: M, listeners: q }), T ? M.data = T : (T = Hs(a), T !== null && (M.data = T)))), (T = xv ? pv(l, a) : Zv(l, a)) && (M = pe(h, "onBeforeInput"), 0 < M.length && (q = new Jc(
        "onBeforeInput",
        "beforeinput",
        null,
        a,
        S
      ), o.push({
        event: q,
        listeners: M
      }), q.data = T)), rd(
        o,
        l,
        h,
        a,
        S
      );
    }
    Sh(o, t);
  });
}
function Uu(l, t, a) {
  return {
    instance: l,
    listener: t,
    currentTarget: a
  };
}
function pe(l, t) {
  for (var a = t + "Capture", u = []; l !== null; ) {
    var e = l, n = e.stateNode;
    e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Au(l, a), e != null && u.unshift(
      Uu(l, e, n)
    ), e = Au(l, t), e != null && u.push(
      Uu(l, e, n)
    )), l = l.return;
  }
  return u;
}
function ea(l) {
  if (l === null) return null;
  do
    l = l.return;
  while (l && l.tag !== 5 && l.tag !== 27);
  return l || null;
}
function Gi(l, t, a, u, e) {
  for (var n = t._reactName, f = []; a !== null && a !== u; ) {
    var c = a, i = c.alternate, h = c.stateNode;
    if (c = c.tag, i !== null && i === u) break;
    c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = Au(a, n), h != null && f.unshift(
      Uu(a, h, i)
    )) : e || (h = Au(a, n), h != null && f.push(
      Uu(a, h, i)
    ))), a = a.return;
  }
  f.length !== 0 && l.push({ event: t, listeners: f });
}
var Qd = /\r\n?/g, Xd = /\u0000|\uFFFD/g;
function xi(l) {
  return (typeof l == "string" ? l : "" + l).replace(Qd, `
`).replace(Xd, "");
}
function bh(l, t) {
  return t = xi(t), xi(l) === t;
}
function en() {
}
function j(l, t, a, u, e, n) {
  switch (a) {
    case "children":
      typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Ra(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Ra(l, "" + u);
      break;
    case "className":
      Wu(l, "class", u);
      break;
    case "tabIndex":
      Wu(l, "tabindex", u);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      Wu(l, a, u);
      break;
    case "style":
      Ms(l, u, n);
      break;
    case "data":
      if (t !== "object") {
        Wu(l, "data", u);
        break;
      }
    case "src":
    case "href":
      if (u === "" && (t !== "a" || a !== "href")) {
        l.removeAttribute(a);
        break;
      }
      if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
        l.removeAttribute(a);
        break;
      }
      u = ce("" + u), l.setAttribute(a, u);
      break;
    case "action":
    case "formAction":
      if (typeof u == "function") {
        l.setAttribute(
          a,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof n == "function" && (a === "formAction" ? (t !== "input" && j(l, t, "name", e.name, e, null), j(
          l,
          t,
          "formEncType",
          e.formEncType,
          e,
          null
        ), j(
          l,
          t,
          "formMethod",
          e.formMethod,
          e,
          null
        ), j(
          l,
          t,
          "formTarget",
          e.formTarget,
          e,
          null
        )) : (j(l, t, "encType", e.encType, e, null), j(l, t, "method", e.method, e, null), j(l, t, "target", e.target, e, null)));
      if (u == null || typeof u == "symbol" || typeof u == "boolean") {
        l.removeAttribute(a);
        break;
      }
      u = ce("" + u), l.setAttribute(a, u);
      break;
    case "onClick":
      u != null && (l.onclick = en);
      break;
    case "onScroll":
      u != null && N("scroll", l);
      break;
    case "onScrollEnd":
      u != null && N("scrollend", l);
      break;
    case "dangerouslySetInnerHTML":
      if (u != null) {
        if (typeof u != "object" || !("__html" in u))
          throw Error(b(61));
        if (a = u.__html, a != null) {
          if (e.children != null) throw Error(b(60));
          l.innerHTML = a;
        }
      }
      break;
    case "multiple":
      l.multiple = u && typeof u != "function" && typeof u != "symbol";
      break;
    case "muted":
      l.muted = u && typeof u != "function" && typeof u != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
        l.removeAttribute("xlink:href");
        break;
      }
      a = ce("" + u), l.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        a
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
      break;
    case "capture":
    case "download":
      u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
      break;
    case "rowSpan":
    case "start":
      u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
      break;
    case "popover":
      N("beforetoggle", l), N("toggle", l), fe(l, "popover", u);
      break;
    case "xlinkActuate":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        u
      );
      break;
    case "xlinkArcrole":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        u
      );
      break;
    case "xlinkRole":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        u
      );
      break;
    case "xlinkShow":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        u
      );
      break;
    case "xlinkTitle":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        u
      );
      break;
    case "xlinkType":
      Ll(
        l,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        u
      );
      break;
    case "xmlBase":
      Ll(
        l,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        u
      );
      break;
    case "xmlLang":
      Ll(
        l,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        u
      );
      break;
    case "xmlSpace":
      Ll(
        l,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        u
      );
      break;
    case "is":
      fe(l, "is", u);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = vv.get(a) || a, fe(l, a, u));
  }
}
function rf(l, t, a, u, e, n) {
  switch (a) {
    case "style":
      Ms(l, u, n);
      break;
    case "dangerouslySetInnerHTML":
      if (u != null) {
        if (typeof u != "object" || !("__html" in u))
          throw Error(b(61));
        if (a = u.__html, a != null) {
          if (e.children != null) throw Error(b(60));
          l.innerHTML = a;
        }
      }
      break;
    case "children":
      typeof u == "string" ? Ra(l, u) : (typeof u == "number" || typeof u == "bigint") && Ra(l, "" + u);
      break;
    case "onScroll":
      u != null && N("scroll", l);
      break;
    case "onScrollEnd":
      u != null && N("scrollend", l);
      break;
    case "onClick":
      u != null && (l.onclick = en);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!bs.hasOwnProperty(a))
        l: {
          if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[dl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
            break l;
          }
          a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : fe(l, a, u);
        }
  }
}
function fl(l, t, a) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      N("error", l), N("load", l);
      var u = !1, e = !1, n;
      for (n in a)
        if (a.hasOwnProperty(n)) {
          var f = a[n];
          if (f != null)
            switch (n) {
              case "src":
                u = !0;
                break;
              case "srcSet":
                e = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, t));
              default:
                j(l, t, n, f, a, null);
            }
        }
      e && j(l, t, "srcSet", a.srcSet, a, null), u && j(l, t, "src", a.src, a, null);
      return;
    case "input":
      N("invalid", l);
      var c = n = f = e = null, i = null, h = null;
      for (u in a)
        if (a.hasOwnProperty(u)) {
          var S = a[u];
          if (S != null)
            switch (u) {
              case "name":
                e = S;
                break;
              case "type":
                f = S;
                break;
              case "checked":
                i = S;
                break;
              case "defaultChecked":
                h = S;
                break;
              case "value":
                n = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(b(137, t));
                break;
              default:
                j(l, t, u, S, a, null);
            }
        }
      zs(
        l,
        n,
        c,
        i,
        h,
        f,
        e,
        !1
      ), Te(l);
      return;
    case "select":
      N("invalid", l), u = f = n = null;
      for (e in a)
        if (a.hasOwnProperty(e) && (c = a[e], c != null))
          switch (e) {
            case "value":
              n = c;
              break;
            case "defaultValue":
              f = c;
              break;
            case "multiple":
              u = c;
            default:
              j(l, t, e, c, a, null);
          }
      t = n, a = f, l.multiple = !!u, t != null ? za(l, !!u, t, !1) : a != null && za(l, !!u, a, !0);
      return;
    case "textarea":
      N("invalid", l), n = e = u = null;
      for (f in a)
        if (a.hasOwnProperty(f) && (c = a[f], c != null))
          switch (f) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              e = c;
              break;
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(b(91));
              break;
            default:
              j(l, t, f, c, a, null);
          }
      Ts(l, u, e, n), Te(l);
      return;
    case "option":
      for (i in a)
        if (a.hasOwnProperty(i) && (u = a[i], u != null))
          switch (i) {
            case "selected":
              l.selected = u && typeof u != "function" && typeof u != "symbol";
              break;
            default:
              j(l, t, i, u, a, null);
          }
      return;
    case "dialog":
      N("cancel", l), N("close", l);
      break;
    case "iframe":
    case "object":
      N("load", l);
      break;
    case "video":
    case "audio":
      for (u = 0; u < Ou.length; u++)
        N(Ou[u], l);
      break;
    case "image":
      N("error", l), N("load", l);
      break;
    case "details":
      N("toggle", l);
      break;
    case "embed":
    case "source":
    case "link":
      N("error", l), N("load", l);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (h in a)
        if (a.hasOwnProperty(h) && (u = a[h], u != null))
          switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b(137, t));
            default:
              j(l, t, h, u, a, null);
          }
      return;
    default:
      if (Cf(t)) {
        for (S in a)
          a.hasOwnProperty(S) && (u = a[S], u !== void 0 && rf(
            l,
            t,
            S,
            u,
            a,
            void 0
          ));
        return;
      }
  }
  for (c in a)
    a.hasOwnProperty(c) && (u = a[c], u != null && j(l, t, c, u, a, null));
}
function Gd(l, t, a, u) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var e = null, n = null, f = null, c = null, i = null, h = null, S = null;
      for (m in a) {
        var o = a[m];
        if (a.hasOwnProperty(m) && o != null)
          switch (m) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = o;
            default:
              u.hasOwnProperty(m) || j(l, t, m, null, u, o);
          }
      }
      for (var y in u) {
        var m = u[y];
        if (o = a[y], u.hasOwnProperty(y) && (m != null || o != null))
          switch (y) {
            case "type":
              n = m;
              break;
            case "name":
              e = m;
              break;
            case "checked":
              h = m;
              break;
            case "defaultChecked":
              S = m;
              break;
            case "value":
              f = m;
              break;
            case "defaultValue":
              c = m;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m != null)
                throw Error(b(137, t));
              break;
            default:
              m !== o && j(
                l,
                t,
                y,
                m,
                u,
                o
              );
          }
      }
      Pn(
        l,
        f,
        c,
        i,
        h,
        S,
        n,
        e
      );
      return;
    case "select":
      m = f = c = y = null;
      for (n in a)
        if (i = a[n], a.hasOwnProperty(n) && i != null)
          switch (n) {
            case "value":
              break;
            case "multiple":
              m = i;
            default:
              u.hasOwnProperty(n) || j(
                l,
                t,
                n,
                null,
                u,
                i
              );
          }
      for (e in u)
        if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
          switch (e) {
            case "value":
              y = n;
              break;
            case "defaultValue":
              c = n;
              break;
            case "multiple":
              f = n;
            default:
              n !== i && j(
                l,
                t,
                e,
                n,
                u,
                i
              );
          }
      t = c, a = f, u = m, y != null ? za(l, !!a, y, !1) : !!u != !!a && (t != null ? za(l, !!a, t, !0) : za(l, !!a, a ? [] : "", !1));
      return;
    case "textarea":
      m = y = null;
      for (c in a)
        if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
          switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              j(l, t, c, null, u, e);
          }
      for (f in u)
        if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
          switch (f) {
            case "value":
              y = e;
              break;
            case "defaultValue":
              m = e;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (e != null) throw Error(b(91));
              break;
            default:
              e !== n && j(l, t, f, e, u, n);
          }
      Es(l, y, m);
      return;
    case "option":
      for (var A in a)
        if (y = a[A], a.hasOwnProperty(A) && y != null && !u.hasOwnProperty(A))
          switch (A) {
            case "selected":
              l.selected = !1;
              break;
            default:
              j(
                l,
                t,
                A,
                null,
                u,
                y
              );
          }
      for (i in u)
        if (y = u[i], m = a[i], u.hasOwnProperty(i) && y !== m && (y != null || m != null))
          switch (i) {
            case "selected":
              l.selected = y && typeof y != "function" && typeof y != "symbol";
              break;
            default:
              j(
                l,
                t,
                i,
                y,
                u,
                m
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var z in a)
        y = a[z], a.hasOwnProperty(z) && y != null && !u.hasOwnProperty(z) && j(l, t, z, null, u, y);
      for (h in u)
        if (y = u[h], m = a[h], u.hasOwnProperty(h) && y !== m && (y != null || m != null))
          switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (y != null)
                throw Error(b(137, t));
              break;
            default:
              j(
                l,
                t,
                h,
                y,
                u,
                m
              );
          }
      return;
    default:
      if (Cf(t)) {
        for (var D in a)
          y = a[D], a.hasOwnProperty(D) && y !== void 0 && !u.hasOwnProperty(D) && rf(
            l,
            t,
            D,
            void 0,
            u,
            y
          );
        for (S in u)
          y = u[S], m = a[S], !u.hasOwnProperty(S) || y === m || y === void 0 && m === void 0 || rf(
            l,
            t,
            S,
            y,
            u,
            m
          );
        return;
      }
  }
  for (var v in a)
    y = a[v], a.hasOwnProperty(v) && y != null && !u.hasOwnProperty(v) && j(l, t, v, null, u, y);
  for (o in u)
    y = u[o], m = a[o], !u.hasOwnProperty(o) || y === m || y == null && m == null || j(l, t, o, y, u, m);
}
var Bf = null, Yf = null;
function Ze(l) {
  return l.nodeType === 9 ? l : l.ownerDocument;
}
function pi(l) {
  switch (l) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function oh(l, t) {
  if (l === 0)
    switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return l === 1 && t === "foreignObject" ? 0 : l;
}
function jf(l, t) {
  return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cn = null;
function xd() {
  var l = window.event;
  return l && l.type === "popstate" ? l === Cn ? !1 : (Cn = l, !0) : (Cn = null, !1);
}
var Ah = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Zi = typeof Promise == "function" ? Promise : void 0, Zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zi < "u" ? function(l) {
  return Zi.resolve(null).then(l).catch(_d);
} : Ah;
function _d(l) {
  setTimeout(function() {
    throw l;
  });
}
function Kn(l, t) {
  var a = t, u = 0;
  do {
    var e = a.nextSibling;
    if (l.removeChild(a), e && e.nodeType === 8)
      if (a = e.data, a === "/$") {
        if (u === 0) {
          l.removeChild(e), ru(t);
          return;
        }
        u--;
      } else a !== "$" && a !== "$?" && a !== "$!" || u++;
    a = e;
  } while (a);
  ru(t);
}
function Qf(l) {
  var t = l.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var a = t;
    switch (t = t.nextSibling, a.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        Qf(a), Vf(a);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (a.rel.toLowerCase() === "stylesheet") continue;
    }
    l.removeChild(a);
  }
}
function Vd(l, t, a, u) {
  for (; l.nodeType === 1; ) {
    var e = a;
    if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
        break;
    } else if (u) {
      if (!l[ou])
        switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
              break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
              break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
              break;
            return l;
          default:
            return l;
        }
    } else if (t === "input" && l.type === "hidden") {
      var n = e.name == null ? null : "" + e.name;
      if (e.type === "hidden" && l.getAttribute("name") === n)
        return l;
    } else return l;
    if (l = Ql(l.nextSibling), l === null) break;
  }
  return null;
}
function Cd(l, t, a) {
  if (t === "") return null;
  for (; l.nodeType !== 3; )
    if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Ql(l.nextSibling), l === null)) return null;
  return l;
}
function Ql(l) {
  for (; l != null; l = l.nextSibling) {
    var t = l.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        break;
      if (t === "/$") return null;
    }
  }
  return l;
}
function _i(l) {
  l = l.previousSibling;
  for (var t = 0; l; ) {
    if (l.nodeType === 8) {
      var a = l.data;
      if (a === "$" || a === "$!" || a === "$?") {
        if (t === 0) return l;
        t--;
      } else a === "/$" && t++;
    }
    l = l.previousSibling;
  }
  return null;
}
function zh(l, t, a) {
  switch (t = Ze(a), l) {
    case "html":
      if (l = t.documentElement, !l) throw Error(b(452));
      return l;
    case "head":
      if (l = t.head, !l) throw Error(b(453));
      return l;
    case "body":
      if (l = t.body, !l) throw Error(b(454));
      return l;
    default:
      throw Error(b(451));
  }
}
var Bl = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Set();
function _e(l) {
  return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
}
var it = p.d;
p.d = {
  f: Kd,
  r: Ld,
  D: Jd,
  C: wd,
  L: Wd,
  m: Fd,
  X: $d,
  S: kd,
  M: Id
};
function Kd() {
  var l = it.f(), t = an();
  return l || t;
}
function Ld(l) {
  var t = xa(l);
  t !== null && t.tag === 5 && t.type === "form" ? z0(t) : it.r(l);
}
var Za = typeof document > "u" ? null : document;
function Eh(l, t, a) {
  var u = Za;
  if (u && typeof t == "string" && t) {
    var e = ql(t);
    e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Vi.has(e) || (Vi.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), fl(t, "link", l), tl(t), u.head.appendChild(t)));
  }
}
function Jd(l) {
  it.D(l), Eh("dns-prefetch", l, null);
}
function wd(l, t) {
  it.C(l, t), Eh("preconnect", l, t);
}
function Wd(l, t, a) {
  it.L(l, t, a);
  var u = Za;
  if (u && l && t) {
    var e = 'link[rel="preload"][as="' + ql(t) + '"]';
    t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ql(
      a.imageSrcSet
    ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ql(
      a.imageSizes
    ) + '"]')) : e += '[href="' + ql(l) + '"]';
    var n = e;
    switch (t) {
      case "style":
        n = Qa(l);
        break;
      case "script":
        n = _a(l);
    }
    Bl.has(n) || (l = Z(
      {
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
        as: t
      },
      a
    ), Bl.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(Vu(n)) || t === "script" && u.querySelector(Cu(n)) || (t = u.createElement("link"), fl(t, "link", l), tl(t), u.head.appendChild(t)));
  }
}
function Fd(l, t) {
  it.m(l, t);
  var a = Za;
  if (a && l) {
    var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ql(u) + '"][href="' + ql(l) + '"]', n = e;
    switch (u) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        n = _a(l);
    }
    if (!Bl.has(n) && (l = Z({ rel: "modulepreload", href: l }, t), Bl.set(n, l), a.querySelector(e) === null)) {
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (a.querySelector(Cu(n)))
            return;
      }
      u = a.createElement("link"), fl(u, "link", l), tl(u), a.head.appendChild(u);
    }
  }
}
function kd(l, t, a) {
  it.S(l, t, a);
  var u = Za;
  if (u && l) {
    var e = Aa(u).hoistableStyles, n = Qa(l);
    t = t || "default";
    var f = e.get(n);
    if (!f) {
      var c = { loading: 0, preload: null };
      if (f = u.querySelector(
        Vu(n)
      ))
        c.loading = 5;
      else {
        l = Z(
          { rel: "stylesheet", href: l, "data-precedence": t },
          a
        ), (a = Bl.get(n)) && Oc(l, a);
        var i = f = u.createElement("link");
        tl(i), fl(i, "link", l), i._p = new Promise(function(h, S) {
          i.onload = h, i.onerror = S;
        }), i.addEventListener("load", function() {
          c.loading |= 1;
        }), i.addEventListener("error", function() {
          c.loading |= 2;
        }), c.loading |= 4, Se(f, t, u);
      }
      f = {
        type: "stylesheet",
        instance: f,
        count: 1,
        state: c
      }, e.set(n, f);
    }
  }
}
function $d(l, t) {
  it.X(l, t);
  var a = Za;
  if (a && l) {
    var u = Aa(a).hoistableScripts, e = _a(l), n = u.get(e);
    n || (n = a.querySelector(Cu(e)), n || (l = Z({ src: l, async: !0 }, t), (t = Bl.get(e)) && Uc(l, t), n = a.createElement("script"), tl(n), fl(n, "link", l), a.head.appendChild(n)), n = {
      type: "script",
      instance: n,
      count: 1,
      state: null
    }, u.set(e, n));
  }
}
function Id(l, t) {
  it.M(l, t);
  var a = Za;
  if (a && l) {
    var u = Aa(a).hoistableScripts, e = _a(l), n = u.get(e);
    n || (n = a.querySelector(Cu(e)), n || (l = Z({ src: l, async: !0, type: "module" }, t), (t = Bl.get(e)) && Uc(l, t), n = a.createElement("script"), tl(n), fl(n, "link", l), a.head.appendChild(n)), n = {
      type: "script",
      instance: n,
      count: 1,
      state: null
    }, u.set(e, n));
  }
}
function Ci(l, t, a, u) {
  var e = (e = zt.current) ? _e(e) : null;
  if (!e) throw Error(b(446));
  switch (l) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Qa(a.href), a = Aa(
        e
      ).hoistableStyles, u = a.get(t), u || (u = {
        type: "style",
        instance: null,
        count: 0,
        state: null
      }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
        l = Qa(a.href);
        var n = Aa(
          e
        ).hoistableStyles, f = n.get(l);
        if (f || (e = e.ownerDocument || e, f = {
          type: "stylesheet",
          instance: null,
          count: 0,
          state: { loading: 0, preload: null }
        }, n.set(l, f), (n = e.querySelector(
          Vu(l)
        )) && !n._p && (f.instance = n, f.state.loading = 5), Bl.has(l) || (a = {
          rel: "preload",
          as: "style",
          href: a.href,
          crossOrigin: a.crossOrigin,
          integrity: a.integrity,
          media: a.media,
          hrefLang: a.hrefLang,
          referrerPolicy: a.referrerPolicy
        }, Bl.set(l, a), n || Pd(
          e,
          l,
          a,
          f.state
        ))), t && u === null)
          throw Error(b(528, ""));
        return f;
      }
      if (t && u !== null)
        throw Error(b(529, ""));
      return null;
    case "script":
      return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(a), a = Aa(
        e
      ).hoistableScripts, u = a.get(t), u || (u = {
        type: "script",
        instance: null,
        count: 0,
        state: null
      }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
    default:
      throw Error(b(444, l));
  }
}
function Qa(l) {
  return 'href="' + ql(l) + '"';
}
function Vu(l) {
  return 'link[rel="stylesheet"][' + l + "]";
}
function Th(l) {
  return Z({}, l, {
    "data-precedence": l.precedence,
    precedence: null
  });
}
function Pd(l, t, a, u) {
  l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
    return u.loading |= 1;
  }), t.addEventListener("error", function() {
    return u.loading |= 2;
  }), fl(t, "link", a), tl(t), l.head.appendChild(t));
}
function _a(l) {
  return '[src="' + ql(l) + '"]';
}
function Cu(l) {
  return "script[async]" + l;
}
function Ki(l, t, a) {
  if (t.count++, t.instance === null)
    switch (t.type) {
      case "style":
        var u = l.querySelector(
          'style[data-href~="' + ql(a.href) + '"]'
        );
        if (u)
          return t.instance = u, tl(u), u;
        var e = Z({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return u = (l.ownerDocument || l).createElement(
          "style"
        ), tl(u), fl(u, "style", e), Se(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        e = Qa(a.href);
        var n = l.querySelector(
          Vu(e)
        );
        if (n)
          return t.state.loading |= 4, t.instance = n, tl(n), n;
        u = Th(a), (e = Bl.get(e)) && Oc(u, e), n = (l.ownerDocument || l).createElement("link"), tl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), fl(n, "link", u), t.state.loading |= 4, Se(n, a.precedence, l), t.instance = n;
      case "script":
        return n = _a(a.src), (e = l.querySelector(
          Cu(n)
        )) ? (t.instance = e, tl(e), e) : (u = a, (e = Bl.get(n)) && (u = Z({}, a), Uc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), tl(e), fl(e, "link", u), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(b(443, t.type));
    }
  else
    t.type === "stylesheet" && !(t.state.loading & 4) && (u = t.instance, t.state.loading |= 4, Se(u, a.precedence, l));
  return t.instance;
}
function Se(l, t, a) {
  for (var u = a.querySelectorAll(
    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
  ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
    var c = u[f];
    if (c.dataset.precedence === t) n = c;
    else if (n !== e) break;
  }
  n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
}
function Oc(l, t) {
  l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
}
function Uc(l, t) {
  l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
}
var ge = null;
function Li(l, t, a) {
  if (ge === null) {
    var u = /* @__PURE__ */ new Map(), e = ge = /* @__PURE__ */ new Map();
    e.set(a, u);
  } else
    e = ge, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
  if (u.has(l)) return u;
  for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
    var n = a[e];
    if (!(n[ou] || n[cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
      var f = n.getAttribute(t) || "";
      f = l + f;
      var c = u.get(f);
      c ? c.push(n) : u.set(f, [n]);
    }
  }
  return u;
}
function Ji(l, t, a) {
  l = l.ownerDocument || l, l.head.insertBefore(
    a,
    t === "title" ? l.querySelector("head > title") : null
  );
}
function l1(l, t, a) {
  if (a === 1 || t.itemProp != null) return !1;
  switch (l) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
        break;
      return !0;
    case "link":
      if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
        break;
      switch (t.rel) {
        case "stylesheet":
          return l = t.disabled, typeof t.precedence == "string" && l == null;
        default:
          return !0;
      }
    case "script":
      if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
        return !0;
  }
  return !1;
}
function Mh(l) {
  return !(l.type === "stylesheet" && !(l.state.loading & 3));
}
var qu = null;
function t1() {
}
function a1(l, t, a) {
  if (qu === null) throw Error(b(475));
  var u = qu;
  if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && !(t.state.loading & 4)) {
    if (t.instance === null) {
      var e = Qa(a.href), n = l.querySelector(
        Vu(e)
      );
      if (n) {
        l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Ve.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, tl(n);
        return;
      }
      n = l.ownerDocument || l, a = Th(a), (e = Bl.get(e)) && Oc(a, e), n = n.createElement("link"), tl(n);
      var f = n;
      f._p = new Promise(function(c, i) {
        f.onload = c, f.onerror = i;
      }), fl(n, "link", a), t.instance = n;
    }
    u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && !(t.state.loading & 3) && (u.count++, t = Ve.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
  }
}
function u1() {
  if (qu === null) throw Error(b(475));
  var l = qu;
  return l.stylesheets && l.count === 0 && Xf(l, l.stylesheets), 0 < l.count ? function(t) {
    var a = setTimeout(function() {
      if (l.stylesheets && Xf(l, l.stylesheets), l.unsuspend) {
        var u = l.unsuspend;
        l.unsuspend = null, u();
      }
    }, 6e4);
    return l.unsuspend = t, function() {
      l.unsuspend = null, clearTimeout(a);
    };
  } : null;
}
function Ve() {
  if (this.count--, this.count === 0) {
    if (this.stylesheets) Xf(this, this.stylesheets);
    else if (this.unsuspend) {
      var l = this.unsuspend;
      this.unsuspend = null, l();
    }
  }
}
var Ce = null;
function Xf(l, t) {
  l.stylesheets = null, l.unsuspend !== null && (l.count++, Ce = /* @__PURE__ */ new Map(), t.forEach(e1, l), Ce = null, Ve.call(l));
}
function e1(l, t) {
  if (!(t.state.loading & 4)) {
    var a = Ce.get(l);
    if (a) var u = a.get(null);
    else {
      a = /* @__PURE__ */ new Map(), Ce.set(l, a);
      for (var e = l.querySelectorAll(
        "link[data-precedence],style[data-precedence]"
      ), n = 0; n < e.length; n++) {
        var f = e[n];
        (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
      }
      u && a.set(null, u);
    }
    e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Ve.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
  }
}
var Hu = {
  $$typeof: Il,
  Provider: null,
  Consumer: null,
  _currentValue: Zt,
  _currentValue2: Zt,
  _threadCount: 0
};
function n1(l, t, a, u, e, n, f, c) {
  this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Sn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sn(0), this.hiddenUpdates = Sn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
}
function Dh(l, t, a, u, e, n, f, c, i, h, S, o) {
  return l = new n1(
    l,
    t,
    a,
    f,
    c,
    i,
    h,
    o
  ), t = 1, n === !0 && (t |= 24), n = Rl(3, null, null, t), l.current = n, n.stateNode = l, t = lc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
    element: u,
    isDehydrated: a,
    cache: t
  }, Sc(n), l;
}
function Oh(l) {
  return l ? (l = Sa, l) : Sa;
}
function Uh(l, t, a, u, e, n) {
  e = Oh(e), u.context === null ? u.context = e : u.pendingContext = e, u = Et(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Tt(l, u, t), a !== null && (hl(a, l, t), hu(a, l, t));
}
function wi(l, t) {
  if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
    var a = l.retryLane;
    l.retryLane = a !== 0 && a < t ? a : t;
  }
}
function qc(l, t) {
  wi(l, t), (l = l.alternate) && wi(l, t);
}
function qh(l) {
  if (l.tag === 13) {
    var t = Ht(l, 67108864);
    t !== null && hl(t, l, 67108864), qc(l, 67108864);
  }
}
var Ke = !0;
function f1(l, t, a, u) {
  var e = O.T;
  O.T = null;
  var n = p.p;
  try {
    p.p = 2, Hc(l, t, a, u);
  } finally {
    p.p = n, O.T = e;
  }
}
function c1(l, t, a, u) {
  var e = O.T;
  O.T = null;
  var n = p.p;
  try {
    p.p = 8, Hc(l, t, a, u);
  } finally {
    p.p = n, O.T = e;
  }
}
function Hc(l, t, a, u) {
  if (Ke) {
    var e = Gf(u);
    if (e === null)
      Vn(
        l,
        t,
        u,
        Le,
        a
      ), Wi(l, u);
    else if (s1(
      e,
      l,
      t,
      a,
      u
    ))
      u.stopPropagation();
    else if (Wi(l, u), t & 4 && -1 < i1.indexOf(l)) {
      for (; e !== null; ) {
        var n = xa(e);
        if (n !== null)
          switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = Qt(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - ol(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  Kl(n), !(C & 6) && (Qe = Zl() + 500, _u(0));
                }
              }
              break;
            case 13:
              c = Ht(n, 2), c !== null && hl(c, n, 2), an(), qc(n, 2);
          }
        if (n = Gf(u), n === null && Vn(
          l,
          t,
          u,
          Le,
          a
        ), n === e) break;
        e = n;
      }
      e !== null && u.stopPropagation();
    } else
      Vn(
        l,
        t,
        u,
        null,
        a
      );
  }
}
function Gf(l) {
  return l = Kf(l), Rc(l);
}
var Le = null;
function Rc(l) {
  if (Le = null, l = xt(l), l !== null) {
    var t = Xa(l);
    if (t === null) l = null;
    else {
      var a = t.tag;
      if (a === 13) {
        if (l = ns(t), l !== null) return l;
        l = null;
      } else if (a === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        l = null;
      } else t !== l && (l = null);
    }
  }
  return Le = l, null;
}
function Hh(l) {
  switch (l) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (wh()) {
        case cs:
          return 2;
        case is:
          return 8;
        case Ee:
        case Wh:
          return 32;
        case ss:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var xf = !1, Ot = null, Ut = null, qt = null, Ru = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), bt = [], i1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
  " "
);
function Wi(l, t) {
  switch (l) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ru.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nu.delete(t.pointerId);
  }
}
function ka(l, t, a, u, e, n) {
  return l === null || l.nativeEvent !== n ? (l = {
    blockedOn: t,
    domEventName: a,
    eventSystemFlags: u,
    nativeEvent: n,
    targetContainers: [e]
  }, t !== null && (t = xa(t), t !== null && qh(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
}
function s1(l, t, a, u, e) {
  switch (t) {
    case "focusin":
      return Ot = ka(
        Ot,
        l,
        t,
        a,
        u,
        e
      ), !0;
    case "dragenter":
      return Ut = ka(
        Ut,
        l,
        t,
        a,
        u,
        e
      ), !0;
    case "mouseover":
      return qt = ka(
        qt,
        l,
        t,
        a,
        u,
        e
      ), !0;
    case "pointerover":
      var n = e.pointerId;
      return Ru.set(
        n,
        ka(
          Ru.get(n) || null,
          l,
          t,
          a,
          u,
          e
        )
      ), !0;
    case "gotpointercapture":
      return n = e.pointerId, Nu.set(
        n,
        ka(
          Nu.get(n) || null,
          l,
          t,
          a,
          u,
          e
        )
      ), !0;
  }
  return !1;
}
function Rh(l) {
  var t = xt(l.target);
  if (t !== null) {
    var a = Xa(t);
    if (a !== null) {
      if (t = a.tag, t === 13) {
        if (t = ns(a), t !== null) {
          l.blockedOn = t, uv(l.priority, function() {
            if (a.tag === 13) {
              var u = Al(), e = Ht(a, u);
              e !== null && hl(e, a, u), qc(a, u);
            }
          });
          return;
        }
      } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  l.blockedOn = null;
}
function be(l) {
  if (l.blockedOn !== null) return !1;
  for (var t = l.targetContainers; 0 < t.length; ) {
    var a = Gf(l.nativeEvent);
    if (a === null) {
      a = l.nativeEvent;
      var u = new a.constructor(
        a.type,
        a
      );
      tf = u, a.target.dispatchEvent(u), tf = null;
    } else
      return t = xa(a), t !== null && qh(t), l.blockedOn = a, !1;
    t.shift();
  }
  return !0;
}
function Fi(l, t, a) {
  be(l) && a.delete(t);
}
function h1() {
  xf = !1, Ot !== null && be(Ot) && (Ot = null), Ut !== null && be(Ut) && (Ut = null), qt !== null && be(qt) && (qt = null), Ru.forEach(Fi), Nu.forEach(Fi);
}
function ue(l, t) {
  l.blockedOn === t && (l.blockedOn = null, xf || (xf = !0, I.unstable_scheduleCallback(
    I.unstable_NormalPriority,
    h1
  )));
}
var ee = null;
function ki(l) {
  ee !== l && (ee = l, I.unstable_scheduleCallback(
    I.unstable_NormalPriority,
    function() {
      ee === l && (ee = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], e = l[t + 2];
        if (typeof u != "function") {
          if (Rc(u || a) === null)
            continue;
          break;
        }
        var n = xa(a);
        n !== null && (l.splice(t, 3), t -= 3, df(
          n,
          {
            pending: !0,
            data: e,
            method: a.method,
            action: u
          },
          u,
          e
        ));
      }
    }
  ));
}
function ru(l) {
  function t(i) {
    return ue(i, l);
  }
  Ot !== null && ue(Ot, l), Ut !== null && ue(Ut, l), qt !== null && ue(qt, l), Ru.forEach(t), Nu.forEach(t);
  for (var a = 0; a < bt.length; a++) {
    var u = bt[a];
    u.blockedOn === l && (u.blockedOn = null);
  }
  for (; 0 < bt.length && (a = bt[0], a.blockedOn === null); )
    Rh(a), a.blockedOn === null && bt.shift();
  if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
    for (u = 0; u < a.length; u += 3) {
      var e = a[u], n = a[u + 1], f = e[dl] || null;
      if (typeof n == "function")
        f || ki(a);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, f = n[dl] || null)
            c = f.formAction;
          else if (Rc(e) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), ki(a);
      }
    }
}
function Nc(l) {
  this._internalRoot = l;
}
nn.prototype.render = Nc.prototype.render = function(l) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  var a = t.current, u = Al();
  Uh(a, u, l, t, null, null);
};
nn.prototype.unmount = Nc.prototype.unmount = function() {
  var l = this._internalRoot;
  if (l !== null) {
    this._internalRoot = null;
    var t = l.containerInfo;
    l.tag === 0 && Ua(), Uh(l.current, 2, null, l, null, null), an(), t[Ga] = null;
  }
};
function nn(l) {
  this._internalRoot = l;
}
nn.prototype.unstable_scheduleHydration = function(l) {
  if (l) {
    var t = Ss();
    l = { blockedOn: null, target: l, priority: t };
    for (var a = 0; a < bt.length && t !== 0 && t < bt[a].priority; a++) ;
    bt.splice(a, 0, l), a === 0 && Rh(l);
  }
};
var $i = ls.version;
if ($i !== "19.0.0")
  throw Error(
    b(
      527,
      $i,
      "19.0.0"
    )
  );
p.findDOMNode = function(l) {
  var t = l._reactInternals;
  if (t === void 0)
    throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
  return l = Kh(t), l = l !== null ? fs(l) : null, l = l === null ? null : l.stateNode, l;
};
var v1 = {
  bundleType: 0,
  version: "19.0.0",
  rendererPackageName: "react-dom",
  currentDispatcherRef: O,
  findFiberByHostInstance: xt,
  reconcilerVersion: "19.0.0"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ne = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ne.isDisabled && ne.supportsFiber)
    try {
      Bu = ne.inject(
        v1
      ), bl = ne;
    } catch {
    }
}
exports.createRoot = function(l, t) {
  if (!ts(l)) throw Error(b(299));
  var a = !1, u = "", e = U0, n = q0, f = H0, c = null;
  return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Dh(
    l,
    1,
    !1,
    null,
    null,
    a,
    u,
    e,
    n,
    f,
    c,
    null
  ), l[Ga] = t.current, Dc(
    l.nodeType === 8 ? l.parentNode : l
  ), new Nc(t);
};
exports.hydrateRoot = function(l, t, a) {
  if (!ts(l)) throw Error(b(299));
  var u = !1, e = "", n = U0, f = q0, c = H0, i = null, h = null;
  return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (h = a.formState)), t = Dh(
    l,
    1,
    !0,
    t,
    a ?? null,
    u,
    e,
    n,
    f,
    c,
    i,
    h
  ), t.context = Oh(null), a = t.current, u = Al(), e = Et(u), e.callback = null, Tt(a, e, u), t.current.lanes = u, ju(t, u), Kl(t), l[Ga] = t.current, Dc(l), new nn(t);
};
exports.version = "19.0.0";
const d1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), y1 = /* @__PURE__ */ Yh(d1);
var Ii;
function m1() {
  if (Ii) return cn.exports;
  Ii = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), cn.exports = y1, cn.exports;
}
var S1 = m1();
const g1 = /* @__PURE__ */ Pi(S1), b1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", o1 = ({ onQuestionClick: l }) => {
  const t = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ R.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ R.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ R.jsx("ul", { children: t.map((a, u) => /* @__PURE__ */ R.jsx("li", { onClick: () => l(a), children: a }, u)) })
  ] });
}, A1 = ({ message: l }) => /* @__PURE__ */ R.jsx("div", { className: `message ${l.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ R.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ R.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: l.text } }) }) }), Nh = () => {
  const [l, t] = Ku([]), [a, u] = Ku(""), [e, n] = Ku(!1), [f, c] = Ku(!0), i = Bh(null);
  rc(() => {
    h();
  }, []);
  const h = async () => {
    try {
      const A = await getChatHistory();
      if (A.STATUS) {
        const z = A.RSP.map((D) => ({
          id: D.id,
          text: D.message,
          isUser: D.role === "user",
          status: "sent",
          timestamp: new Date(D.created_at)
        }));
        t(z);
      }
    } catch (A) {
      console.error("Error cargando historial:", A);
    } finally {
      c(!1);
    }
  }, S = () => {
    if (i.current) {
      const { scrollHeight: A } = i.current;
      i.current.scrollTo({
        top: A,
        behavior: "smooth"
      });
    }
  };
  rc(() => {
    S();
  }, [l, e]);
  const o = async (A = a) => {
    if (A.trim() === "") return;
    const z = {
      id: Date.now().toString(),
      text: A,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    t((D) => [...D, z]), u(""), n(!0);
    try {
      const D = await sendMessageApi({ message: A });
      if (D.STATUS) {
        const v = {
          id: (Date.now() + 1).toString(),
          text: D.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        t((s) => [...s, v]);
      } else {
        u(A);
        const v = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        t((s) => [...s, v]);
      }
    } catch {
      t(
        (v) => v.map(
          (s) => s.id === z.id ? { ...s, status: "error" } : s
        )
      );
    } finally {
      n(!1);
    }
  }, y = (A) => {
    A.preventDefault(), o();
  }, m = (A) => {
    o(A);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ R.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx("img", { src: b1, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ R.jsx("div", { ref: i, className: "messages-container", children: f ? /* @__PURE__ */ R.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ R.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ R.jsx("div", { className: "dot" }),
        /* @__PURE__ */ R.jsx("div", { className: "dot" }),
        /* @__PURE__ */ R.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ R.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      l.length === 0 && /* @__PURE__ */ R.jsx(o1, { onQuestionClick: m }),
      l.map((A) => /* @__PURE__ */ R.jsx(A1, { message: A }, A.id)),
      e && /* @__PURE__ */ R.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ R.jsx("span", {}),
        /* @__PURE__ */ R.jsx("span", {}),
        /* @__PURE__ */ R.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ R.jsxs("form", { onSubmit: y, className: "message-input", children: [
      /* @__PURE__ */ R.jsx(
        "input",
        {
          type: "text",
          value: a,
          onChange: (A) => u(A.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: e || f,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: e || f || a.trim() === "",
          children: /* @__PURE__ */ R.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
};
window.ChatBot = (l) => {
  const t = document.getElementById(l);
  t && g1.createRoot(t).render(/* @__PURE__ */ R.jsx(Nh, {}));
};
function E1() {
  return /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ R.jsx(Nh, {}) }) });
}
export {
  E1 as default
};
