import t0, { useState as hs, useRef as AT, useEffect as Kv } from "react";
import CT from "react-dom";
function DT(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var wd = { exports: {} }, vi = {}, $v;
function zT() {
  if ($v) return vi;
  $v = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    function E(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === L ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case ma:
          return "Fragment";
        case pn:
          return "Portal";
        case Bt:
          return "Profiler";
        case Ka:
          return "StrictMode";
        case an:
          return "Suspense";
        case ln:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case yn:
            return (d.displayName || "Context") + ".Provider";
          case nn:
            return (d._context.displayName || "Context") + ".Consumer";
          case gn:
            var x = d.render;
            return d = d.displayName, d || (d = x.displayName || x.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case U:
            return x = d.displayName || null, x !== null ? x : E(d.type) || "Memo";
          case qt:
            x = d._payload, d = d._init;
            try {
              return E(d(x));
            } catch {
            }
        }
      return null;
    }
    function P(d) {
      return "" + d;
    }
    function Se(d) {
      try {
        P(d);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var M = x.error, _ = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return M.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), P(d);
      }
    }
    function Te() {
    }
    function lt() {
      if (Ve === 0) {
        mt = console.log, vn = console.info, Ql = console.warn, $a = console.error, Wa = console.group, Fa = console.groupCollapsed, pa = console.groupEnd;
        var d = {
          configurable: !0,
          enumerable: !0,
          value: Te,
          writable: !0
        };
        Object.defineProperties(console, {
          info: d,
          log: d,
          warn: d,
          error: d,
          group: d,
          groupCollapsed: d,
          groupEnd: d
        });
      }
      Ve++;
    }
    function wt() {
      if (Ve--, Ve === 0) {
        var d = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: te({}, d, { value: mt }),
          info: te({}, d, { value: vn }),
          warn: te({}, d, { value: Ql }),
          error: te({}, d, { value: $a }),
          group: te({}, d, { value: Wa }),
          groupCollapsed: te({}, d, { value: Fa }),
          groupEnd: te({}, d, { value: pa })
        });
      }
      0 > Ve && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Ie(d) {
      if (le === void 0)
        try {
          throw Error();
        } catch (M) {
          var x = M.stack.trim().match(/\n( *(at )?)/);
          le = x && x[1] || "", Zl = -1 < M.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < M.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + le + d + Zl;
    }
    function Ce(d, x) {
      if (!d || ya) return "";
      var M = Ku.get(d);
      if (M !== void 0) return M;
      ya = !0, M = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var _ = null;
      _ = ee.H, ee.H = null, lt();
      try {
        var Le = {
          DetermineComponentFrameRoot: function() {
            try {
              if (x) {
                var Yt = function() {
                  throw Error();
                };
                if (Object.defineProperty(Yt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Yt, []);
                  } catch (un) {
                    var Sn = un;
                  }
                  Reflect.construct(d, [], Yt);
                } else {
                  try {
                    Yt.call();
                  } catch (un) {
                    Sn = un;
                  }
                  d.call(Yt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (un) {
                  Sn = un;
                }
                (Yt = d()) && typeof Yt.catch == "function" && Yt.catch(function() {
                });
              }
            } catch (un) {
              if (un && Sn && typeof un.stack == "string")
                return [un.stack, Sn.stack];
            }
            return [null, null];
          }
        };
        Le.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var me = Object.getOwnPropertyDescriptor(
          Le.DetermineComponentFrameRoot,
          "name"
        );
        me && me.configurable && Object.defineProperty(
          Le.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var w = Le.DetermineComponentFrameRoot(), pt = w[0], jt = w[1];
        if (pt && jt) {
          var Ze = pt.split(`
`), bn = jt.split(`
`);
          for (w = me = 0; me < Ze.length && !Ze[me].includes(
            "DetermineComponentFrameRoot"
          ); )
            me++;
          for (; w < bn.length && !bn[w].includes(
            "DetermineComponentFrameRoot"
          ); )
            w++;
          if (me === Ze.length || w === bn.length)
            for (me = Ze.length - 1, w = bn.length - 1; 1 <= me && 0 <= w && Ze[me] !== bn[w]; )
              w--;
          for (; 1 <= me && 0 <= w; me--, w--)
            if (Ze[me] !== bn[w]) {
              if (me !== 1 || w !== 1)
                do
                  if (me--, w--, 0 > w || Ze[me] !== bn[w]) {
                    var va = `
` + Ze[me].replace(
                      " at new ",
                      " at "
                    );
                    return d.displayName && va.includes("<anonymous>") && (va = va.replace("<anonymous>", d.displayName)), typeof d == "function" && Ku.set(d, va), va;
                  }
                while (1 <= me && 0 <= w);
              break;
            }
        }
      } finally {
        ya = !1, ee.H = _, wt(), Error.prepareStackTrace = M;
      }
      return Ze = (Ze = d ? d.displayName || d.name : "") ? Ie(Ze) : "", typeof d == "function" && Ku.set(d, Ze), Ze;
    }
    function C(d) {
      if (d == null) return "";
      if (typeof d == "function") {
        var x = d.prototype;
        return Ce(
          d,
          !(!x || !x.isReactComponent)
        );
      }
      if (typeof d == "string") return Ie(d);
      switch (d) {
        case an:
          return Ie("Suspense");
        case ln:
          return Ie("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case gn:
            return d = Ce(d.render, !1), d;
          case U:
            return C(d.type);
          case qt:
            x = d._payload, d = d._init;
            try {
              return C(d(x));
            } catch {
            }
        }
      return "";
    }
    function Rt() {
      var d = ee.A;
      return d === null ? null : d.getOwner();
    }
    function Ln(d) {
      if (I.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function Nn(d, x) {
      function M() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: M,
        configurable: !0
      });
    }
    function ht() {
      var d = E(this.type);
      return Si[d] || (Si[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function _a(d, x, M, _, Le, me) {
      return M = me.ref, d = {
        $$typeof: H,
        type: d,
        key: x,
        props: me,
        _owner: Le
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: ht
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function K(d, x, M, _, Le, me) {
      if (typeof d == "string" || typeof d == "function" || d === ma || d === Bt || d === Ka || d === an || d === ln || d === D || typeof d == "object" && d !== null && (d.$$typeof === qt || d.$$typeof === U || d.$$typeof === yn || d.$$typeof === nn || d.$$typeof === gn || d.$$typeof === ne || d.getModuleId !== void 0)) {
        var w = x.children;
        if (w !== void 0)
          if (_)
            if (ut(w)) {
              for (_ = 0; _ < w.length; _++)
                Ye(w[_], d);
              Object.freeze && Object.freeze(w);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else Ye(w, d);
      } else
        w = "", (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), d === null ? _ = "null" : ut(d) ? _ = "array" : d !== void 0 && d.$$typeof === H ? (_ = "<" + (E(d.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof d, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          _,
          w
        );
      if (I.call(x, "key")) {
        w = E(d);
        var pt = Object.keys(x).filter(function(Ze) {
          return Ze !== "key";
        });
        _ = 0 < pt.length ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}", $u[w + _] || (pt = 0 < pt.length ? "{" + pt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          w,
          pt,
          w
        ), $u[w + _] = !0);
      }
      if (w = null, M !== void 0 && (Se(M), w = "" + M), Ln(x) && (Se(x.key), w = "" + x.key), "key" in x) {
        M = {};
        for (var jt in x)
          jt !== "key" && (M[jt] = x[jt]);
      } else M = x;
      return w && Nn(
        M,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), _a(d, w, me, Le, Rt(), M);
    }
    function Ye(d, x) {
      if (typeof d == "object" && d && d.$$typeof !== ps) {
        if (ut(d))
          for (var M = 0; M < d.length; M++) {
            var _ = d[M];
            Me(_) && ue(_, x);
          }
        else if (Me(d))
          d._store && (d._store.validated = 1);
        else if (d === null || typeof d != "object" ? M = null : (M = Y && d[Y] || d["@@iterator"], M = typeof M == "function" ? M : null), typeof M == "function" && M !== d.entries && (M = M.call(d), M !== d))
          for (; !(d = M.next()).done; )
            Me(d.value) && ue(d.value, x);
      }
    }
    function Me(d) {
      return typeof d == "object" && d !== null && d.$$typeof === H;
    }
    function ue(d, x) {
      if (d._store && !d._store.validated && d.key == null && (d._store.validated = 1, x = B(x), !ga[x])) {
        ga[x] = !0;
        var M = "";
        d && d._owner != null && d._owner !== Rt() && (M = null, typeof d._owner.tag == "number" ? M = E(d._owner.type) : typeof d._owner.name == "string" && (M = d._owner.name), M = " It was passed a child from " + M + ".");
        var _ = ee.getCurrentStack;
        ee.getCurrentStack = function() {
          var Le = C(d.type);
          return _ && (Le += _() || ""), Le;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          x,
          M
        ), ee.getCurrentStack = _;
      }
    }
    function B(d) {
      var x = "", M = Rt();
      return M && (M = E(M.type)) && (x = `

Check the render method of \`` + M + "`."), x || (d = E(d)) && (x = `

Check the top-level render call using <` + d + ">."), x;
    }
    var Gn = t0, H = Symbol.for("react.transitional.element"), pn = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), Bt = Symbol.for("react.profiler"), nn = Symbol.for("react.consumer"), yn = Symbol.for("react.context"), gn = Symbol.for("react.forward_ref"), an = Symbol.for("react.suspense"), ln = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), Y = Symbol.iterator, L = Symbol.for("react.client.reference"), ee = Gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, te = Object.assign, ne = Symbol.for("react.client.reference"), ut = Array.isArray, Ve = 0, mt, vn, Ql, $a, Wa, Fa, pa;
    Te.__reactDisabledLog = !0;
    var le, Zl, ya = !1, Ku = new (typeof WeakMap == "function" ? WeakMap : Map)(), ps = Symbol.for("react.client.reference"), re, Si = {}, $u = {}, ga = {};
    vi.Fragment = ma, vi.jsx = function(d, x, M, _, Le) {
      return K(d, x, M, !1, _, Le);
    }, vi.jsxs = function(d, x, M, _, Le) {
      return K(d, x, M, !0, _, Le);
    };
  }(), vi;
}
var Wv;
function OT() {
  return Wv || (Wv = 1, wd.exports = zT()), wd.exports;
}
var $ = OT(), Bd = { exports: {} };
function xT(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var n0 = { exports: {} }, xe = n0.exports = {}, Yn, Vn;
function Vd() {
  throw new Error("setTimeout has not been defined");
}
function Ld() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Yn = setTimeout : Yn = Vd;
  } catch {
    Yn = Vd;
  }
  try {
    typeof clearTimeout == "function" ? Vn = clearTimeout : Vn = Ld;
  } catch {
    Vn = Ld;
  }
})();
function a0(E) {
  if (Yn === setTimeout)
    return setTimeout(E, 0);
  if ((Yn === Vd || !Yn) && setTimeout)
    return Yn = setTimeout, setTimeout(E, 0);
  try {
    return Yn(E, 0);
  } catch {
    try {
      return Yn.call(null, E, 0);
    } catch {
      return Yn.call(this, E, 0);
    }
  }
}
function MT(E) {
  if (Vn === clearTimeout)
    return clearTimeout(E);
  if ((Vn === Ld || !Vn) && clearTimeout)
    return Vn = clearTimeout, clearTimeout(E);
  try {
    return Vn(E);
  } catch {
    try {
      return Vn.call(null, E);
    } catch {
      return Vn.call(this, E);
    }
  }
}
var da = [], _u = !1, Xl, ms = -1;
function UT() {
  !_u || !Xl || (_u = !1, Xl.length ? da = Xl.concat(da) : ms = -1, da.length && l0());
}
function l0() {
  if (!_u) {
    var E = a0(UT);
    _u = !0;
    for (var P = da.length; P; ) {
      for (Xl = da, da = []; ++ms < P; )
        Xl && Xl[ms].run();
      ms = -1, P = da.length;
    }
    Xl = null, _u = !1, MT(E);
  }
}
xe.nextTick = function(E) {
  var P = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var Se = 1; Se < arguments.length; Se++)
      P[Se - 1] = arguments[Se];
  da.push(new u0(E, P)), da.length === 1 && !_u && a0(l0);
};
function u0(E, P) {
  this.fun = E, this.array = P;
}
u0.prototype.run = function() {
  this.fun.apply(null, this.array);
};
xe.title = "browser";
xe.browser = !0;
xe.env = {};
xe.argv = [];
xe.version = "";
xe.versions = {};
function ha() {
}
xe.on = ha;
xe.addListener = ha;
xe.once = ha;
xe.off = ha;
xe.removeListener = ha;
xe.removeAllListeners = ha;
xe.emit = ha;
xe.prependListener = ha;
xe.prependOnceListener = ha;
xe.listeners = function(E) {
  return [];
};
xe.binding = function(E) {
  throw new Error("process.binding is not supported");
};
xe.cwd = function() {
  return "/";
};
xe.chdir = function(E) {
  throw new Error("process.chdir is not supported");
};
xe.umask = function() {
  return 0;
};
var HT = n0.exports;
const qd = /* @__PURE__ */ xT(HT);
var jd = { exports: {} }, Yd = {}, Fv;
function wT() {
  return Fv || (Fv = 1, function(E) {
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      function P() {
        if (nn) {
          var D = E.unstable_now();
          an = D;
          var Y = !0;
          try {
            e: {
              H = !1, pn && (pn = !1, Ka(yn), yn = -1), Gn = !0;
              var L = B;
              try {
                t: {
                  for (Ie(D), ue = Te(K); ue !== null && !(ue.expirationTime > D && C()); ) {
                    var ee = ue.callback;
                    if (typeof ee == "function") {
                      ue.callback = null, B = ue.priorityLevel;
                      var I = ee(
                        ue.expirationTime <= D
                      );
                      if (D = E.unstable_now(), typeof I == "function") {
                        ue.callback = I, Ie(D), Y = !0;
                        break t;
                      }
                      ue === Te(K) && lt(K), Ie(D);
                    } else lt(K);
                    ue = Te(K);
                  }
                  if (ue !== null) Y = !0;
                  else {
                    var te = Te(Ye);
                    te !== null && Ln(
                      Ce,
                      te.startTime - D
                    ), Y = !1;
                  }
                }
                break e;
              } finally {
                ue = null, B = L, Gn = !1;
              }
              Y = void 0;
            }
          } finally {
            Y ? ln() : nn = !1;
          }
        }
      }
      function Se(D, Y) {
        var L = D.length;
        D.push(Y);
        e: for (; 0 < L; ) {
          var ee = L - 1 >>> 1, I = D[ee];
          if (0 < wt(I, Y))
            D[ee] = Y, D[L] = I, L = ee;
          else break e;
        }
      }
      function Te(D) {
        return D.length === 0 ? null : D[0];
      }
      function lt(D) {
        if (D.length === 0) return null;
        var Y = D[0], L = D.pop();
        if (L !== Y) {
          D[0] = L;
          e: for (var ee = 0, I = D.length, te = I >>> 1; ee < te; ) {
            var ne = 2 * (ee + 1) - 1, ut = D[ne], Ve = ne + 1, mt = D[Ve];
            if (0 > wt(ut, L))
              Ve < I && 0 > wt(mt, ut) ? (D[ee] = mt, D[Ve] = L, ee = Ve) : (D[ee] = ut, D[ne] = L, ee = ne);
            else if (Ve < I && 0 > wt(mt, L))
              D[ee] = mt, D[Ve] = L, ee = Ve;
            else break e;
          }
        }
        return Y;
      }
      function wt(D, Y) {
        var L = D.sortIndex - Y.sortIndex;
        return L !== 0 ? L : D.id - Y.id;
      }
      function Ie(D) {
        for (var Y = Te(Ye); Y !== null; ) {
          if (Y.callback === null) lt(Ye);
          else if (Y.startTime <= D)
            lt(Ye), Y.sortIndex = Y.expirationTime, Se(K, Y);
          else break;
          Y = Te(Ye);
        }
      }
      function Ce(D) {
        if (pn = !1, Ie(D), !H)
          if (Te(K) !== null)
            H = !0, Rt();
          else {
            var Y = Te(Ye);
            Y !== null && Ln(
              Ce,
              Y.startTime - D
            );
          }
      }
      function C() {
        return !(E.unstable_now() - an < gn);
      }
      function Rt() {
        nn || (nn = !0, ln());
      }
      function Ln(D, Y) {
        yn = ma(function() {
          D(E.unstable_now());
        }, Y);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Nn = performance;
        E.unstable_now = function() {
          return Nn.now();
        };
      } else {
        var ht = Date, _a = ht.now();
        E.unstable_now = function() {
          return ht.now() - _a;
        };
      }
      var K = [], Ye = [], Me = 1, ue = null, B = 3, Gn = !1, H = !1, pn = !1, ma = typeof setTimeout == "function" ? setTimeout : null, Ka = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null, nn = !1, yn = -1, gn = 5, an = -1;
      if (typeof Bt == "function")
        var ln = function() {
          Bt(P);
        };
      else if (typeof MessageChannel < "u") {
        var U = new MessageChannel(), qt = U.port2;
        U.port1.onmessage = P, ln = function() {
          qt.postMessage(null);
        };
      } else
        ln = function() {
          ma(P, 0);
        };
      E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, E.unstable_continueExecution = function() {
        H || Gn || (H = !0, Rt());
      }, E.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : gn = 0 < D ? Math.floor(1e3 / D) : 5;
      }, E.unstable_getCurrentPriorityLevel = function() {
        return B;
      }, E.unstable_getFirstCallbackNode = function() {
        return Te(K);
      }, E.unstable_next = function(D) {
        switch (B) {
          case 1:
          case 2:
          case 3:
            var Y = 3;
            break;
          default:
            Y = B;
        }
        var L = B;
        B = Y;
        try {
          return D();
        } finally {
          B = L;
        }
      }, E.unstable_pauseExecution = function() {
      }, E.unstable_requestPaint = function() {
      }, E.unstable_runWithPriority = function(D, Y) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var L = B;
        B = D;
        try {
          return Y();
        } finally {
          B = L;
        }
      }, E.unstable_scheduleCallback = function(D, Y, L) {
        var ee = E.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ee + L : ee) : L = ee, D) {
          case 1:
            var I = -1;
            break;
          case 2:
            I = 250;
            break;
          case 5:
            I = 1073741823;
            break;
          case 4:
            I = 1e4;
            break;
          default:
            I = 5e3;
        }
        return I = L + I, D = {
          id: Me++,
          callback: Y,
          priorityLevel: D,
          startTime: L,
          expirationTime: I,
          sortIndex: -1
        }, L > ee ? (D.sortIndex = L, Se(Ye, D), Te(K) === null && D === Te(Ye) && (pn ? (Ka(yn), yn = -1) : pn = !0, Ln(Ce, L - ee))) : (D.sortIndex = I, Se(K, D), H || Gn || (H = !0, Rt())), D;
      }, E.unstable_shouldYield = C, E.unstable_wrapCallback = function(D) {
        var Y = B;
        return function() {
          var L = B;
          B = Y;
          try {
            return D.apply(this, arguments);
          } finally {
            B = L;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }(Yd)), Yd;
}
var Iv;
function BT() {
  return Iv || (Iv = 1, jd.exports = wT()), jd.exports;
}
var bi = {}, Pv;
function qT() {
  if (Pv) return bi;
  Pv = 1;
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    function E(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function P(e, t, n, a) {
      if (n >= t.length) return a;
      var l = t[n], u = Ke(e) ? e.slice() : Q({}, e);
      return u[l] = P(e[l], t, n + 1, a), u;
    }
    function Se(e, t, n) {
      if (t.length !== n.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return Te(e, t, n, 0);
      }
    }
    function Te(e, t, n, a) {
      var l = t[a], u = Ke(e) ? e.slice() : Q({}, e);
      return a + 1 === t.length ? (u[n[a]] = u[l], Ke(u) ? u.splice(l, 1) : delete u[l]) : u[l] = Te(
        e[l],
        t,
        n,
        a + 1
      ), u;
    }
    function lt(e, t, n) {
      var a = t[n], l = Ke(e) ? e.slice() : Q({}, e);
      return n + 1 === t.length ? (Ke(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = lt(e[a], t, n + 1), l);
    }
    function wt() {
      return !1;
    }
    function Ie() {
      return null;
    }
    function Ce(e, t, n, a) {
      return new _0(e, t, n, a);
    }
    function C() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Rt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ln() {
    }
    function Nn() {
    }
    function ht(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }
    function _a(e, t) {
      e.context === wa && (fy(t, e, null, null), uu());
    }
    function K(e, t) {
      if (Jt !== null) {
        var n = t.staleFamilies;
        t = t.updatedFamilies, gl(), Ms(
          e.current,
          t,
          n
        ), uu();
      }
    }
    function Ye(e) {
      Jt = e;
    }
    function Me(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ue(e) {
      return e === null || typeof e != "object" ? null : (e = Ey && e[Ey] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function B(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Jb ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case du:
          return "Fragment";
        case fu:
          return "Portal";
        case yf:
          return "Profiler";
        case bc:
          return "StrictMode";
        case vf:
          return "Suspense";
        case bf:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case zn:
            return (e.displayName || "Context") + ".Provider";
          case gf:
            return (e._context.displayName || "Context") + ".Consumer";
          case Mo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Sc:
            return t = e.displayName || null, t !== null ? t : B(e.type) || "Memo";
          case Ot:
            t = e._payload, e = e._init;
            try {
              return B(e(t));
            } catch {
            }
        }
      return null;
    }
    function Gn(e) {
      return typeof e.tag == "number" ? H(e) : typeof e.name == "string" ? e.name : null;
    }
    function H(e) {
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
          return B(t);
        case 8:
          return t === bc ? "StrictMode" : "Mode";
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
            for (var n = t.length - 1; 0 <= n; n--)
              if (typeof t[n].name == "string") return t[n].name;
          }
          if (e.return !== null)
            return H(e.return);
      }
      return null;
    }
    function pn() {
    }
    function ma() {
      if (Uo === 0) {
        Ry = console.log, Ay = console.info, Cy = console.warn, Dy = console.error, zy = console.group, Oy = console.groupCollapsed, xy = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: pn,
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
      Uo++;
    }
    function Ka() {
      if (Uo--, Uo === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Q({}, e, { value: Ry }),
          info: Q({}, e, { value: Ay }),
          warn: Q({}, e, { value: Cy }),
          error: Q({}, e, { value: Dy }),
          group: Q({}, e, { value: zy }),
          groupCollapsed: Q({}, e, { value: Oy }),
          groupEnd: Q({}, e, { value: xy })
        });
      }
      0 > Uo && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Bt(e) {
      if (Sf === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Sf = t && t[1] || "", My = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Sf + e + My;
    }
    function nn(e, t) {
      if (!e || Tf) return "";
      var n = Ef.get(e);
      if (n !== void 0) return n;
      Tf = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var a = null;
      a = g.H, g.H = null, ma();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var p = function() {
                  throw Error();
                };
                if (Object.defineProperty(p.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(p, []);
                  } catch (O) {
                    var S = O;
                  }
                  Reflect.construct(e, [], p);
                } else {
                  try {
                    p.call();
                  } catch (O) {
                    S = O;
                  }
                  e.call(p.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (O) {
                  S = O;
                }
                (p = e()) && typeof p.catch == "function" && p.catch(function() {
                });
              }
            } catch (O) {
              if (O && S && typeof O.stack == "string")
                return [O.stack, S.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        u && u.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = l.DetermineComponentFrameRoot(), i = o[0], c = o[1];
        if (i && c) {
          var s = i.split(`
`), m = c.split(`
`);
          for (o = u = 0; u < s.length && !s[u].includes(
            "DetermineComponentFrameRoot"
          ); )
            u++;
          for (; o < m.length && !m[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (u === s.length || o === m.length)
            for (u = s.length - 1, o = m.length - 1; 1 <= u && 0 <= o && s[u] !== m[o]; )
              o--;
          for (; 1 <= u && 0 <= o; u--, o--)
            if (s[u] !== m[o]) {
              if (u !== 1 || o !== 1)
                do
                  if (u--, o--, 0 > o || s[u] !== m[o]) {
                    var b = `
` + s[u].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ef.set(e, b), b;
                  }
                while (1 <= u && 0 <= o);
              break;
            }
        }
      } finally {
        Tf = !1, g.H = a, Ka(), Error.prepareStackTrace = n;
      }
      return s = (s = e ? e.displayName || e.name : "") ? Bt(s) : "", typeof e == "function" && Ef.set(e, s), s;
    }
    function yn(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Bt(e.type);
        case 16:
          return Bt("Lazy");
        case 13:
          return Bt("Suspense");
        case 19:
          return Bt("SuspenseList");
        case 0:
        case 15:
          return e = nn(e.type, !1), e;
        case 11:
          return e = nn(e.type.render, !1), e;
        case 1:
          return e = nn(e.type, !0), e;
        default:
          return "";
      }
    }
    function gn(e) {
      try {
        var t = "";
        do {
          t += yn(e);
          var n = e._debugInfo;
          if (n)
            for (var a = n.length - 1; 0 <= a; a--) {
              var l = n[a];
              if (typeof l.name == "string") {
                var u = t, o = l.env, i = Bt(
                  l.name + (o ? " [" + o + "]" : "")
                );
                t = u + i;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (c) {
        return `
Error generating stack: ` + c.message + `
` + c.stack;
      }
    }
    function an() {
      if (et === null) return null;
      var e = et._debugOwner;
      return e != null ? Gn(e) : null;
    }
    function ln() {
      return et === null ? "" : gn(et);
    }
    function U(e, t, n, a, l, u, o) {
      var i = et;
      g.getCurrentStack = e === null ? null : ln, Zt = !1, et = e;
      try {
        return t(n, a, l, u, o);
      } finally {
        et = i;
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function qt(e) {
      var t = e, n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (n = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function D(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Y(e) {
      if (qt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function L(e) {
      var t = e.alternate;
      if (!t) {
        if (t = qt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var n = e, a = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var u = l.alternate;
        if (u === null) {
          if (a = l.return, a !== null) {
            n = a;
            continue;
          }
          break;
        }
        if (l.child === u.child) {
          for (u = l.child; u; ) {
            if (u === n) return Y(l), e;
            if (u === a) return Y(l), t;
            u = u.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (n.return !== a.return) n = l, a = u;
        else {
          for (var o = !1, i = l.child; i; ) {
            if (i === n) {
              o = !0, n = l, a = u;
              break;
            }
            if (i === a) {
              o = !0, a = l, n = u;
              break;
            }
            i = i.sibling;
          }
          if (!o) {
            for (i = u.child; i; ) {
              if (i === n) {
                o = !0, n = u, a = l;
                break;
              }
              if (i === a) {
                o = !0, a = u, n = l;
                break;
              }
              i = i.sibling;
            }
            if (!o)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (n.alternate !== a)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (n.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return n.stateNode.current === n ? e : t;
    }
    function ee(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ee(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function I(e) {
      return { current: e };
    }
    function te(e, t) {
      0 > Fn ? console.error("Unexpected pop.") : (t !== Af[Fn] && console.error("Unexpected Fiber popped."), e.current = Rf[Fn], Rf[Fn] = null, Af[Fn] = null, Fn--);
    }
    function ne(e, t, n) {
      Fn++, Rf[Fn] = e.current, Af[Fn] = n, e.current = t;
    }
    function ut(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Ve(e, t) {
      ne(Ma, t, e), ne(Ho, e, e), ne(xa, null, e);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Kp(t) : sa;
          break;
        default:
          if (t = n === 8 ? t.parentNode : t, n = t.tagName, t = t.namespaceURI)
            t = Kp(t), t = $p(
              t,
              n
            );
          else
            switch (n) {
              case "svg":
                t = ku;
                break;
              case "math":
                t = os;
                break;
              default:
                t = sa;
            }
      }
      n = n.toLowerCase(), n = ih(null, n), n = {
        context: t,
        ancestorInfo: n
      }, te(xa, e), ne(xa, n, e);
    }
    function mt(e) {
      te(xa, e), te(Ho, e), te(Ma, e);
    }
    function vn() {
      return ut(xa.current);
    }
    function Ql(e) {
      e.memoizedState !== null && ne(Tc, e, e);
      var t = ut(xa.current), n = e.type, a = $p(t.context, n);
      n = ih(t.ancestorInfo, n), a = { context: a, ancestorInfo: n }, t !== a && (ne(Ho, e, e), ne(xa, a, e));
    }
    function $a(e) {
      Ho.current === e && (te(xa, e), te(Ho, e)), Tc.current === e && (te(Tc, e), pi._currentValue = Gl);
    }
    function Wa(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Fa(e) {
      try {
        return pa(e), !1;
      } catch {
        return !0;
      }
    }
    function pa(e) {
      return "" + e;
    }
    function le(e, t) {
      if (Fa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), pa(e);
    }
    function Zl(e, t) {
      if (Fa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), pa(e);
    }
    function ya(e) {
      if (Fa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Wa(e)
        ), pa(e);
    }
    function Ku(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        mu = t.inject(e), tt = t;
      } catch (n) {
        console.error("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function ps(e, t) {
      if (tt && typeof tt.onCommitFiberRoot == "function")
        try {
          var n = (e.current.flags & 128) === 128;
          switch (t) {
            case Mn:
              var a = Df;
              break;
            case Un:
              a = zf;
              break;
            case Pn:
              a = hu;
              break;
            case Ac:
              a = Of;
              break;
            default:
              a = hu;
          }
          tt.onCommitFiberRoot(
            mu,
            e,
            a,
            n
          );
        } catch (l) {
          xn || (xn = !0, console.error(
            "React instrumentation encountered an error: %s",
            l
          ));
        }
    }
    function re(e) {
      if (typeof Pb == "function" && eS(e), tt && typeof tt.setStrictMode == "function")
        try {
          tt.setStrictMode(mu, e);
        } catch (t) {
          xn || (xn = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Si(e) {
      A = e;
    }
    function $u() {
      A !== null && typeof A.markCommitStopped == "function" && A.markCommitStopped();
    }
    function ga(e) {
      A !== null && typeof A.markComponentRenderStarted == "function" && A.markComponentRenderStarted(e);
    }
    function d() {
      A !== null && typeof A.markComponentRenderStopped == "function" && A.markComponentRenderStopped();
    }
    function x(e) {
      A !== null && typeof A.markRenderStarted == "function" && A.markRenderStarted(e);
    }
    function M() {
      A !== null && typeof A.markRenderStopped == "function" && A.markRenderStopped();
    }
    function _(e, t) {
      A !== null && typeof A.markStateUpdateScheduled == "function" && A.markStateUpdateScheduled(e, t);
    }
    function Le(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (tS(e) / nS | 0) | 0;
    }
    function me(e) {
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
    function w(e) {
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
    function pt(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var a = 0, l = e.suspendedLanes, u = e.pingedLanes, o = e.warmLanes;
      e = e.finishedLanes !== 0;
      var i = n & 134217727;
      return i !== 0 ? (n = i & ~l, n !== 0 ? a = w(n) : (u &= i, u !== 0 ? a = w(u) : e || (o = i & ~o, o !== 0 && (a = w(o))))) : (i = n & ~l, i !== 0 ? a = w(i) : u !== 0 ? a = w(u) : e || (o = n & ~o, o !== 0 && (a = w(o)))), a === 0 ? 0 : t !== 0 && t !== a && !(t & l) && (l = a & -a, o = t & -t, l >= o || l === 32 && (o & 4194176) !== 0) ? t : a;
    }
    function jt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ze(e, t) {
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
    function bn() {
      var e = Ec;
      return Ec <<= 1, !(Ec & 4194176) && (Ec = 128), e;
    }
    function va() {
      var e = Rc;
      return Rc <<= 1, !(Rc & 62914560) && (Rc = 4194304), e;
    }
    function Yt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Sn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function un(e, t, n, a, l, u) {
      var o = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var i = e.entanglements, c = e.expirationTimes, s = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var m = 31 - ot(n), b = 1 << m;
        i[m] = 0, c[m] = -1;
        var p = s[m];
        if (p !== null)
          for (s[m] = null, m = 0; m < p.length; m++) {
            var S = p[m];
            S !== null && (S.lane &= -536870913);
          }
        n &= ~b;
      }
      a !== 0 && Nd(e, a, 0), u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(o & ~t));
    }
    function Nd(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - ot(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194218;
    }
    function Gd(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var a = 31 - ot(n), l = 1 << a;
        l & t | e[a] & t && (e[a] |= t), n &= ~l;
      }
    }
    function Xd(e, t, n) {
      if (sn)
        for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
          var a = 31 - ot(n), l = 1 << a;
          e[a].add(t), n &= ~l;
        }
    }
    function Qd(e, t) {
      if (sn)
        for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; 0 < t; ) {
          var l = 31 - ot(t);
          e = 1 << l, l = n[l], 0 < l.size && (l.forEach(function(u) {
            var o = u.alternate;
            o !== null && a.has(o) || a.add(u);
          }), l.clear()), t &= ~e;
        }
    }
    function Zd(e) {
      return e &= -e, Mn < e ? Un < e ? e & 134217727 ? Pn : Ac : Un : Mn;
    }
    function kd() {
      var e = pe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Pn : py(e.type));
    }
    function i0(e, t) {
      var n = pe.p;
      try {
        return pe.p = e, t();
      } finally {
        pe.p = n;
      }
    }
    function ys(e) {
      delete e[nt], delete e[bt], delete e[xf], delete e[aS], delete e[lS];
    }
    function Ia(e) {
      var t = e[nt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[vl] || n[nt]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = ey(e); e !== null; ) {
              if (n = e[nt])
                return n;
              e = ey(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Pa(e) {
      if (e = e[nt] || e[vl]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Wu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function kl(e) {
      var t = e[Uy];
      return t || (t = e[Uy] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Ne(e) {
      e[wo] = !0;
    }
    function el(e, t) {
      Jl(e, t), Jl(e + "Capture", t);
    }
    function Jl(e, t) {
      bl[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), bl[e] = t;
      var n = e.toLowerCase();
      for (Mf[n] = e, e === "onDoubleClick" && (Mf.ondblclick = e), e = 0; e < t.length; e++)
        Hy.add(t[e]);
    }
    function _l(e, t) {
      uS[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function gs(e) {
      return In.call(By, e) ? !0 : In.call(wy, e) ? !1 : oS.test(e) ? By[e] = !0 : (wy[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Jd(e, t, n) {
      if (gs(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof n) {
            case "symbol":
            case "object":
              return n;
            case "function":
              return n;
            case "boolean":
              if (n === !1) return n;
          }
          return n === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && n === !0 ? !0 : (le(n, t), e === "" + n ? n : e);
      }
    }
    function Ti(e, t, n) {
      if (gs(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var a = t.toLowerCase().slice(0, 5);
              if (a !== "data-" && a !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          le(n, t), e.setAttribute(t, "" + n);
        }
    }
    function Ei(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        le(n, t), e.setAttribute(t, "" + n);
      }
    }
    function Xn(e, t, n, a) {
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        le(a, n), e.setAttributeNS(t, n, "" + a);
      }
    }
    function Vt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ya(e), e;
        default:
          return "";
      }
    }
    function _d(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function c0(e) {
      var t = _d(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ya(e[t]);
      var a = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get, u = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(o) {
            ya(o), a = "" + o, u.call(this, o);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(o) {
            ya(o), a = "" + o;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Ri(e) {
      e._valueTracker || (e._valueTracker = c0(e));
    }
    function Kd(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(), a = "";
      return e && (a = _d(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
    }
    function Ai(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Lt(e) {
      return e.replace(
        iS,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function $d(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || jy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        an() || "A component",
        t.type
      ), jy = !0), t.value === void 0 || t.defaultValue === void 0 || qy || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        an() || "A component",
        t.type
      ), qy = !0);
    }
    function vs(e, t, n, a, l, u, o, i) {
      e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? (le(o, "type"), e.type = o) : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Vt(t)) : e.value !== "" + Vt(t) && (e.value = "" + Vt(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? bs(e, o, Vt(t)) : n != null ? bs(e, o, Vt(n)) : a != null && e.removeAttribute("value"), l == null && u != null && (e.defaultChecked = !!u), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? (le(i, "name"), e.name = "" + Vt(i)) : e.removeAttribute("name");
    }
    function Wd(e, t, n, a, l, u, o, i) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (le(u, "type"), e.type = u), t != null || n != null) {
        if (!(u !== "submit" && u !== "reset" || t != null))
          return;
        n = n != null ? "" + Vt(n) : "", t = t != null ? "" + Vt(t) : n, i || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = i ? e.checked : !!a, e.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (le(o, "name"), e.name = o);
    }
    function bs(e, t, n) {
      t === "number" && Ai(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function Fd(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? pf.Children.forEach(t.children, function(n) {
        n == null || typeof n == "string" || typeof n == "number" || typeof n == "bigint" || Vy || (Vy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Ly || (Ly = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Yy || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Yy = !0);
    }
    function Id() {
      var e = an();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Kl(e, t, n, a) {
      if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++)
          t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
          l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
          if (e[l].value === n) {
            e[l].selected = !0, a && (e[l].defaultSelected = !0);
            return;
          }
          t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Pd(e, t) {
      for (e = 0; e < Gy.length; e++) {
        var n = Gy[e];
        if (t[n] != null) {
          var a = Ke(t[n]);
          t.multiple && !a ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            n,
            Id()
          ) : !t.multiple && a && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            n,
            Id()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Ny || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Ny = !0);
    }
    function eh(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Xy || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        an() || "A component"
      ), Xy = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function th(e, t, n) {
      if (t != null && (t = "" + Vt(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + Vt(n) : "";
    }
    function nh(e, t, n, a) {
      if (t == null) {
        if (a != null) {
          if (n != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ke(a)) {
            if (1 < a.length)
              throw Error("<textarea> can only have at most one child.");
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), t = n;
      }
      n = Vt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a);
    }
    function ah(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? ah(e.children[0], t) : e;
    }
    function At(e) {
      return "  " + "  ".repeat(e);
    }
    function $l(e) {
      return "+ " + "  ".repeat(e);
    }
    function tl(e) {
      return "- " + "  ".repeat(e);
    }
    function lh(e) {
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
    function Fu(e, t) {
      return Qy.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Ci(e, t, n) {
      var a = 120 - 2 * n;
      if (t === null)
        return $l(n) + Fu(e, a) + `
`;
      if (typeof t == "string") {
        for (var l = 0; l < t.length && l < e.length && t.charCodeAt(l) === e.charCodeAt(l); l++) ;
        return l > a - 8 && 10 < l && (e = "..." + e.slice(l - 8), t = "..." + t.slice(l - 8)), $l(n) + Fu(e, a) + `
` + tl(n) + Fu(t, a) + `
`;
      }
      return At(n) + Fu(e, a) + `
`;
    }
    function Ss(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, n) {
        return n;
      });
    }
    function Iu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ke(e)) return "[...]";
          if (e.$$typeof === Oa)
            return (t = B(e.type)) ? "<" + t + ">" : "<...>";
          var n = Ss(e);
          if (n === "Object") {
            n = "", t -= 2;
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                var l = JSON.stringify(a);
                if (l !== '"' + a + '"' && (a = l), t -= a.length - 2, l = Iu(
                  e[a],
                  15 > t ? t : 15
                ), t -= l.length, 0 > t) {
                  n += n === "" ? "..." : ", ...";
                  break;
                }
                n += (n === "" ? "" : ",") + a + ":" + l;
              }
            return "{" + n + "}";
          }
          return n;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Wl(e, t) {
      return typeof e != "string" || Qy.test(e) ? "{" + Iu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Ts(e, t, n) {
      var a = 120 - n.length - e.length, l = [], u;
      for (u in t)
        if (t.hasOwnProperty(u) && u !== "children") {
          var o = Wl(
            t[u],
            120 - n.length - u.length - 1
          );
          a -= u.length + o.length + 2, l.push(u + "=" + o);
        }
      return l.length === 0 ? n + "<" + e + `>
` : 0 < a ? n + "<" + e + " " + l.join(" ") + `>
` : n + "<" + e + `
` + n + "  " + l.join(`
` + n + "  ") + `
` + n + `>
`;
    }
    function s0(e, t, n) {
      var a = "", l = Q({}, t), u;
      for (u in e)
        if (e.hasOwnProperty(u)) {
          delete l[u];
          var o = 120 - 2 * n - u.length - 2, i = Iu(e[u], o);
          t.hasOwnProperty(u) ? (o = Iu(t[u], o), a += $l(n) + u + ": " + i + `
`, a += tl(n) + u + ": " + o + `
`) : a += $l(n) + u + ": " + i + `
`;
        }
      for (var c in l)
        l.hasOwnProperty(c) && (e = Iu(
          l[c],
          120 - 2 * n - c.length - 2
        ), a += tl(n) + c + ": " + e + `
`);
      return a;
    }
    function r0(e, t, n, a) {
      var l = "", u = /* @__PURE__ */ new Map();
      for (s in n)
        n.hasOwnProperty(s) && u.set(
          s.toLowerCase(),
          s
        );
      if (u.size === 1 && u.has("children"))
        l += Ts(
          e,
          t,
          At(a)
        );
      else {
        for (var o in t)
          if (t.hasOwnProperty(o) && o !== "children") {
            var i = 120 - 2 * (a + 1) - o.length - 1, c = u.get(o.toLowerCase());
            if (c !== void 0) {
              u.delete(o.toLowerCase());
              var s = t[o];
              c = n[c];
              var m = Wl(
                s,
                i
              );
              i = Wl(
                c,
                i
              ), typeof s == "object" && s !== null && typeof c == "object" && c !== null && Ss(s) === "Object" && Ss(c) === "Object" && (2 < Object.keys(s).length || 2 < Object.keys(c).length || -1 < m.indexOf("...") || -1 < i.indexOf("...")) ? l += At(a + 1) + o + `={{
` + s0(
                s,
                c,
                a + 2
              ) + At(a + 1) + `}}
` : (l += $l(a + 1) + o + "=" + m + `
`, l += tl(a + 1) + o + "=" + i + `
`);
            } else
              l += At(a + 1) + o + "=" + Wl(t[o], i) + `
`;
          }
        u.forEach(function(b) {
          if (b !== "children") {
            var p = 120 - 2 * (a + 1) - b.length - 1;
            l += tl(a + 1) + b + "=" + Wl(n[b], p) + `
`;
          }
        }), l = l === "" ? At(a) + "<" + e + `>
` : At(a) + "<" + e + `
` + l + At(a) + `>
`;
      }
      return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (u = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (u = "" + t), l += Ci(u, "" + e, a + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (l = e == null ? l + Ci("" + t, null, a + 1) : l + Ci("" + t, void 0, a + 1)), l;
    }
    function uh(e, t) {
      var n = lh(e);
      if (n === null) {
        for (n = "", e = e.child; e; )
          n += uh(e, t), e = e.sibling;
        return n;
      }
      return At(t) + "<" + n + `>
`;
    }
    function Es(e, t) {
      var n = ah(e, t);
      if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
        return At(t) + `...
` + Es(n, t + 1);
      n = "";
      var a = e.fiber._debugInfo;
      if (a)
        for (var l = 0; l < a.length; l++) {
          var u = a[l].name;
          typeof u == "string" && (n += At(t) + "<" + u + `>
`, t++);
        }
      if (a = "", l = e.fiber.pendingProps, e.fiber.tag === 6)
        a = Ci(l, e.serverProps, t), t++;
      else if (u = lh(e.fiber), u !== null)
        if (e.serverProps === void 0) {
          a = t;
          var o = 120 - 2 * a - u.length - 2, i = "";
          for (s in l)
            if (l.hasOwnProperty(s) && s !== "children") {
              var c = Wl(l[s], 15);
              if (o -= s.length + c.length + 2, 0 > o) {
                i += " ...";
                break;
              }
              i += " " + s + "=" + c;
            }
          a = At(a) + "<" + u + i + `>
`, t++;
        } else
          e.serverProps === null ? (a = Ts(
            u,
            l,
            $l(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (a = r0(
            u,
            l,
            e.serverProps,
            t
          ), t++);
      var s = "";
      for (l = e.fiber.child, u = 0; l && u < e.children.length; )
        o = e.children[u], o.fiber === l ? (s += Es(o, t), u++) : s += uh(l, t), l = l.sibling;
      for (l && 0 < e.children.length && (s += At(t) + `...
`), l = e.serverTail, e.serverProps === null && t--, e = 0; e < l.length; e++)
        u = l[e], s = typeof u == "string" ? s + (tl(t) + Fu(u, 120 - 2 * t) + `
`) : s + Ts(
          u.type,
          u.props,
          tl(t)
        );
      return n + a + s;
    }
    function Rs(e) {
      try {
        return `

` + Es(e, 0);
      } catch {
        return "";
      }
    }
    function oh(e, t, n) {
      for (var a = t, l = null, u = 0; a; )
        a === e && (u = 0), l = {
          fiber: a,
          children: l !== null ? [l] : [],
          serverProps: a === t ? n : a === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: u
        }, u++, a = a.return;
      return l !== null ? Rs(l).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ih(e, t) {
      e = Q({}, e || ky);
      var n = { tag: t };
      return Zy.indexOf(t) !== -1 && (e.aTagInScope = null, e.buttonTagInScope = null, e.nobrTagInScope = null), sS.indexOf(t) !== -1 && (e.pTagInButtonScope = null), cS.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (e.listItemTagAutoclosing = null, e.dlItemTagAutoclosing = null), e.current = n, t === "form" && (e.formTag = n), t === "a" && (e.aTagInScope = n), t === "button" && (e.buttonTagInScope = n), t === "nobr" && (e.nobrTagInScope = n), t === "p" && (e.pTagInButtonScope = n), t === "li" && (e.listItemTagAutoclosing = n), (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = n), t === "#document" || t === "html" ? e.containerTagInScope = null : e.containerTagInScope || (e.containerTagInScope = n), e;
    }
    function ch(e, t) {
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
          return rS.indexOf(t) === -1;
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
    function f0(e, t) {
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
    function sh(e, t) {
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
    function As(e, t) {
      t = t || ky;
      var n = t.current;
      if (t = (n = ch(
        e,
        n && n.tag
      ) ? null : n) ? null : f0(e, t), t = n || t, !t) return !0;
      t = t.tag;
      var a = String(!!n) + "|" + e + "|" + t;
      if (Cc[a]) return !1;
      Cc[a] = !0;
      var l = (a = et) ? sh(a.return, t) : null;
      return a = a !== null && l !== null ? oh(l, a, null) : "", l = "<" + e + ">", n ? (n = "", t === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        l,
        t,
        n,
        a
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        l,
        t,
        a
      ), !1;
    }
    function Di(e, t) {
      if (ch("#text", t)) return !0;
      var n = "#text|" + t;
      if (Cc[n]) return !1;
      Cc[n] = !0;
      var a = (n = et) ? sh(n, t) : null;
      return n = n !== null && a !== null ? oh(
        a,
        n,
        n.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        n
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        n
      ), !1;
    }
    function Pu(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function d0(e) {
      return e.replace(hS, function(t, n) {
        return n.toUpperCase();
      });
    }
    function rh(e, t, n) {
      var a = t.indexOf("--") === 0;
      a || (-1 < t.indexOf("-") ? yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        d0(t.replace(dS, "ms-"))
      )) : fS.test(t) ? yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Ky.test(n) || Hf.hasOwnProperty(n) && Hf[n] || (Hf[n] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        n.replace(Ky, "")
      )), typeof n == "number" && (isNaN(n) ? $y || ($y = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(n) || Wy || (Wy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Fy.has(t) ? t === "float" ? e.cssFloat = n : (Zl(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
    }
    function fh(e, t, n) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, n != null) {
        if (t) {
          var a = {};
          if (n) {
            for (var l in n)
              if (n.hasOwnProperty(l) && !t.hasOwnProperty(l))
                for (var u = Uf[l] || [l], o = 0; o < u.length; o++)
                  a[u[o]] = l;
          }
          for (var i in t)
            if (t.hasOwnProperty(i) && (!n || n[i] !== t[i]))
              for (l = Uf[i] || [i], u = 0; u < l.length; u++)
                a[l[u]] = i;
          i = {};
          for (var c in t)
            for (l = Uf[c] || [c], u = 0; u < l.length; u++)
              i[l[u]] = c;
          c = {};
          for (var s in a)
            if (l = a[s], (u = i[s]) && l !== u && (o = l + "," + u, !c[o])) {
              c[o] = !0, o = console;
              var m = t[l];
              o.error.call(
                o,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                m == null || typeof m == "boolean" || m === "" ? "Removing" : "Updating",
                l,
                u
              );
            }
        }
        for (var b in n)
          !n.hasOwnProperty(b) || t != null && t.hasOwnProperty(b) || (b.indexOf("--") === 0 ? e.setProperty(b, "") : b === "float" ? e.cssFloat = "" : e[b] = "");
        for (var p in t)
          s = t[p], t.hasOwnProperty(p) && n[p] !== s && rh(e, p, s);
      } else
        for (a in t)
          t.hasOwnProperty(a) && rh(e, a, t[a]);
    }
    function eo(e) {
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
    function dh(e) {
      return mS.get(e) || e;
    }
    function h0(e, t) {
      if (In.call(gu, t) && gu[t])
        return !0;
      if (yS.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Iy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), gu[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), gu[t] = !0;
      }
      if (pS.test(t)) {
        if (e = t.toLowerCase(), e = Iy.hasOwnProperty(e) ? e : null, e == null) return gu[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), gu[t] = !0);
      }
      return !0;
    }
    function m0(e, t) {
      var n = [], a;
      for (a in t)
        h0(e, a) || n.push(a);
      t = n.map(function(l) {
        return "`" + l + "`";
      }).join(", "), n.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < n.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function p0(e, t, n, a) {
      if (In.call(it, t) && it[t])
        return !0;
      var l = t.toLowerCase();
      if (l === "onfocusin" || l === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), it[t] = !0;
      if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (a != null) {
        if (e = a.possibleRegistrationNames, a.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (a = e.hasOwnProperty(l) ? e[l] : null, a != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            a
          ), it[t] = !0;
        if (eg.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), it[t] = !0;
      } else if (eg.test(t))
        return gS.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), it[t] = !0;
      if (vS.test(t) || bS.test(t)) return !0;
      if (l === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), it[t] = !0;
      if (l === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), it[t] = !0;
      if (l === "is" && n !== null && n !== void 0 && typeof n != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof n
        ), it[t] = !0;
      if (typeof n == "number" && isNaN(n))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), it[t] = !0;
      if (zc.hasOwnProperty(l)) {
        if (l = zc[l], l !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            l
          ), it[t] = !0;
      } else if (t !== l)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          l
        ), it[t] = !0;
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
      switch (typeof n) {
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
              return l = t.toLowerCase().slice(0, 5), l === "data-" || l === "aria-" ? !0 : (n ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ), it[t] = !0);
          }
        case "function":
        case "symbol":
          return it[t] = !0, !1;
        case "string":
          if (n === "false" || n === "true") {
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
              n,
              t,
              n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ), it[t] = !0;
          }
      }
      return !0;
    }
    function y0(e, t, n) {
      var a = [], l;
      for (l in t)
        p0(e, l, t[l], n) || a.push(l);
      t = a.map(function(u) {
        return "`" + u + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function to(e) {
      return SS.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Cs(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function hh(e) {
      var t = Pa(e);
      if (t && (e = t.stateNode)) {
        var n = e[bt] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (vs(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (le(t, "name"), n = n.querySelectorAll(
                'input[name="' + Lt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < n.length; t++) {
                var a = n[t];
                if (a !== e && a.form === e.form) {
                  var l = a[bt] || null;
                  if (!l)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  vs(
                    a,
                    l.value,
                    l.defaultValue,
                    l.defaultValue,
                    l.checked,
                    l.defaultChecked,
                    l.type,
                    l.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                a = n[t], a.form === e.form && Kd(a);
            }
            break e;
          case "textarea":
            th(e, n.value, n.defaultValue);
            break e;
          case "select":
            t = n.value, t != null && Kl(e, !!n.multiple, t, !1);
        }
      }
    }
    function mh(e, t, n) {
      if (wf) return e(t, n);
      wf = !0;
      try {
        var a = e(t);
        return a;
      } finally {
        if (wf = !1, (vu !== null || bu !== null) && (uu(), vu && (t = vu, e = bu, bu = vu = null, hh(t), e)))
          for (t = 0; t < e.length; t++) hh(e[t]);
      }
    }
    function no(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var a = n[bt] || null;
      if (a === null) return null;
      n = a[t];
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
          (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type."
        );
      return n;
    }
    function ph() {
      if (Oc) return Oc;
      var e, t = qf, n = t.length, a, l = "value" in Ha ? Ha.value : Ha.textContent, u = l.length;
      for (e = 0; e < n && t[e] === l[e]; e++) ;
      var o = n - e;
      for (a = 1; a <= o && t[n - a] === l[u - a]; a++) ;
      return Oc = l.slice(e, 1 < a ? 1 - a : void 0);
    }
    function zi(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Oi() {
      return !0;
    }
    function yh() {
      return !1;
    }
    function yt(e) {
      function t(n, a, l, u, o) {
        this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = o, this.currentTarget = null;
        for (var i in e)
          e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Oi : yh, this.isPropagationStopped = yh, this;
      }
      return Q(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Oi);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Oi);
        },
        persist: function() {
        },
        isPersistent: Oi
      }), t;
    }
    function g0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = wS[e]) ? !!t[e] : !1;
    }
    function Ds() {
      return g0;
    }
    function gh(e, t) {
      switch (e) {
        case "keyup":
          return kS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vh(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function v0(e, t) {
      switch (e) {
        case "compositionend":
          return vh(t);
        case "keypress":
          return t.which !== og ? null : (cg = !0, ig);
        case "textInput":
          return e = t.data, e === ig && cg ? null : e;
        default:
          return null;
      }
    }
    function b0(e, t) {
      if (Su)
        return e === "compositionend" || !Lf && gh(e, t) ? (e = ph(), Oc = qf = Ha = null, Su = !1, e) : null;
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
          return ug && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function bh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_S[e.type] : t === "textarea";
    }
    function S0(e) {
      if (!Hn) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Sh(e, t, n, a) {
      vu ? bu ? bu.push(a) : bu = [a] : vu = a, t = cc(t, "onChange"), 0 < t.length && (n = new xc(
        "onChange",
        "change",
        null,
        n,
        a
      ), e.push({ event: n, listeners: t }));
    }
    function T0(e) {
      Vp(e, 0);
    }
    function xi(e) {
      var t = Wu(e);
      if (Kd(t)) return e;
    }
    function Th(e, t) {
      if (e === "change") return t;
    }
    function Eh() {
      Lo && (Lo.detachEvent("onpropertychange", Rh), No = Lo = null);
    }
    function Rh(e) {
      if (e.propertyName === "value" && xi(No)) {
        var t = [];
        Sh(
          t,
          No,
          e,
          Cs(e)
        ), mh(T0, t);
      }
    }
    function E0(e, t, n) {
      e === "focusin" ? (Eh(), Lo = t, No = n, Lo.attachEvent("onpropertychange", Rh)) : e === "focusout" && Eh();
    }
    function R0(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xi(No);
    }
    function A0(e, t) {
      if (e === "click") return xi(t);
    }
    function C0(e, t) {
      if (e === "input" || e === "change")
        return xi(t);
    }
    function D0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function ao(e, t) {
      if (ct(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), a = Object.keys(t);
      if (n.length !== a.length) return !1;
      for (a = 0; a < n.length; a++) {
        var l = n[a];
        if (!In.call(t, l) || !ct(e[l], t[l]))
          return !1;
      }
      return !0;
    }
    function Ah(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ch(e, t) {
      var n = Ah(e);
      e = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (a = e + n.textContent.length, e <= t && a >= t)
            return { node: n, offset: t - e };
          e = a;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ah(n);
      }
    }
    function Dh(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function zh(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Ai(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ai(e.document);
      }
      return t;
    }
    function zs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function z0(e, t) {
      var n = zh(t);
      t = e.focusedElem;
      var a = e.selectionRange;
      if (n !== t && t && t.ownerDocument && Dh(t.ownerDocument.documentElement, t)) {
        if (a !== null && zs(t)) {
          if (e = a.start, n = a.end, n === void 0 && (n = e), "selectionStart" in t)
            t.selectionStart = e, t.selectionEnd = Math.min(
              n,
              t.value.length
            );
          else if (n = (e = t.ownerDocument || document) && e.defaultView || window, n.getSelection) {
            n = n.getSelection();
            var l = t.textContent.length, u = Math.min(a.start, l);
            a = a.end === void 0 ? u : Math.min(a.end, l), !n.extend && u > a && (l = a, a = u, u = l), l = Ch(t, u);
            var o = Ch(
              t,
              a
            );
            l && o && (n.rangeCount !== 1 || n.anchorNode !== l.node || n.anchorOffset !== l.offset || n.focusNode !== o.node || n.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(l.node, l.offset), n.removeAllRanges(), u > a ? (n.addRange(e), n.extend(o.node, o.offset)) : (e.setEnd(
              o.node,
              o.offset
            ), n.addRange(e)));
          }
        }
        for (e = [], n = t; n = n.parentNode; )
          n.nodeType === 1 && e.push({
            element: n,
            left: n.scrollLeft,
            top: n.scrollTop
          });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
          n = e[t], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
      }
    }
    function Oh(e, t, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Gf || Tu == null || Tu !== Ai(a) || (a = Tu, "selectionStart" in a && zs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Go && ao(Go, a) || (Go = a, a = cc(Nf, "onSelect"), 0 < a.length && (t = new xc(
        "onSelect",
        "select",
        null,
        t,
        n
      ), e.push({ event: t, listeners: a }), t.target = Tu)));
    }
    function nl(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    function al(e) {
      if (Xf[e]) return Xf[e];
      if (!Eu[e]) return e;
      var t = Eu[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in rg)
          return Xf[e] = t[n];
      return e;
    }
    function on(e, t) {
      pg.set(e, t), el(t, [e]);
    }
    function Mi() {
      for (var e = Ru, t = Qf = Ru = 0; t < e; ) {
        var n = kt[t];
        kt[t++] = null;
        var a = kt[t];
        kt[t++] = null;
        var l = kt[t];
        kt[t++] = null;
        var u = kt[t];
        if (kt[t++] = null, a !== null && l !== null) {
          var o = a.pending;
          o === null ? l.next = l : (l.next = o.next, o.next = l), a.pending = l;
        }
        u !== 0 && xh(n, l, u);
      }
    }
    function Ui(e, t, n, a) {
      kt[Ru++] = e, kt[Ru++] = t, kt[Ru++] = n, kt[Ru++] = a, Qf |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Os(e, t, n, a) {
      return Ui(e, t, n, a), Hi(e);
    }
    function Pe(e, t) {
      return Ui(e, null, null, t), Hi(e);
    }
    function xh(e, t, n) {
      e.lanes |= n;
      var a = e.alternate;
      a !== null && (a.lanes |= n);
      for (var l = !1, u = e.return; u !== null; )
        u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & Uc || (l = !0)), e = u, u = u.return;
      l && t !== null && e.tag === 3 && (u = e.stateNode, l = 31 - ot(n), u = u.hiddenUpdates, e = u[l], e === null ? u[l] = [t] : e.push(t), t.lane = n | 536870912);
    }
    function Hi(e) {
      if (ri > rT)
        throw ql = ri = 0, fi = vd = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ql > fT && (ql = 0, fi = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && Mp(e);
      for (var t = e, n = t.return; n !== null; )
        t.alternate === null && t.flags & 4098 && Mp(e), t = n, n = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function ll(e) {
      if (Jt === null) return e;
      var t = Jt(e);
      return t === void 0 ? e : t.current;
    }
    function xs(e) {
      if (Jt === null) return e;
      var t = Jt(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = ll(e.render), e.render !== t) ? (t = { $$typeof: Mo, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Mh(e, t) {
      if (Jt === null) return !1;
      var n = e.elementType;
      t = t.type;
      var a = !1, l = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (a = !0);
          break;
        case 0:
          (typeof t == "function" || l === Ot) && (a = !0);
          break;
        case 11:
          (l === Mo || l === Ot) && (a = !0);
          break;
        case 14:
        case 15:
          (l === Sc || l === Ot) && (a = !0);
          break;
        default:
          return !1;
      }
      return !!(a && (e = Jt(n), e !== void 0 && e === Jt(t)));
    }
    function Uh(e) {
      Jt !== null && typeof WeakSet == "function" && (Au === null && (Au = /* @__PURE__ */ new WeakSet()), Au.add(e));
    }
    function Ms(e, t, n) {
      var a = e.alternate, l = e.child, u = e.sibling, o = e.tag, i = e.type, c = null;
      switch (o) {
        case 0:
        case 15:
        case 1:
          c = i;
          break;
        case 11:
          c = i.render;
      }
      if (Jt === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var s = !1;
      i = !1, c !== null && (c = Jt(c), c !== void 0 && (n.has(c) ? i = !0 : t.has(c) && (o === 1 ? i = !0 : s = !0))), Au !== null && (Au.has(e) || a !== null && Au.has(a)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || s) && (a = Pe(e, 2), a !== null && Ee(a, e, 2)), l === null || i || Ms(
        l,
        t,
        n
      ), u !== null && Ms(
        u,
        t,
        n
      );
    }
    function Qn() {
      var e = El;
      return El = 0, e;
    }
    function wi(e) {
      var t = El;
      return El = e, t;
    }
    function lo(e) {
      var t = El;
      return El += e, t;
    }
    function Us(e) {
      St = Cu(), 0 > e.actualStartTime && (e.actualStartTime = St);
    }
    function Hs(e) {
      if (0 <= St) {
        var t = Cu() - St;
        e.actualDuration += t, e.selfBaseDuration = t, St = -1;
      }
    }
    function Hh(e) {
      if (0 <= St) {
        var t = Cu() - St;
        e.actualDuration += t, St = -1;
      }
    }
    function Tn() {
      if (0 <= St) {
        var e = Cu() - St;
        St = -1, El += e;
      }
    }
    function En() {
      St = Cu();
    }
    function Bi(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ct(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = kf.get(e);
        return n !== void 0 ? n : (t = {
          value: e,
          source: t,
          stack: gn(t)
        }, kf.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: gn(t)
      };
    }
    function ul(e, t) {
      ol(), Du[zu++] = Yc, Du[zu++] = jc, jc = e, Yc = t;
    }
    function wh(e, t, n) {
      ol(), _t[Kt++] = ea, _t[Kt++] = ta, _t[Kt++] = Al, Al = e;
      var a = ea;
      e = ta;
      var l = 32 - ot(a) - 1;
      a &= ~(1 << l), n += 1;
      var u = 32 - ot(t) + l;
      if (30 < u) {
        var o = l - l % 5;
        u = (a & (1 << o) - 1).toString(32), a >>= o, l -= o, ea = 1 << 32 - ot(t) + l | n << l | a, ta = u + e;
      } else
        ea = 1 << u | n << l | a, ta = e;
    }
    function ws(e) {
      ol(), e.return !== null && (ul(e, 1), wh(e, 1, 0));
    }
    function Bs(e) {
      for (; e === jc; )
        jc = Du[--zu], Du[zu] = null, Yc = Du[--zu], Du[zu] = null;
      for (; e === Al; )
        Al = _t[--Kt], _t[Kt] = null, ta = _t[--Kt], _t[Kt] = null, ea = _t[--Kt], _t[Kt] = null;
    }
    function ol() {
      F || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function il(e, t) {
      if (e.return === null) {
        if ($t === null)
          $t = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if ($t.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          $t.distanceFromLeaf > t && ($t.distanceFromLeaf = t);
        }
        return $t;
      }
      var n = il(
        e.return,
        t + 1
      ).children;
      return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, n.push(t), t);
    }
    function qs(e, t) {
      na || (e = il(e, 0), e.serverProps = null, t !== null && (t = Fp(t), e.serverTail.push(t)));
    }
    function cl(e) {
      var t = "", n = $t;
      throw n !== null && ($t = null, t = Rs(n)), io(
        Ct(
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
      ), Jf;
    }
    function Bh(e) {
      var t = e.stateNode, n = e.type, a = e.memoizedProps;
      switch (t[nt] = e, t[bt] = a, Pr(n, a), n) {
        case "dialog":
          W("cancel", t), W("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          W("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < di.length; n++)
            W(di[n], t);
          break;
        case "source":
          W("error", t);
          break;
        case "img":
        case "image":
        case "link":
          W("error", t), W("load", t);
          break;
        case "details":
          W("toggle", t);
          break;
        case "input":
          _l("input", a), W("invalid", t), $d(t, a), Wd(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ), Ri(t);
          break;
        case "option":
          Fd(t, a);
          break;
        case "select":
          _l("select", a), W("invalid", t), Pd(t, a);
          break;
        case "textarea":
          _l("textarea", a), W("invalid", t), eh(t, a), nh(
            t,
            a.value,
            a.defaultValue,
            a.children
          ), Ri(t);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Xp(t.textContent, n) ? (a.popover != null && (W("beforetoggle", t), W("toggle", t)), a.onScroll != null && W("scroll", t), a.onScrollEnd != null && W("scrollend", t), a.onClick != null && (t.onclick = sc), t = !0) : t = !1, t || cl(e);
    }
    function qh(e) {
      for (st = e.return; st; )
        switch (st.tag) {
          case 3:
          case 27:
            wn = !0;
            return;
          case 5:
          case 13:
            wn = !1;
            return;
          default:
            st = st.return;
        }
    }
    function uo(e) {
      if (e !== st) return !1;
      if (!F)
        return qh(e), F = !0, !1;
      var t = !1, n;
      if ((n = e.tag !== 3 && e.tag !== 27) && ((n = e.tag === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || af(e.type, e.memoizedProps)), n = !n), n && (t = !0), t && We) {
        for (t = We; t; ) {
          n = il(e, 0);
          var a = Fp(t);
          n.serverTail.push(a), t = a.type === "Suspense" ? Pp(t) : Qt(t.nextSibling);
        }
        cl(e);
      }
      if (qh(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        We = Pp(e);
      } else
        We = st ? Qt(e.stateNode.nextSibling) : null;
      return !0;
    }
    function oo() {
      We = st = null, na = F = !1;
    }
    function io(e) {
      dn === null ? dn = [e] : dn.push(e);
    }
    function jh() {
      var e = $t;
      e !== null && ($t = null, e = Rs(e), console.error(
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
    function Yh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Vh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function qi() {
    }
    function Lh(e, t, n) {
      g.actQueue !== null && (g.didUsePromise = !0);
      var a = e.thenables;
      switch (n = a[n], n === void 0 ? a.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(qi, qi), t = n), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Gh(e), e;
        default:
          if (typeof t.status == "string")
            t.then(qi, qi);
          else {
            if (e = fe, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(l) {
                if (t.status === "pending") {
                  var u = t;
                  u.status = "fulfilled", u.value = l;
                }
              },
              function(l) {
                if (t.status === "pending") {
                  var u = t;
                  u.status = "rejected", u.reason = l;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Gh(e), e;
          }
          throw $o = t, Lc = !0, Vc;
      }
    }
    function Nh() {
      if ($o === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = $o;
      return $o = null, Lc = !1, e;
    }
    function Gh(e) {
      if (e === Vc)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function ke(e) {
      var t = X;
      return e != null && (X = t === null ? e : t.concat(e)), t;
    }
    function ji(e, t, n) {
      for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
        var u = a[l];
        if (u !== "children" && u !== "key") {
          t === null && (t = uc(e, n.mode, 0), t._debugInfo = X, t.return = n), U(
            t,
            function(o) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                o
              );
            },
            u
          );
          break;
        }
      }
    }
    function Yi(e) {
      var t = Wo;
      return Wo += 1, Ou === null && (Ou = Yh()), Lh(Ou, e, t);
    }
    function co(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Vi(e, t) {
      throw t.$$typeof === Qb ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Li(e, t) {
      var n = H(e) || "Component";
      Bg[n] || (Bg[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
        n,
        t,
        n
      ));
    }
    function Ni(e, t) {
      var n = H(e) || "Component";
      qg[n] || (qg[n] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        n,
        t,
        n
      ));
    }
    function Xh(e) {
      function t(f, r) {
        if (e) {
          var h = f.deletions;
          h === null ? (f.deletions = [r], f.flags |= 16) : h.push(r);
        }
      }
      function n(f, r) {
        if (!e) return null;
        for (; r !== null; )
          t(f, r), r = r.sibling;
        return null;
      }
      function a(f) {
        for (var r = /* @__PURE__ */ new Map(); f !== null; )
          f.key !== null ? r.set(f.key, f) : r.set(f.index, f), f = f.sibling;
        return r;
      }
      function l(f, r) {
        return f = Da(f, r), f.index = 0, f.sibling = null, f;
      }
      function u(f, r, h) {
        return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < r ? (f.flags |= 33554434, r) : h) : (f.flags |= 33554434, r)) : (f.flags |= 1048576, r);
      }
      function o(f) {
        return e && f.alternate === null && (f.flags |= 33554434), f;
      }
      function i(f, r, h, v) {
        return r === null || r.tag !== 6 ? (r = Lr(
          h,
          f.mode,
          v
        ), r.return = f, r._debugOwner = f, r._debugInfo = X, r) : (r = l(r, h), r.return = f, r._debugInfo = X, r);
      }
      function c(f, r, h, v) {
        var R = h.type;
        return R === du ? (r = m(
          f,
          r,
          h.props.children,
          v,
          h.key
        ), ji(h, r, f), r) : r !== null && (r.elementType === R || Mh(r, h) || typeof R == "object" && R !== null && R.$$typeof === Ot && Ba(R) === r.type) ? (r = l(r, h.props), co(r, h), r.return = f, r._debugOwner = h._owner, r._debugInfo = X, r) : (r = uc(h, f.mode, v), co(r, h), r.return = f, r._debugInfo = X, r);
      }
      function s(f, r, h, v) {
        return r === null || r.tag !== 4 || r.stateNode.containerInfo !== h.containerInfo || r.stateNode.implementation !== h.implementation ? (r = Nr(h, f.mode, v), r.return = f, r._debugInfo = X, r) : (r = l(r, h.children || []), r.return = f, r._debugInfo = X, r);
      }
      function m(f, r, h, v, R) {
        return r === null || r.tag !== 7 ? (r = yl(
          h,
          f.mode,
          v,
          R
        ), r.return = f, r._debugOwner = f, r._debugInfo = X, r) : (r = l(r, h), r.return = f, r._debugInfo = X, r);
      }
      function b(f, r, h) {
        if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
          return r = Lr(
            "" + r,
            f.mode,
            h
          ), r.return = f, r._debugOwner = f, r._debugInfo = X, r;
        if (typeof r == "object" && r !== null) {
          switch (r.$$typeof) {
            case Oa:
              return h = uc(
                r,
                f.mode,
                h
              ), co(h, r), h.return = f, f = ke(r._debugInfo), h._debugInfo = X, X = f, h;
            case fu:
              return r = Nr(
                r,
                f.mode,
                h
              ), r.return = f, r._debugInfo = X, r;
            case Ot:
              var v = ke(r._debugInfo);
              return r = Ba(r), f = b(f, r, h), X = v, f;
          }
          if (Ke(r) || ue(r))
            return h = yl(
              r,
              f.mode,
              h,
              null
            ), h.return = f, h._debugOwner = f, f = ke(r._debugInfo), h._debugInfo = X, X = f, h;
          if (typeof r.then == "function")
            return v = ke(r._debugInfo), f = b(
              f,
              Yi(r),
              h
            ), X = v, f;
          if (r.$$typeof === zn)
            return b(
              f,
              tc(f, r),
              h
            );
          Vi(f, r);
        }
        return typeof r == "function" && Li(f, r), typeof r == "symbol" && Ni(f, r), null;
      }
      function p(f, r, h, v) {
        var R = r !== null ? r.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
          return R !== null ? null : i(f, r, "" + h, v);
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case Oa:
              return h.key === R ? (R = ke(h._debugInfo), f = c(
                f,
                r,
                h,
                v
              ), X = R, f) : null;
            case fu:
              return h.key === R ? s(f, r, h, v) : null;
            case Ot:
              return R = ke(h._debugInfo), h = Ba(h), f = p(
                f,
                r,
                h,
                v
              ), X = R, f;
          }
          if (Ke(h) || ue(h))
            return R !== null ? null : (R = ke(h._debugInfo), f = m(
              f,
              r,
              h,
              v,
              null
            ), X = R, f);
          if (typeof h.then == "function")
            return R = ke(h._debugInfo), f = p(
              f,
              r,
              Yi(h),
              v
            ), X = R, f;
          if (h.$$typeof === zn)
            return p(
              f,
              r,
              tc(f, h),
              v
            );
          Vi(f, h);
        }
        return typeof h == "function" && Li(f, h), typeof h == "symbol" && Ni(f, h), null;
      }
      function S(f, r, h, v, R) {
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
          return f = f.get(h) || null, i(r, f, "" + v, R);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case Oa:
              return h = f.get(
                v.key === null ? h : v.key
              ) || null, f = ke(v._debugInfo), r = c(
                r,
                h,
                v,
                R
              ), X = f, r;
            case fu:
              return f = f.get(
                v.key === null ? h : v.key
              ) || null, s(r, f, v, R);
            case Ot:
              var j = ke(v._debugInfo);
              return v = Ba(v), r = S(
                f,
                r,
                h,
                v,
                R
              ), X = j, r;
          }
          if (Ke(v) || ue(v))
            return h = f.get(h) || null, f = ke(v._debugInfo), r = m(
              r,
              h,
              v,
              R,
              null
            ), X = f, r;
          if (typeof v.then == "function")
            return j = ke(v._debugInfo), r = S(
              f,
              r,
              h,
              Yi(v),
              R
            ), X = j, r;
          if (v.$$typeof === zn)
            return S(
              f,
              r,
              h,
              tc(r, v),
              R
            );
          Vi(r, v);
        }
        return typeof v == "function" && Li(r, v), typeof v == "symbol" && Ni(r, v), null;
      }
      function O(f, r, h, v) {
        if (typeof h != "object" || h === null) return v;
        switch (h.$$typeof) {
          case Oa:
          case fu:
            Nn(f, r, h);
            var R = h.key;
            if (typeof R != "string") break;
            if (v === null) {
              v = /* @__PURE__ */ new Set(), v.add(R);
              break;
            }
            if (!v.has(R)) {
              v.add(R);
              break;
            }
            U(r, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                R
              );
            });
            break;
          case Ot:
            h = Ba(h), O(f, r, h, v);
        }
        return v;
      }
      function N(f, r, h, v) {
        for (var R = null, j = null, z = null, V = r, G = r = 0, ge = null; V !== null && G < h.length; G++) {
          V.index > G ? (ge = V, V = null) : ge = V.sibling;
          var Oe = p(
            f,
            V,
            h[G],
            v
          );
          if (Oe === null) {
            V === null && (V = ge);
            break;
          }
          R = O(
            f,
            Oe,
            h[G],
            R
          ), e && V && Oe.alternate === null && t(f, V), r = u(Oe, r, G), z === null ? j = Oe : z.sibling = Oe, z = Oe, V = ge;
        }
        if (G === h.length)
          return n(f, V), F && ul(f, G), j;
        if (V === null) {
          for (; G < h.length; G++)
            V = b(f, h[G], v), V !== null && (R = O(
              f,
              V,
              h[G],
              R
            ), r = u(
              V,
              r,
              G
            ), z === null ? j = V : z.sibling = V, z = V);
          return F && ul(f, G), j;
        }
        for (V = a(V); G < h.length; G++)
          ge = S(
            V,
            f,
            G,
            h[G],
            v
          ), ge !== null && (R = O(
            f,
            ge,
            h[G],
            R
          ), e && ge.alternate !== null && V.delete(
            ge.key === null ? G : ge.key
          ), r = u(
            ge,
            r,
            G
          ), z === null ? j = ge : z.sibling = ge, z = ge);
        return e && V.forEach(function(fa) {
          return t(f, fa);
        }), F && ul(f, G), j;
      }
      function ze(f, r, h, v) {
        if (h == null)
          throw Error("An iterable object provided no iterator.");
        for (var R = null, j = null, z = r, V = r = 0, G = null, ge = null, Oe = h.next(); z !== null && !Oe.done; V++, Oe = h.next()) {
          z.index > V ? (G = z, z = null) : G = z.sibling;
          var fa = p(f, z, Oe.value, v);
          if (fa === null) {
            z === null && (z = G);
            break;
          }
          ge = O(
            f,
            fa,
            Oe.value,
            ge
          ), e && z && fa.alternate === null && t(f, z), r = u(fa, r, V), j === null ? R = fa : j.sibling = fa, j = fa, z = G;
        }
        if (Oe.done)
          return n(f, z), F && ul(f, V), R;
        if (z === null) {
          for (; !Oe.done; V++, Oe = h.next())
            z = b(f, Oe.value, v), z !== null && (ge = O(
              f,
              z,
              Oe.value,
              ge
            ), r = u(
              z,
              r,
              V
            ), j === null ? R = z : j.sibling = z, j = z);
          return F && ul(f, V), R;
        }
        for (z = a(z); !Oe.done; V++, Oe = h.next())
          G = S(
            z,
            f,
            V,
            Oe.value,
            v
          ), G !== null && (ge = O(
            f,
            G,
            Oe.value,
            ge
          ), e && G.alternate !== null && z.delete(
            G.key === null ? V : G.key
          ), r = u(
            G,
            r,
            V
          ), j === null ? R = G : j.sibling = G, j = G);
        return e && z.forEach(function(RT) {
          return t(f, RT);
        }), F && ul(f, V), R;
      }
      function ae(f, r, h, v) {
        if (typeof h == "object" && h !== null && h.type === du && h.key === null && (ji(h, null, f), h = h.props.children), typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case Oa:
              var R = ke(h._debugInfo);
              e: {
                for (var j = h.key; r !== null; ) {
                  if (r.key === j) {
                    if (j = h.type, j === du) {
                      if (r.tag === 7) {
                        n(
                          f,
                          r.sibling
                        ), v = l(
                          r,
                          h.props.children
                        ), v.return = f, v._debugOwner = h._owner, v._debugInfo = X, ji(h, v, f), f = v;
                        break e;
                      }
                    } else if (r.elementType === j || Mh(
                      r,
                      h
                    ) || typeof j == "object" && j !== null && j.$$typeof === Ot && Ba(j) === r.type) {
                      n(
                        f,
                        r.sibling
                      ), v = l(r, h.props), co(v, h), v.return = f, v._debugOwner = h._owner, v._debugInfo = X, f = v;
                      break e;
                    }
                    n(f, r);
                    break;
                  } else t(f, r);
                  r = r.sibling;
                }
                h.type === du ? (v = yl(
                  h.props.children,
                  f.mode,
                  v,
                  h.key
                ), v.return = f, v._debugOwner = f, v._debugInfo = X, ji(h, v, f), f = v) : (v = uc(
                  h,
                  f.mode,
                  v
                ), co(v, h), v.return = f, v._debugInfo = X, f = v);
              }
              return f = o(f), X = R, f;
            case fu:
              e: {
                for (R = h, h = R.key; r !== null; ) {
                  if (r.key === h)
                    if (r.tag === 4 && r.stateNode.containerInfo === R.containerInfo && r.stateNode.implementation === R.implementation) {
                      n(
                        f,
                        r.sibling
                      ), v = l(
                        r,
                        R.children || []
                      ), v.return = f, f = v;
                      break e;
                    } else {
                      n(f, r);
                      break;
                    }
                  else t(f, r);
                  r = r.sibling;
                }
                v = Nr(
                  R,
                  f.mode,
                  v
                ), v.return = f, f = v;
              }
              return o(f);
            case Ot:
              return R = ke(h._debugInfo), h = Ba(h), f = ae(
                f,
                r,
                h,
                v
              ), X = R, f;
          }
          if (Ke(h))
            return R = ke(h._debugInfo), f = N(
              f,
              r,
              h,
              v
            ), X = R, f;
          if (ue(h)) {
            if (R = ke(h._debugInfo), j = ue(h), typeof j != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var z = j.call(h);
            return z === h ? (f.tag !== 0 || Object.prototype.toString.call(f.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(z) !== "[object Generator]") && (Hg || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Hg = !0) : h.entries !== j || Wf || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Wf = !0), f = ze(
              f,
              r,
              z,
              v
            ), X = R, f;
          }
          if (typeof h.then == "function")
            return R = ke(h._debugInfo), f = ae(
              f,
              r,
              Yi(h),
              v
            ), X = R, f;
          if (h.$$typeof === zn)
            return ae(
              f,
              r,
              tc(f, h),
              v
            );
          Vi(f, h);
        }
        return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (R = "" + h, r !== null && r.tag === 6 ? (n(
          f,
          r.sibling
        ), v = l(r, R), v.return = f, f = v) : (n(f, r), v = Lr(
          R,
          f.mode,
          v
        ), v.return = f, v._debugOwner = f, v._debugInfo = X, f = v), o(f)) : (typeof h == "function" && Li(f, h), typeof h == "symbol" && Ni(f, h), n(f, r));
      }
      return function(f, r, h, v) {
        var R = X;
        X = null;
        try {
          Wo = 0;
          var j = ae(
            f,
            r,
            h,
            v
          );
          return Ou = null, j;
        } catch (ge) {
          if (ge === Vc) throw ge;
          var z = Ce(29, ge, null, f.mode);
          z.lanes = v, z.return = f;
          var V = z._debugInfo = X;
          if (z._debugOwner = f._debugOwner, V != null) {
            for (var G = V.length - 1; 0 <= G; G--)
              if (typeof V[G].stack == "string") {
                z._debugOwner = V[G];
                break;
              }
          }
          return z;
        } finally {
          X = R;
        }
      };
    }
    function Qh(e, t) {
      var n = jn;
      ne(Nc, n, e), ne(xu, t, e), jn = n | t.baseLanes;
    }
    function js(e) {
      ne(Nc, jn, e), ne(
        xu,
        xu.current,
        e
      );
    }
    function Ys(e) {
      jn = Nc.current, te(xu, e), te(Nc, e);
    }
    function ba(e) {
      var t = e.alternate;
      ne(
        Be,
        Be.current & Mu,
        e
      ), ne(Wt, e, e), Bn === null && (t === null || xu.current !== null || t.memoizedState !== null) && (Bn = e);
    }
    function Zh(e) {
      if (e.tag === 22) {
        if (ne(Be, Be.current, e), ne(Wt, e, e), Bn === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Bn = e);
        }
      } else Sa(e);
    }
    function Sa(e) {
      ne(Be, Be.current, e), ne(
        Wt,
        Wt.current,
        e
      );
    }
    function Zn(e) {
      te(Wt, e), Bn === e && (Bn = null), te(Be, e);
    }
    function Gi(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === Vl || n.data === Ll))
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
    function Vs() {
      return {
        controller: new nT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function sl(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function so(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && aT(lT, function() {
        e.controller.abort();
      });
    }
    function O0(e, t) {
      if (Io === null) {
        var n = Io = [];
        Ff = 0, Dl = $r(), Uu = {
          status: "pending",
          value: void 0,
          then: function(a) {
            n.push(a);
          }
        };
      }
      return Ff++, t.then(kh, kh), t;
    }
    function kh() {
      if (--Ff === 0 && Io !== null) {
        Uu !== null && (Uu.status = "fulfilled");
        var e = Io;
        Io = null, Dl = 0, Uu = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function x0(e, t) {
      var n = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(l) {
          n.push(l);
        }
      };
      return e.then(
        function() {
          a.status = "fulfilled", a.value = t;
          for (var l = 0; l < n.length; l++) (0, n[l])(t);
        },
        function(l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        }
      ), a;
    }
    function Ls() {
      var e = zl.current;
      return e !== null ? e : fe.pooledCache;
    }
    function Xi(e, t) {
      t === null ? ne(zl, zl.current, e) : ne(zl, t.pool, e);
    }
    function Jh() {
      var e = Ls();
      return e === null ? null : { parent: je._currentValue, pool: e };
    }
    function k() {
      var e = y;
      Pt === null ? Pt = [e] : Pt.push(e);
    }
    function T() {
      var e = y;
      if (Pt !== null && (la++, Pt[la] !== e)) {
        var t = H(
          q
        );
        if (!Vg.has(t) && (Vg.add(t), Pt !== null)) {
          for (var n = "", a = 0; a <= la; a++) {
            var l = Pt[a], u = a === la ? e : l;
            for (l = a + 1 + ". " + l; 30 > l.length; )
              l += " ";
            l += u + `
`, n += l;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            n
          );
        }
      }
    }
    function Fl(e) {
      e == null || Ke(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        y,
        typeof e
      );
    }
    function Qi() {
      var e = H(q);
      Ng.has(e) || (Ng.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function De() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ns(e, t) {
      if (ei) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          y
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        y,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!ct(e[n], t[n])) return !1;
      return !0;
    }
    function Gs(e, t, n, a, l, u) {
      qa = u, q = t, Pt = e !== null ? e._debugHookTypes : null, la = -1, ei = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (u = H(
        q
      ), If.has(u) || (If.add(u), console.error(
        "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = e !== null && e.memoizedState !== null ? Ya : Pt !== null ? xl : ja, Ol = u = (t.mode & at) !== he;
      var o = Kf(n, a, l);
      if (Ol = !1, wu && (o = Xs(
        t,
        n,
        a,
        l
      )), u) {
        re(!0);
        try {
          o = Xs(
            t,
            n,
            a,
            l
          );
        } finally {
          re(!1);
        }
      }
      return _h(e, t), o;
    }
    function _h(e, t) {
      t._debugHookTypes = Pt, t.dependencies === null ? aa !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: aa
      }) : t.dependencies._debugThenableState = aa, g.H = qn;
      var n = se !== null && se.next !== null;
      if (qa = 0, Pt = y = He = se = q = null, la = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Gc = !1, Po = 0, aa = null, n)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xe || (e = e.dependencies, e !== null && ec(e) && (Xe = !0)), Lc ? (Lc = !1, e = !0) : e = !1, e && (t = H(t) || "Unknown", Lg.has(t) || If.has(t) || (Lg.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Xs(e, t, n, a) {
      q = e;
      var l = 0;
      do {
        if (wu && (aa = null), Po = 0, wu = !1, l >= oT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (l += 1, ei = !1, He = se = null, e.updateQueue != null) {
          var u = e.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        la = -1, g.H = Ml, u = Kf(t, n, a);
      } while (wu);
      return u;
    }
    function M0() {
      var e = g.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ro(t) : t, e = e.useState()[0], (se !== null ? se.memoizedState : null) !== e && (q.flags |= 1024), t;
    }
    function Qs() {
      var e = Xc !== 0;
      return Xc = 0, e;
    }
    function Zs(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & rn) !== he ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~n;
    }
    function ks(e) {
      if (Gc) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Gc = !1;
      }
      qa = 0, Pt = He = se = q = null, la = -1, y = null, wu = !1, Po = Xc = 0, aa = null;
    }
    function gt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return He === null ? q.memoizedState = He = e : He = He.next = e, He;
    }
    function oe() {
      if (se === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = se.next;
      var t = He === null ? q.memoizedState : He.next;
      if (t !== null)
        He = t, se = e;
      else {
        if (e === null)
          throw q.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        se = e, e = {
          memoizedState: se.memoizedState,
          baseState: se.baseState,
          baseQueue: se.baseQueue,
          queue: se.queue,
          next: null
        }, He === null ? q.memoizedState = He = e : He = He.next = e;
      }
      return He;
    }
    function ro(e) {
      var t = Po;
      return Po += 1, aa === null && (aa = Yh()), e = Lh(aa, e, t), t = q, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, g.H = t !== null && t.memoizedState !== null ? Ya : ja), e;
    }
    function Ta(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ro(e);
        if (e.$$typeof === zn) return ve(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function rl(e) {
      var t = null, n = q.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var a = q.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
          data: a.data.map(function(l) {
            return l.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Pf(), q.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || ei)
        for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
          n[a] = kb;
      else
        n.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          n.length,
          e
        );
      return t.index++, n;
    }
    function cn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Js(e, t, n) {
      var a = gt();
      if (n !== void 0) {
        var l = n(t);
        if (Ol) {
          re(!0);
          try {
            n(t);
          } finally {
            re(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = B0.bind(
        null,
        q,
        e
      ), [a.memoizedState, e];
    }
    function Il(e) {
      var t = oe();
      return _s(t, se, e);
    }
    function _s(e, t, n) {
      var a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = n;
      var l = e.baseQueue, u = a.pending;
      if (u !== null) {
        if (l !== null) {
          var o = l.next;
          l.next = u.next, u.next = o;
        }
        t.baseQueue !== l && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = l = u, a.pending = null;
      }
      if (u = e.baseState, l === null) e.memoizedState = u;
      else {
        t = l.next;
        var i = o = null, c = null, s = t, m = !1;
        do {
          var b = s.lane & -536870913;
          if (b !== s.lane ? (J & b) === b : (qa & b) === b) {
            var p = s.revertLane;
            if (p === 0)
              c !== null && (c = c.next = {
                lane: 0,
                revertLane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
              }), b === Dl && (m = !0);
            else if ((qa & p) === p) {
              s = s.next, p === Dl && (m = !0);
              continue;
            } else
              b = {
                lane: 0,
                revertLane: s.revertLane,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
              }, c === null ? (i = c = b, o = u) : c = c.next = b, q.lanes |= p, Na |= p;
            b = s.action, Ol && n(u, b), u = s.hasEagerState ? s.eagerState : n(u, b);
          } else
            p = {
              lane: b,
              revertLane: s.revertLane,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null
            }, c === null ? (i = c = p, o = u) : c = c.next = p, q.lanes |= b, Na |= b;
          s = s.next;
        } while (s !== null && s !== t);
        if (c === null ? o = u : c.next = i, !ct(u, e.memoizedState) && (Xe = !0, m && (n = Uu, n !== null)))
          throw n;
        e.memoizedState = u, e.baseState = o, e.baseQueue = c, a.lastRenderedState = u;
      }
      return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function fo(e) {
      var t = oe(), n = t.queue;
      if (n === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      n.lastRenderedReducer = e;
      var a = n.dispatch, l = n.pending, u = t.memoizedState;
      if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
          u = e(u, o.action), o = o.next;
        while (o !== l);
        ct(u, t.memoizedState) || (Xe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
      }
      return [u, a];
    }
    function Ks(e, t, n) {
      var a = q, l = gt();
      if (F) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var u = n();
        Hu || u === n() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Hu = !0);
      } else {
        if (u = t(), Hu || (n = t(), ct(u, n) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Hu = !0)), fe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        J & 60 || Kh(a, t, u);
      }
      return l.memoizedState = u, n = { value: u, getSnapshot: t }, l.queue = n, _i(
        Wh.bind(null, a, n, e),
        [e]
      ), a.flags |= 2048, eu(
        It | qe,
        $h.bind(
          null,
          a,
          n,
          u,
          t
        ),
        { destroy: void 0 },
        null
      ), u;
    }
    function Zi(e, t, n) {
      var a = q, l = oe(), u = F;
      if (u) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        n = n();
      } else if (n = t(), !Hu) {
        var o = t();
        ct(n, o) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Hu = !0);
      }
      (o = !ct(
        (se || l).memoizedState,
        n
      )) && (l.memoizedState = n, Xe = !0), l = l.queue;
      var i = Wh.bind(null, a, l, e);
      if (vt(2048, qe, i, [e]), l.getSnapshot !== t || o || He !== null && He.memoizedState.tag & It) {
        if (a.flags |= 2048, eu(
          It | qe,
          $h.bind(
            null,
            a,
            l,
            n,
            t
          ),
          { destroy: void 0 },
          null
        ), fe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        u || qa & 60 || Kh(a, t, n);
      }
      return n;
    }
    function Kh(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = Pf(), q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function $h(e, t, n, a) {
      t.value = n, t.getSnapshot = a, Fh(t) && Ih(e);
    }
    function Wh(e, t, n) {
      return n(function() {
        Fh(t) && Ih(e);
      });
    }
    function Fh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !ct(e, n);
      } catch {
        return !0;
      }
    }
    function Ih(e) {
      var t = Pe(e, 2);
      t !== null && Ee(t, e, 2);
    }
    function $s(e) {
      var t = gt();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), Ol) {
          re(!0);
          try {
            n();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: e
      }, t;
    }
    function Ws(e) {
      e = $s(e);
      var t = e.queue, n = gm.bind(
        null,
        q,
        t
      );
      return t.dispatch = n, [e.memoizedState, n];
    }
    function Fs(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = rr.bind(
        null,
        q,
        !0,
        n
      ), n.dispatch = t, [e, t];
    }
    function Ph(e, t) {
      var n = oe();
      return em(n, se, e, t);
    }
    function em(e, t, n, a) {
      return e.baseState = n, _s(
        e,
        se,
        typeof a == "function" ? a : cn
      );
    }
    function tm(e, t) {
      var n = oe();
      return se !== null ? em(n, se, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }
    function U0(e, t, n, a, l) {
      if (Fi(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var u = {
          payload: l,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(o) {
            u.listeners.push(o);
          }
        };
        g.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, nm(t, u)) : (u.next = n.next, t.pending = n.next = u);
      }
    }
    function nm(e, t) {
      var n = t.action, a = t.payload, l = e.state;
      if (t.isTransition) {
        var u = g.T, o = {};
        g.T = o, g.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var i = n(l, a), c = g.S;
          c !== null && c(o, i), am(e, t, i);
        } catch (s) {
          Is(e, t, s);
        } finally {
          g.T = u, u === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          o = n(l, a), am(e, t, o);
        } catch (s) {
          Is(e, t, s);
        }
    }
    function am(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? (n.then(
        function(a) {
          lm(e, t, a);
        },
        function(a) {
          return Is(e, t, a);
        }
      ), t.isTransition || console.error(
        "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
      )) : lm(e, t, n);
    }
    function lm(e, t, n) {
      t.status = "fulfilled", t.value = n, um(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, nm(e, n)));
    }
    function Is(e, t, n) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = n, um(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function um(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function om(e, t) {
      return t;
    }
    function Pl(e, t) {
      if (F) {
        var n = fe.formState;
        if (n !== null) {
          e: {
            var a = q;
            if (F) {
              if (We) {
                t: {
                  for (var l = We, u = wn; l.nodeType !== 8; ) {
                    if (!u) {
                      l = null;
                      break t;
                    }
                    if (l = Qt(
                      l.nextSibling
                    ), l === null) {
                      l = null;
                      break t;
                    }
                  }
                  u = l.data, l = u === Dd || u === Dv ? l : null;
                }
                if (l) {
                  We = Qt(
                    l.nextSibling
                  ), a = l.data === Dd;
                  break e;
                }
              }
              cl(a);
            }
            a = !1;
          }
          a && (t = n[0]);
        }
      }
      return n = gt(), n.memoizedState = n.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: om,
        lastRenderedState: t
      }, n.queue = a, n = gm.bind(
        null,
        q,
        a
      ), a.dispatch = n, a = $s(!1), u = rr.bind(
        null,
        q,
        !1,
        a.queue
      ), a = gt(), l = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, a.queue = l, n = U0.bind(
        null,
        q,
        l,
        u,
        n
      ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
    }
    function ki(e) {
      var t = oe();
      return im(t, se, e);
    }
    function im(e, t, n) {
      t = _s(
        e,
        t,
        om
      )[0], e = Il(cn)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? ro(t) : t;
      var a = oe(), l = a.queue, u = l.dispatch;
      return n !== a.memoizedState && (q.flags |= 2048, eu(
        It | qe,
        H0.bind(null, l, n),
        { destroy: void 0 },
        null
      )), [t, u, e];
    }
    function H0(e, t) {
      e.action = t;
    }
    function Ji(e) {
      var t = oe(), n = se;
      if (n !== null)
        return im(t, n, e);
      oe(), t = t.memoizedState, n = oe();
      var a = n.queue.dispatch;
      return n.memoizedState = e, [t, a, !1];
    }
    function eu(e, t, n, a) {
      return e = { tag: e, create: t, inst: n, deps: a, next: null }, t = q.updateQueue, t === null && (t = Pf(), q.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
    }
    function Ps(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    }
    function fl(e, t, n, a) {
      var l = gt();
      q.flags |= e, l.memoizedState = eu(
        It | t,
        n,
        { destroy: void 0 },
        a === void 0 ? null : a
      );
    }
    function vt(e, t, n, a) {
      var l = oe();
      a = a === void 0 ? null : a;
      var u = l.memoizedState.inst;
      se !== null && a !== null && Ns(a, se.memoizedState.deps) ? l.memoizedState = eu(t, n, u, a) : (q.flags |= e, l.memoizedState = eu(
        It | t,
        n,
        u,
        a
      ));
    }
    function _i(e, t) {
      (q.mode & rn) !== he && (q.mode & gg) === he ? fl(142608384, qe, e, t) : fl(8390656, qe, e, t);
    }
    function er(e, t) {
      var n = 4194308;
      return (q.mode & rn) !== he && (n |= 67108864), fl(n, Fe, e, t);
    }
    function cm(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
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
    function tr(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null;
      var a = 4194308;
      (q.mode & rn) !== he && (a |= 67108864), fl(
        a,
        Fe,
        cm.bind(null, t, e),
        n
      );
    }
    function Ki(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null, vt(
        4,
        Fe,
        cm.bind(null, t, e),
        n
      );
    }
    function nr(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function $i(e, t) {
      var n = oe();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return t !== null && Ns(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
    }
    function ar(e, t) {
      var n = gt();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ol) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function Wi(e, t) {
      var n = oe();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      if (t !== null && Ns(t, a[1]))
        return a[0];
      if (a = e(), Ol) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function lr(e, t) {
      var n = gt();
      return ur(n, e, t);
    }
    function sm(e, t) {
      var n = oe();
      return fm(
        n,
        se.memoizedState,
        e,
        t
      );
    }
    function rm(e, t) {
      var n = oe();
      return se === null ? ur(n, e, t) : fm(
        n,
        se.memoizedState,
        e,
        t
      );
    }
    function ur(e, t, n) {
      return n === void 0 || qa & 1073741824 ? e.memoizedState = t : (e.memoizedState = n, e = pp(), q.lanes |= e, Na |= e, n);
    }
    function fm(e, t, n, a) {
      return ct(n, t) ? n : xu.current !== null ? (e = ur(e, n, a), ct(e, t) || (Xe = !0), e) : qa & 42 ? (e = pp(), q.lanes |= e, Na |= e, t) : (Xe = !0, e.memoizedState = n);
    }
    function dm(e, t, n, a, l) {
      var u = pe.p;
      pe.p = u !== 0 && u < Un ? u : Un;
      var o = g.T, i = {};
      g.T = i, rr(e, !1, t, n), i._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var c = l(), s = g.S;
        if (s !== null && s(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = x0(
            c,
            a
          );
          ho(
            e,
            t,
            m,
            zt(e)
          );
        } else
          ho(
            e,
            t,
            a,
            zt(e)
          );
      } catch (b) {
        ho(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: b },
          zt(e)
        );
      } finally {
        pe.p = u, g.T = o, o === null && i._updatedFibers && (e = i._updatedFibers.size, i._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function or(e, t, n, a) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var l = hm(e).queue;
      dm(
        e,
        l,
        t,
        Gl,
        n === null ? Ln : function() {
          return mm(e), n(a);
        }
      );
    }
    function hm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Gl,
        baseState: Gl,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: Gl
        },
        next: null
      };
      var n = {};
      return t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: n
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function mm(e) {
      g.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = hm(e).next.queue;
      ho(
        e,
        t,
        {},
        zt(e)
      );
    }
    function ir() {
      var e = $s(!1);
      return e = dm.bind(
        null,
        q,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    }
    function pm() {
      var e = Il(cn)[0], t = oe().memoizedState;
      return [
        typeof e == "boolean" ? e : ro(e),
        t
      ];
    }
    function ym() {
      var e = fo(cn)[0], t = oe().memoizedState;
      return [
        typeof e == "boolean" ? e : ro(e),
        t
      ];
    }
    function dl() {
      return ve(pi);
    }
    function cr() {
      var e = gt(), t = fe.identifierPrefix;
      if (F) {
        var n = ta, a = ea;
        n = (a & ~(1 << 32 - ot(a) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xc++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else
        n = uT++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    }
    function sr() {
      return gt().memoizedState = w0.bind(
        null,
        q
      );
    }
    function w0(e, t) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var a = zt(n);
            e = Ra(a);
            var l = Aa(n, e, a);
            l !== null && (Ee(l, n, a), yo(l, n, a)), n = Vs(), t != null && l !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: n };
            return;
        }
        n = n.return;
      }
    }
    function B0(e, t, n, a) {
      typeof a == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), a = zt(e), n = {
        lane: a,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Fi(e) ? vm(t, n) : (n = Os(
        e,
        t,
        n,
        a
      ), n !== null && (Ee(
        n,
        e,
        a
      ), bm(
        n,
        t,
        a
      ))), _(e, a);
    }
    function gm(e, t, n, a) {
      typeof a == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), a = zt(e), ho(
        e,
        t,
        n,
        a
      ), _(e, a);
    }
    function ho(e, t, n, a) {
      var l = {
        lane: a,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Fi(e)) vm(t, l);
      else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) {
          var o = g.H;
          g.H = ft;
          try {
            var i = t.lastRenderedState, c = u(i, n);
            if (l.hasEagerState = !0, l.eagerState = c, ct(c, i))
              return Ui(e, t, l, 0), fe === null && Mi(), !1;
          } catch {
          } finally {
            g.H = o;
          }
        }
        if (n = Os(e, t, l, a), n !== null)
          return Ee(n, e, a), bm(n, t, a), !0;
      }
      return !1;
    }
    function rr(e, t, n, a) {
      if (g.T === null && Dl === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), a = {
        lane: 2,
        revertLane: $r(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Fi(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Os(
          e,
          n,
          a,
          2
        ), t !== null && Ee(t, e, 2);
      _(e, 2);
    }
    function Fi(e) {
      var t = e.alternate;
      return e === q || t !== null && t === q;
    }
    function vm(e, t) {
      wu = Gc = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function bm(e, t, n) {
      if (n & 4194176) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Gd(e, n);
      }
    }
    function fr(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Fg.has(t) || (Fg.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function dr(e, t, n, a) {
      var l = e.memoizedState, u = n(a, l);
      if (e.mode & at) {
        re(!0);
        try {
          u = n(a, l);
        } finally {
          re(!1);
        }
      }
      u === void 0 && (t = B(t) || "Component", _g.has(t) || (_g.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), l = u == null ? l : Q({}, l, u), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    function Sm(e, t, n, a, l, u, o) {
      var i = e.stateNode;
      if (typeof i.shouldComponentUpdate == "function") {
        if (n = i.shouldComponentUpdate(
          a,
          u,
          o
        ), e.mode & at) {
          re(!0);
          try {
            n = i.shouldComponentUpdate(
              a,
              u,
              o
            );
          } finally {
            re(!1);
          }
        }
        return n === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          B(t) || "Component"
        ), n;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ao(n, a) || !ao(l, u) : !0;
    }
    function Tm(e, t, n, a) {
      var l = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== l && (e = H(e) || "Component", Xg.has(e) || (Xg.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), ed.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function hl(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var a in t)
          a !== "ref" && (n[a] = t[a]);
      }
      if (e = e.defaultProps) {
        n === t && (n = Q({}, n));
        for (var l in e)
          n[l] === void 0 && (n[l] = e[l]);
      }
      return n;
    }
    function Em(e, t) {
      Qc(e), e = Bu ? "An error occurred in the <" + Bu + "> component." : "An error occurred in one of your React components.";
      var n = g.getCurrentStack, a = t.componentStack != null ? t.componentStack : "";
      g.getCurrentStack = function() {
        return a;
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
        g.getCurrentStack = n;
      }
    }
    function Rm(e, t) {
      var n = Bu ? "The above error occurred in the <" + Bu + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((td || "Anonymous") + "."), l = g.getCurrentStack, u = t.componentStack != null ? t.componentStack : "";
      g.getCurrentStack = function() {
        return u;
      };
      try {
        typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Bb(
          "error",
          [
            `%o

%s

%s
`,
            e,
            n,
            a
          ],
          e.environmentName
        )() : console.error(
          `%o

%s

%s
`,
          e,
          n,
          a
        );
      } finally {
        g.getCurrentStack = l;
      }
    }
    function Am(e) {
      Qc(e);
    }
    function Ii(e, t) {
      try {
        Bu = t.source ? H(t.source) : null, td = null;
        var n = t.value;
        if (g.actQueue !== null)
          g.thrownErrors.push(n);
        else {
          var a = e.onUncaughtError;
          a(n, { componentStack: t.stack });
        }
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function Cm(e, t, n) {
      try {
        Bu = n.source ? H(n.source) : null, td = H(t);
        var a = e.onCaughtError;
        a(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function hr(e, t, n) {
      return n = Ra(n), n.tag = od, n.payload = { element: null }, n.callback = function() {
        U(t.source, Ii, e, t);
      }, n;
    }
    function mr(e) {
      return e = Ra(e), e.tag = od, e;
    }
    function pr(e, t, n, a) {
      var l = n.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var u = a.value;
        e.payload = function() {
          return l(u);
        }, e.callback = function() {
          Uh(n), U(
            a.source,
            Cm,
            t,
            n,
            a
          );
        };
      }
      var o = n.stateNode;
      o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
        Uh(n), U(
          a.source,
          Cm,
          t,
          n,
          a
        ), typeof l != "function" && (Xa === null ? Xa = /* @__PURE__ */ new Set([this]) : Xa.add(this)), PS(this, a), typeof l == "function" || !(n.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          H(n) || "Unknown"
        );
      });
    }
    function q0(e, t, n, a, l) {
      if (n.flags |= 32768, sn && Ro(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = n.alternate, t !== null && po(
          t,
          n,
          l,
          !0
        ), F && (na = !0), n = Wt.current, n !== null) {
          switch (n.tag) {
            case 13:
              return Bn === null ? Qr() : n.alternate === null && Ae === ia && (Ae = rd), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === _f ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Jr(e, a, l)), !1;
            case 22:
              return n.flags |= 65536, a === _f ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([a])
              }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Jr(e, a, l)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React."
          );
        }
        return Jr(e, a, l), Qr(), !1;
      }
      if (F)
        return na = !0, t = Wt.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Jf && io(
          Ct(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: a }
            ),
            n
          )
        )) : (a !== Jf && io(
          Ct(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: a }
            ),
            n
          )
        ), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = Ct(a, n), l = hr(
          e.stateNode,
          a,
          l
        ), nc(e, l), Ae !== Ul && (Ae = Nu)), !1;
      var u = Ct(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: a }
        ),
        n
      );
      if (ii === null ? ii = [u] : ii.push(u), Ae !== Ul && (Ae = Nu), t === null) return !0;
      a = Ct(a, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = l & -l, n.lanes |= e, e = hr(
              n.stateNode,
              a,
              e
            ), nc(n, e), !1;
          case 1:
            if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Xa === null || !Xa.has(u))))
              return n.flags |= 65536, l &= -l, n.lanes |= l, l = mr(l), pr(
                l,
                e,
                n,
                a
              ), nc(n, l), !1;
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    function Je(e, t, n, a) {
      t.child = e === null ? jg(t, null, n, a) : Cl(
        t,
        e.child,
        n,
        a
      );
    }
    function Dm(e, t, n, a, l) {
      n = n.render;
      var u = t.ref;
      if ("ref" in a) {
        var o = {};
        for (var i in a)
          i !== "ref" && (o[i] = a[i]);
      } else o = a;
      return ml(t), ga(t), a = Gs(
        e,
        t,
        n,
        o,
        u,
        l
      ), i = Qs(), d(), e !== null && !Xe ? (Zs(e, t, l), kn(e, t, l)) : (F && i && ws(t), t.flags |= 1, Je(e, t, a, l), t.child);
    }
    function zm(e, t, n, a, l) {
      if (e === null) {
        var u = n.type;
        return typeof u == "function" && !Yr(u) && u.defaultProps === void 0 && n.compare === null ? (n = ll(u), t.tag = 15, t.type = n, gr(t, u), Om(
          e,
          t,
          n,
          a,
          l
        )) : (e = Vr(
          n.type,
          null,
          a,
          t,
          t.mode,
          l
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (u = e.child, !Ar(e, l)) {
        var o = u.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ao, n(o, a) && e.ref === t.ref)
          return kn(
            e,
            t,
            l
          );
      }
      return t.flags |= 1, e = Da(u, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Om(e, t, n, a, l) {
      if (e !== null) {
        var u = e.memoizedProps;
        if (ao(u, a) && e.ref === t.ref && t.type === e.type)
          if (Xe = !1, t.pendingProps = a = u, Ar(e, l))
            e.flags & 131072 && (Xe = !0);
          else
            return t.lanes = e.lanes, kn(e, t, l);
      }
      return yr(
        e,
        t,
        n,
        a,
        l
      );
    }
    function xm(e, t, n) {
      var a = t.pendingProps, l = a.children, u = (t.stateNode._pendingVisibility & Xo) !== 0, o = e !== null ? e.memoizedState : null;
      if (mo(e, t), a.mode === "hidden" || u) {
        if (t.flags & 128) {
          if (a = o !== null ? o.baseLanes | n : n, e !== null) {
            for (l = t.child = e.child, u = 0; l !== null; )
              u = u | l.lanes | l.childLanes, l = l.sibling;
            t.childLanes = u & ~a;
          } else t.childLanes = 0, t.child = null;
          return Mm(
            e,
            t,
            a,
            n
          );
        }
        if (n & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Xi(
            t,
            o !== null ? o.cachePool : null
          ), o !== null ? Qh(t, o) : js(t), Zh(t);
        else
          return t.lanes = t.childLanes = 536870912, Mm(
            e,
            t,
            o !== null ? o.baseLanes | n : n,
            n
          );
      } else
        o !== null ? (Xi(t, o.cachePool), Qh(t, o), Sa(t), t.memoizedState = null) : (e !== null && Xi(t, null), js(t), Sa(t));
      return Je(e, t, l, n), t.child;
    }
    function Mm(e, t, n, a) {
      var l = Ls();
      return l = l === null ? null : {
        parent: je._currentValue,
        pool: l
      }, t.memoizedState = {
        baseLanes: n,
        cachePool: l
      }, e !== null && Xi(t, null), js(t), Zh(t), e !== null && po(e, t, a, !0), null;
    }
    function mo(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 2097664);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== n) && (t.flags |= 2097664);
      }
    }
    function yr(e, t, n, a, l) {
      if (n.prototype && typeof n.prototype.render == "function") {
        var u = B(n) || "Unknown";
        Pg[u] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          u,
          u
        ), Pg[u] = !0);
      }
      return t.mode & at && fn.recordLegacyContextWarning(
        t,
        null
      ), e === null && (gr(t, t.type), n.contextTypes && (u = B(n) || "Unknown", tv[u] || (tv[u] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        u
      )))), ml(t), ga(t), n = Gs(
        e,
        t,
        n,
        a,
        void 0,
        l
      ), a = Qs(), d(), e !== null && !Xe ? (Zs(e, t, l), kn(e, t, l)) : (F && a && ws(t), t.flags |= 1, Je(e, t, n, l), t.child);
    }
    function Um(e, t, n, a, l, u) {
      return ml(t), ga(t), la = -1, ei = e !== null && e.type !== t.type, t.updateQueue = null, n = Xs(
        t,
        a,
        n,
        l
      ), _h(e, t), a = Qs(), d(), e !== null && !Xe ? (Zs(e, t, u), kn(e, t, u)) : (F && a && ws(t), t.flags |= 1, Je(e, t, n, u), t.child);
    }
    function Hm(e, t, n, a, l) {
      switch (Ie(t)) {
        case !1:
          var u = t.stateNode, o = new t.type(
            t.memoizedProps,
            u.context
          ).state;
          u.updater.enqueueSetState(u, o, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, u = Error("Simulated error coming from DevTools");
          var i = l & -l;
          if (t.lanes |= i, o = fe, o === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          i = mr(i), pr(
            i,
            o,
            t,
            Ct(u, t)
          ), nc(t, i);
      }
      if (ml(t), t.stateNode === null) {
        if (o = wa, u = n.contextType, "contextType" in n && u !== null && (u === void 0 || u.$$typeof !== zn) && !Wg.has(n) && (Wg.add(n), i = u === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof u != "object" ? " However, it is set to a " + typeof u + "." : u.$$typeof === gf ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(u).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          B(n) || "Component",
          i
        )), typeof u == "object" && u !== null && (o = ve(u)), u = new n(a, o), t.mode & at) {
          re(!0);
          try {
            u = new n(a, o);
          } finally {
            re(!1);
          }
        }
        if (o = t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ed, t.stateNode = u, u._reactInternals = t, u._reactInternalInstance = Gg, typeof n.getDerivedStateFromProps == "function" && o === null && (o = B(n) || "Component", Qg.has(o) || (Qg.add(o), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          o,
          u.state === null ? "null" : "undefined",
          o
        ))), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function") {
          var c = i = o = null;
          if (typeof u.componentWillMount == "function" && u.componentWillMount.__suppressDeprecationWarning !== !0 ? o = "componentWillMount" : typeof u.UNSAFE_componentWillMount == "function" && (o = "UNSAFE_componentWillMount"), typeof u.componentWillReceiveProps == "function" && u.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? i = "componentWillReceiveProps" : typeof u.UNSAFE_componentWillReceiveProps == "function" && (i = "UNSAFE_componentWillReceiveProps"), typeof u.componentWillUpdate == "function" && u.componentWillUpdate.__suppressDeprecationWarning !== !0 ? c = "componentWillUpdate" : typeof u.UNSAFE_componentWillUpdate == "function" && (c = "UNSAFE_componentWillUpdate"), o !== null || i !== null || c !== null) {
            u = B(n) || "Component";
            var s = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            kg.has(u) || (kg.add(u), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              u,
              s,
              o !== null ? `
  ` + o : "",
              i !== null ? `
  ` + i : "",
              c !== null ? `
  ` + c : ""
            ));
          }
        }
        u = t.stateNode, o = B(n) || "Component", u.render || (n.prototype && typeof n.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          o
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          o
        )), !u.getInitialState || u.getInitialState.isReactClassApproved || u.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          o
        ), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          o
        ), u.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          o
        ), n.childContextTypes && !$g.has(n) && ($g.add(n), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          o
        )), n.contextTypes && !Kg.has(n) && (Kg.add(n), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          o
        )), typeof u.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          o
        ), n.prototype && n.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          B(n) || "A pure component"
        ), typeof u.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          o
        ), typeof u.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          o
        ), typeof u.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          o
        ), typeof u.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          o
        ), i = u.props !== a, u.props !== void 0 && i && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          o
        ), u.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          o,
          o
        ), typeof u.getSnapshotBeforeUpdate != "function" || typeof u.componentDidUpdate == "function" || Zg.has(n) || (Zg.add(n), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          B(n)
        )), typeof u.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          o
        ), typeof u.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          o
        ), typeof n.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          o
        ), (i = u.state) && (typeof i != "object" || Ke(i)) && console.error("%s.state: must be set to an object or null", o), typeof u.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          o
        ), u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Or(t), o = n.contextType, u.context = typeof o == "object" && o !== null ? ve(o) : wa, u.state === a && (o = B(n) || "Component", Jg.has(o) || (Jg.add(o), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          o
        ))), t.mode & at && fn.recordLegacyContextWarning(
          t,
          u
        ), fn.recordUnsafeLifecycleWarnings(
          t,
          u
        ), u.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (dr(
          t,
          n,
          o,
          a
        ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (o = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), o !== u.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          H(t) || "Component"
        ), ed.enqueueReplaceState(
          u,
          u.state,
          null
        )), vo(t, a, u, l), go(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & rn) !== he && (t.flags |= 67108864), u = !0;
      } else if (e === null) {
        u = t.stateNode;
        var m = t.memoizedProps;
        i = hl(n, m), u.props = i;
        var b = u.context;
        c = n.contextType, o = wa, typeof c == "object" && c !== null && (o = ve(c)), s = n.getDerivedStateFromProps, c = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, c || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || b !== o) && Tm(
          t,
          u,
          a,
          o
        ), La = !1;
        var p = t.memoizedState;
        u.state = p, vo(t, a, u, l), go(), b = t.memoizedState, m || p !== b || La ? (typeof s == "function" && (dr(
          t,
          n,
          s,
          a
        ), b = t.memoizedState), (i = La || Sm(
          t,
          n,
          i,
          a,
          p,
          b,
          o
        )) ? (c || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & rn) !== he && (t.flags |= 67108864)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & rn) !== he && (t.flags |= 67108864), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = o, u = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & rn) !== he && (t.flags |= 67108864), u = !1);
      } else {
        u = t.stateNode, xr(e, t), o = t.memoizedProps, c = hl(n, o), u.props = c, s = t.pendingProps, p = u.context, b = n.contextType, i = wa, typeof b == "object" && b !== null && (i = ve(b)), m = n.getDerivedStateFromProps, (b = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== s || p !== i) && Tm(
          t,
          u,
          a,
          i
        ), La = !1, p = t.memoizedState, u.state = p, vo(t, a, u, l), go();
        var S = t.memoizedState;
        o !== s || p !== S || La || e !== null && e.dependencies !== null && ec(e.dependencies) ? (typeof m == "function" && (dr(
          t,
          n,
          m,
          a
        ), S = t.memoizedState), (c = La || Sm(
          t,
          n,
          c,
          a,
          p,
          S,
          i
        ) || e !== null && e.dependencies !== null && ec(e.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, S, i), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
          a,
          S,
          i
        )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), u.props = a, u.state = S, u.context = i, u = c) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), u = !1);
      }
      if (i = u, mo(e, t), o = (t.flags & 128) !== 0, i || o) {
        if (i = t.stateNode, g.getCurrentStack = t === null ? null : ln, Zt = !1, et = t, o && typeof n.getDerivedStateFromError != "function")
          n = null, St = -1;
        else {
          if (ga(t), n = Eg(i), t.mode & at) {
            re(!0);
            try {
              Eg(i);
            } finally {
              re(!1);
            }
          }
          d();
        }
        t.flags |= 1, e !== null && o ? (t.child = Cl(
          t,
          e.child,
          null,
          l
        ), t.child = Cl(
          t,
          null,
          n,
          l
        )) : Je(
          e,
          t,
          n,
          l
        ), t.memoizedState = i.state, e = t.child;
      } else
        e = kn(
          e,
          t,
          l
        );
      return l = t.stateNode, u && l.props !== a && (qu || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        H(t) || "a component"
      ), qu = !0), e;
    }
    function wm(e, t, n, a) {
      return oo(), t.flags |= 256, Je(e, t, n, a), t.child;
    }
    function gr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = B(t) || "Unknown", nv[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), nv[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = B(t) || "Unknown", ev[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), ev[t] = !0));
    }
    function vr(e) {
      return { baseLanes: e, cachePool: Jh() };
    }
    function br(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ht), e;
    }
    function Bm(e, t, n) {
      var a, l = t.pendingProps;
      wt(t) && (t.flags |= 128);
      var u = !1, o = (t.flags & 128) !== 0;
      if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (Be.current & Fo) !== 0), a && (u = !0, t.flags &= -129), a = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (F) {
          if (u ? ba(t) : Sa(t), F) {
            var i = We, c;
            if (!(c = !i)) {
              e: {
                var s = i;
                for (c = wn; s.nodeType !== 8; ) {
                  if (!c) {
                    c = null;
                    break e;
                  }
                  if (s = Qt(s.nextSibling), s === null) {
                    c = null;
                    break e;
                  }
                }
                c = s;
              }
              c !== null ? (ol(), t.memoizedState = {
                dehydrated: c,
                treeContext: Al !== null ? { id: ea, overflow: ta } : null,
                retryLane: 536870912
              }, s = Ce(18, null, null, he), s.stateNode = c, s.return = t, t.child = s, st = t, We = null, c = !0) : c = !1, c = !c;
            }
            c && (qs(
              t,
              i
            ), cl(t));
          }
          if (i = t.memoizedState, i !== null && (i = i.dehydrated, i !== null))
            return i.data === Ll ? t.lanes = 16 : t.lanes = 536870912, null;
          Zn(t);
        }
        return i = l.children, l = l.fallback, u ? (Sa(t), u = t.mode, i = Tr(
          {
            mode: "hidden",
            children: i
          },
          u
        ), l = yl(
          l,
          u,
          n,
          null
        ), i.return = t, l.return = t, i.sibling = l, t.child = i, u = t.child, u.memoizedState = vr(n), u.childLanes = br(
          e,
          a,
          n
        ), t.memoizedState = ad, l) : (ba(t), Sr(
          t,
          i
        ));
      }
      var m = e.memoizedState;
      if (m !== null && (i = m.dehydrated, i !== null)) {
        if (o)
          t.flags & 256 ? (ba(t), t.flags &= -257, t = Er(
            e,
            t,
            n
          )) : t.memoizedState !== null ? (Sa(t), t.child = e.child, t.flags |= 128, t = null) : (Sa(t), u = l.fallback, i = t.mode, l = Tr(
            {
              mode: "visible",
              children: l.children
            },
            i
          ), u = yl(
            u,
            i,
            n,
            null
          ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, Cl(
            t,
            e.child,
            null,
            n
          ), l = t.child, l.memoizedState = vr(n), l.childLanes = br(
            e,
            a,
            n
          ), t.memoizedState = ad, t = u);
        else if (ba(t), F && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), i.data === Ll) {
          if (a = i.nextSibling && i.nextSibling.dataset, a) {
            c = a.dgst;
            var b = a.msg;
            s = a.stck;
            var p = a.cstck;
          }
          i = b, a = c, l = s, c = u = p, u = Error(i || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), u.stack = l || "", u.digest = a, a = c === void 0 ? null : c, l = {
            value: u,
            source: null,
            stack: a
          }, typeof a == "string" && kf.set(
            u,
            l
          ), io(l), t = Er(
            e,
            t,
            n
          );
        } else if (Xe || po(
          e,
          t,
          n,
          !1
        ), a = (n & e.childLanes) !== 0, Xe || a) {
          if (a = fe, a !== null) {
            if (l = n & -n, l & 42)
              l = 1;
            else
              switch (l) {
                case 2:
                  l = 1;
                  break;
                case 8:
                  l = 4;
                  break;
                case 32:
                  l = 16;
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
                  l = 64;
                  break;
                case 268435456:
                  l = 134217728;
                  break;
                default:
                  l = 0;
              }
            if (l = l & (a.suspendedLanes | n) ? 0 : l, l !== 0 && l !== m.retryLane)
              throw m.retryLane = l, Pe(
                e,
                l
              ), Ee(
                a,
                e,
                l
              ), Ig;
          }
          i.data === Vl || Qr(), t = Er(
            e,
            t,
            n
          );
        } else
          i.data === Vl ? (t.flags |= 128, t.child = e.child, t = lb.bind(
            null,
            e
          ), i._reactRetry = t, t = null) : (e = m.treeContext, We = Qt(
            i.nextSibling
          ), st = t, F = !0, dn = null, na = !1, $t = null, wn = !1, e !== null && (ol(), _t[Kt++] = ea, _t[Kt++] = ta, _t[Kt++] = Al, ea = e.id, ta = e.overflow, Al = t), t = Sr(
            t,
            l.children
          ), t.flags |= 4096);
        return t;
      }
      return u ? (Sa(t), u = l.fallback, i = t.mode, c = e.child, s = c.sibling, l = Da(
        c,
        {
          mode: "hidden",
          children: l.children
        }
      ), l.subtreeFlags = c.subtreeFlags & 31457280, s !== null ? u = Da(
        s,
        u
      ) : (u = yl(
        u,
        i,
        n,
        null
      ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, l = u, u = t.child, i = e.child.memoizedState, i === null ? i = vr(n) : (c = i.cachePool, c !== null ? (s = je._currentValue, c = c.parent !== s ? { parent: s, pool: s } : c) : c = Jh(), i = {
        baseLanes: i.baseLanes | n,
        cachePool: c
      }), u.memoizedState = i, u.childLanes = br(
        e,
        a,
        n
      ), t.memoizedState = ad, l) : (ba(t), n = e.child, e = n.sibling, n = Da(n, {
        mode: "visible",
        children: l.children
      }), n.return = t, n.sibling = null, e !== null && (a = t.deletions, a === null ? (t.deletions = [e], t.flags |= 16) : a.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function Sr(e, t) {
      return t = Tr(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Tr(e, t) {
      return fp(e, t, 0, null);
    }
    function Er(e, t, n) {
      return Cl(t, e.child, null, n), e = Sr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function qm(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), Dr(
        e.return,
        t,
        n
      );
    }
    function jm(e, t) {
      var n = Ke(e);
      return e = !n && typeof ue(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        n,
        t,
        n
      ), !1) : !0;
    }
    function Rr(e, t, n, a, l) {
      var u = e.memoizedState;
      u === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: l
      } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = l);
    }
    function Ym(e, t, n) {
      var a = t.pendingProps, l = a.revealOrder, u = a.tail;
      if (a = a.children, l !== void 0 && l !== "forwards" && l !== "backwards" && l !== "together" && !av[l])
        if (av[l] = !0, typeof l == "string")
          switch (l.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                l,
                l.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                l,
                l.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                l
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            l
          );
      u === void 0 || nd[u] || (u !== "collapsed" && u !== "hidden" ? (nd[u] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        u
      )) : l !== "forwards" && l !== "backwards" && (nd[u] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        u
      )));
      e: if ((l === "forwards" || l === "backwards") && a !== void 0 && a !== null && a !== !1)
        if (Ke(a)) {
          for (var o = 0; o < a.length; o++)
            if (!jm(a[o], o)) break e;
        } else if (o = ue(a), typeof o == "function") {
          if (o = o.call(a))
            for (var i = o.next(), c = 0; !i.done; i = o.next()) {
              if (!jm(i.value, c)) break e;
              c++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            l
          );
      if (Je(e, t, a, n), a = Be.current, a & Fo)
        a = a & Mu | Fo, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && qm(
                e,
                n,
                t
              );
            else if (e.tag === 19)
              qm(e, n, t);
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
        a &= Mu;
      }
      switch (ne(Be, a, t), l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            e = n.alternate, e !== null && Gi(e) === null && (l = n), n = n.sibling;
          n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Rr(
            t,
            !1,
            l,
            n,
            u
          );
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && Gi(e) === null) {
              t.child = l;
              break;
            }
            e = l.sibling, l.sibling = n, n = l, l = e;
          }
          Rr(
            t,
            !0,
            n,
            null,
            u
          );
          break;
        case "together":
          Rr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function kn(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), St = -1, Na |= t.lanes, !(n & t.childLanes))
        if (e !== null) {
          if (po(
            e,
            t,
            n,
            !1
          ), (n & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, n = Da(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
          e = e.sibling, n = n.sibling = Da(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function Ar(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && ec(e)));
    }
    function j0(e, t, n) {
      switch (t.tag) {
        case 3:
          Ve(
            t,
            t.stateNode.containerInfo
          ), Ea(
            t,
            je,
            e.memoizedState.cache
          ), oo();
          break;
        case 27:
        case 5:
          Ql(t);
          break;
        case 4:
          Ve(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Ea(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          n & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var a = t.stateNode;
          a.effectDuration = -0, a.passiveEffectDuration = -0;
          break;
        case 13:
          if (a = t.memoizedState, a !== null)
            return a.dehydrated !== null ? (ba(t), t.flags |= 128, null) : n & t.child.childLanes ? Bm(
              e,
              t,
              n
            ) : (ba(t), e = kn(
              e,
              t,
              n
            ), e !== null ? e.sibling : null);
          ba(t);
          break;
        case 19:
          var l = (e.flags & 128) !== 0;
          if (a = (n & t.childLanes) !== 0, a || (po(
            e,
            t,
            n,
            !1
          ), a = (n & t.childLanes) !== 0), l) {
            if (a)
              return Ym(
                e,
                t,
                n
              );
            t.flags |= 128;
          }
          if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ne(
            Be,
            Be.current,
            t
          ), a) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, xm(e, t, n);
        case 24:
          Ea(
            t,
            je,
            e.memoizedState.cache
          );
      }
      return kn(e, t, n);
    }
    function Cr(e, t, n) {
      if (t._debugNeedsRemount && e !== null) {
        n = Vr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        );
        var a = t.return;
        if (a === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === a.child)
          a.child = n;
        else {
          var l = a.child;
          if (l === null)
            throw Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw Error("Expected to find the previous sibling.");
          l.sibling = n;
        }
        return t = a.deletions, t === null ? (a.deletions = [e], a.flags |= 16) : t.push(e), n.flags |= 2, n;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xe = !0;
        else {
          if (!Ar(e, n) && !(t.flags & 128))
            return Xe = !1, j0(
              e,
              t,
              n
            );
          Xe = !!(e.flags & 131072);
        }
      else
        Xe = !1, (a = F) && (ol(), a = (t.flags & 1048576) !== 0), a && (a = t.index, ol(), wh(t, Yc, a));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (a = t.pendingProps, e = Ba(t.elementType), t.type = e, typeof e == "function")
            Yr(e) ? (a = hl(
              e,
              a
            ), t.tag = 1, t.type = e = ll(e), t = Hm(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, gr(t, e), t.type = e = ll(e), t = yr(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              if (l = e.$$typeof, l === Mo) {
                t.tag = 11, t.type = e = xs(e), t = Dm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === Sc) {
                t.tag = 14, t = zm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ot && (t = " Did you wrap a component in React.lazy() more than once?"), e = B(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return yr(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 1:
          return a = t.type, l = hl(
            a,
            t.pendingProps
          ), Hm(
            e,
            t,
            a,
            l,
            n
          );
        case 3:
          e: {
            if (Ve(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            var u = t.pendingProps;
            l = t.memoizedState, a = l.element, xr(e, t), vo(t, u, null, n);
            var o = t.memoizedState;
            if (u = o.cache, Ea(t, je, u), u !== l.cache && zr(
              t,
              [je],
              n,
              !0
            ), go(), u = o.element, l.isDehydrated)
              if (l = {
                element: u,
                isDehydrated: !1,
                cache: o.cache
              }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                t = wm(
                  e,
                  t,
                  u,
                  n
                );
                break e;
              } else if (u !== a) {
                a = Ct(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), io(a), t = wm(
                  e,
                  t,
                  u,
                  n
                );
                break e;
              } else
                for (We = Qt(
                  t.stateNode.containerInfo.firstChild
                ), st = t, F = !0, dn = null, na = !1, $t = null, wn = !0, e = jg(
                  t,
                  null,
                  u,
                  n
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (oo(), u === a) {
                t = kn(
                  e,
                  t,
                  n
                );
                break e;
              }
              Je(
                e,
                t,
                u,
                n
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return mo(e, t), e === null ? (e = ay(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : F || (e = t.type, n = t.pendingProps, a = ut(
            Ma.current
          ), a = fc(
            a
          ).createElement(e), a[nt] = t, a[bt] = n, _e(a, e, n), Ne(a), t.stateNode = a) : t.memoizedState = ay(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Ql(t), e === null && F && (l = ut(Ma.current), a = vn(), l = t.stateNode = ty(
            t.type,
            t.pendingProps,
            l,
            a,
            !1
          ), na || (a = _p(
            l,
            t.type,
            t.pendingProps,
            a
          ), a !== null && (il(t, 0).serverProps = a)), st = t, wn = !0, We = Qt(
            l.firstChild
          )), a = t.pendingProps.children, e !== null || F ? Je(
            e,
            t,
            a,
            n
          ) : t.child = Cl(
            t,
            null,
            a,
            n
          ), mo(e, t), t.child;
        case 5:
          return e === null && F && (u = vn(), a = As(
            t.type,
            u.ancestorInfo
          ), l = We, (o = !l) || (o = Rb(
            l,
            t.type,
            t.pendingProps,
            wn
          ), o !== null ? (t.stateNode = o, na || (u = _p(
            o,
            t.type,
            t.pendingProps,
            u
          ), u !== null && (il(t, 0).serverProps = u)), st = t, We = Qt(
            o.firstChild
          ), wn = !1, u = !0) : u = !1, o = !u), o && (a && qs(t, l), cl(t))), Ql(t), l = t.type, u = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = u.children, af(l, u) ? a = null : o !== null && af(l, o) && (t.flags |= 32), t.memoizedState !== null && (l = Gs(
            e,
            t,
            M0,
            null,
            null,
            n
          ), pi._currentValue = l), mo(e, t), Je(
            e,
            t,
            a,
            n
          ), t.child;
        case 6:
          return e === null && F && (e = t.pendingProps, n = vn().ancestorInfo.current, e = n != null ? Di(e, n.tag) : !0, n = We, (a = !n) || (a = Ab(
            n,
            t.pendingProps,
            wn
          ), a !== null ? (t.stateNode = a, st = t, We = null, a = !0) : a = !1, a = !a), a && (e && qs(t, n), cl(t))), null;
        case 13:
          return Bm(e, t, n);
        case 4:
          return Ve(
            t,
            t.stateNode.containerInfo
          ), a = t.pendingProps, e === null ? t.child = Cl(
            t,
            null,
            a,
            n
          ) : Je(
            e,
            t,
            a,
            n
          ), t.child;
        case 11:
          return Dm(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 7:
          return Je(
            e,
            t,
            t.pendingProps,
            n
          ), t.child;
        case 8:
          return Je(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, a = t.stateNode, a.effectDuration = -0, a.passiveEffectDuration = -0, Je(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 10:
          return a = t.type, l = t.pendingProps, u = l.value, "value" in l || lv || (lv = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ea(t, a, u), Je(
            e,
            t,
            l.children,
            n
          ), t.child;
        case 9:
          return l = t.type._context, a = t.pendingProps.children, typeof a != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ml(t), l = ve(l), ga(t), a = Kf(
            a,
            l,
            void 0
          ), d(), t.flags |= 1, Je(
            e,
            t,
            a,
            n
          ), t.child;
        case 14:
          return zm(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 15:
          return Om(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 19:
          return Ym(
            e,
            t,
            n
          );
        case 22:
          return xm(e, t, n);
        case 24:
          return ml(t), a = ve(je), e === null ? (l = Ls(), l === null && (l = fe, u = Vs(), l.pooledCache = u, sl(u), u !== null && (l.pooledCacheLanes |= n), l = u), t.memoizedState = {
            parent: a,
            cache: l
          }, Or(t), Ea(t, je, l)) : (e.lanes & n && (xr(e, t), vo(t, null, null, n), go()), l = e.memoizedState, u = t.memoizedState, l.parent !== a ? (l = {
            parent: a,
            cache: a
          }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Ea(t, je, a)) : (a = u.cache, Ea(t, je, a), a !== l.cache && zr(
            t,
            [je],
            n,
            !0
          ))), Je(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Pi() {
      ju = Zc = null, Yu = !1;
    }
    function Ea(e, t, n) {
      ne(ld, t._currentValue, e), t._currentValue = n, ne(ud, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== uv && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = uv;
    }
    function Jn(e, t) {
      e._currentValue = ld.current;
      var n = ud.current;
      te(ud, t), e._currentRenderer = n, te(ld, t);
    }
    function Dr(e, t, n) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
        e = e.return;
      }
      e !== n && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function zr(e, t, n, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var u = l.dependencies;
        if (u !== null) {
          var o = l.child;
          u = u.firstContext;
          e: for (; u !== null; ) {
            var i = u;
            u = l;
            for (var c = 0; c < t.length; c++)
              if (i.context === t[c]) {
                u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Dr(
                  u.return,
                  n,
                  e
                ), a || (o = null);
                break e;
              }
            u = i.next;
          }
        } else if (l.tag === 18) {
          if (o = l.return, o === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Dr(
            o,
            n,
            e
          ), o = null;
        } else o = l.child;
        if (o !== null) o.return = l;
        else
          for (o = l; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (l = o.sibling, l !== null) {
              l.return = o.return, o = l;
              break;
            }
            o = o.return;
          }
        l = o;
      }
    }
    function po(e, t, n, a) {
      e = null;
      for (var l = t, u = !1; l !== null; ) {
        if (!u) {
          if (l.flags & 524288) u = !0;
          else if (l.flags & 262144) break;
        }
        if (l.tag === 10) {
          var o = l.alternate;
          if (o === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (o = o.memoizedProps, o !== null) {
            var i = l.type;
            ct(l.pendingProps.value, o.value) || (e !== null ? e.push(i) : e = [i]);
          }
        } else if (l === Tc.current) {
          if (o = l.alternate, o === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          o.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(pi) : e = [pi]);
        }
        l = l.return;
      }
      e !== null && zr(
        t,
        e,
        n,
        a
      ), t.flags |= 262144;
    }
    function ec(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ct(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ml(e) {
      Zc = e, ju = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ve(e) {
      return Yu && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Vm(Zc, e);
    }
    function tc(e, t) {
      return Zc === null && ml(e), Vm(e, t);
    }
    function Vm(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, ju === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        ju = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else ju = ju.next = t;
      return n;
    }
    function Or(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function xr(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ra(e) {
      return {
        lane: e,
        tag: ov,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Aa(e, t, n) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, id === a && !sv) {
        var l = H(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          l
        ), sv = !0;
      }
      return (ye & dt) !== Mt ? (l = a.pending, l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Hi(e), xh(e, null, n), t) : (Ui(e, a, t, n), Hi(e));
    }
    function yo(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194176) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Gd(e, n);
      }
    }
    function nc(e, t) {
      var n = e.updateQueue, a = e.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var l = null, u = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            u === null ? l = u = o : u = u.next = o, n = n.next;
          } while (n !== null);
          u === null ? l = u = t : u = u.next = t;
        } else l = u = t;
        n = {
          baseState: a.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function go() {
      if (cd) {
        var e = Uu;
        if (e !== null) throw e;
      }
    }
    function vo(e, t, n, a) {
      cd = !1;
      var l = e.updateQueue;
      La = !1, id = l.shared;
      var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
      if (i !== null) {
        l.shared.pending = null;
        var c = i, s = c.next;
        c.next = null, o === null ? u = s : o.next = s, o = c;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = s : i.next = s, m.lastBaseUpdate = c));
      }
      if (u !== null) {
        var b = l.baseState;
        o = 0, m = s = c = null, i = u;
        do {
          var p = i.lane & -536870913, S = p !== i.lane;
          if (S ? (J & p) === p : (a & p) === p) {
            p !== 0 && p === Dl && (cd = !0), m !== null && (m = m.next = {
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: null,
              next: null
            });
            e: {
              p = e;
              var O = i, N = t, ze = n;
              switch (O.tag) {
                case iv:
                  if (O = O.payload, typeof O == "function") {
                    Yu = !0;
                    var ae = O.call(
                      ze,
                      b,
                      N
                    );
                    if (p.mode & at) {
                      re(!0);
                      try {
                        O.call(ze, b, N);
                      } finally {
                        re(!1);
                      }
                    }
                    Yu = !1, b = ae;
                    break e;
                  }
                  b = O;
                  break e;
                case od:
                  p.flags = p.flags & -65537 | 128;
                case ov:
                  if (ae = O.payload, typeof ae == "function") {
                    if (Yu = !0, O = ae.call(
                      ze,
                      b,
                      N
                    ), p.mode & at) {
                      re(!0);
                      try {
                        ae.call(ze, b, N);
                      } finally {
                        re(!1);
                      }
                    }
                    Yu = !1;
                  } else O = ae;
                  if (O == null) break e;
                  b = Q({}, b, O);
                  break e;
                case cv:
                  La = !0;
              }
            }
            p = i.callback, p !== null && (e.flags |= 64, S && (e.flags |= 8192), S = l.callbacks, S === null ? l.callbacks = [p] : S.push(p));
          } else
            S = {
              lane: p,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null
            }, m === null ? (s = m = S, c = b) : m = m.next = S, o |= p;
          if (i = i.next, i === null) {
            if (i = l.shared.pending, i === null)
              break;
            S = i, i = S.next, S.next = null, l.lastBaseUpdate = S, l.shared.pending = null;
          }
        } while (!0);
        m === null && (c = b), l.baseState = c, l.firstBaseUpdate = s, l.lastBaseUpdate = m, u === null && (l.shared.lanes = 0), Na |= o, e.lanes = o, e.memoizedState = b;
      }
      id = null;
    }
    function Lm(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Y0(e, t) {
      var n = e.shared.hiddenCallbacks;
      if (n !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++)
          Lm(n[e], t);
    }
    function Nm(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Lm(n[e], t);
    }
    function Rn(e) {
      return (e.mode & $e) !== he;
    }
    function Gm(e, t) {
      Rn(e) ? (En(), bo(t, e), Tn()) : bo(t, e);
    }
    function Mr(e, t, n) {
      Rn(e) ? (En(), tu(
        n,
        e,
        t
      ), Tn()) : tu(
        n,
        e,
        t
      );
    }
    function bo(e, t) {
      try {
        var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var l = a.next;
          n = l;
          do {
            if ((n.tag & e) === e && ((e & qe) !== Ft ? A !== null && typeof A.markComponentPassiveEffectMountStarted == "function" && A.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Fe) !== Ft && A !== null && typeof A.markComponentLayoutEffectMountStarted == "function" && A.markComponentLayoutEffectMountStarted(
              t
            ), a = void 0, (e & rt) !== Ft && (Qu = !0), a = U(
              t,
              eT,
              n
            ), (e & rt) !== Ft && (Qu = !1), (e & qe) !== Ft ? A !== null && typeof A.markComponentPassiveEffectMountStopped == "function" && A.markComponentPassiveEffectMountStopped() : (e & Fe) !== Ft && A !== null && typeof A.markComponentLayoutEffectMountStopped == "function" && A.markComponentLayoutEffectMountStopped(), a !== void 0 && typeof a != "function")) {
              var u = void 0;
              u = n.tag & Fe ? "useLayoutEffect" : n.tag & rt ? "useInsertionEffect" : "useEffect";
              var o = void 0;
              o = a === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof a.then == "function" ? `

It looks like you wrote ` + u + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + u + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + a, U(
                t,
                function(i, c) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    i,
                    c
                  );
                },
                u,
                o
              );
            }
            n = n.next;
          } while (n !== l);
        }
      } catch (i) {
        ie(t, t.return, i);
      }
    }
    function tu(e, t, n) {
      try {
        var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
        if (l !== null) {
          var u = l.next;
          a = u;
          do {
            if ((a.tag & e) === e) {
              var o = a.inst, i = o.destroy;
              i !== void 0 && (o.destroy = void 0, (e & qe) !== Ft ? A !== null && typeof A.markComponentPassiveEffectUnmountStarted == "function" && A.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Fe) !== Ft && A !== null && typeof A.markComponentLayoutEffectUnmountStarted == "function" && A.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & rt) !== Ft && (Qu = !0), U(
                t,
                tT,
                t,
                n,
                i
              ), (e & rt) !== Ft && (Qu = !1), (e & qe) !== Ft ? A !== null && typeof A.markComponentPassiveEffectUnmountStopped == "function" && A.markComponentPassiveEffectUnmountStopped() : (e & Fe) !== Ft && A !== null && typeof A.markComponentLayoutEffectUnmountStopped == "function" && A.markComponentLayoutEffectUnmountStopped());
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (c) {
        ie(t, t.return, c);
      }
    }
    function Xm(e, t) {
      Rn(e) ? (En(), bo(t, e), Tn()) : bo(t, e);
    }
    function Ur(e, t, n) {
      Rn(e) ? (En(), tu(
        n,
        e,
        t
      ), Tn()) : tu(
        n,
        e,
        t
      );
    }
    function Qm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || qu || (n.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          H(e) || "instance"
        ), n.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          H(e) || "instance"
        ));
        try {
          U(
            e,
            Nm,
            t,
            n
          );
        } catch (a) {
          ie(e, e.return, a);
        }
      }
    }
    function V0(e, t, n) {
      return e.getSnapshotBeforeUpdate(t, n);
    }
    function L0(e, t) {
      var n = t.memoizedProps, a = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || qu || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        H(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        H(e) || "instance"
      ));
      try {
        var l = hl(
          e.type,
          n,
          e.elementType === e.type
        ), u = U(
          e,
          V0,
          t,
          l,
          a
        );
        n = rv, u !== void 0 || n.has(e.type) || (n.add(e.type), U(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            H(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = u;
      } catch (o) {
        ie(e, e.return, o);
      }
    }
    function Zm(e, t, n) {
      n.props = hl(
        e.type,
        e.memoizedProps
      ), n.state = e.memoizedState, Rn(e) ? (En(), U(
        e,
        Og,
        e,
        t,
        n
      ), Tn()) : U(
        e,
        Og,
        e,
        t,
        n
      );
    }
    function N0(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        if (typeof t == "function")
          if (Rn(e))
            try {
              En(), e.refCleanup = t(n);
            } finally {
              Tn();
            }
          else e.refCleanup = t(n);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            H(e)
          ), t.current = n;
      }
    }
    function pl(e, t) {
      try {
        U(e, N0, e);
      } catch (n) {
        ie(e, t, n);
      }
    }
    function Dt(e, t) {
      var n = e.ref, a = e.refCleanup;
      if (n !== null)
        if (typeof a == "function")
          try {
            if (Rn(e))
              try {
                En(), U(e, a);
              } finally {
                Tn(e);
              }
            else U(e, a);
          } catch (l) {
            ie(e, t, l);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            if (Rn(e))
              try {
                En(), U(e, n, null);
              } finally {
                Tn(e);
              }
            else U(e, n, null);
          } catch (l) {
            ie(e, t, l);
          }
        else n.current = null;
    }
    function km(e, t, n, a) {
      var l = e.memoizedProps, u = l.id, o = l.onCommit;
      l = l.onRender, t = t === null ? "mount" : "update", wc && (t = "nested-update"), typeof l == "function" && l(
        u,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        n
      ), typeof o == "function" && o(
        e.memoizedProps.id,
        t,
        a,
        n
      );
    }
    function G0(e, t, n, a) {
      var l = e.memoizedProps;
      e = l.id, l = l.onPostCommit, t = t === null ? "mount" : "update", wc && (t = "nested-update"), typeof l == "function" && l(
        e,
        t,
        a,
        n
      );
    }
    function Jm(e) {
      var t = e.type, n = e.memoizedProps, a = e.stateNode;
      try {
        U(
          e,
          mb,
          a,
          t,
          n,
          e
        );
      } catch (l) {
        ie(e, e.return, l);
      }
    }
    function _m(e, t, n) {
      try {
        U(
          e,
          pb,
          e.stateNode,
          e.type,
          n,
          t,
          e
        );
      } catch (a) {
        ie(e, e.return, a);
      }
    }
    function Km(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
    }
    function Hr(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Km(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function wr(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sc));
      else if (a !== 4 && a !== 27 && (e = e.child, e !== null))
        for (wr(e, t, n), e = e.sibling; e !== null; )
          wr(e, t, n), e = e.sibling;
    }
    function ac(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (a !== 4 && a !== 27 && (e = e.child, e !== null))
        for (ac(e, t, n), e = e.sibling; e !== null; )
          ac(e, t, n), e = e.sibling;
    }
    function X0(e) {
      if (e.tag !== 27) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Km(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
        switch (n.tag) {
          case 27:
            t = n.stateNode, n = Hr(e), ac(e, n, t);
            break;
          case 5:
            t = n.stateNode, n.flags & 32 && (Wp(t), n.flags &= -33), n = Hr(e), ac(e, n, t);
            break;
          case 3:
          case 4:
            t = n.stateNode.containerInfo, n = Hr(e), wr(
              e,
              n,
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
    function Q0(e, t) {
      if (e = e.containerInfo, zd = rs, e = zh(e), zs(e)) {
        if ("selectionStart" in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var a = n.getSelection && n.getSelection();
            if (a && a.rangeCount !== 0) {
              n = a.anchorNode;
              var l = a.anchorOffset, u = a.focusNode;
              a = a.focusOffset;
              try {
                n.nodeType, u.nodeType;
              } catch {
                n = null;
                break e;
              }
              var o = 0, i = -1, c = -1, s = 0, m = 0, b = e, p = null;
              t: for (; ; ) {
                for (var S; b !== n || l !== 0 && b.nodeType !== 3 || (i = o + l), b !== u || a !== 0 && b.nodeType !== 3 || (c = o + a), b.nodeType === 3 && (o += b.nodeValue.length), (S = b.firstChild) !== null; )
                  p = b, b = S;
                for (; ; ) {
                  if (b === e) break t;
                  if (p === n && ++s === l && (i = o), p === u && ++m === a && (c = o), (S = b.nextSibling) !== null) break;
                  b = p, p = b.parentNode;
                }
                b = S;
              }
              n = i === -1 || c === -1 ? null : { start: i, end: c };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (Od = {
        focusedElem: e,
        selectionRange: n
      }, rs = !1, Qe = t; Qe !== null; )
        if (t = Qe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, Qe = e;
        else
          for (; Qe !== null; ) {
            switch (e = t = Qe, n = e.alternate, l = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                l & 1024 && n !== null && L0(e, n);
                break;
              case 3:
                if (l & 1024) {
                  if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9)
                    uf(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        uf(e);
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
                if (l & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Qe = e;
              break;
            }
            Qe = t.return;
          }
      return t = dv, dv = !1, t;
    }
    function $m(e, t, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          An(e, n), a & 4 && Gm(n, Fe | It);
          break;
        case 1:
          if (An(e, n), a & 4)
            if (e = n.stateNode, t === null)
              n.type.defaultProps || "ref" in n.memoizedProps || qu || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                H(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                H(n) || "instance"
              )), Rn(n) ? (En(), U(
                n,
                $f,
                n,
                e
              ), Tn()) : U(
                n,
                $f,
                n,
                e
              );
            else {
              var l = hl(
                n.type,
                t.memoizedProps
              );
              t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || qu || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                H(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                H(n) || "instance"
              )), Rn(n) ? (En(), U(
                n,
                Cg,
                n,
                e,
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Tn()) : U(
                n,
                Cg,
                n,
                e,
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          a & 64 && Qm(n), a & 512 && pl(n, n.return);
          break;
        case 3:
          if (t = Qn(), An(e, n), a & 64 && (a = n.updateQueue, a !== null)) {
            if (l = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  l = n.child.stateNode;
                  break;
                case 1:
                  l = n.child.stateNode;
              }
            try {
              U(
                n,
                Nm,
                a,
                l
              );
            } catch (i) {
              ie(n, n.return, i);
            }
          }
          e.effectDuration += wi(t);
          break;
        case 26:
          An(e, n), a & 512 && pl(n, n.return);
          break;
        case 27:
        case 5:
          An(e, n), t === null && a & 4 && Jm(n), a & 512 && pl(n, n.return);
          break;
        case 12:
          if (a & 4) {
            a = Qn(), An(e, n), e = n.stateNode, e.effectDuration += lo(a);
            try {
              U(
                n,
                km,
                n,
                t,
                Hc,
                e.effectDuration
              );
            } catch (i) {
              ie(n, n.return, i);
            }
          } else An(e, n);
          break;
        case 13:
          An(e, n), a & 4 && Im(e, n);
          break;
        case 22:
          if (l = n.memoizedState !== null || ua, !l) {
            t = t !== null && t.memoizedState !== null || Re;
            var u = ua, o = Re;
            ua = l, (Re = t) && !o ? Kn(
              e,
              n,
              (n.subtreeFlags & 8772) !== 0
            ) : An(e, n), ua = u, Re = o;
          }
          a & 512 && (n.memoizedProps.mode === "manual" ? pl(n, n.return) : Dt(n, n.return));
          break;
        default:
          An(e, n);
      }
    }
    function Wm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Wm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ys(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function _n(e, t, n) {
      for (n = n.child; n !== null; )
        Fm(
          e,
          t,
          n
        ), n = n.sibling;
    }
    function Fm(e, t, n) {
      if (tt && typeof tt.onCommitFiberUnmount == "function")
        try {
          tt.onCommitFiberUnmount(mu, n);
        } catch (u) {
          xn || (xn = !0, console.error(
            "React instrumentation encountered an error: %s",
            u
          ));
        }
      switch (n.tag) {
        case 26:
          Re || Dt(n, t), _n(
            e,
            t,
            n
          ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          Re || Dt(n, t);
          var a = we, l = xt;
          for (we = n.stateNode, _n(
            e,
            t,
            n
          ), n = n.stateNode, e = n.attributes; e.length; )
            n.removeAttributeNode(e[0]);
          ys(n), we = a, xt = l;
          break;
        case 5:
          Re || Dt(n, t);
        case 6:
          if (a = we, l = xt, we = null, _n(
            e,
            t,
            n
          ), we = a, xt = l, we !== null)
            if (xt)
              try {
                U(
                  n,
                  vb,
                  we,
                  n.stateNode
                );
              } catch (u) {
                ie(
                  n,
                  t,
                  u
                );
              }
            else
              try {
                U(
                  n,
                  gb,
                  we,
                  n.stateNode
                );
              } catch (u) {
                ie(
                  n,
                  t,
                  u
                );
              }
          break;
        case 18:
          we !== null && (xt ? (e = we, n = n.stateNode, e.nodeType === 8 ? lf(e.parentNode, n) : e.nodeType === 1 && lf(e, n), xo(e)) : lf(we, n.stateNode));
          break;
        case 4:
          a = we, l = xt, we = n.stateNode.containerInfo, xt = !0, _n(
            e,
            t,
            n
          ), we = a, xt = l;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Re || tu(
            rt,
            n,
            t
          ), Re || Mr(
            n,
            t,
            Fe
          ), _n(
            e,
            t,
            n
          );
          break;
        case 1:
          Re || (Dt(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Zm(
            n,
            t,
            a
          )), _n(
            e,
            t,
            n
          );
          break;
        case 21:
          _n(
            e,
            t,
            n
          );
          break;
        case 22:
          Re || Dt(n, t), Re = (a = Re) || n.memoizedState !== null, _n(
            e,
            t,
            n
          ), Re = a;
          break;
        default:
          _n(
            e,
            t,
            n
          );
      }
    }
    function Im(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          U(
            t,
            Db,
            e
          );
        } catch (n) {
          ie(t, t.return, n);
        }
    }
    function Z0(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new fv()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new fv()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function Br(e, t) {
      var n = Z0(e);
      t.forEach(function(a) {
        var l = ub.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), sn)
            if (Vu !== null && Lu !== null)
              Ro(Lu, Vu);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          a.then(l, l);
        }
      });
    }
    function k0(e, t, n) {
      Vu = n, Lu = e, Pm(t, e), Lu = Vu = null;
    }
    function Nt(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = e, u = t, o = n[a], i = u;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 27:
              case 5:
                we = i.stateNode, xt = !1;
                break e;
              case 3:
                we = i.stateNode.containerInfo, xt = !0;
                break e;
              case 4:
                we = i.stateNode.containerInfo, xt = !0;
                break e;
            }
            i = i.return;
          }
          if (we === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Fm(l, u, o), we = null, xt = !1, l = o, u = l.alternate, u !== null && (u.return = null), l.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Pm(t, e), t = t.sibling;
    }
    function Pm(e, t) {
      var n = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nt(t, e), Gt(e), a & 4 && (tu(
            rt | It,
            e,
            e.return
          ), bo(rt | It, e), Mr(
            e,
            e.return,
            Fe | It
          ));
          break;
        case 1:
          Nt(t, e), Gt(e), a & 512 && (Re || n === null || Dt(n, n.return)), a & 64 && ua && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
          break;
        case 26:
          var l = hn;
          if (Nt(t, e), Gt(e), a & 512 && (Re || n === null || Dt(n, n.return)), a & 4)
            if (t = n !== null ? n.memoizedState : null, a = e.memoizedState, n === null)
              if (a === null)
                if (e.stateNode === null) {
                  e: {
                    a = e.type, n = e.memoizedProps, t = l.ownerDocument || l;
                    t: switch (a) {
                      case "title":
                        l = t.getElementsByTagName("title")[0], (!l || l[wo] || l[nt] || l.namespaceURI === pu || l.hasAttribute("itemprop")) && (l = t.createElement(a), t.head.insertBefore(
                          l,
                          t.querySelector("head > title")
                        )), _e(l, a, n), l[nt] = e, Ne(l), a = l;
                        break e;
                      case "link":
                        var u = oy(
                          "link",
                          "href",
                          t
                        ).get(a + (n.href || ""));
                        if (u) {
                          for (var o = 0; o < u.length; o++)
                            if (l = u[o], l.getAttribute("href") === (n.href == null ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(o, 1);
                              break t;
                            }
                        }
                        l = t.createElement(a), _e(l, a, n), t.head.appendChild(l);
                        break;
                      case "meta":
                        if (u = oy(
                          "meta",
                          "content",
                          t
                        ).get(a + (n.content || ""))) {
                          for (o = 0; o < u.length; o++)
                            if (l = u[o], le(
                              n.content,
                              "content"
                            ), l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(o, 1);
                              break t;
                            }
                        }
                        l = t.createElement(a), _e(l, a, n), t.head.appendChild(l);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + a + '". This is a bug in React.'
                        );
                    }
                    l[nt] = e, Ne(l), a = l;
                  }
                  e.stateNode = a;
                } else
                  iy(
                    l,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = uy(
                  l,
                  a,
                  e.memoizedProps
                );
            else
              t !== a ? (t === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : t.count--, a === null ? iy(
                l,
                e.type,
                e.stateNode
              ) : uy(
                l,
                a,
                e.memoizedProps
              )) : a === null && e.stateNode !== null && _m(
                e,
                e.memoizedProps,
                n.memoizedProps
              );
          break;
        case 27:
          if (a & 4 && e.alternate === null) {
            l = e.stateNode, u = e.memoizedProps;
            try {
              for (o = l.firstChild; o; ) {
                var i = o.nextSibling, c = o.nodeName;
                o[wo] || c === "HEAD" || c === "BODY" || c === "SCRIPT" || c === "STYLE" || c === "LINK" && o.rel.toLowerCase() === "stylesheet" || l.removeChild(o), o = i;
              }
              U(
                e,
                zb,
                e.type,
                u,
                l,
                e
              );
            } catch (m) {
              ie(e, e.return, m);
            }
          }
        case 5:
          if (Nt(t, e), Gt(e), a & 512 && (Re || n === null || Dt(n, n.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              U(e, Wp, t);
            } catch (m) {
              ie(e, e.return, m);
            }
          }
          a & 4 && e.stateNode != null && (t = e.memoizedProps, _m(
            e,
            t,
            n !== null ? n.memoizedProps : t
          )), a & 1024 && (sd = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Nt(t, e), Gt(e), a & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            a = e.memoizedProps, n = n !== null ? n.memoizedProps : a, t = e.stateNode;
            try {
              U(
                e,
                yb,
                t,
                n,
                a
              );
            } catch (m) {
              ie(e, e.return, m);
            }
          }
          break;
        case 3:
          if (l = Qn(), is = null, u = hn, hn = dc(t.containerInfo), Nt(t, e), hn = u, Gt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              U(
                e,
                Cb,
                t.containerInfo
              );
            } catch (m) {
              ie(e, e.return, m);
            }
          sd && (sd = !1, ep(e)), t.effectDuration += wi(l);
          break;
        case 4:
          a = hn, hn = dc(
            e.stateNode.containerInfo
          ), Nt(t, e), Gt(e), hn = a;
          break;
        case 12:
          a = Qn(), Nt(t, e), Gt(e), e.stateNode.effectDuration += lo(a);
          break;
        case 13:
          Nt(t, e), Gt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (pd = On()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Br(e, a)));
          break;
        case 22:
          a & 512 && (Re || n === null || Dt(n, n.return)), o = e.memoizedState !== null, i = n !== null && n.memoizedState !== null, c = ua;
          var s = Re;
          if (ua = c || o, Re = s || i, Nt(t, e), Re = s, ua = c, Gt(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & Xo, a & 8192 && (t._visibility = o ? t._visibility & -2 : t._visibility | Uc, o && (t = ua || Re, n === null || i || t || nu(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            e: for (n = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                if (n === null) {
                  i = n = t;
                  try {
                    l = i.stateNode, o ? U(
                      i,
                      bb,
                      l
                    ) : U(
                      i,
                      Tb,
                      i.stateNode,
                      i.memoizedProps
                    );
                  } catch (m) {
                    ie(i, i.return, m);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  i = t;
                  try {
                    u = i.stateNode, o ? U(
                      i,
                      Sb,
                      u
                    ) : U(
                      i,
                      Eb,
                      u,
                      i.memoizedProps
                    );
                  } catch (m) {
                    ie(i, i.return, m);
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
                n === t && (n = null), t = t.return;
              }
              n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
            }
          a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Br(e, n))));
          break;
        case 19:
          Nt(t, e), Gt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Br(e, a)));
          break;
        case 21:
          break;
        default:
          Nt(t, e), Gt(e);
      }
    }
    function Gt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          U(e, X0, e);
        } catch (n) {
          ie(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ep(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ep(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function J0(e, t, n) {
      Vu = n, Lu = t, $m(t, e.alternate, e), Lu = Vu = null;
    }
    function An(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          $m(e, t.alternate, t), t = t.sibling;
    }
    function tp(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Mr(
            e,
            e.return,
            Fe
          ), nu(e);
          break;
        case 1:
          Dt(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Zm(
            e,
            e.return,
            t
          ), nu(e);
          break;
        case 26:
        case 27:
        case 5:
          Dt(e, e.return), nu(e);
          break;
        case 22:
          Dt(e, e.return), e.memoizedState === null && nu(e);
          break;
        default:
          nu(e);
      }
    }
    function nu(e) {
      for (e = e.child; e !== null; )
        tp(e), e = e.sibling;
    }
    function np(e, t, n, a) {
      var l = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            e,
            n,
            a
          ), Gm(n, Fe);
          break;
        case 1:
          if (Kn(
            e,
            n,
            a
          ), t = n.stateNode, typeof t.componentDidMount == "function" && U(
            n,
            $f,
            n,
            t
          ), t = n.updateQueue, t !== null) {
            e = n.stateNode;
            try {
              U(
                n,
                Y0,
                t,
                e
              );
            } catch (u) {
              ie(n, n.return, u);
            }
          }
          a && l & 64 && Qm(n), pl(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          Kn(
            e,
            n,
            a
          ), a && t === null && l & 4 && Jm(n), pl(n, n.return);
          break;
        case 12:
          if (a && l & 4) {
            l = Qn(), Kn(
              e,
              n,
              a
            ), a = n.stateNode, a.effectDuration += lo(l);
            try {
              U(
                n,
                km,
                n,
                t,
                Hc,
                a.effectDuration
              );
            } catch (u) {
              ie(n, n.return, u);
            }
          } else
            Kn(
              e,
              n,
              a
            );
          break;
        case 13:
          Kn(
            e,
            n,
            a
          ), a && l & 4 && Im(e, n);
          break;
        case 22:
          n.memoizedState === null && Kn(
            e,
            n,
            a
          ), pl(n, n.return);
          break;
        default:
          Kn(
            e,
            n,
            a
          );
      }
    }
    function Kn(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        np(
          e,
          t.alternate,
          t,
          n
        ), t = t.sibling;
    }
    function qr(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && sl(e), n != null && so(n));
    }
    function jr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (sl(t), e != null && so(e));
    }
    function Ca(e, t, n, a) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          ap(
            e,
            t,
            n,
            a
          ), t = t.sibling;
    }
    function ap(e, t, n, a) {
      var l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ca(
            e,
            t,
            n,
            a
          ), l & 2048 && Xm(t, qe | It);
          break;
        case 3:
          var u = Qn();
          Ca(
            e,
            t,
            n,
            a
          ), l & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (sl(t), n != null && so(n))), e.passiveEffectDuration += wi(u);
          break;
        case 12:
          if (l & 2048) {
            u = Qn(), Ca(
              e,
              t,
              n,
              a
            ), e = t.stateNode, e.passiveEffectDuration += lo(u);
            try {
              U(
                t,
                G0,
                t,
                t.alternate,
                Hc,
                e.passiveEffectDuration
              );
            } catch (o) {
              ie(t, t.return, o);
            }
          } else
            Ca(
              e,
              t,
              n,
              a
            );
          break;
        case 23:
          break;
        case 22:
          u = t.stateNode, t.memoizedState !== null ? u._visibility & Tl ? Ca(
            e,
            t,
            n,
            a
          ) : So(
            e,
            t
          ) : u._visibility & Tl ? Ca(
            e,
            t,
            n,
            a
          ) : (u._visibility |= Tl, au(
            e,
            t,
            n,
            a,
            (t.subtreeFlags & 10256) !== 0
          )), l & 2048 && qr(
            t.alternate,
            t
          );
          break;
        case 24:
          Ca(
            e,
            t,
            n,
            a
          ), l & 2048 && jr(t.alternate, t);
          break;
        default:
          Ca(
            e,
            t,
            n,
            a
          );
      }
    }
    function au(e, t, n, a, l) {
      for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        lp(
          e,
          t,
          n,
          a,
          l
        ), t = t.sibling;
    }
    function lp(e, t, n, a, l) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          au(
            e,
            t,
            n,
            a,
            l
          ), Xm(t, qe);
          break;
        case 23:
          break;
        case 22:
          var o = t.stateNode;
          t.memoizedState !== null ? o._visibility & Tl ? au(
            e,
            t,
            n,
            a,
            l
          ) : So(
            e,
            t
          ) : (o._visibility |= Tl, au(
            e,
            t,
            n,
            a,
            l
          )), l && u & 2048 && qr(
            t.alternate,
            t
          );
          break;
        case 24:
          au(
            e,
            t,
            n,
            a,
            l
          ), l && u & 2048 && jr(t.alternate, t);
          break;
        default:
          au(
            e,
            t,
            n,
            a,
            l
          );
      }
    }
    function So(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e, a = t, l = a.flags;
          switch (a.tag) {
            case 22:
              So(
                n,
                a
              ), l & 2048 && qr(
                a.alternate,
                a
              );
              break;
            case 24:
              So(
                n,
                a
              ), l & 2048 && jr(
                a.alternate,
                a
              );
              break;
            default:
              So(
                n,
                a
              );
          }
          t = t.sibling;
        }
    }
    function lu(e) {
      if (e.subtreeFlags & ti)
        for (e = e.child; e !== null; )
          up(e), e = e.sibling;
    }
    function up(e) {
      switch (e.tag) {
        case 26:
          lu(e), e.flags & ti && e.memoizedState !== null && Ub(
            hn,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          lu(e);
          break;
        case 3:
        case 4:
          var t = hn;
          hn = dc(
            e.stateNode.containerInfo
          ), lu(e), hn = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ti, ti = 16777216, lu(e), ti = t) : lu(e));
          break;
        default:
          lu(e);
      }
    }
    function op(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function To(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            Qe = a, sp(
              a,
              e
            );
          }
        op(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          ip(e), e = e.sibling;
    }
    function ip(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          To(e), e.flags & 2048 && Ur(
            e,
            e.return,
            qe | It
          );
          break;
        case 3:
          var t = Qn();
          To(e), e.stateNode.passiveEffectDuration += wi(t);
          break;
        case 12:
          t = Qn(), To(e), e.stateNode.passiveEffectDuration += lo(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Tl && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, lc(e)) : To(e);
          break;
        default:
          To(e);
      }
    }
    function lc(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            Qe = a, sp(
              a,
              e
            );
          }
        op(e);
      }
      for (e = e.child; e !== null; )
        cp(e), e = e.sibling;
    }
    function cp(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ur(
            e,
            e.return,
            qe
          ), lc(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Tl && (t._visibility &= -5, lc(e));
          break;
        default:
          lc(e);
      }
    }
    function sp(e, t) {
      for (; Qe !== null; ) {
        var n = Qe, a = n;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Ur(
              a,
              t,
              qe
            );
            break;
          case 23:
          case 22:
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (a = a.memoizedState.cachePool.pool, a != null && sl(a));
            break;
          case 24:
            so(a.memoizedState.cache);
        }
        if (a = n.child, a !== null) a.return = n, Qe = a;
        else
          e: for (n = e; Qe !== null; ) {
            a = Qe;
            var l = a.sibling, u = a.return;
            if (Wm(a), a === n) {
              Qe = null;
              break e;
            }
            if (l !== null) {
              l.return = u, Qe = l;
              break e;
            }
            Qe = u;
          }
      }
    }
    function _0(e, t, n, a) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, hv || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Yr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Da(e, t) {
      var n = e.alternate;
      switch (n === null ? (n = Ce(
        e.tag,
        t,
        e.key,
        e.mode
      ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 31457280, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case 0:
        case 15:
          n.type = ll(e.type);
          break;
        case 1:
          n.type = ll(e.type);
          break;
        case 11:
          n.type = xs(e.type);
      }
      return n;
    }
    function rp(e, t) {
      e.flags &= 31457282;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
    }
    function Vr(e, t, n, a, l, u) {
      var o = 0, i = e;
      if (typeof e == "function")
        Yr(e) && (o = 1), i = ll(i);
      else if (typeof e == "string")
        o = vn(), o = xb(e, n, o) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case du:
            return yl(
              n.children,
              l,
              u,
              t
            );
          case bc:
            o = 8, l |= at, l |= rn;
            break;
          case yf:
            return e = n, a = l, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Ce(12, e, t, a | $e), t.elementType = yf, t.lanes = u, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case vf:
            return t = Ce(13, n, t, l), t.elementType = vf, t.lanes = u, t;
          case bf:
            return t = Ce(19, n, t, l), t.elementType = bf, t.lanes = u, t;
          case Ty:
            return fp(n, l, u, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Zb:
                case zn:
                  o = 10;
                  break e;
                case gf:
                  o = 9;
                  break e;
                case Mo:
                  o = 11, i = xs(i);
                  break e;
                case Sc:
                  o = 14;
                  break e;
                case Ot:
                  o = 16, i = null;
                  break e;
              }
            i = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : Ke(e) ? n = "array" : e !== void 0 && e.$$typeof === Oa ? (n = "<" + (B(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (o = a ? Gn(a) : null) && (i += `

Check the render method of \`` + o + "`."), o = 29, n = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + i)
            ), i = null;
        }
      return t = Ce(o, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t._debugOwner = a, t;
    }
    function uc(e, t, n) {
      return t = Vr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        n
      ), t._debugOwner = e._owner, t;
    }
    function yl(e, t, n, a) {
      return e = Ce(7, e, a, t), e.lanes = n, e;
    }
    function fp(e, t, n, a) {
      e = Ce(22, e, a, t), e.elementType = Ty, e.lanes = n;
      var l = {
        _visibility: Uc,
        _pendingVisibility: Uc,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function() {
          var u = l, o = u._current;
          if (o === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (!(u._pendingVisibility & Xo)) {
            var i = Pe(o, 2);
            i !== null && (u._pendingVisibility |= Xo, Ee(i, o, 2));
          }
        },
        attach: function() {
          var u = l, o = u._current;
          if (o === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (u._pendingVisibility & Xo) {
            var i = Pe(o, 2);
            i !== null && (u._pendingVisibility &= -3, Ee(i, o, 2));
          }
        }
      };
      return e.stateNode = l, e;
    }
    function Lr(e, t, n) {
      return e = Ce(6, e, null, t), e.lanes = n, e;
    }
    function Nr(e, t, n) {
      return t = Ce(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function $n(e) {
      e.flags |= 4;
    }
    function dp(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & en) !== Nl)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !cy(t)) {
        if (t = Wt.current, t !== null && ((J & 4194176) === J ? Bn !== null : (J & 62914560) !== J && !(J & 536870912) || t !== Bn))
          throw $o = _f, bg;
        e.flags |= 8192;
      }
    }
    function oc(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? va() : 536870912, e.lanes |= t, wl |= t);
    }
    function Eo(e, t) {
      if (!F)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var a = null; n !== null; )
              n.alternate !== null && (a = n), n = n.sibling;
            a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
        }
    }
    function be(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
      if (t)
        if ((e.mode & $e) !== he) {
          for (var l = e.selfBaseDuration, u = e.child; u !== null; )
            n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 31457280, a |= u.flags & 31457280, l += u.treeBaseDuration, u = u.sibling;
          e.treeBaseDuration = l;
        } else
          for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 31457280, a |= l.flags & 31457280, l.return = e, l = l.sibling;
      else if ((e.mode & $e) !== he) {
        l = e.actualDuration, u = e.selfBaseDuration;
        for (var o = e.child; o !== null; )
          n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, l += o.actualDuration, u += o.treeBaseDuration, o = o.sibling;
        e.actualDuration = l, e.treeBaseDuration = u;
      } else
        for (l = e.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
      return e.subtreeFlags |= a, e.childLanes = n, t;
    }
    function K0(e, t, n) {
      var a = t.pendingProps;
      switch (Bs(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return be(t), null;
        case 1:
          return be(t), null;
        case 3:
          return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Jn(je, t), mt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (uo(t) ? (jh(), $n(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dn !== null && (Gr(dn), dn = null))), be(t), null;
        case 26:
          return n = t.memoizedState, e === null ? ($n(t), n !== null ? (be(t), dp(
            t,
            n
          )) : (be(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? ($n(t), be(t), dp(
            t,
            n
          )) : (be(t), t.flags &= -16777217) : (e.memoizedProps !== a && $n(t), be(t), t.flags &= -16777217), null;
        case 27:
          $a(t), n = ut(Ma.current);
          var l = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== a && $n(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return be(t), null;
            }
            e = vn(), uo(t) ? Bh(t) : (e = ty(
              l,
              a,
              n,
              e,
              !0
            ), t.stateNode = e, $n(t));
          }
          return be(t), null;
        case 5:
          if ($a(t), n = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== a && $n(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return be(t), null;
            }
            if (l = vn(), uo(t))
              Bh(t);
            else {
              switch (e = ut(Ma.current), As(n, l.ancestorInfo), l = l.context, e = fc(e), l) {
                case ku:
                  e = e.createElementNS(pu, n);
                  break;
                case os:
                  e = e.createElementNS(
                    Dc,
                    n
                  );
                  break;
                default:
                  switch (n) {
                    case "svg":
                      e = e.createElementNS(
                        pu,
                        n
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Dc,
                        n
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                      break;
                    default:
                      e = typeof a.is == "string" ? e.createElement(n, {
                        is: a.is
                      }) : e.createElement(n), n.indexOf("-") === -1 && (n !== n.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        n
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || In.call(
                        zv,
                        n
                      ) || (zv[n] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        n
                      )));
                  }
              }
              e[nt] = t, e[bt] = a;
              e: for (l = t.child; l !== null; ) {
                if (l.tag === 5 || l.tag === 6)
                  e.appendChild(l.stateNode);
                else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                  l.child.return = l, l = l.child;
                  continue;
                }
                if (l === t) break e;
                for (; l.sibling === null; ) {
                  if (l.return === null || l.return === t)
                    break e;
                  l = l.return;
                }
                l.sibling.return = l.return, l = l.sibling;
              }
              t.stateNode = e;
              e: switch (_e(e, n, a), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!a.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && $n(t);
            }
          }
          return be(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== a && $n(t);
          else {
            if (typeof a != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = ut(Ma.current), n = vn(), uo(t)) {
              e = t.stateNode, a = t.memoizedProps, l = !na, n = null;
              var u = st;
              if (u !== null)
                switch (u.tag) {
                  case 3:
                    l && (l = Ip(
                      e,
                      a,
                      n
                    ), l !== null && (il(t, 0).serverProps = l));
                    break;
                  case 27:
                  case 5:
                    n = u.memoizedProps, l && (l = Ip(
                      e,
                      a,
                      n
                    ), l !== null && (il(
                      t,
                      0
                    ).serverProps = l));
                }
              e[nt] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || Xp(e.nodeValue, a)), e || cl(t);
            } else
              n = n.ancestorInfo.current, n != null && Di(a, n.tag), e = fc(e).createTextNode(
                a
              ), e[nt] = t, t.stateNode = e;
          }
          return be(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (l = uo(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!l)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                l[nt] = t, be(t), (t.mode & $e) !== he && a !== null && (l = t.child, l !== null && (t.treeBaseDuration -= l.treeBaseDuration));
              } else
                jh(), oo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, be(t), (t.mode & $e) !== he && a !== null && (l = t.child, l !== null && (t.treeBaseDuration -= l.treeBaseDuration));
              l = !1;
            } else
              dn !== null && (Gr(dn), dn = null), l = !0;
            if (!l)
              return t.flags & 256 ? (Zn(t), t) : (Zn(t), null);
          }
          return Zn(t), t.flags & 128 ? (t.lanes = n, (t.mode & $e) !== he && Bi(t), t) : (a = a !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, l = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (l = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== l && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), oc(t, t.updateQueue), be(t), (t.mode & $e) !== he && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return mt(t), e === null && Fr(
            t.stateNode.containerInfo
          ), be(t), null;
        case 10:
          return Jn(t.type, t), be(t), null;
        case 19:
          if (te(Be, t), l = t.memoizedState, l === null) return be(t), null;
          if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
            if (a) Eo(l, !1);
            else {
              if (Ae !== ia || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (u = Gi(e), u !== null) {
                    for (t.flags |= 128, Eo(l, !1), e = u.updateQueue, t.updateQueue = e, oc(t, e), t.subtreeFlags = 0, e = n, a = t.child; a !== null; )
                      rp(a, e), a = a.sibling;
                    return ne(
                      Be,
                      Be.current & Mu | Fo,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              l.tail !== null && On() > _c && (t.flags |= 128, a = !0, Eo(l, !1), t.lanes = 4194304);
            }
          else {
            if (!a)
              if (e = Gi(u), e !== null) {
                if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, oc(t, e), Eo(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !F)
                  return be(t), null;
              } else
                2 * On() - l.renderingStartTime > _c && n !== 536870912 && (t.flags |= 128, a = !0, Eo(l, !1), t.lanes = 4194304);
            l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
          }
          return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = On(), e.sibling = null, n = Be.current, n = a ? n & Mu | Fo : n & Mu, ne(Be, n, t), e) : (be(t), null);
        case 22:
        case 23:
          return Zn(t), Ys(t), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? n & 536870912 && !(t.flags & 128) && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), a = t.updateQueue, a !== null && oc(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && te(zl, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jn(je, t), be(t), null;
        case 25:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $0(e, t) {
      switch (Bs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== he && Bi(t), t) : null;
        case 3:
          return Jn(je, t), mt(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return $a(t), null;
        case 13:
          if (Zn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            oo();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== he && Bi(t), t) : null;
        case 19:
          return te(Be, t), null;
        case 4:
          return mt(t), null;
        case 10:
          return Jn(t.type, t), null;
        case 22:
        case 23:
          return Zn(t), Ys(t), e !== null && te(zl, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== he && Bi(t), t) : null;
        case 24:
          return Jn(je, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function hp(e, t) {
      switch (Bs(t), t.tag) {
        case 3:
          Jn(je, t), mt(t);
          break;
        case 26:
        case 27:
        case 5:
          $a(t);
          break;
        case 4:
          mt(t);
          break;
        case 13:
          Zn(t);
          break;
        case 19:
          te(Be, t);
          break;
        case 10:
          Jn(t.type, t);
          break;
        case 22:
        case 23:
          Zn(t), Ys(t), e !== null && te(zl, t);
          break;
        case 24:
          Jn(je, t);
      }
    }
    function W0() {
      cT.forEach(function(e) {
        return e();
      });
    }
    function mp() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || g.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function zt(e) {
      if ((ye & dt) !== Mt && J !== 0)
        return J & -J;
      var t = g.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Dl, e !== 0 ? e : $r()) : kd();
    }
    function pp() {
      Ht === 0 && (Ht = !(J & 536870912) || F ? bn() : 536870912);
      var e = Wt.current;
      return e !== null && (e.flags |= 32), Ht;
    }
    function Ee(e, t, n) {
      if (Qu && console.error("useInsertionEffect must not schedule updates."), bd && ($c = !0), (e === fe && de === Hl || e.cancelPendingCommit !== null) && (ou(e, 0), Wn(
        e,
        J,
        Ht,
        !1
      )), Sn(e, n), ye & dt && e === fe) {
        if (Zt)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Z && H(Z) || "Unknown", Tv.has(e) || (Tv.add(e), t = H(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              Sv || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Sv = !0);
          }
      } else
        sn && Xd(e, t, n), ib(t), e === fe && ((ye & dt) === Mt && (Ga |= n), Ae === Ul && Wn(
          e,
          J,
          Ht,
          !1
        )), Cn(e);
    }
    function yp(e, t, n) {
      if ((ye & (dt | oa)) !== Mt)
        throw Error("Should not already be working.");
      var a = !n && (t & 60) === 0 && (t & e.expiredLanes) === 0 || jt(e, t), l = a ? I0(e, t) : Zr(e, t, !0), u = a;
      do {
        if (l === ia) {
          Xu && !a && Wn(e, t, 0, !1);
          break;
        } else if (l === kc)
          Wn(
            e,
            t,
            0,
            !ca
          );
        else {
          if (n = e.current.alternate, u && !F0(n)) {
            l = Zr(e, t, !1), u = !1;
            continue;
          }
          if (l === Nu) {
            if (u = t, e.errorRecoveryDisabledLanes & u)
              var o = 0;
            else
              o = e.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
            if (o !== 0) {
              t = o;
              e: {
                l = e;
                var i = o;
                o = ii;
                var c = l.current.memoizedState.isDehydrated;
                if (c && (ou(
                  l,
                  i
                ).flags |= 256), i = Zr(
                  l,
                  i,
                  !1
                ), i !== Nu) {
                  if (hd && !c) {
                    l.errorRecoveryDisabledLanes |= u, Ga |= u, l = Ul;
                    break e;
                  }
                  l = mn, mn = o, l !== null && Gr(l);
                }
                l = i;
              }
              if (u = !1, l !== Nu) continue;
            }
          }
          if (l === ai) {
            ou(e, 0), Wn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, l) {
              case ia:
              case ai:
                throw Error("Root did not complete. This is a bug in React.");
              case Ul:
                if ((t & 4194176) === t) {
                  Wn(
                    a,
                    t,
                    Ht,
                    !ca
                  );
                  break e;
                }
                break;
              case Nu:
                mn = null;
                break;
              case rd:
              case pv:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (a.finishedWork = n, a.finishedLanes = t, g.actQueue !== null)
              kr(
                a,
                mn,
                ci,
                Jc,
                Ht,
                Ga,
                wl,
                bv,
                Zf,
                0
              );
            else {
              if ((t & 62914560) === t && (l = pd + gv - On(), 10 < l)) {
                if (Wn(
                  a,
                  t,
                  Ht,
                  !ca
                ), pt(a, 0) !== 0) break e;
                a.timeoutHandle = Ov(
                  gp.bind(
                    null,
                    a,
                    n,
                    mn,
                    ci,
                    Jc,
                    t,
                    Ht,
                    Ga,
                    wl,
                    ca,
                    hT,
                    Zf,
                    0
                  ),
                  l
                );
                break e;
              }
              gp(
                a,
                n,
                mn,
                ci,
                Jc,
                t,
                Ht,
                Ga,
                wl,
                ca,
                bv,
                Zf,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Cn(e);
    }
    function Gr(e) {
      mn === null ? mn = e : mn.push.apply(
        mn,
        e
      );
    }
    function gp(e, t, n, a, l, u, o, i, c, s, m, b, p) {
      var S = t.subtreeFlags;
      if ((S & 8192 || (S & 16785408) === 16785408) && (mi = { stylesheets: null, count: 0, unsuspend: Mb }, up(t), t = Hb(), t !== null)) {
        e.cancelPendingCommit = t(
          kr.bind(
            null,
            e,
            n,
            a,
            l,
            o,
            i,
            c,
            dT,
            b,
            p
          )
        ), Wn(
          e,
          u,
          o,
          !s
        );
        return;
      }
      kr(
        e,
        n,
        a,
        l,
        o,
        i,
        c,
        m,
        b,
        p
      );
    }
    function F0(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var a = 0; a < n.length; a++) {
            var l = n[a], u = l.getSnapshot;
            l = l.value;
            try {
              if (!ct(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null)
          n.return = t, t = n;
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
    function Wn(e, t, n, a) {
      t &= ~md, t &= ~Ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var l = t; 0 < l; ) {
        var u = 31 - ot(l), o = 1 << u;
        a[u] = -1, l &= ~o;
      }
      n !== 0 && Nd(e, n, t);
    }
    function uu() {
      return (ye & (dt | oa)) === Mt ? (Ao(0), !1) : !0;
    }
    function Xr() {
      if (Z !== null) {
        if (de === Et)
          var e = Z.return;
        else
          e = Z, Pi(), ks(e), Ou = null, Wo = 0, e = Z;
        for (; e !== null; )
          hp(e.alternate, e), e = e.return;
        Z = null;
      }
    }
    function ou(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var n = e.timeoutHandle;
      n !== Md && (e.timeoutHandle = Md, ST(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Xr(), fe = e, Z = n = Da(e.current, null), J = t, de = Et, Ut = null, ca = !1, Xu = jt(e, t), hd = !1, Ae = ia, wl = Ht = md = Ga = Na = 0, mn = ii = null, Jc = !1, t & 8 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0)
        for (e = e.entanglements, a &= t; 0 < a; ) {
          var l = 31 - ot(a), u = 1 << l;
          t |= e[l], a &= ~u;
        }
      return jn = t, Mi(), fn.discardPendingWarnings(), n;
    }
    function vp(e, t) {
      q = null, g.H = qn, g.getCurrentStack = null, Zt = !1, et = null, t === Vc ? (t = Nh(), de = ui) : t === bg ? (t = Nh(), de = yv) : de = t === Ig ? dd : t !== null && typeof t == "object" && typeof t.then == "function" ? Gu : li, Ut = t;
      var n = Z;
      if (n === null)
        Ae = ai, Ii(
          e,
          Ct(t, e.current)
        );
      else
        switch (n.mode & $e && Hs(n), d(), de) {
          case li:
            A !== null && typeof A.markComponentErrored == "function" && A.markComponentErrored(
              n,
              t,
              J
            );
            break;
          case Hl:
          case ui:
          case Gu:
          case oi:
            A !== null && typeof A.markComponentSuspended == "function" && A.markComponentSuspended(
              n,
              t,
              J
            );
        }
    }
    function bp() {
      var e = g.H;
      return g.H = qn, e === null ? qn : e;
    }
    function Sp() {
      var e = g.A;
      return g.A = iT, e;
    }
    function Qr() {
      Ae = Ul, ca || (J & 4194176) !== J && Wt.current !== null || (Xu = !0), !(Na & 134217727) && !(Ga & 134217727) || fe === null || Wn(
        fe,
        J,
        Ht,
        !1
      );
    }
    function Zr(e, t, n) {
      var a = ye;
      ye |= dt;
      var l = bp(), u = Sp();
      if (fe !== e || J !== t) {
        if (sn) {
          var o = e.memoizedUpdaters;
          0 < o.size && (Ro(e, J), o.clear()), Qd(e, t);
        }
        ci = null, ou(e, t);
      }
      x(t), t = !1, o = Ae;
      e: do
        try {
          if (de !== Et && Z !== null) {
            var i = Z, c = Ut;
            switch (de) {
              case dd:
                Xr(), o = kc;
                break e;
              case ui:
              case Hl:
              case Gu:
                Wt.current === null && (t = !0);
                var s = de;
                if (de = Et, Ut = null, iu(e, i, c, s), n && Xu) {
                  o = ia;
                  break e;
                }
                break;
              default:
                s = de, de = Et, Ut = null, iu(e, i, c, s);
            }
          }
          Tp(), o = Ae;
          break;
        } catch (m) {
          vp(e, m);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Pi(), ye = a, g.H = l, g.A = u, M(), Z === null && (fe = null, J = 0, Mi()), o;
    }
    function Tp() {
      for (; Z !== null; ) Ep(Z);
    }
    function I0(e, t) {
      var n = ye;
      ye |= dt;
      var a = bp(), l = Sp();
      if (fe !== e || J !== t) {
        if (sn) {
          var u = e.memoizedUpdaters;
          0 < u.size && (Ro(e, J), u.clear()), Qd(e, t);
        }
        ci = null, _c = On() + vv, ou(e, t);
      } else
        Xu = jt(
          e,
          t
        );
      x(t);
      e: do
        try {
          if (de !== Et && Z !== null)
            t: switch (t = Z, u = Ut, de) {
              case li:
                de = Et, Ut = null, iu(
                  e,
                  t,
                  u,
                  li
                );
                break;
              case Hl:
                if (Vh(u)) {
                  de = Et, Ut = null, Rp(t);
                  break;
                }
                t = function() {
                  de === Hl && fe === e && (de = oi), Cn(e);
                }, u.then(t, t);
                break e;
              case ui:
                de = oi;
                break e;
              case yv:
                de = fd;
                break e;
              case oi:
                Vh(u) ? (de = Et, Ut = null, Rp(t)) : (de = Et, Ut = null, iu(
                  e,
                  t,
                  u,
                  oi
                ));
                break;
              case fd:
                var o = null;
                switch (Z.tag) {
                  case 26:
                    o = Z.memoizedState;
                  case 5:
                  case 27:
                    var i = Z;
                    if (!o || cy(o)) {
                      de = Et, Ut = null;
                      var c = i.sibling;
                      if (c !== null) Z = c;
                      else {
                        var s = i.return;
                        s !== null ? (Z = s, ic(s)) : Z = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                de = Et, Ut = null, iu(
                  e,
                  t,
                  u,
                  fd
                );
                break;
              case Gu:
                de = Et, Ut = null, iu(
                  e,
                  t,
                  u,
                  Gu
                );
                break;
              case dd:
                Xr(), Ae = kc;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          g.actQueue !== null ? Tp() : P0();
          break;
        } catch (m) {
          vp(e, m);
        }
      while (!0);
      return Pi(), g.H = a, g.A = l, ye = n, Z !== null ? (A !== null && typeof A.markRenderYielded == "function" && A.markRenderYielded(), ia) : (M(), fe = null, J = 0, Mi(), Ae);
    }
    function P0() {
      for (; Z !== null && !$b(); )
        Ep(Z);
    }
    function Ep(e) {
      var t = e.alternate;
      (e.mode & $e) !== he ? (Us(e), t = U(
        e,
        Cr,
        t,
        e,
        jn
      ), Hs(e)) : t = U(
        e,
        Cr,
        t,
        e,
        jn
      ), e.memoizedProps = e.pendingProps, t === null ? ic(e) : Z = t;
    }
    function Rp(e) {
      var t = U(e, eb, e);
      e.memoizedProps = e.pendingProps, t === null ? ic(e) : Z = t;
    }
    function eb(e) {
      var t = e.alternate, n = (e.mode & $e) !== he;
      switch (n && Us(e), e.tag) {
        case 15:
        case 0:
          t = Um(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            J
          );
          break;
        case 11:
          t = Um(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            J
          );
          break;
        case 5:
          ks(e);
        default:
          hp(t, e), e = Z = rp(e, jn), t = Cr(t, e, jn);
      }
      return n && Hs(e), t;
    }
    function iu(e, t, n, a) {
      Pi(), ks(t), Ou = null, Wo = 0;
      var l = t.return;
      try {
        if (q0(
          e,
          l,
          t,
          n,
          J
        )) {
          Ae = ai, Ii(
            e,
            Ct(n, e.current)
          ), Z = null;
          return;
        }
      } catch (u) {
        if (l !== null) throw Z = l, u;
        Ae = ai, Ii(
          e,
          Ct(n, e.current)
        ), Z = null;
        return;
      }
      t.flags & 32768 ? (F || a === li ? e = !0 : Xu || J & 536870912 ? e = !1 : (ca = e = !0, (a === Hl || a === ui || a === Gu) && (a = Wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ap(t, e)) : ic(t);
    }
    function ic(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Ap(
            t,
            ca
          );
          return;
        }
        var n = t.alternate;
        if (e = t.return, Us(t), n = U(
          t,
          K0,
          n,
          t,
          jn
        ), (t.mode & $e) !== he && Hh(t), n !== null) {
          Z = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          Z = t;
          return;
        }
        Z = t = e;
      } while (t !== null);
      Ae === ia && (Ae = pv);
    }
    function Ap(e, t) {
      do {
        var n = $0(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, Z = n;
          return;
        }
        if ((e.mode & $e) !== he) {
          Hh(e), n = e.actualDuration;
          for (var a = e.child; a !== null; )
            n += a.actualDuration, a = a.sibling;
          e.actualDuration = n;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          Z = e;
          return;
        }
        Z = e = n;
      } while (e !== null);
      Ae = kc, Z = null;
    }
    function kr(e, t, n, a, l, u, o, i, c, s) {
      var m = g.T, b = pe.p;
      try {
        pe.p = Mn, g.T = null, tb(
          e,
          t,
          n,
          a,
          b,
          l,
          u,
          o,
          i,
          c,
          s
        );
      } finally {
        g.T = m, pe.p = b;
      }
    }
    function tb(e, t, n, a, l, u, o, i) {
      do
        gl();
      while (Bl !== null);
      if (fn.flushLegacyContextWarning(), fn.flushPendingUnsafeLifecycleWarnings(), (ye & (dt | oa)) !== Mt)
        throw Error("Should not already be working.");
      var c = e.finishedWork;
      if (a = e.finishedLanes, A !== null && typeof A.markCommitStarted == "function" && A.markCommitStarted(a), c === null) return $u(), null;
      if (a === 0 && console.error(
        "root.finishedLanes should not be empty during a commit. This is a bug in React."
      ), e.finishedWork = null, e.finishedLanes = 0, c === e.current)
        throw Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
        );
      e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
      var s = c.lanes | c.childLanes;
      if (s |= Qf, un(
        e,
        a,
        s,
        u,
        o,
        i
      ), e === fe && (Z = fe = null, J = 0), !(c.subtreeFlags & 10256) && !(c.flags & 10256) || Kc || (Kc = !0, yd = s, gd = n, ob(hu, function() {
        return gl(), null;
      })), Hc = Cu(), n = (c.flags & 15990) !== 0, c.subtreeFlags & 15990 || n ? (n = g.T, g.T = null, u = pe.p, pe.p = Mn, o = ye, ye |= oa, Q0(e, c), k0(
        e,
        c,
        a
      ), z0(Od, e.containerInfo), rs = !!zd, Od = zd = null, e.current = c, A !== null && typeof A.markLayoutEffectsStarted == "function" && A.markLayoutEffectsStarted(
        a
      ), J0(c, e, a), A !== null && typeof A.markLayoutEffectsStopped == "function" && A.markLayoutEffectsStopped(), Wb(), ye = o, pe.p = u, g.T = n) : e.current = c, (n = Kc) ? (Kc = !1, Bl = e, si = a) : (Cp(e, s), ql = 0, fi = null), s = e.pendingLanes, s === 0 && (Xa = null), n || xp(e), ps(c.stateNode, l), sn && e.memoizedUpdaters.clear(), W0(), Cn(e), t !== null)
        for (l = e.onRecoverableError, c = 0; c < t.length; c++)
          s = t[c], n = nb(s.stack), U(
            s.source,
            l,
            s.value,
            n
          );
      return si & 3 && gl(), s = e.pendingLanes, a & 4194218 && s & 42 ? (Bc = !0, e === vd ? ri++ : (ri = 0, vd = e)) : ri = 0, Ao(0), $u(), null;
    }
    function nb(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Cp(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, so(t)));
    }
    function gl() {
      if (Bl !== null) {
        var e = Bl, t = yd;
        yd = 0;
        var n = Zd(si), a = Pn > n ? Pn : n;
        n = g.T;
        var l = pe.p;
        try {
          if (pe.p = a, g.T = null, Bl === null)
            var u = !1;
          else {
            a = gd, gd = null;
            var o = Bl, i = si;
            if (Bl = null, si = 0, (ye & (dt | oa)) !== Mt)
              throw Error(
                "Cannot flush passive effects while already rendering."
              );
            bd = !0, $c = !1, A !== null && typeof A.markPassiveEffectsStarted == "function" && A.markPassiveEffectsStarted(i);
            var c = ye;
            if (ye |= oa, ip(o.current), ap(
              o,
              o.current,
              i,
              a
            ), A !== null && typeof A.markPassiveEffectsStopped == "function" && A.markPassiveEffectsStopped(), xp(o), ye = c, Ao(0, !1), $c ? o === fi ? ql++ : (ql = 0, fi = o) : ql = 0, $c = bd = !1, tt && typeof tt.onPostCommitFiberRoot == "function")
              try {
                tt.onPostCommitFiberRoot(mu, o);
              } catch (m) {
                xn || (xn = !0, console.error(
                  "React instrumentation encountered an error: %s",
                  m
                ));
              }
            var s = o.current.stateNode;
            s.effectDuration = 0, s.passiveEffectDuration = 0, u = !0;
          }
          return u;
        } finally {
          pe.p = l, g.T = n, Cp(e, t);
        }
      }
      return !1;
    }
    function Dp(e, t, n) {
      t = Ct(n, t), t = hr(e.stateNode, t, 2), e = Aa(e, t, 2), e !== null && (Sn(e, 2), Cn(e));
    }
    function ie(e, t, n) {
      if (Qu = !1, e.tag === 3)
        Dp(e, e, n);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Dp(
              t,
              e,
              n
            );
            return;
          }
          if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Xa === null || !Xa.has(a))) {
              e = Ct(n, e), n = mr(2), a = Aa(t, n, 2), a !== null && (pr(
                n,
                a,
                t,
                e
              ), Sn(a, 2), Cn(a));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          n
        );
      }
    }
    function Jr(e, t, n) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new sT();
        var l = /* @__PURE__ */ new Set();
        a.set(t, l);
      } else
        l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
      l.has(n) || (hd = !0, l.add(n), a = ab.bind(null, e, t, n), sn && Ro(e, n), t.then(a, a));
    }
    function ab(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, mp() && g.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), fe === e && (J & n) === n && (Ae === Ul || Ae === rd && (J & 62914560) === J && On() - pd < gv ? (ye & dt) === Mt && ou(e, 0) : md |= n, wl === J && (wl = 0)), Cn(e);
    }
    function zp(e, t) {
      t === 0 && (t = va()), e = Pe(e, t), e !== null && (Sn(e, t), Cn(e));
    }
    function lb(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), zp(e, n);
    }
    function ub(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var a = e.stateNode, l = e.memoizedState;
          l !== null && (n = l.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      a !== null && a.delete(t), zp(e, n);
    }
    function _r(e, t, n) {
      if (t.subtreeFlags & 33562624)
        for (t = t.child; t !== null; ) {
          var a = e, l = t, u = l.type === bc;
          u = n || u, l.tag !== 22 ? l.flags & 33554432 ? u && U(
            l,
            Op,
            a,
            l,
            (l.mode & gg) === he
          ) : _r(
            a,
            l,
            u
          ) : l.memoizedState === null && (u && l.flags & 8192 ? U(
            l,
            Op,
            a,
            l
          ) : l.subtreeFlags & 33554432 && U(
            l,
            _r,
            a,
            l,
            u
          )), t = t.sibling;
        }
    }
    function Op(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      re(!0);
      try {
        tp(t), n && cp(t), np(e, t.alternate, t, !1), n && lp(e, t, 0, null, !1);
      } finally {
        re(!1);
      }
    }
    function xp(e) {
      var t = !0;
      e.current.mode & (at | rn) || (t = !1), _r(
        e,
        e.current,
        t
      );
    }
    function Mp(e) {
      if ((ye & dt) === Mt) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = H(e) || "ReactComponent", Wc !== null) {
            if (Wc.has(t)) return;
            Wc.add(t);
          } else Wc = /* @__PURE__ */ new Set([t]);
          U(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Ro(e, t) {
      sn && e.memoizedUpdaters.forEach(function(n) {
        Xd(e, n, t);
      });
    }
    function ob(e, t) {
      var n = g.actQueue;
      return n !== null ? (n.push(t), mT) : Cf(e, t);
    }
    function ib(e) {
      mp() && g.actQueue === null && U(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          H(e)
        );
      });
    }
    function Cn(e) {
      e !== Zu && e.next === null && (Zu === null ? Fc = Zu = e : Zu = Zu.next = e), Ic = !0, g.actQueue !== null ? Td || (Td = !0, qp(Up)) : Sd || (Sd = !0, qp(Up));
    }
    function Ao(e, t) {
      if (!Ed && Ic) {
        Ed = !0;
        do
          for (var n = !1, a = Fc; a !== null; ) {
            if (e !== 0) {
              var l = a.pendingLanes;
              if (l === 0) var u = 0;
              else {
                var o = a.suspendedLanes, i = a.pingedLanes;
                u = (1 << 31 - ot(42 | e) + 1) - 1, u &= l & ~(o & ~i), u = u & 201326677 ? u & 201326677 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (n = !0, Bp(a, u));
            } else
              u = J, u = pt(
                a,
                a === fe ? u : 0
              ), !(u & 3) || jt(a, u) || (n = !0, Bp(a, u));
            a = a.next;
          }
        while (n);
        Ed = !1;
      }
    }
    function Up() {
      Ic = Td = Sd = !1;
      var e = 0;
      jl !== 0 && (db() && (e = jl), jl = 0);
      for (var t = On(), n = null, a = Fc; a !== null; ) {
        var l = a.next, u = Hp(a, t);
        u === 0 ? (a.next = null, n === null ? Fc = l : n.next = l, l === null && (Zu = n)) : (n = a, (e !== 0 || u & 3) && (Ic = !0)), a = l;
      }
      Ao(e);
    }
    function Hp(e, t) {
      for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
        var o = 31 - ot(u), i = 1 << o, c = l[o];
        c === -1 ? (!(i & n) || i & a) && (l[o] = Ze(i, t)) : c <= t && (e.expiredLanes |= i), u &= ~i;
      }
      if (t = fe, n = J, n = pt(
        e,
        e === t ? n : 0
      ), a = e.callbackNode, n === 0 || e === t && de === Hl || e.cancelPendingCommit !== null)
        return a !== null && Kr(a), e.callbackNode = null, e.callbackPriority = 0;
      if (!(n & 3) || jt(e, n)) {
        if (t = n & -n, t !== e.callbackPriority || g.actQueue !== null && a !== Rd)
          Kr(a);
        else return t;
        switch (Zd(n)) {
          case Mn:
          case Un:
            n = zf;
            break;
          case Pn:
            n = hu;
            break;
          case Ac:
            n = Of;
            break;
          default:
            n = hu;
        }
        return a = wp.bind(null, e), g.actQueue !== null ? (g.actQueue.push(a), n = Rd) : n = Cf(n, a), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return a !== null && Kr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function wp(e, t) {
      Bc = wc = !1;
      var n = e.callbackNode;
      if (gl() && e.callbackNode !== n)
        return null;
      var a = J;
      return a = pt(
        e,
        e === fe ? a : 0
      ), a === 0 ? null : (yp(
        e,
        a,
        t
      ), Hp(e, On()), e.callbackNode != null && e.callbackNode === n ? wp.bind(null, e) : null);
    }
    function Bp(e, t) {
      if (gl()) return null;
      wc = Bc, Bc = !1, yp(e, t, !0);
    }
    function Kr(e) {
      e !== Rd && e !== null && Kb(e);
    }
    function qp(e) {
      g.actQueue !== null && g.actQueue.push(function() {
        return e(), null;
      }), TT(function() {
        (ye & (dt | oa)) !== Mt ? Cf(Df, e) : e();
      });
    }
    function $r() {
      return jl === 0 && (jl = bn()), jl;
    }
    function jp(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (le(e, "action"), to("" + e));
    }
    function Yp(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function cb(e, t, n, a, l) {
      if (t === "submit" && n && n.stateNode === l) {
        var u = jp(
          (l[bt] || null).action
        ), o = a.submitter;
        o && (t = (t = o[bt] || null) ? jp(t.formAction) : o.getAttribute("formAction"), t !== null && (u = t, o = null));
        var i = new xc(
          "action",
          "action",
          null,
          a,
          l
        );
        e.push({
          event: i,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (jl !== 0) {
                    var c = o ? Yp(
                      l,
                      o
                    ) : new FormData(l), s = {
                      pending: !0,
                      data: c,
                      method: l.method,
                      action: u
                    };
                    Object.freeze(s), or(
                      n,
                      s,
                      null,
                      c
                    );
                  }
                } else
                  typeof u == "function" && (i.preventDefault(), c = o ? Yp(
                    l,
                    o
                  ) : new FormData(l), s = {
                    pending: !0,
                    data: c,
                    method: l.method,
                    action: u
                  }, Object.freeze(s), or(
                    n,
                    s,
                    u,
                    c
                  ));
              },
              currentTarget: l
            }
          ]
        });
      }
    }
    function Vp(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        e: {
          var l = void 0, u = a.event;
          if (a = a.listeners, t)
            for (var o = a.length - 1; 0 <= o; o--) {
              var i = a[o], c = i.instance, s = i.currentTarget;
              if (i = i.listener, c !== l && u.isPropagationStopped())
                break e;
              l = u, l.currentTarget = s;
              try {
                i(l);
              } catch (m) {
                Qc(m);
              }
              l.currentTarget = null, l = c;
            }
          else
            for (o = 0; o < a.length; o++) {
              if (i = a[o], c = i.instance, s = i.currentTarget, i = i.listener, c !== l && u.isPropagationStopped())
                break e;
              l = u, l.currentTarget = s;
              try {
                i(l);
              } catch (m) {
                Qc(m);
              }
              l.currentTarget = null, l = c;
            }
        }
      }
    }
    function W(e, t) {
      Ad.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var n = t[xf];
      n === void 0 && (n = t[xf] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      n.has(a) || (Lp(t, e, 2, !1), n.add(a));
    }
    function Wr(e, t, n) {
      Ad.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var a = 0;
      t && (a |= 4), Lp(
        n,
        e,
        a,
        t
      );
    }
    function Fr(e) {
      if (!e[Pc]) {
        e[Pc] = !0, Hy.forEach(function(n) {
          n !== "selectionchange" && (Ad.has(n) || Wr(n, !1, e), Wr(n, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pc] || (t[Pc] = !0, Wr("selectionchange", !1, t));
      }
    }
    function Lp(e, t, n, a) {
      switch (py(t)) {
        case Mn:
          var l = Vb;
          break;
        case Un:
          l = Lb;
          break;
        default:
          l = ff;
      }
      n = l.bind(
        null,
        t,
        n,
        e
      ), l = void 0, !Bf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
      }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
      }) : e.addEventListener(
        t,
        n,
        !1
      );
    }
    function Ir(e, t, n, a, l) {
      var u = a;
      if (!(t & 1) && !(t & 2) && a !== null)
        e: for (; ; ) {
          if (a === null) return;
          var o = a.tag;
          if (o === 3 || o === 4) {
            var i = a.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l)
              break;
            if (o === 4)
              for (o = a.return; o !== null; ) {
                var c = o.tag;
                if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l))
                  return;
                o = o.return;
              }
            for (; i !== null; ) {
              if (o = Ia(i), o === null) return;
              if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
                a = u = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          a = a.return;
        }
      mh(function() {
        var s = u, m = Cs(n), b = [];
        e: {
          var p = pg.get(e);
          if (p !== void 0) {
            var S = xc, O = e;
            switch (e) {
              case "keypress":
                if (zi(n) === 0) break e;
              case "keydown":
              case "keyup":
                S = qS;
                break;
              case "focusin":
                O = "focus", S = Vf;
                break;
              case "focusout":
                O = "blur", S = Vf;
                break;
              case "beforeblur":
              case "afterblur":
                S = Vf;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                S = tg;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                S = RS;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                S = VS;
                break;
              case fg:
              case dg:
              case hg:
                S = DS;
                break;
              case mg:
                S = NS;
                break;
              case "scroll":
              case "scrollend":
                S = TS;
                break;
              case "wheel":
                S = XS;
                break;
              case "copy":
              case "cut":
              case "paste":
                S = OS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                S = ag;
                break;
              case "toggle":
              case "beforetoggle":
                S = ZS;
            }
            var N = (t & 4) !== 0, ze = !N && (e === "scroll" || e === "scrollend"), ae = N ? p !== null ? p + "Capture" : null : p;
            N = [];
            for (var f = s, r; f !== null; ) {
              var h = f;
              if (r = h.stateNode, h = h.tag, h !== 5 && h !== 26 && h !== 27 || r === null || ae === null || (h = no(f, ae), h != null && N.push(
                Co(
                  f,
                  h,
                  r
                )
              )), ze) break;
              f = f.return;
            }
            0 < N.length && (p = new S(
              p,
              O,
              null,
              n,
              m
            ), b.push({
              event: p,
              listeners: N
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== Bo && (O = n.relatedTarget || n.fromElement) && (Ia(O) || O[vl]))
              break e;
            if ((S || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (O = n.relatedTarget || n.toElement, S = s, O = O ? Ia(O) : null, O !== null && (ze = qt(O), N = O.tag, O !== ze || N !== 5 && N !== 27 && N !== 6) && (O = null)) : (S = null, O = s), S !== O)) {
              if (N = tg, h = "onMouseLeave", ae = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (N = ag, h = "onPointerLeave", ae = "onPointerEnter", f = "pointer"), ze = S == null ? p : Wu(S), r = O == null ? p : Wu(O), p = new N(
                h,
                f + "leave",
                S,
                n,
                m
              ), p.target = ze, p.relatedTarget = r, h = null, Ia(m) === s && (N = new N(
                ae,
                f + "enter",
                O,
                n,
                m
              ), N.target = r, N.relatedTarget = ze, h = N), ze = h, S && O)
                t: {
                  for (N = S, ae = O, f = 0, r = N; r; r = cu(r))
                    f++;
                  for (r = 0, h = ae; h; h = cu(h))
                    r++;
                  for (; 0 < f - r; )
                    N = cu(N), f--;
                  for (; 0 < r - f; )
                    ae = cu(ae), r--;
                  for (; f--; ) {
                    if (N === ae || ae !== null && N === ae.alternate)
                      break t;
                    N = cu(N), ae = cu(ae);
                  }
                  N = null;
                }
              else N = null;
              S !== null && Np(
                b,
                p,
                S,
                N,
                !1
              ), O !== null && ze !== null && Np(
                b,
                ze,
                O,
                N,
                !0
              );
            }
          }
          e: {
            if (p = s ? Wu(s) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file")
              var v = Th;
            else if (bh(p))
              if (sg)
                v = C0;
              else {
                v = R0;
                var R = E0;
              }
            else
              S = p.nodeName, !S || S.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? s && eo(s.elementType) && (v = Th) : v = A0;
            if (v && (v = v(e, s))) {
              Sh(
                b,
                v,
                n,
                m
              );
              break e;
            }
            R && R(e, p, s), e === "focusout" && s && p.type === "number" && s.memoizedProps.value != null && bs(p, "number", p.value);
          }
          switch (R = s ? Wu(s) : window, e) {
            case "focusin":
              (bh(R) || R.contentEditable === "true") && (Tu = R, Nf = s, Go = null);
              break;
            case "focusout":
              Go = Nf = Tu = null;
              break;
            case "mousedown":
              Gf = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Gf = !1, Oh(
                b,
                n,
                m
              );
              break;
            case "selectionchange":
              if (KS) break;
            case "keydown":
            case "keyup":
              Oh(
                b,
                n,
                m
              );
          }
          var j;
          if (Lf)
            e: {
              switch (e) {
                case "compositionstart":
                  var z = "onCompositionStart";
                  break e;
                case "compositionend":
                  z = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  z = "onCompositionUpdate";
                  break e;
              }
              z = void 0;
            }
          else
            Su ? gh(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === lg && (z = "onCompositionStart");
          z && (ug && n.locale !== "ko" && (Su || z !== "onCompositionStart" ? z === "onCompositionEnd" && Su && (j = ph()) : (Ha = m, qf = "value" in Ha ? Ha.value : Ha.textContent, Su = !0)), R = cc(
            s,
            z
          ), 0 < R.length && (z = new ng(
            z,
            e,
            null,
            n,
            m
          ), b.push({
            event: z,
            listeners: R
          }), j ? z.data = j : (j = vh(n), j !== null && (z.data = j)))), (j = JS ? v0(e, n) : b0(e, n)) && (z = cc(
            s,
            "onBeforeInput"
          ), 0 < z.length && (R = new MS(
            "onBeforeInput",
            "beforeinput",
            null,
            n,
            m
          ), b.push({
            event: R,
            listeners: z
          }), R.data = j)), cb(
            b,
            e,
            s,
            n,
            m
          );
        }
        Vp(b, t);
      });
    }
    function Co(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function cc(e, t) {
      for (var n = t + "Capture", a = []; e !== null; ) {
        var l = e, u = l.stateNode;
        l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = no(e, n), l != null && a.unshift(
          Co(e, l, u)
        ), l = no(e, t), l != null && a.push(
          Co(e, l, u)
        )), e = e.return;
      }
      return a;
    }
    function cu(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Np(e, t, n, a, l) {
      for (var u = t._reactName, o = []; n !== null && n !== a; ) {
        var i = n, c = i.alternate, s = i.stateNode;
        if (i = i.tag, c !== null && c === a) break;
        i !== 5 && i !== 26 && i !== 27 || s === null || (c = s, l ? (s = no(n, u), s != null && o.unshift(
          Co(n, s, c)
        )) : l || (s = no(n, u), s != null && o.push(
          Co(n, s, c)
        ))), n = n.return;
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    function Pr(e, t) {
      m0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Py || (Py = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var n = {
        registrationNameDependencies: bl,
        possibleRegistrationNames: Mf
      };
      eo(e) || typeof t.is == "string" || y0(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ge(e, t, n, a) {
      t !== n && (n = za(n), za(t) !== n && (a[e] = t));
    }
    function sb(e, t, n) {
      t.forEach(function(a) {
        n[Qp(a)] = a === "style" ? tf(e) : e.getAttribute(a);
      });
    }
    function Dn(e, t) {
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
    function Gp(e, t) {
      return e = e.namespaceURI === Dc || e.namespaceURI === pu ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function za(e) {
      return Fa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Wa(e)
      ), pa(e)), (typeof e == "string" ? e : "" + e).replace(pT, `
`).replace(yT, "");
    }
    function Xp(e, t) {
      return t = za(t), za(e) === t;
    }
    function sc() {
    }
    function ce(e, t, n, a, l, u) {
      switch (n) {
        case "children":
          typeof a == "string" ? (Di(a, t), t === "body" || t === "textarea" && a === "" || Pu(e, a)) : (typeof a == "number" || typeof a == "bigint") && (Di("" + a, t), t !== "body" && Pu(e, "" + a));
          break;
        case "className":
          Ei(e, "class", a);
          break;
        case "tabIndex":
          Ei(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ei(e, n, a);
          break;
        case "style":
          fh(e, a, u);
          break;
        case "data":
          if (t !== "object") {
            Ei(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || n !== "href")) {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            ), e.removeAttribute(n);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          le(a, n), a = to("" + a), e.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (a != null && (t === "form" ? n === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof a == "function" && (l.encType == null && l.method == null || ns || (ns = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), l.target == null || ts || (ts = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? n === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || l.type === "submit" || l.type === "image" || es ? t !== "button" || l.type == null || l.type === "submit" || es ? typeof a == "function" && (l.name == null || Av || (Av = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), l.formEncType == null && l.formMethod == null || ns || (ns = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), l.formTarget == null || ts || (ts = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (es = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (es = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof a == "function") {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof u == "function" && (n === "formAction" ? (t !== "input" && ce(e, t, "name", l.name, l, null), ce(
              e,
              t,
              "formEncType",
              l.formEncType,
              l,
              null
            ), ce(
              e,
              t,
              "formMethod",
              l.formMethod,
              l,
              null
            ), ce(
              e,
              t,
              "formTarget",
              l.formTarget,
              l,
              null
            )) : (ce(
              e,
              t,
              "encType",
              l.encType,
              l,
              null
            ), ce(e, t, "method", l.method, l, null), ce(
              e,
              t,
              "target",
              l.target,
              l,
              null
            )));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          le(a, n), a = to("" + a), e.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (typeof a != "function" && Dn(n, a), e.onclick = sc);
          break;
        case "onScroll":
          a != null && (typeof a != "function" && Dn(n, a), W("scroll", e));
          break;
        case "onScrollEnd":
          a != null && (typeof a != "function" && Dn(n, a), W("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          le(a, n), n = to("" + a), e.setAttributeNS(Yl, "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? (le(a, n), e.setAttribute(n, "" + a)) : e.removeAttribute(n);
          break;
        case "inert":
          a !== "" || as[n] || (as[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
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
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? (le(a, n), e.setAttribute(n, a)) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? (le(a, n), e.setAttribute(n, a)) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : (le(a, n), e.setAttribute(n, a));
          break;
        case "popover":
          W("beforetoggle", e), W("toggle", e), Ti(e, "popover", a);
          break;
        case "xlinkActuate":
          Xn(
            e,
            Yl,
            "xlink:actuate",
            a
          );
          break;
        case "xlinkArcrole":
          Xn(
            e,
            Yl,
            "xlink:arcrole",
            a
          );
          break;
        case "xlinkRole":
          Xn(
            e,
            Yl,
            "xlink:role",
            a
          );
          break;
        case "xlinkShow":
          Xn(
            e,
            Yl,
            "xlink:show",
            a
          );
          break;
        case "xlinkTitle":
          Xn(
            e,
            Yl,
            "xlink:title",
            a
          );
          break;
        case "xlinkType":
          Xn(
            e,
            Yl,
            "xlink:type",
            a
          );
          break;
        case "xmlBase":
          Xn(
            e,
            Cd,
            "xml:base",
            a
          );
          break;
        case "xmlLang":
          Xn(
            e,
            Cd,
            "xml:lang",
            a
          );
          break;
        case "xmlSpace":
          Xn(
            e,
            Cd,
            "xml:space",
            a
          );
          break;
        case "is":
          u != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ti(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          Cv || a == null || typeof a != "object" || (Cv = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            a
          ));
        default:
          !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = dh(n), Ti(e, n, a)) : bl.hasOwnProperty(n) && a != null && typeof a != "function" && Dn(n, a);
      }
    }
    function ef(e, t, n, a, l, u) {
      switch (n) {
        case "style":
          fh(e, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Pu(e, a) : (typeof a == "number" || typeof a == "bigint") && Pu(e, "" + a);
          break;
        case "onScroll":
          a != null && (typeof a != "function" && Dn(n, a), W("scroll", e));
          break;
        case "onScrollEnd":
          a != null && (typeof a != "function" && Dn(n, a), W("scrollend", e));
          break;
        case "onClick":
          a != null && (typeof a != "function" && Dn(n, a), e.onclick = sc);
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
          if (bl.hasOwnProperty(n))
            a != null && typeof a != "function" && Dn(n, a);
          else
            e: {
              if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), u = e[bt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, l), typeof a == "function")) {
                typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                break e;
              }
              n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ti(e, n, a);
            }
      }
    }
    function _e(e, t, n) {
      switch (Pr(t, n), t) {
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
          W("error", e), W("load", e);
          var a = !1, l = !1, u;
          for (u in n)
            if (n.hasOwnProperty(u)) {
              var o = n[u];
              if (o != null)
                switch (u) {
                  case "src":
                    a = !0;
                    break;
                  case "srcSet":
                    l = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ce(e, t, u, o, n, null);
                }
            }
          l && ce(e, t, "srcSet", n.srcSet, n, null), a && ce(e, t, "src", n.src, n, null);
          return;
        case "input":
          _l("input", n), W("invalid", e);
          var i = u = o = l = null, c = null, s = null;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var m = n[a];
              if (m != null)
                switch (a) {
                  case "name":
                    l = m;
                    break;
                  case "type":
                    o = m;
                    break;
                  case "checked":
                    c = m;
                    break;
                  case "defaultChecked":
                    s = m;
                    break;
                  case "value":
                    u = m;
                    break;
                  case "defaultValue":
                    i = m;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (m != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ce(e, t, a, m, n, null);
                }
            }
          $d(e, n), Wd(
            e,
            u,
            i,
            c,
            s,
            o,
            l,
            !1
          ), Ri(e);
          return;
        case "select":
          _l("select", n), W("invalid", e), a = o = u = null;
          for (l in n)
            if (n.hasOwnProperty(l) && (i = n[l], i != null))
              switch (l) {
                case "value":
                  u = i;
                  break;
                case "defaultValue":
                  o = i;
                  break;
                case "multiple":
                  a = i;
                default:
                  ce(
                    e,
                    t,
                    l,
                    i,
                    n,
                    null
                  );
              }
          Pd(e, n), t = u, n = o, e.multiple = !!a, t != null ? Kl(e, !!a, t, !1) : n != null && Kl(e, !!a, n, !0);
          return;
        case "textarea":
          _l("textarea", n), W("invalid", e), u = l = a = null;
          for (o in n)
            if (n.hasOwnProperty(o) && (i = n[o], i != null))
              switch (o) {
                case "value":
                  a = i;
                  break;
                case "defaultValue":
                  l = i;
                  break;
                case "children":
                  u = i;
                  break;
                case "dangerouslySetInnerHTML":
                  if (i != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  ce(
                    e,
                    t,
                    o,
                    i,
                    n,
                    null
                  );
              }
          eh(e, n), nh(e, a, l, u), Ri(e);
          return;
        case "option":
          Fd(e, n);
          for (c in n)
            if (n.hasOwnProperty(c) && (a = n[c], a != null))
              switch (c) {
                case "selected":
                  e.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  ce(e, t, c, a, n, null);
              }
          return;
        case "dialog":
          W("cancel", e), W("close", e);
          break;
        case "iframe":
        case "object":
          W("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < di.length; a++)
            W(di[a], e);
          break;
        case "image":
          W("error", e), W("load", e);
          break;
        case "details":
          W("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          W("error", e), W("load", e);
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
          for (s in n)
            if (n.hasOwnProperty(s) && (a = n[s], a != null))
              switch (s) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ce(e, t, s, a, n, null);
              }
          return;
        default:
          if (eo(t)) {
            for (m in n)
              n.hasOwnProperty(m) && (a = n[m], a !== void 0 && ef(
                e,
                t,
                m,
                a,
                n,
                void 0
              ));
            return;
          }
      }
      for (i in n)
        n.hasOwnProperty(i) && (a = n[i], a != null && ce(e, t, i, a, n, null));
    }
    function rb(e, t, n, a) {
      switch (Pr(t, a), t) {
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
          var l = null, u = null, o = null, i = null, c = null, s = null, m = null;
          for (S in n) {
            var b = n[S];
            if (n.hasOwnProperty(S) && b != null)
              switch (S) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  c = b;
                default:
                  a.hasOwnProperty(S) || ce(
                    e,
                    t,
                    S,
                    null,
                    a,
                    b
                  );
              }
          }
          for (var p in a) {
            var S = a[p];
            if (b = n[p], a.hasOwnProperty(p) && (S != null || b != null))
              switch (p) {
                case "type":
                  u = S;
                  break;
                case "name":
                  l = S;
                  break;
                case "checked":
                  s = S;
                  break;
                case "defaultChecked":
                  m = S;
                  break;
                case "value":
                  o = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  S !== b && ce(
                    e,
                    t,
                    p,
                    S,
                    a,
                    b
                  );
              }
          }
          t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, a = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, t || !a || Rv || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Rv = !0), !t || a || Ev || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Ev = !0), vs(
            e,
            o,
            i,
            c,
            s,
            m,
            u,
            l
          );
          return;
        case "select":
          S = o = i = p = null;
          for (u in n)
            if (c = n[u], n.hasOwnProperty(u) && c != null)
              switch (u) {
                case "value":
                  break;
                case "multiple":
                  S = c;
                default:
                  a.hasOwnProperty(u) || ce(
                    e,
                    t,
                    u,
                    null,
                    a,
                    c
                  );
              }
          for (l in a)
            if (u = a[l], c = n[l], a.hasOwnProperty(l) && (u != null || c != null))
              switch (l) {
                case "value":
                  p = u;
                  break;
                case "defaultValue":
                  i = u;
                  break;
                case "multiple":
                  o = u;
                default:
                  u !== c && ce(
                    e,
                    t,
                    l,
                    u,
                    a,
                    c
                  );
              }
          a = i, t = o, n = S, p != null ? Kl(e, !!t, p, !1) : !!n != !!t && (a != null ? Kl(e, !!t, a, !0) : Kl(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          S = p = null;
          for (i in n)
            if (l = n[i], n.hasOwnProperty(i) && l != null && !a.hasOwnProperty(i))
              switch (i) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ce(e, t, i, null, a, l);
              }
          for (o in a)
            if (l = a[o], u = n[o], a.hasOwnProperty(o) && (l != null || u != null))
              switch (o) {
                case "value":
                  p = l;
                  break;
                case "defaultValue":
                  S = l;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (l != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  l !== u && ce(e, t, o, l, a, u);
              }
          th(e, p, S);
          return;
        case "option":
          for (var O in n)
            if (p = n[O], n.hasOwnProperty(O) && p != null && !a.hasOwnProperty(O))
              switch (O) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ce(
                    e,
                    t,
                    O,
                    null,
                    a,
                    p
                  );
              }
          for (c in a)
            if (p = a[c], S = n[c], a.hasOwnProperty(c) && p !== S && (p != null || S != null))
              switch (c) {
                case "selected":
                  e.selected = p && typeof p != "function" && typeof p != "symbol";
                  break;
                default:
                  ce(
                    e,
                    t,
                    c,
                    p,
                    a,
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
          for (var N in n)
            p = n[N], n.hasOwnProperty(N) && p != null && !a.hasOwnProperty(N) && ce(
              e,
              t,
              N,
              null,
              a,
              p
            );
          for (s in a)
            if (p = a[s], S = n[s], a.hasOwnProperty(s) && p !== S && (p != null || S != null))
              switch (s) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ce(
                    e,
                    t,
                    s,
                    p,
                    a,
                    S
                  );
              }
          return;
        default:
          if (eo(t)) {
            for (var ze in n)
              p = n[ze], n.hasOwnProperty(ze) && p !== void 0 && !a.hasOwnProperty(ze) && ef(
                e,
                t,
                ze,
                void 0,
                a,
                p
              );
            for (m in a)
              p = a[m], S = n[m], !a.hasOwnProperty(m) || p === S || p === void 0 && S === void 0 || ef(
                e,
                t,
                m,
                p,
                a,
                S
              );
            return;
          }
      }
      for (var ae in n)
        p = n[ae], n.hasOwnProperty(ae) && p != null && !a.hasOwnProperty(ae) && ce(e, t, ae, null, a, p);
      for (b in a)
        p = a[b], S = n[b], !a.hasOwnProperty(b) || p === S || p == null && S == null || ce(e, t, b, p, a, S);
    }
    function Qp(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function tf(e) {
      var t = {};
      e = e.style;
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t[a] = e.getPropertyValue(a);
      }
      return t;
    }
    function Zp(e, t, n) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var a, l = a = "", u;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var o = t[u];
            o != null && typeof o != "boolean" && o !== "" && (u.indexOf("--") === 0 ? (Zl(o, u), a += l + u + ":" + ("" + o).trim()) : typeof o != "number" || o === 0 || Fy.has(u) ? (Zl(o, u), a += l + u.replace(Jy, "-$1").toLowerCase().replace(_y, "-ms-") + ":" + ("" + o).trim()) : a += l + u.replace(Jy, "-$1").toLowerCase().replace(_y, "-ms-") + ":" + o + "px", l = ";");
          }
        a = a || null, t = e.getAttribute("style"), t !== a && (a = za(a), za(t) !== a && (n.style = tf(e)));
      }
    }
    function Xt(e, t, n, a, l, u) {
      if (l.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (a != null)
        switch (typeof a) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (le(a, t), e === "" + a)
              return;
        }
      Ge(t, e, a, u);
    }
    function kp(e, t, n, a, l, u) {
      if (l.delete(n), e = e.getAttribute(n), e === null) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
        }
        if (!a) return;
      } else
        switch (typeof a) {
          case "function":
          case "symbol":
            break;
          default:
            if (a) return;
        }
      Ge(t, e, a, u);
    }
    function nf(e, t, n, a, l, u) {
      if (l.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (a != null)
        switch (typeof a) {
          case "function":
          case "symbol":
            break;
          default:
            if (le(a, n), e === "" + a)
              return;
        }
      Ge(t, e, a, u);
    }
    function Jp(e, t, n, a, l, u) {
      if (l.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(a)) return;
        }
      else if (a != null)
        switch (typeof a) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(a) && (le(a, t), e === "" + a))
              return;
        }
      Ge(t, e, a, u);
    }
    function rc(e, t, n, a, l, u) {
      if (l.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (a != null)
        switch (typeof a) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (le(a, t), n = to("" + a), e === n)
              return;
        }
      Ge(t, e, a, u);
    }
    function _p(e, t, n, a) {
      for (var l = {}, u = /* @__PURE__ */ new Set(), o = e.attributes, i = 0; i < o.length; i++)
        switch (o[i].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            u.add(o[i].name);
        }
      if (eo(t)) {
        for (var c in n)
          if (n.hasOwnProperty(c)) {
            var s = n[c];
            if (s != null) {
              if (bl.hasOwnProperty(c))
                typeof s != "function" && Dn(c, s);
              else if (n.suppressHydrationWarning !== !0)
                switch (c) {
                  case "children":
                    typeof s != "string" && typeof s != "number" || Ge(
                      "children",
                      e.textContent,
                      s,
                      l
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
                    o = e.innerHTML, s = s ? s.__html : void 0, s != null && (s = Gp(e, s), Ge(
                      c,
                      o,
                      s,
                      l
                    ));
                    continue;
                  case "style":
                    u.delete(c), Zp(e, s, l);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    u.delete(c.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      c
                    );
                    continue;
                  case "className":
                    u.delete("class"), o = Jd(
                      e,
                      "class",
                      s
                    ), Ge(
                      "className",
                      o,
                      s,
                      l
                    );
                    continue;
                  default:
                    a.context === sa && t !== "svg" && t !== "math" ? u.delete(c.toLowerCase()) : u.delete(c), o = Jd(
                      e,
                      c,
                      s
                    ), Ge(
                      c,
                      o,
                      s,
                      l
                    );
                }
            }
          }
      } else
        for (s in n)
          if (n.hasOwnProperty(s) && (c = n[s], c != null)) {
            if (bl.hasOwnProperty(s))
              typeof c != "function" && Dn(s, c);
            else if (n.suppressHydrationWarning !== !0)
              switch (s) {
                case "children":
                  typeof c != "string" && typeof c != "number" || Ge(
                    "children",
                    e.textContent,
                    c,
                    l
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
                  o = e.innerHTML, c = c ? c.__html : void 0, c != null && (c = Gp(e, c), o !== c && (l[s] = { __html: o }));
                  continue;
                case "className":
                  Xt(
                    e,
                    s,
                    "class",
                    c,
                    u,
                    l
                  );
                  continue;
                case "tabIndex":
                  Xt(
                    e,
                    s,
                    "tabindex",
                    c,
                    u,
                    l
                  );
                  continue;
                case "style":
                  u.delete(s), Zp(e, c, l);
                  continue;
                case "multiple":
                  u.delete(s), Ge(
                    s,
                    e.multiple,
                    c,
                    l
                  );
                  continue;
                case "muted":
                  u.delete(s), Ge(
                    s,
                    e.muted,
                    c,
                    l
                  );
                  continue;
                case "autoFocus":
                  u.delete("autofocus"), Ge(
                    s,
                    e.autofocus,
                    c,
                    l
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    u.delete(s), o = e.getAttribute("data"), Ge(
                      s,
                      o,
                      c,
                      l
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(c !== "" || t === "a" && s === "href" || t === "object" && s === "data")) {
                    console.error(
                      s === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      s,
                      s
                    ), rc(
                      e,
                      s,
                      s,
                      null,
                      u,
                      l
                    );
                    continue;
                  }
                  rc(
                    e,
                    s,
                    s,
                    c,
                    u,
                    l
                  );
                  continue;
                case "action":
                case "formAction":
                  if (o = e.getAttribute(s), typeof c == "function") {
                    u.delete(s.toLowerCase()), s === "formAction" ? (u.delete("name"), u.delete("formenctype"), u.delete("formmethod"), u.delete("formtarget")) : (u.delete("enctype"), u.delete("method"), u.delete("target"));
                    continue;
                  } else if (o === gT) {
                    u.delete(s.toLowerCase()), Ge(
                      s,
                      "function",
                      c,
                      l
                    );
                    continue;
                  }
                  rc(
                    e,
                    s,
                    s.toLowerCase(),
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkHref":
                  rc(
                    e,
                    s,
                    "xlink:href",
                    c,
                    u,
                    l
                  );
                  continue;
                case "contentEditable":
                  nf(
                    e,
                    s,
                    "contenteditable",
                    c,
                    u,
                    l
                  );
                  continue;
                case "spellCheck":
                  nf(
                    e,
                    s,
                    "spellcheck",
                    c,
                    u,
                    l
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  nf(
                    e,
                    s,
                    s,
                    c,
                    u,
                    l
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
                  kp(
                    e,
                    s,
                    s.toLowerCase(),
                    c,
                    u,
                    l
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    i = e;
                    var m = o = s, b = l;
                    if (u.delete(m), i = i.getAttribute(m), i === null)
                      switch (typeof c) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (c === !1) break e;
                      }
                    else if (c != null)
                      switch (typeof c) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (c === !0 && i === "") break e;
                          break;
                        default:
                          if (le(c, o), i === "" + c)
                            break e;
                      }
                    Ge(
                      o,
                      i,
                      c,
                      b
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (i = e, m = o = s, b = l, u.delete(m), i = i.getAttribute(m), i === null)
                      switch (typeof c) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(c) || 1 > c) break e;
                      }
                    else if (c != null)
                      switch (typeof c) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(c) || 1 > c) && (le(c, o), i === "" + c))
                            break e;
                      }
                    Ge(
                      o,
                      i,
                      c,
                      b
                    );
                  }
                  continue;
                case "rowSpan":
                  Jp(
                    e,
                    s,
                    "rowspan",
                    c,
                    u,
                    l
                  );
                  continue;
                case "start":
                  Jp(
                    e,
                    s,
                    s,
                    c,
                    u,
                    l
                  );
                  continue;
                case "xHeight":
                  Xt(
                    e,
                    s,
                    "x-height",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkActuate":
                  Xt(
                    e,
                    s,
                    "xlink:actuate",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkArcrole":
                  Xt(
                    e,
                    s,
                    "xlink:arcrole",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkRole":
                  Xt(
                    e,
                    s,
                    "xlink:role",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkShow":
                  Xt(
                    e,
                    s,
                    "xlink:show",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkTitle":
                  Xt(
                    e,
                    s,
                    "xlink:title",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xlinkType":
                  Xt(
                    e,
                    s,
                    "xlink:type",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xmlBase":
                  Xt(
                    e,
                    s,
                    "xml:base",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xmlLang":
                  Xt(
                    e,
                    s,
                    "xml:lang",
                    c,
                    u,
                    l
                  );
                  continue;
                case "xmlSpace":
                  Xt(
                    e,
                    s,
                    "xml:space",
                    c,
                    u,
                    l
                  );
                  continue;
                case "inert":
                  c !== "" || as[s] || (as[s] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    s
                  )), kp(
                    e,
                    s,
                    s,
                    c,
                    u,
                    l
                  );
                  continue;
                default:
                  if (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") {
                    i = dh(s), o = !1, a.context === sa && t !== "svg" && t !== "math" ? u.delete(i.toLowerCase()) : (m = s.toLowerCase(), m = zc.hasOwnProperty(
                      m
                    ) && zc[m] || null, m !== null && m !== s && (o = !0, u.delete(m)), u.delete(i));
                    e: if (m = e, b = i, i = c, gs(b))
                      if (m.hasAttribute(b))
                        m = m.getAttribute(
                          b
                        ), le(
                          i,
                          b
                        ), i = m === "" + i ? i : m;
                      else {
                        switch (typeof i) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (m = b.toLowerCase().slice(0, 5), m !== "data-" && m !== "aria-")
                              break e;
                        }
                        i = i === void 0 ? void 0 : null;
                      }
                    else i = void 0;
                    o || Ge(
                      s,
                      i,
                      c,
                      l
                    );
                  }
              }
          }
      return 0 < u.size && n.suppressHydrationWarning !== !0 && sb(e, u, l), Object.keys(l).length === 0 ? null : l;
    }
    function fb(e, t) {
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
    function fc(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Kp(e) {
      switch (e) {
        case pu:
          return ku;
        case Dc:
          return os;
        default:
          return sa;
      }
    }
    function $p(e, t) {
      if (e === sa)
        switch (t) {
          case "svg":
            return ku;
          case "math":
            return os;
          default:
            return sa;
        }
      return e === ku && t === "foreignObject" ? sa : e;
    }
    function af(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function db() {
      var e = window.event;
      return e && e.type === "popstate" ? e === xd ? !1 : (xd = e, !0) : (xd = null, !1);
    }
    function hb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mb(e, t, n) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          break;
        case "img":
          n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
      }
    }
    function pb(e, t, n, a) {
      rb(e, t, n, a), e[bt] = a;
    }
    function Wp(e) {
      Pu(e, "");
    }
    function yb(e, t, n) {
      e.nodeValue = n;
    }
    function gb(e, t) {
      e.removeChild(t);
    }
    function vb(e, t) {
      e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function lf(e, t) {
      var n = t, a = 0;
      do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
          if (n = l.data, n === us) {
            if (a === 0) {
              e.removeChild(l), xo(t);
              return;
            }
            a--;
          } else
            n !== ls && n !== Vl && n !== Ll || a++;
        n = l;
      } while (n);
      xo(t);
    }
    function bb(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Sb(e) {
      e.nodeValue = "";
    }
    function Tb(e, t) {
      t = t[bT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Eb(e, t) {
      e.nodeValue = t;
    }
    function uf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            uf(n), ys(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(n);
      }
    }
    function Rb(e, t, n, a) {
      for (; e.nodeType === 1; ) {
        var l = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (a) {
          if (!e[wo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (u !== l.rel || e.getAttribute("href") !== (l.href == null ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (u = e.getAttribute("src"), (u !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          le(l.name, "name");
          var u = l.name == null ? null : "" + l.name;
          if (l.type === "hidden" && e.getAttribute("name") === u)
            return e;
        } else return e;
        if (e = Qt(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Ab(e, t, n) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Qt(e.nextSibling), e === null)) return null;
      return e;
    }
    function Qt(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === ls || t === Ll || t === Vl || t === Dd || t === Dv)
            break;
          if (t === us) return null;
        }
      }
      return e;
    }
    function Fp(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), n = {}, a = e.attributes, l = 0; l < a.length; l++) {
          var u = a[l];
          n[Qp(u.name)] = u.name.toLowerCase() === "style" ? tf(e) : u.value;
        }
        return { type: t, props: n };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ip(e, t, n) {
      return n === null || n[vT] !== !0 ? (e.nodeValue === t ? e = null : (t = za(t), e = za(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Pp(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === us) {
            if (t === 0)
              return Qt(e.nextSibling);
            t--;
          } else
            n !== ls && n !== Ll && n !== Vl || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function ey(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === ls || n === Ll || n === Vl) {
            if (t === 0) return e;
            t--;
          } else n === us && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Cb(e) {
      xo(e);
    }
    function Db(e) {
      xo(e);
    }
    function ty(e, t, n, a, l) {
      switch (l && As(e, a.ancestorInfo), t = fc(n), e) {
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
    function zb(e, t, n, a) {
      if (Pa(n)) {
        var l = n.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          l,
          l,
          l
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
      for (l = n.attributes; l.length; )
        n.removeAttributeNode(l[0]);
      _e(n, e, t), n[nt] = a, n[bt] = t;
    }
    function dc(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument;
    }
    function ny(e, t, n) {
      var a = Ju;
      if (a && typeof t == "string" && t) {
        var l = Lt(t);
        l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Hv.has(l) || (Hv.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), _e(t, "link", e), Ne(t), a.head.appendChild(t)));
      }
    }
    function ay(e, t, n, a) {
      var l = (l = Ma.current) ? dc(l) : null;
      if (!l)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (n = su(n.href), t = kl(l).hoistableStyles, a = t.get(n), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = su(n.href);
            var u = kl(l).hoistableStyles, o = u.get(e);
            if (!o && (l = l.ownerDocument || l, o = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Nl, preload: null }
            }, u.set(e, o), (u = l.querySelector(
              Do(e)
            )) && !u._p && (o.instance = u, o.state.loading = hi | en), !tn.has(e))) {
              var i = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              };
              tn.set(e, i), u || Ob(
                l,
                e,
                i,
                o.state
              );
            }
            if (t && a === null)
              throw n = `

  - ` + hc(t) + `
  + ` + hc(n), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
              );
            return o;
          }
          if (t && a !== null)
            throw n = `

  - ` + hc(t) + `
  + ` + hc(n), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
            );
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = ru(n), t = kl(l).hoistableScripts, a = t.get(n), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function hc(e) {
      var t = 0, n = "<link";
      return typeof e.rel == "string" ? (t++, n += ' rel="' + e.rel + '"') : In.call(e, "rel") && (t++, n += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, n += ' href="' + e.href + '"') : In.call(e, "href") && (t++, n += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, n += ' precedence="' + e.precedence + '"') : In.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
    }
    function su(e) {
      return 'href="' + Lt(e) + '"';
    }
    function Do(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ly(e) {
      return Q({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Ob(e, t, n, a) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? a.loading = hi : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= hi;
      }), t.addEventListener("error", function() {
        return a.loading |= Mv;
      }), _e(t, "link", n), Ne(t), e.head.appendChild(t));
    }
    function ru(e) {
      return '[src="' + Lt(e) + '"]';
    }
    function zo(e) {
      return "script[async]" + e;
    }
    function uy(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var a = e.querySelector(
              'style[data-href~="' + Lt(n.href) + '"]'
            );
            if (a)
              return t.instance = a, Ne(a), a;
            var l = Q({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null
            });
            return a = (e.ownerDocument || e).createElement("style"), Ne(a), _e(a, "style", l), mc(a, n.precedence, e), t.instance = a;
          case "stylesheet":
            l = su(n.href);
            var u = e.querySelector(
              Do(l)
            );
            if (u)
              return t.state.loading |= en, t.instance = u, Ne(u), u;
            a = ly(n), (l = tn.get(l)) && of(a, l), u = (e.ownerDocument || e).createElement("link"), Ne(u);
            var o = u;
            return o._p = new Promise(function(i, c) {
              o.onload = i, o.onerror = c;
            }), _e(u, "link", a), t.state.loading |= en, mc(u, n.precedence, e), t.instance = u;
          case "script":
            return u = ru(n.src), (l = e.querySelector(
              zo(u)
            )) ? (t.instance = l, Ne(l), l) : (a = n, (l = tn.get(u)) && (a = Q({}, n), cf(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Ne(l), _e(l, "link", a), e.head.appendChild(l), t.instance = l);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & en) === Nl && (a = t.instance, t.state.loading |= en, mc(a, n.precedence, e));
      return t.instance;
    }
    function mc(e, t, n) {
      for (var a = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), l = a.length ? a[a.length - 1] : null, u = l, o = 0; o < a.length; o++) {
        var i = a[o];
        if (i.dataset.precedence === t) u = i;
        else if (u !== l) break;
      }
      u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function of(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function cf(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function oy(e, t, n) {
      if (is === null) {
        var a = /* @__PURE__ */ new Map(), l = is = /* @__PURE__ */ new Map();
        l.set(n, a);
      } else
        l = is, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
      if (a.has(e)) return a;
      for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
        var u = n[l];
        if (!(u[wo] || u[nt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== pu) {
          var o = u.getAttribute(t) || "";
          o = e + o;
          var i = a.get(o);
          i ? i.push(u) : a.set(o, [u]);
        }
      }
      return a;
    }
    function iy(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function xb(e, t, n) {
      var a = !n.ancestorInfo.containerTagInScope;
      if (n.context === ku || t.itemProp != null)
        return !a || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
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
            a && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflic with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`, or move the <style> to the <style> tag.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var l = t.onError, u = t.disabled;
              n = [], t.onLoad && n.push("`onLoad`"), l && n.push("`onError`"), u != null && n.push("`disabled`"), l = fb(n, "and"), l += n.length === 1 ? " prop" : " props", u = n.length === 1 ? "an " + l : "the " + l, n.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                u,
                l
              );
            }
            a && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && a && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            a && (e ? t.onLoad || t.onError ? console.error(
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
          a && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function cy(e) {
      return !(e.type === "stylesheet" && (e.state.loading & Uv) === Nl);
    }
    function Mb() {
    }
    function Ub(e, t, n) {
      if (mi === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var a = mi;
      if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & en) === Nl) {
        if (t.instance === null) {
          var l = su(n.href), u = e.querySelector(
            Do(l)
          );
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = pc.bind(a), e.then(a, a)), t.state.loading |= en, t.instance = u, Ne(u);
            return;
          }
          u = e.ownerDocument || e, n = ly(n), (l = tn.get(l)) && of(n, l), u = u.createElement("link"), Ne(u);
          var o = u;
          o._p = new Promise(function(i, c) {
            o.onload = i, o.onerror = c;
          }), _e(u, "link", n), t.instance = u;
        }
        a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & Uv) === Nl && (a.count++, t = pc.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function Hb() {
      if (mi === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = mi;
      return e.stylesheets && e.count === 0 && sf(e, e.stylesheets), 0 < e.count ? function(t) {
        var n = setTimeout(function() {
          if (e.stylesheets && sf(e, e.stylesheets), e.unsuspend) {
            var a = e.unsuspend;
            e.unsuspend = null, a();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(n);
        };
      } : null;
    }
    function pc() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          sf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function sf(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, cs = /* @__PURE__ */ new Map(), t.forEach(wb, e), cs = null, pc.call(e));
    }
    function wb(e, t) {
      if (!(t.state.loading & en)) {
        var n = cs.get(e);
        if (n) var a = n.get(Ud);
        else {
          n = /* @__PURE__ */ new Map(), cs.set(e, n);
          for (var l = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), u = 0; u < l.length; u++) {
            var o = l[u];
            (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), a = o);
          }
          a && n.set(Ud, a);
        }
        l = t.instance, o = l.getAttribute("data-precedence"), u = n.get(o) || a, u === a && n.set(Ud, l), n.set(o, l), this.count++, a = pc.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), u ? u.parentNode.insertBefore(l, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= en;
      }
    }
    function Bb(e, t, n) {
      var a = 0;
      switch (e) {
        case "dir":
        case "dirxml":
        case "groupEnd":
        case "table":
          return jv.apply(console[e], [console].concat(t));
        case "assert":
          a = 1;
      }
      return t = t.slice(0), typeof t[a] == "string" ? t.splice(
        a,
        1,
        wv + t[a],
        Bv,
        ss + n + ss,
        qv
      ) : t.splice(
        a,
        0,
        wv,
        Bv,
        ss + n + ss,
        qv
      ), t.unshift(console), jv.apply(console[e], t);
    }
    function qb(e, t, n, a, l, u, o, i) {
      for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Md, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yt(0), this.hiddenUpdates = Yt(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
    }
    function sy(e, t, n, a, l, u, o, i, c, s, m, b) {
      return e = new qb(
        e,
        t,
        n,
        o,
        i,
        c,
        s,
        b
      ), t = IS, u === !0 && (t |= at | rn), sn && (t |= $e), u = Ce(3, null, null, t), e.current = u, u.stateNode = e, t = Vs(), sl(t), e.pooledCache = t, sl(t), u.memoizedState = {
        element: a,
        isDehydrated: n,
        cache: t
      }, Or(u), e;
    }
    function ry(e) {
      return e ? (e = wa, e) : wa;
    }
    function fy(e, t, n, a) {
      return t.tag === 0 && gl(), dy(
        t.current,
        2,
        e,
        t,
        n,
        a
      ), 2;
    }
    function dy(e, t, n, a, l, u) {
      if (tt && typeof tt.onScheduleFiberRoot == "function")
        try {
          tt.onScheduleFiberRoot(mu, a, n);
        } catch (o) {
          xn || (xn = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
      A !== null && typeof A.markRenderScheduled == "function" && A.markRenderScheduled(t), l = ry(l), a.context === null ? a.context = l : a.pendingContext = l, Zt && et !== null && !Yv && (Yv = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        H(et) || "Unknown"
      )), a = Ra(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (typeof u != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        u
      ), a.callback = u), n = Aa(e, a, t), n !== null && (Ee(n, e, t), yo(n, e, t));
    }
    function hy(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function rf(e, t) {
      hy(e, t), (e = e.alternate) && hy(e, t);
    }
    function my(e) {
      if (e.tag === 13) {
        var t = Pe(e, 67108864);
        t !== null && Ee(t, e, 67108864), rf(e, 67108864);
      }
    }
    function jb() {
      return et;
    }
    function Yb() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; 31 > n; n++) {
        var a = me(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
    function Vb(e, t, n, a) {
      var l = g.T;
      g.T = null;
      var u = pe.p;
      try {
        pe.p = Mn, ff(e, t, n, a);
      } finally {
        pe.p = u, g.T = l;
      }
    }
    function Lb(e, t, n, a) {
      var l = g.T;
      g.T = null;
      var u = pe.p;
      try {
        pe.p = Un, ff(e, t, n, a);
      } finally {
        pe.p = u, g.T = l;
      }
    }
    function ff(e, t, n, a) {
      if (rs) {
        var l = df(a);
        if (l === null)
          Ir(
            e,
            t,
            a,
            fs,
            n
          ), yy(e, a);
        else if (Nb(
          l,
          e,
          t,
          n,
          a
        ))
          a.stopPropagation();
        else if (yy(e, a), t & 4 && -1 < ET.indexOf(e)) {
          for (; l !== null; ) {
            var u = Pa(l);
            if (u !== null)
              switch (u.tag) {
                case 3:
                  if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                    var o = w(u.pendingLanes);
                    if (o !== 0) {
                      var i = u;
                      for (i.pendingLanes |= 2, i.entangledLanes |= 2; o; ) {
                        var c = 1 << 31 - ot(o);
                        i.entanglements[1] |= c, o &= ~c;
                      }
                      Cn(u), (ye & (dt | oa)) === Mt && (_c = On() + vv, Ao(0));
                    }
                  }
                  break;
                case 13:
                  i = Pe(u, 2), i !== null && Ee(i, u, 2), uu(), rf(u, 2);
              }
            if (u = df(a), u === null && Ir(
              e,
              t,
              a,
              fs,
              n
            ), u === l) break;
            l = u;
          }
          l !== null && a.stopPropagation();
        } else
          Ir(
            e,
            t,
            a,
            null,
            n
          );
      }
    }
    function df(e) {
      return e = Cs(e), hf(e);
    }
    function hf(e) {
      if (fs = null, e = Ia(e), e !== null) {
        var t = qt(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = D(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return fs = e, null;
    }
    function py(e) {
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
          return Mn;
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
          return Un;
        case "message":
          switch (Fb()) {
            case Df:
              return Mn;
            case zf:
              return Un;
            case hu:
            case Ib:
              return Pn;
            case Of:
              return Ac;
            default:
              return Pn;
          }
        default:
          return Pn;
      }
    }
    function yy(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qa = null;
          break;
        case "dragenter":
        case "dragleave":
          Za = null;
          break;
        case "mouseover":
        case "mouseout":
          ka = null;
          break;
        case "pointerover":
        case "pointerout":
          yi.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          gi.delete(t.pointerId);
      }
    }
    function Oo(e, t, n, a, l, u) {
      return e === null || e.nativeEvent !== u ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [l]
      }, t !== null && (t = Pa(t), t !== null && my(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
    }
    function Nb(e, t, n, a, l) {
      switch (t) {
        case "focusin":
          return Qa = Oo(
            Qa,
            e,
            t,
            n,
            a,
            l
          ), !0;
        case "dragenter":
          return Za = Oo(
            Za,
            e,
            t,
            n,
            a,
            l
          ), !0;
        case "mouseover":
          return ka = Oo(
            ka,
            e,
            t,
            n,
            a,
            l
          ), !0;
        case "pointerover":
          var u = l.pointerId;
          return yi.set(
            u,
            Oo(
              yi.get(u) || null,
              e,
              t,
              n,
              a,
              l
            )
          ), !0;
        case "gotpointercapture":
          return u = l.pointerId, gi.set(
            u,
            Oo(
              gi.get(u) || null,
              e,
              t,
              n,
              a,
              l
            )
          ), !0;
      }
      return !1;
    }
    function gy(e) {
      var t = Ia(e.target);
      if (t !== null) {
        var n = qt(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = D(n), t !== null) {
              e.blockedOn = t, i0(e.priority, function() {
                if (n.tag === 13) {
                  var a = zt(n), l = Pe(n, a);
                  l !== null && Ee(l, n, a), rf(n, a);
                }
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function yc(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = df(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var a = new n.constructor(
            n.type,
            n
          ), l = a;
          Bo !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Bo = l, n.target.dispatchEvent(a), Bo === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Bo = null;
        } else
          return t = Pa(n), t !== null && my(t), e.blockedOn = n, !1;
        t.shift();
      }
      return !0;
    }
    function vy(e, t, n) {
      yc(e) && n.delete(t);
    }
    function Gb() {
      Hd = !1, Qa !== null && yc(Qa) && (Qa = null), Za !== null && yc(Za) && (Za = null), ka !== null && yc(ka) && (ka = null), yi.forEach(vy), gi.forEach(vy);
    }
    function gc(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hd || (Hd = !0, Ue.unstable_scheduleCallback(
        Ue.unstable_NormalPriority,
        Gb
      )));
    }
    function by(e) {
      ds !== e && (ds = e, Ue.unstable_scheduleCallback(
        Ue.unstable_NormalPriority,
        function() {
          ds === e && (ds = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t], a = e[t + 1], l = e[t + 2];
            if (typeof a != "function") {
              if (hf(a || n) === null)
                continue;
              break;
            }
            var u = Pa(n);
            u !== null && (e.splice(t, 3), t -= 3, n = {
              pending: !0,
              data: l,
              method: n.method,
              action: a
            }, Object.freeze(n), or(
              u,
              n,
              a,
              l
            ));
          }
        }
      ));
    }
    function xo(e) {
      function t(c) {
        return gc(c, e);
      }
      Qa !== null && gc(Qa, e), Za !== null && gc(Za, e), ka !== null && gc(ka, e), yi.forEach(t), gi.forEach(t);
      for (var n = 0; n < Ja.length; n++) {
        var a = Ja[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Ja.length && (n = Ja[0], n.blockedOn === null); )
        gy(n), n.blockedOn === null && Ja.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (a = 0; a < n.length; a += 3) {
          var l = n[a], u = n[a + 1], o = l[bt] || null;
          if (typeof u == "function")
            o || by(n);
          else if (o) {
            var i = null;
            if (u && u.hasAttribute("formAction")) {
              if (l = u, o = u[bt] || null)
                i = o.formAction;
              else if (hf(l) !== null) continue;
            } else i = o.action;
            typeof i == "function" ? n[a + 1] = i : (n.splice(a, 3), a -= 3), by(n);
          }
        }
    }
    function mf(e) {
      this._internalRoot = e;
    }
    function vc(e) {
      this._internalRoot = e;
    }
    function Sy(e) {
      e[vl] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ue = BT(), pf = t0, Xb = CT, Qb = Symbol.for("react.element"), Oa = Symbol.for("react.transitional.element"), fu = Symbol.for("react.portal"), du = Symbol.for("react.fragment"), bc = Symbol.for("react.strict_mode"), yf = Symbol.for("react.profiler"), Zb = Symbol.for("react.provider"), gf = Symbol.for("react.consumer"), zn = Symbol.for("react.context"), Mo = Symbol.for("react.forward_ref"), vf = Symbol.for("react.suspense"), bf = Symbol.for("react.suspense_list"), Sc = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ty = Symbol.for("react.offscreen"), kb = Symbol.for("react.memo_cache_sentinel"), Ey = Symbol.iterator, Jb = Symbol.for("react.client.reference"), g = pf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.assign, Uo = 0, Ry, Ay, Cy, Dy, zy, Oy, xy;
    pn.__reactDisabledLog = !0;
    var Sf, My, Tf = !1, Ef = new (typeof WeakMap == "function" ? WeakMap : Map)(), et = null, Zt = !1, Ke = Array.isArray, pe = Xb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _b = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Rf = [], Af = [], Fn = -1, xa = I(null), Ho = I(null), Ma = I(null), Tc = I(null), In = Object.prototype.hasOwnProperty, Cf = Ue.unstable_scheduleCallback, Kb = Ue.unstable_cancelCallback, $b = Ue.unstable_shouldYield, Wb = Ue.unstable_requestPaint, On = Ue.unstable_now, Fb = Ue.unstable_getCurrentPriorityLevel, Df = Ue.unstable_ImmediatePriority, zf = Ue.unstable_UserBlockingPriority, hu = Ue.unstable_NormalPriority, Ib = Ue.unstable_LowPriority, Of = Ue.unstable_IdlePriority, Pb = Ue.log, eS = Ue.unstable_setDisableYieldValue, mu = null, tt = null, A = null, xn = !1, sn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", ot = Math.clz32 ? Math.clz32 : Le, tS = Math.log, nS = Math.LN2, Ec = 128, Rc = 4194304, Mn = 2, Un = 8, Pn = 32, Ac = 268435456, Ua = Math.random().toString(36).slice(2), nt = "__reactFiber$" + Ua, bt = "__reactProps$" + Ua, vl = "__reactContainer$" + Ua, xf = "__reactEvents$" + Ua, aS = "__reactListeners$" + Ua, lS = "__reactHandles$" + Ua, Uy = "__reactResources$" + Ua, wo = "__reactMarker$" + Ua, Hy = /* @__PURE__ */ new Set(), bl = {}, Mf = {}, Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uS = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, oS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), wy = {}, By = {}, iS = /[\n"\\]/g, qy = !1, jy = !1, Yy = !1, Vy = !1, Ly = !1, Ny = !1, Gy = ["value", "defaultValue"], Xy = !1, Qy = /["'&<>\n\t]|^\s|\s$/, cS = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Zy = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), sS = Zy.concat(["button"]), rS = "dd dt li option optgroup p rp rt".split(" "), ky = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null
    }, Cc = {}, Dc = "http://www.w3.org/1998/Math/MathML", pu = "http://www.w3.org/2000/svg", Uf = {
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
    }, Jy = /([A-Z])/g, _y = /^ms-/, fS = /^(?:webkit|moz|o)[A-Z]/, dS = /^-ms-/, hS = /-(.)/g, Ky = /;\s*$/, yu = {}, Hf = {}, $y = !1, Wy = !1, Fy = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), mS = /* @__PURE__ */ new Map([
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
    ]), zc = {
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
    }, Iy = {
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
    }, gu = {}, pS = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), yS = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Py = !1, it = {}, eg = /^on./, gS = /^on[^A-Z]/, vS = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), bS = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), SS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Bo = null, vu = null, bu = null, wf = !1, Bf = !1;
    if (Hn)
      try {
        var qo = {};
        Object.defineProperty(qo, "passive", {
          get: function() {
            Bf = !0;
          }
        }), window.addEventListener("test", qo, qo), window.removeEventListener("test", qo, qo);
      } catch {
        Bf = !1;
      }
    var Ha = null, qf = null, Oc = null, Sl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, xc = yt(Sl), jo = Q({}, Sl, { view: 0, detail: 0 }), TS = yt(jo), jf, Yf, Yo, Mc = Q({}, jo, {
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
      getModifierState: Ds,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Yo && (Yo && e.type === "mousemove" ? (jf = e.screenX - Yo.screenX, Yf = e.screenY - Yo.screenY) : Yf = jf = 0, Yo = e), jf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Yf;
      }
    }), tg = yt(Mc), ES = Q({}, Mc, { dataTransfer: 0 }), RS = yt(ES), AS = Q({}, jo, { relatedTarget: 0 }), Vf = yt(AS), CS = Q({}, Sl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), DS = yt(CS), zS = Q({}, Sl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), OS = yt(zS), xS = Q({}, Sl, { data: 0 }), ng = yt(
      xS
    ), MS = ng, US = {
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
    }, HS = {
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
    }, wS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, BS = Q({}, jo, {
      key: function(e) {
        if (e.key) {
          var t = US[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? HS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ds,
      charCode: function(e) {
        return e.type === "keypress" ? zi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qS = yt(BS), jS = Q({}, Mc, {
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
    }), ag = yt(jS), YS = Q({}, jo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ds
    }), VS = yt(YS), LS = Q({}, Sl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), NS = yt(LS), GS = Q({}, Mc, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), XS = yt(GS), QS = Q({}, Sl, {
      newState: 0,
      oldState: 0
    }), ZS = yt(QS), kS = [9, 13, 27, 32], lg = 229, Lf = Hn && "CompositionEvent" in window, Vo = null;
    Hn && "documentMode" in document && (Vo = document.documentMode);
    var JS = Hn && "TextEvent" in window && !Vo, ug = Hn && (!Lf || Vo && 8 < Vo && 11 >= Vo), og = 32, ig = String.fromCharCode(og), cg = !1, Su = !1, _S = {
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
    }, Lo = null, No = null, sg = !1;
    Hn && (sg = S0("input") && (!document.documentMode || 9 < document.documentMode));
    var ct = typeof Object.is == "function" ? Object.is : D0, KS = Hn && "documentMode" in document && 11 >= document.documentMode, Tu = null, Nf = null, Go = null, Gf = !1, Eu = {
      animationend: nl("Animation", "AnimationEnd"),
      animationiteration: nl("Animation", "AnimationIteration"),
      animationstart: nl("Animation", "AnimationStart"),
      transitionrun: nl("Transition", "TransitionRun"),
      transitionstart: nl("Transition", "TransitionStart"),
      transitioncancel: nl("Transition", "TransitionCancel"),
      transitionend: nl("Transition", "TransitionEnd")
    }, Xf = {}, rg = {};
    Hn && (rg = document.createElement("div").style, "AnimationEvent" in window || (delete Eu.animationend.animation, delete Eu.animationiteration.animation, delete Eu.animationstart.animation), "TransitionEvent" in window || delete Eu.transitionend.transition);
    var fg = al("animationend"), dg = al("animationiteration"), hg = al("animationstart"), $S = al("transitionrun"), WS = al("transitionstart"), FS = al("transitioncancel"), mg = al("transitionend"), pg = /* @__PURE__ */ new Map(), yg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    ), Uc = 1, Xo = 2, Tl = 4, kt = [], Ru = 0, Qf = 0, wa = {};
    Object.freeze(wa);
    var Jt = null, Au = null, he = 0, IS = 1, $e = 2, at = 8, rn = 16, gg = 64, Cu = Ue.unstable_now, Zf = -0, Hc = -0, St = -1.1, El = -0, wc = !1, Bc = !1, fn = {
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
    }, Qo = [], Zo = [], ko = [], Jo = [], _o = [], Ko = [], Rl = /* @__PURE__ */ new Set();
    fn.recordUnsafeLifecycleWarnings = function(e, t) {
      Rl.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Qo.push(e), e.mode & at && typeof t.UNSAFE_componentWillMount == "function" && Zo.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ko.push(e), e.mode & at && typeof t.UNSAFE_componentWillReceiveProps == "function" && Jo.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _o.push(e), e.mode & at && typeof t.UNSAFE_componentWillUpdate == "function" && Ko.push(e));
    }, fn.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Qo.length && (Qo.forEach(function(i) {
        e.add(
          H(i) || "Component"
        ), Rl.add(i.type);
      }), Qo = []);
      var t = /* @__PURE__ */ new Set();
      0 < Zo.length && (Zo.forEach(function(i) {
        t.add(
          H(i) || "Component"
        ), Rl.add(i.type);
      }), Zo = []);
      var n = /* @__PURE__ */ new Set();
      0 < ko.length && (ko.forEach(function(i) {
        n.add(
          H(i) || "Component"
        ), Rl.add(i.type);
      }), ko = []);
      var a = /* @__PURE__ */ new Set();
      0 < Jo.length && (Jo.forEach(
        function(i) {
          a.add(
            H(i) || "Component"
          ), Rl.add(i.type);
        }
      ), Jo = []);
      var l = /* @__PURE__ */ new Set();
      0 < _o.length && (_o.forEach(function(i) {
        l.add(
          H(i) || "Component"
        ), Rl.add(i.type);
      }), _o = []);
      var u = /* @__PURE__ */ new Set();
      if (0 < Ko.length && (Ko.forEach(function(i) {
        u.add(
          H(i) || "Component"
        ), Rl.add(i.type);
      }), Ko = []), 0 < t.size) {
        var o = ht(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          o
        );
      }
      0 < a.size && (o = ht(
        a
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        o
      )), 0 < u.size && (o = ht(
        u
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        o
      )), 0 < e.size && (o = ht(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        o
      )), 0 < n.size && (o = ht(
        n
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        o
      )), 0 < l.size && (o = ht(l), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        o
      ));
    };
    var qc = /* @__PURE__ */ new Map(), vg = /* @__PURE__ */ new Set();
    fn.recordLegacyContextWarning = function(e, t) {
      for (var n = null, a = e; a !== null; )
        a.mode & at && (n = a), a = a.return;
      n === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !vg.has(e.type) && (a = qc.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], qc.set(n, a)), a.push(e));
    }, fn.flushLegacyContextWarning = function() {
      qc.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], n = /* @__PURE__ */ new Set();
          e.forEach(function(l) {
            n.add(H(l) || "Component"), vg.add(l.type);
          });
          var a = ht(n);
          U(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              a
            );
          });
        }
      });
    }, fn.discardPendingWarnings = function() {
      Qo = [], Zo = [], ko = [], Jo = [], _o = [], Ko = [], qc = /* @__PURE__ */ new Map();
    };
    var kf = /* @__PURE__ */ new WeakMap(), Du = [], zu = 0, jc = null, Yc = 0, _t = [], Kt = 0, Al = null, ea = 1, ta = "", st = null, We = null, F = !1, na = !1, $t = null, dn = null, wn = !1, Jf = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Vc = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
    ), bg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), _f = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, $o = null, Lc = !1, Sg = {
      "react-stack-bottom-frame": function(e, t, n) {
        var a = Zt;
        Zt = !0;
        try {
          return e(t, n);
        } finally {
          Zt = a;
        }
      }
    }, Kf = Sg["react-stack-bottom-frame"].bind(Sg), Tg = {
      "react-stack-bottom-frame": function(e) {
        var t = Zt;
        Zt = !0;
        try {
          return e.render();
        } finally {
          Zt = t;
        }
      }
    }, Eg = Tg["react-stack-bottom-frame"].bind(Tg), Rg = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (n) {
          ie(e, e.return, n);
        }
      }
    }, $f = Rg["react-stack-bottom-frame"].bind(Rg), Ag = {
      "react-stack-bottom-frame": function(e, t, n, a, l) {
        try {
          t.componentDidUpdate(n, a, l);
        } catch (u) {
          ie(e, e.return, u);
        }
      }
    }, Cg = Ag["react-stack-bottom-frame"].bind(Ag), Dg = {
      "react-stack-bottom-frame": function(e, t) {
        var n = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: n !== null ? n : ""
        });
      }
    }, PS = Dg["react-stack-bottom-frame"].bind(Dg), zg = {
      "react-stack-bottom-frame": function(e, t, n) {
        try {
          n.componentWillUnmount();
        } catch (a) {
          ie(e, t, a);
        }
      }
    }, Og = zg["react-stack-bottom-frame"].bind(zg), xg = {
      "react-stack-bottom-frame": function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, eT = xg["react-stack-bottom-frame"].bind(xg), Mg = {
      "react-stack-bottom-frame": function(e, t, n) {
        try {
          n();
        } catch (a) {
          ie(e, t, a);
        }
      }
    }, tT = Mg["react-stack-bottom-frame"].bind(Mg), Ug = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Ba = Ug["react-stack-bottom-frame"].bind(Ug), Ou = null, Wo = 0, X = null, Wf, Hg = Wf = !1, wg = {}, Bg = {}, qg = {};
    Nn = function(e, t, n) {
      if (n !== null && typeof n == "object" && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
        if (typeof n._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        n._store.validated = 1;
        var a = H(e), l = a || "null";
        if (!wg[l]) {
          wg[l] = !0, n = n._owner, e = e._debugOwner;
          var u = "";
          e && typeof e.tag == "number" && (l = H(e)) && (u = `

Check the render method of \`` + l + "`."), u || a && (u = `

Check the top-level render call using <` + a + ">.");
          var o = "";
          n != null && e !== n && (a = null, typeof n.tag == "number" ? a = H(n) : typeof n.name == "string" && (a = n.name), a && (o = " It was passed a child from " + a + ".")), U(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              u,
              o
            );
          });
        }
      }
    };
    var Cl = Xh(!0), jg = Xh(!1), xu = I(null), Nc = I(0), Wt = I(null), Bn = null, Mu = 1, Fo = 2, Be = I(0), Ft = 0, It = 1, rt = 2, Fe = 4, qe = 8, nT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(n, a) {
          e.push(a);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(n) {
          return n();
        });
      };
    }, aT = Ue.unstable_scheduleCallback, lT = Ue.unstable_NormalPriority, je = {
      $$typeof: zn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Io = null, Ff = 0, Dl = 0, Uu = null, Yg = g.S;
    g.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && O0(e, t), Yg !== null && Yg(e, t);
    };
    var zl = I(null), Hu, Vg = /* @__PURE__ */ new Set(), Lg = /* @__PURE__ */ new Set(), If = /* @__PURE__ */ new Set(), Ng = /* @__PURE__ */ new Set(), qa = 0, q = null, se = null, He = null, Gc = !1, wu = !1, Ol = !1, Xc = 0, Po = 0, aa = null, uT = 0, oT = 25, y = null, Pt = null, la = -1, ei = !1, Pf = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }, qn = {
      readContext: ve,
      use: Ta,
      useCallback: De,
      useContext: De,
      useEffect: De,
      useImperativeHandle: De,
      useLayoutEffect: De,
      useInsertionEffect: De,
      useMemo: De,
      useReducer: De,
      useRef: De,
      useState: De,
      useDebugValue: De,
      useDeferredValue: De,
      useTransition: De,
      useSyncExternalStore: De,
      useId: De
    };
    qn.useCacheRefresh = De, qn.useMemoCache = De, qn.useHostTransitionStatus = De, qn.useFormState = De, qn.useActionState = De, qn.useOptimistic = De;
    var ja = null, xl = null, Ya = null, Ml = null, Tt = null, ft = null, Va = null;
    ja = {
      readContext: function(e) {
        return ve(e);
      },
      use: Ta,
      useCallback: function(e, t) {
        return y = "useCallback", k(), Fl(t), nr(e, t);
      },
      useContext: function(e) {
        return y = "useContext", k(), ve(e);
      },
      useEffect: function(e, t) {
        return y = "useEffect", k(), Fl(t), _i(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", k(), Fl(n), tr(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        y = "useInsertionEffect", k(), Fl(t), fl(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", k(), Fl(t), er(e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", k(), Fl(t);
        var n = g.H;
        g.H = Tt;
        try {
          return ar(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", k();
        var a = g.H;
        g.H = Tt;
        try {
          return Js(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function(e) {
        return y = "useRef", k(), Ps(e);
      },
      useState: function(e) {
        y = "useState", k();
        var t = g.H;
        g.H = Tt;
        try {
          return Ws(e);
        } finally {
          g.H = t;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", k(), lr(e, t);
      },
      useTransition: function() {
        return y = "useTransition", k(), ir();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", k(), Ks(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", k(), cr();
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", k(), sr();
      }
    }, ja.useMemoCache = rl, ja.useHostTransitionStatus = dl, ja.useFormState = function(e, t) {
      return y = "useFormState", k(), Qi(), Pl(e, t);
    }, ja.useActionState = function(e, t) {
      return y = "useActionState", k(), Pl(e, t);
    }, ja.useOptimistic = function(e) {
      return y = "useOptimistic", k(), Fs(e);
    }, xl = {
      readContext: function(e) {
        return ve(e);
      },
      use: Ta,
      useCallback: function(e, t) {
        return y = "useCallback", T(), nr(e, t);
      },
      useContext: function(e) {
        return y = "useContext", T(), ve(e);
      },
      useEffect: function(e, t) {
        return y = "useEffect", T(), _i(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", T(), tr(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        y = "useInsertionEffect", T(), fl(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", T(), er(e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", T();
        var n = g.H;
        g.H = Tt;
        try {
          return ar(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", T();
        var a = g.H;
        g.H = Tt;
        try {
          return Js(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function(e) {
        return y = "useRef", T(), Ps(e);
      },
      useState: function(e) {
        y = "useState", T();
        var t = g.H;
        g.H = Tt;
        try {
          return Ws(e);
        } finally {
          g.H = t;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", T();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", T(), lr(e, t);
      },
      useTransition: function() {
        return y = "useTransition", T(), ir();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", T(), Ks(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", T(), cr();
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", T(), sr();
      }
    }, xl.useMemoCache = rl, xl.useHostTransitionStatus = dl, xl.useFormState = function(e, t) {
      return y = "useFormState", T(), Qi(), Pl(e, t);
    }, xl.useActionState = function(e, t) {
      return y = "useActionState", T(), Pl(e, t);
    }, xl.useOptimistic = function(e) {
      return y = "useOptimistic", T(), Fs(e);
    }, Ya = {
      readContext: function(e) {
        return ve(e);
      },
      use: Ta,
      useCallback: function(e, t) {
        return y = "useCallback", T(), $i(e, t);
      },
      useContext: function(e) {
        return y = "useContext", T(), ve(e);
      },
      useEffect: function(e, t) {
        y = "useEffect", T(), vt(2048, qe, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", T(), Ki(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return y = "useInsertionEffect", T(), vt(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", T(), vt(4, Fe, e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", T();
        var n = g.H;
        g.H = ft;
        try {
          return Wi(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", T();
        var a = g.H;
        g.H = ft;
        try {
          return Il(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function() {
        return y = "useRef", T(), oe().memoizedState;
      },
      useState: function() {
        y = "useState", T();
        var e = g.H;
        g.H = ft;
        try {
          return Il(cn);
        } finally {
          g.H = e;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", T();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", T(), sm(e, t);
      },
      useTransition: function() {
        return y = "useTransition", T(), pm();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", T(), Zi(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", T(), oe().memoizedState;
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", T(), oe().memoizedState;
      }
    }, Ya.useMemoCache = rl, Ya.useHostTransitionStatus = dl, Ya.useFormState = function(e) {
      return y = "useFormState", T(), Qi(), ki(e);
    }, Ya.useActionState = function(e) {
      return y = "useActionState", T(), ki(e);
    }, Ya.useOptimistic = function(e, t) {
      return y = "useOptimistic", T(), Ph(e, t);
    }, Ml = {
      readContext: function(e) {
        return ve(e);
      },
      use: Ta,
      useCallback: function(e, t) {
        return y = "useCallback", T(), $i(e, t);
      },
      useContext: function(e) {
        return y = "useContext", T(), ve(e);
      },
      useEffect: function(e, t) {
        y = "useEffect", T(), vt(2048, qe, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", T(), Ki(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return y = "useInsertionEffect", T(), vt(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", T(), vt(4, Fe, e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", T();
        var n = g.H;
        g.H = Va;
        try {
          return Wi(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", T();
        var a = g.H;
        g.H = Va;
        try {
          return fo(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function() {
        return y = "useRef", T(), oe().memoizedState;
      },
      useState: function() {
        y = "useState", T();
        var e = g.H;
        g.H = Va;
        try {
          return fo(cn);
        } finally {
          g.H = e;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", T();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", T(), rm(e, t);
      },
      useTransition: function() {
        return y = "useTransition", T(), ym();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", T(), Zi(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", T(), oe().memoizedState;
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", T(), oe().memoizedState;
      }
    }, Ml.useMemoCache = rl, Ml.useHostTransitionStatus = dl, Ml.useFormState = function(e) {
      return y = "useFormState", T(), Qi(), Ji(e);
    }, Ml.useActionState = function(e) {
      return y = "useActionState", T(), Ji(e);
    }, Ml.useOptimistic = function(e, t) {
      return y = "useOptimistic", T(), tm(e, t);
    }, Tt = {
      readContext: function(e) {
        return Rt(), ve(e);
      },
      use: function(e) {
        return C(), Ta(e);
      },
      useCallback: function(e, t) {
        return y = "useCallback", C(), k(), nr(e, t);
      },
      useContext: function(e) {
        return y = "useContext", C(), k(), ve(e);
      },
      useEffect: function(e, t) {
        return y = "useEffect", C(), k(), _i(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", C(), k(), tr(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        y = "useInsertionEffect", C(), k(), fl(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", C(), k(), er(e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", C(), k();
        var n = g.H;
        g.H = Tt;
        try {
          return ar(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", C(), k();
        var a = g.H;
        g.H = Tt;
        try {
          return Js(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function(e) {
        return y = "useRef", C(), k(), Ps(e);
      },
      useState: function(e) {
        y = "useState", C(), k();
        var t = g.H;
        g.H = Tt;
        try {
          return Ws(e);
        } finally {
          g.H = t;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", C(), k();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", C(), k(), lr(e, t);
      },
      useTransition: function() {
        return y = "useTransition", C(), k(), ir();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", C(), k(), Ks(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", C(), k(), cr();
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", k(), sr();
      },
      useMemoCache: function(e) {
        return C(), rl(e);
      }
    }, Tt.useHostTransitionStatus = dl, Tt.useFormState = function(e, t) {
      return y = "useFormState", C(), k(), Pl(e, t);
    }, Tt.useActionState = function(e, t) {
      return y = "useActionState", C(), k(), Pl(e, t);
    }, Tt.useOptimistic = function(e) {
      return y = "useOptimistic", C(), k(), Fs(e);
    }, ft = {
      readContext: function(e) {
        return Rt(), ve(e);
      },
      use: function(e) {
        return C(), Ta(e);
      },
      useCallback: function(e, t) {
        return y = "useCallback", C(), T(), $i(e, t);
      },
      useContext: function(e) {
        return y = "useContext", C(), T(), ve(e);
      },
      useEffect: function(e, t) {
        y = "useEffect", C(), T(), vt(2048, qe, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", C(), T(), Ki(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return y = "useInsertionEffect", C(), T(), vt(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", C(), T(), vt(4, Fe, e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", C(), T();
        var n = g.H;
        g.H = ft;
        try {
          return Wi(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", C(), T();
        var a = g.H;
        g.H = ft;
        try {
          return Il(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function() {
        return y = "useRef", C(), T(), oe().memoizedState;
      },
      useState: function() {
        y = "useState", C(), T();
        var e = g.H;
        g.H = ft;
        try {
          return Il(cn);
        } finally {
          g.H = e;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", C(), T();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", C(), T(), sm(e, t);
      },
      useTransition: function() {
        return y = "useTransition", C(), T(), pm();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", C(), T(), Zi(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", C(), T(), oe().memoizedState;
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", T(), oe().memoizedState;
      },
      useMemoCache: function(e) {
        return C(), rl(e);
      }
    }, ft.useHostTransitionStatus = dl, ft.useFormState = function(e) {
      return y = "useFormState", C(), T(), ki(e);
    }, ft.useActionState = function(e) {
      return y = "useActionState", C(), T(), ki(e);
    }, ft.useOptimistic = function(e, t) {
      return y = "useOptimistic", C(), T(), Ph(e, t);
    }, Va = {
      readContext: function(e) {
        return Rt(), ve(e);
      },
      use: function(e) {
        return C(), Ta(e);
      },
      useCallback: function(e, t) {
        return y = "useCallback", C(), T(), $i(e, t);
      },
      useContext: function(e) {
        return y = "useContext", C(), T(), ve(e);
      },
      useEffect: function(e, t) {
        y = "useEffect", C(), T(), vt(2048, qe, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return y = "useImperativeHandle", C(), T(), Ki(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return y = "useInsertionEffect", C(), T(), vt(4, rt, e, t);
      },
      useLayoutEffect: function(e, t) {
        return y = "useLayoutEffect", C(), T(), vt(4, Fe, e, t);
      },
      useMemo: function(e, t) {
        y = "useMemo", C(), T();
        var n = g.H;
        g.H = ft;
        try {
          return Wi(e, t);
        } finally {
          g.H = n;
        }
      },
      useReducer: function(e, t, n) {
        y = "useReducer", C(), T();
        var a = g.H;
        g.H = ft;
        try {
          return fo(e, t, n);
        } finally {
          g.H = a;
        }
      },
      useRef: function() {
        return y = "useRef", C(), T(), oe().memoizedState;
      },
      useState: function() {
        y = "useState", C(), T();
        var e = g.H;
        g.H = ft;
        try {
          return fo(cn);
        } finally {
          g.H = e;
        }
      },
      useDebugValue: function() {
        y = "useDebugValue", C(), T();
      },
      useDeferredValue: function(e, t) {
        return y = "useDeferredValue", C(), T(), rm(e, t);
      },
      useTransition: function() {
        return y = "useTransition", C(), T(), ym();
      },
      useSyncExternalStore: function(e, t, n) {
        return y = "useSyncExternalStore", C(), T(), Zi(
          e,
          t,
          n
        );
      },
      useId: function() {
        return y = "useId", C(), T(), oe().memoizedState;
      },
      useCacheRefresh: function() {
        return y = "useCacheRefresh", T(), oe().memoizedState;
      },
      useMemoCache: function(e) {
        return C(), rl(e);
      }
    }, Va.useHostTransitionStatus = dl, Va.useFormState = function(e) {
      return y = "useFormState", C(), T(), Ji(e);
    }, Va.useActionState = function(e) {
      return y = "useActionState", C(), T(), Ji(e);
    }, Va.useOptimistic = function(e, t) {
      return y = "useOptimistic", C(), T(), tm(e, t);
    };
    var Gg = {}, Xg = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), _g = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Fg = /* @__PURE__ */ new Set();
    Object.freeze(Gg);
    var ed = {
      isMounted: function(e) {
        var t = et;
        if (t !== null && Zt && t.tag === 1) {
          var n = t.stateNode;
          n._warnedAboutRefsInRender || console.error(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            H(t) || "A component"
          ), n._warnedAboutRefsInRender = !0;
        }
        return (e = e._reactInternals) ? qt(e) === e : !1;
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var a = zt(e), l = Ra(a);
        l.payload = t, n != null && (fr(n), l.callback = n), t = Aa(e, l, a), t !== null && (Ee(t, e, a), yo(t, e, a)), _(e, a);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var a = zt(e), l = Ra(a);
        l.tag = iv, l.payload = t, n != null && (fr(n), l.callback = n), t = Aa(e, l, a), t !== null && (Ee(t, e, a), yo(t, e, a)), _(e, a);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = zt(e), a = Ra(n);
        a.tag = cv, t != null && (fr(t), a.callback = t), t = Aa(e, a, n), t !== null && (Ee(t, e, n), yo(t, e, n)), A !== null && typeof A.markForceUpdateScheduled == "function" && A.markForceUpdateScheduled(e, n);
      }
    }, Qc = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof qd == "object" && typeof qd.emit == "function") {
        qd.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Bu = null, td = null, Ig = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xe = !1, Pg = {}, ev = {}, tv = {}, nv = {}, qu = !1, av = {}, nd = {}, ad = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    }, lv = !1, ld = I(null), ud = I(null), uv = {}, Zc = null, ju = null, Yu = !1, ov = 0, iv = 1, cv = 2, od = 3, La = !1, sv = !1, id = null, cd = !1, rv = null;
    rv = /* @__PURE__ */ new Set();
    var ua = !1, Re = !1, sd = !1, fv = typeof WeakSet == "function" ? WeakSet : Set, Qe = null, Vu = null, Lu = null, dv = !1, we = null, xt = !1, hn = null, ti = 8192, hv = !1;
    try {
      var mv = Object.preventExtensions({});
    } catch {
      hv = !0;
    }
    var iT = {
      getCacheForType: function(e) {
        var t = ve(je), n = t.data.get(e);
        return n === void 0 && (n = e(), t.data.set(e, n)), n;
      },
      getOwner: function() {
        return et;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var ni = Symbol.for;
      ni("selector.component"), ni("selector.has_pseudo_class"), ni("selector.role"), ni("selector.test_id"), ni("selector.text");
    }
    var cT = [], sT = typeof WeakMap == "function" ? WeakMap : Map, Mt = 0, dt = 2, oa = 4, ia = 0, ai = 1, Nu = 2, rd = 3, Ul = 4, pv = 5, kc = 6, ye = Mt, fe = null, Z = null, J = 0, Et = 0, li = 1, Hl = 2, ui = 3, yv = 4, fd = 5, Gu = 6, oi = 7, dd = 8, de = Et, Ut = null, ca = !1, Xu = !1, hd = !1, jn = 0, Ae = ia, Na = 0, Ga = 0, md = 0, Ht = 0, wl = 0, ii = null, mn = null, Jc = !1, pd = 0, gv = 300, _c = 1 / 0, vv = 500, ci = null, Xa = null, Kc = !1, Bl = null, si = 0, yd = 0, gd = null, rT = 50, ri = 0, vd = null, bd = !1, $c = !1, fT = 50, ql = 0, fi = null, Qu = !1, bv = 0, dT = 1, hT = 2, Wc = null, Sv = !1, Tv = /* @__PURE__ */ new Set(), mT = {}, Fc = null, Zu = null, Sd = !1, Td = !1, Ic = !1, Ed = !1, jl = 0, Rd = {};
    (function() {
      for (var e = 0; e < yg.length; e++) {
        var t = yg[e], n = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), on(n, "on" + t);
      }
      on(fg, "onAnimationEnd"), on(dg, "onAnimationIteration"), on(hg, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on($S, "onTransitionRun"), on(WS, "onTransitionStart"), on(FS, "onTransitionCancel"), on(mg, "onTransitionEnd");
    })(), Jl("onMouseEnter", ["mouseout", "mouseover"]), Jl("onMouseLeave", ["mouseout", "mouseover"]), Jl("onPointerEnter", ["pointerout", "pointerover"]), Jl("onPointerLeave", ["pointerout", "pointerover"]), el(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), el(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), el("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), el(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), el(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), el(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Ad = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di)
    ), Pc = "_reactListening" + Math.random().toString(36).slice(2), Ev = !1, Rv = !1, es = !1, Av = !1, ts = !1, ns = !1, Cv = !1, as = {}, pT = /\r\n?/g, yT = /\u0000|\uFFFD/g, Yl = "http://www.w3.org/1999/xlink", Cd = "http://www.w3.org/XML/1998/namespace", gT = "javascript:throw new Error('React form unexpectedly submitted.')", vT = "suppressHydrationWarning", ls = "$", us = "/$", Vl = "$?", Ll = "$!", Dd = "F!", Dv = "F", bT = "style", sa = 0, ku = 1, os = 2, zd = null, Od = null, zv = { dialog: !0, webview: !0 }, xd = null, Ov = typeof setTimeout == "function" ? setTimeout : void 0, ST = typeof clearTimeout == "function" ? clearTimeout : void 0, Md = -1, xv = typeof Promise == "function" ? Promise : void 0, TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof xv < "u" ? function(e) {
      return xv.resolve(null).then(e).catch(hb);
    } : Ov, Nl = 0, hi = 1, Mv = 2, Uv = 3, en = 4, tn = /* @__PURE__ */ new Map(), Hv = /* @__PURE__ */ new Set(), ra = pe.d;
    pe.d = {
      f: function() {
        var e = ra.f(), t = uu();
        return e || t;
      },
      r: function(e) {
        var t = Pa(e);
        t !== null && t.tag === 5 && t.type === "form" ? mm(t) : ra.r(e);
      },
      D: function(e) {
        ra.D(e), ny("dns-prefetch", e, null);
      },
      C: function(e, t) {
        ra.C(e, t), ny("preconnect", e, t);
      },
      L: function(e, t, n) {
        ra.L(e, t, n);
        var a = Ju;
        if (a && e && t) {
          var l = 'link[rel="preload"][as="' + Lt(t) + '"]';
          t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Lt(
            n.imageSrcSet
          ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Lt(
            n.imageSizes
          ) + '"]')) : l += '[href="' + Lt(e) + '"]';
          var u = l;
          switch (t) {
            case "style":
              u = su(e);
              break;
            case "script":
              u = ru(e);
          }
          tn.has(u) || (e = Q(
            {
              rel: "preload",
              href: t === "image" && n && n.imageSrcSet ? void 0 : e,
              as: t
            },
            n
          ), tn.set(u, e), a.querySelector(l) !== null || t === "style" && a.querySelector(
            Do(u)
          ) || t === "script" && a.querySelector(zo(u)) || (t = a.createElement("link"), _e(t, "link", e), Ne(t), a.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        ra.m(e, t);
        var n = Ju;
        if (n && e) {
          var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Lt(a) + '"][href="' + Lt(e) + '"]', u = l;
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              u = ru(e);
          }
          if (!tn.has(u) && (e = Q({ rel: "modulepreload", href: e }, t), tn.set(u, e), n.querySelector(l) === null)) {
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (n.querySelector(zo(u)))
                  return;
            }
            a = n.createElement("link"), _e(a, "link", e), Ne(a), n.head.appendChild(a);
          }
        }
      },
      X: function(e, t) {
        ra.X(e, t);
        var n = Ju;
        if (n && e) {
          var a = kl(n).hoistableScripts, l = ru(e), u = a.get(l);
          u || (u = n.querySelector(
            zo(l)
          ), u || (e = Q({ src: e, async: !0 }, t), (t = tn.get(l)) && cf(e, t), u = n.createElement("script"), Ne(u), _e(u, "link", e), n.head.appendChild(u)), u = {
            type: "script",
            instance: u,
            count: 1,
            state: null
          }, a.set(l, u));
        }
      },
      S: function(e, t, n) {
        ra.S(e, t, n);
        var a = Ju;
        if (a && e) {
          var l = kl(a).hoistableStyles, u = su(e);
          t = t || "default";
          var o = l.get(u);
          if (!o) {
            var i = { loading: Nl, preload: null };
            if (o = a.querySelector(
              Do(u)
            ))
              i.loading = hi | en;
            else {
              e = Q(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                n
              ), (n = tn.get(u)) && of(e, n);
              var c = o = a.createElement("link");
              Ne(c), _e(c, "link", e), c._p = new Promise(function(s, m) {
                c.onload = s, c.onerror = m;
              }), c.addEventListener("load", function() {
                i.loading |= hi;
              }), c.addEventListener("error", function() {
                i.loading |= Mv;
              }), i.loading |= en, mc(o, t, a);
            }
            o = {
              type: "stylesheet",
              instance: o,
              count: 1,
              state: i
            }, l.set(u, o);
          }
        }
      },
      M: function(e, t) {
        ra.M(e, t);
        var n = Ju;
        if (n && e) {
          var a = kl(n).hoistableScripts, l = ru(e), u = a.get(l);
          u || (u = n.querySelector(
            zo(l)
          ), u || (e = Q({ src: e, async: !0, type: "module" }, t), (t = tn.get(l)) && cf(e, t), u = n.createElement("script"), Ne(u), _e(u, "link", e), n.head.appendChild(u)), u = {
            type: "script",
            instance: u,
            count: 1,
            state: null
          }, a.set(l, u));
        }
      }
    };
    var Ju = typeof document > "u" ? null : document, is = null, mi = null, Ud = null, cs = null, Gl = _b, pi = {
      $$typeof: zn,
      Provider: null,
      Consumer: null,
      _currentValue: Gl,
      _currentValue2: Gl,
      _threadCount: 0
    }, wv = "%c%s%c ", Bv = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", qv = "", ss = " ", jv = Function.prototype.bind, Yv = !1, Vv = null, Lv = null, Nv = null, Gv = null, Xv = null, Qv = null, Zv = null, kv = null, Jv = null;
    Vv = function(e, t, n, a) {
      t = E(e, t), t !== null && (n = P(t.memoizedState, n, 0, a), t.memoizedState = n, t.baseState = n, e.memoizedProps = Q({}, e.memoizedProps), n = Pe(e, 2), n !== null && Ee(n, e, 2));
    }, Lv = function(e, t, n) {
      t = E(e, t), t !== null && (n = lt(t.memoizedState, n, 0), t.memoizedState = n, t.baseState = n, e.memoizedProps = Q({}, e.memoizedProps), n = Pe(e, 2), n !== null && Ee(n, e, 2));
    }, Nv = function(e, t, n, a) {
      t = E(e, t), t !== null && (n = Se(t.memoizedState, n, a), t.memoizedState = n, t.baseState = n, e.memoizedProps = Q({}, e.memoizedProps), n = Pe(e, 2), n !== null && Ee(n, e, 2));
    }, Gv = function(e, t, n) {
      e.pendingProps = P(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pe(e, 2), t !== null && Ee(t, e, 2);
    }, Xv = function(e, t) {
      e.pendingProps = lt(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pe(e, 2), t !== null && Ee(t, e, 2);
    }, Qv = function(e, t, n) {
      e.pendingProps = Se(
        e.memoizedProps,
        t,
        n
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pe(e, 2), t !== null && Ee(t, e, 2);
    }, Zv = function(e) {
      var t = Pe(e, 2);
      t !== null && Ee(t, e, 2);
    }, kv = function(e) {
      Ie = e;
    }, Jv = function(e) {
      wt = e;
    };
    var rs = !0, fs = null, Hd = !1, Qa = null, Za = null, ka = null, yi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Ja = [], ET = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), ds = null;
    if (vc.prototype.render = mf.prototype.render = function(e, t) {
      var n = this._internalRoot;
      if (n === null) throw Error("Cannot update an unmounted root.");
      typeof t == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Me(t) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof t < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), t = n.current;
      var a = zt(t);
      dy(
        t,
        a,
        e,
        n,
        null,
        null
      );
    }, vc.prototype.unmount = mf.prototype.unmount = function(e) {
      if (typeof e == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (ye & (dt | oa)) !== Mt && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), fy(
          null,
          e,
          null,
          null
        ), uu(), t[vl] = null;
      }
    }, vc.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = kd();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ja.length && t !== 0 && t < Ja[n].priority; n++) ;
        Ja.splice(n, 0, e), n === 0 && gy(e);
      }
    }, function() {
      var e = pf.version;
      if (e !== "19.0.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), pe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = L(t), e = e !== null ? ee(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: g,
        findFiberByHostInstance: Ia,
        reconcilerVersion: "19.0.0"
      };
      return e.overrideHookState = Vv, e.overrideHookStateDeletePath = Lv, e.overrideHookStateRenamePath = Nv, e.overrideProps = Gv, e.overridePropsDeletePath = Xv, e.overridePropsRenamePath = Qv, e.scheduleUpdate = Zv, e.setErrorHandler = kv, e.setSuspenseHandler = Jv, e.scheduleRefresh = K, e.scheduleRoot = _a, e.setRefreshHandler = Ye, e.getCurrentFiber = jb, e.getLaneLabelMap = Yb, e.injectProfilingHooks = Si, Ku(e);
    }() && Hn && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var _v = window.location.protocol;
      /^(https?|file):$/.test(_v) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (_v === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    bi.createRoot = function(e, t) {
      if (!Me(e))
        throw Error("Target container is not a DOM element.");
      Sy(e);
      var n = !1, a = "", l = Em, u = Rm, o = Am, i = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Oa && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks)), t = sy(
        e,
        1,
        !1,
        null,
        null,
        n,
        a,
        l,
        u,
        o,
        i,
        null
      ), e[vl] = t.current, Fr(
        e.nodeType === 8 ? e.parentNode : e
      ), new mf(t);
    }, bi.hydrateRoot = function(e, t, n) {
      if (!Me(e))
        throw Error("Target container is not a DOM element.");
      Sy(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var a = !1, l = "", u = Em, o = Rm, i = Am, c = null, s = null;
      return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (i = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (c = n.unstable_transitionCallbacks), n.formState !== void 0 && (s = n.formState)), t = sy(
        e,
        1,
        !0,
        t,
        n ?? null,
        a,
        l,
        u,
        o,
        i,
        c,
        s
      ), t.context = ry(null), n = t.current, a = zt(n), l = Ra(a), l.callback = null, Aa(n, l, a), t.current.lanes = a, Sn(t, a), Cn(t), e[vl] = t.current, Fr(e), new vc(t);
    }, bi.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), bi;
}
var e0;
function jT() {
  return e0 || (e0 = 1, Bd.exports = qT()), Bd.exports;
}
var YT = jT();
const VT = /* @__PURE__ */ DT(YT), LT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", NT = ({ onQuestionClick: E }) => {
  const P = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ $.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ $.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ $.jsx("ul", { children: P.map((Se, Te) => /* @__PURE__ */ $.jsx("li", { onClick: () => E(Se), children: Se }, Te)) })
  ] });
}, GT = ({ message: E }) => /* @__PURE__ */ $.jsx("div", { className: `message ${E.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ $.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ $.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: E.text } }) }) }), o0 = () => {
  const [E, P] = hs([]), [Se, Te] = hs(""), [lt, wt] = hs(!1), [Ie, Ce] = hs(!0), C = AT(null);
  Kv(() => {
    Rt();
  }, []);
  const Rt = async () => {
    try {
      const K = await getChatHistory();
      if (K.STATUS) {
        const Ye = K.RSP.map((Me) => ({
          id: Me.id,
          text: Me.message,
          isUser: Me.role === "user",
          status: "sent",
          timestamp: new Date(Me.created_at)
        }));
        P(Ye);
      }
    } catch (K) {
      console.error("Error cargando historial:", K);
    } finally {
      Ce(!1);
    }
  }, Ln = () => {
    if (C.current) {
      const { scrollHeight: K } = C.current;
      C.current.scrollTo({
        top: K,
        behavior: "smooth"
      });
    }
  };
  Kv(() => {
    Ln();
  }, [E, lt]);
  const Nn = async (K = Se) => {
    if (K.trim() === "") return;
    const Ye = {
      id: Date.now().toString(),
      text: K,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    P((Me) => [...Me, Ye]), Te(""), wt(!0);
    try {
      const Me = await sendMessageApi({ message: K });
      if (Me.STATUS) {
        const ue = {
          id: (Date.now() + 1).toString(),
          text: Me.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        P((B) => [...B, ue]);
      } else {
        Te(K);
        const ue = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        P((B) => [...B, ue]);
      }
    } catch {
      P(
        (ue) => ue.map(
          (B) => B.id === Ye.id ? { ...B, status: "error" } : B
        )
      );
    } finally {
      wt(!1);
    }
  }, ht = (K) => {
    K.preventDefault(), Nn();
  }, _a = (K) => {
    Nn(K);
  };
  return /* @__PURE__ */ $.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ $.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ $.jsx("div", { children: /* @__PURE__ */ $.jsx("img", { src: LT, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ $.jsx("div", { children: /* @__PURE__ */ $.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ $.jsx("div", { ref: C, className: "messages-container", children: Ie ? /* @__PURE__ */ $.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ $.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ $.jsx("div", { className: "dot" }),
        /* @__PURE__ */ $.jsx("div", { className: "dot" }),
        /* @__PURE__ */ $.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ $.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ $.jsxs($.Fragment, { children: [
      E.length === 0 && /* @__PURE__ */ $.jsx(NT, { onQuestionClick: _a }),
      E.map((K) => /* @__PURE__ */ $.jsx(GT, { message: K }, K.id)),
      lt && /* @__PURE__ */ $.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ $.jsx("span", {}),
        /* @__PURE__ */ $.jsx("span", {}),
        /* @__PURE__ */ $.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ $.jsxs("form", { onSubmit: ht, className: "message-input", children: [
      /* @__PURE__ */ $.jsx(
        "input",
        {
          type: "text",
          value: Se,
          onChange: (K) => Te(K.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: lt || Ie,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ $.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: lt || Ie || Se.trim() === "",
          children: /* @__PURE__ */ $.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
};
window.ChatBot = (E) => {
  const P = document.getElementById(E);
  P && VT.createRoot(P).render(/* @__PURE__ */ $.jsx(o0, {}));
};
function ZT() {
  return /* @__PURE__ */ $.jsx("div", { children: /* @__PURE__ */ $.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ $.jsx(o0, {}) }) });
}
export {
  ZT as default
};
