import { defineComponent as a, openBlock as e, createElementBlock as t, createElementVNode as o, Fragment as l, renderList as i, toDisplayString as p } from "vue";
import { _ } from "./CenteringEffect-nJBNIhD-.js";
const m = { class: "focus-area" }, u = { class: "max-w-[76%]" }, d = /* @__PURE__ */ a({
  __name: "ListDeco",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(s) {
    const r = s;
    return (f, x) => (e(), t("div", null, [
      o("ul", m, [
        (e(!0), t(l, null, i(r.list, (n, c) => (e(), t("li", { key: c }, [
          o("p", u, p(n.contents), 1)
        ]))), 128))
      ])
    ]));
  }
}), h = /* @__PURE__ */ _(d, [["__scopeId", "data-v-0cef9593"]]);
export {
  h as L
};
