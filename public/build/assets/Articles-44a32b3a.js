import{_ as k,a as C}from"./Card.vue_vue_type_script_setup_true_lang-55ef5a17.js";import{d as $,j as p,c as u,a as s,u as e,w as t,F as g,o as c,X as v,k as N,e as r,n as d,b as l,h,t as o,l as b}from"./app-27f3bd29.js";import{d as x,a as j}from"./advancedFormat-5b004900.js";const B=["textContent"],M=["textContent"],P={class:"flex justify-center items-center space-x-5"},V={key:0},Y={key:1},q=$({__name:"Articles",props:{articles:{required:!0,type:Object}},setup(i){const n=i;x.extend(j);const y=m=>x(m).format("Do MMMM YYYY"),_=p(()=>n.articles.current_page>1?n.articles.current_page-1:null),f=p(()=>n.articles.current_page<n.articles.last_page?n.articles.current_page+1:null);return(m,F)=>(c(),u(g,null,[s(e(v),{title:"Articles"}),s(k,null,{default:t(()=>[(c(!0),u(g,null,N(i.articles.data,a=>(c(),b(e(d),{key:a.slug,href:`/articles/${a.slug}`},{default:t(()=>[s(C,{diminished:""},{title:t(()=>[l(o(a.title),1)]),default:t(()=>[r("p",{class:"text-xs text-primary mt-0",textContent:o(y(a.created_at))},null,8,B),r("p",{textContent:o(a.description),class:"m-0"},null,8,M),s(e(d),{href:`/articles/${a.slug}`,class:"text-primary font-semibold hover:text-black hover:underline"},{default:t(()=>[l("Read more...")]),_:2},1032,["href"])]),_:2},1024)]),_:2},1032,["href"]))),128)),r("ul",P,[e(_)?(c(),u("li",V,[s(e(d),{href:`/articles?page=${e(_)}`,only:["articles"]},{default:t(()=>[l("Previous")]),_:1},8,["href"])])):h("",!0),r("li",null,[l(" Page "),r("strong",null,o(i.articles.current_page),1),l(" of "),r("strong",null,o(i.articles.last_page),1)]),e(f)?(c(),u("li",Y,[s(e(d),{href:`/articles?page=${e(f)}`,only:["articles"]},{default:t(()=>[l("Next")]),_:1},8,["href"])])):h("",!0)])]),_:1})],64))}});export{q as default};
