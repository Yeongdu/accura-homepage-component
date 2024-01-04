import { defineComponent as P, ref as o, onMounted as X, watch as M, openBlock as u, createElementBlock as r, createElementVNode as i, Fragment as k, renderList as C, withDirectives as q, normalizeClass as m, normalizeStyle as E, renderSlot as N, vShow as z } from "vue";
import { _ as B } from "./CenteringEffect-nJBNIhD-.js";
const D = { class: "relative" }, F = { class: "flex justify-center mt-8" }, V = { class: "flex items-center justify-between w-40" }, A = ["onClick"], G = 50, H = /* @__PURE__ */ P({
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
  setup(w, { emit: I }) {
    const f = I, n = w, l = o(0), _ = o(0), h = o(!1), x = o(0);
    let a = 0;
    const c = o(!0);
    function p() {
      l.value = (l.value + 1) % n.listLength;
    }
    function y() {
      l.value = (l.value - 1 + n.listLength) % n.listLength;
    }
    function g() {
      a = setInterval(p, n.intervalMs);
    }
    function S() {
      a !== 0 && clearInterval(a), a = 0;
    }
    function d() {
      c.value && (S(), g());
    }
    function b(e) {
      l.value = e, d(), f("update:sindex", l.value);
    }
    function L() {
      a ? S() : g(), c.value = !c.value;
    }
    const T = (e) => {
      h.value = !0;
      let t;
      e.touches && e.touches[0] && (t = e.touches[0].clientX), t && (_.value = t);
    }, $ = (e) => {
      if (h.value && e.changedTouches[0]) {
        x.value = e.changedTouches ? e.changedTouches[0].clientX : 0;
        const t = x.value - _.value;
        Math.abs(t) >= G && (t > 0 ? y() : p(), d()), h.value = !1;
      }
    };
    return g(), X(() => {
      f("update:sindex", l.value), M(() => l.value, (e) => {
        f("update:sindex", e);
      });
    }), (e, t) => (u(), r("div", null, [
      i("ul", D, [
        (u(!0), r(k, null, C(n.listLength, (v, s) => q((u(), r("li", {
          key: s,
          class: m({ block: l.value === s }),
          style: E({ height: `${n.height}` }),
          onTouchstart: T,
          onTouchend: $
        }, [
          N(e.$slots, "slideContents", {}, void 0, !0)
        ], 38)), [
          [z, l.value === s]
        ])), 128))
      ]),
      i("div", F, [
        i("span", V, [
          i("i", {
            class: m(["text-xl", [c.value ? "xi-pause" : "xi-play"]]),
            onClick: t[0] || (t[0] = (v) => L())
          }, null, 2),
          i("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_prev.svg)]",
            onClick: t[1] || (t[1] = (v) => (y(), d()))
          }),
          (u(!0), r(k, null, C(n.listLength, (v, s) => (u(), r("span", {
            key: s,
            class: m(["dot", { active: l.value === s }]),
            onClick: (J) => b(s)
          }, null, 10, A))), 128)),
          i("span", {
            class: "slide-dtn bg-[url(/images/icon_arrow_next.svg)]",
            onClick: t[2] || (t[2] = (v) => (p(), d()))
          })
        ])
      ])
    ]));
  }
}), Q = /* @__PURE__ */ B(H, [["__scopeId", "data-v-8ed36c18"]]);
export {
  Q as S
};
