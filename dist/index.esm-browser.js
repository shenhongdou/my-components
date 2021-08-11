/*!
 * my-element v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
import { openBlock, createBlock, toDisplayString, withDirectives, vModelText } from 'vue';

var script$1 = {
  name: 'MyButton',
  data () {
    return {
      count: 1
    }
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: "shd-btn",
    onClick: _cache[1] || (_cache[1] = $event => ($data.count ++))
  }, toDisplayString($data.count), 1 /* TEXT */))
}

script$1.render = render$1;
script$1.__file = "packages/Button/Button.vue";

var script = {
  name: 'MyInput',
  data () {
    return {
      value: ''
    }
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.value = $event))
  }, null, 512 /* NEED_PATCH */)), [
    [vModelText, $data.value]
  ])
}

script.render = render;
script.__file = "packages/Input/Input.vue";

script$1.install = app => app.component('MyButton', script$1);

script.install = app => app.component('MyInput', script);

const MyElement = {
  MyButton: script$1,
  MyInput: script,

  install(app) {
    app.use(script$1);
    app.use(script);
  }

};

export { MyElement as default };
