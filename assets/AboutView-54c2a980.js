var I=Object.defineProperty;var k=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var m=(e,t,a)=>(k(e,typeof t!="symbol"?t+"":t,a),a);import{d as b,r as w,c as l,F as d,a as h,n as v,b as s,u as f,e as C,o as c,p as j,f as x,_ as $,t as r,g as p,w as F,h as N,i as V,j as A}from"./index-ec449485.js";const S="/assets/carousel_oneness_fehmarn_2019-10-20-a95b269a.jpg",B="/assets/carousel_oneness_treibsand_2020-01-4bc388b1.jpg",G="/assets/carousel_oneness_klangbar_2020-02-419ed9bc.jpg",K=e=>(j("data-v-1a1c78fd"),e=e(),x(),e),L={class:"gallery"},M=["src","onClick"],P=K(()=>s("div",{class:"modal-background"},null,-1)),T={class:"modal-content"},z=["src"],D=b({__name:"ImgGallery",props:{images:null},setup(e){let t=0;const a=w(!1),_=n=>{t=n,a.value=!0},i=()=>{a.value=!1};return(n,u)=>(c(),l("div",L,[(c(!0),l(d,null,h(e.images,(y,g)=>(c(),l("div",{key:g,class:"image"},[s("img",{src:y.url,alt:"image",onClick:ds=>_(g)},null,8,M)]))),128)),a.value?(c(),l("div",{key:0,class:v(["modal",{"is-active":a.value}]),onClick:i},[P,s("div",T,[s("img",{src:e.images[f(t)].url,alt:"image"},null,8,z)]),s("button",{type:"button",class:"btn-close modal-close","aria-label":"Close",onClick:i})],2)):C("",!0)]))}});const E=$(D,[["__scopeId","data-v-1a1c78fd"]]),H="/assets/farai_emotional_01-1e180062.jpg",O="/assets/farai_guitar_01-1fb3b757.jpg",q="/assets/farai_happy_band_01-76f3f9d0.jpg",J="/assets/karsten_keys_01-f7fc032e.jpg",Q="/assets/kris_guitar_01-c68354a3.jpg",R="/assets/michi_bass_01-0d303e19.jpg",U="/assets/video_phone_band_01-4191fc22.jpg",W="/assets/oneness_01-947c4020.jpg";class o{constructor(t){m(this,"url");this.url=t}}const X=[new o(H),new o(O),new o(q),new o(J),new o(Q),new o(R),new o(U),new o(W)],Y={class:"pt-1 my-0"},Z={id:"carouselAbout",class:"carousel slide","data-bs-ride":"carousel"},ss={class:"carousel-inner"},es=["src","alt"],ts={class:"carousel-caption d-none d-md-block"},as={class:"bottom-center"},os={class:"rounded px-2 py-1 d-inline bg-dark bg-opacity-75"},ns=s("i",{class:"bi-geo-alt-fill"},null,-1),ls=N('<button class="carousel-control-prev" type="button" data-bs-target="#carouselAbout" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselAbout" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),cs={class:"p-3 mt-1 bg-light-subtle rounded-3"},is={class:"lead"},rs=s("br",null,null,-1),gs=b({__name:"AboutView",setup(e){const t=[{title:"Fehmarn",img:S},{title:"Lübeck",img:B},{title:"Hamburg",img:G}];return(a,_)=>{const i=V("i18n-t");return c(),l(d,null,[s("h3",null,r(a.$t("about.title")),1),s("div",Y,[s("div",Z,[s("div",ss,[(c(),l(d,null,h(t,(n,u)=>s("div",{class:v(["carousel-item",u===0?"active":""]),"data-bs-interval":"5000",key:n.title},[s("img",{src:n.img,class:"d-block w-100",alt:n.title},null,8,es),s("div",ts,[s("div",as,[s("h3",os,[ns,A(" "+r(n.title),1)])])])],2)),64))]),ls]),s("div",cs,[s("h1",null,r(a.$t("about.history.title")),1),s("p",is,[p(i,{keypath:"about.history.content"},{br:F(()=>[rs]),_:1})])]),p(E,{images:f(X)},null,8,["images"])])],64)}}});export{gs as default};
