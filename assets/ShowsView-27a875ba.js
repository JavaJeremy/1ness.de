var M=Object.defineProperty;var $=(r,a,c)=>a in r?M(r,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[a]=c;var o=(r,a,c)=>($(r,typeof a!="symbol"?a+"":a,c),c);import{d as F,u as V,c as _,a as s,t as h,g as k,j as z,F as y,r as B,o as x,n as N,k as T,l as P}from"./index-0e8541dd.js";const j="/assets/shows_farai_poster-7a4bc5ef.jpg",L=new Date;L.setHours(0,0,0,0);class v{constructor(a,c,n){o(this,"location");o(this,"dateExport");o(this,"timeStart");o(this,"timeEnd");o(this,"cancelled");o(this,"cancelReason");o(this,"privateEvent");o(this,"inFuture");this.location=a;const m=c.split("."),g=parseInt(m[0],10),t=parseInt(m[1],10)-1,l=parseInt(m[2],10),[e,f]=n!=null&&n.timeStart?n.timeStart.split(":"):["0","0"],i=new Date(l,t,g,parseInt(e),parseInt(f));this.dateExport=i,this.timeStart=(n==null?void 0:n.timeStart)||"",this.timeEnd=(n==null?void 0:n.timeEnd)||"",this.cancelled=(n==null?void 0:n.cancelled)||!1,this.cancelReason=(n==null?void 0:n.cancelledReason)||"",this.privateEvent=(n==null?void 0:n.privateEvent)||!1,this.inFuture=i>=L}}class E{constructor(a,c,n){o(this,"name");o(this,"address");o(this,"locationLink");this.name=a,this.locationLink=c,this.address=(n==null?void 0:n.address)||""}}const p={funambules:new E("shows.locations.funambules","https://goo.gl/maps/WfQcn4m7ChYrtskk6",{address:"An d. Obertrave 18, 23552 Lübeck"}),klangbar:new E("shows.locations.klangbar","https://g.page/Suhrhof",{address:"Weidenbaumsweg 13-15, 21029 Hamburg"}),chillaz:new E("shows.locations.chillaz","https://goo.gl/maps/FAGBaSftFJoApiTJA",{address:"Dünenweg 43, 23769 Fehmarn"}),sandgut:new E("shows.locations.sandgut","https://goo.gl/maps/jswMDMWCNhT9ik7X7",{address:"Strandallee, 23683 Scharbeutz"}),riders:new E("shows.locations.riders","https://goo.gl/maps/TV2AzJBSfkARXwTk8",{address:"Leinweberstraße 4, 23556 Lübeck"}),private:new E("shows.locations.private","")};function H(){if(navigator.userAgent.indexOf("MSIE")>-1&&navigator.userAgent.indexOf("MSIE 10")===-1){console.log("Unsupported Browser");return}const r=navigator.appVersion.indexOf("Win")!==-1?`\r
`:`
`,a=[],c=["BEGIN:VCALENDAR","PRODID:-//1ness//cal_events/NONSGML v1.0//DE","VERSION:2.0"].join(r),n=r+"END:VCALENDAR";return{events:function(){return a},calendar:function(){return c+r+a.join(r)+n},addEvent:function(m,g,t,l,e){if(typeof m>"u"||typeof g>"u"||typeof t>"u"||typeof l>"u"||typeof e>"u")return!1;const f=new Date(l),i=new Date(e),d=function(u){const S=("0000"+u.getFullYear().toString()).slice(-4),D=("00"+(u.getMonth()+1).toString()).slice(-2),A=("00"+u.getDate().toString()).slice(-2),I=("00"+u.getUTCHours().toString()).slice(-2),R=("00"+u.getMinutes().toString()).slice(-2),O=("00"+u.getMinutes().toString()).slice(-2),C="T"+I+R+O+"Z";return S+D+A+C},b=["BEGIN:VEVENT","UID:"+function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){const S=Math.random()*16|0;return(u==="x"?S:S&3|8).toString(16)})}(),"CLASS:PUBLIC","DESCRIPTION:"+g,"DTSTAMP:"+d(new Date),"DTSTART:"+d(f),"DTEND:"+d(i),"LOCATION:"+t,"SUMMARY:"+m,"TRANSP:TRANSPARENT","END:VEVENT"].join(r);return a.push(b),b},download:function(m,g){if(a.length<1)return!1;const t=c+r+a.join(r)+n;window.open("data:text/calendar;charset=utf-8,"+t)}}}const U={class:"pb-3"},G={class:"container"},W={class:"row"},J={class:"col-md order-2"},Y=["src"],X={class:"col-md order-1 order-md-3"},Z={class:"table table-hover text-start"},Q=s("th",{scope:"col",class:"text-center"},[s("i",{class:"bi-calendar2-heart-fill"})],-1),q={scope:"col"},K={scope:"col"},ee={scope:"row",class:"text-center align-middle"},te=["title","onClick"],ne=s("i",{class:"bi-download text-light",style:{"font-size":"0.9rem"}},null,-1),se=[ne],ae={class:"align-middle"},re={key:0,class:"small m-0"},ce={key:0},le=s("i",{class:"bi-clock-fill"},null,-1),oe=[le],ie={class:"align-middle"},de=["href"],ue=s("i",{class:"bi-geo-alt-fill"},null,-1),me=["href"],he=s("i",{class:"bi-geo-alt-fill"},null,-1),_e=F({__name:"ShowsView",setup(r){const{t:a,d:c}=V(),n=t=>{const l=H(),e=new Date(t.dateExport.getTime());t.timeStart===""&&(t.timeStart="8:00");const[f,i]=t.timeStart.split(":");e.setHours(parseInt(f)),e.setMinutes(parseInt(i));const d=new Date(t.dateExport.getTime());t.timeEnd===""&&(t.timeEnd="23:00");const[w,b]=t.timeEnd.split(":");d.setHours(parseInt(w)),d.setMinutes(parseInt(b));const u=e,S=d,D=`${a(t.location.name)} - ${t.location.address}`,A="Oneness - Live",I=`Auftritt von Oneness in ${a(t.location.name)} ${t.location.address} ${t.location.locationLink}`;l==null||l.addEvent(A,I,D,u.toUTCString(),S.toUTCString()),l==null||l.download("oneness-live",".ics")},m=[new v(p.klangbar,"21.04.2023"),new v(p.riders,"06.05.2023",{timeStart:"20:30"}),new v(p.private,"12.08.2023",{privateEvent:!0}),new v(p.chillaz,"08.07.2023",{timeStart:"20:00",timeEnd:"22:00"}),new v(p.chillaz,"19.08.2023",{timeStart:"20:00",timeEnd:"22:00"}),new v(p.funambules,"31.10.2023",{timeStart:"21:00",timeEnd:"23:00"})],g=(t,l)=>{let e=c(t,l);const f=(e.match(/\./g)||[]).length,i=e.indexOf(".",e.indexOf(".")+1);if(f>=3&&e.length>3){const d=e.indexOf(".",i+1);e=e.slice(0,d)+e.slice(d+1)}else e.charAt(i+5).match(/[a-zA-Z]/)&&(e=e.slice(0,i+5)+e.slice(i+5+1));return e};return(t,l)=>(x(),_(y,null,[s("div",U,[s("h3",null,h(t.$t("nav.links.shows")),1),k(" "+h(t.$t("shows.subtitle")),1)]),s("div",G,[s("div",W,[s("div",J,[s("img",{src:z(j),class:"img-fluid oneness-poster rounded-lg float-right",alt:"Oneness Live Poster"},null,8,Y)]),s("div",X,[s("table",Z,[s("thead",null,[s("tr",null,[Q,s("th",q,h(t.$t("shows.table.when")),1),s("th",K,h(t.$t("shows.table.where")),1)])]),s("tbody",null,[(x(),_(y,null,B(m,e=>s("tr",{key:e.dateExport.getTime(),class:N([e.cancelled?"bg-danger":e.inFuture?"":"text-muted"])},[s("th",ee,[!e.cancelled&&!e.privateEvent&&e.inFuture?(x(),_("button",{key:0,class:"btn btn-sm btn-primary",title:t.$t("shows.table.download"),onClick:f=>n(e)},se,8,te)):T("",!0)]),s("td",ae,[e.cancelled?(x(),_("p",re,h(t.$t("shows.cancelled"))+h(e.cancelReason&&t.$t(e.cancelReason)),1)):T("",!0),s("p",{class:"small m-0 font-monospace",style:P("textDecorationLine:"+e.cancelled?"line-through":"initial")},[k(h(g(e.dateExport,e.timeStart?"long":"short"))+" ",1),e.timeStart?(x(),_("span",ce,oe)):T("",!0)],4)]),s("td",ie,[e.cancelled||e.privateEvent?(x(),_("div",{key:0,target:"_blank",rel:"noopener noreferrer",href:e.location.locationLink,class:N(e.cancelled?"oneness-strikethrough":"")},[ue,k(" "+h(t.$t(e.location.name)),1)],10,de)):(x(),_("a",{key:1,target:"_blank",rel:"noopener noreferrer",href:e.location.locationLink},[he,k(" "+h(t.$t(e.location.name)),1)],8,me))])],2)),64))])])])])])],64))}});export{_e as default};
