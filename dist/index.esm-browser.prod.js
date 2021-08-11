/*!
 * my-element v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
import{openBlock as t,createBlock as n,toDisplayString as u,withDirectives as e,vModelText as a}from"vue";var o={name:"MyButton",data:()=>({count:1})};o.render=function(e,a,o,l,p,r){return t(),n("button",{class:"shd-btn",onClick:a[1]||(a[1]=t=>p.count++)},u(p.count),1)},o.__file="packages/Button/Button.vue";var l={name:"MyInput",data:()=>({value:""})};l.render=function(u,o,l,p,r,c){return e((t(),n("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t)},null,512)),[[a,r.value]])},l.__file="packages/Input/Input.vue",o.install=t=>t.component("MyButton",o),l.install=t=>t.component("MyInput",l);const p={MyButton:o,MyInput:l,install(t){t.use(o),t.use(l)}};export{p as default};
