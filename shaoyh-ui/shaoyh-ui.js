import { defineComponent as _, computed as Y, ref as m, onMounted as b, openBlock as f, createElementBlock as h, normalizeStyle as w, unref as v, createElementVNode as x, renderSlot as L, Fragment as k, renderList as S, toDisplayString as N, pushScopeId as I, popScopeId as T, withDirectives as C, vShow as A, createCommentVNode as B, isRef as M, vModelText as j } from "vue";
const D = _({
  name: "YhFlipCard"
}), F = /* @__PURE__ */ _({
  ...D,
  props: {
    speed: {
      type: String,
      default: "middle",
      validator: (o) => ["fast", "middle", "slow"].indexOf(o) > -1
    },
    shadow: {
      type: Array,
      default: []
    },
    shadow2: {
      type: Array,
      default: []
    },
    angle: {
      type: Number,
      default: 180
    },
    pers: {
      type: Number,
      default: 500
    },
    reversal: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !1
    },
    width: {
      type: [String, Number],
      default: 300
    },
    height: {
      type: [String, Number],
      default: 300
    },
    rounded: {
      type: Boolean,
      default: !1
    }
  },
  setup(o, { expose: p }) {
    const e = o;
    let r = Y(() => {
      let u = {};
      return u.width = `${e.width}px`, u.height = `${e.height}px`, u["border-radius"] = e.rounded ? "10px" : "0px", u;
    }), s = m(null), i = m(null), d = m(null), c = 0;
    e.reversal ? c = -e.angle : c = e.angle;
    const a = () => {
      s.value.onmouseover = () => {
        i.value.style.transform = `rotateY(${-c}deg)`, d.value.style.transform = `rotateY(${180 - c}deg)`;
      }, s.value.onmouseout = () => {
        i.value.style.transform = "rotateY(0deg)", d.value.style.transform = "rotateY(180deg)";
      };
    }, l = () => {
      s.value.onmouseover = null, s.value.onmouseout = null;
    }, t = () => {
      a();
    }, n = () => {
      l();
    }, y = () => {
      i.value.style.transform = `rotateY(${-c}deg)`, d.value.style.transform = `rotateY(${180 - c}deg)`;
    }, g = () => {
      i.value.style.transform = "rotateY(0deg)", d.value.style.transform = "rotateY(180deg)";
    };
    return b(() => {
      let u = 1.5;
      switch (e.speed) {
        case "fast":
          u = 0.5;
          break;
        case "middle":
          u = 1.5;
          break;
        case "slow":
          u = 3;
          break;
      }
      i.value.style.cssText += `transition: all ${u}s linear`, d.value.style.cssText += `transition: all ${u}s linear`, e.shadow.length > 0 && (i.value.style.cssText += `box-shadow: ${e.shadow[0]}px ${e.shadow[1]}px ${e.shadow[2]}px ${e.shadow[3]}px ${e.shadow[4]}`, e.shadow2.length > 0 ? d.value.style.cssText += `box-shadow: ${e.shadow2[0]}px ${e.shadow2[1]}px ${e.shadow2[2]}px ${e.shadow2[3]}px ${e.shadow2[4]}` : d.value.style.cssText += `box-shadow: ${e.shadow[0]}px ${e.shadow[1]}px ${e.shadow[2]}px ${e.shadow[3]}px ${e.shadow[4]}`), e.hover && a(), s.value.style.perspective = `${e.pers}px`;
    }), p({
      openAnimate: t,
      closeAnimate: n,
      rotate: y,
      noRotate: g
    }), (u, R) => (f(), h("div", {
      class: "yh-flip-card",
      ref_key: "flipCardRef",
      ref: s,
      style: w(v(r))
    }, [
      x("div", {
        class: "front",
        ref_key: "frontRef",
        ref: i,
        style: w(v(r))
      }, [
        L(u.$slots, "front", {}, void 0, !0)
      ], 4),
      x("div", {
        class: "back",
        ref_key: "backRef",
        ref: d,
        style: w(v(r))
      }, [
        L(u.$slots, "back", {}, void 0, !0)
      ], 4)
    ], 4));
  }
});
const $ = (o, p) => {
  const e = o.__vccOpts || o;
  for (const [r, s] of p)
    e[r] = s;
  return e;
}, V = /* @__PURE__ */ $(F, [["__scopeId", "data-v-de17ec40"]]), E = (o) => (I("data-v-f8befbb7"), o = o(), T(), o), z = { class: "ul" }, H = ["onClick"], O = { class: "yh-title" }, q = /* @__PURE__ */ E(() => /* @__PURE__ */ x("div", { class: "yh-line yh-line1" }, null, -1)), P = /* @__PURE__ */ E(() => /* @__PURE__ */ x("div", { class: "yh-line yh-line2" }, null, -1)), U = [
  q,
  P
], X = _({
  name: "YhAnimateNavigation"
}), Z = /* @__PURE__ */ _({
  ...X,
  props: {
    NavList: {
      type: Array,
      required: !0
    },
    size: {
      type: String,
      default: "middle",
      validator(o) {
        return ["large", "middle", "mini"].includes(o);
      }
    }
  },
  setup(o, { expose: p }) {
    const e = o;
    let r = m(null);
    const s = () => {
      r.value.classList.toggle("yh-active");
    };
    return b(() => {
      switch (e.size) {
        case "large":
          r.value.style.padding = "30px";
          break;
        case "middle":
          r.value.style.padding = "15px";
          break;
        case "mini":
          r.value.style.padding = "0px";
          break;
      }
    }), p({
      change: s
    }), (i, d) => (f(), h("nav", {
      class: "yh-animate-navigation yh-active",
      ref_key: "NavRef",
      ref: r
    }, [
      x("ul", z, [
        (f(!0), h(k, null, S(o.NavList, (c, a) => (f(), h("li", {
          class: "li",
          key: a,
          onClick: c.fun
        }, [
          x("span", O, N(c.title), 1)
        ], 8, H))), 128))
      ]),
      x("button", {
        class: "yh-icon",
        onClick: s
      }, U)
    ], 512));
  }
});
const G = /* @__PURE__ */ $(Z, [["__scopeId", "data-v-f8befbb7"]]), J = { class: "yh-blurry-load" }, K = ["src", "alt"], Q = _({
  name: "YhBlurryLoad"
}), W = /* @__PURE__ */ _({
  ...Q,
  props: {
    src: {
      type: String
    },
    onLoad: {
      type: Boolean,
      default: !1
    },
    speed: {
      type: Number,
      default: 5
    },
    fit: {
      type: String,
      default: "contain",
      validater: (o) => ["fill", "contain", "cover", "none", "scale-down"].includes(o)
    },
    alt: {
      type: String,
      default: ""
    }
  },
  emits: ["finished"],
  setup(o, { emit: p }) {
    const e = o;
    let r = Y(() => {
      let t = {};
      return t["object-fit"] = e.fit, t;
    }), s = m(null), i = m(0), d = m(null), c = null;
    function a() {
      i.value++, i.value > 99 && (clearInterval(c), p("finished")), d.value != null && s.value != null && (d.value.style.opacity = l(i.value, 0, 100, 1, 0), s.value.style.filter = `blur(${l(i.value, 0, 100, 30, 0)}px)`);
    }
    const l = (t, n, y, g, u) => (t - n) * (u - g) / (y - n) + g;
    return b(() => {
      let t = Math.round(e.speed);
      t = t < 0 ? -t : t, c = setInterval(a, 150 / t);
    }), (t, n) => (f(), h("div", J, [
      C(x("div", {
        ref_key: "progressRef",
        ref: d,
        class: "yh-progress"
      }, N(v(i)) + "%", 513), [
        [A, e.onLoad]
      ]),
      e.src ? (f(), h("img", {
        key: 0,
        src: e.src,
        class: "yh-img",
        ref_key: "bgRef",
        ref: s,
        style: w(v(r)),
        alt: e.alt
      }, null, 12, K)) : B("", !0)
    ]));
  }
});
const ee = /* @__PURE__ */ $(W, [["__scopeId", "data-v-c775bc47"]]), te = ["id"], le = _({
  name: "YhBoxesBackground"
}), ae = /* @__PURE__ */ _({
  ...le,
  props: {
    row: {
      type: Number,
      default: 4
    },
    col: {
      type: Number,
      default: 4
    },
    src: {
      type: String,
      default: "https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif"
    },
    rotate: {
      type: Boolean,
      default: !1
    },
    solid: {
      type: Boolean,
      default: !1
    }
  },
  setup(o, { expose: p }) {
    const e = o;
    let r = m(null), s = `url(${e.src})`, i = [], d = [];
    for (let t = 0; t < e.row; t++) {
      let n = { id: `${t + 1}` };
      i.push(n);
    }
    for (let t = 0; t < e.col; t++) {
      let n = { id: `${t + 1}` };
      d.push(n);
    }
    const c = () => {
      e.solid ? r.value.classList.toggle("yh-split") : r.value.classList.toggle("yh-split-3D");
      let t = document.getElementsByName("yh-boxRow");
      for (let n = 0; n < t.length; n++)
        t[n].classList.toggle("yh-long");
      for (let n = 0; n < i.length; n++)
        for (let y = 0; y < d.length; y++) {
          let g = document.getElementById(`yh-${n + 1}_${y + 1}`);
          e.rotate && (g == null || g.classList.toggle("yh-rotate"));
        }
    };
    let a = 100, l = 100;
    return a = 400 / e.col, l = 400 / e.row, b(() => {
      a = 400 / e.row, l = 400 / e.col;
      for (let t = 0; t < i.length; t++)
        for (let n = 0; n < d.length; n++) {
          let y = document.getElementById(`yh-${t + 1}_${n + 1}`);
          y && (y.style.backgroundImage = s, y.style.height = `${a}px`, y.style.width = `${l}px`, y.style.backgroundPosition = `${-n * l}px ${-t * a}px`);
        }
    }), p({
      change: c
    }), (t, n) => (f(), h("div", {
      ref_key: "boxRef",
      ref: r,
      class: "yh-boxes-background"
    }, [
      (f(!0), h(k, null, S(v(i), (y, g) => (f(), h("div", {
        key: g,
        name: "yh-boxRow",
        class: "yh-boxRow"
      }, [
        (f(!0), h(k, null, S(v(d), (u, R) => (f(), h("div", {
          key: R,
          class: "yh-boxCol",
          id: `yh-${y.id}_${u.id}`
        }, null, 8, te))), 128))
      ]))), 128))
    ], 512));
  }
});
const se = /* @__PURE__ */ $(ae, [["__scopeId", "data-v-99d2062e"]]), oe = _({
  name: "YhClickAppear"
}), ne = /* @__PURE__ */ _({
  ...oe,
  props: {
    animate: {
      type: String,
      default: "enlarge",
      validator: (o) => ["enlarge", "rise"].indexOf(o) > -1
    },
    icon: {
      type: String,
      default: "circle"
    },
    color: {
      type: [String, Array],
      default: "black"
    },
    blink: {
      type: Boolean,
      default: !1
    },
    src: {
      type: String
    },
    width: {
      type: [String, Number],
      default: "16"
    },
    height: {
      type: [String, Number],
      default: "16"
    },
    duration: {
      type: [String, Number],
      default: 1
    }
  },
  setup(o, { expose: p }) {
    const e = o;
    let r = document.getElementsByTagName("head")[0].innerHTML;
    r += '<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet">', document.getElementsByTagName("head")[0].innerHTML = r;
    const s = (a) => {
      const l = document.createElement("i");
      switch (l.classList.add("yh-click-appear-basic"), l.classList.add("fas"), e.animate) {
        case "enlarge":
          l.classList.add("yh-click-appear-enlarge");
          break;
        case "rise":
          l.classList.add("yh-click-appear-rise");
          break;
      }
      l.style.animationDuration = `${e.duration}s`;
      const t = a.clientX, n = a.clientY;
      l.style.position = "absolute", l.style.top = `${n}px`, l.style.left = `${t}px`, typeof e.color == "string" ? l.style.color = e.color : e.blink ? setInterval(() => {
        l.style.color = e.color[Math.floor(Math.random() * e.color.length)];
      }) : l.style.color = e.color[Math.floor(Math.random() * e.color.length)], e.src ? (l.style.background = `url(${e.src})`, l.style.width = `${+e.width}px`, l.style.height = `${+e.height}px`) : l.classList.add(`fa-${e.icon}`), document.body.appendChild(l), setTimeout(() => l.remove(), 1e3 * Number(e.duration));
    }, i = (a) => {
      s(a);
    }, d = () => {
      document.addEventListener("mouseup", i);
    }, c = () => {
      document.removeEventListener("mouseup", i);
    };
    return d(), p({
      clickTo: d,
      removeClickTo: c
    }), (a, l) => null;
  }
});
const re = { class: "yh-range-slider" }, ie = ["min", "max"], de = {
  key: 0,
  class: "yh-range-label"
}, ce = _({
  name: "YhRangeSlider"
}), ue = /* @__PURE__ */ _({
  ...ce,
  props: {
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: 50
    },
    write: {
      type: Boolean,
      default: !1
    },
    width: {
      type: [Number, String],
      default: 300
    }
  },
  setup(o, { expose: p }) {
    const e = o;
    let r = m(null), s = m(+e.value);
    const i = (a) => {
      var l;
      s.value = (l = a == null ? void 0 : a.target) == null ? void 0 : l.value;
    }, d = () => {
      c(s.value);
    };
    function c(a = s.value) {
      (a < +e.min || a > +e.max) && console.error("\u6ED1\u52A8\u6761\u8BBE\u5B9A\u7684\u503C\u4E0D\u5728\u6700\u5C0F\u548C\u6700\u5927\u7684\u8303\u56F4\u4E4B\u5185"), r.value.value = a, s.value = a;
    }
    return b(() => {
      r.value.style.width = `${+e.width}px`, c();
    }), p({
      range: s,
      changeTo: c
    }), (a, l) => (f(), h("div", re, [
      x("input", {
        ref_key: "yhrangeRef",
        ref: r,
        type: "range",
        class: "yh-range-input",
        min: e.min,
        max: e.max,
        onInput: i
      }, null, 40, ie),
      e.write ? B("", !0) : (f(), h("div", de, N(v(s)), 1)),
      e.write ? C((f(), h("input", {
        key: 1,
        class: "yh-range-label-input",
        type: "text",
        "onUpdate:modelValue": l[0] || (l[0] = (t) => M(s) ? s.value = t : s = t),
        onInput: d
      }, null, 544)), [
        [j, v(s)]
      ]) : B("", !0)
    ]));
  }
});
const pe = /* @__PURE__ */ $(ue, [["__scopeId", "data-v-fd84a058"]]), ye = [V, G, ee, se, ne, pe], he = {
  install(o) {
    ye.forEach((p) => {
      o.component(p.name, p);
    });
  }
};
export {
  he as default
};
