import Ag, { useState as Fv, useRef as BS, useEffect as vb } from "react";
import Db from "react-dom";
function qS(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Iv = { exports: {} }, Iy = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pb;
function YS() {
  if (pb) return Iy;
  pb = 1;
  var B = Symbol.for("react.transitional.element"), se = Symbol.for("react.fragment");
  function ve(x, Me, At) {
    var Rt = null;
    if (At !== void 0 && (Rt = "" + At), Me.key !== void 0 && (Rt = "" + Me.key), "key" in Me) {
      At = {};
      for (var vt in Me)
        vt !== "key" && (At[vt] = Me[vt]);
    } else At = Me;
    return Me = At.ref, {
      $$typeof: B,
      type: x,
      key: Rt,
      ref: Me !== void 0 ? Me : null,
      props: At
    };
  }
  return Iy.Fragment = se, Iy.jsx = ve, Iy.jsxs = ve, Iy;
}
var Py = {}, gb;
function NS() {
  if (gb) return Py;
  gb = 1;
  var B = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return B.NODE_ENV !== "production" && function() {
    function se(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === W ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case ka:
          return "Fragment";
        case Xt:
          return "Portal";
        case ne:
          return "Profiler";
        case Ha:
          return "StrictMode";
        case ml:
          return "Suspense";
        case yl:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case tl:
            return (T.displayName || "Context") + ".Provider";
          case ze:
            return (T._context.displayName || "Context") + ".Consumer";
          case ea:
            var P = T.render;
            return T = T.displayName, T || (T = P.displayName || P.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case $:
            return P = T.displayName || null, P !== null ? P : se(T.type) || "Memo";
          case K:
            P = T._payload, T = T._init;
            try {
              return se(T(P));
            } catch {
            }
        }
      return null;
    }
    function ve(T) {
      return "" + T;
    }
    function x(T) {
      try {
        ve(T);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var k = P.error, Be = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return k.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Be
        ), ve(T);
      }
    }
    function Me() {
    }
    function At() {
      if (Ie === 0) {
        Ml = console.log, Xl = console.info, Ql = console.warn, pt = console.error, $e = console.group, Ul = console.groupCollapsed, Ca = console.groupEnd;
        var T = {
          configurable: !0,
          enumerable: !0,
          value: Me,
          writable: !0
        };
        Object.defineProperties(console, {
          info: T,
          log: T,
          warn: T,
          error: T,
          group: T,
          groupCollapsed: T,
          groupEnd: T
        });
      }
      Ie++;
    }
    function Rt() {
      if (Ie--, Ie === 0) {
        var T = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: He({}, T, { value: Ml }),
          info: He({}, T, { value: Xl }),
          warn: He({}, T, { value: Ql }),
          error: He({}, T, { value: pt }),
          group: He({}, T, { value: $e }),
          groupCollapsed: He({}, T, { value: Ul }),
          groupEnd: He({}, T, { value: Ca })
        });
      }
      0 > Ie && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function vt(T) {
      if (xe === void 0)
        try {
          throw Error();
        } catch (k) {
          var P = k.stack.trim().match(/\n( *(at )?)/);
          xe = P && P[1] || "", iu = -1 < k.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < k.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + xe + T + iu;
    }
    function be(T, P) {
      if (!T || $a) return "";
      var k = Tn.get(T);
      if (k !== void 0) return k;
      $a = !0, k = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Be = null;
      Be = ie.H, ie.H = null, At();
      try {
        var kt = {
          DetermineComponentFrameRoot: function() {
            try {
              if (P) {
                var gt = function() {
                  throw Error();
                };
                if (Object.defineProperty(gt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(gt, []);
                  } catch (ll) {
                    var Rn = ll;
                  }
                  Reflect.construct(T, [], gt);
                } else {
                  try {
                    gt.call();
                  } catch (ll) {
                    Rn = ll;
                  }
                  T.call(gt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ll) {
                  Rn = ll;
                }
                (gt = T()) && typeof gt.catch == "function" && gt.catch(function() {
                });
              }
            } catch (ll) {
              if (ll && Rn && typeof ll.stack == "string")
                return [ll.stack, Rn.stack];
            }
            return [null, null];
          }
        };
        kt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var it = Object.getOwnPropertyDescriptor(
          kt.DetermineComponentFrameRoot,
          "name"
        );
        it && it.configurable && Object.defineProperty(
          kt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var ce = kt.DetermineComponentFrameRoot(), ta = ce[0], va = ce[1];
        if (ta && va) {
          var vl = ta.split(`
`), An = va.split(`
`);
          for (ce = it = 0; it < vl.length && !vl[it].includes(
            "DetermineComponentFrameRoot"
          ); )
            it++;
          for (; ce < An.length && !An[ce].includes(
            "DetermineComponentFrameRoot"
          ); )
            ce++;
          if (it === vl.length || ce === An.length)
            for (it = vl.length - 1, ce = An.length - 1; 1 <= it && 0 <= ce && vl[it] !== An[ce]; )
              ce--;
          for (; 1 <= it && 0 <= ce; it--, ce--)
            if (vl[it] !== An[ce]) {
              if (it !== 1 || ce !== 1)
                do
                  if (it--, ce--, 0 > ce || vl[it] !== An[ce]) {
                    var xa = `
` + vl[it].replace(
                      " at new ",
                      " at "
                    );
                    return T.displayName && xa.includes("<anonymous>") && (xa = xa.replace("<anonymous>", T.displayName)), typeof T == "function" && Tn.set(T, xa), xa;
                  }
                while (1 <= it && 0 <= ce);
              break;
            }
        }
      } finally {
        $a = !1, ie.H = Be, Rt(), Error.prepareStackTrace = k;
      }
      return vl = (vl = T ? T.displayName || T.name : "") ? vt(vl) : "", typeof T == "function" && Tn.set(T, vl), vl;
    }
    function Z(T) {
      if (T == null) return "";
      if (typeof T == "function") {
        var P = T.prototype;
        return be(
          T,
          !(!P || !P.isReactComponent)
        );
      }
      if (typeof T == "string") return vt(T);
      switch (T) {
        case ml:
          return vt("Suspense");
        case yl:
          return vt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case ea:
            return T = be(T.render, !1), T;
          case $:
            return Z(T.type);
          case K:
            P = T._payload, T = T._init;
            try {
              return Z(T(P));
            } catch {
            }
        }
      return "";
    }
    function hl() {
      var T = ie.A;
      return T === null ? null : T.getOwner();
    }
    function zt(T) {
      if (Ue.call(T, "key")) {
        var P = Object.getOwnPropertyDescriptor(T, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function ut(T, P) {
      function k() {
        We || (We = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: k,
        configurable: !0
      });
    }
    function lt() {
      var T = se(this.type);
      return Pc[T] || (Pc[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function Ne(T, P, k, Be, kt, it) {
      return k = it.ref, T = {
        $$typeof: le,
        type: T,
        key: P,
        props: it,
        _owner: kt
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: lt
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function tt(T, P, k, Be, kt, it) {
      if (typeof T == "string" || typeof T == "function" || T === ka || T === ne || T === Ha || T === ml || T === yl || T === w || typeof T == "object" && T !== null && (T.$$typeof === K || T.$$typeof === $ || T.$$typeof === tl || T.$$typeof === ze || T.$$typeof === ea || T.$$typeof === Se || T.getModuleId !== void 0)) {
        var ce = P.children;
        if (ce !== void 0)
          if (Be)
            if (fe(ce)) {
              for (Be = 0; Be < ce.length; Be++)
                Fe(ce[Be], T);
              Object.freeze && Object.freeze(ce);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else Fe(ce, T);
      } else
        ce = "", (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), T === null ? Be = "null" : fe(T) ? Be = "array" : T !== void 0 && T.$$typeof === le ? (Be = "<" + (se(T.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof T, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Be,
          ce
        );
      if (Ue.call(P, "key")) {
        ce = se(T);
        var ta = Object.keys(P).filter(function(vl) {
          return vl !== "key";
        });
        Be = 0 < ta.length ? "{key: someKey, " + ta.join(": ..., ") + ": ...}" : "{key: someKey}", Qi[ce + Be] || (ta = 0 < ta.length ? "{" + ta.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Be,
          ce,
          ta,
          ce
        ), Qi[ce + Be] = !0);
      }
      if (ce = null, k !== void 0 && (x(k), ce = "" + k), zt(P) && (x(P.key), ce = "" + P.key), "key" in P) {
        k = {};
        for (var va in P)
          va !== "key" && (k[va] = P[va]);
      } else k = P;
      return ce && ut(
        k,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), Ne(T, ce, it, kt, hl(), k);
    }
    function Fe(T, P) {
      if (typeof T == "object" && T && T.$$typeof !== Af) {
        if (fe(T))
          for (var k = 0; k < T.length; k++) {
            var Be = T[k];
            wt(Be) && pe(Be, P);
          }
        else if (wt(T))
          T._store && (T._store.validated = 1);
        else if (T === null || typeof T != "object" ? k = null : (k = L && T[L] || T["@@iterator"], k = typeof k == "function" ? k : null), typeof k == "function" && k !== T.entries && (k = k.call(T), k !== T))
          for (; !(T = k.next()).done; )
            wt(T.value) && pe(T.value, P);
      }
    }
    function wt(T) {
      return typeof T == "object" && T !== null && T.$$typeof === le;
    }
    function pe(T, P) {
      if (T._store && !T._store.validated && T.key == null && (T._store.validated = 1, P = re(P), !En[P])) {
        En[P] = !0;
        var k = "";
        T && T._owner != null && T._owner !== hl() && (k = null, typeof T._owner.tag == "number" ? k = se(T._owner.type) : typeof T._owner.name == "string" && (k = T._owner.name), k = " It was passed a child from " + k + ".");
        var Be = ie.getCurrentStack;
        ie.getCurrentStack = function() {
          var kt = Z(T.type);
          return Be && (kt += Be() || ""), kt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          P,
          k
        ), ie.getCurrentStack = Be;
      }
    }
    function re(T) {
      var P = "", k = hl();
      return k && (k = se(k.type)) && (P = `

Check the render method of \`` + k + "`."), P || (T = se(T)) && (P = `

Check the top-level render call using <` + T + ">."), P;
    }
    var ya = Ag, le = Symbol.for("react.transitional.element"), Xt = Symbol.for("react.portal"), ka = Symbol.for("react.fragment"), Ha = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ze = Symbol.for("react.consumer"), tl = Symbol.for("react.context"), ea = Symbol.for("react.forward_ref"), ml = Symbol.for("react.suspense"), yl = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), L = Symbol.iterator, W = Symbol.for("react.client.reference"), ie = ya.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, He = Object.assign, Se = Symbol.for("react.client.reference"), fe = Array.isArray, Ie = 0, Ml, Xl, Ql, pt, $e, Ul, Ca;
    Me.__reactDisabledLog = !0;
    var xe, iu, $a = !1, Tn = new (typeof WeakMap == "function" ? WeakMap : Map)(), Af = Symbol.for("react.client.reference"), We, Pc = {}, Qi = {}, En = {};
    Py.Fragment = ka, Py.jsx = function(T, P, k, Be, kt) {
      return tt(T, P, k, !1, Be, kt);
    }, Py.jsxs = function(T, P, k, Be, kt) {
      return tt(T, P, k, !0, Be, kt);
    };
  }(), Py;
}
var bb;
function jS() {
  if (bb) return Iv.exports;
  bb = 1;
  var B = {};
  return B.NODE_ENV === "production" ? Iv.exports = YS() : Iv.exports = NS(), Iv.exports;
}
var Qe = jS(), Pv = { exports: {} };
function VS(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Ob = { exports: {} }, el = Ob.exports = {}, wi, Xi;
function Tg() {
  throw new Error("setTimeout has not been defined");
}
function Eg() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? wi = setTimeout : wi = Tg;
  } catch {
    wi = Tg;
  }
  try {
    typeof clearTimeout == "function" ? Xi = clearTimeout : Xi = Eg;
  } catch {
    Xi = Eg;
  }
})();
function Mb(B) {
  if (wi === setTimeout)
    return setTimeout(B, 0);
  if ((wi === Tg || !wi) && setTimeout)
    return wi = setTimeout, setTimeout(B, 0);
  try {
    return wi(B, 0);
  } catch {
    try {
      return wi.call(null, B, 0);
    } catch {
      return wi.call(this, B, 0);
    }
  }
}
function GS(B) {
  if (Xi === clearTimeout)
    return clearTimeout(B);
  if ((Xi === Eg || !Xi) && clearTimeout)
    return Xi = clearTimeout, clearTimeout(B);
  try {
    return Xi(B);
  } catch {
    try {
      return Xi.call(null, B);
    } catch {
      return Xi.call(this, B);
    }
  }
}
var Fc = [], Hh = !1, rr, tp = -1;
function wS() {
  !Hh || !rr || (Hh = !1, rr.length ? Fc = rr.concat(Fc) : tp = -1, Fc.length && Ub());
}
function Ub() {
  if (!Hh) {
    var B = Mb(wS);
    Hh = !0;
    for (var se = Fc.length; se; ) {
      for (rr = Fc, Fc = []; ++tp < se; )
        rr && rr[tp].run();
      tp = -1, se = Fc.length;
    }
    rr = null, Hh = !1, GS(B);
  }
}
el.nextTick = function(B) {
  var se = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var ve = 1; ve < arguments.length; ve++)
      se[ve - 1] = arguments[ve];
  Fc.push(new Hb(B, se)), Fc.length === 1 && !Hh && Mb(Ub);
};
function Hb(B, se) {
  this.fun = B, this.array = se;
}
Hb.prototype.run = function() {
  this.fun.apply(null, this.array);
};
el.title = "browser";
el.browser = !0;
el.env = {};
el.argv = [];
el.version = "";
el.versions = {};
function Ic() {
}
el.on = Ic;
el.addListener = Ic;
el.once = Ic;
el.off = Ic;
el.removeListener = Ic;
el.removeAllListeners = Ic;
el.emit = Ic;
el.prependListener = Ic;
el.prependOnceListener = Ic;
el.listeners = function(B) {
  return [];
};
el.binding = function(B) {
  throw new Error("process.binding is not supported");
};
el.cwd = function() {
  return "/";
};
el.chdir = function(B) {
  throw new Error("process.chdir is not supported");
};
el.umask = function() {
  return 0;
};
var XS = Ob.exports;
const Ch = /* @__PURE__ */ VS(XS);
var e0 = {}, ep = { exports: {} }, bg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sb;
function QS() {
  return Sb || (Sb = 1, function(B) {
    function se(K, w) {
      var L = K.length;
      K.push(w);
      e: for (; 0 < L; ) {
        var W = L - 1 >>> 1, ie = K[W];
        if (0 < Me(ie, w))
          K[W] = w, K[L] = ie, L = W;
        else break e;
      }
    }
    function ve(K) {
      return K.length === 0 ? null : K[0];
    }
    function x(K) {
      if (K.length === 0) return null;
      var w = K[0], L = K.pop();
      if (L !== w) {
        K[0] = L;
        e: for (var W = 0, ie = K.length, Ue = ie >>> 1; W < Ue; ) {
          var He = 2 * (W + 1) - 1, Se = K[He], fe = He + 1, Ie = K[fe];
          if (0 > Me(Se, L))
            fe < ie && 0 > Me(Ie, Se) ? (K[W] = Ie, K[fe] = L, W = fe) : (K[W] = Se, K[He] = L, W = He);
          else if (fe < ie && 0 > Me(Ie, L))
            K[W] = Ie, K[fe] = L, W = fe;
          else break e;
        }
      }
      return w;
    }
    function Me(K, w) {
      var L = K.sortIndex - w.sortIndex;
      return L !== 0 ? L : K.id - w.id;
    }
    if (B.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var At = performance;
      B.unstable_now = function() {
        return At.now();
      };
    } else {
      var Rt = Date, vt = Rt.now();
      B.unstable_now = function() {
        return Rt.now() - vt;
      };
    }
    var be = [], Z = [], hl = 1, zt = null, ut = 3, lt = !1, Ne = !1, tt = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, wt = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
    function re(K) {
      for (var w = ve(Z); w !== null; ) {
        if (w.callback === null) x(Z);
        else if (w.startTime <= K)
          x(Z), w.sortIndex = w.expirationTime, se(be, w);
        else break;
        w = ve(Z);
      }
    }
    function ya(K) {
      if (tt = !1, re(K), !Ne)
        if (ve(be) !== null)
          Ne = !0, yl();
        else {
          var w = ve(Z);
          w !== null && $(ya, w.startTime - K);
        }
    }
    var le = !1, Xt = -1, ka = 5, Ha = -1;
    function ne() {
      return !(B.unstable_now() - Ha < ka);
    }
    function ze() {
      if (le) {
        var K = B.unstable_now();
        Ha = K;
        var w = !0;
        try {
          e: {
            Ne = !1, tt && (tt = !1, wt(Xt), Xt = -1), lt = !0;
            var L = ut;
            try {
              t: {
                for (re(K), zt = ve(be); zt !== null && !(zt.expirationTime > K && ne()); ) {
                  var W = zt.callback;
                  if (typeof W == "function") {
                    zt.callback = null, ut = zt.priorityLevel;
                    var ie = W(
                      zt.expirationTime <= K
                    );
                    if (K = B.unstable_now(), typeof ie == "function") {
                      zt.callback = ie, re(K), w = !0;
                      break t;
                    }
                    zt === ve(be) && x(be), re(K);
                  } else x(be);
                  zt = ve(be);
                }
                if (zt !== null) w = !0;
                else {
                  var Ue = ve(Z);
                  Ue !== null && $(
                    ya,
                    Ue.startTime - K
                  ), w = !1;
                }
              }
              break e;
            } finally {
              zt = null, ut = L, lt = !1;
            }
            w = void 0;
          }
        } finally {
          w ? tl() : le = !1;
        }
      }
    }
    var tl;
    if (typeof pe == "function")
      tl = function() {
        pe(ze);
      };
    else if (typeof MessageChannel < "u") {
      var ea = new MessageChannel(), ml = ea.port2;
      ea.port1.onmessage = ze, tl = function() {
        ml.postMessage(null);
      };
    } else
      tl = function() {
        Fe(ze, 0);
      };
    function yl() {
      le || (le = !0, tl());
    }
    function $(K, w) {
      Xt = Fe(function() {
        K(B.unstable_now());
      }, w);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, B.unstable_continueExecution = function() {
      Ne || lt || (Ne = !0, yl());
    }, B.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ka = 0 < K ? Math.floor(1e3 / K) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return ut;
    }, B.unstable_getFirstCallbackNode = function() {
      return ve(be);
    }, B.unstable_next = function(K) {
      switch (ut) {
        case 1:
        case 2:
        case 3:
          var w = 3;
          break;
        default:
          w = ut;
      }
      var L = ut;
      ut = w;
      try {
        return K();
      } finally {
        ut = L;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(K, w) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var L = ut;
      ut = K;
      try {
        return w();
      } finally {
        ut = L;
      }
    }, B.unstable_scheduleCallback = function(K, w, L) {
      var W = B.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, K) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return ie = L + ie, K = {
        id: hl++,
        callback: w,
        priorityLevel: K,
        startTime: L,
        expirationTime: ie,
        sortIndex: -1
      }, L > W ? (K.sortIndex = L, se(Z, K), ve(be) === null && K === ve(Z) && (tt ? (wt(Xt), Xt = -1) : tt = !0, $(ya, L - W))) : (K.sortIndex = ie, se(be, K), Ne || lt || (Ne = !0, yl())), K;
    }, B.unstable_shouldYield = ne, B.unstable_wrapCallback = function(K) {
      var w = ut;
      return function() {
        var L = ut;
        ut = w;
        try {
          return K.apply(this, arguments);
        } finally {
          ut = L;
        }
      };
    };
  }(bg)), bg;
}
var Sg = {}, Tb;
function LS() {
  return Tb || (Tb = 1, function(B) {
    var se = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    se.NODE_ENV !== "production" && function() {
      function ve() {
        if (ze) {
          var w = B.unstable_now();
          ml = w;
          var L = !0;
          try {
            e: {
              le = !1, Xt && (Xt = !1, Ha(tl), tl = -1), ya = !0;
              var W = re;
              try {
                t: {
                  for (vt(w), pe = Me(tt); pe !== null && !(pe.expirationTime > w && Z()); ) {
                    var ie = pe.callback;
                    if (typeof ie == "function") {
                      pe.callback = null, re = pe.priorityLevel;
                      var Ue = ie(
                        pe.expirationTime <= w
                      );
                      if (w = B.unstable_now(), typeof Ue == "function") {
                        pe.callback = Ue, vt(w), L = !0;
                        break t;
                      }
                      pe === Me(tt) && At(tt), vt(w);
                    } else At(tt);
                    pe = Me(tt);
                  }
                  if (pe !== null) L = !0;
                  else {
                    var He = Me(Fe);
                    He !== null && zt(
                      be,
                      He.startTime - w
                    ), L = !1;
                  }
                }
                break e;
              } finally {
                pe = null, re = W, ya = !1;
              }
              L = void 0;
            }
          } finally {
            L ? yl() : ze = !1;
          }
        }
      }
      function x(w, L) {
        var W = w.length;
        w.push(L);
        e: for (; 0 < W; ) {
          var ie = W - 1 >>> 1, Ue = w[ie];
          if (0 < Rt(Ue, L))
            w[ie] = L, w[W] = Ue, W = ie;
          else break e;
        }
      }
      function Me(w) {
        return w.length === 0 ? null : w[0];
      }
      function At(w) {
        if (w.length === 0) return null;
        var L = w[0], W = w.pop();
        if (W !== L) {
          w[0] = W;
          e: for (var ie = 0, Ue = w.length, He = Ue >>> 1; ie < He; ) {
            var Se = 2 * (ie + 1) - 1, fe = w[Se], Ie = Se + 1, Ml = w[Ie];
            if (0 > Rt(fe, W))
              Ie < Ue && 0 > Rt(Ml, fe) ? (w[ie] = Ml, w[Ie] = W, ie = Ie) : (w[ie] = fe, w[Se] = W, ie = Se);
            else if (Ie < Ue && 0 > Rt(Ml, W))
              w[ie] = Ml, w[Ie] = W, ie = Ie;
            else break e;
          }
        }
        return L;
      }
      function Rt(w, L) {
        var W = w.sortIndex - L.sortIndex;
        return W !== 0 ? W : w.id - L.id;
      }
      function vt(w) {
        for (var L = Me(Fe); L !== null; ) {
          if (L.callback === null) At(Fe);
          else if (L.startTime <= w)
            At(Fe), L.sortIndex = L.expirationTime, x(tt, L);
          else break;
          L = Me(Fe);
        }
      }
      function be(w) {
        if (Xt = !1, vt(w), !le)
          if (Me(tt) !== null)
            le = !0, hl();
          else {
            var L = Me(Fe);
            L !== null && zt(
              be,
              L.startTime - w
            );
          }
      }
      function Z() {
        return !(B.unstable_now() - ml < ea);
      }
      function hl() {
        ze || (ze = !0, yl());
      }
      function zt(w, L) {
        tl = ka(function() {
          w(B.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), B.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ut = performance;
        B.unstable_now = function() {
          return ut.now();
        };
      } else {
        var lt = Date, Ne = lt.now();
        B.unstable_now = function() {
          return lt.now() - Ne;
        };
      }
      var tt = [], Fe = [], wt = 1, pe = null, re = 3, ya = !1, le = !1, Xt = !1, ka = typeof setTimeout == "function" ? setTimeout : null, Ha = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, ze = !1, tl = -1, ea = 5, ml = -1;
      if (typeof ne == "function")
        var yl = function() {
          ne(ve);
        };
      else if (typeof MessageChannel < "u") {
        var $ = new MessageChannel(), K = $.port2;
        $.port1.onmessage = ve, yl = function() {
          K.postMessage(null);
        };
      } else
        yl = function() {
          ka(ve, 0);
        };
      B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(w) {
        w.callback = null;
      }, B.unstable_continueExecution = function() {
        le || ya || (le = !0, hl());
      }, B.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : ea = 0 < w ? Math.floor(1e3 / w) : 5;
      }, B.unstable_getCurrentPriorityLevel = function() {
        return re;
      }, B.unstable_getFirstCallbackNode = function() {
        return Me(tt);
      }, B.unstable_next = function(w) {
        switch (re) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = re;
        }
        var W = re;
        re = L;
        try {
          return w();
        } finally {
          re = W;
        }
      }, B.unstable_pauseExecution = function() {
      }, B.unstable_requestPaint = function() {
      }, B.unstable_runWithPriority = function(w, L) {
        switch (w) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            w = 3;
        }
        var W = re;
        re = w;
        try {
          return L();
        } finally {
          re = W;
        }
      }, B.unstable_scheduleCallback = function(w, L, W) {
        var ie = B.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ie + W : ie) : W = ie, w) {
          case 1:
            var Ue = -1;
            break;
          case 2:
            Ue = 250;
            break;
          case 5:
            Ue = 1073741823;
            break;
          case 4:
            Ue = 1e4;
            break;
          default:
            Ue = 5e3;
        }
        return Ue = W + Ue, w = {
          id: wt++,
          callback: L,
          priorityLevel: w,
          startTime: W,
          expirationTime: Ue,
          sortIndex: -1
        }, W > ie ? (w.sortIndex = W, x(Fe, w), Me(tt) === null && w === Me(Fe) && (Xt ? (Ha(tl), tl = -1) : Xt = !0, zt(be, W - ie))) : (w.sortIndex = Ue, x(tt, w), le || ya || (le = !0, hl())), w;
      }, B.unstable_shouldYield = Z, B.unstable_wrapCallback = function(w) {
        var L = re;
        return function() {
          var W = re;
          re = L;
          try {
            return w.apply(this, arguments);
          } finally {
            re = W;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Sg)), Sg;
}
var Eb;
function Cb() {
  if (Eb) return ep.exports;
  Eb = 1;
  var B = {};
  return B.NODE_ENV === "production" ? ep.exports = QS() : ep.exports = LS(), ep.exports;
}
var Ab;
function _S() {
  if (Ab) return e0;
  Ab = 1;
  var B = Cb(), se = Ag, ve = Db;
  function x(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Me(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var At = Symbol.for("react.element"), Rt = Symbol.for("react.transitional.element"), vt = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), hl = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), ut = Symbol.for("react.consumer"), lt = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), ya = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function Xt(l) {
    return l === null || typeof l != "object" ? null : (l = le && l[le] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ka = Symbol.for("react.client.reference");
  function Ha(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ka ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case be:
        return "Fragment";
      case vt:
        return "Portal";
      case hl:
        return "Profiler";
      case Z:
        return "StrictMode";
      case tt:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case lt:
          return (l.displayName || "Context") + ".Provider";
        case ut:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ne:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case wt:
          return n = l.displayName || null, n !== null ? n : Ha(l.type) || "Memo";
        case pe:
          n = l._payload, l = l._init;
          try {
            return Ha(l(n));
          } catch {
          }
      }
    return null;
  }
  var ne = se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ze = Object.assign, tl, ea;
  function ml(l) {
    if (tl === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        tl = n && n[1] || "", ea = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tl + l + ea;
  }
  var yl = !1;
  function $(l, n) {
    if (!l || yl) return "";
    yl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (N) {
                  var U = N;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (N) {
                  U = N;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                U = N;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (N) {
            if (N && U && typeof N.stack == "string")
              return [N.stack, U.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var g = m.split(`
`), R = v.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < R.length && !R[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === R.length)
          for (c = g.length - 1, s = R.length - 1; 1 <= c && 0 <= s && g[c] !== R[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== R[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== R[s]) {
                  var Y = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", l.displayName)), Y;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      yl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ml(u) : "";
  }
  function K(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ml(l.type);
      case 16:
        return ml("Lazy");
      case 13:
        return ml("Suspense");
      case 19:
        return ml("SuspenseList");
      case 0:
      case 15:
        return l = $(l.type, !1), l;
      case 11:
        return l = $(l.type.render, !1), l;
      case 1:
        return l = $(l.type, !0), l;
      default:
        return "";
    }
  }
  function w(l) {
    try {
      var n = "";
      do
        n += K(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function L(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, n.flags & 4098 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function W(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ie(l) {
    if (L(l) !== l)
      throw Error(x(188));
  }
  function Ue(l) {
    var n = l.alternate;
    if (!n) {
      if (n = L(l), n === null) throw Error(x(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ie(s), l;
          if (r === c) return ie(s), n;
          r = r.sibling;
        }
        throw Error(x(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            m = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              m = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(x(189));
        }
      }
      if (u.alternate !== c) throw Error(x(190));
    }
    if (u.tag !== 3) throw Error(x(188));
    return u.stateNode.current === u ? l : n;
  }
  function He(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = He(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Se = Array.isArray, fe = ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ml = [], Xl = -1;
  function Ql(l) {
    return { current: l };
  }
  function pt(l) {
    0 > Xl || (l.current = Ml[Xl], Ml[Xl] = null, Xl--);
  }
  function $e(l, n) {
    Xl++, Ml[Xl] = l.current, l.current = n;
  }
  var Ul = Ql(null), Ca = Ql(null), xe = Ql(null), iu = Ql(null);
  function $a(l, n) {
    switch ($e(xe, n), $e(Ca, l), $e(Ul, null), l = n.nodeType, l) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? iy(n) : 0;
        break;
      default:
        if (l = l === 8 ? n.parentNode : n, n = l.tagName, l = l.namespaceURI)
          l = iy(l), n = _d(l, n);
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    pt(Ul), $e(Ul, n);
  }
  function Tn() {
    pt(Ul), pt(Ca), pt(xe);
  }
  function Af(l) {
    l.memoizedState !== null && $e(iu, l);
    var n = Ul.current, u = _d(n, l.type);
    n !== u && ($e(Ca, l), $e(Ul, u));
  }
  function We(l) {
    Ca.current === l && (pt(Ul), pt(Ca)), iu.current === l && (pt(iu), Vc._currentValue = Ie);
  }
  var Pc = Object.prototype.hasOwnProperty, Qi = B.unstable_scheduleCallback, En = B.unstable_cancelCallback, T = B.unstable_shouldYield, P = B.unstable_requestPaint, k = B.unstable_now, Be = B.unstable_getCurrentPriorityLevel, kt = B.unstable_ImmediatePriority, it = B.unstable_UserBlockingPriority, ce = B.unstable_NormalPriority, ta = B.unstable_LowPriority, va = B.unstable_IdlePriority, vl = B.log, An = B.unstable_setDisableYieldValue, xa = null, gt = null;
  function Rn(l) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(
          xa,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function ll(l) {
    if (typeof vl == "function" && An(l), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(xa, l);
      } catch {
      }
  }
  var la = Math.clz32 ? Math.clz32 : n0, l0 = Math.log, a0 = Math.LN2;
  function n0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (l0(l) / a0 | 0) | 0;
  }
  var Rf = 128, zf = 4194304;
  function Li(l) {
    var n = l & 42;
    if (n !== 0) return n;
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
  function eo(l, n) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var c = 0, s = l.suspendedLanes, r = l.pingedLanes, m = l.warmLanes;
    l = l.finishedLanes !== 0;
    var v = u & 134217727;
    return v !== 0 ? (u = v & ~s, u !== 0 ? c = Li(u) : (r &= v, r !== 0 ? c = Li(r) : l || (m = v & ~m, m !== 0 && (c = Li(m))))) : (v = u & ~s, v !== 0 ? c = Li(v) : r !== 0 ? c = Li(r) : l || (m = u & ~m, m !== 0 && (c = Li(m)))), c === 0 ? 0 : n !== 0 && n !== c && !(n & s) && (s = c & -c, m = n & -n, s >= m || s === 32 && (m & 4194176) !== 0) ? n : c;
  }
  function Wa(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function _i(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
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
        return n + 5e3;
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
  function to() {
    var l = Rf;
    return Rf <<= 1, !(Rf & 4194176) && (Rf = 128), l;
  }
  function Zi() {
    var l = zf;
    return zf <<= 1, !(zf & 62914560) && (zf = 4194304), l;
  }
  function Qt(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Fa(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function lo(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, g = l.expirationTimes, R = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Y = 31 - la(u), X = 1 << Y;
      v[Y] = 0, g[Y] = -1;
      var U = R[Y];
      if (U !== null)
        for (R[Y] = null, Y = 0; Y < U.length; Y++) {
          var N = U[Y];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~X;
    }
    c !== 0 && Ki(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Ki(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - la(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194218;
  }
  function dr(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - la(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function xh(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Df() {
    var l = fe.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : yy(l.type));
  }
  function hr(l, n) {
    var u = fe.p;
    try {
      return fe.p = l, n();
    } finally {
      fe.p = u;
    }
  }
  var Hl = Math.random().toString(36).slice(2), at = "__reactFiber$" + Hl, Ll = "__reactProps$" + Hl, ao = "__reactContainer$" + Hl, no = "__reactEvents$" + Hl, u0 = "__reactListeners$" + Hl, mr = "__reactHandles$" + Hl, pa = "__reactResources$" + Hl, uo = "__reactMarker$" + Hl;
  function Of(l) {
    delete l[at], delete l[Ll], delete l[no], delete l[u0], delete l[mr];
  }
  function Pu(l) {
    var n = l[at];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[ao] || u[at]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Qu(l); l !== null; ) {
            if (u = l[at]) return u;
            l = Qu(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ei(l) {
    if (l = l[at] || l[ao]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function io(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(x(33));
  }
  function Ji(l) {
    var n = l[pa];
    return n || (n = l[pa] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Dt(l) {
    l[uo] = !0;
  }
  var Bh = /* @__PURE__ */ new Set(), qh = {};
  function ti(l, n) {
    ki(l, n), ki(l + "Capture", n);
  }
  function ki(l, n) {
    for (qh[l] = n, l = 0; l < n.length; l++)
      Bh.add(n[l]);
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ga = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), $i = {}, li = {};
  function i0(l) {
    return Pc.call(li, l) ? !0 : Pc.call($i, l) ? !1 : ga.test(l) ? li[l] = !0 : ($i[l] = !0, !1);
  }
  function ai(l, n, u) {
    if (i0(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Wi(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Ia(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Cl(l) {
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
  function Fi(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Yh(l) {
    var n = Fi(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          c = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(m) {
          c = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function yr(l) {
    l._valueTracker || (l._valueTracker = Yh(l));
  }
  function c0(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Fi(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Mf(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Nh = /[\n"\\]/g;
  function aa(l) {
    return l.replace(
      Nh,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function vr(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Cl(n)) : l.value !== "" + Cl(n) && (l.value = "" + Cl(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? pr(l, m, Cl(n)) : u != null ? pr(l, m, Cl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Cl(v) : l.removeAttribute("name");
  }
  function jh(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Cl(u) : "", n = n != null ? "" + Cl(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function pr(l, n, u) {
    n === "number" && Mf(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function co(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Cl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Vh(l, n, u) {
    if (n != null && (n = "" + Cl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Cl(u) : "";
  }
  function gr(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(x(92));
        if (Se(c)) {
          if (1 < c.length) throw Error(x(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Cl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function cu(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Uf = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function o0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Uf.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Gh(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(x(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && o0(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && o0(l, r, n[r]);
  }
  function br(l) {
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
  var Hf = /* @__PURE__ */ new Map([
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
  ]), f0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sr(l) {
    return f0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var wh = null;
  function Xh(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var oo = null, Dn = null;
  function Tr(l) {
    var n = ei(l);
    if (n && (l = n.stateNode)) {
      var u = l[Ll] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (vr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + aa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Ll] || null;
                if (!s) throw Error(x(90));
                vr(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && c0(c);
          }
          break e;
        case "textarea":
          Vh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && co(l, !!u.multiple, n, !1);
      }
    }
  }
  var Er = !1;
  function Qh(l, n, u) {
    if (Er) return l(n, u);
    Er = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Er = !1, (oo !== null || Dn !== null) && (Es(), oo && (n = oo, l = Dn, Dn = oo = null, Tr(n), l)))
        for (n = 0; n < l.length; n++) Tr(l[n]);
    }
  }
  function ou(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Ll] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        x(231, n, typeof u)
      );
    return u;
  }
  var Ar = !1;
  if (zn)
    try {
      var ni = {};
      Object.defineProperty(ni, "passive", {
        get: function() {
          Ar = !0;
        }
      }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
    } catch {
      Ar = !1;
    }
  var Pa = null, Rr = null, pl = null;
  function s0() {
    if (pl) return pl;
    var l, n = Rr, u = n.length, c, s = "value" in Pa ? Pa.value : Pa.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return pl = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function fo(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Cf() {
    return !0;
  }
  function Lh() {
    return !1;
  }
  function na(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Cf : Lh, this.isPropagationStopped = Lh, this;
    }
    return ze(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Cf);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Cf);
      },
      persist: function() {
      },
      isPersistent: Cf
    }), n;
  }
  var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xf = na(Ii), Bf = ze({}, Ii, { view: 0, detail: 0 }), r0 = na(Bf), _h, so, ro, qf = ze({}, Bf, {
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
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ro && (ro && l.type === "mousemove" ? (_h = l.screenX - ro.screenX, so = l.screenY - ro.screenY) : so = _h = 0, ro = l), _h);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : so;
    }
  }), Zh = na(qf), lp = ze({}, qf, { dataTransfer: 0 }), ap = na(lp), np = ze({}, Bf, { relatedTarget: 0 }), Kh = na(np), up = ze({}, Ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yf = na(up), d0 = ze({}, Ii, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), h0 = na(d0), m0 = ze({}, Ii, { data: 0 }), Jh = na(m0), kh = {
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
  }, ip = {
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
  }, y0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Pi(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = y0[l]) ? !!n[l] : !1;
  }
  function fu() {
    return Pi;
  }
  var en = ze({}, Bf, {
    key: function(l) {
      if (l.key) {
        var n = kh[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = fo(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ip[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(l) {
      return l.type === "keypress" ? fo(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? fo(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), zr = na(en), Dr = ze({}, qf, {
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
  }), Or = na(Dr), xl = ze({}, Bf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), v0 = na(xl), Mr = ze({}, Ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ec = na(Mr), $h = ze({}, qf, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), p0 = na($h), g0 = ze({}, Ii, {
    newState: 0,
    oldState: 0
  }), Wh = na(g0), su = [9, 13, 27, 32], ho = zn && "CompositionEvent" in window, ru = null;
  zn && "documentMode" in document && (ru = document.documentMode);
  var Fh = zn && "TextEvent" in window && !ru, Ur = zn && (!ho || ru && 8 < ru && 11 >= ru), Ih = " ", tn = !1;
  function ln(l, n) {
    switch (l) {
      case "keyup":
        return su.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var al = !1;
  function tc(l, n) {
    switch (l) {
      case "compositionend":
        return Nf(n);
      case "keypress":
        return n.which !== 32 ? null : (tn = !0, Ih);
      case "textInput":
        return l = n.data, l === Ih && tn ? null : l;
      default:
        return null;
    }
  }
  function b0(l, n) {
    if (al)
      return l === "compositionend" || !ho && ln(l, n) ? (l = s0(), pl = Rr = Pa = null, al = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ur && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ph = {
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
  function Hr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Ph[l.type] : n === "textarea";
  }
  function ui(l, n, u, c) {
    oo ? Dn ? Dn.push(c) : Dn = [c] : oo = c, n = Yc(n, "onChange"), 0 < n.length && (u = new xf(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var an = null, lc = null;
  function ac(l) {
    Hs(l, 0);
  }
  function jf(l) {
    var n = io(l);
    if (c0(n)) return l;
  }
  function em(l, n) {
    if (l === "change") return n;
  }
  var mo = !1;
  if (zn) {
    var nc;
    if (zn) {
      var uc = "oninput" in document;
      if (!uc) {
        var tm = document.createElement("div");
        tm.setAttribute("oninput", "return;"), uc = typeof tm.oninput == "function";
      }
      nc = uc;
    } else nc = !1;
    mo = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function lm() {
    an && (an.detachEvent("onpropertychange", am), lc = an = null);
  }
  function am(l) {
    if (l.propertyName === "value" && jf(lc)) {
      var n = [];
      ui(
        n,
        lc,
        l,
        Xh(l)
      ), Qh(ac, n);
    }
  }
  function Cr(l, n, u) {
    l === "focusin" ? (lm(), an = n, lc = u, an.attachEvent("onpropertychange", am)) : l === "focusout" && lm();
  }
  function S0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return jf(lc);
  }
  function T0(l, n) {
    if (l === "click") return jf(n);
  }
  function E0(l, n) {
    if (l === "input" || l === "change")
      return jf(n);
  }
  function gl(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Bl = typeof Object.is == "function" ? Object.is : gl;
  function ii(l, n) {
    if (Bl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Pc.call(n, s) || !Bl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function yo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Vf(l, n) {
    var u = yo(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = yo(u);
    }
  }
  function Gf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Gf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function wf(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Mf(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Mf(l.document);
    }
    return n;
  }
  function xr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  function A0(l, n) {
    var u = wf(n);
    n = l.focusedElem;
    var c = l.selectionRange;
    if (u !== n && n && n.ownerDocument && Gf(n.ownerDocument.documentElement, n)) {
      if (c !== null && xr(n)) {
        if (l = c.start, u = c.end, u === void 0 && (u = l), "selectionStart" in n)
          n.selectionStart = l, n.selectionEnd = Math.min(
            u,
            n.value.length
          );
        else if (u = (l = n.ownerDocument || document) && l.defaultView || window, u.getSelection) {
          u = u.getSelection();
          var s = n.textContent.length, r = Math.min(c.start, s);
          c = c.end === void 0 ? r : Math.min(c.end, s), !u.extend && r > c && (s = c, c = r, r = s), s = Vf(n, r);
          var m = Vf(
            n,
            c
          );
          s && m && (u.rangeCount !== 1 || u.anchorNode !== s.node || u.anchorOffset !== s.offset || u.focusNode !== m.node || u.focusOffset !== m.offset) && (l = l.createRange(), l.setStart(s.node, s.offset), u.removeAllRanges(), r > c ? (u.addRange(l), u.extend(m.node, m.offset)) : (l.setEnd(
            m.node,
            m.offset
          ), u.addRange(l)));
        }
      }
      for (l = [], u = n; u = u.parentNode; )
        u.nodeType === 1 && l.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < l.length; n++)
        u = l[n], u.element.scrollLeft = u.left, u.element.scrollTop = u.top;
    }
  }
  var nm = zn && "documentMode" in document && 11 >= document.documentMode, ci = null, On = null, vo = null, Mn = !1;
  function Un(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Mn || ci == null || ci !== Mf(c) || (c = ci, "selectionStart" in c && xr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), vo && ii(vo, c) || (vo = c, c = Yc(On, "onSelect"), 0 < c.length && (n = new xf(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = ci)));
  }
  function Hn(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var oi = {
    animationend: Hn("Animation", "AnimationEnd"),
    animationiteration: Hn("Animation", "AnimationIteration"),
    animationstart: Hn("Animation", "AnimationStart"),
    transitionrun: Hn("Transition", "TransitionRun"),
    transitionstart: Hn("Transition", "TransitionStart"),
    transitioncancel: Hn("Transition", "TransitionCancel"),
    transitionend: Hn("Transition", "TransitionEnd")
  }, du = {}, po = {};
  zn && (po = document.createElement("div").style, "AnimationEvent" in window || (delete oi.animationend.animation, delete oi.animationiteration.animation, delete oi.animationstart.animation), "TransitionEvent" in window || delete oi.transitionend.transition);
  function ic(l) {
    if (du[l]) return du[l];
    if (!oi[l]) return l;
    var n = oi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in po)
        return du[l] = n[u];
    return l;
  }
  var um = ic("animationend"), R0 = ic("animationiteration"), Br = ic("animationstart"), qr = ic("transitionrun"), z0 = ic("transitionstart"), Ce = ic("transitioncancel"), Q = ic("transitionend"), cc = /* @__PURE__ */ new Map(), Xf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function Ke(l, n) {
    cc.set(l, n), ti(n, [l]);
  }
  var ua = [], fi = 0, Yr = 0;
  function go() {
    for (var l = fi, n = Yr = fi = 0; n < l; ) {
      var u = ua[n];
      ua[n++] = null;
      var c = ua[n];
      ua[n++] = null;
      var s = ua[n];
      ua[n++] = null;
      var r = ua[n];
      if (ua[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && jr(u, s, r);
    }
  }
  function Nr(l, n, u, c) {
    ua[fi++] = l, ua[fi++] = n, ua[fi++] = u, ua[fi++] = c, Yr |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Qf(l, n, u, c) {
    return Nr(l, n, u, c), bl(l);
  }
  function Cn(l, n) {
    return Nr(l, null, null, n), bl(l);
  }
  function jr(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    s && n !== null && l.tag === 3 && (r = l.stateNode, s = 31 - la(u), r = r.hiddenUpdates, l = r[s], l === null ? r[s] = [n] : l.push(n), n.lane = u | 536870912);
  }
  function bl(l) {
    if (50 < zi)
      throw zi = 0, Bd = null, Error(x(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ge = {}, bo = /* @__PURE__ */ new WeakMap();
  function $t(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = bo.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: w(n)
      }, bo.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: w(n)
    };
  }
  var Ba = [], ql = 0, So = null, hu = 0, ia = [], Yl = 0, mu = null, qa = 1, xn = "";
  function si(l, n) {
    Ba[ql++] = hu, Ba[ql++] = So, So = l, hu = n;
  }
  function im(l, n, u) {
    ia[Yl++] = qa, ia[Yl++] = xn, ia[Yl++] = mu, mu = l;
    var c = qa;
    l = xn;
    var s = 32 - la(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - la(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, qa = 1 << 32 - la(n) + s | u << s | c, xn = r + l;
    } else
      qa = 1 << r | u << s | c, xn = l;
  }
  function Vr(l) {
    l.return !== null && (si(l, 1), im(l, 1, 0));
  }
  function Gr(l) {
    for (; l === So; )
      So = Ba[--ql], Ba[ql] = null, hu = Ba[--ql], Ba[ql] = null;
    for (; l === mu; )
      mu = ia[--Yl], ia[Yl] = null, xn = ia[--Yl], ia[Yl] = null, qa = ia[--Yl], ia[Yl] = null;
  }
  var Sl = null, Wt = null, we = !1, Ya = null, nn = !1, wr = Error(x(519));
  function oc(l) {
    var n = Error(x(418, ""));
    throw Eo($t(n, l)), wr;
  }
  function cm(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[at] = l, n[Ll] = c, u) {
      case "dialog":
        qe("cancel", n), qe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Kn.length; u++)
          qe(Kn[u], n);
        break;
      case "source":
        qe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        qe("error", n), qe("load", n);
        break;
      case "details":
        qe("toggle", n);
        break;
      case "input":
        qe("invalid", n), jh(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), yr(n);
        break;
      case "select":
        qe("invalid", n);
        break;
      case "textarea":
        qe("invalid", n), gr(n, c.value, c.defaultValue, c.children), yr(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || H(n.textContent, u) ? (c.popover != null && (qe("beforetoggle", n), qe("toggle", n)), c.onScroll != null && qe("scroll", n), c.onScrollEnd != null && qe("scrollend", n), c.onClick != null && (n.onclick = he), n = !0) : n = !1, n || oc(l);
  }
  function om(l) {
    for (Sl = l.return; Sl; )
      switch (Sl.tag) {
        case 3:
        case 27:
          nn = !0;
          return;
        case 5:
        case 13:
          nn = !1;
          return;
        default:
          Sl = Sl.return;
      }
  }
  function To(l) {
    if (l !== Sl) return !1;
    if (!we) return om(l), we = !0, !1;
    var n = !1, u;
    if ((u = l.tag !== 3 && l.tag !== 27) && ((u = l.tag === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Zd(l.type, l.memoizedProps)), u = !u), u && (n = !0), n && Wt && oc(l), om(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(x(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Wt = kl(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Wt = null;
      }
    } else
      Wt = Sl ? kl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function fc() {
    Wt = Sl = null, we = !1;
  }
  function Eo(l) {
    Ya === null ? Ya = [l] : Ya.push(l);
  }
  var Ao = Error(x(460)), sc = Error(x(474)), Ro = { then: function() {
  } };
  function fm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Xr() {
  }
  function Lf(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Xr, Xr), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, l === Ao ? Error(x(483)) : l;
      default:
        if (typeof n.status == "string") n.then(Xr, Xr);
        else {
          if (l = nt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(x(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, l === Ao ? Error(x(483)) : l;
        }
        throw Bn = n, Ao;
    }
  }
  var Bn = null;
  function Qr() {
    if (Bn === null) throw Error(x(459));
    var l = Bn;
    return Bn = null, l;
  }
  var Na = null, nl = 0;
  function rc(l) {
    var n = nl;
    return nl += 1, Na === null && (Na = []), Lf(Na, l, n);
  }
  function dc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function _f(l, n) {
    throw n.$$typeof === At ? Error(x(525)) : (l = Object.prototype.toString.call(n), Error(
      x(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Lr(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Zf(l) {
    function n(z, E) {
      if (l) {
        var D = z.deletions;
        D === null ? (z.deletions = [E], z.flags |= 16) : D.push(E);
      }
    }
    function u(z, E) {
      if (!l) return null;
      for (; E !== null; )
        n(z, E), E = E.sibling;
      return null;
    }
    function c(z) {
      for (var E = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? E.set(z.key, z) : E.set(z.index, z), z = z.sibling;
      return E;
    }
    function s(z, E) {
      return z = Nu(z, E), z.index = 0, z.sibling = null, z;
    }
    function r(z, E, D) {
      return z.index = D, l ? (D = z.alternate, D !== null ? (D = D.index, D < E ? (z.flags |= 33554434, E) : D) : (z.flags |= 33554434, E)) : (z.flags |= 1048576, E);
    }
    function m(z) {
      return l && z.alternate === null && (z.flags |= 33554434), z;
    }
    function v(z, E, D, V) {
      return E === null || E.tag !== 6 ? (E = Xm(D, z.mode, V), E.return = z, E) : (E = s(E, D), E.return = z, E);
    }
    function g(z, E, D, V) {
      var F = D.type;
      return F === be ? Y(
        z,
        E,
        D.props.children,
        V,
        D.key
      ) : E !== null && (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === pe && Lr(F) === E.type) ? (E = s(E, D.props), dc(E, D), E.return = z, E) : (E = ke(
        D.type,
        D.key,
        D.props,
        null,
        z.mode,
        V
      ), dc(E, D), E.return = z, E);
    }
    function R(z, E, D, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = Ud(D, z.mode, V), E.return = z, E) : (E = s(E, D.children || []), E.return = z, E);
    }
    function Y(z, E, D, V, F) {
      return E === null || E.tag !== 7 ? (E = ju(
        D,
        z.mode,
        V,
        F
      ), E.return = z, E) : (E = s(E, D), E.return = z, E);
    }
    function X(z, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Xm(
          "" + E,
          z.mode,
          D
        ), E.return = z, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Rt:
            return D = ke(
              E.type,
              E.key,
              E.props,
              null,
              z.mode,
              D
            ), dc(D, E), D.return = z, D;
          case vt:
            return E = Ud(
              E,
              z.mode,
              D
            ), E.return = z, E;
          case pe:
            var V = E._init;
            return E = V(E._payload), X(z, E, D);
        }
        if (Se(E) || Xt(E))
          return E = ju(
            E,
            z.mode,
            D,
            null
          ), E.return = z, E;
        if (typeof E.then == "function")
          return X(z, rc(E), D);
        if (E.$$typeof === lt)
          return X(
            z,
            ss(z, E),
            D
          );
        _f(z, E);
      }
      return null;
    }
    function U(z, E, D, V) {
      var F = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return F !== null ? null : v(z, E, "" + D, V);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Rt:
            return D.key === F ? g(z, E, D, V) : null;
          case vt:
            return D.key === F ? R(z, E, D, V) : null;
          case pe:
            return F = D._init, D = F(D._payload), U(z, E, D, V);
        }
        if (Se(D) || Xt(D))
          return F !== null ? null : Y(z, E, D, V, null);
        if (typeof D.then == "function")
          return U(
            z,
            E,
            rc(D),
            V
          );
        if (D.$$typeof === lt)
          return U(
            z,
            E,
            ss(z, D),
            V
          );
        _f(z, D);
      }
      return null;
    }
    function N(z, E, D, V, F) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return z = z.get(D) || null, v(E, z, "" + V, F);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Rt:
            return z = z.get(
              V.key === null ? D : V.key
            ) || null, g(E, z, V, F);
          case vt:
            return z = z.get(
              V.key === null ? D : V.key
            ) || null, R(E, z, V, F);
          case pe:
            var Ee = V._init;
            return V = Ee(V._payload), N(
              z,
              E,
              D,
              V,
              F
            );
        }
        if (Se(V) || Xt(V))
          return z = z.get(D) || null, Y(E, z, V, F, null);
        if (typeof V.then == "function")
          return N(
            z,
            E,
            D,
            rc(V),
            F
          );
        if (V.$$typeof === lt)
          return N(
            z,
            E,
            D,
            ss(E, V),
            F
          );
        _f(E, V);
      }
      return null;
    }
    function I(z, E, D, V) {
      for (var F = null, Ee = null, ae = E, ue = E = 0, Gt = null; ae !== null && ue < D.length; ue++) {
        ae.index > ue ? (Gt = ae, ae = null) : Gt = ae.sibling;
        var Le = U(
          z,
          ae,
          D[ue],
          V
        );
        if (Le === null) {
          ae === null && (ae = Gt);
          break;
        }
        l && ae && Le.alternate === null && n(z, ae), E = r(Le, E, ue), Ee === null ? F = Le : Ee.sibling = Le, Ee = Le, ae = Gt;
      }
      if (ue === D.length)
        return u(z, ae), we && si(z, ue), F;
      if (ae === null) {
        for (; ue < D.length; ue++)
          ae = X(z, D[ue], V), ae !== null && (E = r(
            ae,
            E,
            ue
          ), Ee === null ? F = ae : Ee.sibling = ae, Ee = ae);
        return we && si(z, ue), F;
      }
      for (ae = c(ae); ue < D.length; ue++)
        Gt = N(
          ae,
          z,
          ue,
          D[ue],
          V
        ), Gt !== null && (l && Gt.alternate !== null && ae.delete(
          Gt.key === null ? ue : Gt.key
        ), E = r(
          Gt,
          E,
          ue
        ), Ee === null ? F = Gt : Ee.sibling = Gt, Ee = Gt);
      return l && ae.forEach(function(Yi) {
        return n(z, Yi);
      }), we && si(z, ue), F;
    }
    function oe(z, E, D, V) {
      if (D == null) throw Error(x(151));
      for (var F = null, Ee = null, ae = E, ue = E = 0, Gt = null, Le = D.next(); ae !== null && !Le.done; ue++, Le = D.next()) {
        ae.index > ue ? (Gt = ae, ae = null) : Gt = ae.sibling;
        var Yi = U(z, ae, Le.value, V);
        if (Yi === null) {
          ae === null && (ae = Gt);
          break;
        }
        l && ae && Yi.alternate === null && n(z, ae), E = r(Yi, E, ue), Ee === null ? F = Yi : Ee.sibling = Yi, Ee = Yi, ae = Gt;
      }
      if (Le.done)
        return u(z, ae), we && si(z, ue), F;
      if (ae === null) {
        for (; !Le.done; ue++, Le = D.next())
          Le = X(z, Le.value, V), Le !== null && (E = r(Le, E, ue), Ee === null ? F = Le : Ee.sibling = Le, Ee = Le);
        return we && si(z, ue), F;
      }
      for (ae = c(ae); !Le.done; ue++, Le = D.next())
        Le = N(ae, z, ue, Le.value, V), Le !== null && (l && Le.alternate !== null && ae.delete(Le.key === null ? ue : Le.key), E = r(Le, E, ue), Ee === null ? F = Le : Ee.sibling = Le, Ee = Le);
      return l && ae.forEach(function(Ap) {
        return n(z, Ap);
      }), we && si(z, ue), F;
    }
    function Tt(z, E, D, V) {
      if (typeof D == "object" && D !== null && D.type === be && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Rt:
            e: {
              for (var F = D.key; E !== null; ) {
                if (E.key === F) {
                  if (F = D.type, F === be) {
                    if (E.tag === 7) {
                      u(
                        z,
                        E.sibling
                      ), V = s(
                        E,
                        D.props.children
                      ), V.return = z, z = V;
                      break e;
                    }
                  } else if (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === pe && Lr(F) === E.type) {
                    u(
                      z,
                      E.sibling
                    ), V = s(E, D.props), dc(V, D), V.return = z, z = V;
                    break e;
                  }
                  u(z, E);
                  break;
                } else n(z, E);
                E = E.sibling;
              }
              D.type === be ? (V = ju(
                D.props.children,
                z.mode,
                V,
                D.key
              ), V.return = z, z = V) : (V = ke(
                D.type,
                D.key,
                D.props,
                null,
                z.mode,
                V
              ), dc(V, D), V.return = z, z = V);
            }
            return m(z);
          case vt:
            e: {
              for (F = D.key; E !== null; ) {
                if (E.key === F)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    u(
                      z,
                      E.sibling
                    ), V = s(E, D.children || []), V.return = z, z = V;
                    break e;
                  } else {
                    u(z, E);
                    break;
                  }
                else n(z, E);
                E = E.sibling;
              }
              V = Ud(D, z.mode, V), V.return = z, z = V;
            }
            return m(z);
          case pe:
            return F = D._init, D = F(D._payload), Tt(
              z,
              E,
              D,
              V
            );
        }
        if (Se(D))
          return I(
            z,
            E,
            D,
            V
          );
        if (Xt(D)) {
          if (F = Xt(D), typeof F != "function") throw Error(x(150));
          return D = F.call(D), oe(
            z,
            E,
            D,
            V
          );
        }
        if (typeof D.then == "function")
          return Tt(
            z,
            E,
            rc(D),
            V
          );
        if (D.$$typeof === lt)
          return Tt(
            z,
            E,
            ss(z, D),
            V
          );
        _f(z, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (u(z, E.sibling), V = s(E, D), V.return = z, z = V) : (u(z, E), V = Xm(D, z.mode, V), V.return = z, z = V), m(z)) : u(z, E);
    }
    return function(z, E, D, V) {
      try {
        nl = 0;
        var F = Tt(
          z,
          E,
          D,
          V
        );
        return Na = null, F;
      } catch (ae) {
        if (ae === Ao) throw ae;
        var Ee = Ea(29, ae, null, z.mode);
        return Ee.lanes = V, Ee.return = z, Ee;
      } finally {
      }
    };
  }
  var yu = Zf(!0), Kf = Zf(!1), ri = Ql(null), hc = Ql(0);
  function _r(l, n) {
    l = Gu, $e(hc, l), $e(ri, n), Gu = l | n.baseLanes;
  }
  function Zr() {
    $e(hc, Gu), $e(ri, ri.current);
  }
  function Kr() {
    Gu = hc.current, pt(ri), pt(hc);
  }
  var ca = Ql(null), un = null;
  function vu(l) {
    var n = l.alternate;
    $e(Bt, Bt.current & 1), $e(ca, l), un === null && (n === null || ri.current !== null || n.memoizedState !== null) && (un = l);
  }
  function Jr(l) {
    if (l.tag === 22) {
      if ($e(Bt, Bt.current), $e(ca, l), un === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (un = l);
      }
    } else pu();
  }
  function pu() {
    $e(Bt, Bt.current), $e(ca, ca.current);
  }
  function qn(l) {
    pt(ca), un === l && (un = null), pt(Bt);
  }
  var Bt = Ql(0);
  function Jf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var D0 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, mc = B.unstable_scheduleCallback, sm = B.unstable_NormalPriority, qt = {
    $$typeof: lt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function rm() {
    return {
      controller: new D0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function kf(l) {
    l.refCount--, l.refCount === 0 && mc(sm, function() {
      l.controller.abort();
    });
  }
  var zo = null, yc = 0, di = 0, gu = null;
  function O0(l, n) {
    if (zo === null) {
      var u = zo = [];
      yc = 0, di = Os(), gu = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return yc++, n.then(dm, dm), n;
  }
  function dm() {
    if (--yc === 0 && zo !== null) {
      gu !== null && (gu.status = "fulfilled");
      var l = zo;
      zo = null, di = 0, gu = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function hm(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var kr = ne.S;
  ne.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && O0(l, n), kr !== null && kr(l, n);
  };
  var hi = Ql(null);
  function $r() {
    var l = hi.current;
    return l !== null ? l : nt.pooledCache;
  }
  function Yn(l, n) {
    n === null ? $e(hi, hi.current) : $e(hi, n.pool);
  }
  function mm() {
    var l = $r();
    return l === null ? null : { parent: qt._currentValue, pool: l };
  }
  var bu = 0, Te = null, Je = null, Yt = null, Do = !1, mi = !1, Su = !1, Wr = 0, Nt = 0, vc = null, M0 = 0;
  function Ut() {
    throw Error(x(321));
  }
  function Fr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Bl(l[u], n[u])) return !1;
    return !0;
  }
  function Ir(l, n, u, c, s, r) {
    return bu = r, Te = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ne.H = l === null || l.memoizedState === null ? _l : Ru, Su = !1, r = u(c, s), Su = !1, mi && (r = Pr(
      n,
      u,
      c,
      s
    )), Oo(l), r;
  }
  function Oo(l) {
    ne.H = fn;
    var n = Je !== null && Je.next !== null;
    if (bu = 0, Yt = Je = Te = null, Do = !1, Nt = 0, vc = null, n) throw Error(x(300));
    l === null || Ft || (l = l.dependencies, l !== null && ft(l) && (Ft = !0));
  }
  function Pr(l, n, u, c) {
    Te = l;
    var s = 0;
    do {
      if (mi && (vc = null), Nt = 0, mi = !1, 25 <= s) throw Error(x(301));
      if (s += 1, Yt = Je = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      ne.H = Si, r = n(u, c);
    } while (mi);
    return r;
  }
  function U0() {
    var l = ne.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? pc(n) : n, l = l.useState()[0], (Je !== null ? Je.memoizedState : null) !== l && (Te.flags |= 1024), n;
  }
  function ed() {
    var l = Wr !== 0;
    return Wr = 0, l;
  }
  function td(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function $f(l) {
    if (Do) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Do = !1;
    }
    bu = 0, Yt = Je = Te = null, mi = !1, Nt = Wr = 0, vc = null;
  }
  function Nl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? Te.memoizedState = Yt = l : Yt = Yt.next = l, Yt;
  }
  function Ht() {
    if (Je === null) {
      var l = Te.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Je.next;
    var n = Yt === null ? Te.memoizedState : Yt.next;
    if (n !== null)
      Yt = n, Je = l;
    else {
      if (l === null)
        throw Te.alternate === null ? Error(x(467)) : Error(x(310));
      Je = l, l = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, Yt === null ? Te.memoizedState = Yt = l : Yt = Yt.next = l;
    }
    return Yt;
  }
  var Wf;
  Wf = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function pc(l) {
    var n = Nt;
    return Nt += 1, vc === null && (vc = []), l = Lf(vc, l, n), n = Te, (Yt === null ? n.memoizedState : Yt.next) === null && (n = n.alternate, ne.H = n === null || n.memoizedState === null ? _l : Ru), l;
  }
  function Mo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return pc(l);
      if (l.$$typeof === lt) return ul(l);
    }
    throw Error(x(438, String(l)));
  }
  function Ff(l) {
    var n = null, u = Te.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Te.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Wf(), Te.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = ya;
    return n.index++, u;
  }
  function Nn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function If(l) {
    var n = Ht();
    return Pf(n, Je, l);
  }
  function Pf(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(x(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, g = null, R = n, Y = !1;
      do {
        var X = R.lane & -536870913;
        if (X !== R.lane ? (Xe & X) === X : (bu & X) === X) {
          var U = R.revertLane;
          if (U === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), X === di && (Y = !0);
          else if ((bu & U) === U) {
            R = R.next, U === di && (Y = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, g === null ? (v = g = X, m = r) : g = g.next = X, Te.lanes |= U, _n |= U;
          X = R.action, Su && u(r, X), r = R.hasEagerState ? R.eagerState : u(r, X);
        } else
          U = {
            lane: X,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, g === null ? (v = g = U, m = r) : g = g.next = U, Te.lanes |= X, _n |= X;
        R = R.next;
      } while (R !== null && R !== n);
      if (g === null ? m = r : g.next = v, !Bl(r, l.memoizedState) && (Ft = !0, Y && (u = gu, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function ld(l) {
    var n = Ht(), u = n.queue;
    if (u === null) throw Error(x(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Bl(r, n.memoizedState) || (Ft = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function jn(l, n, u) {
    var c = Te, s = Ht(), r = we;
    if (r) {
      if (u === void 0) throw Error(x(407));
      u = u();
    } else u = n();
    var m = !Bl(
      (Je || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Ft = !0), s = s.queue, od(nd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || Yt !== null && Yt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Au(
        9,
        H0.bind(
          null,
          c,
          s,
          u,
          n
        ),
        { destroy: void 0 },
        null
      ), nt === null) throw Error(x(349));
      r || bu & 60 || ad(c, n, u);
    }
    return u;
  }
  function ad(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Te.updateQueue, n === null ? (n = Wf(), Te.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function H0(l, n, u, c) {
    n.value = u, n.getSnapshot = c, es(n) && Tu(l);
  }
  function nd(l, n, u) {
    return u(function() {
      es(n) && Tu(l);
    });
  }
  function es(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Bl(l, u);
    } catch {
      return !0;
    }
  }
  function Tu(l) {
    var n = Cn(l, 2);
    n !== null && Lt(n, l, 2);
  }
  function cn(l) {
    var n = Nl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Su) {
        ll(!0);
        try {
          u();
        } finally {
          ll(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nn,
      lastRenderedState: l
    }, n;
  }
  function ud(l, n, u, c) {
    return l.baseState = u, Pf(
      l,
      Je,
      typeof c == "function" ? c : Nn
    );
  }
  function ym(l, n, u, c, s) {
    if (md(l)) throw Error(x(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      ne.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Uo(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Uo(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = ne.T, m = {};
      ne.T = m;
      try {
        var v = u(s, c), g = ne.S;
        g !== null && g(m, v), ts(l, n, v);
      } catch (R) {
        ct(l, n, R);
      } finally {
        ne.T = r;
      }
    } else
      try {
        r = u(s, c), ts(l, n, r);
      } catch (R) {
        ct(l, n, R);
      }
  }
  function ts(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        yi(l, n, c);
      },
      function(c) {
        return ct(l, n, c);
      }
    ) : yi(l, n, u);
  }
  function yi(l, n, u) {
    n.status = "fulfilled", n.value = u, ls(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Uo(l, u)));
  }
  function ct(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ls(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ls(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function vm(l, n) {
    return n;
  }
  function id(l, n) {
    if (we) {
      var u = nt.formState;
      if (u !== null) {
        e: {
          var c = Te;
          if (we) {
            if (Wt) {
              t: {
                for (var s = Wt, r = nn; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = kl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Wt = kl(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            oc(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Nl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vm,
      lastRenderedState: n
    }, u.queue = c, u = hd.bind(
      null,
      Te,
      c
    ), c.dispatch = u, c = cn(!1), r = Bo.bind(
      null,
      Te,
      !1,
      c.queue
    ), c = Nl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = ym.bind(
      null,
      Te,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function cd(l) {
    var n = Ht();
    return Eu(n, Je, l);
  }
  function Eu(l, n, u) {
    n = Pf(
      l,
      n,
      vm
    )[0], l = If(Nn)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? pc(n) : n;
    var c = Ht(), s = c.queue, r = s.dispatch;
    return u !== c.memoizedState && (Te.flags |= 2048, Au(
      9,
      vi.bind(null, s, u),
      { destroy: void 0 },
      null
    )), [n, r, l];
  }
  function vi(l, n) {
    l.action = n;
  }
  function Ho(l) {
    var n = Ht(), u = Je;
    if (u !== null)
      return Eu(n, u, l);
    Ht(), n = n.memoizedState, u = Ht();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Au(l, n, u, c) {
    return l = { tag: l, create: n, inst: u, deps: c, next: null }, n = Te.updateQueue, n === null && (n = Wf(), Te.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Co() {
    return Ht().memoizedState;
  }
  function pi(l, n, u, c) {
    var s = Nl();
    Te.flags |= l, s.memoizedState = Au(
      1 | n,
      u,
      { destroy: void 0 },
      c === void 0 ? null : c
    );
  }
  function as(l, n, u, c) {
    var s = Ht();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Je !== null && c !== null && Fr(c, Je.memoizedState.deps) ? s.memoizedState = Au(n, u, r, c) : (Te.flags |= l, s.memoizedState = Au(1 | n, u, r, c));
  }
  function C0(l, n) {
    pi(8390656, 8, l, n);
  }
  function od(l, n) {
    as(2048, 8, l, n);
  }
  function on(l, n) {
    return as(4, 2, l, n);
  }
  function pm(l, n) {
    return as(4, 4, l, n);
  }
  function fd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function xo(l, n, u) {
    u = u != null ? u.concat([l]) : null, as(4, 4, fd.bind(null, n, l), u);
  }
  function gi() {
  }
  function gm(l, n) {
    var u = Ht();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Fr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function sd(l, n) {
    var u = Ht();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Fr(n, c[1]))
      return c[0];
    if (c = l(), Su) {
      ll(!0);
      try {
        l();
      } finally {
        ll(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function rd(l, n, u) {
    return u === void 0 || bu & 1073741824 ? l.memoizedState = n : (l.memoizedState = u, l = Ts(), Te.lanes |= l, _n |= l, u);
  }
  function x0(l, n, u, c) {
    return Bl(u, n) ? u : ri.current !== null ? (l = rd(l, u, c), Bl(l, n) || (Ft = !0), l) : bu & 42 ? (l = Ts(), Te.lanes |= l, _n |= l, n) : (Ft = !0, l.memoizedState = u);
  }
  function B0(l, n, u, c, s) {
    var r = fe.p;
    fe.p = r !== 0 && 8 > r ? r : 8;
    var m = ne.T, v = {};
    ne.T = v, Bo(l, !1, n, u);
    try {
      var g = s(), R = ne.S;
      if (R !== null && R(v, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var Y = hm(
          g,
          c
        );
        gc(
          l,
          n,
          Y,
          da(l)
        );
      } else
        gc(
          l,
          n,
          c,
          da(l)
        );
    } catch (X) {
      gc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        da()
      );
    } finally {
      fe.p = r, ne.T = m;
    }
  }
  function q0() {
  }
  function bm(l, n, u, c) {
    if (l.tag !== 5) throw Error(x(476));
    var s = bi(l).queue;
    B0(
      l,
      s,
      n,
      Ie,
      u === null ? q0 : function() {
        return oa(l), u(c);
      }
    );
  }
  function bi(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Ie,
      baseState: Ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: Ie
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function oa(l) {
    var n = bi(l).next.queue;
    gc(l, n, {}, da());
  }
  function dd() {
    return ul(Vc);
  }
  function Y0() {
    return Ht().memoizedState;
  }
  function Sm() {
    return Ht().memoizedState;
  }
  function N0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = da();
          l = Sa(u);
          var c = Cu(n, l, u);
          c !== null && (Lt(c, n, u), Vo(c, n, u)), n = { cache: rm() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function j0(l, n, u) {
    var c = da();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, md(l) ? V0(n, u) : (u = Qf(l, n, u, c), u !== null && (Lt(u, l, c), Tm(u, n, c)));
  }
  function hd(l, n, u) {
    var c = da();
    gc(l, n, u, c);
  }
  function gc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (md(l)) V0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Bl(v, m))
            return Nr(l, n, s, 0), nt === null && go(), !1;
        } catch {
        } finally {
        }
      if (u = Qf(l, n, s, c), u !== null)
        return Lt(u, l, c), Tm(u, n, c), !0;
    }
    return !1;
  }
  function Bo(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Os(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, md(l)) {
      if (n) throw Error(x(479));
    } else
      n = Qf(
        l,
        u,
        c,
        2
      ), n !== null && Lt(n, l, 2);
  }
  function md(l) {
    var n = l.alternate;
    return l === Te || n !== null && n === Te;
  }
  function V0(l, n) {
    mi = Do = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Tm(l, n, u) {
    if (u & 4194176) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, dr(l, u);
    }
  }
  var fn = {
    readContext: ul,
    use: Mo,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useLayoutEffect: Ut,
    useInsertionEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useSyncExternalStore: Ut,
    useId: Ut
  };
  fn.useCacheRefresh = Ut, fn.useMemoCache = Ut, fn.useHostTransitionStatus = Ut, fn.useFormState = Ut, fn.useActionState = Ut, fn.useOptimistic = Ut;
  var _l = {
    readContext: ul,
    use: Mo,
    useCallback: function(l, n) {
      return Nl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ul,
    useEffect: C0,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, pi(
        4194308,
        4,
        fd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return pi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      pi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Nl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Su) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Nl();
      if (u !== void 0) {
        var s = u(n);
        if (Su) {
          ll(!0);
          try {
            u(n);
          } finally {
            ll(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = j0.bind(
        null,
        Te,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Nl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = cn(l);
      var n = l.queue, u = hd.bind(null, Te, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: gi,
    useDeferredValue: function(l, n) {
      var u = Nl();
      return rd(u, l, n);
    },
    useTransition: function() {
      var l = cn(!1);
      return l = B0.bind(
        null,
        Te,
        l.queue,
        !0,
        !1
      ), Nl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Te, s = Nl();
      if (we) {
        if (u === void 0)
          throw Error(x(407));
        u = u();
      } else {
        if (u = n(), nt === null) throw Error(x(349));
        Xe & 60 || ad(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, C0(nd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Au(
        9,
        H0.bind(
          null,
          c,
          r,
          u,
          n
        ),
        { destroy: void 0 },
        null
      ), u;
    },
    useId: function() {
      var l = Nl(), n = nt.identifierPrefix;
      if (we) {
        var u = xn, c = qa;
        u = (c & ~(1 << 32 - la(c) - 1)).toString(32) + u, n = ":" + n + "R" + u, u = Wr++, 0 < u && (n += "H" + u.toString(32)), n += ":";
      } else
        u = M0++, n = ":" + n + "r" + u.toString(32) + ":";
      return l.memoizedState = n;
    },
    useCacheRefresh: function() {
      return Nl().memoizedState = N0.bind(
        null,
        Te
      );
    }
  };
  _l.useMemoCache = Ff, _l.useHostTransitionStatus = dd, _l.useFormState = id, _l.useActionState = id, _l.useOptimistic = function(l) {
    var n = Nl();
    n.memoizedState = n.baseState = l;
    var u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return n.queue = u, n = Bo.bind(
      null,
      Te,
      !0,
      u
    ), u.dispatch = n, [l, n];
  };
  var Ru = {
    readContext: ul,
    use: Mo,
    useCallback: gm,
    useContext: ul,
    useEffect: od,
    useImperativeHandle: xo,
    useInsertionEffect: on,
    useLayoutEffect: pm,
    useMemo: sd,
    useReducer: If,
    useRef: Co,
    useState: function() {
      return If(Nn);
    },
    useDebugValue: gi,
    useDeferredValue: function(l, n) {
      var u = Ht();
      return x0(
        u,
        Je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = If(Nn)[0], n = Ht().memoizedState;
      return [
        typeof l == "boolean" ? l : pc(l),
        n
      ];
    },
    useSyncExternalStore: jn,
    useId: Y0
  };
  Ru.useCacheRefresh = Sm, Ru.useMemoCache = Ff, Ru.useHostTransitionStatus = dd, Ru.useFormState = cd, Ru.useActionState = cd, Ru.useOptimistic = function(l, n) {
    var u = Ht();
    return ud(u, Je, l, n);
  };
  var Si = {
    readContext: ul,
    use: Mo,
    useCallback: gm,
    useContext: ul,
    useEffect: od,
    useImperativeHandle: xo,
    useInsertionEffect: on,
    useLayoutEffect: pm,
    useMemo: sd,
    useReducer: ld,
    useRef: Co,
    useState: function() {
      return ld(Nn);
    },
    useDebugValue: gi,
    useDeferredValue: function(l, n) {
      var u = Ht();
      return Je === null ? rd(u, l, n) : x0(
        u,
        Je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = ld(Nn)[0], n = Ht().memoizedState;
      return [
        typeof l == "boolean" ? l : pc(l),
        n
      ];
    },
    useSyncExternalStore: jn,
    useId: Y0
  };
  Si.useCacheRefresh = Sm, Si.useMemoCache = Ff, Si.useHostTransitionStatus = dd, Si.useFormState = Ho, Si.useActionState = Ho, Si.useOptimistic = function(l, n) {
    var u = Ht();
    return Je !== null ? ud(u, Je, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
  };
  function Em(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ze({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ns = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? L(l) === l : !1;
    },
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = da(), s = Sa(c);
      s.payload = n, u != null && (s.callback = u), n = Cu(l, s, c), n !== null && (Lt(n, l, c), Vo(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = da(), s = Sa(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Cu(l, s, c), n !== null && (Lt(n, l, c), Vo(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = da(), c = Sa(u);
      c.tag = 2, n != null && (c.callback = n), n = Cu(l, c, u), n !== null && (Lt(n, l, u), Vo(n, l, u));
    }
  };
  function G0(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !ii(u, c) || !ii(s, r) : !0;
  }
  function ba(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && ns.enqueueReplaceState(n, n.state, null);
  }
  function Ti(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ze({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Zl = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof Ch == "object" && typeof Ch.emit == "function") {
      Ch.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Am(l) {
    Zl(l);
  }
  function w0(l) {
    console.error(l);
  }
  function sn(l) {
    Zl(l);
  }
  function us(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function bc(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function yd(l, n, u) {
    return u = Sa(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      us(l, n);
    }, u;
  }
  function Vn(l) {
    return l = Sa(l), l.tag = 3, l;
  }
  function vd(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        bc(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      bc(n, u, c), typeof s != "function" && (wu === null ? wu = /* @__PURE__ */ new Set([this]) : wu.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Rm(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && jo(
        n,
        u,
        s,
        !0
      ), u = ca.current, u !== null) {
        switch (u.tag) {
          case 13:
            return un === null ? Wm() : u.alternate === null && xt === 0 && (xt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Ro ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Gd(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Ro ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Gd(l, c, s)), !1;
        }
        throw Error(x(435, u.tag));
      }
      return Gd(l, c, s), Wm(), !1;
    }
    if (we)
      return n = ca.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== wr && (l = Error(x(422), { cause: c }), Eo($t(l, u)))) : (c !== wr && (n = Error(x(423), {
        cause: c
      }), Eo(
        $t(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = $t(c, u), s = yd(
        l.stateNode,
        c,
        s
      ), Ed(l, s), xt !== 4 && (xt = 2)), !1;
    var r = Error(x(520), { cause: c });
    if (r = $t(r, u), Uc === null ? Uc = [r] : Uc.push(r), xt !== 4 && (xt = 2), n === null) return !0;
    c = $t(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = yd(u.stateNode, c, l), Ed(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wu === null || !wu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Vn(s), vd(
              s,
              l,
              u,
              c
            ), Ed(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var zu = Error(x(461)), Ft = !1;
  function Ct(l, n, u, c) {
    n.child = l === null ? Kf(n, null, u, c) : yu(
      n,
      l.child,
      u,
      c
    );
  }
  function zm(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return Ei(n), c = Ir(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = ed(), l !== null && !Ft ? (td(l, n, s), Tl(l, n, s)) : (we && v && Vr(n), n.flags |= 1, Ct(l, n, c, s), n.child);
  }
  function qo(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Ln(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Sc(
        l,
        n,
        r,
        c,
        s
      )) : (l = ke(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !bd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ii, u(m, c) && l.ref === n.ref)
        return Tl(l, n, s);
    }
    return n.flags |= 1, l = Nu(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Sc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ii(r, c) && l.ref === n.ref)
        if (Ft = !1, n.pendingProps = c = r, bd(l, s))
          l.flags & 131072 && (Ft = !0);
        else
          return n.lanes = l.lanes, Tl(l, n, s);
    }
    return pd(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Dm(l, n, u) {
    var c = n.pendingProps, s = c.children, r = (n.stateNode._pendingVisibility & 2) !== 0, m = l !== null ? l.memoizedState : null;
    if (Du(l, n), c.mode === "hidden" || r) {
      if (n.flags & 128) {
        if (c = m !== null ? m.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return Om(
          l,
          n,
          c,
          u
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Yn(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? _r(n, m) : Zr(), Jr(n);
      else
        return n.lanes = n.childLanes = 536870912, Om(
          l,
          n,
          m !== null ? m.baseLanes | u : u,
          u
        );
    } else
      m !== null ? (Yn(n, m.cachePool), _r(n, m), pu(), n.memoizedState = null) : (l !== null && Yn(n, null), Zr(), pu());
    return Ct(l, n, s, u), n.child;
  }
  function Om(l, n, u, c) {
    var s = $r();
    return s = s === null ? null : { parent: qt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Yn(n, null), Zr(), Jr(n), l !== null && jo(l, n, c, !0), null;
  }
  function Du(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(x(284));
      (l === null || l.ref !== u) && (n.flags |= 2097664);
    }
  }
  function pd(l, n, u, c, s) {
    return Ei(n), u = Ir(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = ed(), l !== null && !Ft ? (td(l, n, s), Tl(l, n, s)) : (we && c && Vr(n), n.flags |= 1, Ct(l, n, u, s), n.child);
  }
  function is(l, n, u, c, s, r) {
    return Ei(n), n.updateQueue = null, u = Pr(
      n,
      c,
      u,
      s
    ), Oo(l), c = ed(), l !== null && !Ft ? (td(l, n, r), Tl(l, n, r)) : (we && c && Vr(n), n.flags |= 1, Ct(l, n, u, r), n.child);
  }
  function Mm(l, n, u, c, s) {
    if (Ei(n), n.stateNode === null) {
      var r = Ge, m = u.contextType;
      typeof m == "object" && m !== null && (r = ul(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ns, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Ai(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? ul(m) : Ge, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Em(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && ns.enqueueReplaceState(r, r.state, null), Go(n, c, r, s), Ec(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, g = Ti(u, v);
      r.props = g;
      var R = r.context, Y = u.contextType;
      m = Ge, typeof Y == "object" && Y !== null && (m = ul(Y));
      var X = u.getDerivedStateFromProps;
      Y = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Y || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || R !== m) && ba(
        n,
        r,
        c,
        m
      ), jl = !1;
      var U = n.memoizedState;
      r.state = U, Go(n, c, r, s), Ec(), R = n.memoizedState, v || U !== R || jl ? (typeof X == "function" && (Em(
        n,
        u,
        X,
        c
      ), R = n.memoizedState), (g = jl || G0(
        n,
        u,
        g,
        c,
        U,
        R,
        m
      )) ? (Y || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = R), r.props = c, r.state = R, r.context = m, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, rs(l, n), m = n.memoizedProps, Y = Ti(u, m), r.props = Y, X = n.pendingProps, U = r.context, R = u.contextType, g = Ge, typeof R == "object" && R !== null && (g = ul(R)), v = u.getDerivedStateFromProps, (R = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== X || U !== g) && ba(
        n,
        r,
        c,
        g
      ), jl = !1, U = n.memoizedState, r.state = U, Go(n, c, r, s), Ec();
      var N = n.memoizedState;
      m !== X || U !== N || jl || l !== null && l.dependencies !== null && ft(l.dependencies) ? (typeof v == "function" && (Em(
        n,
        u,
        v,
        c
      ), N = n.memoizedState), (Y = jl || G0(
        n,
        u,
        Y,
        c,
        U,
        N,
        g
      ) || l !== null && l.dependencies !== null && ft(l.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, N, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        N,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = g, c = Y) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Du(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = yu(
      n,
      l.child,
      null,
      s
    ), n.child = yu(
      n,
      null,
      u,
      s
    )) : Ct(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Tl(
      l,
      n,
      s
    ), l;
  }
  function Um(l, n, u, c) {
    return fc(), n.flags |= 256, Ct(l, n, u, c), n.child;
  }
  var Hm = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cs(l) {
    return { baseLanes: l, cachePool: mm() };
  }
  function Gn(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Va), l;
  }
  function Cm(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Bt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (we) {
        if (s ? vu(n) : pu(), we) {
          var v = Wt, g;
          if (g = v) {
            e: {
              for (g = v, v = nn; g.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (g = kl(
                  g.nextSibling
                ), g === null) {
                  v = null;
                  break e;
                }
              }
              v = g;
            }
            v !== null ? (n.memoizedState = {
              dehydrated: v,
              treeContext: mu !== null ? { id: qa, overflow: xn } : null,
              retryLane: 536870912
            }, g = Ea(
              18,
              null,
              null,
              0
            ), g.stateNode = v, g.return = n, n.child = g, Sl = n, Wt = null, g = !0) : g = !1;
          }
          g || oc(n);
        }
        if (v = n.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return v.data === "$!" ? n.lanes = 16 : n.lanes = 536870912, null;
        qn(n);
      }
      return v = c.children, c = c.fallback, s ? (pu(), s = n.mode, v = Yo(
        { mode: "hidden", children: v },
        s
      ), c = ju(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, s = n.child, s.memoizedState = cs(u), s.childLanes = Gn(
        l,
        m,
        u
      ), n.memoizedState = Hm, c) : (vu(n), os(n, v));
    }
    if (g = l.memoizedState, g !== null && (v = g.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (vu(n), n.flags &= -257, n = Ou(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (pu(), n.child = l.child, n.flags |= 128, n = null) : (pu(), s = c.fallback, v = n.mode, c = Yo(
          { mode: "visible", children: c.children },
          v
        ), s = ju(
          s,
          v,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, yu(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = cs(u), c.childLanes = Gn(
          l,
          m,
          u
        ), n.memoizedState = Hm, n = s);
      else if (vu(n), v.data === "$!") {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var R = m.dgst;
        m = R, c = Error(x(419)), c.stack = "", c.digest = m, Eo({ value: c, source: null, stack: null }), n = Ou(
          l,
          n,
          u
        );
      } else if (Ft || jo(l, n, u, !1), m = (u & l.childLanes) !== 0, Ft || m) {
        if (m = nt, m !== null) {
          if (c = u & -u, c & 42) c = 1;
          else
            switch (c) {
              case 2:
                c = 1;
                break;
              case 8:
                c = 4;
                break;
              case 32:
                c = 16;
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
                c = 64;
                break;
              case 268435456:
                c = 134217728;
                break;
              default:
                c = 0;
            }
          if (c = c & (m.suspendedLanes | u) ? 0 : c, c !== 0 && c !== g.retryLane)
            throw g.retryLane = c, Cn(l, c), Lt(m, l, c), zu;
        }
        v.data === "$?" || Wm(), n = Ou(
          l,
          n,
          u
        );
      } else
        v.data === "$?" ? (n.flags |= 128, n.child = l.child, n = dp.bind(
          null,
          l
        ), v._reactRetry = n, n = null) : (l = g.treeContext, Wt = kl(
          v.nextSibling
        ), Sl = n, we = !0, Ya = null, nn = !1, l !== null && (ia[Yl++] = qa, ia[Yl++] = xn, ia[Yl++] = mu, qa = l.id, xn = l.overflow, mu = n), n = os(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (pu(), s = c.fallback, v = n.mode, g = l.child, R = g.sibling, c = Nu(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 31457280, R !== null ? s = Nu(R, s) : (s = ju(
      s,
      v,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, v = l.child.memoizedState, v === null ? v = cs(u) : (g = v.cachePool, g !== null ? (R = qt._currentValue, g = g.parent !== R ? { parent: R, pool: R } : g) : g = mm(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: g
    }), s.memoizedState = v, s.childLanes = Gn(
      l,
      m,
      u
    ), n.memoizedState = Hm, c) : (vu(n), u = l.child, l = u.sibling, u = Nu(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function os(l, n) {
    return n = Yo(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Yo(l, n) {
    return cl(l, n, 0, null);
  }
  function Ou(l, n, u) {
    return yu(n, l.child, null, u), l = os(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function xm(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Td(l.return, n, u);
  }
  function fs(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function gd(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (Ct(l, n, c.children, u), c = Bt.current, c & 2)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && xm(l, u, n);
          else if (l.tag === 19)
            xm(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch ($e(Bt, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Jf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), fs(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Jf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        fs(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        fs(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Tl(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), _n |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (jo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(x(153));
    if (n.child !== null) {
      for (l = n.child, u = Nu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Nu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function bd(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && ft(l)));
  }
  function Sd(l, n, u) {
    switch (n.tag) {
      case 3:
        $a(n, n.stateNode.containerInfo), Uu(n, qt, l.memoizedState.cache), fc();
        break;
      case 27:
      case 5:
        Af(n);
        break;
      case 4:
        $a(n, n.stateNode.containerInfo);
        break;
      case 10:
        Uu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (vu(n), n.flags |= 128, null) : u & n.child.childLanes ? Cm(l, n, u) : (vu(n), l = Tl(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        vu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (jo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return gd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), $e(Bt, Bt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Dm(l, n, u);
      case 24:
        Uu(n, qt, l.memoizedState.cache);
    }
    return Tl(l, n, u);
  }
  function No(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Ft = !0;
      else {
        if (!bd(l, u) && !(n.flags & 128))
          return Ft = !1, Sd(
            l,
            n,
            u
          );
        Ft = !!(l.flags & 131072);
      }
    else
      Ft = !1, we && n.flags & 1048576 && im(n, hu, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Ln(c) ? (l = Ti(c, l), n.tag = 1, n = Mm(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = pd(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === Ne) {
                n.tag = 11, n = zm(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === wt) {
                n.tag = 14, n = qo(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Ha(c) || c, Error(x(306, n, ""));
          }
        }
        return n;
      case 0:
        return pd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = Ti(
          c,
          n.pendingProps
        ), Mm(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if ($a(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(x(387));
          var r = n.pendingProps;
          s = n.memoizedState, c = s.element, rs(l, n), Go(n, r, null, u);
          var m = n.memoizedState;
          if (r = m.cache, Uu(n, qt, r), r !== s.cache && Kl(
            n,
            [qt],
            u,
            !0
          ), Ec(), r = m.element, s.isDehydrated)
            if (s = {
              element: r,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Um(
                l,
                n,
                r,
                u
              );
              break e;
            } else if (r !== c) {
              c = $t(
                Error(x(424)),
                n
              ), Eo(c), n = Um(
                l,
                n,
                r,
                u
              );
              break e;
            } else
              for (Wt = kl(
                n.stateNode.containerInfo.firstChild
              ), Sl = n, we = !0, Ya = null, nn = !0, u = Kf(
                n,
                null,
                r,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (fc(), r === c) {
              n = Tl(
                l,
                n,
                u
              );
              break e;
            }
            Ct(l, n, r, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Du(l, n), l === null ? (u = Rl(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : we || (u = n.type, l = n.pendingProps, c = xs(
          xe.current
        ).createElement(u), c[at] = n, c[Ll] = l, fl(c, u, l), Dt(c), n.stateNode = c) : n.memoizedState = Rl(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Af(n), l === null && we && (c = n.stateNode = Ns(
          n.type,
          n.pendingProps,
          xe.current
        ), Sl = n, nn = !0, Wt = kl(
          c.firstChild
        )), c = n.pendingProps.children, l !== null || we ? Ct(
          l,
          n,
          c,
          u
        ) : n.child = yu(
          n,
          null,
          c,
          u
        ), Du(l, n), n.child;
      case 5:
        return l === null && we && ((s = c = Wt) && (c = Xu(
          c,
          n.type,
          n.pendingProps,
          nn
        ), c !== null ? (n.stateNode = c, Sl = n, Wt = kl(
          c.firstChild
        ), nn = !1, s = !0) : s = !1), s || oc(n)), Af(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Zd(s, r) ? c = null : m !== null && Zd(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ir(
          l,
          n,
          U0,
          null,
          null,
          u
        ), Vc._currentValue = s), Du(l, n), Ct(l, n, c, u), n.child;
      case 6:
        return l === null && we && ((l = u = Wt) && (u = Hi(
          u,
          n.pendingProps,
          nn
        ), u !== null ? (n.stateNode = u, Sl = n, Wt = null, l = !0) : l = !1), l || oc(n)), null;
      case 13:
        return Cm(l, n, u);
      case 4:
        return $a(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = yu(
          n,
          null,
          c,
          u
        ) : Ct(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return zm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ct(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ct(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ct(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Uu(n, n.type, c.value), Ct(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ei(n), s = ul(s), c = c(s), n.flags |= 1, Ct(l, n, c, u), n.child;
      case 14:
        return qo(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Sc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return gd(l, n, u);
      case 22:
        return Dm(l, n, u);
      case 24:
        return Ei(n), c = ul(qt), l === null ? (s = $r(), s === null && (s = nt, r = rm(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Ai(n), Uu(n, qt, s)) : (l.lanes & u && (rs(l, n), Go(n, null, null, u), Ec()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Uu(n, qt, c)) : (c = r.cache, Uu(n, qt, c), c !== s.cache && Kl(
          n,
          [qt],
          u,
          !0
        ))), Ct(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(x(156, n.tag));
  }
  var ot = Ql(null), Tc = null, Mu = null;
  function Uu(l, n, u) {
    $e(ot, n._currentValue), n._currentValue = u;
  }
  function Hu(l) {
    l._currentValue = ot.current, pt(ot);
  }
  function Td(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Kl(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (v.context === n[g]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), Td(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(x(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Td(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function jo(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(x(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Bl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === iu.current) {
        if (m = s.alternate, m === null) throw Error(x(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Vc) : l = [Vc]);
      }
      s = s.return;
    }
    l !== null && Kl(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function ft(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Bl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ei(l) {
    Tc = l, Mu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ul(l) {
    return X0(Tc, l);
  }
  function ss(l, n) {
    return Tc === null && Ei(l), X0(l, n);
  }
  function X0(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Mu === null) {
      if (l === null) throw Error(x(308));
      Mu = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Mu = Mu.next = n;
    return u;
  }
  var jl = !1;
  function Ai(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rs(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Sa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Cu(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, St & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = bl(l), jr(l, null, u), n;
    }
    return Nr(l, c, n, u), bl(l);
  }
  function Vo(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194176) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, dr(l, u);
    }
  }
  function Ed(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var ds = !1;
  function Ec() {
    if (ds) {
      var l = gu;
      if (l !== null) throw l;
    }
  }
  function Go(l, n, u, c) {
    ds = !1;
    var s = l.updateQueue;
    jl = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var g = v, R = g.next;
      g.next = null, m === null ? r = R : m.next = R, m = g;
      var Y = l.alternate;
      Y !== null && (Y = Y.updateQueue, v = Y.lastBaseUpdate, v !== m && (v === null ? Y.firstBaseUpdate = R : v.next = R, Y.lastBaseUpdate = g));
    }
    if (r !== null) {
      var X = s.baseState;
      m = 0, Y = R = g = null, v = r;
      do {
        var U = v.lane & -536870913, N = U !== v.lane;
        if (N ? (Xe & U) === U : (c & U) === U) {
          U !== 0 && U === di && (ds = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var I = l, oe = v;
            U = n;
            var Tt = u;
            switch (oe.tag) {
              case 1:
                if (I = oe.payload, typeof I == "function") {
                  X = I.call(Tt, X, U);
                  break e;
                }
                X = I;
                break e;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = oe.payload, U = typeof I == "function" ? I.call(Tt, X, U) : I, U == null) break e;
                X = ze({}, X, U);
                break e;
              case 2:
                jl = !0;
            }
          }
          U = v.callback, U !== null && (l.flags |= 64, N && (l.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [U] : N.push(U));
        } else
          N = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Y === null ? (R = Y = N, g = X) : Y = Y.next = N, m |= U;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          N = v, v = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      Y === null && (g = X), s.baseState = g, s.firstBaseUpdate = R, s.lastBaseUpdate = Y, r === null && (s.shared.lanes = 0), _n |= m, l.lanes = m, l.memoizedState = X;
    }
  }
  function Q0(l, n) {
    if (typeof l != "function")
      throw Error(x(191, l));
    l.call(n);
  }
  function L0(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Q0(u[l], n);
  }
  function wo(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      Pe(n, n.return, v);
    }
  }
  function xu(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var g = u;
              try {
                v();
              } catch (R) {
                Pe(
                  s,
                  g,
                  R
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (R) {
      Pe(n, n.return, R);
    }
  }
  function _0(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        L0(n, u);
      } catch (c) {
        Pe(l, l.return, c);
      }
    }
  }
  function Ac(l, n, u) {
    u.props = Ti(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Pe(l, n, c);
    }
  }
  function wn(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        var c = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var s = c;
            break;
          default:
            s = c;
        }
        typeof u == "function" ? l.refCleanup = u(s) : u.current = s;
      }
    } catch (r) {
      Pe(l, n, r);
    }
  }
  function fa(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Pe(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Pe(l, n, s);
        }
      else u.current = null;
  }
  function Ad(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Pe(l, l.return, s);
    }
  }
  function Z0(l, n, u) {
    try {
      var c = l.stateNode;
      uv(c, l.type, u, n), c[Ll] = n;
    } catch (s) {
      Pe(l, l.return, s);
    }
  }
  function K0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function Rd(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || K0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Bu(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.nodeType === 8 ? u.parentNode.insertBefore(l, n) : u.insertBefore(l, n) : (u.nodeType === 8 ? (n = u.parentNode, n.insertBefore(l, u)) : (n = u, n.appendChild(l)), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = he));
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (Bu(l, n, u), l = l.sibling; l !== null; )
        Bu(l, n, u), l = l.sibling;
  }
  function hs(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (hs(l, n, u), l = l.sibling; l !== null; )
        hs(l, n, u), l = l.sibling;
  }
  var je = !1, bt = !1, Bm = !1, qm = typeof WeakSet == "function" ? WeakSet : Set, il = null, J0 = !1;
  function Ym(l, n) {
    if (l = l.containerInfo, Qd = Xs, l = wf(l), xr(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, g = -1, R = 0, Y = 0, X = l, U = null;
            t: for (; ; ) {
              for (var N; X !== u || s !== 0 && X.nodeType !== 3 || (v = m + s), X !== r || c !== 0 && X.nodeType !== 3 || (g = m + c), X.nodeType === 3 && (m += X.nodeValue.length), (N = X.firstChild) !== null; )
                U = X, X = N;
              for (; ; ) {
                if (X === l) break t;
                if (U === u && ++R === s && (v = m), U === r && ++Y === c && (g = m), (N = X.nextSibling) !== null) break;
                X = U, U = X.parentNode;
              }
              X = N;
            }
            u = v === -1 || g === -1 ? null : { start: v, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ld = { focusedElem: l, selectionRange: u }, Xs = !1, il = n; il !== null; )
      if (n = il, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, il = l;
      else
        for (; il !== null; ) {
          switch (n = il, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var I = Ti(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    I,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (oe) {
                  Pe(
                    u,
                    u.return,
                    oe
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Ys(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ys(l);
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
              if (l & 1024) throw Error(x(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, il = l;
            break;
          }
          il = n.return;
        }
    return I = J0, J0 = !1, I;
  }
  function Nm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        dn(l, u), c & 4 && wo(5, u);
        break;
      case 1:
        if (dn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (v) {
              Pe(u, u.return, v);
            }
          else {
            var s = Ti(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Pe(
                u,
                u.return,
                v
              );
            }
          }
        c & 64 && _0(u), c & 512 && wn(u, u.return);
        break;
      case 3:
        if (dn(l, u), c & 64 && (c = u.updateQueue, c !== null)) {
          if (l = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                l = u.child.stateNode;
                break;
              case 1:
                l = u.child.stateNode;
            }
          try {
            L0(c, l);
          } catch (v) {
            Pe(u, u.return, v);
          }
        }
        break;
      case 26:
        dn(l, u), c & 512 && wn(u, u.return);
        break;
      case 27:
      case 5:
        dn(l, u), n === null && c & 4 && Ad(u), c & 512 && wn(u, u.return);
        break;
      case 12:
        dn(l, u);
        break;
      case 13:
        dn(l, u), c & 4 && rn(l, u);
        break;
      case 22:
        if (s = u.memoizedState !== null || je, !s) {
          n = n !== null && n.memoizedState !== null || bt;
          var r = je, m = bt;
          je = s, (bt = n) && !m ? Yu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : dn(l, u), je = r, bt = m;
        }
        c & 512 && (u.memoizedProps.mode === "manual" ? wn(u, u.return) : fa(u, u.return));
        break;
      default:
        dn(l, u);
    }
  }
  function jm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, jm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Of(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var jt = null, El = !1;
  function qu(l, n, u) {
    for (u = u.child; u !== null; )
      k0(l, n, u), u = u.sibling;
  }
  function k0(l, n, u) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(xa, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bt || fa(u, n), qu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bt || fa(u, n);
        var c = jt, s = El;
        for (jt = u.stateNode, qu(
          l,
          n,
          u
        ), u = u.stateNode, n = u.attributes; n.length; )
          u.removeAttributeNode(n[0]);
        Of(u), jt = c, El = s;
        break;
      case 5:
        bt || fa(u, n);
      case 6:
        s = jt;
        var r = El;
        if (jt = null, qu(
          l,
          n,
          u
        ), jt = s, El = r, jt !== null)
          if (El)
            try {
              l = jt, c = u.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(c) : l.removeChild(c);
            } catch (m) {
              Pe(
                u,
                n,
                m
              );
            }
          else
            try {
              jt.removeChild(u.stateNode);
            } catch (m) {
              Pe(
                u,
                n,
                m
              );
            }
        break;
      case 18:
        jt !== null && (El ? (n = jt, u = u.stateNode, n.nodeType === 8 ? qs(
          n.parentNode,
          u
        ) : n.nodeType === 1 && qs(n, u), of(n)) : qs(jt, u.stateNode));
        break;
      case 4:
        c = jt, s = El, jt = u.stateNode.containerInfo, El = !0, qu(
          l,
          n,
          u
        ), jt = c, El = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || xu(2, u, n), bt || xu(4, u, n), qu(
          l,
          n,
          u
        );
        break;
      case 1:
        bt || (fa(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Ac(
          u,
          n,
          c
        )), qu(
          l,
          n,
          u
        );
        break;
      case 21:
        qu(
          l,
          n,
          u
        );
        break;
      case 22:
        bt || fa(u, n), bt = (c = bt) || u.memoizedState !== null, qu(
          l,
          n,
          u
        ), bt = c;
        break;
      default:
        qu(
          l,
          n,
          u
        );
    }
  }
  function rn(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        of(l);
      } catch (u) {
        Pe(n, n.return, u);
      }
  }
  function ms(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new qm()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new qm()), n;
      default:
        throw Error(x(435, l.tag));
    }
  }
  function zd(l, n) {
    var u = ms(l);
    n.forEach(function(c) {
      var s = hp.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Ta(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              jt = v.stateNode, El = !1;
              break e;
            case 3:
              jt = v.stateNode.containerInfo, El = !0;
              break e;
            case 4:
              jt = v.stateNode.containerInfo, El = !0;
              break e;
          }
          v = v.return;
        }
        if (jt === null) throw Error(x(160));
        k0(r, m, s), jt = null, El = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Vm(n, l), n = n.sibling;
  }
  var ja = null;
  function Vm(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ta(n, l), sa(l), c & 4 && (xu(3, l, l.return), wo(3, l), xu(5, l, l.return));
        break;
      case 1:
        Ta(n, l), sa(l), c & 512 && (bt || u === null || fa(u, u.return)), c & 64 && je && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = ja;
        if (Ta(n, l), sa(l), c & 512 && (bt || u === null || fa(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[uo] || r[at] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), fl(r, c, u), r[at] = l, Dt(r), c = r;
                      break e;
                    case "link":
                      var m = Gs(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), fl(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Gs(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), fl(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(x(468, c));
                  }
                  r[at] = l, Dt(r), c = r;
                }
                l.stateNode = c;
              } else
                _u(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Vs(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? _u(
              s,
              l.type,
              l.stateNode
            ) : Vs(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Z0(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        if (c & 4 && l.alternate === null) {
          s = l.stateNode, r = l.memoizedProps;
          try {
            for (var g = s.firstChild; g; ) {
              var R = g.nextSibling, Y = g.nodeName;
              g[uo] || Y === "HEAD" || Y === "BODY" || Y === "SCRIPT" || Y === "STYLE" || Y === "LINK" && g.rel.toLowerCase() === "stylesheet" || s.removeChild(g), g = R;
            }
            for (var X = l.type, U = s.attributes; U.length; )
              s.removeAttributeNode(U[0]);
            fl(s, X, r), s[at] = l, s[Ll] = r;
          } catch (I) {
            Pe(l, l.return, I);
          }
        }
      case 5:
        if (Ta(n, l), sa(l), c & 512 && (bt || u === null || fa(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            cu(s, "");
          } catch (I) {
            Pe(l, l.return, I);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Z0(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (Bm = !0);
        break;
      case 6:
        if (Ta(n, l), sa(l), c & 4) {
          if (l.stateNode === null)
            throw Error(x(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (I) {
            Pe(l, l.return, I);
          }
        }
        break;
      case 3:
        if (_a = null, s = ja, ja = Jd(n.containerInfo), Ta(n, l), ja = s, sa(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            of(n.containerInfo);
          } catch (I) {
            Pe(l, l.return, I);
          }
        Bm && (Bm = !1, Gm(l));
        break;
      case 4:
        c = ja, ja = Jd(
          l.stateNode.containerInfo
        ), Ta(n, l), sa(l), ja = c;
        break;
      case 12:
        Ta(n, l), sa(l);
        break;
      case 13:
        Ta(n, l), sa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (ra = k()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, zd(l, c)));
        break;
      case 22:
        if (c & 512 && (bt || u === null || fa(u, u.return)), g = l.memoizedState !== null, R = u !== null && u.memoizedState !== null, Y = je, X = bt, je = Y || g, bt = X || R, Ta(n, l), bt = X, je = Y, sa(l), n = l.stateNode, n._current = l, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, c & 8192 && (n._visibility = g ? n._visibility & -2 : n._visibility | 1, g && (n = je || bt, u === null || R || n || Rc(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
          e: for (u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (u === null) {
                R = u = n;
                try {
                  if (s = R.stateNode, g)
                    r = s.style, typeof r.setProperty == "function" ? r.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : r.display = "none";
                  else {
                    m = R.stateNode, v = R.memoizedProps.style;
                    var N = v != null && v.hasOwnProperty("display") ? v.display : null;
                    m.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (I) {
                  Pe(R, R.return, I);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = g ? "" : R.memoizedProps;
                } catch (I) {
                  Pe(R, R.return, I);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, zd(l, u))));
        break;
      case 19:
        Ta(n, l), sa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, zd(l, c)));
        break;
      case 21:
        break;
      default:
        Ta(n, l), sa(l);
    }
  }
  function sa(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        if (l.tag !== 27) {
          e: {
            for (var u = l.return; u !== null; ) {
              if (K0(u)) {
                var c = u;
                break e;
              }
              u = u.return;
            }
            throw Error(x(160));
          }
          switch (c.tag) {
            case 27:
              var s = c.stateNode, r = Rd(l);
              hs(l, r, s);
              break;
            case 5:
              var m = c.stateNode;
              c.flags & 32 && (cu(m, ""), c.flags &= -33);
              var v = Rd(l);
              hs(l, v, m);
              break;
            case 3:
            case 4:
              var g = c.stateNode.containerInfo, R = Rd(l);
              Bu(
                l,
                R,
                g
              );
              break;
            default:
              throw Error(x(161));
          }
        }
      } catch (Y) {
        Pe(l, l.return, Y);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Gm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Gm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function dn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Nm(l, n.alternate, n), n = n.sibling;
  }
  function Rc(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xu(4, n, n.return), Rc(n);
          break;
        case 1:
          fa(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Ac(
            n,
            n.return,
            u
          ), Rc(n);
          break;
        case 26:
        case 27:
        case 5:
          fa(n, n.return), Rc(n);
          break;
        case 22:
          fa(n, n.return), n.memoizedState === null && Rc(n);
          break;
        default:
          Rc(n);
      }
      l = l.sibling;
    }
  }
  function Yu(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Yu(
            s,
            r,
            u
          ), wo(4, r);
          break;
        case 1:
          if (Yu(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (R) {
              Pe(c, c.return, R);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  Q0(g[s], v);
            } catch (R) {
              Pe(c, c.return, R);
            }
          }
          u && m & 64 && _0(r), wn(r, r.return);
          break;
        case 26:
        case 27:
        case 5:
          Yu(
            s,
            r,
            u
          ), u && c === null && m & 4 && Ad(r), wn(r, r.return);
          break;
        case 12:
          Yu(
            s,
            r,
            u
          );
          break;
        case 13:
          Yu(
            s,
            r,
            u
          ), u && m & 4 && rn(s, r);
          break;
        case 22:
          r.memoizedState === null && Yu(
            s,
            r,
            u
          ), wn(r, r.return);
          break;
        default:
          Yu(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function wm(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && kf(u));
  }
  function Dd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && kf(l));
  }
  function me(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Od(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Od(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        me(
          l,
          n,
          u,
          c
        ), s & 2048 && wo(9, n);
        break;
      case 3:
        me(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && kf(l)));
        break;
      case 12:
        if (s & 2048) {
          me(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Pe(n, n.return, g);
          }
        } else
          me(
            l,
            n,
            u,
            c
          );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, n.memoizedState !== null ? r._visibility & 4 ? me(
          l,
          n,
          u,
          c
        ) : Xo(l, n) : r._visibility & 4 ? me(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 4, Ri(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && wm(
          n.alternate,
          n
        );
        break;
      case 24:
        me(
          l,
          n,
          u,
          c
        ), s & 2048 && Dd(n.alternate, n);
        break;
      default:
        me(
          l,
          n,
          u,
          c
        );
    }
  }
  function Ri(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, v = u, g = c, R = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ri(
            r,
            m,
            v,
            g,
            s
          ), wo(8, m);
          break;
        case 23:
          break;
        case 22:
          var Y = m.stateNode;
          m.memoizedState !== null ? Y._visibility & 4 ? Ri(
            r,
            m,
            v,
            g,
            s
          ) : Xo(
            r,
            m
          ) : (Y._visibility |= 4, Ri(
            r,
            m,
            v,
            g,
            s
          )), s && R & 2048 && wm(
            m.alternate,
            m
          );
          break;
        case 24:
          Ri(
            r,
            m,
            v,
            g,
            s
          ), s && R & 2048 && Dd(m.alternate, m);
          break;
        default:
          Ri(
            r,
            m,
            v,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Xo(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Xo(u, c), s & 2048 && wm(
              c.alternate,
              c
            );
            break;
          case 24:
            Xo(u, c), s & 2048 && Dd(c.alternate, c);
            break;
          default:
            Xo(u, c);
        }
        n = n.sibling;
      }
  }
  var zc = 8192;
  function Xn(l) {
    if (l.subtreeFlags & zc)
      for (l = l.child; l !== null; )
        ys(l), l = l.sibling;
  }
  function ys(l) {
    switch (l.tag) {
      case 26:
        Xn(l), l.flags & zc && l.memoizedState !== null && Tp(
          ja,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Xn(l);
        break;
      case 3:
      case 4:
        var n = ja;
        ja = Jd(l.stateNode.containerInfo), Xn(l), ja = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = zc, zc = 16777216, Xn(l), zc = n) : Xn(l));
        break;
      default:
        Xn(l);
    }
  }
  function Dc(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Qo(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          il = c, $0(
            c,
            l
          );
        }
      Dc(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Md(l), l = l.sibling;
  }
  function Md(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Qo(l), l.flags & 2048 && xu(9, l, l.return);
        break;
      case 3:
        Qo(l);
        break;
      case 12:
        Qo(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -5, Vt(l)) : Qo(l);
        break;
      default:
        Qo(l);
    }
  }
  function Vt(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          il = c, $0(
            c,
            l
          );
        }
      Dc(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          xu(8, n, n.return), Vt(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 4 && (u._visibility &= -5, Vt(n));
          break;
        default:
          Vt(n);
      }
      l = l.sibling;
    }
  }
  function $0(l, n) {
    for (; il !== null; ) {
      var u = il;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xu(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          kf(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, il = c;
      else
        e: for (u = l; il !== null; ) {
          c = il;
          var s = c.sibling, r = c.return;
          if (jm(c), c === u) {
            il = null;
            break e;
          }
          if (s !== null) {
            s.return = r, il = s;
            break e;
          }
          il = r;
        }
    }
  }
  function Qn(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ea(l, n, u, c) {
    return new Qn(l, n, u, c);
  }
  function Ln(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Nu(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ea(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 31457280, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function vs(l, n) {
    l.flags &= 31457282;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function ke(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Ln(l) && (m = 1);
    else if (typeof l == "string")
      m = Vl(
        l,
        u,
        Ul.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case be:
          return ju(u.children, s, r, n);
        case Z:
          m = 8, s |= 24;
          break;
        case hl:
          return l = Ea(12, u, n, s | 2), l.elementType = hl, l.lanes = r, l;
        case tt:
          return l = Ea(13, u, n, s), l.elementType = tt, l.lanes = r, l;
        case Fe:
          return l = Ea(19, u, n, s), l.elementType = Fe, l.lanes = r, l;
        case re:
          return cl(u, s, r, n);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case zt:
              case lt:
                m = 10;
                break e;
              case ut:
                m = 9;
                break e;
              case Ne:
                m = 11;
                break e;
              case wt:
                m = 14;
                break e;
              case pe:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            x(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ea(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ju(l, n, u, c) {
    return l = Ea(7, l, c, n), l.lanes = u, l;
  }
  function cl(l, n, u, c) {
    l = Ea(22, l, c, n), l.elementType = re, l.lanes = u;
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var r = s._current;
        if (r === null) throw Error(x(456));
        if (!(s._pendingVisibility & 2)) {
          var m = Cn(r, 2);
          m !== null && (s._pendingVisibility |= 2, Lt(m, r, 2));
        }
      },
      attach: function() {
        var r = s._current;
        if (r === null) throw Error(x(456));
        if (s._pendingVisibility & 2) {
          var m = Cn(r, 2);
          m !== null && (s._pendingVisibility &= -3, Lt(m, r, 2));
        }
      }
    };
    return l.stateNode = s, l;
  }
  function Xm(l, n, u) {
    return l = Ea(6, l, null, n), l.lanes = u, l;
  }
  function Ud(l, n, u) {
    return n = Ea(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  function hn(l) {
    l.flags |= 4;
  }
  function Qm(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Wl(n)) {
      if (n = ca.current, n !== null && ((Xe & 4194176) === Xe ? un !== null : (Xe & 62914560) !== Xe && !(Xe & 536870912) || n !== un))
        throw Bn = Ro, sc;
      l.flags |= 8192;
    }
  }
  function Jl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Zi() : 536870912, l.lanes |= n, _o |= n);
  }
  function Lo(l, n) {
    if (!we)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function dt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 31457280, c |= s.flags & 31457280, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function W0(l, n, u) {
    var c = n.pendingProps;
    switch (Gr(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(n), null;
      case 1:
        return dt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Hu(qt), Tn(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (To(n) ? hn(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ya !== null && (qd(Ya), Ya = null))), dt(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (hn(n), u !== null ? (dt(n), Qm(n, u)) : (dt(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (hn(n), dt(n), Qm(n, u)) : (dt(n), n.flags &= -16777217) : (l.memoizedProps !== c && hn(n), dt(n), n.flags &= -16777217), null;
      case 27:
        We(n), u = xe.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(x(166));
            return dt(n), null;
          }
          l = Ul.current, To(n) ? cm(n) : (l = Ns(s, c, u), n.stateNode = l, hn(n));
        }
        return dt(n), null;
      case 5:
        if (We(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(x(166));
            return dt(n), null;
          }
          if (l = Ul.current, To(n))
            cm(n);
          else {
            switch (s = xs(
              xe.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[at] = n, l[Ll] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (fl(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && hn(n);
          }
        }
        return dt(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && hn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(x(166));
          if (l = xe.current, To(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Sl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[at] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || H(l.nodeValue, u)), l || oc(n);
          } else
            l = xs(l).createTextNode(
              c
            ), l[at] = n, n.stateNode = l;
        }
        return dt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = To(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(x(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(x(317));
              s[at] = n;
            } else
              fc(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            dt(n), s = !1;
          } else
            Ya !== null && (qd(Ya), Ya = null), s = !0;
          if (!s)
            return n.flags & 256 ? (qn(n), n) : (qn(n), null);
        }
        if (qn(n), n.flags & 128)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Jl(n, n.updateQueue), dt(n), null;
      case 4:
        return Tn(), l === null && Ga(n.stateNode.containerInfo), dt(n), null;
      case 10:
        return Hu(n.type), dt(n), null;
      case 19:
        if (pt(Bt), s = n.memoizedState, s === null) return dt(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) Lo(s, !1);
          else {
            if (xt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = Jf(l), r !== null) {
                  for (n.flags |= 128, Lo(s, !1), l = r.updateQueue, n.updateQueue = l, Jl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    vs(u, l), u = u.sibling;
                  return $e(
                    Bt,
                    Bt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && k() > ps && (n.flags |= 128, c = !0, Lo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Jf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Jl(n, l), Lo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !we)
                return dt(n), null;
            } else
              2 * k() - s.renderingStartTime > ps && u !== 536870912 && (n.flags |= 128, c = !0, Lo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = k(), n.sibling = null, l = Bt.current, $e(Bt, c ? l & 1 | 2 : l & 1), n) : (dt(n), null);
      case 22:
      case 23:
        return qn(n), Kr(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (dt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : dt(n), u = n.updateQueue, u !== null && Jl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && pt(hi), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Hu(qt), dt(n), null;
      case 25:
        return null;
    }
    throw Error(x(156, n.tag));
  }
  function Hd(l, n) {
    switch (Gr(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Hu(qt), Tn(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return We(n), null;
      case 13:
        if (qn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(x(340));
          fc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return pt(Bt), null;
      case 4:
        return Tn(), null;
      case 10:
        return Hu(n.type), null;
      case 22:
      case 23:
        return qn(n), Kr(), l !== null && pt(hi), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Hu(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lm(l, n) {
    switch (Gr(n), n.tag) {
      case 3:
        Hu(qt), Tn();
        break;
      case 26:
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        Tn();
        break;
      case 13:
        qn(n);
        break;
      case 19:
        pt(Bt);
        break;
      case 10:
        Hu(n.type);
        break;
      case 22:
      case 23:
        qn(n), Kr(), l !== null && pt(hi);
        break;
      case 24:
        Hu(qt);
    }
  }
  var cp = {
    getCacheForType: function(l) {
      var n = ul(qt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, Cd = typeof WeakMap == "function" ? WeakMap : Map, St = 0, nt = null, De = null, Xe = 0, st = 0, Aa = null, Vu = !1, Oc = !1, _m = !1, Gu = 0, xt = 0, _n = 0, Mc = 0, Zm = 0, Va = 0, _o = 0, Uc = null, Zn = null, Km = !1, ra = 0, ps = 1 / 0, gs = null, wu = null, bs = !1, Hc = null, Ss = 0, xd = 0, Jm = null, zi = 0, Bd = null;
  function da() {
    if (St & 2 && Xe !== 0)
      return Xe & -Xe;
    if (ne.T !== null) {
      var l = di;
      return l !== 0 ? l : Os();
    }
    return Df();
  }
  function Ts() {
    Va === 0 && (Va = !(Xe & 536870912) || we ? to() : 536870912);
    var l = ca.current;
    return l !== null && (l.flags |= 32), Va;
  }
  function Lt(l, n, u) {
    (l === nt && st === 2 || l.cancelPendingCommit !== null) && (Di(l, 0), Ra(
      l,
      Xe,
      Va,
      !1
    )), Fa(l, u), (!(St & 2) || l !== nt) && (l === nt && (!(St & 2) && (Mc |= u), xt === 4 && Ra(
      l,
      Xe,
      Va,
      !1
    )), mn(l));
  }
  function Zo(l, n, u) {
    if (St & 6) throw Error(x(327));
    var c = !u && (n & 60) === 0 && (n & l.expiredLanes) === 0 || Wa(l, n), s = c ? fp(l, n) : Nd(l, n, !0), r = c;
    do {
      if (s === 0) {
        Oc && !c && Ra(l, n, 0, !1);
        break;
      } else if (s === 6)
        Ra(
          l,
          n,
          0,
          !Vu
        );
      else {
        if (u = l.current.alternate, r && !Ko(u)) {
          s = Nd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              s = Uc;
              var g = v.current.memoizedState.isDehydrated;
              if (g && (Di(v, m).flags |= 256), m = Nd(
                v,
                m,
                !1
              ), m !== 2) {
                if (_m && !g) {
                  v.errorRecoveryDisabledLanes |= r, Mc |= r, s = 4;
                  break e;
                }
                r = Zn, Zn = s, r !== null && qd(r);
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Di(l, 0), Ra(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s) {
            case 0:
            case 1:
              throw Error(x(345));
            case 4:
              if ((n & 4194176) === n) {
                Ra(
                  c,
                  n,
                  Va,
                  !Vu
                );
                break e;
              }
              break;
            case 2:
              Zn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if (c.finishedWork = u, c.finishedLanes = n, (n & 62914560) === n && (r = ra + 300 - k(), 10 < r)) {
            if (Ra(
              c,
              n,
              Va,
              !Vu
            ), eo(c, 0) !== 0) break e;
            c.timeoutHandle = Al(
              F0.bind(
                null,
                c,
                u,
                Zn,
                gs,
                Km,
                n,
                Va,
                Mc,
                _o,
                Vu,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          F0(
            c,
            u,
            Zn,
            gs,
            Km,
            n,
            Va,
            Mc,
            _o,
            Vu,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mn(l);
  }
  function qd(l) {
    Zn === null ? Zn = l : Zn.push.apply(
      Zn,
      l
    );
  }
  function F0(l, n, u, c, s, r, m, v, g, R, Y, X, U) {
    var N = n.subtreeFlags;
    if ((N & 8192 || (N & 16785408) === 16785408) && (yn = { stylesheets: null, count: 0, unsuspend: sy }, ys(n), n = Ep(), n !== null)) {
      l.cancelPendingCommit = n(
        Fm.bind(
          null,
          l,
          u,
          c,
          s,
          m,
          v,
          g,
          1,
          X,
          U
        )
      ), Ra(l, r, m, !R);
      return;
    }
    Fm(
      l,
      u,
      c,
      s,
      m,
      v,
      g,
      Y,
      X,
      U
    );
  }
  function Ko(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Bl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Ra(l, n, u, c) {
    n &= ~Zm, n &= ~Mc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - la(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Ki(l, u, n);
  }
  function Es() {
    return St & 6 ? !0 : (Mi(0), !1);
  }
  function Jo() {
    if (De !== null) {
      if (st === 0)
        var l = De.return;
      else
        l = De, Mu = Tc = null, $f(l), Na = null, nl = 0, l = De;
      for (; l !== null; )
        Lm(l.alternate, l), l = l.return;
      De = null;
    }
  }
  function Di(l, n) {
    l.finishedWork = null, l.finishedLanes = 0;
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, wa(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jo(), nt = l, De = u = Nu(l.current, null), Xe = n, st = 0, Aa = null, Vu = !1, Oc = Wa(l, n), _m = !1, _o = Va = Zm = Mc = _n = xt = 0, Zn = Uc = null, Km = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - la(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Gu = n, go(), u;
  }
  function Yd(l, n) {
    Te = null, ne.H = fn, n === Ao ? (n = Qr(), st = 3) : n === sc ? (n = Qr(), st = 4) : st = n === zu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Aa = n, De === null && (xt = 1, us(
      l,
      $t(n, l.current)
    ));
  }
  function km() {
    var l = ne.H;
    return ne.H = fn, l === null ? fn : l;
  }
  function $m() {
    var l = ne.A;
    return ne.A = cp, l;
  }
  function Wm() {
    xt = 4, Vu || (Xe & 4194176) !== Xe && ca.current !== null || (Oc = !0), !(_n & 134217727) && !(Mc & 134217727) || nt === null || Ra(
      nt,
      Xe,
      Va,
      !1
    );
  }
  function Nd(l, n, u) {
    var c = St;
    St |= 2;
    var s = km(), r = $m();
    (nt !== l || Xe !== n) && (gs = null, Di(l, n)), n = !1;
    var m = xt;
    e: do
      try {
        if (st !== 0 && De !== null) {
          var v = De, g = Aa;
          switch (st) {
            case 8:
              Jo(), m = 6;
              break e;
            case 3:
            case 2:
            case 6:
              ca.current === null && (n = !0);
              var R = st;
              if (st = 0, Aa = null, ko(l, v, g, R), u && Oc) {
                m = 0;
                break e;
              }
              break;
            default:
              R = st, st = 0, Aa = null, ko(l, v, g, R);
          }
        }
        op(), m = xt;
        break;
      } catch (Y) {
        Yd(l, Y);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Mu = Tc = null, St = c, ne.H = s, ne.A = r, De === null && (nt = null, Xe = 0, go()), m;
  }
  function op() {
    for (; De !== null; ) As(De);
  }
  function fp(l, n) {
    var u = St;
    St |= 2;
    var c = km(), s = $m();
    nt !== l || Xe !== n ? (gs = null, ps = k() + 500, Di(l, n)) : Oc = Wa(
      l,
      n
    );
    e: do
      try {
        if (st !== 0 && De !== null) {
          n = De;
          var r = Aa;
          t: switch (st) {
            case 1:
              st = 0, Aa = null, ko(l, n, r, 1);
              break;
            case 2:
              if (fm(r)) {
                st = 0, Aa = null, jd(n);
                break;
              }
              n = function() {
                st === 2 && nt === l && (st = 7), mn(l);
              }, r.then(n, n);
              break e;
            case 3:
              st = 7;
              break e;
            case 4:
              st = 5;
              break e;
            case 7:
              fm(r) ? (st = 0, Aa = null, jd(n)) : (st = 0, Aa = null, ko(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (De.tag) {
                case 26:
                  m = De.memoizedState;
                case 5:
                case 27:
                  var v = De;
                  if (!m || Wl(m)) {
                    st = 0, Aa = null;
                    var g = v.sibling;
                    if (g !== null) De = g;
                    else {
                      var R = v.return;
                      R !== null ? (De = R, Vd(R)) : De = null;
                    }
                    break t;
                  }
              }
              st = 0, Aa = null, ko(l, n, r, 5);
              break;
            case 6:
              st = 0, Aa = null, ko(l, n, r, 6);
              break;
            case 8:
              Jo(), xt = 6;
              break e;
            default:
              throw Error(x(462));
          }
        }
        sp();
        break;
      } catch (Y) {
        Yd(l, Y);
      }
    while (!0);
    return Mu = Tc = null, ne.H = c, ne.A = s, St = u, De !== null ? 0 : (nt = null, Xe = 0, go(), xt);
  }
  function sp() {
    for (; De !== null && !T(); )
      As(De);
  }
  function As(l) {
    var n = No(l.alternate, l, Gu);
    l.memoizedProps = l.pendingProps, n === null ? Vd(l) : De = n;
  }
  function jd(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = is(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Xe
        );
        break;
      case 11:
        n = is(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Xe
        );
        break;
      case 5:
        $f(n);
      default:
        Lm(u, n), n = De = vs(n, Gu), n = No(u, n, Gu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Vd(l) : De = n;
  }
  function ko(l, n, u, c) {
    Mu = Tc = null, $f(n), Na = null, nl = 0;
    var s = n.return;
    try {
      if (Rm(
        l,
        s,
        n,
        u,
        Xe
      )) {
        xt = 1, us(
          l,
          $t(u, l.current)
        ), De = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw De = s, r;
      xt = 1, us(
        l,
        $t(u, l.current)
      ), De = null;
      return;
    }
    n.flags & 32768 ? (we || c === 1 ? l = !0 : Oc || Xe & 536870912 ? l = !1 : (Vu = l = !0, (c === 2 || c === 3 || c === 6) && (c = ca.current, c !== null && c.tag === 13 && (c.flags |= 16384))), I0(n, l)) : Vd(n);
  }
  function Vd(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        I0(
          n,
          Vu
        );
        return;
      }
      l = n.return;
      var u = W0(
        n.alternate,
        n,
        Gu
      );
      if (u !== null) {
        De = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        De = n;
        return;
      }
      De = n = l;
    } while (n !== null);
    xt === 0 && (xt = 5);
  }
  function I0(l, n) {
    do {
      var u = Hd(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, De = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        De = l;
        return;
      }
      De = l = u;
    } while (l !== null);
    xt = 6, De = null;
  }
  function Fm(l, n, u, c, s, r, m, v, g, R) {
    var Y = ne.T, X = fe.p;
    try {
      fe.p = 2, ne.T = null, P0(
        l,
        n,
        u,
        c,
        X,
        s,
        r,
        m,
        v,
        g,
        R
      );
    } finally {
      ne.T = Y, fe.p = X;
    }
  }
  function P0(l, n, u, c, s, r, m, v) {
    do
      Cc();
    while (Hc !== null);
    if (St & 6) throw Error(x(327));
    var g = l.finishedWork;
    if (c = l.finishedLanes, g === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, g === l.current) throw Error(x(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var R = g.lanes | g.childLanes;
    if (R |= Yr, lo(
      l,
      c,
      R,
      r,
      m,
      v
    ), l === nt && (De = nt = null, Xe = 0), !(g.subtreeFlags & 10256) && !(g.flags & 10256) || bs || (bs = !0, xd = R, Jm = u, ey(ce, function() {
      return Cc(), null;
    })), u = (g.flags & 15990) !== 0, g.subtreeFlags & 15990 || u ? (u = ne.T, ne.T = null, r = fe.p, fe.p = 2, m = St, St |= 4, Ym(l, g), Vm(g, l), A0(Ld, l.containerInfo), Xs = !!Qd, Ld = Qd = null, l.current = g, Nm(l, g.alternate, g), P(), St = m, fe.p = r, ne.T = u) : l.current = g, bs ? (bs = !1, Hc = l, Ss = c) : Im(l, R), R = l.pendingLanes, R === 0 && (wu = null), Rn(g.stateNode), mn(l), n !== null)
      for (s = l.onRecoverableError, g = 0; g < n.length; g++)
        R = n[g], s(R.value, {
          componentStack: R.stack
        });
    return Ss & 3 && Cc(), R = l.pendingLanes, c & 4194218 && R & 42 ? l === Bd ? zi++ : (zi = 0, Bd = l) : zi = 0, Mi(0), null;
  }
  function Im(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, kf(n)));
  }
  function Cc() {
    if (Hc !== null) {
      var l = Hc, n = xd;
      xd = 0;
      var u = xh(Ss), c = ne.T, s = fe.p;
      try {
        if (fe.p = 32 > u ? 32 : u, ne.T = null, Hc === null)
          var r = !1;
        else {
          u = Jm, Jm = null;
          var m = Hc, v = Ss;
          if (Hc = null, Ss = 0, St & 6)
            throw Error(x(331));
          var g = St;
          if (St |= 4, Md(m.current), Od(m, m.current, v, u), St = g, Mi(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
            try {
              gt.onPostCommitFiberRoot(xa, m);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        fe.p = s, ne.T = c, Im(l, n);
      }
    }
    return !1;
  }
  function Pm(l, n, u) {
    n = $t(u, n), n = yd(l.stateNode, n, 2), l = Cu(l, n, 2), l !== null && (Fa(l, 2), mn(l));
  }
  function Pe(l, n, u) {
    if (l.tag === 3)
      Pm(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Pm(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (wu === null || !wu.has(c))) {
            l = $t(u, l), u = Vn(2), c = Cu(n, u, 2), c !== null && (vd(
              u,
              c,
              n,
              l
            ), Fa(c, 2), mn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Gd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Cd();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (_m = !0, s.add(u), l = rp.bind(null, l, n, u), n.then(l, l));
  }
  function rp(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, nt === l && (Xe & u) === u && (xt === 4 || xt === 3 && (Xe & 62914560) === Xe && 300 > k() - ra ? !(St & 2) && Di(l, 0) : Zm |= u, _o === Xe && (_o = 0)), mn(l);
  }
  function ev(l, n) {
    n === 0 && (n = Zi()), l = Cn(l, n), l !== null && (Fa(l, n), mn(l));
  }
  function dp(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), ev(l, u);
  }
  function hp(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(x(314));
    }
    c !== null && c.delete(n), ev(l, u);
  }
  function ey(l, n) {
    return Qi(l, n);
  }
  var $o = null, Oi = null, wd = !1, Rs = !1, xc = !1, Bc = 0;
  function mn(l) {
    l !== Oi && l.next === null && (Oi === null ? $o = Oi = l : Oi = Oi.next = l), Rs = !0, wd || (wd = !0, Ds(tv));
  }
  function Mi(l, n) {
    if (!xc && Rs) {
      xc = !0;
      do
        for (var u = !1, c = $o; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - la(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326677 ? r & 201326677 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ty(c, r));
          } else
            r = Xe, r = eo(
              c,
              c === nt ? r : 0
            ), !(r & 3) || Wa(c, r) || (u = !0, ty(c, r));
          c = c.next;
        }
      while (u);
      xc = !1;
    }
  }
  function tv() {
    Rs = wd = !1;
    var l = 0;
    Bc !== 0 && (cy() && (l = Bc), Bc = 0);
    for (var n = k(), u = null, c = $o; c !== null; ) {
      var s = c.next, r = lv(c, n);
      r === 0 ? (c.next = null, u === null ? $o = s : u.next = s, s === null && (Oi = u)) : (u = c, (l !== 0 || r & 3) && (Rs = !0)), c = s;
    }
    Mi(l);
  }
  function lv(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - la(r), v = 1 << m, g = s[m];
      g === -1 ? (!(v & u) || v & c) && (s[m] = _i(v, n)) : g <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = nt, u = Xe, u = eo(
      l,
      l === n ? u : 0
    ), c = l.callbackNode, u === 0 || l === n && st === 2 || l.cancelPendingCommit !== null)
      return c !== null && c !== null && En(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || Wa(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && En(c), xh(u)) {
        case 2:
        case 8:
          u = it;
          break;
        case 32:
          u = ce;
          break;
        case 268435456:
          u = va;
          break;
        default:
          u = ce;
      }
      return c = zs.bind(null, l), u = Qi(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && En(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function zs(l, n) {
    var u = l.callbackNode;
    if (Cc() && l.callbackNode !== u)
      return null;
    var c = Xe;
    return c = eo(
      l,
      l === nt ? c : 0
    ), c === 0 ? null : (Zo(l, c, n), lv(l, k()), l.callbackNode != null && l.callbackNode === u ? zs.bind(null, l) : null);
  }
  function ty(l, n) {
    if (Cc()) return null;
    Zo(l, n, !0);
  }
  function Ds(l) {
    ht(function() {
      St & 6 ? Qi(kt, l) : l();
    });
  }
  function Os() {
    return Bc === 0 && (Bc = to()), Bc;
  }
  function Ms(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Sr("" + l);
  }
  function ly(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function _t(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Ms(
        (s[Ll] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Ll] || null) ? Ms(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new xf(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Bc !== 0) {
                  var g = m ? ly(s, m) : new FormData(s);
                  bm(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), g = m ? ly(s, m) : new FormData(s), bm(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Us = 0; Us < Xf.length; Us++) {
    var ay = Xf[Us], mp = ay.toLowerCase(), Ui = ay[0].toUpperCase() + ay.slice(1);
    Ke(
      mp,
      "on" + Ui
    );
  }
  Ke(um, "onAnimationEnd"), Ke(R0, "onAnimationIteration"), Ke(Br, "onAnimationStart"), Ke("dblclick", "onDoubleClick"), Ke("focusin", "onFocus"), Ke("focusout", "onBlur"), Ke(qr, "onTransitionRun"), Ke(z0, "onTransitionStart"), Ke(Ce, "onTransitionCancel"), Ke(Q, "onTransitionEnd"), ki("onMouseEnter", ["mouseout", "mouseover"]), ki("onMouseLeave", ["mouseout", "mouseover"]), ki("onPointerEnter", ["pointerout", "pointerover"]), ki("onPointerLeave", ["pointerout", "pointerover"]), ti(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ti(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ti("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ti(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ti(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ti(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Wo = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kn)
  );
  function Hs(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], g = v.instance, R = v.currentTarget;
            if (v = v.listener, g !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = R;
            try {
              r(s);
            } catch (Y) {
              Zl(Y);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], g = v.instance, R = v.currentTarget, v = v.listener, g !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = R;
            try {
              r(s);
            } catch (Y) {
              Zl(Y);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function qe(l, n) {
    var u = n[no];
    u === void 0 && (u = n[no] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Io(n, l, 2, !1), u.add(c));
  }
  function ny(l, n, u) {
    var c = 0;
    n && (c |= 4), Io(
      u,
      l,
      c,
      n
    );
  }
  var Fo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ga(l) {
    if (!l[Fo]) {
      l[Fo] = !0, Bh.forEach(function(u) {
        u !== "selectionchange" && (Wo.has(u) || ny(u, !1, l), ny(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Fo] || (n[Fo] = !0, ny("selectionchange", !1, n));
    }
  }
  function Io(l, n, u, c) {
    switch (yy(n)) {
      case 2:
        var s = ov;
        break;
      case 8:
        s = fv;
        break;
      default:
        s = Wd;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Ar || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Cs(l, n, u, c, s) {
    var r = c;
    if (!(n & 1) && !(n & 2) && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s || v.nodeType === 8 && v.parentNode === s)
            break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var g = m.tag;
              if ((g === 3 || g === 4) && (g = m.stateNode.containerInfo, g === s || g.nodeType === 8 && g.parentNode === s))
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Pu(v), m === null) return;
            if (g = m.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Qh(function() {
      var R = r, Y = Xh(u), X = [];
      e: {
        var U = cc.get(l);
        if (U !== void 0) {
          var N = xf, I = l;
          switch (l) {
            case "keypress":
              if (fo(u) === 0) break e;
            case "keydown":
            case "keyup":
              N = zr;
              break;
            case "focusin":
              I = "focus", N = Kh;
              break;
            case "focusout":
              I = "blur", N = Kh;
              break;
            case "beforeblur":
            case "afterblur":
              N = Kh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Zh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = ap;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = v0;
              break;
            case um:
            case R0:
            case Br:
              N = Yf;
              break;
            case Q:
              N = ec;
              break;
            case "scroll":
            case "scrollend":
              N = r0;
              break;
            case "wheel":
              N = p0;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = h0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Or;
              break;
            case "toggle":
            case "beforetoggle":
              N = Wh;
          }
          var oe = (n & 4) !== 0, Tt = !oe && (l === "scroll" || l === "scrollend"), z = oe ? U !== null ? U + "Capture" : null : U;
          oe = [];
          for (var E = R, D; E !== null; ) {
            var V = E;
            if (D = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || D === null || z === null || (V = ou(E, z), V != null && oe.push(
              qc(E, V, D)
            )), Tt) break;
            E = E.return;
          }
          0 < oe.length && (U = new N(
            U,
            I,
            null,
            u,
            Y
          ), X.push({ event: U, listeners: oe }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (U = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", U && u !== wh && (I = u.relatedTarget || u.fromElement) && (Pu(I) || I[ao]))
            break e;
          if ((N || U) && (U = Y.window === Y ? Y : (U = Y.ownerDocument) ? U.defaultView || U.parentWindow : window, N ? (I = u.relatedTarget || u.toElement, N = R, I = I ? Pu(I) : null, I !== null && (Tt = L(I), oe = I.tag, I !== Tt || oe !== 5 && oe !== 27 && oe !== 6) && (I = null)) : (N = null, I = R), N !== I)) {
            if (oe = Zh, V = "onMouseLeave", z = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (oe = Or, V = "onPointerLeave", z = "onPointerEnter", E = "pointer"), Tt = N == null ? U : io(N), D = I == null ? U : io(I), U = new oe(
              V,
              E + "leave",
              N,
              u,
              Y
            ), U.target = Tt, U.relatedTarget = D, V = null, Pu(Y) === R && (oe = new oe(
              z,
              E + "enter",
              I,
              u,
              Y
            ), oe.target = D, oe.relatedTarget = Tt, V = oe), Tt = V, N && I)
              t: {
                for (oe = N, z = I, E = 0, D = oe; D; D = ol(D))
                  E++;
                for (D = 0, V = z; V; V = ol(V))
                  D++;
                for (; 0 < E - D; )
                  oe = ol(oe), E--;
                for (; 0 < D - E; )
                  z = ol(z), D--;
                for (; E--; ) {
                  if (oe === z || z !== null && oe === z.alternate)
                    break t;
                  oe = ol(oe), z = ol(z);
                }
                oe = null;
              }
            else oe = null;
            N !== null && uy(
              X,
              U,
              N,
              oe,
              !1
            ), I !== null && Tt !== null && uy(
              X,
              Tt,
              I,
              oe,
              !0
            );
          }
        }
        e: {
          if (U = R ? io(R) : window, N = U.nodeName && U.nodeName.toLowerCase(), N === "select" || N === "input" && U.type === "file")
            var F = em;
          else if (Hr(U))
            if (mo)
              F = E0;
            else {
              F = S0;
              var Ee = Cr;
            }
          else
            N = U.nodeName, !N || N.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? R && br(R.elementType) && (F = em) : F = T0;
          if (F && (F = F(l, R))) {
            ui(
              X,
              F,
              u,
              Y
            );
            break e;
          }
          Ee && Ee(l, U, R), l === "focusout" && R && U.type === "number" && R.memoizedProps.value != null && pr(U, "number", U.value);
        }
        switch (Ee = R ? io(R) : window, l) {
          case "focusin":
            (Hr(Ee) || Ee.contentEditable === "true") && (ci = Ee, On = R, vo = null);
            break;
          case "focusout":
            vo = On = ci = null;
            break;
          case "mousedown":
            Mn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mn = !1, Un(X, u, Y);
            break;
          case "selectionchange":
            if (nm) break;
          case "keydown":
          case "keyup":
            Un(X, u, Y);
        }
        var ae;
        if (ho)
          e: {
            switch (l) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          al ? ln(l, u) && (ue = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Ur && u.locale !== "ko" && (al || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && al && (ae = s0()) : (Pa = Y, Rr = "value" in Pa ? Pa.value : Pa.textContent, al = !0)), Ee = Yc(R, ue), 0 < Ee.length && (ue = new Jh(
          ue,
          l,
          null,
          u,
          Y
        ), X.push({ event: ue, listeners: Ee }), ae ? ue.data = ae : (ae = Nf(u), ae !== null && (ue.data = ae)))), (ae = Fh ? tc(l, u) : b0(l, u)) && (ue = Yc(R, "onBeforeInput"), 0 < ue.length && (Ee = new Jh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Y
        ), X.push({
          event: Ee,
          listeners: ue
        }), Ee.data = ae)), _t(
          X,
          l,
          R,
          u,
          Y
        );
      }
      Hs(X, n);
    });
  }
  function qc(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Yc(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ou(l, u), s != null && c.unshift(
        qc(l, s, r)
      ), s = ou(l, n), s != null && c.push(
        qc(l, s, r)
      )), l = l.return;
    }
    return c;
  }
  function ol(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function uy(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, g = v.alternate, R = v.stateNode;
      if (v = v.tag, g !== null && g === c) break;
      v !== 5 && v !== 26 && v !== 27 || R === null || (g = R, s ? (R = ou(u, r), R != null && m.unshift(
        qc(u, R, g)
      )) : s || (R = ou(u, r), R != null && m.push(
        qc(u, R, g)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var yp = /\r\n?/g, av = /\u0000|\uFFFD/g;
  function nv(l) {
    return (typeof l == "string" ? l : "" + l).replace(yp, `
`).replace(av, "");
  }
  function H(l, n) {
    return n = nv(n), nv(l) === n;
  }
  function he() {
  }
  function Ze(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || cu(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && cu(l, "" + c);
        break;
      case "className":
        Wi(l, "class", c);
        break;
      case "tabIndex":
        Wi(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wi(l, u, c);
        break;
      case "style":
        Gh(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          Wi(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Sr("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ze(l, n, "name", s.name, s, null), Ze(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ze(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ze(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ze(l, n, "encType", s.encType, s, null), Ze(l, n, "method", s.method, s, null), Ze(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Sr("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = he);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(x(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(x(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Sr("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        qe("beforetoggle", l), qe("toggle", l), ai(l, "popover", c);
        break;
      case "xlinkActuate":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Ia(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Ia(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Ia(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Ia(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        ai(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Hf.get(u) || u, ai(l, u, c));
    }
  }
  function Xd(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Gh(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(x(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(x(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? cu(l, c) : (typeof c == "number" || typeof c == "bigint") && cu(l, "" + c);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = he);
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
        if (!qh.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Ll] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ai(l, u, c);
          }
    }
  }
  function fl(l, n, u) {
    switch (n) {
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
        qe("error", l), qe("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(x(137, n));
                default:
                  Ze(l, n, r, m, u, null);
              }
          }
        s && Ze(l, n, "srcSet", u.srcSet, u, null), c && Ze(l, n, "src", u.src, u, null);
        return;
      case "input":
        qe("invalid", l);
        var v = r = m = s = null, g = null, R = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Y = u[c];
            if (Y != null)
              switch (c) {
                case "name":
                  s = Y;
                  break;
                case "type":
                  m = Y;
                  break;
                case "checked":
                  g = Y;
                  break;
                case "defaultChecked":
                  R = Y;
                  break;
                case "value":
                  r = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(x(137, n));
                  break;
                default:
                  Ze(l, n, c, Y, u, null);
              }
          }
        jh(
          l,
          r,
          v,
          g,
          R,
          m,
          s,
          !1
        ), yr(l);
        return;
      case "select":
        qe("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ze(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? co(l, !!c, n, !1) : u != null && co(l, !!c, u, !0);
        return;
      case "textarea":
        qe("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(x(91));
                break;
              default:
                Ze(l, n, m, v, u, null);
            }
        gr(l, c, s, r), yr(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ze(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        qe("cancel", l), qe("close", l);
        break;
      case "iframe":
      case "object":
        qe("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Kn.length; c++)
          qe(Kn[c], l);
        break;
      case "image":
        qe("error", l), qe("load", l);
        break;
      case "details":
        qe("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        qe("error", l), qe("load", l);
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
        for (R in u)
          if (u.hasOwnProperty(R) && (c = u[R], c != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(x(137, n));
              default:
                Ze(l, n, R, c, u, null);
            }
        return;
      default:
        if (br(n)) {
          for (Y in u)
            u.hasOwnProperty(Y) && (c = u[Y], c !== void 0 && Xd(
              l,
              n,
              Y,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ze(l, n, v, c, u, null));
  }
  function uv(l, n, u, c) {
    switch (n) {
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
        var s = null, r = null, m = null, v = null, g = null, R = null, Y = null;
        for (N in u) {
          var X = u[N];
          if (u.hasOwnProperty(N) && X != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = X;
              default:
                c.hasOwnProperty(N) || Ze(l, n, N, null, c, X);
            }
        }
        for (var U in c) {
          var N = c[U];
          if (X = u[U], c.hasOwnProperty(U) && (N != null || X != null))
            switch (U) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                R = N;
                break;
              case "defaultChecked":
                Y = N;
                break;
              case "value":
                m = N;
                break;
              case "defaultValue":
                v = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(x(137, n));
                break;
              default:
                N !== X && Ze(
                  l,
                  n,
                  U,
                  N,
                  c,
                  X
                );
            }
        }
        vr(
          l,
          m,
          v,
          g,
          R,
          Y,
          r,
          s
        );
        return;
      case "select":
        N = m = v = U = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = g;
              default:
                c.hasOwnProperty(r) || Ze(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== g && Ze(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = v, u = m, c = N, U != null ? co(l, !!u, U, !1) : !!c != !!u && (n != null ? co(l, !!u, n, !0) : co(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = U = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ze(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(x(91));
                break;
              default:
                s !== r && Ze(l, n, m, s, c, r);
            }
        Vh(l, U, N);
        return;
      case "option":
        for (var I in u)
          if (U = u[I], u.hasOwnProperty(I) && U != null && !c.hasOwnProperty(I))
            switch (I) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ze(
                  l,
                  n,
                  I,
                  null,
                  c,
                  U
                );
            }
        for (g in c)
          if (U = c[g], N = u[g], c.hasOwnProperty(g) && U !== N && (U != null || N != null))
            switch (g) {
              case "selected":
                l.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Ze(
                  l,
                  n,
                  g,
                  U,
                  c,
                  N
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
        for (var oe in u)
          U = u[oe], u.hasOwnProperty(oe) && U != null && !c.hasOwnProperty(oe) && Ze(l, n, oe, null, c, U);
        for (R in c)
          if (U = c[R], N = u[R], c.hasOwnProperty(R) && U !== N && (U != null || N != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(x(137, n));
                break;
              default:
                Ze(
                  l,
                  n,
                  R,
                  U,
                  c,
                  N
                );
            }
        return;
      default:
        if (br(n)) {
          for (var Tt in u)
            U = u[Tt], u.hasOwnProperty(Tt) && U !== void 0 && !c.hasOwnProperty(Tt) && Xd(
              l,
              n,
              Tt,
              void 0,
              c,
              U
            );
          for (Y in c)
            U = c[Y], N = u[Y], !c.hasOwnProperty(Y) || U === N || U === void 0 && N === void 0 || Xd(
              l,
              n,
              Y,
              U,
              c,
              N
            );
          return;
        }
    }
    for (var z in u)
      U = u[z], u.hasOwnProperty(z) && U != null && !c.hasOwnProperty(z) && Ze(l, n, z, null, c, U);
    for (X in c)
      U = c[X], N = u[X], !c.hasOwnProperty(X) || U === N || U == null && N == null || Ze(l, n, X, U, c, N);
  }
  var Qd = null, Ld = null;
  function xs(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function iy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _d(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Zd(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function cy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Bs ? !1 : (Bs = l, !0) : (Bs = null, !1);
  }
  var Al = typeof setTimeout == "function" ? setTimeout : void 0, wa = typeof clearTimeout == "function" ? clearTimeout : void 0, sl = typeof Promise == "function" ? Promise : void 0, ht = typeof queueMicrotask == "function" ? queueMicrotask : typeof sl < "u" ? function(l) {
    return sl.resolve(null).then(l).catch(vp);
  } : Al;
  function vp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function qs(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (c === 0) {
            l.removeChild(s), of(n);
            return;
          }
          c--;
        } else u !== "$" && u !== "$?" && u !== "$!" || c++;
      u = s;
    } while (u);
    of(n);
  }
  function Ys(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ys(u), Of(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Xu(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[uo])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = kl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Hi(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = kl(l.nextSibling), l === null)) return null;
    return l;
  }
  function kl(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  function Qu(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ns(l, n, u) {
    switch (n = xs(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(x(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(x(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(x(454));
        return l;
      default:
        throw Error(x(451));
    }
  }
  var Zt = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new Set();
  function Jd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var Lu = fe.d;
  fe.d = {
    f: pp,
    r: Jn,
    D: oy,
    C: ef,
    L: gp,
    m: fy,
    X: Sp,
    S: bp,
    M: tf
  };
  function pp() {
    var l = Lu.f(), n = Es();
    return l || n;
  }
  function Jn(l) {
    var n = ei(l);
    n !== null && n.tag === 5 && n.type === "form" ? oa(n) : Lu.r(l);
  }
  var Po = typeof document > "u" ? null : document;
  function kd(l, n, u) {
    var c = Po;
    if (c && typeof n == "string" && n) {
      var s = aa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Kd.has(s) || (Kd.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), fl(n, "link", l), Dt(n), c.head.appendChild(n)));
    }
  }
  function oy(l) {
    Lu.D(l), kd("dns-prefetch", l, null);
  }
  function ef(l, n) {
    Lu.C(l, n), kd("preconnect", l, n);
  }
  function gp(l, n, u) {
    Lu.L(l, n, u);
    var c = Po;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + aa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + aa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + aa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + aa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = J(l);
          break;
        case "script":
          r = lf(l);
      }
      Zt.has(r) || (l = ze(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Zt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(ha(r)) || n === "script" && c.querySelector(js(r)) || (n = c.createElement("link"), fl(n, "link", l), Dt(n), c.head.appendChild(n)));
    }
  }
  function fy(l, n) {
    Lu.m(l, n);
    var u = Po;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + aa(c) + '"][href="' + aa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = lf(l);
      }
      if (!Zt.has(r) && (l = ze({ rel: "modulepreload", href: l }, n), Zt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(js(r)))
              return;
        }
        c = u.createElement("link"), fl(c, "link", l), Dt(c), u.head.appendChild(c);
      }
    }
  }
  function bp(l, n, u) {
    Lu.S(l, n, u);
    var c = Po;
    if (c && l) {
      var s = Ji(c).hoistableStyles, r = J(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          ha(r)
        ))
          v.loading = 5;
        else {
          l = ze(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Zt.get(r)) && Qa(l, u);
          var g = m = c.createElement("link");
          Dt(g), fl(g, "link", l), g._p = new Promise(function(R, Y) {
            g.onload = R, g.onerror = Y;
          }), g.addEventListener("load", function() {
            v.loading |= 1;
          }), g.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Nc(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function Sp(l, n) {
    Lu.X(l, n);
    var u = Po;
    if (u && l) {
      var c = Ji(u).hoistableScripts, s = lf(l), r = c.get(s);
      r || (r = u.querySelector(js(s)), r || (l = ze({ src: l, async: !0 }, n), (n = Zt.get(s)) && La(l, n), r = u.createElement("script"), Dt(r), fl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function tf(l, n) {
    Lu.M(l, n);
    var u = Po;
    if (u && l) {
      var c = Ji(u).hoistableScripts, s = lf(l), r = c.get(s);
      r || (r = u.querySelector(js(s)), r || (l = ze({ src: l, async: !0, type: "module" }, n), (n = Zt.get(s)) && La(l, n), r = u.createElement("script"), Dt(r), fl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Rl(l, n, u, c) {
    var s = (s = xe.current) ? Jd(s) : null;
    if (!s) throw Error(x(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = J(u.href), u = Ji(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = J(u.href);
          var r = Ji(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            ha(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Zt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Zt.set(l, u), r || $l(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(x(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(x(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = lf(u), u = Ji(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(x(444, l));
    }
  }
  function J(l) {
    return 'href="' + aa(l) + '"';
  }
  function ha(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xa(l) {
    return ze({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function $l(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), fl(n, "link", u), Dt(n), l.head.appendChild(n));
  }
  function lf(l) {
    return '[src="' + aa(l) + '"]';
  }
  function js(l) {
    return "script[async]" + l;
  }
  function Vs(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + aa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Dt(c), c;
          var s = ze({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Dt(c), fl(c, "style", s), Nc(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = J(u.href);
          var r = l.querySelector(
            ha(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Dt(r), r;
          c = Xa(u), (s = Zt.get(s)) && Qa(c, s), r = (l.ownerDocument || l).createElement("link"), Dt(r);
          var m = r;
          return m._p = new Promise(function(v, g) {
            m.onload = v, m.onerror = g;
          }), fl(r, "link", c), n.state.loading |= 4, Nc(r, u.precedence, l), n.instance = r;
        case "script":
          return r = lf(u.src), (s = l.querySelector(
            js(r)
          )) ? (n.instance = s, Dt(s), s) : (c = u, (s = Zt.get(r)) && (c = ze({}, u), La(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Dt(s), fl(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(x(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, Nc(c, u.precedence, l));
    return n.instance;
  }
  function Nc(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Qa(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function La(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var _a = null;
  function Gs(l, n, u) {
    if (_a === null) {
      var c = /* @__PURE__ */ new Map(), s = _a = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = _a, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[uo] || r[at] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function _u(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Vl(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Wl(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var yn = null;
  function sy() {
  }
  function Tp(l, n, u) {
    if (yn === null) throw Error(x(475));
    var c = yn;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var s = J(u.href), r = l.querySelector(
          ha(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = ws.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Dt(r);
          return;
        }
        r = l.ownerDocument || l, u = Xa(u), (s = Zt.get(s)) && Qa(u, s), r = r.createElement("link"), Dt(r);
        var m = r;
        m._p = new Promise(function(v, g) {
          m.onload = v, m.onerror = g;
        }), fl(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && !(n.state.loading & 3) && (c.count++, n = ws.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function Ep() {
    if (yn === null) throw Error(x(475));
    var l = yn;
    return l.stylesheets && l.count === 0 && $d(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && $d(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function ws() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) $d(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Ci = null;
  function $d(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Ci = /* @__PURE__ */ new Map(), n.forEach(jc, l), Ci = null, ws.call(l));
  }
  function jc(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Ci.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Ci.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = ws.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Vc = {
    $$typeof: lt,
    Provider: null,
    Consumer: null,
    _currentValue: Ie,
    _currentValue2: Ie,
    _threadCount: 0
  };
  function kn(l, n, u, c, s, r, m, v) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qt(0), this.hiddenUpdates = Qt(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function iv(l, n, u, c, s, r, m, v, g, R, Y, X) {
    return l = new kn(
      l,
      n,
      u,
      m,
      v,
      g,
      R,
      X
    ), n = 1, r === !0 && (n |= 24), r = Ea(3, null, null, n), l.current = r, r.stateNode = l, n = rm(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Ai(r), l;
  }
  function cv(l) {
    return l ? (l = Ge, l) : Ge;
  }
  function ry(l, n, u, c, s, r) {
    s = cv(s), c.context === null ? c.context = s : c.pendingContext = s, c = Sa(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Cu(l, c, n), u !== null && (Lt(u, l, n), Vo(u, l, n));
  }
  function dy(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function hy(l, n) {
    dy(l, n), (l = l.alternate) && dy(l, n);
  }
  function my(l) {
    if (l.tag === 13) {
      var n = Cn(l, 67108864);
      n !== null && Lt(n, l, 67108864), hy(l, 67108864);
    }
  }
  var Xs = !0;
  function ov(l, n, u, c) {
    var s = ne.T;
    ne.T = null;
    var r = fe.p;
    try {
      fe.p = 2, Wd(l, n, u, c);
    } finally {
      fe.p = r, ne.T = s;
    }
  }
  function fv(l, n, u, c) {
    var s = ne.T;
    ne.T = null;
    var r = fe.p;
    try {
      fe.p = 8, Wd(l, n, u, c);
    } finally {
      fe.p = r, ne.T = s;
    }
  }
  function Wd(l, n, u, c) {
    if (Xs) {
      var s = Fd(c);
      if (s === null)
        Cs(
          l,
          n,
          c,
          Qs,
          u
        ), Pd(l, c);
      else if (sv(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Pd(l, c), n & 4 && -1 < nf.indexOf(l)) {
        for (; s !== null; ) {
          var r = ei(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Li(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var g = 1 << 31 - la(m);
                      v.entanglements[1] |= g, m &= ~g;
                    }
                    mn(r), !(St & 6) && (ps = k() + 500, Mi(0));
                  }
                }
                break;
              case 13:
                v = Cn(r, 2), v !== null && Lt(v, r, 2), Es(), hy(r, 2);
            }
          if (r = Fd(c), r === null && Cs(
            l,
            n,
            c,
            Qs,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Cs(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Fd(l) {
    return l = Xh(l), Id(l);
  }
  var Qs = null;
  function Id(l) {
    if (Qs = null, l = Pu(l), l !== null) {
      var n = L(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = W(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Qs = l, null;
  }
  function yy(l) {
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
        switch (Be()) {
          case kt:
            return 2;
          case it:
            return 8;
          case ce:
          case ta:
            return 32;
          case va:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vy = !1, Zu = null, xi = null, Bi = null, af = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), vn = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Pd(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Zu = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        Bi = null;
        break;
      case "pointerover":
      case "pointerout":
        af.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qi.delete(n.pointerId);
    }
  }
  function uf(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ei(n), n !== null && my(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function sv(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Zu = uf(
          Zu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return xi = uf(
          xi,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Bi = uf(
          Bi,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return af.set(
          r,
          uf(
            af.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, qi.set(
          r,
          uf(
            qi.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function rv(l) {
    var n = Pu(l.target);
    if (n !== null) {
      var u = L(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = W(u), n !== null) {
            l.blockedOn = n, hr(l.priority, function() {
              if (u.tag === 13) {
                var c = da(), s = Cn(u, c);
                s !== null && Lt(s, u, c), hy(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function eh(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Fd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        wh = c, u.target.dispatchEvent(c), wh = null;
      } else
        return n = ei(u), n !== null && my(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function dv(l, n, u) {
    eh(l) && u.delete(n);
  }
  function hv() {
    vy = !1, Zu !== null && eh(Zu) && (Zu = null), xi !== null && eh(xi) && (xi = null), Bi !== null && eh(Bi) && (Bi = null), af.forEach(dv), qi.forEach(dv);
  }
  function Ku(l, n) {
    l.blockedOn === n && (l.blockedOn = null, vy || (vy = !0, B.unstable_scheduleCallback(
      B.unstable_NormalPriority,
      hv
    )));
  }
  var cf = null;
  function py(l) {
    cf !== l && (cf = l, B.unstable_scheduleCallback(
      B.unstable_NormalPriority,
      function() {
        cf === l && (cf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Id(c || u) === null)
              continue;
            break;
          }
          var r = ei(u);
          r !== null && (l.splice(n, 3), n -= 3, bm(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function of(l) {
    function n(g) {
      return Ku(g, l);
    }
    Zu !== null && Ku(Zu, l), xi !== null && Ku(xi, l), Bi !== null && Ku(Bi, l), af.forEach(n), qi.forEach(n);
    for (var u = 0; u < vn.length; u++) {
      var c = vn[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < vn.length && (u = vn[0], u.blockedOn === null); )
      rv(u), u.blockedOn === null && vn.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Ll] || null;
        if (typeof r == "function")
          m || py(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Ll] || null)
              v = m.formAction;
            else if (Id(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), py(u);
        }
      }
  }
  function th(l) {
    this._internalRoot = l;
  }
  lh.prototype.render = th.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(x(409));
    var u = n.current, c = da();
    ry(u, c, l, n, null, null);
  }, lh.prototype.unmount = th.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      l.tag === 0 && Cc(), ry(l.current, 2, null, l, null, null), Es(), n[ao] = null;
    }
  };
  function lh(l) {
    this._internalRoot = l;
  }
  lh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Df();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < vn.length && n !== 0 && n < vn[u].priority; u++) ;
      vn.splice(u, 0, l), u === 0 && rv(l);
    }
  };
  var Ls = se.version;
  if (Ls !== "19.0.0")
    throw Error(
      x(
        527,
        Ls,
        "19.0.0"
      )
    );
  fe.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(x(188)) : (l = Object.keys(l).join(","), Error(x(268, l)));
    return l = Ue(n), l = l !== null ? He(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var mv = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ne,
    findFiberByHostInstance: Pu,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        xa = Ju.inject(
          mv
        ), gt = Ju;
      } catch {
      }
  }
  return e0.createRoot = function(l, n) {
    if (!Me(l)) throw Error(x(299));
    var u = !1, c = "", s = Am, r = w0, m = sn, v = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks)), n = iv(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      m,
      v,
      null
    ), l[ao] = n.current, Ga(
      l.nodeType === 8 ? l.parentNode : l
    ), new th(n);
  }, e0.hydrateRoot = function(l, n, u) {
    if (!Me(l)) throw Error(x(299));
    var c = !1, s = "", r = Am, m = w0, v = sn, g = null, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (R = u.formState)), n = iv(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      m,
      v,
      g,
      R
    ), n.context = cv(null), u = n.current, c = da(), s = Sa(c), s.callback = null, Cu(u, s, c), n.current.lanes = c, Fa(n, c), mn(n), l[ao] = n.current, Ga(l), new lh(n);
  }, e0.version = "19.0.0", e0;
}
var t0 = {}, Rb;
function ZS() {
  if (Rb) return t0;
  Rb = 1;
  var B = {};
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return B.NODE_ENV !== "production" && function() {
    function se(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ve(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = sl(e) ? e.slice() : he({}, e);
      return f[o] = ve(e[o], t, a + 1, i), f;
    }
    function x(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return Me(e, t, a, 0);
      }
    }
    function Me(e, t, a, i) {
      var o = t[i], f = sl(e) ? e.slice() : he({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], sl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = Me(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function At(e, t, a) {
      var i = t[a], o = sl(e) ? e.slice() : he({}, e);
      return a + 1 === t.length ? (sl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = At(e[i], t, a + 1), o);
    }
    function Rt() {
      return !1;
    }
    function vt() {
      return null;
    }
    function be(e, t, a, i) {
      return new Hm(e, t, a, i);
    }
    function Z() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function hl() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function zt() {
    }
    function ut() {
    }
    function lt(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function Ne(e, t) {
      e.context === ff && (Im(t, e, null, null), Ai());
    }
    function tt(e, t) {
      if (Wn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Bu(), Wh(
          e.current,
          t,
          a
        ), Ai();
      }
    }
    function Fe(e) {
      Wn = e;
    }
    function wt(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function pe(e) {
      return e === null || typeof e != "object" ? null : (e = av && e[av] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function re(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === nv ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Wo:
          return "Fragment";
        case Kn:
          return "Portal";
        case qe:
          return "Profiler";
        case Hs:
          return "StrictMode";
        case Cs:
          return "Suspense";
        case qc:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ga:
            return (e.displayName || "Context") + ".Provider";
          case Fo:
            return (e._context.displayName || "Context") + ".Consumer";
          case Io:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Yc:
            return t = e.displayName || null, t !== null ? t : re(e.type) || "Memo";
          case ol:
            t = e._payload, e = e._init;
            try {
              return re(e(t));
            } catch {
            }
        }
      return null;
    }
    function ya(e) {
      return typeof e.tag == "number" ? le(e) : typeof e.name == "string" ? e.name : null;
    }
    function le(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return re(t);
        case 8:
          return t === Hs ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return le(e.return);
      }
      return null;
    }
    function Xt() {
    }
    function ka() {
      if (Ze === 0) {
        Xd = console.log, fl = console.info, uv = console.warn, Qd = console.error, Ld = console.group, xs = console.groupCollapsed, iy = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Xt,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ze++;
    }
    function Ha() {
      if (Ze--, Ze === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: he({}, e, { value: Xd }),
          info: he({}, e, { value: fl }),
          warn: he({}, e, { value: uv }),
          error: he({}, e, { value: Qd }),
          group: he({}, e, { value: Ld }),
          groupCollapsed: he({}, e, { value: xs }),
          groupEnd: he({}, e, { value: iy })
        });
      }
      0 > Ze && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ne(e) {
      if (_d === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          _d = t && t[1] || "", Zd = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + _d + e + Zd;
    }
    function ze(e, t) {
      if (!e || Bs) return "";
      var a = cy.get(e);
      if (a !== void 0) return a;
      Bs = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = H.H, H.H = null, ka();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (te) {
                    var G = te;
                  }
                  Reflect.construct(e, [], M);
                } else {
                  try {
                    M.call();
                  } catch (te) {
                    G = te;
                  }
                  e.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (te) {
                  G = te;
                }
                (M = e()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (te) {
              if (te && G && typeof te.stack == "string")
                return [te.stack, G.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), O = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < O.length && !O[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === O.length)
            for (f = p.length - 1, d = O.length - 1; 1 <= f && 0 <= d && p[f] !== O[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== O[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== O[d]) {
                    var j = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && cy.set(e, j), j;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Bs = !1, H.H = i, Ha(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ne(p) : "", typeof e == "function" && cy.set(e, p), p;
    }
    function tl(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ne(e.type);
        case 16:
          return ne("Lazy");
        case 13:
          return ne("Suspense");
        case 19:
          return ne("SuspenseList");
        case 0:
        case 15:
          return e = ze(e.type, !1), e;
        case 11:
          return e = ze(e.type.render, !1), e;
        case 1:
          return e = ze(e.type, !0), e;
        default:
          return "";
      }
    }
    function ea(e) {
      try {
        var t = "";
        do {
          t += tl(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = ne(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (y) {
        return `
Error generating stack: ` + y.message + `
` + y.stack;
      }
    }
    function ml() {
      if (Al === null) return null;
      var e = Al._debugOwner;
      return e != null ? ya(e) : null;
    }
    function yl() {
      return Al === null ? "" : ea(Al);
    }
    function $(e, t, a, i, o, f, d) {
      var h = Al;
      H.getCurrentStack = e === null ? null : yl, wa = !1, Al = e;
      try {
        return t(a, i, o, f, d);
      } finally {
        Al = h;
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function K(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function w(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function L(e) {
      if (K(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function W(e) {
      var t = e.alternate;
      if (!t) {
        if (t = K(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return L(o), e;
            if (f === i) return L(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ie(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ie(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ue(e) {
      return { current: e };
    }
    function He(e, t) {
      0 > Xu ? console.error("Unexpected pop.") : (t !== Ys[Xu] && console.error("Unexpected Fiber popped."), e.current = qs[Xu], qs[Xu] = null, Ys[Xu] = null, Xu--);
    }
    function Se(e, t, a) {
      Xu++, qs[Xu] = e.current, Ys[Xu] = a, e.current = t;
    }
    function fe(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Ie(e, t) {
      Se(Qu, t, e), Se(kl, e, e), Se(Hi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? St(t) : kc;
          break;
        default:
          if (t = a === 8 ? t.parentNode : t, a = t.tagName, t = t.namespaceURI)
            t = St(t), t = nt(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Mh;
                break;
              case "math":
                t = _v;
                break;
              default:
                t = kc;
            }
      }
      a = a.toLowerCase(), a = jh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, He(Hi, e), Se(Hi, a, e);
    }
    function Ml(e) {
      He(Hi, e), He(kl, e), He(Qu, e);
    }
    function Xl() {
      return fe(Hi.current);
    }
    function Ql(e) {
      e.memoizedState !== null && Se(Ns, e, e);
      var t = fe(Hi.current), a = e.type, i = nt(t.context, a);
      a = jh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Se(kl, e, e), Se(Hi, i, e));
    }
    function pt(e) {
      kl.current === e && (He(Hi, e), He(kl, e)), Ns.current === e && (He(Ns, e), $y._currentValue = sr);
    }
    function $e(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ul(e) {
      try {
        return Ca(e), !1;
      } catch {
        return !0;
      }
    }
    function Ca(e) {
      return "" + e;
    }
    function xe(e, t) {
      if (Ul(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          $e(e)
        ), Ca(e);
    }
    function iu(e, t) {
      if (Ul(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          $e(e)
        ), Ca(e);
    }
    function $a(e) {
      if (Ul(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          $e(e)
        ), Ca(e);
    }
    function Tn(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        tf = t.inject(e), Rl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Af(e, t) {
      if (Rl && typeof Rl.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & 128) === 128;
          switch (t) {
            case Qa:
              var i = kd;
              break;
            case La:
              i = oy;
              break;
            case _a:
              i = ef;
              break;
            case Gs:
              i = fy;
              break;
            default:
              i = ef;
          }
          Rl.onCommitFiberRoot(
            tf,
            e,
            i,
            a
          );
        } catch (o) {
          ha || (ha = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
    }
    function We(e) {
      if (typeof bp == "function" && Sp(e), Rl && typeof Rl.setStrictMode == "function")
        try {
          Rl.setStrictMode(tf, e);
        } catch (t) {
          ha || (ha = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Pc(e) {
      J = e;
    }
    function Qi() {
      J !== null && typeof J.markCommitStopped == "function" && J.markCommitStopped();
    }
    function En(e) {
      J !== null && typeof J.markComponentRenderStarted == "function" && J.markComponentRenderStarted(e);
    }
    function T() {
      J !== null && typeof J.markComponentRenderStopped == "function" && J.markComponentRenderStopped();
    }
    function P(e) {
      J !== null && typeof J.markRenderStarted == "function" && J.markRenderStarted(e);
    }
    function k() {
      J !== null && typeof J.markRenderStopped == "function" && J.markRenderStopped();
    }
    function Be(e, t) {
      J !== null && typeof J.markStateUpdateScheduled == "function" && J.markStateUpdateScheduled(e, t);
    }
    function kt(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (lf(e) / js | 0) | 0;
    }
    function it(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 64) return "TransitionHydration";
      if (e & 4194176) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function ce(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return e & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var i = 0, o = e.suspendedLanes, f = e.pingedLanes, d = e.warmLanes;
      e = e.finishedLanes !== 0;
      var h = a & 134217727;
      return h !== 0 ? (a = h & ~o, a !== 0 ? i = ce(a) : (f &= h, f !== 0 ? i = ce(f) : e || (d = h & ~d, d !== 0 && (i = ce(d))))) : (h = a & ~o, h !== 0 ? i = ce(h) : f !== 0 ? i = ce(f) : e || (d = a & ~d, d !== 0 && (i = ce(d)))), i === 0 ? 0 : t !== 0 && t !== i && !(t & o) && (o = i & -i, d = t & -t, o >= d || o === 32 && (d & 4194176) !== 0) ? t : i;
    }
    function va(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function vl(e, t) {
      switch (e) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function An() {
      var e = Vs;
      return Vs <<= 1, !(Vs & 4194176) && (Vs = 128), e;
    }
    function xa() {
      var e = Nc;
      return Nc <<= 1, !(Nc & 62914560) && (Nc = 4194304), e;
    }
    function gt(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Rn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ll(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var O = 31 - $l(a), j = 1 << O;
        h[O] = 0, y[O] = -1;
        var M = p[O];
        if (M !== null)
          for (p[O] = null, O = 0; O < M.length; O++) {
            var G = M[O];
            G !== null && (G.lane &= -536870913);
          }
        a &= ~j;
      }
      i !== 0 && la(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function la(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - $l(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194218;
    }
    function l0(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - $l(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function a0(e, t, a) {
      if (Xa)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - $l(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function n0(e, t) {
      if (Xa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - $l(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Rf(e) {
      return e &= -e, Qa < e ? La < e ? e & 134217727 ? _a : Gs : La : Qa;
    }
    function zf() {
      var e = ht.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? _a : wd(e.type));
    }
    function Li(e, t) {
      var a = ht.p;
      try {
        return ht.p = e, t();
      } finally {
        ht.p = a;
      }
    }
    function eo(e) {
      delete e[Vl], delete e[Wl], delete e[sy], delete e[Tp], delete e[Ep];
    }
    function Wa(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yn] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = bs(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = bs(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _i(e) {
      if (e = e[Vl] || e[yn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function to(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Zi(e) {
      var t = e[ws];
      return t || (t = e[ws] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Qt(e) {
      e[Ci] = !0;
    }
    function Fa(e, t) {
      lo(e, t), lo(e + "Capture", t);
    }
    function lo(e, t) {
      jc[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), jc[e] = t;
      var a = e.toLowerCase();
      for (Vc[a] = e, e === "onDoubleClick" && (Vc.ondblclick = e), e = 0; e < t.length; e++)
        $d.add(t[e]);
    }
    function Ki(e, t) {
      iv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function dr(e) {
      return Zt.call(dy, e) ? !0 : Zt.call(ry, e) ? !1 : cv.test(e) ? dy[e] = !0 : (ry[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function xh(e, t, a) {
      if (dr(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (xe(a, t), e === "" + a ? a : e);
      }
    }
    function Df(e, t, a) {
      if (dr(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          xe(a, t), e.setAttribute(t, "" + a);
        }
    }
    function hr(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        xe(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Hl(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        xe(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function at(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $a(e), e;
        default:
          return "";
      }
    }
    function Ll(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ao(e) {
      var t = Ll(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      $a(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            $a(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            $a(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function no(e) {
      e._valueTracker || (e._valueTracker = ao(e));
    }
    function u0(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Ll(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function mr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function pa(e) {
      return e.replace(
        hy,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function uo(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Xs || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ml() || "A component",
        t.type
      ), Xs = !0), t.value === void 0 || t.defaultValue === void 0 || my || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ml() || "A component",
        t.type
      ), my = !0);
    }
    function Of(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (xe(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + at(t)) : e.value !== "" + at(t) && (e.value = "" + at(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ei(e, d, at(t)) : a != null ? ei(e, d, at(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (xe(h, "name"), e.name = "" + at(h)) : e.removeAttribute("name");
    }
    function Pu(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (xe(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + at(a) : "", t = t != null ? "" + at(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (xe(d, "name"), e.name = d);
    }
    function ei(e, t, a) {
      t === "number" && mr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function io(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Us.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || fv || (fv = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Wd || (Wd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || ov || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), ov = !0);
    }
    function Ji() {
      var e = ml();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Dt(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + at(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Bh(e, t) {
      for (e = 0; e < Qs.length; e++) {
        var a = Qs[e];
        if (t[a] != null) {
          var i = sl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Ji()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Ji()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Fd || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Fd = !0);
    }
    function qh(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Id || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ml() || "A component"
      ), Id = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ti(e, t, a) {
      if (t != null && (t = "" + at(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + at(a) : "";
    }
    function ki(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (sl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = at(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function zn(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? zn(e.children[0], t) : e;
    }
    function ga(e) {
      return "  " + "  ".repeat(e);
    }
    function $i(e) {
      return "+ " + "  ".repeat(e);
    }
    function li(e) {
      return "- " + "  ".repeat(e);
    }
    function i0(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ai(e, t) {
      return yy.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Wi(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return $i(a) + ai(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), $i(a) + ai(e, i) + `
` + li(a) + ai(t, i) + `
`;
      }
      return ga(a) + ai(e, i) + `
`;
    }
    function Ia(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Cl(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (sl(e)) return "[...]";
          if (e.$$typeof === Ui)
            return (t = re(e.type)) ? "<" + t + ">" : "<...>";
          var a = Ia(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Cl(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Fi(e, t) {
      return typeof e != "string" || yy.test(e) ? "{" + Cl(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Yh(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Fi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function yr(e, t, a) {
      var i = "", o = he({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Cl(e[f], d);
          t.hasOwnProperty(f) ? (d = Cl(t[f], d), i += $i(a) + f + ": " + h + `
`, i += li(a) + f + ": " + d + `
`) : i += $i(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Cl(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += li(a) + y + ": " + e + `
`);
      return i;
    }
    function c0(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Yh(
          e,
          t,
          ga(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var O = Fi(
                p,
                h
              );
              h = Fi(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && Ia(p) === "Object" && Ia(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < O.indexOf("...") || -1 < h.indexOf("...")) ? o += ga(i + 1) + d + `={{
` + yr(
                p,
                y,
                i + 2
              ) + ga(i + 1) + `}}
` : (o += $i(i + 1) + d + "=" + O + `
`, o += li(i + 1) + d + "=" + h + `
`);
            } else
              o += ga(i + 1) + d + "=" + Fi(t[d], h) + `
`;
          }
        f.forEach(function(j) {
          if (j !== "children") {
            var M = 120 - 2 * (i + 1) - j.length - 1;
            o += li(i + 1) + j + "=" + Fi(a[j], M) + `
`;
          }
        }), o = o === "" ? ga(i) + "<" + e + `>
` : ga(i) + "<" + e + `
` + o + ga(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += Wi(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + Wi("" + t, null, i + 1) : o + Wi("" + t, void 0, i + 1)), o;
    }
    function Mf(e, t) {
      var a = i0(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Mf(e, t), e = e.sibling;
        return a;
      }
      return ga(t) + "<" + a + `>
`;
    }
    function Nh(e, t) {
      var a = zn(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return ga(t) + `...
` + Nh(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += ga(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Wi(o, e.serverProps, t), t++;
      else if (f = i0(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Fi(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = ga(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Yh(
            f,
            o,
            $i(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = c0(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += Nh(d, t), f++) : p += Mf(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += ga(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (li(t) + ai(f, 120 - 2 * t) + `
`) : p + Yh(
          f.type,
          f.props,
          li(t)
        );
      return a + i + p;
    }
    function aa(e) {
      try {
        return `

` + Nh(e, 0);
      } catch {
        return "";
      }
    }
    function vr(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? aa(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function jh(e, t) {
      e = he({}, e || af);
      var a = { tag: t };
      return Zu.indexOf(t) !== -1 && (e.aTagInScope = null, e.buttonTagInScope = null, e.nobrTagInScope = null), xi.indexOf(t) !== -1 && (e.pTagInButtonScope = null), vy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (e.listItemTagAutoclosing = null, e.dlItemTagAutoclosing = null), e.current = a, t === "form" && (e.formTag = a), t === "a" && (e.aTagInScope = a), t === "button" && (e.buttonTagInScope = a), t === "nobr" && (e.nobrTagInScope = a), t === "p" && (e.pTagInButtonScope = a), t === "li" && (e.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = a), t === "#document" || t === "html" ? e.containerTagInScope = null : e.containerTagInScope || (e.containerTagInScope = a), e;
    }
    function pr(e, t) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Bi.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }
    function co(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Vh(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function gr(e, t) {
      t = t || af;
      var a = t.current;
      if (t = (a = pr(
        e,
        a && a.tag
      ) ? null : a) ? null : co(e, t), t = a || t, !t) return !0;
      t = t.tag;
      var i = String(!!a) + "|" + e + "|" + t;
      if (qi[i]) return !1;
      qi[i] = !0;
      var o = (i = Al) ? Vh(i.return, t) : null;
      return i = i !== null && o !== null ? vr(o, i, null) : "", o = "<" + e + ">", a ? (a = "", t === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        o,
        t,
        a,
        i
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        o,
        t,
        i
      ), !1;
    }
    function cu(e, t) {
      if (pr("#text", t)) return !0;
      var a = "#text|" + t;
      if (qi[a]) return !1;
      qi[a] = !0;
      var i = (a = Al) ? Vh(a, t) : null;
      return a = a !== null && i !== null ? vr(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Uf(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function o0(e) {
      return e.replace(dv, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Gh(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Ku.hasOwnProperty(t) && Ku[t] || (Ku[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        o0(t.replace(eh, "ms-"))
      )) : rv.test(t) ? Ku.hasOwnProperty(t) && Ku[t] || (Ku[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !hv.test(a) || cf.hasOwnProperty(a) && cf[a] || (cf[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(hv, "")
      )), typeof a == "number" && (isNaN(a) ? py || (py = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || of || (of = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || th.has(t) ? t === "float" ? e.cssFloat = a : (iu(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function br(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Pd[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Pd[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = Pd[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var O = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                O == null || typeof O == "boolean" || O === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var j in a)
          !a.hasOwnProperty(j) || t != null && t.hasOwnProperty(j) || (j.indexOf("--") === 0 ? e.setProperty(j, "") : j === "float" ? e.cssFloat = "" : e[j] = "");
        for (var M in t)
          p = t[M], t.hasOwnProperty(M) && a[M] !== p && Gh(e, M, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Gh(e, i, t[i]);
    }
    function Hf(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
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
    function f0(e) {
      return lh.get(e) || e;
    }
    function Sr(e, t) {
      if (Zt.call(Ju, t) && Ju[t])
        return !0;
      if (n.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = mv.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ju[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ju[t] = !0;
      }
      if (l.test(t)) {
        if (e = t.toLowerCase(), e = mv.hasOwnProperty(e) ? e : null, e == null) return Ju[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ju[t] = !0);
      }
      return !0;
    }
    function wh(e, t) {
      var a = [], i;
      for (i in t)
        Sr(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Xh(e, t, a, i) {
      if (Zt.call(c, t) && c[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), c[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), c[t] = !0;
        if (s.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), c[t] = !0;
      } else if (s.test(t))
        return r.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), c[t] = !0;
      if (m.test(t) || v.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), c[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), c[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), c[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), c[t] = !0;
      if (Ls.hasOwnProperty(o)) {
        if (o = Ls[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), c[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), c[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), c[t] = !0);
          }
        case "function":
        case "symbol":
          return c[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), c[t] = !0;
          }
      }
      return !0;
    }
    function oo(e, t, a) {
      var i = [], o;
      for (o in t)
        Xh(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Dn(e) {
      return g.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Tr(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Er(e) {
      var t = _i(e);
      if (t && (e = t.stateNode)) {
        var a = e[Wl] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Of(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (xe(t, "name"), a = a.querySelectorAll(
                'input[name="' + pa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Wl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Of(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && u0(i);
            }
            break e;
          case "textarea":
            ti(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Dt(e, !!a.multiple, t, !1);
        }
      }
    }
    function Qh(e, t, a) {
      if (U) return e(t, a);
      U = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (U = !1, (Y !== null || X !== null) && (Ai(), Y && (t = Y, e = X, X = Y = null, Er(t), e)))
          for (t = 0; t < e.length; t++) Er(e[t]);
      }
    }
    function ou(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Wl] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Ar() {
      if (z) return z;
      var e, t = Tt, a = t.length, i, o = "value" in oe ? oe.value : oe.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return z = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function ni(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Pa() {
      return !0;
    }
    function Rr() {
      return !1;
    }
    function pl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Pa : Rr, this.isPropagationStopped = Rr, this;
      }
      return he(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Pa);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Pa);
        },
        persist: function() {
        },
        isPersistent: Pa
      }), t;
    }
    function s0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Qb[e]) ? !!t[e] : !1;
    }
    function fo() {
      return s0;
    }
    function Cf(e, t) {
      switch (e) {
        case "keyup":
          return eS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Dg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Lh(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function na(e, t) {
      switch (e) {
        case "compositionend":
          return Lh(t);
        case "keypress":
          return t.which !== Mg ? null : (Hg = !0, Ug);
        case "textInput":
          return e = t.data, e === Ug && Hg ? null : e;
        default:
          return null;
      }
    }
    function Ii(e, t) {
      if (ah)
        return e === "compositionend" || !zp && Cf(e, t) ? (e = Ar(), z = Tt = oe = null, ah = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Og && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function xf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!lS[e.type] : t === "textarea";
    }
    function Bf(e) {
      if (!kn) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function r0(e, t, a, i) {
      Y ? X ? X.push(i) : X = [i] : Y = i, t = ys(t, "onChange"), 0 < t.length && (a = new D(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function _h(e) {
      Dd(e, 0);
    }
    function so(e) {
      var t = to(e);
      if (u0(t)) return e;
    }
    function ro(e, t) {
      if (e === "change") return t;
    }
    function qf() {
      by && (by.detachEvent("onpropertychange", Zh), Sy = by = null);
    }
    function Zh(e) {
      if (e.propertyName === "value" && so(Sy)) {
        var t = [];
        r0(
          t,
          Sy,
          e,
          Tr(e)
        ), Qh(_h, t);
      }
    }
    function lp(e, t, a) {
      e === "focusin" ? (qf(), by = t, Sy = a, by.attachEvent("onpropertychange", Zh)) : e === "focusout" && qf();
    }
    function ap(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return so(Sy);
    }
    function np(e, t) {
      if (e === "click") return so(t);
    }
    function Kh(e, t) {
      if (e === "input" || e === "change")
        return so(t);
    }
    function up(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Yf(e, t) {
      if (za(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Zt.call(t, o) || !za(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function d0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function h0(e, t) {
      var a = d0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = d0(a);
      }
    }
    function m0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Jh(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = mr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = mr(e.document);
      }
      return t;
    }
    function kh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ip(e, t) {
      var a = Jh(t);
      t = e.focusedElem;
      var i = e.selectionRange;
      if (a !== t && t && t.ownerDocument && m0(t.ownerDocument.documentElement, t)) {
        if (i !== null && kh(t)) {
          if (e = i.start, a = i.end, a === void 0 && (a = e), "selectionStart" in t)
            t.selectionStart = e, t.selectionEnd = Math.min(
              a,
              t.value.length
            );
          else if (a = (e = t.ownerDocument || document) && e.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var o = t.textContent.length, f = Math.min(i.start, o);
            i = i.end === void 0 ? f : Math.min(i.end, o), !a.extend && f > i && (o = i, i = f, f = o), o = h0(t, f);
            var d = h0(
              t,
              i
            );
            o && d && (a.rangeCount !== 1 || a.anchorNode !== o.node || a.anchorOffset !== o.offset || a.focusNode !== d.node || a.focusOffset !== d.offset) && (e = e.createRange(), e.setStart(o.node, o.offset), a.removeAllRanges(), f > i ? (a.addRange(e), a.extend(d.node, d.offset)) : (e.setEnd(
              d.node,
              d.offset
            ), a.addRange(e)));
          }
        }
        for (e = [], a = t; a = a.parentNode; )
          a.nodeType === 1 && e.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
          });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
          a = e[t], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    function y0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Op || nh == null || nh !== mr(i) || (i = nh, "selectionStart" in i && kh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Ty && Yf(Ty, i) || (Ty = i, i = ys(Dp, "onSelect"), 0 < i.length && (t = new D(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = nh)));
    }
    function Pi(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function fu(e) {
      if (Mp[e]) return Mp[e];
      if (!uh[e]) return e;
      var t = uh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in xg)
          return Mp[e] = t[a];
      return e;
    }
    function en(e, t) {
      jg.set(e, t), Fa(t, [e]);
    }
    function zr() {
      for (var e = ih, t = Up = ih = 0; t < e; ) {
        var a = $n[t];
        $n[t++] = null;
        var i = $n[t];
        $n[t++] = null;
        var o = $n[t];
        $n[t++] = null;
        var f = $n[t];
        if ($n[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && v0(a, o, f);
      }
    }
    function Dr(e, t, a, i) {
      $n[ih++] = e, $n[ih++] = t, $n[ih++] = a, $n[ih++] = i, Up |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Or(e, t, a, i) {
      return Dr(e, t, a, i), Mr(e);
    }
    function xl(e, t) {
      return Dr(e, null, null, t), Mr(e);
    }
    function v0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & yv || (o = !0)), e = f, f = f.return;
      o && t !== null && e.tag === 3 && (f = e.stateNode, o = 31 - $l(a), f = f.hiddenUpdates, e = f[o], e === null ? f[o] = [t] : e.push(t), t.lane = a | 536870912);
    }
    function Mr(e) {
      if (_y > bS)
        throw nr = _y = 0, Zy = ng = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      nr > SS && (nr = 0, Zy = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && jt(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && jt(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function ec(e) {
      if (Wn === null) return e;
      var t = Wn(e);
      return t === void 0 ? e : t.current;
    }
    function $h(e) {
      if (Wn === null) return e;
      var t = Wn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = ec(e.render), e.render !== t) ? (t = { $$typeof: Io, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function p0(e, t) {
      if (Wn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ol) && (i = !0);
          break;
        case 11:
          (o === Io || o === ol) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Yc || o === ol) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Wn(a), e !== void 0 && e === Wn(t)));
    }
    function g0(e) {
      Wn !== null && typeof WeakSet == "function" && (ch === null && (ch = /* @__PURE__ */ new WeakSet()), ch.add(e));
    }
    function Wh(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, y = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          y = h;
          break;
        case 11:
          y = h.render;
      }
      if (Wn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var p = !1;
      h = !1, y !== null && (y = Wn(y), y !== void 0 && (a.has(y) ? h = !0 : t.has(y) && (d === 1 ? h = !0 : p = !0))), ch !== null && (ch.has(e) || i !== null && ch.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || p) && (i = xl(e, 2), i !== null && ft(i, e, 2)), o === null || h || Wh(
        o,
        t,
        a
      ), f !== null && Wh(
        f,
        t,
        a
      );
    }
    function su() {
      var e = Zs;
      return Zs = 0, e;
    }
    function ho(e) {
      var t = Zs;
      return Zs = e, t;
    }
    function ru(e) {
      var t = Zs;
      return Zs += e, t;
    }
    function Fh(e) {
      Za = oh(), 0 > e.actualStartTime && (e.actualStartTime = Za);
    }
    function Ur(e) {
      if (0 <= Za) {
        var t = oh() - Za;
        e.actualDuration += t, e.selfBaseDuration = t, Za = -1;
      }
    }
    function Ih(e) {
      if (0 <= Za) {
        var t = oh() - Za;
        e.actualDuration += t, Za = -1;
      }
    }
    function tn() {
      if (0 <= Za) {
        var e = oh() - Za;
        Za = -1, Zs += e;
      }
    }
    function ln() {
      Za = oh();
    }
    function Nf(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function al(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Cp.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ea(t)
        }, Cp.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ea(t)
      };
    }
    function tc(e, t) {
      ui(), fh[sh++] = Tv, fh[sh++] = Sv, Sv = e, Tv = t;
    }
    function b0(e, t, a) {
      ui(), Fn[In++] = Gc, Fn[In++] = wc, Fn[In++] = Js, Js = e;
      var i = Gc;
      e = wc;
      var o = 32 - $l(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - $l(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Gc = 1 << 32 - $l(t) + o | a << o | i, wc = f + e;
      } else
        Gc = 1 << f | a << o | i, wc = e;
    }
    function Ph(e) {
      ui(), e.return !== null && (tc(e, 1), b0(e, 1, 0));
    }
    function Hr(e) {
      for (; e === Sv; )
        Sv = fh[--sh], fh[sh] = null, Tv = fh[--sh], fh[sh] = null;
      for (; e === Js; )
        Js = Fn[--In], Fn[In] = null, wc = Fn[--In], Fn[In] = null, Gc = Fn[--In], Fn[In] = null;
    }
    function ui() {
      _e || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function an(e, t) {
      if (e.return === null) {
        if (Pn === null)
          Pn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Pn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Pn.distanceFromLeaf > t && (Pn.distanceFromLeaf = t);
        }
        return Pn;
      }
      var a = an(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function lc(e, t) {
      Xc || (e = an(e, 0), e.serverProps = null, t !== null && (t = ps(t), e.serverTail.push(t)));
    }
    function ac(e) {
      var t = "", a = Pn;
      throw a !== null && (Pn = null, t = aa(a)), uc(
        al(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), xp;
    }
    function jf(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[Wl] = i, Md(a, i), a) {
        case "dialog":
          me("cancel", t), me("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          me("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Ky.length; a++)
            me(Ky[a], t);
          break;
        case "source":
          me("error", t);
          break;
        case "img":
        case "image":
        case "link":
          me("error", t), me("load", t);
          break;
        case "details":
          me("toggle", t);
          break;
        case "input":
          Ki("input", i), me("invalid", t), uo(t, i), Pu(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), no(t);
          break;
        case "option":
          io(t, i);
          break;
        case "select":
          Ki("select", i), me("invalid", t), Bh(t, i);
          break;
        case "textarea":
          Ki("textarea", i), me("invalid", t), qh(t, i), ki(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), no(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Nu(t.textContent, a) ? (i.popover != null && (me("beforetoggle", t), me("toggle", t)), i.onScroll != null && me("scroll", t), i.onScrollEnd != null && me("scrollend", t), i.onClick != null && (t.onclick = vs), t = !0) : t = !1, t || ac(e);
    }
    function em(e) {
      for (Da = e.return; Da; )
        switch (Da.tag) {
          case 3:
          case 27:
            Ni = !0;
            return;
          case 5:
          case 13:
            Ni = !1;
            return;
          default:
            Da = Da.return;
        }
    }
    function mo(e) {
      if (e !== Da) return !1;
      if (!_e)
        return em(e), _e = !0, !1;
      var t = !1, a;
      if ((a = e.tag !== 3 && e.tag !== 27) && ((a = e.tag === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || De(e.type, e.memoizedProps)), a = !a), a && (t = !0), t && Il) {
        for (t = Il; t; ) {
          a = an(e, 0);
          var i = ps(t);
          a.serverTail.push(i), t = i.type === "Suspense" ? wu(t) : ra(t.nextSibling);
        }
        ac(e);
      }
      if (em(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Il = wu(e);
      } else
        Il = Da ? ra(e.stateNode.nextSibling) : null;
      return !0;
    }
    function nc() {
      Il = Da = null, Xc = _e = !1;
    }
    function uc(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    function tm() {
      var e = Pn;
      e !== null && (Pn = null, e = aa(e), console.error(
        `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
        "https://react.dev/link/hydration-mismatch",
        e
      ));
    }
    function lm() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function am(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Cr() {
    }
    function S0(e, t, a) {
      H.actQueue !== null && (H.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Cr, Cr), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, E0(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Cr, Cr);
          else {
            if (e = mt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, E0(e), e;
          }
          throw Uy = t, Av = !0, Ev;
      }
    }
    function T0() {
      if (Uy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Uy;
      return Uy = null, Av = !1, e;
    }
    function E0(e) {
      if (e === Ev)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function gl(e) {
      var t = Oe;
      return e != null && (Oe = t === null ? e : t.concat(e)), t;
    }
    function Bl(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Yo(e, a.mode, 0), t._debugInfo = Oe, t.return = a), $(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function ii(e) {
      var t = Hy;
      return Hy += 1, rh === null && (rh = lm()), S0(rh, e, t);
    }
    function yo(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Vf(e, t) {
      throw t.$$typeof === mp ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Gf(e, t) {
      var a = le(e) || "Component";
      l1[a] || (l1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function wf(e, t) {
      var a = le(e) || "Component";
      a1[a] || (a1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function xr(e) {
      function t(S, b) {
        if (e) {
          var A = S.deletions;
          A === null ? (S.deletions = [b], S.flags |= 16) : A.push(b);
        }
      }
      function a(S, b) {
        if (!e) return null;
        for (; b !== null; )
          t(S, b), b = b.sibling;
        return null;
      }
      function i(S) {
        for (var b = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? b.set(S.key, S) : b.set(S.index, S), S = S.sibling;
        return b;
      }
      function o(S, b) {
        return S = Gn(S, b), S.index = 0, S.sibling = null, S;
      }
      function f(S, b, A) {
        return S.index = A, e ? (A = S.alternate, A !== null ? (A = A.index, A < b ? (S.flags |= 33554434, b) : A) : (S.flags |= 33554434, b)) : (S.flags |= 1048576, b);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 33554434), S;
      }
      function h(S, b, A, q) {
        return b === null || b.tag !== 6 ? (b = fs(
          A,
          S.mode,
          q
        ), b.return = S, b._debugOwner = S, b._debugInfo = Oe, b) : (b = o(b, A), b.return = S, b._debugInfo = Oe, b);
      }
      function y(S, b, A, q) {
        var _ = A.type;
        return _ === Wo ? (b = O(
          S,
          b,
          A.props.children,
          q,
          A.key
        ), Bl(A, b, S), b) : b !== null && (b.elementType === _ || p0(b, A) || typeof _ == "object" && _ !== null && _.$$typeof === ol && sf(_) === b.type) ? (b = o(b, A.props), yo(b, A), b.return = S, b._debugOwner = A._owner, b._debugInfo = Oe, b) : (b = Yo(A, S.mode, q), yo(b, A), b.return = S, b._debugInfo = Oe, b);
      }
      function p(S, b, A, q) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== A.containerInfo || b.stateNode.implementation !== A.implementation ? (b = gd(A, S.mode, q), b.return = S, b._debugInfo = Oe, b) : (b = o(b, A.children || []), b.return = S, b._debugInfo = Oe, b);
      }
      function O(S, b, A, q, _) {
        return b === null || b.tag !== 7 ? (b = Ou(
          A,
          S.mode,
          q,
          _
        ), b.return = S, b._debugOwner = S, b._debugInfo = Oe, b) : (b = o(b, A), b.return = S, b._debugInfo = Oe, b);
      }
      function j(S, b, A) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = fs(
            "" + b,
            S.mode,
            A
          ), b.return = S, b._debugOwner = S, b._debugInfo = Oe, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Ui:
              return A = Yo(
                b,
                S.mode,
                A
              ), yo(A, b), A.return = S, S = gl(b._debugInfo), A._debugInfo = Oe, Oe = S, A;
            case Kn:
              return b = gd(
                b,
                S.mode,
                A
              ), b.return = S, b._debugInfo = Oe, b;
            case ol:
              var q = gl(b._debugInfo);
              return b = sf(b), S = j(S, b, A), Oe = q, S;
          }
          if (sl(b) || pe(b))
            return A = Ou(
              b,
              S.mode,
              A,
              null
            ), A.return = S, A._debugOwner = S, S = gl(b._debugInfo), A._debugInfo = Oe, Oe = S, A;
          if (typeof b.then == "function")
            return q = gl(b._debugInfo), S = j(
              S,
              ii(b),
              A
            ), Oe = q, S;
          if (b.$$typeof === Ga)
            return j(
              S,
              ls(S, b),
              A
            );
          Vf(S, b);
        }
        return typeof b == "function" && Gf(S, b), typeof b == "symbol" && wf(S, b), null;
      }
      function M(S, b, A, q) {
        var _ = b !== null ? b.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return _ !== null ? null : h(S, b, "" + A, q);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Ui:
              return A.key === _ ? (_ = gl(A._debugInfo), S = y(
                S,
                b,
                A,
                q
              ), Oe = _, S) : null;
            case Kn:
              return A.key === _ ? p(S, b, A, q) : null;
            case ol:
              return _ = gl(A._debugInfo), A = sf(A), S = M(
                S,
                b,
                A,
                q
              ), Oe = _, S;
          }
          if (sl(A) || pe(A))
            return _ !== null ? null : (_ = gl(A._debugInfo), S = O(
              S,
              b,
              A,
              q,
              null
            ), Oe = _, S);
          if (typeof A.then == "function")
            return _ = gl(A._debugInfo), S = M(
              S,
              b,
              ii(A),
              q
            ), Oe = _, S;
          if (A.$$typeof === Ga)
            return M(
              S,
              b,
              ls(S, A),
              q
            );
          Vf(S, A);
        }
        return typeof A == "function" && Gf(S, A), typeof A == "symbol" && wf(S, A), null;
      }
      function G(S, b, A, q, _) {
        if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
          return S = S.get(A) || null, h(b, S, "" + q, _);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ui:
              return A = S.get(
                q.key === null ? A : q.key
              ) || null, S = gl(q._debugInfo), b = y(
                b,
                A,
                q,
                _
              ), Oe = S, b;
            case Kn:
              return S = S.get(
                q.key === null ? A : q.key
              ) || null, p(b, S, q, _);
            case ol:
              var ye = gl(q._debugInfo);
              return q = sf(q), b = G(
                S,
                b,
                A,
                q,
                _
              ), Oe = ye, b;
          }
          if (sl(q) || pe(q))
            return A = S.get(A) || null, S = gl(q._debugInfo), b = O(
              b,
              A,
              q,
              _,
              null
            ), Oe = S, b;
          if (typeof q.then == "function")
            return ye = gl(q._debugInfo), b = G(
              S,
              b,
              A,
              ii(q),
              _
            ), Oe = ye, b;
          if (q.$$typeof === Ga)
            return G(
              S,
              b,
              A,
              ls(b, q),
              _
            );
          Vf(b, q);
        }
        return typeof q == "function" && Gf(b, q), typeof q == "symbol" && wf(b, q), null;
      }
      function te(S, b, A, q) {
        if (typeof A != "object" || A === null) return q;
        switch (A.$$typeof) {
          case Ui:
          case Kn:
            ut(S, b, A);
            var _ = A.key;
            if (typeof _ != "string") break;
            if (q === null) {
              q = /* @__PURE__ */ new Set(), q.add(_);
              break;
            }
            if (!q.has(_)) {
              q.add(_);
              break;
            }
            $(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                _
              );
            });
            break;
          case ol:
            A = sf(A), te(S, b, A, q);
        }
        return q;
      }
      function Ae(S, b, A, q) {
        for (var _ = null, ye = null, ee = null, ge = b, Re = b = 0, Mt = null; ge !== null && Re < A.length; Re++) {
          ge.index > Re ? (Mt = ge, ge = null) : Mt = ge.sibling;
          var Pt = M(
            S,
            ge,
            A[Re],
            q
          );
          if (Pt === null) {
            ge === null && (ge = Mt);
            break;
          }
          _ = te(
            S,
            Pt,
            A[Re],
            _
          ), e && ge && Pt.alternate === null && t(S, ge), b = f(Pt, b, Re), ee === null ? ye = Pt : ee.sibling = Pt, ee = Pt, ge = Mt;
        }
        if (Re === A.length)
          return a(S, ge), _e && tc(S, Re), ye;
        if (ge === null) {
          for (; Re < A.length; Re++)
            ge = j(S, A[Re], q), ge !== null && (_ = te(
              S,
              ge,
              A[Re],
              _
            ), b = f(
              ge,
              b,
              Re
            ), ee === null ? ye = ge : ee.sibling = ge, ee = ge);
          return _e && tc(S, Re), ye;
        }
        for (ge = i(ge); Re < A.length; Re++)
          Mt = G(
            ge,
            S,
            Re,
            A[Re],
            q
          ), Mt !== null && (_ = te(
            S,
            Mt,
            A[Re],
            _
          ), e && Mt.alternate !== null && ge.delete(
            Mt.key === null ? Re : Mt.key
          ), b = f(
            Mt,
            b,
            Re
          ), ee === null ? ye = Mt : ee.sibling = Mt, ee = Mt);
        return e && ge.forEach(function(Wc) {
          return t(S, Wc);
        }), _e && tc(S, Re), ye;
      }
      function It(S, b, A, q) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var _ = null, ye = null, ee = b, ge = b = 0, Re = null, Mt = null, Pt = A.next(); ee !== null && !Pt.done; ge++, Pt = A.next()) {
          ee.index > ge ? (Re = ee, ee = null) : Re = ee.sibling;
          var Wc = M(S, ee, Pt.value, q);
          if (Wc === null) {
            ee === null && (ee = Re);
            break;
          }
          Mt = te(
            S,
            Wc,
            Pt.value,
            Mt
          ), e && ee && Wc.alternate === null && t(S, ee), b = f(Wc, b, ge), ye === null ? _ = Wc : ye.sibling = Wc, ye = Wc, ee = Re;
        }
        if (Pt.done)
          return a(S, ee), _e && tc(S, ge), _;
        if (ee === null) {
          for (; !Pt.done; ge++, Pt = A.next())
            ee = j(S, Pt.value, q), ee !== null && (Mt = te(
              S,
              ee,
              Pt.value,
              Mt
            ), b = f(
              ee,
              b,
              ge
            ), ye === null ? _ = ee : ye.sibling = ee, ye = ee);
          return _e && tc(S, ge), _;
        }
        for (ee = i(ee); !Pt.done; ge++, Pt = A.next())
          Re = G(
            ee,
            S,
            ge,
            Pt.value,
            q
          ), Re !== null && (Mt = te(
            S,
            Re,
            Pt.value,
            Mt
          ), e && Re.alternate !== null && ee.delete(
            Re.key === null ? ge : Re.key
          ), b = f(
            Re,
            b,
            ge
          ), ye === null ? _ = Re : ye.sibling = Re, ye = Re);
        return e && ee.forEach(function(xS) {
          return t(S, xS);
        }), _e && tc(S, ge), _;
      }
      function et(S, b, A, q) {
        if (typeof A == "object" && A !== null && A.type === Wo && A.key === null && (Bl(A, null, S), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Ui:
              var _ = gl(A._debugInfo);
              e: {
                for (var ye = A.key; b !== null; ) {
                  if (b.key === ye) {
                    if (ye = A.type, ye === Wo) {
                      if (b.tag === 7) {
                        a(
                          S,
                          b.sibling
                        ), q = o(
                          b,
                          A.props.children
                        ), q.return = S, q._debugOwner = A._owner, q._debugInfo = Oe, Bl(A, q, S), S = q;
                        break e;
                      }
                    } else if (b.elementType === ye || p0(
                      b,
                      A
                    ) || typeof ye == "object" && ye !== null && ye.$$typeof === ol && sf(ye) === b.type) {
                      a(
                        S,
                        b.sibling
                      ), q = o(b, A.props), yo(q, A), q.return = S, q._debugOwner = A._owner, q._debugInfo = Oe, S = q;
                      break e;
                    }
                    a(S, b);
                    break;
                  } else t(S, b);
                  b = b.sibling;
                }
                A.type === Wo ? (q = Ou(
                  A.props.children,
                  S.mode,
                  q,
                  A.key
                ), q.return = S, q._debugOwner = S, q._debugInfo = Oe, Bl(A, q, S), S = q) : (q = Yo(
                  A,
                  S.mode,
                  q
                ), yo(q, A), q.return = S, q._debugInfo = Oe, S = q);
              }
              return S = d(S), Oe = _, S;
            case Kn:
              e: {
                for (_ = A, A = _.key; b !== null; ) {
                  if (b.key === A)
                    if (b.tag === 4 && b.stateNode.containerInfo === _.containerInfo && b.stateNode.implementation === _.implementation) {
                      a(
                        S,
                        b.sibling
                      ), q = o(
                        b,
                        _.children || []
                      ), q.return = S, S = q;
                      break e;
                    } else {
                      a(S, b);
                      break;
                    }
                  else t(S, b);
                  b = b.sibling;
                }
                q = gd(
                  _,
                  S.mode,
                  q
                ), q.return = S, S = q;
              }
              return d(S);
            case ol:
              return _ = gl(A._debugInfo), A = sf(A), S = et(
                S,
                b,
                A,
                q
              ), Oe = _, S;
          }
          if (sl(A))
            return _ = gl(A._debugInfo), S = Ae(
              S,
              b,
              A,
              q
            ), Oe = _, S;
          if (pe(A)) {
            if (_ = gl(A._debugInfo), ye = pe(A), typeof ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ee = ye.call(A);
            return ee === A ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ee) !== "[object Generator]") && (e1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), e1 = !0) : A.entries !== ye || Np || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Np = !0), S = It(
              S,
              b,
              ee,
              q
            ), Oe = _, S;
          }
          if (typeof A.then == "function")
            return _ = gl(A._debugInfo), S = et(
              S,
              b,
              ii(A),
              q
            ), Oe = _, S;
          if (A.$$typeof === Ga)
            return et(
              S,
              b,
              ls(S, A),
              q
            );
          Vf(S, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (_ = "" + A, b !== null && b.tag === 6 ? (a(
          S,
          b.sibling
        ), q = o(b, _), q.return = S, S = q) : (a(S, b), q = fs(
          _,
          S.mode,
          q
        ), q.return = S, q._debugOwner = S, q._debugInfo = Oe, S = q), d(S)) : (typeof A == "function" && Gf(S, A), typeof A == "symbol" && wf(S, A), a(S, b));
      }
      return function(S, b, A, q) {
        var _ = Oe;
        Oe = null;
        try {
          Hy = 0;
          var ye = et(
            S,
            b,
            A,
            q
          );
          return rh = null, ye;
        } catch (Mt) {
          if (Mt === Ev) throw Mt;
          var ee = be(29, Mt, null, S.mode);
          ee.lanes = q, ee.return = S;
          var ge = ee._debugInfo = Oe;
          if (ee._debugOwner = S._debugOwner, ge != null) {
            for (var Re = ge.length - 1; 0 <= Re; Re--)
              if (typeof ge[Re].stack == "string") {
                ee._debugOwner = ge[Re];
                break;
              }
          }
          return ee;
        } finally {
          Oe = _;
        }
      };
    }
    function A0(e, t) {
      var a = Gi;
      Se(Rv, a, e), Se(dh, t, e), Gi = a | t.baseLanes;
    }
    function nm(e) {
      Se(Rv, Gi, e), Se(
        dh,
        dh.current,
        e
      );
    }
    function ci(e) {
      Gi = Rv.current, He(dh, e), He(Rv, e);
    }
    function On(e) {
      var t = e.alternate;
      Se(
        zl,
        zl.current & hh,
        e
      ), Se(eu, e, e), ji === null && (t === null || dh.current !== null || t.memoizedState !== null) && (ji = e);
    }
    function vo(e) {
      if (e.tag === 22) {
        if (Se(zl, zl.current, e), Se(eu, e, e), ji === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (ji = e);
        }
      } else Mn(e);
    }
    function Mn(e) {
      Se(zl, zl.current, e), Se(
        eu,
        eu.current,
        e
      );
    }
    function Un(e) {
      He(eu, e), ji === e && (ji = null), He(zl, e);
    }
    function Hn(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === cr || a.data === or))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function oi() {
      return {
        controller: new rS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function du(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function po(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && dS(hS, function() {
        e.controller.abort();
      });
    }
    function ic(e, t) {
      if (xy === null) {
        var a = xy = [];
        jp = 0, $s = dn(), mh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return jp++, t.then(um, um), t;
    }
    function um() {
      if (--jp === 0 && xy !== null) {
        mh !== null && (mh.status = "fulfilled");
        var e = xy;
        xy = null, $s = 0, mh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function R0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Br() {
      var e = Ws.current;
      return e !== null ? e : mt.pooledCache;
    }
    function qr(e, t) {
      t === null ? Se(Ws, Ws.current, e) : Se(Ws, t.pool, e);
    }
    function z0() {
      var e = Br();
      return e === null ? null : { parent: Ol._currentValue, pool: e };
    }
    function Ce() {
      var e = C;
      au === null ? au = [e] : au.push(e);
    }
    function Q() {
      var e = C;
      if (au !== null && (Lc++, au[Lc] !== e)) {
        var t = le(
          de
        );
        if (!i1.has(t) && (i1.add(t), au !== null)) {
          for (var a = "", i = 0; i <= Lc; i++) {
            var o = au[i], f = i === Lc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function cc(e) {
      e == null || sl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        C,
        typeof e
      );
    }
    function Xf() {
      var e = le(de);
      o1.has(e) || (o1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Ke() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ua(e, t) {
      if (qy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          C
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        C,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!za(e[a], t[a])) return !1;
      return !0;
    }
    function fi(e, t, a, i, o, f) {
      rf = f, de = t, au = e !== null ? e._debugHookTypes : null, Lc = -1, qy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = le(
        de
      ), Vp.has(f) || (Vp.add(f), console.error(
        "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e !== null && e.memoizedState !== null ? hf : au !== null ? Is : df, Fs = f = (t.mode & ma) !== Et;
      var d = qp(a, i, o);
      if (Fs = !1, vh && (d = go(
        t,
        a,
        i,
        o
      )), f) {
        We(!0);
        try {
          d = go(
            t,
            a,
            i,
            o
          );
        } finally {
          We(!1);
        }
      }
      return Yr(e, t), d;
    }
    function Yr(e, t) {
      t._debugHookTypes = au, t.dependencies === null ? Qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Qc
      }) : t.dependencies._debugThenableState = Qc, H.H = Vi;
      var a = rt !== null && rt.next !== null;
      if (rf = 0, au = C = rl = rt = de = null, Lc = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), zv = !1, By = 0, Qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Gl || (e = e.dependencies, e !== null && ts(e) && (Gl = !0)), Av ? (Av = !1, e = !0) : e = !1, e && (t = le(t) || "Unknown", c1.has(t) || Vp.has(t) || (c1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function go(e, t, a, i) {
      de = e;
      var o = 0;
      do {
        if (vh && (Qc = null), By = 0, vh = !1, o >= yS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, qy = !1, rl = rt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Lc = -1, H.H = Ps, f = qp(t, a, i);
      } while (vh);
      return f;
    }
    function Nr() {
      var e = H.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? bo(t) : t, e = e.useState()[0], (rt !== null ? rt.memoizedState : null) !== e && (de.flags |= 1024), t;
    }
    function Qf() {
      var e = Dv !== 0;
      return Dv = 0, e;
    }
    function Cn(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & ku) !== Et ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~a;
    }
    function jr(e) {
      if (zv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        zv = !1;
      }
      rf = 0, au = rl = rt = de = null, Lc = -1, C = null, vh = !1, By = Dv = 0, Qc = null;
    }
    function bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rl === null ? de.memoizedState = rl = e : rl = rl.next = e, rl;
    }
    function Ge() {
      if (rt === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = rt.next;
      var t = rl === null ? de.memoizedState : rl.next;
      if (t !== null)
        rl = t, rt = e;
      else {
        if (e === null)
          throw de.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        rt = e, e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null
        }, rl === null ? de.memoizedState = rl = e : rl = rl.next = e;
      }
      return rl;
    }
    function bo(e) {
      var t = By;
      return By += 1, Qc === null && (Qc = lm()), e = S0(Qc, e, t), t = de, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, H.H = t !== null && t.memoizedState !== null ? hf : df), e;
    }
    function $t(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return bo(e);
        if (e.$$typeof === Ga) return ct(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ba(e) {
      var t = null, a = de.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = de.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Gp(), de.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || qy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = yp;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ql(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function So(e, t, a) {
      var i = bl();
      if (a !== void 0) {
        var o = a(t);
        if (Fs) {
          We(!0);
          try {
            a(t);
          } finally {
            We(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = kf.bind(
        null,
        de,
        e
      ), [i.memoizedState, e];
    }
    function hu(e) {
      var t = Ge();
      return ia(t, rt, e);
    }
    function ia(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, O = !1;
        do {
          var j = p.lane & -536870913;
          if (j !== p.lane ? (Ve & j) === j : (rf & j) === j) {
            var M = p.revertLane;
            if (M === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), j === $s && (O = !0);
            else if ((rf & M) === M) {
              p = p.next, M === $s && (O = !0);
              continue;
            } else
              j = {
                lane: 0,
                revertLane: p.revertLane,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = j, d = f) : y = y.next = j, de.lanes |= M, vf |= M;
            j = p.action, Fs && a(f, j), f = p.hasEagerState ? p.eagerState : a(f, j);
          } else
            M = {
              lane: j,
              revertLane: p.revertLane,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = M, d = f) : y = y.next = M, de.lanes |= j, vf |= j;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !za(f, e.memoizedState) && (Gl = !0, O && (a = mh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Yl(e) {
      var t = Ge(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        za(f, t.memoizedState) || (Gl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function mu(e, t, a) {
      var i = de, o = bl();
      if (_e) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        yh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), yh = !0);
      } else {
        if (f = t(), yh || (a = t(), za(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), yh = !0)), mt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        Ve & 60 || xn(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, rc(
        im.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Bn(
        lu | Dl,
        si.bind(
          null,
          i,
          a,
          f,
          t
        ),
        { destroy: void 0 },
        null
      ), f;
    }
    function qa(e, t, a) {
      var i = de, o = Ge(), f = _e;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !yh) {
        var d = t();
        za(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), yh = !0);
      }
      (d = !za(
        (rt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Gl = !0), o = o.queue;
      var h = im.bind(null, i, o, e);
      if (nl(2048, Dl, h, [e]), o.getSnapshot !== t || d || rl !== null && rl.memoizedState.tag & lu) {
        if (i.flags |= 2048, Bn(
          lu | Dl,
          si.bind(
            null,
            i,
            o,
            a,
            t
          ),
          { destroy: void 0 },
          null
        ), mt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || rf & 60 || xn(i, t, a);
      }
      return a;
    }
    function xn(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = de.updateQueue, t === null ? (t = Gp(), de.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function si(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Vr(t) && Gr(e);
    }
    function im(e, t, a) {
      return a(function() {
        Vr(t) && Gr(e);
      });
    }
    function Vr(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !za(e, a);
      } catch {
        return !0;
      }
    }
    function Gr(e) {
      var t = xl(e, 2);
      t !== null && ft(t, e, 2);
    }
    function Sl(e) {
      var t = bl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Fs) {
          We(!0);
          try {
            a();
          } finally {
            We(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ql,
        lastRenderedState: e
      }, t;
    }
    function Wt(e) {
      e = Sl(e);
      var t = e.queue, a = zo.bind(
        null,
        de,
        t
      );
      return t.dispatch = a, [e.memoizedState, a];
    }
    function we(e) {
      var t = bl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = di.bind(
        null,
        de,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Ya(e, t) {
      var a = Ge();
      return nn(a, rt, e, t);
    }
    function nn(e, t, a, i) {
      return e.baseState = a, ia(
        e,
        rt,
        typeof i == "function" ? i : ql
      );
    }
    function wr(e, t) {
      var a = Ge();
      return rt !== null ? nn(a, rt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function oc(e, t, a, i, o) {
      if (gu(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        H.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, cm(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function cm(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = H.T, d = {};
        H.T = d, H.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), y = H.S;
          y !== null && y(d, h), om(e, t, h);
        } catch (p) {
          fc(e, t, p);
        } finally {
          H.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), om(e, t, d);
        } catch (p) {
          fc(e, t, p);
        }
    }
    function om(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          To(e, t, i);
        },
        function(i) {
          return fc(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
      )) : To(e, t, a);
    }
    function To(e, t, a) {
      t.status = "fulfilled", t.value = a, Eo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, cm(e, a)));
    }
    function fc(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Eo(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Eo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ao(e, t) {
      return t;
    }
    function sc(e, t) {
      if (_e) {
        var a = mt.formState;
        if (a !== null) {
          e: {
            var i = de;
            if (_e) {
              if (Il) {
                t: {
                  for (var o = Il, f = Ni; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ra(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === dg || f === k1 ? o : null;
                }
                if (o) {
                  Il = ra(
                    o.nextSibling
                  ), i = o.data === dg;
                  break e;
                }
              }
              ac(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = bl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ao,
        lastRenderedState: t
      }, a.queue = i, a = zo.bind(
        null,
        de,
        i
      ), i.dispatch = a, i = Sl(!1), f = di.bind(
        null,
        de,
        !1,
        i.queue
      ), i = bl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = oc.bind(
        null,
        de,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Ro(e) {
      var t = Ge();
      return fm(t, rt, e);
    }
    function fm(e, t, a) {
      t = ia(
        e,
        t,
        Ao
      )[0], e = hu(ql)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? bo(t) : t;
      var i = Ge(), o = i.queue, f = o.dispatch;
      return a !== i.memoizedState && (de.flags |= 2048, Bn(
        lu | Dl,
        Xr.bind(null, o, a),
        { destroy: void 0 },
        null
      )), [t, f, e];
    }
    function Xr(e, t) {
      e.action = t;
    }
    function Lf(e) {
      var t = Ge(), a = rt;
      if (a !== null)
        return fm(t, a, e);
      Ge(), t = t.memoizedState, a = Ge();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Bn(e, t, a, i) {
      return e = { tag: e, create: t, inst: a, deps: i, next: null }, t = de.updateQueue, t === null && (t = Gp(), de.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Qr(e) {
      var t = bl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Na(e, t, a, i) {
      var o = bl();
      de.flags |= e, o.memoizedState = Bn(
        lu | t,
        a,
        { destroy: void 0 },
        i === void 0 ? null : i
      );
    }
    function nl(e, t, a, i) {
      var o = Ge();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      rt !== null && i !== null && ua(i, rt.memoizedState.deps) ? o.memoizedState = Bn(t, a, f, i) : (de.flags |= e, o.memoizedState = Bn(
        lu | t,
        a,
        f,
        i
      ));
    }
    function rc(e, t) {
      (de.mode & ku) !== Et && (de.mode & Gg) === Et ? Na(142608384, Dl, e, t) : Na(8390656, Dl, e, t);
    }
    function dc(e, t) {
      var a = 4194308;
      return (de.mode & ku) !== Et && (a |= 67108864), Na(a, Pl, e, t);
    }
    function _f(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Lr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (de.mode & ku) !== Et && (i |= 67108864), Na(
        i,
        Pl,
        _f.bind(null, t, e),
        a
      );
    }
    function Zf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, nl(
        4,
        Pl,
        _f.bind(null, t, e),
        a
      );
    }
    function yu(e, t) {
      return bl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Kf(e, t) {
      var a = Ge();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ua(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ri(e, t) {
      var a = bl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Fs) {
        We(!0);
        try {
          e();
        } finally {
          We(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function hc(e, t) {
      var a = Ge();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ua(t, i[1]))
        return i[0];
      if (i = e(), Fs) {
        We(!0);
        try {
          e();
        } finally {
          We(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function _r(e, t) {
      var a = bl();
      return ca(a, e, t);
    }
    function Zr(e, t) {
      var a = Ge();
      return un(
        a,
        rt.memoizedState,
        e,
        t
      );
    }
    function Kr(e, t) {
      var a = Ge();
      return rt === null ? ca(a, e, t) : un(
        a,
        rt.memoizedState,
        e,
        t
      );
    }
    function ca(e, t, a) {
      return a === void 0 || rf & 1073741824 ? e.memoizedState = t : (e.memoizedState = a, e = jo(), de.lanes |= e, vf |= e, a);
    }
    function un(e, t, a, i) {
      return za(a, t) ? a : dh.current !== null ? (e = ca(e, a, i), za(e, t) || (Gl = !0), e) : rf & 42 ? (e = jo(), de.lanes |= e, vf |= e, t) : (Gl = !0, e.memoizedState = a);
    }
    function vu(e, t, a, i, o) {
      var f = ht.p;
      ht.p = f !== 0 && f < La ? f : La;
      var d = H.T, h = {};
      H.T = h, di(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var y = o(), p = H.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          var O = R0(
            y,
            i
          );
          yc(
            e,
            t,
            O,
            Kl(e)
          );
        } else
          yc(
            e,
            t,
            i,
            Kl(e)
          );
      } catch (j) {
        yc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: j },
          Kl(e)
        );
      } finally {
        ht.p = f, H.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Jr(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = pu(e).queue;
      vu(
        e,
        o,
        t,
        sr,
        a === null ? zt : function() {
          return qn(e), a(i);
        }
      );
    }
    function pu(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: sr,
        baseState: sr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ql,
          lastRenderedState: sr
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
          lastRenderedReducer: ql,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function qn(e) {
      H.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = pu(e).next.queue;
      yc(
        e,
        t,
        {},
        Kl(e)
      );
    }
    function Bt() {
      var e = Sl(!1);
      return e = vu.bind(
        null,
        de,
        e.queue,
        !0,
        !1
      ), bl().memoizedState = e, [!1, e];
    }
    function Jf() {
      var e = hu(ql)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : bo(e),
        t
      ];
    }
    function D0() {
      var e = Yl(ql)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : bo(e),
        t
      ];
    }
    function mc() {
      return ct($y);
    }
    function sm() {
      var e = bl(), t = mt.identifierPrefix;
      if (_e) {
        var a = wc, i = Gc;
        a = (i & ~(1 << 32 - $l(i) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = Dv++, 0 < a && (t += "H" + a.toString(32)), t += ":";
      } else
        a = mS++, t = ":" + t + "r" + a.toString(32) + ":";
      return e.memoizedState = t;
    }
    function qt() {
      return bl().memoizedState = rm.bind(
        null,
        de
      );
    }
    function rm(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Kl(a);
            e = Eu(i);
            var o = vi(a, e, i);
            o !== null && (ft(o, a, i), Ho(o, a, i)), a = oi(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function kf(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e), a = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, gu(e) ? O0(t, a) : (a = Or(
        e,
        t,
        a,
        i
      ), a !== null && (ft(
        a,
        e,
        i
      ), dm(
        a,
        t,
        i
      ))), Be(e, i);
    }
    function zo(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e), yc(
        e,
        t,
        a,
        i
      ), Be(e, i);
    }
    function yc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (gu(e)) O0(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = H.H;
          H.H = Ma;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, za(y, h))
              return Dr(e, t, o, 0), mt === null && zr(), !1;
          } catch {
          } finally {
            H.H = d;
          }
        }
        if (a = Or(e, t, o, i), a !== null)
          return ft(a, e, i), dm(a, t, i), !0;
      }
      return !1;
    }
    function di(e, t, a, i) {
      if (H.T === null && $s === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: dn(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, gu(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Or(
          e,
          a,
          i,
          2
        ), t !== null && ft(t, e, 2);
      Be(e, 2);
    }
    function gu(e) {
      var t = e.alternate;
      return e === de || t !== null && t === de;
    }
    function O0(e, t) {
      vh = zv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function dm(e, t, a) {
      if (a & 4194176) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, l0(e, a);
      }
    }
    function hm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        b1.has(t) || (b1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function kr(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ma) {
        We(!0);
        try {
          f = a(i, o);
        } finally {
          We(!1);
        }
      }
      f === void 0 && (t = re(t) || "Component", y1.has(t) || (y1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : he({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function hi(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ma) {
          We(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            We(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          re(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Yf(a, i) || !Yf(o, f) : !0;
    }
    function $r(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = le(e) || "Component", s1.has(e) || (s1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), wp.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Yn(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = he({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function mm(e, t) {
      Ov(e), e = ph ? "An error occurred in the <" + ph + "> component." : "An error occurred in one of your React components.";
      var a = H.getCurrentStack, i = t.componentStack != null ? t.componentStack : "";
      H.getCurrentStack = function() {
        return i;
      };
      try {
        console.warn(
          `%s

%s
`,
          e,
          `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
        );
      } finally {
        H.getCurrentStack = a;
      }
    }
    function bu(e, t) {
      var a = ph ? "The above error occurred in the <" + ph + "> component." : "The above error occurred in one of your React components.", i = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Xp || "Anonymous") + "."), o = H.getCurrentStack, f = t.componentStack != null ? t.componentStack : "";
      H.getCurrentStack = function() {
        return f;
      };
      try {
        typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Vd(
          "error",
          [
            `%o

%s

%s
`,
            e,
            a,
            i
          ],
          e.environmentName
        )() : console.error(
          `%o

%s

%s
`,
          e,
          a,
          i
        );
      } finally {
        H.getCurrentStack = o;
      }
    }
    function Te(e) {
      Ov(e);
    }
    function Je(e, t) {
      try {
        ph = t.source ? le(t.source) : null, Xp = null;
        var a = t.value;
        if (H.actQueue !== null)
          H.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Yt(e, t, a) {
      try {
        ph = a.source ? le(a.source) : null, Xp = le(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Do(e, t, a) {
      return a = Eu(a), a.tag = Kp, a.payload = { element: null }, a.callback = function() {
        $(t.source, Je, e, t);
      }, a;
    }
    function mi(e) {
      return e = Eu(e), e.tag = Kp, e;
    }
    function Su(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          g0(a), $(
            i.source,
            Yt,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        g0(a), $(
          i.source,
          Yt,
          t,
          a,
          i
        ), typeof o != "function" && (gf === null ? gf = /* @__PURE__ */ new Set([this]) : gf.add(this)), oS(this, i), typeof o == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          le(a) || "Unknown"
        );
      });
    }
    function Wr(e, t, a, i, o) {
      if (a.flags |= 32768, Xa && El(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Uo(
          t,
          a,
          o,
          !0
        ), _e && (Xc = !0), a = eu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return ji === null ? ds() : a.alternate === null && Jt === Kc && (Jt = Wp), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Bp ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), bt(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Bp ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), bt(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return bt(e, i, o), ds(), !1;
      }
      if (_e)
        return Xc = !0, t = eu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== xp && uc(
          al(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== xp && uc(
          al(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = al(i, a), o = Do(
          e.stateNode,
          i,
          o
        ), Au(e, o), Jt !== er && (Jt = Ah)), !1;
      var f = al(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Xy === null ? Xy = [f] : Xy.push(f), Jt !== er && (Jt = Ah), t === null) return !0;
      i = al(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Do(
              a.stateNode,
              i,
              e
            ), Au(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (gf === null || !gf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = mi(o), Su(
                o,
                e,
                a,
                i
              ), Au(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Nt(e, t, a, i) {
      t.child = e === null ? n1(t, null, a, i) : ks(
        t,
        e.child,
        a,
        i
      );
    }
    function vc(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return yi(t), En(t), i = fi(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Qf(), T(), e !== null && !Gl ? (Cn(e, t, o), jn(e, t, o)) : (_e && h && Ph(t), t.flags |= 1, Nt(e, t, i, o), t.child);
    }
    function M0(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !cs(f) && f.defaultProps === void 0 && a.compare === null ? (a = ec(f), t.tag = 15, t.type = a, $f(t, f), Ut(
          e,
          t,
          a,
          i,
          o
        )) : (e = os(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !ad(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Yf, a(d, i) && e.ref === t.ref)
          return jn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Gn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ut(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Yf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Gl = !1, t.pendingProps = i = f, ad(e, o))
            e.flags & 131072 && (Gl = !0);
          else
            return t.lanes = e.lanes, jn(e, t, o);
      }
      return Pr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Fr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = (t.stateNode._pendingVisibility & Ey) !== 0, d = e !== null ? e.memoizedState : null;
      if (Oo(e, t), i.mode === "hidden" || f) {
        if (t.flags & 128) {
          if (i = d !== null ? d.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Ir(
            e,
            t,
            i,
            a
          );
        }
        if (a & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && qr(
            t,
            d !== null ? d.cachePool : null
          ), d !== null ? A0(t, d) : nm(t), vo(t);
        else
          return t.lanes = t.childLanes = 536870912, Ir(
            e,
            t,
            d !== null ? d.baseLanes | a : a,
            a
          );
      } else
        d !== null ? (qr(t, d.cachePool), A0(t, d), Mn(t), t.memoizedState = null) : (e !== null && qr(t, null), nm(t), Mn(t));
      return Nt(e, t, o, a), t.child;
    }
    function Ir(e, t, a, i) {
      var o = Br();
      return o = o === null ? null : {
        parent: Ol._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && qr(t, null), nm(t), vo(t), e !== null && Uo(e, t, i, !0), null;
    }
    function Oo(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 2097664);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 2097664);
      }
    }
    function Pr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = re(a) || "Unknown";
        T1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), T1[f] = !0);
      }
      return t.mode & ma && $u.recordLegacyContextWarning(
        t,
        null
      ), e === null && ($f(t, t.type), a.contextTypes && (f = re(a) || "Unknown", A1[f] || (A1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), yi(t), En(t), a = fi(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Qf(), T(), e !== null && !Gl ? (Cn(e, t, o), jn(e, t, o)) : (_e && i && Ph(t), t.flags |= 1, Nt(e, t, a, o), t.child);
    }
    function U0(e, t, a, i, o, f) {
      return yi(t), En(t), Lc = -1, qy = e !== null && e.type !== t.type, t.updateQueue = null, a = go(
        t,
        i,
        a,
        o
      ), Yr(e, t), i = Qf(), T(), e !== null && !Gl ? (Cn(e, t, f), jn(e, t, f)) : (_e && i && Ph(t), t.flags |= 1, Nt(e, t, a, f), t.child);
    }
    function ed(e, t, a, i, o) {
      switch (vt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = mt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = mi(h), Su(
            h,
            d,
            t,
            al(f, t)
          ), Au(t, h);
      }
      if (yi(t), t.stateNode === null) {
        if (d = ff, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Ga) && !g1.has(a) && (g1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Fo ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          re(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ct(f)), f = new a(i, d), t.mode & ma) {
          We(!0);
          try {
            f = new a(i, d);
          } finally {
            We(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = wp, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = f1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = re(a) || "Component", r1.has(d) || (r1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = re(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            h1.has(f) || (h1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = re(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !p1.has(a) && (p1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !v1.has(a) && (v1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          re(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || d1.has(a) || (d1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          re(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || sl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, id(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? ct(d) : ff, f.state === i && (d = re(a) || "Component", m1.has(d) || (m1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ma && $u.recordLegacyContextWarning(
          t,
          f
        ), $u.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (kr(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          le(t) || "Component"
        ), wp.enqueueReplaceState(
          f,
          f.state,
          null
        )), pi(t, i, f, o), Co(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== Et && (t.flags |= 67108864), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var O = t.memoizedProps;
        h = Yn(a, O), f.props = h;
        var j = f.context;
        y = a.contextType, d = ff, typeof y == "object" && y !== null && (d = ct(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", O = t.pendingProps !== O, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (O || j !== d) && $r(
          t,
          f,
          i,
          d
        ), yf = !1;
        var M = t.memoizedState;
        f.state = M, pi(t, i, f, o), Co(), j = t.memoizedState, O || M !== j || yf ? (typeof p == "function" && (kr(
          t,
          a,
          p,
          i
        ), j = t.memoizedState), (h = yf || hi(
          t,
          a,
          h,
          i,
          M,
          j,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== Et && (t.flags |= 67108864)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== Et && (t.flags |= 67108864), t.memoizedProps = i, t.memoizedState = j), f.props = i, f.state = j, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== Et && (t.flags |= 67108864), f = !1);
      } else {
        f = t.stateNode, cd(e, t), d = t.memoizedProps, y = Yn(a, d), f.props = y, p = t.pendingProps, M = f.context, j = a.contextType, h = ff, typeof j == "object" && j !== null && (h = ct(j)), O = a.getDerivedStateFromProps, (j = typeof O == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || M !== h) && $r(
          t,
          f,
          i,
          h
        ), yf = !1, M = t.memoizedState, f.state = M, pi(t, i, f, o), Co();
        var G = t.memoizedState;
        d !== p || M !== G || yf || e !== null && e.dependencies !== null && ts(e.dependencies) ? (typeof O == "function" && (kr(
          t,
          a,
          O,
          i
        ), G = t.memoizedState), (y = yf || hi(
          t,
          a,
          y,
          i,
          M,
          G,
          h
        ) || e !== null && e.dependencies !== null && ts(e.dependencies)) ? (j || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          G,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Oo(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, H.getCurrentStack = t === null ? null : yl, wa = !1, Al = t, d && typeof a.getDerivedStateFromError != "function")
          a = null, Za = -1;
        else {
          if (En(t), a = _g(h), t.mode & ma) {
            We(!0);
            try {
              _g(h);
            } finally {
              We(!1);
            }
          }
          T();
        }
        t.flags |= 1, e !== null && d ? (t.child = ks(
          t,
          e.child,
          null,
          o
        ), t.child = ks(
          t,
          null,
          a,
          o
        )) : Nt(
          e,
          t,
          a,
          o
        ), t.memoizedState = h.state, e = t.child;
      } else
        e = jn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (gh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        le(t) || "a component"
      ), gh = !0), e;
    }
    function td(e, t, a, i) {
      return nc(), t.flags |= 256, Nt(e, t, a, i), t.child;
    }
    function $f(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = re(t) || "Unknown", R1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), R1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = re(t) || "Unknown", E1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), E1[t] = !0));
    }
    function Nl(e) {
      return { baseLanes: e, cachePool: z0() };
    }
    function Ht(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Sn), e;
    }
    function Wf(e, t, a) {
      var i, o = t.pendingProps;
      Rt(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & Cy) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (_e) {
          if (f ? On(t) : Mn(t), _e) {
            var h = Il, y;
            if (!(y = !h)) {
              e: {
                var p = h;
                for (y = Ni; p.nodeType !== 8; ) {
                  if (!y) {
                    y = null;
                    break e;
                  }
                  if (p = ra(p.nextSibling), p === null) {
                    y = null;
                    break e;
                  }
                }
                y = p;
              }
              y !== null ? (ui(), t.memoizedState = {
                dehydrated: y,
                treeContext: Js !== null ? { id: Gc, overflow: wc } : null,
                retryLane: 536870912
              }, p = be(18, null, null, Et), p.stateNode = y, p.return = t, t.child = p, Da = t, Il = null, y = !0) : y = !1, y = !y;
            }
            y && (lc(
              t,
              h
            ), ac(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return h.data === or ? t.lanes = 16 : t.lanes = 536870912, null;
          Un(t);
        }
        return h = o.children, o = o.fallback, f ? (Mn(t), f = t.mode, h = Mo(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Ou(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Nl(a), f.childLanes = Ht(
          e,
          i,
          a
        ), t.memoizedState = Lp, o) : (On(t), pc(
          t,
          h
        ));
      }
      var O = e.memoizedState;
      if (O !== null && (h = O.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (On(t), t.flags &= -257, t = Ff(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (Mn(t), t.child = e.child, t.flags |= 128, t = null) : (Mn(t), f = o.fallback, h = t.mode, o = Mo(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Ou(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, ks(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Nl(a), o.childLanes = Ht(
            e,
            i,
            a
          ), t.memoizedState = Lp, t = f);
        else if (On(t), _e && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), h.data === or) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            y = i.dgst;
            var j = i.msg;
            p = i.stck;
            var M = i.cstck;
          }
          h = j, i = y, o = p, y = f = M, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = y === void 0 ? null : y, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Cp.set(
            f,
            o
          ), uc(o), t = Ff(
            e,
            t,
            a
          );
        } else if (Gl || Uo(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Gl || i) {
          if (i = mt, i !== null) {
            if (o = a & -a, o & 42)
              o = 1;
            else
              switch (o) {
                case 2:
                  o = 1;
                  break;
                case 8:
                  o = 4;
                  break;
                case 32:
                  o = 16;
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
                  o = 64;
                  break;
                case 268435456:
                  o = 134217728;
                  break;
                default:
                  o = 0;
              }
            if (o = o & (i.suspendedLanes | a) ? 0 : o, o !== 0 && o !== O.retryLane)
              throw O.retryLane = o, xl(
                e,
                o
              ), ft(
                i,
                e,
                o
              ), S1;
          }
          h.data === cr || ds(), t = Ff(
            e,
            t,
            a
          );
        } else
          h.data === cr ? (t.flags |= 128, t.child = e.child, t = il.bind(
            null,
            e
          ), h._reactRetry = t, t = null) : (e = O.treeContext, Il = ra(
            h.nextSibling
          ), Da = t, _e = !0, Wu = null, Xc = !1, Pn = null, Ni = !1, e !== null && (ui(), Fn[In++] = Gc, Fn[In++] = wc, Fn[In++] = Js, Gc = e.id, wc = e.overflow, Js = t), t = pc(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (Mn(t), f = o.fallback, h = t.mode, y = e.child, p = y.sibling, o = Gn(
        y,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = y.subtreeFlags & 31457280, p !== null ? f = Gn(
        p,
        f
      ) : (f = Ou(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Nl(a) : (y = h.cachePool, y !== null ? (p = Ol._currentValue, y = y.parent !== p ? { parent: p, pool: p } : y) : y = z0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), f.memoizedState = h, f.childLanes = Ht(
        e,
        i,
        a
      ), t.memoizedState = Lp, o) : (On(t), a = e.child, e = a.sibling, a = Gn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function pc(e, t) {
      return t = Mo(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Mo(e, t) {
      return xm(e, t, 0, null);
    }
    function Ff(e, t, a) {
      return ks(t, e.child, null, a), e = pc(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Nn(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), ud(
        e.return,
        t,
        a
      );
    }
    function If(e, t) {
      var a = sl(e);
      return e = !a && typeof pe(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Pf(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function ld(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !z1[o])
        if (z1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || Qp[f] || (f !== "collapsed" && f !== "hidden" ? (Qp[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (Qp[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (sl(i)) {
          for (var d = 0; d < i.length; d++)
            if (!If(i[d], d)) break e;
        } else if (d = pe(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), y = 0; !h.done; h = d.next()) {
              if (!If(h.value, y)) break e;
              y++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Nt(e, t, i, a), i = zl.current, i & Cy)
        i = i & hh | Cy, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Nn(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Nn(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= hh;
      }
      switch (Se(zl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Hn(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Pf(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Hn(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Pf(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Pf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function jn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Za = -1, vf |= t.lanes, !(a & t.childLanes))
        if (e !== null) {
          if (Uo(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Gn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Gn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function ad(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && ts(e)));
    }
    function H0(e, t, a) {
      switch (t.tag) {
        case 3:
          Ie(
            t,
            t.stateNode.containerInfo
          ), Tu(
            t,
            Ol,
            e.memoizedState.cache
          ), nc();
          break;
        case 27:
        case 5:
          Ql(t);
          break;
        case 4:
          Ie(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Tu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          a & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (On(t), t.flags |= 128, null) : a & t.child.childLanes ? Wf(
              e,
              t,
              a
            ) : (On(t), e = jn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          On(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Uo(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ld(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Se(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Fr(e, t, a);
        case 24:
          Tu(
            t,
            Ol,
            e.memoizedState.cache
          );
      }
      return jn(e, t, a);
    }
    function nd(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = os(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        );
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Gl = !0;
        else {
          if (!ad(e, a) && !(t.flags & 128))
            return Gl = !1, H0(
              e,
              t,
              a
            );
          Gl = !!(e.flags & 131072);
        }
      else
        Gl = !1, (i = _e) && (ui(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ui(), b0(t, Tv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = sf(t.elementType), t.type = e, typeof e == "function")
            cs(e) ? (i = Yn(
              e,
              i
            ), t.tag = 1, t.type = e = ec(e), t = ed(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, $f(t, e), t.type = e = ec(e), t = Pr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Io) {
                t.tag = 11, t.type = e = $h(e), t = vc(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Yc) {
                t.tag = 14, t = M0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ol && (t = " Did you wrap a component in React.lazy() more than once?"), e = re(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Pr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Yn(
            i,
            t.pendingProps
          ), ed(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Ie(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            var f = t.pendingProps;
            o = t.memoizedState, i = o.element, cd(e, t), pi(t, f, null, a);
            var d = t.memoizedState;
            if (f = d.cache, Tu(t, Ol, f), f !== o.cache && ym(
              t,
              [Ol],
              a,
              !0
            ), Co(), f = d.element, o.isDehydrated)
              if (o = {
                element: f,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                t = td(
                  e,
                  t,
                  f,
                  a
                );
                break e;
              } else if (f !== i) {
                i = al(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), uc(i), t = td(
                  e,
                  t,
                  f,
                  a
                );
                break e;
              } else
                for (Il = ra(
                  t.stateNode.containerInfo.firstChild
                ), Da = t, _e = !0, Wu = null, Xc = !1, Pn = null, Ni = !0, e = n1(
                  t,
                  null,
                  f,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (nc(), f === i) {
                t = jn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Nt(
                e,
                t,
                f,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Oo(e, t), e === null ? (e = da(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : _e || (e = t.type, a = t.pendingProps, i = fe(
            Qu.current
          ), i = Cd(
            i
          ).createElement(e), i[Vl] = t, i[Wl] = a, cl(i, e, a), Qt(i), t.stateNode = i) : t.memoizedState = da(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Ql(t), e === null && _e && (o = fe(Qu.current), i = Xl(), o = t.stateNode = xd(
            t.type,
            t.pendingProps,
            o,
            i,
            !1
          ), Xc || (i = Lm(
            o,
            t.type,
            t.pendingProps,
            i
          ), i !== null && (an(t, 0).serverProps = i)), Da = t, Ni = !0, Il = ra(
            o.firstChild
          )), i = t.pendingProps.children, e !== null || _e ? Nt(
            e,
            t,
            i,
            a
          ) : t.child = ks(
            t,
            null,
            i,
            a
          ), Oo(e, t), t.child;
        case 5:
          return e === null && _e && (f = Xl(), i = gr(
            t.type,
            f.ancestorInfo
          ), o = Il, (d = !o) || (d = Zn(
            o,
            t.type,
            t.pendingProps,
            Ni
          ), d !== null ? (t.stateNode = d, Xc || (f = Lm(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (an(t, 0).serverProps = f)), Da = t, Il = ra(
            d.firstChild
          ), Ni = !1, f = !0) : f = !1, d = !f), d && (i && lc(t, o), ac(t))), Ql(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, De(o, f) ? i = null : d !== null && De(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = fi(
            e,
            t,
            Nr,
            null,
            null,
            a
          ), $y._currentValue = o), Oo(e, t), Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && _e && (e = t.pendingProps, a = Xl().ancestorInfo.current, e = a != null ? cu(e, a.tag) : !0, a = Il, (i = !a) || (i = Km(
            a,
            t.pendingProps,
            Ni
          ), i !== null ? (t.stateNode = i, Da = t, Il = null, i = !0) : i = !1, i = !i), i && (e && lc(t, a), ac(t))), null;
        case 13:
          return Wf(e, t, a);
        case 4:
          return Ie(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = ks(
            t,
            null,
            i,
            a
          ) : Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return vc(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Nt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || D1 || (D1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Tu(t, i, f), Nt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), yi(t), o = ct(o), En(t), i = qp(
            i,
            o,
            void 0
          ), T(), t.flags |= 1, Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return M0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Ut(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ld(
            e,
            t,
            a
          );
        case 22:
          return Fr(e, t, a);
        case 24:
          return yi(t), i = ct(Ol), e === null ? (o = Br(), o === null && (o = mt, f = oi(), o.pooledCache = f, du(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, id(t), Tu(t, Ol, o)) : (e.lanes & a && (cd(e, t), pi(t, null, null, a), Co()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Tu(t, Ol, i)) : (i = f.cache, Tu(t, Ol, i), i !== o.cache && ym(
            t,
            [Ol],
            a,
            !0
          ))), Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function es() {
      bh = Mv = null, Sh = !1;
    }
    function Tu(e, t, a) {
      Se(_p, t._currentValue, e), t._currentValue = a, Se(Zp, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== O1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = O1;
    }
    function cn(e, t) {
      e._currentValue = _p.current;
      var a = Zp.current;
      He(Zp, t), e._currentRenderer = a, He(_p, t);
    }
    function ud(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ym(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), ud(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), ud(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Uo(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if (o.flags & 524288) f = !0;
          else if (o.flags & 262144) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            za(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ns.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push($y) : e = [$y]);
        }
        o = o.return;
      }
      e !== null && ym(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ts(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!za(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function yi(e) {
      Mv = e, bh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ct(e) {
      return Sh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), vm(Mv, e);
    }
    function ls(e, t) {
      return Mv === null && yi(e), vm(e, t);
    }
    function vm(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, bh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        bh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else bh = bh.next = t;
      return a;
    }
    function id(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function cd(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Eu(e) {
      return {
        lane: e,
        tag: M1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vi(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Jp === i && !C1) {
        var o = le(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), C1 = !0;
      }
      return (Ot & Ua) !== gn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Mr(e), v0(e, null, a), t) : (Dr(e, i, t, a), Mr(e));
    }
    function Ho(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, l0(e, a);
      }
    }
    function Au(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Co() {
      if (kp) {
        var e = mh;
        if (e !== null) throw e;
      }
    }
    function pi(e, t, a, i) {
      kp = !1;
      var o = e.updateQueue;
      yf = !1, Jp = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var O = e.alternate;
        O !== null && (O = O.updateQueue, h = O.lastBaseUpdate, h !== d && (h === null ? O.firstBaseUpdate = p : h.next = p, O.lastBaseUpdate = y));
      }
      if (f !== null) {
        var j = o.baseState;
        d = 0, O = p = y = null, h = f;
        do {
          var M = h.lane & -536870913, G = M !== h.lane;
          if (G ? (Ve & M) === M : (i & M) === M) {
            M !== 0 && M === $s && (kp = !0), O !== null && (O = O.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              M = e;
              var te = h, Ae = t, It = a;
              switch (te.tag) {
                case U1:
                  if (te = te.payload, typeof te == "function") {
                    Sh = !0;
                    var et = te.call(
                      It,
                      j,
                      Ae
                    );
                    if (M.mode & ma) {
                      We(!0);
                      try {
                        te.call(It, j, Ae);
                      } finally {
                        We(!1);
                      }
                    }
                    Sh = !1, j = et;
                    break e;
                  }
                  j = te;
                  break e;
                case Kp:
                  M.flags = M.flags & -65537 | 128;
                case M1:
                  if (et = te.payload, typeof et == "function") {
                    if (Sh = !0, te = et.call(
                      It,
                      j,
                      Ae
                    ), M.mode & ma) {
                      We(!0);
                      try {
                        et.call(It, j, Ae);
                      } finally {
                        We(!1);
                      }
                    }
                    Sh = !1;
                  } else te = et;
                  if (te == null) break e;
                  j = he({}, j, te);
                  break e;
                case H1:
                  yf = !0;
              }
            }
            M = h.callback, M !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [M] : G.push(M));
          } else
            G = {
              lane: M,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, O === null ? (p = O = G, y = j) : O = O.next = G, d |= M;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            G = h, h = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
          }
        } while (!0);
        O === null && (y = j), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = O, f === null && (o.shared.lanes = 0), vf |= d, e.lanes = d, e.memoizedState = j;
      }
      Jp = null;
    }
    function as(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function C0(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          as(a[e], t);
    }
    function od(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          as(a[e], t);
    }
    function on(e) {
      return (e.mode & Fl) !== Et;
    }
    function pm(e, t) {
      on(e) ? (ln(), xo(t, e), tn()) : xo(t, e);
    }
    function fd(e, t, a) {
      on(e) ? (ln(), gi(
        a,
        e,
        t
      ), tn()) : gi(
        a,
        e,
        t
      );
    }
    function xo(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & Dl) !== tu ? J !== null && typeof J.markComponentPassiveEffectMountStarted == "function" && J.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Pl) !== tu && J !== null && typeof J.markComponentLayoutEffectMountStarted == "function" && J.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Oa) !== tu && (Dh = !0), i = $(
              t,
              fS,
              a
            ), (e & Oa) !== tu && (Dh = !1), (e & Dl) !== tu ? J !== null && typeof J.markComponentPassiveEffectMountStopped == "function" && J.markComponentPassiveEffectMountStopped() : (e & Pl) !== tu && J !== null && typeof J.markComponentLayoutEffectMountStopped == "function" && J.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = a.tag & Pl ? "useLayoutEffect" : a.tag & Oa ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, $(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        je(t, t.return, h);
      }
    }
    function gi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Dl) !== tu ? J !== null && typeof J.markComponentPassiveEffectUnmountStarted == "function" && J.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Pl) !== tu && J !== null && typeof J.markComponentLayoutEffectUnmountStarted == "function" && J.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Oa) !== tu && (Dh = !0), $(
                t,
                sS,
                t,
                a,
                h
              ), (e & Oa) !== tu && (Dh = !1), (e & Dl) !== tu ? J !== null && typeof J.markComponentPassiveEffectUnmountStopped == "function" && J.markComponentPassiveEffectUnmountStopped() : (e & Pl) !== tu && J !== null && typeof J.markComponentLayoutEffectUnmountStopped == "function" && J.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        je(t, t.return, y);
      }
    }
    function gm(e, t) {
      on(e) ? (ln(), xo(t, e), tn()) : xo(t, e);
    }
    function sd(e, t, a) {
      on(e) ? (ln(), gi(
        a,
        e,
        t
      ), tn()) : gi(
        a,
        e,
        t
      );
    }
    function rd(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || gh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          le(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          le(e) || "instance"
        ));
        try {
          $(
            e,
            od,
            t,
            a
          );
        } catch (i) {
          je(e, e.return, i);
        }
      }
    }
    function x0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function B0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || gh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        le(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        le(e) || "instance"
      ));
      try {
        var o = Yn(
          e.type,
          a,
          e.elementType === e.type
        ), f = $(
          e,
          x0,
          t,
          o,
          i
        );
        a = x1, f !== void 0 || a.has(e.type) || (a.add(e.type), $(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            le(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        je(e, e.return, d);
      }
    }
    function q0(e, t, a) {
      a.props = Yn(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, on(e) ? (ln(), $(
        e,
        Wg,
        e,
        t,
        a
      ), tn()) : $(
        e,
        Wg,
        e,
        t,
        a
      );
    }
    function bm(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode;
        if (typeof t == "function")
          if (on(e))
            try {
              ln(), e.refCleanup = t(a);
            } finally {
              tn();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            le(e)
          ), t.current = a;
      }
    }
    function bi(e, t) {
      try {
        $(e, bm, e);
      } catch (a) {
        je(e, t, a);
      }
    }
    function oa(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (on(e))
              try {
                ln(), $(e, i);
              } finally {
                tn(e);
              }
            else $(e, i);
          } catch (o) {
            je(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (on(e))
              try {
                ln(), $(e, a, null);
              } finally {
                tn(e);
              }
            else $(e, a, null);
          } catch (o) {
            je(e, t, o);
          }
        else a.current = null;
    }
    function dd(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", pv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Y0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", pv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Sm(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        $(
          e,
          Aa,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        je(e, e.return, o);
      }
    }
    function N0(e, t, a) {
      try {
        $(
          e,
          Vu,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        je(e, e.return, i);
      }
    }
    function j0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
    }
    function hd(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || j0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function gc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.nodeType === 8 ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (a.nodeType === 8 ? (t = a.parentNode, t.insertBefore(e, a)) : (t = a, t.appendChild(e)), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = vs));
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (gc(e, t, a), e = e.sibling; e !== null; )
          gc(e, t, a), e = e.sibling;
    }
    function Bo(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (Bo(e, t, a), e = e.sibling; e !== null; )
          Bo(e, t, a), e = e.sibling;
    }
    function md(e) {
      if (e.tag !== 27) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (j0(t)) {
              var a = t;
              break e;
            }
            t = t.return;
          }
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
        switch (a.tag) {
          case 27:
            t = a.stateNode, a = hd(e), Bo(e, a, t);
            break;
          case 5:
            t = a.stateNode, a.flags & 32 && (Oc(t), a.flags &= -33), a = hd(e), Bo(e, a, t);
            break;
          case 3:
          case 4:
            t = a.stateNode.containerInfo, a = hd(e), gc(
              e,
              a,
              t
            );
            break;
          default:
            throw Error(
              "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
            );
        }
      }
    }
    function V0(e, t) {
      if (e = e.containerInfo, hg = kv, e = Jh(e), kh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, O = 0, j = e, M = null;
              t: for (; ; ) {
                for (var G; j !== a || o !== 0 && j.nodeType !== 3 || (h = d + o), j !== f || i !== 0 && j.nodeType !== 3 || (y = d + i), j.nodeType === 3 && (d += j.nodeValue.length), (G = j.firstChild) !== null; )
                  M = j, j = G;
                for (; ; ) {
                  if (j === e) break t;
                  if (M === a && ++p === o && (h = d), M === f && ++O === i && (y = d), (G = j.nextSibling) !== null) break;
                  j = M, M = j.parentNode;
                }
                j = G;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (mg = {
        focusedElem: e,
        selectionRange: a
      }, kv = !1, wl = t; wl !== null; )
        if (t = wl, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, wl = e;
        else
          for (; wl !== null; ) {
            switch (e = t = wl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                o & 1024 && a !== null && B0(e, a);
                break;
              case 3:
                if (o & 1024) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Uc(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Uc(e);
                        break;
                      default:
                        e.textContent = "";
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
                if (o & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, wl = e;
              break;
            }
            wl = t.return;
          }
      return t = q1, q1 = !1, t;
    }
    function Tm(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          sn(e, a), i & 4 && pm(a, Pl | lu);
          break;
        case 1:
          if (sn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || gh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), on(a) ? (ln(), $(
                a,
                Yp,
                a,
                e
              ), tn()) : $(
                a,
                Yp,
                a,
                e
              );
            else {
              var o = Yn(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || gh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), on(a) ? (ln(), $(
                a,
                Jg,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), tn()) : $(
                a,
                Jg,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && rd(a), i & 512 && bi(a, a.return);
          break;
        case 3:
          if (t = su(), sn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              $(
                a,
                od,
                i,
                o
              );
            } catch (h) {
              je(a, a.return, h);
            }
          }
          e.effectDuration += ho(t);
          break;
        case 26:
          sn(e, a), i & 512 && bi(a, a.return);
          break;
        case 27:
        case 5:
          sn(e, a), t === null && i & 4 && Sm(a), i & 512 && bi(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = su(), sn(e, a), e = a.stateNode, e.effectDuration += ru(i);
            try {
              $(
                a,
                dd,
                a,
                t,
                vv,
                e.effectDuration
              );
            } catch (h) {
              je(a, a.return, h);
            }
          } else sn(e, a);
          break;
        case 13:
          sn(e, a), i & 4 && Si(e, a);
          break;
        case 22:
          if (o = a.memoizedState !== null || _c, !o) {
            t = t !== null && t.memoizedState !== null || Kt;
            var f = _c, d = Kt;
            _c = o, (Kt = t) && !d ? Vn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : sn(e, a), _c = f, Kt = d;
          }
          i & 512 && (a.memoizedProps.mode === "manual" ? bi(a, a.return) : oa(a, a.return));
          break;
        default:
          sn(e, a);
      }
    }
    function fn(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, fn(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && eo(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function _l(e, t, a) {
      for (a = a.child; a !== null; )
        Ru(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Ru(e, t, a) {
      if (Rl && typeof Rl.onCommitFiberUnmount == "function")
        try {
          Rl.onCommitFiberUnmount(tf, a);
        } catch (f) {
          ha || (ha = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Kt || oa(a, t), _l(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Kt || oa(a, t);
          var i = dl, o = pn;
          for (dl = a.stateNode, _l(
            e,
            t,
            a
          ), a = a.stateNode, e = a.attributes; e.length; )
            a.removeAttributeNode(e[0]);
          eo(a), dl = i, pn = o;
          break;
        case 5:
          Kt || oa(a, t);
        case 6:
          if (i = dl, o = pn, dl = null, _l(
            e,
            t,
            a
          ), dl = i, pn = o, dl !== null)
            if (pn)
              try {
                $(
                  a,
                  xt,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                je(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                $(
                  a,
                  Gu,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                je(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          dl !== null && (pn ? (e = dl, a = a.stateNode, e.nodeType === 8 ? _n(e.parentNode, a) : e.nodeType === 1 && _n(e, a), Ds(e)) : _n(dl, a.stateNode));
          break;
        case 4:
          i = dl, o = pn, dl = a.stateNode.containerInfo, pn = !0, _l(
            e,
            t,
            a
          ), dl = i, pn = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Kt || gi(
            Oa,
            a,
            t
          ), Kt || fd(
            a,
            t,
            Pl
          ), _l(
            e,
            t,
            a
          );
          break;
        case 1:
          Kt || (oa(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && q0(
            a,
            t,
            i
          )), _l(
            e,
            t,
            a
          );
          break;
        case 21:
          _l(
            e,
            t,
            a
          );
          break;
        case 22:
          Kt || oa(a, t), Kt = (i = Kt) || a.memoizedState !== null, _l(
            e,
            t,
            a
          ), Kt = i;
          break;
        default:
          _l(
            e,
            t,
            a
          );
      }
    }
    function Si(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          $(
            t,
            Ss,
            e
          );
        } catch (a) {
          je(t, t.return, a);
        }
    }
    function Em(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new B1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new B1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ns(e, t) {
      var a = Em(e);
      t.forEach(function(i) {
        var o = J0.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Xa)
            if (Th !== null && Eh !== null)
              El(Eh, Th);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function G0(e, t, a) {
      Th = a, Eh = e, Ti(t, e), Eh = Th = null;
    }
    function ba(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
              case 5:
                dl = h.stateNode, pn = !1;
                break e;
              case 3:
                dl = h.stateNode.containerInfo, pn = !0;
                break e;
              case 4:
                dl = h.stateNode.containerInfo, pn = !0;
                break e;
            }
            h = h.return;
          }
          if (dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ru(o, f, d), dl = null, pn = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Ti(t, e), t = t.sibling;
    }
    function Ti(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ba(t, e), Zl(e), i & 4 && (gi(
            Oa | lu,
            e,
            e.return
          ), xo(Oa | lu, e), fd(
            e,
            e.return,
            Pl | lu
          ));
          break;
        case 1:
          ba(t, e), Zl(e), i & 512 && (Kt || a === null || oa(a, a.return)), i & 64 && _c && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Fu;
          if (ba(t, e), Zl(e), i & 512 && (Kt || a === null || oa(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ci] || o[Vl] || o.namespaceURI === nf || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), cl(o, i, a), o[Vl] = e, Qt(o), i = o;
                        break e;
                      case "link":
                        var f = km(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), cl(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = km(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], xe(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), cl(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, Qt(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  $m(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Es(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? $m(
                o,
                e.type,
                e.stateNode
              ) : Es(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && N0(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          if (i & 4 && e.alternate === null) {
            o = e.stateNode, f = e.memoizedProps;
            try {
              for (d = o.firstChild; d; ) {
                var h = d.nextSibling, y = d.nodeName;
                d[Ci] || y === "HEAD" || y === "BODY" || y === "SCRIPT" || y === "STYLE" || y === "LINK" && d.rel.toLowerCase() === "stylesheet" || o.removeChild(d), d = h;
              }
              $(
                e,
                Jm,
                e.type,
                f,
                o,
                e
              );
            } catch (O) {
              je(e, e.return, O);
            }
          }
        case 5:
          if (ba(t, e), Zl(e), i & 512 && (Kt || a === null || oa(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              $(e, Oc, t);
            } catch (O) {
              je(e, e.return, O);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, N0(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && ($p = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ba(t, e), Zl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              $(
                e,
                _m,
                t,
                a,
                i
              );
            } catch (O) {
              je(e, e.return, O);
            }
          }
          break;
        case 3:
          if (o = su(), Zv = null, f = Fu, Fu = zi(t.containerInfo), ba(t, e), Fu = f, Zl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              $(
                e,
                Hc,
                t.containerInfo
              );
            } catch (O) {
              je(e, e.return, O);
            }
          $p && ($p = !1, Am(e)), t.effectDuration += ho(o);
          break;
        case 4:
          i = Fu, Fu = zi(
            e.stateNode.containerInfo
          ), ba(t, e), Zl(e), Fu = i;
          break;
        case 12:
          i = su(), ba(t, e), Zl(e), e.stateNode.effectDuration += ru(i);
          break;
        case 13:
          ba(t, e), Zl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (tg = Jn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ns(e, i)));
          break;
        case 22:
          i & 512 && (Kt || a === null || oa(a, a.return)), d = e.memoizedState !== null, h = a !== null && a.memoizedState !== null, y = _c;
          var p = Kt;
          if (_c = y || d, Kt = p || h, ba(t, e), Kt = p, _c = y, Zl(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & Ey, i & 8192 && (t._visibility = d ? t._visibility & -2 : t._visibility | yv, d && (t = _c || Kt, a === null || h || t || bc(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            e: for (a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                if (a === null) {
                  h = a = t;
                  try {
                    o = h.stateNode, d ? $(
                      h,
                      Mc,
                      o
                    ) : $(
                      h,
                      Va,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (O) {
                    je(h, h.return, O);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    f = h.stateNode, d ? $(
                      h,
                      Zm,
                      f
                    ) : $(
                      h,
                      _o,
                      f,
                      h.memoizedProps
                    );
                  } catch (O) {
                    je(h, h.return, O);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, ns(e, a))));
          break;
        case 19:
          ba(t, e), Zl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ns(e, i)));
          break;
        case 21:
          break;
        default:
          ba(t, e), Zl(e);
      }
    }
    function Zl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          $(e, md, e);
        } catch (a) {
          je(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Am(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Am(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function w0(e, t, a) {
      Th = a, Eh = t, Tm(t, e.alternate, e), Eh = Th = null;
    }
    function sn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Tm(e, t.alternate, t), t = t.sibling;
    }
    function us(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fd(
            e,
            e.return,
            Pl
          ), bc(e);
          break;
        case 1:
          oa(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && q0(
            e,
            e.return,
            t
          ), bc(e);
          break;
        case 26:
        case 27:
        case 5:
          oa(e, e.return), bc(e);
          break;
        case 22:
          oa(e, e.return), e.memoizedState === null && bc(e);
          break;
        default:
          bc(e);
      }
    }
    function bc(e) {
      for (e = e.child; e !== null; )
        us(e), e = e.sibling;
    }
    function yd(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            e,
            a,
            i
          ), pm(a, Pl);
          break;
        case 1:
          if (Vn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && $(
            a,
            Yp,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              $(
                a,
                C0,
                t,
                e
              );
            } catch (f) {
              je(a, a.return, f);
            }
          }
          i && o & 64 && rd(a), bi(a, a.return);
          break;
        case 26:
        case 27:
        case 5:
          Vn(
            e,
            a,
            i
          ), i && t === null && o & 4 && Sm(a), bi(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = su(), Vn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ru(o);
            try {
              $(
                a,
                dd,
                a,
                t,
                vv,
                i.effectDuration
              );
            } catch (f) {
              je(a, a.return, f);
            }
          } else
            Vn(
              e,
              a,
              i
            );
          break;
        case 13:
          Vn(
            e,
            a,
            i
          ), i && o & 4 && Si(e, a);
          break;
        case 22:
          a.memoizedState === null && Vn(
            e,
            a,
            i
          ), bi(a, a.return);
          break;
        default:
          Vn(
            e,
            a,
            i
          );
      }
    }
    function Vn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        yd(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function vd(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && du(e), a != null && po(a));
    }
    function Rm(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (du(t), e != null && po(e));
    }
    function zu(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Ft(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Ft(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          zu(
            e,
            t,
            a,
            i
          ), o & 2048 && gm(t, Dl | lu);
          break;
        case 3:
          var f = su();
          zu(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (du(t), a != null && po(a))), e.passiveEffectDuration += ho(f);
          break;
        case 12:
          if (o & 2048) {
            f = su(), zu(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += ru(f);
            try {
              $(
                t,
                Y0,
                t,
                t.alternate,
                vv,
                e.passiveEffectDuration
              );
            } catch (d) {
              je(t, t.return, d);
            }
          } else
            zu(
              e,
              t,
              a,
              i
            );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null ? f._visibility & _s ? zu(
            e,
            t,
            a,
            i
          ) : qo(
            e,
            t
          ) : f._visibility & _s ? zu(
            e,
            t,
            a,
            i
          ) : (f._visibility |= _s, Ct(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && vd(
            t.alternate,
            t
          );
          break;
        case 24:
          zu(
            e,
            t,
            a,
            i
          ), o & 2048 && Rm(t.alternate, t);
          break;
        default:
          zu(
            e,
            t,
            a,
            i
          );
      }
    }
    function Ct(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        zm(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function zm(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ct(
            e,
            t,
            a,
            i,
            o
          ), gm(t, Dl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & _s ? Ct(
            e,
            t,
            a,
            i,
            o
          ) : qo(
            e,
            t
          ) : (d._visibility |= _s, Ct(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && vd(
            t.alternate,
            t
          );
          break;
        case 24:
          Ct(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Rm(t.alternate, t);
          break;
        default:
          Ct(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function qo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              qo(
                a,
                i
              ), o & 2048 && vd(
                i.alternate,
                i
              );
              break;
            case 24:
              qo(
                a,
                i
              ), o & 2048 && Rm(
                i.alternate,
                i
              );
              break;
            default:
              qo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function Sc(e) {
      if (e.subtreeFlags & Yy)
        for (e = e.child; e !== null; )
          Dm(e), e = e.sibling;
    }
    function Dm(e) {
      switch (e.tag) {
        case 26:
          Sc(e), e.flags & Yy && e.memoizedState !== null && fp(
            Fu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Sc(e);
          break;
        case 3:
        case 4:
          var t = Fu;
          Fu = zi(
            e.stateNode.containerInfo
          ), Sc(e), Fu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Yy, Yy = 16777216, Sc(e), Yy = t) : Sc(e));
          break;
        default:
          Sc(e);
      }
    }
    function Om(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Du(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            wl = i, Um(
              i,
              e
            );
          }
        Om(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          pd(e), e = e.sibling;
    }
    function pd(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Du(e), e.flags & 2048 && sd(
            e,
            e.return,
            Dl | lu
          );
          break;
        case 3:
          var t = su();
          Du(e), e.stateNode.passiveEffectDuration += ho(t);
          break;
        case 12:
          t = su(), Du(e), e.stateNode.passiveEffectDuration += ru(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & _s && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, is(e)) : Du(e);
          break;
        default:
          Du(e);
      }
    }
    function is(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            wl = i, Um(
              i,
              e
            );
          }
        Om(e);
      }
      for (e = e.child; e !== null; )
        Mm(e), e = e.sibling;
    }
    function Mm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          sd(
            e,
            e.return,
            Dl
          ), is(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & _s && (t._visibility &= -5, is(e));
          break;
        default:
          is(e);
      }
    }
    function Um(e, t) {
      for (; wl !== null; ) {
        var a = wl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            sd(
              i,
              t,
              Dl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && du(i));
            break;
          case 24:
            po(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, wl = i;
        else
          e: for (a = e; wl !== null; ) {
            i = wl;
            var o = i.sibling, f = i.return;
            if (fn(i), i === a) {
              wl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, wl = o;
              break e;
            }
            wl = f;
          }
      }
    }
    function Hm(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Y1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function cs(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Gn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = be(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 31457280, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = ec(e.type);
          break;
        case 1:
          a.type = ec(e.type);
          break;
        case 11:
          a.type = $h(e.type);
      }
      return a;
    }
    function Cm(e, t) {
      e.flags &= 31457282;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function os(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        cs(e) && (d = 1), h = ec(h);
      else if (typeof e == "string")
        d = Xl(), d = Wm(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Wo:
            return Ou(
              a.children,
              o,
              f,
              t
            );
          case Hs:
            d = 8, o |= ma, o |= ku;
            break;
          case qe:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = be(12, e, t, i | Fl), t.elementType = qe, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Cs:
            return t = be(13, a, t, o), t.elementType = Cs, t.lanes = f, t;
          case qc:
            return t = be(19, a, t, o), t.elementType = qc, t.lanes = f, t;
          case uy:
            return xm(a, o, f, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ny:
                case Ga:
                  d = 10;
                  break e;
                case Fo:
                  d = 9;
                  break e;
                case Io:
                  d = 11, h = $h(h);
                  break e;
                case Yc:
                  d = 14;
                  break e;
                case ol:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : sl(e) ? a = "array" : e !== void 0 && e.$$typeof === Ui ? (a = "<" + (re(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? ya(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = be(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Yo(e, t, a) {
      return t = os(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t;
    }
    function Ou(e, t, a, i) {
      return e = be(7, e, i, t), e.lanes = a, e;
    }
    function xm(e, t, a, i) {
      e = be(22, e, i, t), e.elementType = uy, e.lanes = a;
      var o = {
        _visibility: yv,
        _pendingVisibility: yv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function() {
          var f = o, d = f._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (!(f._pendingVisibility & Ey)) {
            var h = xl(d, 2);
            h !== null && (f._pendingVisibility |= Ey, ft(h, d, 2));
          }
        },
        attach: function() {
          var f = o, d = f._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (f._pendingVisibility & Ey) {
            var h = xl(d, 2);
            h !== null && (f._pendingVisibility &= -3, ft(h, d, 2));
          }
        }
      };
      return e.stateNode = o, e;
    }
    function fs(e, t, a) {
      return e = be(6, e, null, t), e.lanes = a, e;
    }
    function gd(e, t, a) {
      return t = be(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Tl(e) {
      e.flags |= 4;
    }
    function bd(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & nu) !== fr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Nd(t)) {
        if (t = eu.current, t !== null && ((Ve & 4194176) === Ve ? ji !== null : (Ve & 62914560) !== Ve && !(Ve & 536870912) || t !== ji))
          throw Uy = Bp, Xg;
        e.flags |= 8192;
      }
    }
    function Sd(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xa() : 536870912, e.lanes |= t, lr |= t);
    }
    function No(e, t) {
      if (!_e)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function ot(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Fl) !== Et) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 31457280, i |= f.flags & 31457280, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 31457280, i |= o.flags & 31457280, o.return = e, o = o.sibling;
      else if ((e.mode & Fl) !== Et) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Tc(e, t, a) {
      var i = t.pendingProps;
      switch (Hr(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ot(t), null;
        case 1:
          return ot(t), null;
        case 3:
          return i = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), cn(Ol, t), Ml(t), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (mo(t) ? (tm(), Tl(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Wu !== null && (ul(Wu), Wu = null))), ot(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Tl(t), a !== null ? (ot(t), bd(
            t,
            a
          )) : (ot(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Tl(t), ot(t), bd(
            t,
            a
          )) : (ot(t), t.flags &= -16777217) : (e.memoizedProps !== i && Tl(t), ot(t), t.flags &= -16777217), null;
        case 27:
          pt(t), a = fe(Qu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Tl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ot(t), null;
            }
            e = Xl(), mo(t) ? jf(t) : (e = xd(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Tl(t));
          }
          return ot(t), null;
        case 5:
          if (pt(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Tl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ot(t), null;
            }
            if (o = Xl(), mo(t))
              jf(t);
            else {
              switch (e = fe(Qu.current), gr(a, o.ancestorInfo), o = o.context, e = Cd(e), o) {
                case Mh:
                  e = e.createElementNS(nf, a);
                  break;
                case _v:
                  e = e.createElementNS(
                    vn,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        nf,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        vn,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Zt.call(
                        $1,
                        a
                      ) || ($1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[Wl] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (cl(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Tl(t);
            }
          }
          return ot(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Tl(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = fe(Qu.current), a = Xl(), mo(t)) {
              e = t.stateNode, i = t.memoizedProps, o = !Xc, a = null;
              var f = Da;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = gs(
                      e,
                      i,
                      a
                    ), o !== null && (an(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    a = f.memoizedProps, o && (o = gs(
                      e,
                      i,
                      a
                    ), o !== null && (an(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === i || a !== null && a.suppressHydrationWarning === !0 || Nu(e.nodeValue, i)), e || ac(t);
            } else
              a = a.ancestorInfo.current, a != null && cu(i, a.tag), e = Cd(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return ot(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = mo(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, ot(t), (t.mode & Fl) !== Et && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                tm(), nc(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, ot(t), (t.mode & Fl) !== Et && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              Wu !== null && (ul(Wu), Wu = null), o = !0;
            if (!o)
              return t.flags & 256 ? (Un(t), t) : (Un(t), null);
          }
          return Un(t), t.flags & 128 ? (t.lanes = a, (t.mode & Fl) !== Et && Nf(t), t) : (i = i !== null, e = e !== null && e.memoizedState !== null, i && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), f = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (f = a.memoizedState.cachePool.pool), f !== o && (a.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), Sd(t, t.updateQueue), ot(t), (t.mode & Fl) !== Et && i && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Ml(t), e === null && Ri(
            t.stateNode.containerInfo
          ), ot(t), null;
        case 10:
          return cn(t.type, t), ot(t), null;
        case 19:
          if (He(zl, t), o = t.memoizedState, o === null) return ot(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) No(o, !1);
            else {
              if (Jt !== Kc || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = Hn(e), f !== null) {
                    for (t.flags |= 128, No(o, !1), e = f.updateQueue, t.updateQueue = e, Sd(t, e), t.subtreeFlags = 0, e = a, i = t.child; i !== null; )
                      Cm(i, e), i = i.sibling;
                    return Se(
                      zl,
                      zl.current & hh | Cy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Jn() > Cv && (t.flags |= 128, i = !0, No(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Hn(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Sd(t, e), No(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !_e)
                  return ot(t), null;
              } else
                2 * Jn() - o.renderingStartTime > Cv && a !== 536870912 && (t.flags |= 128, i = !0, No(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Jn(), e.sibling = null, a = zl.current, a = i ? a & hh | Cy : a & hh, Se(zl, a, t), e) : (ot(t), null);
        case 22:
        case 23:
          return Un(t), ci(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), i = t.updateQueue, i !== null && Sd(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== i && (t.flags |= 2048), e !== null && He(Ws, t), null;
        case 24:
          return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), cn(Ol, t), ot(t), null;
        case 25:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Mu(e, t) {
      switch (Hr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fl) !== Et && Nf(t), t) : null;
        case 3:
          return cn(Ol, t), Ml(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pt(t), null;
        case 13:
          if (Un(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            nc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fl) !== Et && Nf(t), t) : null;
        case 19:
          return He(zl, t), null;
        case 4:
          return Ml(t), null;
        case 10:
          return cn(t.type, t), null;
        case 22:
        case 23:
          return Un(t), ci(t), e !== null && He(Ws, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fl) !== Et && Nf(t), t) : null;
        case 24:
          return cn(Ol, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Uu(e, t) {
      switch (Hr(t), t.tag) {
        case 3:
          cn(Ol, t), Ml(t);
          break;
        case 26:
        case 27:
        case 5:
          pt(t);
          break;
        case 4:
          Ml(t);
          break;
        case 13:
          Un(t);
          break;
        case 19:
          He(zl, t);
          break;
        case 10:
          cn(t.type, t);
          break;
        case 22:
        case 23:
          Un(t), ci(t), e !== null && He(Ws, t);
          break;
        case 24:
          cn(Ol, t);
      }
    }
    function Hu() {
      pS.forEach(function(e) {
        return e();
      });
    }
    function Td() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || H.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Kl(e) {
      if ((Ot & Ua) !== gn && Ve !== 0)
        return Ve & -Ve;
      var t = H.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = $s, e !== 0 ? e : dn()) : zf();
    }
    function jo() {
      Sn === 0 && (Sn = !(Ve & 536870912) || _e ? An() : 536870912);
      var e = eu.current;
      return e !== null && (e.flags |= 32), Sn;
    }
    function ft(e, t, a) {
      if (Dh && console.error("useInsertionEffect must not schedule updates."), ug && (Bv = !0), (e === mt && yt === tr || e.cancelPendingCommit !== null) && (Sa(e, 0), jl(
        e,
        Ve,
        Sn,
        !1
      )), Rn(e, a), Ot & Ua && e === mt) {
        if (wa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Ye && le(Ye) || "Unknown", L1.has(e) || (L1.add(e), t = le(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              Q1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Q1 = !0);
          }
      } else
        Xa && a0(e, t, a), k0(t), e === mt && ((Ot & Ua) === gn && (pf |= a), Jt === er && jl(
          e,
          Ve,
          Sn,
          !1
        )), rn(e);
    }
    function Ei(e, t, a) {
      if ((Ot & (Ua | Zc)) !== gn)
        throw Error("Should not already be working.");
      var i = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || va(e, t), o = i ? Q0(e, t) : Ec(e, t, !0), f = i;
      do {
        if (o === Kc) {
          zh && !i && jl(e, t, 0, !1);
          break;
        } else if (o === Uv)
          jl(
            e,
            t,
            0,
            !Jc
          );
        else {
          if (a = e.current.alternate, f && !X0(a)) {
            o = Ec(e, t, !1), f = !1;
            continue;
          }
          if (o === Ah) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Xy;
                var y = o.current.memoizedState.isDehydrated;
                if (y && (Sa(
                  o,
                  h
                ).flags |= 256), h = Ec(
                  o,
                  h,
                  !1
                ), h !== Ah) {
                  if (Pp && !y) {
                    o.errorRecoveryDisabledLanes |= f, pf |= f, o = er;
                    break e;
                  }
                  o = Iu, Iu = d, o !== null && ul(o);
                }
                o = h;
              }
              if (f = !1, o !== Ah) continue;
            }
          }
          if (o === jy) {
            Sa(e, 0), jl(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Kc:
              case jy:
                throw Error("Root did not complete. This is a bug in React.");
              case er:
                if ((t & 4194176) === t) {
                  jl(
                    i,
                    t,
                    Sn,
                    !Jc
                  );
                  break e;
                }
                break;
              case Ah:
                Iu = null;
                break;
              case Wp:
              case j1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (i.finishedWork = a, i.finishedLanes = t, H.actQueue !== null)
              Ad(
                i,
                Iu,
                Qy,
                Hv,
                Sn,
                pf,
                lr,
                X1,
                Hp,
                0
              );
            else {
              if ((t & 62914560) === t && (o = tg + G1 - Jn(), 10 < o)) {
                if (jl(
                  i,
                  t,
                  Sn,
                  !Jc
                ), ta(i, 0) !== 0) break e;
                i.timeoutHandle = W1(
                  ss.bind(
                    null,
                    i,
                    a,
                    Iu,
                    Qy,
                    Hv,
                    t,
                    Sn,
                    pf,
                    lr,
                    Jc,
                    ES,
                    Hp,
                    0
                  ),
                  o
                );
                break e;
              }
              ss(
                i,
                a,
                Iu,
                Qy,
                Hv,
                t,
                Sn,
                pf,
                lr,
                Jc,
                X1,
                Hp,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      rn(e);
    }
    function ul(e) {
      Iu === null ? Iu = e : Iu.push.apply(
        Iu,
        e
      );
    }
    function ss(e, t, a, i, o, f, d, h, y, p, O, j, M) {
      var G = t.subtreeFlags;
      if ((G & 8192 || (G & 16785408) === 16785408) && (ky = { stylesheets: null, count: 0, unsuspend: op }, Dm(t), t = sp(), t !== null)) {
        e.cancelPendingCommit = t(
          Ad.bind(
            null,
            e,
            a,
            i,
            o,
            d,
            h,
            y,
            TS,
            j,
            M
          )
        ), jl(
          e,
          f,
          d,
          !p
        );
        return;
      }
      Ad(
        e,
        a,
        i,
        o,
        d,
        h,
        y,
        O,
        j,
        M
      );
    }
    function X0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!za(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function jl(e, t, a, i) {
      t &= ~eg, t &= ~pf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - $l(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && la(e, a, t);
    }
    function Ai() {
      return (Ot & (Ua | Zc)) === gn ? (ms(0), !1) : !0;
    }
    function rs() {
      if (Ye !== null) {
        if (yt === Ja)
          var e = Ye.return;
        else
          e = Ye, es(), jr(e), rh = null, Hy = 0, e = Ye;
        for (; e !== null; )
          Uu(e.alternate, e), e = e.return;
        Ye = null;
      }
    }
    function Sa(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var a = e.timeoutHandle;
      a !== vg && (e.timeoutHandle = vg, US(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), rs(), mt = e, Ye = a = Gn(e.current, null), Ve = t, yt = Ja, bn = null, Jc = !1, zh = va(e, t), Pp = !1, Jt = Kc, lr = Sn = eg = pf = vf = 0, Iu = Xy = null, Hv = !1, t & 8 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - $l(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Gi = t, zr(), $u.discardPendingWarnings(), a;
    }
    function Cu(e, t) {
      de = null, H.H = Vi, H.getCurrentStack = null, wa = !1, Al = null, t === Ev ? (t = T0(), yt = Gy) : t === Xg ? (t = T0(), yt = V1) : yt = t === S1 ? Ip : t !== null && typeof t == "object" && typeof t.then == "function" ? Rh : Vy, bn = t;
      var a = Ye;
      if (a === null)
        Jt = jy, Je(
          e,
          al(t, e.current)
        );
      else
        switch (a.mode & Fl && Ur(a), T(), yt) {
          case Vy:
            J !== null && typeof J.markComponentErrored == "function" && J.markComponentErrored(
              a,
              t,
              Ve
            );
            break;
          case tr:
          case Gy:
          case Rh:
          case wy:
            J !== null && typeof J.markComponentSuspended == "function" && J.markComponentSuspended(
              a,
              t,
              Ve
            );
        }
    }
    function Vo() {
      var e = H.H;
      return H.H = Vi, e === null ? Vi : e;
    }
    function Ed() {
      var e = H.A;
      return H.A = vS, e;
    }
    function ds() {
      Jt = er, Jc || (Ve & 4194176) !== Ve && eu.current !== null || (zh = !0), !(vf & 134217727) && !(pf & 134217727) || mt === null || jl(
        mt,
        Ve,
        Sn,
        !1
      );
    }
    function Ec(e, t, a) {
      var i = Ot;
      Ot |= Ua;
      var o = Vo(), f = Ed();
      if (mt !== e || Ve !== t) {
        if (Xa) {
          var d = e.memoizedUpdaters;
          0 < d.size && (El(e, Ve), d.clear()), n0(e, t);
        }
        Qy = null, Sa(e, t);
      }
      P(t), t = !1, d = Jt;
      e: do
        try {
          if (yt !== Ja && Ye !== null) {
            var h = Ye, y = bn;
            switch (yt) {
              case Ip:
                rs(), d = Uv;
                break e;
              case Gy:
              case tr:
              case Rh:
                eu.current === null && (t = !0);
                var p = yt;
                if (yt = Ja, bn = null, Ac(e, h, y, p), a && zh) {
                  d = Kc;
                  break e;
                }
                break;
              default:
                p = yt, yt = Ja, bn = null, Ac(e, h, y, p);
            }
          }
          Go(), d = Jt;
          break;
        } catch (O) {
          Cu(e, O);
        }
      while (!0);
      return t && e.shellSuspendCounter++, es(), Ot = i, H.H = o, H.A = f, k(), Ye === null && (mt = null, Ve = 0, zr()), d;
    }
    function Go() {
      for (; Ye !== null; ) wo(Ye);
    }
    function Q0(e, t) {
      var a = Ot;
      Ot |= Ua;
      var i = Vo(), o = Ed();
      if (mt !== e || Ve !== t) {
        if (Xa) {
          var f = e.memoizedUpdaters;
          0 < f.size && (El(e, Ve), f.clear()), n0(e, t);
        }
        Qy = null, Cv = Jn() + w1, Sa(e, t);
      } else
        zh = va(
          e,
          t
        );
      P(t);
      e: do
        try {
          if (yt !== Ja && Ye !== null)
            t: switch (t = Ye, f = bn, yt) {
              case Vy:
                yt = Ja, bn = null, Ac(
                  e,
                  t,
                  f,
                  Vy
                );
                break;
              case tr:
                if (am(f)) {
                  yt = Ja, bn = null, xu(t);
                  break;
                }
                t = function() {
                  yt === tr && mt === e && (yt = wy), rn(e);
                }, f.then(t, t);
                break e;
              case Gy:
                yt = wy;
                break e;
              case V1:
                yt = Fp;
                break e;
              case wy:
                am(f) ? (yt = Ja, bn = null, xu(t)) : (yt = Ja, bn = null, Ac(
                  e,
                  t,
                  f,
                  wy
                ));
                break;
              case Fp:
                var d = null;
                switch (Ye.tag) {
                  case 26:
                    d = Ye.memoizedState;
                  case 5:
                  case 27:
                    var h = Ye;
                    if (!d || Nd(d)) {
                      yt = Ja, bn = null;
                      var y = h.sibling;
                      if (y !== null) Ye = y;
                      else {
                        var p = h.return;
                        p !== null ? (Ye = p, wn(p)) : Ye = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                yt = Ja, bn = null, Ac(
                  e,
                  t,
                  f,
                  Fp
                );
                break;
              case Rh:
                yt = Ja, bn = null, Ac(
                  e,
                  t,
                  f,
                  Rh
                );
                break;
              case Ip:
                rs(), Jt = Uv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          H.actQueue !== null ? Go() : L0();
          break;
        } catch (O) {
          Cu(e, O);
        }
      while (!0);
      return es(), H.H = i, H.A = o, Ot = a, Ye !== null ? (J !== null && typeof J.markRenderYielded == "function" && J.markRenderYielded(), Kc) : (k(), mt = null, Ve = 0, zr(), Jt);
    }
    function L0() {
      for (; Ye !== null && !Lu(); )
        wo(Ye);
    }
    function wo(e) {
      var t = e.alternate;
      (e.mode & Fl) !== Et ? (Fh(e), t = $(
        e,
        nd,
        t,
        e,
        Gi
      ), Ur(e)) : t = $(
        e,
        nd,
        t,
        e,
        Gi
      ), e.memoizedProps = e.pendingProps, t === null ? wn(e) : Ye = t;
    }
    function xu(e) {
      var t = $(e, _0, e);
      e.memoizedProps = e.pendingProps, t === null ? wn(e) : Ye = t;
    }
    function _0(e) {
      var t = e.alternate, a = (e.mode & Fl) !== Et;
      switch (a && Fh(e), e.tag) {
        case 15:
        case 0:
          t = U0(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ve
          );
          break;
        case 11:
          t = U0(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ve
          );
          break;
        case 5:
          jr(e);
        default:
          Uu(t, e), e = Ye = Cm(e, Gi), t = nd(t, e, Gi);
      }
      return a && Ur(e), t;
    }
    function Ac(e, t, a, i) {
      es(), jr(t), rh = null, Hy = 0;
      var o = t.return;
      try {
        if (Wr(
          e,
          o,
          t,
          a,
          Ve
        )) {
          Jt = jy, Je(
            e,
            al(a, e.current)
          ), Ye = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ye = o, f;
        Jt = jy, Je(
          e,
          al(a, e.current)
        ), Ye = null;
        return;
      }
      t.flags & 32768 ? (_e || i === Vy ? e = !0 : zh || Ve & 536870912 ? e = !1 : (Jc = e = !0, (i === tr || i === Gy || i === Rh) && (i = eu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fa(t, e)) : wn(t);
    }
    function wn(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          fa(
            t,
            Jc
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Fh(t), a = $(
          t,
          Tc,
          a,
          t,
          Gi
        ), (t.mode & Fl) !== Et && Ih(t), a !== null) {
          Ye = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ye = t;
          return;
        }
        Ye = t = e;
      } while (t !== null);
      Jt === Kc && (Jt = j1);
    }
    function fa(e, t) {
      do {
        var a = Mu(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Ye = a;
          return;
        }
        if ((e.mode & Fl) !== Et) {
          Ih(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ye = e;
          return;
        }
        Ye = e = a;
      } while (e !== null);
      Jt = Uv, Ye = null;
    }
    function Ad(e, t, a, i, o, f, d, h, y, p) {
      var O = H.T, j = ht.p;
      try {
        ht.p = Qa, H.T = null, Z0(
          e,
          t,
          a,
          i,
          j,
          o,
          f,
          d,
          h,
          y,
          p
        );
      } finally {
        H.T = O, ht.p = j;
      }
    }
    function Z0(e, t, a, i, o, f, d, h) {
      do
        Bu();
      while (ar !== null);
      if ($u.flushLegacyContextWarning(), $u.flushPendingUnsafeLifecycleWarnings(), (Ot & (Ua | Zc)) !== gn)
        throw Error("Should not already be working.");
      var y = e.finishedWork;
      if (i = e.finishedLanes, J !== null && typeof J.markCommitStarted == "function" && J.markCommitStarted(i), y === null) return Qi(), null;
      if (i === 0 && console.error(
        "root.finishedLanes should not be empty during a commit. This is a bug in React."
      ), e.finishedWork = null, e.finishedLanes = 0, y === e.current)
        throw Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
        );
      e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
      var p = y.lanes | y.childLanes;
      if (p |= Up, ll(
        e,
        i,
        p,
        f,
        d,
        h
      ), e === mt && (Ye = mt = null, Ve = 0), !(y.subtreeFlags & 10256) && !(y.flags & 10256) || xv || (xv = !0, lg = p, ag = a, qu(ef, function() {
        return Bu(), null;
      })), vv = oh(), a = (y.flags & 15990) !== 0, y.subtreeFlags & 15990 || a ? (a = H.T, H.T = null, f = ht.p, ht.p = Qa, d = Ot, Ot |= Zc, V0(e, y), G0(
        e,
        y,
        i
      ), ip(mg, e.containerInfo), kv = !!hg, mg = hg = null, e.current = y, J !== null && typeof J.markLayoutEffectsStarted == "function" && J.markLayoutEffectsStarted(
        i
      ), w0(y, e, i), J !== null && typeof J.markLayoutEffectsStopped == "function" && J.markLayoutEffectsStopped(), pp(), Ot = d, ht.p = f, H.T = a) : e.current = y, (a = xv) ? (xv = !1, ar = e, Ly = i) : (Rd(e, p), nr = 0, Zy = null), p = e.pendingLanes, p === 0 && (gf = null), a || jm(e), Af(y.stateNode, o), Xa && e.memoizedUpdaters.clear(), Hu(), rn(e), t !== null)
        for (o = e.onRecoverableError, y = 0; y < t.length; y++)
          p = t[y], a = K0(p.stack), $(
            p.source,
            o,
            p.value,
            a
          );
      return Ly & 3 && Bu(), p = e.pendingLanes, i & 4194218 && p & 42 ? (gv = !0, e === ng ? _y++ : (_y = 0, ng = e)) : _y = 0, ms(0), Qi(), null;
    }
    function K0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Rd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, po(t)));
    }
    function Bu() {
      if (ar !== null) {
        var e = ar, t = lg;
        lg = 0;
        var a = Rf(Ly), i = _a > a ? _a : a;
        a = H.T;
        var o = ht.p;
        try {
          if (ht.p = i, H.T = null, ar === null)
            var f = !1;
          else {
            i = ag, ag = null;
            var d = ar, h = Ly;
            if (ar = null, Ly = 0, (Ot & (Ua | Zc)) !== gn)
              throw Error(
                "Cannot flush passive effects while already rendering."
              );
            ug = !0, Bv = !1, J !== null && typeof J.markPassiveEffectsStarted == "function" && J.markPassiveEffectsStarted(h);
            var y = Ot;
            if (Ot |= Zc, pd(d.current), Ft(
              d,
              d.current,
              h,
              i
            ), J !== null && typeof J.markPassiveEffectsStopped == "function" && J.markPassiveEffectsStopped(), jm(d), Ot = y, ms(0, !1), Bv ? d === Zy ? nr++ : (nr = 0, Zy = d) : nr = 0, Bv = ug = !1, Rl && typeof Rl.onPostCommitFiberRoot == "function")
              try {
                Rl.onPostCommitFiberRoot(tf, d);
              } catch (O) {
                ha || (ha = !0, console.error(
                  "React instrumentation encountered an error: %s",
                  O
                ));
              }
            var p = d.current.stateNode;
            p.effectDuration = 0, p.passiveEffectDuration = 0, f = !0;
          }
          return f;
        } finally {
          ht.p = o, H.T = a, Rd(e, t);
        }
      }
      return !1;
    }
    function hs(e, t, a) {
      t = al(a, t), t = Do(e.stateNode, t, 2), e = vi(e, t, 2), e !== null && (Rn(e, 2), rn(e));
    }
    function je(e, t, a) {
      if (Dh = !1, e.tag === 3)
        hs(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            hs(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (gf === null || !gf.has(i))) {
              e = al(a, e), a = mi(2), i = vi(t, a, 2), i !== null && (Su(
                a,
                i,
                t,
                e
              ), Rn(i, 2), rn(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function bt(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new gS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Pp = !0, o.add(a), i = Bm.bind(null, e, t, a), Xa && El(e, a), t.then(i, i));
    }
    function Bm(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Td() && H.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), mt === e && (Ve & a) === a && (Jt === er || Jt === Wp && (Ve & 62914560) === Ve && Jn() - tg < G1 ? (Ot & Ua) === gn && Sa(e, 0) : eg |= a, lr === Ve && (lr = 0)), rn(e);
    }
    function qm(e, t) {
      t === 0 && (t = xa()), e = xl(e, t), e !== null && (Rn(e, t), rn(e));
    }
    function il(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), qm(e, a);
    }
    function J0(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), qm(e, a);
    }
    function Ym(e, t, a) {
      if (t.subtreeFlags & 33562624)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Hs;
          f = a || f, o.tag !== 22 ? o.flags & 33554432 ? f && $(
            o,
            Nm,
            i,
            o,
            (o.mode & Gg) === Et
          ) : Ym(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? $(
            o,
            Nm,
            i,
            o
          ) : o.subtreeFlags & 33554432 && $(
            o,
            Ym,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Nm(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      We(!0);
      try {
        us(t), a && Mm(t), yd(e, t.alternate, t, !1), a && zm(e, t, 0, null, !1);
      } finally {
        We(!1);
      }
    }
    function jm(e) {
      var t = !0;
      e.current.mode & (ma | ku) || (t = !1), Ym(
        e,
        e.current,
        t
      );
    }
    function jt(e) {
      if ((Ot & Ua) === gn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = le(e) || "ReactComponent", qv !== null) {
            if (qv.has(t)) return;
            qv.add(t);
          } else qv = /* @__PURE__ */ new Set([t]);
          $(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function El(e, t) {
      Xa && e.memoizedUpdaters.forEach(function(a) {
        a0(e, a, t);
      });
    }
    function qu(e, t) {
      var a = H.actQueue;
      return a !== null ? (a.push(t), AS) : Kd(e, t);
    }
    function k0(e) {
      Td() && H.actQueue === null && $(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          le(e)
        );
      });
    }
    function rn(e) {
      e !== Oh && e.next === null && (Oh === null ? Yv = Oh = e : Oh = Oh.next = e), Nv = !0, H.actQueue !== null ? cg || (cg = !0, Gm(zd)) : ig || (ig = !0, Gm(zd));
    }
    function ms(e, t) {
      if (!og && Nv) {
        og = !0;
        do
          for (var a = !1, i = Yv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - $l(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326677 ? f & 201326677 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Vm(i, f));
            } else
              f = Ve, f = ta(
                i,
                i === mt ? f : 0
              ), !(f & 3) || va(i, f) || (a = !0, Vm(i, f));
            i = i.next;
          }
        while (a);
        og = !1;
      }
    }
    function zd() {
      Nv = cg = ig = !1;
      var e = 0;
      ur !== 0 && (Xe() && (e = ur), ur = 0);
      for (var t = Jn(), a = null, i = Yv; i !== null; ) {
        var o = i.next, f = Ta(i, t);
        f === 0 ? (i.next = null, a === null ? Yv = o : a.next = o, o === null && (Oh = a)) : (a = i, (e !== 0 || f & 3) && (Nv = !0)), i = o;
      }
      ms(e);
    }
    function Ta(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - $l(f), h = 1 << d, y = o[d];
        y === -1 ? (!(h & a) || h & i) && (o[d] = vl(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = mt, a = Ve, a = ta(
        e,
        e === t ? a : 0
      ), i = e.callbackNode, a === 0 || e === t && yt === tr || e.cancelPendingCommit !== null)
        return i !== null && sa(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || va(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || H.actQueue !== null && i !== fg)
          sa(i);
        else return t;
        switch (Rf(a)) {
          case Qa:
          case La:
            a = oy;
            break;
          case _a:
            a = ef;
            break;
          case Gs:
            a = fy;
            break;
          default:
            a = ef;
        }
        return i = ja.bind(null, e), H.actQueue !== null ? (H.actQueue.push(i), a = fg) : a = Kd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && sa(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function ja(e, t) {
      gv = pv = !1;
      var a = e.callbackNode;
      if (Bu() && e.callbackNode !== a)
        return null;
      var i = Ve;
      return i = ta(
        e,
        e === mt ? i : 0
      ), i === 0 ? null : (Ei(
        e,
        i,
        t
      ), Ta(e, Jn()), e.callbackNode != null && e.callbackNode === a ? ja.bind(null, e) : null);
    }
    function Vm(e, t) {
      if (Bu()) return null;
      pv = gv, gv = !1, Ei(e, t, !0);
    }
    function sa(e) {
      e !== fg && e !== null && Jd(e);
    }
    function Gm(e) {
      H.actQueue !== null && H.actQueue.push(function() {
        return e(), null;
      }), HS(function() {
        (Ot & (Ua | Zc)) !== gn ? Kd(kd, e) : e();
      });
    }
    function dn() {
      return ur === 0 && (ur = An()), ur;
    }
    function Rc(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (xe(e, "action"), Dn("" + e));
    }
    function Yu(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function wm(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Rc(
          (o[Wl] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Wl] || null) ? Rc(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new D(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (ur !== 0) {
                    var y = d ? Yu(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Jr(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Yu(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Jr(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Dd(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              o = f, o.currentTarget = p;
              try {
                h(o);
              } catch (O) {
                Ov(O);
              }
              o.currentTarget = null, o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              o = f, o.currentTarget = p;
              try {
                h(o);
              } catch (O) {
                Ov(O);
              }
              o.currentTarget = null, o = y;
            }
        }
      }
    }
    function me(e, t) {
      sg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[sy];
      a === void 0 && (a = t[sy] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Xo(t, e, 2, !1), a.add(i));
    }
    function Od(e, t, a) {
      sg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Xo(
        a,
        e,
        i,
        t
      );
    }
    function Ri(e) {
      if (!e[jv]) {
        e[jv] = !0, $d.forEach(function(a) {
          a !== "selectionchange" && (sg.has(a) || Od(a, !1, e), Od(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[jv] || (t[jv] = !0, Od("selectionchange", !1, t));
      }
    }
    function Xo(e, t, a, i) {
      switch (wd(t)) {
        case Qa:
          var o = dp;
          break;
        case La:
          o = hp;
          break;
        default:
          o = ey;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !N || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function zc(e, t, a, i, o) {
      var f = i;
      if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o || h.nodeType === 8 && h.parentNode === o)
              break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === o || y.nodeType === 8 && y.parentNode === o))
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Wa(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Qh(function() {
        var p = f, O = Tr(a), j = [];
        e: {
          var M = jg.get(e);
          if (M !== void 0) {
            var G = D, te = e;
            switch (e) {
              case "keypress":
                if (ni(a) === 0) break e;
              case "keydown":
              case "keyup":
                G = _b;
                break;
              case "focusin":
                te = "focus", G = Rp;
                break;
              case "focusout":
                te = "blur", G = Rp;
                break;
              case "beforeblur":
              case "afterblur":
                G = Rp;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                G = Le;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                G = Ap;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                G = Jb;
                break;
              case Bg:
              case qg:
              case Yg:
                G = Yb;
                break;
              case Ng:
                G = $b;
                break;
              case "scroll":
              case "scrollend":
                G = F;
                break;
              case "wheel":
                G = Fb;
                break;
              case "copy":
              case "cut":
              case "paste":
                G = jb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                G = zg;
                break;
              case "toggle":
              case "beforetoggle":
                G = Pb;
            }
            var Ae = (t & 4) !== 0, It = !Ae && (e === "scroll" || e === "scrollend"), et = Ae ? M !== null ? M + "Capture" : null : M;
            Ae = [];
            for (var S = p, b; S !== null; ) {
              var A = S;
              if (b = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || b === null || et === null || (A = ou(S, et), A != null && Ae.push(
                Xn(
                  S,
                  A,
                  b
                )
              )), It) break;
              S = S.return;
            }
            0 < Ae.length && (M = new G(
              M,
              te,
              null,
              a,
              O
            ), j.push({
              event: M,
              listeners: Ae
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", M && a !== R && (te = a.relatedTarget || a.fromElement) && (Wa(te) || te[yn]))
              break e;
            if ((G || M) && (M = O.window === O ? O : (M = O.ownerDocument) ? M.defaultView || M.parentWindow : window, G ? (te = a.relatedTarget || a.toElement, G = p, te = te ? Wa(te) : null, te !== null && (It = K(te), Ae = te.tag, te !== It || Ae !== 5 && Ae !== 27 && Ae !== 6) && (te = null)) : (G = null, te = p), G !== te)) {
              if (Ae = Le, A = "onMouseLeave", et = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (Ae = zg, A = "onPointerLeave", et = "onPointerEnter", S = "pointer"), It = G == null ? M : to(G), b = te == null ? M : to(te), M = new Ae(
                A,
                S + "leave",
                G,
                a,
                O
              ), M.target = It, M.relatedTarget = b, A = null, Wa(O) === p && (Ae = new Ae(
                et,
                S + "enter",
                te,
                a,
                O
              ), Ae.target = b, Ae.relatedTarget = It, A = Ae), It = A, G && te)
                t: {
                  for (Ae = G, et = te, S = 0, b = Ae; b; b = Dc(b))
                    S++;
                  for (b = 0, A = et; A; A = Dc(A))
                    b++;
                  for (; 0 < S - b; )
                    Ae = Dc(Ae), S--;
                  for (; 0 < b - S; )
                    et = Dc(et), b--;
                  for (; S--; ) {
                    if (Ae === et || et !== null && Ae === et.alternate)
                      break t;
                    Ae = Dc(Ae), et = Dc(et);
                  }
                  Ae = null;
                }
              else Ae = null;
              G !== null && Qo(
                j,
                M,
                G,
                Ae,
                !1
              ), te !== null && It !== null && Qo(
                j,
                It,
                te,
                Ae,
                !0
              );
            }
          }
          e: {
            if (M = p ? to(p) : window, G = M.nodeName && M.nodeName.toLowerCase(), G === "select" || G === "input" && M.type === "file")
              var q = ro;
            else if (xf(M))
              if (Cg)
                q = Kh;
              else {
                q = ap;
                var _ = lp;
              }
            else
              G = M.nodeName, !G || G.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? p && Hf(p.elementType) && (q = ro) : q = np;
            if (q && (q = q(e, p))) {
              r0(
                j,
                q,
                a,
                O
              );
              break e;
            }
            _ && _(e, M, p), e === "focusout" && p && M.type === "number" && p.memoizedProps.value != null && ei(M, "number", M.value);
          }
          switch (_ = p ? to(p) : window, e) {
            case "focusin":
              (xf(_) || _.contentEditable === "true") && (nh = _, Dp = p, Ty = null);
              break;
            case "focusout":
              Ty = Dp = nh = null;
              break;
            case "mousedown":
              Op = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Op = !1, y0(
                j,
                a,
                O
              );
              break;
            case "selectionchange":
              if (aS) break;
            case "keydown":
            case "keyup":
              y0(
                j,
                a,
                O
              );
          }
          var ye;
          if (zp)
            e: {
              switch (e) {
                case "compositionstart":
                  var ee = "onCompositionStart";
                  break e;
                case "compositionend":
                  ee = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ee = "onCompositionUpdate";
                  break e;
              }
              ee = void 0;
            }
          else
            ah ? Cf(e, a) && (ee = "onCompositionEnd") : e === "keydown" && a.keyCode === Dg && (ee = "onCompositionStart");
          ee && (Og && a.locale !== "ko" && (ah || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && ah && (ye = Ar()) : (oe = O, Tt = "value" in oe ? oe.value : oe.textContent, ah = !0)), _ = ys(
            p,
            ee
          ), 0 < _.length && (ee = new Rg(
            ee,
            e,
            null,
            a,
            O
          ), j.push({
            event: ee,
            listeners: _
          }), ye ? ee.data = ye : (ye = Lh(a), ye !== null && (ee.data = ye)))), (ye = tS ? na(e, a) : Ii(e, a)) && (ee = ys(
            p,
            "onBeforeInput"
          ), 0 < ee.length && (_ = new Gb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            O
          ), j.push({
            event: _,
            listeners: ee
          }), _.data = ye)), wm(
            j,
            e,
            p,
            a,
            O
          );
        }
        Dd(j, t);
      });
    }
    function Xn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ys(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ou(e, a), o != null && i.unshift(
          Xn(e, o, f)
        ), o = ou(e, t), o != null && i.push(
          Xn(e, o, f)
        )), e = e.return;
      }
      return i;
    }
    function Dc(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qo(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ou(a, f), p != null && d.unshift(
          Xn(a, p, y)
        )) : o || (p = ou(a, f), p != null && d.push(
          Xn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Md(e, t) {
      wh(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || u || (u = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: jc,
        possibleRegistrationNames: Vc
      };
      Hf(e) || typeof t.is == "string" || oo(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Vt(e, t, a, i) {
      t !== a && (a = Ln(a), Ln(t) !== a && (i[e] = t));
    }
    function $0(e, t, a) {
      t.forEach(function(i) {
        a[Ud(i)] = i === "style" ? hn(e) : e.getAttribute(i);
      });
    }
    function Qn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Ea(e, t) {
      return e = e.namespaceURI === vn || e.namespaceURI === nf ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ln(e) {
      return Ul(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        $e(e)
      ), Ca(e)), (typeof e == "string" ? e : "" + e).replace(RS, `
`).replace(zS, "");
    }
    function Nu(e, t) {
      return t = Ln(t), Ln(e) === t;
    }
    function vs() {
    }
    function ke(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (cu(i, t), t === "body" || t === "textarea" && i === "" || Uf(e, i)) : (typeof i == "number" || typeof i == "bigint") && (cu("" + i, t), t !== "body" && Uf(e, "" + i));
          break;
        case "className":
          hr(e, "class", i);
          break;
        case "tabIndex":
          hr(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          hr(e, a, i);
          break;
        case "style":
          br(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            hr(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          xe(i, a), i = Dn("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || wv || (wv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Gv || (Gv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Vv ? t !== "button" || o.type == null || o.type === "submit" || Vv ? typeof i == "function" && (o.name == null || K1 || (K1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || wv || (wv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Gv || (Gv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Vv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Vv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && ke(e, t, "name", o.name, o, null), ke(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), ke(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), ke(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (ke(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), ke(e, t, "method", o.method, o, null), ke(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          xe(i, a), i = Dn("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Qn(a, i), e.onclick = vs);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Qn(a, i), me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Qn(a, i), me("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          xe(i, a), a = Dn("" + i), e.setAttributeNS(ir, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (xe(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Xv[a] || (Xv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (xe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (xe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (xe(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          me("beforetoggle", e), me("toggle", e), Df(e, "popover", i);
          break;
        case "xlinkActuate":
          Hl(
            e,
            ir,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Hl(
            e,
            ir,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Hl(
            e,
            ir,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Hl(
            e,
            ir,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Hl(
            e,
            ir,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Hl(
            e,
            ir,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Hl(
            e,
            rg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Hl(
            e,
            rg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Hl(
            e,
            rg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Df(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          J1 || i == null || typeof i != "object" || (J1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = f0(a), Df(e, a, i)) : jc.hasOwnProperty(a) && i != null && typeof i != "function" && Qn(a, i);
      }
    }
    function ju(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          br(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Uf(e, i) : (typeof i == "number" || typeof i == "bigint") && Uf(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Qn(a, i), me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Qn(a, i), me("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Qn(a, i), e.onclick = vs);
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
          if (jc.hasOwnProperty(a))
            i != null && typeof i != "function" && Qn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Wl] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Df(e, a, i);
            }
      }
    }
    function cl(e, t, a) {
      switch (Md(t, a), t) {
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
          me("error", e), me("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ke(e, t, f, d, a, null);
                }
            }
          o && ke(e, t, "srcSet", a.srcSet, a, null), i && ke(e, t, "src", a.src, a, null);
          return;
        case "input":
          Ki("input", a), me("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var O = a[i];
              if (O != null)
                switch (i) {
                  case "name":
                    o = O;
                    break;
                  case "type":
                    d = O;
                    break;
                  case "checked":
                    y = O;
                    break;
                  case "defaultChecked":
                    p = O;
                    break;
                  case "value":
                    f = O;
                    break;
                  case "defaultValue":
                    h = O;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (O != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ke(e, t, i, O, a, null);
                }
            }
          uo(e, a), Pu(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          ), no(e);
          return;
        case "select":
          Ki("select", a), me("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  ke(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Bh(e, a), t = f, a = d, e.multiple = !!i, t != null ? Dt(e, !!i, t, !1) : a != null && Dt(e, !!i, a, !0);
          return;
        case "textarea":
          Ki("textarea", a), me("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  ke(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          qh(e, a), ki(e, i, o, f), no(e);
          return;
        case "option":
          io(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  ke(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          me("cancel", e), me("close", e);
          break;
        case "iframe":
        case "object":
          me("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Ky.length; i++)
            me(Ky[i], e);
          break;
        case "image":
          me("error", e), me("load", e);
          break;
        case "details":
          me("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          me("error", e), me("load", e);
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
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ke(e, t, p, i, a, null);
              }
          return;
        default:
          if (Hf(t)) {
            for (O in a)
              a.hasOwnProperty(O) && (i = a[O], i !== void 0 && ju(
                e,
                t,
                O,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && ke(e, t, h, i, a, null));
    }
    function Xm(e, t, a, i) {
      switch (Md(t, i), t) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, O = null;
          for (G in a) {
            var j = a[G];
            if (a.hasOwnProperty(G) && j != null)
              switch (G) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = j;
                default:
                  i.hasOwnProperty(G) || ke(
                    e,
                    t,
                    G,
                    null,
                    i,
                    j
                  );
              }
          }
          for (var M in i) {
            var G = i[M];
            if (j = a[M], i.hasOwnProperty(M) && (G != null || j != null))
              switch (M) {
                case "type":
                  f = G;
                  break;
                case "name":
                  o = G;
                  break;
                case "checked":
                  p = G;
                  break;
                case "defaultChecked":
                  O = G;
                  break;
                case "value":
                  d = G;
                  break;
                case "defaultValue":
                  h = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  G !== j && ke(
                    e,
                    t,
                    M,
                    G,
                    i,
                    j
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || Z1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Z1 = !0), !t || i || _1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), _1 = !0), Of(
            e,
            d,
            h,
            y,
            p,
            O,
            f,
            o
          );
          return;
        case "select":
          G = d = h = M = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  G = y;
                default:
                  i.hasOwnProperty(f) || ke(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  M = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && ke(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = G, M != null ? Dt(e, !!t, M, !1) : !!a != !!t && (i != null ? Dt(e, !!t, i, !0) : Dt(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          G = M = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ke(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  M = o;
                  break;
                case "defaultValue":
                  G = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && ke(e, t, d, o, i, f);
              }
          ti(e, M, G);
          return;
        case "option":
          for (var te in a)
            if (M = a[te], a.hasOwnProperty(te) && M != null && !i.hasOwnProperty(te))
              switch (te) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ke(
                    e,
                    t,
                    te,
                    null,
                    i,
                    M
                  );
              }
          for (y in i)
            if (M = i[y], G = a[y], i.hasOwnProperty(y) && M !== G && (M != null || G != null))
              switch (y) {
                case "selected":
                  e.selected = M && typeof M != "function" && typeof M != "symbol";
                  break;
                default:
                  ke(
                    e,
                    t,
                    y,
                    M,
                    i,
                    G
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
          for (var Ae in a)
            M = a[Ae], a.hasOwnProperty(Ae) && M != null && !i.hasOwnProperty(Ae) && ke(
              e,
              t,
              Ae,
              null,
              i,
              M
            );
          for (p in i)
            if (M = i[p], G = a[p], i.hasOwnProperty(p) && M !== G && (M != null || G != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ke(
                    e,
                    t,
                    p,
                    M,
                    i,
                    G
                  );
              }
          return;
        default:
          if (Hf(t)) {
            for (var It in a)
              M = a[It], a.hasOwnProperty(It) && M !== void 0 && !i.hasOwnProperty(It) && ju(
                e,
                t,
                It,
                void 0,
                i,
                M
              );
            for (O in i)
              M = i[O], G = a[O], !i.hasOwnProperty(O) || M === G || M === void 0 && G === void 0 || ju(
                e,
                t,
                O,
                M,
                i,
                G
              );
            return;
          }
      }
      for (var et in a)
        M = a[et], a.hasOwnProperty(et) && M != null && !i.hasOwnProperty(et) && ke(e, t, et, null, i, M);
      for (j in i)
        M = i[j], G = a[j], !i.hasOwnProperty(j) || M === G || M == null && G == null || ke(e, t, j, M, i, G);
    }
    function Ud(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function hn(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Qm(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (iu(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || th.has(f) ? (iu(d, f), i += o + f.replace(uf, "-$1").toLowerCase().replace(sv, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(uf, "-$1").toLowerCase().replace(sv, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ln(i), Ln(t) !== i && (a.style = hn(e)));
      }
    }
    function Jl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (xe(i, t), e === "" + i)
              return;
        }
      Vt(t, e, i, f);
    }
    function Lo(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Vt(t, e, i, f);
    }
    function dt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (xe(i, a), e === "" + i)
              return;
        }
      Vt(t, e, i, f);
    }
    function W0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (xe(i, t), e === "" + i))
              return;
        }
      Vt(t, e, i, f);
    }
    function Hd(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (xe(i, t), a = Dn("" + i), e === a)
              return;
        }
      Vt(t, e, i, f);
    }
    function Lm(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Hf(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (jc.hasOwnProperty(y))
                typeof p != "function" && Qn(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Vt(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = Ea(e, p), Vt(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Qm(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = xh(
                      e,
                      "class",
                      p
                    ), Vt(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === kc && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = xh(
                      e,
                      y,
                      p
                    ), Vt(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (jc.hasOwnProperty(p))
              typeof y != "function" && Qn(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Vt(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = Ea(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Jl(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Jl(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Qm(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Vt(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Vt(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Vt(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), Vt(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    ), Hd(
                      e,
                      p,
                      p,
                      null,
                      f,
                      o
                    );
                    continue;
                  }
                  Hd(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === DS) {
                    f.delete(p.toLowerCase()), Vt(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Hd(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Hd(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  dt(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  dt(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  dt(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
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
                  Lo(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var O = d = p, j = o;
                    if (f.delete(O), h = h.getAttribute(O), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (xe(y, d), h === "" + y)
                            break e;
                      }
                    Vt(
                      d,
                      h,
                      y,
                      j
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, O = d = p, j = o, f.delete(O), h = h.getAttribute(O), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (xe(y, d), h === "" + y))
                            break e;
                      }
                    Vt(
                      d,
                      h,
                      y,
                      j
                    );
                  }
                  continue;
                case "rowSpan":
                  W0(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  W0(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Jl(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Jl(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Jl(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Jl(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Jl(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Jl(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Jl(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Jl(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Jl(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Jl(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Xv[p] || (Xv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Lo(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = f0(p), d = !1, i.context === kc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (O = p.toLowerCase(), O = Ls.hasOwnProperty(
                      O
                    ) && Ls[O] || null, O !== null && O !== p && (d = !0, f.delete(O)), f.delete(h));
                    e: if (O = e, j = h, h = y, dr(j))
                      if (O.hasAttribute(j))
                        O = O.getAttribute(
                          j
                        ), xe(
                          h,
                          j
                        ), h = O === "" + h ? h : O;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (O = j.toLowerCase().slice(0, 5), O !== "data-" && O !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Vt(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && $0(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function cp(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Cd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function St(e) {
      switch (e) {
        case nf:
          return Mh;
        case vn:
          return _v;
        default:
          return kc;
      }
    }
    function nt(e, t) {
      if (e === kc)
        switch (t) {
          case "svg":
            return Mh;
          case "math":
            return _v;
          default:
            return kc;
        }
      return e === Mh && t === "foreignObject" ? kc : e;
    }
    function De(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Xe() {
      var e = window.event;
      return e && e.type === "popstate" ? e === yg ? !1 : (yg = e, !0) : (yg = null, !1);
    }
    function st(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Aa(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Vu(e, t, a, i) {
      Xm(e, t, a, i), e[Wl] = i;
    }
    function Oc(e) {
      Uf(e, "");
    }
    function _m(e, t, a) {
      e.nodeValue = a;
    }
    function Gu(e, t) {
      e.removeChild(t);
    }
    function xt(e, t) {
      e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function _n(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === Lv) {
            if (i === 0) {
              e.removeChild(o), Ds(t);
              return;
            }
            i--;
          } else
            a !== Qv && a !== cr && a !== or || i++;
        a = o;
      } while (a);
      Ds(t);
    }
    function Mc(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Zm(e) {
      e.nodeValue = "";
    }
    function Va(e, t) {
      t = t[MS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function _o(e, t) {
      e.nodeValue = t;
    }
    function Uc(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Uc(a), eo(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Zn(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ci])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          xe(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ra(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Km(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ra(e.nextSibling), e === null)) return null;
      return e;
    }
    function ra(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Qv || t === or || t === cr || t === dg || t === k1)
            break;
          if (t === Lv) return null;
        }
      }
      return e;
    }
    function ps(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Ud(f.name)] = f.name.toLowerCase() === "style" ? hn(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function gs(e, t, a) {
      return a === null || a[OS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ln(t), e = Ln(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function wu(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Lv) {
            if (t === 0)
              return ra(e.nextSibling);
            t--;
          } else
            a !== Qv && a !== or && a !== cr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function bs(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Qv || a === or || a === cr) {
            if (t === 0) return e;
            t--;
          } else a === Lv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Hc(e) {
      Ds(e);
    }
    function Ss(e) {
      Ds(e);
    }
    function xd(e, t, a, i, o) {
      switch (o && gr(e, i.ancestorInfo), t = Cd(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Jm(e, t, a, i) {
      if (_i(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      cl(a, e, t), a[Vl] = i, a[Wl] = t;
    }
    function zi(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument;
    }
    function Bd(e, t, a) {
      var i = Uh;
      if (i && typeof t == "string" && t) {
        var o = pa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), eb.has(o) || (eb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), cl(t, "link", e), Qt(t), i.head.appendChild(t)));
      }
    }
    function da(e, t, a, i) {
      var o = (o = Qu.current) ? zi(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Lt(a.href), t = Zi(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Lt(a.href);
            var f = Zi(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: fr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Zo(e)
            )) && !f._p && (d.instance = f, d.state.loading = Jy | nu), !uu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              uu.set(e, h), f || F0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Ts(t) + `
  + ` + Ts(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Ts(t) + `
  + ` + Ts(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Ko(a), t = Zi(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Ts(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Zt.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Zt.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Zt.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Lt(e) {
      return 'href="' + pa(e) + '"';
    }
    function Zo(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function qd(e) {
      return he({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function F0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Jy : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Jy;
      }), t.addEventListener("error", function() {
        return i.loading |= I1;
      }), cl(t, "link", a), Qt(t), e.head.appendChild(t));
    }
    function Ko(e) {
      return '[src="' + pa(e) + '"]';
    }
    function Ra(e) {
      return "script[async]" + e;
    }
    function Es(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + pa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Qt(i), i;
            var o = he({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Qt(i), cl(i, "style", o), Jo(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Lt(a.href);
            var f = e.querySelector(
              Zo(o)
            );
            if (f)
              return t.state.loading |= nu, t.instance = f, Qt(f), f;
            i = qd(a), (o = uu.get(o)) && Di(i, o), f = (e.ownerDocument || e).createElement("link"), Qt(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), cl(f, "link", i), t.state.loading |= nu, Jo(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Ko(a.src), (o = e.querySelector(
              Ra(f)
            )) ? (t.instance = o, Qt(o), o) : (i = a, (o = uu.get(f)) && (i = he({}, a), Yd(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Qt(o), cl(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & nu) === fr && (i = t.instance, t.state.loading |= nu, Jo(i, a.precedence, e));
      return t.instance;
    }
    function Jo(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Di(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Yd(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function km(e, t, a) {
      if (Zv === null) {
        var i = /* @__PURE__ */ new Map(), o = Zv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Zv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ci] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== nf) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function $m(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Wm(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Mh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflic with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`, or move the <style> to the <style> tag.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = cp(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Nd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & P1) === fr);
    }
    function op() {
    }
    function fp(e, t, a) {
      if (ky === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = ky;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & nu) === fr) {
        if (t.instance === null) {
          var o = Lt(a.href), f = e.querySelector(
            Zo(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = As.bind(i), e.then(i, i)), t.state.loading |= nu, t.instance = f, Qt(f);
            return;
          }
          f = e.ownerDocument || e, a = qd(a), (o = uu.get(o)) && Di(a, o), f = f.createElement("link"), Qt(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), cl(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & P1) === fr && (i.count++, t = As.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function sp() {
      if (ky === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = ky;
      return e.stylesheets && e.count === 0 && jd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && jd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function As() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          jd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function jd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Kv = /* @__PURE__ */ new Map(), t.forEach(ko, e), Kv = null, As.call(e));
    }
    function ko(e, t) {
      if (!(t.state.loading & nu)) {
        var a = Kv.get(e);
        if (a) var i = a.get(pg);
        else {
          a = /* @__PURE__ */ new Map(), Kv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(pg, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(pg, o), a.set(d, o), this.count++, i = As.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= nu;
      }
    }
    function Vd(e, t, a) {
      var i = 0;
      switch (e) {
        case "dir":
        case "dirxml":
        case "groupEnd":
        case "table":
          return nb.apply(console[e], [console].concat(t));
        case "assert":
          i = 1;
      }
      return t = t.slice(0), typeof t[i] == "string" ? t.splice(
        i,
        1,
        tb + t[i],
        lb,
        Jv + a + Jv,
        ab
      ) : t.splice(
        i,
        0,
        tb,
        lb,
        Jv + a + Jv,
        ab
      ), t.unshift(console), nb.apply(console[e], t);
    }
    function I0(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = vg, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.hiddenUpdates = gt(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Fm(e, t, a, i, o, f, d, h, y, p, O, j) {
      return e = new I0(
        e,
        t,
        a,
        d,
        h,
        y,
        p,
        j
      ), t = cS, f === !0 && (t |= ma | ku), Xa && (t |= Fl), f = be(3, null, null, t), e.current = f, f.stateNode = e, t = oi(), du(t), e.pooledCache = t, du(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, id(f), e;
    }
    function P0(e) {
      return e ? (e = ff, e) : ff;
    }
    function Im(e, t, a, i) {
      return t.tag === 0 && Bu(), Cc(
        t.current,
        2,
        e,
        t,
        a,
        i
      ), 2;
    }
    function Cc(e, t, a, i, o, f) {
      if (Rl && typeof Rl.onScheduleFiberRoot == "function")
        try {
          Rl.onScheduleFiberRoot(tf, i, a);
        } catch (d) {
          ha || (ha = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      J !== null && typeof J.markRenderScheduled == "function" && J.markRenderScheduled(t), o = P0(o), i.context === null ? i.context = o : i.pendingContext = o, wa && Al !== null && !ub && (ub = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        le(Al) || "Unknown"
      )), i = Eu(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vi(e, i, t), a !== null && (ft(a, e, t), Ho(a, e, t));
    }
    function Pm(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Pe(e, t) {
      Pm(e, t), (e = e.alternate) && Pm(e, t);
    }
    function Gd(e) {
      if (e.tag === 13) {
        var t = xl(e, 67108864);
        t !== null && ft(t, e, 67108864), Pe(e, 67108864);
      }
    }
    function rp() {
      return Al;
    }
    function ev() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = it(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function dp(e, t, a, i) {
      var o = H.T;
      H.T = null;
      var f = ht.p;
      try {
        ht.p = Qa, ey(e, t, a, i);
      } finally {
        ht.p = f, H.T = o;
      }
    }
    function hp(e, t, a, i) {
      var o = H.T;
      H.T = null;
      var f = ht.p;
      try {
        ht.p = La, ey(e, t, a, i);
      } finally {
        ht.p = f, H.T = o;
      }
    }
    function ey(e, t, a, i) {
      if (kv) {
        var o = $o(i);
        if (o === null)
          zc(
            e,
            t,
            i,
            $v,
            a
          ), Rs(e, i);
        else if (Bc(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Rs(e, i), t & 4 && -1 < CS.indexOf(e)) {
          for (; o !== null; ) {
            var f = _i(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ce(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - $l(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      rn(f), (Ot & (Ua | Zc)) === gn && (Cv = Jn() + w1, ms(0));
                    }
                  }
                  break;
                case 13:
                  h = xl(f, 2), h !== null && ft(h, f, 2), Ai(), Pe(f, 2);
              }
            if (f = $o(i), f === null && zc(
              e,
              t,
              i,
              $v,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          zc(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function $o(e) {
      return e = Tr(e), Oi(e);
    }
    function Oi(e) {
      if ($v = null, e = Wa(e), e !== null) {
        var t = K(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = w(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return $v = e, null;
    }
    function wd(e) {
      switch (e) {
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
          return Qa;
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
          return La;
        case "message":
          switch (Po()) {
            case kd:
              return Qa;
            case oy:
              return La;
            case ef:
            case gp:
              return _a;
            case fy:
              return Gs;
            default:
              return _a;
          }
        default:
          return _a;
      }
    }
    function Rs(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          bf = null;
          break;
        case "dragenter":
        case "dragleave":
          Sf = null;
          break;
        case "mouseover":
        case "mouseout":
          Tf = null;
          break;
        case "pointerover":
        case "pointerout":
          Wy.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Fy.delete(t.pointerId);
      }
    }
    function xc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = _i(t), t !== null && Gd(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Bc(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return bf = xc(
            bf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Sf = xc(
            Sf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Tf = xc(
            Tf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Wy.set(
            f,
            xc(
              Wy.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Fy.set(
            f,
            xc(
              Fy.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function mn(e) {
      var t = Wa(e.target);
      if (t !== null) {
        var a = K(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = w(a), t !== null) {
              e.blockedOn = t, Li(e.priority, function() {
                if (a.tag === 13) {
                  var i = Kl(a), o = xl(a, i);
                  o !== null && ft(o, a, i), Pe(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Mi(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = $o(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          R !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), R = o, a.target.dispatchEvent(i), R === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), R = null;
        } else
          return t = _i(a), t !== null && Gd(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function tv(e, t, a) {
      Mi(e) && a.delete(t);
    }
    function lv() {
      gg = !1, bf !== null && Mi(bf) && (bf = null), Sf !== null && Mi(Sf) && (Sf = null), Tf !== null && Mi(Tf) && (Tf = null), Wy.forEach(tv), Fy.forEach(tv);
    }
    function zs(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gg || (gg = !0, _t.unstable_scheduleCallback(
        _t.unstable_NormalPriority,
        lv
      )));
    }
    function ty(e) {
      Wv !== e && (Wv = e, _t.unstable_scheduleCallback(
        _t.unstable_NormalPriority,
        function() {
          Wv === e && (Wv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Oi(i || a) === null)
                continue;
              break;
            }
            var f = _i(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Jr(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Ds(e) {
      function t(y) {
        return zs(y, e);
      }
      bf !== null && zs(bf, e), Sf !== null && zs(Sf, e), Tf !== null && zs(Tf, e), Wy.forEach(t), Fy.forEach(t);
      for (var a = 0; a < Ef.length; a++) {
        var i = Ef[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Ef.length && (a = Ef[0], a.blockedOn === null); )
        mn(a), a.blockedOn === null && Ef.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Wl] || null;
          if (typeof f == "function")
            d || ty(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Wl] || null)
                h = d.formAction;
              else if (Oi(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), ty(a);
          }
        }
    }
    function Os(e) {
      this._internalRoot = e;
    }
    function Ms(e) {
      this._internalRoot = e;
    }
    function ly(e) {
      e[yn] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var _t = Cb(), Us = Ag, ay = Db, mp = Symbol.for("react.element"), Ui = Symbol.for("react.transitional.element"), Kn = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Hs = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), ny = Symbol.for("react.provider"), Fo = Symbol.for("react.consumer"), Ga = Symbol.for("react.context"), Io = Symbol.for("react.forward_ref"), Cs = Symbol.for("react.suspense"), qc = Symbol.for("react.suspense_list"), Yc = Symbol.for("react.memo"), ol = Symbol.for("react.lazy"), uy = Symbol.for("react.offscreen"), yp = Symbol.for("react.memo_cache_sentinel"), av = Symbol.iterator, nv = Symbol.for("react.client.reference"), H = Us.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = Object.assign, Ze = 0, Xd, fl, uv, Qd, Ld, xs, iy;
    Xt.__reactDisabledLog = !0;
    var _d, Zd, Bs = !1, cy = new (typeof WeakMap == "function" ? WeakMap : Map)(), Al = null, wa = !1, sl = Array.isArray, ht = ay.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, vp = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), qs = [], Ys = [], Xu = -1, Hi = Ue(null), kl = Ue(null), Qu = Ue(null), Ns = Ue(null), Zt = Object.prototype.hasOwnProperty, Kd = _t.unstable_scheduleCallback, Jd = _t.unstable_cancelCallback, Lu = _t.unstable_shouldYield, pp = _t.unstable_requestPaint, Jn = _t.unstable_now, Po = _t.unstable_getCurrentPriorityLevel, kd = _t.unstable_ImmediatePriority, oy = _t.unstable_UserBlockingPriority, ef = _t.unstable_NormalPriority, gp = _t.unstable_LowPriority, fy = _t.unstable_IdlePriority, bp = _t.log, Sp = _t.unstable_setDisableYieldValue, tf = null, Rl = null, J = null, ha = !1, Xa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", $l = Math.clz32 ? Math.clz32 : kt, lf = Math.log, js = Math.LN2, Vs = 128, Nc = 4194304, Qa = 2, La = 8, _a = 32, Gs = 268435456, _u = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + _u, Wl = "__reactProps$" + _u, yn = "__reactContainer$" + _u, sy = "__reactEvents$" + _u, Tp = "__reactListeners$" + _u, Ep = "__reactHandles$" + _u, ws = "__reactResources$" + _u, Ci = "__reactMarker$" + _u, $d = /* @__PURE__ */ new Set(), jc = {}, Vc = {}, kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), iv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), ry = {}, dy = {}, hy = /[\n"\\]/g, my = !1, Xs = !1, ov = !1, fv = !1, Wd = !1, Fd = !1, Qs = ["value", "defaultValue"], Id = !1, yy = /["'&<>\n\t]|^\s|\s$/, vy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Zu = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), xi = Zu.concat(["button"]), Bi = "dd dt li option optgroup p rp rt".split(" "), af = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null
    }, qi = {}, vn = "http://www.w3.org/1998/Math/MathML", nf = "http://www.w3.org/2000/svg", Pd = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, uf = /([A-Z])/g, sv = /^ms-/, rv = /^(?:webkit|moz|o)[A-Z]/, eh = /^-ms-/, dv = /-(.)/g, hv = /;\s*$/, Ku = {}, cf = {}, py = !1, of = !1, th = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), lh = /* @__PURE__ */ new Map([
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
    ]), Ls = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, mv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ju = {}, l = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), n = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = !1, c = {}, s = /^on./, r = /^on[^A-Z]/, m = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), v = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), g = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, R = null, Y = null, X = null, U = !1, N = !1;
    if (kn)
      try {
        var I = {};
        Object.defineProperty(I, "passive", {
          get: function() {
            N = !0;
          }
        }), window.addEventListener("test", I, I), window.removeEventListener("test", I, I);
      } catch {
        N = !1;
      }
    var oe = null, Tt = null, z = null, E = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, D = pl(E), V = he({}, E, { view: 0, detail: 0 }), F = pl(V), Ee, ae, ue, Gt = he({}, V, {
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
      getModifierState: fo,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ue && (ue && e.type === "mousemove" ? (Ee = e.screenX - ue.screenX, ae = e.screenY - ue.screenY) : ae = Ee = 0, ue = e), Ee);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ae;
      }
    }), Le = pl(Gt), Yi = he({}, Gt, { dataTransfer: 0 }), Ap = pl(Yi), Bb = he({}, V, { relatedTarget: 0 }), Rp = pl(Bb), qb = he({}, E, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Yb = pl(qb), Nb = he({}, E, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), jb = pl(Nb), Vb = he({}, E, { data: 0 }), Rg = pl(
      Vb
    ), Gb = Rg, wb = {
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
    }, Xb = {
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
    }, Qb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Lb = he({}, V, {
      key: function(e) {
        if (e.key) {
          var t = wb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fo,
      charCode: function(e) {
        return e.type === "keypress" ? ni(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), _b = pl(Lb), Zb = he({}, Gt, {
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
    }), zg = pl(Zb), Kb = he({}, V, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fo
    }), Jb = pl(Kb), kb = he({}, E, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $b = pl(kb), Wb = he({}, Gt, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Fb = pl(Wb), Ib = he({}, E, {
      newState: 0,
      oldState: 0
    }), Pb = pl(Ib), eS = [9, 13, 27, 32], Dg = 229, zp = kn && "CompositionEvent" in window, gy = null;
    kn && "documentMode" in document && (gy = document.documentMode);
    var tS = kn && "TextEvent" in window && !gy, Og = kn && (!zp || gy && 8 < gy && 11 >= gy), Mg = 32, Ug = String.fromCharCode(Mg), Hg = !1, ah = !1, lS = {
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
    }, by = null, Sy = null, Cg = !1;
    kn && (Cg = Bf("input") && (!document.documentMode || 9 < document.documentMode));
    var za = typeof Object.is == "function" ? Object.is : up, aS = kn && "documentMode" in document && 11 >= document.documentMode, nh = null, Dp = null, Ty = null, Op = !1, uh = {
      animationend: Pi("Animation", "AnimationEnd"),
      animationiteration: Pi("Animation", "AnimationIteration"),
      animationstart: Pi("Animation", "AnimationStart"),
      transitionrun: Pi("Transition", "TransitionRun"),
      transitionstart: Pi("Transition", "TransitionStart"),
      transitioncancel: Pi("Transition", "TransitionCancel"),
      transitionend: Pi("Transition", "TransitionEnd")
    }, Mp = {}, xg = {};
    kn && (xg = document.createElement("div").style, "AnimationEvent" in window || (delete uh.animationend.animation, delete uh.animationiteration.animation, delete uh.animationstart.animation), "TransitionEvent" in window || delete uh.transitionend.transition);
    var Bg = fu("animationend"), qg = fu("animationiteration"), Yg = fu("animationstart"), nS = fu("transitionrun"), uS = fu("transitionstart"), iS = fu("transitioncancel"), Ng = fu("transitionend"), jg = /* @__PURE__ */ new Map(), Vg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    ), yv = 1, Ey = 2, _s = 4, $n = [], ih = 0, Up = 0, ff = {};
    Object.freeze(ff);
    var Wn = null, ch = null, Et = 0, cS = 1, Fl = 2, ma = 8, ku = 16, Gg = 64, oh = _t.unstable_now, Hp = -0, vv = -0, Za = -1.1, Zs = -0, pv = !1, gv = !1, $u = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Ay = [], Ry = [], zy = [], Dy = [], Oy = [], My = [], Ks = /* @__PURE__ */ new Set();
    $u.recordUnsafeLifecycleWarnings = function(e, t) {
      Ks.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Ay.push(e), e.mode & ma && typeof t.UNSAFE_componentWillMount == "function" && Ry.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && zy.push(e), e.mode & ma && typeof t.UNSAFE_componentWillReceiveProps == "function" && Dy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Oy.push(e), e.mode & ma && typeof t.UNSAFE_componentWillUpdate == "function" && My.push(e));
    }, $u.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Ay.length && (Ay.forEach(function(h) {
        e.add(
          le(h) || "Component"
        ), Ks.add(h.type);
      }), Ay = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ry.length && (Ry.forEach(function(h) {
        t.add(
          le(h) || "Component"
        ), Ks.add(h.type);
      }), Ry = []);
      var a = /* @__PURE__ */ new Set();
      0 < zy.length && (zy.forEach(function(h) {
        a.add(
          le(h) || "Component"
        ), Ks.add(h.type);
      }), zy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Dy.length && (Dy.forEach(
        function(h) {
          i.add(
            le(h) || "Component"
          ), Ks.add(h.type);
        }
      ), Dy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Oy.length && (Oy.forEach(function(h) {
        o.add(
          le(h) || "Component"
        ), Ks.add(h.type);
      }), Oy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < My.length && (My.forEach(function(h) {
        f.add(
          le(h) || "Component"
        ), Ks.add(h.type);
      }), My = []), 0 < t.size) {
        var d = lt(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = lt(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = lt(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = lt(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = lt(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = lt(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var bv = /* @__PURE__ */ new Map(), wg = /* @__PURE__ */ new Set();
    $u.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ma && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !wg.has(e.type) && (i = bv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bv.set(a, i)), i.push(e));
    }, $u.flushLegacyContextWarning = function() {
      bv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(le(o) || "Component"), wg.add(o.type);
          });
          var i = lt(a);
          $(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, $u.discardPendingWarnings = function() {
      Ay = [], Ry = [], zy = [], Dy = [], Oy = [], My = [], bv = /* @__PURE__ */ new Map();
    };
    var Cp = /* @__PURE__ */ new WeakMap(), fh = [], sh = 0, Sv = null, Tv = 0, Fn = [], In = 0, Js = null, Gc = 1, wc = "", Da = null, Il = null, _e = !1, Xc = !1, Pn = null, Wu = null, Ni = !1, xp = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Ev = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
    ), Xg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Bp = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Uy = null, Av = !1, Qg = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = wa;
        wa = !0;
        try {
          return e(t, a);
        } finally {
          wa = i;
        }
      }
    }, qp = Qg["react-stack-bottom-frame"].bind(Qg), Lg = {
      "react-stack-bottom-frame": function(e) {
        var t = wa;
        wa = !0;
        try {
          return e.render();
        } finally {
          wa = t;
        }
      }
    }, _g = Lg["react-stack-bottom-frame"].bind(Lg), Zg = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          je(e, e.return, a);
        }
      }
    }, Yp = Zg["react-stack-bottom-frame"].bind(Zg), Kg = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          je(e, e.return, f);
        }
      }
    }, Jg = Kg["react-stack-bottom-frame"].bind(Kg), kg = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, oS = kg["react-stack-bottom-frame"].bind(kg), $g = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          je(e, t, i);
        }
      }
    }, Wg = $g["react-stack-bottom-frame"].bind($g), Fg = {
      "react-stack-bottom-frame": function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, fS = Fg["react-stack-bottom-frame"].bind(Fg), Ig = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          je(e, t, i);
        }
      }
    }, sS = Ig["react-stack-bottom-frame"].bind(Ig), Pg = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, sf = Pg["react-stack-bottom-frame"].bind(Pg), rh = null, Hy = 0, Oe = null, Np, e1 = Np = !1, t1 = {}, l1 = {}, a1 = {};
    ut = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = le(e), o = i || "null";
        if (!t1[o]) {
          t1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = le(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = le(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), $(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var ks = xr(!0), n1 = xr(!1), dh = Ue(null), Rv = Ue(0), eu = Ue(null), ji = null, hh = 1, Cy = 2, zl = Ue(0), tu = 0, lu = 1, Oa = 2, Pl = 4, Dl = 8, rS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, dS = _t.unstable_scheduleCallback, hS = _t.unstable_NormalPriority, Ol = {
      $$typeof: Ga,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, xy = null, jp = 0, $s = 0, mh = null, u1 = H.S;
    H.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && ic(e, t), u1 !== null && u1(e, t);
    };
    var Ws = Ue(null), yh, i1 = /* @__PURE__ */ new Set(), c1 = /* @__PURE__ */ new Set(), Vp = /* @__PURE__ */ new Set(), o1 = /* @__PURE__ */ new Set(), rf = 0, de = null, rt = null, rl = null, zv = !1, vh = !1, Fs = !1, Dv = 0, By = 0, Qc = null, mS = 0, yS = 25, C = null, au = null, Lc = -1, qy = !1, Gp = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }, Vi = {
      readContext: ct,
      use: $t,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useLayoutEffect: Ke,
      useInsertionEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useSyncExternalStore: Ke,
      useId: Ke
    };
    Vi.useCacheRefresh = Ke, Vi.useMemoCache = Ke, Vi.useHostTransitionStatus = Ke, Vi.useFormState = Ke, Vi.useActionState = Ke, Vi.useOptimistic = Ke;
    var df = null, Is = null, hf = null, Ps = null, Ka = null, Ma = null, mf = null;
    df = {
      readContext: function(e) {
        return ct(e);
      },
      use: $t,
      useCallback: function(e, t) {
        return C = "useCallback", Ce(), cc(t), yu(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Ce(), ct(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", Ce(), cc(t), rc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Ce(), cc(a), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", Ce(), cc(t), Na(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Ce(), cc(t), dc(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Ce(), cc(t);
        var a = H.H;
        H.H = Ka;
        try {
          return ri(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Ce();
        var i = H.H;
        H.H = Ka;
        try {
          return So(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", Ce(), Qr(e);
      },
      useState: function(e) {
        C = "useState", Ce();
        var t = H.H;
        H.H = Ka;
        try {
          return Wt(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Ce();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Ce(), _r(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Ce(), Bt();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Ce(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Ce(), sm();
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Ce(), qt();
      }
    }, df.useMemoCache = Ba, df.useHostTransitionStatus = mc, df.useFormState = function(e, t) {
      return C = "useFormState", Ce(), Xf(), sc(e, t);
    }, df.useActionState = function(e, t) {
      return C = "useActionState", Ce(), sc(e, t);
    }, df.useOptimistic = function(e) {
      return C = "useOptimistic", Ce(), we(e);
    }, Is = {
      readContext: function(e) {
        return ct(e);
      },
      use: $t,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), yu(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), ct(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", Q(), rc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", Q(), Na(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), dc(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = H.H;
        H.H = Ka;
        try {
          return ri(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = H.H;
        H.H = Ka;
        try {
          return So(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", Q(), Qr(e);
      },
      useState: function(e) {
        C = "useState", Q();
        var t = H.H;
        H.H = Ka;
        try {
          return Wt(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), _r(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), Bt();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), sm();
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), qt();
      }
    }, Is.useMemoCache = Ba, Is.useHostTransitionStatus = mc, Is.useFormState = function(e, t) {
      return C = "useFormState", Q(), Xf(), sc(e, t);
    }, Is.useActionState = function(e, t) {
      return C = "useActionState", Q(), sc(e, t);
    }, Is.useOptimistic = function(e) {
      return C = "useOptimistic", Q(), we(e);
    }, hf = {
      readContext: function(e) {
        return ct(e);
      },
      use: $t,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), Kf(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), ct(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Q(), nl(2048, Dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), Zf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Q(), nl(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), nl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = H.H;
        H.H = Ma;
        try {
          return hc(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = H.H;
        H.H = Ma;
        try {
          return hu(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Q(), Ge().memoizedState;
      },
      useState: function() {
        C = "useState", Q();
        var e = H.H;
        H.H = Ma;
        try {
          return hu(ql);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), Zr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), Jf();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), qa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), Ge().memoizedState;
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Ge().memoizedState;
      }
    }, hf.useMemoCache = Ba, hf.useHostTransitionStatus = mc, hf.useFormState = function(e) {
      return C = "useFormState", Q(), Xf(), Ro(e);
    }, hf.useActionState = function(e) {
      return C = "useActionState", Q(), Ro(e);
    }, hf.useOptimistic = function(e, t) {
      return C = "useOptimistic", Q(), Ya(e, t);
    }, Ps = {
      readContext: function(e) {
        return ct(e);
      },
      use: $t,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), Kf(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), ct(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Q(), nl(2048, Dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), Zf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Q(), nl(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), nl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = H.H;
        H.H = mf;
        try {
          return hc(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = H.H;
        H.H = mf;
        try {
          return Yl(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Q(), Ge().memoizedState;
      },
      useState: function() {
        C = "useState", Q();
        var e = H.H;
        H.H = mf;
        try {
          return Yl(ql);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), Kr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), D0();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), qa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), Ge().memoizedState;
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Ge().memoizedState;
      }
    }, Ps.useMemoCache = Ba, Ps.useHostTransitionStatus = mc, Ps.useFormState = function(e) {
      return C = "useFormState", Q(), Xf(), Lf(e);
    }, Ps.useActionState = function(e) {
      return C = "useActionState", Q(), Lf(e);
    }, Ps.useOptimistic = function(e, t) {
      return C = "useOptimistic", Q(), wr(e, t);
    }, Ka = {
      readContext: function(e) {
        return hl(), ct(e);
      },
      use: function(e) {
        return Z(), $t(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", Z(), Ce(), yu(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Z(), Ce(), ct(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", Z(), Ce(), rc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Z(), Ce(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", Z(), Ce(), Na(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Z(), Ce(), dc(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Z(), Ce();
        var a = H.H;
        H.H = Ka;
        try {
          return ri(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Z(), Ce();
        var i = H.H;
        H.H = Ka;
        try {
          return So(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", Z(), Ce(), Qr(e);
      },
      useState: function(e) {
        C = "useState", Z(), Ce();
        var t = H.H;
        H.H = Ka;
        try {
          return Wt(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Z(), Ce();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Z(), Ce(), _r(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Z(), Ce(), Bt();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Z(), Ce(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Z(), Ce(), sm();
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Ce(), qt();
      },
      useMemoCache: function(e) {
        return Z(), Ba(e);
      }
    }, Ka.useHostTransitionStatus = mc, Ka.useFormState = function(e, t) {
      return C = "useFormState", Z(), Ce(), sc(e, t);
    }, Ka.useActionState = function(e, t) {
      return C = "useActionState", Z(), Ce(), sc(e, t);
    }, Ka.useOptimistic = function(e) {
      return C = "useOptimistic", Z(), Ce(), we(e);
    }, Ma = {
      readContext: function(e) {
        return hl(), ct(e);
      },
      use: function(e) {
        return Z(), $t(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", Z(), Q(), Kf(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Z(), Q(), ct(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Z(), Q(), nl(2048, Dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Z(), Q(), Zf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Z(), Q(), nl(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Z(), Q(), nl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Z(), Q();
        var a = H.H;
        H.H = Ma;
        try {
          return hc(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Z(), Q();
        var i = H.H;
        H.H = Ma;
        try {
          return hu(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Z(), Q(), Ge().memoizedState;
      },
      useState: function() {
        C = "useState", Z(), Q();
        var e = H.H;
        H.H = Ma;
        try {
          return hu(ql);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Z(), Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Z(), Q(), Zr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Z(), Q(), Jf();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Z(), Q(), qa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Z(), Q(), Ge().memoizedState;
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Ge().memoizedState;
      },
      useMemoCache: function(e) {
        return Z(), Ba(e);
      }
    }, Ma.useHostTransitionStatus = mc, Ma.useFormState = function(e) {
      return C = "useFormState", Z(), Q(), Ro(e);
    }, Ma.useActionState = function(e) {
      return C = "useActionState", Z(), Q(), Ro(e);
    }, Ma.useOptimistic = function(e, t) {
      return C = "useOptimistic", Z(), Q(), Ya(e, t);
    }, mf = {
      readContext: function(e) {
        return hl(), ct(e);
      },
      use: function(e) {
        return Z(), $t(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", Z(), Q(), Kf(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Z(), Q(), ct(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Z(), Q(), nl(2048, Dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Z(), Q(), Zf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Z(), Q(), nl(4, Oa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Z(), Q(), nl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Z(), Q();
        var a = H.H;
        H.H = Ma;
        try {
          return hc(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Z(), Q();
        var i = H.H;
        H.H = Ma;
        try {
          return Yl(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Z(), Q(), Ge().memoizedState;
      },
      useState: function() {
        C = "useState", Z(), Q();
        var e = H.H;
        H.H = Ma;
        try {
          return Yl(ql);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Z(), Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Z(), Q(), Kr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Z(), Q(), D0();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Z(), Q(), qa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Z(), Q(), Ge().memoizedState;
      },
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Ge().memoizedState;
      },
      useMemoCache: function(e) {
        return Z(), Ba(e);
      }
    }, mf.useHostTransitionStatus = mc, mf.useFormState = function(e) {
      return C = "useFormState", Z(), Q(), Lf(e);
    }, mf.useActionState = function(e) {
      return C = "useActionState", Z(), Q(), Lf(e);
    }, mf.useOptimistic = function(e, t) {
      return C = "useOptimistic", Z(), Q(), wr(e, t);
    };
    var f1 = {}, s1 = /* @__PURE__ */ new Set(), r1 = /* @__PURE__ */ new Set(), d1 = /* @__PURE__ */ new Set(), h1 = /* @__PURE__ */ new Set(), m1 = /* @__PURE__ */ new Set(), y1 = /* @__PURE__ */ new Set(), v1 = /* @__PURE__ */ new Set(), p1 = /* @__PURE__ */ new Set(), g1 = /* @__PURE__ */ new Set(), b1 = /* @__PURE__ */ new Set();
    Object.freeze(f1);
    var wp = {
      isMounted: function(e) {
        var t = Al;
        if (t !== null && wa && t.tag === 1) {
          var a = t.stateNode;
          a._warnedAboutRefsInRender || console.error(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            le(t) || "A component"
          ), a._warnedAboutRefsInRender = !0;
        }
        return (e = e._reactInternals) ? K(e) === e : !1;
      },
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Eu(i);
        o.payload = t, a != null && (hm(a), o.callback = a), t = vi(e, o, i), t !== null && (ft(t, e, i), Ho(t, e, i)), Be(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Eu(i);
        o.tag = U1, o.payload = t, a != null && (hm(a), o.callback = a), t = vi(e, o, i), t !== null && (ft(t, e, i), Ho(t, e, i)), Be(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Kl(e), i = Eu(a);
        i.tag = H1, t != null && (hm(t), i.callback = t), t = vi(e, i, a), t !== null && (ft(t, e, a), Ho(t, e, a)), J !== null && typeof J.markForceUpdateScheduled == "function" && J.markForceUpdateScheduled(e, a);
      }
    }, Ov = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof Ch == "object" && typeof Ch.emit == "function") {
        Ch.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, ph = null, Xp = null, S1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Gl = !1, T1 = {}, E1 = {}, A1 = {}, R1 = {}, gh = !1, z1 = {}, Qp = {}, Lp = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    }, D1 = !1, _p = Ue(null), Zp = Ue(null), O1 = {}, Mv = null, bh = null, Sh = !1, M1 = 0, U1 = 1, H1 = 2, Kp = 3, yf = !1, C1 = !1, Jp = null, kp = !1, x1 = null;
    x1 = /* @__PURE__ */ new Set();
    var _c = !1, Kt = !1, $p = !1, B1 = typeof WeakSet == "function" ? WeakSet : Set, wl = null, Th = null, Eh = null, q1 = !1, dl = null, pn = !1, Fu = null, Yy = 8192, Y1 = !1;
    try {
      var N1 = Object.preventExtensions({});
    } catch {
      Y1 = !0;
    }
    var vS = {
      getCacheForType: function(e) {
        var t = ct(Ol), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Al;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Ny = Symbol.for;
      Ny("selector.component"), Ny("selector.has_pseudo_class"), Ny("selector.role"), Ny("selector.test_id"), Ny("selector.text");
    }
    var pS = [], gS = typeof WeakMap == "function" ? WeakMap : Map, gn = 0, Ua = 2, Zc = 4, Kc = 0, jy = 1, Ah = 2, Wp = 3, er = 4, j1 = 5, Uv = 6, Ot = gn, mt = null, Ye = null, Ve = 0, Ja = 0, Vy = 1, tr = 2, Gy = 3, V1 = 4, Fp = 5, Rh = 6, wy = 7, Ip = 8, yt = Ja, bn = null, Jc = !1, zh = !1, Pp = !1, Gi = 0, Jt = Kc, vf = 0, pf = 0, eg = 0, Sn = 0, lr = 0, Xy = null, Iu = null, Hv = !1, tg = 0, G1 = 300, Cv = 1 / 0, w1 = 500, Qy = null, gf = null, xv = !1, ar = null, Ly = 0, lg = 0, ag = null, bS = 50, _y = 0, ng = null, ug = !1, Bv = !1, SS = 50, nr = 0, Zy = null, Dh = !1, X1 = 0, TS = 1, ES = 2, qv = null, Q1 = !1, L1 = /* @__PURE__ */ new Set(), AS = {}, Yv = null, Oh = null, ig = !1, cg = !1, Nv = !1, og = !1, ur = 0, fg = {};
    (function() {
      for (var e = 0; e < Vg.length; e++) {
        var t = Vg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), en(a, "on" + t);
      }
      en(Bg, "onAnimationEnd"), en(qg, "onAnimationIteration"), en(Yg, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(nS, "onTransitionRun"), en(uS, "onTransitionStart"), en(iS, "onTransitionCancel"), en(Ng, "onTransitionEnd");
    })(), lo("onMouseEnter", ["mouseout", "mouseover"]), lo("onMouseLeave", ["mouseout", "mouseover"]), lo("onPointerEnter", ["pointerout", "pointerover"]), lo("onPointerLeave", ["pointerout", "pointerover"]), Fa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Fa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Fa("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Fa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Fa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Fa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Ky = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), sg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ky)
    ), jv = "_reactListening" + Math.random().toString(36).slice(2), _1 = !1, Z1 = !1, Vv = !1, K1 = !1, Gv = !1, wv = !1, J1 = !1, Xv = {}, RS = /\r\n?/g, zS = /\u0000|\uFFFD/g, ir = "http://www.w3.org/1999/xlink", rg = "http://www.w3.org/XML/1998/namespace", DS = "javascript:throw new Error('React form unexpectedly submitted.')", OS = "suppressHydrationWarning", Qv = "$", Lv = "/$", cr = "$?", or = "$!", dg = "F!", k1 = "F", MS = "style", kc = 0, Mh = 1, _v = 2, hg = null, mg = null, $1 = { dialog: !0, webview: !0 }, yg = null, W1 = typeof setTimeout == "function" ? setTimeout : void 0, US = typeof clearTimeout == "function" ? clearTimeout : void 0, vg = -1, F1 = typeof Promise == "function" ? Promise : void 0, HS = typeof queueMicrotask == "function" ? queueMicrotask : typeof F1 < "u" ? function(e) {
      return F1.resolve(null).then(e).catch(st);
    } : W1, fr = 0, Jy = 1, I1 = 2, P1 = 3, nu = 4, uu = /* @__PURE__ */ new Map(), eb = /* @__PURE__ */ new Set(), $c = ht.d;
    ht.d = {
      f: function() {
        var e = $c.f(), t = Ai();
        return e || t;
      },
      r: function(e) {
        var t = _i(e);
        t !== null && t.tag === 5 && t.type === "form" ? qn(t) : $c.r(e);
      },
      D: function(e) {
        $c.D(e), Bd("dns-prefetch", e, null);
      },
      C: function(e, t) {
        $c.C(e, t), Bd("preconnect", e, t);
      },
      L: function(e, t, a) {
        $c.L(e, t, a);
        var i = Uh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + pa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + pa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + pa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + pa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Lt(e);
              break;
            case "script":
              f = Ko(e);
          }
          uu.has(f) || (e = he(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), uu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Zo(f)
          ) || t === "script" && i.querySelector(Ra(f)) || (t = i.createElement("link"), cl(t, "link", e), Qt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        $c.m(e, t);
        var a = Uh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + pa(i) + '"][href="' + pa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Ko(e);
          }
          if (!uu.has(f) && (e = he({ rel: "modulepreload", href: e }, t), uu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ra(f)))
                  return;
            }
            i = a.createElement("link"), cl(i, "link", e), Qt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        $c.X(e, t);
        var a = Uh;
        if (a && e) {
          var i = Zi(a).hoistableScripts, o = Ko(e), f = i.get(o);
          f || (f = a.querySelector(
            Ra(o)
          ), f || (e = he({ src: e, async: !0 }, t), (t = uu.get(o)) && Yd(e, t), f = a.createElement("script"), Qt(f), cl(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        $c.S(e, t, a);
        var i = Uh;
        if (i && e) {
          var o = Zi(i).hoistableStyles, f = Lt(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: fr, preload: null };
            if (d = i.querySelector(
              Zo(f)
            ))
              h.loading = Jy | nu;
            else {
              e = he(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = uu.get(f)) && Di(e, a);
              var y = d = i.createElement("link");
              Qt(y), cl(y, "link", e), y._p = new Promise(function(p, O) {
                y.onload = p, y.onerror = O;
              }), y.addEventListener("load", function() {
                h.loading |= Jy;
              }), y.addEventListener("error", function() {
                h.loading |= I1;
              }), h.loading |= nu, Jo(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        $c.M(e, t);
        var a = Uh;
        if (a && e) {
          var i = Zi(a).hoistableScripts, o = Ko(e), f = i.get(o);
          f || (f = a.querySelector(
            Ra(o)
          ), f || (e = he({ src: e, async: !0, type: "module" }, t), (t = uu.get(o)) && Yd(e, t), f = a.createElement("script"), Qt(f), cl(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Uh = typeof document > "u" ? null : document, Zv = null, ky = null, pg = null, Kv = null, sr = vp, $y = {
      $$typeof: Ga,
      Provider: null,
      Consumer: null,
      _currentValue: sr,
      _currentValue2: sr,
      _threadCount: 0
    }, tb = "%c%s%c ", lb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", ab = "", Jv = " ", nb = Function.prototype.bind, ub = !1, ib = null, cb = null, ob = null, fb = null, sb = null, rb = null, db = null, hb = null, mb = null;
    ib = function(e, t, a, i) {
      t = se(e, t), t !== null && (a = ve(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = he({}, e.memoizedProps), a = xl(e, 2), a !== null && ft(a, e, 2));
    }, cb = function(e, t, a) {
      t = se(e, t), t !== null && (a = At(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = he({}, e.memoizedProps), a = xl(e, 2), a !== null && ft(a, e, 2));
    }, ob = function(e, t, a, i) {
      t = se(e, t), t !== null && (a = x(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = he({}, e.memoizedProps), a = xl(e, 2), a !== null && ft(a, e, 2));
    }, fb = function(e, t, a) {
      e.pendingProps = ve(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = xl(e, 2), t !== null && ft(t, e, 2);
    }, sb = function(e, t) {
      e.pendingProps = At(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = xl(e, 2), t !== null && ft(t, e, 2);
    }, rb = function(e, t, a) {
      e.pendingProps = x(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = xl(e, 2), t !== null && ft(t, e, 2);
    }, db = function(e) {
      var t = xl(e, 2);
      t !== null && ft(t, e, 2);
    }, hb = function(e) {
      vt = e;
    }, mb = function(e) {
      Rt = e;
    };
    var kv = !0, $v = null, gg = !1, bf = null, Sf = null, Tf = null, Wy = /* @__PURE__ */ new Map(), Fy = /* @__PURE__ */ new Map(), Ef = [], CS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Wv = null;
    if (Ms.prototype.render = Os.prototype.render = function(e, t) {
      var a = this._internalRoot;
      if (a === null) throw Error("Cannot update an unmounted root.");
      typeof t == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : wt(t) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof t < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), t = a.current;
      var i = Kl(t);
      Cc(
        t,
        i,
        e,
        a,
        null,
        null
      );
    }, Ms.prototype.unmount = Os.prototype.unmount = function(e) {
      if (typeof e == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Ot & (Ua | Zc)) !== gn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Im(
          null,
          e,
          null,
          null
        ), Ai(), t[yn] = null;
      }
    }, Ms.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = zf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Ef.length && t !== 0 && t < Ef[a].priority; a++) ;
        Ef.splice(a, 0, e), a === 0 && mn(e);
      }
    }, function() {
      var e = Us.version;
      if (e !== "19.0.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), ht.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = W(t), e = e !== null ? ie(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        findFiberByHostInstance: Wa,
        reconcilerVersion: "19.0.0"
      };
      return e.overrideHookState = ib, e.overrideHookStateDeletePath = cb, e.overrideHookStateRenamePath = ob, e.overrideProps = fb, e.overridePropsDeletePath = sb, e.overridePropsRenamePath = rb, e.scheduleUpdate = db, e.setErrorHandler = hb, e.setSuspenseHandler = mb, e.scheduleRefresh = tt, e.scheduleRoot = Ne, e.setRefreshHandler = Fe, e.getCurrentFiber = rp, e.getLaneLabelMap = ev, e.injectProfilingHooks = Pc, Tn(e);
    }() && kn && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var yb = window.location.protocol;
      /^(https?|file):$/.test(yb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (yb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    t0.createRoot = function(e, t) {
      if (!wt(e))
        throw Error("Target container is not a DOM element.");
      ly(e);
      var a = !1, i = "", o = mm, f = bu, d = Te, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Ui && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = Fm(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[yn] = t.current, Ri(
        e.nodeType === 8 ? e.parentNode : e
      ), new Os(t);
    }, t0.hydrateRoot = function(e, t, a) {
      if (!wt(e))
        throw Error("Target container is not a DOM element.");
      ly(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = mm, d = bu, h = Te, y = null, p = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (y = a.unstable_transitionCallbacks), a.formState !== void 0 && (p = a.formState)), t = Fm(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        y,
        p
      ), t.context = P0(null), a = t.current, i = Kl(a), o = Eu(i), o.callback = null, vi(a, o, i), t.current.lanes = i, Rn(t, i), rn(t), e[yn] = t.current, Ri(e), new Ms(t);
    }, t0.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), t0;
}
var zb;
function KS() {
  if (zb) return Pv.exports;
  zb = 1;
  var B = {};
  function se() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (B.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(se);
      } catch (ve) {
        console.error(ve);
      }
    }
  }
  return B.NODE_ENV === "production" ? (se(), Pv.exports = _S()) : Pv.exports = ZS(), Pv.exports;
}
var JS = KS();
const kS = /* @__PURE__ */ qS(JS), $S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", WS = ({ onQuestionClick: B }) => {
  const se = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ Qe.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ Qe.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ Qe.jsx("ul", { children: se.map((ve, x) => /* @__PURE__ */ Qe.jsx("li", { onClick: () => B(ve), children: ve }, x)) })
  ] });
}, FS = ({ message: B }) => /* @__PURE__ */ Qe.jsx("div", { className: `message ${B.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ Qe.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ Qe.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: B.text } }) }) }), xb = () => {
  const [B, se] = Fv([]), [ve, x] = Fv(""), [Me, At] = Fv(!1), [Rt, vt] = Fv(!0), be = BS(null);
  vb(() => {
    Z();
  }, []);
  const Z = async () => {
    try {
      const Ne = await getChatHistory();
      if (Ne.STATUS) {
        const tt = Ne.RSP.map((Fe) => ({
          id: Fe.id,
          text: Fe.message,
          isUser: Fe.role === "user",
          status: "sent",
          timestamp: new Date(Fe.created_at)
        }));
        se(tt);
      }
    } catch (Ne) {
      console.error("Error cargando historial:", Ne);
    } finally {
      vt(!1);
    }
  }, hl = () => {
    if (be.current) {
      const { scrollHeight: Ne } = be.current;
      be.current.scrollTo({
        top: Ne,
        behavior: "smooth"
      });
    }
  };
  vb(() => {
    hl();
  }, [B, Me]);
  const zt = async (Ne = ve) => {
    if (Ne.trim() === "") return;
    const tt = {
      id: Date.now().toString(),
      text: Ne,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    se((Fe) => [...Fe, tt]), x(""), At(!0);
    try {
      const Fe = await sendMessageApi({ message: Ne });
      if (Fe.STATUS) {
        const wt = {
          id: (Date.now() + 1).toString(),
          text: Fe.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        se((pe) => [...pe, wt]);
      } else {
        x(Ne);
        const wt = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        se((pe) => [...pe, wt]);
      }
    } catch {
      se(
        (wt) => wt.map(
          (pe) => pe.id === tt.id ? { ...pe, status: "error" } : pe
        )
      );
    } finally {
      At(!1);
    }
  }, ut = (Ne) => {
    Ne.preventDefault(), zt();
  }, lt = (Ne) => {
    zt(Ne);
  };
  return /* @__PURE__ */ Qe.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ Qe.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ Qe.jsx("div", { children: /* @__PURE__ */ Qe.jsx("img", { src: $S, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ Qe.jsx("div", { children: /* @__PURE__ */ Qe.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ Qe.jsx("div", { ref: be, className: "messages-container", children: Rt ? /* @__PURE__ */ Qe.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ Qe.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ Qe.jsx("div", { className: "dot" }),
        /* @__PURE__ */ Qe.jsx("div", { className: "dot" }),
        /* @__PURE__ */ Qe.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ Qe.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ Qe.jsxs(Qe.Fragment, { children: [
      B.length === 0 && /* @__PURE__ */ Qe.jsx(WS, { onQuestionClick: lt }),
      B.map((Ne) => /* @__PURE__ */ Qe.jsx(FS, { message: Ne }, Ne.id)),
      Me && /* @__PURE__ */ Qe.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ Qe.jsx("span", {}),
        /* @__PURE__ */ Qe.jsx("span", {}),
        /* @__PURE__ */ Qe.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ Qe.jsxs("form", { onSubmit: ut, className: "message-input", children: [
      /* @__PURE__ */ Qe.jsx(
        "input",
        {
          type: "text",
          value: ve,
          onChange: (Ne) => x(Ne.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: Me || Rt,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ Qe.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: Me || Rt || ve.trim() === "",
          children: /* @__PURE__ */ Qe.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
};
window.ChatBot = (B) => {
  const se = document.getElementById(B);
  se && kS.createRoot(se).render(/* @__PURE__ */ Qe.jsx(xb, {}));
};
function eT() {
  return /* @__PURE__ */ Qe.jsx("div", { children: /* @__PURE__ */ Qe.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ Qe.jsx(xb, {}) }) });
}
export {
  eT as default
};
