import { defineComponent as h, ref as x, onMounted as y, onUnmounted as g, openBlock as o, createElementBlock as c, normalizeClass as f, createElementVNode as t, toDisplayString as w, Fragment as p, renderList as v, renderSlot as _, pushScopeId as b, popScopeId as k } from "vue";
const C = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [l, i] of a)
    s[l] = i;
  return s;
}, d = (e) => (b("data-v-19c6e92c"), e = e(), k(), e), E = { class: "w-full h-[26.875rem] sm:h-[30.625rem] sm:w-[30.625rem] xl:h-[31.25rem] xl:w-[37.8125rem] mx-auto" }, I = { class: "relative mx-auto -z-[1] h-full w-full sm:h-[30rem] sm:w-[30rem]" }, S = /* @__PURE__ */ d(() => /* @__PURE__ */ t("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "none",
  stroke: "#FBECEC",
  "stroke-width": "2",
  "stroke-dasharray": "3,3",
  class: "rotated-circle"
}, null, -1)), R = /* @__PURE__ */ d(() => /* @__PURE__ */ t("circle", {
  cx: "50%",
  cy: "50%",
  r: "49%",
  fill: "#D74646",
  class: "scaled-circle opacity-10"
}, null, -1)), A = /* @__PURE__ */ d(() => /* @__PURE__ */ t("circle", {
  cx: "50%",
  cy: "50%",
  r: "30%",
  fill: "#D74646",
  class: ""
}, null, -1)), j = [
  S,
  R,
  A
], z = { class: "font-[Poppins] font-semibold text-2xl sm:text-[2.625rem] text-white absolute z-10 w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }, B = { class: "inline" }, D = { class: "w-full flex flex-col gap-6 2xl:h-auto 2xl:gap-[14.6875rem] items-center justify-center 2xl:absolute" }, q = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, F = { class: "w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]" }, O = /* @__PURE__ */ h({
  __name: "CenteringEffect",
  props: {
    list: {
      type: Array,
      requred: !0,
      validator: (e) => !Array.isArray(e) || e.length !== 4 ? (console.error("list props : 4가지 항목 Array"), !1) : !0,
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
  setup(e) {
    const a = e, s = x(!1), l = x(null), i = new IntersectionObserver((n) => {
      n.forEach((m) => {
        m.isIntersecting && !s.value && (s.value = !0, l.value && i.unobserve(l.value));
      });
    });
    return y(() => {
      l.value && i.observe(l.value);
    }), g(() => {
      l.value && i.unobserve(l.value);
    }), (n, m) => (o(), c("div", {
      ref_key: "domRef",
      ref: l,
      class: f(["2xl:flex items-center justify-center", { "is-visible": s.value }])
    }, [
      t("div", E, [
        t("div", I, [
          (o(), c("svg", {
            ref_key: "domRef",
            ref: l,
            class: f(["circle-wrap", { "is-visible": s.value }]),
            width: "100%",
            height: "100%"
          }, j, 2)),
          t("div", z, [
            t("h2", B, w(e.title), 1)
          ])
        ])
      ]),
      t("div", D, [
        t("div", q, [
          (o(!0), c(p, null, v(a.list.slice(0, 2), (u, r) => (o(), c("div", {
            key: r,
            ref_for: !0,
            ref: "domRef" + r,
            class: f(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (r + 1), { "is-visible": s.value }]])
          }, [
            _(n.$slots, "default", {
              item: u,
              index: r
            }, void 0, !0)
          ], 2))), 128))
        ]),
        t("div", F, [
          (o(!0), c(p, null, v(a.list.slice(2, 4), (u, r) => (o(), c("div", {
            key: r,
            ref_for: !0,
            ref: "domRef" + r,
            class: f(["h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]", ["h0" + (r + 3), { "is-visible": s.value }]])
          }, [
            _(n.$slots, "default", {
              item: u,
              index: r
            }, void 0, !0)
          ], 2))), 128))
        ])
      ])
    ], 2));
  }
}), $ = /* @__PURE__ */ C(O, [["__scopeId", "data-v-19c6e92c"]]);
export {
  $ as C,
  C as _
};
