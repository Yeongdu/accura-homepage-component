import { defineComponent as m, ref as a, openBlock as f, createElementBlock as p, Fragment as h, createElementVNode as e, normalizeClass as c, renderSlot as _, pushScopeId as b, popScopeId as x } from "vue";
import { _ as g } from "./CenteringEffect-nJBNIhD-.js";
const y = (l) => (b("data-v-cfe0ca7e"), l = l(), x(), l), w = { class: "flex items-center" }, M = /* @__PURE__ */ y(() => /* @__PURE__ */ e("div", null, null, -1)), S = /* @__PURE__ */ m({
  __name: "HeaderModalButton",
  setup(l) {
    const t = a(!1), s = a(!1), o = a(1), n = a(!1), r = () => {
      t.value = !1, s.value = !1, setTimeout(() => {
        o.value = 1;
      }, 700), document.body.style.overflow = "auto";
    }, u = () => {
      t.value === !0 ? (t.value = !1, document.body.style.overflow = "auto") : (s.value = !0, o.value = 5, setTimeout(() => {
        t.value = !0;
      }, 700), document.body.style.overflow = "hidden");
    }, i = () => {
      o.value === 1 && (n.value = !0);
    }, d = () => {
      n.value = !1;
    };
    return (v, k) => (f(), p(h, null, [
      e("div", w, [
        e("i", {
          class: c([[
            n.value && o.value == 1 ? "hover:text-white hover:bg-[#A9141A] hover:rotate-90 " : "",
            s.value ? "scale-[70]" : "scale-100",
            o.value != 1 ? "bg-[#A9141A] border-none" : "xi-drag-vertical"
          ], "z-[2222] w-[4.5rem] h-[4.5rem] transition-transform duration-500 delay-0 hamburger-nav-button cursor-pointer text-3xl lg:text-5xl"]),
          onClick: u,
          onMouseover: i,
          onMouseout: d
        }, null, 34)
      ]),
      e("div", {
        class: c(["hamburger-nav-inside", [t.value ? "visible opacity-100" : "invisible opacity-0"]])
      }, [
        e("div", { class: "flex items-center justify-between mb-10 large-container-custom mt-14" }, [
          M,
          e("button", { onClick: r }, [
            e("i", {
              class: "xi-close text-4xl text-white bg-[#981E23] w-24 h-24 rounded-full cursor-pointer hover:rotate-90 flex items-center justify-center transition-transform duration-500 delay-0",
              onClick: r
            })
          ])
        ]),
        _(v.$slots, "inside-modal", {}, void 0, !0)
      ], 2)
    ], 64));
  }
}), B = /* @__PURE__ */ g(S, [["__scopeId", "data-v-cfe0ca7e"]]);
export {
  B as H
};
