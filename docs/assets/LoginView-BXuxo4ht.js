import{B as c,o as m,h as u,b as o,w as g,d as f,t as _,G as b,q as t,v as w,j as V,F as v,C as x,D as y}from"./index-BfV9kO8h.js";import{_ as p,u as L}from"./useMutation-CAdpa6FW.js";import{_ as S}from"./IButton-Qu92zaji.js";const B={__name:"LoginForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(d,{emit:n}){const i=d,a=c({email:"",password:""}),l=n;return(r,e)=>(m(),u("form",{onSubmit:e[2]||(e[2]=_(s=>l("submit",b(a)),["prevent"]))},[o(p,{modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=s=>a.email=s),class:"mb-4",label:"Електронна пошта",type:"email",placeholder:"Email@gmail.com"},null,8,["modelValue"]),o(p,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=s=>a.password=s),class:"mb-10",label:"Пароль",type:"password",placeholder:"Password"},null,8,["modelValue"]),o(S,{type:"submit",class:"w-full",variant:"gradient","is-loading":i.isLoading},{default:g(()=>e[3]||(e[3]=[f("Увійти")])),_:1},8,["is-loading"])],32))}},F={key:0,class:"text-red-500 text-center"},C={__name:"LoginView",setup(d){const n=x(),{isLoading:i,error:a,mutation:l}=L({mutationFn:r=>y.loginUser(r),onSuccess:()=>{n.replace("/map")}});return(r,e)=>(m(),u(v,null,[o(B,{onSubmit:t(l),"is-loading":t(i)},null,8,["onSubmit","is-loading"]),t(a)?(m(),u("p",F,w(t(a).message),1)):V("",!0)],64))}};export{C as default};
