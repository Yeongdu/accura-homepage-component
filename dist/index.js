import { defineComponent as w, ref as v, openBlock as r, createElementBlock as c, Fragment as x, createElementVNode as e, normalizeClass as m, renderSlot as C, pushScopeId as L, popScopeId as q, renderList as y, toDisplayString as k, normalizeStyle as M, withDirectives as N, vModelText as V, computed as I, unref as H, watch as O, onMounted as R, onUnmounted as P, vShow as U } from "vue";
const Y = (o) => (L("data-v-cfe0ca7e"), o = o(), q(), o), G = { class: "flex items-center" }, J = /* @__PURE__ */ Y(() => /* @__PURE__ */ e("div", null, null, -1)), K = /* @__PURE__ */ w({
  __name: "HeaderModalButton",
  setup(o) {
    const n = v(!1), t = v(!1), s = v(1), l = v(!1), a = () => {
      n.value = !1, t.value = !1, setTimeout(() => {
        s.value = 1;
      }, 700), document.body.style.overflow = "auto";
    }, u = () => {
      n.value === !0 ? (n.value = !1, document.body.style.overflow = "auto") : (t.value = !0, s.value = 5, setTimeout(() => {
        n.value = !0;
      }, 700), document.body.style.overflow = "hidden");
    }, d = () => {
      s.value === 1 && (l.value = !0);
    }, i = () => {
      l.value = !1;
    };
    return (f, b) => (r(), c(x, null, [
      e("div", G, [
        e("i", {
          class: m([[
            l.value && s.value == 1 ? "hover:text-white hover:bg-[#A9141A] hover:rotate-90 " : "",
            t.value ? "scale-[70]" : "scale-100",
            s.value != 1 ? "bg-[#A9141A] border-none" : "xi-drag-vertical"
          ], "z-[2222] w-[4.5rem] h-[4.5rem] transition-transform duration-500 delay-0 hamburger-nav-button cursor-pointer text-3xl lg:text-5xl"]),
          onClick: u,
          onMouseover: d,
          onMouseout: i
        }, null, 34)
      ]),
      e("div", {
        class: m(["hamburger-nav-inside", [n.value ? "visible opacity-100" : "invisible opacity-0"]])
      }, [
        e("div", { class: "flex items-center justify-between mb-10 large-container-custom mt-14" }, [
          J,
          e("button", { onClick: a }, [
            e("i", {
              class: "xi-close text-4xl text-white bg-[#981E23] w-24 h-24 rounded-full cursor-pointer hover:rotate-90 flex items-center justify-center transition-transform duration-500 delay-0",
              onClick: a
            })
          ])
        ]),
        C(f.$slots, "inside-modal", {}, void 0, !0)
      ], 2)
    ], 64));
  }
}), S = (o, n) => {
  const t = o.__vccOpts || o;
  for (const [s, l] of n)
    t[s] = l;
  return t;
}, Ge = /* @__PURE__ */ S(K, [["__scopeId", "data-v-cfe0ca7e"]]), Q = { class: "focus-area" }, W = { class: "max-w-[76%]" }, Z = /* @__PURE__ */ w({
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
    return (t, s) => (r(), c("div", null, [
      e("ul", Q, [
        (r(!0), c(x, null, y(n.list, (l, a) => (r(), c("li", { key: a }, [
          e("p", W, k(l.contents), 1)
        ]))), 128))
      ])
    ]));
  }
}), Je = /* @__PURE__ */ S(Z, [["__scopeId", "data-v-0cef9593"]]), E = (o) => (L("data-v-a2e32ff2"), o = o(), q(), o), ee = { class: "relative flex flex-col items-start max-w-full lg:flex-row" }, te = { class: "relative flex flex-row items-center overflow-hidden slider-container lg:flex-col lg:items-end lg:basis-1/2 lg:pr-28 2xl:pr-48" }, le = ["disabled"], se = /* @__PURE__ */ E(() => /* @__PURE__ */ e("i", { class: "xi-arrow-up" }, null, -1)), ne = [
  se
], oe = { class: "h-[300px] overflow-hidden hidden lg:block" }, ae = { class: "justify-between hidden h-full overflow-hidden slider lg:flex lg:flex-col" }, ie = ["onClick"], re = { class: "text-center select-none year" }, ce = ["disabled"], ue = /* @__PURE__ */ E(() => /* @__PURE__ */ e("i", { class: "xi-arrow-down" }, null, -1)), de = [
  ue
], ve = { class: "w-full overflow-hidden lg:hidden" }, fe = { class: "flex justify-between w-full overflow-hidden slider slider-small lg:hidden" }, _e = ["onClick"], he = { class: "year" }, pe = { class: "flex justify-between w-full mt-4 lg:hidden" }, me = ["disabled"], xe = /* @__PURE__ */ E(() => /* @__PURE__ */ e("i", { class: "xi-arrow-left" }, null, -1)), ge = [
  xe
], ye = ["disabled"], be = /* @__PURE__ */ E(() => /* @__PURE__ */ e("i", { class: "xi-arrow-right" }, null, -1)), we = [
  be
], $e = { class: "relative flex w-full mt-8 content-container lg:basis-1/2 lg:pl-28 2xl:pl-48 sm:mt-12" }, ke = ["max"], Ie = /* @__PURE__ */ w({
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
    const n = o, t = v(0), s = v(100);
    function l() {
      t.value < n.list.length - 1 && (t.value = (t.value + 1) % n.list.length, s.value -= 100);
    }
    function a() {
      t.value > 0 && (t.value = (t.value - 1 + n.list.length) % n.list.length, s.value += 100);
    }
    function u(f) {
      return f === t.value;
    }
    function d(f) {
      f < t.value ? a() : f > t.value && l();
    }
    function i() {
      s.value = -100 * (t.value - 1);
    }
    return (f, b) => (r(), c("article", null, [
      e("div", ee, [
        e("div", te, [
          e("button", {
            class: "hidden mb-8 mr-24 slide-button lg:block",
            disabled: t.value === 0,
            onClick: a
          }, ne, 8, le),
          e("div", oe, [
            e("div", ae, [
              (r(!0), c(x, null, y(n.list, (_, g) => (r(), c("div", {
                key: _.key,
                class: m(["slide", { active: u(g) }]),
                style: M({ transform: `translateY(${s.value}%)` }),
                onClick: (T) => d(g)
              }, [
                e("div", re, k(_.key), 1)
              ], 14, ie))), 128))
            ])
          ]),
          e("button", {
            class: "hidden mt-8 mb-12 mr-24 slide-button lg:block",
            disabled: t.value === n.list.length - 1,
            onClick: l
          }, de, 8, ce)
        ]),
        e("div", ve, [
          e("div", fe, [
            (r(!0), c(x, null, y(n.list, (_, g) => (r(), c("div", {
              key: _.key,
              class: m(["slide", { active: u(g) }]),
              style: M({ transform: `translateX(${s.value}%)` }),
              onClick: (T) => d(g)
            }, [
              e("div", he, k(_.key), 1)
            ], 14, _e))), 128))
          ])
        ]),
        e("div", pe, [
          e("button", {
            class: "slide-button",
            disabled: t.value === 0,
            onClick: a
          }, ge, 8, me),
          e("button", {
            class: "slide-button",
            disabled: t.value === n.list.length - 1,
            onClick: l
          }, we, 8, ye)
        ]),
        e("div", $e, [
          N(e("input", {
            id: "range",
            "onUpdate:modelValue": b[0] || (b[0] = (_) => t.value = _),
            class: "range-slider absolute hidden lg:block cursor-pointer rotate-90 -left-60 top-[11.313rem] w-[29.625rem]",
            type: "range",
            min: "0",
            max: n.list.length - 1,
            onInput: i
          }, null, 40, ke), [
            [
              V,
              t.value,
              void 0,
              { number: !0 }
            ]
          ]),
          e("ul", {
            class: m(["w-full content", { active: t.value >= 0 }])
          }, [
            (r(!0), c(x, null, y(n.list[t.value].contents, (_) => (r(), c("li", {
              key: _,
              class: "w-full mb-6 text-lg font-semibold sm:mb-11 text-left"
            }, k(_), 1))), 128))
          ], 2)
        ])
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ S(Ie, [["__scopeId", "data-v-a2e32ff2"]]), Se = /* @__PURE__ */ w({
  __name: "TextShow",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(o) {
    const n = o, s = I(() => n.text).value.split(""), l = I(() => n.intervalMs || 200);
    return (a, u) => (r(), c("div", null, [
      (r(!0), c(x, null, y(H(s), (d, i) => (r(), c("span", {
        key: i,
        style: M({ "animation-delay": `${i * l.value}ms` }),
        class: "rotate-show-text"
      }, k(d), 5))), 128))
    ]));
  }
}), Qe = /* @__PURE__ */ S(Se, [["__scopeId", "data-v-2fc7cc41"]]), Ce = { class: "whitespace-pre-wrap" }, We = /* @__PURE__ */ w({
  __name: "TextTyping",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(o) {
    const n = o, t = I(() => n.text.replace(/\\n/g, `
`).split("")), s = I(() => n.intervalMs || 100), l = v(0), a = v("");
    let u = 0;
    const d = I(() => t.value.length);
    function i() {
      l.value < d.value ? (a.value += t.value[l.value] || "", l.value += 1) : clearInterval(u);
    }
    function f() {
      a.value = "", l.value = 0, u = setInterval(i, s.value);
    }
    return f(), O(
      () => [n.text, n.intervalMs],
      () => {
        clearInterval(u), f();
      }
    ), (b, _) => (r(), c("p", Ce, k(a.value), 1));
  }
}), Ze = /* @__PURE__ */ w({
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
    const n = o, t = I(() => n.transitionDelayMs), s = I(() => n.transitionDurationMs), l = v(!1), a = v(null), u = new IntersectionObserver((d) => {
      d.forEach((i) => {
        i.isIntersecting && !l.value && (l.value = !0, a.value && u.unobserve(a.value));
      });
    });
    return R(() => {
      a.value && u.observe(a.value);
    }), P(() => {
      a.value && u.unobserve(a.value);
    }), (d, i) => (r(), c("div", {
      ref_key: "domRef",
      ref: a,
      style: M({ transition: `${s.value}ms ${t.value}ms` }),
      class: m(["fade-animation", { "is-visible": l.value }])
    }, [
      C(d.$slots, "default")
    ], 6));
  }
}), j = (o) => (L("data-v-19c6e92c"), o = o(), q(), o), Me = { class: "w-full h-[26.875rem] sm:h-[30.625rem] sm:w-[30.625rem] xl:h-[31.25rem] xl:w-[37.8125rem] mx-auto" }, Te = { class: "relative mx-auto -z-[1] h-full w-full sm:h-[30rem] sm:w-[30rem]" }, Ae = /* @__PURE__ */ j(() => /* @__PURE__ */ e("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "none",
  stroke: "#FBECEC",
  "stroke-width": "2",
  "stroke-dasharray": "3,3",
  class: "rotated-circle"
}, null, -1)), De = /* @__PURE__ */ j(() => /* @__PURE__ */ e("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "#D74646",
  class: "scaled-circle opacity-10"
}, null, -1)), Ee = /* @__PURE__ */ j(() => /* @__PURE__ */ e("circle", {
  cx: "50%",
  cy: "50%",
  r: "30%",
  fill: "#D74646",
  class: ""
}, null, -1)), Le = [
  Ae,
  De,
  Ee
], qe = { class: "font-[Poppins] font-semibold text-2xl sm:text-[2.625rem] text-white absolute z-10 w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }, Re = { class: "inline" }, je = { class: "w-full flex flex-col gap-6 2xl:h-auto 2xl:gap-[14.6875rem] items-center justify-center 2xl:absolute" }, Ne = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, Oe = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, Pe = /* @__PURE__ */ w({
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
    const n = o, t = v(!1), s = v(null), l = new IntersectionObserver((a) => {
      a.forEach((u) => {
        u.isIntersecting && !t.value && (t.value = !0, s.value && l.unobserve(s.value));
      });
    });
    return R(() => {
      s.value && l.observe(s.value);
    }), P(() => {
      s.value && l.unobserve(s.value);
    }), (a, u) => (r(), c("div", {
      ref_key: "domRef",
      ref: s,
      class: m(["2xl:flex items-center justify-center", { "is-visible": t.value }])
    }, [
      e("div", Me, [
        e("div", Te, [
          (r(), c("svg", {
            ref_key: "domRef",
            ref: s,
            class: m(["circle-wrap", { "is-visible": t.value }]),
            width: "100%",
            height: "100%"
          }, Le, 2)),
          e("div", qe, [
            e("h2", Re, k(o.title), 1)
          ])
        ])
      ]),
      e("div", je, [
        e("div", Ne, [
          (r(!0), c(x, null, y(n.list.slice(0, 2), (d, i) => (r(), c("div", {
            key: i,
            ref_for: !0,
            ref: "domRef" + i,
            class: m(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (i + 1), { "is-visible": t.value }]])
          }, [
            C(a.$slots, "default", {
              item: d,
              index: i
            }, void 0, !0)
          ], 2))), 128))
        ]),
        e("div", Oe, [
          (r(!0), c(x, null, y(n.list.slice(2, 4), (d, i) => (r(), c("div", {
            key: i,
            ref_for: !0,
            ref: "domRef" + i,
            class: m(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (i + 3), { "is-visible": t.value }]])
          }, [
            C(a.$slots, "default", {
              item: d,
              index: i
            }, void 0, !0)
          ], 2))), 128))
        ])
      ])
    ], 2));
  }
}), et = /* @__PURE__ */ S(Pe, [["__scopeId", "data-v-19c6e92c"]]), Xe = { class: "relative" }, ze = { class: "flex justify-center mt-8" }, Be = { class: "flex items-center justify-between w-40" }, Fe = ["onClick"], Ve = 50, He = /* @__PURE__ */ w({
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
    const t = n, s = o, l = v(0), a = v(0), u = v(!1), d = v(0);
    let i = 0;
    const f = v(!0);
    function b() {
      l.value = (l.value + 1) % s.listLength;
    }
    function _() {
      l.value = (l.value - 1 + s.listLength) % s.listLength;
    }
    function g() {
      i = setInterval(b, s.intervalMs);
    }
    function T() {
      i !== 0 && clearInterval(i), i = 0;
    }
    function A() {
      f.value && (T(), g());
    }
    function X(h) {
      l.value = h, A(), t("update:sindex", l.value);
    }
    function z() {
      i ? T() : g(), f.value = !f.value;
    }
    const B = (h) => {
      u.value = !0;
      let p;
      h.touches && h.touches[0] && (p = h.touches[0].clientX), p && (a.value = p);
    }, F = (h) => {
      if (u.value && h.changedTouches[0]) {
        d.value = h.changedTouches ? h.changedTouches[0].clientX : 0;
        const p = d.value - a.value;
        Math.abs(p) >= Ve && (p > 0 ? _() : b(), A()), u.value = !1;
      }
    };
    return g(), R(() => {
      t("update:sindex", l.value), O(() => l.value, (h) => {
        t("update:sindex", h);
      });
    }), (h, p) => (r(), c("div", null, [
      e("ul", Xe, [
        (r(!0), c(x, null, y(s.listLength, (D, $) => N((r(), c("li", {
          key: $,
          class: m({ block: l.value === $ }),
          style: M({ height: `${s.height}` }),
          onTouchstart: B,
          onTouchend: F
        }, [
          C(h.$slots, "slideContents", {}, void 0, !0)
        ], 38)), [
          [U, l.value === $]
        ])), 128))
      ]),
      e("div", ze, [
        e("span", Be, [
          e("i", {
            class: m(["text-xl", [f.value ? "xi-pause" : "xi-play"]]),
            onClick: p[0] || (p[0] = (D) => z())
          }, null, 2),
          e("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_prev.svg)]",
            onClick: p[1] || (p[1] = (D) => (_(), A()))
          }),
          (r(!0), c(x, null, y(s.listLength, (D, $) => (r(), c("span", {
            key: $,
            class: m(["dot", { active: l.value === $ }]),
            onClick: (Ue) => X($)
          }, null, 10, Fe))), 128)),
          e("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_next.svg)]",
            onClick: p[2] || (p[2] = (D) => (b(), A()))
          })
        ])
      ])
    ]));
  }
}), tt = /* @__PURE__ */ S(He, [["__scopeId", "data-v-8ed36c18"]]);
export {
  et as CenteringEffect,
  Ze as FadeAnimation,
  Ge as HeaderModalButton,
  Je as ListDeco,
  tt as SlidePlayPause,
  Ke as SlideScroll,
  Qe as TextShow,
  We as TextTyping
};
