import { defineComponent as u, computed as l, ref as s, watch as x, openBlock as g, createElementBlock as _, toDisplayString as f } from "vue";
const m = { class: "whitespace-pre-wrap" }, I = /* @__PURE__ */ u({
  __name: "TextTyping",
  props: {
    text: {},
    intervalMs: {}
  },
  setup(o) {
    const e = o, r = l(() => e.text.replace(/\\n/g, `
`).split("")), c = l(() => e.intervalMs || 100), t = s(0), n = s("");
    let a = 0;
    const i = l(() => r.value.length);
    function v() {
      t.value < i.value ? (n.value += r.value[t.value] || "", t.value += 1) : clearInterval(a);
    }
    function p() {
      n.value = "", t.value = 0, a = setInterval(v, c.value);
    }
    return p(), x(
      () => [e.text, e.intervalMs],
      () => {
        clearInterval(a), p();
      }
    ), (y, d) => (g(), _("p", m, f(n.value), 1));
  }
});
export {
  I as _
};
