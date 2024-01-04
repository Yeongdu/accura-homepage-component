import { defineComponent as S, ref as x, openBlock as i, createElementBlock as o, createElementVNode as e, Fragment as v, renderList as f, normalizeClass as h, normalizeStyle as w, toDisplayString as m, withDirectives as C, vModelText as I, pushScopeId as $, popScopeId as j } from "vue";
import { _ as z } from "./CenteringEffect-nJBNIhD-.js";
const r = (n) => ($("data-v-a2e32ff2"), n = n(), j(), n), A = { class: "relative flex flex-col items-start max-w-full lg:flex-row" }, B = { class: "relative flex flex-row items-center overflow-hidden slider-container lg:flex-col lg:items-end lg:basis-1/2 lg:pr-28 2xl:pr-48" }, D = ["disabled"], E = /* @__PURE__ */ r(() => /* @__PURE__ */ e("i", { class: "xi-arrow-up" }, null, -1)), T = [
  E
], V = { class: "h-[300px] overflow-hidden hidden lg:block" }, F = { class: "justify-between hidden h-full overflow-hidden slider lg:flex lg:flex-col" }, L = ["onClick"], M = { class: "text-center select-none year" }, N = ["disabled"], U = /* @__PURE__ */ r(() => /* @__PURE__ */ e("i", { class: "xi-arrow-down" }, null, -1)), X = [
  U
], Y = { class: "w-full overflow-hidden lg:hidden" }, q = { class: "flex justify-between w-full overflow-hidden slider slider-small lg:hidden" }, G = ["onClick"], H = { class: "year" }, J = { class: "flex justify-between w-full mt-4 lg:hidden" }, K = ["disabled"], O = /* @__PURE__ */ r(() => /* @__PURE__ */ e("i", { class: "xi-arrow-left" }, null, -1)), P = [
  O
], Q = ["disabled"], R = /* @__PURE__ */ r(() => /* @__PURE__ */ e("i", { class: "xi-arrow-right" }, null, -1)), W = [
  R
], Z = { class: "relative flex w-full mt-8 content-container lg:basis-1/2 lg:pl-28 2xl:pl-48 sm:mt-12" }, ee = ["max"], le = /* @__PURE__ */ S({
  __name: "SlideScroll",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(n) {
    const t = n, l = x(0), d = x(100);
    function u() {
      l.value < t.list.length - 1 && (l.value = (l.value + 1) % t.list.length, d.value -= 100);
    }
    function _() {
      l.value > 0 && (l.value = (l.value - 1 + t.list.length) % t.list.length, d.value += 100);
    }
    function p(a) {
      return a === l.value;
    }
    function b(a) {
      a < l.value ? _() : a > l.value && u();
    }
    function k() {
      d.value = -100 * (l.value - 1);
    }
    return (a, g) => (i(), o("article", null, [
      e("div", A, [
        e("div", B, [
          e("button", {
            class: "hidden mb-8 mr-24 slide-button lg:block",
            disabled: l.value === 0,
            onClick: _
          }, T, 8, D),
          e("div", V, [
            e("div", F, [
              (i(!0), o(v, null, f(t.list, (s, c) => (i(), o("div", {
                key: s.key,
                class: h(["slide", { active: p(c) }]),
                style: w({ transform: `translateY(${d.value}%)` }),
                onClick: (y) => b(c)
              }, [
                e("div", M, m(s.key), 1)
              ], 14, L))), 128))
            ])
          ]),
          e("button", {
            class: "hidden mt-8 mb-12 mr-24 slide-button lg:block",
            disabled: l.value === t.list.length - 1,
            onClick: u
          }, X, 8, N)
        ]),
        e("div", Y, [
          e("div", q, [
            (i(!0), o(v, null, f(t.list, (s, c) => (i(), o("div", {
              key: s.key,
              class: h(["slide", { active: p(c) }]),
              style: w({ transform: `translateX(${d.value}%)` }),
              onClick: (y) => b(c)
            }, [
              e("div", H, m(s.key), 1)
            ], 14, G))), 128))
          ])
        ]),
        e("div", J, [
          e("button", {
            class: "slide-button",
            disabled: l.value === 0,
            onClick: _
          }, P, 8, K),
          e("button", {
            class: "slide-button",
            disabled: l.value === t.list.length - 1,
            onClick: u
          }, W, 8, Q)
        ]),
        e("div", Z, [
          C(e("input", {
            id: "range",
            "onUpdate:modelValue": g[0] || (g[0] = (s) => l.value = s),
            class: "range-slider absolute hidden lg:block cursor-pointer rotate-90 -left-60 top-[11.313rem] w-[29.625rem]",
            type: "range",
            min: "0",
            max: t.list.length - 1,
            onInput: k
          }, null, 40, ee), [
            [
              I,
              l.value,
              void 0,
              { number: !0 }
            ]
          ]),
          e("ul", {
            class: h(["w-full content", { active: l.value >= 0 }])
          }, [
            (i(!0), o(v, null, f(t.list[l.value].contents, (s) => (i(), o("li", {
              key: s,
              class: "w-full mb-6 text-lg font-semibold sm:mb-11 text-left"
            }, m(s), 1))), 128))
          ], 2)
        ])
      ])
    ]));
  }
}), ie = /* @__PURE__ */ z(le, [["__scopeId", "data-v-a2e32ff2"]]);
export {
  ie as S
};
