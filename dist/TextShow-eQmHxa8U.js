import { defineComponent as l, computed as r, openBlock as t, createElementBlock as e, Fragment as i, renderList as m, unref as u, normalizeStyle as x, toDisplayString as _ } from "vue";
import { _ as d } from "./CenteringEffect-nJBNIhD-.js";
const f = /* @__PURE__ */ l({
  __name: "TextShow",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(s) {
    const o = s, a = r(() => o.text).value.split(""), c = r(() => o.intervalMs || 200);
    return (y, T) => (t(), e("div", null, [
      (t(!0), e(i, null, m(u(a), (p, n) => (t(), e("span", {
        key: n,
        style: x({ "animation-delay": `${n * c.value}ms` }),
        class: "rotate-show-text"
      }, _(p), 5))), 128))
    ]));
  }
}), k = /* @__PURE__ */ d(f, [["__scopeId", "data-v-2fc7cc41"]]);
export {
  k as T
};
