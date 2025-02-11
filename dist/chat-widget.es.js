import Re, { useState as J, useRef as ye, useEffect as be } from "react";
var M = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Te() {
  if (Ae) return U;
  Ae = 1;
  var l = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function m(b, c, E) {
    var g = null;
    if (E !== void 0 && (g = "" + E), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      E = {};
      for (var h in c)
        h !== "key" && (E[h] = c[h]);
    } else E = c;
    return c = E.ref, {
      $$typeof: l,
      type: b,
      key: g,
      ref: c !== void 0 ? c : null,
      props: E
    };
  }
  return U.Fragment = v, U.jsx = m, U.jsxs = m, U;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Oe() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case B:
          return "Fragment";
        case pe:
          return "Portal";
        case ee:
          return "Profiler";
        case $:
          return "StrictMode";
        case V:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case te:
            return (e.displayName || "Context") + ".Provider";
          case re:
            return (e._context.displayName || "Context") + ".Consumer";
          case L:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case X:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function m(e) {
      try {
        v(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), v(e);
      }
    }
    function b() {
    }
    function c() {
      if (P === 0) {
        se = console.log, ae = console.info, ie = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: b,
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
      P++;
    }
    function E() {
      if (P--, P === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: R({}, e, { value: se }),
          info: R({}, e, { value: ae }),
          warn: R({}, e, { value: ie }),
          error: R({}, e, { value: le }),
          group: R({}, e, { value: ce }),
          groupCollapsed: R({}, e, { value: ue }),
          groupEnd: R({}, e, { value: fe })
        });
      }
      0 > P && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function g(e) {
      if (H === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          H = r && r[1] || "", de = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + H + e + de;
    }
    function h(e, r) {
      if (!e || D) return "";
      var t = _.get(e);
      if (t !== void 0) return t;
      D = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var s = null;
      s = N.H, N.H = null, c();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var C = function() {
                  throw Error();
                };
                if (Object.defineProperty(C.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(C, []);
                  } catch (x) {
                    var Y = x;
                  }
                  Reflect.construct(e, [], C);
                } else {
                  try {
                    C.call();
                  } catch (x) {
                    Y = x;
                  }
                  e.call(C.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  Y = x;
                }
                (C = e()) && typeof C.catch == "function" && C.catch(function() {
                });
              }
            } catch (x) {
              if (x && Y && typeof x.stack == "string")
                return [x.stack, Y.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        i && i.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var n = u.DetermineComponentFrameRoot(), j = n[0], T = n[1];
        if (j && T) {
          var f = j.split(`
`), y = T.split(`
`);
          for (n = i = 0; i < f.length && !f[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          for (; n < y.length && !y[n].includes(
            "DetermineComponentFrameRoot"
          ); )
            n++;
          if (i === f.length || n === y.length)
            for (i = f.length - 1, n = y.length - 1; 1 <= i && 0 <= n && f[i] !== y[n]; )
              n--;
          for (; 1 <= i && 0 <= n; i--, n--)
            if (f[i] !== y[n]) {
              if (i !== 1 || n !== 1)
                do
                  if (i--, n--, 0 > n || f[i] !== y[n]) {
                    var k = `
` + f[i].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && _.set(e, k), k;
                  }
                while (1 <= i && 0 <= n);
              break;
            }
        }
      } finally {
        D = !1, N.H = s, E(), Error.prepareStackTrace = t;
      }
      return f = (f = e ? e.displayName || e.name : "") ? g(f) : "", typeof e == "function" && _.set(e, f), f;
    }
    function p(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return h(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return g(e);
      switch (e) {
        case V:
          return g("Suspense");
        case K:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            return e = h(e.render, !1), e;
          case Z:
            return p(e.type);
          case X:
            r = e._payload, e = e._init;
            try {
              return p(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function z(e) {
      if (oe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function I(e, r) {
      function t() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = l(this.type);
      return me[e] || (me[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Q(e, r, t, s, u, i) {
      return t = i.ref, e = {
        $$typeof: F,
        type: e,
        key: r,
        props: i,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function a(e, r, t, s, u, i) {
      if (typeof e == "string" || typeof e == "function" || e === B || e === ee || e === $ || e === V || e === K || e === we || typeof e == "object" && e !== null && (e.$$typeof === X || e.$$typeof === Z || e.$$typeof === te || e.$$typeof === re || e.$$typeof === L || e.$$typeof === Se || e.getModuleId !== void 0)) {
        var n = r.children;
        if (n !== void 0)
          if (s)
            if (G(n)) {
              for (s = 0; s < n.length; s++)
                S(n[s], e);
              Object.freeze && Object.freeze(n);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else S(n, e);
      } else
        n = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === F ? (s = "<" + (l(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          s,
          n
        );
      if (oe.call(r, "key")) {
        n = l(e);
        var j = Object.keys(r).filter(function(f) {
          return f !== "key";
        });
        s = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[n + s] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          n,
          j,
          n
        ), Ee[n + s] = !0);
      }
      if (n = null, t !== void 0 && (m(t), n = "" + t), z(r) && (m(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return n && I(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Q(e, n, i, u, O(), t);
    }
    function S(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Ne) {
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            d(s) && w(s, r);
          }
        else if (d(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ne && e[ne] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            d(e.value) && w(e.value, r);
      }
    }
    function d(e) {
      return typeof e == "object" && e !== null && e.$$typeof === F;
    }
    function w(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = A(r), !ge[r])) {
        ge[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = l(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var s = N.getCurrentStack;
        N.getCurrentStack = function() {
          var u = p(e.type);
          return s && (u += s() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), N.getCurrentStack = s;
      }
    }
    function A(e) {
      var r = "", t = O();
      return t && (t = l(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = l(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var he = Re, F = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), te = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ce = Symbol.for("react.client.reference"), N = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = Object.prototype.hasOwnProperty, R = Object.assign, Se = Symbol.for("react.client.reference"), G = Array.isArray, P = 0, se, ae, ie, le, ce, ue, fe;
    b.__reactDisabledLog = !0;
    var H, de, D = !1, _ = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ne = Symbol.for("react.client.reference"), ve, me = {}, Ee = {}, ge = {};
    q.Fragment = B, q.jsx = function(e, r, t, s, u) {
      return a(e, r, t, !1, s, u);
    }, q.jsxs = function(e, r, t, s, u) {
      return a(e, r, t, !0, s, u);
    };
  }()), q;
}
var xe;
function Pe() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? M.exports = Te() : M.exports = Oe()), M.exports;
}
var o = Pe();
const ke = "data:image/png;base64,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", Ue = ({ onQuestionClick: l }) => {
  const v = [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ];
  return /* @__PURE__ */ o.jsxs("div", { className: "frequent-questions", children: [
    /* @__PURE__ */ o.jsx("h3", { children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ o.jsx("ul", { children: v.map((m, b) => /* @__PURE__ */ o.jsx("li", { onClick: () => l(m), children: m }, b)) })
  ] });
}, qe = ({ message: l }) => /* @__PURE__ */ o.jsx("div", { className: `message ${l.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ o.jsx("div", { className: "message-content-wrapper", children: /* @__PURE__ */ o.jsx("div", { className: "message-content", dangerouslySetInnerHTML: { __html: l.text } }) }) });
function Ie() {
  const [l, v] = J([]), [m, b] = J(""), [c, E] = J(!1), [g, h] = J(!0), p = ye(null);
  be(() => {
    O();
  }, []);
  const O = async () => {
    try {
      const a = await getChatHistory();
      if (a.STATUS) {
        const S = a.RSP.map((d) => ({
          id: d.id,
          text: d.message,
          isUser: d.role === "user",
          status: "sent",
          timestamp: new Date(d.created_at)
        }));
        v(S);
      }
    } catch (a) {
      console.error("Error cargando historial:", a);
    } finally {
      h(!1);
    }
  }, z = () => {
    if (p.current) {
      const { scrollHeight: a } = p.current;
      p.current.scrollTo({
        top: a,
        behavior: "smooth"
      });
    }
  };
  be(() => {
    z();
  }, [l, c]);
  const I = async (a = m) => {
    if (a.trim() === "") return;
    const S = {
      id: Date.now().toString(),
      text: a,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    v((d) => [...d, S]), b(""), E(!0);
    try {
      const d = await sendMessageApi({ message: a });
      if (d.STATUS) {
        const w = {
          id: (Date.now() + 1).toString(),
          text: d.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        v((A) => [...A, w]);
      } else {
        b(a);
        const w = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        v((A) => [...A, w]);
      }
    } catch {
      v(
        (w) => w.map(
          (A) => A.id === S.id ? { ...A, status: "error" } : A
        )
      );
    } finally {
      E(!1);
    }
  }, W = (a) => {
    a.preventDefault(), I();
  }, Q = (a) => {
    I(a);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("img", { src: ke, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: p,
        className: "messages-container",
        children: g ? /* @__PURE__ */ o.jsxs("div", { className: "loading-container", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "loading-dots", children: [
            /* @__PURE__ */ o.jsx("div", { className: "dot" }),
            /* @__PURE__ */ o.jsx("div", { className: "dot" }),
            /* @__PURE__ */ o.jsx("div", { className: "dot" })
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "loading-text", children: "Cargando mensajes" })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          l.length === 0 && /* @__PURE__ */ o.jsx(Ue, { onQuestionClick: Q }),
          l.map((a) => /* @__PURE__ */ o.jsx(qe, { message: a }, a.id)),
          c && /* @__PURE__ */ o.jsxs("div", { className: "typing-indicator", children: [
            /* @__PURE__ */ o.jsx("span", {}),
            /* @__PURE__ */ o.jsx("span", {}),
            /* @__PURE__ */ o.jsx("span", {})
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ o.jsxs("form", { onSubmit: W, className: "message-input", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          value: m,
          onChange: (a) => b(a.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: c || g,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: c || g || m.trim() === "",
          children: /* @__PURE__ */ o.jsx("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
}
function Je() {
  return /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("div", { className: "chat-toogle-content", children: /* @__PURE__ */ o.jsx(Ie, {}) }) });
}
export {
  Je as default
};
