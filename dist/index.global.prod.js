/*!
 * my-element v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
var MyElement=function(t){"use strict";var n={name:"MyButton",data:()=>({count:1})};n.render=function(n,e,u,o,a,l){return t.openBlock(),t.createBlock("button",{class:"shd-btn",onClick:e[1]||(e[1]=t=>a.count++)},t.toDisplayString(a.count),1)},n.__file="packages/Button/Button.vue";var e={name:"MyInput",data:()=>({value:""})};e.render=function(n,e,u,o,a,l){return t.withDirectives((t.openBlock(),t.createBlock("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t)},null,512)),[[t.vModelText,a.value]])},e.__file="packages/Input/Input.vue",n.install=t=>t.component("MyButton",n),e.install=t=>t.component("MyInput",e);return{MyButton:n,MyInput:e,install(t){t.use(n),t.use(e)}}}(Vue);
