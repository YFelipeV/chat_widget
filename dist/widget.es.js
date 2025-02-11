import dg, { useState as Gv, useRef as gS, useEffect as ub } from "react";
import yb from "react-dom";
function bS(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var Xv = { exports: {} }, Wy = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function SS() {
  if (ib) return Wy;
  ib = 1;
  var X = Symbol.for("react.transitional.element"), Le = Symbol.for("react.fragment");
  function Ue(H, xe, it) {
    var Ge = null;
    if (it !== void 0 && (Ge = "" + it), xe.key !== void 0 && (Ge = "" + xe.key), "key" in xe) {
      it = {};
      for (var Ze in xe)
        Ze !== "key" && (it[Ze] = xe[Ze]);
    } else it = xe;
    return xe = it.ref, {
      $$typeof: X,
      type: H,
      key: Ge,
      ref: xe !== void 0 ? xe : null,
      props: it
    };
  }
  return Wy.Fragment = Le, Wy.jsx = Ue, Wy.jsxs = Ue, Wy;
}
var Fy = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cb;
function TS() {
  return cb || (cb = 1, process.env.NODE_ENV !== "production" && function() {
    function X(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === Z ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case It:
          return "Fragment";
        case Ol:
          return "Portal";
        case dl:
          return "Profiler";
        case Tn:
          return "StrictMode";
        case Ll:
          return "Suspense";
        case hl:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case Ee:
            return (T.displayName || "Context") + ".Provider";
          case ne:
            return (T._context.displayName || "Context") + ".Consumer";
          case Pt:
            var F = T.render;
            return T = T.displayName, T || (T = F.displayName || F.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case k:
            return F = T.displayName || null, F !== null ? F : X(T.type) || "Memo";
          case el:
            F = T._payload, T = T._init;
            try {
              return X(T(F));
            } catch {
            }
        }
      return null;
    }
    function Le(T) {
      return "" + T;
    }
    function Ue(T) {
      try {
        Le(T);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var I = F.error, re = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return I.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          re
        ), Le(T);
      }
    }
    function H() {
    }
    function xe() {
      if (oe === 0) {
        ot = console.log, Ya = console.info, $a = console.warn, Ml = console.error, mt = console.group, Ke = console.groupCollapsed, ml = console.groupEnd;
        var T = {
          configurable: !0,
          enumerable: !0,
          value: H,
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
      oe++;
    }
    function it() {
      if (oe--, oe === 0) {
        var T = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ze({}, T, { value: ot }),
          info: ze({}, T, { value: Ya }),
          warn: ze({}, T, { value: $a }),
          error: ze({}, T, { value: Ml }),
          group: ze({}, T, { value: mt }),
          groupCollapsed: ze({}, T, { value: Ke }),
          groupEnd: ze({}, T, { value: ml })
        });
      }
      0 > oe && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Ge(T) {
      if (qe === void 0)
        try {
          throw Error();
        } catch (I) {
          var F = I.stack.trim().match(/\n( *(at )?)/);
          qe = F && F[1] || "", ra = -1 < I.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < I.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + qe + T + ra;
    }
    function Ze(T, F) {
      if (!T || Wa) return "";
      var I = ei.get(T);
      if (I !== void 0) return I;
      Wa = !0, I = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var re = null;
      re = ue.H, ue.H = null, xe();
      try {
        var tl = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var Ul = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ul.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ul, []);
                  } catch (Fa) {
                    var Ot = Fa;
                  }
                  Reflect.construct(T, [], Ul);
                } else {
                  try {
                    Ul.call();
                  } catch (Fa) {
                    Ot = Fa;
                  }
                  T.call(Ul.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Fa) {
                  Ot = Fa;
                }
                (Ul = T()) && typeof Ul.catch == "function" && Ul.catch(function() {
                });
              }
            } catch (Fa) {
              if (Fa && Ot && typeof Fa.stack == "string")
                return [Fa.stack, Ot.stack];
            }
            return [null, null];
          }
        };
        tl.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var lt = Object.getOwnPropertyDescriptor(
          tl.DetermineComponentFrameRoot,
          "name"
        );
        lt && lt.configurable && Object.defineProperty(
          tl.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var fe = tl.DetermineComponentFrameRoot(), yl = fe[0], Na = fe[1];
        if (yl && Na) {
          var ll = yl.split(`
`), An = Na.split(`
`);
          for (fe = lt = 0; lt < ll.length && !ll[lt].includes(
            "DetermineComponentFrameRoot"
          ); )
            lt++;
          for (; fe < An.length && !An[fe].includes(
            "DetermineComponentFrameRoot"
          ); )
            fe++;
          if (lt === ll.length || fe === An.length)
            for (lt = ll.length - 1, fe = An.length - 1; 1 <= lt && 0 <= fe && ll[lt] !== An[fe]; )
              fe--;
          for (; 1 <= lt && 0 <= fe; lt--, fe--)
            if (ll[lt] !== An[fe]) {
              if (lt !== 1 || fe !== 1)
                do
                  if (lt--, fe--, 0 > fe || ll[lt] !== An[fe]) {
                    var li = `
` + ll[lt].replace(
                      " at new ",
                      " at "
                    );
                    return T.displayName && li.includes("<anonymous>") && (li = li.replace("<anonymous>", T.displayName)), typeof T == "function" && ei.set(T, li), li;
                  }
                while (1 <= lt && 0 <= fe);
              break;
            }
        }
      } finally {
        Wa = !1, ue.H = re, it(), Error.prepareStackTrace = I;
      }
      return ll = (ll = T ? T.displayName || T.name : "") ? Ge(ll) : "", typeof T == "function" && ei.set(T, ll), ll;
    }
    function L(T) {
      if (T == null) return "";
      if (typeof T == "function") {
        var F = T.prototype;
        return Ze(
          T,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof T == "string") return Ge(T);
      switch (T) {
        case Ll:
          return Ge("Suspense");
        case hl:
          return Ge("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Pt:
            return T = Ze(T.render, !1), T;
          case k:
            return L(T.type);
          case el:
            F = T._payload, T = T._init;
            try {
              return L(T(F));
            } catch {
            }
        }
      return "";
    }
    function St() {
      var T = ue.A;
      return T === null ? null : T.getOwner();
    }
    function sa(T) {
      if (ie.call(T, "key")) {
        var F = Object.getOwnPropertyDescriptor(T, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function Dt(T, F) {
      function I() {
        Je || (Je = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: I,
        configurable: !0
      });
    }
    function Xe() {
      var T = X(this.type);
      return $i[T] || ($i[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function Yt(T, F, I, re, tl, lt) {
      return I = lt.ref, T = {
        $$typeof: le,
        type: T,
        key: F,
        props: lt,
        _owner: tl
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: Xe
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
    function se(T, F, I, re, tl, lt) {
      if (typeof T == "string" || typeof T == "function" || T === It || T === dl || T === Tn || T === Ll || T === hl || T === x || typeof T == "object" && T !== null && (T.$$typeof === el || T.$$typeof === k || T.$$typeof === Ee || T.$$typeof === ne || T.$$typeof === Pt || T.$$typeof === Ae || T.getModuleId !== void 0)) {
        var fe = F.children;
        if (fe !== void 0)
          if (re)
            if (Tt(fe)) {
              for (re = 0; re < fe.length; re++)
                tt(fe[re], T);
              Object.freeze && Object.freeze(fe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else tt(fe, T);
      } else
        fe = "", (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), T === null ? re = "null" : Tt(T) ? re = "array" : T !== void 0 && T.$$typeof === le ? (re = "<" + (X(T.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : re = typeof T, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          re,
          fe
        );
      if (ie.call(F, "key")) {
        fe = X(T);
        var yl = Object.keys(F).filter(function(ll) {
          return ll !== "key";
        });
        re = 0 < yl.length ? "{key: someKey, " + yl.join(": ..., ") + ": ...}" : "{key: someKey}", Wi[fe + re] || (yl = 0 < yl.length ? "{" + yl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          re,
          fe,
          yl,
          fe
        ), Wi[fe + re] = !0);
      }
      if (fe = null, I !== void 0 && (Ue(I), fe = "" + I), sa(F) && (Ue(F.key), fe = "" + F.key), "key" in F) {
        I = {};
        for (var Na in F)
          Na !== "key" && (I[Na] = F[Na]);
      } else I = F;
      return fe && Dt(
        I,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), Yt(T, fe, lt, tl, St(), I);
    }
    function tt(T, F) {
      if (typeof T == "object" && T && T.$$typeof !== ti) {
        if (Tt(T))
          for (var I = 0; I < T.length; I++) {
            var re = T[I];
            ct(re) && Be(re, F);
          }
        else if (ct(T))
          T._store && (T._store.validated = 1);
        else if (T === null || typeof T != "object" ? I = null : (I = _ && T[_] || T["@@iterator"], I = typeof I == "function" ? I : null), typeof I == "function" && I !== T.entries && (I = I.call(T), I !== T))
          for (; !(T = I.next()).done; )
            ct(T.value) && Be(T.value, F);
      }
    }
    function ct(T) {
      return typeof T == "object" && T !== null && T.$$typeof === le;
    }
    function Be(T, F) {
      if (T._store && !T._store.validated && T.key == null && (T._store.validated = 1, F = ae(F), !En[F])) {
        En[F] = !0;
        var I = "";
        T && T._owner != null && T._owner !== St() && (I = null, typeof T._owner.tag == "number" ? I = X(T._owner.type) : typeof T._owner.name == "string" && (I = T._owner.name), I = " It was passed a child from " + I + ".");
        var re = ue.getCurrentStack;
        ue.getCurrentStack = function() {
          var tl = L(T.type);
          return re && (tl += re() || ""), tl;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          I
        ), ue.getCurrentStack = re;
      }
    }
    function ae(T) {
      var F = "", I = St();
      return I && (I = X(I.type)) && (F = `

Check the render method of \`` + I + "`."), F || (T = X(T)) && (F = `

Check the top-level render call using <` + T + ">."), F;
    }
    var Ql = dg, le = Symbol.for("react.transitional.element"), Ol = Symbol.for("react.portal"), It = Symbol.for("react.fragment"), Tn = Symbol.for("react.strict_mode"), dl = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), Ee = Symbol.for("react.context"), Pt = Symbol.for("react.forward_ref"), Ll = Symbol.for("react.suspense"), hl = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), el = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), _ = Symbol.iterator, Z = Symbol.for("react.client.reference"), ue = Ql.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, ze = Object.assign, Ae = Symbol.for("react.client.reference"), Tt = Array.isArray, oe = 0, ot, Ya, $a, Ml, mt, Ke, ml;
    H.__reactDisabledLog = !0;
    var qe, ra, Wa = !1, ei = new (typeof WeakMap == "function" ? WeakMap : Map)(), ti = Symbol.for("react.client.reference"), Je, $i = {}, Wi = {}, En = {};
    Fy.Fragment = It, Fy.jsx = function(T, F, I, re, tl) {
      return se(T, F, I, !1, re, tl);
    }, Fy.jsxs = function(T, F, I, re, tl) {
      return se(T, F, I, !0, re, tl);
    };
  }()), Fy;
}
var ob;
function ES() {
  return ob || (ob = 1, process.env.NODE_ENV === "production" ? Xv.exports = SS() : Xv.exports = TS()), Xv.exports;
}
var Ne = ES(), wv = { exports: {} }, Iy = {}, Qv = { exports: {} }, sg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fb;
function AS() {
  return fb || (fb = 1, function(X) {
    function Le(x, _) {
      var Z = x.length;
      x.push(_);
      e: for (; 0 < Z; ) {
        var ue = Z - 1 >>> 1, ie = x[ue];
        if (0 < xe(ie, _))
          x[ue] = _, x[Z] = ie, Z = ue;
        else break e;
      }
    }
    function Ue(x) {
      return x.length === 0 ? null : x[0];
    }
    function H(x) {
      if (x.length === 0) return null;
      var _ = x[0], Z = x.pop();
      if (Z !== _) {
        x[0] = Z;
        e: for (var ue = 0, ie = x.length, ze = ie >>> 1; ue < ze; ) {
          var Ae = 2 * (ue + 1) - 1, Tt = x[Ae], oe = Ae + 1, ot = x[oe];
          if (0 > xe(Tt, Z))
            oe < ie && 0 > xe(ot, Tt) ? (x[ue] = ot, x[oe] = Z, ue = oe) : (x[ue] = Tt, x[Ae] = Z, ue = Ae);
          else if (oe < ie && 0 > xe(ot, Z))
            x[ue] = ot, x[oe] = Z, ue = oe;
          else break e;
        }
      }
      return _;
    }
    function xe(x, _) {
      var Z = x.sortIndex - _.sortIndex;
      return Z !== 0 ? Z : x.id - _.id;
    }
    if (X.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var it = performance;
      X.unstable_now = function() {
        return it.now();
      };
    } else {
      var Ge = Date, Ze = Ge.now();
      X.unstable_now = function() {
        return Ge.now() - Ze;
      };
    }
    var L = [], St = [], sa = 1, Dt = null, Xe = 3, Yt = !1, se = !1, tt = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    function Ql(x) {
      for (var _ = Ue(St); _ !== null; ) {
        if (_.callback === null) H(St);
        else if (_.startTime <= x)
          H(St), _.sortIndex = _.expirationTime, Le(L, _);
        else break;
        _ = Ue(St);
      }
    }
    function le(x) {
      if (tt = !1, Ql(x), !se)
        if (Ue(L) !== null)
          se = !0, k();
        else {
          var _ = Ue(St);
          _ !== null && el(le, _.startTime - x);
        }
    }
    var Ol = !1, It = -1, Tn = 5, dl = -1;
    function ne() {
      return !(X.unstable_now() - dl < Tn);
    }
    function Ee() {
      if (Ol) {
        var x = X.unstable_now();
        dl = x;
        var _ = !0;
        try {
          e: {
            se = !1, tt && (tt = !1, Be(It), It = -1), Yt = !0;
            var Z = Xe;
            try {
              t: {
                for (Ql(x), Dt = Ue(L); Dt !== null && !(Dt.expirationTime > x && ne()); ) {
                  var ue = Dt.callback;
                  if (typeof ue == "function") {
                    Dt.callback = null, Xe = Dt.priorityLevel;
                    var ie = ue(
                      Dt.expirationTime <= x
                    );
                    if (x = X.unstable_now(), typeof ie == "function") {
                      Dt.callback = ie, Ql(x), _ = !0;
                      break t;
                    }
                    Dt === Ue(L) && H(L), Ql(x);
                  } else H(L);
                  Dt = Ue(L);
                }
                if (Dt !== null) _ = !0;
                else {
                  var ze = Ue(St);
                  ze !== null && el(
                    le,
                    ze.startTime - x
                  ), _ = !1;
                }
              }
              break e;
            } finally {
              Dt = null, Xe = Z, Yt = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Pt() : Ol = !1;
        }
      }
    }
    var Pt;
    if (typeof ae == "function")
      Pt = function() {
        ae(Ee);
      };
    else if (typeof MessageChannel < "u") {
      var Ll = new MessageChannel(), hl = Ll.port2;
      Ll.port1.onmessage = Ee, Pt = function() {
        hl.postMessage(null);
      };
    } else
      Pt = function() {
        ct(Ee, 0);
      };
    function k() {
      Ol || (Ol = !0, Pt());
    }
    function el(x, _) {
      It = ct(function() {
        x(X.unstable_now());
      }, _);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, X.unstable_continueExecution = function() {
      se || Yt || (se = !0, k());
    }, X.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Tn = 0 < x ? Math.floor(1e3 / x) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return Xe;
    }, X.unstable_getFirstCallbackNode = function() {
      return Ue(L);
    }, X.unstable_next = function(x) {
      switch (Xe) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = Xe;
      }
      var Z = Xe;
      Xe = _;
      try {
        return x();
      } finally {
        Xe = Z;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(x, _) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var Z = Xe;
      Xe = x;
      try {
        return _();
      } finally {
        Xe = Z;
      }
    }, X.unstable_scheduleCallback = function(x, _, Z) {
      var ue = X.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ue + Z : ue) : Z = ue, x) {
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
      return ie = Z + ie, x = {
        id: sa++,
        callback: _,
        priorityLevel: x,
        startTime: Z,
        expirationTime: ie,
        sortIndex: -1
      }, Z > ue ? (x.sortIndex = Z, Le(St, x), Ue(L) === null && x === Ue(St) && (tt ? (Be(It), It = -1) : tt = !0, el(le, Z - ue))) : (x.sortIndex = ie, Le(L, x), se || Yt || (se = !0, k())), x;
    }, X.unstable_shouldYield = ne, X.unstable_wrapCallback = function(x) {
      var _ = Xe;
      return function() {
        var Z = Xe;
        Xe = _;
        try {
          return x.apply(this, arguments);
        } finally {
          Xe = Z;
        }
      };
    };
  }(sg)), sg;
}
var rg = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function RS() {
  return sb || (sb = 1, function(X) {
    process.env.NODE_ENV !== "production" && function() {
      function Le() {
        if (ne) {
          var x = X.unstable_now();
          Ll = x;
          var _ = !0;
          try {
            e: {
              le = !1, Ol && (Ol = !1, Tn(Ee), Ee = -1), Ql = !0;
              var Z = ae;
              try {
                t: {
                  for (Ge(x), Be = H(se); Be !== null && !(Be.expirationTime > x && L()); ) {
                    var ue = Be.callback;
                    if (typeof ue == "function") {
                      Be.callback = null, ae = Be.priorityLevel;
                      var ie = ue(
                        Be.expirationTime <= x
                      );
                      if (x = X.unstable_now(), typeof ie == "function") {
                        Be.callback = ie, Ge(x), _ = !0;
                        break t;
                      }
                      Be === H(se) && xe(se), Ge(x);
                    } else xe(se);
                    Be = H(se);
                  }
                  if (Be !== null) _ = !0;
                  else {
                    var ze = H(tt);
                    ze !== null && sa(
                      Ze,
                      ze.startTime - x
                    ), _ = !1;
                  }
                }
                break e;
              } finally {
                Be = null, ae = Z, Ql = !1;
              }
              _ = void 0;
            }
          } finally {
            _ ? hl() : ne = !1;
          }
        }
      }
      function Ue(x, _) {
        var Z = x.length;
        x.push(_);
        e: for (; 0 < Z; ) {
          var ue = Z - 1 >>> 1, ie = x[ue];
          if (0 < it(ie, _))
            x[ue] = _, x[Z] = ie, Z = ue;
          else break e;
        }
      }
      function H(x) {
        return x.length === 0 ? null : x[0];
      }
      function xe(x) {
        if (x.length === 0) return null;
        var _ = x[0], Z = x.pop();
        if (Z !== _) {
          x[0] = Z;
          e: for (var ue = 0, ie = x.length, ze = ie >>> 1; ue < ze; ) {
            var Ae = 2 * (ue + 1) - 1, Tt = x[Ae], oe = Ae + 1, ot = x[oe];
            if (0 > it(Tt, Z))
              oe < ie && 0 > it(ot, Tt) ? (x[ue] = ot, x[oe] = Z, ue = oe) : (x[ue] = Tt, x[Ae] = Z, ue = Ae);
            else if (oe < ie && 0 > it(ot, Z))
              x[ue] = ot, x[oe] = Z, ue = oe;
            else break e;
          }
        }
        return _;
      }
      function it(x, _) {
        var Z = x.sortIndex - _.sortIndex;
        return Z !== 0 ? Z : x.id - _.id;
      }
      function Ge(x) {
        for (var _ = H(tt); _ !== null; ) {
          if (_.callback === null) xe(tt);
          else if (_.startTime <= x)
            xe(tt), _.sortIndex = _.expirationTime, Ue(se, _);
          else break;
          _ = H(tt);
        }
      }
      function Ze(x) {
        if (Ol = !1, Ge(x), !le)
          if (H(se) !== null)
            le = !0, St();
          else {
            var _ = H(tt);
            _ !== null && sa(
              Ze,
              _.startTime - x
            );
          }
      }
      function L() {
        return !(X.unstable_now() - Ll < Pt);
      }
      function St() {
        ne || (ne = !0, hl());
      }
      function sa(x, _) {
        Ee = It(function() {
          x(X.unstable_now());
        }, _);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), X.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Dt = performance;
        X.unstable_now = function() {
          return Dt.now();
        };
      } else {
        var Xe = Date, Yt = Xe.now();
        X.unstable_now = function() {
          return Xe.now() - Yt;
        };
      }
      var se = [], tt = [], ct = 1, Be = null, ae = 3, Ql = !1, le = !1, Ol = !1, It = typeof setTimeout == "function" ? setTimeout : null, Tn = typeof clearTimeout == "function" ? clearTimeout : null, dl = typeof setImmediate < "u" ? setImmediate : null, ne = !1, Ee = -1, Pt = 5, Ll = -1;
      if (typeof dl == "function")
        var hl = function() {
          dl(Le);
        };
      else if (typeof MessageChannel < "u") {
        var k = new MessageChannel(), el = k.port2;
        k.port1.onmessage = Le, hl = function() {
          el.postMessage(null);
        };
      } else
        hl = function() {
          It(Le, 0);
        };
      X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(x) {
        x.callback = null;
      }, X.unstable_continueExecution = function() {
        le || Ql || (le = !0, St());
      }, X.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Pt = 0 < x ? Math.floor(1e3 / x) : 5;
      }, X.unstable_getCurrentPriorityLevel = function() {
        return ae;
      }, X.unstable_getFirstCallbackNode = function() {
        return H(se);
      }, X.unstable_next = function(x) {
        switch (ae) {
          case 1:
          case 2:
          case 3:
            var _ = 3;
            break;
          default:
            _ = ae;
        }
        var Z = ae;
        ae = _;
        try {
          return x();
        } finally {
          ae = Z;
        }
      }, X.unstable_pauseExecution = function() {
      }, X.unstable_requestPaint = function() {
      }, X.unstable_runWithPriority = function(x, _) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var Z = ae;
        ae = x;
        try {
          return _();
        } finally {
          ae = Z;
        }
      }, X.unstable_scheduleCallback = function(x, _, Z) {
        var ue = X.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ue + Z : ue) : Z = ue, x) {
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
        return ie = Z + ie, x = {
          id: ct++,
          callback: _,
          priorityLevel: x,
          startTime: Z,
          expirationTime: ie,
          sortIndex: -1
        }, Z > ue ? (x.sortIndex = Z, Ue(tt, x), H(se) === null && x === H(tt) && (Ol ? (Tn(Ee), Ee = -1) : Ol = !0, sa(Ze, Z - ue))) : (x.sortIndex = ie, Ue(se, x), le || Ql || (le = !0, St())), x;
      }, X.unstable_shouldYield = L, X.unstable_wrapCallback = function(x) {
        var _ = ae;
        return function() {
          var Z = ae;
          ae = _;
          try {
            return x.apply(this, arguments);
          } finally {
            ae = Z;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(rg)), rg;
}
var rb;
function vb() {
  return rb || (rb = 1, process.env.NODE_ENV === "production" ? Qv.exports = AS() : Qv.exports = RS()), Qv.exports;
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
var db;
function zS() {
  if (db) return Iy;
  db = 1;
  var X = vb(), Le = dg, Ue = yb;
  function H(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function xe(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var it = Symbol.for("react.element"), Ge = Symbol.for("react.transitional.element"), Ze = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), St = Symbol.for("react.strict_mode"), sa = Symbol.for("react.profiler"), Dt = Symbol.for("react.provider"), Xe = Symbol.for("react.consumer"), Yt = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Ql = Symbol.for("react.offscreen"), le = Symbol.for("react.memo_cache_sentinel"), Ol = Symbol.iterator;
  function It(l) {
    return l === null || typeof l != "object" ? null : (l = Ol && l[Ol] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Tn = Symbol.for("react.client.reference");
  function dl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Tn ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case L:
        return "Fragment";
      case Ze:
        return "Portal";
      case sa:
        return "Profiler";
      case St:
        return "StrictMode";
      case tt:
        return "Suspense";
      case ct:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yt:
          return (l.displayName || "Context") + ".Provider";
        case Xe:
          return (l._context.displayName || "Context") + ".Consumer";
        case se:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Be:
          return n = l.displayName || null, n !== null ? n : dl(l.type) || "Memo";
        case ae:
          n = l._payload, l = l._init;
          try {
            return dl(l(n));
          } catch {
          }
      }
    return null;
  }
  var ne = Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ee = Object.assign, Pt, Ll;
  function hl(l) {
    if (Pt === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Pt = n && n[1] || "", Ll = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pt + l + Ll;
  }
  var k = !1;
  function el(l, n) {
    if (!l || k) return "";
    k = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var w = function() {
                throw Error();
              };
              if (Object.defineProperty(w.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(w, []);
                } catch (q) {
                  var U = q;
                }
                Reflect.construct(l, [], w);
              } else {
                try {
                  w.call();
                } catch (q) {
                  U = q;
                }
                l.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                U = q;
              }
              (w = l()) && typeof w.catch == "function" && w.catch(function() {
              });
            }
          } catch (q) {
            if (q && U && typeof q.stack == "string")
              return [q.stack, U.stack];
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
                  var N = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", l.displayName)), N;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      k = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? hl(u) : "";
  }
  function x(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return hl(l.type);
      case 16:
        return hl("Lazy");
      case 13:
        return hl("Suspense");
      case 19:
        return hl("SuspenseList");
      case 0:
      case 15:
        return l = el(l.type, !1), l;
      case 11:
        return l = el(l.type.render, !1), l;
      case 1:
        return l = el(l.type, !0), l;
      default:
        return "";
    }
  }
  function _(l) {
    try {
      var n = "";
      do
        n += x(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Z(l) {
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
  function ue(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ie(l) {
    if (Z(l) !== l)
      throw Error(H(188));
  }
  function ze(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Z(l), n === null) throw Error(H(188));
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
        throw Error(H(188));
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
          if (!m) throw Error(H(189));
        }
      }
      if (u.alternate !== c) throw Error(H(190));
    }
    if (u.tag !== 3) throw Error(H(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ae(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ae(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Tt = Array.isArray, oe = Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ot = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ya = [], $a = -1;
  function Ml(l) {
    return { current: l };
  }
  function mt(l) {
    0 > $a || (l.current = Ya[$a], Ya[$a] = null, $a--);
  }
  function Ke(l, n) {
    $a++, Ya[$a] = l.current, l.current = n;
  }
  var ml = Ml(null), qe = Ml(null), ra = Ml(null), Wa = Ml(null);
  function ei(l, n) {
    switch (Ke(ra, n), Ke(qe, l), Ke(ml, null), l = n.nodeType, l) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? Vd(n) : 0;
        break;
      default:
        if (l = l === 8 ? n.parentNode : n, n = l.tagName, l = l.namespaceURI)
          l = Vd(l), n = ay(l, n);
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
    mt(ml), Ke(ml, n);
  }
  function ti() {
    mt(ml), mt(qe), mt(ra);
  }
  function Je(l) {
    l.memoizedState !== null && Ke(Wa, l);
    var n = ml.current, u = ay(n, l.type);
    n !== u && (Ke(qe, l), Ke(ml, u));
  }
  function $i(l) {
    qe.current === l && (mt(ml), mt(qe)), Wa.current === l && (mt(Wa), oa._currentValue = ot);
  }
  var Wi = Object.prototype.hasOwnProperty, En = X.unstable_scheduleCallback, T = X.unstable_cancelCallback, F = X.unstable_shouldYield, I = X.unstable_requestPaint, re = X.unstable_now, tl = X.unstable_getCurrentPriorityLevel, lt = X.unstable_ImmediatePriority, fe = X.unstable_UserBlockingPriority, yl = X.unstable_NormalPriority, Na = X.unstable_LowPriority, ll = X.unstable_IdlePriority, An = X.log, li = X.unstable_setDisableYieldValue, Ul = null, Ot = null;
  function Fa(l) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
      try {
        Ot.onCommitFiberRoot(
          Ul,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function ru(l) {
    if (typeof An == "function" && li(l), Ot && typeof Ot.setStrictMode == "function")
      try {
        Ot.setStrictMode(Ul, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : l0, e0 = Math.log, t0 = Math.LN2;
  function l0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (e0(l) / t0 | 0) | 0;
  }
  var Df = 128, or = 4194304;
  function du(l) {
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
  function Rn(l, n) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var c = 0, s = l.suspendedLanes, r = l.pingedLanes, m = l.warmLanes;
    l = l.finishedLanes !== 0;
    var v = u & 134217727;
    return v !== 0 ? (u = v & ~s, u !== 0 ? c = du(u) : (r &= v, r !== 0 ? c = du(r) : l || (m = v & ~m, m !== 0 && (c = du(m))))) : (v = u & ~s, v !== 0 ? c = du(v) : r !== 0 ? c = du(r) : l || (m = u & ~m, m !== 0 && (c = du(m)))), c === 0 ? 0 : n !== 0 && n !== c && !(n & s) && (s = c & -c, m = n & -n, s >= m || s === 32 && (m & 4194176) !== 0) ? n : c;
  }
  function Ia(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Of(l, n) {
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
  function Fi() {
    var l = Df;
    return Df <<= 1, !(Df & 4194176) && (Df = 128), l;
  }
  function Xt() {
    var l = or;
    return or <<= 1, !(or & 62914560) && (or = 4194304), l;
  }
  function hu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function zn(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function uo(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, g = l.expirationTimes, R = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var N = 31 - Il(u), w = 1 << N;
      v[N] = 0, g[N] = -1;
      var U = R[N];
      if (U !== null)
        for (R[N] = null, N = 0; N < U.length; N++) {
          var q = U[N];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~w;
    }
    c !== 0 && fr(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function fr(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Il(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194218;
  }
  function Th(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Il(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Mf(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Uf() {
    var l = oe.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : tv(l.type));
  }
  function mu(l, n) {
    var u = oe.p;
    try {
      return oe.p = l, n();
    } finally {
      oe.p = u;
    }
  }
  var wt = Math.random().toString(36).slice(2), vl = "__reactFiber$" + wt, Pl = "__reactProps$" + wt, yu = "__reactContainer$" + wt, sr = "__reactEvents$" + wt, rr = "__reactListeners$" + wt, ja = "__reactHandles$" + wt, Eh = "__reactResources$" + wt, Ii = "__reactMarker$" + wt;
  function dr(l) {
    delete l[vl], delete l[Pl], delete l[sr], delete l[rr], delete l[ja];
  }
  function vu(l) {
    var n = l[vl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[yu] || u[vl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Ys(l); l !== null; ) {
            if (u = l[vl]) return u;
            l = Ys(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Pi(l) {
    if (l = l[vl] || l[yu]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function io(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(H(33));
  }
  function Pa(l) {
    var n = l[Eh];
    return n || (n = l[Eh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Qt(l) {
    l[Ii] = !0;
  }
  var Ah = /* @__PURE__ */ new Set(), Rh = {};
  function ai(l, n) {
    ec(l, n), ec(l + "Capture", n);
  }
  function ec(l, n) {
    for (Rh[l] = n, l = 0; l < n.length; l++)
      Ah.add(n[l]);
  }
  var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), co = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ni = {}, zh = {};
  function Hf(l) {
    return Wi.call(zh, l) ? !0 : Wi.call(ni, l) ? !1 : co.test(l) ? zh[l] = !0 : (ni[l] = !0, !1);
  }
  function tc(l, n, u) {
    if (Hf(n))
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
  function oo(l, n, u) {
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
  function da(l, n, u, c) {
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
  function hr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Lv(l) {
    var n = hr(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
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
  function mr(l) {
    l._valueTracker || (l._valueTracker = Lv(l));
  }
  function Dh(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = hr(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function fo(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Oh = /[\n"\\]/g;
  function ha(l) {
    return l.replace(
      Oh,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yr(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + pl(n)) : l.value !== "" + pl(n) && (l.value = "" + pl(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Uh(l, m, pl(n)) : u != null ? Uh(l, m, pl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + pl(v) : l.removeAttribute("name");
  }
  function Mh(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + pl(u) : "", n = n != null ? "" + pl(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function Uh(l, n, u) {
    n === "number" && fo(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function lc(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + pl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function vr(l, n, u) {
    if (n != null && (n = "" + pl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + pl(u) : "";
  }
  function Cf(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(H(92));
        if (Tt(c)) {
          if (1 < c.length) throw Error(H(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = pl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Dn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Zv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hh(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Zv.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Ch(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(H(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Hh(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Hh(l, r, n[r]);
  }
  function ac(l) {
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
  var a0 = /* @__PURE__ */ new Map([
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
  ]), _v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pr(l) {
    return _v.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var xh = null;
  function Bh(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var On = null, ui = null;
  function qh(l) {
    var n = Pi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Pl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (yr(
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
              'input[name="' + ha(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Pl] || null;
                if (!s) throw Error(H(90));
                yr(
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
              c = u[n], c.form === l.form && Dh(c);
          }
          break e;
        case "textarea":
          vr(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && lc(l, !!u.multiple, n, !1);
      }
    }
  }
  var gr = !1;
  function so(l, n, u) {
    if (gr) return l(n, u);
    gr = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (gr = !1, (On !== null || ui !== null) && (Gc(), On && (n = On, l = ui, ui = On = null, qh(n), l)))
        for (n = 0; n < l.length; n++) qh(l[n]);
    }
  }
  function ro(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Pl] || null;
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
        H(231, n, typeof u)
      );
    return u;
  }
  var ho = !1;
  if (xt)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function() {
          ho = !0;
        }
      }), window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
    } catch {
      ho = !1;
    }
  var pu = null, Hl = null, br = null;
  function Sr() {
    if (br) return br;
    var l, n = Hl, u = n.length, c, s = "value" in pu ? pu.value : pu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return br = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function xf(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Bf() {
    return !0;
  }
  function n0() {
    return !1;
  }
  function ea(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Bf : n0, this.isPropagationStopped = n0, this;
    }
    return Ee(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Bf);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Bf);
      },
      persist: function() {
      },
      isPersistent: Bf
    }), n;
  }
  var ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Tr = ea(ci), mo = Ee({}, ci, { view: 0, detail: 0 }), Kv = ea(mo), yo, Er, vo, qf = Ee({}, mo, {
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
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vo && (vo && l.type === "mousemove" ? (yo = l.screenX - vo.screenX, Er = l.screenY - vo.screenY) : Er = yo = 0, vo = l), yo);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Er;
    }
  }), u0 = ea(qf), Jv = Ee({}, qf, { dataTransfer: 0 }), kv = ea(Jv), $v = Ee({}, mo, { relatedTarget: 0 }), Yh = ea($v), Yf = Ee({}, ci, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), i0 = ea(Yf), c0 = Ee({}, ci, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), o0 = ea(c0), f0 = Ee({}, ci, { data: 0 }), Ar = ea(f0), Wv = {
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
  }, s0 = {
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
  }, nc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uc(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = nc[l]) ? !!n[l] : !1;
  }
  function ma() {
    return uc;
  }
  var Rr = Ee({}, mo, {
    key: function(l) {
      if (l.key) {
        var n = Wv[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = xf(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? s0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function(l) {
      return l.type === "keypress" ? xf(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? xf(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), zr = ea(Rr), Nh = Ee({}, qf, {
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
  }), gl = ea(Nh), r0 = Ee({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma
  }), Dr = ea(r0), ic = Ee({}, ci, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jh = ea(ic), d0 = Ee({}, qf, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), h0 = ea(d0), Vh = Ee({}, ci, {
    newState: 0,
    oldState: 0
  }), gu = ea(Vh), Or = [9, 13, 27, 32], cc = xt && "CompositionEvent" in window, oc = null;
  xt && "documentMode" in document && (oc = document.documentMode);
  var Gh = xt && "TextEvent" in window && !oc, Xh = xt && (!cc || oc && 8 < oc && 11 >= oc), en = " ", tn = !1;
  function Nf(l, n) {
    switch (l) {
      case "keyup":
        return Or.indexOf(n.keyCode) !== -1;
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
  function ta(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Va = !1;
  function m0(l, n) {
    switch (l) {
      case "compositionend":
        return ta(n);
      case "keypress":
        return n.which !== 32 ? null : (tn = !0, en);
      case "textInput":
        return l = n.data, l === en && tn ? null : l;
      default:
        return null;
    }
  }
  function wh(l, n) {
    if (Va)
      return l === "compositionend" || !cc && Nf(l, n) ? (l = Sr(), br = Hl = pu = null, Va = !1, l) : null;
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
        return Xh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Qh = {
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
  function oi(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Qh[l.type] : n === "textarea";
  }
  function fi(l, n, u, c) {
    On ? ui ? ui.push(c) : ui = [c] : On = c, n = Nl(n, "onChange"), 0 < n.length && (u = new Tr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var fc = null, ln = null;
  function y0(l) {
    Bd(l, 0);
  }
  function jf(l) {
    var n = io(l);
    if (Dh(n)) return l;
  }
  function po(l, n) {
    if (l === "change") return n;
  }
  var go = !1;
  if (xt) {
    var sc;
    if (xt) {
      var Mr = "oninput" in document;
      if (!Mr) {
        var Lh = document.createElement("div");
        Lh.setAttribute("oninput", "return;"), Mr = typeof Lh.oninput == "function";
      }
      sc = Mr;
    } else sc = !1;
    go = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    fc && (fc.detachEvent("onpropertychange", Vf), ln = fc = null);
  }
  function Vf(l) {
    if (l.propertyName === "value" && jf(ln)) {
      var n = [];
      fi(
        n,
        ln,
        l,
        Bh(l)
      ), so(y0, n);
    }
  }
  function v0(l, n, u) {
    l === "focusin" ? (Zh(), fc = n, ln = u, fc.attachEvent("onpropertychange", Vf)) : l === "focusout" && Zh();
  }
  function p0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return jf(ln);
  }
  function g0(l, n) {
    if (l === "click") return jf(n);
  }
  function bl(l, n) {
    if (l === "input" || l === "change")
      return jf(n);
  }
  function Ur(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Cl = typeof Object.is == "function" ? Object.is : Ur;
  function bu(l, n) {
    if (Cl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Wi.call(n, s) || !Cl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Gf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Xf(l, n) {
    var u = Gf(l);
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
      u = Gf(u);
    }
  }
  function wf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? wf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function _h(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = fo(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = fo(l.document);
    }
    return n;
  }
  function Hr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  function Kh(l, n) {
    var u = _h(n);
    n = l.focusedElem;
    var c = l.selectionRange;
    if (u !== n && n && n.ownerDocument && wf(n.ownerDocument.documentElement, n)) {
      if (c !== null && Hr(n)) {
        if (l = c.start, u = c.end, u === void 0 && (u = l), "selectionStart" in n)
          n.selectionStart = l, n.selectionEnd = Math.min(
            u,
            n.value.length
          );
        else if (u = (l = n.ownerDocument || document) && l.defaultView || window, u.getSelection) {
          u = u.getSelection();
          var s = n.textContent.length, r = Math.min(c.start, s);
          c = c.end === void 0 ? r : Math.min(c.end, s), !u.extend && r > c && (s = c, c = r, r = s), s = Xf(n, r);
          var m = Xf(
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
  var Jh = xt && "documentMode" in document && 11 >= document.documentMode, ya = null, Cr = null, Ga = null, an = !1;
  function Qf(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    an || ya == null || ya !== fo(c) || (c = ya, "selectionStart" in c && Hr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Ga && bu(Ga, c) || (Ga = c, c = Nl(Cr, "onSelect"), 0 < c.length && (n = new Tr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = ya)));
  }
  function Su(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Xa = {
    animationend: Su("Animation", "AnimationEnd"),
    animationiteration: Su("Animation", "AnimationIteration"),
    animationstart: Su("Animation", "AnimationStart"),
    transitionrun: Su("Transition", "TransitionRun"),
    transitionstart: Su("Transition", "TransitionStart"),
    transitioncancel: Su("Transition", "TransitionCancel"),
    transitionend: Su("Transition", "TransitionEnd")
  }, rc = {}, b0 = {};
  xt && (b0 = document.createElement("div").style, "AnimationEvent" in window || (delete Xa.animationend.animation, delete Xa.animationiteration.animation, delete Xa.animationstart.animation), "TransitionEvent" in window || delete Xa.transitionend.transition);
  function si(l) {
    if (rc[l]) return rc[l];
    if (!Xa[l]) return l;
    var n = Xa[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in b0)
        return rc[l] = n[u];
    return l;
  }
  var S0 = si("animationend"), xr = si("animationiteration"), Lf = si("animationstart"), T0 = si("transitionrun"), Re = si("transitionstart"), Q = si("transitioncancel"), dc = si("transitionend"), Zf = /* @__PURE__ */ new Map(), Mt = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function va(l, n) {
    Zf.set(l, n), ai(n, [l]);
  }
  var la = [], hc = 0, _f = 0;
  function Br() {
    for (var l = hc, n = _f = hc = 0; n < l; ) {
      var u = la[n];
      la[n++] = null;
      var c = la[n];
      la[n++] = null;
      var s = la[n];
      la[n++] = null;
      var r = la[n];
      if (la[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Zl(u, s, r);
    }
  }
  function bo(l, n, u, c) {
    la[hc++] = l, la[hc++] = n, la[hc++] = u, la[hc++] = c, _f |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Kf(l, n, u, c) {
    return bo(l, n, u, c), we(l);
  }
  function Mn(l, n) {
    return bo(l, null, null, n), we(l);
  }
  function Zl(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    s && n !== null && l.tag === 3 && (r = l.stateNode, s = 31 - Il(u), r = r.hiddenUpdates, l = r[s], l === null ? r[s] = [n] : l.push(n), n.lane = u | 536870912);
  }
  function we(l) {
    if (50 < Wo)
      throw Wo = 0, zd = null, Error(H(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Un = {}, Tu = /* @__PURE__ */ new WeakMap();
  function al(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Tu.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: _(n)
      }, Tu.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: _(n)
    };
  }
  var xl = [], ri = 0, Eu = null, So = 0, Bl = [], aa = 0, Hn = null, Cn = 1, xn = "";
  function di(l, n) {
    xl[ri++] = So, xl[ri++] = Eu, Eu = l, So = n;
  }
  function kh(l, n, u) {
    Bl[aa++] = Cn, Bl[aa++] = xn, Bl[aa++] = Hn, Hn = l;
    var c = Cn;
    l = xn;
    var s = 32 - Il(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Il(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Cn = 1 << 32 - Il(n) + s | u << s | c, xn = r + l;
    } else
      Cn = 1 << r | u << s | c, xn = l;
  }
  function qr(l) {
    l.return !== null && (di(l, 1), kh(l, 1, 0));
  }
  function Jf(l) {
    for (; l === Eu; )
      Eu = xl[--ri], xl[ri] = null, So = xl[--ri], xl[ri] = null;
    for (; l === Hn; )
      Hn = Bl[--aa], Bl[aa] = null, xn = Bl[--aa], Bl[aa] = null, Cn = Bl[--aa], Bl[aa] = null;
  }
  var Sl = null, Lt = null, je = !1, wa = null, nn = !1, $h = Error(H(519));
  function hi(l) {
    var n = Error(H(418, ""));
    throw Eo(al(n, l)), $h;
  }
  function Wh(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Pl] = c, u) {
      case "dialog":
        Ce("cancel", n), Ce("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Fn.length; u++)
          Ce(Fn[u], n);
        break;
      case "source":
        Ce("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", n), Ce("load", n);
        break;
      case "details":
        Ce("toggle", n);
        break;
      case "input":
        Ce("invalid", n), Mh(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), mr(n);
        break;
      case "select":
        Ce("invalid", n);
        break;
      case "textarea":
        Ce("invalid", n), Cf(n, c.value, c.defaultValue, c.children), mr(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ve(n.textContent, u) ? (c.popover != null && (Ce("beforetoggle", n), Ce("toggle", n)), c.onScroll != null && Ce("scroll", n), c.onScrollEnd != null && Ce("scrollend", n), c.onClick != null && (n.onclick = qi), n = !0) : n = !1, n || hi(l);
  }
  function Fh(l) {
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
  function mc(l) {
    if (l !== Sl) return !1;
    if (!je) return Fh(l), je = !0, !1;
    var n = !1, u;
    if ((u = l.tag !== 3 && l.tag !== 27) && ((u = l.tag === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Cs(l.type, l.memoizedProps)), u = !u), u && (n = !0), n && Lt && hi(l), Fh(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Lt = fl(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Lt = null;
      }
    } else
      Lt = Sl ? fl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function To() {
    Lt = Sl = null, je = !1;
  }
  function Eo(l) {
    wa === null ? wa = [l] : wa.push(l);
  }
  var Bn = Error(H(460)), kf = Error(H(474)), Yr = { then: function() {
  } };
  function E0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function yc() {
  }
  function vc(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(yc, yc), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, l === Bn ? Error(H(483)) : l;
      default:
        if (typeof n.status == "string") n.then(yc, yc);
        else {
          if (l = Ie, l !== null && 100 < l.shellSuspendCounter)
            throw Error(H(482));
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
            throw l = n.reason, l === Bn ? Error(H(483)) : l;
        }
        throw pc = n, Bn;
    }
  }
  var pc = null;
  function mi() {
    if (pc === null) throw Error(H(459));
    var l = pc;
    return pc = null, l;
  }
  var Zt = null, yi = 0;
  function Ao(l) {
    var n = yi;
    return yi += 1, Zt === null && (Zt = []), vc(Zt, l, n);
  }
  function Ro(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function zo(l, n) {
    throw n.$$typeof === it ? Error(H(525)) : (l = Object.prototype.toString.call(n), Error(
      H(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function $f(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Nr(l) {
    function n(z, A) {
      if (l) {
        var D = z.deletions;
        D === null ? (z.deletions = [A], z.flags |= 16) : D.push(A);
      }
    }
    function u(z, A) {
      if (!l) return null;
      for (; A !== null; )
        n(z, A), A = A.sibling;
      return null;
    }
    function c(z) {
      for (var A = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? A.set(z.key, z) : A.set(z.index, z), z = z.sibling;
      return A;
    }
    function s(z, A) {
      return z = mn(z, A), z.index = 0, z.sibling = null, z;
    }
    function r(z, A, D) {
      return z.index = D, l ? (D = z.alternate, D !== null ? (D = D.index, D < A ? (z.flags |= 33554434, A) : D) : (z.flags |= 33554434, A)) : (z.flags |= 1048576, A);
    }
    function m(z) {
      return l && z.alternate === null && (z.flags |= 33554434), z;
    }
    function v(z, A, D, G) {
      return A === null || A.tag !== 6 ? (A = Sd(D, z.mode, G), A.return = z, A) : (A = s(A, D), A.return = z, A);
    }
    function g(z, A, D, G) {
      var W = D.type;
      return W === L ? N(
        z,
        A,
        D.props.children,
        G,
        D.key
      ) : A !== null && (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ae && $f(W) === A.type) ? (A = s(A, D.props), Ro(A, D), A.return = z, A) : (A = Ko(
        D.type,
        D.key,
        D.props,
        null,
        z.mode,
        G
      ), Ro(A, D), A.return = z, A);
    }
    function R(z, A, D, G) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = Ss(D, z.mode, G), A.return = z, A) : (A = s(A, D.children || []), A.return = z, A);
    }
    function N(z, A, D, G, W) {
      return A === null || A.tag !== 7 ? (A = At(
        D,
        z.mode,
        G,
        W
      ), A.return = z, A) : (A = s(A, D), A.return = z, A);
    }
    function w(z, A, D) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Sd(
          "" + A,
          z.mode,
          D
        ), A.return = z, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Ge:
            return D = Ko(
              A.type,
              A.key,
              A.props,
              null,
              z.mode,
              D
            ), Ro(D, A), D.return = z, D;
          case Ze:
            return A = Ss(
              A,
              z.mode,
              D
            ), A.return = z, A;
          case ae:
            var G = A._init;
            return A = G(A._payload), w(z, A, D);
        }
        if (Tt(A) || It(A))
          return A = At(
            A,
            z.mode,
            D,
            null
          ), A.return = z, A;
        if (typeof A.then == "function")
          return w(z, Ao(A), D);
        if (A.$$typeof === Yt)
          return w(
            z,
            fd(z, A),
            D
          );
        zo(z, A);
      }
      return null;
    }
    function U(z, A, D, G) {
      var W = A !== null ? A.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return W !== null ? null : v(z, A, "" + D, G);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Ge:
            return D.key === W ? g(z, A, D, G) : null;
          case Ze:
            return D.key === W ? R(z, A, D, G) : null;
          case ae:
            return W = D._init, D = W(D._payload), U(z, A, D, G);
        }
        if (Tt(D) || It(D))
          return W !== null ? null : N(z, A, D, G, null);
        if (typeof D.then == "function")
          return U(
            z,
            A,
            Ao(D),
            G
          );
        if (D.$$typeof === Yt)
          return U(
            z,
            A,
            fd(z, D),
            G
          );
        zo(z, D);
      }
      return null;
    }
    function q(z, A, D, G, W) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return z = z.get(D) || null, v(A, z, "" + G, W);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ge:
            return z = z.get(
              G.key === null ? D : G.key
            ) || null, g(A, z, G, W);
          case Ze:
            return z = z.get(
              G.key === null ? D : G.key
            ) || null, R(A, z, G, W);
          case ae:
            var ge = G._init;
            return G = ge(G._payload), q(
              z,
              A,
              D,
              G,
              W
            );
        }
        if (Tt(G) || It(G))
          return z = z.get(D) || null, N(A, z, G, W, null);
        if (typeof G.then == "function")
          return q(
            z,
            A,
            D,
            Ao(G),
            W
          );
        if (G.$$typeof === Yt)
          return q(
            z,
            A,
            D,
            fd(A, G),
            W
          );
        zo(A, G);
      }
      return null;
    }
    function $(z, A, D, G) {
      for (var W = null, ge = null, te = A, ce = A = 0, $t = null; te !== null && ce < D.length; ce++) {
        te.index > ce ? ($t = te, te = null) : $t = te.sibling;
        var Qe = U(
          z,
          te,
          D[ce],
          G
        );
        if (Qe === null) {
          te === null && (te = $t);
          break;
        }
        l && te && Qe.alternate === null && n(z, te), A = r(Qe, A, ce), ge === null ? W = Qe : ge.sibling = Qe, ge = Qe, te = $t;
      }
      if (ce === D.length)
        return u(z, te), je && di(z, ce), W;
      if (te === null) {
        for (; ce < D.length; ce++)
          te = w(z, D[ce], G), te !== null && (A = r(
            te,
            A,
            ce
          ), ge === null ? W = te : ge.sibling = te, ge = te);
        return je && di(z, ce), W;
      }
      for (te = c(te); ce < D.length; ce++)
        $t = q(
          te,
          z,
          ce,
          D[ce],
          G
        ), $t !== null && (l && $t.alternate !== null && te.delete(
          $t.key === null ? ce : $t.key
        ), A = r(
          $t,
          A,
          ce
        ), ge === null ? W = $t : ge.sibling = $t, ge = $t);
      return l && te.forEach(function(Zi) {
        return n(z, Zi);
      }), je && di(z, ce), W;
    }
    function de(z, A, D, G) {
      if (D == null) throw Error(H(151));
      for (var W = null, ge = null, te = A, ce = A = 0, $t = null, Qe = D.next(); te !== null && !Qe.done; ce++, Qe = D.next()) {
        te.index > ce ? ($t = te, te = null) : $t = te.sibling;
        var Zi = U(z, te, Qe.value, G);
        if (Zi === null) {
          te === null && (te = $t);
          break;
        }
        l && te && Zi.alternate === null && n(z, te), A = r(Zi, A, ce), ge === null ? W = Zi : ge.sibling = Zi, ge = Zi, te = $t;
      }
      if (Qe.done)
        return u(z, te), je && di(z, ce), W;
      if (te === null) {
        for (; !Qe.done; ce++, Qe = D.next())
          Qe = w(z, Qe.value, G), Qe !== null && (A = r(Qe, A, ce), ge === null ? W = Qe : ge.sibling = Qe, ge = Qe);
        return je && di(z, ce), W;
      }
      for (te = c(te); !Qe.done; ce++, Qe = D.next())
        Qe = q(te, z, ce, Qe.value, G), Qe !== null && (l && Qe.alternate !== null && te.delete(Qe.key === null ? ce : Qe.key), A = r(Qe, A, ce), ge === null ? W = Qe : ge.sibling = Qe, ge = Qe);
      return l && te.forEach(function(mp) {
        return n(z, mp);
      }), je && di(z, ce), W;
    }
    function rt(z, A, D, G) {
      if (typeof D == "object" && D !== null && D.type === L && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Ge:
            e: {
              for (var W = D.key; A !== null; ) {
                if (A.key === W) {
                  if (W = D.type, W === L) {
                    if (A.tag === 7) {
                      u(
                        z,
                        A.sibling
                      ), G = s(
                        A,
                        D.props.children
                      ), G.return = z, z = G;
                      break e;
                    }
                  } else if (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ae && $f(W) === A.type) {
                    u(
                      z,
                      A.sibling
                    ), G = s(A, D.props), Ro(G, D), G.return = z, z = G;
                    break e;
                  }
                  u(z, A);
                  break;
                } else n(z, A);
                A = A.sibling;
              }
              D.type === L ? (G = At(
                D.props.children,
                z.mode,
                G,
                D.key
              ), G.return = z, z = G) : (G = Ko(
                D.type,
                D.key,
                D.props,
                null,
                z.mode,
                G
              ), Ro(G, D), G.return = z, z = G);
            }
            return m(z);
          case Ze:
            e: {
              for (W = D.key; A !== null; ) {
                if (A.key === W)
                  if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                    u(
                      z,
                      A.sibling
                    ), G = s(A, D.children || []), G.return = z, z = G;
                    break e;
                  } else {
                    u(z, A);
                    break;
                  }
                else n(z, A);
                A = A.sibling;
              }
              G = Ss(D, z.mode, G), G.return = z, z = G;
            }
            return m(z);
          case ae:
            return W = D._init, D = W(D._payload), rt(
              z,
              A,
              D,
              G
            );
        }
        if (Tt(D))
          return $(
            z,
            A,
            D,
            G
          );
        if (It(D)) {
          if (W = It(D), typeof W != "function") throw Error(H(150));
          return D = W.call(D), de(
            z,
            A,
            D,
            G
          );
        }
        if (typeof D.then == "function")
          return rt(
            z,
            A,
            Ao(D),
            G
          );
        if (D.$$typeof === Yt)
          return rt(
            z,
            A,
            fd(z, D),
            G
          );
        zo(z, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, A !== null && A.tag === 6 ? (u(z, A.sibling), G = s(A, D), G.return = z, z = G) : (u(z, A), G = Sd(D, z.mode, G), G.return = z, z = G), m(z)) : u(z, A);
    }
    return function(z, A, D, G) {
      try {
        yi = 0;
        var W = rt(
          z,
          A,
          D,
          G
        );
        return Zt = null, W;
      } catch (te) {
        if (te === Bn) throw te;
        var ge = Jt(29, te, null, z.mode);
        return ge.lanes = G, ge.return = z, ge;
      } finally {
      }
    };
  }
  var qn = Nr(!0), jr = Nr(!1), Au = Ml(null), Do = Ml(0);
  function Ih(l, n) {
    l = Lu, Ke(Do, l), Ke(Au, n), Lu = l | n.baseLanes;
  }
  function Vr() {
    Ke(Do, Lu), Ke(Au, Au.current);
  }
  function Wf() {
    Lu = Do.current, mt(Au), mt(Do);
  }
  var pa = Ml(null), un = null;
  function Yn(l) {
    var n = l.alternate;
    Ke(Nt, Nt.current & 1), Ke(pa, l), un === null && (n === null || Au.current !== null || n.memoizedState !== null) && (un = l);
  }
  function Ph(l) {
    if (l.tag === 22) {
      if (Ke(Nt, Nt.current), Ke(pa, l), un === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (un = l);
      }
    } else Ru();
  }
  function Ru() {
    Ke(Nt, Nt.current), Ke(pa, pa.current);
  }
  function cn(l) {
    mt(pa), un === l && (un = null), mt(Nt);
  }
  var Nt = Ml(0);
  function Ff(l) {
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
  var gc = typeof AbortController < "u" ? AbortController : function() {
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
  }, em = X.unstable_scheduleCallback, tm = X.unstable_NormalPriority, _t = {
    $$typeof: Yt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lm() {
    return {
      controller: new gc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oo(l) {
    l.refCount--, l.refCount === 0 && em(tm, function() {
      l.controller.abort();
    });
  }
  var zu = null, If = 0, Du = 0, bc = null;
  function A0(l, n) {
    if (zu === null) {
      var u = zu = [];
      If = 0, Du = tf(), bc = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return If++, n.then(Gr, Gr), n;
  }
  function Gr() {
    if (--If === 0 && zu !== null) {
      bc !== null && (bc.status = "fulfilled");
      var l = zu;
      zu = null, Du = 0, bc = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function am(l, n) {
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
  var nm = ne.S;
  ne.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && A0(l, n), nm !== null && nm(l, n);
  };
  var vi = Ml(null);
  function Ou() {
    var l = vi.current;
    return l !== null ? l : Ie.pooledCache;
  }
  function Pf(l, n) {
    n === null ? Ke(vi, vi.current) : Ke(vi, n.pool);
  }
  function um() {
    var l = Ou();
    return l === null ? null : { parent: _t._currentValue, pool: l };
  }
  var Mu = 0, me = null, ke = null, Ut = null, Mo = !1, pi = !1, Sc = !1, jt = 0, Uo = 0, Tc = null, R0 = 0;
  function Ht() {
    throw Error(H(321));
  }
  function Xr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Cl(l[u], n[u])) return !1;
    return !0;
  }
  function Ec(l, n, u, c, s, r) {
    return Mu = r, me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ne.H = l === null || l.memoizedState === null ? Si : Bu, Sc = !1, r = u(c, s), Sc = !1, pi && (r = im(
      n,
      u,
      c,
      s
    )), wr(l), r;
  }
  function wr(l) {
    ne.H = nl;
    var n = ke !== null && ke.next !== null;
    if (Mu = 0, Ut = ke = me = null, Mo = !1, Uo = 0, Tc = null, n) throw Error(H(300));
    l === null || Et || (l = l.dependencies, l !== null && ms(l) && (Et = !0));
  }
  function im(l, n, u, c) {
    me = l;
    var s = 0;
    do {
      if (pi && (Tc = null), Uo = 0, pi = !1, 25 <= s) throw Error(H(301));
      if (s += 1, Ut = ke = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      ne.H = zc, r = n(u, c);
    } while (pi);
    return r;
  }
  function z0() {
    var l = ne.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ac(n) : n, l = l.useState()[0], (ke !== null ? ke.memoizedState : null) !== l && (me.flags |= 1024), n;
  }
  function Qr() {
    var l = jt !== 0;
    return jt = 0, l;
  }
  function es(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function ts(l) {
    if (Mo) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Mo = !1;
    }
    Mu = 0, Ut = ke = me = null, pi = !1, Uo = jt = 0, Tc = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? me.memoizedState = Ut = l : Ut = Ut.next = l, Ut;
  }
  function Bt() {
    if (ke === null) {
      var l = me.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ke.next;
    var n = Ut === null ? me.memoizedState : Ut.next;
    if (n !== null)
      Ut = n, ke = l;
    else {
      if (l === null)
        throw me.alternate === null ? Error(H(467)) : Error(H(310));
      ke = l, l = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null
      }, Ut === null ? me.memoizedState = Ut = l : Ut = Ut.next = l;
    }
    return Ut;
  }
  var Ho;
  Ho = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ac(l) {
    var n = Uo;
    return Uo += 1, Tc === null && (Tc = []), l = vc(Tc, l, n), n = me, (Ut === null ? n.memoizedState : Ut.next) === null && (n = n.alternate, ne.H = n === null || n.memoizedState === null ? Si : Bu), l;
  }
  function Co(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ac(l);
      if (l.$$typeof === Yt) return Tl(l);
    }
    throw Error(H(438, String(l)));
  }
  function Lr(l) {
    var n = null, u = me.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = me.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Ho(), me.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = le;
    return n.index++, u;
  }
  function Nn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function xo(l) {
    var n = Bt();
    return Zr(n, ke, l);
  }
  function Zr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(H(311));
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
      var v = m = null, g = null, R = n, N = !1;
      do {
        var w = R.lane & -536870913;
        if (w !== R.lane ? (Ye & w) === w : (Mu & w) === w) {
          var U = R.revertLane;
          if (U === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), w === Du && (N = !0);
          else if ((Mu & U) === U) {
            R = R.next, U === Du && (N = !0);
            continue;
          } else
            w = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, g === null ? (v = g = w, m = r) : g = g.next = w, me.lanes |= U, Oi |= U;
          w = R.action, Sc && u(r, w), r = R.hasEagerState ? R.eagerState : u(r, w);
        } else
          U = {
            lane: w,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, g === null ? (v = g = U, m = r) : g = g.next = U, me.lanes |= w, Oi |= w;
        R = R.next;
      } while (R !== null && R !== n);
      if (g === null ? m = r : g.next = v, !Cl(r, l.memoizedState) && (Et = !0, N && (u = bc, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function on(l) {
    var n = Bt(), u = n.queue;
    if (u === null) throw Error(H(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Cl(r, n.memoizedState) || (Et = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function _r(l, n, u) {
    var c = me, s = Bt(), r = je;
    if (r) {
      if (u === void 0) throw Error(H(407));
      u = u();
    } else u = n();
    var m = !Cl(
      (ke || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Et = !0), s = s.queue, Qa(ls.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || Ut !== null && Ut.memoizedState.tag & 1) {
      if (c.flags |= 2048, Vn(
        9,
        Kr.bind(
          null,
          c,
          s,
          u,
          n
        ),
        { destroy: void 0 },
        null
      ), Ie === null) throw Error(H(349));
      r || Mu & 60 || D0(c, n, u);
    }
    return u;
  }
  function D0(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = me.updateQueue, n === null ? (n = Ho(), me.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Kr(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Uu(n) && jn(l);
  }
  function ls(l, n, u) {
    return u(function() {
      Uu(n) && jn(l);
    });
  }
  function Uu(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Cl(l, u);
    } catch {
      return !0;
    }
  }
  function jn(l) {
    var n = Mn(l, 2);
    n !== null && kt(n, l, 2);
  }
  function as(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Sc) {
        ru(!0);
        try {
          u();
        } finally {
          ru(!1);
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
  function Jr(l, n, u, c) {
    return l.baseState = u, Zr(
      l,
      ke,
      typeof c == "function" ? c : Nn
    );
  }
  function ns(l, n, u, c, s) {
    if (td(l)) throw Error(H(485));
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
      ne.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, us(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function us(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = ne.T, m = {};
      ne.T = m;
      try {
        var v = u(s, c), g = ne.S;
        g !== null && g(m, v), gi(l, n, v);
      } catch (R) {
        Bo(l, n, R);
      } finally {
        ne.T = r;
      }
    } else
      try {
        r = u(s, c), gi(l, n, r);
      } catch (R) {
        Bo(l, n, R);
      }
  }
  function gi(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        ft(l, n, c);
      },
      function(c) {
        return Bo(l, n, c);
      }
    ) : ft(l, n, u);
  }
  function ft(l, n, u) {
    n.status = "fulfilled", n.value = u, cm(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, us(l, u)));
  }
  function Bo(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, cm(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function cm(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function kr(l, n) {
    return n;
  }
  function $r(l, n) {
    if (je) {
      var u = Ie.formState;
      if (u !== null) {
        e: {
          var c = me;
          if (je) {
            if (Lt) {
              t: {
                for (var s = Lt, r = nn; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = fl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Lt = fl(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            hi(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ql(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: n
    }, u.queue = c, u = ed.bind(
      null,
      me,
      c
    ), c.dispatch = u, c = as(!1), r = gm.bind(
      null,
      me,
      !1,
      c.queue
    ), c = ql(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = ns.bind(
      null,
      me,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Hu(l) {
    var n = Bt();
    return Cu(n, ke, l);
  }
  function Cu(l, n, u) {
    n = Zr(
      l,
      n,
      kr
    )[0], l = xo(Nn)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? Ac(n) : n;
    var c = Bt(), s = c.queue, r = s.dispatch;
    return u !== c.memoizedState && (me.flags |= 2048, Vn(
      9,
      is.bind(null, s, u),
      { destroy: void 0 },
      null
    )), [n, r, l];
  }
  function is(l, n) {
    l.action = n;
  }
  function cs(l) {
    var n = Bt(), u = ke;
    if (u !== null)
      return Cu(n, u, l);
    Bt(), n = n.memoizedState, u = Bt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Vn(l, n, u, c) {
    return l = { tag: l, create: n, inst: u, deps: c, next: null }, n = me.updateQueue, n === null && (n = Ho(), me.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function qo() {
    return Bt().memoizedState;
  }
  function os(l, n, u, c) {
    var s = ql();
    me.flags |= l, s.memoizedState = Vn(
      1 | n,
      u,
      { destroy: void 0 },
      c === void 0 ? null : c
    );
  }
  function Wr(l, n, u, c) {
    var s = Bt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    ke !== null && c !== null && Xr(c, ke.memoizedState.deps) ? s.memoizedState = Vn(n, u, r, c) : (me.flags |= l, s.memoizedState = Vn(1 | n, u, r, c));
  }
  function om(l, n) {
    os(8390656, 8, l, n);
  }
  function Qa(l, n) {
    Wr(2048, 8, l, n);
  }
  function fm(l, n) {
    return Wr(4, 2, l, n);
  }
  function Fr(l, n) {
    return Wr(4, 4, l, n);
  }
  function Yo(l, n) {
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
  function Rc(l, n, u) {
    u = u != null ? u.concat([l]) : null, Wr(4, 4, Yo.bind(null, n, l), u);
  }
  function Ir() {
  }
  function Pr(l, n) {
    var u = Bt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Xr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function sm(l, n) {
    var u = Bt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Xr(n, c[1]))
      return c[0];
    if (c = l(), Sc) {
      ru(!0);
      try {
        l();
      } finally {
        ru(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function rm(l, n, u) {
    return u === void 0 || Mu & 1073741824 ? l.memoizedState = n : (l.memoizedState = u, l = jc(), me.lanes |= l, Oi |= l, u);
  }
  function O0(l, n, u, c) {
    return Cl(u, n) ? u : Au.current !== null ? (l = rm(l, u, c), Cl(l, n) || (Et = !0), l) : Mu & 42 ? (l = jc(), me.lanes |= l, Oi |= l, n) : (Et = !0, l.memoizedState = u);
  }
  function dm(l, n, u, c, s) {
    var r = oe.p;
    oe.p = r !== 0 && 8 > r ? r : 8;
    var m = ne.T, v = {};
    ne.T = v, gm(l, !1, n, u);
    try {
      var g = s(), R = ne.S;
      if (R !== null && R(v, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var N = am(
          g,
          c
        );
        bi(
          l,
          n,
          N,
          Yl(l)
        );
      } else
        bi(
          l,
          n,
          c,
          Yl(l)
        );
    } catch (w) {
      bi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: w },
        Yl()
      );
    } finally {
      oe.p = r, ne.T = m;
    }
  }
  function Fv() {
  }
  function xu(l, n, u, c) {
    if (l.tag !== 5) throw Error(H(476));
    var s = na(l).queue;
    dm(
      l,
      s,
      n,
      ot,
      u === null ? Fv : function() {
        return hm(l), u(c);
      }
    );
  }
  function na(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ot,
      baseState: ot,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: ot
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
  function hm(l) {
    var n = na(l).next.queue;
    bi(l, n, {}, Yl());
  }
  function mm() {
    return Tl(oa);
  }
  function ym() {
    return Bt().memoizedState;
  }
  function vm() {
    return Bt().memoizedState;
  }
  function M0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Yl();
          l = ju(u);
          var c = Vu(n, l, u);
          c !== null && (kt(c, n, u), Qo(c, n, u)), n = { cache: lm() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function pm(l, n, u) {
    var c = Yl();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, td(l) ? bm(n, u) : (u = Kf(l, n, u, c), u !== null && (kt(u, l, c), Sm(u, n, c)));
  }
  function ed(l, n, u) {
    var c = Yl();
    bi(l, n, u, c);
  }
  function bi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (td(l)) bm(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Cl(v, m))
            return bo(l, n, s, 0), Ie === null && Br(), !1;
        } catch {
        } finally {
        }
      if (u = Kf(l, n, s, c), u !== null)
        return kt(u, l, c), Sm(u, n, c), !0;
    }
    return !1;
  }
  function gm(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: tf(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, td(l)) {
      if (n) throw Error(H(479));
    } else
      n = Kf(
        l,
        u,
        c,
        2
      ), n !== null && kt(n, l, 2);
  }
  function td(l) {
    var n = l.alternate;
    return l === me || n !== null && n === me;
  }
  function bm(l, n) {
    pi = Mo = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Sm(l, n, u) {
    if (u & 4194176) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Th(l, u);
    }
  }
  var nl = {
    readContext: Tl,
    use: Co,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht
  };
  nl.useCacheRefresh = Ht, nl.useMemoCache = Ht, nl.useHostTransitionStatus = Ht, nl.useFormState = Ht, nl.useActionState = Ht, nl.useOptimistic = Ht;
  var Si = {
    readContext: Tl,
    use: Co,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Tl,
    useEffect: om,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, os(
        4194308,
        4,
        Yo.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return os(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      os(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (Sc) {
        ru(!0);
        try {
          l();
        } finally {
          ru(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var s = u(n);
        if (Sc) {
          ru(!0);
          try {
            u(n);
          } finally {
            ru(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = pm.bind(
        null,
        me,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = as(l);
      var n = l.queue, u = ed.bind(null, me, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ir,
    useDeferredValue: function(l, n) {
      var u = ql();
      return rm(u, l, n);
    },
    useTransition: function() {
      var l = as(!1);
      return l = dm.bind(
        null,
        me,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = me, s = ql();
      if (je) {
        if (u === void 0)
          throw Error(H(407));
        u = u();
      } else {
        if (u = n(), Ie === null) throw Error(H(349));
        Ye & 60 || D0(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, om(ls.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Vn(
        9,
        Kr.bind(
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
      var l = ql(), n = Ie.identifierPrefix;
      if (je) {
        var u = xn, c = Cn;
        u = (c & ~(1 << 32 - Il(c) - 1)).toString(32) + u, n = ":" + n + "R" + u, u = jt++, 0 < u && (n += "H" + u.toString(32)), n += ":";
      } else
        u = R0++, n = ":" + n + "r" + u.toString(32) + ":";
      return l.memoizedState = n;
    },
    useCacheRefresh: function() {
      return ql().memoizedState = M0.bind(
        null,
        me
      );
    }
  };
  Si.useMemoCache = Lr, Si.useHostTransitionStatus = mm, Si.useFormState = $r, Si.useActionState = $r, Si.useOptimistic = function(l) {
    var n = ql();
    n.memoizedState = n.baseState = l;
    var u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return n.queue = u, n = gm.bind(
      null,
      me,
      !0,
      u
    ), u.dispatch = n, [l, n];
  };
  var Bu = {
    readContext: Tl,
    use: Co,
    useCallback: Pr,
    useContext: Tl,
    useEffect: Qa,
    useImperativeHandle: Rc,
    useInsertionEffect: fm,
    useLayoutEffect: Fr,
    useMemo: sm,
    useReducer: xo,
    useRef: qo,
    useState: function() {
      return xo(Nn);
    },
    useDebugValue: Ir,
    useDeferredValue: function(l, n) {
      var u = Bt();
      return O0(
        u,
        ke.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = xo(Nn)[0], n = Bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Ac(l),
        n
      ];
    },
    useSyncExternalStore: _r,
    useId: ym
  };
  Bu.useCacheRefresh = vm, Bu.useMemoCache = Lr, Bu.useHostTransitionStatus = mm, Bu.useFormState = Hu, Bu.useActionState = Hu, Bu.useOptimistic = function(l, n) {
    var u = Bt();
    return Jr(u, ke, l, n);
  };
  var zc = {
    readContext: Tl,
    use: Co,
    useCallback: Pr,
    useContext: Tl,
    useEffect: Qa,
    useImperativeHandle: Rc,
    useInsertionEffect: fm,
    useLayoutEffect: Fr,
    useMemo: sm,
    useReducer: on,
    useRef: qo,
    useState: function() {
      return on(Nn);
    },
    useDebugValue: Ir,
    useDeferredValue: function(l, n) {
      var u = Bt();
      return ke === null ? rm(u, l, n) : O0(
        u,
        ke.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = on(Nn)[0], n = Bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Ac(l),
        n
      ];
    },
    useSyncExternalStore: _r,
    useId: ym
  };
  zc.useCacheRefresh = vm, zc.useMemoCache = Lr, zc.useHostTransitionStatus = mm, zc.useFormState = cs, zc.useActionState = cs, zc.useOptimistic = function(l, n) {
    var u = Bt();
    return ke !== null ? Jr(u, ke, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
  };
  function fs(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Ee({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tm = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? Z(l) === l : !1;
    },
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Yl(), s = ju(c);
      s.payload = n, u != null && (s.callback = u), n = Vu(l, s, c), n !== null && (kt(n, l, c), Qo(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Yl(), s = ju(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Vu(l, s, c), n !== null && (kt(n, l, c), Qo(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Yl(), c = ju(u);
      c.tag = 2, n != null && (c.callback = n), n = Vu(l, c, u), n !== null && (kt(n, l, u), Qo(n, l, u));
    }
  };
  function ga(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !bu(u, c) || !bu(s, r) : !0;
  }
  function Em(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tm.enqueueReplaceState(n, n.state, null);
  }
  function ul(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Ee({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var ss = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function U0(l) {
    ss(l);
  }
  function fn(l) {
    console.error(l);
  }
  function Am(l) {
    ss(l);
  }
  function qu(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Rm(l, n, u) {
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
  function sn(l, n, u) {
    return u = ju(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      qu(l, n);
    }, u;
  }
  function ld(l) {
    return l = ju(l), l.tag = 3, l;
  }
  function ad(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Rm(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Rm(n, u, c), typeof s != "function" && (Zu === null ? Zu = /* @__PURE__ */ new Set([this]) : Zu.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Ti(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && et(
        n,
        u,
        s,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return un === null ? Dd() : u.alternate === null && gt === 0 && (gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Yr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Jm(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Yr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Jm(l, c, s)), !1;
        }
        throw Error(H(435, u.tag));
      }
      return Jm(l, c, s), Dd(), !1;
    }
    if (je)
      return n = pa.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== $h && (l = Error(H(422), { cause: c }), Eo(al(l, u)))) : (c !== $h && (n = Error(H(423), {
        cause: c
      }), Eo(
        al(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = al(c, u), s = sn(
        l.stateNode,
        c,
        s
      ), vs(l, s), gt !== 4 && (gt = 2)), !1;
    var r = Error(H(520), { cause: c });
    if (r = al(r, u), Es === null ? Es = [r] : Es.push(r), gt !== 4 && (gt = 2), n === null) return !0;
    c = al(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = sn(u.stateNode, c, l), vs(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Zu === null || !Zu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = ld(s), ad(
              s,
              l,
              u,
              c
            ), vs(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var zm = Error(H(461)), Et = !1;
  function il(l, n, u, c) {
    n.child = l === null ? jr(n, null, u, c) : qn(
      n,
      l.child,
      u,
      c
    );
  }
  function No(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return Nu(n), c = Ec(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = Qr(), l !== null && !Et ? (es(l, n, s), wn(l, n, s)) : (je && v && qr(n), n.flags |= 1, il(l, n, c, s), n.child);
  }
  function Dc(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !bd(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Dm(
        l,
        n,
        r,
        c,
        s
      )) : (l = Ko(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !wo(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : bu, u(m, c) && l.ref === n.ref)
        return wn(l, n, s);
    }
    return n.flags |= 1, l = mn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Dm(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (bu(r, c) && l.ref === n.ref)
        if (Et = !1, n.pendingProps = c = r, wo(l, s))
          l.flags & 131072 && (Et = !0);
        else
          return n.lanes = l.lanes, wn(l, n, s);
    }
    return Go(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Om(l, n, u) {
    var c = n.pendingProps, s = c.children, r = (n.stateNode._pendingVisibility & 2) !== 0, m = l !== null ? l.memoizedState : null;
    if (Vo(l, n), c.mode === "hidden" || r) {
      if (n.flags & 128) {
        if (c = m !== null ? m.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return jo(
          l,
          n,
          c,
          u
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pf(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Ih(n, m) : Vr(), Ph(n);
      else
        return n.lanes = n.childLanes = 536870912, jo(
          l,
          n,
          m !== null ? m.baseLanes | u : u,
          u
        );
    } else
      m !== null ? (Pf(n, m.cachePool), Ih(n, m), Ru(), n.memoizedState = null) : (l !== null && Pf(n, null), Vr(), Ru());
    return il(l, n, s, u), n.child;
  }
  function jo(l, n, u, c) {
    var s = Ou();
    return s = s === null ? null : { parent: _t._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Pf(n, null), Vr(), Ph(n), l !== null && et(l, n, c, !0), null;
  }
  function Vo(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(H(284));
      (l === null || l.ref !== u) && (n.flags |= 2097664);
    }
  }
  function Go(l, n, u, c, s) {
    return Nu(n), u = Ec(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Qr(), l !== null && !Et ? (es(l, n, s), wn(l, n, s)) : (je && c && qr(n), n.flags |= 1, il(l, n, u, s), n.child);
  }
  function Mm(l, n, u, c, s, r) {
    return Nu(n), n.updateQueue = null, u = im(
      n,
      c,
      u,
      s
    ), wr(l), c = Qr(), l !== null && !Et ? (es(l, n, r), wn(l, n, r)) : (je && c && qr(n), n.flags |= 1, il(l, n, u, r), n.child);
  }
  function Um(l, n, u, c, s) {
    if (Nu(n), n.stateNode === null) {
      var r = Un, m = u.contextType;
      typeof m == "object" && m !== null && (r = Tl(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Tm, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, ys(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? Tl(m) : Un, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (fs(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Tm.enqueueReplaceState(r, r.state, null), gs(n, c, r, s), Lo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, g = ul(u, v);
      r.props = g;
      var R = r.context, N = u.contextType;
      m = Un, typeof N == "object" && N !== null && (m = Tl(N));
      var w = u.getDerivedStateFromProps;
      N = typeof w == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, N || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || R !== m) && Em(
        n,
        r,
        c,
        m
      ), ba = !1;
      var U = n.memoizedState;
      r.state = U, gs(n, c, r, s), Lo(), R = n.memoizedState, v || U !== R || ba ? (typeof w == "function" && (fs(
        n,
        u,
        w,
        c
      ), R = n.memoizedState), (g = ba || ga(
        n,
        u,
        g,
        c,
        U,
        R,
        m
      )) ? (N || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = R), r.props = c, r.state = R, r.context = m, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Ai(l, n), m = n.memoizedProps, N = ul(u, m), r.props = N, w = n.pendingProps, U = r.context, R = u.contextType, g = Un, typeof R == "object" && R !== null && (g = Tl(R)), v = u.getDerivedStateFromProps, (R = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== w || U !== g) && Em(
        n,
        r,
        c,
        g
      ), ba = !1, U = n.memoizedState, r.state = U, gs(n, c, r, s), Lo();
      var q = n.memoizedState;
      m !== w || U !== q || ba || l !== null && l.dependencies !== null && ms(l.dependencies) ? (typeof v == "function" && (fs(
        n,
        u,
        v,
        c
      ), q = n.memoizedState), (N = ba || ga(
        n,
        u,
        N,
        c,
        U,
        q,
        g
      ) || l !== null && l.dependencies !== null && ms(l.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, q, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        q,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = q), r.props = c, r.state = q, r.context = g, c = N) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Vo(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = qn(
      n,
      l.child,
      null,
      s
    ), n.child = qn(
      n,
      null,
      u,
      s
    )) : il(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = wn(
      l,
      n,
      s
    ), l;
  }
  function H0(l, n, u, c) {
    return To(), n.flags |= 256, il(l, n, u, c), n.child;
  }
  var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gn(l) {
    return { baseLanes: l, cachePool: um() };
  }
  function nd(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Za), l;
  }
  function ud(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Nt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (je) {
        if (s ? Yn(n) : Ru(), je) {
          var v = Lt, g;
          if (g = v) {
            e: {
              for (g = v, v = nn; g.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (g = fl(
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
              treeContext: Hn !== null ? { id: Cn, overflow: xn } : null,
              retryLane: 536870912
            }, g = Jt(
              18,
              null,
              null,
              0
            ), g.stateNode = v, g.return = n, n.child = g, Sl = n, Lt = null, g = !0) : g = !1;
          }
          g || hi(n);
        }
        if (v = n.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return v.data === "$!" ? n.lanes = 16 : n.lanes = 536870912, null;
        cn(n);
      }
      return v = c.children, c = c.fallback, s ? (Ru(), s = n.mode, v = Yu(
        { mode: "hidden", children: v },
        s
      ), c = At(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, s = n.child, s.memoizedState = Gn(u), s.childLanes = nd(
        l,
        m,
        u
      ), n.memoizedState = rs, c) : (Yn(n), Xo(n, v));
    }
    if (g = l.memoizedState, g !== null && (v = g.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Yn(n), n.flags &= -257, n = id(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ru(), n.child = l.child, n.flags |= 128, n = null) : (Ru(), s = c.fallback, v = n.mode, c = Yu(
          { mode: "visible", children: c.children },
          v
        ), s = At(
          s,
          v,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, qn(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Gn(u), c.childLanes = nd(
          l,
          m,
          u
        ), n.memoizedState = rs, n = s);
      else if (Yn(n), v.data === "$!") {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var R = m.dgst;
        m = R, c = Error(H(419)), c.stack = "", c.digest = m, Eo({ value: c, source: null, stack: null }), n = id(
          l,
          n,
          u
        );
      } else if (Et || et(l, n, u, !1), m = (u & l.childLanes) !== 0, Et || m) {
        if (m = Ie, m !== null) {
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
            throw g.retryLane = c, Mn(l, c), kt(m, l, c), zm;
        }
        v.data === "$?" || Dd(), n = id(
          l,
          n,
          u
        );
      } else
        v.data === "$?" ? (n.flags |= 128, n.child = l.child, n = tp.bind(
          null,
          l
        ), v._reactRetry = n, n = null) : (l = g.treeContext, Lt = fl(
          v.nextSibling
        ), Sl = n, je = !0, wa = null, nn = !1, l !== null && (Bl[aa++] = Cn, Bl[aa++] = xn, Bl[aa++] = Hn, Cn = l.id, xn = l.overflow, Hn = n), n = Xo(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ru(), s = c.fallback, v = n.mode, g = l.child, R = g.sibling, c = mn(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 31457280, R !== null ? s = mn(R, s) : (s = At(
      s,
      v,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, v = l.child.memoizedState, v === null ? v = Gn(u) : (g = v.cachePool, g !== null ? (R = _t._currentValue, g = g.parent !== R ? { parent: R, pool: R } : g) : g = um(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: g
    }), s.memoizedState = v, s.childLanes = nd(
      l,
      m,
      u
    ), n.memoizedState = rs, c) : (Yn(n), u = l.child, l = u.sibling, u = mn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Xo(l, n) {
    return n = Yu(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Yu(l, n) {
    return V0(l, n, 0, null);
  }
  function id(l, n, u) {
    return qn(n, l.child, null, u), l = Xo(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function cd(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), _l(l.return, n, u);
  }
  function ds(l, n, u, c, s) {
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
  function Xn(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (il(l, n, c.children, u), c = Nt.current, c & 2)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && cd(l, u, n);
          else if (l.tag === 19)
            cd(l, u, n);
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
    switch (Ke(Nt, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Ff(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ds(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Ff(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ds(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        ds(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function wn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Oi |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (et(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(H(153));
    if (n.child !== null) {
      for (l = n.child, u = mn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = mn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function wo(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && ms(l)));
  }
  function hs(l, n, u) {
    switch (n.tag) {
      case 3:
        ei(n, n.stateNode.containerInfo), Ei(n, _t, l.memoizedState.cache), To();
        break;
      case 27:
      case 5:
        Je(n);
        break;
      case 4:
        ei(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ei(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Yn(n), n.flags |= 128, null) : u & n.child.childLanes ? ud(l, n, u) : (Yn(n), l = wn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Yn(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (et(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Xn(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ke(Nt, Nt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Om(l, n, u);
      case 24:
        Ei(n, _t, l.memoizedState.cache);
    }
    return wn(l, n, u);
  }
  function st(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Et = !0;
      else {
        if (!wo(l, u) && !(n.flags & 128))
          return Et = !1, hs(
            l,
            n,
            u
          );
        Et = !!(l.flags & 131072);
      }
    else
      Et = !1, je && n.flags & 1048576 && kh(n, So, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            bd(c) ? (l = ul(c, l), n.tag = 1, n = Um(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Go(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === se) {
                n.tag = 11, n = No(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Be) {
                n.tag = 14, n = Dc(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = dl(c) || c, Error(H(306, n, ""));
          }
        }
        return n;
      case 0:
        return Go(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ul(
          c,
          n.pendingProps
        ), Um(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (ei(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(H(387));
          var r = n.pendingProps;
          s = n.memoizedState, c = s.element, Ai(l, n), gs(n, r, null, u);
          var m = n.memoizedState;
          if (r = m.cache, Ei(n, _t, r), r !== s.cache && od(
            n,
            [_t],
            u,
            !0
          ), Lo(), r = m.element, s.isDehydrated)
            if (s = {
              element: r,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = H0(
                l,
                n,
                r,
                u
              );
              break e;
            } else if (r !== c) {
              c = al(
                Error(H(424)),
                n
              ), Eo(c), n = H0(
                l,
                n,
                r,
                u
              );
              break e;
            } else
              for (Lt = fl(
                n.stateNode.containerInfo.firstChild
              ), Sl = n, je = !0, wa = null, nn = !0, u = jr(
                n,
                null,
                r,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (To(), r === c) {
              n = wn(
                l,
                n,
                u
              );
              break e;
            }
            il(l, n, r, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Vo(l, n), l === null ? (u = J(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : je || (u = n.type, l = n.pendingProps, c = Hs(
          ra.current
        ).createElement(u), c[vl] = n, c[Pl] = l, ol(c, u, l), Qt(c), n.stateNode = c) : n.memoizedState = J(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Je(n), l === null && je && (c = n.stateNode = In(
          n.type,
          n.pendingProps,
          ra.current
        ), Sl = n, nn = !0, Lt = fl(
          c.firstChild
        )), c = n.pendingProps.children, l !== null || je ? il(
          l,
          n,
          c,
          u
        ) : n.child = qn(
          n,
          null,
          c,
          u
        ), Vo(l, n), n.child;
      case 5:
        return l === null && je && ((s = c = Lt) && (c = Yi(
          c,
          n.type,
          n.pendingProps,
          nn
        ), c !== null ? (n.stateNode = c, Sl = n, Lt = fl(
          c.firstChild
        ), nn = !1, s = !0) : s = !1), s || hi(n)), Je(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Cs(s, r) ? c = null : m !== null && Cs(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ec(
          l,
          n,
          z0,
          null,
          null,
          u
        ), oa._currentValue = s), Vo(l, n), il(l, n, c, u), n.child;
      case 6:
        return l === null && je && ((l = u = Lt) && (u = qs(
          u,
          n.pendingProps,
          nn
        ), u !== null ? (n.stateNode = u, Sl = n, Lt = null, l = !0) : l = !1), l || hi(n)), null;
      case 13:
        return ud(l, n, u);
      case 4:
        return ei(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = qn(
          n,
          null,
          c,
          u
        ) : il(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return No(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return il(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return il(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return il(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Ei(n, n.type, c.value), il(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Nu(n), s = Tl(s), c = c(s), n.flags |= 1, il(l, n, c, u), n.child;
      case 14:
        return Dc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Dm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Xn(l, n, u);
      case 22:
        return Om(l, n, u);
      case 24:
        return Nu(n), c = Tl(_t), l === null ? (s = Ou(), s === null && (s = Ie, r = lm(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, ys(n), Ei(n, _t, s)) : (l.lanes & u && (Ai(l, n), gs(n, null, null, u), Lo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Ei(n, _t, c)) : (c = r.cache, Ei(n, _t, c), c !== s.cache && od(
          n,
          [_t],
          u,
          !0
        ))), il(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(H(156, n.tag));
  }
  var Hm = Ml(null), Oc = null, Qn = null;
  function Ei(l, n, u) {
    Ke(Hm, n._currentValue), n._currentValue = u;
  }
  function Ln(l) {
    l._currentValue = Hm.current, mt(Hm);
  }
  function _l(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function od(l, n, u, c) {
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
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), _l(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(H(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), _l(m, u, l), m = null;
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
  function et(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(H(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Cl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Wa.current) {
        if (m = s.alternate, m === null) throw Error(H(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(oa) : l = [oa]);
      }
      s = s.return;
    }
    l !== null && od(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function ms(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Cl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Nu(l) {
    Oc = l, Qn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Tl(l) {
    return Zn(Oc, l);
  }
  function fd(l, n) {
    return Oc === null && Nu(l), Zn(l, n);
  }
  function Zn(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Qn === null) {
      if (l === null) throw Error(H(308));
      Qn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Qn = Qn.next = n;
    return u;
  }
  var ba = !1;
  function ys(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ai(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ju(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Vu(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, pt & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = we(l), Zl(l, null, u), n;
    }
    return bo(l, c, n, u), we(l);
  }
  function Qo(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194176) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Th(l, u);
    }
  }
  function vs(l, n) {
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
  var ps = !1;
  function Lo() {
    if (ps) {
      var l = bc;
      if (l !== null) throw l;
    }
  }
  function gs(l, n, u, c) {
    ps = !1;
    var s = l.updateQueue;
    ba = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var g = v, R = g.next;
      g.next = null, m === null ? r = R : m.next = R, m = g;
      var N = l.alternate;
      N !== null && (N = N.updateQueue, v = N.lastBaseUpdate, v !== m && (v === null ? N.firstBaseUpdate = R : v.next = R, N.lastBaseUpdate = g));
    }
    if (r !== null) {
      var w = s.baseState;
      m = 0, N = R = g = null, v = r;
      do {
        var U = v.lane & -536870913, q = U !== v.lane;
        if (q ? (Ye & U) === U : (c & U) === U) {
          U !== 0 && U === Du && (ps = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = l, de = v;
            U = n;
            var rt = u;
            switch (de.tag) {
              case 1:
                if ($ = de.payload, typeof $ == "function") {
                  w = $.call(rt, w, U);
                  break e;
                }
                w = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = de.payload, U = typeof $ == "function" ? $.call(rt, w, U) : $, U == null) break e;
                w = Ee({}, w, U);
                break e;
              case 2:
                ba = !0;
            }
          }
          U = v.callback, U !== null && (l.flags |= 64, q && (l.flags |= 8192), q = s.callbacks, q === null ? s.callbacks = [U] : q.push(U));
        } else
          q = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, N === null ? (R = N = q, g = w) : N = N.next = q, m |= U;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          q = v, v = q.next, q.next = null, s.lastBaseUpdate = q, s.shared.pending = null;
        }
      } while (!0);
      N === null && (g = w), s.baseState = g, s.firstBaseUpdate = R, s.lastBaseUpdate = N, r === null && (s.shared.lanes = 0), Oi |= m, l.lanes = m, l.memoizedState = w;
    }
  }
  function C0(l, n) {
    if (typeof l != "function")
      throw Error(H(191, l));
    l.call(n);
  }
  function Cm(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        C0(u[l], n);
  }
  function Zo(l, n) {
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
  function Ri(l, n, u) {
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
  function Mc(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Cm(n, u);
      } catch (c) {
        Pe(l, l.return, c);
      }
    }
  }
  function bs(l, n, u) {
    u.props = ul(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Pe(l, n, c);
    }
  }
  function zi(l, n) {
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
  function Kl(l, n) {
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
  function x0(l) {
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
  function B0(l, n, u) {
    try {
      var c = l.stateNode;
      k0(c, l.type, u, n), c[Pl] = n;
    } catch (s) {
      Pe(l, l.return, s);
    }
  }
  function xm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function Gu(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || xm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.nodeType === 8 ? u.parentNode.insertBefore(l, n) : u.insertBefore(l, n) : (u.nodeType === 8 ? (n = u.parentNode, n.insertBefore(l, u)) : (n = u, n.appendChild(l)), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = qi));
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (sd(l, n, u), l = l.sibling; l !== null; )
        sd(l, n, u), l = l.sibling;
  }
  function _e(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (_e(l, n, u), l = l.sibling; l !== null; )
        _e(l, n, u), l = l.sibling;
  }
  var rn = !1, Ct = !1, rd = !1, q0 = typeof WeakSet == "function" ? WeakSet : Set, cl = null, dd = !1;
  function Y0(l, n) {
    if (l = l.containerInfo, Nd = Vs, l = _h(l), Hr(l)) {
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
            var m = 0, v = -1, g = -1, R = 0, N = 0, w = l, U = null;
            t: for (; ; ) {
              for (var q; w !== u || s !== 0 && w.nodeType !== 3 || (v = m + s), w !== r || c !== 0 && w.nodeType !== 3 || (g = m + c), w.nodeType === 3 && (m += w.nodeValue.length), (q = w.firstChild) !== null; )
                U = w, w = q;
              for (; ; ) {
                if (w === l) break t;
                if (U === u && ++R === s && (v = m), U === r && ++N === c && (g = m), (q = w.nextSibling) !== null) break;
                w = U, U = w.parentNode;
              }
              w = q;
            }
            u = v === -1 || g === -1 ? null : { start: v, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (jd = { focusedElem: l, selectionRange: u }, Vs = !1, cl = n; cl !== null; )
      if (n = cl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, cl = l;
      else
        for (; cl !== null; ) {
          switch (n = cl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var $ = ul(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    $,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (de) {
                  Pe(
                    u,
                    u.return,
                    de
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  yn(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yn(l);
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
              if (l & 1024) throw Error(H(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, cl = l;
            break;
          }
          cl = n.return;
        }
    return $ = dd, dd = !1, $;
  }
  function Bm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        _n(l, u), c & 4 && Zo(5, u);
        break;
      case 1:
        if (_n(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (v) {
              Pe(u, u.return, v);
            }
          else {
            var s = ul(
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
        c & 64 && Mc(u), c & 512 && zi(u, u.return);
        break;
      case 3:
        if (_n(l, u), c & 64 && (c = u.updateQueue, c !== null)) {
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
            Cm(c, l);
          } catch (v) {
            Pe(u, u.return, v);
          }
        }
        break;
      case 26:
        _n(l, u), c & 512 && zi(u, u.return);
        break;
      case 27:
      case 5:
        _n(l, u), n === null && c & 4 && x0(u), c & 512 && zi(u, u.return);
        break;
      case 12:
        _n(l, u);
        break;
      case 13:
        _n(l, u), c & 4 && _o(l, u);
        break;
      case 22:
        if (s = u.memoizedState !== null || rn, !s) {
          n = n !== null && n.memoizedState !== null || Ct;
          var r = rn, m = Ct;
          rn = s, (Ct = n) && !m ? Di(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : _n(l, u), rn = r, Ct = m;
        }
        c & 512 && (u.memoizedProps.mode === "manual" ? zi(u, u.return) : Kl(u, u.return));
        break;
      default:
        _n(l, u);
    }
  }
  function qm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, qm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && dr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yt = null, Sa = !1;
  function Xu(l, n, u) {
    for (u = u.child; u !== null; )
      dn(l, n, u), u = u.sibling;
  }
  function dn(l, n, u) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
      try {
        Ot.onCommitFiberUnmount(Ul, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Ct || Kl(u, n), Xu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Ct || Kl(u, n);
        var c = yt, s = Sa;
        for (yt = u.stateNode, Xu(
          l,
          n,
          u
        ), u = u.stateNode, n = u.attributes; n.length; )
          u.removeAttributeNode(n[0]);
        dr(u), yt = c, Sa = s;
        break;
      case 5:
        Ct || Kl(u, n);
      case 6:
        s = yt;
        var r = Sa;
        if (yt = null, Xu(
          l,
          n,
          u
        ), yt = s, Sa = r, yt !== null)
          if (Sa)
            try {
              l = yt, c = u.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(c) : l.removeChild(c);
            } catch (m) {
              Pe(
                u,
                n,
                m
              );
            }
          else
            try {
              yt.removeChild(u.stateNode);
            } catch (m) {
              Pe(
                u,
                n,
                m
              );
            }
        break;
      case 18:
        yt !== null && (Sa ? (n = yt, u = u.stateNode, n.nodeType === 8 ? Bs(
          n.parentNode,
          u
        ) : n.nodeType === 1 && Bs(n, u), sf(n)) : Bs(yt, u.stateNode));
        break;
      case 4:
        c = yt, s = Sa, yt = u.stateNode.containerInfo, Sa = !0, Xu(
          l,
          n,
          u
        ), yt = c, Sa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ct || Ri(2, u, n), Ct || Ri(4, u, n), Xu(
          l,
          n,
          u
        );
        break;
      case 1:
        Ct || (Kl(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && bs(
          u,
          n,
          c
        )), Xu(
          l,
          n,
          u
        );
        break;
      case 21:
        Xu(
          l,
          n,
          u
        );
        break;
      case 22:
        Ct || Kl(u, n), Ct = (c = Ct) || u.memoizedState !== null, Xu(
          l,
          n,
          u
        ), Ct = c;
        break;
      default:
        Xu(
          l,
          n,
          u
        );
    }
  }
  function _o(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        sf(l);
      } catch (u) {
        Pe(n, n.return, u);
      }
  }
  function N0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new q0()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new q0()), n;
      default:
        throw Error(H(435, l.tag));
    }
  }
  function hd(l, n) {
    var u = N0(l);
    n.forEach(function(c) {
      var s = km.bind(null, l, c);
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
              yt = v.stateNode, Sa = !1;
              break e;
            case 3:
              yt = v.stateNode.containerInfo, Sa = !0;
              break e;
            case 4:
              yt = v.stateNode.containerInfo, Sa = !0;
              break e;
          }
          v = v.return;
        }
        if (yt === null) throw Error(H(160));
        dn(r, m, s), yt = null, Sa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        md(n, l), n = n.sibling;
  }
  var La = null;
  function md(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ta(n, l), Ea(l), c & 4 && (Ri(3, l, l.return), Zo(3, l), Ri(5, l, l.return));
        break;
      case 1:
        Ta(n, l), Ea(l), c & 512 && (Ct || u === null || Kl(u, u.return)), c & 64 && rn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = La;
        if (Ta(n, l), Ea(l), c & 512 && (Ct || u === null || Kl(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Ii] || r[vl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ol(r, c, u), r[vl] = l, Qt(r), c = r;
                      break e;
                    case "link":
                      var m = Ku(
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
                      r = s.createElement(c), ol(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Ku(
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
                      r = s.createElement(c), ol(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(H(468, c));
                  }
                  r[vl] = l, Qt(r), c = r;
                }
                l.stateNode = c;
              } else
                Al(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Ns(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Al(
              s,
              l.type,
              l.stateNode
            ) : Ns(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && B0(
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
              var R = g.nextSibling, N = g.nodeName;
              g[Ii] || N === "HEAD" || N === "BODY" || N === "SCRIPT" || N === "STYLE" || N === "LINK" && g.rel.toLowerCase() === "stylesheet" || s.removeChild(g), g = R;
            }
            for (var w = l.type, U = s.attributes; U.length; )
              s.removeAttributeNode(U[0]);
            ol(s, w, r), s[vl] = l, s[Pl] = r;
          } catch ($) {
            Pe(l, l.return, $);
          }
        }
      case 5:
        if (Ta(n, l), Ea(l), c & 512 && (Ct || u === null || Kl(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Dn(s, "");
          } catch ($) {
            Pe(l, l.return, $);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, B0(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (rd = !0);
        break;
      case 6:
        if (Ta(n, l), Ea(l), c & 4) {
          if (l.stateNode === null)
            throw Error(H(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch ($) {
            Pe(l, l.return, $);
          }
        }
        break;
      case 3:
        if (Zc = null, s = La, La = Gd(n.containerInfo), Ta(n, l), La = s, Ea(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            sf(n.containerInfo);
          } catch ($) {
            Pe(l, l.return, $);
          }
        rd && (rd = !1, yd(l));
        break;
      case 4:
        c = La, La = Gd(
          l.stateNode.containerInfo
        ), Ta(n, l), Ea(l), La = c;
        break;
      case 12:
        Ta(n, l), Ea(l);
        break;
      case 13:
        Ta(n, l), Ea(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Ad = re()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, hd(l, c)));
        break;
      case 22:
        if (c & 512 && (Ct || u === null || Kl(u, u.return)), g = l.memoizedState !== null, R = u !== null && u.memoizedState !== null, N = rn, w = Ct, rn = N || g, Ct = w || R, Ta(n, l), Ct = w, rn = N, Ea(l), n = l.stateNode, n._current = l, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, c & 8192 && (n._visibility = g ? n._visibility & -2 : n._visibility | 1, g && (n = rn || Ct, u === null || R || n || Uc(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
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
                    var q = v != null && v.hasOwnProperty("display") ? v.display : null;
                    m.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch ($) {
                  Pe(R, R.return, $);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = g ? "" : R.memoizedProps;
                } catch ($) {
                  Pe(R, R.return, $);
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, hd(l, u))));
        break;
      case 19:
        Ta(n, l), Ea(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, hd(l, c)));
        break;
      case 21:
        break;
      default:
        Ta(n, l), Ea(l);
    }
  }
  function Ea(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        if (l.tag !== 27) {
          e: {
            for (var u = l.return; u !== null; ) {
              if (xm(u)) {
                var c = u;
                break e;
              }
              u = u.return;
            }
            throw Error(H(160));
          }
          switch (c.tag) {
            case 27:
              var s = c.stateNode, r = Gu(l);
              _e(l, r, s);
              break;
            case 5:
              var m = c.stateNode;
              c.flags & 32 && (Dn(m, ""), c.flags &= -33);
              var v = Gu(l);
              _e(l, v, m);
              break;
            case 3:
            case 4:
              var g = c.stateNode.containerInfo, R = Gu(l);
              sd(
                l,
                R,
                g
              );
              break;
            default:
              throw Error(H(161));
          }
        }
      } catch (N) {
        Pe(l, l.return, N);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function yd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        yd(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function _n(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Bm(l, n.alternate, n), n = n.sibling;
  }
  function Uc(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ri(4, n, n.return), Uc(n);
          break;
        case 1:
          Kl(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && bs(
            n,
            n.return,
            u
          ), Uc(n);
          break;
        case 26:
        case 27:
        case 5:
          Kl(n, n.return), Uc(n);
          break;
        case 22:
          Kl(n, n.return), n.memoizedState === null && Uc(n);
          break;
        default:
          Uc(n);
      }
      l = l.sibling;
    }
  }
  function Di(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Di(
            s,
            r,
            u
          ), Zo(4, r);
          break;
        case 1:
          if (Di(
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
                  C0(g[s], v);
            } catch (R) {
              Pe(c, c.return, R);
            }
          }
          u && m & 64 && Mc(r), zi(r, r.return);
          break;
        case 26:
        case 27:
        case 5:
          Di(
            s,
            r,
            u
          ), u && c === null && m & 4 && x0(r), zi(r, r.return);
          break;
        case 12:
          Di(
            s,
            r,
            u
          );
          break;
        case 13:
          Di(
            s,
            r,
            u
          ), u && m & 4 && _o(s, r);
          break;
        case 22:
          r.memoizedState === null && Di(
            s,
            r,
            u
          ), zi(r, r.return);
          break;
        default:
          Di(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function vd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Oo(u));
  }
  function De(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Oo(l));
  }
  function Kn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        pd(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function pd(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(
          l,
          n,
          u,
          c
        ), s & 2048 && Zo(9, n);
        break;
      case 3:
        Kn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Oo(l)));
        break;
      case 12:
        if (s & 2048) {
          Kn(
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
          Kn(
            l,
            n,
            u,
            c
          );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, n.memoizedState !== null ? r._visibility & 4 ? Kn(
          l,
          n,
          u,
          c
        ) : Cc(l, n) : r._visibility & 4 ? Kn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 4, Hc(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && vd(
          n.alternate,
          n
        );
        break;
      case 24:
        Kn(
          l,
          n,
          u,
          c
        ), s & 2048 && De(n.alternate, n);
        break;
      default:
        Kn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Hc(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, v = u, g = c, R = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Hc(
            r,
            m,
            v,
            g,
            s
          ), Zo(8, m);
          break;
        case 23:
          break;
        case 22:
          var N = m.stateNode;
          m.memoizedState !== null ? N._visibility & 4 ? Hc(
            r,
            m,
            v,
            g,
            s
          ) : Cc(
            r,
            m
          ) : (N._visibility |= 4, Hc(
            r,
            m,
            v,
            g,
            s
          )), s && R & 2048 && vd(
            m.alternate,
            m
          );
          break;
        case 24:
          Hc(
            r,
            m,
            v,
            g,
            s
          ), s && R & 2048 && De(m.alternate, m);
          break;
        default:
          Hc(
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
  function Cc(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Cc(u, c), s & 2048 && vd(
              c.alternate,
              c
            );
            break;
          case 24:
            Cc(u, c), s & 2048 && De(c.alternate, c);
            break;
          default:
            Cc(u, c);
        }
        n = n.sibling;
      }
  }
  var wu = 8192;
  function Qu(l) {
    if (l.subtreeFlags & wu)
      for (l = l.child; l !== null; )
        xc(l), l = l.sibling;
  }
  function xc(l) {
    switch (l.tag) {
      case 26:
        Qu(l), l.flags & wu && l.memoizedState !== null && rp(
          La,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Qu(l);
        break;
      case 3:
      case 4:
        var n = La;
        La = Gd(l.stateNode.containerInfo), Qu(l), La = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = wu, wu = 16777216, Qu(l), wu = n) : Qu(l));
        break;
      default:
        Qu(l);
    }
  }
  function Ym(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Bc(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          cl = c, hn(
            c,
            l
          );
        }
      Ym(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Kt(l), l = l.sibling;
  }
  function Kt(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Bc(l), l.flags & 2048 && Ri(9, l, l.return);
        break;
      case 3:
        Bc(l);
        break;
      case 12:
        Bc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -5, gd(l)) : Bc(l);
        break;
      default:
        Bc(l);
    }
  }
  function gd(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          cl = c, hn(
            c,
            l
          );
        }
      Ym(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ri(8, n, n.return), gd(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 4 && (u._visibility &= -5, gd(n));
          break;
        default:
          gd(n);
      }
      l = l.sibling;
    }
  }
  function hn(l, n) {
    for (; cl !== null; ) {
      var u = cl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ri(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Oo(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, cl = c;
      else
        e: for (u = l; cl !== null; ) {
          c = cl;
          var s = c.sibling, r = c.return;
          if (qm(c), c === u) {
            cl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, cl = s;
            break e;
          }
          cl = r;
        }
    }
  }
  function j0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Jt(l, n, u, c) {
    return new j0(l, n, u, c);
  }
  function bd(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function mn(l, n) {
    var u = l.alternate;
    return u === null ? (u = Jt(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 31457280, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function $e(l, n) {
    l.flags &= 31457282;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Ko(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") bd(l) && (m = 1);
    else if (typeof l == "string")
      m = ca(
        l,
        u,
        ml.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case L:
          return At(u.children, s, r, n);
        case St:
          m = 8, s |= 24;
          break;
        case sa:
          return l = Jt(12, u, n, s | 2), l.elementType = sa, l.lanes = r, l;
        case tt:
          return l = Jt(13, u, n, s), l.elementType = tt, l.lanes = r, l;
        case ct:
          return l = Jt(19, u, n, s), l.elementType = ct, l.lanes = r, l;
        case Ql:
          return V0(u, s, r, n);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
              case Yt:
                m = 10;
                break e;
              case Xe:
                m = 9;
                break e;
              case se:
                m = 11;
                break e;
              case Be:
                m = 14;
                break e;
              case ae:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            H(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Jt(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function At(l, n, u, c) {
    return l = Jt(7, l, c, n), l.lanes = u, l;
  }
  function V0(l, n, u, c) {
    l = Jt(22, l, c, n), l.elementType = Ql, l.lanes = u;
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var r = s._current;
        if (r === null) throw Error(H(456));
        if (!(s._pendingVisibility & 2)) {
          var m = Mn(r, 2);
          m !== null && (s._pendingVisibility |= 2, kt(m, r, 2));
        }
      },
      attach: function() {
        var r = s._current;
        if (r === null) throw Error(H(456));
        if (s._pendingVisibility & 2) {
          var m = Mn(r, 2);
          m !== null && (s._pendingVisibility &= -3, kt(m, r, 2));
        }
      }
    };
    return l.stateNode = s, l;
  }
  function Sd(l, n, u) {
    return l = Jt(6, l, null, n), l.lanes = u, l;
  }
  function Ss(l, n, u) {
    return n = Jt(
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
  function Jn(l) {
    l.flags |= 4;
  }
  function Aa(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vi(n)) {
      if (n = pa.current, n !== null && ((Ye & 4194176) === Ye ? un !== null : (Ye & 62914560) !== Ye && !(Ye & 536870912) || n !== un))
        throw pc = Yr, kf;
      l.flags |= 8192;
    }
  }
  function Ts(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Xt() : 536870912, l.lanes |= n, Mi |= n);
  }
  function qc(l, n) {
    if (!je)
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
  function vt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 31457280, c |= s.flags & 31457280, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Td(l, n, u) {
    var c = n.pendingProps;
    switch (Jf(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(n), null;
      case 1:
        return vt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Ln(_t), ti(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (mc(n) ? Jn(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, wa !== null && (Xm(wa), wa = null))), vt(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Jn(n), u !== null ? (vt(n), Aa(n, u)) : (vt(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Jn(n), vt(n), Aa(n, u)) : (vt(n), n.flags &= -16777217) : (l.memoizedProps !== c && Jn(n), vt(n), n.flags &= -16777217), null;
      case 27:
        $i(n), u = ra.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return vt(n), null;
          }
          l = ml.current, mc(n) ? Wh(n) : (l = In(s, c, u), n.stateNode = l, Jn(n));
        }
        return vt(n), null;
      case 5:
        if ($i(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return vt(n), null;
          }
          if (l = ml.current, mc(n))
            Wh(n);
          else {
            switch (s = Hs(
              ra.current
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
            l[vl] = n, l[Pl] = c;
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
            e: switch (ol(l, u, c), u) {
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
            l && Jn(n);
          }
        }
        return vt(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(H(166));
          if (l = ra.current, mc(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Sl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ve(l.nodeValue, u)), l || hi(n);
          } else
            l = Hs(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return vt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = mc(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(H(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(H(317));
              s[vl] = n;
            } else
              To(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            vt(n), s = !1;
          } else
            wa !== null && (Xm(wa), wa = null), s = !0;
          if (!s)
            return n.flags & 256 ? (cn(n), n) : (cn(n), null);
        }
        if (cn(n), n.flags & 128)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Ts(n, n.updateQueue), vt(n), null;
      case 4:
        return ti(), l === null && Qc(n.stateNode.containerInfo), vt(n), null;
      case 10:
        return Ln(n.type), vt(n), null;
      case 19:
        if (mt(Nt), s = n.memoizedState, s === null) return vt(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) qc(s, !1);
          else {
            if (gt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = Ff(l), r !== null) {
                  for (n.flags |= 128, qc(s, !1), l = r.updateQueue, n.updateQueue = l, Ts(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    $e(u, l), u = u.sibling;
                  return Ke(
                    Nt,
                    Nt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && re() > As && (n.flags |= 128, c = !0, qc(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Ff(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Ts(n, l), qc(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !je)
                return vt(n), null;
            } else
              2 * re() - s.renderingStartTime > As && u !== 536870912 && (n.flags |= 128, c = !0, qc(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = re(), n.sibling = null, l = Nt.current, Ke(Nt, c ? l & 1 | 2 : l & 1), n) : (vt(n), null);
      case 22:
      case 23:
        return cn(n), Wf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (vt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : vt(n), u = n.updateQueue, u !== null && Ts(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && mt(vi), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Ln(_t), vt(n), null;
      case 25:
        return null;
    }
    throw Error(H(156, n.tag));
  }
  function G0(l, n) {
    switch (Jf(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Ln(_t), ti(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return $i(n), null;
      case 13:
        if (cn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(H(340));
          To();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return mt(Nt), null;
      case 4:
        return ti(), null;
      case 10:
        return Ln(n.type), null;
      case 22:
      case 23:
        return cn(n), Wf(), l !== null && mt(vi), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Ln(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function X0(l, n) {
    switch (Jf(n), n.tag) {
      case 3:
        Ln(_t), ti();
        break;
      case 26:
      case 27:
      case 5:
        $i(n);
        break;
      case 4:
        ti();
        break;
      case 13:
        cn(n);
        break;
      case 19:
        mt(Nt);
        break;
      case 10:
        Ln(n.type);
        break;
      case 22:
      case 23:
        cn(n), Wf(), l !== null && mt(vi);
        break;
      case 24:
        Ln(_t);
    }
  }
  var Ed = {
    getCacheForType: function(l) {
      var n = Tl(_t), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, w0 = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ie = null, Oe = null, Ye = 0, at = 0, Ra = null, kn = !1, Jo = !1, Nm = !1, Lu = 0, gt = 0, Oi = 0, Yc = 0, jm = 0, Za = 0, Mi = 0, Es = null, $n = null, ua = !1, Ad = 0, As = 1 / 0, Rs = null, Zu = null, Rd = !1, Nc = null, ko = 0, Vm = 0, $o = null, Wo = 0, zd = null;
  function Yl() {
    if (pt & 2 && Ye !== 0)
      return Ye & -Ye;
    if (ne.T !== null) {
      var l = Du;
      return l !== 0 ? l : tf();
    }
    return Uf();
  }
  function jc() {
    Za === 0 && (Za = !(Ye & 536870912) || je ? Fi() : 536870912);
    var l = pa.current;
    return l !== null && (l.flags |= 32), Za;
  }
  function kt(l, n, u) {
    (l === Ie && at === 2 || l.cancelPendingCommit !== null) && (Ui(l, 0), Wn(
      l,
      Ye,
      Za,
      !1
    )), zn(l, u), (!(pt & 2) || l !== Ie) && (l === Ie && (!(pt & 2) && (Yc |= u), gt === 4 && Wn(
      l,
      Ye,
      Za,
      !1
    )), za(l));
  }
  function Gm(l, n, u) {
    if (pt & 6) throw Error(H(327));
    var c = !u && (n & 60) === 0 && (n & l.expiredLanes) === 0 || Ia(l, n), s = c ? Pv(l, n) : Lm(l, n, !0), r = c;
    do {
      if (s === 0) {
        Jo && !c && Wn(l, n, 0, !1);
        break;
      } else if (s === 6)
        Wn(
          l,
          n,
          0,
          !kn
        );
      else {
        if (u = l.current.alternate, r && !zs(u)) {
          s = Lm(l, n, !1), r = !1;
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
              s = Es;
              var g = v.current.memoizedState.isDehydrated;
              if (g && (Ui(v, m).flags |= 256), m = Lm(
                v,
                m,
                !1
              ), m !== 2) {
                if (Nm && !g) {
                  v.errorRecoveryDisabledLanes |= r, Yc |= r, s = 4;
                  break e;
                }
                r = $n, $n = s, r !== null && Xm(r);
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ui(l, 0), Wn(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s) {
            case 0:
            case 1:
              throw Error(H(345));
            case 4:
              if ((n & 4194176) === n) {
                Wn(
                  c,
                  n,
                  Za,
                  !kn
                );
                break e;
              }
              break;
            case 2:
              $n = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(H(329));
          }
          if (c.finishedWork = u, c.finishedLanes = n, (n & 62914560) === n && (r = Ad + 300 - re(), 10 < r)) {
            if (Wn(
              c,
              n,
              Za,
              !kn
            ), Rn(c, 0) !== 0) break e;
            c.timeoutHandle = Oa(
              Vc.bind(
                null,
                c,
                u,
                $n,
                Rs,
                ua,
                n,
                Za,
                Yc,
                Mi,
                kn,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          Vc(
            c,
            u,
            $n,
            Rs,
            ua,
            n,
            Za,
            Yc,
            Mi,
            kn,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    za(l);
  }
  function Xm(l) {
    $n === null ? $n = l : $n.push.apply(
      $n,
      l
    );
  }
  function Vc(l, n, u, c, s, r, m, v, g, R, N, w, U) {
    var q = n.subtreeFlags;
    if ((q & 8192 || (q & 16785408) === 16785408) && (_c = { stylesheets: null, count: 0, unsuspend: sp }, xc(n), n = W0(), n !== null)) {
      l.cancelPendingCommit = n(
        _m.bind(
          null,
          l,
          u,
          c,
          s,
          m,
          v,
          g,
          1,
          w,
          U
        )
      ), Wn(l, r, m, !R);
      return;
    }
    _m(
      l,
      u,
      c,
      s,
      m,
      v,
      g,
      N,
      w,
      U
    );
  }
  function zs(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Cl(r(), s)) return !1;
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
  function Wn(l, n, u, c) {
    n &= ~jm, n &= ~Yc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Il(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && fr(l, u, n);
  }
  function Gc() {
    return pt & 6 ? !0 : (Po(0), !1);
  }
  function Ds() {
    if (Oe !== null) {
      if (at === 0)
        var l = Oe.return;
      else
        l = Oe, Qn = Oc = null, ts(l), Zt = null, yi = 0, l = Oe;
      for (; l !== null; )
        X0(l.alternate, l), l = l.return;
      Oe = null;
    }
  }
  function Ui(l, n) {
    l.finishedWork = null, l.finishedLanes = 0;
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, El(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ds(), Ie = l, Oe = u = mn(l.current, null), Ye = n, at = 0, Ra = null, kn = !1, Jo = Ia(l, n), Nm = !1, Mi = Za = jm = Yc = Oi = gt = 0, $n = Es = null, ua = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Il(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Lu = n, Br(), u;
  }
  function wm(l, n) {
    me = null, ne.H = nl, n === Bn ? (n = mi(), at = 3) : n === kf ? (n = mi(), at = 4) : at = n === zm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ra = n, Oe === null && (gt = 1, qu(
      l,
      al(n, l.current)
    ));
  }
  function Qm() {
    var l = ne.H;
    return ne.H = nl, l === null ? nl : l;
  }
  function Q0() {
    var l = ne.A;
    return ne.A = Ed, l;
  }
  function Dd() {
    gt = 4, kn || (Ye & 4194176) !== Ye && pa.current !== null || (Jo = !0), !(Oi & 134217727) && !(Yc & 134217727) || Ie === null || Wn(
      Ie,
      Ye,
      Za,
      !1
    );
  }
  function Lm(l, n, u) {
    var c = pt;
    pt |= 2;
    var s = Qm(), r = Q0();
    (Ie !== l || Ye !== n) && (Rs = null, Ui(l, n)), n = !1;
    var m = gt;
    e: do
      try {
        if (at !== 0 && Oe !== null) {
          var v = Oe, g = Ra;
          switch (at) {
            case 8:
              Ds(), m = 6;
              break e;
            case 3:
            case 2:
            case 6:
              pa.current === null && (n = !0);
              var R = at;
              if (at = 0, Ra = null, Fo(l, v, g, R), u && Jo) {
                m = 0;
                break e;
              }
              break;
            default:
              R = at, at = 0, Ra = null, Fo(l, v, g, R);
          }
        }
        Iv(), m = gt;
        break;
      } catch (N) {
        wm(l, N);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Qn = Oc = null, pt = c, ne.H = s, ne.A = r, Oe === null && (Ie = null, Ye = 0, Br()), m;
  }
  function Iv() {
    for (; Oe !== null; ) Md(Oe);
  }
  function Pv(l, n) {
    var u = pt;
    pt |= 2;
    var c = Qm(), s = Q0();
    Ie !== l || Ye !== n ? (Rs = null, As = re() + 500, Ui(l, n)) : Jo = Ia(
      l,
      n
    );
    e: do
      try {
        if (at !== 0 && Oe !== null) {
          n = Oe;
          var r = Ra;
          t: switch (at) {
            case 1:
              at = 0, Ra = null, Fo(l, n, r, 1);
              break;
            case 2:
              if (E0(r)) {
                at = 0, Ra = null, L0(n);
                break;
              }
              n = function() {
                at === 2 && Ie === l && (at = 7), za(l);
              }, r.then(n, n);
              break e;
            case 3:
              at = 7;
              break e;
            case 4:
              at = 5;
              break e;
            case 7:
              E0(r) ? (at = 0, Ra = null, L0(n)) : (at = 0, Ra = null, Fo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Oe.tag) {
                case 26:
                  m = Oe.memoizedState;
                case 5:
                case 27:
                  var v = Oe;
                  if (!m || Vi(m)) {
                    at = 0, Ra = null;
                    var g = v.sibling;
                    if (g !== null) Oe = g;
                    else {
                      var R = v.return;
                      R !== null ? (Oe = R, Ud(R)) : Oe = null;
                    }
                    break t;
                  }
              }
              at = 0, Ra = null, Fo(l, n, r, 5);
              break;
            case 6:
              at = 0, Ra = null, Fo(l, n, r, 6);
              break;
            case 8:
              Ds(), gt = 6;
              break e;
            default:
              throw Error(H(462));
          }
        }
        Od();
        break;
      } catch (N) {
        wm(l, N);
      }
    while (!0);
    return Qn = Oc = null, ne.H = c, ne.A = s, pt = u, Oe !== null ? 0 : (Ie = null, Ye = 0, Br(), gt);
  }
  function Od() {
    for (; Oe !== null && !F(); )
      Md(Oe);
  }
  function Md(l) {
    var n = st(l.alternate, l, Lu);
    l.memoizedProps = l.pendingProps, n === null ? Ud(l) : Oe = n;
  }
  function L0(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Mm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ye
        );
        break;
      case 11:
        n = Mm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ye
        );
        break;
      case 5:
        ts(n);
      default:
        X0(u, n), n = Oe = $e(n, Lu), n = st(u, n, Lu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ud(l) : Oe = n;
  }
  function Fo(l, n, u, c) {
    Qn = Oc = null, ts(n), Zt = null, yi = 0;
    var s = n.return;
    try {
      if (Ti(
        l,
        s,
        n,
        u,
        Ye
      )) {
        gt = 1, qu(
          l,
          al(u, l.current)
        ), Oe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Oe = s, r;
      gt = 1, qu(
        l,
        al(u, l.current)
      ), Oe = null;
      return;
    }
    n.flags & 32768 ? (je || c === 1 ? l = !0 : Jo || Ye & 536870912 ? l = !1 : (kn = l = !0, (c === 2 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Zm(n, l)) : Ud(n);
  }
  function Ud(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        Zm(
          n,
          kn
        );
        return;
      }
      l = n.return;
      var u = Td(
        n.alternate,
        n,
        Lu
      );
      if (u !== null) {
        Oe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Oe = n;
        return;
      }
      Oe = n = l;
    } while (n !== null);
    gt === 0 && (gt = 5);
  }
  function Zm(l, n) {
    do {
      var u = G0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Oe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Oe = l;
        return;
      }
      Oe = l = u;
    } while (l !== null);
    gt = 6, Oe = null;
  }
  function _m(l, n, u, c, s, r, m, v, g, R) {
    var N = ne.T, w = oe.p;
    try {
      oe.p = 2, ne.T = null, Z0(
        l,
        n,
        u,
        c,
        w,
        s,
        r,
        m,
        v,
        g,
        R
      );
    } finally {
      ne.T = N, oe.p = w;
    }
  }
  function Z0(l, n, u, c, s, r, m, v) {
    do
      Xc();
    while (Nc !== null);
    if (pt & 6) throw Error(H(327));
    var g = l.finishedWork;
    if (c = l.finishedLanes, g === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, g === l.current) throw Error(H(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var R = g.lanes | g.childLanes;
    if (R |= _f, uo(
      l,
      c,
      R,
      r,
      m,
      v
    ), l === Ie && (Oe = Ie = null, Ye = 0), !(g.subtreeFlags & 10256) && !(g.flags & 10256) || Rd || (Rd = !0, Vm = R, $o = u, $m(yl, function() {
      return Xc(), null;
    })), u = (g.flags & 15990) !== 0, g.subtreeFlags & 15990 || u ? (u = ne.T, ne.T = null, r = oe.p, oe.p = 2, m = pt, pt |= 4, Y0(l, g), md(g, l), Kh(jd, l.containerInfo), Vs = !!Nd, jd = Nd = null, l.current = g, Bm(l, g.alternate, g), I(), pt = m, oe.p = r, ne.T = u) : l.current = g, Rd ? (Rd = !1, Nc = l, ko = c) : Km(l, R), R = l.pendingLanes, R === 0 && (Zu = null), Fa(g.stateNode), za(l), n !== null)
      for (s = l.onRecoverableError, g = 0; g < n.length; g++)
        R = n[g], s(R.value, {
          componentStack: R.stack
        });
    return ko & 3 && Xc(), R = l.pendingLanes, c & 4194218 && R & 42 ? l === zd ? Wo++ : (Wo = 0, zd = l) : Wo = 0, Po(0), null;
  }
  function Km(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Oo(n)));
  }
  function Xc() {
    if (Nc !== null) {
      var l = Nc, n = Vm;
      Vm = 0;
      var u = Mf(ko), c = ne.T, s = oe.p;
      try {
        if (oe.p = 32 > u ? 32 : u, ne.T = null, Nc === null)
          var r = !1;
        else {
          u = $o, $o = null;
          var m = Nc, v = ko;
          if (Nc = null, ko = 0, pt & 6)
            throw Error(H(331));
          var g = pt;
          if (pt |= 4, Kt(m.current), pd(m, m.current, v, u), pt = g, Po(0, !1), Ot && typeof Ot.onPostCommitFiberRoot == "function")
            try {
              Ot.onPostCommitFiberRoot(Ul, m);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        oe.p = s, ne.T = c, Km(l, n);
      }
    }
    return !1;
  }
  function Hd(l, n, u) {
    n = al(u, n), n = sn(l.stateNode, n, 2), l = Vu(l, n, 2), l !== null && (zn(l, 2), za(l));
  }
  function Pe(l, n, u) {
    if (l.tag === 3)
      Hd(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Hd(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Zu === null || !Zu.has(c))) {
            l = al(u, l), u = ld(2), c = Vu(n, u, 2), c !== null && (ad(
              u,
              c,
              n,
              l
            ), zn(c, 2), za(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Jm(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new w0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Nm = !0, s.add(u), l = ep.bind(null, l, n, u), n.then(l, l));
  }
  function ep(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ie === l && (Ye & u) === u && (gt === 4 || gt === 3 && (Ye & 62914560) === Ye && 300 > re() - Ad ? !(pt & 2) && Ui(l, 0) : jm |= u, Mi === Ye && (Mi = 0)), za(l);
  }
  function _0(l, n) {
    n === 0 && (n = Xt()), l = Mn(l, n), l !== null && (zn(l, n), za(l));
  }
  function tp(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), _0(l, u);
  }
  function km(l, n) {
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
        throw Error(H(314));
    }
    c !== null && c.delete(n), _0(l, u);
  }
  function $m(l, n) {
    return En(l, n);
  }
  var Io = null, wc = null, Cd = !1, Hi = !1, Wm = !1, Ci = 0;
  function za(l) {
    l !== wc && l.next === null && (wc === null ? Io = wc = l : wc = wc.next = l), Hi = !0, Cd || (Cd = !0, Im(lp));
  }
  function Po(l, n) {
    if (!Wm && Hi) {
      Wm = !0;
      do
        for (var u = !1, c = Io; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Il(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326677 ? r & 201326677 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ef(c, r));
          } else
            r = Ye, r = Rn(
              c,
              c === Ie ? r : 0
            ), !(r & 3) || Ia(c, r) || (u = !0, ef(c, r));
          c = c.next;
        }
      while (u);
      Wm = !1;
    }
  }
  function lp() {
    Hi = Cd = !1;
    var l = 0;
    Ci !== 0 && (jl() && (l = Ci), Ci = 0);
    for (var n = re(), u = null, c = Io; c !== null; ) {
      var s = c.next, r = Os(c, n);
      r === 0 ? (c.next = null, u === null ? Io = s : u.next = s, s === null && (wc = u)) : (u = c, (l !== 0 || r & 3) && (Hi = !0)), c = s;
    }
    Po(l);
  }
  function Os(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Il(r), v = 1 << m, g = s[m];
      g === -1 ? (!(v & u) || v & c) && (s[m] = Of(v, n)) : g <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Ie, u = Ye, u = Rn(
      l,
      l === n ? u : 0
    ), c = l.callbackNode, u === 0 || l === n && at === 2 || l.cancelPendingCommit !== null)
      return c !== null && c !== null && T(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || Ia(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && T(c), Mf(u)) {
        case 2:
        case 8:
          u = fe;
          break;
        case 32:
          u = yl;
          break;
        case 268435456:
          u = ll;
          break;
        default:
          u = yl;
      }
      return c = Fm.bind(null, l), u = En(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && T(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fm(l, n) {
    var u = l.callbackNode;
    if (Xc() && l.callbackNode !== u)
      return null;
    var c = Ye;
    return c = Rn(
      l,
      l === Ie ? c : 0
    ), c === 0 ? null : (Gm(l, c, n), Os(l, re()), l.callbackNode != null && l.callbackNode === u ? Fm.bind(null, l) : null);
  }
  function ef(l, n) {
    if (Xc()) return null;
    Gm(l, n, !0);
  }
  function Im(l) {
    np(function() {
      pt & 6 ? En(lt, l) : l();
    });
  }
  function tf() {
    return Ci === 0 && (Ci = Fi()), Ci;
  }
  function Pm(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : pr("" + l);
  }
  function qt(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function ey(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Pm(
        (s[Pl] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Pl] || null) ? Pm(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new Tr(
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
                if (Ci !== 0) {
                  var g = m ? qt(s, m) : new FormData(s);
                  xu(
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
                typeof r == "function" && (v.preventDefault(), g = m ? qt(s, m) : new FormData(s), xu(
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
  for (var ty = 0; ty < Mt.length; ty++) {
    var ly = Mt[ty], xi = ly.toLowerCase(), lf = ly[0].toUpperCase() + ly.slice(1);
    va(
      xi,
      "on" + lf
    );
  }
  va(S0, "onAnimationEnd"), va(xr, "onAnimationIteration"), va(Lf, "onAnimationStart"), va("dblclick", "onDoubleClick"), va("focusin", "onFocus"), va("focusout", "onBlur"), va(T0, "onTransitionRun"), va(Re, "onTransitionStart"), va(Q, "onTransitionCancel"), va(dc, "onTransitionEnd"), ec("onMouseEnter", ["mouseout", "mouseover"]), ec("onMouseLeave", ["mouseout", "mouseover"]), ec("onPointerEnter", ["pointerout", "pointerover"]), ec("onPointerLeave", ["pointerout", "pointerover"]), ai(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ai(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ai("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ai(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ai(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ai(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fn)
  );
  function Bd(l, n) {
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
            } catch (N) {
              ss(N);
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
            } catch (N) {
              ss(N);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function Ce(l, n) {
    var u = n[sr];
    u === void 0 && (u = n[sr] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (qd(n, l, 2, !1), u.add(c));
  }
  function Ms(l, n, u) {
    var c = 0;
    n && (c |= 4), qd(
      u,
      l,
      c,
      n
    );
  }
  var Da = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[Da]) {
      l[Da] = !0, Ah.forEach(function(u) {
        u !== "selectionchange" && (xd.has(u) || Ms(u, !1, l), Ms(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Da] || (n[Da] = !0, Ms("selectionchange", !1, n));
    }
  }
  function qd(l, n, u, c) {
    switch (tv(n)) {
      case 2:
        var s = P0;
        break;
      case 8:
        s = ev;
        break;
      default:
        s = Qd;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ho || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Us(l, n, u, c, s) {
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
            if (m = vu(v), m === null) return;
            if (g = m.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    so(function() {
      var R = r, N = Bh(u), w = [];
      e: {
        var U = Zf.get(l);
        if (U !== void 0) {
          var q = Tr, $ = l;
          switch (l) {
            case "keypress":
              if (xf(u) === 0) break e;
            case "keydown":
            case "keyup":
              q = zr;
              break;
            case "focusin":
              $ = "focus", q = Yh;
              break;
            case "focusout":
              $ = "blur", q = Yh;
              break;
            case "beforeblur":
            case "afterblur":
              q = Yh;
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
              q = u0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Dr;
              break;
            case S0:
            case xr:
            case Lf:
              q = i0;
              break;
            case dc:
              q = jh;
              break;
            case "scroll":
            case "scrollend":
              q = Kv;
              break;
            case "wheel":
              q = h0;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = o0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = gl;
              break;
            case "toggle":
            case "beforetoggle":
              q = gu;
          }
          var de = (n & 4) !== 0, rt = !de && (l === "scroll" || l === "scrollend"), z = de ? U !== null ? U + "Capture" : null : U;
          de = [];
          for (var A = R, D; A !== null; ) {
            var G = A;
            if (D = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || D === null || z === null || (G = ro(A, z), G != null && de.push(
              Bi(A, G, D)
            )), rt) break;
            A = A.return;
          }
          0 < de.length && (U = new q(
            U,
            $,
            null,
            u,
            N
          ), w.push({ event: U, listeners: de }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (U = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", U && u !== xh && ($ = u.relatedTarget || u.fromElement) && (vu($) || $[yu]))
            break e;
          if ((q || U) && (U = N.window === N ? N : (U = N.ownerDocument) ? U.defaultView || U.parentWindow : window, q ? ($ = u.relatedTarget || u.toElement, q = R, $ = $ ? vu($) : null, $ !== null && (rt = Z($), de = $.tag, $ !== rt || de !== 5 && de !== 27 && de !== 6) && ($ = null)) : (q = null, $ = R), q !== $)) {
            if (de = u0, G = "onMouseLeave", z = "onMouseEnter", A = "mouse", (l === "pointerout" || l === "pointerover") && (de = gl, G = "onPointerLeave", z = "onPointerEnter", A = "pointer"), rt = q == null ? U : io(q), D = $ == null ? U : io($), U = new de(
              G,
              A + "leave",
              q,
              u,
              N
            ), U.target = rt, U.relatedTarget = D, G = null, vu(N) === R && (de = new de(
              z,
              A + "enter",
              $,
              u,
              N
            ), de.target = D, de.relatedTarget = rt, G = de), rt = G, q && $)
              t: {
                for (de = q, z = $, A = 0, D = de; D; D = Lc(D))
                  A++;
                for (D = 0, G = z; G; G = Lc(G))
                  D++;
                for (; 0 < A - D; )
                  de = Lc(de), A--;
                for (; 0 < D - A; )
                  z = Lc(z), D--;
                for (; A--; ) {
                  if (de === z || z !== null && de === z.alternate)
                    break t;
                  de = Lc(de), z = Lc(z);
                }
                de = null;
              }
            else de = null;
            q !== null && K0(
              w,
              U,
              q,
              de,
              !1
            ), $ !== null && rt !== null && K0(
              w,
              rt,
              $,
              de,
              !0
            );
          }
        }
        e: {
          if (U = R ? io(R) : window, q = U.nodeName && U.nodeName.toLowerCase(), q === "select" || q === "input" && U.type === "file")
            var W = po;
          else if (oi(U))
            if (go)
              W = bl;
            else {
              W = p0;
              var ge = v0;
            }
          else
            q = U.nodeName, !q || q.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? R && ac(R.elementType) && (W = po) : W = g0;
          if (W && (W = W(l, R))) {
            fi(
              w,
              W,
              u,
              N
            );
            break e;
          }
          ge && ge(l, U, R), l === "focusout" && R && U.type === "number" && R.memoizedProps.value != null && Uh(U, "number", U.value);
        }
        switch (ge = R ? io(R) : window, l) {
          case "focusin":
            (oi(ge) || ge.contentEditable === "true") && (ya = ge, Cr = R, Ga = null);
            break;
          case "focusout":
            Ga = Cr = ya = null;
            break;
          case "mousedown":
            an = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            an = !1, Qf(w, u, N);
            break;
          case "selectionchange":
            if (Jh) break;
          case "keydown":
          case "keyup":
            Qf(w, u, N);
        }
        var te;
        if (cc)
          e: {
            switch (l) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Va ? Nf(l, u) && (ce = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ce = "onCompositionStart");
        ce && (Xh && u.locale !== "ko" && (Va || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && Va && (te = Sr()) : (pu = N, Hl = "value" in pu ? pu.value : pu.textContent, Va = !0)), ge = Nl(R, ce), 0 < ge.length && (ce = new Ar(
          ce,
          l,
          null,
          u,
          N
        ), w.push({ event: ce, listeners: ge }), te ? ce.data = te : (te = ta(u), te !== null && (ce.data = te)))), (te = Gh ? m0(l, u) : wh(l, u)) && (ce = Nl(R, "onBeforeInput"), 0 < ce.length && (ge = new Ar(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          N
        ), w.push({
          event: ge,
          listeners: ce
        }), ge.data = te)), ey(
          w,
          l,
          R,
          u,
          N
        );
      }
      Bd(w, n);
    });
  }
  function Bi(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Nl(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ro(l, u), s != null && c.unshift(
        Bi(l, s, r)
      ), s = ro(l, n), s != null && c.push(
        Bi(l, s, r)
      )), l = l.return;
    }
    return c;
  }
  function Lc(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function K0(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, g = v.alternate, R = v.stateNode;
      if (v = v.tag, g !== null && g === c) break;
      v !== 5 && v !== 26 && v !== 27 || R === null || (g = R, s ? (R = ro(u, r), R != null && m.unshift(
        Bi(u, R, g)
      )) : s || (R = ro(u, r), R != null && m.push(
        Bi(u, R, g)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var J0 = /\r\n?/g, ap = /\u0000|\uFFFD/g;
  function C(l) {
    return (typeof l == "string" ? l : "" + l).replace(J0, `
`).replace(ap, "");
  }
  function ve(l, n) {
    return n = C(n), C(l) === n;
  }
  function qi() {
  }
  function We(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Dn(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Dn(l, "" + c);
        break;
      case "className":
        oo(l, "class", c);
        break;
      case "tabIndex":
        oo(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        oo(l, u, c);
        break;
      case "style":
        Ch(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          oo(l, "data", c);
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
        c = pr("" + c), l.setAttribute(u, c);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && We(l, n, "name", s.name, s, null), We(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), We(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), We(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (We(l, n, "encType", s.encType, s, null), We(l, n, "method", s.method, s, null), We(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = pr("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = qi);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
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
        u = pr("" + c), l.setAttributeNS(
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
        Ce("beforetoggle", l), Ce("toggle", l), tc(l, "popover", c);
        break;
      case "xlinkActuate":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        tc(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = a0.get(u) || u, tc(l, u, c));
    }
  }
  function Yd(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Ch(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Dn(l, c) : (typeof c == "number" || typeof c == "bigint") && Dn(l, "" + c);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = qi);
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
        if (!Rh.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Pl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : tc(l, u, c);
          }
    }
  }
  function ol(l, n, u) {
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
        Ce("error", l), Ce("load", l);
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
                  throw Error(H(137, n));
                default:
                  We(l, n, r, m, u, null);
              }
          }
        s && We(l, n, "srcSet", u.srcSet, u, null), c && We(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ce("invalid", l);
        var v = r = m = s = null, g = null, R = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var N = u[c];
            if (N != null)
              switch (c) {
                case "name":
                  s = N;
                  break;
                case "type":
                  m = N;
                  break;
                case "checked":
                  g = N;
                  break;
                case "defaultChecked":
                  R = N;
                  break;
                case "value":
                  r = N;
                  break;
                case "defaultValue":
                  v = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(H(137, n));
                  break;
                default:
                  We(l, n, c, N, u, null);
              }
          }
        Mh(
          l,
          r,
          v,
          g,
          R,
          m,
          s,
          !1
        ), mr(l);
        return;
      case "select":
        Ce("invalid", l), c = m = r = null;
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
                We(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? lc(l, !!c, n, !1) : u != null && lc(l, !!c, u, !0);
        return;
      case "textarea":
        Ce("invalid", l), r = s = c = null;
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
                if (v != null) throw Error(H(91));
                break;
              default:
                We(l, n, m, v, u, null);
            }
        Cf(l, c, s, r), mr(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                We(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        Ce("cancel", l), Ce("close", l);
        break;
      case "iframe":
      case "object":
        Ce("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Fn.length; c++)
          Ce(Fn[c], l);
        break;
      case "image":
        Ce("error", l), Ce("load", l);
        break;
      case "details":
        Ce("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", l), Ce("load", l);
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
                throw Error(H(137, n));
              default:
                We(l, n, R, c, u, null);
            }
        return;
      default:
        if (ac(n)) {
          for (N in u)
            u.hasOwnProperty(N) && (c = u[N], c !== void 0 && Yd(
              l,
              n,
              N,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && We(l, n, v, c, u, null));
  }
  function k0(l, n, u, c) {
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
        var s = null, r = null, m = null, v = null, g = null, R = null, N = null;
        for (q in u) {
          var w = u[q];
          if (u.hasOwnProperty(q) && w != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = w;
              default:
                c.hasOwnProperty(q) || We(l, n, q, null, c, w);
            }
        }
        for (var U in c) {
          var q = c[U];
          if (w = u[U], c.hasOwnProperty(U) && (q != null || w != null))
            switch (U) {
              case "type":
                r = q;
                break;
              case "name":
                s = q;
                break;
              case "checked":
                R = q;
                break;
              case "defaultChecked":
                N = q;
                break;
              case "value":
                m = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(H(137, n));
                break;
              default:
                q !== w && We(
                  l,
                  n,
                  U,
                  q,
                  c,
                  w
                );
            }
        }
        yr(
          l,
          m,
          v,
          g,
          R,
          N,
          r,
          s
        );
        return;
      case "select":
        q = m = v = U = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                q = g;
              default:
                c.hasOwnProperty(r) || We(
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
                r !== g && We(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = v, u = m, c = q, U != null ? lc(l, !!u, U, !1) : !!c != !!u && (n != null ? lc(l, !!u, n, !0) : lc(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = U = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(H(91));
                break;
              default:
                s !== r && We(l, n, m, s, c, r);
            }
        vr(l, U, q);
        return;
      case "option":
        for (var $ in u)
          if (U = u[$], u.hasOwnProperty($) && U != null && !c.hasOwnProperty($))
            switch ($) {
              case "selected":
                l.selected = !1;
                break;
              default:
                We(
                  l,
                  n,
                  $,
                  null,
                  c,
                  U
                );
            }
        for (g in c)
          if (U = c[g], q = u[g], c.hasOwnProperty(g) && U !== q && (U != null || q != null))
            switch (g) {
              case "selected":
                l.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                We(
                  l,
                  n,
                  g,
                  U,
                  c,
                  q
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
        for (var de in u)
          U = u[de], u.hasOwnProperty(de) && U != null && !c.hasOwnProperty(de) && We(l, n, de, null, c, U);
        for (R in c)
          if (U = c[R], q = u[R], c.hasOwnProperty(R) && U !== q && (U != null || q != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(H(137, n));
                break;
              default:
                We(
                  l,
                  n,
                  R,
                  U,
                  c,
                  q
                );
            }
        return;
      default:
        if (ac(n)) {
          for (var rt in u)
            U = u[rt], u.hasOwnProperty(rt) && U !== void 0 && !c.hasOwnProperty(rt) && Yd(
              l,
              n,
              rt,
              void 0,
              c,
              U
            );
          for (N in c)
            U = c[N], q = u[N], !c.hasOwnProperty(N) || U === q || U === void 0 && q === void 0 || Yd(
              l,
              n,
              N,
              U,
              c,
              q
            );
          return;
        }
    }
    for (var z in u)
      U = u[z], u.hasOwnProperty(z) && U != null && !c.hasOwnProperty(z) && We(l, n, z, null, c, U);
    for (w in c)
      U = c[w], q = u[w], !c.hasOwnProperty(w) || U === q || U == null && q == null || We(l, n, w, U, c, q);
  }
  var Nd = null, jd = null;
  function Hs(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Vd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ay(l, n) {
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
  function Cs(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var xs = null;
  function jl() {
    var l = window.event;
    return l && l.type === "popstate" ? l === xs ? !1 : (xs = l, !0) : (xs = null, !1);
  }
  var Oa = typeof setTimeout == "function" ? setTimeout : void 0, El = typeof clearTimeout == "function" ? clearTimeout : void 0, nt = typeof Promise == "function" ? Promise : void 0, np = typeof queueMicrotask == "function" ? queueMicrotask : typeof nt < "u" ? function(l) {
    return nt.resolve(null).then(l).catch(ny);
  } : Oa;
  function ny(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Bs(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (c === 0) {
            l.removeChild(s), sf(n);
            return;
          }
          c--;
        } else u !== "$" && u !== "$?" && u !== "$!" || c++;
      u = s;
    } while (u);
    sf(n);
  }
  function yn(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yn(u), dr(u);
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
  function Yi(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Ii])
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
      if (l = fl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function qs(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = fl(l.nextSibling), l === null)) return null;
    return l;
  }
  function fl(l) {
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
  function Ys(l) {
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
  function In(l, n, u) {
    switch (n = Hs(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(H(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(H(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(H(454));
        return l;
      default:
        throw Error(H(451));
    }
  }
  var ia = /* @__PURE__ */ new Map(), $0 = /* @__PURE__ */ new Set();
  function Gd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var _u = oe.d;
  oe.d = {
    f: Pn,
    r: up,
    D: af,
    C: ip,
    L: uy,
    m: cp,
    X: nf,
    S: op,
    M: Vl
  };
  function Pn() {
    var l = _u.f(), n = Gc();
    return l || n;
  }
  function up(l) {
    var n = Pi(l);
    n !== null && n.tag === 5 && n.type === "form" ? hm(n) : _u.r(l);
  }
  var Ni = typeof document > "u" ? null : document;
  function Xd(l, n, u) {
    var c = Ni;
    if (c && typeof n == "string" && n) {
      var s = ha(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), $0.has(s) || ($0.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), ol(n, "link", l), Qt(n), c.head.appendChild(n)));
    }
  }
  function af(l) {
    _u.D(l), Xd("dns-prefetch", l, null);
  }
  function ip(l, n) {
    _u.C(l, n), Xd("preconnect", l, n);
  }
  function uy(l, n, u) {
    _u.L(l, n, u);
    var c = Ni;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + ha(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ha(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ha(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ha(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Jl(l);
          break;
        case "script":
          r = uf(l);
      }
      ia.has(r) || (l = Ee(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ia.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(kl(r)) || n === "script" && c.querySelector(ji(r)) || (n = c.createElement("link"), ol(n, "link", l), Qt(n), c.head.appendChild(n)));
    }
  }
  function cp(l, n) {
    _u.m(l, n);
    var u = Ni;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ha(c) + '"][href="' + ha(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = uf(l);
      }
      if (!ia.has(r) && (l = Ee({ rel: "modulepreload", href: l }, n), ia.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ji(r)))
              return;
        }
        c = u.createElement("link"), ol(c, "link", l), Qt(c), u.head.appendChild(c);
      }
    }
  }
  function op(l, n, u) {
    _u.S(l, n, u);
    var c = Ni;
    if (c && l) {
      var s = Pa(c).hoistableStyles, r = Jl(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          kl(r)
        ))
          v.loading = 5;
        else {
          l = Ee(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ia.get(r)) && _a(l, u);
          var g = m = c.createElement("link");
          Qt(g), ol(g, "link", l), g._p = new Promise(function(R, N) {
            g.onload = R, g.onerror = N;
          }), g.addEventListener("load", function() {
            v.loading |= 1;
          }), g.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ma(m, n, c);
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
  function nf(l, n) {
    _u.X(l, n);
    var u = Ni;
    if (u && l) {
      var c = Pa(u).hoistableScripts, s = uf(l), r = c.get(s);
      r || (r = u.querySelector(ji(s)), r || (l = Ee({ src: l, async: !0 }, n), (n = ia.get(s)) && vn(l, n), r = u.createElement("script"), Qt(r), ol(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Vl(l, n) {
    _u.M(l, n);
    var u = Ni;
    if (u && l) {
      var c = Pa(u).hoistableScripts, s = uf(l), r = c.get(s);
      r || (r = u.querySelector(ji(s)), r || (l = Ee({ src: l, async: !0, type: "module" }, n), (n = ia.get(s)) && vn(l, n), r = u.createElement("script"), Qt(r), ol(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function J(l, n, u, c) {
    var s = (s = ra.current) ? Gd(s) : null;
    if (!s) throw Error(H(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Jl(u.href), u = Pa(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Jl(u.href);
          var r = Pa(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            kl(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ia.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ia.set(l, u), r || fp(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(H(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(H(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = uf(u), u = Pa(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(H(444, l));
    }
  }
  function Jl(l) {
    return 'href="' + ha(l) + '"';
  }
  function kl(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gl(l) {
    return Ee({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function fp(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), ol(n, "link", u), Qt(n), l.head.appendChild(n));
  }
  function uf(l) {
    return '[src="' + ha(l) + '"]';
  }
  function ji(l) {
    return "script[async]" + l;
  }
  function Ns(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + ha(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Qt(c), c;
          var s = Ee({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Qt(c), ol(c, "style", s), Ma(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Jl(u.href);
          var r = l.querySelector(
            kl(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Qt(r), r;
          c = Gl(u), (s = ia.get(s)) && _a(c, s), r = (l.ownerDocument || l).createElement("link"), Qt(r);
          var m = r;
          return m._p = new Promise(function(v, g) {
            m.onload = v, m.onerror = g;
          }), ol(r, "link", c), n.state.loading |= 4, Ma(r, u.precedence, l), n.instance = r;
        case "script":
          return r = uf(u.src), (s = l.querySelector(
            ji(r)
          )) ? (n.instance = s, Qt(s), s) : (c = u, (s = ia.get(r)) && (c = Ee({}, u), vn(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Qt(s), ol(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(H(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, Ma(c, u.precedence, l));
    return n.instance;
  }
  function Ma(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function _a(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function vn(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Zc = null;
  function Ku(l, n, u) {
    if (Zc === null) {
      var c = /* @__PURE__ */ new Map(), s = Zc = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Zc, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Ii] || r[vl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Al(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function ca(l, n, u) {
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
  function Vi(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var _c = null;
  function sp() {
  }
  function rp(l, n, u) {
    if (_c === null) throw Error(H(475));
    var c = _c;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var s = Jl(u.href), r = l.querySelector(
          kl(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Gi.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Qt(r);
          return;
        }
        r = l.ownerDocument || l, u = Gl(u), (s = ia.get(s)) && _a(u, s), r = r.createElement("link"), Qt(r);
        var m = r;
        m._p = new Promise(function(v, g) {
          m.onload = v, m.onerror = g;
        }), ol(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && !(n.state.loading & 3) && (c.count++, n = Gi.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function W0() {
    if (_c === null) throw Error(H(475));
    var l = _c;
    return l.stylesheets && l.count === 0 && Ju(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ju(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Gi() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var js = null;
  function Ju(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, js = /* @__PURE__ */ new Map(), n.forEach(iy, l), js = null, Gi.call(l));
  }
  function iy(l, n) {
    if (!(n.state.loading & 4)) {
      var u = js.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), js.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Gi.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var oa = {
    $$typeof: Yt,
    Provider: null,
    Consumer: null,
    _currentValue: ot,
    _currentValue2: ot,
    _threadCount: 0
  };
  function dp(l, n, u, c, s, r, m, v) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.hiddenUpdates = hu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function F0(l, n, u, c, s, r, m, v, g, R, N, w) {
    return l = new dp(
      l,
      n,
      u,
      m,
      v,
      g,
      R,
      w
    ), n = 1, r === !0 && (n |= 24), r = Jt(3, null, null, n), l.current = r, r.stateNode = l, n = lm(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ys(r), l;
  }
  function cy(l) {
    return l ? (l = Un, l) : Un;
  }
  function oy(l, n, u, c, s, r) {
    s = cy(s), c.context === null ? c.context = s : c.pendingContext = s, c = ju(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Vu(l, c, n), u !== null && (kt(u, l, n), Qo(u, l, n));
  }
  function I0(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function wd(l, n) {
    I0(l, n), (l = l.alternate) && I0(l, n);
  }
  function fy(l) {
    if (l.tag === 13) {
      var n = Mn(l, 67108864);
      n !== null && kt(n, l, 67108864), wd(l, 67108864);
    }
  }
  var Vs = !0;
  function P0(l, n, u, c) {
    var s = ne.T;
    ne.T = null;
    var r = oe.p;
    try {
      oe.p = 2, Qd(l, n, u, c);
    } finally {
      oe.p = r, ne.T = s;
    }
  }
  function ev(l, n, u, c) {
    var s = ne.T;
    ne.T = null;
    var r = oe.p;
    try {
      oe.p = 8, Qd(l, n, u, c);
    } finally {
      oe.p = r, ne.T = s;
    }
  }
  function Qd(l, n, u, c) {
    if (Vs) {
      var s = Ld(c);
      if (s === null)
        Us(
          l,
          n,
          c,
          Gs,
          u
        ), ry(l, c);
      else if (hp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (ry(l, c), n & 4 && -1 < sy.indexOf(l)) {
        for (; s !== null; ) {
          var r = Pi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = du(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var g = 1 << 31 - Il(m);
                      v.entanglements[1] |= g, m &= ~g;
                    }
                    za(r), !(pt & 6) && (As = re() + 500, Po(0));
                  }
                }
                break;
              case 13:
                v = Mn(r, 2), v !== null && kt(v, r, 2), Gc(), wd(r, 2);
            }
          if (r = Ld(c), r === null && Us(
            l,
            n,
            c,
            Gs,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Us(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Ld(l) {
    return l = Bh(l), Zd(l);
  }
  var Gs = null;
  function Zd(l) {
    if (Gs = null, l = vu(l), l !== null) {
      var n = Z(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = ue(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gs = l, null;
  }
  function tv(l) {
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
        switch (tl()) {
          case lt:
            return 2;
          case fe:
            return 8;
          case yl:
          case Na:
            return 32;
          case ll:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _d = !1, Xi = null, wi = null, ku = null, Qi = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), Ua = [], sy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ry(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Xi = null;
        break;
      case "dragenter":
      case "dragleave":
        wi = null;
        break;
      case "mouseover":
      case "mouseout":
        ku = null;
        break;
      case "pointerover":
      case "pointerout":
        Qi.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Li.delete(n.pointerId);
    }
  }
  function cf(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Pi(n), n !== null && fy(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function hp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Xi = cf(
          Xi,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return wi = cf(
          wi,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ku = cf(
          ku,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Qi.set(
          r,
          cf(
            Qi.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Li.set(
          r,
          cf(
            Li.get(r) || null,
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
  function lv(l) {
    var n = vu(l.target);
    if (n !== null) {
      var u = Z(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ue(u), n !== null) {
            l.blockedOn = n, mu(l.priority, function() {
              if (u.tag === 13) {
                var c = Yl(), s = Mn(u, c);
                s !== null && kt(s, u, c), wd(u, c);
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
  function Kd(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Ld(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        xh = c, u.target.dispatchEvent(c), xh = null;
      } else
        return n = Pi(u), n !== null && fy(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function dy(l, n, u) {
    Kd(l) && u.delete(n);
  }
  function of() {
    _d = !1, Xi !== null && Kd(Xi) && (Xi = null), wi !== null && Kd(wi) && (wi = null), ku !== null && Kd(ku) && (ku = null), Qi.forEach(dy), Li.forEach(dy);
  }
  function ff(l, n) {
    l.blockedOn === n && (l.blockedOn = null, _d || (_d = !0, X.unstable_scheduleCallback(
      X.unstable_NormalPriority,
      of
    )));
  }
  var Xs = null;
  function hy(l) {
    Xs !== l && (Xs = l, X.unstable_scheduleCallback(
      X.unstable_NormalPriority,
      function() {
        Xs === l && (Xs = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Zd(c || u) === null)
              continue;
            break;
          }
          var r = Pi(u);
          r !== null && (l.splice(n, 3), n -= 3, xu(
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
  function sf(l) {
    function n(g) {
      return ff(g, l);
    }
    Xi !== null && ff(Xi, l), wi !== null && ff(wi, l), ku !== null && ff(ku, l), Qi.forEach(n), Li.forEach(n);
    for (var u = 0; u < Ua.length; u++) {
      var c = Ua[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ua.length && (u = Ua[0], u.blockedOn === null); )
      lv(u), u.blockedOn === null && Ua.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Pl] || null;
        if (typeof r == "function")
          m || hy(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Pl] || null)
              v = m.formAction;
            else if (Zd(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), hy(u);
        }
      }
  }
  function my(l) {
    this._internalRoot = l;
  }
  Kc.prototype.render = my.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(H(409));
    var u = n.current, c = Yl();
    oy(u, c, l, n, null, null);
  }, Kc.prototype.unmount = my.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      l.tag === 0 && Xc(), oy(l.current, 2, null, l, null, null), Gc(), n[yu] = null;
    }
  };
  function Kc(l) {
    this._internalRoot = l;
  }
  Kc.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Uf();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ua.length && n !== 0 && n < Ua[u].priority; u++) ;
      Ua.splice(u, 0, l), u === 0 && lv(l);
    }
  };
  var yy = Le.version;
  if (yy !== "19.0.0")
    throw Error(
      H(
        527,
        yy,
        "19.0.0"
      )
    );
  oe.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(H(188)) : (l = Object.keys(l).join(","), Error(H(268, l)));
    return l = ze(n), l = l !== null ? Ae(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var rf = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ne,
    findFiberByHostInstance: vu,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jd.isDisabled && Jd.supportsFiber)
      try {
        Ul = Jd.inject(
          rf
        ), Ot = Jd;
      } catch {
      }
  }
  return Iy.createRoot = function(l, n) {
    if (!xe(l)) throw Error(H(299));
    var u = !1, c = "", s = U0, r = fn, m = Am, v = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks)), n = F0(
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
    ), l[yu] = n.current, Qc(
      l.nodeType === 8 ? l.parentNode : l
    ), new my(n);
  }, Iy.hydrateRoot = function(l, n, u) {
    if (!xe(l)) throw Error(H(299));
    var c = !1, s = "", r = U0, m = fn, v = Am, g = null, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (R = u.formState)), n = F0(
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
    ), n.context = cy(null), u = n.current, c = Yl(), s = ju(c), s.callback = null, Vu(u, s, c), n.current.lanes = c, zn(n, c), za(n), l[yu] = n.current, Qc(l), new Kc(n);
  }, Iy.version = "19.0.0", Iy;
}
var Py = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hb;
function DS() {
  return hb || (hb = 1, process.env.NODE_ENV !== "production" && function() {
    function X(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Le(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = El(e) ? e.slice() : ve({}, e);
      return f[o] = Le(e[o], t, a + 1, i), f;
    }
    function Ue(e, t, a) {
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
        return H(e, t, a, 0);
      }
    }
    function H(e, t, a, i) {
      var o = t[i], f = El(e) ? e.slice() : ve({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], El(f) ? f.splice(o, 1) : delete f[o]) : f[o] = H(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function xe(e, t, a) {
      var i = t[a], o = El(e) ? e.slice() : ve({}, e);
      return a + 1 === t.length ? (El(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = xe(e[i], t, a + 1), o);
    }
    function it() {
      return !1;
    }
    function Ge() {
      return null;
    }
    function Ze(e, t, a, i) {
      return new H0(e, t, a, i);
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function St() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function sa() {
    }
    function Dt() {
    }
    function Xe(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function Yt(e, t) {
      e.context === df && (Z0(t, e, null, null), ba());
    }
    function se(e, t) {
      if (tu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Gu(), Vh(
          e.current,
          t,
          a
        ), ba();
      }
    }
    function tt(e) {
      tu = e;
    }
    function ct(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Be(e) {
      return e === null || typeof e != "object" ? null : (e = J0 && e[J0] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ae(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ap ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Fn:
          return "Fragment";
        case lf:
          return "Portal";
        case Bd:
          return "Profiler";
        case xd:
          return "StrictMode";
        case qd:
          return "Suspense";
        case Us:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Da:
            return (e.displayName || "Context") + ".Provider";
          case Ms:
            return (e._context.displayName || "Context") + ".Consumer";
          case Qc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Bi:
            return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
          case Nl:
            t = e._payload, e = e._init;
            try {
              return ae(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ql(e) {
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
          return ae(t);
        case 8:
          return t === xd ? "StrictMode" : "Mode";
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
    function Ol() {
    }
    function It() {
      if (qi === 0) {
        We = console.log, Yd = console.info, ol = console.warn, k0 = console.error, Nd = console.group, jd = console.groupCollapsed, Hs = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ol,
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
      qi++;
    }
    function Tn() {
      if (qi--, qi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ve({}, e, { value: We }),
          info: ve({}, e, { value: Yd }),
          warn: ve({}, e, { value: ol }),
          error: ve({}, e, { value: k0 }),
          group: ve({}, e, { value: Nd }),
          groupCollapsed: ve({}, e, { value: jd }),
          groupEnd: ve({}, e, { value: Hs })
        });
      }
      0 > qi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function dl(e) {
      if (Vd === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Vd = t && t[1] || "", ay = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Vd + e + ay;
    }
    function ne(e, t) {
      if (!e || Cs) return "";
      var a = xs.get(e);
      if (a !== void 0) return a;
      Cs = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = C.H, C.H = null, It();
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
                  } catch (ee) {
                    var V = ee;
                  }
                  Reflect.construct(e, [], M);
                } else {
                  try {
                    M.call();
                  } catch (ee) {
                    V = ee;
                  }
                  e.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ee) {
                  V = ee;
                }
                (M = e()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (ee) {
              if (ee && V && typeof ee.stack == "string")
                return [ee.stack, V.stack];
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
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && xs.set(e, j), j;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Cs = !1, C.H = i, Tn(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? dl(p) : "", typeof e == "function" && xs.set(e, p), p;
    }
    function Ee(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return dl(e.type);
        case 16:
          return dl("Lazy");
        case 13:
          return dl("Suspense");
        case 19:
          return dl("SuspenseList");
        case 0:
        case 15:
          return e = ne(e.type, !1), e;
        case 11:
          return e = ne(e.type.render, !1), e;
        case 1:
          return e = ne(e.type, !0), e;
        default:
          return "";
      }
    }
    function Pt(e) {
      try {
        var t = "";
        do {
          t += Ee(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = dl(
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
    function Ll() {
      if (jl === null) return null;
      var e = jl._debugOwner;
      return e != null ? Ql(e) : null;
    }
    function hl() {
      return jl === null ? "" : Pt(jl);
    }
    function k(e, t, a, i, o, f, d) {
      var h = jl;
      C.getCurrentStack = e === null ? null : hl, Oa = !1, jl = e;
      try {
        return t(a, i, o, f, d);
      } finally {
        jl = h;
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function el(e) {
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
    function x(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _(e) {
      if (el(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Z(e) {
      var t = e.alternate;
      if (!t) {
        if (t = el(e), t === null)
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
            if (f === a) return _(o), e;
            if (f === i) return _(o), t;
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
    function ue(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ue(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ie(e) {
      return { current: e };
    }
    function ze(e, t) {
      0 > yn ? console.error("Unexpected pop.") : (t !== Bs[yn] && console.error("Unexpected Fiber popped."), e.current = ny[yn], ny[yn] = null, Bs[yn] = null, yn--);
    }
    function Ae(e, t, a) {
      yn++, ny[yn] = e.current, Bs[yn] = a, e.current = t;
    }
    function Tt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function oe(e, t) {
      Ae(fl, t, e), Ae(qs, e, e), Ae(Yi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? w0(t) : lo;
          break;
        default:
          if (t = a === 8 ? t.parentNode : t, a = t.tagName, t = t.namespaceURI)
            t = w0(t), t = pt(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = bh;
                break;
              case "math":
                t = xv;
                break;
              default:
                t = lo;
            }
      }
      a = a.toLowerCase(), a = yr(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ze(Yi, e), Ae(Yi, a, e);
    }
    function ot(e) {
      ze(Yi, e), ze(qs, e), ze(fl, e);
    }
    function Ya() {
      return Tt(Yi.current);
    }
    function $a(e) {
      e.memoizedState !== null && Ae(Ys, e, e);
      var t = Tt(Yi.current), a = e.type, i = pt(t.context, a);
      a = yr(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ae(qs, e, e), Ae(Yi, i, e));
    }
    function Ml(e) {
      qs.current === e && (ze(Yi, e), ze(qs, e)), Ys.current === e && (ze(Ys, e), Jy._currentValue = cr);
    }
    function mt(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ke(e) {
      try {
        return ml(e), !1;
      } catch {
        return !0;
      }
    }
    function ml(e) {
      return "" + e;
    }
    function qe(e, t) {
      if (Ke(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          mt(e)
        ), ml(e);
    }
    function ra(e, t) {
      if (Ke(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          mt(e)
        ), ml(e);
    }
    function Wa(e) {
      if (Ke(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          mt(e)
        ), ml(e);
    }
    function ei(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        nf = t.inject(e), Vl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ti(e, t) {
      if (Vl && typeof Vl.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & 128) === 128;
          switch (t) {
            case Ma:
              var i = Ni;
              break;
            case _a:
              i = Xd;
              break;
            case vn:
              i = af;
              break;
            case Zc:
              i = uy;
              break;
            default:
              i = af;
          }
          Vl.onCommitFiberRoot(
            nf,
            e,
            i,
            a
          );
        } catch (o) {
          Jl || (Jl = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
    }
    function Je(e) {
      if (typeof cp == "function" && op(e), Vl && typeof Vl.setStrictMode == "function")
        try {
          Vl.setStrictMode(nf, e);
        } catch (t) {
          Jl || (Jl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function $i(e) {
      J = e;
    }
    function Wi() {
      J !== null && typeof J.markCommitStopped == "function" && J.markCommitStopped();
    }
    function En(e) {
      J !== null && typeof J.markComponentRenderStarted == "function" && J.markComponentRenderStarted(e);
    }
    function T() {
      J !== null && typeof J.markComponentRenderStopped == "function" && J.markComponentRenderStopped();
    }
    function F(e) {
      J !== null && typeof J.markRenderStarted == "function" && J.markRenderStarted(e);
    }
    function I() {
      J !== null && typeof J.markRenderStopped == "function" && J.markRenderStopped();
    }
    function re(e, t) {
      J !== null && typeof J.markStateUpdateScheduled == "function" && J.markStateUpdateScheduled(e, t);
    }
    function tl(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (fp(e) / uf | 0) | 0;
    }
    function lt(e) {
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
    function fe(e) {
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
    function yl(e, t) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var i = 0, o = e.suspendedLanes, f = e.pingedLanes, d = e.warmLanes;
      e = e.finishedLanes !== 0;
      var h = a & 134217727;
      return h !== 0 ? (a = h & ~o, a !== 0 ? i = fe(a) : (f &= h, f !== 0 ? i = fe(f) : e || (d = h & ~d, d !== 0 && (i = fe(d))))) : (h = a & ~o, h !== 0 ? i = fe(h) : f !== 0 ? i = fe(f) : e || (d = a & ~d, d !== 0 && (i = fe(d)))), i === 0 ? 0 : t !== 0 && t !== i && !(t & o) && (o = i & -i, d = t & -t, o >= d || o === 32 && (d & 4194176) !== 0) ? t : i;
    }
    function Na(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ll(e, t) {
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
      var e = ji;
      return ji <<= 1, !(ji & 4194176) && (ji = 128), e;
    }
    function li() {
      var e = Ns;
      return Ns <<= 1, !(Ns & 62914560) && (Ns = 4194304), e;
    }
    function Ul(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Ot(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Fa(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var O = 31 - Gl(a), j = 1 << O;
        h[O] = 0, y[O] = -1;
        var M = p[O];
        if (M !== null)
          for (p[O] = null, O = 0; O < M.length; O++) {
            var V = M[O];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~j;
      }
      i !== 0 && ru(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function ru(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Gl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194218;
    }
    function Il(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Gl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function e0(e, t, a) {
      if (kl)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Gl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function t0(e, t) {
      if (kl)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Gl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function l0(e) {
      return e &= -e, Ma < e ? _a < e ? e & 134217727 ? vn : Zc : _a : Ma;
    }
    function Df() {
      var e = nt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? vn : wc(e.type));
    }
    function or(e, t) {
      var a = nt.p;
      try {
        return nt.p = e, t();
      } finally {
        nt.p = a;
      }
    }
    function du(e) {
      delete e[Al], delete e[ca], delete e[_c], delete e[sp], delete e[rp];
    }
    function Rn(e) {
      var t = e[Al];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Vi] || a[Al]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Zu(e); e !== null; ) {
              if (a = e[Al])
                return a;
              e = Zu(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ia(e) {
      if (e = e[Al] || e[Vi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Of(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Fi(e) {
      var t = e[W0];
      return t || (t = e[W0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Xt(e) {
      e[Gi] = !0;
    }
    function hu(e, t) {
      zn(e, t), zn(e + "Capture", t);
    }
    function zn(e, t) {
      Ju[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ju[e] = t;
      var a = e.toLowerCase();
      for (iy[a] = e, e === "onDoubleClick" && (iy.ondblclick = e), e = 0; e < t.length; e++)
        js.add(t[e]);
    }
    function uo(e, t) {
      dp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function fr(e) {
      return In.call(oy, e) ? !0 : In.call(cy, e) ? !1 : F0.test(e) ? oy[e] = !0 : (cy[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Th(e, t, a) {
      if (fr(t)) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (qe(a, t), e === "" + a ? a : e);
      }
    }
    function Mf(e, t, a) {
      if (fr(t))
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
          qe(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Uf(e, t, a) {
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
        qe(a, t), e.setAttribute(t, "" + a);
      }
    }
    function mu(e, t, a, i) {
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
        qe(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function wt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Wa(e), e;
        default:
          return "";
      }
    }
    function vl(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Pl(e) {
      var t = vl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Wa(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Wa(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Wa(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function yu(e) {
      e._valueTracker || (e._valueTracker = Pl(e));
    }
    function sr(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = vl(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function rr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ja(e) {
      return e.replace(
        I0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Eh(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || fy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ll() || "A component",
        t.type
      ), fy = !0), t.value === void 0 || t.defaultValue === void 0 || wd || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ll() || "A component",
        t.type
      ), wd = !0);
    }
    function Ii(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (qe(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? vu(e, d, wt(t)) : a != null ? vu(e, d, wt(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (qe(h, "name"), e.name = "" + wt(h)) : e.removeAttribute("name");
    }
    function dr(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (qe(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + wt(a) : "", t = t != null ? "" + wt(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (qe(d, "name"), e.name = d);
    }
    function vu(e, t, a) {
      t === "number" && rr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Pi(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ey.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || P0 || (P0 = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || ev || (ev = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Vs || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Vs = !0);
    }
    function io() {
      var e = Ll();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Pa(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + wt(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Qt(e, t) {
      for (e = 0; e < Ld.length; e++) {
        var a = Ld[e];
        if (t[a] != null) {
          var i = El(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            io()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            io()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Qd || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Qd = !0);
    }
    function Ah(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Gs || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ll() || "A component"
      ), Gs = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Rh(e, t, a) {
      if (t != null && (t = "" + wt(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + wt(a) : "";
    }
    function ai(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (El(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = wt(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function ec(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? ec(e.children[0], t) : e;
    }
    function xt(e) {
      return "  " + "  ".repeat(e);
    }
    function co(e) {
      return "+ " + "  ".repeat(e);
    }
    function ni(e) {
      return "- " + "  ".repeat(e);
    }
    function zh(e) {
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
    function Hf(e, t) {
      return Zd.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function tc(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return co(a) + Hf(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), co(a) + Hf(e, i) + `
` + ni(a) + Hf(t, i) + `
`;
      }
      return xt(a) + Hf(e, i) + `
`;
    }
    function oo(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function da(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (El(e)) return "[...]";
          if (e.$$typeof === xi)
            return (t = ae(e.type)) ? "<" + t + ">" : "<...>";
          var a = oo(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = da(
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
    function pl(e, t) {
      return typeof e != "string" || Zd.test(e) ? "{" + da(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function hr(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = pl(
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
    function Lv(e, t, a) {
      var i = "", o = ve({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = da(e[f], d);
          t.hasOwnProperty(f) ? (d = da(t[f], d), i += co(a) + f + ": " + h + `
`, i += ni(a) + f + ": " + d + `
`) : i += co(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = da(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += ni(a) + y + ": " + e + `
`);
      return i;
    }
    function mr(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += hr(
          e,
          t,
          xt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var O = pl(
                p,
                h
              );
              h = pl(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && oo(p) === "Object" && oo(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < O.indexOf("...") || -1 < h.indexOf("...")) ? o += xt(i + 1) + d + `={{
` + Lv(
                p,
                y,
                i + 2
              ) + xt(i + 1) + `}}
` : (o += co(i + 1) + d + "=" + O + `
`, o += ni(i + 1) + d + "=" + h + `
`);
            } else
              o += xt(i + 1) + d + "=" + pl(t[d], h) + `
`;
          }
        f.forEach(function(j) {
          if (j !== "children") {
            var M = 120 - 2 * (i + 1) - j.length - 1;
            o += ni(i + 1) + j + "=" + pl(a[j], M) + `
`;
          }
        }), o = o === "" ? xt(i) + "<" + e + `>
` : xt(i) + "<" + e + `
` + o + xt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += tc(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + tc("" + t, null, i + 1) : o + tc("" + t, void 0, i + 1)), o;
    }
    function Dh(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Dh(e, t), e = e.sibling;
        return a;
      }
      return xt(t) + "<" + a + `>
`;
    }
    function fo(e, t) {
      var a = ec(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return xt(t) + `...
` + fo(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += xt(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = tc(o, e.serverProps, t), t++;
      else if (f = zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = pl(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = xt(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = hr(
            f,
            o,
            co(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = mr(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += fo(d, t), f++) : p += Dh(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += xt(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (ni(t) + Hf(f, 120 - 2 * t) + `
`) : p + hr(
          f.type,
          f.props,
          ni(t)
        );
      return a + i + p;
    }
    function Oh(e) {
      try {
        return `

` + fo(e, 0);
      } catch {
        return "";
      }
    }
    function ha(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Oh(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function yr(e, t) {
      e = ve({}, e || ku);
      var a = { tag: t };
      return _d.indexOf(t) !== -1 && (e.aTagInScope = null, e.buttonTagInScope = null, e.nobrTagInScope = null), Xi.indexOf(t) !== -1 && (e.pTagInButtonScope = null), tv.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (e.listItemTagAutoclosing = null, e.dlItemTagAutoclosing = null), e.current = a, t === "form" && (e.formTag = a), t === "a" && (e.aTagInScope = a), t === "button" && (e.buttonTagInScope = a), t === "nobr" && (e.nobrTagInScope = a), t === "p" && (e.pTagInButtonScope = a), t === "li" && (e.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = a), t === "#document" || t === "html" ? e.containerTagInScope = null : e.containerTagInScope || (e.containerTagInScope = a), e;
    }
    function Mh(e, t) {
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
          return wi.indexOf(t) === -1;
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
    function Uh(e, t) {
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
    function lc(e, t) {
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
    function vr(e, t) {
      t = t || ku;
      var a = t.current;
      if (t = (a = Mh(
        e,
        a && a.tag
      ) ? null : a) ? null : Uh(e, t), t = a || t, !t) return !0;
      t = t.tag;
      var i = String(!!a) + "|" + e + "|" + t;
      if (Qi[i]) return !1;
      Qi[i] = !0;
      var o = (i = jl) ? lc(i.return, t) : null;
      return i = i !== null && o !== null ? ha(o, i, null) : "", o = "<" + e + ">", a ? (a = "", t === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
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
    function Cf(e, t) {
      if (Mh("#text", t)) return !0;
      var a = "#text|" + t;
      if (Qi[a]) return !1;
      Qi[a] = !0;
      var i = (a = jl) ? lc(a, t) : null;
      return a = a !== null && i !== null ? ha(
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
    function Dn(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Zv(e) {
      return e.replace(Kd, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Hh(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? of.hasOwnProperty(t) && of[t] || (of[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Zv(t.replace(lv, "ms-"))
      )) : hp.test(t) ? of.hasOwnProperty(t) && of[t] || (of[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !dy.test(a) || ff.hasOwnProperty(a) && ff[a] || (ff[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(dy, "")
      )), typeof a == "number" && (isNaN(a) ? Xs || (Xs = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || hy || (hy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || sf.has(t) ? t === "float" ? e.cssFloat = a : (ra(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Ch(e, t, a) {
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
                for (var f = sy[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = sy[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = sy[y] || [y], f = 0; f < o.length; f++)
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
          p = t[M], t.hasOwnProperty(M) && a[M] !== p && Hh(e, M, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Hh(e, i, t[i]);
    }
    function ac(e) {
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
    function a0(e) {
      return my.get(e) || e;
    }
    function _v(e, t) {
      if (In.call(rf, t) && rf[t])
        return !0;
      if (l.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = yy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), rf[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), rf[t] = !0;
      }
      if (Jd.test(t)) {
        if (e = t.toLowerCase(), e = yy.hasOwnProperty(e) ? e : null, e == null) return rf[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), rf[t] = !0);
      }
      return !0;
    }
    function pr(e, t) {
      var a = [], i;
      for (i in t)
        _v(e, i) || a.push(i);
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
    function xh(e, t, a, i) {
      if (In.call(u, t) && u[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), u[t] = !0;
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
          ), u[t] = !0;
        if (c.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), u[t] = !0;
      } else if (c.test(t))
        return s.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), u[t] = !0;
      if (r.test(t) || m.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), u[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), u[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), u[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), u[t] = !0;
      if (Kc.hasOwnProperty(o)) {
        if (o = Kc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), u[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), u[t] = !0;
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
              ), u[t] = !0);
          }
        case "function":
        case "symbol":
          return u[t] = !0, !1;
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
            ), u[t] = !0;
          }
      }
      return !0;
    }
    function Bh(e, t, a) {
      var i = [], o;
      for (o in t)
        xh(e, o, t[o], a) || i.push(o);
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
    function On(e) {
      return v.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ui(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function qh(e) {
      var t = Ia(e);
      if (t && (e = t.stateNode)) {
        var a = e[ca] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ii(
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
              for (qe(t, "name"), a = a.querySelectorAll(
                'input[name="' + ja(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ca] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ii(
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
                i = a[t], i.form === e.form && sr(i);
            }
            break e;
          case "textarea":
            Rh(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Pa(e, !!a.multiple, t, !1);
        }
      }
    }
    function gr(e, t, a) {
      if (w) return e(t, a);
      w = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (w = !1, (R !== null || N !== null) && (ba(), R && (t = R, e = N, N = R = null, qh(t), e)))
          for (t = 0; t < e.length; t++) qh(e[t]);
      }
    }
    function so(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ca] || null;
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
    function ro() {
      if (rt) return rt;
      var e, t = de, a = t.length, i, o = "value" in $ ? $.value : $.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return rt = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function ho(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ii() {
      return !0;
    }
    function pu() {
      return !1;
    }
    function Hl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ii : pu, this.isPropagationStopped = pu, this;
      }
      return ve(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ii);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ii);
        },
        persist: function() {
        },
        isPersistent: ii
      }), t;
    }
    function br(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Ob[e]) ? !!t[e] : !1;
    }
    function Sr() {
      return br;
    }
    function xf(e, t) {
      switch (e) {
        case "keyup":
          return Gb.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== yg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Bf(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function n0(e, t) {
      switch (e) {
        case "compositionend":
          return Bf(t);
        case "keypress":
          return t.which !== pg ? null : (bg = !0, gg);
        case "textInput":
          return e = t.data, e === gg && bg ? null : e;
        default:
          return null;
      }
    }
    function ea(e, t) {
      if (kd)
        return e === "compositionend" || !vp && xf(e, t) ? (e = ro(), rt = de = $ = null, kd = !1, e) : null;
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
          return vg && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function ci(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wb[e.type] : t === "textarea";
    }
    function Tr(e) {
      if (!oa) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function mo(e, t, a, i) {
      R ? N ? N.push(i) : N = [i] : R = i, t = Qu(t, "onChange"), 0 < t.length && (a = new A(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Kv(e) {
      vd(e, 0);
    }
    function yo(e) {
      var t = Of(e);
      if (sr(t)) return e;
    }
    function Er(e, t) {
      if (e === "change") return t;
    }
    function vo() {
      py && (py.detachEvent("onpropertychange", qf), gy = py = null);
    }
    function qf(e) {
      if (e.propertyName === "value" && yo(gy)) {
        var t = [];
        mo(
          t,
          gy,
          e,
          ui(e)
        ), gr(Kv, t);
      }
    }
    function u0(e, t, a) {
      e === "focusin" ? (vo(), py = t, gy = a, py.attachEvent("onpropertychange", qf)) : e === "focusout" && vo();
    }
    function Jv(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return yo(gy);
    }
    function kv(e, t) {
      if (e === "click") return yo(t);
    }
    function $v(e, t) {
      if (e === "input" || e === "change")
        return yo(t);
    }
    function Yh(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Yf(e, t) {
      if (Ha(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!In.call(t, o) || !Ha(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function i0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function c0(e, t) {
      var a = i0(e);
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
        a = i0(a);
      }
    }
    function o0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? o0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function f0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = rr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = rr(e.document);
      }
      return t;
    }
    function Ar(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Wv(e, t) {
      var a = f0(t);
      t = e.focusedElem;
      var i = e.selectionRange;
      if (a !== t && t && t.ownerDocument && o0(t.ownerDocument.documentElement, t)) {
        if (i !== null && Ar(t)) {
          if (e = i.start, a = i.end, a === void 0 && (a = e), "selectionStart" in t)
            t.selectionStart = e, t.selectionEnd = Math.min(
              a,
              t.value.length
            );
          else if (a = (e = t.ownerDocument || document) && e.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var o = t.textContent.length, f = Math.min(i.start, o);
            i = i.end === void 0 ? f : Math.min(i.end, o), !a.extend && f > i && (o = i, i = f, f = o), o = c0(t, f);
            var d = c0(
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
    function s0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      gp || $d == null || $d !== rr(i) || (i = $d, "selectionStart" in i && Ar(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), by && Yf(by, i) || (by = i, i = Qu(pp, "onSelect"), 0 < i.length && (t = new A(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = $d)));
    }
    function nc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function uc(e) {
      if (bp[e]) return bp[e];
      if (!Wd[e]) return e;
      var t = Wd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in Tg)
          return bp[e] = t[a];
      return e;
    }
    function ma(e, t) {
      Dg.set(e, t), hu(t, [e]);
    }
    function Rr() {
      for (var e = Fd, t = Sp = Fd = 0; t < e; ) {
        var a = eu[t];
        eu[t++] = null;
        var i = eu[t];
        eu[t++] = null;
        var o = eu[t];
        eu[t++] = null;
        var f = eu[t];
        if (eu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && r0(a, o, f);
      }
    }
    function zr(e, t, a, i) {
      eu[Fd++] = e, eu[Fd++] = t, eu[Fd++] = a, eu[Fd++] = i, Sp |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Nh(e, t, a, i) {
      return zr(e, t, a, i), Dr(e);
    }
    function gl(e, t) {
      return zr(e, null, null, t), Dr(e);
    }
    function r0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & av || (o = !0)), e = f, f = f.return;
      o && t !== null && e.tag === 3 && (f = e.stateNode, o = 31 - Gl(a), f = f.hiddenUpdates, e = f[o], e === null ? f[o] = [t] : e.push(t), t.lane = a | 536870912);
    }
    function Dr(e) {
      if (Qy > nS)
        throw tr = Qy = 0, Ly = $p = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      tr > uS && (tr = 0, Ly = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && qm(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && qm(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function ic(e) {
      if (tu === null) return e;
      var t = tu(e);
      return t === void 0 ? e : t.current;
    }
    function jh(e) {
      if (tu === null) return e;
      var t = tu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = ic(e.render), e.render !== t) ? (t = { $$typeof: Qc, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function d0(e, t) {
      if (tu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Nl) && (i = !0);
          break;
        case 11:
          (o === Qc || o === Nl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Bi || o === Nl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = tu(a), e !== void 0 && e === tu(t)));
    }
    function h0(e) {
      tu !== null && typeof WeakSet == "function" && (Id === null && (Id = /* @__PURE__ */ new WeakSet()), Id.add(e));
    }
    function Vh(e, t, a) {
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
      if (tu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var p = !1;
      h = !1, y !== null && (y = tu(y), y !== void 0 && (a.has(y) ? h = !0 : t.has(y) && (d === 1 ? h = !0 : p = !0))), Id !== null && (Id.has(e) || i !== null && Id.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || p) && (i = gl(e, 2), i !== null && et(i, e, 2)), o === null || h || Vh(
        o,
        t,
        a
      ), f !== null && Vh(
        f,
        t,
        a
      );
    }
    function gu() {
      var e = Qs;
      return Qs = 0, e;
    }
    function Or(e) {
      var t = Qs;
      return Qs = e, t;
    }
    function cc(e) {
      var t = Qs;
      return Qs += e, t;
    }
    function oc(e) {
      Ka = Pd(), 0 > e.actualStartTime && (e.actualStartTime = Ka);
    }
    function Gh(e) {
      if (0 <= Ka) {
        var t = Pd() - Ka;
        e.actualDuration += t, e.selfBaseDuration = t, Ka = -1;
      }
    }
    function Xh(e) {
      if (0 <= Ka) {
        var t = Pd() - Ka;
        e.actualDuration += t, Ka = -1;
      }
    }
    function en() {
      if (0 <= Ka) {
        var e = Pd() - Ka;
        Ka = -1, Qs += e;
      }
    }
    function tn() {
      Ka = Pd();
    }
    function Nf(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ta(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Ep.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Pt(t)
        }, Ep.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Pt(t)
      };
    }
    function Va(e, t) {
      oi(), eh[th++] = fv, eh[th++] = ov, ov = e, fv = t;
    }
    function m0(e, t, a) {
      oi(), lu[au++] = Jc, lu[au++] = kc, lu[au++] = Zs, Zs = e;
      var i = Jc;
      e = kc;
      var o = 32 - Gl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Gl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Jc = 1 << 32 - Gl(t) + o | a << o | i, kc = f + e;
      } else
        Jc = 1 << f | a << o | i, kc = e;
    }
    function wh(e) {
      oi(), e.return !== null && (Va(e, 1), m0(e, 1, 0));
    }
    function Qh(e) {
      for (; e === ov; )
        ov = eh[--th], eh[th] = null, fv = eh[--th], eh[th] = null;
      for (; e === Zs; )
        Zs = lu[--au], lu[au] = null, kc = lu[--au], lu[au] = null, Jc = lu[--au], lu[au] = null;
    }
    function oi() {
      Ve || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function fi(e, t) {
      if (e.return === null) {
        if (nu === null)
          nu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (nu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          nu.distanceFromLeaf > t && (nu.distanceFromLeaf = t);
        }
        return nu;
      }
      var a = fi(
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
    function fc(e, t) {
      $c || (e = fi(e, 0), e.serverProps = null, t !== null && (t = Ad(t), e.serverTail.push(t)));
    }
    function ln(e) {
      var t = "", a = nu;
      throw a !== null && (nu = null, t = Oh(a)), sc(
        ta(
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
      ), Ap;
    }
    function y0(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Al] = e, t[ca] = i, Bc(a, i), a) {
        case "dialog":
          De("cancel", t), De("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          De("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Zy.length; a++)
            De(Zy[a], t);
          break;
        case "source":
          De("error", t);
          break;
        case "img":
        case "image":
        case "link":
          De("error", t), De("load", t);
          break;
        case "details":
          De("toggle", t);
          break;
        case "input":
          uo("input", i), De("invalid", t), Eh(t, i), dr(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), yu(t);
          break;
        case "option":
          Pi(t, i);
          break;
        case "select":
          uo("select", i), De("invalid", t), Qt(t, i);
          break;
        case "textarea":
          uo("textarea", i), De("invalid", t), Ah(t, i), ai(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), yu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || bd(t.textContent, a) ? (i.popover != null && (De("beforetoggle", t), De("toggle", t)), i.onScroll != null && De("scroll", t), i.onScrollEnd != null && De("scrollend", t), i.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || ln(e);
    }
    function jf(e) {
      for (Ca = e.return; Ca; )
        switch (Ca.tag) {
          case 3:
          case 27:
            _i = !0;
            return;
          case 5:
          case 13:
            _i = !1;
            return;
          default:
            Ca = Ca.return;
        }
    }
    function po(e) {
      if (e !== Ca) return !1;
      if (!Ve)
        return jf(e), Ve = !0, !1;
      var t = !1, a;
      if ((a = e.tag !== 3 && e.tag !== 27) && ((a = e.tag === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ie(e.type, e.memoizedProps)), a = !a), a && (t = !0), t && Wl) {
        for (t = Wl; t; ) {
          a = fi(e, 0);
          var i = Ad(t);
          a.serverTail.push(i), t = i.type === "Suspense" ? Rs(t) : ua(t.nextSibling);
        }
        ln(e);
      }
      if (jf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Wl = Rs(e);
      } else
        Wl = Ca ? ua(e.stateNode.nextSibling) : null;
      return !0;
    }
    function go() {
      Wl = Ca = null, $c = Ve = !1;
    }
    function sc(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function Mr() {
      var e = nu;
      e !== null && (nu = null, e = Oh(e), console.error(
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
    function Lh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Zh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Vf() {
    }
    function v0(e, t, a) {
      C.actQueue !== null && (C.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Vf, Vf), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, g0(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Vf, Vf);
          else {
            if (e = dt, e !== null && 100 < e.shellSuspendCounter)
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
              throw e = t.reason, g0(e), e;
          }
          throw Oy = t, rv = !0, sv;
      }
    }
    function p0() {
      if (Oy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Oy;
      return Oy = null, rv = !1, e;
    }
    function g0(e) {
      if (e === sv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function bl(e) {
      var t = Te;
      return e != null && (Te = t === null ? e : t.concat(e)), t;
    }
    function Ur(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Xo(e, a.mode, 0), t._debugInfo = Te, t.return = a), k(
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
    function Cl(e) {
      var t = My;
      return My += 1, lh === null && (lh = Lh()), v0(lh, e, t);
    }
    function bu(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Gf(e, t) {
      throw t.$$typeof === ly ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Xf(e, t) {
      var a = le(e) || "Component";
      _g[a] || (_g[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
      Kg[a] || (Kg[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function _h(e) {
      function t(S, b) {
        if (e) {
          var E = S.deletions;
          E === null ? (S.deletions = [b], S.flags |= 16) : E.push(b);
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
      function f(S, b, E) {
        return S.index = E, e ? (E = S.alternate, E !== null ? (E = E.index, E < b ? (S.flags |= 33554434, b) : E) : (S.flags |= 33554434, b)) : (S.flags |= 1048576, b);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 33554434), S;
      }
      function h(S, b, E, Y) {
        return b === null || b.tag !== 6 ? (b = cd(
          E,
          S.mode,
          Y
        ), b.return = S, b._debugOwner = S, b._debugInfo = Te, b) : (b = o(b, E), b.return = S, b._debugInfo = Te, b);
      }
      function y(S, b, E, Y) {
        var K = E.type;
        return K === Fn ? (b = O(
          S,
          b,
          E.props.children,
          Y,
          E.key
        ), Ur(E, b, S), b) : b !== null && (b.elementType === K || d0(b, E) || typeof K == "object" && K !== null && K.$$typeof === Nl && hf(K) === b.type) ? (b = o(b, E.props), bu(b, E), b.return = S, b._debugOwner = E._owner, b._debugInfo = Te, b) : (b = Xo(E, S.mode, Y), bu(b, E), b.return = S, b._debugInfo = Te, b);
      }
      function p(S, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ds(E, S.mode, Y), b.return = S, b._debugInfo = Te, b) : (b = o(b, E.children || []), b.return = S, b._debugInfo = Te, b);
      }
      function O(S, b, E, Y, K) {
        return b === null || b.tag !== 7 ? (b = Yu(
          E,
          S.mode,
          Y,
          K
        ), b.return = S, b._debugOwner = S, b._debugInfo = Te, b) : (b = o(b, E), b.return = S, b._debugInfo = Te, b);
      }
      function j(S, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = cd(
            "" + b,
            S.mode,
            E
          ), b.return = S, b._debugOwner = S, b._debugInfo = Te, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case xi:
              return E = Xo(
                b,
                S.mode,
                E
              ), bu(E, b), E.return = S, S = bl(b._debugInfo), E._debugInfo = Te, Te = S, E;
            case lf:
              return b = ds(
                b,
                S.mode,
                E
              ), b.return = S, b._debugInfo = Te, b;
            case Nl:
              var Y = bl(b._debugInfo);
              return b = hf(b), S = j(S, b, E), Te = Y, S;
          }
          if (El(b) || Be(b))
            return E = Yu(
              b,
              S.mode,
              E,
              null
            ), E.return = S, E._debugOwner = S, S = bl(b._debugInfo), E._debugInfo = Te, Te = S, E;
          if (typeof b.then == "function")
            return Y = bl(b._debugInfo), S = j(
              S,
              Cl(b),
              E
            ), Te = Y, S;
          if (b.$$typeof === Da)
            return j(
              S,
              Bo(S, b),
              E
            );
          Gf(S, b);
        }
        return typeof b == "function" && Xf(S, b), typeof b == "symbol" && wf(S, b), null;
      }
      function M(S, b, E, Y) {
        var K = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return K !== null ? null : h(S, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case xi:
              return E.key === K ? (K = bl(E._debugInfo), S = y(
                S,
                b,
                E,
                Y
              ), Te = K, S) : null;
            case lf:
              return E.key === K ? p(S, b, E, Y) : null;
            case Nl:
              return K = bl(E._debugInfo), E = hf(E), S = M(
                S,
                b,
                E,
                Y
              ), Te = K, S;
          }
          if (El(E) || Be(E))
            return K !== null ? null : (K = bl(E._debugInfo), S = O(
              S,
              b,
              E,
              Y,
              null
            ), Te = K, S);
          if (typeof E.then == "function")
            return K = bl(E._debugInfo), S = M(
              S,
              b,
              Cl(E),
              Y
            ), Te = K, S;
          if (E.$$typeof === Da)
            return M(
              S,
              b,
              Bo(S, E),
              Y
            );
          Gf(S, E);
        }
        return typeof E == "function" && Xf(S, E), typeof E == "symbol" && wf(S, E), null;
      }
      function V(S, b, E, Y, K) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return S = S.get(E) || null, h(b, S, "" + Y, K);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case xi:
              return E = S.get(
                Y.key === null ? E : Y.key
              ) || null, S = bl(Y._debugInfo), b = y(
                b,
                E,
                Y,
                K
              ), Te = S, b;
            case lf:
              return S = S.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, S, Y, K);
            case Nl:
              var ye = bl(Y._debugInfo);
              return Y = hf(Y), b = V(
                S,
                b,
                E,
                Y,
                K
              ), Te = ye, b;
          }
          if (El(Y) || Be(Y))
            return E = S.get(E) || null, S = bl(Y._debugInfo), b = O(
              b,
              E,
              Y,
              K,
              null
            ), Te = S, b;
          if (typeof Y.then == "function")
            return ye = bl(Y._debugInfo), b = V(
              S,
              b,
              E,
              Cl(Y),
              K
            ), Te = ye, b;
          if (Y.$$typeof === Da)
            return V(
              S,
              b,
              E,
              Bo(b, Y),
              K
            );
          Gf(b, Y);
        }
        return typeof Y == "function" && Xf(b, Y), typeof Y == "symbol" && wf(b, Y), null;
      }
      function ee(S, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case xi:
          case lf:
            Dt(S, b, E);
            var K = E.key;
            if (typeof K != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(K);
              break;
            }
            if (!Y.has(K)) {
              Y.add(K);
              break;
            }
            k(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                K
              );
            });
            break;
          case Nl:
            E = hf(E), ee(S, b, E, Y);
        }
        return Y;
      }
      function be(S, b, E, Y) {
        for (var K = null, ye = null, P = null, pe = b, Se = b = 0, zt = null; pe !== null && Se < E.length; Se++) {
          pe.index > Se ? (zt = pe, pe = null) : zt = pe.sibling;
          var Ft = M(
            S,
            pe,
            E[Se],
            Y
          );
          if (Ft === null) {
            pe === null && (pe = zt);
            break;
          }
          K = ee(
            S,
            Ft,
            E[Se],
            K
          ), e && pe && Ft.alternate === null && t(S, pe), b = f(Ft, b, Se), P === null ? ye = Ft : P.sibling = Ft, P = Ft, pe = zt;
        }
        if (Se === E.length)
          return a(S, pe), Ve && Va(S, Se), ye;
        if (pe === null) {
          for (; Se < E.length; Se++)
            pe = j(S, E[Se], Y), pe !== null && (K = ee(
              S,
              pe,
              E[Se],
              K
            ), b = f(
              pe,
              b,
              Se
            ), P === null ? ye = pe : P.sibling = pe, P = pe);
          return Ve && Va(S, Se), ye;
        }
        for (pe = i(pe); Se < E.length; Se++)
          zt = V(
            pe,
            S,
            Se,
            E[Se],
            Y
          ), zt !== null && (K = ee(
            S,
            zt,
            E[Se],
            K
          ), e && zt.alternate !== null && pe.delete(
            zt.key === null ? Se : zt.key
          ), b = f(
            zt,
            b,
            Se
          ), P === null ? ye = zt : P.sibling = zt, P = zt);
        return e && pe.forEach(function(no) {
          return t(S, no);
        }), Ve && Va(S, Se), ye;
      }
      function Wt(S, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var K = null, ye = null, P = b, pe = b = 0, Se = null, zt = null, Ft = E.next(); P !== null && !Ft.done; pe++, Ft = E.next()) {
          P.index > pe ? (Se = P, P = null) : Se = P.sibling;
          var no = M(S, P, Ft.value, Y);
          if (no === null) {
            P === null && (P = Se);
            break;
          }
          zt = ee(
            S,
            no,
            Ft.value,
            zt
          ), e && P && no.alternate === null && t(S, P), b = f(no, b, pe), ye === null ? K = no : ye.sibling = no, ye = no, P = Se;
        }
        if (Ft.done)
          return a(S, P), Ve && Va(S, pe), K;
        if (P === null) {
          for (; !Ft.done; pe++, Ft = E.next())
            P = j(S, Ft.value, Y), P !== null && (zt = ee(
              S,
              P,
              Ft.value,
              zt
            ), b = f(
              P,
              b,
              pe
            ), ye === null ? K = P : ye.sibling = P, ye = P);
          return Ve && Va(S, pe), K;
        }
        for (P = i(P); !Ft.done; pe++, Ft = E.next())
          Se = V(
            P,
            S,
            pe,
            Ft.value,
            Y
          ), Se !== null && (zt = ee(
            S,
            Se,
            Ft.value,
            zt
          ), e && Se.alternate !== null && P.delete(
            Se.key === null ? pe : Se.key
          ), b = f(
            Se,
            b,
            pe
          ), ye === null ? K = Se : ye.sibling = Se, ye = Se);
        return e && P.forEach(function(pS) {
          return t(S, pS);
        }), Ve && Va(S, pe), K;
      }
      function Fe(S, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === Fn && E.key === null && (Ur(E, null, S), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case xi:
              var K = bl(E._debugInfo);
              e: {
                for (var ye = E.key; b !== null; ) {
                  if (b.key === ye) {
                    if (ye = E.type, ye === Fn) {
                      if (b.tag === 7) {
                        a(
                          S,
                          b.sibling
                        ), Y = o(
                          b,
                          E.props.children
                        ), Y.return = S, Y._debugOwner = E._owner, Y._debugInfo = Te, Ur(E, Y, S), S = Y;
                        break e;
                      }
                    } else if (b.elementType === ye || d0(
                      b,
                      E
                    ) || typeof ye == "object" && ye !== null && ye.$$typeof === Nl && hf(ye) === b.type) {
                      a(
                        S,
                        b.sibling
                      ), Y = o(b, E.props), bu(Y, E), Y.return = S, Y._debugOwner = E._owner, Y._debugInfo = Te, S = Y;
                      break e;
                    }
                    a(S, b);
                    break;
                  } else t(S, b);
                  b = b.sibling;
                }
                E.type === Fn ? (Y = Yu(
                  E.props.children,
                  S.mode,
                  Y,
                  E.key
                ), Y.return = S, Y._debugOwner = S, Y._debugInfo = Te, Ur(E, Y, S), S = Y) : (Y = Xo(
                  E,
                  S.mode,
                  Y
                ), bu(Y, E), Y.return = S, Y._debugInfo = Te, S = Y);
              }
              return S = d(S), Te = K, S;
            case lf:
              e: {
                for (K = E, E = K.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === K.containerInfo && b.stateNode.implementation === K.implementation) {
                      a(
                        S,
                        b.sibling
                      ), Y = o(
                        b,
                        K.children || []
                      ), Y.return = S, S = Y;
                      break e;
                    } else {
                      a(S, b);
                      break;
                    }
                  else t(S, b);
                  b = b.sibling;
                }
                Y = ds(
                  K,
                  S.mode,
                  Y
                ), Y.return = S, S = Y;
              }
              return d(S);
            case Nl:
              return K = bl(E._debugInfo), E = hf(E), S = Fe(
                S,
                b,
                E,
                Y
              ), Te = K, S;
          }
          if (El(E))
            return K = bl(E._debugInfo), S = be(
              S,
              b,
              E,
              Y
            ), Te = K, S;
          if (Be(E)) {
            if (K = bl(E._debugInfo), ye = Be(E), typeof ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var P = ye.call(E);
            return P === E ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(P) !== "[object Generator]") && (Lg || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Lg = !0) : E.entries !== ye || Op || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Op = !0), S = Wt(
              S,
              b,
              P,
              Y
            ), Te = K, S;
          }
          if (typeof E.then == "function")
            return K = bl(E._debugInfo), S = Fe(
              S,
              b,
              Cl(E),
              Y
            ), Te = K, S;
          if (E.$$typeof === Da)
            return Fe(
              S,
              b,
              Bo(S, E),
              Y
            );
          Gf(S, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (K = "" + E, b !== null && b.tag === 6 ? (a(
          S,
          b.sibling
        ), Y = o(b, K), Y.return = S, S = Y) : (a(S, b), Y = cd(
          K,
          S.mode,
          Y
        ), Y.return = S, Y._debugOwner = S, Y._debugInfo = Te, S = Y), d(S)) : (typeof E == "function" && Xf(S, E), typeof E == "symbol" && wf(S, E), a(S, b));
      }
      return function(S, b, E, Y) {
        var K = Te;
        Te = null;
        try {
          My = 0;
          var ye = Fe(
            S,
            b,
            E,
            Y
          );
          return lh = null, ye;
        } catch (zt) {
          if (zt === sv) throw zt;
          var P = Ze(29, zt, null, S.mode);
          P.lanes = Y, P.return = S;
          var pe = P._debugInfo = Te;
          if (P._debugOwner = S._debugOwner, pe != null) {
            for (var Se = pe.length - 1; 0 <= Se; Se--)
              if (typeof pe[Se].stack == "string") {
                P._debugOwner = pe[Se];
                break;
              }
          }
          return P;
        } finally {
          Te = K;
        }
      };
    }
    function Hr(e, t) {
      var a = ki;
      Ae(dv, a, e), Ae(ah, t, e), ki = a | t.baseLanes;
    }
    function Kh(e) {
      Ae(dv, ki, e), Ae(
        ah,
        ah.current,
        e
      );
    }
    function Jh(e) {
      ki = dv.current, ze(ah, e), ze(dv, e);
    }
    function ya(e) {
      var t = e.alternate;
      Ae(
        Rl,
        Rl.current & nh,
        e
      ), Ae(uu, e, e), Ki === null && (t === null || ah.current !== null || t.memoizedState !== null) && (Ki = e);
    }
    function Cr(e) {
      if (e.tag === 22) {
        if (Ae(Rl, Rl.current, e), Ae(uu, e, e), Ki === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Ki = e);
        }
      } else Ga(e);
    }
    function Ga(e) {
      Ae(Rl, Rl.current, e), Ae(
        uu,
        uu.current,
        e
      );
    }
    function an(e) {
      ze(uu, e), Ki === e && (Ki = null), ze(Rl, e);
    }
    function Qf(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === nr || a.data === ur))
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
    function Su() {
      return {
        controller: new Wb(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Xa(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function rc(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && Fb(Ib, function() {
        e.controller.abort();
      });
    }
    function b0(e, t) {
      if (Hy === null) {
        var a = Hy = [];
        Mp = 0, Ks = yd(), uh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Mp++, t.then(si, si), t;
    }
    function si() {
      if (--Mp === 0 && Hy !== null) {
        uh !== null && (uh.status = "fulfilled");
        var e = Hy;
        Hy = null, Ks = 0, uh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function S0(e, t) {
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
    function xr() {
      var e = Js.current;
      return e !== null ? e : dt.pooledCache;
    }
    function Lf(e, t) {
      t === null ? Ae(Js, Js.current, e) : Ae(Js, t.pool, e);
    }
    function T0() {
      var e = xr();
      return e === null ? null : { parent: Dl._currentValue, pool: e };
    }
    function Re() {
      var e = B;
      ou === null ? ou = [e] : ou.push(e);
    }
    function Q() {
      var e = B;
      if (ou !== null && (Fc++, ou[Fc] !== e)) {
        var t = le(
          he
        );
        if (!$g.has(t) && ($g.add(t), ou !== null)) {
          for (var a = "", i = 0; i <= Fc; i++) {
            var o = ou[i], f = i === Fc ? e : o;
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
    function dc(e) {
      e == null || El(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        B,
        typeof e
      );
    }
    function Zf() {
      var e = le(he);
      Fg.has(e) || (Fg.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Mt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function va(e, t) {
      if (xy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          B
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        B,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ha(e[a], t[a])) return !1;
      return !0;
    }
    function la(e, t, a, i, o, f) {
      mf = f, he = t, ou = e !== null ? e._debugHookTypes : null, Fc = -1, xy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = le(
        he
      ), Up.has(f) || (Up.add(f), console.error(
        "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, C.H = e !== null && e.memoizedState !== null ? vf : ou !== null ? $s : yf, ks = f = (t.mode & fa) !== bt;
      var d = zp(a, i, o);
      if (ks = !1, ch && (d = _f(
        t,
        a,
        i,
        o
      )), f) {
        Je(!0);
        try {
          d = _f(
            t,
            a,
            i,
            o
          );
        } finally {
          Je(!1);
        }
      }
      return hc(e, t), d;
    }
    function hc(e, t) {
      t._debugHookTypes = ou, t.dependencies === null ? Wc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Wc
      }) : t.dependencies._debugThenableState = Wc, C.H = Ji;
      var a = ut !== null && ut.next !== null;
      if (mf = 0, ou = B = sl = ut = he = null, Fc = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), hv = !1, Cy = 0, Wc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && us(e) && (Xl = !0)), rv ? (rv = !1, e = !0) : e = !1, e && (t = le(t) || "Unknown", Wg.has(t) || Up.has(t) || (Wg.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function _f(e, t, a, i) {
      he = e;
      var o = 0;
      do {
        if (ch && (Wc = null), Cy = 0, ch = !1, o >= eS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, xy = !1, sl = ut = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Fc = -1, C.H = Ws, f = zp(t, a, i);
      } while (ch);
      return f;
    }
    function Br() {
      var e = C.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Un(t) : t, e = e.useState()[0], (ut !== null ? ut.memoizedState : null) !== e && (he.flags |= 1024), t;
    }
    function bo() {
      var e = mv !== 0;
      return mv = 0, e;
    }
    function Kf(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & $u) !== bt ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~a;
    }
    function Mn(e) {
      if (hv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        hv = !1;
      }
      mf = 0, ou = sl = ut = he = null, Fc = -1, B = null, ch = !1, Cy = mv = 0, Wc = null;
    }
    function Zl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sl === null ? he.memoizedState = sl = e : sl = sl.next = e, sl;
    }
    function we() {
      if (ut === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = ut.next;
      var t = sl === null ? he.memoizedState : sl.next;
      if (t !== null)
        sl = t, ut = e;
      else {
        if (e === null)
          throw he.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ut = e, e = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null
        }, sl === null ? he.memoizedState = sl = e : sl = sl.next = e;
      }
      return sl;
    }
    function Un(e) {
      var t = Cy;
      return Cy += 1, Wc === null && (Wc = Lh()), e = v0(Wc, e, t), t = he, (sl === null ? t.memoizedState : sl.next) === null && (t = t.alternate, C.H = t !== null && t.memoizedState !== null ? vf : yf), e;
    }
    function Tu(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Un(e);
        if (e.$$typeof === Da) return ft(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function al(e) {
      var t = null, a = he.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = he.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Hp(), he.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || xy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = K0;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function xl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ri(e, t, a) {
      var i = Zl();
      if (a !== void 0) {
        var o = a(t);
        if (ks) {
          Je(!0);
          try {
            a(t);
          } finally {
            Je(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = lm.bind(
        null,
        he,
        e
      ), [i.memoizedState, e];
    }
    function Eu(e) {
      var t = we();
      return So(t, ut, e);
    }
    function So(e, t, a) {
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
          if (j !== p.lane ? (He & j) === j : (mf & j) === j) {
            var M = p.revertLane;
            if (M === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), j === Ks && (O = !0);
            else if ((mf & M) === M) {
              p = p.next, M === Ks && (O = !0);
              continue;
            } else
              j = {
                lane: 0,
                revertLane: p.revertLane,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = j, d = f) : y = y.next = j, he.lanes |= M, bf |= M;
            j = p.action, ks && a(f, j), f = p.hasEagerState ? p.eagerState : a(f, j);
          } else
            M = {
              lane: j,
              revertLane: p.revertLane,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = M, d = f) : y = y.next = M, he.lanes |= j, bf |= j;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !Ha(f, e.memoizedState) && (Xl = !0, O && (a = uh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Bl(e) {
      var t = we(), a = t.queue;
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
        Ha(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function aa(e, t, a) {
      var i = he, o = Zl();
      if (Ve) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        ih || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      } else {
        if (f = t(), ih || (a = t(), Ha(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0)), dt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        He & 60 || Cn(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, yi(
        di.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, vc(
        cu | zl,
        xn.bind(
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
    function Hn(e, t, a) {
      var i = he, o = we(), f = Ve;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !ih) {
        var d = t();
        Ha(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      }
      (d = !Ha(
        (ut || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = di.bind(null, i, o, e);
      if (Zt(2048, zl, h, [e]), o.getSnapshot !== t || d || sl !== null && sl.memoizedState.tag & cu) {
        if (i.flags |= 2048, vc(
          cu | zl,
          xn.bind(
            null,
            i,
            o,
            a,
            t
          ),
          { destroy: void 0 },
          null
        ), dt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || mf & 60 || Cn(i, t, a);
      }
      return a;
    }
    function Cn(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = he.updateQueue, t === null ? (t = Hp(), he.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function xn(e, t, a, i) {
      t.value = a, t.getSnapshot = i, kh(t) && qr(e);
    }
    function di(e, t, a) {
      return a(function() {
        kh(t) && qr(e);
      });
    }
    function kh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ha(e, a);
      } catch {
        return !0;
      }
    }
    function qr(e) {
      var t = gl(e, 2);
      t !== null && et(t, e, 2);
    }
    function Jf(e) {
      var t = Zl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), ks) {
          Je(!0);
          try {
            a();
          } finally {
            Je(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xl,
        lastRenderedState: e
      }, t;
    }
    function Sl(e) {
      e = Jf(e);
      var t = e.queue, a = Oo.bind(
        null,
        he,
        t
      );
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Lt(e) {
      var t = Zl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = If.bind(
        null,
        he,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function je(e, t) {
      var a = we();
      return wa(a, ut, e, t);
    }
    function wa(e, t, a, i) {
      return e.baseState = a, So(
        e,
        ut,
        typeof i == "function" ? i : xl
      );
    }
    function nn(e, t) {
      var a = we();
      return ut !== null ? wa(a, ut, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function $h(e, t, a, i, o) {
      if (Du(e))
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
        C.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, hi(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function hi(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = C.T, d = {};
        C.T = d, C.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), y = C.S;
          y !== null && y(d, h), Wh(e, t, h);
        } catch (p) {
          mc(e, t, p);
        } finally {
          C.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Wh(e, t, d);
        } catch (p) {
          mc(e, t, p);
        }
    }
    function Wh(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          Fh(e, t, i);
        },
        function(i) {
          return mc(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
      )) : Fh(e, t, a);
    }
    function Fh(e, t, a) {
      t.status = "fulfilled", t.value = a, To(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, hi(e, a)));
    }
    function mc(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, To(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function To(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Eo(e, t) {
      return t;
    }
    function Bn(e, t) {
      if (Ve) {
        var a = dt.formState;
        if (a !== null) {
          e: {
            var i = he;
            if (Ve) {
              if (Wl) {
                t: {
                  for (var o = Wl, f = _i; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ua(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === ag || f === j1 ? o : null;
                }
                if (o) {
                  Wl = ua(
                    o.nextSibling
                  ), i = o.data === ag;
                  break e;
                }
              }
              ln(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Zl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Eo,
        lastRenderedState: t
      }, a.queue = i, a = Oo.bind(
        null,
        he,
        i
      ), i.dispatch = a, i = Jf(!1), f = If.bind(
        null,
        he,
        !1,
        i.queue
      ), i = Zl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = $h.bind(
        null,
        he,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function kf(e) {
      var t = we();
      return Yr(t, ut, e);
    }
    function Yr(e, t, a) {
      t = So(
        e,
        t,
        Eo
      )[0], e = Eu(xl)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Un(t) : t;
      var i = we(), o = i.queue, f = o.dispatch;
      return a !== i.memoizedState && (he.flags |= 2048, vc(
        cu | zl,
        E0.bind(null, o, a),
        { destroy: void 0 },
        null
      )), [t, f, e];
    }
    function E0(e, t) {
      e.action = t;
    }
    function yc(e) {
      var t = we(), a = ut;
      if (a !== null)
        return Yr(t, a, e);
      we(), t = t.memoizedState, a = we();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function vc(e, t, a, i) {
      return e = { tag: e, create: t, inst: a, deps: i, next: null }, t = he.updateQueue, t === null && (t = Hp(), he.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function pc(e) {
      var t = Zl();
      return e = { current: e }, t.memoizedState = e;
    }
    function mi(e, t, a, i) {
      var o = Zl();
      he.flags |= e, o.memoizedState = vc(
        cu | t,
        a,
        { destroy: void 0 },
        i === void 0 ? null : i
      );
    }
    function Zt(e, t, a, i) {
      var o = we();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      ut !== null && i !== null && va(i, ut.memoizedState.deps) ? o.memoizedState = vc(t, a, f, i) : (he.flags |= e, o.memoizedState = vc(
        cu | t,
        a,
        f,
        i
      ));
    }
    function yi(e, t) {
      (he.mode & $u) !== bt && (he.mode & Mg) === bt ? mi(142608384, zl, e, t) : mi(8390656, zl, e, t);
    }
    function Ao(e, t) {
      var a = 4194308;
      return (he.mode & $u) !== bt && (a |= 67108864), mi(a, Fl, e, t);
    }
    function Ro(e, t) {
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
    function zo(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (he.mode & $u) !== bt && (i |= 67108864), mi(
        i,
        Fl,
        Ro.bind(null, t, e),
        a
      );
    }
    function $f(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Zt(
        4,
        Fl,
        Ro.bind(null, t, e),
        a
      );
    }
    function Nr(e, t) {
      return Zl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function qn(e, t) {
      var a = we();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && va(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function jr(e, t) {
      var a = Zl();
      t = t === void 0 ? null : t;
      var i = e();
      if (ks) {
        Je(!0);
        try {
          e();
        } finally {
          Je(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Au(e, t) {
      var a = we();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && va(t, i[1]))
        return i[0];
      if (i = e(), ks) {
        Je(!0);
        try {
          e();
        } finally {
          Je(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Do(e, t) {
      var a = Zl();
      return Wf(a, e, t);
    }
    function Ih(e, t) {
      var a = we();
      return pa(
        a,
        ut.memoizedState,
        e,
        t
      );
    }
    function Vr(e, t) {
      var a = we();
      return ut === null ? Wf(a, e, t) : pa(
        a,
        ut.memoizedState,
        e,
        t
      );
    }
    function Wf(e, t, a) {
      return a === void 0 || mf & 1073741824 ? e.memoizedState = t : (e.memoizedState = a, e = od(), he.lanes |= e, bf |= e, a);
    }
    function pa(e, t, a, i) {
      return Ha(a, t) ? a : ah.current !== null ? (e = Wf(e, a, i), Ha(e, t) || (Xl = !0), e) : mf & 42 ? (e = od(), he.lanes |= e, bf |= e, t) : (Xl = !0, e.memoizedState = a);
    }
    function un(e, t, a, i, o) {
      var f = nt.p;
      nt.p = f !== 0 && f < _a ? f : _a;
      var d = C.T, h = {};
      C.T = h, If(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var y = o(), p = C.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          var O = S0(
            y,
            i
          );
          zu(
            e,
            t,
            O,
            _l(e)
          );
        } else
          zu(
            e,
            t,
            i,
            _l(e)
          );
      } catch (j) {
        zu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: j },
          _l(e)
        );
      } finally {
        nt.p = f, C.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Yn(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ph(e).queue;
      un(
        e,
        o,
        t,
        cr,
        a === null ? sa : function() {
          return Ru(e), a(i);
        }
      );
    }
    function Ph(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: cr,
        baseState: cr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: xl,
          lastRenderedState: cr
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
          lastRenderedReducer: xl,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Ru(e) {
      C.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Ph(e).next.queue;
      zu(
        e,
        t,
        {},
        _l(e)
      );
    }
    function cn() {
      var e = Jf(!1);
      return e = un.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), Zl().memoizedState = e, [!1, e];
    }
    function Nt() {
      var e = Eu(xl)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : Un(e),
        t
      ];
    }
    function Ff() {
      var e = Bl(xl)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : Un(e),
        t
      ];
    }
    function gc() {
      return ft(Jy);
    }
    function em() {
      var e = Zl(), t = dt.identifierPrefix;
      if (Ve) {
        var a = kc, i = Jc;
        a = (i & ~(1 << 32 - Gl(i) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = mv++, 0 < a && (t += "H" + a.toString(32)), t += ":";
      } else
        a = Pb++, t = ":" + t + "r" + a.toString(32) + ":";
      return e.memoizedState = t;
    }
    function tm() {
      return Zl().memoizedState = _t.bind(
        null,
        he
      );
    }
    function _t(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = _l(a);
            e = Hu(i);
            var o = Cu(a, e, i);
            o !== null && (et(o, a, i), is(o, a, i)), a = Su(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function lm(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = _l(e), a = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Du(e) ? bc(t, a) : (a = Nh(
        e,
        t,
        a,
        i
      ), a !== null && (et(
        a,
        e,
        i
      ), A0(
        a,
        t,
        i
      ))), re(e, i);
    }
    function Oo(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = _l(e), zu(
        e,
        t,
        a,
        i
      ), re(e, i);
    }
    function zu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Du(e)) bc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = C.H;
          C.H = Ba;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Ha(y, h))
              return zr(e, t, o, 0), dt === null && Rr(), !1;
          } catch {
          } finally {
            C.H = d;
          }
        }
        if (a = Nh(e, t, o, i), a !== null)
          return et(a, e, i), A0(a, t, i), !0;
      }
      return !1;
    }
    function If(e, t, a, i) {
      if (C.T === null && Ks === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: yd(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Du(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Nh(
          e,
          a,
          i,
          2
        ), t !== null && et(t, e, 2);
      re(e, 2);
    }
    function Du(e) {
      var t = e.alternate;
      return e === he || t !== null && t === he;
    }
    function bc(e, t) {
      ch = hv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function A0(e, t, a) {
      if (a & 4194176) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Il(e, a);
      }
    }
    function Gr(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        o1.has(t) || (o1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function am(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & fa) {
        Je(!0);
        try {
          f = a(i, o);
        } finally {
          Je(!1);
        }
      }
      f === void 0 && (t = ae(t) || "Component", n1.has(t) || (n1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ve({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function nm(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & fa) {
          Je(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Je(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ae(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Yf(a, i) || !Yf(o, f) : !0;
    }
    function vi(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = le(e) || "Component", Pg.has(e) || (Pg.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Cp.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Ou(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ve({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Pf(e, t) {
      yv(e), e = oh ? "An error occurred in the <" + oh + "> component." : "An error occurred in one of your React components.";
      var a = C.getCurrentStack, i = t.componentStack != null ? t.componentStack : "";
      C.getCurrentStack = function() {
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
        C.getCurrentStack = a;
      }
    }
    function um(e, t) {
      var a = oh ? "The above error occurred in the <" + oh + "> component." : "The above error occurred in one of your React components.", i = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((xp || "Anonymous") + "."), o = C.getCurrentStack, f = t.componentStack != null ? t.componentStack : "";
      C.getCurrentStack = function() {
        return f;
      };
      try {
        typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Fo(
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
        C.getCurrentStack = o;
      }
    }
    function Mu(e) {
      yv(e);
    }
    function me(e, t) {
      try {
        oh = t.source ? le(t.source) : null, xp = null;
        var a = t.value;
        if (C.actQueue !== null)
          C.thrownErrors.push(a);
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
    function ke(e, t, a) {
      try {
        oh = a.source ? le(a.source) : null, xp = le(t);
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
    function Ut(e, t, a) {
      return a = Hu(a), a.tag = jp, a.payload = { element: null }, a.callback = function() {
        k(t.source, me, e, t);
      }, a;
    }
    function Mo(e) {
      return e = Hu(e), e.tag = jp, e;
    }
    function pi(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          h0(a), k(
            i.source,
            ke,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        h0(a), k(
          i.source,
          ke,
          t,
          a,
          i
        ), typeof o != "function" && (Tf === null ? Tf = /* @__PURE__ */ new Set([this]) : Tf.add(this)), Jb(this, i), typeof o == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          le(a) || "Unknown"
        );
      });
    }
    function Sc(e, t, a, i, o) {
      if (a.flags |= 32768, kl && yt(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && ns(
          t,
          a,
          o,
          !0
        ), Ve && ($c = !0), a = uu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Ki === null ? vs() : a.alternate === null && Gt === eo && (Gt = wp), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Rp ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), rn(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Rp ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), rn(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return rn(e, i, o), vs(), !1;
      }
      if (Ve)
        return $c = !0, t = uu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Ap && sc(
          ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Ap && sc(
          ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ta(i, a), o = Ut(
          e.stateNode,
          i,
          o
        ), cs(e, o), Gt !== Fs && (Gt = mh)), !1;
      var f = ta(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Gy === null ? Gy = [f] : Gy.push(f), Gt !== Fs && (Gt = mh), t === null) return !0;
      i = ta(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Ut(
              a.stateNode,
              i,
              e
            ), cs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Tf === null || !Tf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Mo(o), pi(
                o,
                e,
                a,
                i
              ), cs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function jt(e, t, a, i) {
      t.child = e === null ? Jg(t, null, a, i) : _s(
        t,
        e.child,
        a,
        i
      );
    }
    function Uo(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return gi(t), En(t), i = la(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = bo(), T(), e !== null && !Xl ? (Kf(e, t, o), on(e, t, o)) : (Ve && h && wh(t), t.flags |= 1, jt(e, t, i, o), t.child);
    }
    function Tc(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !rs(f) && f.defaultProps === void 0 && a.compare === null ? (a = ic(f), t.tag = 15, t.type = a, es(t, f), R0(
          e,
          t,
          a,
          i,
          o
        )) : (e = ud(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !_r(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Yf, a(d, i) && e.ref === t.ref)
          return on(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Gn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function R0(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Yf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, _r(e, o))
            e.flags & 131072 && (Xl = !0);
          else
            return t.lanes = e.lanes, on(e, t, o);
      }
      return wr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Ht(e, t, a) {
      var i = t.pendingProps, o = i.children, f = (t.stateNode._pendingVisibility & Sy) !== 0, d = e !== null ? e.memoizedState : null;
      if (Ec(e, t), i.mode === "hidden" || f) {
        if (t.flags & 128) {
          if (i = d !== null ? d.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Xr(
            e,
            t,
            i,
            a
          );
        }
        if (a & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Lf(
            t,
            d !== null ? d.cachePool : null
          ), d !== null ? Hr(t, d) : Kh(t), Cr(t);
        else
          return t.lanes = t.childLanes = 536870912, Xr(
            e,
            t,
            d !== null ? d.baseLanes | a : a,
            a
          );
      } else
        d !== null ? (Lf(t, d.cachePool), Hr(t, d), Ga(t), t.memoizedState = null) : (e !== null && Lf(t, null), Kh(t), Ga(t));
      return jt(e, t, o, a), t.child;
    }
    function Xr(e, t, a, i) {
      var o = xr();
      return o = o === null ? null : {
        parent: Dl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Lf(t, null), Kh(t), Cr(t), e !== null && ns(e, t, i, !0), null;
    }
    function Ec(e, t) {
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
    function wr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = ae(a) || "Unknown";
        s1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), s1[f] = !0);
      }
      return t.mode & fa && Wu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (es(t, t.type), a.contextTypes && (f = ae(a) || "Unknown", d1[f] || (d1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), gi(t), En(t), a = la(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = bo(), T(), e !== null && !Xl ? (Kf(e, t, o), on(e, t, o)) : (Ve && i && wh(t), t.flags |= 1, jt(e, t, a, o), t.child);
    }
    function im(e, t, a, i, o, f) {
      return gi(t), En(t), Fc = -1, xy = e !== null && e.type !== t.type, t.updateQueue = null, a = _f(
        t,
        i,
        a,
        o
      ), hc(e, t), i = bo(), T(), e !== null && !Xl ? (Kf(e, t, f), on(e, t, f)) : (Ve && i && wh(t), t.flags |= 1, jt(e, t, a, f), t.child);
    }
    function z0(e, t, a, i, o) {
      switch (Ge(t)) {
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
          if (t.lanes |= h, d = dt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Mo(h), pi(
            h,
            d,
            t,
            ta(f, t)
          ), cs(t, h);
      }
      if (gi(t), t.stateNode === null) {
        if (d = df, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Da) && !c1.has(a) && (c1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Ms ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ae(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ft(f)), f = new a(i, d), t.mode & fa) {
          Je(!0);
          try {
            f = new a(i, d);
          } finally {
            Je(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Cp, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ig, typeof a.getDerivedStateFromProps == "function" && d === null && (d = ae(a) || "Component", e1.has(d) || (e1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = ae(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            l1.has(f) || (l1.add(f), console.error(
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
        f = t.stateNode, d = ae(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !i1.has(a) && (i1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !u1.has(a) && (u1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ae(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || t1.has(a) || (t1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          ae(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || El(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, kr(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? ft(d) : df, f.state === i && (d = ae(a) || "Component", a1.has(d) || (a1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & fa && Wu.recordLegacyContextWarning(
          t,
          f
        ), Wu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (am(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          le(t) || "Component"
        ), Cp.enqueueReplaceState(
          f,
          f.state,
          null
        )), qo(t, i, f, o), Vn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & $u) !== bt && (t.flags |= 67108864), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var O = t.memoizedProps;
        h = Ou(a, O), f.props = h;
        var j = f.context;
        y = a.contextType, d = df, typeof y == "object" && y !== null && (d = ft(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", O = t.pendingProps !== O, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (O || j !== d) && vi(
          t,
          f,
          i,
          d
        ), gf = !1;
        var M = t.memoizedState;
        f.state = M, qo(t, i, f, o), Vn(), j = t.memoizedState, O || M !== j || gf ? (typeof p == "function" && (am(
          t,
          a,
          p,
          i
        ), j = t.memoizedState), (h = gf || nm(
          t,
          a,
          h,
          i,
          M,
          j,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & $u) !== bt && (t.flags |= 67108864)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & $u) !== bt && (t.flags |= 67108864), t.memoizedProps = i, t.memoizedState = j), f.props = i, f.state = j, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & $u) !== bt && (t.flags |= 67108864), f = !1);
      } else {
        f = t.stateNode, $r(e, t), d = t.memoizedProps, y = Ou(a, d), f.props = y, p = t.pendingProps, M = f.context, j = a.contextType, h = df, typeof j == "object" && j !== null && (h = ft(j)), O = a.getDerivedStateFromProps, (j = typeof O == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || M !== h) && vi(
          t,
          f,
          i,
          h
        ), gf = !1, M = t.memoizedState, f.state = M, qo(t, i, f, o), Vn();
        var V = t.memoizedState;
        d !== p || M !== V || gf || e !== null && e.dependencies !== null && us(e.dependencies) ? (typeof O == "function" && (am(
          t,
          a,
          O,
          i
        ), V = t.memoizedState), (y = gf || nm(
          t,
          a,
          y,
          i,
          M,
          V,
          h
        ) || e !== null && e.dependencies !== null && us(e.dependencies)) ? (j || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ec(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, C.getCurrentStack = t === null ? null : hl, Oa = !1, jl = t, d && typeof a.getDerivedStateFromError != "function")
          a = null, Ka = -1;
        else {
          if (En(t), a = Bg(h), t.mode & fa) {
            Je(!0);
            try {
              Bg(h);
            } finally {
              Je(!1);
            }
          }
          T();
        }
        t.flags |= 1, e !== null && d ? (t.child = _s(
          t,
          e.child,
          null,
          o
        ), t.child = _s(
          t,
          null,
          a,
          o
        )) : jt(
          e,
          t,
          a,
          o
        ), t.memoizedState = h.state, e = t.child;
      } else
        e = on(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (fh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        le(t) || "a component"
      ), fh = !0), e;
    }
    function Qr(e, t, a, i) {
      return go(), t.flags |= 256, jt(e, t, a, i), t.child;
    }
    function es(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = ae(t) || "Unknown", h1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), h1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ae(t) || "Unknown", r1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), r1[t] = !0));
    }
    function ts(e) {
      return { baseLanes: e, cachePool: T0() };
    }
    function ql(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Sn), e;
    }
    function Bt(e, t, a) {
      var i, o = t.pendingProps;
      it(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Rl.current & Uy) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Ve) {
          if (f ? ya(t) : Ga(t), Ve) {
            var h = Wl, y;
            if (!(y = !h)) {
              e: {
                var p = h;
                for (y = _i; p.nodeType !== 8; ) {
                  if (!y) {
                    y = null;
                    break e;
                  }
                  if (p = ua(p.nextSibling), p === null) {
                    y = null;
                    break e;
                  }
                }
                y = p;
              }
              y !== null ? (oi(), t.memoizedState = {
                dehydrated: y,
                treeContext: Zs !== null ? { id: Jc, overflow: kc } : null,
                retryLane: 536870912
              }, p = Ze(18, null, null, bt), p.stateNode = y, p.return = t, t.child = p, Ca = t, Wl = null, y = !0) : y = !1, y = !y;
            }
            y && (fc(
              t,
              h
            ), ln(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return h.data === ur ? t.lanes = 16 : t.lanes = 536870912, null;
          an(t);
        }
        return h = o.children, o = o.fallback, f ? (Ga(t), f = t.mode, h = Ac(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Yu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = ts(a), f.childLanes = ql(
          e,
          i,
          a
        ), t.memoizedState = qp, o) : (ya(t), Ho(
          t,
          h
        ));
      }
      var O = e.memoizedState;
      if (O !== null && (h = O.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ya(t), t.flags &= -257, t = Co(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (Ga(t), t.child = e.child, t.flags |= 128, t = null) : (Ga(t), f = o.fallback, h = t.mode, o = Ac(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Yu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, _s(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = ts(a), o.childLanes = ql(
            e,
            i,
            a
          ), t.memoizedState = qp, t = f);
        else if (ya(t), Ve && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), h.data === ur) {
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
          }, typeof i == "string" && Ep.set(
            f,
            o
          ), sc(o), t = Co(
            e,
            t,
            a
          );
        } else if (Xl || ns(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = dt, i !== null) {
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
              throw O.retryLane = o, gl(
                e,
                o
              ), et(
                i,
                e,
                o
              ), f1;
          }
          h.data === nr || vs(), t = Co(
            e,
            t,
            a
          );
        } else
          h.data === nr ? (t.flags |= 128, t.child = e.child, t = q0.bind(
            null,
            e
          ), h._reactRetry = t, t = null) : (e = O.treeContext, Wl = ua(
            h.nextSibling
          ), Ca = t, Ve = !0, Fu = null, $c = !1, nu = null, _i = !1, e !== null && (oi(), lu[au++] = Jc, lu[au++] = kc, lu[au++] = Zs, Jc = e.id, kc = e.overflow, Zs = t), t = Ho(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (Ga(t), f = o.fallback, h = t.mode, y = e.child, p = y.sibling, o = Gn(
        y,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = y.subtreeFlags & 31457280, p !== null ? f = Gn(
        p,
        f
      ) : (f = Yu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = ts(a) : (y = h.cachePool, y !== null ? (p = Dl._currentValue, y = y.parent !== p ? { parent: p, pool: p } : y) : y = T0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), f.memoizedState = h, f.childLanes = ql(
        e,
        i,
        a
      ), t.memoizedState = qp, o) : (ya(t), a = e.child, e = a.sibling, a = Gn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Ho(e, t) {
      return t = Ac(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ac(e, t) {
      return id(e, t, 0, null);
    }
    function Co(e, t, a) {
      return _s(t, e.child, null, a), e = Ho(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Lr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), as(
        e.return,
        t,
        a
      );
    }
    function Nn(e, t) {
      var a = El(e);
      return e = !a && typeof Be(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function xo(e, t, a, i, o) {
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
    function Zr(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !m1[o])
        if (m1[o] = !0, typeof o == "string")
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
      f === void 0 || Bp[f] || (f !== "collapsed" && f !== "hidden" ? (Bp[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (Bp[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (El(i)) {
          for (var d = 0; d < i.length; d++)
            if (!Nn(i[d], d)) break e;
        } else if (d = Be(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), y = 0; !h.done; h = d.next()) {
              if (!Nn(h.value, y)) break e;
              y++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (jt(e, t, i, a), i = Rl.current, i & Uy)
        i = i & nh | Uy, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Lr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Lr(e, a, t);
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
        i &= nh;
      }
      switch (Ae(Rl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Qf(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), xo(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Qf(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          xo(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          xo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function on(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ka = -1, bf |= t.lanes, !(a & t.childLanes))
        if (e !== null) {
          if (ns(
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
    function _r(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && us(e)));
    }
    function D0(e, t, a) {
      switch (t.tag) {
        case 3:
          oe(
            t,
            t.stateNode.containerInfo
          ), Uu(
            t,
            Dl,
            e.memoizedState.cache
          ), go();
          break;
        case 27:
        case 5:
          $a(t);
          break;
        case 4:
          oe(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Uu(
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
            return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : a & t.child.childLanes ? Bt(
              e,
              t,
              a
            ) : (ya(t), e = on(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ya(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (ns(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Zr(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ae(
            Rl,
            Rl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Ht(e, t, a);
        case 24:
          Uu(
            t,
            Dl,
            e.memoizedState.cache
          );
      }
      return on(e, t, a);
    }
    function Kr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = ud(
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
          Xl = !0;
        else {
          if (!_r(e, a) && !(t.flags & 128))
            return Xl = !1, D0(
              e,
              t,
              a
            );
          Xl = !!(e.flags & 131072);
        }
      else
        Xl = !1, (i = Ve) && (oi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, oi(), m0(t, fv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = hf(t.elementType), t.type = e, typeof e == "function")
            rs(e) ? (i = Ou(
              e,
              i
            ), t.tag = 1, t.type = e = ic(e), t = z0(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, es(t, e), t.type = e = ic(e), t = wr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Qc) {
                t.tag = 11, t.type = e = jh(e), t = Uo(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Bi) {
                t.tag = 14, t = Tc(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Nl && (t = " Did you wrap a component in React.lazy() more than once?"), e = ae(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return wr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Ou(
            i,
            t.pendingProps
          ), z0(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (oe(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            var f = t.pendingProps;
            o = t.memoizedState, i = o.element, $r(e, t), qo(t, f, null, a);
            var d = t.memoizedState;
            if (f = d.cache, Uu(t, Dl, f), f !== o.cache && Jr(
              t,
              [Dl],
              a,
              !0
            ), Vn(), f = d.element, o.isDehydrated)
              if (o = {
                element: f,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                t = Qr(
                  e,
                  t,
                  f,
                  a
                );
                break e;
              } else if (f !== i) {
                i = ta(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), sc(i), t = Qr(
                  e,
                  t,
                  f,
                  a
                );
                break e;
              } else
                for (Wl = ua(
                  t.stateNode.containerInfo.firstChild
                ), Ca = t, Ve = !0, Fu = null, $c = !1, nu = null, _i = !0, e = Jg(
                  t,
                  null,
                  f,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (go(), f === i) {
                t = on(
                  e,
                  t,
                  a
                );
                break e;
              }
              jt(
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
          return Ec(e, t), e === null ? (e = zd(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Ve || (e = t.type, a = t.pendingProps, i = Tt(
            fl.current
          ), i = Ed(
            i
          ).createElement(e), i[Al] = t, i[ca] = a, At(i, e, a), Xt(i), t.stateNode = i) : t.memoizedState = zd(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return $a(t), e === null && Ve && (o = Tt(fl.current), i = Ya(), o = t.stateNode = ko(
            t.type,
            t.pendingProps,
            o,
            i,
            !1
          ), $c || (i = G0(
            o,
            t.type,
            t.pendingProps,
            i
          ), i !== null && (fi(t, 0).serverProps = i)), Ca = t, _i = !0, Wl = ua(
            o.firstChild
          )), i = t.pendingProps.children, e !== null || Ve ? jt(
            e,
            t,
            i,
            a
          ) : t.child = _s(
            t,
            null,
            i,
            a
          ), Ec(e, t), t.child;
        case 5:
          return e === null && Ve && (f = Ya(), i = vr(
            t.type,
            f.ancestorInfo
          ), o = Wl, (d = !o) || (d = Es(
            o,
            t.type,
            t.pendingProps,
            _i
          ), d !== null ? (t.stateNode = d, $c || (f = G0(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (fi(t, 0).serverProps = f)), Ca = t, Wl = ua(
            d.firstChild
          ), _i = !1, f = !0) : f = !1, d = !f), d && (i && fc(t, o), ln(t))), $a(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Ie(o, f) ? i = null : d !== null && Ie(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = la(
            e,
            t,
            Br,
            null,
            null,
            a
          ), Jy._currentValue = o), Ec(e, t), jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Ve && (e = t.pendingProps, a = Ya().ancestorInfo.current, e = a != null ? Cf(e, a.tag) : !0, a = Wl, (i = !a) || (i = $n(
            a,
            t.pendingProps,
            _i
          ), i !== null ? (t.stateNode = i, Ca = t, Wl = null, i = !0) : i = !1, i = !i), i && (e && fc(t, a), ln(t))), null;
        case 13:
          return Bt(e, t, a);
        case 4:
          return oe(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = _s(
            t,
            null,
            i,
            a
          ) : jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Uo(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return jt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || y1 || (y1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Uu(t, i, f), jt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), gi(t), o = ft(o), En(t), i = zp(
            i,
            o,
            void 0
          ), T(), t.flags |= 1, jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Tc(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return R0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Zr(
            e,
            t,
            a
          );
        case 22:
          return Ht(e, t, a);
        case 24:
          return gi(t), i = ft(Dl), e === null ? (o = xr(), o === null && (o = dt, f = Su(), o.pooledCache = f, Xa(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, kr(t), Uu(t, Dl, o)) : (e.lanes & a && ($r(e, t), qo(t, null, null, a), Vn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Uu(t, Dl, i)) : (i = f.cache, Uu(t, Dl, i), i !== o.cache && Jr(
            t,
            [Dl],
            a,
            !0
          ))), jt(
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
    function ls() {
      sh = vv = null, rh = !1;
    }
    function Uu(e, t, a) {
      Ae(Yp, t._currentValue, e), t._currentValue = a, Ae(Np, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== v1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = v1;
    }
    function jn(e, t) {
      e._currentValue = Yp.current;
      var a = Np.current;
      ze(Np, t), e._currentRenderer = a, ze(Yp, t);
    }
    function as(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Jr(e, t, a, i) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), as(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), as(
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
    function ns(e, t, a, i) {
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
            Ha(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ys.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Jy) : e = [Jy]);
        }
        o = o.return;
      }
      e !== null && Jr(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function us(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ha(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function gi(e) {
      vv = e, sh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ft(e) {
      return rh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), cm(vv, e);
    }
    function Bo(e, t) {
      return vv === null && gi(e), cm(e, t);
    }
    function cm(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, sh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        sh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else sh = sh.next = t;
      return a;
    }
    function kr(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function $r(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Hu(e) {
      return {
        lane: e,
        tag: p1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Cu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Vp === i && !S1) {
        var o = le(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), S1 = !0;
      }
      return (Rt & qa) !== gn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Dr(e), r0(e, null, a), t) : (zr(e, i, t, a), Dr(e));
    }
    function is(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Il(e, a);
      }
    }
    function cs(e, t) {
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
    function Vn() {
      if (Gp) {
        var e = uh;
        if (e !== null) throw e;
      }
    }
    function qo(e, t, a, i) {
      Gp = !1;
      var o = e.updateQueue;
      gf = !1, Vp = o.shared;
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
          var M = h.lane & -536870913, V = M !== h.lane;
          if (V ? (He & M) === M : (i & M) === M) {
            M !== 0 && M === Ks && (Gp = !0), O !== null && (O = O.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              M = e;
              var ee = h, be = t, Wt = a;
              switch (ee.tag) {
                case g1:
                  if (ee = ee.payload, typeof ee == "function") {
                    rh = !0;
                    var Fe = ee.call(
                      Wt,
                      j,
                      be
                    );
                    if (M.mode & fa) {
                      Je(!0);
                      try {
                        ee.call(Wt, j, be);
                      } finally {
                        Je(!1);
                      }
                    }
                    rh = !1, j = Fe;
                    break e;
                  }
                  j = ee;
                  break e;
                case jp:
                  M.flags = M.flags & -65537 | 128;
                case p1:
                  if (Fe = ee.payload, typeof Fe == "function") {
                    if (rh = !0, ee = Fe.call(
                      Wt,
                      j,
                      be
                    ), M.mode & fa) {
                      Je(!0);
                      try {
                        Fe.call(Wt, j, be);
                      } finally {
                        Je(!1);
                      }
                    }
                    rh = !1;
                  } else ee = Fe;
                  if (ee == null) break e;
                  j = ve({}, j, ee);
                  break e;
                case b1:
                  gf = !0;
              }
            }
            M = h.callback, M !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [M] : V.push(M));
          } else
            V = {
              lane: M,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, O === null ? (p = O = V, y = j) : O = O.next = V, d |= M;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        O === null && (y = j), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = O, f === null && (o.shared.lanes = 0), bf |= d, e.lanes = d, e.memoizedState = j;
      }
      Vp = null;
    }
    function os(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Wr(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          os(a[e], t);
    }
    function om(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          os(a[e], t);
    }
    function Qa(e) {
      return (e.mode & $l) !== bt;
    }
    function fm(e, t) {
      Qa(e) ? (tn(), Yo(t, e), en()) : Yo(t, e);
    }
    function Fr(e, t, a) {
      Qa(e) ? (tn(), Rc(
        a,
        e,
        t
      ), en()) : Rc(
        a,
        e,
        t
      );
    }
    function Yo(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & zl) !== iu ? J !== null && typeof J.markComponentPassiveEffectMountStarted == "function" && J.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Fl) !== iu && J !== null && typeof J.markComponentLayoutEffectMountStarted == "function" && J.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & xa) !== iu && (ph = !0), i = k(
              t,
              kb,
              a
            ), (e & xa) !== iu && (ph = !1), (e & zl) !== iu ? J !== null && typeof J.markComponentPassiveEffectMountStopped == "function" && J.markComponentPassiveEffectMountStopped() : (e & Fl) !== iu && J !== null && typeof J.markComponentLayoutEffectMountStopped == "function" && J.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = a.tag & Fl ? "useLayoutEffect" : a.tag & xa ? "useInsertionEffect" : "useEffect";
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

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, k(
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
        _e(t, t.return, h);
      }
    }
    function Rc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & zl) !== iu ? J !== null && typeof J.markComponentPassiveEffectUnmountStarted == "function" && J.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Fl) !== iu && J !== null && typeof J.markComponentLayoutEffectUnmountStarted == "function" && J.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & xa) !== iu && (ph = !0), k(
                t,
                $b,
                t,
                a,
                h
              ), (e & xa) !== iu && (ph = !1), (e & zl) !== iu ? J !== null && typeof J.markComponentPassiveEffectUnmountStopped == "function" && J.markComponentPassiveEffectUnmountStopped() : (e & Fl) !== iu && J !== null && typeof J.markComponentLayoutEffectUnmountStopped == "function" && J.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        _e(t, t.return, y);
      }
    }
    function Ir(e, t) {
      Qa(e) ? (tn(), Yo(t, e), en()) : Yo(t, e);
    }
    function Pr(e, t, a) {
      Qa(e) ? (tn(), Rc(
        a,
        e,
        t
      ), en()) : Rc(
        a,
        e,
        t
      );
    }
    function sm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || fh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          le(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          le(e) || "instance"
        ));
        try {
          k(
            e,
            om,
            t,
            a
          );
        } catch (i) {
          _e(e, e.return, i);
        }
      }
    }
    function rm(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function O0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || fh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        le(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        le(e) || "instance"
      ));
      try {
        var o = Ou(
          e.type,
          a,
          e.elementType === e.type
        ), f = k(
          e,
          rm,
          t,
          o,
          i
        );
        a = T1, f !== void 0 || a.has(e.type) || (a.add(e.type), k(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            le(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        _e(e, e.return, d);
      }
    }
    function dm(e, t, a) {
      a.props = Ou(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Qa(e) ? (tn(), k(
        e,
        Gg,
        e,
        t,
        a
      ), en()) : k(
        e,
        Gg,
        e,
        t,
        a
      );
    }
    function Fv(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode;
        if (typeof t == "function")
          if (Qa(e))
            try {
              tn(), e.refCleanup = t(a);
            } finally {
              en();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            le(e)
          ), t.current = a;
      }
    }
    function xu(e, t) {
      try {
        k(e, Fv, e);
      } catch (a) {
        _e(e, t, a);
      }
    }
    function na(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Qa(e))
              try {
                tn(), k(e, i);
              } finally {
                en(e);
              }
            else k(e, i);
          } catch (o) {
            _e(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Qa(e))
              try {
                tn(), k(e, a, null);
              } finally {
                en(e);
              }
            else k(e, a, null);
          } catch (o) {
            _e(e, t, o);
          }
        else a.current = null;
    }
    function hm(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
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
    function mm(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function ym(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        k(
          e,
          at,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        _e(e, e.return, o);
      }
    }
    function vm(e, t, a) {
      try {
        k(
          e,
          Ra,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        _e(e, e.return, i);
      }
    }
    function M0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
    }
    function pm(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || M0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ed(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.nodeType === 8 ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (a.nodeType === 8 ? (t = a.parentNode, t.insertBefore(e, a)) : (t = a, t.appendChild(e)), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = mn));
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (ed(e, t, a), e = e.sibling; e !== null; )
          ed(e, t, a), e = e.sibling;
    }
    function bi(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (bi(e, t, a), e = e.sibling; e !== null; )
          bi(e, t, a), e = e.sibling;
    }
    function gm(e) {
      if (e.tag !== 27) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (M0(t)) {
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
            t = a.stateNode, a = pm(e), bi(e, a, t);
            break;
          case 5:
            t = a.stateNode, a.flags & 32 && (kn(t), a.flags &= -33), a = pm(e), bi(e, a, t);
            break;
          case 3:
          case 4:
            t = a.stateNode.containerInfo, a = pm(e), ed(
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
    function td(e, t) {
      if (e = e.containerInfo, ng = Nv, e = f0(e), Ar(e)) {
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
                for (var V; j !== a || o !== 0 && j.nodeType !== 3 || (h = d + o), j !== f || i !== 0 && j.nodeType !== 3 || (y = d + i), j.nodeType === 3 && (d += j.nodeValue.length), (V = j.firstChild) !== null; )
                  M = j, j = V;
                for (; ; ) {
                  if (j === e) break t;
                  if (M === a && ++p === o && (h = d), M === f && ++O === i && (y = d), (V = j.nextSibling) !== null) break;
                  j = M, M = j.parentNode;
                }
                j = V;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (ug = {
        focusedElem: e,
        selectionRange: a
      }, Nv = !1, wl = t; wl !== null; )
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
                o & 1024 && a !== null && O0(e, a);
                break;
              case 3:
                if (o & 1024) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Mi(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Mi(e);
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
      return t = A1, A1 = !1, t;
    }
    function bm(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fn(e, a), i & 4 && fm(a, Fl | cu);
          break;
        case 1:
          if (fn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || fh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), Qa(a) ? (tn(), k(
                a,
                Dp,
                a,
                e
              ), en()) : k(
                a,
                Dp,
                a,
                e
              );
            else {
              var o = Ou(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || fh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), Qa(a) ? (tn(), k(
                a,
                Ng,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), en()) : k(
                a,
                Ng,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && sm(a), i & 512 && xu(a, a.return);
          break;
        case 3:
          if (t = gu(), fn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
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
              k(
                a,
                om,
                i,
                o
              );
            } catch (h) {
              _e(a, a.return, h);
            }
          }
          e.effectDuration += Or(t);
          break;
        case 26:
          fn(e, a), i & 512 && xu(a, a.return);
          break;
        case 27:
        case 5:
          fn(e, a), t === null && i & 4 && ym(a), i & 512 && xu(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = gu(), fn(e, a), e = a.stateNode, e.effectDuration += cc(i);
            try {
              k(
                a,
                hm,
                a,
                t,
                nv,
                e.effectDuration
              );
            } catch (h) {
              _e(a, a.return, h);
            }
          } else fn(e, a);
          break;
        case 13:
          fn(e, a), i & 4 && Bu(e, a);
          break;
        case 22:
          if (o = a.memoizedState !== null || Ic, !o) {
            t = t !== null && t.memoizedState !== null || Vt;
            var f = Ic, d = Vt;
            Ic = o, (Vt = t) && !d ? sn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : fn(e, a), Ic = f, Vt = d;
          }
          i & 512 && (a.memoizedProps.mode === "manual" ? xu(a, a.return) : na(a, a.return));
          break;
        default:
          fn(e, a);
      }
    }
    function Sm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Sm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && du(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function nl(e, t, a) {
      for (a = a.child; a !== null; )
        Si(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Si(e, t, a) {
      if (Vl && typeof Vl.onCommitFiberUnmount == "function")
        try {
          Vl.onCommitFiberUnmount(nf, a);
        } catch (f) {
          Jl || (Jl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Vt || na(a, t), nl(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Vt || na(a, t);
          var i = rl, o = pn;
          for (rl = a.stateNode, nl(
            e,
            t,
            a
          ), a = a.stateNode, e = a.attributes; e.length; )
            a.removeAttributeNode(e[0]);
          du(a), rl = i, pn = o;
          break;
        case 5:
          Vt || na(a, t);
        case 6:
          if (i = rl, o = pn, rl = null, nl(
            e,
            t,
            a
          ), rl = i, pn = o, rl !== null)
            if (pn)
              try {
                k(
                  a,
                  Lu,
                  rl,
                  a.stateNode
                );
              } catch (f) {
                _e(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                k(
                  a,
                  Nm,
                  rl,
                  a.stateNode
                );
              } catch (f) {
                _e(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          rl !== null && (pn ? (e = rl, a = a.stateNode, e.nodeType === 8 ? gt(e.parentNode, a) : e.nodeType === 1 && gt(e, a), ef(e)) : gt(rl, a.stateNode));
          break;
        case 4:
          i = rl, o = pn, rl = a.stateNode.containerInfo, pn = !0, nl(
            e,
            t,
            a
          ), rl = i, pn = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Vt || Rc(
            xa,
            a,
            t
          ), Vt || Fr(
            a,
            t,
            Fl
          ), nl(
            e,
            t,
            a
          );
          break;
        case 1:
          Vt || (na(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && dm(
            a,
            t,
            i
          )), nl(
            e,
            t,
            a
          );
          break;
        case 21:
          nl(
            e,
            t,
            a
          );
          break;
        case 22:
          Vt || na(a, t), Vt = (i = Vt) || a.memoizedState !== null, nl(
            e,
            t,
            a
          ), Vt = i;
          break;
        default:
          nl(
            e,
            t,
            a
          );
      }
    }
    function Bu(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          k(
            t,
            Nc,
            e
          );
        } catch (a) {
          _e(t, t.return, a);
        }
    }
    function zc(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new E1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new E1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function fs(e, t) {
      var a = zc(e);
      t.forEach(function(i) {
        var o = cl.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), kl)
            if (dh !== null && hh !== null)
              yt(hh, dh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Tm(e, t, a) {
      dh = a, hh = e, Em(t, e), hh = dh = null;
    }
    function ga(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
              case 5:
                rl = h.stateNode, pn = !1;
                break e;
              case 3:
                rl = h.stateNode.containerInfo, pn = !0;
                break e;
              case 4:
                rl = h.stateNode.containerInfo, pn = !0;
                break e;
            }
            h = h.return;
          }
          if (rl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Si(o, f, d), rl = null, pn = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Em(t, e), t = t.sibling;
    }
    function Em(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(t, e), ul(e), i & 4 && (Rc(
            xa | cu,
            e,
            e.return
          ), Yo(xa | cu, e), Fr(
            e,
            e.return,
            Fl | cu
          ));
          break;
        case 1:
          ga(t, e), ul(e), i & 512 && (Vt || a === null || na(a, a.return)), i & 64 && Ic && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Iu;
          if (ga(t, e), ul(e), i & 512 && (Vt || a === null || na(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Gi] || o[Al] || o.namespaceURI === Ua || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), At(o, i, a), o[Al] = e, Xt(o), i = o;
                        break e;
                      case "link":
                        var f = wm(
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
                        o = t.createElement(i), At(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = wm(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], qe(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), At(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Al] = e, Xt(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  Qm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Wn(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? Qm(
                o,
                e.type,
                e.stateNode
              ) : Wn(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && vm(
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
                d[Gi] || y === "HEAD" || y === "BODY" || y === "SCRIPT" || y === "STYLE" || y === "LINK" && d.rel.toLowerCase() === "stylesheet" || o.removeChild(d), d = h;
              }
              k(
                e,
                Vm,
                e.type,
                f,
                o,
                e
              );
            } catch (O) {
              _e(e, e.return, O);
            }
          }
        case 5:
          if (ga(t, e), ul(e), i & 512 && (Vt || a === null || na(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              k(e, kn, t);
            } catch (O) {
              _e(e, e.return, O);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, vm(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (Xp = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ga(t, e), ul(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              k(
                e,
                Jo,
                t,
                a,
                i
              );
            } catch (O) {
              _e(e, e.return, O);
            }
          }
          break;
        case 3:
          if (o = gu(), Bv = null, f = Iu, Iu = $o(t.containerInfo), ga(t, e), Iu = f, ul(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              k(
                e,
                Rd,
                t.containerInfo
              );
            } catch (O) {
              _e(e, e.return, O);
            }
          Xp && (Xp = !1, ss(e)), t.effectDuration += Or(o);
          break;
        case 4:
          i = Iu, Iu = $o(
            e.stateNode.containerInfo
          ), ga(t, e), ul(e), Iu = i;
          break;
        case 12:
          i = gu(), ga(t, e), ul(e), e.stateNode.effectDuration += cc(i);
          break;
        case 13:
          ga(t, e), ul(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Kp = Pn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fs(e, i)));
          break;
        case 22:
          i & 512 && (Vt || a === null || na(a, a.return)), d = e.memoizedState !== null, h = a !== null && a.memoizedState !== null, y = Ic;
          var p = Vt;
          if (Ic = y || d, Vt = p || h, ga(t, e), Vt = p, Ic = y, ul(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & Sy, i & 8192 && (t._visibility = d ? t._visibility & -2 : t._visibility | av, d && (t = Ic || Vt, a === null || h || t || qu(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            e: for (a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                if (a === null) {
                  h = a = t;
                  try {
                    o = h.stateNode, d ? k(
                      h,
                      Oi,
                      o
                    ) : k(
                      h,
                      jm,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (O) {
                    _e(h, h.return, O);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    f = h.stateNode, d ? k(
                      h,
                      Yc,
                      f
                    ) : k(
                      h,
                      Za,
                      f,
                      h.memoizedProps
                    );
                  } catch (O) {
                    _e(h, h.return, O);
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
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, fs(e, a))));
          break;
        case 19:
          ga(t, e), ul(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fs(e, i)));
          break;
        case 21:
          break;
        default:
          ga(t, e), ul(e);
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          k(e, gm, e);
        } catch (a) {
          _e(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ss(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ss(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function U0(e, t, a) {
      dh = a, hh = t, bm(t, e.alternate, e), hh = dh = null;
    }
    function fn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          bm(e, t.alternate, t), t = t.sibling;
    }
    function Am(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fr(
            e,
            e.return,
            Fl
          ), qu(e);
          break;
        case 1:
          na(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && dm(
            e,
            e.return,
            t
          ), qu(e);
          break;
        case 26:
        case 27:
        case 5:
          na(e, e.return), qu(e);
          break;
        case 22:
          na(e, e.return), e.memoizedState === null && qu(e);
          break;
        default:
          qu(e);
      }
    }
    function qu(e) {
      for (e = e.child; e !== null; )
        Am(e), e = e.sibling;
    }
    function Rm(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          sn(
            e,
            a,
            i
          ), fm(a, Fl);
          break;
        case 1:
          if (sn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && k(
            a,
            Dp,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              k(
                a,
                Wr,
                t,
                e
              );
            } catch (f) {
              _e(a, a.return, f);
            }
          }
          i && o & 64 && sm(a), xu(a, a.return);
          break;
        case 26:
        case 27:
        case 5:
          sn(
            e,
            a,
            i
          ), i && t === null && o & 4 && ym(a), xu(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = gu(), sn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += cc(o);
            try {
              k(
                a,
                hm,
                a,
                t,
                nv,
                i.effectDuration
              );
            } catch (f) {
              _e(a, a.return, f);
            }
          } else
            sn(
              e,
              a,
              i
            );
          break;
        case 13:
          sn(
            e,
            a,
            i
          ), i && o & 4 && Bu(e, a);
          break;
        case 22:
          a.memoizedState === null && sn(
            e,
            a,
            i
          ), xu(a, a.return);
          break;
        default:
          sn(
            e,
            a,
            i
          );
      }
    }
    function sn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Rm(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function ld(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Xa(e), a != null && rc(a));
    }
    function ad(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Xa(t), e != null && rc(e));
    }
    function Ti(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          zm(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function zm(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            e,
            t,
            a,
            i
          ), o & 2048 && Ir(t, zl | cu);
          break;
        case 3:
          var f = gu();
          Ti(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Xa(t), a != null && rc(a))), e.passiveEffectDuration += Or(f);
          break;
        case 12:
          if (o & 2048) {
            f = gu(), Ti(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += cc(f);
            try {
              k(
                t,
                mm,
                t,
                t.alternate,
                nv,
                e.passiveEffectDuration
              );
            } catch (d) {
              _e(t, t.return, d);
            }
          } else
            Ti(
              e,
              t,
              a,
              i
            );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null ? f._visibility & ws ? Ti(
            e,
            t,
            a,
            i
          ) : No(
            e,
            t
          ) : f._visibility & ws ? Ti(
            e,
            t,
            a,
            i
          ) : (f._visibility |= ws, Et(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && ld(
            t.alternate,
            t
          );
          break;
        case 24:
          Ti(
            e,
            t,
            a,
            i
          ), o & 2048 && ad(t.alternate, t);
          break;
        default:
          Ti(
            e,
            t,
            a,
            i
          );
      }
    }
    function Et(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        il(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function il(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Et(
            e,
            t,
            a,
            i,
            o
          ), Ir(t, zl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & ws ? Et(
            e,
            t,
            a,
            i,
            o
          ) : No(
            e,
            t
          ) : (d._visibility |= ws, Et(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && ld(
            t.alternate,
            t
          );
          break;
        case 24:
          Et(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && ad(t.alternate, t);
          break;
        default:
          Et(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function No(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              No(
                a,
                i
              ), o & 2048 && ld(
                i.alternate,
                i
              );
              break;
            case 24:
              No(
                a,
                i
              ), o & 2048 && ad(
                i.alternate,
                i
              );
              break;
            default:
              No(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function Dc(e) {
      if (e.subtreeFlags & By)
        for (e = e.child; e !== null; )
          Dm(e), e = e.sibling;
    }
    function Dm(e) {
      switch (e.tag) {
        case 26:
          Dc(e), e.flags & By && e.memoizedState !== null && Iv(
            Iu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Dc(e);
          break;
        case 3:
        case 4:
          var t = Iu;
          Iu = $o(
            e.stateNode.containerInfo
          ), Dc(e), Iu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = By, By = 16777216, Dc(e), By = t) : Dc(e));
          break;
        default:
          Dc(e);
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
    function jo(e) {
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
          Vo(e), e = e.sibling;
    }
    function Vo(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          jo(e), e.flags & 2048 && Pr(
            e,
            e.return,
            zl | cu
          );
          break;
        case 3:
          var t = gu();
          jo(e), e.stateNode.passiveEffectDuration += Or(t);
          break;
        case 12:
          t = gu(), jo(e), e.stateNode.passiveEffectDuration += cc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & ws && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, Go(e)) : jo(e);
          break;
        default:
          jo(e);
      }
    }
    function Go(e) {
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
          Pr(
            e,
            e.return,
            zl
          ), Go(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & ws && (t._visibility &= -5, Go(e));
          break;
        default:
          Go(e);
      }
    }
    function Um(e, t) {
      for (; wl !== null; ) {
        var a = wl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Pr(
              i,
              t,
              zl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Xa(i));
            break;
          case 24:
            rc(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, wl = i;
        else
          e: for (a = e; wl !== null; ) {
            i = wl;
            var o = i.sibling, f = i.return;
            if (Sm(i), i === a) {
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
    function H0(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, R1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function rs(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Gn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = Ze(
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
          a.type = ic(e.type);
          break;
        case 1:
          a.type = ic(e.type);
          break;
        case 11:
          a.type = jh(e.type);
      }
      return a;
    }
    function nd(e, t) {
      e.flags &= 31457282;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function ud(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        rs(e) && (d = 1), h = ic(h);
      else if (typeof e == "string")
        d = Ya(), d = Q0(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Fn:
            return Yu(
              a.children,
              o,
              f,
              t
            );
          case xd:
            d = 8, o |= fa, o |= $u;
            break;
          case Bd:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Ze(12, e, t, i | $l), t.elementType = Bd, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case qd:
            return t = Ze(13, a, t, o), t.elementType = qd, t.lanes = f, t;
          case Us:
            return t = Ze(19, a, t, o), t.elementType = Us, t.lanes = f, t;
          case Lc:
            return id(a, o, f, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ce:
                case Da:
                  d = 10;
                  break e;
                case Ms:
                  d = 9;
                  break e;
                case Qc:
                  d = 11, h = jh(h);
                  break e;
                case Bi:
                  d = 14;
                  break e;
                case Nl:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : El(e) ? a = "array" : e !== void 0 && e.$$typeof === xi ? (a = "<" + (ae(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Ql(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = Ze(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Xo(e, t, a) {
      return t = ud(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t;
    }
    function Yu(e, t, a, i) {
      return e = Ze(7, e, i, t), e.lanes = a, e;
    }
    function id(e, t, a, i) {
      e = Ze(22, e, i, t), e.elementType = Lc, e.lanes = a;
      var o = {
        _visibility: av,
        _pendingVisibility: av,
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
          if (!(f._pendingVisibility & Sy)) {
            var h = gl(d, 2);
            h !== null && (f._pendingVisibility |= Sy, et(h, d, 2));
          }
        },
        attach: function() {
          var f = o, d = f._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (f._pendingVisibility & Sy) {
            var h = gl(d, 2);
            h !== null && (f._pendingVisibility &= -3, et(h, d, 2));
          }
        }
      };
      return e.stateNode = o, e;
    }
    function cd(e, t, a) {
      return e = Ze(6, e, null, t), e.lanes = a, e;
    }
    function ds(e, t, a) {
      return t = Ze(
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
    function Xn(e) {
      e.flags |= 4;
    }
    function wn(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & fu) !== ir)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Dd(t)) {
        if (t = uu.current, t !== null && ((He & 4194176) === He ? Ki !== null : (He & 62914560) !== He && !(He & 536870912) || t !== Ki))
          throw Oy = Rp, Hg;
        e.flags |= 8192;
      }
    }
    function wo(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? li() : 536870912, e.lanes |= t, Ps |= t);
    }
    function hs(e, t) {
      if (!Ve)
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
    function st(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & $l) !== bt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 31457280, i |= f.flags & 31457280, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 31457280, i |= o.flags & 31457280, o.return = e, o = o.sibling;
      else if ((e.mode & $l) !== bt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Hm(e, t, a) {
      var i = t.pendingProps;
      switch (Qh(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return st(t), null;
        case 1:
          return st(t), null;
        case 3:
          return i = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jn(Dl, t), ot(t), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (po(t) ? (Mr(), Xn(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fu !== null && (Nu(Fu), Fu = null))), st(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Xn(t), a !== null ? (st(t), wn(
            t,
            a
          )) : (st(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Xn(t), st(t), wn(
            t,
            a
          )) : (st(t), t.flags &= -16777217) : (e.memoizedProps !== i && Xn(t), st(t), t.flags &= -16777217), null;
        case 27:
          Ml(t), a = Tt(fl.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return st(t), null;
            }
            e = Ya(), po(t) ? y0(t) : (e = ko(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Xn(t));
          }
          return st(t), null;
        case 5:
          if (Ml(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return st(t), null;
            }
            if (o = Ya(), po(t))
              y0(t);
            else {
              switch (e = Tt(fl.current), vr(a, o.ancestorInfo), o = o.context, e = Ed(e), o) {
                case bh:
                  e = e.createElementNS(Ua, a);
                  break;
                case xv:
                  e = e.createElementNS(
                    Li,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Ua,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Li,
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
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || In.call(
                        V1,
                        a
                      ) || (V1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Al] = t, e[ca] = i;
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
              e: switch (At(e, a, i), a) {
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
              e && Xn(t);
            }
          }
          return st(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Tt(fl.current), a = Ya(), po(t)) {
              e = t.stateNode, i = t.memoizedProps, o = !$c, a = null;
              var f = Ca;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = As(
                      e,
                      i,
                      a
                    ), o !== null && (fi(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    a = f.memoizedProps, o && (o = As(
                      e,
                      i,
                      a
                    ), o !== null && (fi(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Al] = t, e = !!(e.nodeValue === i || a !== null && a.suppressHydrationWarning === !0 || bd(e.nodeValue, i)), e || ln(t);
            } else
              a = a.ancestorInfo.current, a != null && Cf(i, a.tag), e = Ed(e).createTextNode(
                i
              ), e[Al] = t, t.stateNode = e;
          }
          return st(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = po(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Al] = t, st(t), (t.mode & $l) !== bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Mr(), go(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, st(t), (t.mode & $l) !== bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              Fu !== null && (Nu(Fu), Fu = null), o = !0;
            if (!o)
              return t.flags & 256 ? (an(t), t) : (an(t), null);
          }
          return an(t), t.flags & 128 ? (t.lanes = a, (t.mode & $l) !== bt && Nf(t), t) : (i = i !== null, e = e !== null && e.memoizedState !== null, i && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), f = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (f = a.memoizedState.cachePool.pool), f !== o && (a.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), wo(t, t.updateQueue), st(t), (t.mode & $l) !== bt && i && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return ot(t), e === null && pd(
            t.stateNode.containerInfo
          ), st(t), null;
        case 10:
          return jn(t.type, t), st(t), null;
        case 19:
          if (ze(Rl, t), o = t.memoizedState, o === null) return st(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) hs(o, !1);
            else {
              if (Gt !== eo || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = Qf(e), f !== null) {
                    for (t.flags |= 128, hs(o, !1), e = f.updateQueue, t.updateQueue = e, wo(t, e), t.subtreeFlags = 0, e = a, i = t.child; i !== null; )
                      nd(i, e), i = i.sibling;
                    return Ae(
                      Rl,
                      Rl.current & nh | Uy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Pn() > bv && (t.flags |= 128, i = !0, hs(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Qf(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, wo(t, e), hs(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ve)
                  return st(t), null;
              } else
                2 * Pn() - o.renderingStartTime > bv && a !== 536870912 && (t.flags |= 128, i = !0, hs(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Pn(), e.sibling = null, a = Rl.current, a = i ? a & nh | Uy : a & nh, Ae(Rl, a, t), e) : (st(t), null);
        case 22:
        case 23:
          return an(t), Jh(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : st(t), i = t.updateQueue, i !== null && wo(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== i && (t.flags |= 2048), e !== null && ze(Js, t), null;
        case 24:
          return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), jn(Dl, t), st(t), null;
        case 25:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Oc(e, t) {
      switch (Qh(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $l) !== bt && Nf(t), t) : null;
        case 3:
          return jn(Dl, t), ot(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Ml(t), null;
        case 13:
          if (an(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            go();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $l) !== bt && Nf(t), t) : null;
        case 19:
          return ze(Rl, t), null;
        case 4:
          return ot(t), null;
        case 10:
          return jn(t.type, t), null;
        case 22:
        case 23:
          return an(t), Jh(t), e !== null && ze(Js, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $l) !== bt && Nf(t), t) : null;
        case 24:
          return jn(Dl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Qn(e, t) {
      switch (Qh(t), t.tag) {
        case 3:
          jn(Dl, t), ot(t);
          break;
        case 26:
        case 27:
        case 5:
          Ml(t);
          break;
        case 4:
          ot(t);
          break;
        case 13:
          an(t);
          break;
        case 19:
          ze(Rl, t);
          break;
        case 10:
          jn(t.type, t);
          break;
        case 22:
        case 23:
          an(t), Jh(t), e !== null && ze(Js, t);
          break;
        case 24:
          jn(Dl, t);
      }
    }
    function Ei() {
      lS.forEach(function(e) {
        return e();
      });
    }
    function Ln() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || C.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function _l(e) {
      if ((Rt & qa) !== gn && He !== 0)
        return He & -He;
      var t = C.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Ks, e !== 0 ? e : yd()) : Df();
    }
    function od() {
      Sn === 0 && (Sn = !(He & 536870912) || Ve ? An() : 536870912);
      var e = uu.current;
      return e !== null && (e.flags |= 32), Sn;
    }
    function et(e, t, a) {
      if (ph && console.error("useInsertionEffect must not schedule updates."), Wp && (Tv = !0), (e === dt && ht === Is || e.cancelPendingCommit !== null) && (Ai(e, 0), Zn(
        e,
        He,
        Sn,
        !1
      )), Ot(e, a), Rt & qa && e === dt) {
        if (Oa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Me && le(Me) || "Unknown", x1.has(e) || (x1.add(e), t = le(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              C1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), C1 = !0);
          }
      } else
        kl && e0(e, t, a), Xu(t), e === dt && ((Rt & qa) === gn && (Sf |= a), Gt === Fs && Zn(
          e,
          He,
          Sn,
          !1
        )), dn(e);
    }
    function ms(e, t, a) {
      if ((Rt & (qa | Pc)) !== gn)
        throw Error("Should not already be working.");
      var i = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || Na(e, t), o = i ? gs(e, t) : ps(e, t, !0), f = i;
      do {
        if (o === eo) {
          vh && !i && Zn(e, t, 0, !1);
          break;
        } else if (o === pv)
          Zn(
            e,
            t,
            0,
            !to
          );
        else {
          if (a = e.current.alternate, f && !fd(a)) {
            o = ps(e, t, !1), f = !1;
            continue;
          }
          if (o === mh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Gy;
                var y = o.current.memoizedState.isDehydrated;
                if (y && (Ai(
                  o,
                  h
                ).flags |= 256), h = ps(
                  o,
                  h,
                  !1
                ), h !== mh) {
                  if (Zp && !y) {
                    o.errorRecoveryDisabledLanes |= f, Sf |= f, o = Fs;
                    break e;
                  }
                  o = Pu, Pu = d, o !== null && Nu(o);
                }
                o = h;
              }
              if (f = !1, o !== mh) continue;
            }
          }
          if (o === Yy) {
            Ai(e, 0), Zn(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case eo:
              case Yy:
                throw Error("Root did not complete. This is a bug in React.");
              case Fs:
                if ((t & 4194176) === t) {
                  Zn(
                    i,
                    t,
                    Sn,
                    !to
                  );
                  break e;
                }
                break;
              case mh:
                Pu = null;
                break;
              case wp:
              case D1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (i.finishedWork = a, i.finishedLanes = t, C.actQueue !== null)
              Kl(
                i,
                Pu,
                Xy,
                gv,
                Sn,
                Sf,
                Ps,
                H1,
                Tp,
                0
              );
            else {
              if ((t & 62914560) === t && (o = Kp + M1 - Pn(), 10 < o)) {
                if (Zn(
                  i,
                  t,
                  Sn,
                  !to
                ), yl(i, 0) !== 0) break e;
                i.timeoutHandle = G1(
                  Tl.bind(
                    null,
                    i,
                    a,
                    Pu,
                    Xy,
                    gv,
                    t,
                    Sn,
                    Sf,
                    Ps,
                    to,
                    cS,
                    Tp,
                    0
                  ),
                  o
                );
                break e;
              }
              Tl(
                i,
                a,
                Pu,
                Xy,
                gv,
                t,
                Sn,
                Sf,
                Ps,
                to,
                H1,
                Tp,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      dn(e);
    }
    function Nu(e) {
      Pu === null ? Pu = e : Pu.push.apply(
        Pu,
        e
      );
    }
    function Tl(e, t, a, i, o, f, d, h, y, p, O, j, M) {
      var V = t.subtreeFlags;
      if ((V & 8192 || (V & 16785408) === 16785408) && (Ky = { stylesheets: null, count: 0, unsuspend: Lm }, Dm(t), t = Pv(), t !== null)) {
        e.cancelPendingCommit = t(
          Kl.bind(
            null,
            e,
            a,
            i,
            o,
            d,
            h,
            y,
            iS,
            j,
            M
          )
        ), Zn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      Kl(
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
    function fd(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ha(f(), o)) return !1;
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
    function Zn(e, t, a, i) {
      t &= ~_p, t &= ~Sf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Gl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && ru(e, a, t);
    }
    function ba() {
      return (Rt & (qa | Pc)) === gn ? (_o(0), !1) : !0;
    }
    function ys() {
      if (Me !== null) {
        if (ht === ka)
          var e = Me.return;
        else
          e = Me, ls(), Mn(e), lh = null, My = 0, e = Me;
        for (; e !== null; )
          Qn(e.alternate, e), e = e.return;
        Me = null;
      }
    }
    function Ai(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var a = e.timeoutHandle;
      a !== cg && (e.timeoutHandle = cg, mS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ys(), dt = e, Me = a = Gn(e.current, null), He = t, ht = ka, bn = null, to = !1, vh = Na(e, t), Zp = !1, Gt = eo, Ps = Sn = _p = Sf = bf = 0, Pu = Gy = null, gv = !1, t & 8 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Gl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return ki = t, Rr(), Wu.discardPendingWarnings(), a;
    }
    function ju(e, t) {
      he = null, C.H = Ji, C.getCurrentStack = null, Oa = !1, jl = null, t === sv ? (t = p0(), ht = jy) : t === Hg ? (t = p0(), ht = O1) : ht = t === f1 ? Lp : t !== null && typeof t == "object" && typeof t.then == "function" ? yh : Ny, bn = t;
      var a = Me;
      if (a === null)
        Gt = Yy, me(
          e,
          ta(t, e.current)
        );
      else
        switch (a.mode & $l && Gh(a), T(), ht) {
          case Ny:
            J !== null && typeof J.markComponentErrored == "function" && J.markComponentErrored(
              a,
              t,
              He
            );
            break;
          case Is:
          case jy:
          case yh:
          case Vy:
            J !== null && typeof J.markComponentSuspended == "function" && J.markComponentSuspended(
              a,
              t,
              He
            );
        }
    }
    function Vu() {
      var e = C.H;
      return C.H = Ji, e === null ? Ji : e;
    }
    function Qo() {
      var e = C.A;
      return C.A = tS, e;
    }
    function vs() {
      Gt = Fs, to || (He & 4194176) !== He && uu.current !== null || (vh = !0), !(bf & 134217727) && !(Sf & 134217727) || dt === null || Zn(
        dt,
        He,
        Sn,
        !1
      );
    }
    function ps(e, t, a) {
      var i = Rt;
      Rt |= qa;
      var o = Vu(), f = Qo();
      if (dt !== e || He !== t) {
        if (kl) {
          var d = e.memoizedUpdaters;
          0 < d.size && (yt(e, He), d.clear()), t0(e, t);
        }
        Xy = null, Ai(e, t);
      }
      F(t), t = !1, d = Gt;
      e: do
        try {
          if (ht !== ka && Me !== null) {
            var h = Me, y = bn;
            switch (ht) {
              case Lp:
                ys(), d = pv;
                break e;
              case jy:
              case Is:
              case yh:
                uu.current === null && (t = !0);
                var p = ht;
                if (ht = ka, bn = null, Mc(e, h, y, p), a && vh) {
                  d = eo;
                  break e;
                }
                break;
              default:
                p = ht, ht = ka, bn = null, Mc(e, h, y, p);
            }
          }
          Lo(), d = Gt;
          break;
        } catch (O) {
          ju(e, O);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ls(), Rt = i, C.H = o, C.A = f, I(), Me === null && (dt = null, He = 0, Rr()), d;
    }
    function Lo() {
      for (; Me !== null; ) Cm(Me);
    }
    function gs(e, t) {
      var a = Rt;
      Rt |= qa;
      var i = Vu(), o = Qo();
      if (dt !== e || He !== t) {
        if (kl) {
          var f = e.memoizedUpdaters;
          0 < f.size && (yt(e, He), f.clear()), t0(e, t);
        }
        Xy = null, bv = Pn() + U1, Ai(e, t);
      } else
        vh = Na(
          e,
          t
        );
      F(t);
      e: do
        try {
          if (ht !== ka && Me !== null)
            t: switch (t = Me, f = bn, ht) {
              case Ny:
                ht = ka, bn = null, Mc(
                  e,
                  t,
                  f,
                  Ny
                );
                break;
              case Is:
                if (Zh(f)) {
                  ht = ka, bn = null, Zo(t);
                  break;
                }
                t = function() {
                  ht === Is && dt === e && (ht = Vy), dn(e);
                }, f.then(t, t);
                break e;
              case jy:
                ht = Vy;
                break e;
              case O1:
                ht = Qp;
                break e;
              case Vy:
                Zh(f) ? (ht = ka, bn = null, Zo(t)) : (ht = ka, bn = null, Mc(
                  e,
                  t,
                  f,
                  Vy
                ));
                break;
              case Qp:
                var d = null;
                switch (Me.tag) {
                  case 26:
                    d = Me.memoizedState;
                  case 5:
                  case 27:
                    var h = Me;
                    if (!d || Dd(d)) {
                      ht = ka, bn = null;
                      var y = h.sibling;
                      if (y !== null) Me = y;
                      else {
                        var p = h.return;
                        p !== null ? (Me = p, bs(p)) : Me = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                ht = ka, bn = null, Mc(
                  e,
                  t,
                  f,
                  Qp
                );
                break;
              case yh:
                ht = ka, bn = null, Mc(
                  e,
                  t,
                  f,
                  yh
                );
                break;
              case Lp:
                ys(), Gt = pv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          C.actQueue !== null ? Lo() : C0();
          break;
        } catch (O) {
          ju(e, O);
        }
      while (!0);
      return ls(), C.H = i, C.A = o, Rt = a, Me !== null ? (J !== null && typeof J.markRenderYielded == "function" && J.markRenderYielded(), eo) : (I(), dt = null, He = 0, Rr(), Gt);
    }
    function C0() {
      for (; Me !== null && !Gd(); )
        Cm(Me);
    }
    function Cm(e) {
      var t = e.alternate;
      (e.mode & $l) !== bt ? (oc(e), t = k(
        e,
        Kr,
        t,
        e,
        ki
      ), Gh(e)) : t = k(
        e,
        Kr,
        t,
        e,
        ki
      ), e.memoizedProps = e.pendingProps, t === null ? bs(e) : Me = t;
    }
    function Zo(e) {
      var t = k(e, Ri, e);
      e.memoizedProps = e.pendingProps, t === null ? bs(e) : Me = t;
    }
    function Ri(e) {
      var t = e.alternate, a = (e.mode & $l) !== bt;
      switch (a && oc(e), e.tag) {
        case 15:
        case 0:
          t = im(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            He
          );
          break;
        case 11:
          t = im(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            He
          );
          break;
        case 5:
          Mn(e);
        default:
          Qn(t, e), e = Me = nd(e, ki), t = Kr(t, e, ki);
      }
      return a && Gh(e), t;
    }
    function Mc(e, t, a, i) {
      ls(), Mn(t), lh = null, My = 0;
      var o = t.return;
      try {
        if (Sc(
          e,
          o,
          t,
          a,
          He
        )) {
          Gt = Yy, me(
            e,
            ta(a, e.current)
          ), Me = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Me = o, f;
        Gt = Yy, me(
          e,
          ta(a, e.current)
        ), Me = null;
        return;
      }
      t.flags & 32768 ? (Ve || i === Ny ? e = !0 : vh || He & 536870912 ? e = !1 : (to = e = !0, (i === Is || i === jy || i === yh) && (i = uu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), zi(t, e)) : bs(t);
    }
    function bs(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          zi(
            t,
            to
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, oc(t), a = k(
          t,
          Hm,
          a,
          t,
          ki
        ), (t.mode & $l) !== bt && Xh(t), a !== null) {
          Me = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Me = t;
          return;
        }
        Me = t = e;
      } while (t !== null);
      Gt === eo && (Gt = D1);
    }
    function zi(e, t) {
      do {
        var a = Oc(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Me = a;
          return;
        }
        if ((e.mode & $l) !== bt) {
          Xh(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Me = e;
          return;
        }
        Me = e = a;
      } while (e !== null);
      Gt = pv, Me = null;
    }
    function Kl(e, t, a, i, o, f, d, h, y, p) {
      var O = C.T, j = nt.p;
      try {
        nt.p = Ma, C.T = null, x0(
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
        C.T = O, nt.p = j;
      }
    }
    function x0(e, t, a, i, o, f, d, h) {
      do
        Gu();
      while (er !== null);
      if (Wu.flushLegacyContextWarning(), Wu.flushPendingUnsafeLifecycleWarnings(), (Rt & (qa | Pc)) !== gn)
        throw Error("Should not already be working.");
      var y = e.finishedWork;
      if (i = e.finishedLanes, J !== null && typeof J.markCommitStarted == "function" && J.markCommitStarted(i), y === null) return Wi(), null;
      if (i === 0 && console.error(
        "root.finishedLanes should not be empty during a commit. This is a bug in React."
      ), e.finishedWork = null, e.finishedLanes = 0, y === e.current)
        throw Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
        );
      e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
      var p = y.lanes | y.childLanes;
      if (p |= Sp, Fa(
        e,
        i,
        p,
        f,
        d,
        h
      ), e === dt && (Me = dt = null, He = 0), !(y.subtreeFlags & 10256) && !(y.flags & 10256) || Sv || (Sv = !0, Jp = p, kp = a, Sa(af, function() {
        return Gu(), null;
      })), nv = Pd(), a = (y.flags & 15990) !== 0, y.subtreeFlags & 15990 || a ? (a = C.T, C.T = null, f = nt.p, nt.p = Ma, d = Rt, Rt |= Pc, td(e, y), Tm(
        e,
        y,
        i
      ), Wv(ug, e.containerInfo), Nv = !!ng, ug = ng = null, e.current = y, J !== null && typeof J.markLayoutEffectsStarted == "function" && J.markLayoutEffectsStarted(
        i
      ), U0(y, e, i), J !== null && typeof J.markLayoutEffectsStopped == "function" && J.markLayoutEffectsStopped(), _u(), Rt = d, nt.p = f, C.T = a) : e.current = y, (a = Sv) ? (Sv = !1, er = e, wy = i) : (xm(e, p), tr = 0, Ly = null), p = e.pendingLanes, p === 0 && (Tf = null), a || Bm(e), ti(y.stateNode, o), kl && e.memoizedUpdaters.clear(), Ei(), dn(e), t !== null)
        for (o = e.onRecoverableError, y = 0; y < t.length; y++)
          p = t[y], a = B0(p.stack), k(
            p.source,
            o,
            p.value,
            a
          );
      return wy & 3 && Gu(), p = e.pendingLanes, i & 4194218 && p & 42 ? (iv = !0, e === $p ? Qy++ : (Qy = 0, $p = e)) : Qy = 0, _o(0), Wi(), null;
    }
    function B0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function xm(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, rc(t)));
    }
    function Gu() {
      if (er !== null) {
        var e = er, t = Jp;
        Jp = 0;
        var a = l0(wy), i = vn > a ? vn : a;
        a = C.T;
        var o = nt.p;
        try {
          if (nt.p = i, C.T = null, er === null)
            var f = !1;
          else {
            i = kp, kp = null;
            var d = er, h = wy;
            if (er = null, wy = 0, (Rt & (qa | Pc)) !== gn)
              throw Error(
                "Cannot flush passive effects while already rendering."
              );
            Wp = !0, Tv = !1, J !== null && typeof J.markPassiveEffectsStarted == "function" && J.markPassiveEffectsStarted(h);
            var y = Rt;
            if (Rt |= Pc, Vo(d.current), zm(
              d,
              d.current,
              h,
              i
            ), J !== null && typeof J.markPassiveEffectsStopped == "function" && J.markPassiveEffectsStopped(), Bm(d), Rt = y, _o(0, !1), Tv ? d === Ly ? tr++ : (tr = 0, Ly = d) : tr = 0, Tv = Wp = !1, Vl && typeof Vl.onPostCommitFiberRoot == "function")
              try {
                Vl.onPostCommitFiberRoot(nf, d);
              } catch (O) {
                Jl || (Jl = !0, console.error(
                  "React instrumentation encountered an error: %s",
                  O
                ));
              }
            var p = d.current.stateNode;
            p.effectDuration = 0, p.passiveEffectDuration = 0, f = !0;
          }
          return f;
        } finally {
          nt.p = o, C.T = a, xm(e, t);
        }
      }
      return !1;
    }
    function sd(e, t, a) {
      t = ta(a, t), t = Ut(e.stateNode, t, 2), e = Cu(e, t, 2), e !== null && (Ot(e, 2), dn(e));
    }
    function _e(e, t, a) {
      if (ph = !1, e.tag === 3)
        sd(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            sd(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Tf === null || !Tf.has(i))) {
              e = ta(a, e), a = Mo(2), i = Cu(t, a, 2), i !== null && (pi(
                a,
                i,
                t,
                e
              ), Ot(i, 2), dn(i));
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
    function rn(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new aS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Zp = !0, o.add(a), i = Ct.bind(null, e, t, a), kl && yt(e, a), t.then(i, i));
    }
    function Ct(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ln() && C.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), dt === e && (He & a) === a && (Gt === Fs || Gt === wp && (He & 62914560) === He && Pn() - Kp < M1 ? (Rt & qa) === gn && Ai(e, 0) : _p |= a, Ps === He && (Ps = 0)), dn(e);
    }
    function rd(e, t) {
      t === 0 && (t = li()), e = gl(e, t), e !== null && (Ot(e, t), dn(e));
    }
    function q0(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), rd(e, a);
    }
    function cl(e, t) {
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
      i !== null && i.delete(t), rd(e, a);
    }
    function dd(e, t, a) {
      if (t.subtreeFlags & 33562624)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === xd;
          f = a || f, o.tag !== 22 ? o.flags & 33554432 ? f && k(
            o,
            Y0,
            i,
            o,
            (o.mode & Mg) === bt
          ) : dd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? k(
            o,
            Y0,
            i,
            o
          ) : o.subtreeFlags & 33554432 && k(
            o,
            dd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Y0(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Je(!0);
      try {
        Am(t), a && Mm(t), Rm(e, t.alternate, t, !1), a && il(e, t, 0, null, !1);
      } finally {
        Je(!1);
      }
    }
    function Bm(e) {
      var t = !0;
      e.current.mode & (fa | $u) || (t = !1), dd(
        e,
        e.current,
        t
      );
    }
    function qm(e) {
      if ((Rt & qa) === gn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = le(e) || "ReactComponent", Ev !== null) {
            if (Ev.has(t)) return;
            Ev.add(t);
          } else Ev = /* @__PURE__ */ new Set([t]);
          k(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function yt(e, t) {
      kl && e.memoizedUpdaters.forEach(function(a) {
        e0(e, a, t);
      });
    }
    function Sa(e, t) {
      var a = C.actQueue;
      return a !== null ? (a.push(t), oS) : ia(e, t);
    }
    function Xu(e) {
      Ln() && C.actQueue === null && k(e, function() {
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
    function dn(e) {
      e !== gh && e.next === null && (gh === null ? Av = gh = e : gh = gh.next = e), Rv = !0, C.actQueue !== null ? Ip || (Ip = !0, Ea(N0)) : Fp || (Fp = !0, Ea(N0));
    }
    function _o(e, t) {
      if (!Pp && Rv) {
        Pp = !0;
        do
          for (var a = !1, i = Av; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Gl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326677 ? f & 201326677 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, La(i, f));
            } else
              f = He, f = yl(
                i,
                i === dt ? f : 0
              ), !(f & 3) || Na(i, f) || (a = !0, La(i, f));
            i = i.next;
          }
        while (a);
        Pp = !1;
      }
    }
    function N0() {
      Rv = Ip = Fp = !1;
      var e = 0;
      lr !== 0 && (Oe() && (e = lr), lr = 0);
      for (var t = Pn(), a = null, i = Av; i !== null; ) {
        var o = i.next, f = hd(i, t);
        f === 0 ? (i.next = null, a === null ? Av = o : a.next = o, o === null && (gh = a)) : (a = i, (e !== 0 || f & 3) && (Rv = !0)), i = o;
      }
      _o(e);
    }
    function hd(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Gl(f), h = 1 << d, y = o[d];
        y === -1 ? (!(h & a) || h & i) && (o[d] = ll(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = dt, a = He, a = yl(
        e,
        e === t ? a : 0
      ), i = e.callbackNode, a === 0 || e === t && ht === Is || e.cancelPendingCommit !== null)
        return i !== null && md(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || Na(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || C.actQueue !== null && i !== eg)
          md(i);
        else return t;
        switch (l0(a)) {
          case Ma:
          case _a:
            a = Xd;
            break;
          case vn:
            a = af;
            break;
          case Zc:
            a = uy;
            break;
          default:
            a = af;
        }
        return i = Ta.bind(null, e), C.actQueue !== null ? (C.actQueue.push(i), a = eg) : a = ia(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && md(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Ta(e, t) {
      iv = uv = !1;
      var a = e.callbackNode;
      if (Gu() && e.callbackNode !== a)
        return null;
      var i = He;
      return i = yl(
        e,
        e === dt ? i : 0
      ), i === 0 ? null : (ms(
        e,
        i,
        t
      ), hd(e, Pn()), e.callbackNode != null && e.callbackNode === a ? Ta.bind(null, e) : null);
    }
    function La(e, t) {
      if (Gu()) return null;
      uv = iv, iv = !1, ms(e, t, !0);
    }
    function md(e) {
      e !== eg && e !== null && $0(e);
    }
    function Ea(e) {
      C.actQueue !== null && C.actQueue.push(function() {
        return e(), null;
      }), yS(function() {
        (Rt & (qa | Pc)) !== gn ? ia(Ni, e) : e();
      });
    }
    function yd() {
      return lr === 0 && (lr = An()), lr;
    }
    function _n(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (qe(e, "action"), On("" + e));
    }
    function Uc(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Di(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = _n(
          (o[ca] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ca] || null) ? _n(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new A(
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
                  if (lr !== 0) {
                    var y = d ? Uc(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Yn(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Uc(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Yn(
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
    function vd(e, t) {
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
                yv(O);
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
                yv(O);
              }
              o.currentTarget = null, o = y;
            }
        }
      }
    }
    function De(e, t) {
      tg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[_c];
      a === void 0 && (a = t[_c] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Hc(t, e, 2, !1), a.add(i));
    }
    function Kn(e, t, a) {
      tg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Hc(
        a,
        e,
        i,
        t
      );
    }
    function pd(e) {
      if (!e[zv]) {
        e[zv] = !0, js.forEach(function(a) {
          a !== "selectionchange" && (tg.has(a) || Kn(a, !1, e), Kn(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zv] || (t[zv] = !0, Kn("selectionchange", !1, t));
      }
    }
    function Hc(e, t, a, i) {
      switch (wc(t)) {
        case Ma:
          var o = _0;
          break;
        case _a:
          o = tp;
          break;
        default:
          o = km;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !U || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
    function Cc(e, t, a, i, o) {
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
              if (d = Rn(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      gr(function() {
        var p = f, O = ui(a), j = [];
        e: {
          var M = Dg.get(e);
          if (M !== void 0) {
            var V = A, ee = e;
            switch (e) {
              case "keypress":
                if (ho(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = Ub;
                break;
              case "focusin":
                ee = "focus", V = yp;
                break;
              case "focusout":
                ee = "blur", V = yp;
                break;
              case "beforeblur":
              case "afterblur":
                V = yp;
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
                V = $t;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = Zi;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = xb;
                break;
              case Eg:
              case Ag:
              case Rg:
                V = Sb;
                break;
              case zg:
                V = qb;
                break;
              case "scroll":
              case "scrollend":
                V = G;
                break;
              case "wheel":
                V = Nb;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = Eb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = mg;
                break;
              case "toggle":
              case "beforetoggle":
                V = Vb;
            }
            var be = (t & 4) !== 0, Wt = !be && (e === "scroll" || e === "scrollend"), Fe = be ? M !== null ? M + "Capture" : null : M;
            be = [];
            for (var S = p, b; S !== null; ) {
              var E = S;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Fe === null || (E = so(S, Fe), E != null && be.push(
                wu(
                  S,
                  E,
                  b
                )
              )), Wt) break;
              S = S.return;
            }
            0 < be.length && (M = new V(
              M,
              ee,
              null,
              a,
              O
            ), j.push({
              event: M,
              listeners: be
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", M && a !== g && (ee = a.relatedTarget || a.fromElement) && (Rn(ee) || ee[Vi]))
              break e;
            if ((V || M) && (M = O.window === O ? O : (M = O.ownerDocument) ? M.defaultView || M.parentWindow : window, V ? (ee = a.relatedTarget || a.toElement, V = p, ee = ee ? Rn(ee) : null, ee !== null && (Wt = el(ee), be = ee.tag, ee !== Wt || be !== 5 && be !== 27 && be !== 6) && (ee = null)) : (V = null, ee = p), V !== ee)) {
              if (be = $t, E = "onMouseLeave", Fe = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (be = mg, E = "onPointerLeave", Fe = "onPointerEnter", S = "pointer"), Wt = V == null ? M : Of(V), b = ee == null ? M : Of(ee), M = new be(
                E,
                S + "leave",
                V,
                a,
                O
              ), M.target = Wt, M.relatedTarget = b, E = null, Rn(O) === p && (be = new be(
                Fe,
                S + "enter",
                ee,
                a,
                O
              ), be.target = b, be.relatedTarget = Wt, E = be), Wt = E, V && ee)
                t: {
                  for (be = V, Fe = ee, S = 0, b = be; b; b = xc(b))
                    S++;
                  for (b = 0, E = Fe; E; E = xc(E))
                    b++;
                  for (; 0 < S - b; )
                    be = xc(be), S--;
                  for (; 0 < b - S; )
                    Fe = xc(Fe), b--;
                  for (; S--; ) {
                    if (be === Fe || Fe !== null && be === Fe.alternate)
                      break t;
                    be = xc(be), Fe = xc(Fe);
                  }
                  be = null;
                }
              else be = null;
              V !== null && Ym(
                j,
                M,
                V,
                be,
                !1
              ), ee !== null && Wt !== null && Ym(
                j,
                Wt,
                ee,
                be,
                !0
              );
            }
          }
          e: {
            if (M = p ? Of(p) : window, V = M.nodeName && M.nodeName.toLowerCase(), V === "select" || V === "input" && M.type === "file")
              var Y = Er;
            else if (ci(M))
              if (Sg)
                Y = $v;
              else {
                Y = Jv;
                var K = u0;
              }
            else
              V = M.nodeName, !V || V.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? p && ac(p.elementType) && (Y = Er) : Y = kv;
            if (Y && (Y = Y(e, p))) {
              mo(
                j,
                Y,
                a,
                O
              );
              break e;
            }
            K && K(e, M, p), e === "focusout" && p && M.type === "number" && p.memoizedProps.value != null && vu(M, "number", M.value);
          }
          switch (K = p ? Of(p) : window, e) {
            case "focusin":
              (ci(K) || K.contentEditable === "true") && ($d = K, pp = p, by = null);
              break;
            case "focusout":
              by = pp = $d = null;
              break;
            case "mousedown":
              gp = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              gp = !1, s0(
                j,
                a,
                O
              );
              break;
            case "selectionchange":
              if (Qb) break;
            case "keydown":
            case "keyup":
              s0(
                j,
                a,
                O
              );
          }
          var ye;
          if (vp)
            e: {
              switch (e) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break e;
                case "compositionend":
                  P = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break e;
              }
              P = void 0;
            }
          else
            kd ? xf(e, a) && (P = "onCompositionEnd") : e === "keydown" && a.keyCode === yg && (P = "onCompositionStart");
          P && (vg && a.locale !== "ko" && (kd || P !== "onCompositionStart" ? P === "onCompositionEnd" && kd && (ye = ro()) : ($ = O, de = "value" in $ ? $.value : $.textContent, kd = !0)), K = Qu(
            p,
            P
          ), 0 < K.length && (P = new hg(
            P,
            e,
            null,
            a,
            O
          ), j.push({
            event: P,
            listeners: K
          }), ye ? P.data = ye : (ye = Bf(a), ye !== null && (P.data = ye)))), (ye = Xb ? n0(e, a) : ea(e, a)) && (P = Qu(
            p,
            "onBeforeInput"
          ), 0 < P.length && (K = new Rb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            O
          ), j.push({
            event: K,
            listeners: P
          }), K.data = ye)), Di(
            j,
            e,
            p,
            a,
            O
          );
        }
        vd(j, t);
      });
    }
    function wu(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Qu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = so(e, a), o != null && i.unshift(
          wu(e, o, f)
        ), o = so(e, t), o != null && i.push(
          wu(e, o, f)
        )), e = e.return;
      }
      return i;
    }
    function xc(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Ym(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = so(a, f), p != null && d.unshift(
          wu(a, p, y)
        )) : o || (p = so(a, f), p != null && d.push(
          wu(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Bc(e, t) {
      pr(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || n || (n = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ju,
        possibleRegistrationNames: iy
      };
      ac(e) || typeof t.is == "string" || Bh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Kt(e, t, a, i) {
      t !== a && (a = Jt(a), Jt(t) !== a && (i[e] = t));
    }
    function gd(e, t, a) {
      t.forEach(function(i) {
        a[Sd(i)] = i === "style" ? Ss(e) : e.getAttribute(i);
      });
    }
    function hn(e, t) {
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
    function j0(e, t) {
      return e = e.namespaceURI === Li || e.namespaceURI === Ua ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Jt(e) {
      return Ke(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        mt(e)
      ), ml(e)), (typeof e == "string" ? e : "" + e).replace(fS, `
`).replace(sS, "");
    }
    function bd(e, t) {
      return t = Jt(t), Jt(e) === t;
    }
    function mn() {
    }
    function $e(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Cf(i, t), t === "body" || t === "textarea" && i === "" || Dn(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Cf("" + i, t), t !== "body" && Dn(e, "" + i));
          break;
        case "className":
          Uf(e, "class", i);
          break;
        case "tabIndex":
          Uf(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Uf(e, a, i);
          break;
        case "style":
          Ch(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Uf(e, "data", i);
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
          qe(i, a), i = On("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Mv || (Mv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Ov || (Ov = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Dv ? t !== "button" || o.type == null || o.type === "submit" || Dv ? typeof i == "function" && (o.name == null || Y1 || (Y1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Mv || (Mv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Ov || (Ov = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Dv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Dv = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && $e(e, t, "name", o.name, o, null), $e(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), $e(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), $e(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : ($e(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), $e(e, t, "method", o.method, o, null), $e(
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
          qe(i, a), i = On("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && hn(a, i), e.onclick = mn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && hn(a, i), De("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && hn(a, i), De("scrollend", e));
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
          qe(i, a), a = On("" + i), e.setAttributeNS(ar, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (qe(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Uv[a] || (Uv[a] = !0, console.error(
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (qe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (qe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (qe(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          De("beforetoggle", e), De("toggle", e), Mf(e, "popover", i);
          break;
        case "xlinkActuate":
          mu(
            e,
            ar,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          mu(
            e,
            ar,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          mu(
            e,
            ar,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          mu(
            e,
            ar,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          mu(
            e,
            ar,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          mu(
            e,
            ar,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          mu(
            e,
            lg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          mu(
            e,
            lg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          mu(
            e,
            lg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Mf(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          N1 || i == null || typeof i != "object" || (N1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = a0(a), Mf(e, a, i)) : Ju.hasOwnProperty(a) && i != null && typeof i != "function" && hn(a, i);
      }
    }
    function Ko(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Ch(e, i, f);
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
          typeof i == "string" ? Dn(e, i) : (typeof i == "number" || typeof i == "bigint") && Dn(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && hn(a, i), De("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && hn(a, i), De("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && hn(a, i), e.onclick = mn);
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
          if (Ju.hasOwnProperty(a))
            i != null && typeof i != "function" && hn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ca] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Mf(e, a, i);
            }
      }
    }
    function At(e, t, a) {
      switch (Bc(t, a), t) {
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
          De("error", e), De("load", e);
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
                    $e(e, t, f, d, a, null);
                }
            }
          o && $e(e, t, "srcSet", a.srcSet, a, null), i && $e(e, t, "src", a.src, a, null);
          return;
        case "input":
          uo("input", a), De("invalid", e);
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
                    $e(e, t, i, O, a, null);
                }
            }
          Eh(e, a), dr(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          ), yu(e);
          return;
        case "select":
          uo("select", a), De("invalid", e), i = d = f = null;
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
                  $e(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Qt(e, a), t = f, a = d, e.multiple = !!i, t != null ? Pa(e, !!i, t, !1) : a != null && Pa(e, !!i, a, !0);
          return;
        case "textarea":
          uo("textarea", a), De("invalid", e), f = o = i = null;
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
                  $e(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Ah(e, a), ai(e, i, o, f), yu(e);
          return;
        case "option":
          Pi(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  $e(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          De("cancel", e), De("close", e);
          break;
        case "iframe":
        case "object":
          De("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Zy.length; i++)
            De(Zy[i], e);
          break;
        case "image":
          De("error", e), De("load", e);
          break;
        case "details":
          De("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          De("error", e), De("load", e);
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
                  $e(e, t, p, i, a, null);
              }
          return;
        default:
          if (ac(t)) {
            for (O in a)
              a.hasOwnProperty(O) && (i = a[O], i !== void 0 && Ko(
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
        a.hasOwnProperty(h) && (i = a[h], i != null && $e(e, t, h, i, a, null));
    }
    function V0(e, t, a, i) {
      switch (Bc(t, i), t) {
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
          for (V in a) {
            var j = a[V];
            if (a.hasOwnProperty(V) && j != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = j;
                default:
                  i.hasOwnProperty(V) || $e(
                    e,
                    t,
                    V,
                    null,
                    i,
                    j
                  );
              }
          }
          for (var M in i) {
            var V = i[M];
            if (j = a[M], i.hasOwnProperty(M) && (V != null || j != null))
              switch (M) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  p = V;
                  break;
                case "defaultChecked":
                  O = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== j && $e(
                    e,
                    t,
                    M,
                    V,
                    i,
                    j
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || q1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), q1 = !0), !t || i || B1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), B1 = !0), Ii(
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
          V = d = h = M = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = y;
                default:
                  i.hasOwnProperty(f) || $e(
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
                  f !== y && $e(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = V, M != null ? Pa(e, !!t, M, !1) : !!a != !!t && (i != null ? Pa(e, !!t, i, !0) : Pa(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = M = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  $e(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  M = o;
                  break;
                case "defaultValue":
                  V = o;
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
                  o !== f && $e(e, t, d, o, i, f);
              }
          Rh(e, M, V);
          return;
        case "option":
          for (var ee in a)
            if (M = a[ee], a.hasOwnProperty(ee) && M != null && !i.hasOwnProperty(ee))
              switch (ee) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  $e(
                    e,
                    t,
                    ee,
                    null,
                    i,
                    M
                  );
              }
          for (y in i)
            if (M = i[y], V = a[y], i.hasOwnProperty(y) && M !== V && (M != null || V != null))
              switch (y) {
                case "selected":
                  e.selected = M && typeof M != "function" && typeof M != "symbol";
                  break;
                default:
                  $e(
                    e,
                    t,
                    y,
                    M,
                    i,
                    V
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
          for (var be in a)
            M = a[be], a.hasOwnProperty(be) && M != null && !i.hasOwnProperty(be) && $e(
              e,
              t,
              be,
              null,
              i,
              M
            );
          for (p in i)
            if (M = i[p], V = a[p], i.hasOwnProperty(p) && M !== V && (M != null || V != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  $e(
                    e,
                    t,
                    p,
                    M,
                    i,
                    V
                  );
              }
          return;
        default:
          if (ac(t)) {
            for (var Wt in a)
              M = a[Wt], a.hasOwnProperty(Wt) && M !== void 0 && !i.hasOwnProperty(Wt) && Ko(
                e,
                t,
                Wt,
                void 0,
                i,
                M
              );
            for (O in i)
              M = i[O], V = a[O], !i.hasOwnProperty(O) || M === V || M === void 0 && V === void 0 || Ko(
                e,
                t,
                O,
                M,
                i,
                V
              );
            return;
          }
      }
      for (var Fe in a)
        M = a[Fe], a.hasOwnProperty(Fe) && M != null && !i.hasOwnProperty(Fe) && $e(e, t, Fe, null, i, M);
      for (j in i)
        M = i[j], V = a[j], !i.hasOwnProperty(j) || M === V || M == null && V == null || $e(e, t, j, M, i, V);
    }
    function Sd(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ss(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Jn(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ra(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || sf.has(f) ? (ra(d, f), i += o + f.replace(ry, "-$1").toLowerCase().replace(cf, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(ry, "-$1").toLowerCase().replace(cf, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Jt(i), Jt(t) !== i && (a.style = Ss(e)));
      }
    }
    function Aa(e, t, a, i, o, f) {
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
            if (qe(i, t), e === "" + i)
              return;
        }
      Kt(t, e, i, f);
    }
    function Ts(e, t, a, i, o, f) {
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
      Kt(t, e, i, f);
    }
    function qc(e, t, a, i, o, f) {
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
            if (qe(i, a), e === "" + i)
              return;
        }
      Kt(t, e, i, f);
    }
    function vt(e, t, a, i, o, f) {
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
            if (!isNaN(i) && (qe(i, t), e === "" + i))
              return;
        }
      Kt(t, e, i, f);
    }
    function Td(e, t, a, i, o, f) {
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
            if (qe(i, t), a = On("" + i), e === a)
              return;
        }
      Kt(t, e, i, f);
    }
    function G0(e, t, a, i) {
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
      if (ac(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Ju.hasOwnProperty(y))
                typeof p != "function" && hn(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Kt(
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
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = j0(e, p), Kt(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Jn(e, p, o);
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
                    f.delete("class"), d = Th(
                      e,
                      "class",
                      p
                    ), Kt(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === lo && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Th(
                      e,
                      y,
                      p
                    ), Kt(
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
            if (Ju.hasOwnProperty(p))
              typeof y != "function" && hn(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Kt(
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
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = j0(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Aa(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Aa(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Jn(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Kt(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Kt(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Kt(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), Kt(
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
                    ), Td(
                      e,
                      p,
                      p,
                      null,
                      f,
                      o
                    );
                    continue;
                  }
                  Td(
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
                  } else if (d === rS) {
                    f.delete(p.toLowerCase()), Kt(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Td(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Td(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  qc(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  qc(
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
                  qc(
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
                  Ts(
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
                          if (qe(y, d), h === "" + y)
                            break e;
                      }
                    Kt(
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
                          if (!(isNaN(y) || 1 > y) && (qe(y, d), h === "" + y))
                            break e;
                      }
                    Kt(
                      d,
                      h,
                      y,
                      j
                    );
                  }
                  continue;
                case "rowSpan":
                  vt(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  vt(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Aa(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Aa(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Aa(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Aa(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Aa(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Aa(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Aa(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Aa(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Aa(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Aa(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Uv[p] || (Uv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Ts(
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
                    h = a0(p), d = !1, i.context === lo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (O = p.toLowerCase(), O = Kc.hasOwnProperty(
                      O
                    ) && Kc[O] || null, O !== null && O !== p && (d = !0, f.delete(O)), f.delete(h));
                    e: if (O = e, j = h, h = y, fr(j))
                      if (O.hasAttribute(j))
                        O = O.getAttribute(
                          j
                        ), qe(
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
                    d || Kt(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && gd(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function X0(e, t) {
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
    function Ed(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function w0(e) {
      switch (e) {
        case Ua:
          return bh;
        case Li:
          return xv;
        default:
          return lo;
      }
    }
    function pt(e, t) {
      if (e === lo)
        switch (t) {
          case "svg":
            return bh;
          case "math":
            return xv;
          default:
            return lo;
        }
      return e === bh && t === "foreignObject" ? lo : e;
    }
    function Ie(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Oe() {
      var e = window.event;
      return e && e.type === "popstate" ? e === ig ? !1 : (ig = e, !0) : (ig = null, !1);
    }
    function Ye(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function at(e, t, a) {
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
    function Ra(e, t, a, i) {
      V0(e, t, a, i), e[ca] = i;
    }
    function kn(e) {
      Dn(e, "");
    }
    function Jo(e, t, a) {
      e.nodeValue = a;
    }
    function Nm(e, t) {
      e.removeChild(t);
    }
    function Lu(e, t) {
      e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function gt(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === Cv) {
            if (i === 0) {
              e.removeChild(o), ef(t);
              return;
            }
            i--;
          } else
            a !== Hv && a !== nr && a !== ur || i++;
        a = o;
      } while (a);
      ef(t);
    }
    function Oi(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Yc(e) {
      e.nodeValue = "";
    }
    function jm(e, t) {
      t = t[hS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Za(e, t) {
      e.nodeValue = t;
    }
    function Mi(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Mi(a), du(a);
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
    function Es(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Gi])
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
          qe(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ua(e.nextSibling), e === null) break;
      }
      return null;
    }
    function $n(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ua(e.nextSibling), e === null)) return null;
      return e;
    }
    function ua(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Hv || t === ur || t === nr || t === ag || t === j1)
            break;
          if (t === Cv) return null;
        }
      }
      return e;
    }
    function Ad(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Sd(f.name)] = f.name.toLowerCase() === "style" ? Ss(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function As(e, t, a) {
      return a === null || a[dS] !== !0 ? (e.nodeValue === t ? e = null : (t = Jt(t), e = Jt(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Rs(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Cv) {
            if (t === 0)
              return ua(e.nextSibling);
            t--;
          } else
            a !== Hv && a !== ur && a !== nr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Zu(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Hv || a === ur || a === nr) {
            if (t === 0) return e;
            t--;
          } else a === Cv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Rd(e) {
      ef(e);
    }
    function Nc(e) {
      ef(e);
    }
    function ko(e, t, a, i, o) {
      switch (o && vr(e, i.ancestorInfo), t = Ed(a), e) {
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
    function Vm(e, t, a, i) {
      if (Ia(a)) {
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
      At(a, e, t), a[Al] = i, a[ca] = t;
    }
    function $o(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument;
    }
    function Wo(e, t, a) {
      var i = Sh;
      if (i && typeof t == "string" && t) {
        var o = ja(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), L1.has(o) || (L1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), At(t, "link", e), Xt(t), i.head.appendChild(t)));
      }
    }
    function zd(e, t, a, i) {
      var o = (o = fl.current) ? $o(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = jc(a.href), t = Fi(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = jc(a.href);
            var f = Fi(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: ir, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              kt(e)
            )) && !f._p && (d.instance = f, d.state.loading = _y | fu), !su.has(e))) {
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
              su.set(e, h), f || Xm(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Yl(t) + `
  + ` + Yl(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Yl(t) + `
  + ` + Yl(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Vc(a), t = Fi(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function Yl(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : In.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : In.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : In.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function jc(e) {
      return 'href="' + ja(e) + '"';
    }
    function kt(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Gm(e) {
      return ve({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Xm(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = _y : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= _y;
      }), t.addEventListener("error", function() {
        return i.loading |= w1;
      }), At(t, "link", a), Xt(t), e.head.appendChild(t));
    }
    function Vc(e) {
      return '[src="' + ja(e) + '"]';
    }
    function zs(e) {
      return "script[async]" + e;
    }
    function Wn(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + ja(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Xt(i), i;
            var o = ve({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Xt(i), At(i, "style", o), Gc(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = jc(a.href);
            var f = e.querySelector(
              kt(o)
            );
            if (f)
              return t.state.loading |= fu, t.instance = f, Xt(f), f;
            i = Gm(a), (o = su.get(o)) && Ds(i, o), f = (e.ownerDocument || e).createElement("link"), Xt(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), At(f, "link", i), t.state.loading |= fu, Gc(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Vc(a.src), (o = e.querySelector(
              zs(f)
            )) ? (t.instance = o, Xt(o), o) : (i = a, (o = su.get(f)) && (i = ve({}, a), Ui(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Xt(o), At(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & fu) === ir && (i = t.instance, t.state.loading |= fu, Gc(i, a.precedence, e));
      return t.instance;
    }
    function Gc(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Ds(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Ui(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function wm(e, t, a) {
      if (Bv === null) {
        var i = /* @__PURE__ */ new Map(), o = Bv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Bv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Gi] || f[Al] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Ua) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Qm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Q0(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === bh || t.itemProp != null)
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
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = X0(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
    function Dd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & Q1) === ir);
    }
    function Lm() {
    }
    function Iv(e, t, a) {
      if (Ky === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Ky;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & fu) === ir) {
        if (t.instance === null) {
          var o = jc(a.href), f = e.querySelector(
            kt(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Od.bind(i), e.then(i, i)), t.state.loading |= fu, t.instance = f, Xt(f);
            return;
          }
          f = e.ownerDocument || e, a = Gm(a), (o = su.get(o)) && Ds(a, o), f = f.createElement("link"), Xt(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), At(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & Q1) === ir && (i.count++, t = Od.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function Pv() {
      if (Ky === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Ky;
      return e.stylesheets && e.count === 0 && Md(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Md(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Od() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Md(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Md(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qv = /* @__PURE__ */ new Map(), t.forEach(L0, e), qv = null, Od.call(e));
    }
    function L0(e, t) {
      if (!(t.state.loading & fu)) {
        var a = qv.get(e);
        if (a) var i = a.get(og);
        else {
          a = /* @__PURE__ */ new Map(), qv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(og, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(og, o), a.set(d, o), this.count++, i = Od.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= fu;
      }
    }
    function Fo(e, t, a) {
      var i = 0;
      switch (e) {
        case "dir":
        case "dirxml":
        case "groupEnd":
        case "table":
          return J1.apply(console[e], [console].concat(t));
        case "assert":
          i = 1;
      }
      return t = t.slice(0), typeof t[i] == "string" ? t.splice(
        i,
        1,
        Z1 + t[i],
        _1,
        Yv + a + Yv,
        K1
      ) : t.splice(
        i,
        0,
        Z1,
        _1,
        Yv + a + Yv,
        K1
      ), t.unshift(console), J1.apply(console[e], t);
    }
    function Ud(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = cg, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ul(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.hiddenUpdates = Ul(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Zm(e, t, a, i, o, f, d, h, y, p, O, j) {
      return e = new Ud(
        e,
        t,
        a,
        d,
        h,
        y,
        p,
        j
      ), t = Kb, f === !0 && (t |= fa | $u), kl && (t |= $l), f = Ze(3, null, null, t), e.current = f, f.stateNode = e, t = Su(), Xa(t), e.pooledCache = t, Xa(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, kr(f), e;
    }
    function _m(e) {
      return e ? (e = df, e) : df;
    }
    function Z0(e, t, a, i) {
      return t.tag === 0 && Gu(), Km(
        t.current,
        2,
        e,
        t,
        a,
        i
      ), 2;
    }
    function Km(e, t, a, i, o, f) {
      if (Vl && typeof Vl.onScheduleFiberRoot == "function")
        try {
          Vl.onScheduleFiberRoot(nf, i, a);
        } catch (d) {
          Jl || (Jl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      J !== null && typeof J.markRenderScheduled == "function" && J.markRenderScheduled(t), o = _m(o), i.context === null ? i.context = o : i.pendingContext = o, Oa && jl !== null && !k1 && (k1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        le(jl) || "Unknown"
      )), i = Hu(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Cu(e, i, t), a !== null && (et(a, e, t), is(a, e, t));
    }
    function Xc(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Hd(e, t) {
      Xc(e, t), (e = e.alternate) && Xc(e, t);
    }
    function Pe(e) {
      if (e.tag === 13) {
        var t = gl(e, 67108864);
        t !== null && et(t, e, 67108864), Hd(e, 67108864);
      }
    }
    function Jm() {
      return jl;
    }
    function ep() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = lt(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function _0(e, t, a, i) {
      var o = C.T;
      C.T = null;
      var f = nt.p;
      try {
        nt.p = Ma, km(e, t, a, i);
      } finally {
        nt.p = f, C.T = o;
      }
    }
    function tp(e, t, a, i) {
      var o = C.T;
      C.T = null;
      var f = nt.p;
      try {
        nt.p = _a, km(e, t, a, i);
      } finally {
        nt.p = f, C.T = o;
      }
    }
    function km(e, t, a, i) {
      if (Nv) {
        var o = $m(i);
        if (o === null)
          Cc(
            e,
            t,
            i,
            jv,
            a
          ), Cd(e, i);
        else if (Wm(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Cd(e, i), t & 4 && -1 < vS.indexOf(e)) {
          for (; o !== null; ) {
            var f = Ia(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = fe(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Gl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      dn(f), (Rt & (qa | Pc)) === gn && (bv = Pn() + U1, _o(0));
                    }
                  }
                  break;
                case 13:
                  h = gl(f, 2), h !== null && et(h, f, 2), ba(), Hd(f, 2);
              }
            if (f = $m(i), f === null && Cc(
              e,
              t,
              i,
              jv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Cc(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function $m(e) {
      return e = ui(e), Io(e);
    }
    function Io(e) {
      if (jv = null, e = Rn(e), e !== null) {
        var t = el(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = x(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return jv = e, null;
    }
    function wc(e) {
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
          return Ma;
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
          return _a;
        case "message":
          switch (up()) {
            case Ni:
              return Ma;
            case Xd:
              return _a;
            case af:
            case ip:
              return vn;
            case uy:
              return Zc;
            default:
              return vn;
          }
        default:
          return vn;
      }
    }
    function Cd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ef = null;
          break;
        case "dragenter":
        case "dragleave":
          Af = null;
          break;
        case "mouseover":
        case "mouseout":
          Rf = null;
          break;
        case "pointerover":
        case "pointerout":
          ky.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          $y.delete(t.pointerId);
      }
    }
    function Hi(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Ia(t), t !== null && Pe(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Wm(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Ef = Hi(
            Ef,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Af = Hi(
            Af,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Rf = Hi(
            Rf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return ky.set(
            f,
            Hi(
              ky.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, $y.set(
            f,
            Hi(
              $y.get(f) || null,
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
    function Ci(e) {
      var t = Rn(e.target);
      if (t !== null) {
        var a = el(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = x(a), t !== null) {
              e.blockedOn = t, or(e.priority, function() {
                if (a.tag === 13) {
                  var i = _l(a), o = gl(a, i);
                  o !== null && et(o, a, i), Hd(a, i);
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
    function za(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = $m(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          g !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), g = o, a.target.dispatchEvent(i), g === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), g = null;
        } else
          return t = Ia(a), t !== null && Pe(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Po(e, t, a) {
      za(e) && a.delete(t);
    }
    function lp() {
      fg = !1, Ef !== null && za(Ef) && (Ef = null), Af !== null && za(Af) && (Af = null), Rf !== null && za(Rf) && (Rf = null), ky.forEach(Po), $y.forEach(Po);
    }
    function Os(e, t) {
      e.blockedOn === t && (e.blockedOn = null, fg || (fg = !0, qt.unstable_scheduleCallback(
        qt.unstable_NormalPriority,
        lp
      )));
    }
    function Fm(e) {
      Vv !== e && (Vv = e, qt.unstable_scheduleCallback(
        qt.unstable_NormalPriority,
        function() {
          Vv === e && (Vv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Io(i || a) === null)
                continue;
              break;
            }
            var f = Ia(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Yn(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function ef(e) {
      function t(y) {
        return Os(y, e);
      }
      Ef !== null && Os(Ef, e), Af !== null && Os(Af, e), Rf !== null && Os(Rf, e), ky.forEach(t), $y.forEach(t);
      for (var a = 0; a < zf.length; a++) {
        var i = zf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < zf.length && (a = zf[0], a.blockedOn === null); )
        Ci(a), a.blockedOn === null && zf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ca] || null;
          if (typeof f == "function")
            d || Fm(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ca] || null)
                h = d.formAction;
              else if (Io(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Fm(a);
          }
        }
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function tf(e) {
      this._internalRoot = e;
    }
    function Pm(e) {
      e[Vi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var qt = vb(), ey = dg, ty = yb, ly = Symbol.for("react.element"), xi = Symbol.for("react.transitional.element"), lf = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), xd = Symbol.for("react.strict_mode"), Bd = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), Ms = Symbol.for("react.consumer"), Da = Symbol.for("react.context"), Qc = Symbol.for("react.forward_ref"), qd = Symbol.for("react.suspense"), Us = Symbol.for("react.suspense_list"), Bi = Symbol.for("react.memo"), Nl = Symbol.for("react.lazy"), Lc = Symbol.for("react.offscreen"), K0 = Symbol.for("react.memo_cache_sentinel"), J0 = Symbol.iterator, ap = Symbol.for("react.client.reference"), C = ey.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = Object.assign, qi = 0, We, Yd, ol, k0, Nd, jd, Hs;
    Ol.__reactDisabledLog = !0;
    var Vd, ay, Cs = !1, xs = new (typeof WeakMap == "function" ? WeakMap : Map)(), jl = null, Oa = !1, El = Array.isArray, nt = ty.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, np = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), ny = [], Bs = [], yn = -1, Yi = ie(null), qs = ie(null), fl = ie(null), Ys = ie(null), In = Object.prototype.hasOwnProperty, ia = qt.unstable_scheduleCallback, $0 = qt.unstable_cancelCallback, Gd = qt.unstable_shouldYield, _u = qt.unstable_requestPaint, Pn = qt.unstable_now, up = qt.unstable_getCurrentPriorityLevel, Ni = qt.unstable_ImmediatePriority, Xd = qt.unstable_UserBlockingPriority, af = qt.unstable_NormalPriority, ip = qt.unstable_LowPriority, uy = qt.unstable_IdlePriority, cp = qt.log, op = qt.unstable_setDisableYieldValue, nf = null, Vl = null, J = null, Jl = !1, kl = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Gl = Math.clz32 ? Math.clz32 : tl, fp = Math.log, uf = Math.LN2, ji = 128, Ns = 4194304, Ma = 2, _a = 8, vn = 32, Zc = 268435456, Ku = Math.random().toString(36).slice(2), Al = "__reactFiber$" + Ku, ca = "__reactProps$" + Ku, Vi = "__reactContainer$" + Ku, _c = "__reactEvents$" + Ku, sp = "__reactListeners$" + Ku, rp = "__reactHandles$" + Ku, W0 = "__reactResources$" + Ku, Gi = "__reactMarker$" + Ku, js = /* @__PURE__ */ new Set(), Ju = {}, iy = {}, oa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, F0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), cy = {}, oy = {}, I0 = /[\n"\\]/g, wd = !1, fy = !1, Vs = !1, P0 = !1, ev = !1, Qd = !1, Ld = ["value", "defaultValue"], Gs = !1, Zd = /["'&<>\n\t]|^\s|\s$/, tv = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), _d = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Xi = _d.concat(["button"]), wi = "dd dt li option optgroup p rp rt".split(" "), ku = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null
    }, Qi = {}, Li = "http://www.w3.org/1998/Math/MathML", Ua = "http://www.w3.org/2000/svg", sy = {
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
    }, ry = /([A-Z])/g, cf = /^ms-/, hp = /^(?:webkit|moz|o)[A-Z]/, lv = /^-ms-/, Kd = /-(.)/g, dy = /;\s*$/, of = {}, ff = {}, Xs = !1, hy = !1, sf = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), my = /* @__PURE__ */ new Map([
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
    ]), Kc = {
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
    }, yy = {
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
    }, rf = {}, Jd = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), l = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), n = !1, u = {}, c = /^on./, s = /^on[^A-Z]/, r = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), m = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, g = null, R = null, N = null, w = !1, U = !1;
    if (oa)
      try {
        var q = {};
        Object.defineProperty(q, "passive", {
          get: function() {
            U = !0;
          }
        }), window.addEventListener("test", q, q), window.removeEventListener("test", q, q);
      } catch {
        U = !1;
      }
    var $ = null, de = null, rt = null, z = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, A = Hl(z), D = ve({}, z, { view: 0, detail: 0 }), G = Hl(D), W, ge, te, ce = ve({}, D, {
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
      getModifierState: Sr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== te && (te && e.type === "mousemove" ? (W = e.screenX - te.screenX, ge = e.screenY - te.screenY) : ge = W = 0, te = e), W);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ge;
      }
    }), $t = Hl(ce), Qe = ve({}, ce, { dataTransfer: 0 }), Zi = Hl(Qe), mp = ve({}, D, { relatedTarget: 0 }), yp = Hl(mp), bb = ve({}, z, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sb = Hl(bb), Tb = ve({}, z, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Eb = Hl(Tb), Ab = ve({}, z, { data: 0 }), hg = Hl(
      Ab
    ), Rb = hg, zb = {
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
    }, Db = {
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
    }, Ob = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Mb = ve({}, D, {
      key: function(e) {
        if (e.key) {
          var t = zb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Db[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sr,
      charCode: function(e) {
        return e.type === "keypress" ? ho(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ub = Hl(Mb), Hb = ve({}, ce, {
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
    }), mg = Hl(Hb), Cb = ve({}, D, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sr
    }), xb = Hl(Cb), Bb = ve({}, z, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qb = Hl(Bb), Yb = ve({}, ce, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Nb = Hl(Yb), jb = ve({}, z, {
      newState: 0,
      oldState: 0
    }), Vb = Hl(jb), Gb = [9, 13, 27, 32], yg = 229, vp = oa && "CompositionEvent" in window, vy = null;
    oa && "documentMode" in document && (vy = document.documentMode);
    var Xb = oa && "TextEvent" in window && !vy, vg = oa && (!vp || vy && 8 < vy && 11 >= vy), pg = 32, gg = String.fromCharCode(pg), bg = !1, kd = !1, wb = {
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
    }, py = null, gy = null, Sg = !1;
    oa && (Sg = Tr("input") && (!document.documentMode || 9 < document.documentMode));
    var Ha = typeof Object.is == "function" ? Object.is : Yh, Qb = oa && "documentMode" in document && 11 >= document.documentMode, $d = null, pp = null, by = null, gp = !1, Wd = {
      animationend: nc("Animation", "AnimationEnd"),
      animationiteration: nc("Animation", "AnimationIteration"),
      animationstart: nc("Animation", "AnimationStart"),
      transitionrun: nc("Transition", "TransitionRun"),
      transitionstart: nc("Transition", "TransitionStart"),
      transitioncancel: nc("Transition", "TransitionCancel"),
      transitionend: nc("Transition", "TransitionEnd")
    }, bp = {}, Tg = {};
    oa && (Tg = document.createElement("div").style, "AnimationEvent" in window || (delete Wd.animationend.animation, delete Wd.animationiteration.animation, delete Wd.animationstart.animation), "TransitionEvent" in window || delete Wd.transitionend.transition);
    var Eg = uc("animationend"), Ag = uc("animationiteration"), Rg = uc("animationstart"), Lb = uc("transitionrun"), Zb = uc("transitionstart"), _b = uc("transitioncancel"), zg = uc("transitionend"), Dg = /* @__PURE__ */ new Map(), Og = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    ), av = 1, Sy = 2, ws = 4, eu = [], Fd = 0, Sp = 0, df = {};
    Object.freeze(df);
    var tu = null, Id = null, bt = 0, Kb = 1, $l = 2, fa = 8, $u = 16, Mg = 64, Pd = qt.unstable_now, Tp = -0, nv = -0, Ka = -1.1, Qs = -0, uv = !1, iv = !1, Wu = {
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
    }, Ty = [], Ey = [], Ay = [], Ry = [], zy = [], Dy = [], Ls = /* @__PURE__ */ new Set();
    Wu.recordUnsafeLifecycleWarnings = function(e, t) {
      Ls.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Ty.push(e), e.mode & fa && typeof t.UNSAFE_componentWillMount == "function" && Ey.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ay.push(e), e.mode & fa && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ry.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zy.push(e), e.mode & fa && typeof t.UNSAFE_componentWillUpdate == "function" && Dy.push(e));
    }, Wu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Ty.length && (Ty.forEach(function(h) {
        e.add(
          le(h) || "Component"
        ), Ls.add(h.type);
      }), Ty = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ey.length && (Ey.forEach(function(h) {
        t.add(
          le(h) || "Component"
        ), Ls.add(h.type);
      }), Ey = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ay.length && (Ay.forEach(function(h) {
        a.add(
          le(h) || "Component"
        ), Ls.add(h.type);
      }), Ay = []);
      var i = /* @__PURE__ */ new Set();
      0 < Ry.length && (Ry.forEach(
        function(h) {
          i.add(
            le(h) || "Component"
          ), Ls.add(h.type);
        }
      ), Ry = []);
      var o = /* @__PURE__ */ new Set();
      0 < zy.length && (zy.forEach(function(h) {
        o.add(
          le(h) || "Component"
        ), Ls.add(h.type);
      }), zy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Dy.length && (Dy.forEach(function(h) {
        f.add(
          le(h) || "Component"
        ), Ls.add(h.type);
      }), Dy = []), 0 < t.size) {
        var d = Xe(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Xe(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Xe(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Xe(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Xe(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Xe(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cv = /* @__PURE__ */ new Map(), Ug = /* @__PURE__ */ new Set();
    Wu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & fa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Ug.has(e.type) && (i = cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(a, i)), i.push(e));
    }, Wu.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(le(o) || "Component"), Ug.add(o.type);
          });
          var i = Xe(a);
          k(t, function() {
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
    }, Wu.discardPendingWarnings = function() {
      Ty = [], Ey = [], Ay = [], Ry = [], zy = [], Dy = [], cv = /* @__PURE__ */ new Map();
    };
    var Ep = /* @__PURE__ */ new WeakMap(), eh = [], th = 0, ov = null, fv = 0, lu = [], au = 0, Zs = null, Jc = 1, kc = "", Ca = null, Wl = null, Ve = !1, $c = !1, nu = null, Fu = null, _i = !1, Ap = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), sv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
    ), Hg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Rp = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Oy = null, rv = !1, Cg = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Oa;
        Oa = !0;
        try {
          return e(t, a);
        } finally {
          Oa = i;
        }
      }
    }, zp = Cg["react-stack-bottom-frame"].bind(Cg), xg = {
      "react-stack-bottom-frame": function(e) {
        var t = Oa;
        Oa = !0;
        try {
          return e.render();
        } finally {
          Oa = t;
        }
      }
    }, Bg = xg["react-stack-bottom-frame"].bind(xg), qg = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          _e(e, e.return, a);
        }
      }
    }, Dp = qg["react-stack-bottom-frame"].bind(qg), Yg = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          _e(e, e.return, f);
        }
      }
    }, Ng = Yg["react-stack-bottom-frame"].bind(Yg), jg = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, Jb = jg["react-stack-bottom-frame"].bind(jg), Vg = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          _e(e, t, i);
        }
      }
    }, Gg = Vg["react-stack-bottom-frame"].bind(Vg), Xg = {
      "react-stack-bottom-frame": function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, kb = Xg["react-stack-bottom-frame"].bind(Xg), wg = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          _e(e, t, i);
        }
      }
    }, $b = wg["react-stack-bottom-frame"].bind(wg), Qg = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, hf = Qg["react-stack-bottom-frame"].bind(Qg), lh = null, My = 0, Te = null, Op, Lg = Op = !1, Zg = {}, _g = {}, Kg = {};
    Dt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = le(e), o = i || "null";
        if (!Zg[o]) {
          Zg[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = le(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = le(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), k(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var _s = _h(!0), Jg = _h(!1), ah = ie(null), dv = ie(0), uu = ie(null), Ki = null, nh = 1, Uy = 2, Rl = ie(0), iu = 0, cu = 1, xa = 2, Fl = 4, zl = 8, Wb = typeof AbortController < "u" ? AbortController : function() {
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
    }, Fb = qt.unstable_scheduleCallback, Ib = qt.unstable_NormalPriority, Dl = {
      $$typeof: Da,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Hy = null, Mp = 0, Ks = 0, uh = null, kg = C.S;
    C.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && b0(e, t), kg !== null && kg(e, t);
    };
    var Js = ie(null), ih, $g = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Up = /* @__PURE__ */ new Set(), Fg = /* @__PURE__ */ new Set(), mf = 0, he = null, ut = null, sl = null, hv = !1, ch = !1, ks = !1, mv = 0, Cy = 0, Wc = null, Pb = 0, eS = 25, B = null, ou = null, Fc = -1, xy = !1, Hp = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }, Ji = {
      readContext: ft,
      use: Tu,
      useCallback: Mt,
      useContext: Mt,
      useEffect: Mt,
      useImperativeHandle: Mt,
      useLayoutEffect: Mt,
      useInsertionEffect: Mt,
      useMemo: Mt,
      useReducer: Mt,
      useRef: Mt,
      useState: Mt,
      useDebugValue: Mt,
      useDeferredValue: Mt,
      useTransition: Mt,
      useSyncExternalStore: Mt,
      useId: Mt
    };
    Ji.useCacheRefresh = Mt, Ji.useMemoCache = Mt, Ji.useHostTransitionStatus = Mt, Ji.useFormState = Mt, Ji.useActionState = Mt, Ji.useOptimistic = Mt;
    var yf = null, $s = null, vf = null, Ws = null, Ja = null, Ba = null, pf = null;
    yf = {
      readContext: function(e) {
        return ft(e);
      },
      use: Tu,
      useCallback: function(e, t) {
        return B = "useCallback", Re(), dc(t), Nr(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Re(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", Re(), dc(t), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Re(), dc(a), zo(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", Re(), dc(t), mi(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Re(), dc(t), Ao(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Re(), dc(t);
        var a = C.H;
        C.H = Ja;
        try {
          return jr(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Re();
        var i = C.H;
        C.H = Ja;
        try {
          return ri(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", Re(), pc(e);
      },
      useState: function(e) {
        B = "useState", Re();
        var t = C.H;
        C.H = Ja;
        try {
          return Sl(e);
        } finally {
          C.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Re();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Re(), Do(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Re(), cn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Re(), aa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Re(), em();
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Re(), tm();
      }
    }, yf.useMemoCache = al, yf.useHostTransitionStatus = gc, yf.useFormState = function(e, t) {
      return B = "useFormState", Re(), Zf(), Bn(e, t);
    }, yf.useActionState = function(e, t) {
      return B = "useActionState", Re(), Bn(e, t);
    }, yf.useOptimistic = function(e) {
      return B = "useOptimistic", Re(), Lt(e);
    }, $s = {
      readContext: function(e) {
        return ft(e);
      },
      use: Tu,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), Nr(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", Q(), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), zo(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", Q(), mi(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), Ao(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = C.H;
        C.H = Ja;
        try {
          return jr(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = C.H;
        C.H = Ja;
        try {
          return ri(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", Q(), pc(e);
      },
      useState: function(e) {
        B = "useState", Q();
        var t = C.H;
        C.H = Ja;
        try {
          return Sl(e);
        } finally {
          C.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), Do(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), cn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), aa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), em();
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), tm();
      }
    }, $s.useMemoCache = al, $s.useHostTransitionStatus = gc, $s.useFormState = function(e, t) {
      return B = "useFormState", Q(), Zf(), Bn(e, t);
    }, $s.useActionState = function(e, t) {
      return B = "useActionState", Q(), Bn(e, t);
    }, $s.useOptimistic = function(e) {
      return B = "useOptimistic", Q(), Lt(e);
    }, vf = {
      readContext: function(e) {
        return ft(e);
      },
      use: Tu,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), qn(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", Q(), Zt(2048, zl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), $f(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", Q(), Zt(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), Zt(4, Fl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = C.H;
        C.H = Ba;
        try {
          return Au(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = C.H;
        C.H = Ba;
        try {
          return Eu(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", Q(), we().memoizedState;
      },
      useState: function() {
        B = "useState", Q();
        var e = C.H;
        C.H = Ba;
        try {
          return Eu(xl);
        } finally {
          C.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), Ih(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), Nt();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), Hn(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), we().memoizedState;
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), we().memoizedState;
      }
    }, vf.useMemoCache = al, vf.useHostTransitionStatus = gc, vf.useFormState = function(e) {
      return B = "useFormState", Q(), Zf(), kf(e);
    }, vf.useActionState = function(e) {
      return B = "useActionState", Q(), kf(e);
    }, vf.useOptimistic = function(e, t) {
      return B = "useOptimistic", Q(), je(e, t);
    }, Ws = {
      readContext: function(e) {
        return ft(e);
      },
      use: Tu,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), qn(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", Q(), Zt(2048, zl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), $f(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", Q(), Zt(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), Zt(4, Fl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = C.H;
        C.H = pf;
        try {
          return Au(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = C.H;
        C.H = pf;
        try {
          return Bl(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", Q(), we().memoizedState;
      },
      useState: function() {
        B = "useState", Q();
        var e = C.H;
        C.H = pf;
        try {
          return Bl(xl);
        } finally {
          C.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), Vr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), Ff();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), Hn(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), we().memoizedState;
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), we().memoizedState;
      }
    }, Ws.useMemoCache = al, Ws.useHostTransitionStatus = gc, Ws.useFormState = function(e) {
      return B = "useFormState", Q(), Zf(), yc(e);
    }, Ws.useActionState = function(e) {
      return B = "useActionState", Q(), yc(e);
    }, Ws.useOptimistic = function(e, t) {
      return B = "useOptimistic", Q(), nn(e, t);
    }, Ja = {
      readContext: function(e) {
        return St(), ft(e);
      },
      use: function(e) {
        return L(), Tu(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", L(), Re(), Nr(e, t);
      },
      useContext: function(e) {
        return B = "useContext", L(), Re(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", L(), Re(), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", L(), Re(), zo(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", L(), Re(), mi(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", L(), Re(), Ao(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", L(), Re();
        var a = C.H;
        C.H = Ja;
        try {
          return jr(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", L(), Re();
        var i = C.H;
        C.H = Ja;
        try {
          return ri(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", L(), Re(), pc(e);
      },
      useState: function(e) {
        B = "useState", L(), Re();
        var t = C.H;
        C.H = Ja;
        try {
          return Sl(e);
        } finally {
          C.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), Re();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", L(), Re(), Do(e, t);
      },
      useTransition: function() {
        return B = "useTransition", L(), Re(), cn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", L(), Re(), aa(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), Re(), em();
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Re(), tm();
      },
      useMemoCache: function(e) {
        return L(), al(e);
      }
    }, Ja.useHostTransitionStatus = gc, Ja.useFormState = function(e, t) {
      return B = "useFormState", L(), Re(), Bn(e, t);
    }, Ja.useActionState = function(e, t) {
      return B = "useActionState", L(), Re(), Bn(e, t);
    }, Ja.useOptimistic = function(e) {
      return B = "useOptimistic", L(), Re(), Lt(e);
    }, Ba = {
      readContext: function(e) {
        return St(), ft(e);
      },
      use: function(e) {
        return L(), Tu(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", L(), Q(), qn(e, t);
      },
      useContext: function(e) {
        return B = "useContext", L(), Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", L(), Q(), Zt(2048, zl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", L(), Q(), $f(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", L(), Q(), Zt(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", L(), Q(), Zt(4, Fl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", L(), Q();
        var a = C.H;
        C.H = Ba;
        try {
          return Au(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", L(), Q();
        var i = C.H;
        C.H = Ba;
        try {
          return Eu(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", L(), Q(), we().memoizedState;
      },
      useState: function() {
        B = "useState", L(), Q();
        var e = C.H;
        C.H = Ba;
        try {
          return Eu(xl);
        } finally {
          C.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", L(), Q(), Ih(e, t);
      },
      useTransition: function() {
        return B = "useTransition", L(), Q(), Nt();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", L(), Q(), Hn(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), Q(), we().memoizedState;
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), we().memoizedState;
      },
      useMemoCache: function(e) {
        return L(), al(e);
      }
    }, Ba.useHostTransitionStatus = gc, Ba.useFormState = function(e) {
      return B = "useFormState", L(), Q(), kf(e);
    }, Ba.useActionState = function(e) {
      return B = "useActionState", L(), Q(), kf(e);
    }, Ba.useOptimistic = function(e, t) {
      return B = "useOptimistic", L(), Q(), je(e, t);
    }, pf = {
      readContext: function(e) {
        return St(), ft(e);
      },
      use: function(e) {
        return L(), Tu(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", L(), Q(), qn(e, t);
      },
      useContext: function(e) {
        return B = "useContext", L(), Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", L(), Q(), Zt(2048, zl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", L(), Q(), $f(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", L(), Q(), Zt(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", L(), Q(), Zt(4, Fl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", L(), Q();
        var a = C.H;
        C.H = Ba;
        try {
          return Au(e, t);
        } finally {
          C.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", L(), Q();
        var i = C.H;
        C.H = Ba;
        try {
          return Bl(e, t, a);
        } finally {
          C.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", L(), Q(), we().memoizedState;
      },
      useState: function() {
        B = "useState", L(), Q();
        var e = C.H;
        C.H = Ba;
        try {
          return Bl(xl);
        } finally {
          C.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", L(), Q(), Vr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", L(), Q(), Ff();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", L(), Q(), Hn(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), Q(), we().memoizedState;
      },
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), we().memoizedState;
      },
      useMemoCache: function(e) {
        return L(), al(e);
      }
    }, pf.useHostTransitionStatus = gc, pf.useFormState = function(e) {
      return B = "useFormState", L(), Q(), yc(e);
    }, pf.useActionState = function(e) {
      return B = "useActionState", L(), Q(), yc(e);
    }, pf.useOptimistic = function(e, t) {
      return B = "useOptimistic", L(), Q(), nn(e, t);
    };
    var Ig = {}, Pg = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set(), i1 = /* @__PURE__ */ new Set(), c1 = /* @__PURE__ */ new Set(), o1 = /* @__PURE__ */ new Set();
    Object.freeze(Ig);
    var Cp = {
      isMounted: function(e) {
        var t = jl;
        if (t !== null && Oa && t.tag === 1) {
          var a = t.stateNode;
          a._warnedAboutRefsInRender || console.error(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            le(t) || "A component"
          ), a._warnedAboutRefsInRender = !0;
        }
        return (e = e._reactInternals) ? el(e) === e : !1;
      },
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = _l(e), o = Hu(i);
        o.payload = t, a != null && (Gr(a), o.callback = a), t = Cu(e, o, i), t !== null && (et(t, e, i), is(t, e, i)), re(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = _l(e), o = Hu(i);
        o.tag = g1, o.payload = t, a != null && (Gr(a), o.callback = a), t = Cu(e, o, i), t !== null && (et(t, e, i), is(t, e, i)), re(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = _l(e), i = Hu(a);
        i.tag = b1, t != null && (Gr(t), i.callback = t), t = Cu(e, i, a), t !== null && (et(t, e, a), is(t, e, a)), J !== null && typeof J.markForceUpdateScheduled == "function" && J.markForceUpdateScheduled(e, a);
      }
    }, yv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, oh = null, xp = null, f1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, s1 = {}, r1 = {}, d1 = {}, h1 = {}, fh = !1, m1 = {}, Bp = {}, qp = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    }, y1 = !1, Yp = ie(null), Np = ie(null), v1 = {}, vv = null, sh = null, rh = !1, p1 = 0, g1 = 1, b1 = 2, jp = 3, gf = !1, S1 = !1, Vp = null, Gp = !1, T1 = null;
    T1 = /* @__PURE__ */ new Set();
    var Ic = !1, Vt = !1, Xp = !1, E1 = typeof WeakSet == "function" ? WeakSet : Set, wl = null, dh = null, hh = null, A1 = !1, rl = null, pn = !1, Iu = null, By = 8192, R1 = !1;
    try {
      var z1 = Object.preventExtensions({});
    } catch {
      R1 = !0;
    }
    var tS = {
      getCacheForType: function(e) {
        var t = ft(Dl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return jl;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var qy = Symbol.for;
      qy("selector.component"), qy("selector.has_pseudo_class"), qy("selector.role"), qy("selector.test_id"), qy("selector.text");
    }
    var lS = [], aS = typeof WeakMap == "function" ? WeakMap : Map, gn = 0, qa = 2, Pc = 4, eo = 0, Yy = 1, mh = 2, wp = 3, Fs = 4, D1 = 5, pv = 6, Rt = gn, dt = null, Me = null, He = 0, ka = 0, Ny = 1, Is = 2, jy = 3, O1 = 4, Qp = 5, yh = 6, Vy = 7, Lp = 8, ht = ka, bn = null, to = !1, vh = !1, Zp = !1, ki = 0, Gt = eo, bf = 0, Sf = 0, _p = 0, Sn = 0, Ps = 0, Gy = null, Pu = null, gv = !1, Kp = 0, M1 = 300, bv = 1 / 0, U1 = 500, Xy = null, Tf = null, Sv = !1, er = null, wy = 0, Jp = 0, kp = null, nS = 50, Qy = 0, $p = null, Wp = !1, Tv = !1, uS = 50, tr = 0, Ly = null, ph = !1, H1 = 0, iS = 1, cS = 2, Ev = null, C1 = !1, x1 = /* @__PURE__ */ new Set(), oS = {}, Av = null, gh = null, Fp = !1, Ip = !1, Rv = !1, Pp = !1, lr = 0, eg = {};
    (function() {
      for (var e = 0; e < Og.length; e++) {
        var t = Og[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), ma(a, "on" + t);
      }
      ma(Eg, "onAnimationEnd"), ma(Ag, "onAnimationIteration"), ma(Rg, "onAnimationStart"), ma("dblclick", "onDoubleClick"), ma("focusin", "onFocus"), ma("focusout", "onBlur"), ma(Lb, "onTransitionRun"), ma(Zb, "onTransitionStart"), ma(_b, "onTransitionCancel"), ma(zg, "onTransitionEnd");
    })(), zn("onMouseEnter", ["mouseout", "mouseover"]), zn("onMouseLeave", ["mouseout", "mouseover"]), zn("onPointerEnter", ["pointerout", "pointerover"]), zn("onPointerLeave", ["pointerout", "pointerover"]), hu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), hu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), hu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), hu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), hu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), hu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Zy = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), tg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zy)
    ), zv = "_reactListening" + Math.random().toString(36).slice(2), B1 = !1, q1 = !1, Dv = !1, Y1 = !1, Ov = !1, Mv = !1, N1 = !1, Uv = {}, fS = /\r\n?/g, sS = /\u0000|\uFFFD/g, ar = "http://www.w3.org/1999/xlink", lg = "http://www.w3.org/XML/1998/namespace", rS = "javascript:throw new Error('React form unexpectedly submitted.')", dS = "suppressHydrationWarning", Hv = "$", Cv = "/$", nr = "$?", ur = "$!", ag = "F!", j1 = "F", hS = "style", lo = 0, bh = 1, xv = 2, ng = null, ug = null, V1 = { dialog: !0, webview: !0 }, ig = null, G1 = typeof setTimeout == "function" ? setTimeout : void 0, mS = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = -1, X1 = typeof Promise == "function" ? Promise : void 0, yS = typeof queueMicrotask == "function" ? queueMicrotask : typeof X1 < "u" ? function(e) {
      return X1.resolve(null).then(e).catch(Ye);
    } : G1, ir = 0, _y = 1, w1 = 2, Q1 = 3, fu = 4, su = /* @__PURE__ */ new Map(), L1 = /* @__PURE__ */ new Set(), ao = nt.d;
    nt.d = {
      f: function() {
        var e = ao.f(), t = ba();
        return e || t;
      },
      r: function(e) {
        var t = Ia(e);
        t !== null && t.tag === 5 && t.type === "form" ? Ru(t) : ao.r(e);
      },
      D: function(e) {
        ao.D(e), Wo("dns-prefetch", e, null);
      },
      C: function(e, t) {
        ao.C(e, t), Wo("preconnect", e, t);
      },
      L: function(e, t, a) {
        ao.L(e, t, a);
        var i = Sh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + ja(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ja(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ja(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ja(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = jc(e);
              break;
            case "script":
              f = Vc(e);
          }
          su.has(f) || (e = ve(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), su.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            kt(f)
          ) || t === "script" && i.querySelector(zs(f)) || (t = i.createElement("link"), At(t, "link", e), Xt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        ao.m(e, t);
        var a = Sh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + ja(i) + '"][href="' + ja(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Vc(e);
          }
          if (!su.has(f) && (e = ve({ rel: "modulepreload", href: e }, t), su.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(zs(f)))
                  return;
            }
            i = a.createElement("link"), At(i, "link", e), Xt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        ao.X(e, t);
        var a = Sh;
        if (a && e) {
          var i = Fi(a).hoistableScripts, o = Vc(e), f = i.get(o);
          f || (f = a.querySelector(
            zs(o)
          ), f || (e = ve({ src: e, async: !0 }, t), (t = su.get(o)) && Ui(e, t), f = a.createElement("script"), Xt(f), At(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        ao.S(e, t, a);
        var i = Sh;
        if (i && e) {
          var o = Fi(i).hoistableStyles, f = jc(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: ir, preload: null };
            if (d = i.querySelector(
              kt(f)
            ))
              h.loading = _y | fu;
            else {
              e = ve(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = su.get(f)) && Ds(e, a);
              var y = d = i.createElement("link");
              Xt(y), At(y, "link", e), y._p = new Promise(function(p, O) {
                y.onload = p, y.onerror = O;
              }), y.addEventListener("load", function() {
                h.loading |= _y;
              }), y.addEventListener("error", function() {
                h.loading |= w1;
              }), h.loading |= fu, Gc(d, t, i);
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
        ao.M(e, t);
        var a = Sh;
        if (a && e) {
          var i = Fi(a).hoistableScripts, o = Vc(e), f = i.get(o);
          f || (f = a.querySelector(
            zs(o)
          ), f || (e = ve({ src: e, async: !0, type: "module" }, t), (t = su.get(o)) && Ui(e, t), f = a.createElement("script"), Xt(f), At(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sh = typeof document > "u" ? null : document, Bv = null, Ky = null, og = null, qv = null, cr = np, Jy = {
      $$typeof: Da,
      Provider: null,
      Consumer: null,
      _currentValue: cr,
      _currentValue2: cr,
      _threadCount: 0
    }, Z1 = "%c%s%c ", _1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", K1 = "", Yv = " ", J1 = Function.prototype.bind, k1 = !1, $1 = null, W1 = null, F1 = null, I1 = null, P1 = null, eb = null, tb = null, lb = null, ab = null;
    $1 = function(e, t, a, i) {
      t = X(e, t), t !== null && (a = Le(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ve({}, e.memoizedProps), a = gl(e, 2), a !== null && et(a, e, 2));
    }, W1 = function(e, t, a) {
      t = X(e, t), t !== null && (a = xe(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ve({}, e.memoizedProps), a = gl(e, 2), a !== null && et(a, e, 2));
    }, F1 = function(e, t, a, i) {
      t = X(e, t), t !== null && (a = Ue(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ve({}, e.memoizedProps), a = gl(e, 2), a !== null && et(a, e, 2));
    }, I1 = function(e, t, a) {
      e.pendingProps = Le(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = gl(e, 2), t !== null && et(t, e, 2);
    }, P1 = function(e, t) {
      e.pendingProps = xe(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = gl(e, 2), t !== null && et(t, e, 2);
    }, eb = function(e, t, a) {
      e.pendingProps = Ue(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = gl(e, 2), t !== null && et(t, e, 2);
    }, tb = function(e) {
      var t = gl(e, 2);
      t !== null && et(t, e, 2);
    }, lb = function(e) {
      Ge = e;
    }, ab = function(e) {
      it = e;
    };
    var Nv = !0, jv = null, fg = !1, Ef = null, Af = null, Rf = null, ky = /* @__PURE__ */ new Map(), $y = /* @__PURE__ */ new Map(), zf = [], vS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Vv = null;
    if (tf.prototype.render = Im.prototype.render = function(e, t) {
      var a = this._internalRoot;
      if (a === null) throw Error("Cannot update an unmounted root.");
      typeof t == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ct(t) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof t < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), t = a.current;
      var i = _l(t);
      Km(
        t,
        i,
        e,
        a,
        null,
        null
      );
    }, tf.prototype.unmount = Im.prototype.unmount = function(e) {
      if (typeof e == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Rt & (qa | Pc)) !== gn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Z0(
          null,
          e,
          null,
          null
        ), ba(), t[Vi] = null;
      }
    }, tf.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Df();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < zf.length && t !== 0 && t < zf[a].priority; a++) ;
        zf.splice(a, 0, e), a === 0 && Ci(e);
      }
    }, function() {
      var e = ey.version;
      if (e !== "19.0.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), nt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Z(t), e = e !== null ? ue(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: C,
        findFiberByHostInstance: Rn,
        reconcilerVersion: "19.0.0"
      };
      return e.overrideHookState = $1, e.overrideHookStateDeletePath = W1, e.overrideHookStateRenamePath = F1, e.overrideProps = I1, e.overridePropsDeletePath = P1, e.overridePropsRenamePath = eb, e.scheduleUpdate = tb, e.setErrorHandler = lb, e.setSuspenseHandler = ab, e.scheduleRefresh = se, e.scheduleRoot = Yt, e.setRefreshHandler = tt, e.getCurrentFiber = Jm, e.getLaneLabelMap = ep, e.injectProfilingHooks = $i, ei(e);
    }() && oa && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var nb = window.location.protocol;
      /^(https?|file):$/.test(nb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (nb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Py.createRoot = function(e, t) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      Pm(e);
      var a = !1, i = "", o = Pf, f = um, d = Mu, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === xi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = Zm(
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
      ), e[Vi] = t.current, pd(
        e.nodeType === 8 ? e.parentNode : e
      ), new Im(t);
    }, Py.hydrateRoot = function(e, t, a) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      Pm(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Pf, d = um, h = Mu, y = null, p = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (y = a.unstable_transitionCallbacks), a.formState !== void 0 && (p = a.formState)), t = Zm(
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
      ), t.context = _m(null), a = t.current, i = _l(a), o = Hu(i), o.callback = null, Cu(a, o, i), t.current.lanes = i, Ot(t, i), dn(t), e[Vi] = t.current, pd(e), new tf(t);
    }, Py.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Py;
}
var mb;
function OS() {
  if (mb) return wv.exports;
  mb = 1;
  function X() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X);
      } catch (Le) {
        console.error(Le);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (X(), wv.exports = zS()) : wv.exports = DS(), wv.exports;
}
var MS = OS();
const US = /* @__PURE__ */ bS(MS), HS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", CS = ({ onQuestionClick: X }) => {
  const Le = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ Ne.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ Ne.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ Ne.jsx("ul", { children: Le.map((Ue, H) => /* @__PURE__ */ Ne.jsx("li", { onClick: () => X(Ue), children: Ue }, H)) })
  ] });
}, xS = ({ message: X }) => /* @__PURE__ */ Ne.jsx("div", { className: `message ${X.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ Ne.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ Ne.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: X.text } }) }) }), BS = "http://localhost:3030/api";
async function pb(X, Le, Ue = {}, H = !1) {
  var it;
  const xe = {
    "Content-Type": "application/json"
    // Tipo de contenido JSON
  };
  if (H) {
    const Ge = localStorage.getItem("token");
    Ge && (xe.Authorization = `Bearer ${Ge}`);
  }
  try {
    return (await axios({
      method: Le,
      url: `${BS}${X}`,
      headers: xe,
      data: Ue
    })).data;
  } catch (Ge) {
    return ((it = Ge.response) == null ? void 0 : it.status) === 401 ? { error: !0, message: "No autorizado" } : { error: !0, message: "Error inesperado" };
  }
}
const qS = async (X) => pb("v1/chatboot/sendmesaje", "POST", !1), YS = async () => pb("v1/chatboot/history", "POST", !1), gb = () => {
  const [X, Le] = Gv([]), [Ue, H] = Gv(""), [xe, it] = Gv(!1), [Ge, Ze] = Gv(!0), L = gS(null);
  ub(() => {
    St();
  }, []);
  const St = async () => {
    try {
      const se = await YS();
      if (se.STATUS) {
        const tt = se.RSP.map((ct) => ({
          id: ct.id,
          text: ct.message,
          isUser: ct.role === "user",
          status: "sent",
          timestamp: new Date(ct.created_at)
        }));
        Le(tt);
      }
    } catch (se) {
      console.error("Error cargando historial:", se);
    } finally {
      Ze(!1);
    }
  }, sa = () => {
    if (L.current) {
      const { scrollHeight: se } = L.current;
      L.current.scrollTo({
        top: se,
        behavior: "smooth"
      });
    }
  };
  ub(() => {
    sa();
  }, [X, xe]);
  const Dt = async (se = Ue) => {
    if (se.trim() === "") return;
    const tt = {
      id: Date.now().toString(),
      text: se,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    Le((ct) => [...ct, tt]), H(""), it(!0);
    try {
      const ct = await qS({ message: se });
      if (ct.STATUS) {
        const Be = {
          id: (Date.now() + 1).toString(),
          text: ct.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        Le((ae) => [...ae, Be]);
      } else {
        H(se);
        const Be = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        Le((ae) => [...ae, Be]);
      }
    } catch {
      Le(
        (Be) => Be.map(
          (ae) => ae.id === tt.id ? { ...ae, status: "error" } : ae
        )
      );
    } finally {
      it(!1);
    }
  }, Xe = (se) => {
    se.preventDefault(), Dt();
  }, Yt = (se) => {
    Dt(se);
  };
  return /* @__PURE__ */ Ne.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ Ne.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ Ne.jsx("div", { children: /* @__PURE__ */ Ne.jsx("img", { src: HS, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ Ne.jsx("div", { children: /* @__PURE__ */ Ne.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ Ne.jsx("div", { ref: L, className: "messages-container", children: Ge ? /* @__PURE__ */ Ne.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ Ne.jsxs("div", { className: "loading-dots", children: [
        /* @__PURE__ */ Ne.jsx("div", { className: "dot" }),
        /* @__PURE__ */ Ne.jsx("div", { className: "dot" }),
        /* @__PURE__ */ Ne.jsx("div", { className: "dot" })
      ] }),
      /* @__PURE__ */ Ne.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
    ] }) : /* @__PURE__ */ Ne.jsxs(Ne.Fragment, { children: [
      X.length === 0 && /* @__PURE__ */ Ne.jsx(CS, { onQuestionClick: Yt }),
      X.map((se) => /* @__PURE__ */ Ne.jsx(xS, { message: se }, se.id)),
      xe && /* @__PURE__ */ Ne.jsxs("div", { className: "typing-indicator", children: [
        /* @__PURE__ */ Ne.jsx("span", {}),
        /* @__PURE__ */ Ne.jsx("span", {}),
        /* @__PURE__ */ Ne.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ Ne.jsxs("form", { onSubmit: Xe, className: "message-input", children: [
      /* @__PURE__ */ Ne.jsx(
        "input",
        {
          type: "text",
          value: Ue,
          onChange: (se) => H(se.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: xe || Ge,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ Ne.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: xe || Ge || Ue.trim() === "",
          children: /* @__PURE__ */ Ne.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
}, NS = (X, Le = {}) => {
  if (typeof window > "u") return;
  const Ue = document.getElementById(X);
  if (!Ue) {
    console.error(`Container with id "${X}" not found`);
    return;
  }
  try {
    const H = US.createRoot(Ue);
    return H.render(
      /* @__PURE__ */ Ne.jsx(gb, { ...Le })
    ), H;
  } catch (H) {
    console.error("Error initializing ChatBot:", H);
  }
};
window.initChatBot = NS;
function GS() {
  return /* @__PURE__ */ Ne.jsx("div", { children: /* @__PURE__ */ Ne.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ Ne.jsx(gb, {}) }) });
}
export {
  GS as default
};
