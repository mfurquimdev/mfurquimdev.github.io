import{g as u,o as i,c,e as r,F as d,i as x,n as p,j as v,t as b,d as y,k as h,l as g,f,b as _,m as k}from"./app-d3664ffe.js";const q={props:{data:Array,columns:Array,filterKey:String},data(){return{sortKey:"",sortOrders:this.columns.reduce((e,n)=>(e[n]=1,e),{})}},computed:{filteredData(){const e=this.sortKey,n=this.filterKey&&this.filterKey.toLowerCase(),s=this.sortOrders[e]||1;let l=this.data;return n&&(l=l.filter(a=>Object.keys(a).some(t=>String(a[t]).toLowerCase().indexOf(n)>-1))),e&&(l=l.slice().sort((a,t)=>(a=a[e],t=t[e],(a===t?0:a>t?1:-1)*s))),l}},methods:{sortBy(e){this.sortKey=e,this.sortOrders[e]=this.sortOrders[e]*-1},capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},w={key:0},j=["onClick"],z={key:0},I=["innerHTML"],K={key:1},C={key:1};function O(e,n,s,l,a,t){return t.filteredData.length?(i(),c("table",w,[r("thead",null,[r("tr",null,[(i(!0),c(d,null,x(s.columns,o=>(i(),c("th",{onClick:m=>t.sortBy(o),class:p({active:a.sortKey==o})},[v(b(t.capitalize(o))+" ",1),r("span",{class:p(["arrow",a.sortOrders[o]>0?"asc":"dsc"])},null,2)],10,j))),256))])]),r("tbody",null,[(i(!0),c(d,null,x(t.filteredData,o=>(i(),c("tr",null,[(i(!0),c(d,null,x(s.columns,m=>(i(),c("td",null,[m=="icon"?(i(),c("div",z,[r("div",{innerHTML:o[m]},null,8,I)])):(i(),c("div",K,b(o[m]),1))]))),256))]))),256))])])):(i(),c("p",C,"No matches found."))}const B=u(q,[["render",O],["__file","/home/mfkn/projects/mfurquim/mfurquimdev.github.io/src/components/Grid.vue"]]),T=y({__name:"TheIcons",setup(e){const n=h(""),s=["type","name","icon"],l=[{name:"cpu-2",type:"device-cpu",icon:'<div i-tabler-cpu-2 class="text-4xl m-auto" />'},{name:"aspect-ratio",type:"screen",icon:'<div i-bi-aspect-ratio class="text-4xl m-auto" />'},{name:"aspect-ratio-fill",type:"screen",icon:'<div i-bi-aspect-ratio-fill class="text-4xl m-auto" />'},{name:"at",type:"at",icon:'<div i-bi-at class="text-4xl m-auto" />'},{name:"award",type:"award",icon:'<div i-bi-award class="text-4xl m-auto" />'},{name:"award-fill",type:"award",icon:'<div i-bi-award-fill class="text-4xl m-auto" />'},{name:"bezier",type:"bezier",icon:'<div i-bi-bezier class="text-4xl m-auto" />'},{name:"bezier2",type:"bezier",icon:'<div i-bi-bezier2 class="text-4xl m-auto" />'},{name:"briefcase",type:"briefcase",icon:'<div i-bi-briefcase class="text-4xl m-auto" />'},{name:"briefcase",type:"briefcase",icon:'<div i-bi-briefcase class="text-4xl m-auto" />'},{name:"briefcase-fill",type:"briefcase",icon:'<div i-bi-briefcase-fill class="text-4xl m-auto" />'},{name:"brush",type:"brush",icon:'<div i-bi-brush class="text-4xl m-auto" />'},{name:"brush-fill",type:"brush",icon:'<div i-bi-brush-fill class="text-4xl m-auto" />'},{name:"bug",type:"bug",icon:'<div i-bi-bug class="text-4xl m-auto" />'},{name:"bug-fill",type:"bug",icon:'<div i-bi-bug-fill class="text-4xl m-auto" />'},{name:"calendar",type:"calendar",icon:'<div i-bi-calendar class="text-4xl m-auto" />'},{name:"calendar-fill",type:"calendar",icon:'<div i-bi-calendar-fill class="text-4xl m-auto" />'},{name:"calendar-check",type:"calendar",icon:'<div i-bi-calendar-check class="text-4xl m-auto" />'},{name:"calendar2",type:"calendar",icon:'<div i-bi-calendar2 class="text-4xl m-auto" />'},{name:"calendar2-fill",type:"calendar",icon:'<div i-bi-calendar2-fill class="text-4xl m-auto" />'},{name:"calendar3-fill",type:"calendar",icon:'<div i-bi-calendar3-fill class="text-4xl m-auto" />'},{name:"calendar3",type:"calendar",icon:'<div i-bi-calendar3 class="text-4xl m-auto" />'},{name:"calendar4",type:"calendar",icon:'<div i-bi-calendar4 class="text-4xl m-auto" />'},{name:"card-checklist",type:"card",icon:'<div i-bi-card-checklist class="text-4xl m-auto" />'},{name:"cast",type:"cast",icon:'<div i-bi-cast class="text-4xl m-auto" />'},{name:"chat-left-text",type:"chat",icon:'<div i-bi-chat-left-text class="text-4xl m-auto" />'},{name:"chat-text",type:"chat",icon:'<div i-bi-chat-text class="text-4xl m-auto" />'},{name:"check",type:"check",icon:'<div i-bi-check class="text-4xl m-auto" />'},{name:"chevron-compact-right",type:"chevron",icon:'<div i-bi-chevron-compact-right class="text-4xl m-auto" />'},{name:"chevron-right",type:"chevron",icon:'<div i-bi-chevron-right class="text-4xl m-auto" />'},{name:"clock",type:"clock",icon:'<div i-bi-clock class="text-4xl m-auto" />'},{name:"code",type:"code",icon:'<div i-bi-code class="text-4xl m-auto" />'},{name:"code-slash",type:"code",icon:'<div i-bi-code-slash class="text-4xl m-auto" />'},{name:"code-square",type:"code",icon:'<div i-bi-code-square class="text-4xl m-auto" />'},{name:"controller",type:"device-controller",icon:'<div i-bi-controller class="text-4xl m-auto" />'},{name:"database",type:"database",icon:'<div i-bi-database class="text-4xl m-auto" />'},{name:"device-hdd",type:"device-hdd",icon:'<div i-bi-device-hdd class="text-4xl m-auto" />'},{name:"device-ssd",type:"device-ssd",icon:'<div i-bi-device-ssd class="text-4xl m-auto" />'},{name:"display",type:"device-display",icon:'<div i-bi-display class="text-4xl m-auto" />'},{name:"easel",type:"easel",icon:'<div i-bi-easel class="text-4xl m-auto" />'},{name:"easel2",type:"easel",icon:'<div i-bi-easel2 class="text-4xl m-auto" />'},{name:"envelope-at",type:"at",icon:'<div i-bi-envelope-at class="text-4xl m-auto" />'},{name:"ethernet",type:"ethernet",icon:'<div i-bi-ethernet class="text-4xl m-auto" />'},{name:"geo-alt",type:"geo",icon:'<div i-bi-geo-alt class="text-4xl m-auto" />'},{name:"git",type:"git",icon:'<div i-bi-git class="text-4xl m-auto" />'},{name:"github",type:"git",icon:'<div i-bi-github class="text-4xl m-auto" />'},{name:"globe2",type:"globe",icon:'<div i-bi-globe2 class="text-4xl m-auto" />'},{name:"gpu-card",type:"device-gpu-card",icon:'<div i-bi-gpu-card class="text-4xl m-auto" />'},{name:"hammer",type:"tool",icon:'<div i-bi-hammer class="text-4xl m-auto" />'},{name:"info",type:"info",icon:'<div i-bi-info class="text-4xl m-auto" />'},{name:"info-lg",type:"info",icon:'<div i-bi-info-lg class="text-4xl m-auto" />'},{name:"instagram",type:"social",icon:'<div i-bi-instagram class="text-4xl m-auto" />'},{name:"journal-bookmark",type:"bookmark",icon:'<div i-bi-journal-bookmark class="text-4xl m-auto" />'},{name:"journal-code",type:"code",icon:'<div i-bi-journal-code class="text-4xl m-auto" />'},{name:"joystick",type:"device-controller",icon:'<div i-bi-joystick class="text-4xl m-auto" />'},{name:"keyboard",type:"device-keyboard",icon:'<div i-bi-keyboard class="text-4xl m-auto" />'},{name:"laptop",type:"device-laptop",icon:'<div i-bi-laptop class="text-4xl m-auto" />'},{name:"link",type:"link",icon:'<div i-bi-link class="text-4xl m-auto" />'},{name:"link-45deg",type:"link",icon:'<div i-bi-link-45deg class="text-4xl m-auto" />'},{name:"linkedin",type:"social",icon:'<div i-bi-linkedin class="text-4xl m-auto" />'},{name:"memory",type:"device-memory",icon:'<div i-bi-memory class="text-4xl m-auto" />'},{name:"modem",type:"device-modem",icon:'<div i-bi-modem class="text-4xl m-auto" />'},{name:"mortarboard",type:"education",icon:'<div i-bi-mortarboard class="text-4xl m-auto" />'},{name:"mortarboard-fill",type:"education",icon:'<div i-bi-mortarboard-fill class="text-4xl m-auto" />'},{name:"motherboard",type:"device-motherboard",icon:'<div i-bi-motherboard class="text-4xl m-auto" />'},{name:"mouse",type:"device-mouse",icon:'<div i-bi-mouse class="text-4xl m-auto" />'},{name:"mouse2",type:"device-mouse",icon:'<div i-bi-mouse2 class="text-4xl m-auto" />'},{name:"music-note",type:"music",icon:'<div i-bi-music-note class="text-4xl m-auto" />'},{name:"music-note-beamed",type:"music",icon:'<div i-bi-music-note-beamed class="text-4xl m-auto" />'},{name:"nut",type:"tool",icon:'<div i-bi-nut class="text-4xl m-auto" />'},{name:"paint-bucket",type:"tool",icon:'<div i-bi-paint-bucket class="text-4xl m-auto" />'},{name:"palette",type:"color-palette",icon:'<div i-bi-palette class="text-4xl m-auto" />'},{name:"palette2",type:"color-palette2",icon:'<div i-bi-palette2 class="text-4xl m-auto" />'},{name:"paragraph",type:"paragraph",icon:'<div i-bi-paragraph class="text-4xl m-auto" />'},{name:"patch-check",type:"certification",icon:'<div i-bi-patch-check class="text-4xl m-auto" />'},{name:"pencil",type:"tool",icon:'<div i-bi-pencil class="text-4xl m-auto" />'},{name:"pencil-square",type:"tool",icon:'<div i-bi-pencil-square class="text-4xl m-auto" />'},{name:"person",type:"person",icon:'<div i-bi-person class="text-4xl m-auto" />'},{name:"person-badge",type:"person",icon:'<div i-bi-person-badge class="text-4xl m-auto" />'},{name:"person-badge-fill",type:"person",icon:'<div i-bi-person-badge-fill class="text-4xl m-auto" />'},{name:"person-circle",type:"person",icon:'<div i-bi-person-circle class="text-4xl m-auto" />'},{name:"person-fill",type:"person",icon:'<div i-bi-person-fill class="text-4xl m-auto" />'},{name:"person-square",type:"person",icon:'<div i-bi-person-square class="text-4xl m-auto" />'},{name:"person-vcard",type:"person",icon:'<div i-bi-person-vcard class="text-4xl m-auto" />'},{name:"person-vcard-fill",type:"person",icon:'<div i-bi-person-vcard-fill class="text-4xl m-auto" />'},{name:"quote",type:"quotes",icon:'<div i-bi-quote class="text-4xl m-auto" />'},{name:"regex",type:"regex",icon:'<div i-bi-regex class="text-4xl m-auto" />'},{name:"router",type:"device-router",icon:'<div i-bi-router class="text-4xl m-auto" />'},{name:"router-fill",type:"device-router",icon:'<div i-bi-router-fill class="text-4xl m-auto" />'},{name:"screwdriver",type:"tool",icon:'<div i-bi-screwdriver class="text-4xl m-auto" />'},{name:"server",type:"device-server",icon:'<div i-bi-server class="text-4xl m-auto" />'},{name:"slash",type:"slash",icon:'<div i-bi-slash class="text-4xl m-auto" />'},{name:"slash-lg",type:"slash",icon:'<div i-bi-slash-lg class="text-4xl m-auto" />'},{name:"speedometer",type:"monitoring",icon:'<div i-bi-speedometer class="text-4xl m-auto" />'},{name:"speedometer2",type:"monitoring",icon:'<div i-bi-speedometer2 class="text-4xl m-auto" />'},{name:"spotify",type:"social",icon:'<div i-bi-spotify class="text-4xl m-auto" />'},{name:"telegram",type:"social",icon:'<div i-bi-telegram class="text-4xl m-auto" />'},{name:"terminal",type:"terminal",icon:'<div i-bi-terminal class="text-4xl m-auto" />'},{name:"terminal-fill",type:"terminal",icon:'<div i-bi-terminal-fill class="text-4xl m-auto" />'},{name:"tools",type:"tool",icon:'<div i-bi-tools class="text-4xl m-auto" />'},{name:"translate",type:"language",icon:'<div i-bi-translate class="text-4xl m-auto" />'},{name:"trello",type:"tool",icon:'<div i-bi-trello class="text-4xl m-auto" />'},{name:"twitter",type:"social",icon:'<div i-bi-twitter class="text-4xl m-auto" />'},{name:"vector-pen",type:"tool",icon:'<div i-bi-vector-pen class="text-4xl m-auto" />'},{name:"wrench",type:"tool",icon:'<div i-bi-wrench class="text-4xl m-auto" />'},{name:"wrench-adjustable",type:"tool",icon:'<div i-bi-wrench-adjustable class="text-4xl m-auto" />'},{name:"x-diamond-fill",type:"pix",icon:'<div i-bi-x-diamond-fill class="text-4xl m-auto" />'},{name:"branch",type:"branch",icon:'<div i-carbon-branch class="text-4xl m-auto" />'},{name:"build-tool",type:"diagram",icon:'<div i-carbon-build-tool class="text-4xl m-auto" />'},{name:"calendar",type:"calendar",icon:'<div i-carbon-calendar class="text-4xl m-auto" />'},{name:"certificate",type:"certificate",icon:'<div i-carbon-certificate class="text-4xl m-auto" />'},{name:"chart-network",type:"diagram",icon:'<div i-carbon-chart-network class="text-4xl m-auto" />'},{name:"chart-scatter",type:"diagram",icon:'<div i-carbon-chart-scatter class="text-4xl m-auto" />'},{name:"chat",type:"chat",icon:'<div i-carbon-chat class="text-4xl m-auto" />'},{name:"chevron-right",type:"chevron",icon:'<div i-carbon-chevron-right class="text-4xl m-auto" />'},{name:"closed-caption-alt",type:"chat",icon:'<div i-carbon-closed-caption-alt class="text-4xl m-auto" />'},{name:"cloud-data-ops",type:"cloud",icon:'<div i-carbon-cloud-data-ops class="text-4xl m-auto" />'},{name:"code",type:"code",icon:'<div i-carbon-code class="text-4xl m-auto" />'},{name:"cognitive",type:"cognitive",icon:'<div i-carbon-cognitive class="text-4xl m-auto" />'},{name:"collapse-categories",type:"list",icon:'<div i-carbon-collapse-categories class="text-4xl m-auto" />'},{name:"color-palette",type:"color-palette",icon:'<div i-carbon-color-palette class="text-4xl m-auto" />'},{name:"commit",type:"commit",icon:'<div i-carbon-commit class="text-4xl m-auto" />'},{name:"communication-unified",type:"social",icon:'<div i-carbon-communication-unified class="text-4xl m-auto" />'},{name:"construction",type:"construction",icon:'<div i-carbon-construction class="text-4xl m-auto" />'},{name:"covariate",type:"machine-learning",icon:'<div i-carbon-covariate class="text-4xl m-auto" />'},{name:"credentials",type:"credentials",icon:'<div i-carbon-credentials class="text-4xl m-auto" />'},{name:"crop-growth",type:"growing",icon:'<div i-carbon-crop-growth class="text-4xl m-auto" />'},{name:"data-blob",type:"data",icon:'<div i-carbon-data-blob class="text-4xl m-auto" />'},{name:"data-diode",type:"diode",icon:'<div i-carbon-data-diode class="text-4xl m-auto" />'},{name:"data-quality-definition",type:"code",icon:'<div i-carbon-data-quality-definition class="text-4xl m-auto" />'},{name:"debug",type:"bug",icon:'<div i-carbon-debug class="text-4xl m-auto" />'},{name:"document-horizontal",type:"person",icon:'<div i-carbon-document-horizontal class="text-4xl m-auto" />'},{name:"education",type:"education",icon:'<div i-carbon-education class="text-4xl m-auto" />'},{name:"function-math",type:"function",icon:'<div i-carbon-function-math class="text-4xl m-auto" />'},{name:"game-console",type:"device-controller",icon:'<div i-carbon-game-console class="text-4xl m-auto" />'},{name:"gamification",type:"game",icon:'<div i-carbon-gamification class="text-4xl m-auto" />'},{name:"keyboard",type:"device-keyboard",icon:'<div i-carbon-keyboard class="text-4xl m-auto" />'},{name:"linux",type:"linux",icon:'<div i-carbon-linux class="text-4xl m-auto" />'},{name:"logo-github",type:"social",icon:'<div i-carbon-logo-github class="text-4xl m-auto" />'},{name:"logo-instagram",type:"social",icon:'<div i-carbon-logo-instagram class="text-4xl m-auto" />'},{name:"logo-linkedin",type:"social",icon:'<div i-carbon-logo-linkedin class="text-4xl m-auto" />'},{name:"logo-python",type:"social",icon:'<div i-carbon-logo-python class="text-4xl m-auto" />'},{name:"logo-r-script",type:"social",icon:'<div i-carbon-logo-r-script class="text-4xl m-auto" />'},{name:"logo-slack",type:"social",icon:'<div i-carbon-logo-slack class="text-4xl m-auto" />'},{name:"logo-twitter",type:"social",icon:'<div i-carbon-logo-twitter class="text-4xl m-auto" />'},{name:"logo-vue",type:"social",icon:'<div i-carbon-logo-vue class="text-4xl m-auto" />'},{name:"machine-learning-model",type:"machine-learning",icon:'<div i-carbon-machine-learning-model class="text-4xl m-auto" />'},{name:"meter-alt",type:"monitoring",icon:'<div i-carbon-meter-alt class="text-4xl m-auto" />'},{name:"microservices-1",type:"microservices",icon:'<div i-carbon-microservices-1 class="text-4xl m-auto" />'},{name:"music",type:"music",icon:'<div i-carbon-music class="text-4xl m-auto" />'},{name:"notebook",type:"notebook",icon:'<div i-carbon-notebook class="text-4xl m-auto" />'},{name:"policy",type:"education",icon:'<div i-carbon-policy class="text-4xl m-auto" />'},{name:"portfolio",type:"briefcase",icon:'<div i-carbon-portfolio class="text-4xl m-auto" />'},{name:"qq-plot",type:"machine-learning",icon:'<div i-carbon-qq-plot class="text-4xl m-auto" />'},{name:"qr-code",type:"qr-code",icon:'<div i-carbon-qr-code class="text-4xl m-auto" />'},{name:"quotes",type:"quotes",icon:'<div i-carbon-quotes class="text-4xl m-auto" />'},{name:"recommend",type:"certification",icon:'<div i-carbon-recommend class="text-4xl m-auto" />'},{name:"screen",type:"device-screen",icon:'<div i-carbon-screen class="text-4xl m-auto" />'},{name:"sprout",type:"growing",icon:'<div i-carbon-sprout class="text-4xl m-auto" />'},{name:"terminal",type:"terminal",icon:'<div i-carbon-terminal class="text-4xl m-auto" />'},{name:"time-plot",type:"clock",icon:'<div i-carbon-time-plot class="text-4xl m-auto" />'},{name:"tool-box",type:"tool",icon:'<div i-carbon-tool-box class="text-4xl m-auto" />'},{name:"tools-alt",type:"tool",icon:'<div i-carbon-tools-alt class="text-4xl m-auto" />'},{name:"user",type:"person",icon:'<div i-carbon-user class="text-4xl m-auto" />'},{name:"user-avatar",type:"person",icon:'<div i-carbon-user-avatar class="text-4xl m-auto" />'},{name:"user-avatar-filled",type:"person",icon:'<div i-carbon-user-avatar-filled class="text-4xl m-auto" />'},{name:"user-avatar-filled-alt",type:"person",icon:'<div i-carbon-user-avatar-filled-alt class="text-4xl m-auto" />'},{name:"uv-index",type:"certification",icon:'<div i-carbon-uv-index class="text-4xl m-auto" />'},{name:"uv-index-filled",type:"certification",icon:'<div i-carbon-uv-index-filled class="text-4xl m-auto" />'},{name:"value-variable",type:"value-variable",icon:'<div i-carbon-value-variable class="text-4xl m-auto" />'},{name:"vmdk-disk",type:"device-hdd",icon:'<div i-carbon-vmdk-disk class="text-4xl m-auto" />'},{name:"wikis",type:"globe",icon:'<div i-carbon-wikis class="text-4xl m-auto" />'}];return(a,t)=>{const o=B;return i(),g(o,{data:l,columns:s,"filter-key":f(n)},null,8,["filter-key"])}}}),D=u(T,[["__file","/home/mfkn/projects/mfurquim/mfurquimdev.github.io/src/components/TheIcons.vue"]]),L={class:"prose prose-sm m-auto text-left"},G="Icons",H=[{property:"og:title",content:"Icons"}],N={__name:"icons",setup(e,{expose:n}){return n({frontmatter:{title:"Icons",meta:[{property:"og:title",content:"Icons"}]}}),k({title:"Icons",meta:[{property:"og:title",content:"Icons"}]}),(a,t)=>{const o=D;return i(),c("div",L,[_(o)])}}},S=u(N,[["__file","/home/mfkn/projects/mfurquim/mfurquimdev.github.io/src/pages/icons.md"]]);export{S as default,H as meta,G as title};
