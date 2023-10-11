(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{80476:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models",function(){return a(93167)}])},48567:function(e,l,a){"use strict";a.d(l,{Z:function(){return p},A:function(){return b}});var n=a(85893),t=a(41468),o=a(14986),s=a(30322);let i={proxyllm:{label:"Proxy LLM",icon:"/models/chatgpt.png"},"flan-t5-base":{label:"flan-t5-base",icon:"/models/google.png"},"vicuna-13b":{label:"vicuna-13b",icon:"/models/vicuna.jpeg"},"vicuna-7b":{label:"vicuna-7b",icon:"/models/vicuna.jpeg"},"vicuna-13b-v1.5":{label:"vicuna-13b-v1.5",icon:"/models/vicuna.jpeg"},"vicuna-7b-v1.5":{label:"vicuna-7b-v1.5",icon:"/models/vicuna.jpeg"},"codegen2-1b":{label:"codegen2-1B",icon:"/models/vicuna.jpeg"},"codet5p-2b":{label:"codet5p-2b",icon:"/models/vicuna.jpeg"},"chatglm-6b-int4":{label:"chatglm-6b-int4",icon:"/models/chatglm.png"},"chatglm-6b":{label:"chatglm-6b",icon:"/models/chatglm.png"},"chatglm2-6b":{label:"chatglm2-6b",icon:"/models/chatglm.png"},"chatglm2-6b-int4":{label:"chatglm2-6b-int4",icon:"/models/chatglm.png"},"guanaco-33b-merged":{label:"guanaco-33b-merged",icon:"/models/huggingface.svg"},"falcon-40b":{label:"falcon-40b",icon:"/models/falcon.jpeg"},"gorilla-7b":{label:"gorilla-7b",icon:"/models/gorilla.png"},"gptj-6b":{label:"ggml-gpt4all-j-v1.3-groovy.bin",icon:""},chatgpt_proxyllm:{label:"chatgpt_proxyllm",icon:"/models/chatgpt.png"},bard_proxyllm:{label:"bard_proxyllm",icon:"/models/bard.gif"},claude_proxyllm:{label:"claude_proxyllm",icon:"/models/claude.png"},wenxin_proxyllm:{label:"wenxin_proxyllm",icon:""},tongyi_proxyllm:{label:"tongyi_proxyllm",icon:"/models/qwen2.png"},zhipu_proxyllm:{label:"zhipu_proxyllm",icon:"/models/zhipu.png"},"llama-2-7b":{label:"Llama-2-7b-chat-hf",icon:"/models/llama.jpg"},"llama-2-13b":{label:"Llama-2-13b-chat-hf",icon:"/models/llama.jpg"},"llama-2-70b":{label:"Llama-2-70b-chat-hf",icon:"/models/llama.jpg"},"baichuan-13b":{label:"Baichuan-13B-Chat",icon:"/models/baichuan.png"},"baichuan-7b":{label:"baichuan-7b",icon:"/models/baichuan.png"},"baichuan2-7b":{label:"Baichuan2-7B-Chat",icon:"/models/baichuan.png"},"baichuan2-13b":{label:"Baichuan2-13B-Chat",icon:"/models/baichuan.png"},"wizardlm-13b":{label:"WizardLM-13B-V1.2",icon:"/models/wizardlm.png"},"llama-cpp":{label:"ggml-model-q4_0.bin",icon:"/models/huggingface.svg"},"internlm-7b":{label:"internlm-chat-7b-v1_1",icon:"/models/internlm.png"},"internlm-7b-8k":{label:"internlm-chat-7b-8k",icon:"/models/internlm.png"}};var c=a(94184),r=a.n(c),d=a(25675),m=a.n(d),u=a(67294),h=a(67421);function b(e,l){var a;if(!e)return null;let{width:t,height:o}=l||{};return(0,n.jsx)(m(),{className:"rounded-full mr-2 border border-gray-200 object-contain bg-white inline-block",width:t||24,height:o||24,src:(null===(a=i[e])||void 0===a?void 0:a.icon)||"/models/huggingface.svg",alt:"llm"})}var p=function(e){let{size:l,onChange:a}=e,{t:c}=(0,h.$G)(),{modelList:d,model:m,scene:p}=(0,u.useContext)(t.p);return!d||d.length<=0?null:(0,n.jsx)("div",{className:r()({"w-48":"sm"===l||"md"===l||!l,"w-60":"lg"===l}),children:(0,n.jsx)(o.Z,{size:l||"sm",placeholder:c("choose_model"),value:m||"",renderValue:function(e){return e?(0,n.jsxs)(n.Fragment,{children:[b(e.value),e.label]}):null},onChange:(e,l)=>{l&&(null==a||a(l))},children:d.map(e=>{var l;return(0,n.jsxs)(s.Z,{value:e,children:[b(e),(null===(l=i[e])||void 0===l?void 0:l.label)||e]},"model_".concat(e))})})})}},93167:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return Z}});var n=a(85893),t=a(50489),o=a(67294),s=a(67421),i=a(22624),c=a(49769),r=a(98034),d=a(2453),m=a(39778),u=a(30381),h=a.n(u),b=a(48567),p=function(e){let{info:l}=e,{t:a}=(0,s.$G)(),[u,p]=(0,o.useState)(!1);async function g(e){if(u)return;p(!0);let[,l]=await (0,t.Vx)((0,t.kU)({host:e.host,port:e.port,model:e.model_name,worker_type:e.model_type,params:{}}));p(!1),!0===l&&d.ZP.success(a("stop_model_success"))}return(0,n.jsx)("div",{className:"relative flex flex-col py-4 px-4 sm:w-1/2 lg:w-1/3 min-w-min rounded-lg justify-between text-black bg-white border-gray-200 border hover:shadow-md dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-white transition-all",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[l.healthy&&(0,n.jsx)(m.Z,{title:"Healthy",children:(0,n.jsx)(i.Z,{className:"absolute top-4 right-4 !text-3xl !text-green-600"})}),!l.healthy&&(0,n.jsx)(m.Z,{title:"Unhealthy",children:(0,n.jsx)(c.Z,{className:"absolute top-4 right-4 !text-3xl !text-red-600"})}),(0,n.jsx)(m.Z,{title:"Stop Model",children:(0,n.jsx)(r.Z,{className:"absolute right-4 bottom-4 !text-3xl !text-orange-600 cursor-pointer",onClick:()=>{g(l)}})}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,b.A)(l.model_name,{width:32,height:32}),(0,n.jsxs)("div",{className:"inline-block ml-2",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:l.model_name}),(0,n.jsx)("h3",{className:"text-sm text-gray-800 dark:text-gray-400",children:l.model_type})]})]}),(0,n.jsxs)("div",{className:"text-sm mt-2",children:[(0,n.jsx)("p",{className:"font-semibold",children:"Host:"}),(0,n.jsx)("p",{className:"text-gray-600",children:l.host}),(0,n.jsx)("p",{className:"font-semibold mt-2",children:"Manage host:"}),(0,n.jsxs)("p",{className:"text-gray-600",children:[(0,n.jsxs)("span",{children:[l.manager_host,":"]}),(0,n.jsx)("span",{children:l.manager_port})]}),(0,n.jsx)("p",{className:"font-semibold mt-2",children:"Last heart beat:"}),(0,n.jsx)("p",{className:"text-gray-600",children:h()(l.last_heartbeat).format("YYYY-MM-DD HH:MM:SS")})]})]})})})},g=a(50965),x=a(27494),f=a(71577),j=a(59566),v=a(48928),_=a(73065),y=function(e){let{params:l,form:a}=e;return((0,o.useEffect)(()=>{if(l){let e={};l.forEach(l=>{e[l.param_name]=l.default_value}),a.setFieldsValue(e)}},[l,a]),!l||(null==l?void 0:l.length)<1)?null:(0,n.jsx)(n.Fragment,{children:null==l?void 0:l.map(e=>{var l;return(0,n.jsx)(x.Z.Item,{label:(0,n.jsx)("p",{className:"whitespace-normal overflow-wrap-break-word",children:(null===(l=e.description)||void 0===l?void 0:l.length)>20?e.param_name:e.description}),name:e.param_name,initialValue:e.default_value,valuePropName:"bool"===e.param_type?"checked":"value",tooltip:e.description,rules:[{required:e.required,message:"Please input ".concat(e.description)}],children:function(e){switch(e.param_type){case"str":return(0,n.jsx)(j.default,{});case"int":return(0,n.jsx)(v.Z,{});case"bool":return(0,n.jsx)(_.Z,{})}}(e)},e.param_name)})})};let{Option:w}=g.default;var N=function(e){let{onCancel:l,onSuccess:a}=e,{t:i}=(0,s.$G)(),[c,r]=(0,o.useState)([]),[u,h]=(0,o.useState)(),[p,j]=(0,o.useState)(null),[v]=x.Z.useForm();async function _(){let[,e]=await (0,t.Vx)((0,t.xv)());e&&e.length&&r(e.sort((e,l)=>e.enabled&&!l.enabled?-1:!e.enabled&&l.enabled?1:e.model.localeCompare(l.model))),r(e)}async function N(e){if(!u)return;delete e.model;let[,l]=await (0,t.Vx)((0,t.vA)({host:u.host,port:u.port,model:u.model,worker_type:null==u?void 0:u.worker_type,params:e}));if(!0===l)return a(),d.ZP.success(i("start_model_success"))}return(0,o.useEffect)(()=>{_()},[]),(0,n.jsx)("div",{className:"",children:(0,n.jsxs)(x.Z,{labelCol:{span:8},wrapperCol:{span:16},onFinish:N,form:v,children:[(0,n.jsx)(x.Z.Item,{label:"Model",name:"model",rules:[{required:!0,message:i("model_select_tips")}],children:(0,n.jsx)(g.default,{showSearch:!0,onChange:function(e,l){h(l.model),j(l.model.params)},children:null==c?void 0:c.map(e=>(0,n.jsxs)(w,{value:e.model,label:e.model,model:e,disabled:!e.enabled,children:[(0,b.A)(e.model),(0,n.jsx)(m.Z,{title:e.enabled?e.model:i("download_model_tip"),children:(0,n.jsx)("span",{children:e.model})}),(0,n.jsx)(m.Z,{title:e.enabled?"".concat(e.host,":").concat(e.port):i("download_model_tip"),children:(0,n.jsxs)("p",{className:"inline-block absolute right-4",children:[(0,n.jsxs)("span",{children:[e.host,":"]}),(0,n.jsx)("span",{children:e.port})]})})]},e.model))})}),(0,n.jsx)(y,{params:p,form:v}),(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)(f.ZP,{type:"primary",htmlType:"submit",children:i("submit")}),(0,n.jsx)(f.ZP,{className:"ml-10",onClick:l,children:"Cancel"})]})]})})},k=a(12678),Z=function(){let{t:e}=(0,s.$G)(),[l,a]=(0,o.useState)([]),[i,c]=(0,o.useState)(!1);async function r(){let[,e]=await (0,t.Vx)((0,t.fZ)());a(null!=e?e:[])}return(0,o.useEffect)(()=>{r()},[]),(0,n.jsxs)("div",{className:"p-8",children:[(0,n.jsx)(f.ZP,{className:"mb-8",type:"primary",onClick:()=>{c(!0)},children:e("create_model")}),(0,n.jsx)("div",{className:"flex flex-wrap gap-4",children:l.map(e=>(0,n.jsx)(p,{info:e},e.model_name))}),(0,n.jsx)(k.Z,{width:800,open:i,title:e("create_model"),onCancel:()=>{c(!1)},footer:null,children:(0,n.jsx)(N,{onCancel:()=>{c(!1)},onSuccess:()=>{c(!1),r()}})})]})}}},function(e){e.O(0,[885,566,902,455,66,46,631,147,774,888,179],function(){return e(e.s=80476)}),_N_E=e.O()}]);