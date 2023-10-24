function dn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const $ = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, hn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ve = () => {
}, _n = /^on[^a-z]/, gn = (e) => _n.test(e), C = Object.assign, mn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, En = Object.prototype.hasOwnProperty, m = (e, t) => En.call(e, t), h = Array.isArray, q = (e) => $e(e) === "[object Map]", Vt = (e) => $e(e) === "[object Set]", w = (e) => typeof e == "function", x = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", wn = (e) => N(e) && w(e.then) && w(e.catch), Ct = Object.prototype.toString, $e = (e) => Ct.call(e), It = (e) => $e(e).slice(8, -1), Rt = (e) => $e(e) === "[object Object]", qe = (e) => x(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, bn = Nn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), ue = (e, t) => !Object.is(e, t), vn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let ut;
const Ae = () => ut || (ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ge(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = x(o) ? xn(o) : Ge(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (x(e))
      return e;
    if (N(e))
      return e;
  }
}
const On = /;(?![^(]*\))/g, Sn = /:([^]+)/, yn = /\/\*[^]*?\*\//g;
function xn(e) {
  const t = {};
  return e.replace(yn, "").split(On).forEach((n) => {
    if (n) {
      const o = n.split(Sn);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function de(e) {
  let t = "";
  if (x(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const o = de(e[n]);
      o && (t += o + " ");
    }
  else if (N(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xe = (e) => x(e) ? e : e == null ? "" : h(e) || N(e) && (e.toString === Ct || !w(e.toString)) ? JSON.stringify(e, Dt, 2) : String(e), Dt = (e, t) => t && t.__v_isRef ? Dt(e, t.value) : q(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Vt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : N(t) && !h(t) && !Rt(t) ? String(t) : t;
function at(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let $t;
function Vn(e, t = $t) {
  t && t.active && t.effects.push(e);
}
function Cn() {
  return $t;
}
const ae = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Tt = (e) => (e.w & H) > 0, Pt = (e) => (e.n & H) > 0, In = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= H;
}, Rn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Tt(r) && !Pt(r) ? r.delete(e) : t[n++] = r, r.w &= ~H, r.n &= ~H;
    }
    t.length = n;
  }
}, je = /* @__PURE__ */ new WeakMap();
let oe = 0, H = 1;
const ze = 30;
let O;
const G = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ke = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Dn {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Vn(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = O, n = z;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = O, O = this, z = !0, H = 1 << ++oe, oe <= ze ? In(this) : ft(this), this.fn();
    } finally {
      oe <= ze && Rn(this), H = 1 << --oe, O = this.parent, z = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = !0 : this.active && (ft(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ft(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let z = !0;
const Mt = [];
function Ft() {
  Mt.push(z), z = !1;
}
function At() {
  const e = Mt.pop();
  z = e === void 0 ? !0 : e;
}
function y(e, t, n) {
  if (z && O) {
    let o = je.get(e);
    o || je.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = ae());
    const s = process.env.NODE_ENV !== "production" ? { effect: O, target: e, type: t, key: n } : void 0;
    He(r, s);
  }
}
function He(e, t) {
  let n = !1;
  oe <= ze ? Pt(e) || (e.n |= H, n = !Tt(e)) : n = !e.has(O), n && (e.add(O), O.deps.push(e), process.env.NODE_ENV !== "production" && O.onTrack && O.onTrack(
    C(
      {
        effect: O
      },
      t
    )
  ));
}
function U(e, t, n, o, r, s) {
  const i = je.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(o);
    i.forEach((d, l) => {
      (l === "length" || l >= a) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? qe(n) && c.push(i.get("length")) : (c.push(i.get(G)), q(e) && c.push(i.get(Ke)));
        break;
      case "delete":
        h(e) || (c.push(i.get(G)), q(e) && c.push(i.get(Ke)));
        break;
      case "set":
        q(e) && c.push(i.get(G));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? ee(c[0], u) : ee(c[0]));
  else {
    const a = [];
    for (const d of c)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? ee(ae(a), u) : ee(ae(a));
  }
}
function ee(e, t) {
  const n = h(e) ? e : [...e];
  for (const o of n)
    o.computed && pt(o, t);
  for (const o of n)
    o.computed || pt(o, t);
}
function pt(e, t) {
  (e !== O || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(C({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const $n = /* @__PURE__ */ dn("__proto__,__v_isRef,__isVue"), jt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), Tn = /* @__PURE__ */ Ye(), Pn = /* @__PURE__ */ Ye(!0), Mn = /* @__PURE__ */ Ye(!0, !0), dt = /* @__PURE__ */ Fn();
function Fn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = p(this);
      for (let s = 0, i = this.length; s < i; s++)
        y(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ft();
      const o = p(this)[t].apply(this, n);
      return At(), o;
    };
  }), e;
}
function An(e) {
  const t = p(this);
  return y(t, "has", e), t.hasOwnProperty(e);
}
function Ye(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Wt : Ut : t ? kn : Ht).get(o))
      return o;
    const i = h(o);
    if (!e) {
      if (i && m(dt, r))
        return Reflect.get(dt, r, s);
      if (r === "hasOwnProperty")
        return An;
    }
    const c = Reflect.get(o, r, s);
    return (Je(r) ? jt.has(r) : $n(r)) || (e || y(o, "get", r), t) ? c : S(c) ? i && qe(r) ? c : c.value : N(c) ? e ? Lt(c) : Bt(c) : c;
  };
}
const jn = /* @__PURE__ */ zn();
function zn(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (W(i) && S(i) && !S(r))
      return !1;
    if (!e && (!Ve(r) && !W(r) && (i = p(i), r = p(r)), !h(n) && S(i) && !S(r)))
      return i.value = r, !0;
    const c = h(n) && qe(o) ? Number(o) < n.length : m(n, o), u = Reflect.set(n, o, r, s);
    return n === p(s) && (c ? ue(r, i) && U(n, "set", o, r, i) : U(n, "add", o, r)), u;
  };
}
function Kn(e, t) {
  const n = m(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && U(e, "delete", t, void 0, o), r;
}
function Hn(e, t) {
  const n = Reflect.has(e, t);
  return (!Je(t) || !jt.has(t)) && y(e, "has", t), n;
}
function Un(e) {
  return y(e, "iterate", h(e) ? "length" : G), Reflect.ownKeys(e);
}
const Wn = {
  get: Tn,
  set: jn,
  deleteProperty: Kn,
  has: Hn,
  ownKeys: Un
}, zt = {
  get: Pn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && at(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && at(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Bn = /* @__PURE__ */ C(
  {},
  zt,
  {
    get: Mn
  }
), Qe = (e) => e, Te = (e) => Reflect.getPrototypeOf(e);
function _e(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = p(e), s = p(t);
  n || (t !== s && y(r, "get", t), y(r, "get", s));
  const { has: i } = Te(r), c = o ? Qe : n ? ke : fe;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function ge(e, t = !1) {
  const n = this.__v_raw, o = p(n), r = p(e);
  return t || (e !== r && y(o, "has", e), y(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function me(e, t = !1) {
  return e = e.__v_raw, !t && y(p(e), "iterate", G), Reflect.get(e, "size", e);
}
function ht(e) {
  e = p(e);
  const t = p(this);
  return Te(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function _t(e, t) {
  t = p(t);
  const n = p(this), { has: o, get: r } = Te(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Kt(n, o, e) : (e = p(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? ue(t, i) && U(n, "set", e, t, i) : U(n, "add", e, t), this;
}
function gt(e) {
  const t = p(this), { has: n, get: o } = Te(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Kt(t, n, e) : (e = p(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && U(t, "delete", e, void 0, s), i;
}
function mt() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? q(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && U(e, "clear", void 0, void 0, n), o;
}
function Ee(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = p(i), u = t ? Qe : e ? ke : fe;
    return !e && y(c, "iterate", G), i.forEach((a, d) => o.call(r, u(a), u(d), s));
  };
}
function we(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = p(r), i = q(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), d = n ? Qe : t ? ke : fe;
    return !t && y(
      s,
      "iterate",
      u ? Ke : G
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
        return f ? { value: l, done: f } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function M(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${bn(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Ln() {
  const e = {
    get(s) {
      return _e(this, s);
    },
    get size() {
      return me(this);
    },
    has: ge,
    add: ht,
    set: _t,
    delete: gt,
    clear: mt,
    forEach: Ee(!1, !1)
  }, t = {
    get(s) {
      return _e(this, s, !1, !0);
    },
    get size() {
      return me(this);
    },
    has: ge,
    add: ht,
    set: _t,
    delete: gt,
    clear: mt,
    forEach: Ee(!1, !0)
  }, n = {
    get(s) {
      return _e(this, s, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(s) {
      return ge.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: Ee(!0, !1)
  }, o = {
    get(s) {
      return _e(this, s, !0, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(s) {
      return ge.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: Ee(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = we(
      s,
      !1,
      !1
    ), n[s] = we(
      s,
      !0,
      !1
    ), t[s] = we(
      s,
      !1,
      !0
    ), o[s] = we(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Jn,
  qn,
  Gn,
  Yn
] = /* @__PURE__ */ Ln();
function Xe(e, t) {
  const n = t ? e ? Yn : Gn : e ? qn : Jn;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    m(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Qn = {
  get: /* @__PURE__ */ Xe(!1, !1)
}, Xn = {
  get: /* @__PURE__ */ Xe(!0, !1)
}, Zn = {
  get: /* @__PURE__ */ Xe(!0, !0)
};
function Kt(e, t, n) {
  const o = p(n);
  if (o !== n && t.call(e, o)) {
    const r = It(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ht = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap();
function er(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function tr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : er(It(e));
}
function Bt(e) {
  return W(e) ? e : Ze(
    e,
    !1,
    Wn,
    Qn,
    Ht
  );
}
function Lt(e) {
  return Ze(
    e,
    !0,
    zt,
    Xn,
    Ut
  );
}
function Ne(e) {
  return Ze(
    e,
    !0,
    Bn,
    Zn,
    Wt
  );
}
function Ze(e, t, n, o, r) {
  if (!N(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = tr(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, c), c;
}
function Y(e) {
  return W(e) ? Y(e.__v_raw) : !!(e && e.__v_isReactive);
}
function W(e) {
  return !!(e && e.__v_isReadonly);
}
function Ve(e) {
  return !!(e && e.__v_isShallow);
}
function Ue(e) {
  return Y(e) || W(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function nr(e) {
  return vn(e, "__v_skip", !0), e;
}
const fe = (e) => N(e) ? Bt(e) : e, ke = (e) => N(e) ? Lt(e) : e;
function rr(e) {
  z && O && (e = p(e), process.env.NODE_ENV !== "production" ? He(e.dep || (e.dep = ae()), {
    target: e,
    type: "get",
    key: "value"
  }) : He(e.dep || (e.dep = ae())));
}
function or(e, t) {
  e = p(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? ee(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ee(n));
}
function S(e) {
  return !!(e && e.__v_isRef === !0);
}
function ie(e) {
  return sr(e, !1);
}
function sr(e, t) {
  return S(e) ? e : new ir(e, t);
}
class ir {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : p(t), this._value = n ? t : fe(t);
  }
  get value() {
    return rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ve(t) || W(t);
    t = n ? t : p(t), ue(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : fe(t), or(this, t));
  }
}
function cr(e) {
  return S(e) ? e.value : e;
}
const lr = {
  get: (e, t, n) => cr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return S(r) && !S(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ur(e) {
  return Y(e) ? e : new Proxy(e, lr);
}
const Q = [];
function ar(e) {
  Q.push(e);
}
function fr() {
  Q.pop();
}
function E(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Ft();
  const n = Q.length ? Q[Q.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = pr();
  if (o)
    X(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${un(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...dr(r)), console.warn(...s);
  }
  At();
}
function pr() {
  let e = Q[Q.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function dr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...hr(n));
  }), t;
}
function hr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${un(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ..._r(e.props), s] : [r + s];
}
function _r(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Jt(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Jt(e, t, n) {
  return x(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = Jt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const qt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function X(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Gt(s, t, n);
  }
  return r;
}
function Oe(e, t, n, o) {
  if (w(e)) {
    const s = X(e, t, n, o);
    return s && wn(s) && s.catch((i) => {
      Gt(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Oe(e[s], t, n, o));
  return r;
}
function Gt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? qt[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      X(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  gr(e, n, r, o);
}
function gr(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = qt[t];
    if (n && ar(n), E(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && fr(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ce = !1, We = !1;
const I = [];
let A = 0;
const ne = [];
let D = null, F = 0;
const Yt = /* @__PURE__ */ Promise.resolve();
let et = null;
const mr = 100;
function Er(e) {
  const t = et || Yt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wr(e) {
  let t = A + 1, n = I.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    pe(I[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function tt(e) {
  (!I.length || !I.includes(
    e,
    Ce && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? I.push(e) : I.splice(wr(e.id), 0, e), Qt());
}
function Qt() {
  !Ce && !We && (We = !0, et = Yt.then(Zt));
}
function Xt(e) {
  h(e) ? ne.push(...e) : (!D || !D.includes(
    e,
    e.allowRecurse ? F + 1 : F
  )) && ne.push(e), Qt();
}
function Nr(e) {
  if (ne.length) {
    const t = [...new Set(ne)];
    if (ne.length = 0, D) {
      D.push(...t);
      return;
    }
    for (D = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort((n, o) => pe(n) - pe(o)), F = 0; F < D.length; F++)
      process.env.NODE_ENV !== "production" && kt(e, D[F]) || D[F]();
    D = null, F = 0;
  }
}
const pe = (e) => e.id == null ? 1 / 0 : e.id, br = (e, t) => {
  const n = pe(e) - pe(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Zt(e) {
  We = !1, Ce = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), I.sort(br);
  const t = process.env.NODE_ENV !== "production" ? (n) => kt(e, n) : ve;
  try {
    for (A = 0; A < I.length; A++) {
      const n = I[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        X(n, null, 14);
      }
    }
  } finally {
    A = 0, I.length = 0, Nr(e), Ce = !1, et = null, (I.length || ne.length) && Zt(e);
  }
}
function kt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > mr) {
      const o = t.ownerInstance, r = o && ln(o.type);
      return E(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const re = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ae().__VUE_HMR_RUNTIME__ = {
  createRecord: Pe(vr),
  rerender: Pe(Or),
  reload: Pe(Sr)
});
const Ie = /* @__PURE__ */ new Map();
function vr(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: ce(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ce(e) {
  return an(e) ? e.__vccOpts : e;
}
function Or(e, t) {
  const n = Ie.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ce(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Sr(e, t) {
  const n = Ie.get(e);
  if (!n)
    return;
  t = ce(t), Et(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = ce(r.type);
    re.has(s) || (s !== n.initialDef && Et(s, t), re.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (re.add(s), r.ceReload(t.styles), re.delete(s)) : r.parent ? tt(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Xt(() => {
    for (const r of o)
      re.delete(
        ce(r.type)
      );
  });
}
function Et(e, t) {
  C(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let P = null, nt = null;
function yr(e) {
  nt = e;
}
function xr() {
  nt = null;
}
const Vr = (e) => e.__isSuspense;
function Cr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Xt(e);
}
const be = {};
function Ir(e, t, n) {
  return process.env.NODE_ENV !== "production" && !w(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), en(e, t, n);
}
function en(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = $) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (g) => {
    E(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Cn() === ((c = Z) == null ? void 0 : c.scope) ? Z : null;
  let d, l = !1, f = !1;
  if (S(e) ? (d = () => e.value, l = Ve(e)) : Y(e) ? (d = () => e, o = !0) : h(e) ? (f = !0, l = e.some((g) => Y(g) || Ve(g)), d = () => e.map((g) => {
    if (S(g))
      return g.value;
    if (Y(g))
      return te(g);
    if (w(g))
      return X(g, a, 2);
    process.env.NODE_ENV !== "production" && u(g);
  })) : w(e) ? t ? d = () => X(e, a, 2) : d = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), Oe(
        e,
        a,
        3,
        [b]
      );
  } : (d = ve, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const g = d;
    d = () => te(g());
  }
  let _, b = (g) => {
    _ = V.onStop = () => {
      X(g, a, 4);
    };
  }, T;
  if (Zr)
    if (b = ve, t ? n && Oe(t, a, 3, [
      d(),
      f ? [] : void 0,
      b
    ]) : d(), r === "sync") {
      const g = ro();
      T = g.__watcherHandles || (g.__watcherHandles = []);
    } else
      return ve;
  let B = f ? new Array(e.length).fill(be) : be;
  const L = () => {
    if (V.active)
      if (t) {
        const g = V.run();
        (o || l || (f ? g.some(
          (fn, pn) => ue(fn, B[pn])
        ) : ue(g, B))) && (_ && _(), Oe(t, a, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          B === be ? void 0 : f && B[0] === be ? [] : B,
          b
        ]), B = g);
      } else
        V.run();
  };
  L.allowRecurse = !!t;
  let he;
  r === "sync" ? he = L : r === "post" ? he = () => St(L, a && a.suspense) : (L.pre = !0, a && (L.id = a.uid), he = () => tt(L));
  const V = new Dn(d, he);
  process.env.NODE_ENV !== "production" && (V.onTrack = s, V.onTrigger = i), t ? n ? L() : B = V.run() : r === "post" ? St(
    V.run.bind(V),
    a && a.suspense
  ) : V.run();
  const lt = () => {
    V.stop(), a && a.scope && mn(a.scope.effects, V);
  };
  return T && T.push(lt), lt;
}
function Rr(e, t, n) {
  const o = this.proxy, r = x(e) ? e.includes(".") ? Dr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  w(t) ? s = t : (s = t.handler, n = t);
  const i = Z;
  xt(this);
  const c = en(r, s.bind(o), n);
  return i ? xt(i) : Qr(), c;
}
function Dr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function te(e, t) {
  if (!N(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    te(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      te(e[n], t);
  else if (Vt(e) || q(e))
    e.forEach((n) => {
      te(n, t);
    });
  else if (Rt(e))
    for (const n in e)
      te(e[n], t);
  return e;
}
const $r = Symbol.for("v-ndc");
function Tr(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (h(e) || x(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (N(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, c) => t(i, c, void 0, s && s[c])
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, s && s[c]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
const Be = (e) => e ? Xr(e) ? kr(e) || e.proxy : Be(e.parent) : null, le = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ne(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ne(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ne(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ne(e.refs) : e.refs,
    $parent: (e) => Be(e.parent),
    $root: (e) => Be(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fr(e),
    $forceUpdate: (e) => e.f || (e.f = () => tt(e.update)),
    $nextTick: (e) => e.n || (e.n = Er.bind(e.proxy)),
    $watch: (e) => Rr.bind(e)
  })
), Pr = (e) => e === "_" || e === "$", Me = (e, t) => e !== $ && !e.__isScriptSetup && m(e, t), Mr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Me(o, t))
          return i[t] = 1, o[t];
        if (r !== $ && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && m(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== $ && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = le[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (y(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && y(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== $ && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, m(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && P && (!x(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== $ && Pr(t[0]) && m(r, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === P && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Me(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== $ && m(o, t) ? (o[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== $ && m(e, i) || Me(t, i) || (c = s[0]) && m(c, i) || m(o, i) || m(le, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Mr.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function wt(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Fr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (a) => Re(u, a, i, !0)
  ), Re(u, t, i)), N(t) && s.set(t, u), u;
}
function Re(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Re(e, s, n, !0), r && r.forEach(
    (i) => Re(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Ar[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Ar = {
  data: Nt,
  props: vt,
  emits: vt,
  // objects
  methods: se,
  computed: se,
  // lifecycle
  beforeCreate: v,
  created: v,
  beforeMount: v,
  mounted: v,
  beforeUpdate: v,
  updated: v,
  beforeDestroy: v,
  beforeUnmount: v,
  destroyed: v,
  unmounted: v,
  activated: v,
  deactivated: v,
  errorCaptured: v,
  serverPrefetch: v,
  // assets
  components: se,
  directives: se,
  // watch
  watch: zr,
  // provide / inject
  provide: Nt,
  inject: jr
};
function Nt(e, t) {
  return t ? e ? function() {
    return C(
      w(e) ? e.call(this, this) : e,
      w(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jr(e, t) {
  return se(bt(e), bt(t));
}
function bt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function v(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function se(e, t) {
  return e ? C(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : C(
    /* @__PURE__ */ Object.create(null),
    wt(e),
    wt(t ?? {})
  ) : t;
}
function zr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = v(e[o], t[o]);
  return n;
}
let Ot = null;
function Kr(e, t, n = !1) {
  const o = Z || P;
  if (o || Ot) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Ot._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const St = Cr, Hr = (e) => e.__isTeleport, rt = Symbol.for("v-fgt"), Ur = Symbol.for("v-txt"), Le = Symbol.for("v-cmt"), Se = [];
let R = null;
function j(e = !1) {
  Se.push(R = e ? null : []);
}
function Wr() {
  Se.pop(), R = Se[Se.length - 1] || null;
}
function tn(e) {
  return e.dynamicChildren = R || hn, Wr(), R && R.push(e), e;
}
function J(e, t, n, o, r, s) {
  return tn(
    K(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function Br(e, t, n, o, r) {
  return tn(
    ot(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Jr = (...e) => on(
  ...e
), nn = "__vInternal", rn = ({ key: e }) => e ?? null, ye = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? x(e) || S(e) || w(e) ? { i: P, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, o = 0, r = null, s = e === rt ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rn(t),
    ref: t && ye(t),
    scopeId: nt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: P
  };
  return c ? (st(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= x(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && E("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  R && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && R.push(u), u;
}
const ot = process.env.NODE_ENV !== "production" ? Jr : on;
function on(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === $r) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Le), Lr(e)) {
    const c = De(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && st(c, n), !s && R && (c.shapeFlag & 6 ? R[R.indexOf(e)] = c : R.push(c)), c.patchFlag |= -2, c;
  }
  if (an(e) && (e = e.__vccOpts), t) {
    t = qr(t);
    let { class: c, style: u } = t;
    c && !x(c) && (t.class = de(c)), N(u) && (Ue(u) && !h(u) && (u = C({}, u)), t.style = Ge(u));
  }
  const i = x(e) ? 1 : Vr(e) ? 128 : Hr(e) ? 64 : N(e) ? 4 : w(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ue(e) && (e = p(e), E(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), K(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function qr(e) {
  return e ? Ue(e) || nn in e ? C({}, e) : e : null;
}
function De(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Yr(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && rn(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(ye(t)) : [r, ye(t)] : ye(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && h(i) ? i.map(sn) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== rt ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && De(e.ssContent),
    ssFallback: e.ssFallback && De(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function sn(e) {
  const t = De(e);
  return h(e.children) && (t.children = e.children.map(sn)), t;
}
function Gr(e = " ", t = 0) {
  return ot(Ur, null, e, t);
}
function cn(e = "", t = !1) {
  return t ? (j(), Br(Le, null, e)) : ot(Le, null, e);
}
function st(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), st(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(nn in t) ? t._ctx = P : r === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    w(t) ? (t = { default: t, _ctx: P }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Gr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = de([t.class, o.class]));
      else if (r === "style")
        t.style = Ge([t.style, o.style]);
      else if (gn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(h(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
let Z = null, it, k, yt = "__VUE_INSTANCE_SETTERS__";
(k = Ae()[yt]) || (k = Ae()[yt] = []), k.push((e) => Z = e), it = (e) => {
  k.length > 1 ? k.forEach((t) => t(e)) : k[0](e);
};
const xt = (e) => {
  it(e), e.scope.on();
}, Qr = () => {
  Z && Z.scope.off(), it(null);
};
function Xr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zr = !1;
function kr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ur(nr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in le)
          return le[n](e);
      },
      has(t, n) {
        return n in t || n in le;
      }
    }));
}
const eo = /(?:^|[-_])(\w)/g, to = (e) => e.replace(eo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ln(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function un(e, t, n = !1) {
  let o = ln(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? to(o) : n ? "App" : "Anonymous";
}
function an(e) {
  return w(e) && "__vccOpts" in e;
}
const no = Symbol.for("v-scx"), ro = () => {
  {
    const e = Kr(no);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
function oo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(l) {
      return N(l) ? l.__isVue ? ["div", e, "VueInstance"] : S(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : Y(l) ? [
        "div",
        {},
        ["span", e, Fe(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${W(l) ? " (readonly)" : ""}`
      ] : W(l) ? [
        "div",
        {},
        ["span", e, Fe(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== $ && f.push(i("setup", l.setupState)), l.data !== $ && f.push(i("data", p(l.data)));
    const _ = u(l, "computed");
    _ && f.push(i("computed", _));
    const b = u(l, "inject");
    return b && f.push(i("injected", b)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = C({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", o, l] : N(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const _ = l.type;
    if (w(_))
      return;
    const b = {};
    for (const T in l.ctx)
      a(_, T, f) && (b[T] = l.ctx[T]);
    return b;
  }
  function a(l, f, _) {
    const b = l[_];
    if (h(b) && b.includes(f) || N(b) && f in b || l.extends && a(l.extends, f, _) || l.mixins && l.mixins.some((T) => a(T, f, _)))
      return !0;
  }
  function d(l) {
    return Fe(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function so() {
  oo();
}
process.env.NODE_ENV !== "production" && so();
const ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, io = { class: "f-input-field" }, co = ["textContent"], lo = ["placeholder", "value", "type"], uo = ["textContent"], ao = {
  __name: "FInput",
  props: {
    modelValue: [String, Object],
    placeholder: String,
    label: String,
    hint: String,
    rules: Object,
    type: String,
    invalid: Boolean
  },
  setup(e) {
    const t = e, n = ie(t.modelValue), o = ie(!0), r = ie(t.rules.map((i) => new RegExp(i))), s = (i) => {
      if (n.value = i.target.value, !n.value)
        return o.value = !0;
      r.value.length > 0 && r.value.forEach((c) => o.value = c.test(n.value));
    };
    return (i, c) => (j(), J("div", io, [
      K("div", {
        textContent: xe(e.label),
        class: "f-label"
      }, null, 8, co),
      K("input", {
        placeholder: e.placeholder,
        value: n.value,
        type: e.type,
        class: de(["f-input", {
          invalid: !o.value || !!e.invalid
        }]),
        onInput: s
      }, null, 42, lo),
      !o.value || e.invalid ? (j(), J("div", {
        key: 0,
        textContent: xe(e.hint),
        class: "f-hint"
      }, null, 8, uo)) : cn("", !0)
    ]));
  }
}, Eo = /* @__PURE__ */ ct(ao, [["__scopeId", "data-v-ba08d068"]]);
const fo = (e) => (yr("data-v-967c9ba7"), e = e(), xr(), e), po = /* @__PURE__ */ fo(() => /* @__PURE__ */ K("div", { class: "icon-container" }, null, -1)), ho = ["onClick"], _o = { class: "f-option-label" }, go = {
  __name: "FSelect",
  props: {
    label: String,
    placeholder: String,
    modelValue: [String, Number, Object],
    emitValue: { type: Boolean, default: !1 },
    options: Array,
    optionValue: { type: String, default: "id" },
    optionLabel: { type: String, default: "name" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ie(), r = ie(!1);
    let s = !1;
    const i = () => {
      r.value = !r.value;
    }, c = () => {
      s = !0;
    }, u = () => {
      s = !1;
    }, a = () => {
      s || (r.value = !1);
    };
    Ir(() => n.modelValue, (l) => {
      n.emitValue ? o.value = n.options.find(
        (f) => f[n.optionValue] === l
      ) : o.value = l;
    }, {
      immediate: !0
    });
    const d = (l) => {
      t("update:modelValue", n.emitValue ? l[n.optionValue] : l), s = !1, a();
    };
    return (l, f) => (j(), J("div", {
      class: "entire-container",
      onFocusout: a
    }, [
      K("button", {
        class: "f-select-container",
        onClick: i
      }, [
        K("div", null, xe(o.value[e.optionValue] ? o.value[e.optionLabel] : o.value), 1),
        po
      ]),
      r.value ? (j(), J("ul", {
        key: 0,
        class: "f-option-container",
        onMouseenter: c,
        onMouseleave: u
      }, [
        (j(!0), J(rt, null, Tr(e.options, (_) => (j(), J("li", {
          class: "f-option",
          onClick: (b) => d(_)
        }, [
          K("div", _o, xe(_[e.optionLabel]), 1)
        ], 8, ho))), 256))
      ], 32)) : cn("", !0)
    ], 32));
  }
}, wo = /* @__PURE__ */ ct(go, [["__scopeId", "data-v-967c9ba7"]]);
const mo = {
  __name: "FSeperator",
  props: {
    vertical: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (j(), J("div", {
      class: de(e.vertical ? "vertical" : "horizontal")
    }, null, 2));
  }
}, No = /* @__PURE__ */ ct(mo, [["__scopeId", "data-v-2872045c"]]);
export {
  Eo as FInput,
  wo as FSelect,
  No as FSeperator
};
