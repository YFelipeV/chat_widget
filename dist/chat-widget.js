import { jsxs as o, jsx as e, Fragment as N } from "react/jsx-runtime";
import { useState as m, useRef as E, useEffect as f } from "react";
const j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sDEhAFCREQTBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAMzUlEQVR42uWbe5AV9ZXHP+fXfe/cYd6DBBApX0OKly6S4REpNasOL7MRcbO6Yx6uo0Q0gWQVs6F45UElVmklply3NgrRWjebhwrGQhJWNMbUgAUopgiDbFEkLo8CZ+IMjDP31b+zf3T3nb7zwHkxA25Pze17+3bf3+/3/Z3zPd9zft3CR2wrVjz0md///o3PjRo16v7Dhw/HVRUAVUVEOBe3sI+JRIKqqqqTx44d+7c1a1Y9Pm/evMbly5fz2GOPdbmmy0hef/11rrvuOm6++Zbrjx8//nxzc3O54zi5NsJrzlUQomCIiKqqiAjWWiZMqNpaUzN36bJlX/3LGYG4+eZFbN68iUWLbnnqwIF36xzHQX14RURySJ8vQIT9DN6riEg2m2XkyMrP7dhR/9KGDRuoq6vLB+KFF15g8eLFzJgxa09ra+v0c32g/QRHxTcTLrnk4ge3bn350TyLsNZijGHevPm/eu+9/701CtDHFRBVlcrKypvq6//wcp5FzJlzzdKmpqYnjDFnq/lIcwoqqESOKAwV5iHRZ7NZ3n571wWPPPKjplzTkydP1bMaCRQUG3wwIIpoeEQww2B5qsrEiROf3bTp+S+ao0ePs2DBTSuttXkkM+iNiiIYFOOjYgULOLgoyllq9oybiOiBAwe+8OSTGwoF4Morp72RzWbndBdO+279GuwlGJwiAp4H7VmHZErJWhBRUIeiAktB3CPmSF7z4U8hZ88awn1paelDLoDjODMzmYwM1C00cHZFEAWrkIgpKxef4uqpScpiyogCxTE+JyjQlhJaUoY/Hoqx9uflNCcF1+TEytm0hhxXFBUV3SCq6kycODlrjBkYPyhoQIiC4GUtz37jr1RPSGOtB55Bjf9t3qyoAfEQEUzMsv9wnK/9tJKjjQ6OI/k0O8gWEgJx4YVjEVUdO3Hi5GMDAUJV/Q6qkMkqKz/fwj/d8CFeWjrNQr6G64mPnJiyfW8hdz1RSVGBIghWrU+og2Ql0bYrKysxA3eFjg/pDDz9jUbuvOZDvJTg91ty/xq5SNG878J/RLBZw2emJKn//nHirg+ySNiUdrQ5QNeI7s2AhFPOHcACm1e+z6xLsliCQRPIW9Vg74dQVf8CVZ9I/KihqFpy4UNgTAn895r3ScQ8BKcb9AcHjDwg+vdLfshNZYU1i1uYNCaDiEUEjAnICLDBeY6jOIXK6XahsdXBemBGKE4QVKOCSxTEQEWRx2vfPklJwiIBwGcj0roDxBRFmHtlO7XXtuFZ34ZDThMRrILrCAeOxvjRS8X8etcICAaZ8oQxpR731Jzii9e1UV5og4EaJLA1I8KIAstv1pzgmlWfwHoCojklqiqDQhs5soyk2n0inIwH//P0MbyWoEOBblZVsihilX/44Wj2vxfDdTWY8zAaaDDLSmub4T8feJ85l2dQCaOPv1fxJXlbEq5ePRrPCwC3ijEDR6GioqJ/rqG5QShf/ts2Ms0dIITfIeCKZdqKcRw84hJzbWgnEXuS3A8WJ5R7nxjJ1r0jwGguVqooEsx6YULZ/YPjOI5F1A6qzDD9Dj2qtLS53Df3FCI2cBMNlKVgVLni6xdhcALS9EVWd7AKIEaxKCueLeVnvyvGhGCoouK/FQHHEfY8fAKrIag6XED4ktngcOWlKSorLaIShEOf9K14rN9Uhoqi1oIJkjnpnmf8qQ1CKPCDzcU8/VoxJnSRSHQygGOENx8+6QM0XBYRxnIryuzLU2haAhOXjk57hp+9UYRgsMYHqnfUK4H0Njy8uZy/WTEWJ2Yxjocx4IhgCjxueqSS2f8yClE7aFLT7Xuc6BBGpUUWVfFVcpBjIIoTmIYYQdQEmaf0xuciAseS8QwT77+IgriHa1w865HOukA2KGCY4QufiiIWMlguHOl1FFQksAZRvvVsRUcnhd6BEEnaQjmuajFiyGYNacn6oOL5v2ZkUAVF3y0irCxZcIx2BQnDm4dc/wQ1fbLcaEZ4+vRp2tvbqam5kRkzZ6DW8tZbb7Nly8uUlJRQUlKS443hEVTSYcLJtOkos+VmURlZBCc/kF5ZbufKeDabZd26tSxYMJ+Kiopur2lubmHLli2sWrWawsJCBqPCbugfW2KMcqLZCbjBy4kggK/ceCpIsvSMAEQ7n0wmWb58GQcPHqC29h8pLy/POyd6bllZKXfcUcvhw4d44IF/JpPJdEmizn7UEM2RZmvSgANGjc8PAYHVTE/nSafuAIl2PJVK8Ytf/BdLltyDqmKtzc9IexigqlJXdxc//vFjeJ43oFKj6Q9HEJjiG3+KYwot1gSySMQvS3lKzLVYNVi1PQgpf7PW8uabO6iuru6yKNPdoDofU1Xmzq3hl7/8OWEFvqdrB50jwjLa/iMFNJ10KC/yM1FRgxU/qry+7iSzV45FjPRYf7TWsn7996isrMzNeBSMQ4cOsWPHTvbvbwCUSZMm8elPz6aqqirvPBFh6tSprF69ilWrVhOLxYY+6brt2jZWL2oGTC45Cgu3P/ltIY9vLfWTML+Cnzfbn/zkBF58cXOX2W5vb+P22++goaGBeDyeN+h0Os1FF13Iq6++2qXkJiLcffcS6uvr+8QVFRUVAwdC1dDw7+/htbmIhPlk8B2w9lflPF9fiAmShTDbTKVSvPtuA2GJMBysMYarrqomnU7lDbLzPplMcfBgQxcuaWr6K9OmXUVJSUmvweh39hktQjpY7n9ilA+C+gqTyKC/8/fNfOn6VrwI2arCrFmzcF03DwQRYebM2aTTqbxjnfeqSkFBnPnzFxBdmVNVRo6spLq6emiyzw6/Ak/gN28V8Of3XcSaIBEKsg/xZfa3PnuahdPacws7IkJJSUleBDHG0NjYyKlTp3otvo4cOUpLS0sXQTZv3tyhBSIkv4KYsmD9BaRU8xKsMCfxRPnhvR+QiPnopVJJli37Wt7NJqrK0qX390oPRL+rq7uny7mzZs0ilUoNHRCqwQ+o4OJQ/dAYrNocGUpQWDEYbNJw+5wPQZVsNsOUKZPzBiYi7Nu3r9d+raoYY9i3b18Xsh09ejSZTGYIXUNyL1jJgApXPDAOJ5aNiCjJSaqyQj/FzhXsItagqjiO6UPbkrudoaecZehcI0IWghMMV6laOp62pJ8dGhtWmIREgYenmiv2dyeQejuI0CK6c5lksp2+RsHBAULDTvgkGXeF6SvGcToJnoSFGaXptINrOtUtI6GvL0lTCNjatau7AHr48J+Jx2NDD0SO4MIXUeKuZerXx9GW9pf9nYTy8t7CvMRtIMt1qkp7ezuLFi3qknnu2rWLWCw+DBYR0QgS/CFKSVGWiV8dx/EPDJv+MIK/nHAC8xkYCCHw69d/j3g83sWKnnvu+SHINT6ijAfR1WuH8pIMN3znE7gC8Zi/INOTSXQs2uTfudN5xtPpNLW1tdTW3p5bIQyt5JVXttPU1EQikRg+IKLrX4oJyvwGN6AFDURWZ5MIB57JZLoFIeQDa5UpUyZz771LWLhwYQCc5JHnunXf7jMIZw0IvzQfsRGJ6q+e/WLPnl3dLNr4ILiuy4gRI3pMxUWE2tov0Nzc3K/weZaA6LvPB7fw9GgRH/X5u99dz+7du3Fdt1/FmWEHorukqjfnR3nh1ls/T0NDA67r9rtcN+xAdCbE7jRFd6ILoLX1Q2bMmIkxBmPMgO4IdM8VEHqbZJ08eYKNG5/mmWeeASQHQHfC7Ly0CGstn/rUjDMKqEwmkyvsGuP0CczzAohwNv2qlJzRZTpXtAZSwj/nXSP6OXq8p/eDsZlzBYTgsZBhezLInAtuESW7/oihwQJCu1Nrw2EZ0Qjw/84iOuT1W2Sz2WFr3wCnhnrmO79PpZLcdtttw2KFqkosFsOISFsikfCGmhMAPM9j7969jB9/KYlE4YBFUX8nxBizzQ0O7gSuVtUheZSxtLSU0tJyiouLKSsrY9SoC4aNpAHa2tq2m82bN1FeXr4dfx10SGbEWsv48eP9pbaBPh4xYMNQvvnNFT/J9WDKlCs0lK8f9y2qVi+//LJXXnrp1zU5wV5VNaExmUwuHArXOFc2z/N48MEHrx0zZszpvOc+a2rmbj1y5Oj8qMj5mFqEApSVld2yc2f9izkdYYzh0UcfZdu23y4oKSl+B//x4W7vX/o4AKCqcvHFFz+0c2f9i+HTjTnX2LZtG++880emTZv+pKq9oqmpaVJgEblnw89XPohYePBs+MjFr722fePGjT9l+vTpPl90vvCppzZy9913cf31N/5dU1Pjc8lkKm6MyT1Tfb4AEk5+OEbP87jssst2VVVdetfjj//rvs7rptJTeAtPqqur++zu3XtuqqwcueTEiRPmfLIE13UZO3ZsU3Nz84Y77/zSf9x33337ejr//wDugY0m8fu7XwAAAABJRU5ErkJggg==", q = ({ onQuestionClick: s }) => /* @__PURE__ */ o("div", { className: "frequent-questions", children: [
  /* @__PURE__ */ e("h3", { children: "Preguntas Frecuentes" }),
  /* @__PURE__ */ e("ul", { children: [
    "Por favor muestra una tabla con los datos principales de las sucursales registradas.",
    "¿Cuáles son los servicios disponibles en PARE?",
    "¿Cómo puedo contactar a soporte técnico?"
  ].map((a, n) => /* @__PURE__ */ e("li", { onClick: () => s(a), children: a }, n)) })
] }), U = ({ message: s }) => /* @__PURE__ */ e("div", { className: `message ${s.isUser ? "user-message" : "bot-message"}`, children: /* @__PURE__ */ e("div", { className: "message-content-wrapper", children: /* @__PURE__ */ e("div", { className: "message-content", dangerouslySetInnerHTML: { __html: s.text } }) }) }), b = () => {
  const [s, i] = m([]), [a, n] = m(""), [d, g] = m(!1), [h, C] = m(!0), u = E(null);
  f(() => {
    w();
  }, []);
  const w = async () => {
    try {
      const t = await getChatHistory();
      if (t.STATUS) {
        const A = t.RSP.map((r) => ({
          id: r.id,
          text: r.message,
          isUser: r.role === "user",
          status: "sent",
          timestamp: new Date(r.created_at)
        }));
        i(A);
      }
    } catch (t) {
      console.error("Error cargando historial:", t);
    } finally {
      C(!1);
    }
  }, S = () => {
    if (u.current) {
      const { scrollHeight: t } = u.current;
      u.current.scrollTo({
        top: t,
        behavior: "smooth"
      });
    }
  };
  f(() => {
    S();
  }, [s, d]);
  const p = async (t = a) => {
    if (t.trim() === "") return;
    const A = {
      id: Date.now().toString(),
      text: t,
      isUser: !0,
      status: "sent",
      timestamp: /* @__PURE__ */ new Date()
    };
    i((r) => [...r, A]), n(""), g(!0);
    try {
      const r = await sendMessageApi({ message: t });
      if (r.STATUS) {
        const l = {
          id: (Date.now() + 1).toString(),
          text: r.RSP,
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        i((c) => [...c, l]);
      } else {
        n(t);
        const l = {
          id: (Date.now() + 1).toString(),
          text: "<p>Error, Intenta nuevamente</p>",
          isUser: !1,
          status: "sent",
          timestamp: /* @__PURE__ */ new Date()
        };
        i((c) => [...c, l]);
      }
    } catch {
      i(
        (l) => l.map(
          (c) => c.id === A.id ? { ...c, status: "error" } : c
        )
      );
    } finally {
      g(!1);
    }
  }, v = (t) => {
    t.preventDefault(), p();
  }, I = (t) => {
    p(t);
  };
  return /* @__PURE__ */ o("div", { className: "chat-boot-container", children: [
    /* @__PURE__ */ o("div", { className: "chat-header", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("img", { src: j, className: "icon-header", alt: "Logo Corbot" }) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "title-header", children: "Cor-IA" }) })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        className: "messages-container",
        children: h ? /* @__PURE__ */ o("div", { className: "loading-container", children: [
          /* @__PURE__ */ o("div", { className: "loading-dots", children: [
            /* @__PURE__ */ e("div", { className: "dot" }),
            /* @__PURE__ */ e("div", { className: "dot" }),
            /* @__PURE__ */ e("div", { className: "dot" })
          ] }),
          /* @__PURE__ */ e("span", { className: "loading-text", children: "Cargando mensajes" })
        ] }) : /* @__PURE__ */ o(N, { children: [
          s.length === 0 && /* @__PURE__ */ e(q, { onQuestionClick: I }),
          s.map((t) => /* @__PURE__ */ e(U, { message: t }, t.id)),
          d && /* @__PURE__ */ o("div", { className: "typing-indicator", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e("span", {})
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ o("form", { onSubmit: v, className: "message-input", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: a,
          onChange: (t) => n(t.target.value),
          placeholder: "Escribe tu mensaje...",
          disabled: d || h,
          className: "message-input-field"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "submit",
          className: "send-button",
          disabled: d || h || a.trim() === "",
          children: /* @__PURE__ */ e("i", { className: "ri-send-plane-fill" })
        }
      )
    ] })
  ] });
}, R = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "chat-toogle-content", children: /* @__PURE__ */ e(b, {}) }) }), y = (s, i = {}) => {
  const a = document.getElementById(s);
  if (!a) {
    console.error(`Container with id "${s}" not found`);
    return;
  }
  try {
    const n = ReactDOM.createRoot(a);
    return n.render(
      /* @__PURE__ */ e(ChatBot, { ...i })
    ), n;
  } catch (n) {
    console.error("Error initializing ChatBot:", n);
  }
};
typeof window < "u" && (window.ChatBot = y);
export {
  R as ChatWidget
};
