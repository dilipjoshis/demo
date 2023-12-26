"use strict";var e=require("react"),r=require("styled-components");function o(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}const t=r.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
  color: ${e=>e.primary?"#1b116e":"#ffffff"};
  background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
  opacity: ${e=>e.disabled?.5:1};
  &:hover {
    background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
  }
`,i=r.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,a=r.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,l=r.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,p=r.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;exports.Button=r=>{var{size:i,primary:a,disabled:l,text:p,onClick:d}=r,n=o(r,["size","primary","disabled","text","onClick"]);return e.createElement(t,Object.assign({type:"button",onClick:d,primary:a,disabled:l,size:i},n),p)},exports.Input=r=>{var{id:t,disabled:d,label:n,message:s,error:c,success:b,onChange:x,placeholder:u}=r,m=o(r,["id","disabled","label","message","error","success","onChange","placeholder"]);return e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(p,{disabled:d,error:c},n)),e.createElement(i,Object.assign({id:t,type:"text",onChange:x,disabled:d,error:c,success:b,placeholder:u},m)),e.createElement(l,null,e.createElement(p,{error:c},s)))};
//# sourceMappingURL=index.js.map
