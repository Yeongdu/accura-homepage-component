import { defineComponent as c, computed as r, ref as i, onMounted as m, onUnmounted as v, openBlock as d, createElementBlock as p, normalizeStyle as b, normalizeClass as y, renderSlot as _ } from "vue";
const M = /* @__PURE__ */ c({
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
  setup(l) {
    const o = l, u = r(() => o.transitionDelayMs), f = r(() => o.transitionDurationMs), n = i(!1), e = i(null), t = new IntersectionObserver((s) => {
      s.forEach((a) => {
        a.isIntersecting && !n.value && (n.value = !0, e.value && t.unobserve(e.value));
      });
    });
    return m(() => {
      e.value && t.observe(e.value);
    }), v(() => {
      e.value && t.unobserve(e.value);
    }), (s, a) => (d(), p("div", {
      ref_key: "domRef",
      ref: e,
      style: b({ transition: `${f.value}ms ${u.value}ms` }),
      class: y(["fade-animation", { "is-visible": n.value }])
    }, [
      _(s.$slots, "default")
    ], 6));
  }
});
export {
  M as _
};
