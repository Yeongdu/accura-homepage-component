import { defineComponent as w, ref as v, openBlock as i, createElementBlock as r, Fragment as b, createElementVNode as l, normalizeClass as _, renderSlot as I, pushScopeId as R, popScopeId as q, renderList as y, toDisplayString as k, normalizeStyle as M, withDirectives as B, vModelText as Y, onMounted as E, onUnmounted as O, computed as S, createBlock as N, withCtx as P, unref as G, watch as X, vShow as J } from "vue";
const K = (o) => (R("data-v-cfe0ca7e"), o = o(), q(), o), Q = { class: "flex items-center" }, W = /* @__PURE__ */ K(() => /* @__PURE__ */ l("div", null, null, -1)), Z = /* @__PURE__ */ w({
  __name: "HeaderModalButton",
  setup(o) {
    const n = v(!1), e = v(!1), s = v(1), t = v(!1), a = () => {
      n.value = !1, e.value = !1, setTimeout(() => {
        s.value = 1;
      }, 700), document.body.style.overflow = "auto";
    }, c = () => {
      n.value === !0 ? (n.value = !1, document.body.style.overflow = "auto") : (e.value = !0, s.value = 5, setTimeout(() => {
        n.value = !0;
      }, 700), document.body.style.overflow = "hidden");
    }, d = () => {
      s.value === 1 && (t.value = !0);
    }, u = () => {
      t.value = !1;
    };
    return (f, x) => (i(), r(b, null, [
      l("div", Q, [
        l("i", {
          class: _([[
            t.value && s.value == 1 ? "hover:text-white hover:bg-[#A9141A] hover:rotate-90 " : "",
            e.value ? "scale-[70]" : "scale-100",
            s.value != 1 ? "bg-[#A9141A] border-none" : "xi-drag-vertical"
          ], "z-[2222] w-[4.5rem] h-[4.5rem] transition-transform duration-500 delay-0 hamburger-nav-button cursor-pointer text-3xl lg:text-5xl"]),
          onClick: c,
          onMouseover: d,
          onMouseout: u
        }, null, 34)
      ]),
      l("div", {
        class: _(["hamburger-nav-inside", [n.value ? "visible opacity-100" : "invisible opacity-0"]])
      }, [
        l("div", { class: "flex items-center justify-between mb-10 large-container-custom mt-14" }, [
          W,
          l("button", { onClick: a }, [
            l("i", {
              class: "xi-close text-4xl text-white bg-[#981E23] w-24 h-24 rounded-full cursor-pointer hover:rotate-90 flex items-center justify-center transition-transform duration-500 delay-0",
              onClick: a
            })
          ])
        ]),
        I(f.$slots, "inside-modal", {}, void 0, !0)
      ], 2)
    ], 64));
  }
}), C = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [s, t] of n)
    e[s] = t;
  return e;
}, Qe = /* @__PURE__ */ C(Z, [["__scopeId", "data-v-cfe0ca7e"]]), ee = { class: "focus-area" }, te = { class: "max-w-[76%]" }, le = /* @__PURE__ */ w({
  __name: "ListDeco",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(o) {
    const n = o;
    return (e, s) => (i(), r("div", null, [
      l("ul", ee, [
        (i(!0), r(b, null, y(n.list, (t, a) => (i(), r("li", { key: a }, [
          l("p", te, k(t.contents), 1)
        ]))), 128))
      ])
    ]));
  }
}), We = /* @__PURE__ */ C(le, [["__scopeId", "data-v-0cef9593"]]), L = (o) => (R("data-v-a2e32ff2"), o = o(), q(), o), se = { class: "relative flex flex-col items-start max-w-full lg:flex-row" }, ne = { class: "relative flex flex-row items-center overflow-hidden slider-container lg:flex-col lg:items-end lg:basis-1/2 lg:pr-28 2xl:pr-48" }, oe = ["disabled"], ae = /* @__PURE__ */ L(() => /* @__PURE__ */ l("i", { class: "xi-arrow-up" }, null, -1)), ie = [
  ae
], re = { class: "h-[300px] overflow-hidden hidden lg:block" }, ce = { class: "justify-between hidden h-full overflow-hidden slider lg:flex lg:flex-col" }, ue = ["onClick"], de = { class: "text-center select-none year" }, ve = ["disabled"], fe = /* @__PURE__ */ L(() => /* @__PURE__ */ l("i", { class: "xi-arrow-down" }, null, -1)), _e = [
  fe
], he = { class: "w-full overflow-hidden lg:hidden" }, pe = { class: "flex justify-between w-full overflow-hidden slider slider-small lg:hidden" }, me = ["onClick"], xe = { class: "year" }, ge = { class: "flex justify-between w-full mt-4 lg:hidden" }, be = ["disabled"], ye = /* @__PURE__ */ L(() => /* @__PURE__ */ l("i", { class: "xi-arrow-left" }, null, -1)), we = [
  ye
], $e = ["disabled"], ke = /* @__PURE__ */ L(() => /* @__PURE__ */ l("i", { class: "xi-arrow-right" }, null, -1)), Se = [
  ke
], Ie = { class: "relative flex w-full mt-8 content-container lg:basis-1/2 lg:pl-28 2xl:pl-48 sm:mt-12" }, Ce = ["max"], Me = /* @__PURE__ */ w({
  __name: "SlideScroll",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(o) {
    const n = o, e = v(0), s = v(100);
    function t() {
      e.value < n.list.length - 1 && (e.value = (e.value + 1) % n.list.length, s.value -= 100);
    }
    function a() {
      e.value > 0 && (e.value = (e.value - 1 + n.list.length) % n.list.length, s.value += 100);
    }
    function c(f) {
      return f === e.value;
    }
    function d(f) {
      f < e.value ? a() : f > e.value && t();
    }
    function u() {
      s.value = -100 * (e.value - 1);
    }
    return (f, x) => (i(), r("article", null, [
      l("div", se, [
        l("div", ne, [
          l("button", {
            class: "hidden mb-8 mr-24 slide-button lg:block",
            disabled: e.value === 0,
            onClick: a
          }, ie, 8, oe),
          l("div", re, [
            l("div", ce, [
              (i(!0), r(b, null, y(n.list, (h, g) => (i(), r("div", {
                key: h.key,
                class: _(["slide", { active: c(g) }]),
                style: M({ transform: `translateY(${s.value}%)` }),
                onClick: (T) => d(g)
              }, [
                l("div", de, k(h.key), 1)
              ], 14, ue))), 128))
            ])
          ]),
          l("button", {
            class: "hidden mt-8 mb-12 mr-24 slide-button lg:block",
            disabled: e.value === n.list.length - 1,
            onClick: t
          }, _e, 8, ve)
        ]),
        l("div", he, [
          l("div", pe, [
            (i(!0), r(b, null, y(n.list, (h, g) => (i(), r("div", {
              key: h.key,
              class: _(["slide", { active: c(g) }]),
              style: M({ transform: `translateX(${s.value}%)` }),
              onClick: (T) => d(g)
            }, [
              l("div", xe, k(h.key), 1)
            ], 14, me))), 128))
          ])
        ]),
        l("div", ge, [
          l("button", {
            class: "slide-button",
            disabled: e.value === 0,
            onClick: a
          }, we, 8, be),
          l("button", {
            class: "slide-button",
            disabled: e.value === n.list.length - 1,
            onClick: t
          }, Se, 8, $e)
        ]),
        l("div", Ie, [
          B(l("input", {
            id: "range",
            "onUpdate:modelValue": x[0] || (x[0] = (h) => e.value = h),
            class: "range-slider absolute hidden lg:block cursor-pointer rotate-90 -left-60 top-[11.313rem] w-[29.625rem]",
            type: "range",
            min: "0",
            max: n.list.length - 1,
            onInput: u
          }, null, 40, Ce), [
            [
              Y,
              e.value,
              void 0,
              { number: !0 }
            ]
          ]),
          l("ul", {
            class: _(["w-full content", { active: e.value >= 0 }])
          }, [
            (i(!0), r(b, null, y(n.list[e.value].contents, (h) => (i(), r("li", {
              key: h,
              class: "w-full mb-6 text-lg font-semibold sm:mb-11 text-left"
            }, k(h), 1))), 128))
          ], 2)
        ])
      ])
    ]));
  }
}), Ze = /* @__PURE__ */ C(Me, [["__scopeId", "data-v-a2e32ff2"]]), z = /* @__PURE__ */ w({
  __name: "AppearEffect",
  emits: ["show"],
  setup(o, { emit: n }) {
    const e = n, s = v(!1), t = v(null), a = new IntersectionObserver((c) => {
      c.forEach((d) => {
        d.isIntersecting && !s.value && (s.value = !0, e("show", !0), t.value && a.unobserve(t.value));
      });
    });
    return E(() => {
      t.value && a.observe(t.value);
    }), O(() => {
      t.value && a.unobserve(t.value);
    }), (c, d) => (i(), r("div", {
      ref_key: "domRef",
      ref: t,
      class: _(["fade-animation", { "is-visible": s.value }])
    }, [
      I(c.$slots, "default")
    ], 2));
  }
}), Te = /* @__PURE__ */ w({
  __name: "TextShow",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(o) {
    const n = o, e = v(!1), t = S(() => n.text).value.split(""), a = S(() => n.intervalMs || 200);
    function c() {
      e.value = !0;
    }
    return (d, u) => (i(), N(z, { onShow: c }, {
      default: P(() => [
        (i(!0), r(b, null, y(G(t), (f, x) => (i(), r("span", {
          key: x,
          style: M({ "animation-delay": `${x * a.value}ms` }),
          class: _(e.value ? "rotate-show-text" : "")
        }, k(f), 7))), 128))
      ]),
      _: 1
    }));
  }
}), et = /* @__PURE__ */ C(Te, [["__scopeId", "data-v-32c2999e"]]), Ae = { class: "whitespace-pre-wrap" }, tt = /* @__PURE__ */ w({
  __name: "TextTyping",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(o) {
    const n = o, e = S(() => n.text.replace(/\\n/g, `
`).split("")), s = S(() => n.intervalMs || 100), t = v(0), a = v("");
    let c = 0;
    const d = S(() => e.value.length);
    function u() {
      t.value < d.value ? (a.value += e.value[t.value] || "", t.value += 1) : clearInterval(c);
    }
    function f() {
      a.value = "", t.value = 0, c = setInterval(u, s.value);
    }
    function x() {
      f();
    }
    return X(
      () => [n.text, n.intervalMs],
      () => {
        clearInterval(c), f();
      }
    ), (h, g) => (i(), N(z, { onShow: x }, {
      default: P(() => [
        l("p", Ae, k(a.value), 1)
      ]),
      _: 1
    }));
  }
}), lt = /* @__PURE__ */ w({
  __name: "FadeAnimation",
  props: {
    transitionDurationMs: {
      type: Number,
      default: 700,
      required: !1
    },
    transitionDelayMs: {
      type: Number,
      default: 300,
      required: !1
    }
  },
  setup(o) {
    const n = o, e = S(() => n.transitionDelayMs), s = S(() => n.transitionDurationMs), t = v(!1), a = v(null), c = new IntersectionObserver((d) => {
      d.forEach((u) => {
        u.isIntersecting && !t.value && (t.value = !0, a.value && c.unobserve(a.value));
      });
    });
    return E(() => {
      a.value && c.observe(a.value);
    }), O(() => {
      a.value && c.unobserve(a.value);
    }), (d, u) => (i(), r("div", {
      ref_key: "domRef",
      ref: a,
      style: M({ transition: `${s.value}ms ${e.value}ms` }),
      class: _(["fade-animation", { "is-visible": t.value }])
    }, [
      I(d.$slots, "default")
    ], 6));
  }
}), j = (o) => (R("data-v-19c6e92c"), o = o(), q(), o), De = { class: "w-full h-[26.875rem] sm:h-[30.625rem] sm:w-[30.625rem] xl:h-[31.25rem] xl:w-[37.8125rem] mx-auto" }, Ee = { class: "relative mx-auto -z-[1] h-full w-full sm:h-[30rem] sm:w-[30rem]" }, Le = /* @__PURE__ */ j(() => /* @__PURE__ */ l("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "none",
  stroke: "#FBECEC",
  "stroke-width": "2",
  "stroke-dasharray": "3,3",
  class: "rotated-circle"
}, null, -1)), Re = /* @__PURE__ */ j(() => /* @__PURE__ */ l("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "#D74646",
  class: "scaled-circle opacity-10"
}, null, -1)), qe = /* @__PURE__ */ j(() => /* @__PURE__ */ l("circle", {
  cx: "50%",
  cy: "50%",
  r: "30%",
  fill: "#D74646",
  class: ""
}, null, -1)), Oe = [
  Le,
  Re,
  qe
], je = { class: "font-[Poppins] font-semibold text-2xl sm:text-[2.625rem] text-white absolute z-10 w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }, Be = { class: "inline" }, Ne = { class: "w-full flex flex-col gap-6 2xl:h-auto 2xl:gap-[14.6875rem] items-center justify-center 2xl:absolute" }, Pe = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, Xe = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, ze = /* @__PURE__ */ w({
  __name: "CenteringEffect",
  props: {
    list: {
      type: Array,
      requred: !0,
      validator: (o) => !Array.isArray(o) || o.length !== 4 ? (console.error("list props : 4가지 항목 Array"), !1) : !0,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      requred: !1,
      default: "title"
    }
  },
  setup(o) {
    const n = o, e = v(!1), s = v(null), t = new IntersectionObserver((a) => {
      a.forEach((c) => {
        c.isIntersecting && !e.value && (e.value = !0, s.value && t.unobserve(s.value));
      });
    });
    return E(() => {
      s.value && t.observe(s.value);
    }), O(() => {
      s.value && t.unobserve(s.value);
    }), (a, c) => (i(), r("div", {
      ref_key: "domRef",
      ref: s,
      class: _(["2xl:flex items-center justify-center", { "is-visible": e.value }])
    }, [
      l("div", De, [
        l("div", Ee, [
          (i(), r("svg", {
            ref_key: "domRef",
            ref: s,
            class: _(["circle-wrap", { "is-visible": e.value }]),
            width: "100%",
            height: "100%"
          }, Oe, 2)),
          l("div", je, [
            l("h2", Be, k(o.title), 1)
          ])
        ])
      ]),
      l("div", Ne, [
        l("div", Pe, [
          (i(!0), r(b, null, y(n.list.slice(0, 2), (d, u) => (i(), r("div", {
            key: u,
            ref_for: !0,
            ref: "domRef" + u,
            class: _(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (u + 1), { "is-visible": e.value }]])
          }, [
            I(a.$slots, "default", {
              item: d,
              index: u
            }, void 0, !0)
          ], 2))), 128))
        ]),
        l("div", Xe, [
          (i(!0), r(b, null, y(n.list.slice(2, 4), (d, u) => (i(), r("div", {
            key: u,
            ref_for: !0,
            ref: "domRef" + u,
            class: _(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (u + 3), { "is-visible": e.value }]])
          }, [
            I(a.$slots, "default", {
              item: d,
              index: u
            }, void 0, !0)
          ], 2))), 128))
        ])
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ C(ze, [["__scopeId", "data-v-19c6e92c"]]), Ve = { class: "relative" }, Fe = { class: "flex justify-center mt-8" }, He = { class: "flex items-center justify-between w-40" }, Ue = ["onClick"], Ye = 50, Ge = /* @__PURE__ */ w({
  __name: "SlidePlayPause",
  props: {
    listLength: {
      type: Number,
      default: 3,
      required: !0
    },
    intervalMs: {
      type: Number,
      default: 2e3,
      required: !1
    },
    height: {
      type: String,
      default: "18rem",
      required: !1
    }
  },
  emits: ["update:sindex"],
  setup(o, { emit: n }) {
    const e = n, s = o, t = v(0), a = v(0), c = v(!1), d = v(0);
    let u = 0;
    const f = v(!0);
    function x() {
      t.value = (t.value + 1) % s.listLength;
    }
    function h() {
      t.value = (t.value - 1 + s.listLength) % s.listLength;
    }
    function g() {
      u = setInterval(x, s.intervalMs);
    }
    function T() {
      u !== 0 && clearInterval(u), u = 0;
    }
    function A() {
      f.value && (T(), g());
    }
    function V(p) {
      t.value = p, A(), e("update:sindex", t.value);
    }
    function F() {
      u ? T() : g(), f.value = !f.value;
    }
    const H = (p) => {
      c.value = !0;
      let m;
      p.touches && p.touches[0] && (m = p.touches[0].clientX), m && (a.value = m);
    }, U = (p) => {
      if (c.value && p.changedTouches[0]) {
        d.value = p.changedTouches ? p.changedTouches[0].clientX : 0;
        const m = d.value - a.value;
        Math.abs(m) >= Ye && (m > 0 ? h() : x(), A()), c.value = !1;
      }
    };
    return g(), E(() => {
      e("update:sindex", t.value), X(() => t.value, (p) => {
        e("update:sindex", p);
      });
    }), (p, m) => (i(), r("div", null, [
      l("ul", Ve, [
        (i(!0), r(b, null, y(s.listLength, (D, $) => B((i(), r("li", {
          key: $,
          class: _({ block: t.value === $ }),
          style: M({ height: `${s.height}` }),
          onTouchstart: H,
          onTouchend: U
        }, [
          I(p.$slots, "slideContents", {}, void 0, !0)
        ], 38)), [
          [J, t.value === $]
        ])), 128))
      ]),
      l("div", Fe, [
        l("span", He, [
          l("i", {
            class: _(["text-xl", [f.value ? "xi-pause" : "xi-play"]]),
            onClick: m[0] || (m[0] = (D) => F())
          }, null, 2),
          l("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_prev.svg)]",
            onClick: m[1] || (m[1] = (D) => (h(), A()))
          }),
          (i(!0), r(b, null, y(s.listLength, (D, $) => (i(), r("span", {
            key: $,
            class: _(["dot", { active: t.value === $ }]),
            onClick: (Je) => V($)
          }, null, 10, Ue))), 128)),
          l("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_next.svg)]",
            onClick: m[2] || (m[2] = (D) => (x(), A()))
          })
        ])
      ])
    ]));
  }
}), nt = /* @__PURE__ */ C(Ge, [["__scopeId", "data-v-8ed36c18"]]);
export {
  st as CenteringEffect,
  lt as FadeAnimation,
  Qe as HeaderModalButton,
  We as ListDeco,
  nt as SlidePlayPause,
  Ze as SlideScroll,
  et as TextShow,
  tt as TextTyping
};
