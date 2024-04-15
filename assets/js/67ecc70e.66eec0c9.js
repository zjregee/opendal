"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4434],{1912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=n(1527),s=n(2175);function r(e){const t={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,a.jsx)(t.del,{children:"scan"})]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,a.jsx)(t.del,{children:"presign"})]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," blocking"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"datadir"}),": Set the path to the cacache data directory"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You can refer to [",(0,a.jsx)(t.code,{children:"CacacheBuilder"}),"]'s docs for more information"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Cacache;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Cacache::default();\n    builder.datadir("/tmp/opendal/cacache");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}var l=n(5431),i=n(2860);const o={title:"Cacache"},u=void 0,d={id:"services/cacache",title:"Cacache",description:"Cacache services support.",source:"@site/docs/services/cacache.mdx",sourceDirName:"services",slug:"/services/cacache",permalink:"/docs/services/cacache",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/cacache.mdx",tags:[],version:"current",lastUpdatedBy:"zjregee",lastUpdatedAt:1713144847,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Cacache"},sidebar:"docs",previous:{title:"Azdls",permalink:"/docs/services/azdls"},next:{title:"COS",permalink:"/docs/services/cos"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/zkat/cacache-rs",children:"Cacache"})," services support."]}),"\n","\n",(0,a.jsx)(c,{components:e.components}),"\n",(0,a.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"rust",label:"Rust",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Cacache;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("datadir".to_string(), "/tmp/opendal/cacache".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Cacache, map)?;\n    Ok(())\n}\n'})})}),(0,a.jsx)(i.Z,{value:"node.js",label:"Node.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"cacache\", {\n        datadir: '/tmp/opendal/cacache'\n    });\n}\n"})})}),(0,a.jsx)(i.Z,{value:"python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("cacache", {\n    "datadir": "/tmp/opendal/cacache"\n})\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>c});n(959);var a=n(6259);const s={tabItem:"tabItem_CbVR"};var r=n(1527);function c(e){let{children:t,hidden:n,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,c),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(959),s=n(6259),r=n(2990),c=n(8903),l=n(3133),i=n(563),o=n(351),u=n(3026);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,c.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[c,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,d]=m({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),x=(()=>{const e=o??b;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=n(1527);function v(e){let{className:t,block:n,selectedValue:a,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==a&&(o(t),c(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(k,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var a=n(959);const s={},r=a.createContext(s);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);