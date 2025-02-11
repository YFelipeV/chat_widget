import sh, { useState as Qn, useRef as vh, useEffect as Bv } from "react";
import dh from "react-dom";
function hh(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Jc = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yv;
function yh() {
  if (Yv) return ge;
  Yv = 1;
  var A = Symbol.for("react.transitional.element"), $ = Symbol.for("react.fragment");
  function C(m, J, bl) {
    var tl = null;
    if (bl !== void 0 && (tl = "" + bl), J.key !== void 0 && (tl = "" + J.key), "key" in J) {
      bl = {};
      for (var Bl in J)
        Bl !== "key" && (bl[Bl] = J[Bl]);
    } else bl = J;
    return J = bl.ref, {
      $$typeof: A,
      type: m,
      key: tl,
      ref: J !== void 0 ? J : null,
      props: bl
    };
  }
  return ge.Fragment = $, ge.jsx = C, ge.jsxs = C, ge;
}
var Qv;
function mh() {
  return Qv || (Qv = 1, Jc.exports = yh()), Jc.exports;
}
var B = mh(), wc = { exports: {} }, be = {}, Wc = { exports: {} }, Fc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jv;
function Sh() {
  return jv || (jv = 1, function(A) {
    function $(z, r) {
      var O = z.length;
      z.push(r);
      l: for (; 0 < O; ) {
        var w = O - 1 >>> 1, el = z[w];
        if (0 < J(el, r))
          z[w] = r, z[O] = el, O = w;
        else break l;
      }
    }
    function C(z) {
      return z.length === 0 ? null : z[0];
    }
    function m(z) {
      if (z.length === 0) return null;
      var r = z[0], O = z.pop();
      if (O !== r) {
        z[0] = O;
        l: for (var w = 0, el = z.length, Yt = el >>> 1; w < Yt; ) {
          var st = 2 * (w + 1) - 1, Sa = z[st], j = st + 1, Vl = z[j];
          if (0 > J(Sa, O))
            j < el && 0 > J(Vl, Sa) ? (z[w] = Vl, z[j] = O, w = j) : (z[w] = Sa, z[st] = O, w = st);
          else if (j < el && 0 > J(Vl, O))
            z[w] = Vl, z[j] = O, w = j;
          else break l;
        }
      }
      return r;
    }
    function J(z, r) {
      var O = z.sortIndex - r.sortIndex;
      return O !== 0 ? O : z.id - r.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var bl = performance;
      A.unstable_now = function() {
        return bl.now();
      };
    } else {
      var tl = Date, Bl = tl.now();
      A.unstable_now = function() {
        return tl.now() - Bl;
      };
    }
    var I = [], Yl = [], ut = 1, ol = null, ul = 3, Dl = !1, X = !1, rl = !1, Al = typeof setTimeout == "function" ? setTimeout : null, xl = typeof clearTimeout == "function" ? clearTimeout : null, sl = typeof setImmediate < "u" ? setImmediate : null;
    function et(z) {
      for (var r = C(Yl); r !== null; ) {
        if (r.callback === null) m(Yl);
        else if (r.startTime <= z)
          m(Yl), r.sortIndex = r.expirationTime, $(I, r);
        else break;
        r = C(Yl);
      }
    }
    function bu(z) {
      if (rl = !1, et(z), !X)
        if (C(I) !== null)
          X = !0, ct();
        else {
          var r = C(Yl);
          r !== null && it(bu, r.startTime - z);
        }
    }
    var nt = !1, aa = -1, oe = 5, Bt = -1;
    function U() {
      return !(A.unstable_now() - Bt < oe);
    }
    function Z() {
      if (nt) {
        var z = A.unstable_now();
        Bt = z;
        var r = !0;
        try {
          l: {
            X = !1, rl && (rl = !1, xl(aa), aa = -1), Dl = !0;
            var O = ul;
            try {
              a: {
                for (et(z), ol = C(I); ol !== null && !(ol.expirationTime > z && U()); ) {
                  var w = ol.callback;
                  if (typeof w == "function") {
                    ol.callback = null, ul = ol.priorityLevel;
                    var el = w(
                      ol.expirationTime <= z
                    );
                    if (z = A.unstable_now(), typeof el == "function") {
                      ol.callback = el, et(z), r = !0;
                      break a;
                    }
                    ol === C(I) && m(I), et(z);
                  } else m(I);
                  ol = C(I);
                }
                if (ol !== null) r = !0;
                else {
                  var Yt = C(Yl);
                  Yt !== null && it(
                    bu,
                    Yt.startTime - z
                  ), r = !1;
                }
              }
              break l;
            } finally {
              ol = null, ul = O, Dl = !1;
            }
            r = void 0;
          }
        } finally {
          r ? ma() : nt = !1;
        }
      }
    }
    var ma;
    if (typeof sl == "function")
      ma = function() {
        sl(Z);
      };
    else if (typeof MessageChannel < "u") {
      var ou = new MessageChannel(), ft = ou.port2;
      ou.port1.onmessage = Z, ma = function() {
        ft.postMessage(null);
      };
    } else
      ma = function() {
        Al(Z, 0);
      };
    function ct() {
      nt || (nt = !0, ma());
    }
    function it(z, r) {
      aa = Al(function() {
        z(A.unstable_now());
      }, r);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, A.unstable_continueExecution = function() {
      X || Dl || (X = !0, ct());
    }, A.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < z ? Math.floor(1e3 / z) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return ul;
    }, A.unstable_getFirstCallbackNode = function() {
      return C(I);
    }, A.unstable_next = function(z) {
      switch (ul) {
        case 1:
        case 2:
        case 3:
          var r = 3;
          break;
        default:
          r = ul;
      }
      var O = ul;
      ul = r;
      try {
        return z();
      } finally {
        ul = O;
      }
    }, A.unstable_pauseExecution = function() {
    }, A.unstable_requestPaint = function() {
    }, A.unstable_runWithPriority = function(z, r) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var O = ul;
      ul = z;
      try {
        return r();
      } finally {
        ul = O;
      }
    }, A.unstable_scheduleCallback = function(z, r, O) {
      var w = A.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? w + O : w) : O = w, z) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = O + el, z = {
        id: ut++,
        callback: r,
        priorityLevel: z,
        startTime: O,
        expirationTime: el,
        sortIndex: -1
      }, O > w ? (z.sortIndex = O, $(Yl, z), C(I) === null && z === C(Yl) && (rl ? (xl(aa), aa = -1) : rl = !0, it(bu, O - w))) : (z.sortIndex = el, $(I, z), X || Dl || (X = !0, ct())), z;
    }, A.unstable_shouldYield = U, A.unstable_wrapCallback = function(z) {
      var r = ul;
      return function() {
        var O = ul;
        ul = r;
        try {
          return z.apply(this, arguments);
        } finally {
          ul = O;
        }
      };
    };
  }(Fc)), Fc;
}
var Xv;
function gh() {
  return Xv || (Xv = 1, Wc.exports = Sh()), Wc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _v;
function bh() {
  if (_v) return be;
  _v = 1;
  var A = gh(), $ = sh, C = dh;
  function m(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var bl = Symbol.for("react.element"), tl = Symbol.for("react.transitional.element"), Bl = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), Yl = Symbol.for("react.strict_mode"), ut = Symbol.for("react.profiler"), ol = Symbol.for("react.provider"), ul = Symbol.for("react.consumer"), Dl = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), rl = Symbol.for("react.suspense"), Al = Symbol.for("react.suspense_list"), xl = Symbol.for("react.memo"), sl = Symbol.for("react.lazy"), et = Symbol.for("react.offscreen"), bu = Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
  function aa(l) {
    return l === null || typeof l != "object" ? null : (l = nt && l[nt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var oe = Symbol.for("react.client.reference");
  function Bt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === oe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case I:
        return "Fragment";
      case Bl:
        return "Portal";
      case ut:
        return "Profiler";
      case Yl:
        return "StrictMode";
      case rl:
        return "Suspense";
      case Al:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Dl:
          return (l.displayName || "Context") + ".Provider";
        case ul:
          return (l._context.displayName || "Context") + ".Consumer";
        case X:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case xl:
          return a = l.displayName || null, a !== null ? a : Bt(l.type) || "Memo";
        case sl:
          a = l._payload, l = l._init;
          try {
            return Bt(l(a));
          } catch {
          }
      }
    return null;
  }
  var U = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.assign, ma, ou;
  function ft(l) {
    if (ma === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        ma = a && a[1] || "", ou = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ma + l + ou;
  }
  var ct = !1;
  function it(l, a) {
    if (!l || ct) return "";
    ct = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
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
                } catch (S) {
                  var y = S;
                }
                Reflect.construct(l, [], o);
              } else {
                try {
                  o.call();
                } catch (S) {
                  y = S;
                }
                l.call(o.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                y = S;
              }
              (o = l()) && typeof o.catch == "function" && o.catch(function() {
              });
            }
          } catch (S) {
            if (S && y && typeof S.stack == "string")
              return [S.stack, y.stack];
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
`), v = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < v.length && !v[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === v.length)
          for (u = i.length - 1, e = v.length - 1; 1 <= u && 0 <= e && i[u] !== v[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== v[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ct = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? ft(t) : "";
  }
  function z(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ft(l.type);
      case 16:
        return ft("Lazy");
      case 13:
        return ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 15:
        return l = it(l.type, !1), l;
      case 11:
        return l = it(l.type.render, !1), l;
      case 1:
        return l = it(l.type, !0), l;
      default:
        return "";
    }
  }
  function r(l) {
    try {
      var a = "";
      do
        a += z(l), l = l.return;
      while (l);
      return a;
    } catch (t) {
      return `
Error generating stack: ` + t.message + `
` + t.stack;
    }
  }
  function O(l) {
    var a = l, t = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, a.flags & 4098 && (t = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? t : null;
  }
  function w(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function el(l) {
    if (O(l) !== l)
      throw Error(m(188));
  }
  function Yt(l) {
    var a = l.alternate;
    if (!a) {
      if (a = O(l), a === null) throw Error(m(188));
      return a !== l ? null : l;
    }
    for (var t = l, u = a; ; ) {
      var e = t.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          t = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === t) return el(e), l;
          if (n === u) return el(e), a;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== u.return) t = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === t) {
            f = !0, t = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, t = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === t) {
              f = !0, t = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, t = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (t.alternate !== u) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? l : a;
  }
  function st(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = st(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var Sa = Array.isArray, j = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Vl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, jn = [], Qt = -1;
  function fa(l) {
    return { current: l };
  }
  function hl(l) {
    0 > Qt || (l.current = jn[Qt], jn[Qt] = null, Qt--);
  }
  function W(l, a) {
    Qt++, jn[Qt] = l.current, l.current = a;
  }
  var ca = fa(null), Au = fa(null), Ya = fa(null), Ae = fa(null);
  function ze(l, a) {
    switch (W(Ya, a), W(Au, l), W(ca, null), l = a.nodeType, l) {
      case 9:
      case 11:
        a = (a = a.documentElement) && (a = a.namespaceURI) ? cv(a) : 0;
        break;
      default:
        if (l = l === 8 ? a.parentNode : a, a = l.tagName, l = l.namespaceURI)
          l = cv(l), a = iv(l, a);
        else
          switch (a) {
            case "svg":
              a = 1;
              break;
            case "math":
              a = 2;
              break;
            default:
              a = 0;
          }
    }
    hl(ca), W(ca, a);
  }
  function jt() {
    hl(ca), hl(Au), hl(Ya);
  }
  function Xn(l) {
    l.memoizedState !== null && W(Ae, l);
    var a = ca.current, t = iv(a, l.type);
    a !== t && (W(Au, l), W(ca, t));
  }
  function Ee(l) {
    Au.current === l && (hl(ca), hl(Au)), Ae.current === l && (hl(Ae), de._currentValue = Vl);
  }
  var _n = Object.prototype.hasOwnProperty, Gn = A.unstable_scheduleCallback, Zn = A.unstable_cancelCallback, xv = A.unstable_shouldYield, Vv = A.unstable_requestPaint, ia = A.unstable_now, pv = A.unstable_getCurrentPriorityLevel, kc = A.unstable_ImmediatePriority, $c = A.unstable_UserBlockingPriority, Te = A.unstable_NormalPriority, Kv = A.unstable_LowPriority, Ic = A.unstable_IdlePriority, Lv = A.log, Jv = A.unstable_setDisableYieldValue, zu = null, Ql = null;
  function wv(l) {
    if (Ql && typeof Ql.onCommitFiberRoot == "function")
      try {
        Ql.onCommitFiberRoot(
          zu,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function Qa(l) {
    if (typeof Lv == "function" && Jv(l), Ql && typeof Ql.setStrictMode == "function")
      try {
        Ql.setStrictMode(zu, l);
      } catch {
      }
  }
  var jl = Math.clz32 ? Math.clz32 : kv, Wv = Math.log, Fv = Math.LN2;
  function kv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Wv(l) / Fv | 0) | 0;
  }
  var De = 128, Me = 4194304;
  function vt(l) {
    var a = l & 42;
    if (a !== 0) return a;
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
  function Ue(l, a) {
    var t = l.pendingLanes;
    if (t === 0) return 0;
    var u = 0, e = l.suspendedLanes, n = l.pingedLanes, f = l.warmLanes;
    l = l.finishedLanes !== 0;
    var c = t & 134217727;
    return c !== 0 ? (t = c & ~e, t !== 0 ? u = vt(t) : (n &= c, n !== 0 ? u = vt(n) : l || (f = c & ~f, f !== 0 && (u = vt(f))))) : (c = t & ~e, c !== 0 ? u = vt(c) : n !== 0 ? u = vt(n) : l || (f = t & ~f, f !== 0 && (u = vt(f)))), u === 0 ? 0 : a !== 0 && a !== u && !(a & e) && (e = u & -u, f = a & -a, e >= f || e === 32 && (f & 4194176) !== 0) ? a : u;
  }
  function Eu(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function $v(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return a + 250;
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
        return a + 5e3;
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
  function Pc() {
    var l = De;
    return De <<= 1, !(De & 4194176) && (De = 128), l;
  }
  function li() {
    var l = Me;
    return Me <<= 1, !(Me & 62914560) && (Me = 4194304), l;
  }
  function Cn(l) {
    for (var a = [], t = 0; 31 > t; t++) a.push(l);
    return a;
  }
  function Tu(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Iv(l, a, t, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, v = l.hiddenUpdates;
    for (t = f & ~t; 0 < t; ) {
      var g = 31 - jl(t), o = 1 << g;
      c[g] = 0, i[g] = -1;
      var y = v[g];
      if (y !== null)
        for (v[g] = null, g = 0; g < y.length; g++) {
          var S = y[g];
          S !== null && (S.lane &= -536870913);
        }
      t &= ~o;
    }
    u !== 0 && ai(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~a));
  }
  function ai(l, a, t) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var u = 31 - jl(a);
    l.entangledLanes |= a, l.entanglements[u] = l.entanglements[u] | 1073741824 | t & 4194218;
  }
  function ti(l, a) {
    var t = l.entangledLanes |= a;
    for (l = l.entanglements; t; ) {
      var u = 31 - jl(t), e = 1 << u;
      e & a | l[u] & a && (l[u] |= a), t &= ~e;
    }
  }
  function ui(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function ei() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ov(l.type));
  }
  function Pv(l, a) {
    var t = j.p;
    try {
      return j.p = l, a();
    } finally {
      j.p = t;
    }
  }
  var ja = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + ja, Hl = "__reactProps$" + ja, Xt = "__reactContainer$" + ja, xn = "__reactEvents$" + ja, ld = "__reactListeners$" + ja, ad = "__reactHandles$" + ja, ni = "__reactResources$" + ja, Du = "__reactMarker$" + ja;
  function Vn(l) {
    delete l[Ml], delete l[Hl], delete l[xn], delete l[ld], delete l[ad];
  }
  function dt(l) {
    var a = l[Ml];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if (a = t[Xt] || t[Ml]) {
        if (t = a.alternate, a.child !== null || t !== null && t.child !== null)
          for (l = dv(l); l !== null; ) {
            if (t = l[Ml]) return t;
            l = dv(l);
          }
        return a;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function _t(l) {
    if (l = l[Ml] || l[Xt]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function Mu(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Gt(l) {
    var a = l[ni];
    return a || (a = l[ni] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function yl(l) {
    l[Du] = !0;
  }
  var fi = /* @__PURE__ */ new Set(), ci = {};
  function ht(l, a) {
    Zt(l, a), Zt(l + "Capture", a);
  }
  function Zt(l, a) {
    for (ci[l] = a, l = 0; l < a.length; l++)
      fi.add(a[l]);
  }
  var ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), td = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ii = {}, si = {};
  function ud(l) {
    return _n.call(si, l) ? !0 : _n.call(ii, l) ? !1 : td.test(l) ? si[l] = !0 : (ii[l] = !0, !1);
  }
  function Oe(l, a, t) {
    if (ud(a))
      if (t === null) l.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var u = a.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + t);
      }
  }
  function qe(l, a, t) {
    if (t === null) l.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + t);
    }
  }
  function ba(l, a, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(a, t, "" + u);
    }
  }
  function pl(l) {
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
  function vi(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function ed(l) {
    var a = vi(l) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    ), u = "" + l[a];
    if (!l.hasOwnProperty(a) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var e = t.get, n = t.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, a, {
        enumerable: t.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function re(l) {
    l._valueTracker || (l._valueTracker = ed(l));
  }
  function di(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var t = a.getValue(), u = "";
    return l && (u = vi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== t ? (a.setValue(l), !0) : !1;
  }
  function He(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var nd = /[\n"\\]/g;
  function Kl(l) {
    return l.replace(
      nd,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function pn(l, a, t, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), a != null ? f === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + pl(a)) : l.value !== "" + pl(a) && (l.value = "" + pl(a)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), a != null ? Kn(l, f, pl(a)) : t != null ? Kn(l, f, pl(t)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + pl(c) : l.removeAttribute("name");
  }
  function hi(l, a, t, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), a != null || t != null) {
      if (!(n !== "submit" && n !== "reset" || a != null))
        return;
      t = t != null ? "" + pl(t) : "", a = a != null ? "" + pl(a) : t, c || a === l.value || (l.value = a), l.defaultValue = a;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Kn(l, a, t) {
    a === "number" && He(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function Ct(l, a, t, u) {
    if (l = l.options, a) {
      a = {};
      for (var e = 0; e < t.length; e++)
        a["$" + t[e]] = !0;
      for (t = 0; t < l.length; t++)
        e = a.hasOwnProperty("$" + l[t].value), l[t].selected !== e && (l[t].selected = e), e && u && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + pl(t), a = null, e = 0; e < l.length; e++) {
        if (l[e].value === t) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        a !== null || l[e].disabled || (a = l[e]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function yi(l, a, t) {
    if (a != null && (a = "" + pl(a), a !== l.value && (l.value = a), t == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + pl(t) : "";
  }
  function mi(l, a, t, u) {
    if (a == null) {
      if (u != null) {
        if (t != null) throw Error(m(92));
        if (Sa(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        t = u;
      }
      t == null && (t = ""), a = t;
    }
    t = pl(a), l.defaultValue = t, u = l.textContent, u === t && u !== "" && u !== null && (l.value = u);
  }
  function xt(l, a) {
    if (a) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var fd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Si(l, a, t) {
    var u = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? u ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : u ? l.setProperty(a, t) : typeof t != "number" || t === 0 || fd.has(a) ? a === "float" ? l.cssFloat = t : l[a] = ("" + t).trim() : l[a] = t + "px";
  }
  function gi(l, a, t) {
    if (a != null && typeof a != "object")
      throw Error(m(62));
    if (l = l.style, t != null) {
      for (var u in t)
        !t.hasOwnProperty(u) || a != null && a.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in a)
        u = a[e], a.hasOwnProperty(e) && t[e] !== u && Si(l, e, u);
    } else
      for (var n in a)
        a.hasOwnProperty(n) && Si(l, n, a[n]);
  }
  function Ln(l) {
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
  var cd = /* @__PURE__ */ new Map([
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
  ]), id = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return id.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Jn = null;
  function wn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Vt = null, pt = null;
  function bi(l) {
    var a = _t(l);
    if (a && (l = a.stateNode)) {
      var t = l[Hl] || null;
      l: switch (l = a.stateNode, a.type) {
        case "input":
          if (pn(
            l,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), a = t.name, t.type === "radio" && a != null) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + Kl(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < t.length; a++) {
              var u = t[a];
              if (u !== l && u.form === l.form) {
                var e = u[Hl] || null;
                if (!e) throw Error(m(90));
                pn(
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
            for (a = 0; a < t.length; a++)
              u = t[a], u.form === l.form && di(u);
          }
          break l;
        case "textarea":
          yi(l, t.value, t.defaultValue);
          break l;
        case "select":
          a = t.value, a != null && Ct(l, !!t.multiple, a, !1);
      }
    }
  }
  var Wn = !1;
  function oi(l, a, t) {
    if (Wn) return l(a, t);
    Wn = !0;
    try {
      var u = l(a);
      return u;
    } finally {
      if (Wn = !1, (Vt !== null || pt !== null) && (mn(), Vt && (a = Vt, l = pt, pt = Vt = null, bi(a), l)))
        for (a = 0; a < l.length; a++) bi(l[a]);
    }
  }
  function Uu(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var u = t[Hl] || null;
    if (u === null) return null;
    t = u[a];
    l: switch (a) {
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
    if (t && typeof t != "function")
      throw Error(
        m(231, a, typeof t)
      );
    return t;
  }
  var Fn = !1;
  if (ga)
    try {
      var Ou = {};
      Object.defineProperty(Ou, "passive", {
        get: function() {
          Fn = !0;
        }
      }), window.addEventListener("test", Ou, Ou), window.removeEventListener("test", Ou, Ou);
    } catch {
      Fn = !1;
    }
  var Xa = null, kn = null, Ne = null;
  function Ai() {
    if (Ne) return Ne;
    var l, a = kn, t = a.length, u, e = "value" in Xa ? Xa.value : Xa.textContent, n = e.length;
    for (l = 0; l < t && a[l] === e[l]; l++) ;
    var f = t - l;
    for (u = 1; u <= f && a[t - u] === e[n - u]; u++) ;
    return Ne = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Be(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ye() {
    return !0;
  }
  function zi() {
    return !1;
  }
  function Rl(l) {
    function a(t, u, e, n, f) {
      this._reactName = t, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (t = l[c], this[c] = t ? t(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ye : zi, this.isPropagationStopped = zi, this;
    }
    return Z(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Ye);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Ye);
      },
      persist: function() {
      },
      isPersistent: Ye
    }), a;
  }
  var yt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qe = Rl(yt), qu = Z({}, yt, { view: 0, detail: 0 }), sd = Rl(qu), $n, In, ru, je = Z({}, qu, {
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
    getModifierState: lf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ru && (ru && l.type === "mousemove" ? ($n = l.screenX - ru.screenX, In = l.screenY - ru.screenY) : In = $n = 0, ru = l), $n);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : In;
    }
  }), Ei = Rl(je), vd = Z({}, je, { dataTransfer: 0 }), dd = Rl(vd), hd = Z({}, qu, { relatedTarget: 0 }), Pn = Rl(hd), yd = Z({}, yt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), md = Rl(yd), Sd = Z({}, yt, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), gd = Rl(Sd), bd = Z({}, yt, { data: 0 }), Ti = Rl(bd), od = {
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
  }, Ad = {
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
  }, zd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ed(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = zd[l]) ? !!a[l] : !1;
  }
  function lf() {
    return Ed;
  }
  var Td = Z({}, qu, {
    key: function(l) {
      if (l.key) {
        var a = od[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = Be(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ad[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lf,
    charCode: function(l) {
      return l.type === "keypress" ? Be(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Be(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Dd = Rl(Td), Md = Z({}, je, {
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
  }), Di = Rl(Md), Ud = Z({}, qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lf
  }), Od = Rl(Ud), qd = Z({}, yt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rd = Rl(qd), Hd = Z({}, je, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rd = Rl(Hd), Nd = Z({}, yt, {
    newState: 0,
    oldState: 0
  }), Bd = Rl(Nd), Yd = [9, 13, 27, 32], af = ga && "CompositionEvent" in window, Hu = null;
  ga && "documentMode" in document && (Hu = document.documentMode);
  var Qd = ga && "TextEvent" in window && !Hu, Mi = ga && (!af || Hu && 8 < Hu && 11 >= Hu), Ui = " ", Oi = !1;
  function qi(l, a) {
    switch (l) {
      case "keyup":
        return Yd.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ri(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Kt = !1;
  function jd(l, a) {
    switch (l) {
      case "compositionend":
        return ri(a);
      case "keypress":
        return a.which !== 32 ? null : (Oi = !0, Ui);
      case "textInput":
        return l = a.data, l === Ui && Oi ? null : l;
      default:
        return null;
    }
  }
  function Xd(l, a) {
    if (Kt)
      return l === "compositionend" || !af && qi(l, a) ? (l = Ai(), Ne = kn = Xa = null, Kt = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Mi && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var _d = {
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
  function Hi(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!_d[l.type] : a === "textarea";
  }
  function Ri(l, a, t, u) {
    Vt ? pt ? pt.push(u) : pt = [u] : Vt = u, a = An(a, "onChange"), 0 < a.length && (t = new Qe(
      "onChange",
      "change",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }));
  }
  var Ru = null, Nu = null;
  function Gd(l) {
    tv(l, 0);
  }
  function Xe(l) {
    var a = Mu(l);
    if (di(a)) return l;
  }
  function Ni(l, a) {
    if (l === "change") return a;
  }
  var Bi = !1;
  if (ga) {
    var tf;
    if (ga) {
      var uf = "oninput" in document;
      if (!uf) {
        var Yi = document.createElement("div");
        Yi.setAttribute("oninput", "return;"), uf = typeof Yi.oninput == "function";
      }
      tf = uf;
    } else tf = !1;
    Bi = tf && (!document.documentMode || 9 < document.documentMode);
  }
  function Qi() {
    Ru && (Ru.detachEvent("onpropertychange", ji), Nu = Ru = null);
  }
  function ji(l) {
    if (l.propertyName === "value" && Xe(Nu)) {
      var a = [];
      Ri(
        a,
        Nu,
        l,
        wn(l)
      ), oi(Gd, a);
    }
  }
  function Zd(l, a, t) {
    l === "focusin" ? (Qi(), Ru = a, Nu = t, Ru.attachEvent("onpropertychange", ji)) : l === "focusout" && Qi();
  }
  function Cd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Xe(Nu);
  }
  function xd(l, a) {
    if (l === "click") return Xe(a);
  }
  function Vd(l, a) {
    if (l === "input" || l === "change")
      return Xe(a);
  }
  function pd(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Xl = typeof Object.is == "function" ? Object.is : pd;
  function Bu(l, a) {
    if (Xl(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var t = Object.keys(l), u = Object.keys(a);
    if (t.length !== u.length) return !1;
    for (u = 0; u < t.length; u++) {
      var e = t[u];
      if (!_n.call(a, e) || !Xl(l[e], a[e]))
        return !1;
    }
    return !0;
  }
  function Xi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function _i(l, a) {
    var t = Xi(l);
    l = 0;
    for (var u; t; ) {
      if (t.nodeType === 3) {
        if (u = l + t.textContent.length, l <= a && u >= a)
          return { node: t, offset: a - l };
        l = u;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Xi(t);
    }
  }
  function Gi(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Gi(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Zi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = He(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = a.contentWindow;
      else break;
      a = He(l.document);
    }
    return a;
  }
  function ef(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  function Kd(l, a) {
    var t = Zi(a);
    a = l.focusedElem;
    var u = l.selectionRange;
    if (t !== a && a && a.ownerDocument && Gi(a.ownerDocument.documentElement, a)) {
      if (u !== null && ef(a)) {
        if (l = u.start, t = u.end, t === void 0 && (t = l), "selectionStart" in a)
          a.selectionStart = l, a.selectionEnd = Math.min(
            t,
            a.value.length
          );
        else if (t = (l = a.ownerDocument || document) && l.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var e = a.textContent.length, n = Math.min(u.start, e);
          u = u.end === void 0 ? n : Math.min(u.end, e), !t.extend && n > u && (e = u, u = n, n = e), e = _i(a, n);
          var f = _i(
            a,
            u
          );
          e && f && (t.rangeCount !== 1 || t.anchorNode !== e.node || t.anchorOffset !== e.offset || t.focusNode !== f.node || t.focusOffset !== f.offset) && (l = l.createRange(), l.setStart(e.node, e.offset), t.removeAllRanges(), n > u ? (t.addRange(l), t.extend(f.node, f.offset)) : (l.setEnd(
            f.node,
            f.offset
          ), t.addRange(l)));
        }
      }
      for (l = [], t = a; t = t.parentNode; )
        t.nodeType === 1 && l.push({
          element: t,
          left: t.scrollLeft,
          top: t.scrollTop
        });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < l.length; a++)
        t = l[a], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var Ld = ga && "documentMode" in document && 11 >= document.documentMode, Lt = null, nf = null, Yu = null, ff = !1;
  function Ci(l, a, t) {
    var u = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ff || Lt == null || Lt !== He(u) || (u = Lt, "selectionStart" in u && ef(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Yu && Bu(Yu, u) || (Yu = u, u = An(nf, "onSelect"), 0 < u.length && (a = new Qe(
      "onSelect",
      "select",
      null,
      a,
      t
    ), l.push({ event: a, listeners: u }), a.target = Lt)));
  }
  function mt(l, a) {
    var t = {};
    return t[l.toLowerCase()] = a.toLowerCase(), t["Webkit" + l] = "webkit" + a, t["Moz" + l] = "moz" + a, t;
  }
  var Jt = {
    animationend: mt("Animation", "AnimationEnd"),
    animationiteration: mt("Animation", "AnimationIteration"),
    animationstart: mt("Animation", "AnimationStart"),
    transitionrun: mt("Transition", "TransitionRun"),
    transitionstart: mt("Transition", "TransitionStart"),
    transitioncancel: mt("Transition", "TransitionCancel"),
    transitionend: mt("Transition", "TransitionEnd")
  }, cf = {}, xi = {};
  ga && (xi = document.createElement("div").style, "AnimationEvent" in window || (delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation), "TransitionEvent" in window || delete Jt.transitionend.transition);
  function St(l) {
    if (cf[l]) return cf[l];
    if (!Jt[l]) return l;
    var a = Jt[l], t;
    for (t in a)
      if (a.hasOwnProperty(t) && t in xi)
        return cf[l] = a[t];
    return l;
  }
  var Vi = St("animationend"), pi = St("animationiteration"), Ki = St("animationstart"), Jd = St("transitionrun"), wd = St("transitionstart"), Wd = St("transitioncancel"), Li = St("transitionend"), Ji = /* @__PURE__ */ new Map(), wi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function ta(l, a) {
    Ji.set(l, a), ht(a, [l]);
  }
  var Ll = [], wt = 0, sf = 0;
  function _e() {
    for (var l = wt, a = sf = wt = 0; a < l; ) {
      var t = Ll[a];
      Ll[a++] = null;
      var u = Ll[a];
      Ll[a++] = null;
      var e = Ll[a];
      Ll[a++] = null;
      var n = Ll[a];
      if (Ll[a++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && Wi(t, e, n);
    }
  }
  function Ge(l, a, t, u) {
    Ll[wt++] = l, Ll[wt++] = a, Ll[wt++] = t, Ll[wt++] = u, sf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function vf(l, a, t, u) {
    return Ge(l, a, t, u), Ze(l);
  }
  function _a(l, a) {
    return Ge(l, null, null, a), Ze(l);
  }
  function Wi(l, a, t) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= t, u = n.alternate, u !== null && (u.childLanes |= t), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    e && a !== null && l.tag === 3 && (n = l.stateNode, e = 31 - jl(t), n = n.hiddenUpdates, l = n[e], l === null ? n[e] = [a] : l.push(a), a.lane = t | 536870912);
  }
  function Ze(l) {
    if (50 < ee)
      throw ee = 0, gc = null, Error(m(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wt = {}, Fi = /* @__PURE__ */ new WeakMap();
  function Jl(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = Fi.get(l);
      return t !== void 0 ? t : (a = {
        value: l,
        source: a,
        stack: r(a)
      }, Fi.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: r(a)
    };
  }
  var Ft = [], kt = 0, Ce = null, xe = 0, wl = [], Wl = 0, gt = null, oa = 1, Aa = "";
  function bt(l, a) {
    Ft[kt++] = xe, Ft[kt++] = Ce, Ce = l, xe = a;
  }
  function ki(l, a, t) {
    wl[Wl++] = oa, wl[Wl++] = Aa, wl[Wl++] = gt, gt = l;
    var u = oa;
    l = Aa;
    var e = 32 - jl(u) - 1;
    u &= ~(1 << e), t += 1;
    var n = 32 - jl(a) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, oa = 1 << 32 - jl(a) + e | t << e | u, Aa = n + l;
    } else
      oa = 1 << n | t << e | u, Aa = l;
  }
  function df(l) {
    l.return !== null && (bt(l, 1), ki(l, 1, 0));
  }
  function hf(l) {
    for (; l === Ce; )
      Ce = Ft[--kt], Ft[kt] = null, xe = Ft[--kt], Ft[kt] = null;
    for (; l === gt; )
      gt = wl[--Wl], wl[Wl] = null, Aa = wl[--Wl], wl[Wl] = null, oa = wl[--Wl], wl[Wl] = null;
  }
  var Ol = null, zl = null, _ = !1, ua = null, sa = !1, yf = Error(m(519));
  function ot(l) {
    var a = Error(m(418, ""));
    throw Xu(Jl(a, l)), yf;
  }
  function $i(l) {
    var a = l.stateNode, t = l.type, u = l.memoizedProps;
    switch (a[Ml] = l, a[Hl] = u, t) {
      case "dialog":
        Y("cancel", a), Y("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Y("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < fe.length; t++)
          Y(fe[t], a);
        break;
      case "source":
        Y("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Y("error", a), Y("load", a);
        break;
      case "details":
        Y("toggle", a);
        break;
      case "input":
        Y("invalid", a), hi(
          a,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), re(a);
        break;
      case "select":
        Y("invalid", a);
        break;
      case "textarea":
        Y("invalid", a), mi(a, u.value, u.defaultValue, u.children), re(a);
    }
    t = u.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || u.suppressHydrationWarning === !0 || fv(a.textContent, t) ? (u.popover != null && (Y("beforetoggle", a), Y("toggle", a)), u.onScroll != null && Y("scroll", a), u.onScrollEnd != null && Y("scrollend", a), u.onClick != null && (a.onclick = zn), a = !0) : a = !1, a || ot(l);
  }
  function Ii(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
        case 3:
        case 27:
          sa = !0;
          return;
        case 5:
        case 13:
          sa = !1;
          return;
        default:
          Ol = Ol.return;
      }
  }
  function Qu(l) {
    if (l !== Ol) return !1;
    if (!_) return Ii(l), _ = !0, !1;
    var a = !1, t;
    if ((t = l.tag !== 3 && l.tag !== 27) && ((t = l.tag === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || Yc(l.type, l.memoizedProps)), t = !t), t && (a = !0), a && zl && ot(l), Ii(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (t = l.data, t === "/$") {
              if (a === 0) {
                zl = na(l.nextSibling);
                break l;
              }
              a--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || a++;
          l = l.nextSibling;
        }
        zl = null;
      }
    } else
      zl = Ol ? na(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ju() {
    zl = Ol = null, _ = !1;
  }
  function Xu(l) {
    ua === null ? ua = [l] : ua.push(l);
  }
  var _u = Error(m(460)), Pi = Error(m(474)), mf = { then: function() {
  } };
  function ls(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ve() {
  }
  function as(l, a, t) {
    switch (t = l[t], t === void 0 ? l.push(a) : t !== a && (a.then(Ve, Ve), a = t), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, l === _u ? Error(m(483)) : l;
      default:
        if (typeof a.status == "string") a.then(Ve, Ve);
        else {
          if (l = K, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = a, l.status = "pending", l.then(
            function(u) {
              if (a.status === "pending") {
                var e = a;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (a.status === "pending") {
                var e = a;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, l === _u ? Error(m(483)) : l;
        }
        throw Gu = a, _u;
    }
  }
  var Gu = null;
  function ts() {
    if (Gu === null) throw Error(m(459));
    var l = Gu;
    return Gu = null, l;
  }
  var $t = null, Zu = 0;
  function pe(l) {
    var a = Zu;
    return Zu += 1, $t === null && ($t = []), as($t, l, a);
  }
  function Cu(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function Ke(l, a) {
    throw a.$$typeof === bl ? Error(m(525)) : (l = Object.prototype.toString.call(a), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function us(l) {
    var a = l._init;
    return a(l._payload);
  }
  function es(l) {
    function a(d, s) {
      if (l) {
        var h = d.deletions;
        h === null ? (d.deletions = [s], d.flags |= 16) : h.push(s);
      }
    }
    function t(d, s) {
      if (!l) return null;
      for (; s !== null; )
        a(d, s), s = s.sibling;
      return null;
    }
    function u(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function e(d, s) {
      return d = Fa(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, h) {
      return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < s ? (d.flags |= 33554434, s) : h) : (d.flags |= 33554434, s)) : (d.flags |= 1048576, s);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 33554434), d;
    }
    function c(d, s, h, b) {
      return s === null || s.tag !== 6 ? (s = ic(h, d.mode, b), s.return = d, s) : (s = e(s, h), s.return = d, s);
    }
    function i(d, s, h, b) {
      var E = h.type;
      return E === I ? g(
        d,
        s,
        h.props.children,
        b,
        h.key
      ) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === sl && us(E) === s.type) ? (s = e(s, h.props), Cu(s, h), s.return = d, s) : (s = sn(
        h.type,
        h.key,
        h.props,
        null,
        d.mode,
        b
      ), Cu(s, h), s.return = d, s);
    }
    function v(d, s, h, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = sc(h, d.mode, b), s.return = d, s) : (s = e(s, h.children || []), s.return = d, s);
    }
    function g(d, s, h, b, E) {
      return s === null || s.tag !== 7 ? (s = rt(
        h,
        d.mode,
        b,
        E
      ), s.return = d, s) : (s = e(s, h), s.return = d, s);
    }
    function o(d, s, h) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = ic(
          "" + s,
          d.mode,
          h
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case tl:
            return h = sn(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              h
            ), Cu(h, s), h.return = d, h;
          case Bl:
            return s = sc(
              s,
              d.mode,
              h
            ), s.return = d, s;
          case sl:
            var b = s._init;
            return s = b(s._payload), o(d, s, h);
        }
        if (Sa(s) || aa(s))
          return s = rt(
            s,
            d.mode,
            h,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return o(d, pe(s), h);
        if (s.$$typeof === Dl)
          return o(
            d,
            nn(d, s),
            h
          );
        Ke(d, s);
      }
      return null;
    }
    function y(d, s, h, b) {
      var E = s !== null ? s.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return E !== null ? null : c(d, s, "" + h, b);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case tl:
            return h.key === E ? i(d, s, h, b) : null;
          case Bl:
            return h.key === E ? v(d, s, h, b) : null;
          case sl:
            return E = h._init, h = E(h._payload), y(d, s, h, b);
        }
        if (Sa(h) || aa(h))
          return E !== null ? null : g(d, s, h, b, null);
        if (typeof h.then == "function")
          return y(
            d,
            s,
            pe(h),
            b
          );
        if (h.$$typeof === Dl)
          return y(
            d,
            s,
            nn(d, h),
            b
          );
        Ke(d, h);
      }
      return null;
    }
    function S(d, s, h, b, E) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(h) || null, c(s, d, "" + b, E);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case tl:
            return d = d.get(
              b.key === null ? h : b.key
            ) || null, i(s, d, b, E);
          case Bl:
            return d = d.get(
              b.key === null ? h : b.key
            ) || null, v(s, d, b, E);
          case sl:
            var R = b._init;
            return b = R(b._payload), S(
              d,
              s,
              h,
              b,
              E
            );
        }
        if (Sa(b) || aa(b))
          return d = d.get(h) || null, g(s, d, b, E, null);
        if (typeof b.then == "function")
          return S(
            d,
            s,
            h,
            pe(b),
            E
          );
        if (b.$$typeof === Dl)
          return S(
            d,
            s,
            h,
            nn(s, b),
            E
          );
        Ke(s, b);
      }
      return null;
    }
    function T(d, s, h, b) {
      for (var E = null, R = null, D = s, M = s = 0, gl = null; D !== null && M < h.length; M++) {
        D.index > M ? (gl = D, D = null) : gl = D.sibling;
        var G = y(
          d,
          D,
          h[M],
          b
        );
        if (G === null) {
          D === null && (D = gl);
          break;
        }
        l && D && G.alternate === null && a(d, D), s = n(G, s, M), R === null ? E = G : R.sibling = G, R = G, D = gl;
      }
      if (M === h.length)
        return t(d, D), _ && bt(d, M), E;
      if (D === null) {
        for (; M < h.length; M++)
          D = o(d, h[M], b), D !== null && (s = n(
            D,
            s,
            M
          ), R === null ? E = D : R.sibling = D, R = D);
        return _ && bt(d, M), E;
      }
      for (D = u(D); M < h.length; M++)
        gl = S(
          D,
          d,
          M,
          h[M],
          b
        ), gl !== null && (l && gl.alternate !== null && D.delete(
          gl.key === null ? M : gl.key
        ), s = n(
          gl,
          s,
          M
        ), R === null ? E = gl : R.sibling = gl, R = gl);
      return l && D.forEach(function(tt) {
        return a(d, tt);
      }), _ && bt(d, M), E;
    }
    function q(d, s, h, b) {
      if (h == null) throw Error(m(151));
      for (var E = null, R = null, D = s, M = s = 0, gl = null, G = h.next(); D !== null && !G.done; M++, G = h.next()) {
        D.index > M ? (gl = D, D = null) : gl = D.sibling;
        var tt = y(d, D, G.value, b);
        if (tt === null) {
          D === null && (D = gl);
          break;
        }
        l && D && tt.alternate === null && a(d, D), s = n(tt, s, M), R === null ? E = tt : R.sibling = tt, R = tt, D = gl;
      }
      if (G.done)
        return t(d, D), _ && bt(d, M), E;
      if (D === null) {
        for (; !G.done; M++, G = h.next())
          G = o(d, G.value, b), G !== null && (s = n(G, s, M), R === null ? E = G : R.sibling = G, R = G);
        return _ && bt(d, M), E;
      }
      for (D = u(D); !G.done; M++, G = h.next())
        G = S(D, d, M, G.value, b), G !== null && (l && G.alternate !== null && D.delete(G.key === null ? M : G.key), s = n(G, s, M), R === null ? E = G : R.sibling = G, R = G);
      return l && D.forEach(function(ih) {
        return a(d, ih);
      }), _ && bt(d, M), E;
    }
    function al(d, s, h, b) {
      if (typeof h == "object" && h !== null && h.type === I && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case tl:
            l: {
              for (var E = h.key; s !== null; ) {
                if (s.key === E) {
                  if (E = h.type, E === I) {
                    if (s.tag === 7) {
                      t(
                        d,
                        s.sibling
                      ), b = e(
                        s,
                        h.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === sl && us(E) === s.type) {
                    t(
                      d,
                      s.sibling
                    ), b = e(s, h.props), Cu(b, h), b.return = d, d = b;
                    break l;
                  }
                  t(d, s);
                  break;
                } else a(d, s);
                s = s.sibling;
              }
              h.type === I ? (b = rt(
                h.props.children,
                d.mode,
                b,
                h.key
              ), b.return = d, d = b) : (b = sn(
                h.type,
                h.key,
                h.props,
                null,
                d.mode,
                b
              ), Cu(b, h), b.return = d, d = b);
            }
            return f(d);
          case Bl:
            l: {
              for (E = h.key; s !== null; ) {
                if (s.key === E)
                  if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                    t(
                      d,
                      s.sibling
                    ), b = e(s, h.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    t(d, s);
                    break;
                  }
                else a(d, s);
                s = s.sibling;
              }
              b = sc(h, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case sl:
            return E = h._init, h = E(h._payload), al(
              d,
              s,
              h,
              b
            );
        }
        if (Sa(h))
          return T(
            d,
            s,
            h,
            b
          );
        if (aa(h)) {
          if (E = aa(h), typeof E != "function") throw Error(m(150));
          return h = E.call(h), q(
            d,
            s,
            h,
            b
          );
        }
        if (typeof h.then == "function")
          return al(
            d,
            s,
            pe(h),
            b
          );
        if (h.$$typeof === Dl)
          return al(
            d,
            s,
            nn(d, h),
            b
          );
        Ke(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (t(d, s.sibling), b = e(s, h), b.return = d, d = b) : (t(d, s), b = ic(h, d.mode, b), b.return = d, d = b), f(d)) : t(d, s);
    }
    return function(d, s, h, b) {
      try {
        Zu = 0;
        var E = al(
          d,
          s,
          h,
          b
        );
        return $t = null, E;
      } catch (D) {
        if (D === _u) throw D;
        var R = Il(29, D, null, d.mode);
        return R.lanes = b, R.return = d, R;
      } finally {
      }
    };
  }
  var At = es(!0), ns = es(!1), It = fa(null), Le = fa(0);
  function fs(l, a) {
    l = Ra, W(Le, l), W(It, a), Ra = l | a.baseLanes;
  }
  function Sf() {
    W(Le, Ra), W(It, It.current);
  }
  function gf() {
    Ra = Le.current, hl(It), hl(Le);
  }
  var Fl = fa(null), va = null;
  function Ga(l) {
    var a = l.alternate;
    W(vl, vl.current & 1), W(Fl, l), va === null && (a === null || It.current !== null || a.memoizedState !== null) && (va = l);
  }
  function cs(l) {
    if (l.tag === 22) {
      if (W(vl, vl.current), W(Fl, l), va === null) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (va = l);
      }
    } else Za();
  }
  function Za() {
    W(vl, vl.current), W(Fl, Fl.current);
  }
  function za(l) {
    hl(Fl), va === l && (va = null), hl(vl);
  }
  var vl = fa(0);
  function Je(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Fd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(t, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(t) {
        return t();
      });
    };
  }, kd = A.unstable_scheduleCallback, $d = A.unstable_NormalPriority, dl = {
    $$typeof: Dl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bf() {
    return {
      controller: new Fd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xu(l) {
    l.refCount--, l.refCount === 0 && kd($d, function() {
      l.controller.abort();
    });
  }
  var Vu = null, of = 0, Pt = 0, lu = null;
  function Id(l, a) {
    if (Vu === null) {
      var t = Vu = [];
      of = 0, Pt = Mc(), lu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          t.push(u);
        }
      };
    }
    return of++, a.then(is, is), a;
  }
  function is() {
    if (--of === 0 && Vu !== null) {
      lu !== null && (lu.status = "fulfilled");
      var l = Vu;
      Vu = null, Pt = 0, lu = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function Pd(l, a) {
    var t = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        t.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = a;
        for (var e = 0; e < t.length; e++) (0, t[e])(a);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < t.length; e++)
          (0, t[e])(void 0);
      }
    ), u;
  }
  var ss = U.S;
  U.S = function(l, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && Id(l, a), ss !== null && ss(l, a);
  };
  var zt = fa(null);
  function Af() {
    var l = zt.current;
    return l !== null ? l : K.pooledCache;
  }
  function we(l, a) {
    a === null ? W(zt, zt.current) : W(zt, a.pool);
  }
  function vs() {
    var l = Af();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Ca = 0, H = null, x = null, fl = null, We = !1, au = !1, Et = !1, Fe = 0, pu = 0, tu = null, l1 = 0;
  function nl() {
    throw Error(m(321));
  }
  function zf(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!Xl(l[t], a[t])) return !1;
    return !0;
  }
  function Ef(l, a, t, u, e, n) {
    return Ca = n, H = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, U.H = l === null || l.memoizedState === null ? Tt : xa, Et = !1, n = t(u, e), Et = !1, au && (n = hs(
      a,
      t,
      u,
      e
    )), ds(l), n;
  }
  function ds(l) {
    U.H = da;
    var a = x !== null && x.next !== null;
    if (Ca = 0, fl = x = H = null, We = !1, pu = 0, tu = null, a) throw Error(m(300));
    l === null || ml || (l = l.dependencies, l !== null && en(l) && (ml = !0));
  }
  function hs(l, a, t, u) {
    H = l;
    var e = 0;
    do {
      if (au && (tu = null), pu = 0, au = !1, 25 <= e) throw Error(m(301));
      if (e += 1, fl = x = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = Dt, n = a(t, u);
    } while (au);
    return n;
  }
  function a1() {
    var l = U.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? Ku(a) : a, l = l.useState()[0], (x !== null ? x.memoizedState : null) !== l && (H.flags |= 1024), a;
  }
  function Tf() {
    var l = Fe !== 0;
    return Fe = 0, l;
  }
  function Df(l, a, t) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~t;
  }
  function Mf(l) {
    if (We) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      We = !1;
    }
    Ca = 0, fl = x = H = null, au = !1, pu = Fe = 0, tu = null;
  }
  function Nl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return fl === null ? H.memoizedState = fl = l : fl = fl.next = l, fl;
  }
  function cl() {
    if (x === null) {
      var l = H.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = x.next;
    var a = fl === null ? H.memoizedState : fl.next;
    if (a !== null)
      fl = a, x = l;
    else {
      if (l === null)
        throw H.alternate === null ? Error(m(467)) : Error(m(310));
      x = l, l = {
        memoizedState: x.memoizedState,
        baseState: x.baseState,
        baseQueue: x.baseQueue,
        queue: x.queue,
        next: null
      }, fl === null ? H.memoizedState = fl = l : fl = fl.next = l;
    }
    return fl;
  }
  var ke;
  ke = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ku(l) {
    var a = pu;
    return pu += 1, tu === null && (tu = []), l = as(tu, l, a), a = H, (fl === null ? a.memoizedState : fl.next) === null && (a = a.alternate, U.H = a === null || a.memoizedState === null ? Tt : xa), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === Dl) return Ul(l);
    }
    throw Error(m(438, String(l)));
  }
  function Uf(l) {
    var a = null, t = H.updateQueue;
    if (t !== null && (a = t.memoCache), a == null) {
      var u = H.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (a = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), t === null && (t = ke(), H.updateQueue = t), t.memoCache = a, t = a.data[a.index], t === void 0)
      for (t = a.data[a.index] = Array(l), u = 0; u < l; u++)
        t[u] = bu;
    return a.index++, t;
  }
  function Ea(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function Ie(l) {
    var a = cl();
    return Of(a, x, l);
  }
  function Of(l, a, t) {
    var u = l.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = t;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      a.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      a = e.next;
      var c = f = null, i = null, v = a, g = !1;
      do {
        var o = v.lane & -536870913;
        if (o !== v.lane ? (Q & o) === o : (Ca & o) === o) {
          var y = v.revertLane;
          if (y === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), o === Pt && (g = !0);
          else if ((Ca & y) === y) {
            v = v.next, y === Pt && (g = !0);
            continue;
          } else
            o = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, i === null ? (c = i = o, f = n) : i = i.next = o, H.lanes |= y, ka |= y;
          o = v.action, Et && t(n, o), n = v.hasEagerState ? v.eagerState : t(n, o);
        } else
          y = {
            lane: o,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, i === null ? (c = i = y, f = n) : i = i.next = y, H.lanes |= o, ka |= o;
        v = v.next;
      } while (v !== null && v !== a);
      if (i === null ? f = n : i.next = c, !Xl(n, l.memoizedState) && (ml = !0, g && (t = lu, t !== null)))
        throw t;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function qf(l) {
    var a = cl(), t = a.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = l;
    var u = t.dispatch, e = t.pending, n = a.memoizedState;
    if (e !== null) {
      t.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Xl(n, a.memoizedState) || (ml = !0), a.memoizedState = n, a.baseQueue === null && (a.baseState = n), t.lastRenderedState = n;
    }
    return [n, u];
  }
  function ys(l, a, t) {
    var u = H, e = cl(), n = _;
    if (n) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else t = a();
    var f = !Xl(
      (x || e).memoizedState,
      t
    );
    if (f && (e.memoizedState = t, ml = !0), e = e.queue, Rf(gs.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== a || f || fl !== null && fl.memoizedState.tag & 1) {
      if (u.flags |= 2048, uu(
        9,
        Ss.bind(
          null,
          u,
          e,
          t,
          a
        ),
        { destroy: void 0 },
        null
      ), K === null) throw Error(m(349));
      n || Ca & 60 || ms(u, a, t);
    }
    return t;
  }
  function ms(l, a, t) {
    l.flags |= 16384, l = { getSnapshot: a, value: t }, a = H.updateQueue, a === null ? (a = ke(), H.updateQueue = a, a.stores = [l]) : (t = a.stores, t === null ? a.stores = [l] : t.push(l));
  }
  function Ss(l, a, t, u) {
    a.value = t, a.getSnapshot = u, bs(a) && os(l);
  }
  function gs(l, a, t) {
    return t(function() {
      bs(a) && os(l);
    });
  }
  function bs(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var t = a();
      return !Xl(l, t);
    } catch {
      return !0;
    }
  }
  function os(l) {
    var a = _a(l, 2);
    a !== null && ql(a, l, 2);
  }
  function rf(l) {
    var a = Nl();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), Et) {
        Qa(!0);
        try {
          t();
        } finally {
          Qa(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ea,
      lastRenderedState: l
    }, a;
  }
  function As(l, a, t, u) {
    return l.baseState = t, Of(
      l,
      x,
      typeof u == "function" ? u : Ea
    );
  }
  function t1(l, a, t, u, e) {
    if (an(l)) throw Error(m(485));
    if (l = a.action, l !== null) {
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
      U.T !== null ? t(!0) : n.isTransition = !1, u(n), t = a.pending, t === null ? (n.next = a.pending = n, zs(a, n)) : (n.next = t.next, a.pending = t.next = n);
    }
  }
  function zs(l, a) {
    var t = a.action, u = a.payload, e = l.state;
    if (a.isTransition) {
      var n = U.T, f = {};
      U.T = f;
      try {
        var c = t(e, u), i = U.S;
        i !== null && i(f, c), Es(l, a, c);
      } catch (v) {
        Hf(l, a, v);
      } finally {
        U.T = n;
      }
    } else
      try {
        n = t(e, u), Es(l, a, n);
      } catch (v) {
        Hf(l, a, v);
      }
  }
  function Es(l, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(u) {
        Ts(l, a, u);
      },
      function(u) {
        return Hf(l, a, u);
      }
    ) : Ts(l, a, t);
  }
  function Ts(l, a, t) {
    a.status = "fulfilled", a.value = t, Ds(a), l.state = t, a = l.pending, a !== null && (t = a.next, t === a ? l.pending = null : (t = t.next, a.next = t, zs(l, t)));
  }
  function Hf(l, a, t) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        a.status = "rejected", a.reason = t, Ds(a), a = a.next;
      while (a !== u);
    }
    l.action = null;
  }
  function Ds(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function Ms(l, a) {
    return a;
  }
  function Us(l, a) {
    if (_) {
      var t = K.formState;
      if (t !== null) {
        l: {
          var u = H;
          if (_) {
            if (zl) {
              a: {
                for (var e = zl, n = sa; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break a;
                  }
                  if (e = na(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break a;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                zl = na(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            ot(u);
          }
          u = !1;
        }
        u && (a = t[0]);
      }
    }
    return t = Nl(), t.memoizedState = t.baseState = a, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ms,
      lastRenderedState: a
    }, t.queue = u, t = ps.bind(
      null,
      H,
      u
    ), u.dispatch = t, u = rf(!1), n = jf.bind(
      null,
      H,
      !1,
      u.queue
    ), u = Nl(), e = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, t = t1.bind(
      null,
      H,
      e,
      n,
      t
    ), e.dispatch = t, u.memoizedState = l, [a, t, !1];
  }
  function Os(l) {
    var a = cl();
    return qs(a, x, l);
  }
  function qs(l, a, t) {
    a = Of(
      l,
      a,
      Ms
    )[0], l = Ie(Ea)[0], a = typeof a == "object" && a !== null && typeof a.then == "function" ? Ku(a) : a;
    var u = cl(), e = u.queue, n = e.dispatch;
    return t !== u.memoizedState && (H.flags |= 2048, uu(
      9,
      u1.bind(null, e, t),
      { destroy: void 0 },
      null
    )), [a, n, l];
  }
  function u1(l, a) {
    l.action = a;
  }
  function rs(l) {
    var a = cl(), t = x;
    if (t !== null)
      return qs(a, t, l);
    cl(), a = a.memoizedState, t = cl();
    var u = t.queue.dispatch;
    return t.memoizedState = l, [a, u, !1];
  }
  function uu(l, a, t, u) {
    return l = { tag: l, create: a, inst: t, deps: u, next: null }, a = H.updateQueue, a === null && (a = ke(), H.updateQueue = a), t = a.lastEffect, t === null ? a.lastEffect = l.next = l : (u = t.next, t.next = l, l.next = u, a.lastEffect = l), l;
  }
  function Hs() {
    return cl().memoizedState;
  }
  function Pe(l, a, t, u) {
    var e = Nl();
    H.flags |= l, e.memoizedState = uu(
      1 | a,
      t,
      { destroy: void 0 },
      u === void 0 ? null : u
    );
  }
  function ln(l, a, t, u) {
    var e = cl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    x !== null && u !== null && zf(u, x.memoizedState.deps) ? e.memoizedState = uu(a, t, n, u) : (H.flags |= l, e.memoizedState = uu(1 | a, t, n, u));
  }
  function Rs(l, a) {
    Pe(8390656, 8, l, a);
  }
  function Rf(l, a) {
    ln(2048, 8, l, a);
  }
  function Ns(l, a) {
    return ln(4, 2, l, a);
  }
  function Bs(l, a) {
    return ln(4, 4, l, a);
  }
  function Ys(l, a) {
    if (typeof a == "function") {
      l = l();
      var t = a(l);
      return function() {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function Qs(l, a, t) {
    t = t != null ? t.concat([l]) : null, ln(4, 4, Ys.bind(null, a, l), t);
  }
  function Nf() {
  }
  function js(l, a) {
    var t = cl();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    return a !== null && zf(a, u[1]) ? u[0] : (t.memoizedState = [l, a], l);
  }
  function Xs(l, a) {
    var t = cl();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    if (a !== null && zf(a, u[1]))
      return u[0];
    if (u = l(), Et) {
      Qa(!0);
      try {
        l();
      } finally {
        Qa(!1);
      }
    }
    return t.memoizedState = [u, a], u;
  }
  function Bf(l, a, t) {
    return t === void 0 || Ca & 1073741824 ? l.memoizedState = a : (l.memoizedState = t, l = G0(), H.lanes |= l, ka |= l, t);
  }
  function _s(l, a, t, u) {
    return Xl(t, a) ? t : It.current !== null ? (l = Bf(l, t, u), Xl(l, a) || (ml = !0), l) : Ca & 42 ? (l = G0(), H.lanes |= l, ka |= l, a) : (ml = !0, l.memoizedState = t);
  }
  function Gs(l, a, t, u, e) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var f = U.T, c = {};
    U.T = c, jf(l, !1, a, t);
    try {
      var i = e(), v = U.S;
      if (v !== null && v(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Pd(
          i,
          u
        );
        Lu(
          l,
          a,
          g,
          Cl(l)
        );
      } else
        Lu(
          l,
          a,
          u,
          Cl(l)
        );
    } catch (o) {
      Lu(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: o },
        Cl()
      );
    } finally {
      j.p = n, U.T = f;
    }
  }
  function e1() {
  }
  function Yf(l, a, t, u) {
    if (l.tag !== 5) throw Error(m(476));
    var e = Zs(l).queue;
    Gs(
      l,
      e,
      a,
      Vl,
      t === null ? e1 : function() {
        return Cs(l), t(u);
      }
    );
  }
  function Zs(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: Vl,
      baseState: Vl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: Vl
      },
      next: null
    };
    var t = {};
    return a.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function Cs(l) {
    var a = Zs(l).next.queue;
    Lu(l, a, {}, Cl());
  }
  function Qf() {
    return Ul(de);
  }
  function xs() {
    return cl().memoizedState;
  }
  function Vs() {
    return cl().memoizedState;
  }
  function n1(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = Cl();
          l = Ka(t);
          var u = La(a, l, t);
          u !== null && (ql(u, a, t), Wu(u, a, t)), a = { cache: bf() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function f1(l, a, t) {
    var u = Cl();
    t = {
      lane: u,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, an(l) ? Ks(a, t) : (t = vf(l, a, t, u), t !== null && (ql(t, l, u), Ls(t, a, u)));
  }
  function ps(l, a, t) {
    var u = Cl();
    Lu(l, a, t, u);
  }
  function Lu(l, a, t, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (an(l)) Ks(a, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = a.lastRenderedReducer, n !== null))
        try {
          var f = a.lastRenderedState, c = n(f, t);
          if (e.hasEagerState = !0, e.eagerState = c, Xl(c, f))
            return Ge(l, a, e, 0), K === null && _e(), !1;
        } catch {
        } finally {
        }
      if (t = vf(l, a, e, u), t !== null)
        return ql(t, l, u), Ls(t, a, u), !0;
    }
    return !1;
  }
  function jf(l, a, t, u) {
    if (u = {
      lane: 2,
      revertLane: Mc(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, an(l)) {
      if (a) throw Error(m(479));
    } else
      a = vf(
        l,
        t,
        u,
        2
      ), a !== null && ql(a, l, 2);
  }
  function an(l) {
    var a = l.alternate;
    return l === H || a !== null && a === H;
  }
  function Ks(l, a) {
    au = We = !0;
    var t = l.pending;
    t === null ? a.next = a : (a.next = t.next, t.next = a), l.pending = a;
  }
  function Ls(l, a, t) {
    if (t & 4194176) {
      var u = a.lanes;
      u &= l.pendingLanes, t |= u, a.lanes = t, ti(l, t);
    }
  }
  var da = {
    readContext: Ul,
    use: $e,
    useCallback: nl,
    useContext: nl,
    useEffect: nl,
    useImperativeHandle: nl,
    useLayoutEffect: nl,
    useInsertionEffect: nl,
    useMemo: nl,
    useReducer: nl,
    useRef: nl,
    useState: nl,
    useDebugValue: nl,
    useDeferredValue: nl,
    useTransition: nl,
    useSyncExternalStore: nl,
    useId: nl
  };
  da.useCacheRefresh = nl, da.useMemoCache = nl, da.useHostTransitionStatus = nl, da.useFormState = nl, da.useActionState = nl, da.useOptimistic = nl;
  var Tt = {
    readContext: Ul,
    use: $e,
    useCallback: function(l, a) {
      return Nl().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: Ul,
    useEffect: Rs,
    useImperativeHandle: function(l, a, t) {
      t = t != null ? t.concat([l]) : null, Pe(
        4194308,
        4,
        Ys.bind(null, a, l),
        t
      );
    },
    useLayoutEffect: function(l, a) {
      return Pe(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      Pe(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var t = Nl();
      a = a === void 0 ? null : a;
      var u = l();
      if (Et) {
        Qa(!0);
        try {
          l();
        } finally {
          Qa(!1);
        }
      }
      return t.memoizedState = [u, a], u;
    },
    useReducer: function(l, a, t) {
      var u = Nl();
      if (t !== void 0) {
        var e = t(a);
        if (Et) {
          Qa(!0);
          try {
            t(a);
          } finally {
            Qa(!1);
          }
        }
      } else e = a;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = f1.bind(
        null,
        H,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var a = Nl();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = rf(l);
      var a = l.queue, t = ps.bind(null, H, a);
      return a.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: Nf,
    useDeferredValue: function(l, a) {
      var t = Nl();
      return Bf(t, l, a);
    },
    useTransition: function() {
      var l = rf(!1);
      return l = Gs.bind(
        null,
        H,
        l.queue,
        !0,
        !1
      ), Nl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, t) {
      var u = H, e = Nl();
      if (_) {
        if (t === void 0)
          throw Error(m(407));
        t = t();
      } else {
        if (t = a(), K === null) throw Error(m(349));
        Q & 60 || ms(u, a, t);
      }
      e.memoizedState = t;
      var n = { value: t, getSnapshot: a };
      return e.queue = n, Rs(gs.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, uu(
        9,
        Ss.bind(
          null,
          u,
          n,
          t,
          a
        ),
        { destroy: void 0 },
        null
      ), t;
    },
    useId: function() {
      var l = Nl(), a = K.identifierPrefix;
      if (_) {
        var t = Aa, u = oa;
        t = (u & ~(1 << 32 - jl(u) - 1)).toString(32) + t, a = ":" + a + "R" + t, t = Fe++, 0 < t && (a += "H" + t.toString(32)), a += ":";
      } else
        t = l1++, a = ":" + a + "r" + t.toString(32) + ":";
      return l.memoizedState = a;
    },
    useCacheRefresh: function() {
      return Nl().memoizedState = n1.bind(
        null,
        H
      );
    }
  };
  Tt.useMemoCache = Uf, Tt.useHostTransitionStatus = Qf, Tt.useFormState = Us, Tt.useActionState = Us, Tt.useOptimistic = function(l) {
    var a = Nl();
    a.memoizedState = a.baseState = l;
    var t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return a.queue = t, a = jf.bind(
      null,
      H,
      !0,
      t
    ), t.dispatch = a, [l, a];
  };
  var xa = {
    readContext: Ul,
    use: $e,
    useCallback: js,
    useContext: Ul,
    useEffect: Rf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ns,
    useLayoutEffect: Bs,
    useMemo: Xs,
    useReducer: Ie,
    useRef: Hs,
    useState: function() {
      return Ie(Ea);
    },
    useDebugValue: Nf,
    useDeferredValue: function(l, a) {
      var t = cl();
      return _s(
        t,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = Ie(Ea)[0], a = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        a
      ];
    },
    useSyncExternalStore: ys,
    useId: xs
  };
  xa.useCacheRefresh = Vs, xa.useMemoCache = Uf, xa.useHostTransitionStatus = Qf, xa.useFormState = Os, xa.useActionState = Os, xa.useOptimistic = function(l, a) {
    var t = cl();
    return As(t, x, l, a);
  };
  var Dt = {
    readContext: Ul,
    use: $e,
    useCallback: js,
    useContext: Ul,
    useEffect: Rf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ns,
    useLayoutEffect: Bs,
    useMemo: Xs,
    useReducer: qf,
    useRef: Hs,
    useState: function() {
      return qf(Ea);
    },
    useDebugValue: Nf,
    useDeferredValue: function(l, a) {
      var t = cl();
      return x === null ? Bf(t, l, a) : _s(
        t,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = qf(Ea)[0], a = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        a
      ];
    },
    useSyncExternalStore: ys,
    useId: xs
  };
  Dt.useCacheRefresh = Vs, Dt.useMemoCache = Uf, Dt.useHostTransitionStatus = Qf, Dt.useFormState = rs, Dt.useActionState = rs, Dt.useOptimistic = function(l, a) {
    var t = cl();
    return x !== null ? As(t, x, l, a) : (t.baseState = l, [l, t.queue.dispatch]);
  };
  function Xf(l, a, t, u) {
    a = l.memoizedState, t = t(u, a), t = t == null ? a : Z({}, a, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var _f = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? O(l) === l : !1;
    },
    enqueueSetState: function(l, a, t) {
      l = l._reactInternals;
      var u = Cl(), e = Ka(u);
      e.payload = a, t != null && (e.callback = t), a = La(l, e, u), a !== null && (ql(a, l, u), Wu(a, l, u));
    },
    enqueueReplaceState: function(l, a, t) {
      l = l._reactInternals;
      var u = Cl(), e = Ka(u);
      e.tag = 1, e.payload = a, t != null && (e.callback = t), a = La(l, e, u), a !== null && (ql(a, l, u), Wu(a, l, u));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var t = Cl(), u = Ka(t);
      u.tag = 2, a != null && (u.callback = a), a = La(l, u, t), a !== null && (ql(a, l, t), Wu(a, l, t));
    }
  };
  function Js(l, a, t, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : a.prototype && a.prototype.isPureReactComponent ? !Bu(t, u) || !Bu(e, n) : !0;
  }
  function ws(l, a, t, u) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, u), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, u), a.state !== l && _f.enqueueReplaceState(a, a.state, null);
  }
  function Mt(l, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var u in a)
        u !== "ref" && (t[u] = a[u]);
    }
    if (l = l.defaultProps) {
      t === a && (t = Z({}, t));
      for (var e in l)
        t[e] === void 0 && (t[e] = l[e]);
    }
    return t;
  }
  var tn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof {} == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ws(l) {
    tn(l);
  }
  function Fs(l) {
    console.error(l);
  }
  function ks(l) {
    tn(l);
  }
  function un(l, a) {
    try {
      var t = l.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function $s(l, a, t) {
    try {
      var u = l.onCaughtError;
      u(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Gf(l, a, t) {
    return t = Ka(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      un(l, a);
    }, t;
  }
  function Is(l) {
    return l = Ka(l), l.tag = 3, l;
  }
  function Ps(l, a, t, u) {
    var e = t.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        $s(a, t, u);
      };
    }
    var f = t.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      $s(a, t, u), typeof e != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function c1(l, a, t, u, e) {
    if (t.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (a = t.alternate, a !== null && wu(
        a,
        t,
        e,
        !0
      ), t = Fl.current, t !== null) {
        switch (t.tag) {
          case 13:
            return va === null ? Ac() : t.alternate === null && ll === 0 && (ll = 3), t.flags &= -257, t.flags |= 65536, t.lanes = e, u === mf ? t.flags |= 16384 : (a = t.updateQueue, a === null ? t.updateQueue = /* @__PURE__ */ new Set([u]) : a.add(u), Ec(l, u, e)), !1;
          case 22:
            return t.flags |= 65536, u === mf ? t.flags |= 16384 : (a = t.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, t.updateQueue = a) : (t = a.retryQueue, t === null ? a.retryQueue = /* @__PURE__ */ new Set([u]) : t.add(u)), Ec(l, u, e)), !1;
        }
        throw Error(m(435, t.tag));
      }
      return Ec(l, u, e), Ac(), !1;
    }
    if (_)
      return a = Fl.current, a !== null ? (!(a.flags & 65536) && (a.flags |= 256), a.flags |= 65536, a.lanes = e, u !== yf && (l = Error(m(422), { cause: u }), Xu(Jl(l, t)))) : (u !== yf && (a = Error(m(423), {
        cause: u
      }), Xu(
        Jl(a, t)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = Jl(u, t), e = Gf(
        l.stateNode,
        u,
        e
      ), Pf(l, e), ll !== 4 && (ll = 2)), !1;
    var n = Error(m(520), { cause: u });
    if (n = Jl(n, t), te === null ? te = [n] : te.push(n), ll !== 4 && (ll = 2), a === null) return !0;
    u = Jl(u, t), t = a;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = e & -e, t.lanes |= l, l = Gf(t.stateNode, u, l), Pf(t, l), !1;
        case 1:
          if (a = t.type, n = t.stateNode, (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && ($a === null || !$a.has(n))))
            return t.flags |= 65536, e &= -e, t.lanes |= e, e = Is(e), Ps(
              e,
              l,
              t,
              u
            ), Pf(t, e), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var l0 = Error(m(461)), ml = !1;
  function El(l, a, t, u) {
    a.child = l === null ? ns(a, null, t, u) : At(
      a,
      l.child,
      t,
      u
    );
  }
  function a0(l, a, t, u, e) {
    t = t.render;
    var n = a.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Ot(a), u = Ef(
      l,
      a,
      t,
      f,
      n,
      e
    ), c = Tf(), l !== null && !ml ? (Df(l, a, e), Ta(l, a, e)) : (_ && c && df(a), a.flags |= 1, El(l, a, u, e), a.child);
  }
  function t0(l, a, t, u, e) {
    if (l === null) {
      var n = t.type;
      return typeof n == "function" && !cc(n) && n.defaultProps === void 0 && t.compare === null ? (a.tag = 15, a.type = n, u0(
        l,
        a,
        n,
        u,
        e
      )) : (l = sn(
        t.type,
        null,
        u,
        a,
        a.mode,
        e
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (n = l.child, !wf(l, e)) {
      var f = n.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Bu, t(f, u) && l.ref === a.ref)
        return Ta(l, a, e);
    }
    return a.flags |= 1, l = Fa(n, u), l.ref = a.ref, l.return = a, a.child = l;
  }
  function u0(l, a, t, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Bu(n, u) && l.ref === a.ref)
        if (ml = !1, a.pendingProps = u = n, wf(l, e))
          l.flags & 131072 && (ml = !0);
        else
          return a.lanes = l.lanes, Ta(l, a, e);
    }
    return Zf(
      l,
      a,
      t,
      u,
      e
    );
  }
  function e0(l, a, t) {
    var u = a.pendingProps, e = u.children, n = (a.stateNode._pendingVisibility & 2) !== 0, f = l !== null ? l.memoizedState : null;
    if (Ju(l, a), u.mode === "hidden" || n) {
      if (a.flags & 128) {
        if (u = f !== null ? f.baseLanes | t : t, l !== null) {
          for (e = a.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          a.childLanes = n & ~u;
        } else a.childLanes = 0, a.child = null;
        return n0(
          l,
          a,
          u,
          t
        );
      }
      if (t & 536870912)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && we(
          a,
          f !== null ? f.cachePool : null
        ), f !== null ? fs(a, f) : Sf(), cs(a);
      else
        return a.lanes = a.childLanes = 536870912, n0(
          l,
          a,
          f !== null ? f.baseLanes | t : t,
          t
        );
    } else
      f !== null ? (we(a, f.cachePool), fs(a, f), Za(), a.memoizedState = null) : (l !== null && we(a, null), Sf(), Za());
    return El(l, a, e, t), a.child;
  }
  function n0(l, a, t, u) {
    var e = Af();
    return e = e === null ? null : { parent: dl._currentValue, pool: e }, a.memoizedState = {
      baseLanes: t,
      cachePool: e
    }, l !== null && we(a, null), Sf(), cs(a), l !== null && wu(l, a, u, !0), null;
  }
  function Ju(l, a) {
    var t = a.ref;
    if (t === null)
      l !== null && l.ref !== null && (a.flags |= 2097664);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(m(284));
      (l === null || l.ref !== t) && (a.flags |= 2097664);
    }
  }
  function Zf(l, a, t, u, e) {
    return Ot(a), t = Ef(
      l,
      a,
      t,
      u,
      void 0,
      e
    ), u = Tf(), l !== null && !ml ? (Df(l, a, e), Ta(l, a, e)) : (_ && u && df(a), a.flags |= 1, El(l, a, t, e), a.child);
  }
  function f0(l, a, t, u, e, n) {
    return Ot(a), a.updateQueue = null, t = hs(
      a,
      u,
      t,
      e
    ), ds(l), u = Tf(), l !== null && !ml ? (Df(l, a, n), Ta(l, a, n)) : (_ && u && df(a), a.flags |= 1, El(l, a, t, n), a.child);
  }
  function c0(l, a, t, u, e) {
    if (Ot(a), a.stateNode === null) {
      var n = Wt, f = t.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new t(u, n), a.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = _f, a.stateNode = n, n._reactInternals = a, n = a.stateNode, n.props = u, n.state = a.memoizedState, n.refs = {}, $f(a), f = t.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : Wt, n.state = a.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (Xf(
        a,
        t,
        f,
        u
      ), n.state = a.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && _f.enqueueReplaceState(n, n.state, null), ku(a, u, n, e), Fu(), n.state = a.memoizedState), typeof n.componentDidMount == "function" && (a.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = a.stateNode;
      var c = a.memoizedProps, i = Mt(t, c);
      n.props = i;
      var v = n.context, g = t.contextType;
      f = Wt, typeof g == "object" && g !== null && (f = Ul(g));
      var o = t.getDerivedStateFromProps;
      g = typeof o == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = a.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== f) && ws(
        a,
        n,
        u,
        f
      ), pa = !1;
      var y = a.memoizedState;
      n.state = y, ku(a, u, n, e), Fu(), v = a.memoizedState, c || y !== v || pa ? (typeof o == "function" && (Xf(
        a,
        t,
        o,
        u
      ), v = a.memoizedState), (i = pa || Js(
        a,
        t,
        i,
        u,
        y,
        v,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = u, a.memoizedState = v), n.props = u, n.state = v, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), u = !1);
    } else {
      n = a.stateNode, If(l, a), f = a.memoizedProps, g = Mt(t, f), n.props = g, o = a.pendingProps, y = n.context, v = t.contextType, i = Wt, typeof v == "object" && v !== null && (i = Ul(v)), c = t.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== o || y !== i) && ws(
        a,
        n,
        u,
        i
      ), pa = !1, y = a.memoizedState, n.state = y, ku(a, u, n, e), Fu();
      var S = a.memoizedState;
      f !== o || y !== S || pa || l !== null && l.dependencies !== null && en(l.dependencies) ? (typeof c == "function" && (Xf(
        a,
        t,
        c,
        u
      ), S = a.memoizedState), (g = pa || Js(
        a,
        t,
        g,
        u,
        y,
        S,
        i
      ) || l !== null && l.dependencies !== null && en(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (a.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (a.flags |= 1024), a.memoizedProps = u, a.memoizedState = S), n.props = u, n.state = S, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (a.flags |= 1024), u = !1);
    }
    return n = u, Ju(l, a), u = (a.flags & 128) !== 0, n || u ? (n = a.stateNode, t = u && typeof t.getDerivedStateFromError != "function" ? null : n.render(), a.flags |= 1, l !== null && u ? (a.child = At(
      a,
      l.child,
      null,
      e
    ), a.child = At(
      a,
      null,
      t,
      e
    )) : El(l, a, t, e), a.memoizedState = n.state, l = a.child) : l = Ta(
      l,
      a,
      e
    ), l;
  }
  function i0(l, a, t, u) {
    return ju(), a.flags |= 256, El(l, a, t, u), a.child;
  }
  var Cf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xf(l) {
    return { baseLanes: l, cachePool: vs() };
  }
  function Vf(l, a, t) {
    return l = l !== null ? l.childLanes & ~t : 0, a && (l |= Pl), l;
  }
  function s0(l, a, t) {
    var u = a.pendingProps, e = !1, n = (a.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (vl.current & 2) !== 0), f && (e = !0, a.flags &= -129), f = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (_) {
        if (e ? Ga(a) : Za(), _) {
          var c = zl, i;
          if (i = c) {
            l: {
              for (i = c, c = sa; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = na(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (a.memoizedState = {
              dehydrated: c,
              treeContext: gt !== null ? { id: oa, overflow: Aa } : null,
              retryLane: 536870912
            }, i = Il(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = a, a.child = i, Ol = a, zl = null, i = !0) : i = !1;
          }
          i || ot(a);
        }
        if (c = a.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return c.data === "$!" ? a.lanes = 16 : a.lanes = 536870912, null;
        za(a);
      }
      return c = u.children, u = u.fallback, e ? (Za(), e = a.mode, c = Kf(
        { mode: "hidden", children: c },
        e
      ), u = rt(
        u,
        e,
        t,
        null
      ), c.return = a, u.return = a, c.sibling = u, a.child = c, e = a.child, e.memoizedState = xf(t), e.childLanes = Vf(
        l,
        f,
        t
      ), a.memoizedState = Cf, u) : (Ga(a), pf(a, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        a.flags & 256 ? (Ga(a), a.flags &= -257, a = Lf(
          l,
          a,
          t
        )) : a.memoizedState !== null ? (Za(), a.child = l.child, a.flags |= 128, a = null) : (Za(), e = u.fallback, c = a.mode, u = Kf(
          { mode: "visible", children: u.children },
          c
        ), e = rt(
          e,
          c,
          t,
          null
        ), e.flags |= 2, u.return = a, e.return = a, u.sibling = e, a.child = u, At(
          a,
          l.child,
          null,
          t
        ), u = a.child, u.memoizedState = xf(t), u.childLanes = Vf(
          l,
          f,
          t
        ), a.memoizedState = Cf, a = e);
      else if (Ga(a), c.data === "$!") {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var v = f.dgst;
        f = v, u = Error(m(419)), u.stack = "", u.digest = f, Xu({ value: u, source: null, stack: null }), a = Lf(
          l,
          a,
          t
        );
      } else if (ml || wu(l, a, t, !1), f = (t & l.childLanes) !== 0, ml || f) {
        if (f = K, f !== null) {
          if (u = t & -t, u & 42) u = 1;
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
          if (u = u & (f.suspendedLanes | t) ? 0 : u, u !== 0 && u !== i.retryLane)
            throw i.retryLane = u, _a(l, u), ql(f, l, u), l0;
        }
        c.data === "$?" || Ac(), a = Lf(
          l,
          a,
          t
        );
      } else
        c.data === "$?" ? (a.flags |= 128, a.child = l.child, a = T1.bind(
          null,
          l
        ), c._reactRetry = a, a = null) : (l = i.treeContext, zl = na(
          c.nextSibling
        ), Ol = a, _ = !0, ua = null, sa = !1, l !== null && (wl[Wl++] = oa, wl[Wl++] = Aa, wl[Wl++] = gt, oa = l.id, Aa = l.overflow, gt = a), a = pf(
          a,
          u.children
        ), a.flags |= 4096);
      return a;
    }
    return e ? (Za(), e = u.fallback, c = a.mode, i = l.child, v = i.sibling, u = Fa(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 31457280, v !== null ? e = Fa(v, e) : (e = rt(
      e,
      c,
      t,
      null
    ), e.flags |= 2), e.return = a, u.return = a, u.sibling = e, a.child = u, u = e, e = a.child, c = l.child.memoizedState, c === null ? c = xf(t) : (i = c.cachePool, i !== null ? (v = dl._currentValue, i = i.parent !== v ? { parent: v, pool: v } : i) : i = vs(), c = {
      baseLanes: c.baseLanes | t,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = Vf(
      l,
      f,
      t
    ), a.memoizedState = Cf, u) : (Ga(a), t = l.child, l = t.sibling, t = Fa(t, {
      mode: "visible",
      children: u.children
    }), t.return = a, t.sibling = null, l !== null && (f = a.deletions, f === null ? (a.deletions = [l], a.flags |= 16) : f.push(l)), a.child = t, a.memoizedState = null, t);
  }
  function pf(l, a) {
    return a = Kf(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function Kf(l, a) {
    return j0(l, a, 0, null);
  }
  function Lf(l, a, t) {
    return At(a, l.child, null, t), l = pf(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function v0(l, a, t) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a), Ff(l.return, a, t);
  }
  function Jf(l, a, t, u, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: t,
      tailMode: e
    } : (n.isBackwards = a, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = t, n.tailMode = e);
  }
  function d0(l, a, t) {
    var u = a.pendingProps, e = u.revealOrder, n = u.tail;
    if (El(l, a, u.children, t), u = vl.current, u & 2)
      u = u & 1 | 2, a.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        l: for (l = a.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && v0(l, t, a);
          else if (l.tag === 19)
            v0(l, t, a);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === a) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      u &= 1;
    }
    switch (W(vl, u), e) {
      case "forwards":
        for (t = a.child, e = null; t !== null; )
          l = t.alternate, l !== null && Je(l) === null && (e = t), t = t.sibling;
        t = e, t === null ? (e = a.child, a.child = null) : (e = t.sibling, t.sibling = null), Jf(
          a,
          !1,
          e,
          t,
          n
        );
        break;
      case "backwards":
        for (t = null, e = a.child, a.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Je(l) === null) {
            a.child = e;
            break;
          }
          l = e.sibling, e.sibling = t, t = e, e = l;
        }
        Jf(
          a,
          !0,
          t,
          null,
          n
        );
        break;
      case "together":
        Jf(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ta(l, a, t) {
    if (l !== null && (a.dependencies = l.dependencies), ka |= a.lanes, !(t & a.childLanes))
      if (l !== null) {
        if (wu(
          l,
          a,
          t,
          !1
        ), (t & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(m(153));
    if (a.child !== null) {
      for (l = a.child, t = Fa(l, l.pendingProps), a.child = t, t.return = a; l.sibling !== null; )
        l = l.sibling, t = t.sibling = Fa(l, l.pendingProps), t.return = a;
      t.sibling = null;
    }
    return a.child;
  }
  function wf(l, a) {
    return l.lanes & a ? !0 : (l = l.dependencies, !!(l !== null && en(l)));
  }
  function i1(l, a, t) {
    switch (a.tag) {
      case 3:
        ze(a, a.stateNode.containerInfo), Va(a, dl, l.memoizedState.cache), ju();
        break;
      case 27:
      case 5:
        Xn(a);
        break;
      case 4:
        ze(a, a.stateNode.containerInfo);
        break;
      case 10:
        Va(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Ga(a), a.flags |= 128, null) : t & a.child.childLanes ? s0(l, a, t) : (Ga(a), l = Ta(
            l,
            a,
            t
          ), l !== null ? l.sibling : null);
        Ga(a);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (t & a.childLanes) !== 0, u || (wu(
          l,
          a,
          t,
          !1
        ), u = (t & a.childLanes) !== 0), e) {
          if (u)
            return d0(
              l,
              a,
              t
            );
          a.flags |= 128;
        }
        if (e = a.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), W(vl, vl.current), u) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, e0(l, a, t);
      case 24:
        Va(a, dl, l.memoizedState.cache);
    }
    return Ta(l, a, t);
  }
  function h0(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        ml = !0;
      else {
        if (!wf(l, t) && !(a.flags & 128))
          return ml = !1, i1(
            l,
            a,
            t
          );
        ml = !!(l.flags & 131072);
      }
    else
      ml = !1, _ && a.flags & 1048576 && ki(a, xe, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        l: {
          l = a.pendingProps;
          var u = a.elementType, e = u._init;
          if (u = e(u._payload), a.type = u, typeof u == "function")
            cc(u) ? (l = Mt(u, l), a.tag = 1, a = c0(
              null,
              a,
              u,
              l,
              t
            )) : (a.tag = 0, a = Zf(
              null,
              a,
              u,
              l,
              t
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === X) {
                a.tag = 11, a = a0(
                  null,
                  a,
                  u,
                  l,
                  t
                );
                break l;
              } else if (e === xl) {
                a.tag = 14, a = t0(
                  null,
                  a,
                  u,
                  l,
                  t
                );
                break l;
              }
            }
            throw a = Bt(u) || u, Error(m(306, a, ""));
          }
        }
        return a;
      case 0:
        return Zf(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 1:
        return u = a.type, e = Mt(
          u,
          a.pendingProps
        ), c0(
          l,
          a,
          u,
          e,
          t
        );
      case 3:
        l: {
          if (ze(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          var n = a.pendingProps;
          e = a.memoizedState, u = e.element, If(l, a), ku(a, n, null, t);
          var f = a.memoizedState;
          if (n = f.cache, Va(a, dl, n), n !== e.cache && kf(
            a,
            [dl],
            t,
            !0
          ), Fu(), n = f.element, e.isDehydrated)
            if (e = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, a.updateQueue.baseState = e, a.memoizedState = e, a.flags & 256) {
              a = i0(
                l,
                a,
                n,
                t
              );
              break l;
            } else if (n !== u) {
              u = Jl(
                Error(m(424)),
                a
              ), Xu(u), a = i0(
                l,
                a,
                n,
                t
              );
              break l;
            } else
              for (zl = na(
                a.stateNode.containerInfo.firstChild
              ), Ol = a, _ = !0, ua = null, sa = !0, t = ns(
                a,
                null,
                n,
                t
              ), a.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (ju(), n === u) {
              a = Ta(
                l,
                a,
                t
              );
              break l;
            }
            El(l, a, n, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return Ju(l, a), l === null ? (t = Sv(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = t : _ || (t = a.type, l = a.pendingProps, u = En(
          Ya.current
        ).createElement(t), u[Ml] = a, u[Hl] = l, Tl(u, t, l), yl(u), a.stateNode = u) : a.memoizedState = Sv(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Xn(a), l === null && _ && (u = a.stateNode = hv(
          a.type,
          a.pendingProps,
          Ya.current
        ), Ol = a, sa = !0, zl = na(
          u.firstChild
        )), u = a.pendingProps.children, l !== null || _ ? El(
          l,
          a,
          u,
          t
        ) : a.child = At(
          a,
          null,
          u,
          t
        ), Ju(l, a), a.child;
      case 5:
        return l === null && _ && ((e = u = zl) && (u = G1(
          u,
          a.type,
          a.pendingProps,
          sa
        ), u !== null ? (a.stateNode = u, Ol = a, zl = na(
          u.firstChild
        ), sa = !1, e = !0) : e = !1), e || ot(a)), Xn(a), e = a.type, n = a.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Yc(e, n) ? u = null : f !== null && Yc(e, f) && (a.flags |= 32), a.memoizedState !== null && (e = Ef(
          l,
          a,
          a1,
          null,
          null,
          t
        ), de._currentValue = e), Ju(l, a), El(l, a, u, t), a.child;
      case 6:
        return l === null && _ && ((l = t = zl) && (t = Z1(
          t,
          a.pendingProps,
          sa
        ), t !== null ? (a.stateNode = t, Ol = a, zl = null, l = !0) : l = !1), l || ot(a)), null;
      case 13:
        return s0(l, a, t);
      case 4:
        return ze(
          a,
          a.stateNode.containerInfo
        ), u = a.pendingProps, l === null ? a.child = At(
          a,
          null,
          u,
          t
        ) : El(
          l,
          a,
          u,
          t
        ), a.child;
      case 11:
        return a0(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 7:
        return El(
          l,
          a,
          a.pendingProps,
          t
        ), a.child;
      case 8:
        return El(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 12:
        return El(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 10:
        return u = a.pendingProps, Va(a, a.type, u.value), El(
          l,
          a,
          u.children,
          t
        ), a.child;
      case 9:
        return e = a.type._context, u = a.pendingProps.children, Ot(a), e = Ul(e), u = u(e), a.flags |= 1, El(l, a, u, t), a.child;
      case 14:
        return t0(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 15:
        return u0(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 19:
        return d0(l, a, t);
      case 22:
        return e0(l, a, t);
      case 24:
        return Ot(a), u = Ul(dl), l === null ? (e = Af(), e === null && (e = K, n = bf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= t), e = n), a.memoizedState = {
          parent: u,
          cache: e
        }, $f(a), Va(a, dl, e)) : (l.lanes & t && (If(l, a), ku(a, null, null, t), Fu()), e = l.memoizedState, n = a.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, a.memoizedState = e, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = e), Va(a, dl, u)) : (u = n.cache, Va(a, dl, u), u !== e.cache && kf(
          a,
          [dl],
          t,
          !0
        ))), El(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(m(156, a.tag));
  }
  var Wf = fa(null), Ut = null, Da = null;
  function Va(l, a, t) {
    W(Wf, a._currentValue), a._currentValue = t;
  }
  function Ma(l) {
    l._currentValue = Wf.current, hl(Wf);
  }
  function Ff(l, a, t) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, u !== null && (u.childLanes |= a)) : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a), l === t) break;
      l = l.return;
    }
  }
  function kf(l, a, t, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < a.length; i++)
            if (c.context === a[i]) {
              n.lanes |= t, c = n.alternate, c !== null && (c.lanes |= t), Ff(
                n.return,
                t,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= t, n = f.alternate, n !== null && (n.lanes |= t), Ff(f, t, l), f = null;
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
  function wu(l, a, t, u) {
    l = null;
    for (var e = a, n = !1; e !== null; ) {
      if (!n) {
        if (e.flags & 524288) n = !0;
        else if (e.flags & 262144) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Xl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Ae.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de]);
      }
      e = e.return;
    }
    l !== null && kf(
      a,
      l,
      t,
      u
    ), a.flags |= 262144;
  }
  function en(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Xl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ot(l) {
    Ut = l, Da = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return y0(Ut, l);
  }
  function nn(l, a) {
    return Ut === null && Ot(l), y0(l, a);
  }
  function y0(l, a) {
    var t = a._currentValue;
    if (a = { context: a, memoizedValue: t, next: null }, Da === null) {
      if (l === null) throw Error(m(308));
      Da = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else Da = Da.next = a;
    return t;
  }
  var pa = !1;
  function $f(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function If(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ka(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function La(l, a, t) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, k & 2) {
      var e = u.pending;
      return e === null ? a.next = a : (a.next = e.next, e.next = a), u.pending = a, a = Ze(l), Wi(l, null, t), a;
    }
    return Ge(l, u, a, t), Ze(l);
  }
  function Wu(l, a, t) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (t & 4194176) !== 0)) {
      var u = a.lanes;
      u &= l.pendingLanes, t |= u, a.lanes = t, ti(l, t);
    }
  }
  function Pf(l, a) {
    var t = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, t === u)) {
      var e = null, n = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var f = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, t = t.next;
        } while (t !== null);
        n === null ? e = n = a : n = n.next = a;
      } else e = n = a;
      t = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = t;
      return;
    }
    l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = a : l.next = a, t.lastBaseUpdate = a;
  }
  var lc = !1;
  function Fu() {
    if (lc) {
      var l = lu;
      if (l !== null) throw l;
    }
  }
  function ku(l, a, t, u) {
    lc = !1;
    var e = l.updateQueue;
    pa = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, v = i.next;
      i.next = null, f === null ? n = v : f.next = v, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = v : c.next = v, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var o = e.baseState;
      f = 0, g = v = i = null, c = n;
      do {
        var y = c.lane & -536870913, S = y !== c.lane;
        if (S ? (Q & y) === y : (u & y) === y) {
          y !== 0 && y === Pt && (lc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var T = l, q = c;
            y = a;
            var al = t;
            switch (q.tag) {
              case 1:
                if (T = q.payload, typeof T == "function") {
                  o = T.call(al, o, y);
                  break l;
                }
                o = T;
                break l;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = q.payload, y = typeof T == "function" ? T.call(al, o, y) : T, y == null) break l;
                o = Z({}, o, y);
                break l;
              case 2:
                pa = !0;
            }
          }
          y = c.callback, y !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [y] : S.push(y));
        } else
          S = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (v = g = S, i = o) : g = g.next = S, f |= y;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = o), e.baseState = i, e.firstBaseUpdate = v, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), ka |= f, l.lanes = f, l.memoizedState = o;
    }
  }
  function m0(l, a) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(a);
  }
  function S0(l, a) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        m0(t[l], a);
  }
  function $u(l, a) {
    try {
      var t = a.updateQueue, u = t !== null ? t.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        t = e;
        do {
          if ((t.tag & l) === l) {
            u = void 0;
            var n = t.create, f = t.inst;
            u = n(), f.destroy = u;
          }
          t = t.next;
        } while (t !== e);
      }
    } catch (c) {
      p(a, a.return, c);
    }
  }
  function Ja(l, a, t) {
    try {
      var u = a.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = a;
              var i = t;
              try {
                c();
              } catch (v) {
                p(
                  e,
                  i,
                  v
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (v) {
      p(a, a.return, v);
    }
  }
  function g0(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var t = l.stateNode;
      try {
        S0(a, t);
      } catch (u) {
        p(l, l.return, u);
      }
    }
  }
  function b0(l, a, t) {
    t.props = Mt(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (u) {
      p(l, a, u);
    }
  }
  function qt(l, a) {
    try {
      var t = l.ref;
      if (t !== null) {
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
        typeof t == "function" ? l.refCleanup = t(e) : t.current = e;
      }
    } catch (n) {
      p(l, a, n);
    }
  }
  function _l(l, a) {
    var t = l.ref, u = l.refCleanup;
    if (t !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          p(l, a, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (e) {
          p(l, a, e);
        }
      else t.current = null;
  }
  function o0(l) {
    var a = l.type, t = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && u.focus();
          break l;
        case "img":
          t.src ? u.src = t.src : t.srcSet && (u.srcset = t.srcSet);
      }
    } catch (e) {
      p(l, l.return, e);
    }
  }
  function A0(l, a, t) {
    try {
      var u = l.stateNode;
      Y1(u, l.type, t, a), u[Hl] = a;
    } catch (e) {
      p(l, l.return, e);
    }
  }
  function z0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function ac(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || z0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function tc(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, a ? t.nodeType === 8 ? t.parentNode.insertBefore(l, a) : t.insertBefore(l, a) : (t.nodeType === 8 ? (a = t.parentNode, a.insertBefore(l, t)) : (a = t, a.appendChild(l)), t = t._reactRootContainer, t != null || a.onclick !== null || (a.onclick = zn));
    else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
      for (tc(l, a, t), l = l.sibling; l !== null; )
        tc(l, a, t), l = l.sibling;
  }
  function fn(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
      for (fn(l, a, t), l = l.sibling; l !== null; )
        fn(l, a, t), l = l.sibling;
  }
  var Ua = !1, P = !1, uc = !1, E0 = typeof WeakSet == "function" ? WeakSet : Set, Sl = null, T0 = !1;
  function s1(l, a) {
    if (l = l.containerInfo, Nc = qn, l = Zi(l), ef(l)) {
      if ("selectionStart" in l)
        var t = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          t = (t = l.ownerDocument) && t.defaultView || window;
          var u = t.getSelection && t.getSelection();
          if (u && u.rangeCount !== 0) {
            t = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              t.nodeType, n.nodeType;
            } catch {
              t = null;
              break l;
            }
            var f = 0, c = -1, i = -1, v = 0, g = 0, o = l, y = null;
            a: for (; ; ) {
              for (var S; o !== t || e !== 0 && o.nodeType !== 3 || (c = f + e), o !== n || u !== 0 && o.nodeType !== 3 || (i = f + u), o.nodeType === 3 && (f += o.nodeValue.length), (S = o.firstChild) !== null; )
                y = o, o = S;
              for (; ; ) {
                if (o === l) break a;
                if (y === t && ++v === e && (c = f), y === n && ++g === u && (i = f), (S = o.nextSibling) !== null) break;
                o = y, y = o.parentNode;
              }
              o = S;
            }
            t = c === -1 || i === -1 ? null : { start: c, end: i };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Bc = { focusedElem: l, selectionRange: t }, qn = !1, Sl = a; Sl !== null; )
      if (a = Sl, l = a.child, (a.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = a, Sl = l;
      else
        for (; Sl !== null; ) {
          switch (a = Sl, n = a.alternate, l = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                l = void 0, t = a, e = n.memoizedProps, n = n.memoizedState, u = t.stateNode;
                try {
                  var T = Mt(
                    t.type,
                    e,
                    t.elementType === t.type
                  );
                  l = u.getSnapshotBeforeUpdate(
                    T,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  p(
                    t,
                    t.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = a.stateNode.containerInfo, t = l.nodeType, t === 9)
                  Xc(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
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
              if (l & 1024) throw Error(m(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, Sl = l;
            break;
          }
          Sl = a.return;
        }
    return T = T0, T0 = !1, T;
  }
  function D0(l, a, t) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qa(l, t), u & 4 && $u(5, t);
        break;
      case 1:
        if (qa(l, t), u & 4)
          if (l = t.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (c) {
              p(t, t.return, c);
            }
          else {
            var e = Mt(
              t.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              p(
                t,
                t.return,
                c
              );
            }
          }
        u & 64 && g0(t), u & 512 && qt(t, t.return);
        break;
      case 3:
        if (qa(l, t), u & 64 && (u = t.updateQueue, u !== null)) {
          if (l = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                l = t.child.stateNode;
                break;
              case 1:
                l = t.child.stateNode;
            }
          try {
            S0(u, l);
          } catch (c) {
            p(t, t.return, c);
          }
        }
        break;
      case 26:
        qa(l, t), u & 512 && qt(t, t.return);
        break;
      case 27:
      case 5:
        qa(l, t), a === null && u & 4 && o0(t), u & 512 && qt(t, t.return);
        break;
      case 12:
        qa(l, t);
        break;
      case 13:
        qa(l, t), u & 4 && O0(l, t);
        break;
      case 22:
        if (e = t.memoizedState !== null || Ua, !e) {
          a = a !== null && a.memoizedState !== null || P;
          var n = Ua, f = P;
          Ua = e, (P = a) && !f ? wa(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : qa(l, t), Ua = n, P = f;
        }
        u & 512 && (t.memoizedProps.mode === "manual" ? qt(t, t.return) : _l(t, t.return));
        break;
      default:
        qa(l, t);
    }
  }
  function M0(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, M0(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && Vn(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var il = null, Gl = !1;
  function Oa(l, a, t) {
    for (t = t.child; t !== null; )
      U0(l, a, t), t = t.sibling;
  }
  function U0(l, a, t) {
    if (Ql && typeof Ql.onCommitFiberUnmount == "function")
      try {
        Ql.onCommitFiberUnmount(zu, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        P || _l(t, a), Oa(
          l,
          a,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        P || _l(t, a);
        var u = il, e = Gl;
        for (il = t.stateNode, Oa(
          l,
          a,
          t
        ), t = t.stateNode, a = t.attributes; a.length; )
          t.removeAttributeNode(a[0]);
        Vn(t), il = u, Gl = e;
        break;
      case 5:
        P || _l(t, a);
      case 6:
        e = il;
        var n = Gl;
        if (il = null, Oa(
          l,
          a,
          t
        ), il = e, Gl = n, il !== null)
          if (Gl)
            try {
              l = il, u = t.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u);
            } catch (f) {
              p(
                t,
                a,
                f
              );
            }
          else
            try {
              il.removeChild(t.stateNode);
            } catch (f) {
              p(
                t,
                a,
                f
              );
            }
        break;
      case 18:
        il !== null && (Gl ? (a = il, t = t.stateNode, a.nodeType === 8 ? jc(
          a.parentNode,
          t
        ) : a.nodeType === 1 && jc(a, t), Se(a)) : jc(il, t.stateNode));
        break;
      case 4:
        u = il, e = Gl, il = t.stateNode.containerInfo, Gl = !0, Oa(
          l,
          a,
          t
        ), il = u, Gl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        P || Ja(2, t, a), P || Ja(4, t, a), Oa(
          l,
          a,
          t
        );
        break;
      case 1:
        P || (_l(t, a), u = t.stateNode, typeof u.componentWillUnmount == "function" && b0(
          t,
          a,
          u
        )), Oa(
          l,
          a,
          t
        );
        break;
      case 21:
        Oa(
          l,
          a,
          t
        );
        break;
      case 22:
        P || _l(t, a), P = (u = P) || t.memoizedState !== null, Oa(
          l,
          a,
          t
        ), P = u;
        break;
      default:
        Oa(
          l,
          a,
          t
        );
    }
  }
  function O0(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Se(l);
      } catch (t) {
        p(a, a.return, t);
      }
  }
  function v1(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new E0()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new E0()), a;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function ec(l, a) {
    var t = v1(l);
    a.forEach(function(u) {
      var e = D1.bind(null, l, u);
      t.has(u) || (t.add(u), u.then(e, e));
    });
  }
  function kl(l, a) {
    var t = a.deletions;
    if (t !== null)
      for (var u = 0; u < t.length; u++) {
        var e = t[u], n = l, f = a, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
            case 5:
              il = c.stateNode, Gl = !1;
              break l;
            case 3:
              il = c.stateNode.containerInfo, Gl = !0;
              break l;
            case 4:
              il = c.stateNode.containerInfo, Gl = !0;
              break l;
          }
          c = c.return;
        }
        if (il === null) throw Error(m(160));
        U0(n, f, e), il = null, Gl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        q0(a, l), a = a.sibling;
  }
  var ea = null;
  function q0(l, a) {
    var t = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(a, l), $l(l), u & 4 && (Ja(3, l, l.return), $u(3, l), Ja(5, l, l.return));
        break;
      case 1:
        kl(a, l), $l(l), u & 512 && (P || t === null || _l(t, t.return)), u & 64 && Ua && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? u : t.concat(u))));
        break;
      case 26:
        var e = ea;
        if (kl(a, l), $l(l), u & 512 && (P || t === null || _l(t, t.return)), u & 4) {
          var n = t !== null ? t.memoizedState : null;
          if (u = l.memoizedState, t === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, t = l.memoizedProps, e = e.ownerDocument || e;
                  a: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Du] || n[Ml] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Tl(n, u, t), n[Ml] = l, yl(n), u = n;
                      break l;
                    case "link":
                      var f = ov(
                        "link",
                        "href",
                        e
                      ).get(u + (t.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (t.href == null ? null : t.href) && n.getAttribute("rel") === (t.rel == null ? null : t.rel) && n.getAttribute("title") === (t.title == null ? null : t.title) && n.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(u), Tl(n, u, t), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = ov(
                        "meta",
                        "content",
                        e
                      ).get(u + (t.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (t.content == null ? null : "" + t.content) && n.getAttribute("name") === (t.name == null ? null : t.name) && n.getAttribute("property") === (t.property == null ? null : t.property) && n.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && n.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(u), Tl(n, u, t), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, u));
                  }
                  n[Ml] = l, yl(n), u = n;
                }
                l.stateNode = u;
              } else
                Av(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = bv(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : n.count--, u === null ? Av(
              e,
              l.type,
              l.stateNode
            ) : bv(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && A0(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        if (u & 4 && l.alternate === null) {
          e = l.stateNode, n = l.memoizedProps;
          try {
            for (var i = e.firstChild; i; ) {
              var v = i.nextSibling, g = i.nodeName;
              i[Du] || g === "HEAD" || g === "BODY" || g === "SCRIPT" || g === "STYLE" || g === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = v;
            }
            for (var o = l.type, y = e.attributes; y.length; )
              e.removeAttributeNode(y[0]);
            Tl(e, o, n), e[Ml] = l, e[Hl] = n;
          } catch (T) {
            p(l, l.return, T);
          }
        }
      case 5:
        if (kl(a, l), $l(l), u & 512 && (P || t === null || _l(t, t.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            xt(e, "");
          } catch (T) {
            p(l, l.return, T);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, A0(
          l,
          e,
          t !== null ? t.memoizedProps : e
        )), u & 1024 && (uc = !0);
        break;
      case 6:
        if (kl(a, l), $l(l), u & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          u = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = u;
          } catch (T) {
            p(l, l.return, T);
          }
        }
        break;
      case 3:
        if (Mn = null, e = ea, ea = Tn(a.containerInfo), kl(a, l), ea = e, $l(l), u & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Se(a.containerInfo);
          } catch (T) {
            p(l, l.return, T);
          }
        uc && (uc = !1, r0(l));
        break;
      case 4:
        u = ea, ea = Tn(
          l.stateNode.containerInfo
        ), kl(a, l), $l(l), ea = u;
        break;
      case 12:
        kl(a, l), $l(l);
        break;
      case 13:
        kl(a, l), $l(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (yc = ia()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, ec(l, u)));
        break;
      case 22:
        if (u & 512 && (P || t === null || _l(t, t.return)), i = l.memoizedState !== null, v = t !== null && t.memoizedState !== null, g = Ua, o = P, Ua = g || i, P = o || v, kl(a, l), P = o, Ua = g, $l(l), a = l.stateNode, a._current = l, a._visibility &= -3, a._visibility |= a._pendingVisibility & 2, u & 8192 && (a._visibility = i ? a._visibility & -2 : a._visibility | 1, i && (a = Ua || P, t === null || v || a || eu(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
          l: for (t = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26 || a.tag === 27) {
              if (t === null) {
                v = t = a;
                try {
                  if (e = v.stateNode, i)
                    n = e.style, typeof n.setProperty == "function" ? n.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : n.display = "none";
                  else {
                    f = v.stateNode, c = v.memoizedProps.style;
                    var S = c != null && c.hasOwnProperty("display") ? c.display : null;
                    f.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (T) {
                  p(v, v.return, T);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                v = a;
                try {
                  v.stateNode.nodeValue = i ? "" : v.memoizedProps;
                } catch (T) {
                  p(v, v.return, T);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break l;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break l;
              t === a && (t = null), a = a.return;
            }
            t === a && (t = null), a.sibling.return = a.return, a = a.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (t = u.retryQueue, t !== null && (u.retryQueue = null, ec(l, t))));
        break;
      case 19:
        kl(a, l), $l(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, ec(l, u)));
        break;
      case 21:
        break;
      default:
        kl(a, l), $l(l);
    }
  }
  function $l(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var t = l.return; t !== null; ) {
              if (z0(t)) {
                var u = t;
                break l;
              }
              t = t.return;
            }
            throw Error(m(160));
          }
          switch (u.tag) {
            case 27:
              var e = u.stateNode, n = ac(l);
              fn(l, n, e);
              break;
            case 5:
              var f = u.stateNode;
              u.flags & 32 && (xt(f, ""), u.flags &= -33);
              var c = ac(l);
              fn(l, c, f);
              break;
            case 3:
            case 4:
              var i = u.stateNode.containerInfo, v = ac(l);
              tc(
                l,
                v,
                i
              );
              break;
            default:
              throw Error(m(161));
          }
        }
      } catch (g) {
        p(l, l.return, g);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function r0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        r0(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function qa(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        D0(l, a.alternate, a), a = a.sibling;
  }
  function eu(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ja(4, a, a.return), eu(a);
          break;
        case 1:
          _l(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && b0(
            a,
            a.return,
            t
          ), eu(a);
          break;
        case 26:
        case 27:
        case 5:
          _l(a, a.return), eu(a);
          break;
        case 22:
          _l(a, a.return), a.memoizedState === null && eu(a);
          break;
        default:
          eu(a);
      }
      l = l.sibling;
    }
  }
  function wa(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate, e = l, n = a, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wa(
            e,
            n,
            t
          ), $u(4, n);
          break;
        case 1:
          if (wa(
            e,
            n,
            t
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (v) {
              p(u, u.return, v);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  m0(i[e], c);
            } catch (v) {
              p(u, u.return, v);
            }
          }
          t && f & 64 && g0(n), qt(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          wa(
            e,
            n,
            t
          ), t && u === null && f & 4 && o0(n), qt(n, n.return);
          break;
        case 12:
          wa(
            e,
            n,
            t
          );
          break;
        case 13:
          wa(
            e,
            n,
            t
          ), t && f & 4 && O0(e, n);
          break;
        case 22:
          n.memoizedState === null && wa(
            e,
            n,
            t
          ), qt(n, n.return);
          break;
        default:
          wa(
            e,
            n,
            t
          );
      }
      a = a.sibling;
    }
  }
  function nc(l, a) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && xu(t));
  }
  function fc(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && xu(l));
  }
  function Wa(l, a, t, u) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        H0(
          l,
          a,
          t,
          u
        ), a = a.sibling;
  }
  function H0(l, a, t, u) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Wa(
          l,
          a,
          t,
          u
        ), e & 2048 && $u(9, a);
        break;
      case 3:
        Wa(
          l,
          a,
          t,
          u
        ), e & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && xu(l)));
        break;
      case 12:
        if (e & 2048) {
          Wa(
            l,
            a,
            t,
            u
          ), l = a.stateNode;
          try {
            var n = a.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            p(a, a.return, i);
          }
        } else
          Wa(
            l,
            a,
            t,
            u
          );
        break;
      case 23:
        break;
      case 22:
        n = a.stateNode, a.memoizedState !== null ? n._visibility & 4 ? Wa(
          l,
          a,
          t,
          u
        ) : Iu(l, a) : n._visibility & 4 ? Wa(
          l,
          a,
          t,
          u
        ) : (n._visibility |= 4, nu(
          l,
          a,
          t,
          u,
          (a.subtreeFlags & 10256) !== 0
        )), e & 2048 && nc(
          a.alternate,
          a
        );
        break;
      case 24:
        Wa(
          l,
          a,
          t,
          u
        ), e & 2048 && fc(a.alternate, a);
        break;
      default:
        Wa(
          l,
          a,
          t,
          u
        );
    }
  }
  function nu(l, a, t, u, e) {
    for (e = e && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var n = l, f = a, c = t, i = u, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          nu(
            n,
            f,
            c,
            i,
            e
          ), $u(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 4 ? nu(
            n,
            f,
            c,
            i,
            e
          ) : Iu(
            n,
            f
          ) : (g._visibility |= 4, nu(
            n,
            f,
            c,
            i,
            e
          )), e && v & 2048 && nc(
            f.alternate,
            f
          );
          break;
        case 24:
          nu(
            n,
            f,
            c,
            i,
            e
          ), e && v & 2048 && fc(f.alternate, f);
          break;
        default:
          nu(
            n,
            f,
            c,
            i,
            e
          );
      }
      a = a.sibling;
    }
  }
  function Iu(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l, u = a, e = u.flags;
        switch (u.tag) {
          case 22:
            Iu(t, u), e & 2048 && nc(
              u.alternate,
              u
            );
            break;
          case 24:
            Iu(t, u), e & 2048 && fc(u.alternate, u);
            break;
          default:
            Iu(t, u);
        }
        a = a.sibling;
      }
  }
  var Pu = 8192;
  function fu(l) {
    if (l.subtreeFlags & Pu)
      for (l = l.child; l !== null; )
        R0(l), l = l.sibling;
  }
  function R0(l) {
    switch (l.tag) {
      case 26:
        fu(l), l.flags & Pu && l.memoizedState !== null && I1(
          ea,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fu(l);
        break;
      case 3:
      case 4:
        var a = ea;
        ea = Tn(l.stateNode.containerInfo), fu(l), ea = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Pu, Pu = 16777216, fu(l), Pu = a) : fu(l));
        break;
      default:
        fu(l);
    }
  }
  function N0(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function le(l) {
    var a = l.deletions;
    if (l.flags & 16) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          Sl = u, Y0(
            u,
            l
          );
        }
      N0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        B0(l), l = l.sibling;
  }
  function B0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        le(l), l.flags & 2048 && Ja(9, l, l.return);
        break;
      case 3:
        le(l);
        break;
      case 12:
        le(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -5, cn(l)) : le(l);
        break;
      default:
        le(l);
    }
  }
  function cn(l) {
    var a = l.deletions;
    if (l.flags & 16) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          Sl = u, Y0(
            u,
            l
          );
        }
      N0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          Ja(8, a, a.return), cn(a);
          break;
        case 22:
          t = a.stateNode, t._visibility & 4 && (t._visibility &= -5, cn(a));
          break;
        default:
          cn(a);
      }
      l = l.sibling;
    }
  }
  function Y0(l, a) {
    for (; Sl !== null; ) {
      var t = Sl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ja(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var u = t.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          xu(t.memoizedState.cache);
      }
      if (u = t.child, u !== null) u.return = t, Sl = u;
      else
        l: for (t = l; Sl !== null; ) {
          u = Sl;
          var e = u.sibling, n = u.return;
          if (M0(u), u === t) {
            Sl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Sl = e;
            break l;
          }
          Sl = n;
        }
    }
  }
  function d1(l, a, t, u) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Il(l, a, t, u) {
    return new d1(l, a, t, u);
  }
  function cc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Fa(l, a) {
    var t = l.alternate;
    return t === null ? (t = Il(
      l.tag,
      a,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = a, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 31457280, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, a = l.dependencies, t.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function Q0(l, a) {
    l.flags &= 31457282;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, a = t.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function sn(l, a, t, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") cc(l) && (f = 1);
    else if (typeof l == "string")
      f = k1(
        l,
        t,
        ca.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case I:
          return rt(t.children, e, n, a);
        case Yl:
          f = 8, e |= 24;
          break;
        case ut:
          return l = Il(12, t, a, e | 2), l.elementType = ut, l.lanes = n, l;
        case rl:
          return l = Il(13, t, a, e), l.elementType = rl, l.lanes = n, l;
        case Al:
          return l = Il(19, t, a, e), l.elementType = Al, l.lanes = n, l;
        case et:
          return j0(t, e, n, a);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ol:
              case Dl:
                f = 10;
                break l;
              case ul:
                f = 9;
                break l;
              case X:
                f = 11;
                break l;
              case xl:
                f = 14;
                break l;
              case sl:
                f = 16, u = null;
                break l;
            }
          f = 29, t = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return a = Il(f, t, a, e), a.elementType = l, a.type = u, a.lanes = n, a;
  }
  function rt(l, a, t, u) {
    return l = Il(7, l, u, a), l.lanes = t, l;
  }
  function j0(l, a, t, u) {
    l = Il(22, l, u, a), l.elementType = et, l.lanes = t;
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var n = e._current;
        if (n === null) throw Error(m(456));
        if (!(e._pendingVisibility & 2)) {
          var f = _a(n, 2);
          f !== null && (e._pendingVisibility |= 2, ql(f, n, 2));
        }
      },
      attach: function() {
        var n = e._current;
        if (n === null) throw Error(m(456));
        if (e._pendingVisibility & 2) {
          var f = _a(n, 2);
          f !== null && (e._pendingVisibility &= -3, ql(f, n, 2));
        }
      }
    };
    return l.stateNode = e, l;
  }
  function ic(l, a, t) {
    return l = Il(6, l, null, a), l.lanes = t, l;
  }
  function sc(l, a, t) {
    return a = Il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = t, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  function ra(l) {
    l.flags |= 4;
  }
  function X0(l, a) {
    if (a.type !== "stylesheet" || a.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !zv(a)) {
      if (a = Fl.current, a !== null && ((Q & 4194176) === Q ? va !== null : (Q & 62914560) !== Q && !(Q & 536870912) || a !== va))
        throw Gu = mf, Pi;
      l.flags |= 8192;
    }
  }
  function vn(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? li() : 536870912, l.lanes |= a, iu |= a);
  }
  function ae(l, a) {
    if (!_)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), a = a.sibling;
          t === null ? l.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function F(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, t = 0, u = 0;
    if (a)
      for (var e = l.child; e !== null; )
        t |= e.lanes | e.childLanes, u |= e.subtreeFlags & 31457280, u |= e.flags & 31457280, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        t |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = t, a;
  }
  function h1(l, a, t) {
    var u = a.pendingProps;
    switch (hf(a), a.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return F(a), null;
      case 1:
        return F(a), null;
      case 3:
        return t = a.stateNode, u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), Ma(dl), jt(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (Qu(a) ? ra(a) : l === null || l.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, ua !== null && (bc(ua), ua = null))), F(a), null;
      case 26:
        return t = a.memoizedState, l === null ? (ra(a), t !== null ? (F(a), X0(a, t)) : (F(a), a.flags &= -16777217)) : t ? t !== l.memoizedState ? (ra(a), F(a), X0(a, t)) : (F(a), a.flags &= -16777217) : (l.memoizedProps !== u && ra(a), F(a), a.flags &= -16777217), null;
      case 27:
        Ee(a), t = Ya.current;
        var e = a.type;
        if (l !== null && a.stateNode != null)
          l.memoizedProps !== u && ra(a);
        else {
          if (!u) {
            if (a.stateNode === null)
              throw Error(m(166));
            return F(a), null;
          }
          l = ca.current, Qu(a) ? $i(a) : (l = hv(e, u, t), a.stateNode = l, ra(a));
        }
        return F(a), null;
      case 5:
        if (Ee(a), t = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== u && ra(a);
        else {
          if (!u) {
            if (a.stateNode === null)
              throw Error(m(166));
            return F(a), null;
          }
          if (l = ca.current, Qu(a))
            $i(a);
          else {
            switch (e = En(
              Ya.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  t
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  t
                );
                break;
              default:
                switch (t) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      t
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      t
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                    break;
                  default:
                    l = typeof u.is == "string" ? e.createElement(t, { is: u.is }) : e.createElement(t);
                }
            }
            l[Ml] = a, l[Hl] = u;
            l: for (e = a.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === a) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === a)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            a.stateNode = l;
            l: switch (Tl(l, t, u), t) {
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
            l && ra(a);
          }
        }
        return F(a), a.flags &= -16777217, null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== u && ra(a);
        else {
          if (typeof u != "string" && a.stateNode === null)
            throw Error(m(166));
          if (l = Ya.current, Qu(a)) {
            if (l = a.stateNode, t = a.memoizedProps, u = null, e = Ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Ml] = a, l = !!(l.nodeValue === t || u !== null && u.suppressHydrationWarning === !0 || fv(l.nodeValue, t)), l || ot(a);
          } else
            l = En(l).createTextNode(
              u
            ), l[Ml] = a, a.stateNode = l;
        }
        return F(a), null;
      case 13:
        if (u = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Qu(a), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Ml] = a;
            } else
              ju(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
            F(a), e = !1;
          } else
            ua !== null && (bc(ua), ua = null), e = !0;
          if (!e)
            return a.flags & 256 ? (za(a), a) : (za(a), null);
        }
        if (za(a), a.flags & 128)
          return a.lanes = t, a;
        if (t = u !== null, l = l !== null && l.memoizedState !== null, t) {
          u = a.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return t !== l && t && (a.child.flags |= 8192), vn(a, a.updateQueue), F(a), null;
      case 4:
        return jt(), l === null && rc(a.stateNode.containerInfo), F(a), null;
      case 10:
        return Ma(a.type), F(a), null;
      case 19:
        if (hl(vl), e = a.memoizedState, e === null) return F(a), null;
        if (u = (a.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) ae(e, !1);
          else {
            if (ll !== 0 || l !== null && l.flags & 128)
              for (l = a.child; l !== null; ) {
                if (n = Je(l), n !== null) {
                  for (a.flags |= 128, ae(e, !1), l = n.updateQueue, a.updateQueue = l, vn(a, l), a.subtreeFlags = 0, l = t, t = a.child; t !== null; )
                    Q0(t, l), t = t.sibling;
                  return W(
                    vl,
                    vl.current & 1 | 2
                  ), a.child;
                }
                l = l.sibling;
              }
            e.tail !== null && ia() > dn && (a.flags |= 128, u = !0, ae(e, !1), a.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = Je(n), l !== null) {
              if (a.flags |= 128, u = !0, l = l.updateQueue, a.updateQueue = l, vn(a, l), ae(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !_)
                return F(a), null;
            } else
              2 * ia() - e.renderingStartTime > dn && t !== 536870912 && (a.flags |= 128, u = !0, ae(e, !1), a.lanes = 4194304);
          e.isBackwards ? (n.sibling = a.child, a.child = n) : (l = e.last, l !== null ? l.sibling = n : a.child = n, e.last = n);
        }
        return e.tail !== null ? (a = e.tail, e.rendering = a, e.tail = a.sibling, e.renderingStartTime = ia(), a.sibling = null, l = vl.current, W(vl, u ? l & 1 | 2 : l & 1), a) : (F(a), null);
      case 22:
      case 23:
        return za(a), gf(), u = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (a.flags |= 8192) : u && (a.flags |= 8192), u ? t & 536870912 && !(a.flags & 128) && (F(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : F(a), t = a.updateQueue, t !== null && vn(a, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== t && (a.flags |= 2048), l !== null && hl(zt), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), Ma(dl), F(a), null;
      case 25:
        return null;
    }
    throw Error(m(156, a.tag));
  }
  function y1(l, a) {
    switch (hf(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return Ma(dl), jt(), l = a.flags, l & 65536 && !(l & 128) ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return Ee(a), null;
      case 13:
        if (za(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(m(340));
          ju();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return hl(vl), null;
      case 4:
        return jt(), null;
      case 10:
        return Ma(a.type), null;
      case 22:
      case 23:
        return za(a), gf(), l !== null && hl(zt), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return Ma(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _0(l, a) {
    switch (hf(a), a.tag) {
      case 3:
        Ma(dl), jt();
        break;
      case 26:
      case 27:
      case 5:
        Ee(a);
        break;
      case 4:
        jt();
        break;
      case 13:
        za(a);
        break;
      case 19:
        hl(vl);
        break;
      case 10:
        Ma(a.type);
        break;
      case 22:
      case 23:
        za(a), gf(), l !== null && hl(zt);
        break;
      case 24:
        Ma(dl);
    }
  }
  var m1 = {
    getCacheForType: function(l) {
      var a = Ul(dl), t = a.data.get(l);
      return t === void 0 && (t = l(), a.data.set(l, t)), t;
    }
  }, S1 = typeof WeakMap == "function" ? WeakMap : Map, k = 0, K = null, N = null, Q = 0, L = 0, Zl = null, Ha = !1, cu = !1, vc = !1, Ra = 0, ll = 0, ka = 0, Ht = 0, dc = 0, Pl = 0, iu = 0, te = null, ha = null, hc = !1, yc = 0, dn = 1 / 0, hn = null, $a = null, yn = !1, Rt = null, ue = 0, mc = 0, Sc = null, ee = 0, gc = null;
  function Cl() {
    if (k & 2 && Q !== 0)
      return Q & -Q;
    if (U.T !== null) {
      var l = Pt;
      return l !== 0 ? l : Mc();
    }
    return ei();
  }
  function G0() {
    Pl === 0 && (Pl = !(Q & 536870912) || _ ? Pc() : 536870912);
    var l = Fl.current;
    return l !== null && (l.flags |= 32), Pl;
  }
  function ql(l, a, t) {
    (l === K && L === 2 || l.cancelPendingCommit !== null) && (su(l, 0), Na(
      l,
      Q,
      Pl,
      !1
    )), Tu(l, t), (!(k & 2) || l !== K) && (l === K && (!(k & 2) && (Ht |= t), ll === 4 && Na(
      l,
      Q,
      Pl,
      !1
    )), ya(l));
  }
  function Z0(l, a, t) {
    if (k & 6) throw Error(m(327));
    var u = !t && (a & 60) === 0 && (a & l.expiredLanes) === 0 || Eu(l, a), e = u ? o1(l, a) : zc(l, a, !0), n = u;
    do {
      if (e === 0) {
        cu && !u && Na(l, a, 0, !1);
        break;
      } else if (e === 6)
        Na(
          l,
          a,
          0,
          !Ha
        );
      else {
        if (t = l.current.alternate, n && !g1(t)) {
          e = zc(l, a, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = a, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            a = f;
            l: {
              var c = l;
              e = te;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (su(c, f).flags |= 256), f = zc(
                c,
                f,
                !1
              ), f !== 2) {
                if (vc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Ht |= n, e = 4;
                  break l;
                }
                n = ha, ha = e, n !== null && bc(n);
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          su(l, 0), Na(l, a, 0, !0);
          break;
        }
        l: {
          switch (u = l, e) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((a & 4194176) === a) {
                Na(
                  u,
                  a,
                  Pl,
                  !Ha
                );
                break l;
              }
              break;
            case 2:
              ha = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if (u.finishedWork = t, u.finishedLanes = a, (a & 62914560) === a && (n = yc + 300 - ia(), 10 < n)) {
            if (Na(
              u,
              a,
              Pl,
              !Ha
            ), Ue(u, 0) !== 0) break l;
            u.timeoutHandle = sv(
              C0.bind(
                null,
                u,
                t,
                ha,
                hn,
                hc,
                a,
                Pl,
                Ht,
                iu,
                Ha,
                2,
                -0,
                0
              ),
              n
            );
            break l;
          }
          C0(
            u,
            t,
            ha,
            hn,
            hc,
            a,
            Pl,
            Ht,
            iu,
            Ha,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ya(l);
  }
  function bc(l) {
    ha === null ? ha = l : ha.push.apply(
      ha,
      l
    );
  }
  function C0(l, a, t, u, e, n, f, c, i, v, g, o, y) {
    var S = a.subtreeFlags;
    if ((S & 8192 || (S & 16785408) === 16785408) && (ve = { stylesheets: null, count: 0, unsuspend: $1 }, R0(a), a = P1(), a !== null)) {
      l.cancelPendingCommit = a(
        w0.bind(
          null,
          l,
          t,
          u,
          e,
          f,
          c,
          i,
          1,
          o,
          y
        )
      ), Na(l, n, f, !v);
      return;
    }
    w0(
      l,
      t,
      u,
      e,
      f,
      c,
      i,
      g,
      o,
      y
    );
  }
  function g1(l) {
    for (var a = l; ; ) {
      var t = a.tag;
      if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var u = 0; u < t.length; u++) {
          var e = t[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Xl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = a.child, a.subtreeFlags & 16384 && t !== null)
        t.return = a, a = t;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Na(l, a, t, u) {
    a &= ~dc, a &= ~Ht, l.suspendedLanes |= a, l.pingedLanes &= ~a, u && (l.warmLanes |= a), u = l.expirationTimes;
    for (var e = a; 0 < e; ) {
      var n = 31 - jl(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    t !== 0 && ai(l, t, a);
  }
  function mn() {
    return k & 6 ? !0 : (ne(0), !1);
  }
  function oc() {
    if (N !== null) {
      if (L === 0)
        var l = N.return;
      else
        l = N, Da = Ut = null, Mf(l), $t = null, Zu = 0, l = N;
      for (; l !== null; )
        _0(l.alternate, l), l = l.return;
      N = null;
    }
  }
  function su(l, a) {
    l.finishedWork = null, l.finishedLanes = 0;
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, j1(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), oc(), K = l, N = t = Fa(l.current, null), Q = a, L = 0, Zl = null, Ha = !1, cu = Eu(l, a), vc = !1, iu = Pl = dc = Ht = ka = ll = 0, ha = te = null, hc = !1, a & 8 && (a |= a & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= a; 0 < u; ) {
        var e = 31 - jl(u), n = 1 << e;
        a |= l[e], u &= ~n;
      }
    return Ra = a, _e(), t;
  }
  function x0(l, a) {
    H = null, U.H = da, a === _u ? (a = ts(), L = 3) : a === Pi ? (a = ts(), L = 4) : L = a === l0 ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Zl = a, N === null && (ll = 1, un(
      l,
      Jl(a, l.current)
    ));
  }
  function V0() {
    var l = U.H;
    return U.H = da, l === null ? da : l;
  }
  function p0() {
    var l = U.A;
    return U.A = m1, l;
  }
  function Ac() {
    ll = 4, Ha || (Q & 4194176) !== Q && Fl.current !== null || (cu = !0), !(ka & 134217727) && !(Ht & 134217727) || K === null || Na(
      K,
      Q,
      Pl,
      !1
    );
  }
  function zc(l, a, t) {
    var u = k;
    k |= 2;
    var e = V0(), n = p0();
    (K !== l || Q !== a) && (hn = null, su(l, a)), a = !1;
    var f = ll;
    l: do
      try {
        if (L !== 0 && N !== null) {
          var c = N, i = Zl;
          switch (L) {
            case 8:
              oc(), f = 6;
              break l;
            case 3:
            case 2:
            case 6:
              Fl.current === null && (a = !0);
              var v = L;
              if (L = 0, Zl = null, vu(l, c, i, v), t && cu) {
                f = 0;
                break l;
              }
              break;
            default:
              v = L, L = 0, Zl = null, vu(l, c, i, v);
          }
        }
        b1(), f = ll;
        break;
      } catch (g) {
        x0(l, g);
      }
    while (!0);
    return a && l.shellSuspendCounter++, Da = Ut = null, k = u, U.H = e, U.A = n, N === null && (K = null, Q = 0, _e()), f;
  }
  function b1() {
    for (; N !== null; ) K0(N);
  }
  function o1(l, a) {
    var t = k;
    k |= 2;
    var u = V0(), e = p0();
    K !== l || Q !== a ? (hn = null, dn = ia() + 500, su(l, a)) : cu = Eu(
      l,
      a
    );
    l: do
      try {
        if (L !== 0 && N !== null) {
          a = N;
          var n = Zl;
          a: switch (L) {
            case 1:
              L = 0, Zl = null, vu(l, a, n, 1);
              break;
            case 2:
              if (ls(n)) {
                L = 0, Zl = null, L0(a);
                break;
              }
              a = function() {
                L === 2 && K === l && (L = 7), ya(l);
              }, n.then(a, a);
              break l;
            case 3:
              L = 7;
              break l;
            case 4:
              L = 5;
              break l;
            case 7:
              ls(n) ? (L = 0, Zl = null, L0(a)) : (L = 0, Zl = null, vu(l, a, n, 7));
              break;
            case 5:
              var f = null;
              switch (N.tag) {
                case 26:
                  f = N.memoizedState;
                case 5:
                case 27:
                  var c = N;
                  if (!f || zv(f)) {
                    L = 0, Zl = null;
                    var i = c.sibling;
                    if (i !== null) N = i;
                    else {
                      var v = c.return;
                      v !== null ? (N = v, Sn(v)) : N = null;
                    }
                    break a;
                  }
              }
              L = 0, Zl = null, vu(l, a, n, 5);
              break;
            case 6:
              L = 0, Zl = null, vu(l, a, n, 6);
              break;
            case 8:
              oc(), ll = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        A1();
        break;
      } catch (g) {
        x0(l, g);
      }
    while (!0);
    return Da = Ut = null, U.H = u, U.A = e, k = t, N !== null ? 0 : (K = null, Q = 0, _e(), ll);
  }
  function A1() {
    for (; N !== null && !xv(); )
      K0(N);
  }
  function K0(l) {
    var a = h0(l.alternate, l, Ra);
    l.memoizedProps = l.pendingProps, a === null ? Sn(l) : N = a;
  }
  function L0(l) {
    var a = l, t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = f0(
          t,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Q
        );
        break;
      case 11:
        a = f0(
          t,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Q
        );
        break;
      case 5:
        Mf(a);
      default:
        _0(t, a), a = N = Q0(a, Ra), a = h0(t, a, Ra);
    }
    l.memoizedProps = l.pendingProps, a === null ? Sn(l) : N = a;
  }
  function vu(l, a, t, u) {
    Da = Ut = null, Mf(a), $t = null, Zu = 0;
    var e = a.return;
    try {
      if (c1(
        l,
        e,
        a,
        t,
        Q
      )) {
        ll = 1, un(
          l,
          Jl(t, l.current)
        ), N = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw N = e, n;
      ll = 1, un(
        l,
        Jl(t, l.current)
      ), N = null;
      return;
    }
    a.flags & 32768 ? (_ || u === 1 ? l = !0 : cu || Q & 536870912 ? l = !1 : (Ha = l = !0, (u === 2 || u === 3 || u === 6) && (u = Fl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), J0(a, l)) : Sn(a);
  }
  function Sn(l) {
    var a = l;
    do {
      if (a.flags & 32768) {
        J0(
          a,
          Ha
        );
        return;
      }
      l = a.return;
      var t = h1(
        a.alternate,
        a,
        Ra
      );
      if (t !== null) {
        N = t;
        return;
      }
      if (a = a.sibling, a !== null) {
        N = a;
        return;
      }
      N = a = l;
    } while (a !== null);
    ll === 0 && (ll = 5);
  }
  function J0(l, a) {
    do {
      var t = y1(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, N = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !a && (l = l.sibling, l !== null)) {
        N = l;
        return;
      }
      N = l = t;
    } while (l !== null);
    ll = 6, N = null;
  }
  function w0(l, a, t, u, e, n, f, c, i, v) {
    var g = U.T, o = j.p;
    try {
      j.p = 2, U.T = null, z1(
        l,
        a,
        t,
        u,
        o,
        e,
        n,
        f,
        c,
        i,
        v
      );
    } finally {
      U.T = g, j.p = o;
    }
  }
  function z1(l, a, t, u, e, n, f, c) {
    do
      du();
    while (Rt !== null);
    if (k & 6) throw Error(m(327));
    var i = l.finishedWork;
    if (u = l.finishedLanes, i === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, i === l.current) throw Error(m(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var v = i.lanes | i.childLanes;
    if (v |= sf, Iv(
      l,
      u,
      v,
      n,
      f,
      c
    ), l === K && (N = K = null, Q = 0), !(i.subtreeFlags & 10256) && !(i.flags & 10256) || yn || (yn = !0, mc = v, Sc = t, M1(Te, function() {
      return du(), null;
    })), t = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || t ? (t = U.T, U.T = null, n = j.p, j.p = 2, f = k, k |= 4, s1(l, i), q0(i, l), Kd(Bc, l.containerInfo), qn = !!Nc, Bc = Nc = null, l.current = i, D0(l, i.alternate, i), Vv(), k = f, j.p = n, U.T = t) : l.current = i, yn ? (yn = !1, Rt = l, ue = u) : W0(l, v), v = l.pendingLanes, v === 0 && ($a = null), wv(i.stateNode), ya(l), a !== null)
      for (e = l.onRecoverableError, i = 0; i < a.length; i++)
        v = a[i], e(v.value, {
          componentStack: v.stack
        });
    return ue & 3 && du(), v = l.pendingLanes, u & 4194218 && v & 42 ? l === gc ? ee++ : (ee = 0, gc = l) : ee = 0, ne(0), null;
  }
  function W0(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, xu(a)));
  }
  function du() {
    if (Rt !== null) {
      var l = Rt, a = mc;
      mc = 0;
      var t = ui(ue), u = U.T, e = j.p;
      try {
        if (j.p = 32 > t ? 32 : t, U.T = null, Rt === null)
          var n = !1;
        else {
          t = Sc, Sc = null;
          var f = Rt, c = ue;
          if (Rt = null, ue = 0, k & 6)
            throw Error(m(331));
          var i = k;
          if (k |= 4, B0(f.current), H0(f, f.current, c, t), k = i, ne(0, !1), Ql && typeof Ql.onPostCommitFiberRoot == "function")
            try {
              Ql.onPostCommitFiberRoot(zu, f);
            } catch {
            }
          n = !0;
        }
        return n;
      } finally {
        j.p = e, U.T = u, W0(l, a);
      }
    }
    return !1;
  }
  function F0(l, a, t) {
    a = Jl(t, a), a = Gf(l.stateNode, a, 2), l = La(l, a, 2), l !== null && (Tu(l, 2), ya(l));
  }
  function p(l, a, t) {
    if (l.tag === 3)
      F0(l, l, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          F0(
            a,
            l,
            t
          );
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($a === null || !$a.has(u))) {
            l = Jl(t, l), t = Is(2), u = La(a, t, 2), u !== null && (Ps(
              t,
              u,
              a,
              l
            ), Tu(u, 2), ya(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function Ec(l, a, t) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new S1();
      var e = /* @__PURE__ */ new Set();
      u.set(a, e);
    } else
      e = u.get(a), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(a, e));
    e.has(t) || (vc = !0, e.add(t), l = E1.bind(null, l, a, t), a.then(l, l));
  }
  function E1(l, a, t) {
    var u = l.pingCache;
    u !== null && u.delete(a), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, K === l && (Q & t) === t && (ll === 4 || ll === 3 && (Q & 62914560) === Q && 300 > ia() - yc ? !(k & 2) && su(l, 0) : dc |= t, iu === Q && (iu = 0)), ya(l);
  }
  function k0(l, a) {
    a === 0 && (a = li()), l = _a(l, a), l !== null && (Tu(l, a), ya(l));
  }
  function T1(l) {
    var a = l.memoizedState, t = 0;
    a !== null && (t = a.retryLane), k0(l, t);
  }
  function D1(l, a) {
    var t = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (t = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(a), k0(l, t);
  }
  function M1(l, a) {
    return Gn(l, a);
  }
  var gn = null, hu = null, Tc = !1, bn = !1, Dc = !1, Nt = 0;
  function ya(l) {
    l !== hu && l.next === null && (hu === null ? gn = hu = l : hu = hu.next = l), bn = !0, Tc || (Tc = !0, O1(U1));
  }
  function ne(l, a) {
    if (!Dc && bn) {
      Dc = !0;
      do
        for (var t = !1, u = gn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - jl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (t = !0, P0(u, n));
          } else
            n = Q, n = Ue(
              u,
              u === K ? n : 0
            ), !(n & 3) || Eu(u, n) || (t = !0, P0(u, n));
          u = u.next;
        }
      while (t);
      Dc = !1;
    }
  }
  function U1() {
    bn = Tc = !1;
    var l = 0;
    Nt !== 0 && (Q1() && (l = Nt), Nt = 0);
    for (var a = ia(), t = null, u = gn; u !== null; ) {
      var e = u.next, n = $0(u, a);
      n === 0 ? (u.next = null, t === null ? gn = e : t.next = e, e === null && (hu = t)) : (t = u, (l !== 0 || n & 3) && (bn = !0)), u = e;
    }
    ne(l);
  }
  function $0(l, a) {
    for (var t = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - jl(n), c = 1 << f, i = e[f];
      i === -1 ? (!(c & t) || c & u) && (e[f] = $v(c, a)) : i <= a && (l.expiredLanes |= c), n &= ~c;
    }
    if (a = K, t = Q, t = Ue(
      l,
      l === a ? t : 0
    ), u = l.callbackNode, t === 0 || l === a && L === 2 || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Zn(u), l.callbackNode = null, l.callbackPriority = 0;
    if (!(t & 3) || Eu(l, t)) {
      if (a = t & -t, a === l.callbackPriority) return a;
      switch (u !== null && Zn(u), ui(t)) {
        case 2:
        case 8:
          t = $c;
          break;
        case 32:
          t = Te;
          break;
        case 268435456:
          t = Ic;
          break;
        default:
          t = Te;
      }
      return u = I0.bind(null, l), t = Gn(t, u), l.callbackPriority = a, l.callbackNode = t, a;
    }
    return u !== null && u !== null && Zn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function I0(l, a) {
    var t = l.callbackNode;
    if (du() && l.callbackNode !== t)
      return null;
    var u = Q;
    return u = Ue(
      l,
      l === K ? u : 0
    ), u === 0 ? null : (Z0(l, u, a), $0(l, ia()), l.callbackNode != null && l.callbackNode === t ? I0.bind(null, l) : null);
  }
  function P0(l, a) {
    if (du()) return null;
    Z0(l, a, !0);
  }
  function O1(l) {
    X1(function() {
      k & 6 ? Gn(kc, l) : l();
    });
  }
  function Mc() {
    return Nt === 0 && (Nt = Pc()), Nt;
  }
  function lv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function av(l, a) {
    var t = a.ownerDocument.createElement("input");
    return t.name = a.name, t.value = a.value, l.id && t.setAttribute("form", l.id), a.parentNode.insertBefore(t, a), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function q1(l, a, t, u, e) {
    if (a === "submit" && t && t.stateNode === e) {
      var n = lv(
        (e[Hl] || null).action
      ), f = u.submitter;
      f && (a = (a = f[Hl] || null) ? lv(a.formAction) : f.getAttribute("formAction"), a !== null && (n = a, f = null));
      var c = new Qe(
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
                if (Nt !== 0) {
                  var i = f ? av(e, f) : new FormData(e);
                  Yf(
                    t,
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
                typeof n == "function" && (c.preventDefault(), i = f ? av(e, f) : new FormData(e), Yf(
                  t,
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
  for (var Uc = 0; Uc < wi.length; Uc++) {
    var Oc = wi[Uc], r1 = Oc.toLowerCase(), H1 = Oc[0].toUpperCase() + Oc.slice(1);
    ta(
      r1,
      "on" + H1
    );
  }
  ta(Vi, "onAnimationEnd"), ta(pi, "onAnimationIteration"), ta(Ki, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(Jd, "onTransitionRun"), ta(wd, "onTransitionStart"), ta(Wd, "onTransitionCancel"), ta(Li, "onTransitionEnd"), Zt("onMouseEnter", ["mouseout", "mouseover"]), Zt("onMouseLeave", ["mouseout", "mouseover"]), Zt("onPointerEnter", ["pointerout", "pointerover"]), Zt("onPointerLeave", ["pointerout", "pointerover"]), ht(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ht(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ht("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ht(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ht(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ht(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), R1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe)
  );
  function tv(l, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var u = l[t], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (a)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, v = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (g) {
              tn(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, v = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (g) {
              tn(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function Y(l, a) {
    var t = a[xn];
    t === void 0 && (t = a[xn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    t.has(u) || (uv(a, l, 2, !1), t.add(u));
  }
  function qc(l, a, t) {
    var u = 0;
    a && (u |= 4), uv(
      t,
      l,
      u,
      a
    );
  }
  var on = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(l) {
    if (!l[on]) {
      l[on] = !0, fi.forEach(function(t) {
        t !== "selectionchange" && (R1.has(t) || qc(t, !1, l), qc(t, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[on] || (a[on] = !0, qc("selectionchange", !1, a));
    }
  }
  function uv(l, a, t, u) {
    switch (Ov(a)) {
      case 2:
        var e = th;
        break;
      case 8:
        e = uh;
        break;
      default:
        e = xc;
    }
    t = e.bind(
      null,
      a,
      t,
      l
    ), e = void 0, !Fn || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(a, t, {
      capture: !0,
      passive: e
    }) : l.addEventListener(a, t, !0) : e !== void 0 ? l.addEventListener(a, t, {
      passive: e
    }) : l.addEventListener(a, t, !1);
  }
  function Hc(l, a, t, u, e) {
    var n = u;
    if (!(a & 1) && !(a & 2) && u !== null)
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
            if (f = dt(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    oi(function() {
      var v = n, g = wn(t), o = [];
      l: {
        var y = Ji.get(l);
        if (y !== void 0) {
          var S = Qe, T = l;
          switch (l) {
            case "keypress":
              if (Be(t) === 0) break l;
            case "keydown":
            case "keyup":
              S = Dd;
              break;
            case "focusin":
              T = "focus", S = Pn;
              break;
            case "focusout":
              T = "blur", S = Pn;
              break;
            case "beforeblur":
            case "afterblur":
              S = Pn;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Ei;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Od;
              break;
            case Vi:
            case pi:
            case Ki:
              S = md;
              break;
            case Li:
              S = rd;
              break;
            case "scroll":
            case "scrollend":
              S = sd;
              break;
            case "wheel":
              S = Rd;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = gd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Di;
              break;
            case "toggle":
            case "beforetoggle":
              S = Bd;
          }
          var q = (a & 4) !== 0, al = !q && (l === "scroll" || l === "scrollend"), d = q ? y !== null ? y + "Capture" : null : y;
          q = [];
          for (var s = v, h; s !== null; ) {
            var b = s;
            if (h = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || h === null || d === null || (b = Uu(s, d), b != null && q.push(
              ce(s, b, h)
            )), al) break;
            s = s.return;
          }
          0 < q.length && (y = new S(
            y,
            T,
            null,
            t,
            g
          ), o.push({ event: y, listeners: q }));
        }
      }
      if (!(a & 7)) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", y && t !== Jn && (T = t.relatedTarget || t.fromElement) && (dt(T) || T[Xt]))
            break l;
          if ((S || y) && (y = g.window === g ? g : (y = g.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (T = t.relatedTarget || t.toElement, S = v, T = T ? dt(T) : null, T !== null && (al = O(T), q = T.tag, T !== al || q !== 5 && q !== 27 && q !== 6) && (T = null)) : (S = null, T = v), S !== T)) {
            if (q = Ei, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (q = Di, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), al = S == null ? y : Mu(S), h = T == null ? y : Mu(T), y = new q(
              b,
              s + "leave",
              S,
              t,
              g
            ), y.target = al, y.relatedTarget = h, b = null, dt(g) === v && (q = new q(
              d,
              s + "enter",
              T,
              t,
              g
            ), q.target = h, q.relatedTarget = al, b = q), al = b, S && T)
              a: {
                for (q = S, d = T, s = 0, h = q; h; h = yu(h))
                  s++;
                for (h = 0, b = d; b; b = yu(b))
                  h++;
                for (; 0 < s - h; )
                  q = yu(q), s--;
                for (; 0 < h - s; )
                  d = yu(d), h--;
                for (; s--; ) {
                  if (q === d || d !== null && q === d.alternate)
                    break a;
                  q = yu(q), d = yu(d);
                }
                q = null;
              }
            else q = null;
            S !== null && ev(
              o,
              y,
              S,
              q,
              !1
            ), T !== null && al !== null && ev(
              o,
              al,
              T,
              q,
              !0
            );
          }
        }
        l: {
          if (y = v ? Mu(v) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file")
            var E = Ni;
          else if (Hi(y))
            if (Bi)
              E = Vd;
            else {
              E = Cd;
              var R = Zd;
            }
          else
            S = y.nodeName, !S || S.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? v && Ln(v.elementType) && (E = Ni) : E = xd;
          if (E && (E = E(l, v))) {
            Ri(
              o,
              E,
              t,
              g
            );
            break l;
          }
          R && R(l, y, v), l === "focusout" && v && y.type === "number" && v.memoizedProps.value != null && Kn(y, "number", y.value);
        }
        switch (R = v ? Mu(v) : window, l) {
          case "focusin":
            (Hi(R) || R.contentEditable === "true") && (Lt = R, nf = v, Yu = null);
            break;
          case "focusout":
            Yu = nf = Lt = null;
            break;
          case "mousedown":
            ff = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ff = !1, Ci(o, t, g);
            break;
          case "selectionchange":
            if (Ld) break;
          case "keydown":
          case "keyup":
            Ci(o, t, g);
        }
        var D;
        if (af)
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
          Kt ? qi(l, t) && (M = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (M = "onCompositionStart");
        M && (Mi && t.locale !== "ko" && (Kt || M !== "onCompositionStart" ? M === "onCompositionEnd" && Kt && (D = Ai()) : (Xa = g, kn = "value" in Xa ? Xa.value : Xa.textContent, Kt = !0)), R = An(v, M), 0 < R.length && (M = new Ti(
          M,
          l,
          null,
          t,
          g
        ), o.push({ event: M, listeners: R }), D ? M.data = D : (D = ri(t), D !== null && (M.data = D)))), (D = Qd ? jd(l, t) : Xd(l, t)) && (M = An(v, "onBeforeInput"), 0 < M.length && (R = new Ti(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          g
        ), o.push({
          event: R,
          listeners: M
        }), R.data = D)), q1(
          o,
          l,
          v,
          t,
          g
        );
      }
      tv(o, a);
    });
  }
  function ce(l, a, t) {
    return {
      instance: l,
      listener: a,
      currentTarget: t
    };
  }
  function An(l, a) {
    for (var t = a + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Uu(l, t), e != null && u.unshift(
        ce(l, e, n)
      ), e = Uu(l, a), e != null && u.push(
        ce(l, e, n)
      )), l = l.return;
    }
    return u;
  }
  function yu(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ev(l, a, t, u, e) {
    for (var n = a._reactName, f = []; t !== null && t !== u; ) {
      var c = t, i = c.alternate, v = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (i = v, e ? (v = Uu(t, n), v != null && f.unshift(
        ce(t, v, i)
      )) : e || (v = Uu(t, n), v != null && f.push(
        ce(t, v, i)
      ))), t = t.return;
    }
    f.length !== 0 && l.push({ event: a, listeners: f });
  }
  var N1 = /\r\n?/g, B1 = /\u0000|\uFFFD/g;
  function nv(l) {
    return (typeof l == "string" ? l : "" + l).replace(N1, `
`).replace(B1, "");
  }
  function fv(l, a) {
    return a = nv(a), nv(l) === a;
  }
  function zn() {
  }
  function V(l, a, t, u, e, n) {
    switch (t) {
      case "children":
        typeof u == "string" ? a === "body" || a === "textarea" && u === "" || xt(l, u) : (typeof u == "number" || typeof u == "bigint") && a !== "body" && xt(l, "" + u);
        break;
      case "className":
        qe(l, "class", u);
        break;
      case "tabIndex":
        qe(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qe(l, t, u);
        break;
      case "style":
        gi(l, u, n);
        break;
      case "data":
        if (a !== "object") {
          qe(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (a !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(t);
          break;
        }
        u = Re("" + u), l.setAttribute(t, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (t === "formAction" ? (a !== "input" && V(l, a, "name", e.name, e, null), V(
            l,
            a,
            "formEncType",
            e.formEncType,
            e,
            null
          ), V(
            l,
            a,
            "formMethod",
            e.formMethod,
            e,
            null
          ), V(
            l,
            a,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (V(l, a, "encType", e.encType, e, null), V(l, a, "method", e.method, e, null), V(l, a, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(t);
          break;
        }
        u = Re("" + u), l.setAttribute(t, u);
        break;
      case "onClick":
        u != null && (l.onclick = zn);
        break;
      case "onScroll":
        u != null && Y("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Y("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(m(61));
          if (t = u.__html, t != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = t;
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
        t = Re("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
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
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, "" + u) : l.removeAttribute(t);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(t, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, u) : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(t, u) : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(t) : l.setAttribute(t, u);
        break;
      case "popover":
        Y("beforetoggle", l), Y("toggle", l), Oe(l, "popover", u);
        break;
      case "xlinkActuate":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        ba(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        ba(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        ba(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        ba(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Oe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = cd.get(t) || t, Oe(l, t, u));
    }
  }
  function Rc(l, a, t, u, e, n) {
    switch (t) {
      case "style":
        gi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(m(61));
          if (t = u.__html, t != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof u == "string" ? xt(l, u) : (typeof u == "number" || typeof u == "bigint") && xt(l, "" + u);
        break;
      case "onScroll":
        u != null && Y("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Y("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = zn);
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
        if (!ci.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (e = t.endsWith("Capture"), a = t.slice(2, e ? t.length - 7 : void 0), n = l[Hl] || null, n = n != null ? n[t] : null, typeof n == "function" && l.removeEventListener(a, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(a, u, e);
              break l;
            }
            t in l ? l[t] = u : u === !0 ? l.setAttribute(t, "") : Oe(l, t, u);
          }
    }
  }
  function Tl(l, a, t) {
    switch (a) {
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
        Y("error", l), Y("load", l);
        var u = !1, e = !1, n;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var f = t[n];
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
                  throw Error(m(137, a));
                default:
                  V(l, a, n, f, t, null);
              }
          }
        e && V(l, a, "srcSet", t.srcSet, t, null), u && V(l, a, "src", t.src, t, null);
        return;
      case "input":
        Y("invalid", l);
        var c = n = f = e = null, i = null, v = null;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var g = t[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(m(137, a));
                  break;
                default:
                  V(l, a, u, g, t, null);
              }
          }
        hi(
          l,
          n,
          c,
          i,
          v,
          f,
          e,
          !1
        ), re(l);
        return;
      case "select":
        Y("invalid", l), u = f = n = null;
        for (e in t)
          if (t.hasOwnProperty(e) && (c = t[e], c != null))
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
                V(l, a, e, c, t, null);
            }
        a = n, t = f, l.multiple = !!u, a != null ? Ct(l, !!u, a, !1) : t != null && Ct(l, !!u, t, !0);
        return;
      case "textarea":
        Y("invalid", l), n = e = u = null;
        for (f in t)
          if (t.hasOwnProperty(f) && (c = t[f], c != null))
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
                if (c != null) throw Error(m(91));
                break;
              default:
                V(l, a, f, c, t, null);
            }
        mi(l, u, e, n), re(l);
        return;
      case "option":
        for (i in t)
          if (t.hasOwnProperty(i) && (u = t[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                V(l, a, i, u, t, null);
            }
        return;
      case "dialog":
        Y("cancel", l), Y("close", l);
        break;
      case "iframe":
      case "object":
        Y("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++)
          Y(fe[u], l);
        break;
      case "image":
        Y("error", l), Y("load", l);
        break;
      case "details":
        Y("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Y("error", l), Y("load", l);
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
        for (v in t)
          if (t.hasOwnProperty(v) && (u = t[v], u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, a));
              default:
                V(l, a, v, u, t, null);
            }
        return;
      default:
        if (Ln(a)) {
          for (g in t)
            t.hasOwnProperty(g) && (u = t[g], u !== void 0 && Rc(
              l,
              a,
              g,
              u,
              t,
              void 0
            ));
          return;
        }
    }
    for (c in t)
      t.hasOwnProperty(c) && (u = t[c], u != null && V(l, a, c, u, t, null));
  }
  function Y1(l, a, t, u) {
    switch (a) {
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
        var e = null, n = null, f = null, c = null, i = null, v = null, g = null;
        for (S in t) {
          var o = t[S];
          if (t.hasOwnProperty(S) && o != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = o;
              default:
                u.hasOwnProperty(S) || V(l, a, S, null, u, o);
            }
        }
        for (var y in u) {
          var S = u[y];
          if (o = t[y], u.hasOwnProperty(y) && (S != null || o != null))
            switch (y) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                v = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(m(137, a));
                break;
              default:
                S !== o && V(
                  l,
                  a,
                  y,
                  S,
                  u,
                  o
                );
            }
        }
        pn(
          l,
          f,
          c,
          i,
          v,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = y = null;
        for (n in t)
          if (i = t[n], t.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                u.hasOwnProperty(n) || V(
                  l,
                  a,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = t[e], u.hasOwnProperty(e) && (n != null || i != null))
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
                n !== i && V(
                  l,
                  a,
                  e,
                  n,
                  u,
                  i
                );
            }
        a = c, t = f, u = S, y != null ? Ct(l, !!t, y, !1) : !!u != !!t && (a != null ? Ct(l, !!t, a, !0) : Ct(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        S = y = null;
        for (c in t)
          if (e = t[c], t.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                V(l, a, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = t[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && V(l, a, f, e, u, n);
            }
        yi(l, y, S);
        return;
      case "option":
        for (var T in t)
          if (y = t[T], t.hasOwnProperty(T) && y != null && !u.hasOwnProperty(T))
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                V(
                  l,
                  a,
                  T,
                  null,
                  u,
                  y
                );
            }
        for (i in u)
          if (y = u[i], S = t[i], u.hasOwnProperty(i) && y !== S && (y != null || S != null))
            switch (i) {
              case "selected":
                l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                V(
                  l,
                  a,
                  i,
                  y,
                  u,
                  S
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
        for (var q in t)
          y = t[q], t.hasOwnProperty(q) && y != null && !u.hasOwnProperty(q) && V(l, a, q, null, u, y);
        for (v in u)
          if (y = u[v], S = t[v], u.hasOwnProperty(v) && y !== S && (y != null || S != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(m(137, a));
                break;
              default:
                V(
                  l,
                  a,
                  v,
                  y,
                  u,
                  S
                );
            }
        return;
      default:
        if (Ln(a)) {
          for (var al in t)
            y = t[al], t.hasOwnProperty(al) && y !== void 0 && !u.hasOwnProperty(al) && Rc(
              l,
              a,
              al,
              void 0,
              u,
              y
            );
          for (g in u)
            y = u[g], S = t[g], !u.hasOwnProperty(g) || y === S || y === void 0 && S === void 0 || Rc(
              l,
              a,
              g,
              y,
              u,
              S
            );
          return;
        }
    }
    for (var d in t)
      y = t[d], t.hasOwnProperty(d) && y != null && !u.hasOwnProperty(d) && V(l, a, d, null, u, y);
    for (o in u)
      y = u[o], S = t[o], !u.hasOwnProperty(o) || y === S || y == null && S == null || V(l, a, o, y, u, S);
  }
  var Nc = null, Bc = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function cv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function iv(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Yc(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function Q1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var sv = typeof setTimeout == "function" ? setTimeout : void 0, j1 = typeof clearTimeout == "function" ? clearTimeout : void 0, vv = typeof Promise == "function" ? Promise : void 0, X1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof vv < "u" ? function(l) {
    return vv.resolve(null).then(l).catch(_1);
  } : sv;
  function _1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function jc(l, a) {
    var t = a, u = 0;
    do {
      var e = t.nextSibling;
      if (l.removeChild(t), e && e.nodeType === 8)
        if (t = e.data, t === "/$") {
          if (u === 0) {
            l.removeChild(e), Se(a);
            return;
          }
          u--;
        } else t !== "$" && t !== "$?" && t !== "$!" || u++;
      t = e;
    } while (t);
    Se(a);
  }
  function Xc(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (a = a.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(t), Vn(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function G1(l, a, t, u) {
    for (; l.nodeType === 1; ) {
      var e = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Du])
          switch (a) {
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
      } else if (a === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = na(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Z1(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = na(l.nextSibling), l === null)) return null;
    return l;
  }
  function na(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return l;
  }
  function dv(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (a === 0) return l;
          a--;
        } else t === "/$" && a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function hv(l, a, t) {
    switch (a = En(t), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  var la = /* @__PURE__ */ new Map(), yv = /* @__PURE__ */ new Set();
  function Tn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var Ba = j.d;
  j.d = {
    f: C1,
    r: x1,
    D: V1,
    C: p1,
    L: K1,
    m: L1,
    X: w1,
    S: J1,
    M: W1
  };
  function C1() {
    var l = Ba.f(), a = mn();
    return l || a;
  }
  function x1(l) {
    var a = _t(l);
    a !== null && a.tag === 5 && a.type === "form" ? Cs(a) : Ba.r(l);
  }
  var mu = typeof document > "u" ? null : document;
  function mv(l, a, t) {
    var u = mu;
    if (u && typeof a == "string" && a) {
      var e = Kl(a);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof t == "string" && (e += '[crossorigin="' + t + '"]'), yv.has(e) || (yv.add(e), l = { rel: l, crossOrigin: t, href: a }, u.querySelector(e) === null && (a = u.createElement("link"), Tl(a, "link", l), yl(a), u.head.appendChild(a)));
    }
  }
  function V1(l) {
    Ba.D(l), mv("dns-prefetch", l, null);
  }
  function p1(l, a) {
    Ba.C(l, a), mv("preconnect", l, a);
  }
  function K1(l, a, t) {
    Ba.L(l, a, t);
    var u = mu;
    if (u && l && a) {
      var e = 'link[rel="preload"][as="' + Kl(a) + '"]';
      a === "image" && t && t.imageSrcSet ? (e += '[imagesrcset="' + Kl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (e += '[imagesizes="' + Kl(
        t.imageSizes
      ) + '"]')) : e += '[href="' + Kl(l) + '"]';
      var n = e;
      switch (a) {
        case "style":
          n = Su(l);
          break;
        case "script":
          n = gu(l);
      }
      la.has(n) || (l = Z(
        {
          rel: "preload",
          href: a === "image" && t && t.imageSrcSet ? void 0 : l,
          as: a
        },
        t
      ), la.set(n, l), u.querySelector(e) !== null || a === "style" && u.querySelector(ie(n)) || a === "script" && u.querySelector(se(n)) || (a = u.createElement("link"), Tl(a, "link", l), yl(a), u.head.appendChild(a)));
    }
  }
  function L1(l, a) {
    Ba.m(l, a);
    var t = mu;
    if (t && l) {
      var u = a && typeof a.as == "string" ? a.as : "script", e = 'link[rel="modulepreload"][as="' + Kl(u) + '"][href="' + Kl(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = gu(l);
      }
      if (!la.has(n) && (l = Z({ rel: "modulepreload", href: l }, a), la.set(n, l), t.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(se(n)))
              return;
        }
        u = t.createElement("link"), Tl(u, "link", l), yl(u), t.head.appendChild(u);
      }
    }
  }
  function J1(l, a, t) {
    Ba.S(l, a, t);
    var u = mu;
    if (u && l) {
      var e = Gt(u).hoistableStyles, n = Su(l);
      a = a || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          ie(n)
        ))
          c.loading = 5;
        else {
          l = Z(
            { rel: "stylesheet", href: l, "data-precedence": a },
            t
          ), (t = la.get(n)) && _c(l, t);
          var i = f = u.createElement("link");
          yl(i), Tl(i, "link", l), i._p = new Promise(function(v, g) {
            i.onload = v, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(f, a, u);
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
  function w1(l, a) {
    Ba.X(l, a);
    var t = mu;
    if (t && l) {
      var u = Gt(t).hoistableScripts, e = gu(l), n = u.get(e);
      n || (n = t.querySelector(se(e)), n || (l = Z({ src: l, async: !0 }, a), (a = la.get(e)) && Gc(l, a), n = t.createElement("script"), yl(n), Tl(n, "link", l), t.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function W1(l, a) {
    Ba.M(l, a);
    var t = mu;
    if (t && l) {
      var u = Gt(t).hoistableScripts, e = gu(l), n = u.get(e);
      n || (n = t.querySelector(se(e)), n || (l = Z({ src: l, async: !0, type: "module" }, a), (a = la.get(e)) && Gc(l, a), n = t.createElement("script"), yl(n), Tl(n, "link", l), t.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Sv(l, a, t, u) {
    var e = (e = Ya.current) ? Tn(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (a = Su(t.href), t = Gt(
          e
        ).hoistableStyles, u = t.get(a), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = Su(t.href);
          var n = Gt(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ie(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), la.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, la.set(l, t), n || F1(
            e,
            l,
            t,
            f.state
          ))), a && u === null)
            throw Error(m(528, ""));
          return f;
        }
        if (a && u !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return a = t.async, t = t.src, typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = gu(t), t = Gt(
          e
        ).hoistableScripts, u = t.get(a), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Su(l) {
    return 'href="' + Kl(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function gv(l) {
    return Z({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function F1(l, a, t, u) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? u.loading = 1 : (a = l.createElement("link"), u.preload = a, a.addEventListener("load", function() {
      return u.loading |= 1;
    }), a.addEventListener("error", function() {
      return u.loading |= 2;
    }), Tl(a, "link", t), yl(a), l.head.appendChild(a));
  }
  function gu(l) {
    return '[src="' + Kl(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function bv(l, a, t) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + Kl(t.href) + '"]'
          );
          if (u)
            return a.instance = u, yl(u), u;
          var e = Z({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), yl(u), Tl(u, "style", e), Dn(u, t.precedence, l), a.instance = u;
        case "stylesheet":
          e = Su(t.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return a.state.loading |= 4, a.instance = n, yl(n), n;
          u = gv(t), (e = la.get(e)) && _c(u, e), n = (l.ownerDocument || l).createElement("link"), yl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Tl(n, "link", u), a.state.loading |= 4, Dn(n, t.precedence, l), a.instance = n;
        case "script":
          return n = gu(t.src), (e = l.querySelector(
            se(n)
          )) ? (a.instance = e, yl(e), e) : (u = t, (e = la.get(n)) && (u = Z({}, t), Gc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), yl(e), Tl(e, "link", u), l.head.appendChild(e), a.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, a.type));
      }
    else
      a.type === "stylesheet" && !(a.state.loading & 4) && (u = a.instance, a.state.loading |= 4, Dn(u, t.precedence, l));
    return a.instance;
  }
  function Dn(l, a, t) {
    for (var u = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === a) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (a = t.nodeType === 9 ? t.head : t, a.insertBefore(l, a.firstChild));
  }
  function _c(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function Gc(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var Mn = null;
  function ov(l, a, t) {
    if (Mn === null) {
      var u = /* @__PURE__ */ new Map(), e = Mn = /* @__PURE__ */ new Map();
      e.set(t, u);
    } else
      e = Mn, u = e.get(t), u || (u = /* @__PURE__ */ new Map(), e.set(t, u));
    if (u.has(l)) return u;
    for (u.set(l, null), t = t.getElementsByTagName(l), e = 0; e < t.length; e++) {
      var n = t[e];
      if (!(n[Du] || n[Ml] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(a) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Av(l, a, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function k1(l, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function zv(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var ve = null;
  function $1() {
  }
  function I1(l, a, t) {
    if (ve === null) throw Error(m(475));
    var u = ve;
    if (a.type === "stylesheet" && (typeof t.media != "string" || matchMedia(t.media).matches !== !1) && !(a.state.loading & 4)) {
      if (a.instance === null) {
        var e = Su(t.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Un.bind(u), l.then(u, u)), a.state.loading |= 4, a.instance = n, yl(n);
          return;
        }
        n = l.ownerDocument || l, t = gv(t), (e = la.get(e)) && _c(t, e), n = n.createElement("link"), yl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Tl(n, "link", t), a.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(a, l), (l = a.state.preload) && !(a.state.loading & 3) && (u.count++, a = Un.bind(u), l.addEventListener("load", a), l.addEventListener("error", a));
    }
  }
  function P1() {
    if (ve === null) throw Error(m(475));
    var l = ve;
    return l.stylesheets && l.count === 0 && Zc(l, l.stylesheets), 0 < l.count ? function(a) {
      var t = setTimeout(function() {
        if (l.stylesheets && Zc(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(t);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var On = null;
  function Zc(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, On = /* @__PURE__ */ new Map(), a.forEach(lh, l), On = null, Un.call(l));
  }
  function lh(l, a) {
    if (!(a.state.loading & 4)) {
      var t = On.get(l);
      if (t) var u = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), On.set(l, t);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (t.set(f.dataset.precedence, f), u = f);
        }
        u && t.set(null, u);
      }
      e = a.instance, f = e.getAttribute("data-precedence"), n = t.get(f) || u, n === u && t.set(null, e), t.set(f, e), this.count++, u = Un.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), a.state.loading |= 4;
    }
  }
  var de = {
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: Vl,
    _currentValue2: Vl,
    _threadCount: 0
  };
  function ah(l, a, t, u, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cn(0), this.hiddenUpdates = Cn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ev(l, a, t, u, e, n, f, c, i, v, g, o) {
    return l = new ah(
      l,
      a,
      t,
      f,
      c,
      i,
      v,
      o
    ), a = 1, n === !0 && (a |= 24), n = Il(3, null, null, a), l.current = n, n.stateNode = l, a = bf(), a.refCount++, l.pooledCache = a, a.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: t,
      cache: a
    }, $f(n), l;
  }
  function Tv(l) {
    return l ? (l = Wt, l) : Wt;
  }
  function Dv(l, a, t, u, e, n) {
    e = Tv(e), u.context === null ? u.context = e : u.pendingContext = e, u = Ka(a), u.payload = { element: t }, n = n === void 0 ? null : n, n !== null && (u.callback = n), t = La(l, u, a), t !== null && (ql(t, l, a), Wu(t, l, a));
  }
  function Mv(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function Cc(l, a) {
    Mv(l, a), (l = l.alternate) && Mv(l, a);
  }
  function Uv(l) {
    if (l.tag === 13) {
      var a = _a(l, 67108864);
      a !== null && ql(a, l, 67108864), Cc(l, 67108864);
    }
  }
  var qn = !0;
  function th(l, a, t, u) {
    var e = U.T;
    U.T = null;
    var n = j.p;
    try {
      j.p = 2, xc(l, a, t, u);
    } finally {
      j.p = n, U.T = e;
    }
  }
  function uh(l, a, t, u) {
    var e = U.T;
    U.T = null;
    var n = j.p;
    try {
      j.p = 8, xc(l, a, t, u);
    } finally {
      j.p = n, U.T = e;
    }
  }
  function xc(l, a, t, u) {
    if (qn) {
      var e = Vc(u);
      if (e === null)
        Hc(
          l,
          a,
          u,
          rn,
          t
        ), qv(l, u);
      else if (nh(
        e,
        l,
        a,
        t,
        u
      ))
        u.stopPropagation();
      else if (qv(l, u), a & 4 && -1 < eh.indexOf(l)) {
        for (; e !== null; ) {
          var n = _t(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = vt(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - jl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    ya(n), !(k & 6) && (dn = ia() + 500, ne(0));
                  }
                }
                break;
              case 13:
                c = _a(n, 2), c !== null && ql(c, n, 2), mn(), Cc(n, 2);
            }
          if (n = Vc(u), n === null && Hc(
            l,
            a,
            u,
            rn,
            t
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Hc(
          l,
          a,
          u,
          null,
          t
        );
    }
  }
  function Vc(l) {
    return l = wn(l), pc(l);
  }
  var rn = null;
  function pc(l) {
    if (rn = null, l = dt(l), l !== null) {
      var a = O(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (l = w(a), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return rn = l, null;
  }
  function Ov(l) {
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
        switch (pv()) {
          case kc:
            return 2;
          case $c:
            return 8;
          case Te:
          case Kv:
            return 32;
          case Ic:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kc = !1, Ia = null, Pa = null, lt = null, he = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), at = [], eh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qv(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ia = null;
        break;
      case "dragenter":
      case "dragleave":
        Pa = null;
        break;
      case "mouseover":
      case "mouseout":
        lt = null;
        break;
      case "pointerover":
      case "pointerout":
        he.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ye.delete(a.pointerId);
    }
  }
  function me(l, a, t, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: a,
      domEventName: t,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, a !== null && (a = _t(a), a !== null && Uv(a)), l) : (l.eventSystemFlags |= u, a = l.targetContainers, e !== null && a.indexOf(e) === -1 && a.push(e), l);
  }
  function nh(l, a, t, u, e) {
    switch (a) {
      case "focusin":
        return Ia = me(
          Ia,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "dragenter":
        return Pa = me(
          Pa,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "mouseover":
        return lt = me(
          lt,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return he.set(
          n,
          me(
            he.get(n) || null,
            l,
            a,
            t,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ye.set(
          n,
          me(
            ye.get(n) || null,
            l,
            a,
            t,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function rv(l) {
    var a = dt(l.target);
    if (a !== null) {
      var t = O(a);
      if (t !== null) {
        if (a = t.tag, a === 13) {
          if (a = w(t), a !== null) {
            l.blockedOn = a, Pv(l.priority, function() {
              if (t.tag === 13) {
                var u = Cl(), e = _a(t, u);
                e !== null && ql(e, t, u), Cc(t, u);
              }
            });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Hn(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var t = Vc(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var u = new t.constructor(
          t.type,
          t
        );
        Jn = u, t.target.dispatchEvent(u), Jn = null;
      } else
        return a = _t(t), a !== null && Uv(a), l.blockedOn = t, !1;
      a.shift();
    }
    return !0;
  }
  function Hv(l, a, t) {
    Hn(l) && t.delete(a);
  }
  function fh() {
    Kc = !1, Ia !== null && Hn(Ia) && (Ia = null), Pa !== null && Hn(Pa) && (Pa = null), lt !== null && Hn(lt) && (lt = null), he.forEach(Hv), ye.forEach(Hv);
  }
  function Rn(l, a) {
    l.blockedOn === a && (l.blockedOn = null, Kc || (Kc = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      fh
    )));
  }
  var Nn = null;
  function Rv(l) {
    Nn !== l && (Nn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        Nn === l && (Nn = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a], u = l[a + 1], e = l[a + 2];
          if (typeof u != "function") {
            if (pc(u || t) === null)
              continue;
            break;
          }
          var n = _t(t);
          n !== null && (l.splice(a, 3), a -= 3, Yf(
            n,
            {
              pending: !0,
              data: e,
              method: t.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function Se(l) {
    function a(i) {
      return Rn(i, l);
    }
    Ia !== null && Rn(Ia, l), Pa !== null && Rn(Pa, l), lt !== null && Rn(lt, l), he.forEach(a), ye.forEach(a);
    for (var t = 0; t < at.length; t++) {
      var u = at[t];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < at.length && (t = at[0], t.blockedOn === null); )
      rv(t), t.blockedOn === null && at.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (u = 0; u < t.length; u += 3) {
        var e = t[u], n = t[u + 1], f = e[Hl] || null;
        if (typeof n == "function")
          f || Rv(t);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Hl] || null)
              c = f.formAction;
            else if (pc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? t[u + 1] = c : (t.splice(u, 3), u -= 3), Rv(t);
        }
      }
  }
  function Lc(l) {
    this._internalRoot = l;
  }
  Bn.prototype.render = Lc.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(m(409));
    var t = a.current, u = Cl();
    Dv(t, u, l, a, null, null);
  }, Bn.prototype.unmount = Lc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      l.tag === 0 && du(), Dv(l.current, 2, null, l, null, null), mn(), a[Xt] = null;
    }
  };
  function Bn(l) {
    this._internalRoot = l;
  }
  Bn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = ei();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < at.length && a !== 0 && a < at[t].priority; t++) ;
      at.splice(t, 0, l), t === 0 && rv(l);
    }
  };
  var Nv = $.version;
  if (Nv !== "19.0.0")
    throw Error(
      m(
        527,
        Nv,
        "19.0.0"
      )
    );
  j.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = Yt(a), l = l !== null ? st(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ch = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    findFiberByHostInstance: dt,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber)
      try {
        zu = Yn.inject(
          ch
        ), Ql = Yn;
      } catch {
      }
  }
  return be.createRoot = function(l, a) {
    if (!J(l)) throw Error(m(299));
    var t = !1, u = "", e = Ws, n = Fs, f = ks, c = null;
    return a != null && (a.unstable_strictMode === !0 && (t = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (e = a.onUncaughtError), a.onCaughtError !== void 0 && (n = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (c = a.unstable_transitionCallbacks)), a = Ev(
      l,
      1,
      !1,
      null,
      null,
      t,
      u,
      e,
      n,
      f,
      c,
      null
    ), l[Xt] = a.current, rc(
      l.nodeType === 8 ? l.parentNode : l
    ), new Lc(a);
  }, be.hydrateRoot = function(l, a, t) {
    if (!J(l)) throw Error(m(299));
    var u = !1, e = "", n = Ws, f = Fs, c = ks, i = null, v = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks), t.formState !== void 0 && (v = t.formState)), a = Ev(
      l,
      1,
      !0,
      a,
      t ?? null,
      u,
      e,
      n,
      f,
      c,
      i,
      v
    ), a.context = Tv(null), t = a.current, u = Cl(), e = Ka(u), e.callback = null, La(t, e, u), a.current.lanes = u, Tu(a, u), ya(a), l[Xt] = a.current, rc(l), new Bn(a);
  }, be.version = "19.0.0", be;
}
var Gv;
function oh() {
  if (Gv) return wc.exports;
  Gv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch ($) {
        console.error($);
      }
  }
  return A(), wc.exports = bh(), wc.exports;
}
var Ah = oh();
const zh = /* @__PURE__ */ hh(Ah), Eh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", Th = ({ onQuestionClick: A }) => {
  const $ = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ B.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ B.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ B.jsx("ul", { children: $.map((C, m) => /* @__PURE__ */ B.jsx("li", { onClick: () => A(C), children: C }, m)) })
  ] });
}, Dh = ({ message: A }) => /* @__PURE__ */ B.jsx("div", { className: `message ${A.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ B.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ B.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: A.text } }) }) }), Mh = "http://localhost:3030/api";
async function Zv(A, $, C = {}, m = !1) {
  var bl;
  const J = {
    "Content-Type": "application/json"
    // Tipo de contenido JSON
  };
  if (m) {
    const tl = localStorage.getItem("token");
    tl && (J.Authorization = `Bearer ${tl}`);
  }
  try {
    return (await axios({
      method: $,
      url: `${Mh}${A}`,
      headers: J,
      data: C
    })).data;
  } catch (tl) {
    return ((bl = tl.response) == null ? void 0 : bl.status) === 401 ? { error: !0, message: "No autorizado" } : { error: !0, message: "Error inesperado" };
  }
}
const Uh = async (A) => Zv("v1/chatboot/sendmesaje", "POST", !1), Oh = async () => Zv("v1/chatboot/history", "POST", !1), Cv = () => {
  const [A, $] = Qn([]), [C, m] = Qn(""), [J, bl] = Qn(!1), [tl, Bl] = Qn(!0), I = vh(null);
  Bv(() => {
    Yl();
  }, []);
  const Yl = async () => {
    try {
      const X = await Oh();
      if (X.STATUS) {
        const rl = X.RSP.map((Al) => ({
          id: Al.id,
          text: Al.message,
          isUser: Al.role === "user",
          status: "sent",
          timestamp: new Date(Al.created_at)
        }));
        $(rl);
      }
    } catch (X) {
      console.error("Error cargando historial:", X);
    } finally {
      Bl(!1);
    }
  }, ut = () => {
    if (I.current) {
      const { scrollHeight: X } = I.current;
      I.current.scrollTo({
        top: X,
        behavior: "smooth"
      });
    }
  };
  Bv(() => {
    ut();
  }, [A, J]);
  const ol = async (X = C) => {
    if (X.trim() === "") return;
    const rl = {
      id: Date.now().toString(),
      text: X,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    $((Al) => [...Al, rl]), m(""), bl(!0);
    try {
      const Al = await Uh({ message: X });
      if (Al.STATUS) {
        const xl = {
          id: (Date.now() + 1).toString(),
          text: Al.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        $((sl) => [...sl, xl]);
      } else {
        m(X);
        const xl = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        $((sl) => [...sl, xl]);
      }
    } catch {
      $(
        (xl) => xl.map(
          (sl) => sl.id === rl.id ? { ...sl, status: "error" } : sl
        )
      );
    } finally {
      bl(!1);
    }
  }, ul = (X) => {
    X.preventDefault(), ol();
  }, Dl = (X) => {
    ol(X);
  };
  return /* @__PURE__ */ B.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("img", { src: Eh, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ B.jsx("div", { ref: I, className: "messages-container", children: tl ? /* @__PURE__ */ B.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ B.jsx("div", { className: "dot" }),
        /* @__PURE__ */ B.jsx("div", { className: "dot" }),
        /* @__PURE__ */ B.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ B.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      A.length === 0 && /* @__PURE__ */ B.jsx(Th, { onQuestionClick: Dl }),
      A.map((X) => /* @__PURE__ */ B.jsx(Dh, { message: X }, X.id)),
      J && /* @__PURE__ */ B.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ B.jsx("span", {}),
        /* @__PURE__ */ B.jsx("span", {}),
        /* @__PURE__ */ B.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ B.jsxs("form", { onSubmit: ul, className: "message-input", children: [
      /* @__PURE__ */ B.jsx(
        "input",
        {
          type: "text",
          value: C,
          onChange: (X) => m(X.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: J || tl,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ B.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: J || tl || C.trim() === "",
          children: /* @__PURE__ */ B.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
}, qh = (A, $ = {}) => {
  if (typeof window > "u") return;
  const C = document.getElementById(A);
  if (!C) {
    console.error(`Container with id "${A}" not found`);
    return;
  }
  try {
    const m = zh.createRoot(C);
    return m.render(
      /* @__PURE__ */ B.jsx(Cv, { ...$ })
    ), m;
  } catch (m) {
    console.error("Error initializing ChatBot:", m);
  }
};
window.initChatBot = qh;
function Rh() {
  return /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ B.jsx(Cv, {}) }) });
}
export {
  Rh as default
};
