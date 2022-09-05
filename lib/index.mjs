import * as e from "react";
const p = "_errorView_llehv_1", E = "_body_llehv_17", o = {
  errorView: p,
  body: E
}, d = ({ error: t, errorInfo: n }) => {
  var s;
  return /* @__PURE__ */ e.createElement("div", {
    className: o.errorView
  }, /* @__PURE__ */ e.createElement("div", {
    className: o.body
  }, /* @__PURE__ */ e.createElement("p", null, t == null ? void 0 : t.name), /* @__PURE__ */ e.createElement("p", null, t == null ? void 0 : t.message), /* @__PURE__ */ e.createElement(e.Fragment, null, (s = t == null ? void 0 : t.stack) == null ? void 0 : s.split(`
`).map((a, c) => /* @__PURE__ */ e.createElement("p", {
    key: c
  }, a))), /* @__PURE__ */ e.createElement("p", null, n == null ? void 0 : n.componentStack)));
};
d.displayName = "ErrorViewMacOS";
const w = "_errorView_g6155_1", h = "_body_g6155_17", _ = "_heading_g6155_22", y = "_details_g6155_39", i = {
  errorView: w,
  body: h,
  heading: _,
  details: y
}, b = ({
  error: t,
  errorInfo: n
}) => /* @__PURE__ */ e.createElement("div", {
  className: i.errorView
}, /* @__PURE__ */ e.createElement("div", {
  className: i.body
}, /* @__PURE__ */ e.createElement("h1", {
  className: i.heading
}, ":("), /* @__PURE__ */ e.createElement("p", null, "A problem has occurred with the website and it needs to be reloaded."), /* @__PURE__ */ e.createElement("p", null, "We just collect some Error information and then restart for you."), /* @__PURE__ */ e.createElement("div", {
  className: i.details
}, /* @__PURE__ */ e.createElement("p", null, "For more information on this issue and possible solutions, please visit the website:", /* @__PURE__ */ e.createElement("a", {
  href: "https://reactjs.org/docs/error-boundaries.html",
  target: "_blank"
}, "https://reactjs.org/docs/error-boundaries.html")), /* @__PURE__ */ e.createElement("p", null, t == null ? void 0 : t.name, t == null ? void 0 : t.message), /* @__PURE__ */ e.createElement("p", null, n == null ? void 0 : n.componentStack)))), g = "_errorViewWindows9x_qlxpf_1", V = "_body_qlxpf_20", v = "_heading_qlxpf_31", l = {
  errorViewWindows9x: g,
  body: V,
  heading: v
}, x = ({
  error: t,
  errorInfo: n
}) => {
  const s = e.useMemo(() => n == null ? void 0 : n.componentStack, [n]);
  return /* @__PURE__ */ e.createElement("div", {
    className: l.errorViewWindows9x
  }, /* @__PURE__ */ e.createElement("div", {
    className: l.body
  }, /* @__PURE__ */ e.createElement("h1", {
    className: l.heading
  }, "ERROR"), /* @__PURE__ */ e.createElement("p", null, "An error has occureed. To continue:"), /* @__PURE__ */ e.createElement("p", null, "Press Enter to return to Website, or"), /* @__PURE__ */ e.createElement("p", null, "Press Alt+F4 to close this application. If you do this, you will lose any unsaved information in all open applications."), /* @__PURE__ */ e.createElement("p", null, "Error: ", t == null ? void 0 : t.name, ",", t == null ? void 0 : t.message), s && /* @__PURE__ */ e.createElement("p", null, s)));
}, m = ({ error: t, errorInfo: n, onConfirm: s, variant: a }) => {
  switch (e.useEffect(() => {
    const r = (u) => {
      u.key === "Enter" && s();
    };
    window.addEventListener("keypress", r, { once: !0 });
  }, []), e.useMemo(() => a || (window.navigator.userAgent.includes("Windows") ? "windows" : "windows9x"), [a])) {
    case "macOS":
      return /* @__PURE__ */ e.createElement(d, {
        error: t,
        errorInfo: n
      });
    case "windows9x":
      return /* @__PURE__ */ e.createElement(x, {
        error: t,
        errorInfo: n
      });
  }
  return /* @__PURE__ */ e.createElement(b, {
    error: t,
    errorInfo: n
  });
};
m.displayName = "BlueScreen";
class N extends e.Component {
  constructor(n) {
    super(n), this.state = {};
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  onConfirm() {
    this.setState({ error: void 0, errorInfo: void 0 });
  }
  componentDidCatch(n, s) {
    this.setState({ errorInfo: s, error: n });
  }
  render() {
    return this.state.error ? /* @__PURE__ */ e.createElement(m, {
      error: this.state.error,
      errorInfo: this.state.errorInfo,
      onConfirm: this.onConfirm.bind(this),
      variant: this.props.variant
    }) : this.props.children;
  }
}
export {
  N as ErrorBoundary
};
