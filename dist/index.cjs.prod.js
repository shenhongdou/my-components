/*!
 * my-element v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
"use strict";var t=require("vue"),e={name:"MyButton",data:()=>({count:1})};e.render=function(e,n,u,o,a,l){return t.openBlock(),t.createBlock("button",{class:"shd-btn",onClick:n[1]||(n[1]=t=>a.count++)},t.toDisplayString(a.count),1)},e.__file="packages/Button/Button.vue";var n={name:"MyInput",data:()=>({value:""})};n.render=function(e,n,u,o,a,l){return t.withDirectives((t.openBlock(),t.createBlock("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>a.value=t)},null,512)),[[t.vModelText,a.value]])},n.__file="packages/Input/Input.vue",e.install=t=>t.component("MyButton",e),n.install=t=>t.component("MyInput",n);const u={MyButton:e,MyInput:n,install(t){t.use(e),t.use(n)}};module.exports=u;
