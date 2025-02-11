import Dh, { useState as Cn, useRef as Mh, useEffect as Vv } from "react";
import Uh from "react-dom";
function Oh(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var li = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kv;
function rh() {
  if (Kv) return De;
  Kv = 1;
  var A = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function x(S, $, ql) {
    var Ul = null;
    if (ql !== void 0 && (Ul = "" + ql), $.key !== void 0 && (Ul = "" + $.key), "key" in $) {
      ql = {};
      for (var Yl in $)
        Yl !== "key" && (ql[Yl] = $[Yl]);
    } else ql = $;
    return $ = ql.ref, {
      $$typeof: A,
      type: S,
      key: Ul,
      ref: $ !== void 0 ? $ : null,
      props: ql
    };
  }
  return De.Fragment = _, De.jsx = x, De.jsxs = x, De;
}
var Lv;
function qh() {
  return Lv || (Lv = 1, li.exports = rh()), li.exports;
}
var B = qh(), ti = { exports: {} };
function Hh(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var kv = { exports: {} }, nl = kv.exports = {}, St, gt;
function ni() {
  throw new Error("setTimeout has not been defined");
}
function fi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? St = setTimeout : St = ni;
  } catch {
    St = ni;
  }
  try {
    typeof clearTimeout == "function" ? gt = clearTimeout : gt = fi;
  } catch {
    gt = fi;
  }
})();
function $v(A) {
  if (St === setTimeout)
    return setTimeout(A, 0);
  if ((St === ni || !St) && setTimeout)
    return St = setTimeout, setTimeout(A, 0);
  try {
    return St(A, 0);
  } catch {
    try {
      return St.call(null, A, 0);
    } catch {
      return St.call(this, A, 0);
    }
  }
}
function Rh(A) {
  if (gt === clearTimeout)
    return clearTimeout(A);
  if ((gt === fi || !gt) && clearTimeout)
    return gt = clearTimeout, clearTimeout(A);
  try {
    return gt(A);
  } catch {
    try {
      return gt.call(null, A);
    } catch {
      return gt.call(this, A);
    }
  }
}
var _t = [], Du = !1, Xa, pn = -1;
function Nh() {
  !Du || !Xa || (Du = !1, Xa.length ? _t = Xa.concat(_t) : pn = -1, _t.length && Iv());
}
function Iv() {
  if (!Du) {
    var A = $v(Nh);
    Du = !0;
    for (var _ = _t.length; _; ) {
      for (Xa = _t, _t = []; ++pn < _; )
        Xa && Xa[pn].run();
      pn = -1, _ = _t.length;
    }
    Xa = null, Du = !1, Rh(A);
  }
}
nl.nextTick = function(A) {
  var _ = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var x = 1; x < arguments.length; x++)
      _[x - 1] = arguments[x];
  _t.push(new Pv(A, _)), _t.length === 1 && !Du && $v(Iv);
};
function Pv(A, _) {
  this.fun = A, this.array = _;
}
Pv.prototype.run = function() {
  this.fun.apply(null, this.array);
};
nl.title = "browser";
nl.browser = !0;
nl.env = {};
nl.argv = [];
nl.version = "";
nl.versions = {};
function Xt() {
}
nl.on = Xt;
nl.addListener = Xt;
nl.once = Xt;
nl.off = Xt;
nl.removeListener = Xt;
nl.removeAllListeners = Xt;
nl.emit = Xt;
nl.prependListener = Xt;
nl.prependOnceListener = Xt;
nl.listeners = function(A) {
  return [];
};
nl.binding = function(A) {
  throw new Error("process.binding is not supported");
};
nl.cwd = function() {
  return "/";
};
nl.chdir = function(A) {
  throw new Error("process.chdir is not supported");
};
nl.umask = function() {
  return 0;
};
var Bh = kv.exports;
const ai = /* @__PURE__ */ Hh(Bh);
var Me = {}, ui = { exports: {} }, ei = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jv;
function Yh() {
  return Jv || (Jv = 1, function(A) {
    function _(z, q) {
      var O = z.length;
      z.push(q);
      l: for (; 0 < O; ) {
        var w = O - 1 >>> 1, ul = z[w];
        if (0 < $(ul, q))
          z[w] = q, z[O] = ul, O = w;
        else break l;
      }
    }
    function x(z) {
      return z.length === 0 ? null : z[0];
    }
    function S(z) {
      if (z.length === 0) return null;
      var q = z[0], O = z.pop();
      if (O !== q) {
        z[0] = O;
        l: for (var w = 0, ul = z.length, Za = ul >>> 1; w < Za; ) {
          var ma = 2 * (w + 1) - 1, ot = z[ma], j = ma + 1, Vl = z[j];
          if (0 > $(ot, O))
            j < ul && 0 > $(Vl, ot) ? (z[w] = Vl, z[j] = O, w = j) : (z[w] = ot, z[ma] = O, w = ma);
          else if (j < ul && 0 > $(Vl, O))
            z[w] = Vl, z[j] = O, w = j;
          else break l;
        }
      }
      return q;
    }
    function $(z, q) {
      var O = z.sortIndex - q.sortIndex;
      return O !== 0 ? O : z.id - q.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ql = performance;
      A.unstable_now = function() {
        return ql.now();
      };
    } else {
      var Ul = Date, Yl = Ul.now();
      A.unstable_now = function() {
        return Ul.now() - Yl;
      };
    }
    var I = [], Ql = [], ia = 1, bl = null, al = 3, Tl = !1, X = !1, Hl = !1, ol = typeof setTimeout == "function" ? setTimeout : null, pl = typeof clearTimeout == "function" ? clearTimeout : null, sl = typeof setImmediate < "u" ? setImmediate : null;
    function sa(z) {
      for (var q = x(Ql); q !== null; ) {
        if (q.callback === null) S(Ql);
        else if (q.startTime <= z)
          S(Ql), q.sortIndex = q.expirationTime, _(I, q);
        else break;
        q = x(Ql);
      }
    }
    function Mu(z) {
      if (Hl = !1, sa(z), !X)
        if (x(I) !== null)
          X = !0, ha();
        else {
          var q = x(Ql);
          q !== null && ya(Mu, q.startTime - z);
        }
    }
    var va = !1, at = -1, Ue = 5, Ga = -1;
    function U() {
      return !(A.unstable_now() - Ga < Ue);
    }
    function C() {
      if (va) {
        var z = A.unstable_now();
        Ga = z;
        var q = !0;
        try {
          l: {
            X = !1, Hl && (Hl = !1, pl(at), at = -1), Tl = !0;
            var O = al;
            try {
              t: {
                for (sa(z), bl = x(I); bl !== null && !(bl.expirationTime > z && U()); ) {
                  var w = bl.callback;
                  if (typeof w == "function") {
                    bl.callback = null, al = bl.priorityLevel;
                    var ul = w(
                      bl.expirationTime <= z
                    );
                    if (z = A.unstable_now(), typeof ul == "function") {
                      bl.callback = ul, sa(z), q = !0;
                      break t;
                    }
                    bl === x(I) && S(I), sa(z);
                  } else S(I);
                  bl = x(I);
                }
                if (bl !== null) q = !0;
                else {
                  var Za = x(Ql);
                  Za !== null && ya(
                    Mu,
                    Za.startTime - z
                  ), q = !1;
                }
              }
              break l;
            } finally {
              bl = null, al = O, Tl = !1;
            }
            q = void 0;
          }
        } finally {
          q ? bt() : va = !1;
        }
      }
    }
    var bt;
    if (typeof sl == "function")
      bt = function() {
        sl(C);
      };
    else if (typeof MessageChannel < "u") {
      var Uu = new MessageChannel(), da = Uu.port2;
      Uu.port1.onmessage = C, bt = function() {
        da.postMessage(null);
      };
    } else
      bt = function() {
        ol(C, 0);
      };
    function ha() {
      va || (va = !0, bt());
    }
    function ya(z, q) {
      at = ol(function() {
        z(A.unstable_now());
      }, q);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, A.unstable_continueExecution = function() {
      X || Tl || (X = !0, ha());
    }, A.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ue = 0 < z ? Math.floor(1e3 / z) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return al;
    }, A.unstable_getFirstCallbackNode = function() {
      return x(I);
    }, A.unstable_next = function(z) {
      switch (al) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = al;
      }
      var O = al;
      al = q;
      try {
        return z();
      } finally {
        al = O;
      }
    }, A.unstable_pauseExecution = function() {
    }, A.unstable_requestPaint = function() {
    }, A.unstable_runWithPriority = function(z, q) {
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
      var O = al;
      al = z;
      try {
        return q();
      } finally {
        al = O;
      }
    }, A.unstable_scheduleCallback = function(z, q, O) {
      var w = A.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? w + O : w) : O = w, z) {
        case 1:
          var ul = -1;
          break;
        case 2:
          ul = 250;
          break;
        case 5:
          ul = 1073741823;
          break;
        case 4:
          ul = 1e4;
          break;
        default:
          ul = 5e3;
      }
      return ul = O + ul, z = {
        id: ia++,
        callback: q,
        priorityLevel: z,
        startTime: O,
        expirationTime: ul,
        sortIndex: -1
      }, O > w ? (z.sortIndex = O, _(Ql, z), x(I) === null && z === x(Ql) && (Hl ? (pl(at), at = -1) : Hl = !0, ya(Mu, O - w))) : (z.sortIndex = ul, _(I, z), X || Tl || (X = !0, ha())), z;
    }, A.unstable_shouldYield = U, A.unstable_wrapCallback = function(z) {
      var q = al;
      return function() {
        var O = al;
        al = q;
        try {
          return z.apply(this, arguments);
        } finally {
          al = O;
        }
      };
    };
  }(ei)), ei;
}
var wv;
function Qh() {
  return wv || (wv = 1, ui.exports = Yh()), ui.exports;
}
var Wv;
function jh() {
  if (Wv) return Me;
  Wv = 1;
  var A = Qh(), _ = Dh, x = Uh;
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var ql = Symbol.for("react.element"), Ul = Symbol.for("react.transitional.element"), Yl = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), Ql = Symbol.for("react.strict_mode"), ia = Symbol.for("react.profiler"), bl = Symbol.for("react.provider"), al = Symbol.for("react.consumer"), Tl = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Hl = Symbol.for("react.suspense"), ol = Symbol.for("react.suspense_list"), pl = Symbol.for("react.memo"), sl = Symbol.for("react.lazy"), sa = Symbol.for("react.offscreen"), Mu = Symbol.for("react.memo_cache_sentinel"), va = Symbol.iterator;
  function at(l) {
    return l === null || typeof l != "object" ? null : (l = va && l[va] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ue = Symbol.for("react.client.reference");
  function Ga(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ue ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case I:
        return "Fragment";
      case Yl:
        return "Portal";
      case ia:
        return "Profiler";
      case Ql:
        return "StrictMode";
      case Hl:
        return "Suspense";
      case ol:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tl:
          return (l.displayName || "Context") + ".Provider";
        case al:
          return (l._context.displayName || "Context") + ".Consumer";
        case X:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case pl:
          return t = l.displayName || null, t !== null ? t : Ga(l.type) || "Memo";
        case sl:
          t = l._payload, l = l._init;
          try {
            return Ga(l(t));
          } catch {
          }
      }
    return null;
  }
  var U = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.assign, bt, Uu;
  function da(l) {
    if (bt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        bt = t && t[1] || "", Uu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + bt + l + Uu;
  }
  var ha = !1;
  function ya(l, t) {
    if (!l || ha) return "";
    ha = !0;
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
      ha = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? da(a) : "";
  }
  function z(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return da(l.type);
      case 16:
        return da("Lazy");
      case 13:
        return da("Suspense");
      case 19:
        return da("SuspenseList");
      case 0:
      case 15:
        return l = ya(l.type, !1), l;
      case 11:
        return l = ya(l.type.render, !1), l;
      case 1:
        return l = ya(l.type, !0), l;
      default:
        return "";
    }
  }
  function q(l) {
    try {
      var t = "";
      do
        t += z(l), l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function O(l) {
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
  function w(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ul(l) {
    if (O(l) !== l)
      throw Error(S(188));
  }
  function Za(l) {
    var t = l.alternate;
    if (!t) {
      if (t = O(l), t === null) throw Error(S(188));
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
          if (n === a) return ul(e), l;
          if (n === u) return ul(e), t;
          n = n.sibling;
        }
        throw Error(S(188));
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
          if (!f) throw Error(S(189));
        }
      }
      if (a.alternate !== u) throw Error(S(190));
    }
    if (a.tag !== 3) throw Error(S(188));
    return a.stateNode.current === a ? l : t;
  }
  function ma(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = ma(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var ot = Array.isArray, j = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Vl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Vn = [], xa = -1;
  function ct(l) {
    return { current: l };
  }
  function hl(l) {
    0 > xa || (l.current = Vn[xa], Vn[xa] = null, xa--);
  }
  function W(l, t) {
    xa++, Vn[xa] = l.current, l.current = t;
  }
  var it = ct(null), Ou = ct(null), Gt = ct(null), Oe = ct(null);
  function re(l, t) {
    switch (W(Gt, t), W(Ou, l), W(it, null), l = t.nodeType, l) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? ov(t) : 0;
        break;
      default:
        if (l = l === 8 ? t.parentNode : t, t = l.tagName, l = l.namespaceURI)
          l = ov(l), t = Av(l, t);
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
    hl(it), W(it, t);
  }
  function Ca() {
    hl(it), hl(Ou), hl(Gt);
  }
  function Kn(l) {
    l.memoizedState !== null && W(Oe, l);
    var t = it.current, a = Av(t, l.type);
    t !== a && (W(Ou, l), W(it, a));
  }
  function qe(l) {
    Ou.current === l && (hl(it), hl(Ou)), Oe.current === l && (hl(Oe), oe._currentValue = Vl);
  }
  var Ln = Object.prototype.hasOwnProperty, Jn = A.unstable_scheduleCallback, wn = A.unstable_cancelCallback, td = A.unstable_shouldYield, ad = A.unstable_requestPaint, st = A.unstable_now, ud = A.unstable_getCurrentPriorityLevel, ci = A.unstable_ImmediatePriority, ii = A.unstable_UserBlockingPriority, He = A.unstable_NormalPriority, ed = A.unstable_LowPriority, si = A.unstable_IdlePriority, nd = A.log, fd = A.unstable_setDisableYieldValue, ru = null, jl = null;
  function cd(l) {
    if (jl && typeof jl.onCommitFiberRoot == "function")
      try {
        jl.onCommitFiberRoot(
          ru,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function Zt(l) {
    if (typeof nd == "function" && fd(l), jl && typeof jl.setStrictMode == "function")
      try {
        jl.setStrictMode(ru, l);
      } catch {
      }
  }
  var _l = Math.clz32 ? Math.clz32 : vd, id = Math.log, sd = Math.LN2;
  function vd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (id(l) / sd | 0) | 0;
  }
  var Re = 128, Ne = 4194304;
  function Sa(l) {
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
  function Be(l, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, e = l.suspendedLanes, n = l.pingedLanes, f = l.warmLanes;
    l = l.finishedLanes !== 0;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~e, a !== 0 ? u = Sa(a) : (n &= c, n !== 0 ? u = Sa(n) : l || (f = c & ~f, f !== 0 && (u = Sa(f))))) : (c = a & ~e, c !== 0 ? u = Sa(c) : n !== 0 ? u = Sa(n) : l || (f = a & ~f, f !== 0 && (u = Sa(f)))), u === 0 ? 0 : t !== 0 && t !== u && !(t & e) && (e = u & -u, f = t & -t, e >= f || e === 32 && (f & 4194176) !== 0) ? t : u;
  }
  function qu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function dd(l, t) {
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
  function vi() {
    var l = Re;
    return Re <<= 1, !(Re & 4194176) && (Re = 128), l;
  }
  function di() {
    var l = Ne;
    return Ne <<= 1, !(Ne & 62914560) && (Ne = 4194304), l;
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Hu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function hd(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, v = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - _l(a), o = 1 << g;
      c[g] = 0, i[g] = -1;
      var y = v[g];
      if (y !== null)
        for (v[g] = null, g = 0; g < y.length; g++) {
          var m = y[g];
          m !== null && (m.lane &= -536870913);
        }
      a &= ~o;
    }
    u !== 0 && hi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function hi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - _l(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194218;
  }
  function yi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - _l(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function mi(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Si() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Xv(l.type));
  }
  function yd(l, t) {
    var a = j.p;
    try {
      return j.p = l, t();
    } finally {
      j.p = a;
    }
  }
  var xt = Math.random().toString(36).slice(2), Dl = "__reactFiber$" + xt, Rl = "__reactProps$" + xt, pa = "__reactContainer$" + xt, Fn = "__reactEvents$" + xt, md = "__reactListeners$" + xt, Sd = "__reactHandles$" + xt, gi = "__reactResources$" + xt, Ru = "__reactMarker$" + xt;
  function kn(l) {
    delete l[Dl], delete l[Rl], delete l[Fn], delete l[md], delete l[Sd];
  }
  function ga(l) {
    var t = l[Dl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[pa] || a[Dl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Tv(l); l !== null; ) {
            if (a = l[Dl]) return a;
            l = Tv(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[Dl] || l[pa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Nu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function Ka(l) {
    var t = l[gi];
    return t || (t = l[gi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function yl(l) {
    l[Ru] = !0;
  }
  var bi = /* @__PURE__ */ new Set(), oi = {};
  function ba(l, t) {
    La(l, t), La(l + "Capture", t);
  }
  function La(l, t) {
    for (oi[l] = t, l = 0; l < t.length; l++)
      bi.add(t[l]);
  }
  var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ai = {}, zi = {};
  function bd(l) {
    return Ln.call(zi, l) ? !0 : Ln.call(Ai, l) ? !1 : gd.test(l) ? zi[l] = !0 : (Ai[l] = !0, !1);
  }
  function Ye(l, t, a) {
    if (bd(t))
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
  function Qe(l, t, a) {
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
  function zt(l, t, a, u) {
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
  function Kl(l) {
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
  function Ei(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function od(l) {
    var t = Ei(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function je(l) {
    l._valueTracker || (l._valueTracker = od(l));
  }
  function Ti(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Ei(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function _e(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ad = /[\n"\\]/g;
  function Ll(l) {
    return l.replace(
      Ad,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $n(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Kl(t)) : l.value !== "" + Kl(t) && (l.value = "" + Kl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? In(l, f, Kl(t)) : a != null ? In(l, f, Kl(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Kl(c) : l.removeAttribute("name");
  }
  function Di(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      a = a != null ? "" + Kl(a) : "", t = t != null ? "" + Kl(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function In(l, t, a) {
    t === "number" && _e(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + Kl(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(l, t, a) {
    if (t != null && (t = "" + Kl(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + Kl(a) : "";
  }
  function Ui(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(S(92));
        if (ot(u)) {
          if (1 < u.length) throw Error(S(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = Kl(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var zd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Oi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || zd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function ri(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(S(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Oi(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Oi(l, n, t[n]);
  }
  function Pn(l) {
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
  var Ed = /* @__PURE__ */ new Map([
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
  ]), Td = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xe(l) {
    return Td.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var lf = null;
  function tf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, Fa = null;
  function qi(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Rl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if ($n(
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
              'input[name="' + Ll(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Rl] || null;
                if (!e) throw Error(S(90));
                $n(
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
              u = a[t], u.form === l.form && Ti(u);
          }
          break l;
        case "textarea":
          Mi(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var af = !1;
  function Hi(l, t, a) {
    if (af) return l(t, a);
    af = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (af = !1, (Wa !== null || Fa !== null) && (En(), Wa && (t = Wa, l = Fa, Fa = Wa = null, qi(t), l)))
        for (t = 0; t < l.length; t++) qi(l[t]);
    }
  }
  function Bu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Rl] || null;
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
        S(231, t, typeof a)
      );
    return a;
  }
  var uf = !1;
  if (At)
    try {
      var Yu = {};
      Object.defineProperty(Yu, "passive", {
        get: function() {
          uf = !0;
        }
      }), window.addEventListener("test", Yu, Yu), window.removeEventListener("test", Yu, Yu);
    } catch {
      uf = !1;
    }
  var Ct = null, ef = null, Ge = null;
  function Ri() {
    if (Ge) return Ge;
    var l, t = ef, a = t.length, u, e = "value" in Ct ? Ct.value : Ct.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Ge = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Ze(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function xe() {
    return !0;
  }
  function Ni() {
    return !1;
  }
  function Nl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? xe : Ni, this.isPropagationStopped = Ni, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xe);
      },
      persist: function() {
      },
      isPersistent: xe
    }), t;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Nl(oa), Qu = C({}, oa, { view: 0, detail: 0 }), Dd = Nl(Qu), nf, ff, ju, pe = C({}, Qu, {
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
    getModifierState: sf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ju && (ju && l.type === "mousemove" ? (nf = l.screenX - ju.screenX, ff = l.screenY - ju.screenY) : ff = nf = 0, ju = l), nf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ff;
    }
  }), Bi = Nl(pe), Md = C({}, pe, { dataTransfer: 0 }), Ud = Nl(Md), Od = C({}, Qu, { relatedTarget: 0 }), cf = Nl(Od), rd = C({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qd = Nl(rd), Hd = C({}, oa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Rd = Nl(Hd), Nd = C({}, oa, { data: 0 }), Yi = Nl(Nd), Bd = {
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
  }, Yd = {
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
  }, Qd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Qd[l]) ? !!t[l] : !1;
  }
  function sf() {
    return jd;
  }
  var _d = C({}, Qu, {
    key: function(l) {
      if (l.key) {
        var t = Bd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ze(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Yd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sf,
    charCode: function(l) {
      return l.type === "keypress" ? Ze(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ze(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Xd = Nl(_d), Gd = C({}, pe, {
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
  }), Qi = Nl(Gd), Zd = C({}, Qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sf
  }), xd = Nl(Zd), Cd = C({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), pd = Nl(Cd), Vd = C({}, pe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kd = Nl(Vd), Ld = C({}, oa, {
    newState: 0,
    oldState: 0
  }), Jd = Nl(Ld), wd = [9, 13, 27, 32], vf = At && "CompositionEvent" in window, _u = null;
  At && "documentMode" in document && (_u = document.documentMode);
  var Wd = At && "TextEvent" in window && !_u, ji = At && (!vf || _u && 8 < _u && 11 >= _u), _i = " ", Xi = !1;
  function Gi(l, t) {
    switch (l) {
      case "keyup":
        return wd.indexOf(t.keyCode) !== -1;
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
  function Zi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ka = !1;
  function Fd(l, t) {
    switch (l) {
      case "compositionend":
        return Zi(t);
      case "keypress":
        return t.which !== 32 ? null : (Xi = !0, _i);
      case "textInput":
        return l = t.data, l === _i && Xi ? null : l;
      default:
        return null;
    }
  }
  function kd(l, t) {
    if (ka)
      return l === "compositionend" || !vf && Gi(l, t) ? (l = Ri(), Ge = ef = Ct = null, ka = !1, l) : null;
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
        return ji && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $d = {
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
  function xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!$d[l.type] : t === "textarea";
  }
  function Ci(l, t, a, u) {
    Wa ? Fa ? Fa.push(u) : Fa = [u] : Wa = u, t = On(t, "onChange"), 0 < t.length && (a = new Ce(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Xu = null, Gu = null;
  function Id(l) {
    yv(l, 0);
  }
  function Ve(l) {
    var t = Nu(l);
    if (Ti(t)) return l;
  }
  function pi(l, t) {
    if (l === "change") return t;
  }
  var Vi = !1;
  if (At) {
    var df;
    if (At) {
      var hf = "oninput" in document;
      if (!hf) {
        var Ki = document.createElement("div");
        Ki.setAttribute("oninput", "return;"), hf = typeof Ki.oninput == "function";
      }
      df = hf;
    } else df = !1;
    Vi = df && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Xu && (Xu.detachEvent("onpropertychange", Ji), Gu = Xu = null);
  }
  function Ji(l) {
    if (l.propertyName === "value" && Ve(Gu)) {
      var t = [];
      Ci(
        t,
        Gu,
        l,
        tf(l)
      ), Hi(Id, t);
    }
  }
  function Pd(l, t, a) {
    l === "focusin" ? (Li(), Xu = t, Gu = a, Xu.attachEvent("onpropertychange", Ji)) : l === "focusout" && Li();
  }
  function l1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ve(Gu);
  }
  function t1(l, t) {
    if (l === "click") return Ve(t);
  }
  function a1(l, t) {
    if (l === "input" || l === "change")
      return Ve(t);
  }
  function u1(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Xl = typeof Object.is == "function" ? Object.is : u1;
  function Zu(l, t) {
    if (Xl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Ln.call(t, e) || !Xl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function wi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Wi(l, t) {
    var a = wi(l);
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
      a = wi(a);
    }
  }
  function Fi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ki(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = _e(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = _e(l.document);
    }
    return t;
  }
  function yf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  function e1(l, t) {
    var a = ki(t);
    t = l.focusedElem;
    var u = l.selectionRange;
    if (a !== t && t && t.ownerDocument && Fi(t.ownerDocument.documentElement, t)) {
      if (u !== null && yf(t)) {
        if (l = u.start, a = u.end, a === void 0 && (a = l), "selectionStart" in t)
          t.selectionStart = l, t.selectionEnd = Math.min(
            a,
            t.value.length
          );
        else if (a = (l = t.ownerDocument || document) && l.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = t.textContent.length, n = Math.min(u.start, e);
          u = u.end === void 0 ? n : Math.min(u.end, e), !a.extend && n > u && (e = u, u = n, n = e), e = Wi(t, n);
          var f = Wi(
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
  var n1 = At && "documentMode" in document && 11 >= document.documentMode, $a = null, mf = null, xu = null, Sf = !1;
  function $i(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sf || $a == null || $a !== _e(u) || (u = $a, "selectionStart" in u && yf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), xu && Zu(xu, u) || (xu = u, u = On(mf, "onSelect"), 0 < u.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = $a)));
  }
  function Aa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: Aa("Animation", "AnimationEnd"),
    animationiteration: Aa("Animation", "AnimationIteration"),
    animationstart: Aa("Animation", "AnimationStart"),
    transitionrun: Aa("Transition", "TransitionRun"),
    transitionstart: Aa("Transition", "TransitionStart"),
    transitioncancel: Aa("Transition", "TransitionCancel"),
    transitionend: Aa("Transition", "TransitionEnd")
  }, gf = {}, Ii = {};
  At && (Ii = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function za(l) {
    if (gf[l]) return gf[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ii)
        return gf[l] = t[a];
    return l;
  }
  var Pi = za("animationend"), ls = za("animationiteration"), ts = za("animationstart"), f1 = za("transitionrun"), c1 = za("transitionstart"), i1 = za("transitioncancel"), as = za("transitionend"), us = /* @__PURE__ */ new Map(), es = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function ut(l, t) {
    us.set(l, t), ba(t, [l]);
  }
  var Jl = [], Pa = 0, bf = 0;
  function Ke() {
    for (var l = Pa, t = bf = Pa = 0; t < l; ) {
      var a = Jl[t];
      Jl[t++] = null;
      var u = Jl[t];
      Jl[t++] = null;
      var e = Jl[t];
      Jl[t++] = null;
      var n = Jl[t];
      if (Jl[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && ns(a, e, n);
    }
  }
  function Le(l, t, a, u) {
    Jl[Pa++] = l, Jl[Pa++] = t, Jl[Pa++] = a, Jl[Pa++] = u, bf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function of(l, t, a, u) {
    return Le(l, t, a, u), Je(l);
  }
  function pt(l, t) {
    return Le(l, null, null, t), Je(l);
  }
  function ns(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    e && t !== null && l.tag === 3 && (n = l.stateNode, e = 31 - _l(a), n = n.hiddenUpdates, l = n[e], l === null ? n[e] = [t] : l.push(t), t.lane = a | 536870912);
  }
  function Je(l) {
    if (50 < de)
      throw de = 0, Mc = null, Error(S(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {}, fs = /* @__PURE__ */ new WeakMap();
  function wl(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = fs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: q(t)
      }, fs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: q(t)
    };
  }
  var tu = [], au = 0, we = null, We = 0, Wl = [], Fl = 0, Ea = null, Et = 1, Tt = "";
  function Ta(l, t) {
    tu[au++] = We, tu[au++] = we, we = l, We = t;
  }
  function cs(l, t, a) {
    Wl[Fl++] = Et, Wl[Fl++] = Tt, Wl[Fl++] = Ea, Ea = l;
    var u = Et;
    l = Tt;
    var e = 32 - _l(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - _l(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Et = 1 << 32 - _l(t) + e | a << e | u, Tt = n + l;
    } else
      Et = 1 << n | a << e | u, Tt = l;
  }
  function Af(l) {
    l.return !== null && (Ta(l, 1), cs(l, 1, 0));
  }
  function zf(l) {
    for (; l === we; )
      we = tu[--au], tu[au] = null, We = tu[--au], tu[au] = null;
    for (; l === Ea; )
      Ea = Wl[--Fl], Wl[Fl] = null, Tt = Wl[--Fl], Wl[Fl] = null, Et = Wl[--Fl], Wl[Fl] = null;
  }
  var Ol = null, Al = null, G = !1, et = null, vt = !1, Ef = Error(S(519));
  function Da(l) {
    var t = Error(S(418, ""));
    throw Vu(wl(t, l)), Ef;
  }
  function is(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Dl] = l, t[Rl] = u, a) {
      case "dialog":
        Y("cancel", t), Y("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Y("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++)
          Y(ye[a], t);
        break;
      case "source":
        Y("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Y("error", t), Y("load", t);
        break;
      case "details":
        Y("toggle", t);
        break;
      case "input":
        Y("invalid", t), Di(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), je(t);
        break;
      case "select":
        Y("invalid", t);
        break;
      case "textarea":
        Y("invalid", t), Ui(t, u.value, u.defaultValue, u.children), je(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || bv(t.textContent, a) ? (u.popover != null && (Y("beforetoggle", t), Y("toggle", t)), u.onScroll != null && Y("scroll", t), u.onScrollEnd != null && Y("scrollend", t), u.onClick != null && (t.onclick = rn), t = !0) : t = !1, t || Da(l);
  }
  function ss(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
        case 3:
        case 27:
          vt = !0;
          return;
        case 5:
        case 13:
          vt = !1;
          return;
        default:
          Ol = Ol.return;
      }
  }
  function Cu(l) {
    if (l !== Ol) return !1;
    if (!G) return ss(l), G = !0, !1;
    var t = !1, a;
    if ((a = l.tag !== 3 && l.tag !== 27) && ((a = l.tag === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Cc(l.type, l.memoizedProps)), a = !a), a && (t = !0), t && Al && Da(l), ss(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (t === 0) {
                Al = ft(l.nextSibling);
                break l;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          l = l.nextSibling;
        }
        Al = null;
      }
    } else
      Al = Ol ? ft(l.stateNode.nextSibling) : null;
    return !0;
  }
  function pu() {
    Al = Ol = null, G = !1;
  }
  function Vu(l) {
    et === null ? et = [l] : et.push(l);
  }
  var Ku = Error(S(460)), vs = Error(S(474)), Tf = { then: function() {
  } };
  function ds(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Fe() {
  }
  function hs(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Fe, Fe), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, l === Ku ? Error(S(483)) : l;
      default:
        if (typeof t.status == "string") t.then(Fe, Fe);
        else {
          if (l = L, l !== null && 100 < l.shellSuspendCounter)
            throw Error(S(482));
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
            throw l = t.reason, l === Ku ? Error(S(483)) : l;
        }
        throw Lu = t, Ku;
    }
  }
  var Lu = null;
  function ys() {
    if (Lu === null) throw Error(S(459));
    var l = Lu;
    return Lu = null, l;
  }
  var uu = null, Ju = 0;
  function ke(l) {
    var t = Ju;
    return Ju += 1, uu === null && (uu = []), hs(uu, l, t);
  }
  function wu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === ql ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(
      S(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function ms(l) {
    var t = l._init;
    return t(l._payload);
  }
  function Ss(l) {
    function t(d, s) {
      if (l) {
        var h = d.deletions;
        h === null ? (d.deletions = [s], d.flags |= 16) : h.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function u(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function e(d, s) {
      return d = la(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, h) {
      return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < s ? (d.flags |= 33554434, s) : h) : (d.flags |= 33554434, s)) : (d.flags |= 1048576, s);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 33554434), d;
    }
    function c(d, s, h, b) {
      return s === null || s.tag !== 6 ? (s = gc(h, d.mode, b), s.return = d, s) : (s = e(s, h), s.return = d, s);
    }
    function i(d, s, h, b) {
      var E = h.type;
      return E === I ? g(
        d,
        s,
        h.props.children,
        b,
        h.key
      ) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === sl && ms(E) === s.type) ? (s = e(s, h.props), wu(s, h), s.return = d, s) : (s = gn(
        h.type,
        h.key,
        h.props,
        null,
        d.mode,
        b
      ), wu(s, h), s.return = d, s);
    }
    function v(d, s, h, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = bc(h, d.mode, b), s.return = d, s) : (s = e(s, h.children || []), s.return = d, s);
    }
    function g(d, s, h, b, E) {
      return s === null || s.tag !== 7 ? (s = Ya(
        h,
        d.mode,
        b,
        E
      ), s.return = d, s) : (s = e(s, h), s.return = d, s);
    }
    function o(d, s, h) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = gc(
          "" + s,
          d.mode,
          h
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Ul:
            return h = gn(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              h
            ), wu(h, s), h.return = d, h;
          case Yl:
            return s = bc(
              s,
              d.mode,
              h
            ), s.return = d, s;
          case sl:
            var b = s._init;
            return s = b(s._payload), o(d, s, h);
        }
        if (ot(s) || at(s))
          return s = Ya(
            s,
            d.mode,
            h,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return o(d, ke(s), h);
        if (s.$$typeof === Tl)
          return o(
            d,
            yn(d, s),
            h
          );
        $e(d, s);
      }
      return null;
    }
    function y(d, s, h, b) {
      var E = s !== null ? s.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return E !== null ? null : c(d, s, "" + h, b);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Ul:
            return h.key === E ? i(d, s, h, b) : null;
          case Yl:
            return h.key === E ? v(d, s, h, b) : null;
          case sl:
            return E = h._init, h = E(h._payload), y(d, s, h, b);
        }
        if (ot(h) || at(h))
          return E !== null ? null : g(d, s, h, b, null);
        if (typeof h.then == "function")
          return y(
            d,
            s,
            ke(h),
            b
          );
        if (h.$$typeof === Tl)
          return y(
            d,
            s,
            yn(d, h),
            b
          );
        $e(d, h);
      }
      return null;
    }
    function m(d, s, h, b, E) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(h) || null, c(s, d, "" + b, E);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ul:
            return d = d.get(
              b.key === null ? h : b.key
            ) || null, i(s, d, b, E);
          case Yl:
            return d = d.get(
              b.key === null ? h : b.key
            ) || null, v(s, d, b, E);
          case sl:
            var R = b._init;
            return b = R(b._payload), m(
              d,
              s,
              h,
              b,
              E
            );
        }
        if (ot(b) || at(b))
          return d = d.get(h) || null, g(s, d, b, E, null);
        if (typeof b.then == "function")
          return m(
            d,
            s,
            h,
            ke(b),
            E
          );
        if (b.$$typeof === Tl)
          return m(
            d,
            s,
            h,
            yn(s, b),
            E
          );
        $e(s, b);
      }
      return null;
    }
    function T(d, s, h, b) {
      for (var E = null, R = null, D = s, M = s = 0, gl = null; D !== null && M < h.length; M++) {
        D.index > M ? (gl = D, D = null) : gl = D.sibling;
        var Z = y(
          d,
          D,
          h[M],
          b
        );
        if (Z === null) {
          D === null && (D = gl);
          break;
        }
        l && D && Z.alternate === null && t(d, D), s = n(Z, s, M), R === null ? E = Z : R.sibling = Z, R = Z, D = gl;
      }
      if (M === h.length)
        return a(d, D), G && Ta(d, M), E;
      if (D === null) {
        for (; M < h.length; M++)
          D = o(d, h[M], b), D !== null && (s = n(
            D,
            s,
            M
          ), R === null ? E = D : R.sibling = D, R = D);
        return G && Ta(d, M), E;
      }
      for (D = u(D); M < h.length; M++)
        gl = m(
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
      return l && D.forEach(function(ca) {
        return t(d, ca);
      }), G && Ta(d, M), E;
    }
    function r(d, s, h, b) {
      if (h == null) throw Error(S(151));
      for (var E = null, R = null, D = s, M = s = 0, gl = null, Z = h.next(); D !== null && !Z.done; M++, Z = h.next()) {
        D.index > M ? (gl = D, D = null) : gl = D.sibling;
        var ca = y(d, D, Z.value, b);
        if (ca === null) {
          D === null && (D = gl);
          break;
        }
        l && D && ca.alternate === null && t(d, D), s = n(ca, s, M), R === null ? E = ca : R.sibling = ca, R = ca, D = gl;
      }
      if (Z.done)
        return a(d, D), G && Ta(d, M), E;
      if (D === null) {
        for (; !Z.done; M++, Z = h.next())
          Z = o(d, Z.value, b), Z !== null && (s = n(Z, s, M), R === null ? E = Z : R.sibling = Z, R = Z);
        return G && Ta(d, M), E;
      }
      for (D = u(D); !Z.done; M++, Z = h.next())
        Z = m(D, d, M, Z.value, b), Z !== null && (l && Z.alternate !== null && D.delete(Z.key === null ? M : Z.key), s = n(Z, s, M), R === null ? E = Z : R.sibling = Z, R = Z);
      return l && D.forEach(function(Th) {
        return t(d, Th);
      }), G && Ta(d, M), E;
    }
    function tl(d, s, h, b) {
      if (typeof h == "object" && h !== null && h.type === I && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Ul:
            l: {
              for (var E = h.key; s !== null; ) {
                if (s.key === E) {
                  if (E = h.type, E === I) {
                    if (s.tag === 7) {
                      a(
                        d,
                        s.sibling
                      ), b = e(
                        s,
                        h.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === sl && ms(E) === s.type) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, h.props), wu(b, h), b.return = d, d = b;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              h.type === I ? (b = Ya(
                h.props.children,
                d.mode,
                b,
                h.key
              ), b.return = d, d = b) : (b = gn(
                h.type,
                h.key,
                h.props,
                null,
                d.mode,
                b
              ), wu(b, h), b.return = d, d = b);
            }
            return f(d);
          case Yl:
            l: {
              for (E = h.key; s !== null; ) {
                if (s.key === E)
                  if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, h.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              b = bc(h, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case sl:
            return E = h._init, h = E(h._payload), tl(
              d,
              s,
              h,
              b
            );
        }
        if (ot(h))
          return T(
            d,
            s,
            h,
            b
          );
        if (at(h)) {
          if (E = at(h), typeof E != "function") throw Error(S(150));
          return h = E.call(h), r(
            d,
            s,
            h,
            b
          );
        }
        if (typeof h.then == "function")
          return tl(
            d,
            s,
            ke(h),
            b
          );
        if (h.$$typeof === Tl)
          return tl(
            d,
            s,
            yn(d, h),
            b
          );
        $e(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (a(d, s.sibling), b = e(s, h), b.return = d, d = b) : (a(d, s), b = gc(h, d.mode, b), b.return = d, d = b), f(d)) : a(d, s);
    }
    return function(d, s, h, b) {
      try {
        Ju = 0;
        var E = tl(
          d,
          s,
          h,
          b
        );
        return uu = null, E;
      } catch (D) {
        if (D === Ku) throw D;
        var R = Pl(29, D, null, d.mode);
        return R.lanes = b, R.return = d, R;
      } finally {
      }
    };
  }
  var Ma = Ss(!0), gs = Ss(!1), eu = ct(null), Ie = ct(0);
  function bs(l, t) {
    l = Yt, W(Ie, l), W(eu, t), Yt = l | t.baseLanes;
  }
  function Df() {
    W(Ie, Yt), W(eu, eu.current);
  }
  function Mf() {
    Yt = Ie.current, hl(eu), hl(Ie);
  }
  var kl = ct(null), dt = null;
  function Vt(l) {
    var t = l.alternate;
    W(vl, vl.current & 1), W(kl, l), dt === null && (t === null || eu.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function os(l) {
    if (l.tag === 22) {
      if (W(vl, vl.current), W(kl, l), dt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (dt = l);
      }
    } else Kt();
  }
  function Kt() {
    W(vl, vl.current), W(kl, kl.current);
  }
  function Dt(l) {
    hl(kl), dt === l && (dt = null), hl(vl);
  }
  var vl = ct(0);
  function Pe(l) {
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
  var s1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, v1 = A.unstable_scheduleCallback, d1 = A.unstable_NormalPriority, dl = {
    $$typeof: Tl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Uf() {
    return {
      controller: new s1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wu(l) {
    l.refCount--, l.refCount === 0 && v1(d1, function() {
      l.controller.abort();
    });
  }
  var Fu = null, Of = 0, nu = 0, fu = null;
  function h1(l, t) {
    if (Fu === null) {
      var a = Fu = [];
      Of = 0, nu = Bc(), fu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Of++, t.then(As, As), t;
  }
  function As() {
    if (--Of === 0 && Fu !== null) {
      fu !== null && (fu.status = "fulfilled");
      var l = Fu;
      Fu = null, nu = 0, fu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function y1(l, t) {
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
  var zs = U.S;
  U.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && h1(l, t), zs !== null && zs(l, t);
  };
  var Ua = ct(null);
  function rf() {
    var l = Ua.current;
    return l !== null ? l : L.pooledCache;
  }
  function ln(l, t) {
    t === null ? W(Ua, Ua.current) : W(Ua, t.pool);
  }
  function Es() {
    var l = rf();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Lt = 0, H = null, p = null, fl = null, tn = !1, cu = !1, Oa = !1, an = 0, ku = 0, iu = null, m1 = 0;
  function el() {
    throw Error(S(321));
  }
  function qf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Xl(l[a], t[a])) return !1;
    return !0;
  }
  function Hf(l, t, a, u, e, n) {
    return Lt = n, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = l === null || l.memoizedState === null ? ra : Jt, Oa = !1, n = a(u, e), Oa = !1, cu && (n = Ds(
      t,
      a,
      u,
      e
    )), Ts(l), n;
  }
  function Ts(l) {
    U.H = ht;
    var t = p !== null && p.next !== null;
    if (Lt = 0, fl = p = H = null, tn = !1, ku = 0, iu = null, t) throw Error(S(300));
    l === null || ml || (l = l.dependencies, l !== null && hn(l) && (ml = !0));
  }
  function Ds(l, t, a, u) {
    H = l;
    var e = 0;
    do {
      if (cu && (iu = null), ku = 0, cu = !1, 25 <= e) throw Error(S(301));
      if (e += 1, fl = p = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = qa, n = t(a, u);
    } while (cu);
    return n;
  }
  function S1() {
    var l = U.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? $u(t) : t, l = l.useState()[0], (p !== null ? p.memoizedState : null) !== l && (H.flags |= 1024), t;
  }
  function Rf() {
    var l = an !== 0;
    return an = 0, l;
  }
  function Nf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Bf(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      tn = !1;
    }
    Lt = 0, fl = p = H = null, cu = !1, ku = an = 0, iu = null;
  }
  function Bl() {
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
    if (p === null) {
      var l = H.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = p.next;
    var t = fl === null ? H.memoizedState : fl.next;
    if (t !== null)
      fl = t, p = l;
    else {
      if (l === null)
        throw H.alternate === null ? Error(S(467)) : Error(S(310));
      p = l, l = {
        memoizedState: p.memoizedState,
        baseState: p.baseState,
        baseQueue: p.baseQueue,
        queue: p.queue,
        next: null
      }, fl === null ? H.memoizedState = fl = l : fl = fl.next = l;
    }
    return fl;
  }
  var un;
  un = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function $u(l) {
    var t = ku;
    return ku += 1, iu === null && (iu = []), l = hs(iu, l, t), t = H, (fl === null ? t.memoizedState : fl.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? ra : Jt), l;
  }
  function en(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $u(l);
      if (l.$$typeof === Tl) return Ml(l);
    }
    throw Error(S(438, String(l)));
  }
  function Yf(l) {
    var t = null, a = H.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = H.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = un(), H.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = Mu;
    return t.index++, a;
  }
  function Mt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = cl();
    return Qf(t, p, l);
  }
  function Qf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(S(311));
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
      var c = f = null, i = null, v = t, g = !1;
      do {
        var o = v.lane & -536870913;
        if (o !== v.lane ? (Q & o) === o : (Lt & o) === o) {
          var y = v.revertLane;
          if (y === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), o === nu && (g = !0);
          else if ((Lt & y) === y) {
            v = v.next, y === nu && (g = !0);
            continue;
          } else
            o = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, i === null ? (c = i = o, f = n) : i = i.next = o, H.lanes |= y, ta |= y;
          o = v.action, Oa && a(n, o), n = v.hasEagerState ? v.eagerState : a(n, o);
        } else
          y = {
            lane: o,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, i === null ? (c = i = y, f = n) : i = i.next = y, H.lanes |= o, ta |= o;
        v = v.next;
      } while (v !== null && v !== t);
      if (i === null ? f = n : i.next = c, !Xl(n, l.memoizedState) && (ml = !0, g && (a = fu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function jf(l) {
    var t = cl(), a = t.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Xl(n, t.memoizedState) || (ml = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Ms(l, t, a) {
    var u = H, e = cl(), n = G;
    if (n) {
      if (a === void 0) throw Error(S(407));
      a = a();
    } else a = t();
    var f = !Xl(
      (p || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, ml = !0), e = e.queue, Gf(rs.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || fl !== null && fl.memoizedState.tag & 1) {
      if (u.flags |= 2048, su(
        9,
        Os.bind(
          null,
          u,
          e,
          a,
          t
        ),
        { destroy: void 0 },
        null
      ), L === null) throw Error(S(349));
      n || Lt & 60 || Us(u, t, a);
    }
    return a;
  }
  function Us(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = H.updateQueue, t === null ? (t = un(), H.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Os(l, t, a, u) {
    t.value = a, t.getSnapshot = u, qs(t) && Hs(l);
  }
  function rs(l, t, a) {
    return a(function() {
      qs(t) && Hs(l);
    });
  }
  function qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Xl(l, a);
    } catch {
      return !0;
    }
  }
  function Hs(l) {
    var t = pt(l, 2);
    t !== null && rl(t, l, 2);
  }
  function _f(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Oa) {
        Zt(!0);
        try {
          a();
        } finally {
          Zt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mt,
      lastRenderedState: l
    }, t;
  }
  function Rs(l, t, a, u) {
    return l.baseState = a, Qf(
      l,
      p,
      typeof u == "function" ? u : Mt
    );
  }
  function g1(l, t, a, u, e) {
    if (sn(l)) throw Error(S(485));
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
      U.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Ns(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Ns(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = U.T, f = {};
      U.T = f;
      try {
        var c = a(e, u), i = U.S;
        i !== null && i(f, c), Bs(l, t, c);
      } catch (v) {
        Xf(l, t, v);
      } finally {
        U.T = n;
      }
    } else
      try {
        n = a(e, u), Bs(l, t, n);
      } catch (v) {
        Xf(l, t, v);
      }
  }
  function Bs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Ys(l, t, u);
      },
      function(u) {
        return Xf(l, t, u);
      }
    ) : Ys(l, t, a);
  }
  function Ys(l, t, a) {
    t.status = "fulfilled", t.value = a, Qs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Ns(l, a)));
  }
  function Xf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Qs(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Qs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function js(l, t) {
    return t;
  }
  function _s(l, t) {
    if (G) {
      var a = L.formState;
      if (a !== null) {
        l: {
          var u = H;
          if (G) {
            if (Al) {
              t: {
                for (var e = Al, n = vt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ft(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Al = ft(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Da(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Bl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: t
    }, a.queue = u, a = l0.bind(
      null,
      H,
      u
    ), u.dispatch = a, u = _f(!1), n = Vf.bind(
      null,
      H,
      !1,
      u.queue
    ), u = Bl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = g1.bind(
      null,
      H,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Xs(l) {
    var t = cl();
    return Gs(t, p, l);
  }
  function Gs(l, t, a) {
    t = Qf(
      l,
      t,
      js
    )[0], l = nn(Mt)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? $u(t) : t;
    var u = cl(), e = u.queue, n = e.dispatch;
    return a !== u.memoizedState && (H.flags |= 2048, su(
      9,
      b1.bind(null, e, a),
      { destroy: void 0 },
      null
    )), [t, n, l];
  }
  function b1(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = cl(), a = p;
    if (a !== null)
      return Gs(t, a, l);
    cl(), t = t.memoizedState, a = cl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function su(l, t, a, u) {
    return l = { tag: l, create: t, inst: a, deps: u, next: null }, t = H.updateQueue, t === null && (t = un(), H.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function xs() {
    return cl().memoizedState;
  }
  function fn(l, t, a, u) {
    var e = Bl();
    H.flags |= l, e.memoizedState = su(
      1 | t,
      a,
      { destroy: void 0 },
      u === void 0 ? null : u
    );
  }
  function cn(l, t, a, u) {
    var e = cl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    p !== null && u !== null && qf(u, p.memoizedState.deps) ? e.memoizedState = su(t, a, n, u) : (H.flags |= l, e.memoizedState = su(1 | t, a, n, u));
  }
  function Cs(l, t) {
    fn(8390656, 8, l, t);
  }
  function Gf(l, t) {
    cn(2048, 8, l, t);
  }
  function ps(l, t) {
    return cn(4, 2, l, t);
  }
  function Vs(l, t) {
    return cn(4, 4, l, t);
  }
  function Ks(l, t) {
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
  function Ls(l, t, a) {
    a = a != null ? a.concat([l]) : null, cn(4, 4, Ks.bind(null, t, l), a);
  }
  function Zf() {
  }
  function Js(l, t) {
    var a = cl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && qf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function ws(l, t) {
    var a = cl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && qf(t, u[1]))
      return u[0];
    if (u = l(), Oa) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function xf(l, t, a) {
    return a === void 0 || Lt & 1073741824 ? l.memoizedState = t : (l.memoizedState = a, l = F0(), H.lanes |= l, ta |= l, a);
  }
  function Ws(l, t, a, u) {
    return Xl(a, t) ? a : eu.current !== null ? (l = xf(l, a, u), Xl(l, t) || (ml = !0), l) : Lt & 42 ? (l = F0(), H.lanes |= l, ta |= l, t) : (ml = !0, l.memoizedState = a);
  }
  function Fs(l, t, a, u, e) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var f = U.T, c = {};
    U.T = c, Vf(l, !1, t, a);
    try {
      var i = e(), v = U.S;
      if (v !== null && v(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = y1(
          i,
          u
        );
        Iu(
          l,
          t,
          g,
          Cl(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          Cl(l)
        );
    } catch (o) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: o },
        Cl()
      );
    } finally {
      j.p = n, U.T = f;
    }
  }
  function o1() {
  }
  function Cf(l, t, a, u) {
    if (l.tag !== 5) throw Error(S(476));
    var e = ks(l).queue;
    Fs(
      l,
      e,
      t,
      Vl,
      a === null ? o1 : function() {
        return $s(l), a(u);
      }
    );
  }
  function ks(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Vl,
      baseState: Vl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mt,
        lastRenderedState: Vl
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
        lastRenderedReducer: Mt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function $s(l) {
    var t = ks(l).next.queue;
    Iu(l, t, {}, Cl());
  }
  function pf() {
    return Ml(oe);
  }
  function Is() {
    return cl().memoizedState;
  }
  function Ps() {
    return cl().memoizedState;
  }
  function A1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Cl();
          l = Ft(a);
          var u = kt(t, l, a);
          u !== null && (rl(u, t, a), te(u, t, a)), t = { cache: Uf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function z1(l, t, a) {
    var u = Cl();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, sn(l) ? t0(t, a) : (a = of(l, t, a, u), a !== null && (rl(a, l, u), a0(a, t, u)));
  }
  function l0(l, t, a) {
    var u = Cl();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (sn(l)) t0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = c, Xl(c, f))
            return Le(l, t, e, 0), L === null && Ke(), !1;
        } catch {
        } finally {
        }
      if (a = of(l, t, e, u), a !== null)
        return rl(a, l, u), a0(a, t, u), !0;
    }
    return !1;
  }
  function Vf(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bc(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, sn(l)) {
      if (t) throw Error(S(479));
    } else
      t = of(
        l,
        a,
        u,
        2
      ), t !== null && rl(t, l, 2);
  }
  function sn(l) {
    var t = l.alternate;
    return l === H || t !== null && t === H;
  }
  function t0(l, t) {
    cu = tn = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function a0(l, t, a) {
    if (a & 4194176) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  var ht = {
    readContext: Ml,
    use: en,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el
  };
  ht.useCacheRefresh = el, ht.useMemoCache = el, ht.useHostTransitionStatus = el, ht.useFormState = el, ht.useActionState = el, ht.useOptimistic = el;
  var ra = {
    readContext: Ml,
    use: en,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ml,
    useEffect: Cs,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, fn(
        4194308,
        4,
        Ks.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return fn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      fn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Oa) {
        Zt(!0);
        try {
          l();
        } finally {
          Zt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Bl();
      if (a !== void 0) {
        var e = a(t);
        if (Oa) {
          Zt(!0);
          try {
            a(t);
          } finally {
            Zt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = z1.bind(
        null,
        H,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = _f(l);
      var t = l.queue, a = l0.bind(null, H, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Zf,
    useDeferredValue: function(l, t) {
      var a = Bl();
      return xf(a, l, t);
    },
    useTransition: function() {
      var l = _f(!1);
      return l = Fs.bind(
        null,
        H,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = H, e = Bl();
      if (G) {
        if (a === void 0)
          throw Error(S(407));
        a = a();
      } else {
        if (a = t(), L === null) throw Error(S(349));
        Q & 60 || Us(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Cs(rs.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, su(
        9,
        Os.bind(
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
      var l = Bl(), t = L.identifierPrefix;
      if (G) {
        var a = Tt, u = Et;
        a = (u & ~(1 << 32 - _l(u) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = an++, 0 < a && (t += "H" + a.toString(32)), t += ":";
      } else
        a = m1++, t = ":" + t + "r" + a.toString(32) + ":";
      return l.memoizedState = t;
    },
    useCacheRefresh: function() {
      return Bl().memoizedState = A1.bind(
        null,
        H
      );
    }
  };
  ra.useMemoCache = Yf, ra.useHostTransitionStatus = pf, ra.useFormState = _s, ra.useActionState = _s, ra.useOptimistic = function(l) {
    var t = Bl();
    t.memoizedState = t.baseState = l;
    var a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return t.queue = a, t = Vf.bind(
      null,
      H,
      !0,
      a
    ), a.dispatch = t, [l, t];
  };
  var Jt = {
    readContext: Ml,
    use: en,
    useCallback: Js,
    useContext: Ml,
    useEffect: Gf,
    useImperativeHandle: Ls,
    useInsertionEffect: ps,
    useLayoutEffect: Vs,
    useMemo: ws,
    useReducer: nn,
    useRef: xs,
    useState: function() {
      return nn(Mt);
    },
    useDebugValue: Zf,
    useDeferredValue: function(l, t) {
      var a = cl();
      return Ws(
        a,
        p.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = nn(Mt)[0], t = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : $u(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: Is
  };
  Jt.useCacheRefresh = Ps, Jt.useMemoCache = Yf, Jt.useHostTransitionStatus = pf, Jt.useFormState = Xs, Jt.useActionState = Xs, Jt.useOptimistic = function(l, t) {
    var a = cl();
    return Rs(a, p, l, t);
  };
  var qa = {
    readContext: Ml,
    use: en,
    useCallback: Js,
    useContext: Ml,
    useEffect: Gf,
    useImperativeHandle: Ls,
    useInsertionEffect: ps,
    useLayoutEffect: Vs,
    useMemo: ws,
    useReducer: jf,
    useRef: xs,
    useState: function() {
      return jf(Mt);
    },
    useDebugValue: Zf,
    useDeferredValue: function(l, t) {
      var a = cl();
      return p === null ? xf(a, l, t) : Ws(
        a,
        p.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = jf(Mt)[0], t = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : $u(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: Is
  };
  qa.useCacheRefresh = Ps, qa.useMemoCache = Yf, qa.useHostTransitionStatus = pf, qa.useFormState = Zs, qa.useActionState = Zs, qa.useOptimistic = function(l, t) {
    var a = cl();
    return p !== null ? Rs(a, p, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
  };
  function Kf(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Lf = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? O(l) === l : !1;
    },
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = Cl(), e = Ft(u);
      e.payload = t, a != null && (e.callback = a), t = kt(l, e, u), t !== null && (rl(t, l, u), te(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = Cl(), e = Ft(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = kt(l, e, u), t !== null && (rl(t, l, u), te(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = Cl(), u = Ft(a);
      u.tag = 2, t != null && (u.callback = t), t = kt(l, u, a), t !== null && (rl(t, l, a), te(t, l, a));
    }
  };
  function u0(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Zu(a, u) || !Zu(e, n) : !0;
  }
  function e0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && Lf.enqueueReplaceState(t, t.state, null);
  }
  function Ha(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = C({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var vn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof ai == "object" && typeof ai.emit == "function") {
      ai.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function n0(l) {
    vn(l);
  }
  function f0(l) {
    console.error(l);
  }
  function c0(l) {
    vn(l);
  }
  function dn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function i0(l, t, a) {
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
  function Jf(l, t, a) {
    return a = Ft(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      dn(l, t);
    }, a;
  }
  function s0(l) {
    return l = Ft(l), l.tag = 3, l;
  }
  function v0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        i0(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      i0(t, a, u), typeof e != "function" && (aa === null ? aa = /* @__PURE__ */ new Set([this]) : aa.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function E1(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && le(
        t,
        a,
        e,
        !0
      ), a = kl.current, a !== null) {
        switch (a.tag) {
          case 13:
            return dt === null ? rc() : a.alternate === null && ll === 0 && (ll = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Tf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Hc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === Tf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Hc(l, u, e)), !1;
        }
        throw Error(S(435, a.tag));
      }
      return Hc(l, u, e), rc(), !1;
    }
    if (G)
      return t = kl.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ef && (l = Error(S(422), { cause: u }), Vu(wl(l, a)))) : (u !== Ef && (t = Error(S(423), {
        cause: u
      }), Vu(
        wl(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = wl(u, a), e = Jf(
        l.stateNode,
        u,
        e
      ), cc(l, e), ll !== 4 && (ll = 2)), !1;
    var n = Error(S(520), { cause: u });
    if (n = wl(n, a), se === null ? se = [n] : se.push(n), ll !== 4 && (ll = 2), t === null) return !0;
    u = wl(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = Jf(a.stateNode, u, l), cc(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (aa === null || !aa.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = s0(e), v0(
              e,
              l,
              a,
              u
            ), cc(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var d0 = Error(S(461)), ml = !1;
  function zl(l, t, a, u) {
    t.child = l === null ? gs(t, null, a, u) : Ma(
      t,
      l.child,
      a,
      u
    );
  }
  function h0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Na(t), u = Hf(
      l,
      t,
      a,
      f,
      n,
      e
    ), c = Rf(), l !== null && !ml ? (Nf(l, t, e), Ut(l, t, e)) : (G && c && Af(t), t.flags |= 1, zl(l, t, u, e), t.child);
  }
  function y0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Sc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, m0(
        l,
        t,
        n,
        u,
        e
      )) : (l = gn(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !tc(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Zu, a(f, u) && l.ref === t.ref)
        return Ut(l, t, e);
    }
    return t.flags |= 1, l = la(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function m0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Zu(n, u) && l.ref === t.ref)
        if (ml = !1, t.pendingProps = u = n, tc(l, e))
          l.flags & 131072 && (ml = !0);
        else
          return t.lanes = l.lanes, Ut(l, t, e);
    }
    return wf(
      l,
      t,
      a,
      u,
      e
    );
  }
  function S0(l, t, a) {
    var u = t.pendingProps, e = u.children, n = (t.stateNode._pendingVisibility & 2) !== 0, f = l !== null ? l.memoizedState : null;
    if (Pu(l, t), u.mode === "hidden" || n) {
      if (t.flags & 128) {
        if (u = f !== null ? f.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~u;
        } else t.childLanes = 0, t.child = null;
        return g0(
          l,
          t,
          u,
          a
        );
      }
      if (a & 536870912)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ln(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? bs(t, f) : Df(), os(t);
      else
        return t.lanes = t.childLanes = 536870912, g0(
          l,
          t,
          f !== null ? f.baseLanes | a : a,
          a
        );
    } else
      f !== null ? (ln(t, f.cachePool), bs(t, f), Kt(), t.memoizedState = null) : (l !== null && ln(t, null), Df(), Kt());
    return zl(l, t, e, a), t.child;
  }
  function g0(l, t, a, u) {
    var e = rf();
    return e = e === null ? null : { parent: dl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && ln(t, null), Df(), os(t), l !== null && le(l, t, u, !0), null;
  }
  function Pu(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(S(284));
      (l === null || l.ref !== a) && (t.flags |= 2097664);
    }
  }
  function wf(l, t, a, u, e) {
    return Na(t), a = Hf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Rf(), l !== null && !ml ? (Nf(l, t, e), Ut(l, t, e)) : (G && u && Af(t), t.flags |= 1, zl(l, t, a, e), t.child);
  }
  function b0(l, t, a, u, e, n) {
    return Na(t), t.updateQueue = null, a = Ds(
      t,
      u,
      a,
      e
    ), Ts(l), u = Rf(), l !== null && !ml ? (Nf(l, t, n), Ut(l, t, n)) : (G && u && Af(t), t.flags |= 1, zl(l, t, a, n), t.child);
  }
  function o0(l, t, a, u, e) {
    if (Na(t), t.stateNode === null) {
      var n = lu, f = a.contextType;
      typeof f == "object" && f !== null && (n = Ml(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Lf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, nc(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Ml(f) : lu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (Kf(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Lf.enqueueReplaceState(n, n.state, null), ue(t, u, n, e), ae(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ha(a, c);
      n.props = i;
      var v = n.context, g = a.contextType;
      f = lu, typeof g == "object" && g !== null && (f = Ml(g));
      var o = a.getDerivedStateFromProps;
      g = typeof o == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== f) && e0(
        t,
        n,
        u,
        f
      ), Wt = !1;
      var y = t.memoizedState;
      n.state = y, ue(t, u, n, e), ae(), v = t.memoizedState, c || y !== v || Wt ? (typeof o == "function" && (Kf(
        t,
        a,
        o,
        u
      ), v = t.memoizedState), (i = Wt || u0(
        t,
        a,
        i,
        u,
        y,
        v,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = v), n.props = u, n.state = v, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, fc(l, t), f = t.memoizedProps, g = Ha(a, f), n.props = g, o = t.pendingProps, y = n.context, v = a.contextType, i = lu, typeof v == "object" && v !== null && (i = Ml(v)), c = a.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== o || y !== i) && e0(
        t,
        n,
        u,
        i
      ), Wt = !1, y = t.memoizedState, n.state = y, ue(t, u, n, e), ae();
      var m = t.memoizedState;
      f !== o || y !== m || Wt || l !== null && l.dependencies !== null && hn(l.dependencies) ? (typeof c == "function" && (Kf(
        t,
        a,
        c,
        u
      ), m = t.memoizedState), (g = Wt || u0(
        t,
        a,
        g,
        u,
        y,
        m,
        i
      ) || l !== null && l.dependencies !== null && hn(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, Pu(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ma(
      t,
      l.child,
      null,
      e
    ), t.child = Ma(
      t,
      null,
      a,
      e
    )) : zl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Ut(
      l,
      t,
      e
    ), l;
  }
  function A0(l, t, a, u) {
    return pu(), t.flags |= 256, zl(l, t, a, u), t.child;
  }
  var Wf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ff(l) {
    return { baseLanes: l, cachePool: Es() };
  }
  function kf(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= lt), l;
  }
  function z0(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (vl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (G) {
        if (e ? Vt(t) : Kt(), G) {
          var c = Al, i;
          if (i = c) {
            l: {
              for (i = c, c = vt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = ft(
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
              treeContext: Ea !== null ? { id: Et, overflow: Tt } : null,
              retryLane: 536870912
            }, i = Pl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Ol = t, Al = null, i = !0) : i = !1;
          }
          i || Da(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return c.data === "$!" ? t.lanes = 16 : t.lanes = 536870912, null;
        Dt(t);
      }
      return c = u.children, u = u.fallback, e ? (Kt(), e = t.mode, c = If(
        { mode: "hidden", children: c },
        e
      ), u = Ya(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, e = t.child, e.memoizedState = Ff(a), e.childLanes = kf(
        l,
        f,
        a
      ), t.memoizedState = Wf, u) : (Vt(t), $f(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Vt(t), t.flags &= -257, t = Pf(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (Kt(), t.child = l.child, t.flags |= 128, t = null) : (Kt(), e = u.fallback, c = t.mode, u = If(
          { mode: "visible", children: u.children },
          c
        ), e = Ya(
          e,
          c,
          a,
          null
        ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, Ma(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = Ff(a), u.childLanes = kf(
          l,
          f,
          a
        ), t.memoizedState = Wf, t = e);
      else if (Vt(t), c.data === "$!") {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var v = f.dgst;
        f = v, u = Error(S(419)), u.stack = "", u.digest = f, Vu({ value: u, source: null, stack: null }), t = Pf(
          l,
          t,
          a
        );
      } else if (ml || le(l, t, a, !1), f = (a & l.childLanes) !== 0, ml || f) {
        if (f = L, f !== null) {
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
            throw i.retryLane = u, pt(l, u), rl(f, l, u), d0;
        }
        c.data === "$?" || rc(), t = Pf(
          l,
          t,
          a
        );
      } else
        c.data === "$?" ? (t.flags |= 128, t.child = l.child, t = _1.bind(
          null,
          l
        ), c._reactRetry = t, t = null) : (l = i.treeContext, Al = ft(
          c.nextSibling
        ), Ol = t, G = !0, et = null, vt = !1, l !== null && (Wl[Fl++] = Et, Wl[Fl++] = Tt, Wl[Fl++] = Ea, Et = l.id, Tt = l.overflow, Ea = t), t = $f(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (Kt(), e = u.fallback, c = t.mode, i = l.child, v = i.sibling, u = la(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 31457280, v !== null ? e = la(v, e) : (e = Ya(
      e,
      c,
      a,
      null
    ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, c = l.child.memoizedState, c === null ? c = Ff(a) : (i = c.cachePool, i !== null ? (v = dl._currentValue, i = i.parent !== v ? { parent: v, pool: v } : i) : i = Es(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = kf(
      l,
      f,
      a
    ), t.memoizedState = Wf, u) : (Vt(t), a = l.child, l = a.sibling, a = la(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function $f(l, t) {
    return t = If(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function If(l, t) {
    return J0(l, t, 0, null);
  }
  function Pf(l, t, a) {
    return Ma(t, l.child, null, a), l = $f(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function E0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), uc(l.return, t, a);
  }
  function lc(l, t, a, u, e) {
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
  function T0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    if (zl(l, t, u.children, a), u = vl.current, u & 2)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && E0(l, a, t);
          else if (l.tag === 19)
            E0(l, a, t);
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
    switch (W(vl, u), e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && Pe(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), lc(
          t,
          !1,
          e,
          a,
          n
        );
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Pe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        lc(
          t,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        lc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ut(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ta |= t.lanes, !(a & t.childLanes))
      if (l !== null) {
        if (le(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, a = la(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = la(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function tc(l, t) {
    return l.lanes & t ? !0 : (l = l.dependencies, !!(l !== null && hn(l)));
  }
  function T1(l, t, a) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), wt(t, dl, l.memoizedState.cache), pu();
        break;
      case 27:
      case 5:
        Kn(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Vt(t), t.flags |= 128, null) : a & t.child.childLanes ? z0(l, t, a) : (Vt(t), l = Ut(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        Vt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (le(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return T0(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), W(vl, vl.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, S0(l, t, a);
      case 24:
        wt(t, dl, l.memoizedState.cache);
    }
    return Ut(l, t, a);
  }
  function D0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        ml = !0;
      else {
        if (!tc(l, a) && !(t.flags & 128))
          return ml = !1, T1(
            l,
            t,
            a
          );
        ml = !!(l.flags & 131072);
      }
    else
      ml = !1, G && t.flags & 1048576 && cs(t, We, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType, e = u._init;
          if (u = e(u._payload), t.type = u, typeof u == "function")
            Sc(u) ? (l = Ha(u, l), t.tag = 1, t = o0(
              null,
              t,
              u,
              l,
              a
            )) : (t.tag = 0, t = wf(
              null,
              t,
              u,
              l,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === X) {
                t.tag = 11, t = h0(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              } else if (e === pl) {
                t.tag = 14, t = y0(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              }
            }
            throw t = Ga(u) || u, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return wf(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Ha(
          u,
          t.pendingProps
        ), o0(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(S(387));
          var n = t.pendingProps;
          e = t.memoizedState, u = e.element, fc(l, t), ue(t, n, null, a);
          var f = t.memoizedState;
          if (n = f.cache, wt(t, dl, n), n !== e.cache && ec(
            t,
            [dl],
            a,
            !0
          ), ae(), n = f.element, e.isDehydrated)
            if (e = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
              t = A0(
                l,
                t,
                n,
                a
              );
              break l;
            } else if (n !== u) {
              u = wl(
                Error(S(424)),
                t
              ), Vu(u), t = A0(
                l,
                t,
                n,
                a
              );
              break l;
            } else
              for (Al = ft(
                t.stateNode.containerInfo.firstChild
              ), Ol = t, G = !0, et = null, vt = !0, a = gs(
                t,
                null,
                n,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (pu(), n === u) {
              t = Ut(
                l,
                t,
                a
              );
              break l;
            }
            zl(l, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Pu(l, t), l === null ? (a = Ov(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : G || (a = t.type, l = t.pendingProps, u = qn(
          Gt.current
        ).createElement(a), u[Dl] = t, u[Rl] = l, El(u, a, l), yl(u), t.stateNode = u) : t.memoizedState = Ov(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Kn(t), l === null && G && (u = t.stateNode = Dv(
          t.type,
          t.pendingProps,
          Gt.current
        ), Ol = t, vt = !0, Al = ft(
          u.firstChild
        )), u = t.pendingProps.children, l !== null || G ? zl(
          l,
          t,
          u,
          a
        ) : t.child = Ma(
          t,
          null,
          u,
          a
        ), Pu(l, t), t.child;
      case 5:
        return l === null && G && ((e = u = Al) && (u = I1(
          u,
          t.type,
          t.pendingProps,
          vt
        ), u !== null ? (t.stateNode = u, Ol = t, Al = ft(
          u.firstChild
        ), vt = !1, e = !0) : e = !1), e || Da(t)), Kn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Cc(e, n) ? u = null : f !== null && Cc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Hf(
          l,
          t,
          S1,
          null,
          null,
          a
        ), oe._currentValue = e), Pu(l, t), zl(l, t, u, a), t.child;
      case 6:
        return l === null && G && ((l = a = Al) && (a = P1(
          a,
          t.pendingProps,
          vt
        ), a !== null ? (t.stateNode = a, Ol = t, Al = null, l = !0) : l = !1), l || Da(t)), null;
      case 13:
        return z0(l, t, a);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ma(
          t,
          null,
          u,
          a
        ) : zl(
          l,
          t,
          u,
          a
        ), t.child;
      case 11:
        return h0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return zl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, wt(t, t.type, u.value), zl(
          l,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Na(t), e = Ml(e), u = u(e), t.flags |= 1, zl(l, t, u, a), t.child;
      case 14:
        return y0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return m0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return T0(l, t, a);
      case 22:
        return S0(l, t, a);
      case 24:
        return Na(t), u = Ml(dl), l === null ? (e = rf(), e === null && (e = L, n = Uf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, nc(t), wt(t, dl, e)) : (l.lanes & a && (fc(l, t), ue(t, null, null, a), ae()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), wt(t, dl, u)) : (u = n.cache, wt(t, dl, u), u !== e.cache && ec(
          t,
          [dl],
          a,
          !0
        ))), zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  var ac = ct(null), Ra = null, Ot = null;
  function wt(l, t, a) {
    W(ac, t._currentValue), t._currentValue = a;
  }
  function rt(l) {
    l._currentValue = ac.current, hl(ac);
  }
  function uc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function ec(l, t, a, u) {
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
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), uc(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(S(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), uc(f, a, l), f = null;
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
  function le(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if (e.flags & 524288) n = !0;
        else if (e.flags & 262144) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(S(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Xl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Oe.current) {
        if (f = e.alternate, f === null) throw Error(S(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && ec(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function hn(l) {
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
  function Na(l) {
    Ra = l, Ot = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ml(l) {
    return M0(Ra, l);
  }
  function yn(l, t) {
    return Ra === null && Na(l), M0(l, t);
  }
  function M0(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Ot === null) {
      if (l === null) throw Error(S(308));
      Ot = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Ot = Ot.next = t;
    return a;
  }
  var Wt = !1;
  function nc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function fc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ft(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function kt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, k & 2) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Je(l), ns(l, null, a), t;
    }
    return Le(l, u, t, a), Je(l);
  }
  function te(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  function cc(l, t) {
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
  var ic = !1;
  function ae() {
    if (ic) {
      var l = fu;
      if (l !== null) throw l;
    }
  }
  function ue(l, t, a, u) {
    ic = !1;
    var e = l.updateQueue;
    Wt = !1;
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
        var y = c.lane & -536870913, m = y !== c.lane;
        if (m ? (Q & y) === y : (u & y) === y) {
          y !== 0 && y === nu && (ic = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var T = l, r = c;
            y = t;
            var tl = a;
            switch (r.tag) {
              case 1:
                if (T = r.payload, typeof T == "function") {
                  o = T.call(tl, o, y);
                  break l;
                }
                o = T;
                break l;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = r.payload, y = typeof T == "function" ? T.call(tl, o, y) : T, y == null) break l;
                o = C({}, o, y);
                break l;
              case 2:
                Wt = !0;
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
          }, g === null ? (v = g = m, i = o) : g = g.next = m, f |= y;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = o), e.baseState = i, e.firstBaseUpdate = v, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), ta |= f, l.lanes = f, l.memoizedState = o;
    }
  }
  function U0(l, t) {
    if (typeof l != "function")
      throw Error(S(191, l));
    l.call(t);
  }
  function O0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        U0(a[l], t);
  }
  function ee(l, t) {
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
      K(t, t.return, c);
    }
  }
  function $t(l, t, a) {
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
              } catch (v) {
                K(
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
      K(t, t.return, v);
    }
  }
  function r0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        O0(t, a);
      } catch (u) {
        K(l, l.return, u);
      }
    }
  }
  function q0(l, t, a) {
    a.props = Ha(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      K(l, t, u);
    }
  }
  function Ba(l, t) {
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
      K(l, t, n);
    }
  }
  function Gl(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          K(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          K(l, t, e);
        }
      else a.current = null;
  }
  function H0(l) {
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
      K(l, l.return, e);
    }
  }
  function R0(l, t, a) {
    try {
      var u = l.stateNode;
      w1(u, l.type, a, t), u[Rl] = t;
    } catch (e) {
      K(l, l.return, e);
    }
  }
  function N0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || N0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.nodeType === 8 ? a.parentNode.insertBefore(l, t) : a.insertBefore(l, t) : (a.nodeType === 8 ? (t = a.parentNode, t.insertBefore(l, a)) : (t = a, t.appendChild(l)), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = rn));
    else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
      for (vc(l, t, a), l = l.sibling; l !== null; )
        vc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && u !== 27 && (l = l.child, l !== null))
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), l = l.sibling;
  }
  var qt = !1, P = !1, dc = !1, B0 = typeof WeakSet == "function" ? WeakSet : Set, Sl = null, Y0 = !1;
  function D1(l, t) {
    if (l = l.containerInfo, Zc = Qn, l = ki(l), yf(l)) {
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
            var f = 0, c = -1, i = -1, v = 0, g = 0, o = l, y = null;
            t: for (; ; ) {
              for (var m; o !== a || e !== 0 && o.nodeType !== 3 || (c = f + e), o !== n || u !== 0 && o.nodeType !== 3 || (i = f + u), o.nodeType === 3 && (f += o.nodeValue.length), (m = o.firstChild) !== null; )
                y = o, o = m;
              for (; ; ) {
                if (o === l) break t;
                if (y === a && ++v === e && (c = f), y === n && ++g === u && (i = f), (m = o.nextSibling) !== null) break;
                o = y, y = o.parentNode;
              }
              o = m;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (xc = { focusedElem: l, selectionRange: a }, Qn = !1, Sl = t; Sl !== null; )
      if (t = Sl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Sl = l;
      else
        for (; Sl !== null; ) {
          switch (t = Sl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var T = Ha(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  l = u.getSnapshotBeforeUpdate(
                    T,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (r) {
                  K(
                    a,
                    a.return,
                    r
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
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
              if (l & 1024) throw Error(S(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Sl = l;
            break;
          }
          Sl = t.return;
        }
    return T = Y0, Y0 = !1, T;
  }
  function Q0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Rt(l, a), u & 4 && ee(5, a);
        break;
      case 1:
        if (Rt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              K(a, a.return, c);
            }
          else {
            var e = Ha(
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
              K(
                a,
                a.return,
                c
              );
            }
          }
        u & 64 && r0(a), u & 512 && Ba(a, a.return);
        break;
      case 3:
        if (Rt(l, a), u & 64 && (u = a.updateQueue, u !== null)) {
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
            O0(u, l);
          } catch (c) {
            K(a, a.return, c);
          }
        }
        break;
      case 26:
        Rt(l, a), u & 512 && Ba(a, a.return);
        break;
      case 27:
      case 5:
        Rt(l, a), t === null && u & 4 && H0(a), u & 512 && Ba(a, a.return);
        break;
      case 12:
        Rt(l, a);
        break;
      case 13:
        Rt(l, a), u & 4 && X0(l, a);
        break;
      case 22:
        if (e = a.memoizedState !== null || qt, !e) {
          t = t !== null && t.memoizedState !== null || P;
          var n = qt, f = P;
          qt = e, (P = t) && !f ? It(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Rt(l, a), qt = n, P = f;
        }
        u & 512 && (a.memoizedProps.mode === "manual" ? Ba(a, a.return) : Gl(a, a.return));
        break;
      default:
        Rt(l, a);
    }
  }
  function j0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, j0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var il = null, Zl = !1;
  function Ht(l, t, a) {
    for (a = a.child; a !== null; )
      _0(l, t, a), a = a.sibling;
  }
  function _0(l, t, a) {
    if (jl && typeof jl.onCommitFiberUnmount == "function")
      try {
        jl.onCommitFiberUnmount(ru, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        P || Gl(a, t), Ht(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        P || Gl(a, t);
        var u = il, e = Zl;
        for (il = a.stateNode, Ht(
          l,
          t,
          a
        ), a = a.stateNode, t = a.attributes; t.length; )
          a.removeAttributeNode(t[0]);
        kn(a), il = u, Zl = e;
        break;
      case 5:
        P || Gl(a, t);
      case 6:
        e = il;
        var n = Zl;
        if (il = null, Ht(
          l,
          t,
          a
        ), il = e, Zl = n, il !== null)
          if (Zl)
            try {
              l = il, u = a.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u);
            } catch (f) {
              K(
                a,
                t,
                f
              );
            }
          else
            try {
              il.removeChild(a.stateNode);
            } catch (f) {
              K(
                a,
                t,
                f
              );
            }
        break;
      case 18:
        il !== null && (Zl ? (t = il, a = a.stateNode, t.nodeType === 8 ? Vc(
          t.parentNode,
          a
        ) : t.nodeType === 1 && Vc(t, a), Te(t)) : Vc(il, a.stateNode));
        break;
      case 4:
        u = il, e = Zl, il = a.stateNode.containerInfo, Zl = !0, Ht(
          l,
          t,
          a
        ), il = u, Zl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        P || $t(2, a, t), P || $t(4, a, t), Ht(
          l,
          t,
          a
        );
        break;
      case 1:
        P || (Gl(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && q0(
          a,
          t,
          u
        )), Ht(
          l,
          t,
          a
        );
        break;
      case 21:
        Ht(
          l,
          t,
          a
        );
        break;
      case 22:
        P || Gl(a, t), P = (u = P) || a.memoizedState !== null, Ht(
          l,
          t,
          a
        ), P = u;
        break;
      default:
        Ht(
          l,
          t,
          a
        );
    }
  }
  function X0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Te(l);
      } catch (a) {
        K(t, t.return, a);
      }
  }
  function M1(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new B0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new B0()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function hc(l, t) {
    var a = M1(l);
    t.forEach(function(u) {
      var e = X1.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
            case 5:
              il = c.stateNode, Zl = !1;
              break l;
            case 3:
              il = c.stateNode.containerInfo, Zl = !0;
              break l;
            case 4:
              il = c.stateNode.containerInfo, Zl = !0;
              break l;
          }
          c = c.return;
        }
        if (il === null) throw Error(S(160));
        _0(n, f, e), il = null, Zl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        G0(t, l), t = t.sibling;
  }
  var nt = null;
  function G0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), Il(l), u & 4 && ($t(3, l, l.return), ee(3, l), $t(5, l, l.return));
        break;
      case 1:
        $l(t, l), Il(l), u & 512 && (P || a === null || Gl(a, a.return)), u & 64 && qt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = nt;
        if ($l(t, l), Il(l), u & 512 && (P || a === null || Gl(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ru] || n[Dl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), El(n, u, a), n[Dl] = l, yl(n), u = n;
                      break l;
                    case "link":
                      var f = Hv(
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
                      n = e.createElement(u), El(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Hv(
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
                      n = e.createElement(u), El(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(S(468, u));
                  }
                  n[Dl] = l, yl(n), u = n;
                }
                l.stateNode = u;
              } else
                Rv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = qv(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Rv(
              e,
              l.type,
              l.stateNode
            ) : qv(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && R0(
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
              var v = i.nextSibling, g = i.nodeName;
              i[Ru] || g === "HEAD" || g === "BODY" || g === "SCRIPT" || g === "STYLE" || g === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = v;
            }
            for (var o = l.type, y = e.attributes; y.length; )
              e.removeAttributeNode(y[0]);
            El(e, o, n), e[Dl] = l, e[Rl] = n;
          } catch (T) {
            K(l, l.return, T);
          }
        }
      case 5:
        if ($l(t, l), Il(l), u & 512 && (P || a === null || Gl(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (T) {
            K(l, l.return, T);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, R0(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (dc = !0);
        break;
      case 6:
        if ($l(t, l), Il(l), u & 4) {
          if (l.stateNode === null)
            throw Error(S(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (T) {
            K(l, l.return, T);
          }
        }
        break;
      case 3:
        if (Nn = null, e = nt, nt = Hn(t.containerInfo), $l(t, l), nt = e, Il(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Te(t.containerInfo);
          } catch (T) {
            K(l, l.return, T);
          }
        dc && (dc = !1, Z0(l));
        break;
      case 4:
        u = nt, nt = Hn(
          l.stateNode.containerInfo
        ), $l(t, l), Il(l), nt = u;
        break;
      case 12:
        $l(t, l), Il(l);
        break;
      case 13:
        $l(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ec = st()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hc(l, u)));
        break;
      case 22:
        if (u & 512 && (P || a === null || Gl(a, a.return)), i = l.memoizedState !== null, v = a !== null && a.memoizedState !== null, g = qt, o = P, qt = g || i, P = o || v, $l(t, l), P = o, qt = g, Il(l), t = l.stateNode, t._current = l, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, u & 8192 && (t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (t = qt || P, a === null || v || t || vu(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
          l: for (a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                v = a = t;
                try {
                  if (e = v.stateNode, i)
                    n = e.style, typeof n.setProperty == "function" ? n.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : n.display = "none";
                  else {
                    f = v.stateNode, c = v.memoizedProps.style;
                    var m = c != null && c.hasOwnProperty("display") ? c.display : null;
                    f.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (T) {
                  K(v, v.return, T);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = i ? "" : v.memoizedProps;
                } catch (T) {
                  K(v, v.return, T);
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
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, hc(l, a))));
        break;
      case 19:
        $l(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hc(l, u)));
        break;
      case 21:
        break;
      default:
        $l(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var a = l.return; a !== null; ) {
              if (N0(a)) {
                var u = a;
                break l;
              }
              a = a.return;
            }
            throw Error(S(160));
          }
          switch (u.tag) {
            case 27:
              var e = u.stateNode, n = sc(l);
              mn(l, n, e);
              break;
            case 5:
              var f = u.stateNode;
              u.flags & 32 && (wa(f, ""), u.flags &= -33);
              var c = sc(l);
              mn(l, c, f);
              break;
            case 3:
            case 4:
              var i = u.stateNode.containerInfo, v = sc(l);
              vc(
                l,
                v,
                i
              );
              break;
            default:
              throw Error(S(161));
          }
        }
      } catch (g) {
        K(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Z0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Z0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Rt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Q0(l, t.alternate, t), t = t.sibling;
  }
  function vu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $t(4, t, t.return), vu(t);
          break;
        case 1:
          Gl(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && q0(
            t,
            t.return,
            a
          ), vu(t);
          break;
        case 26:
        case 27:
        case 5:
          Gl(t, t.return), vu(t);
          break;
        case 22:
          Gl(t, t.return), t.memoizedState === null && vu(t);
          break;
        default:
          vu(t);
      }
      l = l.sibling;
    }
  }
  function It(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(
            e,
            n,
            a
          ), ee(4, n);
          break;
        case 1:
          if (It(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (v) {
              K(u, u.return, v);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  U0(i[e], c);
            } catch (v) {
              K(u, u.return, v);
            }
          }
          a && f & 64 && r0(n), Ba(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          It(
            e,
            n,
            a
          ), a && u === null && f & 4 && H0(n), Ba(n, n.return);
          break;
        case 12:
          It(
            e,
            n,
            a
          );
          break;
        case 13:
          It(
            e,
            n,
            a
          ), a && f & 4 && X0(e, n);
          break;
        case 22:
          n.memoizedState === null && It(
            e,
            n,
            a
          ), Ba(n, n.return);
          break;
        default:
          It(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function yc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Wu(a));
  }
  function mc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Wu(l));
  }
  function Pt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        x0(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function x0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          l,
          t,
          a,
          u
        ), e & 2048 && ee(9, t);
        break;
      case 3:
        Pt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Wu(l)));
        break;
      case 12:
        if (e & 2048) {
          Pt(
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
            K(t, t.return, i);
          }
        } else
          Pt(
            l,
            t,
            a,
            u
          );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, t.memoizedState !== null ? n._visibility & 4 ? Pt(
          l,
          t,
          a,
          u
        ) : ne(l, t) : n._visibility & 4 ? Pt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 4, du(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && yc(
          t.alternate,
          t
        );
        break;
      case 24:
        Pt(
          l,
          t,
          a,
          u
        ), e & 2048 && mc(t.alternate, t);
        break;
      default:
        Pt(
          l,
          t,
          a,
          u
        );
    }
  }
  function du(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          du(
            n,
            f,
            c,
            i,
            e
          ), ee(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 4 ? du(
            n,
            f,
            c,
            i,
            e
          ) : ne(
            n,
            f
          ) : (g._visibility |= 4, du(
            n,
            f,
            c,
            i,
            e
          )), e && v & 2048 && yc(
            f.alternate,
            f
          );
          break;
        case 24:
          du(
            n,
            f,
            c,
            i,
            e
          ), e && v & 2048 && mc(f.alternate, f);
          break;
        default:
          du(
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
  function ne(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ne(a, u), e & 2048 && yc(
              u.alternate,
              u
            );
            break;
          case 24:
            ne(a, u), e & 2048 && mc(u.alternate, u);
            break;
          default:
            ne(a, u);
        }
        t = t.sibling;
      }
  }
  var fe = 8192;
  function hu(l) {
    if (l.subtreeFlags & fe)
      for (l = l.child; l !== null; )
        C0(l), l = l.sibling;
  }
  function C0(l) {
    switch (l.tag) {
      case 26:
        hu(l), l.flags & fe && l.memoizedState !== null && hh(
          nt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        hu(l);
        break;
      case 3:
      case 4:
        var t = nt;
        nt = Hn(l.stateNode.containerInfo), hu(l), nt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = fe, fe = 16777216, hu(l), fe = t) : hu(l));
        break;
      default:
        hu(l);
    }
  }
  function p0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Sl = u, K0(
            u,
            l
          );
        }
      p0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        V0(l), l = l.sibling;
  }
  function V0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(l), l.flags & 2048 && $t(9, l, l.return);
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -5, Sn(l)) : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function Sn(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Sl = u, K0(
            u,
            l
          );
        }
      p0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          $t(8, t, t.return), Sn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 4 && (a._visibility &= -5, Sn(t));
          break;
        default:
          Sn(t);
      }
      l = l.sibling;
    }
  }
  function K0(l, t) {
    for (; Sl !== null; ) {
      var a = Sl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $t(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Wu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Sl = u;
      else
        l: for (a = l; Sl !== null; ) {
          u = Sl;
          var e = u.sibling, n = u.return;
          if (j0(u), u === a) {
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
  function U1(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pl(l, t, a, u) {
    return new U1(l, t, a, u);
  }
  function Sc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function la(l, t) {
    var a = l.alternate;
    return a === null ? (a = Pl(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 31457280, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function L0(l, t) {
    l.flags &= 31457282;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function gn(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") Sc(l) && (f = 1);
    else if (typeof l == "string")
      f = vh(
        l,
        a,
        it.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case I:
          return Ya(a.children, e, n, t);
        case Ql:
          f = 8, e |= 24;
          break;
        case ia:
          return l = Pl(12, a, t, e | 2), l.elementType = ia, l.lanes = n, l;
        case Hl:
          return l = Pl(13, a, t, e), l.elementType = Hl, l.lanes = n, l;
        case ol:
          return l = Pl(19, a, t, e), l.elementType = ol, l.lanes = n, l;
        case sa:
          return J0(a, e, n, t);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case bl:
              case Tl:
                f = 10;
                break l;
              case al:
                f = 9;
                break l;
              case X:
                f = 11;
                break l;
              case pl:
                f = 14;
                break l;
              case sl:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            S(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = Pl(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ya(l, t, a, u) {
    return l = Pl(7, l, u, t), l.lanes = a, l;
  }
  function J0(l, t, a, u) {
    l = Pl(22, l, u, t), l.elementType = sa, l.lanes = a;
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var n = e._current;
        if (n === null) throw Error(S(456));
        if (!(e._pendingVisibility & 2)) {
          var f = pt(n, 2);
          f !== null && (e._pendingVisibility |= 2, rl(f, n, 2));
        }
      },
      attach: function() {
        var n = e._current;
        if (n === null) throw Error(S(456));
        if (e._pendingVisibility & 2) {
          var f = pt(n, 2);
          f !== null && (e._pendingVisibility &= -3, rl(f, n, 2));
        }
      }
    };
    return l.stateNode = e, l;
  }
  function gc(l, t, a) {
    return l = Pl(6, l, null, t), l.lanes = a, l;
  }
  function bc(l, t, a) {
    return t = Pl(
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
  function Nt(l) {
    l.flags |= 4;
  }
  function w0(l, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Nv(t)) {
      if (t = kl.current, t !== null && ((Q & 4194176) === Q ? dt !== null : (Q & 62914560) !== Q && !(Q & 536870912) || t !== dt))
        throw Lu = Tf, vs;
      l.flags |= 8192;
    }
  }
  function bn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? di() : 536870912, l.lanes |= t, mu |= t);
  }
  function ie(l, t) {
    if (!G)
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
  function F(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 31457280, u |= e.flags & 31457280, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function O1(l, t, a) {
    var u = t.pendingProps;
    switch (zf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return F(t), null;
      case 1:
        return F(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), rt(dl), Ca(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Cu(t) ? Nt(t) : l === null || l.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Uc(et), et = null))), F(t), null;
      case 26:
        return a = t.memoizedState, l === null ? (Nt(t), a !== null ? (F(t), w0(t, a)) : (F(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Nt(t), F(t), w0(t, a)) : (F(t), t.flags &= -16777217) : (l.memoizedProps !== u && Nt(t), F(t), t.flags &= -16777217), null;
      case 27:
        qe(t), a = Gt.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(S(166));
            return F(t), null;
          }
          l = it.current, Cu(t) ? is(t) : (l = Dv(e, u, a), t.stateNode = l, Nt(t));
        }
        return F(t), null;
      case 5:
        if (qe(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(S(166));
            return F(t), null;
          }
          if (l = it.current, Cu(t))
            is(t);
          else {
            switch (e = qn(
              Gt.current
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
            l[Dl] = t, l[Rl] = u;
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
            l: switch (El(l, a, u), a) {
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
            l && Nt(t);
          }
        }
        return F(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(S(166));
          if (l = Gt.current, Cu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Dl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || bv(l.nodeValue, a)), l || Da(t);
          } else
            l = qn(l).createTextNode(
              u
            ), l[Dl] = t, t.stateNode = l;
        }
        return F(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Cu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(S(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
              e[Dl] = t;
            } else
              pu(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            F(t), e = !1;
          } else
            et !== null && (Uc(et), et = null), e = !0;
          if (!e)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
        }
        if (Dt(t), t.flags & 128)
          return t.lanes = a, t;
        if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
          u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== l && a && (t.child.flags |= 8192), bn(t, t.updateQueue), F(t), null;
      case 4:
        return Ca(), l === null && _c(t.stateNode.containerInfo), F(t), null;
      case 10:
        return rt(t.type), F(t), null;
      case 19:
        if (hl(vl), e = t.memoizedState, e === null) return F(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) ie(e, !1);
          else {
            if (ll !== 0 || l !== null && l.flags & 128)
              for (l = t.child; l !== null; ) {
                if (n = Pe(l), n !== null) {
                  for (t.flags |= 128, ie(e, !1), l = n.updateQueue, t.updateQueue = l, bn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    L0(a, l), a = a.sibling;
                  return W(
                    vl,
                    vl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && st() > on && (t.flags |= 128, u = !0, ie(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = Pe(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, bn(t, l), ie(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !G)
                return F(t), null;
            } else
              2 * st() - e.renderingStartTime > on && a !== 536870912 && (t.flags |= 128, u = !0, ie(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = st(), t.sibling = null, l = vl.current, W(vl, u ? l & 1 | 2 : l & 1), t) : (F(t), null);
      case 22:
      case 23:
        return Dt(t), Mf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? a & 536870912 && !(t.flags & 128) && (F(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : F(t), a = t.updateQueue, a !== null && bn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && hl(Ua), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), rt(dl), F(t), null;
      case 25:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function r1(l, t) {
    switch (zf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return rt(dl), Ca(), l = t.flags, l & 65536 && !(l & 128) ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return qe(t), null;
      case 13:
        if (Dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(S(340));
          pu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return hl(vl), null;
      case 4:
        return Ca(), null;
      case 10:
        return rt(t.type), null;
      case 22:
      case 23:
        return Dt(t), Mf(), l !== null && hl(Ua), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return rt(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function W0(l, t) {
    switch (zf(t), t.tag) {
      case 3:
        rt(dl), Ca();
        break;
      case 26:
      case 27:
      case 5:
        qe(t);
        break;
      case 4:
        Ca();
        break;
      case 13:
        Dt(t);
        break;
      case 19:
        hl(vl);
        break;
      case 10:
        rt(t.type);
        break;
      case 22:
      case 23:
        Dt(t), Mf(), l !== null && hl(Ua);
        break;
      case 24:
        rt(dl);
    }
  }
  var q1 = {
    getCacheForType: function(l) {
      var t = Ml(dl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    }
  }, H1 = typeof WeakMap == "function" ? WeakMap : Map, k = 0, L = null, N = null, Q = 0, J = 0, xl = null, Bt = !1, yu = !1, oc = !1, Yt = 0, ll = 0, ta = 0, Qa = 0, Ac = 0, lt = 0, mu = 0, se = null, yt = null, zc = !1, Ec = 0, on = 1 / 0, An = null, aa = null, zn = !1, ja = null, ve = 0, Tc = 0, Dc = null, de = 0, Mc = null;
  function Cl() {
    if (k & 2 && Q !== 0)
      return Q & -Q;
    if (U.T !== null) {
      var l = nu;
      return l !== 0 ? l : Bc();
    }
    return Si();
  }
  function F0() {
    lt === 0 && (lt = !(Q & 536870912) || G ? vi() : 536870912);
    var l = kl.current;
    return l !== null && (l.flags |= 32), lt;
  }
  function rl(l, t, a) {
    (l === L && J === 2 || l.cancelPendingCommit !== null) && (Su(l, 0), Qt(
      l,
      Q,
      lt,
      !1
    )), Hu(l, a), (!(k & 2) || l !== L) && (l === L && (!(k & 2) && (Qa |= a), ll === 4 && Qt(
      l,
      Q,
      lt,
      !1
    )), mt(l));
  }
  function k0(l, t, a) {
    if (k & 6) throw Error(S(327));
    var u = !a && (t & 60) === 0 && (t & l.expiredLanes) === 0 || qu(l, t), e = u ? B1(l, t) : qc(l, t, !0), n = u;
    do {
      if (e === 0) {
        yu && !u && Qt(l, t, 0, !1);
        break;
      } else if (e === 6)
        Qt(
          l,
          t,
          0,
          !Bt
        );
      else {
        if (a = l.current.alternate, n && !R1(a)) {
          e = qc(l, t, !1), n = !1;
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
              e = se;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Su(c, f).flags |= 256), f = qc(
                c,
                f,
                !1
              ), f !== 2) {
                if (oc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Qa |= n, e = 4;
                  break l;
                }
                n = yt, yt = e, n !== null && Uc(n);
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Su(l, 0), Qt(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, e) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194176) === t) {
                Qt(
                  u,
                  t,
                  lt,
                  !Bt
                );
                break l;
              }
              break;
            case 2:
              yt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if (u.finishedWork = a, u.finishedLanes = t, (t & 62914560) === t && (n = Ec + 300 - st(), 10 < n)) {
            if (Qt(
              u,
              t,
              lt,
              !Bt
            ), Be(u, 0) !== 0) break l;
            u.timeoutHandle = zv(
              $0.bind(
                null,
                u,
                a,
                yt,
                An,
                zc,
                t,
                lt,
                Qa,
                mu,
                Bt,
                2,
                -0,
                0
              ),
              n
            );
            break l;
          }
          $0(
            u,
            a,
            yt,
            An,
            zc,
            t,
            lt,
            Qa,
            mu,
            Bt,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mt(l);
  }
  function Uc(l) {
    yt === null ? yt = l : yt.push.apply(
      yt,
      l
    );
  }
  function $0(l, t, a, u, e, n, f, c, i, v, g, o, y) {
    var m = t.subtreeFlags;
    if ((m & 8192 || (m & 16785408) === 16785408) && (be = { stylesheets: null, count: 0, unsuspend: dh }, C0(t), t = yh(), t !== null)) {
      l.cancelPendingCommit = t(
        ev.bind(
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
      ), Qt(l, n, f, !v);
      return;
    }
    ev(
      l,
      a,
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
  function R1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Xl(n(), e)) return !1;
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
  function Qt(l, t, a, u) {
    t &= ~Ac, t &= ~Qa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - _l(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && hi(l, a, t);
  }
  function En() {
    return k & 6 ? !0 : (he(0), !1);
  }
  function Oc() {
    if (N !== null) {
      if (J === 0)
        var l = N.return;
      else
        l = N, Ot = Ra = null, Bf(l), uu = null, Ju = 0, l = N;
      for (; l !== null; )
        W0(l.alternate, l), l = l.return;
      N = null;
    }
  }
  function Su(l, t) {
    l.finishedWork = null, l.finishedLanes = 0;
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, F1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Oc(), L = l, N = a = la(l.current, null), Q = t, J = 0, xl = null, Bt = !1, yu = qu(l, t), oc = !1, mu = lt = Ac = Qa = ta = ll = 0, yt = se = null, zc = !1, t & 8 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - _l(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Yt = t, Ke(), a;
  }
  function I0(l, t) {
    H = null, U.H = ht, t === Ku ? (t = ys(), J = 3) : t === vs ? (t = ys(), J = 4) : J = t === d0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xl = t, N === null && (ll = 1, dn(
      l,
      wl(t, l.current)
    ));
  }
  function P0() {
    var l = U.H;
    return U.H = ht, l === null ? ht : l;
  }
  function lv() {
    var l = U.A;
    return U.A = q1, l;
  }
  function rc() {
    ll = 4, Bt || (Q & 4194176) !== Q && kl.current !== null || (yu = !0), !(ta & 134217727) && !(Qa & 134217727) || L === null || Qt(
      L,
      Q,
      lt,
      !1
    );
  }
  function qc(l, t, a) {
    var u = k;
    k |= 2;
    var e = P0(), n = lv();
    (L !== l || Q !== t) && (An = null, Su(l, t)), t = !1;
    var f = ll;
    l: do
      try {
        if (J !== 0 && N !== null) {
          var c = N, i = xl;
          switch (J) {
            case 8:
              Oc(), f = 6;
              break l;
            case 3:
            case 2:
            case 6:
              kl.current === null && (t = !0);
              var v = J;
              if (J = 0, xl = null, gu(l, c, i, v), a && yu) {
                f = 0;
                break l;
              }
              break;
            default:
              v = J, J = 0, xl = null, gu(l, c, i, v);
          }
        }
        N1(), f = ll;
        break;
      } catch (g) {
        I0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Ot = Ra = null, k = u, U.H = e, U.A = n, N === null && (L = null, Q = 0, Ke()), f;
  }
  function N1() {
    for (; N !== null; ) tv(N);
  }
  function B1(l, t) {
    var a = k;
    k |= 2;
    var u = P0(), e = lv();
    L !== l || Q !== t ? (An = null, on = st() + 500, Su(l, t)) : yu = qu(
      l,
      t
    );
    l: do
      try {
        if (J !== 0 && N !== null) {
          t = N;
          var n = xl;
          t: switch (J) {
            case 1:
              J = 0, xl = null, gu(l, t, n, 1);
              break;
            case 2:
              if (ds(n)) {
                J = 0, xl = null, av(t);
                break;
              }
              t = function() {
                J === 2 && L === l && (J = 7), mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              J = 7;
              break l;
            case 4:
              J = 5;
              break l;
            case 7:
              ds(n) ? (J = 0, xl = null, av(t)) : (J = 0, xl = null, gu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (N.tag) {
                case 26:
                  f = N.memoizedState;
                case 5:
                case 27:
                  var c = N;
                  if (!f || Nv(f)) {
                    J = 0, xl = null;
                    var i = c.sibling;
                    if (i !== null) N = i;
                    else {
                      var v = c.return;
                      v !== null ? (N = v, Tn(v)) : N = null;
                    }
                    break t;
                  }
              }
              J = 0, xl = null, gu(l, t, n, 5);
              break;
            case 6:
              J = 0, xl = null, gu(l, t, n, 6);
              break;
            case 8:
              Oc(), ll = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        Y1();
        break;
      } catch (g) {
        I0(l, g);
      }
    while (!0);
    return Ot = Ra = null, U.H = u, U.A = e, k = a, N !== null ? 0 : (L = null, Q = 0, Ke(), ll);
  }
  function Y1() {
    for (; N !== null && !td(); )
      tv(N);
  }
  function tv(l) {
    var t = D0(l.alternate, l, Yt);
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : N = t;
  }
  function av(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = b0(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Q
        );
        break;
      case 11:
        t = b0(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Q
        );
        break;
      case 5:
        Bf(t);
      default:
        W0(a, t), t = N = L0(t, Yt), t = D0(a, t, Yt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : N = t;
  }
  function gu(l, t, a, u) {
    Ot = Ra = null, Bf(t), uu = null, Ju = 0;
    var e = t.return;
    try {
      if (E1(
        l,
        e,
        t,
        a,
        Q
      )) {
        ll = 1, dn(
          l,
          wl(a, l.current)
        ), N = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw N = e, n;
      ll = 1, dn(
        l,
        wl(a, l.current)
      ), N = null;
      return;
    }
    t.flags & 32768 ? (G || u === 1 ? l = !0 : yu || Q & 536870912 ? l = !1 : (Bt = l = !0, (u === 2 || u === 3 || u === 6) && (u = kl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), uv(t, l)) : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if (t.flags & 32768) {
        uv(
          t,
          Bt
        );
        return;
      }
      l = t.return;
      var a = O1(
        t.alternate,
        t,
        Yt
      );
      if (a !== null) {
        N = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        N = t;
        return;
      }
      N = t = l;
    } while (t !== null);
    ll === 0 && (ll = 5);
  }
  function uv(l, t) {
    do {
      var a = r1(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, N = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        N = l;
        return;
      }
      N = l = a;
    } while (l !== null);
    ll = 6, N = null;
  }
  function ev(l, t, a, u, e, n, f, c, i, v) {
    var g = U.T, o = j.p;
    try {
      j.p = 2, U.T = null, Q1(
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
        v
      );
    } finally {
      U.T = g, j.p = o;
    }
  }
  function Q1(l, t, a, u, e, n, f, c) {
    do
      bu();
    while (ja !== null);
    if (k & 6) throw Error(S(327));
    var i = l.finishedWork;
    if (u = l.finishedLanes, i === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, i === l.current) throw Error(S(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var v = i.lanes | i.childLanes;
    if (v |= bf, hd(
      l,
      u,
      v,
      n,
      f,
      c
    ), l === L && (N = L = null, Q = 0), !(i.subtreeFlags & 10256) && !(i.flags & 10256) || zn || (zn = !0, Tc = v, Dc = a, G1(He, function() {
      return bu(), null;
    })), a = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || a ? (a = U.T, U.T = null, n = j.p, j.p = 2, f = k, k |= 4, D1(l, i), G0(i, l), e1(xc, l.containerInfo), Qn = !!Zc, xc = Zc = null, l.current = i, Q0(l, i.alternate, i), ad(), k = f, j.p = n, U.T = a) : l.current = i, zn ? (zn = !1, ja = l, ve = u) : nv(l, v), v = l.pendingLanes, v === 0 && (aa = null), cd(i.stateNode), mt(l), t !== null)
      for (e = l.onRecoverableError, i = 0; i < t.length; i++)
        v = t[i], e(v.value, {
          componentStack: v.stack
        });
    return ve & 3 && bu(), v = l.pendingLanes, u & 4194218 && v & 42 ? l === Mc ? de++ : (de = 0, Mc = l) : de = 0, he(0), null;
  }
  function nv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Wu(t)));
  }
  function bu() {
    if (ja !== null) {
      var l = ja, t = Tc;
      Tc = 0;
      var a = mi(ve), u = U.T, e = j.p;
      try {
        if (j.p = 32 > a ? 32 : a, U.T = null, ja === null)
          var n = !1;
        else {
          a = Dc, Dc = null;
          var f = ja, c = ve;
          if (ja = null, ve = 0, k & 6)
            throw Error(S(331));
          var i = k;
          if (k |= 4, V0(f.current), x0(f, f.current, c, a), k = i, he(0, !1), jl && typeof jl.onPostCommitFiberRoot == "function")
            try {
              jl.onPostCommitFiberRoot(ru, f);
            } catch {
            }
          n = !0;
        }
        return n;
      } finally {
        j.p = e, U.T = u, nv(l, t);
      }
    }
    return !1;
  }
  function fv(l, t, a) {
    t = wl(a, t), t = Jf(l.stateNode, t, 2), l = kt(l, t, 2), l !== null && (Hu(l, 2), mt(l));
  }
  function K(l, t, a) {
    if (l.tag === 3)
      fv(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fv(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (aa === null || !aa.has(u))) {
            l = wl(a, l), a = s0(2), u = kt(t, a, 2), u !== null && (v0(
              a,
              u,
              t,
              l
            ), Hu(u, 2), mt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new H1();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (oc = !0, e.add(a), l = j1.bind(null, l, t, a), t.then(l, l));
  }
  function j1(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, L === l && (Q & a) === a && (ll === 4 || ll === 3 && (Q & 62914560) === Q && 300 > st() - Ec ? !(k & 2) && Su(l, 0) : Ac |= a, mu === Q && (mu = 0)), mt(l);
  }
  function cv(l, t) {
    t === 0 && (t = di()), l = pt(l, t), l !== null && (Hu(l, t), mt(l));
  }
  function _1(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), cv(l, a);
  }
  function X1(l, t) {
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
        throw Error(S(314));
    }
    u !== null && u.delete(t), cv(l, a);
  }
  function G1(l, t) {
    return Jn(l, t);
  }
  var Dn = null, ou = null, Rc = !1, Mn = !1, Nc = !1, _a = 0;
  function mt(l) {
    l !== ou && l.next === null && (ou === null ? Dn = ou = l : ou = ou.next = l), Mn = !0, Rc || (Rc = !0, x1(Z1));
  }
  function he(l, t) {
    if (!Nc && Mn) {
      Nc = !0;
      do
        for (var a = !1, u = Dn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - _l(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, vv(u, n));
          } else
            n = Q, n = Be(
              u,
              u === L ? n : 0
            ), !(n & 3) || qu(u, n) || (a = !0, vv(u, n));
          u = u.next;
        }
      while (a);
      Nc = !1;
    }
  }
  function Z1() {
    Mn = Rc = !1;
    var l = 0;
    _a !== 0 && (W1() && (l = _a), _a = 0);
    for (var t = st(), a = null, u = Dn; u !== null; ) {
      var e = u.next, n = iv(u, t);
      n === 0 ? (u.next = null, a === null ? Dn = e : a.next = e, e === null && (ou = a)) : (a = u, (l !== 0 || n & 3) && (Mn = !0)), u = e;
    }
    he(l);
  }
  function iv(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - _l(n), c = 1 << f, i = e[f];
      i === -1 ? (!(c & a) || c & u) && (e[f] = dd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = L, a = Q, a = Be(
      l,
      l === t ? a : 0
    ), u = l.callbackNode, a === 0 || l === t && J === 2 || l.cancelPendingCommit !== null)
      return u !== null && u !== null && wn(u), l.callbackNode = null, l.callbackPriority = 0;
    if (!(a & 3) || qu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && wn(u), mi(a)) {
        case 2:
        case 8:
          a = ii;
          break;
        case 32:
          a = He;
          break;
        case 268435456:
          a = si;
          break;
        default:
          a = He;
      }
      return u = sv.bind(null, l), a = Jn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && wn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function sv(l, t) {
    var a = l.callbackNode;
    if (bu() && l.callbackNode !== a)
      return null;
    var u = Q;
    return u = Be(
      l,
      l === L ? u : 0
    ), u === 0 ? null : (k0(l, u, t), iv(l, st()), l.callbackNode != null && l.callbackNode === a ? sv.bind(null, l) : null);
  }
  function vv(l, t) {
    if (bu()) return null;
    k0(l, t, !0);
  }
  function x1(l) {
    k1(function() {
      k & 6 ? Jn(ci, l) : l();
    });
  }
  function Bc() {
    return _a === 0 && (_a = vi()), _a;
  }
  function dv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Xe("" + l);
  }
  function hv(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function C1(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = dv(
        (e[Rl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Rl] || null) ? dv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
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
                if (_a !== 0) {
                  var i = f ? hv(e, f) : new FormData(e);
                  Cf(
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
                typeof n == "function" && (c.preventDefault(), i = f ? hv(e, f) : new FormData(e), Cf(
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
  for (var Yc = 0; Yc < es.length; Yc++) {
    var Qc = es[Yc], p1 = Qc.toLowerCase(), V1 = Qc[0].toUpperCase() + Qc.slice(1);
    ut(
      p1,
      "on" + V1
    );
  }
  ut(Pi, "onAnimationEnd"), ut(ls, "onAnimationIteration"), ut(ts, "onAnimationStart"), ut("dblclick", "onDoubleClick"), ut("focusin", "onFocus"), ut("focusout", "onBlur"), ut(f1, "onTransitionRun"), ut(c1, "onTransitionStart"), ut(i1, "onTransitionCancel"), ut(as, "onTransitionEnd"), La("onMouseEnter", ["mouseout", "mouseover"]), La("onMouseLeave", ["mouseout", "mouseover"]), La("onPointerEnter", ["pointerout", "pointerover"]), La("onPointerLeave", ["pointerout", "pointerover"]), ba(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ba(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ba("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ba(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), K1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye)
  );
  function yv(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, v = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (g) {
              vn(g);
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
              vn(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function Y(l, t) {
    var a = t[Fn];
    a === void 0 && (a = t[Fn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (mv(t, l, 2, !1), a.add(u));
  }
  function jc(l, t, a) {
    var u = 0;
    t && (u |= 4), mv(
      a,
      l,
      u,
      t
    );
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);
  function _c(l) {
    if (!l[Un]) {
      l[Un] = !0, bi.forEach(function(a) {
        a !== "selectionchange" && (K1.has(a) || jc(a, !1, l), jc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Un] || (t[Un] = !0, jc("selectionchange", !1, t));
    }
  }
  function mv(l, t, a, u) {
    switch (Xv(t)) {
      case 2:
        var e = gh;
        break;
      case 8:
        e = bh;
        break;
      default:
        e = Fc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !uf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Xc(l, t, a, u, e) {
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
            if (f = ga(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Hi(function() {
      var v = n, g = tf(a), o = [];
      l: {
        var y = us.get(l);
        if (y !== void 0) {
          var m = Ce, T = l;
          switch (l) {
            case "keypress":
              if (Ze(a) === 0) break l;
            case "keydown":
            case "keyup":
              m = Xd;
              break;
            case "focusin":
              T = "focus", m = cf;
              break;
            case "focusout":
              T = "blur", m = cf;
              break;
            case "beforeblur":
            case "afterblur":
              m = cf;
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
              m = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Ud;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = xd;
              break;
            case Pi:
            case ls:
            case ts:
              m = qd;
              break;
            case as:
              m = pd;
              break;
            case "scroll":
            case "scrollend":
              m = Dd;
              break;
            case "wheel":
              m = Kd;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Rd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Qi;
              break;
            case "toggle":
            case "beforetoggle":
              m = Jd;
          }
          var r = (t & 4) !== 0, tl = !r && (l === "scroll" || l === "scrollend"), d = r ? y !== null ? y + "Capture" : null : y;
          r = [];
          for (var s = v, h; s !== null; ) {
            var b = s;
            if (h = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || h === null || d === null || (b = Bu(s, d), b != null && r.push(
              me(s, b, h)
            )), tl) break;
            s = s.return;
          }
          0 < r.length && (y = new m(
            y,
            T,
            null,
            a,
            g
          ), o.push({ event: y, listeners: r }));
        }
      }
      if (!(t & 7)) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", y && a !== lf && (T = a.relatedTarget || a.fromElement) && (ga(T) || T[pa]))
            break l;
          if ((m || y) && (y = g.window === g ? g : (y = g.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (T = a.relatedTarget || a.toElement, m = v, T = T ? ga(T) : null, T !== null && (tl = O(T), r = T.tag, T !== tl || r !== 5 && r !== 27 && r !== 6) && (T = null)) : (m = null, T = v), m !== T)) {
            if (r = Bi, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (r = Qi, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), tl = m == null ? y : Nu(m), h = T == null ? y : Nu(T), y = new r(
              b,
              s + "leave",
              m,
              a,
              g
            ), y.target = tl, y.relatedTarget = h, b = null, ga(g) === v && (r = new r(
              d,
              s + "enter",
              T,
              a,
              g
            ), r.target = h, r.relatedTarget = tl, b = r), tl = b, m && T)
              t: {
                for (r = m, d = T, s = 0, h = r; h; h = Au(h))
                  s++;
                for (h = 0, b = d; b; b = Au(b))
                  h++;
                for (; 0 < s - h; )
                  r = Au(r), s--;
                for (; 0 < h - s; )
                  d = Au(d), h--;
                for (; s--; ) {
                  if (r === d || d !== null && r === d.alternate)
                    break t;
                  r = Au(r), d = Au(d);
                }
                r = null;
              }
            else r = null;
            m !== null && Sv(
              o,
              y,
              m,
              r,
              !1
            ), T !== null && tl !== null && Sv(
              o,
              tl,
              T,
              r,
              !0
            );
          }
        }
        l: {
          if (y = v ? Nu(v) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file")
            var E = pi;
          else if (xi(y))
            if (Vi)
              E = a1;
            else {
              E = l1;
              var R = Pd;
            }
          else
            m = y.nodeName, !m || m.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? v && Pn(v.elementType) && (E = pi) : E = t1;
          if (E && (E = E(l, v))) {
            Ci(
              o,
              E,
              a,
              g
            );
            break l;
          }
          R && R(l, y, v), l === "focusout" && v && y.type === "number" && v.memoizedProps.value != null && In(y, "number", y.value);
        }
        switch (R = v ? Nu(v) : window, l) {
          case "focusin":
            (xi(R) || R.contentEditable === "true") && ($a = R, mf = v, xu = null);
            break;
          case "focusout":
            xu = mf = $a = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, $i(o, a, g);
            break;
          case "selectionchange":
            if (n1) break;
          case "keydown":
          case "keyup":
            $i(o, a, g);
        }
        var D;
        if (vf)
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
          ka ? Gi(l, a) && (M = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (M = "onCompositionStart");
        M && (ji && a.locale !== "ko" && (ka || M !== "onCompositionStart" ? M === "onCompositionEnd" && ka && (D = Ri()) : (Ct = g, ef = "value" in Ct ? Ct.value : Ct.textContent, ka = !0)), R = On(v, M), 0 < R.length && (M = new Yi(
          M,
          l,
          null,
          a,
          g
        ), o.push({ event: M, listeners: R }), D ? M.data = D : (D = Zi(a), D !== null && (M.data = D)))), (D = Wd ? Fd(l, a) : kd(l, a)) && (M = On(v, "onBeforeInput"), 0 < M.length && (R = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), o.push({
          event: R,
          listeners: M
        }), R.data = D)), C1(
          o,
          l,
          v,
          a,
          g
        );
      }
      yv(o, t);
    });
  }
  function me(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function On(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Bu(l, a), e != null && u.unshift(
        me(l, e, n)
      ), e = Bu(l, t), e != null && u.push(
        me(l, e, n)
      )), l = l.return;
    }
    return u;
  }
  function Au(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Sv(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, v = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (i = v, e ? (v = Bu(a, n), v != null && f.unshift(
        me(a, v, i)
      )) : e || (v = Bu(a, n), v != null && f.push(
        me(a, v, i)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var L1 = /\r\n?/g, J1 = /\u0000|\uFFFD/g;
  function gv(l) {
    return (typeof l == "string" ? l : "" + l).replace(L1, `
`).replace(J1, "");
  }
  function bv(l, t) {
    return t = gv(t), gv(l) === t;
  }
  function rn() {
  }
  function V(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        Qe(l, "class", u);
        break;
      case "tabIndex":
        Qe(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qe(l, a, u);
        break;
      case "style":
        ri(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Qe(l, "data", u);
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
        u = Xe("" + u), l.setAttribute(a, u);
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
          typeof n == "function" && (a === "formAction" ? (t !== "input" && V(l, t, "name", e.name, e, null), V(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), V(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), V(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (V(l, t, "encType", e.encType, e, null), V(l, t, "method", e.method, e, null), V(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Xe("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = rn);
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
            throw Error(S(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(S(60));
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
        a = Xe("" + u), l.setAttributeNS(
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
        Y("beforetoggle", l), Y("toggle", l), Ye(l, "popover", u);
        break;
      case "xlinkActuate":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Ye(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ed.get(a) || a, Ye(l, a, u));
    }
  }
  function Gc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        ri(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(S(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(S(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && Y("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Y("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = rn);
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
        if (!oi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Rl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Ye(l, a, u);
          }
    }
  }
  function El(l, t, a) {
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
        Y("error", l), Y("load", l);
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
                  throw Error(S(137, t));
                default:
                  V(l, t, n, f, a, null);
              }
          }
        e && V(l, t, "srcSet", a.srcSet, a, null), u && V(l, t, "src", a.src, a, null);
        return;
      case "input":
        Y("invalid", l);
        var c = n = f = e = null, i = null, v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
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
                    throw Error(S(137, t));
                  break;
                default:
                  V(l, t, u, g, a, null);
              }
          }
        Di(
          l,
          n,
          c,
          i,
          v,
          f,
          e,
          !1
        ), je(l);
        return;
      case "select":
        Y("invalid", l), u = f = n = null;
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
                V(l, t, e, c, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        Y("invalid", l), n = e = u = null;
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
                if (c != null) throw Error(S(91));
                break;
              default:
                V(l, t, f, c, a, null);
            }
        Ui(l, u, e, n), je(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                V(l, t, i, u, a, null);
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
        for (u = 0; u < ye.length; u++)
          Y(ye[u], l);
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
        for (v in a)
          if (a.hasOwnProperty(v) && (u = a[v], u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(S(137, t));
              default:
                V(l, t, v, u, a, null);
            }
        return;
      default:
        if (Pn(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Gc(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && V(l, t, c, u, a, null));
  }
  function w1(l, t, a, u) {
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
        var e = null, n = null, f = null, c = null, i = null, v = null, g = null;
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
                u.hasOwnProperty(m) || V(l, t, m, null, u, o);
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
                v = m;
                break;
              case "defaultChecked":
                g = m;
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
                  throw Error(S(137, t));
                break;
              default:
                m !== o && V(
                  l,
                  t,
                  y,
                  m,
                  u,
                  o
                );
            }
        }
        $n(
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
        m = f = c = y = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                u.hasOwnProperty(n) || V(
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
                n !== i && V(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = c, a = f, u = m, y != null ? Ja(l, !!a, y, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
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
                V(l, t, c, null, u, e);
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
                if (e != null) throw Error(S(91));
                break;
              default:
                e !== n && V(l, t, f, e, u, n);
            }
        Mi(l, y, m);
        return;
      case "option":
        for (var T in a)
          if (y = a[T], a.hasOwnProperty(T) && y != null && !u.hasOwnProperty(T))
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                V(
                  l,
                  t,
                  T,
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
                V(
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
        for (var r in a)
          y = a[r], a.hasOwnProperty(r) && y != null && !u.hasOwnProperty(r) && V(l, t, r, null, u, y);
        for (v in u)
          if (y = u[v], m = a[v], u.hasOwnProperty(v) && y !== m && (y != null || m != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(S(137, t));
                break;
              default:
                V(
                  l,
                  t,
                  v,
                  y,
                  u,
                  m
                );
            }
        return;
      default:
        if (Pn(t)) {
          for (var tl in a)
            y = a[tl], a.hasOwnProperty(tl) && y !== void 0 && !u.hasOwnProperty(tl) && Gc(
              l,
              t,
              tl,
              void 0,
              u,
              y
            );
          for (g in u)
            y = u[g], m = a[g], !u.hasOwnProperty(g) || y === m || y === void 0 && m === void 0 || Gc(
              l,
              t,
              g,
              y,
              u,
              m
            );
          return;
        }
    }
    for (var d in a)
      y = a[d], a.hasOwnProperty(d) && y != null && !u.hasOwnProperty(d) && V(l, t, d, null, u, y);
    for (o in u)
      y = u[o], m = a[o], !u.hasOwnProperty(o) || y === m || y == null && m == null || V(l, t, o, y, u, m);
  }
  var Zc = null, xc = null;
  function qn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Av(l, t) {
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
  function Cc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pc = null;
  function W1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === pc ? !1 : (pc = l, !0) : (pc = null, !1);
  }
  var zv = typeof setTimeout == "function" ? setTimeout : void 0, F1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ev = typeof Promise == "function" ? Promise : void 0, k1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ev < "u" ? function(l) {
    return Ev.resolve(null).then(l).catch($1);
  } : zv;
  function $1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Vc(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (u === 0) {
            l.removeChild(e), Te(t);
            return;
          }
          u--;
        } else a !== "$" && a !== "$?" && a !== "$!" || u++;
      a = e;
    } while (a);
    Te(t);
  }
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(a), kn(a);
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
  function I1(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Ru])
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
      if (l = ft(l.nextSibling), l === null) break;
    }
    return null;
  }
  function P1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ft(l.nextSibling), l === null)) return null;
    return l;
  }
  function ft(l) {
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
  function Tv(l) {
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
  function Dv(l, t, a) {
    switch (t = qn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  var tt = /* @__PURE__ */ new Map(), Mv = /* @__PURE__ */ new Set();
  function Hn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var jt = j.d;
  j.d = {
    f: lh,
    r: th,
    D: ah,
    C: uh,
    L: eh,
    m: nh,
    X: ch,
    S: fh,
    M: ih
  };
  function lh() {
    var l = jt.f(), t = En();
    return l || t;
  }
  function th(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? $s(t) : jt.r(l);
  }
  var zu = typeof document > "u" ? null : document;
  function Uv(l, t, a) {
    var u = zu;
    if (u && typeof t == "string" && t) {
      var e = Ll(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Mv.has(e) || (Mv.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), El(t, "link", l), yl(t), u.head.appendChild(t)));
    }
  }
  function ah(l) {
    jt.D(l), Uv("dns-prefetch", l, null);
  }
  function uh(l, t) {
    jt.C(l, t), Uv("preconnect", l, t);
  }
  function eh(l, t, a) {
    jt.L(l, t, a);
    var u = zu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + Ll(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + Ll(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + Ll(
        a.imageSizes
      ) + '"]')) : e += '[href="' + Ll(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Tu(l);
      }
      tt.has(n) || (l = C(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), tt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(Se(n)) || t === "script" && u.querySelector(ge(n)) || (t = u.createElement("link"), El(t, "link", l), yl(t), u.head.appendChild(t)));
    }
  }
  function nh(l, t) {
    jt.m(l, t);
    var a = zu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + Ll(u) + '"][href="' + Ll(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Tu(l);
      }
      if (!tt.has(n) && (l = C({ rel: "modulepreload", href: l }, t), tt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ge(n)))
              return;
        }
        u = a.createElement("link"), El(u, "link", l), yl(u), a.head.appendChild(u);
      }
    }
  }
  function fh(l, t, a) {
    jt.S(l, t, a);
    var u = zu;
    if (u && l) {
      var e = Ka(u).hoistableStyles, n = Eu(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          Se(n)
        ))
          c.loading = 5;
        else {
          l = C(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = tt.get(n)) && Lc(l, a);
          var i = f = u.createElement("link");
          yl(i), El(i, "link", l), i._p = new Promise(function(v, g) {
            i.onload = v, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Rn(f, t, u);
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
  function ch(l, t) {
    jt.X(l, t);
    var a = zu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = Tu(l), n = u.get(e);
      n || (n = a.querySelector(ge(e)), n || (l = C({ src: l, async: !0 }, t), (t = tt.get(e)) && Jc(l, t), n = a.createElement("script"), yl(n), El(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function ih(l, t) {
    jt.M(l, t);
    var a = zu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = Tu(l), n = u.get(e);
      n || (n = a.querySelector(ge(e)), n || (l = C({ src: l, async: !0, type: "module" }, t), (t = tt.get(e)) && Jc(l, t), n = a.createElement("script"), yl(n), El(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Ov(l, t, a, u) {
    var e = (e = Gt.current) ? Hn(e) : null;
    if (!e) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Eu(a.href), a = Ka(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Eu(a.href);
          var n = Ka(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            Se(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), tt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, tt.set(l, a), n || sh(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(S(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(S(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Tu(a), a = Ka(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(S(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + Ll(l) + '"';
  }
  function Se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function rv(l) {
    return C({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function sh(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), El(t, "link", a), yl(t), l.head.appendChild(t));
  }
  function Tu(l) {
    return '[src="' + Ll(l) + '"]';
  }
  function ge(l) {
    return "script[async]" + l;
  }
  function qv(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + Ll(a.href) + '"]'
          );
          if (u)
            return t.instance = u, yl(u), u;
          var e = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), yl(u), El(u, "style", e), Rn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(
            Se(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, yl(n), n;
          u = rv(a), (e = tt.get(e)) && Lc(u, e), n = (l.ownerDocument || l).createElement("link"), yl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), El(n, "link", u), t.state.loading |= 4, Rn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Tu(a.src), (e = l.querySelector(
            ge(n)
          )) ? (t.instance = e, yl(e), e) : (u = a, (e = tt.get(n)) && (u = C({}, a), Jc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), yl(e), El(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(S(443, t.type));
      }
    else
      t.type === "stylesheet" && !(t.state.loading & 4) && (u = t.instance, t.state.loading |= 4, Rn(u, a.precedence, l));
    return t.instance;
  }
  function Rn(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Lc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Jc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Nn = null;
  function Hv(l, t, a) {
    if (Nn === null) {
      var u = /* @__PURE__ */ new Map(), e = Nn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Nn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Ru] || n[Dl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Rv(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function vh(l, t, a) {
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
  function Nv(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var be = null;
  function dh() {
  }
  function hh(l, t, a) {
    if (be === null) throw Error(S(475));
    var u = be;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && !(t.state.loading & 4)) {
      if (t.instance === null) {
        var e = Eu(a.href), n = l.querySelector(
          Se(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Bn.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, yl(n);
          return;
        }
        n = l.ownerDocument || l, a = rv(a), (e = tt.get(e)) && Lc(a, e), n = n.createElement("link"), yl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), El(n, "link", a), t.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && !(t.state.loading & 3) && (u.count++, t = Bn.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function yh() {
    if (be === null) throw Error(S(475));
    var l = be;
    return l.stylesheets && l.count === 0 && wc(l, l.stylesheets), 0 < l.count ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && wc(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Bn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) wc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Yn = null;
  function wc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yn = /* @__PURE__ */ new Map(), t.forEach(mh, l), Yn = null, Bn.call(l));
  }
  function mh(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Yn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Yn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Bn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Tl,
    Provider: null,
    Consumer: null,
    _currentValue: Vl,
    _currentValue2: Vl,
    _threadCount: 0
  };
  function Sh(l, t, a, u, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wn(0), this.hiddenUpdates = Wn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Bv(l, t, a, u, e, n, f, c, i, v, g, o) {
    return l = new Sh(
      l,
      t,
      a,
      f,
      c,
      i,
      v,
      o
    ), t = 1, n === !0 && (t |= 24), n = Pl(3, null, null, t), l.current = n, n.stateNode = l, t = Uf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, nc(n), l;
  }
  function Yv(l) {
    return l ? (l = lu, l) : lu;
  }
  function Qv(l, t, a, u, e, n) {
    e = Yv(e), u.context === null ? u.context = e : u.pendingContext = e, u = Ft(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = kt(l, u, t), a !== null && (rl(a, l, t), te(a, l, t));
  }
  function jv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Wc(l, t) {
    jv(l, t), (l = l.alternate) && jv(l, t);
  }
  function _v(l) {
    if (l.tag === 13) {
      var t = pt(l, 67108864);
      t !== null && rl(t, l, 67108864), Wc(l, 67108864);
    }
  }
  var Qn = !0;
  function gh(l, t, a, u) {
    var e = U.T;
    U.T = null;
    var n = j.p;
    try {
      j.p = 2, Fc(l, t, a, u);
    } finally {
      j.p = n, U.T = e;
    }
  }
  function bh(l, t, a, u) {
    var e = U.T;
    U.T = null;
    var n = j.p;
    try {
      j.p = 8, Fc(l, t, a, u);
    } finally {
      j.p = n, U.T = e;
    }
  }
  function Fc(l, t, a, u) {
    if (Qn) {
      var e = kc(u);
      if (e === null)
        Xc(
          l,
          t,
          u,
          jn,
          a
        ), Gv(l, u);
      else if (Ah(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (Gv(l, u), t & 4 && -1 < oh.indexOf(l)) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Sa(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - _l(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    mt(n), !(k & 6) && (on = st() + 500, he(0));
                  }
                }
                break;
              case 13:
                c = pt(n, 2), c !== null && rl(c, n, 2), En(), Wc(n, 2);
            }
          if (n = kc(u), n === null && Xc(
            l,
            t,
            u,
            jn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Xc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function kc(l) {
    return l = tf(l), $c(l);
  }
  var jn = null;
  function $c(l) {
    if (jn = null, l = ga(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = w(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return jn = l, null;
  }
  function Xv(l) {
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
        switch (ud()) {
          case ci:
            return 2;
          case ii:
            return 8;
          case He:
          case ed:
            return 32;
          case si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ic = !1, ua = null, ea = null, na = null, Ae = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), fa = [], oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        Ae.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ze.delete(t.pointerId);
    }
  }
  function Ee(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Va(t), t !== null && _v(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Ah(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ua = Ee(
          ua,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ea = Ee(
          ea,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return na = Ee(
          na,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Ae.set(
          n,
          Ee(
            Ae.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ze.set(
          n,
          Ee(
            ze.get(n) || null,
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
  function Zv(l) {
    var t = ga(l.target);
    if (t !== null) {
      var a = O(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = w(a), t !== null) {
            l.blockedOn = t, yd(l.priority, function() {
              if (a.tag === 13) {
                var u = Cl(), e = pt(a, u);
                e !== null && rl(e, a, u), Wc(a, u);
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
  function _n(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = kc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        lf = u, a.target.dispatchEvent(u), lf = null;
      } else
        return t = Va(a), t !== null && _v(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function xv(l, t, a) {
    _n(l) && a.delete(t);
  }
  function zh() {
    Ic = !1, ua !== null && _n(ua) && (ua = null), ea !== null && _n(ea) && (ea = null), na !== null && _n(na) && (na = null), Ae.forEach(xv), ze.forEach(xv);
  }
  function Xn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Ic || (Ic = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      zh
    )));
  }
  var Gn = null;
  function Cv(l) {
    Gn !== l && (Gn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if ($c(u || a) === null)
              continue;
            break;
          }
          var n = Va(a);
          n !== null && (l.splice(t, 3), t -= 3, Cf(
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
  function Te(l) {
    function t(i) {
      return Xn(i, l);
    }
    ua !== null && Xn(ua, l), ea !== null && Xn(ea, l), na !== null && Xn(na, l), Ae.forEach(t), ze.forEach(t);
    for (var a = 0; a < fa.length; a++) {
      var u = fa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < fa.length && (a = fa[0], a.blockedOn === null); )
      Zv(a), a.blockedOn === null && fa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Rl] || null;
        if (typeof n == "function")
          f || Cv(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Rl] || null)
              c = f.formAction;
            else if ($c(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), Cv(a);
        }
      }
  }
  function Pc(l) {
    this._internalRoot = l;
  }
  Zn.prototype.render = Pc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var a = t.current, u = Cl();
    Qv(a, u, l, t, null, null);
  }, Zn.prototype.unmount = Pc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      l.tag === 0 && bu(), Qv(l.current, 2, null, l, null, null), En(), t[pa] = null;
    }
  };
  function Zn(l) {
    this._internalRoot = l;
  }
  Zn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Si();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < fa.length && t !== 0 && t < fa[a].priority; a++) ;
      fa.splice(a, 0, l), a === 0 && Zv(l);
    }
  };
  var pv = _.version;
  if (pv !== "19.0.0")
    throw Error(
      S(
        527,
        pv,
        "19.0.0"
      )
    );
  j.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = Za(t), l = l !== null ? ma(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Eh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    findFiberByHostInstance: ga,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xn.isDisabled && xn.supportsFiber)
      try {
        ru = xn.inject(
          Eh
        ), jl = xn;
      } catch {
      }
  }
  return Me.createRoot = function(l, t) {
    if (!$(l)) throw Error(S(299));
    var a = !1, u = "", e = n0, n = f0, f = c0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Bv(
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
    ), l[pa] = t.current, _c(
      l.nodeType === 8 ? l.parentNode : l
    ), new Pc(t);
  }, Me.hydrateRoot = function(l, t, a) {
    if (!$(l)) throw Error(S(299));
    var u = !1, e = "", n = n0, f = f0, c = c0, i = null, v = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = Bv(
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
      v
    ), t.context = Yv(null), a = t.current, u = Cl(), e = Ft(u), e.callback = null, kt(a, e, u), t.current.lanes = u, Hu(t, u), mt(t), l[pa] = t.current, _c(l), new Zn(t);
  }, Me.version = "19.0.0", Me;
}
var Fv;
function _h() {
  if (Fv) return ti.exports;
  Fv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (_) {
        console.error(_);
      }
  }
  return A(), ti.exports = jh(), ti.exports;
}
var Xh = _h();
const Gh = /* @__PURE__ */ Oh(Xh), Zh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", xh = ({ onQuestionClick: A }) => {
  const _ = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ B.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ B.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ B.jsx("ul", { children: _.map((x, S) => /* @__PURE__ */ B.jsx("li", { onClick: () => A(x), children: x }, S)) })
  ] });
}, Ch = ({ message: A }) => /* @__PURE__ */ B.jsx("div", { className: `message ${A.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ B.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ B.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: A.text } }) }) }), ld = () => {
  const [A, _] = Cn([]), [x, S] = Cn(""), [$, ql] = Cn(!1), [Ul, Yl] = Cn(!0), I = Mh(null);
  Vv(() => {
    Ql();
  }, []);
  const Ql = async () => {
    try {
      const X = await getChatHistory();
      if (X.STATUS) {
        const Hl = X.RSP.map((ol) => ({
          id: ol.id,
          text: ol.message,
          isUser: ol.role === "user",
          status: "sent",
          timestamp: new Date(ol.created_at)
        }));
        _(Hl);
      }
    } catch (X) {
      console.error("Error cargando historial:", X);
    } finally {
      Yl(!1);
    }
  }, ia = () => {
    if (I.current) {
      const { scrollHeight: X } = I.current;
      I.current.scrollTo({
        top: X,
        behavior: "smooth"
      });
    }
  };
  Vv(() => {
    ia();
  }, [A, $]);
  const bl = async (X = x) => {
    if (X.trim() === "") return;
    const Hl = {
      id: Date.now().toString(),
      text: X,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    _((ol) => [...ol, Hl]), S(""), ql(!0);
    try {
      const ol = await sendMessageApi({ message: X });
      if (ol.STATUS) {
        const pl = {
          id: (Date.now() + 1).toString(),
          text: ol.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        _((sl) => [...sl, pl]);
      } else {
        S(X);
        const pl = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        _((sl) => [...sl, pl]);
      }
    } catch {
      _(
        (pl) => pl.map(
          (sl) => sl.id === Hl.id ? { ...sl, status: "error" } : sl
        )
      );
    } finally {
      ql(!1);
    }
  }, al = (X) => {
    X.preventDefault(), bl();
  }, Tl = (X) => {
    bl(X);
  };
  return /* @__PURE__ */ B.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("img", { src: Zh, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ B.jsx("div", { ref: I, className: "messages-container", children: Ul ? /* @__PURE__ */ B.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ B.jsx("div", { className: "dot" }),
        /* @__PURE__ */ B.jsx("div", { className: "dot" }),
        /* @__PURE__ */ B.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ B.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      A.length === 0 && /* @__PURE__ */ B.jsx(xh, { onQuestionClick: Tl }),
      A.map((X) => /* @__PURE__ */ B.jsx(Ch, { message: X }, X.id)),
      $ && /* @__PURE__ */ B.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ B.jsx("span", {}),
        /* @__PURE__ */ B.jsx("span", {}),
        /* @__PURE__ */ B.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ B.jsxs("form", { onSubmit: al, className: "message-input", children: [
      /* @__PURE__ */ B.jsx(
        "input",
        {
          type: "text",
          value: x,
          onChange: (X) => S(X.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: $ || Ul,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ B.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: $ || Ul || x.trim() === "",
          children: /* @__PURE__ */ B.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
};
window.ChatBot = (A) => {
  const _ = document.getElementById(A);
  _ && Gh.createRoot(_).render(/* @__PURE__ */ B.jsx(ld, {}));
};
function Kh() {
  return /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ B.jsx(ld, {}) }) });
}
export {
  Kh as default
};
