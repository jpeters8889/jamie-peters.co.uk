import{_ as b,a as w}from"./Card.vue_vue_type_script_setup_true_lang-bdedea48.js";import{d as p,m as g,o as n,c as o,e,t as u,h as i,r as c,a as r,u as y,w as s,F as f,X as _,b as v}from"./app-2fc305a1.js";const x={class:"flex flex-col bg-primary/10 p-2 mb-4 shadow"},S={class:"mb-3 text-primary font-semibold border-b border-primary pb-2 text-center xs:text-left"},k=["textContent"],C={class:"text-sm m-0"},I=["href","textContent"],T={key:0,class:"text-sm m-0"},$=["href","textContent"],j={key:0,class:"bg-white rounded p-2 font-semibold"},L={key:1,class:"space-y-3"},h=p({__name:"ProjectItem",props:{title:{type:String,required:!0},url:{type:String,required:!0},github:{type:String,required:!1,default:()=>!1}},setup(t){const a=g(!1);return(d,l)=>(n(),o("div",x,[e("div",S,[e("h2",{class:"text-2xl text-primary m-0 font-semibold",textContent:u(t.title)},null,8,k),e("h3",C,[e("a",{href:t.url,target:"_blank",class:"text-black hover:text-primary break-words",textContent:u(t.url)},null,8,I)]),t.github?(n(),o("h3",T,[e("a",{href:t.github,target:"_blank",class:"text-black hover:text-primary break-words",textContent:u(t.github)},null,8,$)])):i("",!0)]),a.value?i("",!0):(n(),o("div",j,[c(d.$slots,"intro")])),e("div",null,[a.value?i("",!0):(n(),o("button",{key:0,onClick:l[0]||(l[0]=m=>a.value=!0),class:"bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition"},"Read More..."))]),a.value?(n(),o("div",L,[c(d.$slots,"default"),a.value?(n(),o("button",{key:0,onClick:l[1]||(l[1]=m=>a.value=!1),class:"bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition"},"Read Less")):i("",!0)])):i("",!0)]))}}),P=e("p",null," Below are a few examples of personal projects I have done. ",-1),V=e("p",{class:"mt-0"}," Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue Components and TailwindCSS, but there are plans being made to refactor to InertiaJS. ",-1),A=e("p",{class:"mb-0"}," I have also created an app using React Native which is available on Google Play and Apple Stores. ",-1),D=e("p",{class:"m-0"}," Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews. ",-1),B=e("p",null," Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling payments. ",-1),J=e("p",null," A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide section on the website. The app was used to display eateries in the database on an embedded Google map around the users location. The app was originally written in basic HTML, SCSS and JQuery. ",-1),F=e("p",null," In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel using a test driven approach and a fresh new data structure using laravel migrations and custom built commands to transform the old legacy data structure and values into the new structure. ",-1),N=e("p",null," This new version took over 12 months to make in my spare time outside of work, but was a very rewarding project and still continues to be so to this day. ",-1),G=e("p",null," The website is now styled using Tailwind CSS with a customised configuration file for custom colours, sizes and breakpoints. ",-1),R=e("p",null," The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts of the website rely heavily on Vue. ",-1),q=e("p",null," All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are sent through Amazon SES, with the newsletter managed by Spatie's Mailcoach. ",-1),z=e("p",null," In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go. ",-1),E=e("p",null," I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is released, and this will also give me the opportunity to refactor parts of the website and improve code with additional things I have learnt over the years and implement additional strict code standards using PHP CS Fixer and Larastan. ",-1),M=e("p",null," The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer. ",-1),O=e("p",{class:"my-0"}," Written in Laravel using a TDD, my first major project using InertiaJS. ",-1),W=e("p",{class:"m-0"}," This website started life as a simple Laravel and Blade app with a couple of Vue components for additional functionality. ",-1),H=e("p",null," In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for styling. ",-1),Q=e("p",null," This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to using it more going forward. ",-1),U=p({__name:"Projects",setup(t){return(a,d)=>(n(),o(f,null,[r(y(_),{title:"Projects"}),r(b,null,{default:s(()=>[r(w,null,{title:s(()=>[v("Projects")]),default:s(()=>[P,r(h,{title:"Coeliac Sanctuary",url:"https://www.coeliacsanctuary.co.uk",github:"https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"},{intro:s(()=>[V,A]),default:s(()=>[D,B,J,F,N,G,R,q,z,E,M]),_:1}),r(h,{title:"This Website",url:"https://www.github.com/jpeters8889/jamie-peters.co.uk"},{intro:s(()=>[O]),default:s(()=>[W,H,Q]),_:1})]),_:1})]),_:1})],64))}});export{U as default};