import{d,c as o,a as s,t as e,F as n,r as u,b as _,w as b,e as p,f as h,o as l,n as m,g}from"./index-ad71d5a2.js";const v="/assets/carousel_oneness_fehmarn_2019-10-20-a95b269a.jpg",y="/assets/carousel_oneness_treibsand_2020-01-4bc388b1.jpg",k="/assets/carousel_oneness_klangbar_2020-02-419ed9bc.jpg",f={class:"pt-1 my-0"},x={id:"carouselAbout",class:"carousel slide","data-bs-ride":"carousel"},C={class:"carousel-inner"},A=["src","alt"],N={class:"carousel-caption d-none d-md-block"},V={class:"bottom-center"},w={class:"rounded px-2 py-1 d-inline bg-dark bg-opacity-75"},F=s("i",{class:"bi-geo-alt-fill"},null,-1),j=p('<button class="carousel-control-prev" type="button" data-bs-target="#carouselAbout" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselAbout" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),B={class:"p-3 mt-1 bg-light-subtle rounded-3"},L={class:"lead"},S=s("br",null,null,-1),D=d({__name:"AboutView",setup(T){const c=[{title:"Fehmarn",img:v},{title:"Lübeck",img:y},{title:"Hamburg",img:k}];return(a,$)=>{const i=h("i18n-t");return l(),o(n,null,[s("h3",null,e(a.$t("about.title")),1),s("div",f,[s("div",x,[s("div",C,[(l(),o(n,null,u(c,(t,r)=>s("div",{class:m(["carousel-item",r===0?"active":""]),"data-bs-interval":"5000",key:t.title},[s("img",{src:t.img,class:"d-block w-100",alt:t.title},null,8,A),s("div",N,[s("div",V,[s("h3",w,[F,g(" "+e(t.title),1)])])])],2)),64))]),j]),s("div",B,[s("h1",null,e(a.$t("about.history.title")),1),s("p",L,[_(i,{keypath:"about.history.content"},{br:b(()=>[S]),_:1})])])])],64)}}});export{D as default};
